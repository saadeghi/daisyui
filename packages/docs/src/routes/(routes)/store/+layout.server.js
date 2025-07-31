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

export async function load() {
  const yamlData = await fetchStoreData()

  return {
    tech: yamlData.tech,
    techFilters: yamlData.techFilters,
    products: yamlData.productCustomAttributes,
    futureProducts: yamlData.futureProducts,
  }
}
