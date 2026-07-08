<script>
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import AlternativeSidebar from "$components/AlternativeSidebar.svelte"
  import ComponentFooter from "$components/ComponentFooter.svelte"
  import SEO from "$components/SEO.svelte"
  import { t } from "$lib/i18n.svelte.js"
  let { data, title, desc, alert, dir, seo = true, componentfooter = true, children } = $props()

  onMount(() => {
    const handleClick = async (event) => {
      const button = event.target.closest("button[data-copy-code]")
      if (!button) return

      const tooltip = button.closest(".tooltip")
      const code = decodeURIComponent(button.dataset.copyCode || "")

      await navigator.clipboard.writeText(code)
      tooltip?.setAttribute("data-tip", "copied")
      setTimeout(() => tooltip?.setAttribute("data-tip", "copy"), 2000)
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  })
</script>

{#if seo}
  <SEO
    {title}
    {desc}
    img={`https://img.daisyui.com/images${$page.url.pathname.replace(/\/$/, "")}.webp`}
  />
{/if}

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div
    class="prose prose-sm lg:prose-h1:text-5xl lg:prose-h2:text-4xl lg:prose-h3:text-3xl md:prose-base w-full max-w-4xl grow pt-10 md:text-sm"
    dir={dir || undefined}
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
    {#if componentfooter}
      <ComponentFooter pages={data?.sidebarPages} />
    {/if}
  </div>
  <AlternativeSidebar />
</div>
