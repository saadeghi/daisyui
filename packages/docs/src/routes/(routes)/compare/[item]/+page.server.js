import yaml from "js-yaml"
import { readFileSync } from "fs"
import { error } from "@sveltejs/kit"

const yamlFile = readFileSync("src/lib/data/compare.yaml", "utf8")
const yamlData = yaml.load(yamlFile)

export function entries() {
  const compareData = yamlData
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
  const compareData = yamlData

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
