import { LEMONSQUEEZY_API_KEY } from "$env/static/private"
import { productCustomAttributes, tech } from "$lib/data/store.js"

const LSParams = {
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-type": "application/vnd.api+json",
    "Authorization": `Bearer ${LEMONSQUEEZY_API_KEY}`,
  },
}

export async function load({ params }) {
  let storeInfo = {
    products: { data: [] },
    discounts: { data: [] },
  }
  const productsResponse = await fetch("https://api.lemonsqueezy.com/v1/products", LSParams)
  const discountsResponse = await fetch("https://api.lemonsqueezy.com/v1/discounts", LSParams)
  if (productsResponse.ok) {
    storeInfo.products = await productsResponse.json()

    // sort products by id
    storeInfo.products.data.sort((a, b) => {
      return parseInt(b.id) - parseInt(a.id)
    })
    // add additional product data
    storeInfo.products.data.forEach((item) => {
      const itemId = item.id
      if (productCustomAttributes[itemId]) {
        item.customattributes = productCustomAttributes[itemId]
      }
    })
  }
  if (discountsResponse.ok) {
    storeInfo.discounts = await discountsResponse.json()
    // sort discounts by id
    storeInfo.discounts.data.sort((a, b) => {
      return parseInt(b.id) - parseInt(a.id)
    })
  }
  return {
    tech,
    products: storeInfo.products,
    discounts: storeInfo.discounts,
  }
}
