import { describe, expect, spyOn, test } from "bun:test"
import {
  fetchActiveDiscount,
  getDiscountNavbarTarget,
  isDiscountApplicableToBlueprint,
  isDiscountApplicableToProduct,
} from "./storeDiscount.js"

const discountFor = (productIds) => ({
  data: {
    attributes: {
      applies_to_products: productIds,
    },
  },
})

describe("special discount product limits", () => {
  test("uses the special discount only for selected products without a normal discount fallback", async () => {
    const special = discountFor(["prod_blink_standard", "prod_blink_bundle"])
    special.data.attributes.expires_at = "2999-11-14T00:00:00.000Z"
    const normal = discountFor([])
    normal.data.attributes.expires_at = special.data.attributes.expires_at
    const fetchMock = spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(Response.json(special))
      .mockResolvedValueOnce(Response.json(normal))

    try {
      const discount = await fetchActiveDiscount("https://example.test")

      expect(fetchMock).toHaveBeenNthCalledWith(1, "https://example.test/api/discount_special.json")
      expect(fetchMock).toHaveBeenNthCalledWith(2, "https://example.test/api/discount_shorttime.json")
      expect(discount).toEqual(special)
      expect(isDiscountApplicableToProduct(discount, ["prod_blink_standard"])).toBe(true)
      expect(isDiscountApplicableToProduct(discount, ["prod_blink_bundle"])).toBe(true)
      expect(isDiscountApplicableToProduct(discount, ["prod_other_store"])).toBe(false)
      expect(isDiscountApplicableToProduct(discount, ["prod_skill"])).toBe(false)
    } finally {
      fetchMock.mockRestore()
    }
  })

  test("uses the normal discount after the special discount expires", async () => {
    const special = discountFor(["prod_blink"])
    special.data.attributes.expires_at = "2000-11-14T00:00:00.000Z"
    const normal = discountFor([])
    normal.data.attributes.expires_at = "2999-11-14T00:00:00.000Z"
    const fetchMock = spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(Response.json(special))
      .mockResolvedValueOnce(Response.json(normal))

    try {
      expect(await fetchActiveDiscount("https://example.test")).toEqual(normal)
      expect(fetchMock).toHaveBeenNthCalledWith(1, "https://example.test/api/discount_special.json")
      expect(fetchMock).toHaveBeenNthCalledWith(2, "https://example.test/api/discount_shorttime.json")
    } finally {
      fetchMock.mockRestore()
    }
  })
})

describe("discount navbar target", () => {
  test("targets Blueprint when the discount applies to a Blueprint product", () => {
    const discount = discountFor(["prod_store", "prod_4EC2CMwyCoPAeJ6GhKabZd"])

    expect(isDiscountApplicableToBlueprint(discount)).toBe(true)
    expect(getDiscountNavbarTarget(discount)).toBe("blueprint")
  })

  test("targets Templates when the discount does not apply to Blueprint", () => {
    const discount = discountFor(["prod_store"])

    expect(isDiscountApplicableToBlueprint(discount)).toBe(false)
    expect(getDiscountNavbarTarget(discount)).toBe("templates")
  })

  test("treats a discount without product restrictions as applicable to Blueprint", () => {
    expect(getDiscountNavbarTarget(discountFor([]))).toBe("blueprint")
  })

  test("has no navbar target when there is no discount", () => {
    expect(getDiscountNavbarTarget(null)).toBeNull()
  })
})
