import { LEMONSQUEEZY_API_KEY } from "$env/static/private"
import { productCustomAttributes, tech, techFilters, futureProducts } from "$lib/data/store.js"

const LSParams = {
  headers: {
    Accept: "application/vnd.api+json",
    "Content-type": "application/vnd.api+json",
    Authorization: `Bearer ${LEMONSQUEEZY_API_KEY}`,
  },
}

export async function load({ params }) {
  const productsResponse = await fetch(
    "https://api.lemonsqueezy.com/v1/products?page[size]=100",
    LSParams,
  )
  let sortedData
  if (!productsResponse.ok) {
    sortedData = []
  } else {
    const originalData = await productsResponse.json()
    const additionalInfoMap = new Map(productCustomAttributes.map((item) => [item.id, item]))
    sortedData = productCustomAttributes
      .map(({ id }) => {
        const originalItem = originalData.data.find((item) => Number.parseInt(item.id) === id)
        return originalItem ? { ...originalItem, ...additionalInfoMap.get(id) } : null
      })
      .filter((item) => item !== null)
  }
  return {
    tech,
    techFilters,
    products: sortedData,
    futureProducts,
    discounts: {
      data: [],
    },
  }
}
