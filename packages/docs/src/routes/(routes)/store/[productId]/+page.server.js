import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { compile } from "mdsvex"
import yaml from "js-yaml"
import { error } from "@sveltejs/kit"

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

export async function load({ params, parent }) {
  const yamlData = await fetchStoreData()
  const products = await parent()
  // Convert both to strings or numbers for comparison
  const product = products.products.find((p) => String(p.id) === String(params.productId))

  if (!product) {
    throw error(404, "Product not found")
  }
  // const mdDesc = await compile(product.desc, {
  //   smartypants: false,
  // })
  // const compiledDesc = mdDesc.code

  async function md(markdown) {
    const compiledMd = await compile(markdown, {
      smartypants: false,
    })
    return compiledMd.code
  }

  return {
    products,
    product: {
      ...product,
      desc: product.desc && (await md(product.desc)),
      banner: product.banner && (await md(product.banner)),
    },
    tech: products.tech,
    faq: yamlData.faq,
  }
}
