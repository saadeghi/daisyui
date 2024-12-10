<script>
  import { page } from "$app/stores"
  import AlternativeSidebar from "$components/AlternativeSidebar.svelte"
  import ComponentFooter from "$components/ComponentFooter.svelte"
  import SEO from "$components/SEO.svelte"
  import Sponsors from "$components/Sponsors.svelte"
  import { t } from "$lib/i18n"
  let { data, title, desc, children } = $props()
</script>

<SEO
  {title}
  {desc}
  img={`https://img.daisyui.com/images${$page.url.pathname.replace(/\/$/, "")}.webp`}
/>

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div class="prose prose-sm md:prose-base w-full max-w-4xl grow pt-10">
    {#if title}
      <h1>{@html $t(title)}</h1>
    {/if}
    {#if desc}
      <p>{@html $t(desc)}</p>
    {/if}
    {@render children?.()}
    <ComponentFooter pages={data?.pages} />
    <div class="not-prose flex justify-center xl:hidden">
      <Sponsors wrapperClasses="flex-col sm:flex-row" />
    </div>
  </div>
  <AlternativeSidebar />
</div>
