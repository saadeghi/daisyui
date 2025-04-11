import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import yaml from "js-yaml"
import { error } from "@sveltejs/kit"

async function fetchCompareData() {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/compare.yaml`)

    if (!response.ok) {
      throw new Error(`Failed to fetch compare data: ${response.status}`)
    }

    const yamlFile = await response.text()
    return yaml.load(yamlFile)
  } catch (err) {
    console.error("Error fetching compare data:", err)
    return null
  }
}

export async function entries() {
  const compareData = await fetchCompareData()
  if (!compareData?.data) {
    return []
  }

  const frameworks = Object.keys(compareData.data)
  const entries = []

  for (let i = 0; i < frameworks.length; i++) {
    for (let j = 0; j < frameworks.length; j++) {
      if (i !== j) {
        entries.push({ item: `${frameworks[i]}-vs-${frameworks[j]}` })
      }
    }
  }

  return entries
}

export async function load({ params }) {
  const compareData = await fetchCompareData()

  if (!compareData || !compareData.data || !compareData.attributeRules) {
    throw error(404, "Not found")
  }

  const [firstKey, secondKey] = params.item.split("-vs-")

  // Don't allow comparing same items
  if (firstKey === secondKey) {
    throw error(404, "Not found")
  }

  const first = { ...compareData.data[firstKey], key: firstKey }
  const second = { ...compareData.data[secondKey], key: secondKey }

  if (!first || !second) {
    throw error(404, "Not found")
  }

  const libraries = Object.entries(compareData.data).map(([key, value]) => ({
    key: key,
    name: value.name,
    logo: value.logo,
  }))

  return {
    first,
    second,
    attributeRules: compareData.attributeRules,
    libraries: libraries,
  }
}
