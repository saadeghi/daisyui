export async function load({ params }) {
  let allTags = await Promise.all(
    Object.entries(import.meta.glob("./[(]posts[)]/*/+page.md")).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      if (!metadata.published) {
        return {}
      }
      return {
        ...metadata.tags,
      }
    })
  )

  const tags = []

  allTags.forEach((obj) => {
    for (const key in obj) {
      const value = obj[key]
      if (!tags.includes(value)) {
        tags.push(value)
      }
    }
  })

  return {
    tags,
  }
}
