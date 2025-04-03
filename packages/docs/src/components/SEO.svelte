<script>
  import { t } from "$lib/i18n.svelte.js"
  import { page } from "$app/stores"
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

  const removeHashFromUrl = (url) => {
    if (typeof url === "string" && url.includes("#")) {
      return url.split("#")[0]
    }
    return url
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

  {#each langs as lang}
    <link
      rel="alternate"
      hreflang={iso15924to31661(lang)}
      href={`${removeHashFromUrl($page.url)}?lang=${lang}`}
    />
  {/each}
</svelte:head>
