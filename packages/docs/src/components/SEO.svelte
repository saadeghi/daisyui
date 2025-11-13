<script>
  import { t } from "$lib/i18n.svelte.js"
  import { page } from "$app/state"
  import { langs } from "$lib/i18n.svelte.js"

  let siteData = {
    title: "daisyUI Tailwind CSS Component UI Library",
    desc: "Free Tailwind Component examples",
    card: "https://img.daisyui.com/images/default.webp",
  }

  let { formatTitle = true, title = "", desc = siteData.desc, img = siteData.card } = $props()

  function cleanDescription(str) {
    if (!str) return ""
    let text = str
    // Remove HTML tags robustly
    if (typeof window !== "undefined" && window.DOMParser) {
      // Browser: use DOMParser
      const parser = new window.DOMParser()
      const doc = parser.parseFromString(`<body>${str}</body>`, "text/html")
      text = doc.body.textContent || ""
    } else {
      // Fallback: remove tags
      text = str.replace(/<[^>]*>/g, " ")
    }
    // Decode HTML entities (works in browser)
    if (typeof window !== "undefined") {
      const el = document.createElement("textarea")
      el.innerHTML = text
      text = el.value
    } else {
      // Fallback: decode common entities
      text = text
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
    }
    // Replace newlines with space
    text = text.replace(/[\r\n]+/g, " ")
    // Collapse multiple spaces
    text = text.replace(/\s+/g, " ").trim()
    if (text.length <= 155) return text
    // Find last space before 155th char
    let cut = text.slice(0, 155)
    let lastSpace = cut.lastIndexOf(" ")
    if (lastSpace > 0) cut = cut.slice(0, lastSpace)
    return cut
  }

  let formattedTitle = $derived(
    formatTitle
      ? title
        ? `${$t(title)} — ${$t(siteData.title)}`
        : `${$t(siteData.title)}`
      : title,
  )

  const iso15924to31661 = (lang) => {
    if (lang === "zh_hans") return "zh-cn"
    if (lang === "zh_hant") return "zh-tw"
    return lang
  }

  const getCanonicalUrl = (pathname) => {
    const compareRegex = /^\/compare\/(.+)-vs-(.+)\/$/
    const match = pathname.match(compareRegex)

    if (match) {
      const [, first, second] = match
      const [smaller, larger] = [first, second].sort()
      return `https://daisyui.com/compare/${smaller}-vs-${larger}/`
    }

    return `https://daisyui.com${pathname}`
  }
</script>

<svelte:head>
  <title>{formattedTitle}</title>
  <meta name="description" content={cleanDescription(desc)} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={formattedTitle} />
  <meta name="twitter:description" content={cleanDescription(desc)} />
  <meta name="twitter:image" content={img} />
  <meta name="twitter:image:alt" content={formattedTitle} />
  <meta property="og:title" content={formattedTitle} />
  <meta property="og:description" content={cleanDescription(desc)} />
  <meta property="og:image" content={img} />
  <meta property="og:type" content="website" />
  <meta property="og:logo" content="https://img.daisyui.com/images/daisyui/daisyui-logo-192.png" />
  <meta property="og:url" content={getCanonicalUrl(page.url.pathname)} />

  <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
  <link rel="canonical" href={getCanonicalUrl(page.url.pathname)} />

  {#each langs as lang}
    <link
      rel="alternate"
      hreflang={iso15924to31661(lang)}
      href={`https://daisyui.com${page.url.pathname}?lang=${lang}`}
    />
  {/each}
</svelte:head>
