import { getBlogTags } from "$lib/data/blogTags.js"

export async function load() {
  return {
    tags: await getBlogTags(),
  }
}
