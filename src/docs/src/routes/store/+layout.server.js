import { env } from "$env/dynamic/private"
import { productCustomAttributes, tech } from "$lib/data/store.js"

const LSParams = {
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-type": "application/vnd.api+json",
    "Authorization": `Bearer ${env.LEMONSQUEEZY_API_KEY}`,
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

    // sort
    storeInfo.products.data.sort((a, b) => {
      const idA = parseInt(a.id)
      const idB = parseInt(b.id)
      return idB - idA
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
  }
  return {
    tech,
    products: storeInfo.products,
    discounts: storeInfo.discounts,
  }
}
