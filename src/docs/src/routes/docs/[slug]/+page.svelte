<script>
  import { page } from "$app/stores"

  export let data
  const { title, desc } = data.meta
  const { content } = data

  import ComponentFooter from "@components/ComponentFooter.svelte"
  import SEO from "@components/SEO.svelte"
  import Sponsors from "@components/Sponsors.svelte"
  import { t } from "@src/lib/i18n"
</script>

<SEO {title} {desc} img={`/images${$page.url.pathname.replace(/\/$/, "")}.jpg`} />

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div class="prose w-full max-w-4xl flex-grow">
    {#if title}
      <h1>{@html $t(title)}</h1>
    {/if}
    {#if desc}
      <p>{@html $t(desc)}</p>
    {/if}
    <svelte:component this={content} />

    <ComponentFooter />

    <div class="not-prose flex justify-center xl:hidden">
      <Sponsors wrapperClasses="flex-col sm:flex-row" />
    </div>
  </div>
</div>
