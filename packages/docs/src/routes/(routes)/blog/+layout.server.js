export async function load() {
  const allTags = await Promise.all(
    Object.entries(import.meta.glob("./[(]posts[)]/*/+page.md")).map(async ([_path, resolver]) => {
      const { metadata } = await resolver()
      if (!metadata.published) {
        return {}
      }
      return {
        ...metadata.tags,
      }
    }),
  )

  const tags = []

  for (const obj of allTags) {
    for (const key in obj) {
      const value = obj[key]
      if (!tags.includes(value)) {
        tags.push(value)
      }
    }
  }

  return {
    tags,
  }
}
