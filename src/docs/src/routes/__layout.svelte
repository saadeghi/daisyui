<script context="module">
  const excludedRoutes = ["/", "/tailwindplay/", "/codepen/", "/theme-generator/"]
  export async function load({ url, fetch }) {
    if (!excludedRoutes.includes(url.pathname)) {
      const post = await fetch(`${url.pathname.replace(/\/$/, "")}.json`).then((res) => res.json())
      return {
        props: {
          path: url.pathname,
          post,
        },
      }
    } else {
      return {
        props: {
          path: url.pathname,
        },
      }
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  import { afterNavigate } from "$app/navigation"
  import { listOfStaticPagesThatNeedSidebar, listOfStaticPagesThatDontNeedSideAds } from "@src/lib/data.js"

  import { page } from "$app/stores"

  import "@components/StyleHandler.svelte"

  import "prism-themes/themes/prism-material-dark.css"
  import "@src/prism-themes-modify.css"

  import Navbar from "@components/Navbar.svelte"
  import Scripts from "@components/Scripts.svelte"
  import SEO from "@components/SEO.svelte"
  import Ads from "@components/Ads.svelte"
  import ComponentFooter from "@components/ComponentFooter.svelte"

  import Sidebar from "@components/Sidebar.svelte"
  export let post

  let drawercontent
  let drawerContentScrollY = 0
  function parseContentScroll() {
    drawerContentScrollY = drawercontent.scrollTop
  }

  let drawersidebar
  let drawerSidebarScrollY = 0
  function parseSidebarScroll() {
    drawerSidebarScrollY = drawersidebar.scrollTop
  }
  onMount(() => {
    parseContentScroll()
    parseSidebarScroll()
  })

  afterNavigate(() => {
    drawercontent.scrollTop = 0
  })

  let checked = ""
  function closeDrawer() {
    checked = ""
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap&text=daisyUIThemostpopular,freeandopen-sourceTailwindCSScomponentlibrary" rel="stylesheet" />
</svelte:head>

{#if post}
  <SEO title={post.title} desc={post.desc} img={`/images${$page.url.pathname.replace(/\/$/, "")}.jpg`} />
{/if}
<div class={`bg-base-100 drawer h-screen ${post || listOfStaticPagesThatNeedSidebar.includes($page.url.pathname) ? "drawer-mobile" : ""}`}>
  <input id="drawer" type="checkbox" class="drawer-toggle" bind:checked />
  <div bind:this={drawercontent} on:scroll={parseContentScroll} class={`drawer-content`} style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
    <Navbar {drawerContentScrollY} />
    <div class={`${post || listOfStaticPagesThatNeedSidebar.includes($page.url.pathname) ? "p-6 pb-16" : ""}`}>
      {#if post && !listOfStaticPagesThatDontNeedSideAds.includes($page.url.pathname)}
        <div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
          <div class="prose w-full max-w-4xl flex-grow">
            {#if $page.url.pathname.replace(/\/$/, "").startsWith("/components/")}
              <!-- <Ads slot="adsense-1" /> -->
              <!-- <Ads slot="adsense-2" /> -->
              <!-- <Ads slot="adsense-3" /> -->
            {/if}
            {#if post && post.title}
              <h1>{post.title}</h1>
            {/if}
            {#if post && post.desc}
              <p>{post.desc}</p>
            {/if}
            <slot />
            {#if $page.url.pathname.replace(/\/$/, "").startsWith("/components/") || $page.url.pathname.replace(/\/$/, "").startsWith("/docs/")}
              <ComponentFooter />
            {/if}
          </div>
          {#if $page.url.pathname.replace(/\/$/, "").startsWith("/components/")}
            <!-- <Ads slot="adsense-4" /> -->
            <!-- <Ads slot="adsense-5" /> -->
            <Ads slot="carbon2" />
          {/if}
        </div>
      {:else}
        <slot />
      {/if}
    </div>
  </div>
  <div class="drawer-side" style="scroll-behavior: smooth; scroll-padding-top: 5rem;" bind:this={drawersidebar} on:scroll={parseSidebarScroll}>
    <label for="drawer" class="drawer-overlay" />
    <aside class="bg-base-200 w-80">
      <Sidebar {closeDrawer} {drawerSidebarScrollY} />
      <div class="from-base-200 pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t to-transparent" />
    </aside>
  </div>
</div>

<input type="checkbox" id="my-modal" class="modal-toggle" aria-label="Open or close modal" />
<div class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>

<div class="modal" id="my-modal-2">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="btn" rel="external">Yay!</a>
    </div>
  </div>
</div>

<input type="checkbox" id="my-modal-3" class="modal-toggle" aria-label="Open or close modal" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>

<input type="checkbox" id="my-modal-4" class="modal-toggle" aria-label="Open or close modal" />
<label for="my-modal-4" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </label>
</label>

<Scripts />

<style global>
  code[class*="language-"],
  pre[class*="language-"] {
    background: unset;
  }
  .prose pre[class*="language-"] {
    max-width: 48rem;
    background-color: hsl(var(--n));
    color: hsl(var(--nc));
  }
</style>
