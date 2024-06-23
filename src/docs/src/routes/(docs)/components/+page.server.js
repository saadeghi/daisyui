import { dirname } from "node:path"

export async function load({ fetch }) {
  const components = await Promise.all(
    Object.entries(import.meta.glob("./*/+page.svx")).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = dirname(path).split("/").pop()
      return { ...metadata, slug }
    })
  )

  return {
    components,
  }
}
