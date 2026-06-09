export const discountDateFormat = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}

export function isDiscountValid(discount) {
  if (discount?.data?.attributes?.expires_at) {
    const expiresAt = new Date(discount.data.attributes.expires_at).toISOString()
    return expiresAt > new Date().toISOString()
  }
  return false
}

export async function fetchActiveDiscount(apiPath) {
  const [shorttimeDiscountResponse, specialDiscountResponse] = await Promise.all([
    fetch(`${apiPath}/api/discount_shorttime.json`),
    fetch(`${apiPath}/api/discount_special.json`),
  ])

  const shorttimeDiscount = await shorttimeDiscountResponse.json()
  const specialDiscount = await specialDiscountResponse.json()

  if (isDiscountValid(specialDiscount)) return specialDiscount
  if (isDiscountValid(shorttimeDiscount)) return shorttimeDiscount
  return null
}

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
  const appliesTo = discount?.data?.attributes?.applies_to_products
  if (!appliesTo?.length) return true
  return appliesTo.some((id) => productIds.includes(id))
}
