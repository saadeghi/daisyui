export const prerender = true

import { dirname } from "node:path"

const siteTitle = "daisyUI Blog"
const siteDesc = "Updates, ideas and resources"
const siteUrl = "https://daisyui.com"
const blogUrl = "https://daisyui.com/blog"

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
      },
    ),
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

const render = (postsInfo) => `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
xmlns:content="http://purl.org/rss/1.0/modules/content/"
xmlns:wfw="http://wellformedweb.org/CommentAPI/"
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:atom="http://www.w3.org/2005/Atom"
xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
xmlns:georss="http://www.georss.org/georss" xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#" xmlns:media="http://search.yahoo.com/mrss/"
>
  <channel>
    <title>
      <![CDATA[ ${siteTitle} ]]>
    </title>
    <description>
      <![CDATA[ ${siteDesc} ]]>
    </description>
    <link>${blogUrl}/</link>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <language>en-us</language>
    <atom:link href="${blogUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${postsInfo
      .map(
        ({ title, desc, slug, date, thumbnail }) =>
          `
        <item>
          <title>
            <![CDATA[ ${title} ]]>
          </title>
          <description>
            <![CDATA[ ${desc} ]]>
          </description>
          <link>${blogUrl}/${slug}/</link>
          <pubDate>${new Date(date).toUTCString()}</pubDate>
          <image>${siteUrl}${thumbnail}</image>
          <image>${siteUrl}${thumbnail}</image>
          <media:content url="${siteUrl}${thumbnail}" medium="image" type="image/jpg" />
          <enclosure url="${siteUrl}${thumbnail}" type="image/jpeg" />
          <guid isPermaLink="false">${blogUrl}/${slug}/</guid>
        </item>
      `,
      )
      .join("")}
  </channel>
</rss>
`
