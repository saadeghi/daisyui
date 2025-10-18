import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { error } from "@sveltejs/kit"
import * as sitemap from "super-sitemap"
import yaml from "js-yaml"

export const prerender = true

const fetchProductIds = async () => {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/store.yaml`)

    if (!response.ok) {
      throw new Error(`Failed to fetch store data: ${response.status}`)
    }

    const yamlText = await response.text()
    const yamlData = yaml.load(yamlText)

    return yamlData?.productOrder?.map((id) => String(id)) ?? []
  } catch (err) {
    console.error("Error fetching or processing store data:", err)
    return []
  }
}

const fetchCompareData = async () => {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/compare.yaml`)

    if (!response.ok) {
      throw new Error(`Failed to fetch compare data: ${response.status}`)
    }

    const yamlFile = await response.text()
    const yamlData = yaml.load(yamlFile)
    return yamlData?.data ?? {}
  } catch (err) {
    console.error("Error fetching or parsing compare data:", err)
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
    const compareData = await fetchCompareData()
    const frameworks = Object.keys(compareData)

    comparePages = generateCompareSlugs(frameworks)
    alternativeLibraries = generateAlternativeSlugs(frameworks)
    productIds = await fetchProductIds()
  } catch (err) {
    throw error(500, `Could not load data for sitemap: ${err.message}`)
  }

  const excludedPaths = ["/llms.txt/"]

  // Generate sitemap response, then inject a custom <tag> before the closing </urlset>
  const sitemapResponse = await sitemap.response({
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
    processPaths: (paths) =>
      paths.map(processPath).filter((entry) => !excludedPaths.includes(entry.path)),
  })

  // Read the sitemap body text. sitemap.response returns a Response, so use text().
  let body = typeof sitemapResponse === "string" ? sitemapResponse : await sitemapResponse.text()

  // Define the custom tag to insert. Update this string as needed.
  const customContent = "<url>\n  <loc>https://daisyui.com/llms.txt</loc>\n</url>"

  // Inject the custom tag right before the closing </urlset>. If </urlset> isn't found,
  // append the tag to the end.
  if (body.includes("</urlset>")) {
    body = body.replace("</urlset>", `${customContent}</urlset>`)
  } else {
    body = body + customContent
  }

  // Preserve headers and status from the original response when returning the modified body.
  const headers =
    sitemapResponse && sitemapResponse.headers
      ? sitemapResponse.headers
      : { "Content-Type": "application/xml" }
  const status = sitemapResponse && sitemapResponse.status ? sitemapResponse.status : 200

  return new Response(body, { status, headers })
}
