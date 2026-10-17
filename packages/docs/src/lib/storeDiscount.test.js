import { describe, expect, spyOn, test } from "bun:test"
import {
  fetchActiveDiscount,
  getDiscountNavbarTarget,
  isDiscountApplicableToBlueprint,
  isDiscountValid,
} from "./storeDiscount.js"

const discountData = (code, expiresAt) => ({
  data: { attributes: { code, expires_at: expiresAt } },
})
const shorttimeDiscount = discountData("SHORT", "9999-01-01T00:00:00Z")
const specialDiscount = discountData("SPECIAL", "9999-01-01T00:00:00Z")
const expiredDiscount = discountData("EXPIRED", "2000-01-01T00:00:00Z")
const invalidDiscount = discountData("INVALID", "not-a-date")
const shorttimeResponse = { status: 200, body: JSON.stringify(shorttimeDiscount) }
const specialResponse = { status: 200, body: JSON.stringify(specialDiscount) }
const discountApiPath = "https://discounts.example.test/docs"
const shorttimeUrl = `${discountApiPath}/api/discount_shorttime.json`
const specialUrl = `${discountApiPath}/api/discount_special.json`
const discountFailures = [
  ["network failure", { error: new TypeError("Network request failed") }],
  ["HTTP failure", { status: 503, body: JSON.stringify(specialDiscount) }],
  ["invalid JSON", { status: 200, body: "not JSON" }],
  ["invalid date", { status: 200, body: JSON.stringify(invalidDiscount) }],
  ["missing data", { status: 200, body: "{}" }],
  ["expired discount", { status: 200, body: JSON.stringify(expiredDiscount) }],
]
const discountFetchCases = [
  ["special discount has priority", shorttimeResponse, specialResponse, specialDiscount],
  ...discountFailures.flatMap(([failure, response]) => [
    [`short-time ${failure}`, response, specialResponse, specialDiscount],
    [`special ${failure}`, shorttimeResponse, response, shorttimeDiscount],
    [`both sources have ${failure}`, response, response, null],
  ]),
]

test.each([
  [shorttimeDiscount, true],
  [expiredDiscount, false],
  [invalidDiscount, false],
  [null, false],
  [{}, false],
])("discount validity handles %p", (discount, expected) => {
  expect(isDiscountValid(discount)).toBe(expected)
})

test.each(discountFetchCases)(
  "fetchActiveDiscount handles %s",
  async (_name, shorttime, special, expected) => {
    const responses = new Map([
      [shorttimeUrl, shorttime],
      [specialUrl, special],
    ])
    const fetchMock = spyOn(globalThis, "fetch").mockImplementation((url) => {
      const response = responses.get(url)
      return response.error
        ? Promise.reject(response.error)
        : Promise.resolve(new Response(response.body, { status: response.status }))
    })

    try {
      await expect(fetchActiveDiscount(discountApiPath)).resolves.toEqual(expected)
      expect(fetchMock).toHaveBeenCalledTimes(2)
      expect(fetchMock).toHaveBeenCalledWith(shorttimeUrl)
      expect(fetchMock).toHaveBeenCalledWith(specialUrl)
    } finally {
      fetchMock.mockRestore()
    }
  },
)

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
