import { error } from "@sveltejs/kit"
import { dirname } from "path"

export async function load({ params }) {
  let posts = await Promise.all(
    Object.entries(import.meta.glob("./[(]posts[)]/*/+page.md")).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = dirname(path).split("/").pop()
      return {
        slug,
        ...metadata,
      }
    })
  )

  // sort by date
  posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  return {
    posts,
  }
}
