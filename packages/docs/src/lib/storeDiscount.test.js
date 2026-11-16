import { selectDiscountOffer } from "./discountProgram.js"
import { describe, expect, test } from "bun:test"
import {
  getDiscountNavbarTarget,
  isDiscountApplicableToBlueprint,
  isDiscountApplicableToProduct,
} from "./storeDiscount.js"

const discountFor = (productIds) => ({
  data: {
    attributes: {
      applies_to_products: productIds,
      code: "TEST",
      amount: 20,
    },
  },
})

describe("special discount product limits", () => {
  test("uses the special offer for eligible products and the short-time offer for other products", () => {
    const special = discountFor(["prod_blink_standard", "prod_blink_bundle"])
    special.data.attributes.expires_at = "2999-11-14T00:00:00.000Z"
    const normal = discountFor([])
    normal.data.attributes.expires_at = special.data.attributes.expires_at
    const programs = { special, "short-time": normal }
    const timestamp = Date.parse("2026-11-16T00:00:00Z")
    expect(selectDiscountOffer(programs, timestamp, ["prod_blink_standard"]).discount).toEqual(
      special,
    )
    expect(selectDiscountOffer(programs, timestamp, ["prod_other_store"]).discount).toEqual(normal)
    expect(selectDiscountOffer(programs, timestamp, ["prod_skill"]).discount).toEqual(normal)
    expect(isDiscountApplicableToProduct(special, ["prod_other_store"])).toBe(false)
  })

  test("uses the short-time offer after the special offer expires", () => {
    const special = discountFor(["prod_blink"])
    special.data.attributes.expires_at = "2000-11-14T00:00:00.000Z"
    const normal = discountFor([])
    normal.data.attributes.expires_at = "2999-11-14T00:00:00.000Z"
    expect(
      selectDiscountOffer({ special, "short-time": normal }, Date.parse("2026-11-16T00:00:00Z"))
        .discount,
    ).toEqual(normal)
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
