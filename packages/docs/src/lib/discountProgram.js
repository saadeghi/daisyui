export const discountSources = Object.freeze([
  { type: "decremental", path: "/api/discount_decremental.json" },
  { type: "special", path: "/api/discount_special.json" },
  { type: "short-time", path: "/api/discount_shorttime.json" },
])
const scheduledStatus = "scheduled"
const activeStatuses = ["active", scheduledStatus]
const decrementalType = discountSources[0].type
const defaultDecrementalName = "Decremental discount"

export function isDiscountEnabled(discount) {
  return (
    Boolean(discount) &&
    discount.active !== false &&
    discount.enabled !== false &&
    discount.is_active !== false &&
    (discount.status == null || activeStatuses.includes(discount.status))
  )
}

export function isDiscountWindowActive(discount, timestamp) {
  if (!isDiscountEnabled(discount) || !Number.isFinite(timestamp)) return false
  const startsAt = discount.starts_at ?? discount.start_date
  const expiresAt = discount.expires_at ?? discount.expiry_date
  if (discount.status === scheduledStatus && startsAt == null) return false
  return (
    (startsAt == null || Date.parse(startsAt) <= timestamp) && timestamp < Date.parse(expiresAt)
  )
}

export function appliesToProduct(discount, productIds) {
  const appliesTo = discount?.applies_to_products
  if (appliesTo == null) return true
  if (!Array.isArray(appliesTo)) return false
  return (
    appliesTo.length === 0 ||
    productIds === undefined ||
    appliesTo.some((id) => productIds.includes(id))
  )
}

export function selectDecrementalDiscount(promotion, timestamp, productIds) {
  if (
    !Array.isArray(promotion?.discounts) ||
    promotion.created_in_creem === false ||
    !Number.isFinite(Date.parse(promotion.starts_at)) ||
    !isDiscountWindowActive(promotion, timestamp) ||
    !appliesToProduct(promotion, productIds)
  )
    return null

  for (const discount of promotion.discounts) {
    if (!discount) continue
    const start = Date.parse(discount.starts_at)
    const end = Date.parse(discount.expires_at)
    if (
      typeof discount.code === "string" &&
      discount.code.trim().length > 0 &&
      Number.isFinite(discount.percentage) &&
      discount.percentage > 0 &&
      discount.percentage <= 100 &&
      start <= timestamp &&
      isDiscountWindowActive(discount, timestamp) &&
      appliesToProduct(discount, productIds)
    ) {
      const next = promotion.discounts.find(
        (candidate) =>
          candidate &&
          isDiscountEnabled(candidate) &&
          Date.parse(candidate.starts_at) === end &&
          Date.parse(candidate.expires_at) > end &&
          end < Date.parse(promotion.expires_at) &&
          Number.isFinite(candidate.percentage) &&
          candidate.percentage > 0 &&
          candidate.percentage < discount.percentage &&
          appliesToProduct(candidate, productIds),
      )
      const previous = promotion.discounts.find(
        (candidate) =>
          candidate &&
          Date.parse(candidate.expires_at) === start &&
          Date.parse(candidate.starts_at) < start &&
          Number.isFinite(candidate.percentage) &&
          candidate.percentage > discount.percentage &&
          appliesToProduct(candidate, productIds),
      )
      return { discount, previous, next, start, end }
    }
  }
  return null
}

// Select one applicable offer. Source order defines priority for every display.
export function selectDiscountOffer(programs, timestamp, productIds) {
  for (const { type } of discountSources) {
    const source = programs?.[type]
    if (type === decrementalType) {
      const program = selectDecrementalDiscount(source, timestamp, productIds)
      if (program)
        return {
          type,
          program,
          discount: {
            data: {
              attributes: {
                name: source.name ?? defaultDecrementalName,
                ...program.discount,
                amount: program.discount.percentage,
                applies_to_products:
                  program.discount.applies_to_products ?? source.applies_to_products,
              },
            },
          },
        }
      continue
    }
    const attributes = source?.data?.attributes
    if (
      isDiscountEnabled(source) &&
      isDiscountWindowActive(attributes, timestamp) &&
      typeof attributes.code === "string" &&
      attributes.code.trim().length > 0 &&
      Number.isFinite(attributes.amount) &&
      attributes.amount > 0 &&
      appliesToProduct(attributes, productIds)
    )
      return { type, discount: source, program: null }
  }
  return null
}

// The decremental offer is displayed by the main banner, never as a second offer.
export function selectSecondaryDiscount(programs, timestamp, productIds) {
  const offer = selectDiscountOffer(programs, timestamp, productIds)
  return offer?.type !== decrementalType ? (offer?.discount ?? null) : null
}
