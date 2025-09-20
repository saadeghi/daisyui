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

export async function load({ params, parent }) {
  const yamlData = await fetchStoreData()
  const data = await parent()
  const product = await fetchProduct(params.productId)
  if (!product) {
    throw error(404, "Product not found")
  }

  async function md(markdown) {
    const compiledMd = await compile(markdown, {
      smartypants: false,
    })
    return compiledMd.code
  }

  return {
    products: data.products,
    product: {
      ...product,
      _key: params.productId,
      desc: product.desc && (await md(product.desc)),
      banner: product.banner && (await md(product.banner)),
    },
    tech: data.tech,
    faq: yamlData.faq,
  }
}
