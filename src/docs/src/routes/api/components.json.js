export async function get() {
  const allPostFiles = import.meta.glob("../components/*.svelte.md")
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postSlug = path.slice(path.indexOf("/components/") + 12, path.lastIndexOf(".svelte"))

      return {
        meta: metadata,
        slug: postSlug,
      }
    })
  )

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return {
    body: sortedPosts,
  }
}
