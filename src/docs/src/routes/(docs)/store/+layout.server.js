import { redirect } from "@sveltejs/kit"

// import { LEMONSQUEEZY_API_KEY } from "$env/static/private"
// import { productCustomAttributes, tech, techFilters, futureProducts } from "$lib/data/store.js"

// const LSParams = {
//   headers: {
//     "Accept": "application/vnd.api+json",
//     "Content-type": "application/vnd.api+json",
//     "Authorization": `Bearer ${LEMONSQUEEZY_API_KEY}`,
//   },
// }

export async function load({ params }) {
  redirect(301, "https://daisyui.com/store/")
  // const productsResponse = await fetch(
  //   "https://api.lemonsqueezy.com/v1/products?page[size]=100",
  //   LSParams
  // )
  // let sortedData
  // if (!productsResponse.ok) {
  //   sortedData = []
  // } else {
  //   const originalData = await productsResponse.json()
  //   const additionalInfoMap = new Map(productCustomAttributes.map((item) => [item.id, item]))
  //   sortedData = productCustomAttributes
  //     .map(({ id }) => {
  //       // Find the item in the original data by ID
  //       const originalItem = originalData.data.find((item) => Number.parseInt(item.id) === id)

  //       // If found, merge the original item with the additional info
  //       return originalItem ? { ...originalItem, ...additionalInfoMap.get(id) } : null
  //     })
  //     .filter((item) => item !== null) // Filter out null values
  // }
  // return {
  //   tech,
  //   techFilters,
  //   products: sortedData,
  //   futureProducts,
  //   discounts: {
  //     data: [],
  //   },
  // }
}
