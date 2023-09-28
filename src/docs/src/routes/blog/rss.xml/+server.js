export const prerender = true

import { dirname } from "path"

const siteTitle = "daisyUI Blog"
const siteDesc = "Updates, ideas and resources"
const siteUrl = "https://daisyui.com/blog"

const get_posts = async () => {
  let posts = await Promise.all(
    Object.entries(import.meta.glob("./../[(]posts[)]/*/+page.md")).map(
      async ([path, resolver]) => {
        const { metadata } = await resolver()
        const slug = dirname(path).split("/").pop()
        if (!metadata.published) {
          return {}
        }
        return {
          slug,
          ...metadata,
        }
      }
    )
  )
  // filter out empty objects
  posts = posts.filter((obj) => Object.keys(obj).length !== 0)

  // sort by date
  posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  return {
    posts,
  }
}

export const GET = async () => {
  const { posts: postsInfo } = await get_posts()
  const body = render(postsInfo)
  return new Response(body, {
    headers: {
      "content-type": "application/xml",
      "cache-control":
        "public, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=3600",
    },
  })
}

const render = (
  postsInfo
) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>
      <![CDATA[ ${siteTitle} ]]>
    </title>
    <description>
      <![CDATA[ ${siteDesc} ]]>
    </description>
    <link>${siteUrl}/</link>
    <lastBuildDate>${new Date()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${postsInfo
      .map(
        ({ title, desc, slug, date }) =>
          `
        <item>
          <title>
            <![CDATA[ ${title} ]]>
          </title>
          <description>
            <![CDATA[ ${desc} ]]>
          </description>
          <link>${siteUrl}/${slug}/</link>
          <guid isPermaLink="false">${siteUrl}/${slug}/</guid>
        </item>
      `
      )
      .join("")}
  </channel>
</rss>
`
