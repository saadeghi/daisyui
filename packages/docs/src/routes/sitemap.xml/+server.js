import { error } from "@sveltejs/kit"
import * as sitemap from "super-sitemap"
import { getTags, getVideoIds, getProductIds, getComparePages } from "$lib/data/sitemap"

export const prerender = true

export const GET = async () => {
  let productIds, blogTags, videoIds, comparePages
  try {
    ;[productIds, blogTags, videoIds, comparePages] = await Promise.all([
      getProductIds(),
      getTags(),
      getVideoIds(),
      getComparePages(),
    ])
  } catch (err) {
    throw error(500, "Could not load data for param values.")
  }
  return await sitemap.response({
    origin: "https://daisyui.com",
    additionalPaths: ["/llms.txt"],
    excludeRoutePatterns: [".*\\/design$", ".*\\/accessibility$", ".*\\/checkout$"],
    paramValues: {
      "/store/[productId]": productIds,
      "/blog/tag/[tag]": blogTags,
      "/resources/videos/[id]": videoIds,
      "/compare/[item]": comparePages,
    },
  })
}
