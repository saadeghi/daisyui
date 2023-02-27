<script>
  import { page } from "$app/stores"
  import Ads from "@components/Ads.svelte"
  import ComponentFooter from "@components/ComponentFooter.svelte"
  import SEO from "@components/SEO.svelte"
  import Sponsors from "@components/Sponsors.svelte"
  import { t } from "@src/lib/i18n"

  export let title
  export let desc
</script>

<SEO {title} {desc} img={`/images${$page.url.pathname.replace(/\/$/, "")}.jpg`} />

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div class="prose w-full max-w-4xl flex-grow">
    {#if $page.url.pathname.replace(/\/$/, "").startsWith("/components/")}
      <!-- <Ads slot="adsense-1" /> -->
      <!-- <Ads slot="adsense-2" /> -->
      <!-- <Ads slot="adsense-3" /> -->
    {/if}
    {#if title}
      <h1>{@html $t(title)}</h1>
    {/if}
    {#if desc}
      <p>{@html $t(desc)}</p>
    {/if}
    <slot />
    {#if $page.url.pathname.replace(/\/$/, "").startsWith("/components/") || $page.url.pathname.replace(/\/$/, "").startsWith("/docs/")}
      <ComponentFooter />
    {/if}
    <div class="not-prose flex justify-center xl:hidden">
      <Sponsors <Sponsors wrapperClasses="flex-col sm:flex-row" />
    </div>
  </div>
  {#if $page.url.pathname.replace(/\/$/, "").startsWith("/components/")}
    <!-- <Ads slot="adsense-4" /> -->
    <!-- <Ads slot="adsense-5" /> -->
    <Ads slot="carbon2" />
  {/if}
</div>
