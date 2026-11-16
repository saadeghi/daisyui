import { appliesToProduct } from "./discountProgram.js"

export const discountDateFormat = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}

export const blueprintProductIds = [
  "prod_5E7U1fS3URoEtdjqJr3R9d",
  "prod_7bSjj3UImBhfsYHclXQHt4",
  "prod_4GWzcIFPubIXjTBvzo9pKA",
  "prod_4EC2CMwyCoPAeJ6GhKabZd",
]

export function extractCreemProductId(url) {
  if (!url || typeof url !== "string") return null
  const match = url.match(/\/payment\/(prod_[^/?#]+)/)
  return match ? match[1] : null
}

export function getProductCreemIds(product) {
  const ids = []

  if (product?.buy_now_url) {
    const id = extractCreemProductId(product.buy_now_url)
    if (id) ids.push(id)
  }

  if (product?.packages) {
    const checkoutRow = product.packages.slice(1).find((row) => row[0] === "checkout")
    if (checkoutRow) {
      for (const url of checkoutRow.slice(1)) {
        const id = extractCreemProductId(url)
        if (id) ids.push(id)
      }
    }
  }

  return ids
}

export function isDiscountApplicableToProduct(discount, productIds) {
  return appliesToProduct(discount?.data?.attributes, productIds)
}

export function isDiscountApplicableToBlueprint(discount) {
  return isDiscountApplicableToProduct(discount, blueprintProductIds)
}

export function getDiscountNavbarTarget(discount) {
  if (!discount) return null
  return isDiscountApplicableToBlueprint(discount) ? "blueprint" : "templates"
}
