export const prerender = true

import { load } from "../+layout.server.js"

const siteTitle = "daisyUI Store"
const siteDesc = "Professional templates made by daisyUI"
const storeUrl = "https://daisyui.com/store/"

export const GET = async () => {
  const data = await load({})
  const products = data.products
  const body = render(products)
  return new Response(body, {
    headers: {
      "content-type": "application/xml",
      "cache-control":
        "public, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=3600",
    },
  })
}

const render = (products) => `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
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
    <link>${storeUrl}/</link>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <language>en-us</language>
    <atom:link href="${storeUrl}/rss.xml" rel="self" type="application/rss+xml"/>

    ${products
      .filter((product) => {
        return product.attributes.status === "published"
      })
      .map(
        (product) =>
          `
        <item>
          <title>
            <![CDATA[ ${product.attributes.name} ]]>
          </title>
          <description>
            <![CDATA[ ${product.attributes.description} ]]>
          </description>
          <link>${product.attributes.buy_now_url}/</link>
          <pubDate>${new Date(product.attributes.created_at).toUTCString()}</pubDate>
          <guid isPermaLink="false">${product.attributes.buy_now_url}/</guid>
        </item>
      `,
      )
      .join("")}
  </channel>
</rss>
`
