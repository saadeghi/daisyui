import { describe, expect, test } from "bun:test"
import { getDiscountNavbarTarget, isDiscountApplicableToBlueprint } from "./storeDiscount.js"

const discountFor = (productIds) => ({
  data: {
    attributes: {
      applies_to_products: productIds,
    },
  },
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
