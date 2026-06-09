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
