import yaml from "js-yaml"
import { readFileSync } from "fs"

const yamlFile = readFileSync("src/lib/data/store.yaml", "utf8")
const yamlData = yaml.load(yamlFile)

import { LEMONSQUEEZY_API_KEY } from "$env/static/private"

const LSParams = {
  headers: {
    Accept: "application/vnd.api+json",
    "Content-type": "application/vnd.api+json",
    Authorization: `Bearer ${LEMONSQUEEZY_API_KEY}`,
  },
}
export async function getTags() {
  const modules = import.meta.glob("./(routes)/blog/tag/[tag]/+page.server.js")
  let tags = new Set()

  for (const path in modules) {
    const module = await modules[path]()
    if (module && module.load) {
      try {
        const result = await module.load()
        if (result && result.params && result.params.tag) {
          tags.add(result.params.tag)
        }
      } catch (error) {
        console.error(`Error loading tags from ${path}:`, error)
      }
    }
  }
  return Array.from(tags)
}

export async function getVideoIds() {
  try {
    const response = await fetch("https://api.daisyui.com/api/youtube.json")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const videos = await response.json()
    return videos.map((video) => video.id)
  } catch (error) {
    console.error("Error fetching YouTube data:", error)
    return []
  }
}

export async function getProductIds() {
  try {
    const productsResponse = await fetch(
      "https://api.lemonsqueezy.com/v1/products?page[size]=100",
      LSParams,
    )

    if (!productsResponse.ok) {
      console.error("Error fetching product data:", productsResponse.status)
      return []
    }

    const originalData = await productsResponse.json()
    if (!originalData || !originalData.data) {
      console.warn("No product data received from API")
      return []
    }

    return originalData.data.map((product) => String(product.id)) // Extract product IDs as strings
  } catch (error) {
    console.error("Error fetching or processing product data:", error)
    return []
  }
}

export function getComparePages() {
  const yamlFile = readFileSync("src/lib/data/landings.yaml", "utf8")
  const yamlData = yaml.load(yamlFile)

  if (!yamlData.compare?.data) {
    return []
  }

  const frameworks = Object.keys(yamlData.compare.data)
  const comparePages = []

  for (let i = 0; i < frameworks.length; i++) {
    for (let j = i + 1; j < frameworks.length; j++) {
      comparePages.push(`${frameworks[i]}-vs-${frameworks[j]}`)
    }
  }

  return comparePages
}
