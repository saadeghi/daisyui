import { browser } from "$app/environment"
import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { derived, readable } from "svelte/store"
import { discountSources, selectDiscountOffer, selectSecondaryDiscount } from "./discountProgram.js"

const tickMilliseconds = 1000
const requestTimeoutMilliseconds = 10000
const initialState = { ready: false, now: 0, programs: {}, activeOffer: null }

// Share all sources and one clock. Re-select on each tick, including at boundaries.
export const discountProgram = readable(initialState, (set) => {
  if (!browser) return
  let programs = {}
  let ready = false
  let disposed = false
  const controller = new AbortController()
  const publish = () => {
    if (disposed) return
    const now = Date.now()
    set({ ready, now, programs, activeOffer: ready ? selectDiscountOffer(programs, now) : null })
  }
  publish()
  const timer = setInterval(publish, tickMilliseconds)
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMilliseconds)

  Promise.all(
    discountSources.map(async ({ type, path }) => {
      try {
        const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}${path}`, {
          signal: controller.signal,
        })
        return [type, response.ok ? await response.json() : null]
      } catch {
        // One unavailable source must not block the next valid offer.
        return [type, null]
      }
    }),
  ).then((entries) => {
    programs = Object.fromEntries(entries)
    ready = true
    clearTimeout(timeout)
    publish()
  })

  return () => {
    disposed = true
    controller.abort()
    clearTimeout(timeout)
    clearInterval(timer)
  }
})

// Do not show a lower-priority offer while the source requests are pending.
export const secondaryDiscount = derived(discountProgram, ({ ready, programs, now }) =>
  ready ? selectSecondaryDiscount(programs, now) : null,
)
