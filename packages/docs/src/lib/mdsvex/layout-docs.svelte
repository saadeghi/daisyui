<script>
  import { page } from "$app/stores"
  import AlternativeSidebar from "$components/AlternativeSidebar.svelte"
  import ComponentFooter from "$components/ComponentFooter.svelte"
  import SEO from "$components/SEO.svelte"
  import { t } from "$lib/i18n.svelte.js"
  let { data, title, desc, alert, children } = $props()
</script>

<SEO
  {title}
  {desc}
  img={`https://img.daisyui.com/images${$page.url.pathname.replace(/\/$/, "")}.webp`}
/>

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div
    class="prose prose-sm lg:prose-h1:text-5xl lg:prose-h2:text-4xl lg:prose-h3:text-3xl md:prose-base w-full max-w-4xl grow pt-10 md:text-sm"
  >
    {#if title}
      <h1>{@html $t(title)}</h1>
    {/if}
    {#if desc}
      <p>{@html $t(desc)}</p>
    {/if}
    {#if alert}
      <div class="alert alert-warning">
        {alert}
      </div>
    {/if}
    {@render children?.()}
    <ComponentFooter pages={data?.pages} />
  </div>
  <AlternativeSidebar />
</div>
