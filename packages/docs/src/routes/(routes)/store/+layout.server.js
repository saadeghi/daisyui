import yaml from "js-yaml"
import { readFileSync } from "fs"

const yamlFile = readFileSync("src/lib/data/store.yaml", "utf8")
const yamlData = yaml.load(yamlFile)

import { LEMONSQUEEZY_API_KEY } from "$env/static/private"

const LSParams = {
  headers: {
    Accept: "application/vnd.api+json",
    "Content-type": "application/vnd.api+json",
    Authorization: `Bearer ${LEMONSQUEEZY_API_KEY}`,
  },
}

export async function load() {
  const productsResponse = await fetch(
    "https://api.lemonsqueezy.com/v1/products?page[size]=100",
    LSParams,
  )
  let sortedData
  if (!productsResponse.ok) {
    sortedData = []
  } else {
    const originalData = await productsResponse.json()
    const additionalInfoMap = new Map(
      yamlData.productCustomAttributes.map((item) => [item.id, item]),
    )
    sortedData = yamlData.productCustomAttributes
      .map(({ id }) => {
        const originalItem = originalData.data.find((item) => Number.parseInt(item.id) === id)
        return originalItem ? { ...originalItem, ...additionalInfoMap.get(id) } : null
      })
      .filter((item) => item !== null)
  }
  return {
    tech: yamlData.tech,
    techFilters: yamlData.techFilters,
    products: sortedData,
    futureProducts: yamlData.futureProducts,
    discounts: {
      data: [],
    },
  }
}
