export const prerender = true

import { load } from "../+layout.server.js"

const siteTitle = "daisyUI Store"
const siteDesc = "Professional templates made by daisyUI"
const storeUrl = "https://daisyui.com/store/"

function convertCurrency(number) {
  const formatted = (number / 100).toFixed(2)
  return `$${formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted}`
}
const dateFormat = {
  // year: "numeric",
  month: "long",
  day: "numeric",
  // hour: "2-digit",
  // minute: "2-digit",
  // second: "2-digit",
}

export const GET = async () => {
  const data = await load({})
  // const discounts = data.discounts.data
  const discounts = []
  const body = render(discounts)
  return new Response(body, {
    headers: {
      "content-type": "application/xml",
      "cache-control":
        "public, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=3600",
    },
  })
}

const render = (discounts) => `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
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

    ${discounts
      .filter((discount) => {
        return (
          discount.attributes.status === "published" &&
          discount.attributes.is_limited_to_products === false &&
          discount.attributes.is_limited_redemptions === false &&
          discount.attributes.expires_at !== null &&
          (discount.attributes.expires_at === null ||
            new Date(discount.attributes.expires_at) > new Date()) &&
          discount.attributes.starts_at !== null &&
          (discount.attributes.starts_at === null ||
            new Date(discount.attributes.starts_at) < new Date())
        )
      })
      .map(
        (discount) =>
          `
        <item>
          <title>
            <![CDATA[ 🎁 ${discount.attributes.name} discount (valid until ${new Date(
              discount.attributes.expires_at,
            ).toLocaleString("en-GB", dateFormat)}) ]]>
          </title>
          <description>
            <![CDATA[ New discount available: Use "${
              discount.attributes.code
            }" code at checkout to get ${
              discount.attributes.amount_type === "percent"
                ? `${discount.attributes.amount}%`
                : `${convertCurrency(discount.attributes.amount)}`
            } discount. Valid until ${new Date(discount.attributes.expires_at).toLocaleString(
              "en-GB",
              dateFormat,
            )} ]]>
          </description>
          <link>${storeUrl}/</link>
          <pubDate>${new Date(discount.attributes.created_at).toUTCString()}</pubDate>
          <guid isPermaLink="false">${storeUrl}/</guid>
        </item>
      `,
      )
      .join("")}
  </channel>
</rss>
`
