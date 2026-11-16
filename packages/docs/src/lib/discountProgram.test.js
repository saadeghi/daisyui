import { describe, expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { runInNewContext } from "node:vm"
import { derived, readable } from "svelte/store"
import {
  discountSources,
  selectDecrementalDiscount,
  selectDiscountOffer,
  selectSecondaryDiscount,
} from "./discountProgram.js"

const day = 86400000
const start = Date.parse("2026-11-16T00:00:00.000Z")
const promotion = {
  created_in_creem: true,
  starts_at: new Date(start).toISOString(),
  expires_at: new Date(start + 15 * day).toISOString(),
  discounts: Array.from({ length: 15 }, (_, index) => ({
    code: `CODE${index}`,
    percentage: 75 - index * 5,
    starts_at: new Date(start + index * day).toISOString(),
    expires_at: new Date(start + (index + 1) * day).toISOString(),
  })),
}
const special = {
  data: {
    attributes: {
      code: "SPECIAL",
      amount: 30,
      starts_at: new Date(start - day).toISOString(),
      expires_at: new Date(start + 16 * day).toISOString(),
    },
  },
}
const shortTime = {
  data: {
    attributes: {
      code: "SHORT",
      amount: 20,
      starts_at: new Date(start - day).toISOString(),
      expires_at: new Date(start + 17 * day).toISOString(),
    },
  },
}
const programs = { decremental: promotion, special, "short-time": shortTime }
// Supply framework imports and fake timers without changing store logic.
const storeSource = readFileSync(new URL("./discountProgramStore.js", import.meta.url), "utf8")
  .replace(/^import [\s\S]*? from "[^"\n]+"\n/gm, "")
  .replace(/export const /g, "const ")
  .concat("\n;({ discountProgram, secondaryDiscount })")
const apiPath = "https://example.test"
const imports = {
  readable,
  derived,
  discountSources,
  selectDiscountOffer,
  selectSecondaryDiscount,
  AbortController,
}

describe("decremental discount and offer priority", () => {
  test("uses exact UTC boundaries and keeps adjacent levels", () => {
    expect(selectDecrementalDiscount(promotion, start - 1)).toBeNull()
    for (let index = 0; index < promotion.discounts.length; index++) {
      const active = selectDecrementalDiscount(promotion, start + index * day)
      expect(active.discount).toEqual(promotion.discounts[index])
      expect(active.previous).toEqual(promotion.discounts[index - 1])
      expect(active.next).toEqual(promotion.discounts[index + 1])
      expect(selectDecrementalDiscount(promotion, start + (index + 1) * day - 1).discount).toEqual(
        promotion.discounts[index],
      )
    }
    expect(selectDecrementalDiscount(promotion, start + 15 * day)).toBeNull()
  })

  test("selects decremental, special, short-time, then nothing as offers expire", () => {
    expect(selectDiscountOffer(programs, start).type).toBe("decremental")
    expect(selectSecondaryDiscount(programs, start)).toBeNull()
    expect(selectDiscountOffer(programs, start + 15 * day).type).toBe("special")
    expect(selectDiscountOffer(programs, start + 16 * day).type).toBe("short-time")
    expect(selectDiscountOffer(programs, start + 17 * day)).toBeNull()
  })

  test("skips inactive, future, preview, missing and malformed programs", () => {
    const variants = [
      null,
      {},
      { ...promotion, active: false },
      { ...promotion, enabled: false },
      { ...promotion, status: "inactive" },
      { ...promotion, status: "draft" },
      { ...promotion, created_in_creem: false },
      { ...promotion, starts_at: new Date(start + day).toISOString() },
      { ...promotion, starts_at: "invalid" },
      { ...promotion, discounts: [null, {}] },
    ]
    for (const decremental of variants) {
      expect(selectDiscountOffer({ ...programs, decremental }, start).type).toBe("special")
    }
    for (const fields of [
      { active: false },
      { enabled: false },
      { is_active: false },
      { status: "expired" },
      { starts_at: new Date(start + day).toISOString() },
      { expires_at: new Date(start).toISOString() },
      { starts_at: "invalid" },
      { code: "" },
      { amount: 0 },
    ]) {
      const inactive = { data: { attributes: { ...special.data.attributes, ...fields } } }
      expect(selectDiscountOffer({ special: inactive, "short-time": shortTime }, start).type).toBe(
        "short-time",
      )
    }
    expect(
      selectDiscountOffer(
        {
          special: {
            data: {
              attributes: { ...special.data.attributes, status: "scheduled", starts_at: undefined },
            },
          },
        },
        start,
      ),
    ).toBeNull()
    expect(
      selectDiscountOffer(
        { special: { data: { attributes: { ...special.data.attributes, status: "scheduled" } } } },
        start,
      ).type,
    ).toBe("special")
    expect(selectDiscountOffer({}, start)).toBeNull()
    expect(selectDiscountOffer({ special: { ...special, active: false } }, start)).toBeNull()
  })

  test("falls back during a missing or inactive decremental level", () => {
    const inactiveLevel = { ...promotion.discounts[0], active: false }
    expect(
      selectDiscountOffer(
        { ...programs, decremental: { ...promotion, discounts: [inactiveLevel] } },
        start,
      ).type,
    ).toBe("special")
    expect(
      selectDiscountOffer(
        { ...programs, decremental: { ...promotion, discounts: promotion.discounts.slice(1) } },
        start,
      ).type,
    ).toBe("special")
  })

  test("selects only one applicable program per product", () => {
    const scoped = {
      decremental: { ...promotion, applies_to_products: ["product_a"] },
      special: {
        data: { attributes: { ...special.data.attributes, applies_to_products: ["product_b"] } },
      },
      "short-time": shortTime,
    }
    expect(selectDiscountOffer(scoped, start, ["product_a"]).type).toBe("decremental")
    expect(selectSecondaryDiscount(scoped, start, ["product_a"])).toBeNull()
    expect(selectDiscountOffer(scoped, start, ["product_b"]).type).toBe("special")
    expect(selectDiscountOffer(scoped, start, ["product_c"]).type).toBe("short-time")
    expect(selectDiscountOffer({ special: scoped.special }, start, ["product_c"])).toBeNull()
  })

  test("shares requests and automatically changes the visible offer without a reload", async () => {
    let timestamp = start - 1
    let tick
    const complete = new Map()
    const requested = []
    const signals = []
    let cleared = false
    const stores = runInNewContext(storeSource, {
      ...imports,
      browser: true,
      PUBLIC_DAISYUI_API_PATH: apiPath,
      Date: { now: () => timestamp },
      setInterval: (callback) => {
        tick = callback
        return 1
      },
      clearInterval: () => {
        cleared = true
      },
      setTimeout: () => 2,
      clearTimeout: () => {},
      fetch: (url, options) => {
        requested.push(url)
        signals.push(options.signal)
        return new Promise((resolve) => complete.set(url, resolve))
      },
    })
    let visible
    let state
    const stopOffers = stores.secondaryDiscount.subscribe((value) => {
      visible = value
    })
    const stopBanner = stores.discountProgram.subscribe((value) => {
      state = value
    })
    try {
      expect(requested).toEqual(discountSources.map((source) => `${apiPath}${source.path}`))
      expect(visible).toBeNull()
      for (const source of discountSources.slice(1))
        complete.get(`${apiPath}${source.path}`)({
          ok: true,
          json: async () => programs[source.type],
        })
      for (let step = 0; step < 12; step++) await Promise.resolve()
      expect(visible).toBeNull()
      complete.get(`${apiPath}${discountSources[0].path}`)({
        ok: true,
        json: async () => promotion,
      })
      for (let step = 0; step < 12; step++) await Promise.resolve()
      expect(visible).toEqual(special)
      timestamp = start
      tick()
      expect(visible).toBeNull()
      expect(state.activeOffer.type).toBe("decremental")
      timestamp = start + day
      tick()
      expect(state.activeOffer.program.discount.percentage).toBe(70)
      timestamp = start + 15 * day
      tick()
      expect(visible).toEqual(special)
      timestamp = start + 16 * day
      tick()
      expect(visible).toEqual(shortTime)
      timestamp = start + 17 * day
      tick()
      expect(visible).toBeNull()
      expect(state.activeOffer).toBeNull()
    } finally {
      stopOffers()
      stopBanner()
    }
    expect(signals.every((signal) => signal.aborted)).toBe(true)
    expect(cleared).toBe(true)
  })

  test("failed requests do not block the next valid source", async () => {
    const stores = runInNewContext(storeSource, {
      ...imports,
      browser: true,
      PUBLIC_DAISYUI_API_PATH: apiPath,
      Date: { now: () => start },
      setInterval: () => 1,
      clearInterval: () => {},
      setTimeout: () => 2,
      clearTimeout: () => {},
      fetch: async (url) => {
        if (url.endsWith(discountSources[0].path)) throw new Error("Unavailable")
        if (url.endsWith(discountSources[1].path)) return { ok: false }
        return { ok: true, json: async () => shortTime }
      },
    })
    let visible
    const stop = stores.secondaryDiscount.subscribe((value) => {
      visible = value
    })
    try {
      for (let step = 0; step < 12; step++) await Promise.resolve()
      expect(visible).toEqual(shortTime)
    } finally {
      stop()
    }
  })

  test("does not fetch or show stale offers during server rendering", () => {
    const stores = runInNewContext(storeSource, {
      ...imports,
      browser: false,
      PUBLIC_DAISYUI_API_PATH: apiPath,
      fetch: () => {
        throw new Error("Unexpected server request")
      },
    })
    let visible
    const stop = stores.secondaryDiscount.subscribe((value) => {
      visible = value
    })
    expect(visible).toBeNull()
    stop()
  })
})
