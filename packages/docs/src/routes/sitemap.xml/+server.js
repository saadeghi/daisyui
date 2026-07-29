import { error } from "@sveltejs/kit"
import * as sitemap from "super-sitemap/sveltekit"
import { codingTools } from "$lib/data/codingTools.js"
import { getComparisonSitemapData } from "$lib/server/content/comparisons.js"
import { getSkillProductIds } from "$lib/server/content/skills.js"
import { getStoreProductIds } from "$lib/server/content/store.js"

export const prerender = true

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
  let skillIds = []
  let comparePages = []
  let alternativeLibraries = []
  let skillPages = []

  try {
    const comparisonData = await getComparisonSitemapData()

    comparePages = comparisonData.comparePages
    alternativeLibraries = comparisonData.alternativeLibraries
    productIds = await getStoreProductIds()
    skillIds = await getSkillProductIds()
    skillPages = codingTools.map((editor) => editor.slug)
  } catch (err) {
    throw error(500, `Could not load data for sitemap: ${err.message}`)
  }

  const excludedPaths = ["/llms.txt/"]

  // Generate sitemap response, then inject a custom <tag> before the closing </urlset>
  const sitemapResponse = await sitemap.response({
    origin: "https://daisyui.com",
    additionalPaths: ["/llms.txt"],
    excludeRoutePatterns: [
      /\/design$/,
      /\/accessibility$/,
      /\/checkout$/,
      /\/blog\/tag\//,
      /\/resources\/videos\//,
      /^\/pages/,
    ],
    paramValues: {
      "/store/[productId]": productIds,
      "/compare/[item]": comparePages,
      "/alternative/[library]": alternativeLibraries,
      "/docs/skill/[slug]": skillPages,
      "/skills/[productId]": skillIds,
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
