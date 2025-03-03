import yaml from "js-yaml"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

import { error } from "@sveltejs/kit"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const yamlFile = readFileSync(resolve(__dirname, "../../../../lib/data/store.yaml"), "utf8")
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
