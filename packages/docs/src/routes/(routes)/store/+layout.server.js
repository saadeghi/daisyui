import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { LEMONSQUEEZY_API_KEY } from "$env/static/private"
import yaml from "js-yaml"

const LSParams = {
  headers: {
    Accept: "application/vnd.api+json",
    "Content-type": "application/vnd.api+json",
    Authorization: `Bearer ${LEMONSQUEEZY_API_KEY}`,
  },
}

const fetchStoreData = async () => {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/store.yaml`)

    if (!response.ok) {
      throw new Error(`Failed to fetch store data: ${response.status}`)
    }

    const yamlText = await response.text()
    return yaml.load(yamlText)
  } catch (e) {
    console.error(`Error loading or parsing YAML`, e)
    throw error(500, "Server configuration error: Could not load data")
  }
}

export async function load() {
  const yamlData = await fetchStoreData()

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
  }
}
