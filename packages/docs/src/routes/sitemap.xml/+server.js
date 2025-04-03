import { error } from "@sveltejs/kit"
import * as sitemap from "super-sitemap"
import { getTags, getVideoIds, getProductIds } from "$lib/data/sitemap"

export const prerender = true

export const GET = async () => {
  let productIds
  let blogTags
  let videoIds
  try {
    ;[productIds, blogTags, videoIds] = await Promise.all([
      getProductIds(),
      getTags(),
      getVideoIds(),
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
    },
  })
}
