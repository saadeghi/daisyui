import yaml from "js-yaml"
import { readFileSync } from "fs"
import { error } from "@sveltejs/kit"

const yamlFile = readFileSync("src/lib/data/landings.yaml", "utf8")
const yamlData = yaml.load(yamlFile)

export function entries() {
  const compareData = yamlData.compare
  if (!compareData?.data) {
    return []
  }

  const frameworks = Object.keys(compareData.data).filter((key) => key !== "daisyui")
  return frameworks.map((framework) => ({
    item: `${framework}-vs-daisyui`,
  }))
}

export async function load({ params }) {
  const compareData = yamlData.compare

  if (!compareData || !compareData.data || !compareData.attributeRules) {
    throw error(404, "Not found")
  }

  const [firstKey, secondKey] = params.item.split("-vs-")

  // Don't allow comparing same items
  if (firstKey === secondKey) {
    throw error(404, "Not found")
  }

  // Ensure daisyUI is always second
  if (secondKey !== "daisyui") {
    throw error(404, "Not found")
  }

  const first = compareData.data[firstKey]
  const second = compareData.data[secondKey]

  if (!first || !second) {
    throw error(404, "Not found")
  }

  return {
    first,
    second,
    attributeRules: compareData.attributeRules,
  }
}
