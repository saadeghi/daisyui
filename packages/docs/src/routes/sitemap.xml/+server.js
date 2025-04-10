import { error } from "@sveltejs/kit"
import * as sitemap from "super-sitemap"
import yaml from "js-yaml"
import { readFileSync } from "fs"
import { LEMONSQUEEZY_API_KEY } from "$env/static/private"

export const prerender = true

const fetchProductIds = async (apiKey) => {
  if (!apiKey) {
    console.warn("LEMONSQUEEZY_API_KEY is not set. Skipping product fetch.")
    return []
  }
  const params = {
    headers: {
      Accept: "application/vnd.api+json",
      "Content-type": "application/vnd.api+json",
      Authorization: `Bearer ${apiKey}`,
    },
  }

  try {
    const response = await fetch("https://api.lemonsqueezy.com/v1/products?page[size]=100", params)

    if (!response.ok) {
      console.error(
        "Error fetching Lemon Squeezy product data:",
        response.status,
        await response.text().catch(() => ""),
      )
      return []
    }

    const originalData = await response.json()
    return originalData?.data?.map((product) => String(product.id)) ?? []
  } catch (err) {
    console.error("Error fetching or processing Lemon Squeezy product data:", err)
    return []
  }
}

const loadCompareData = (filePath) => {
  try {
    const yamlFile = readFileSync(filePath, "utf8")
    const yamlData = yaml.load(yamlFile)
    return yamlData?.data ?? {}
  } catch (err) {
    console.error(`Error reading or parsing YAML file at ${filePath}:`, err)
    return {}
  }
}

const generateCompareSlugs = (frameworks = []) =>
  frameworks.flatMap((f1) => frameworks.filter((f2) => f1 !== f2).map((f2) => `${f1}-vs-${f2}`))

const generateAlternativeSlugs = (frameworks = []) => frameworks.filter((key) => key !== "daisyui")

const processPath = (entry) => {
  const updatedEntry = { ...entry, path: entry.path === "/" ? entry.path : `${entry.path}/` }

  if (updatedEntry.alternates) {
    updatedEntry.alternates = updatedEntry.alternates.map((alt) => ({
      ...alt,
      path: alt.path === "/" ? alt.path : `${alt.path}/`,
    }))
  }
  return updatedEntry
}

export const GET = async () => {
  let productIds = []
  let comparePages = []
  let alternativeLibraries = []

  try {
    const compareData = loadCompareData("src/lib/data/compare.yaml")
    const frameworks = Object.keys(compareData)

    comparePages = generateCompareSlugs(frameworks)
    alternativeLibraries = generateAlternativeSlugs(frameworks)
    productIds = await fetchProductIds(LEMONSQUEEZY_API_KEY)
  } catch (err) {
    throw error(500, `Could not load data for sitemap: ${err.message}`)
  }

  return await sitemap.response({
    origin: "https://daisyui.com",
    additionalPaths: ["/llms.txt"],
    excludeRoutePatterns: [
      ".*\\/design$",
      ".*\\/accessibility$",
      ".*\\/checkout$",
      "/blog/tag/",
      "/resources/videos/",
    ],
    paramValues: {
      "/store/[productId]": productIds,
      "/compare/[item]": comparePages,
      "/alternative/[library]": alternativeLibraries,
    },
    processPaths: (paths) => paths.map(processPath),
  })
}
