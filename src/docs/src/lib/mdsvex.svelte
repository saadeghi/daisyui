<script>
  import { page } from "$app/stores"
  import Ads from "$components/Ads.svelte"
  import ComponentFooter from "$components/ComponentFooter.svelte"
  import SEO from "$components/SEO.svelte"
  import Sponsors from "$components/Sponsors.svelte"
  import { t } from "$lib/i18n"
  export let data
  export let title
  export let desc
</script>

<SEO {title} {desc} img={`/images${$page.url.pathname.replace(/\/$/, "")}.jpg`} />

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div class="prose prose-sm md:prose-base w-full max-w-4xl flex-grow pt-10">
    {#if title}
      <h1>{@html $t(title)}</h1>
    {/if}
    {#if desc}
      <p>{@html $t(desc)}</p>
    {/if}
    <slot />
    <ComponentFooter pages={data?.pages} />
    <div class="not-prose flex justify-center xl:hidden">
      <Sponsors wrapperClasses="flex-col sm:flex-row" />
    </div>
  </div>
  <Ads slot="carbon2" />
</div>
