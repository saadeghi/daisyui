import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { error } from "@sveltejs/kit"
import yaml from "js-yaml"

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

const fetchProduct = async (id) => {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/store/${id}.yaml`)
    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.status}`)
    }
    const yamlText = await response.text()
    return yaml.load(yamlText)
  } catch (e) {
    console.error(`Error loading product ${id}`, e)
    return null
  }
}

export async function load() {
  const yamlData = await fetchStoreData()
  const productOrder = yamlData.productOrder || []
  // Attach the YAML file name as _key to each product
  const products = (
    await Promise.all(
      productOrder.map(async (id) => {
        const product = await fetchProduct(id)
        return product ? { ...product, _key: id } : null
      }),
    )
  ).filter(Boolean)
  return {
    tech: yamlData.tech,
    techFilters: yamlData.techFilters,
    products,
    futureProducts: yamlData.futureProducts,
  }
}
