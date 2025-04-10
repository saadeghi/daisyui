<script>
  import { t } from "$lib/i18n.svelte.js"
  import { page } from "$app/state"
  import { langs } from "$lib/i18n.svelte.js"

  let siteData = {
    title: "Tailwind CSS Components ( version 5 update is here )",
    desc: "Free Tailwind Components",
    card: "https://img.daisyui.com/images/default.webp",
  }
  let { formatTitle = true, title = "", desc = siteData.desc, img = siteData.card } = $props()

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
  <meta name="description" content={desc} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={formattedTitle} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={img} />
  <meta name="twitter:image:alt" content={formattedTitle} />
  <meta property="og:title" content={formattedTitle} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={img} />

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
