export const discountDateFormat = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}

const blueprintProductIds = [
  "prod_5E7U1fS3URoEtdjqJr3R9d",
  "prod_7bSjj3UImBhfsYHclXQHt4",
  "prod_4GWzcIFPubIXjTBvzo9pKA",
  "prod_4EC2CMwyCoPAeJ6GhKabZd",
]

export function isDiscountValid(discount) {
  if (discount?.data?.attributes?.expires_at) {
    const expiresAt = new Date(discount.data.attributes.expires_at).getTime()
    return expiresAt > Date.now()
  }
  return false
}

export async function fetchActiveDiscount(apiPath) {
  const responses = await Promise.allSettled([
    fetch(`${apiPath}/api/discount_special.json`),
    fetch(`${apiPath}/api/discount_shorttime.json`),
  ])

  for (const result of responses) {
    if (result.status !== "fulfilled" || !result.value.ok) continue

    try {
      const discount = await result.value.json()
      if (isDiscountValid(discount)) return discount
    } catch {
      // Skip an invalid optional response and try the next discount.
      continue
    }
  }

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

export function isDiscountApplicableToBlueprint(discount) {
  return isDiscountApplicableToProduct(discount, blueprintProductIds)
}

export function getDiscountNavbarTarget(discount) {
  if (!discount) return null
  return isDiscountApplicableToBlueprint(discount) ? "blueprint" : "templates"
}
