const postModules = import.meta.glob("../../routes/[(]routes[)]/blog/[(]posts[)]/*/+page.md")

export async function getBlogTags() {
  const allTags = await Promise.all(
    Object.entries(postModules).map(async ([_path, resolver]) => {
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
      if (value && !tags.includes(value)) {
        tags.push(value)
      }
    }
  }

  return tags
}

export const getBlogTagSlug = (tag) => tag.replace(/ /g, "-").toLowerCase()

export async function getBlogSidebarPages() {
  const tags = await getBlogTags()

  return [
    {
      name: "Blog",
      href: "/blog/",
      items: [
        {
          name: "All posts",
          href: "/blog/",
          exact: true,
        },
        {},
        ...tags.map((tag) => ({
          name: tag,
          href: `/blog/tag/${getBlogTagSlug(tag)}/`,
        })),
        {},
        {
          name: "RSS",
          href: "/blog/rss.xml",
          target: "blank",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-warning size-5"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
        },
      ],
    },
  ]
}
