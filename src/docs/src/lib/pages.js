import { basename } from "path"

export const getPages = async () => {
  const components = await Promise.all(
    Object.entries(import.meta.glob("../markdown/components/*.svelte.md")).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = basename(path).split(".")[0]
      return { ...metadata, slug }
    })
  )
  const docs = await Promise.all(
    Object.entries(import.meta.glob("../markdown/docs/*.svelte.md")).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = basename(path).split(".")[0]
      return { ...metadata, slug }
    })
  )

  return {
    docs,
    components,
  }
}
