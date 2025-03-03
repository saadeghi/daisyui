import yaml from "js-yaml"
import { readFileSync } from "fs"

import { error } from "@sveltejs/kit"

const yamlFile = readFileSync("src/lib/data/store.yaml", "utf8")
const yamlData = yaml.load(yamlFile)

export async function load({ params, parent }) {
  const products = await parent()
  // Convert both to strings or numbers for comparison
  const product = products.products.find((p) => String(p.id) === String(params.productId))

  if (!product) {
    throw error(404, "Product not found")
  }

  return {
    products,
    product,
    tech: products.tech,
    faq: yamlData.faq,
  }
}
