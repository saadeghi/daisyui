<script>
  import { page } from "$app/stores"
  import { pages } from "@src/lib/data.js"
  import { readEnv } from "$lib/util"
  import Search from "@components/Search.svelte"

  export let closeDrawer

  let version = readEnv("VITE_DAISYUI_VERSION", "latest")

  export let drawerSidebarScrollY
  $: switchNavbarStyle = drawerSidebarScrollY > 40 ? true : false
</script>

<div class={`z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden ${$page.url.pathname == "/" ? "" : "lg:flex"} ${switchNavbarStyle ? "shadow-sm" : ""}`}>
  <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
    <div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
      <span class="lowercase">daisy</span>
      <span class="text-base-content uppercase">UI</span>
    </div>
  </a>
  <a href="/docs/changelog" class="link link-hover font-mono text-xs text-opacity-50">
    <div data-tip="Changelog" class="tooltip tooltip-bottom">
      {version}
    </div>
  </a>
</div>

<div class={`bg-base-200 sticky top-0 z-10 grid grid-row-2 gap-y-2 w-full bg-opacity-90 py-3 px-2 backdrop-blur lg:hidden ${switchNavbarStyle ? "shadow-sm" : ""}`}>
  <div class="flex w-full">
    <Search />
  </div>
</div>

<div class="h-4" />

{#each pages as { name, items }}
  <ul class="menu menu-compact flex flex-col p-0 px-4">
    {#if name && name != "excluded"}
      <li />
      <li class="menu-title"><span>{name}</span></li>
    {/if}
    {#if name != "excluded"}
      {#each items as { name, href, icon, badge }}
        <li>
          <a {href} on:click={closeDrawer} id={$page.url.pathname.startsWith(href + "/") ? "active-menu" : ""} class={`flex gap-4 ${$page.url.pathname == href ? "active" : ""} ${$page.url.pathname.startsWith(href + "/") ? "active" : ""}`}>
            {#if icon != ""}
              <span class="flex-none">
                {@html icon}
              </span>
            {/if}
            <span class="flex-1">
              {@html name}
            </span>
            {#if badge != ""}
              <span class="badge badge-sm flex-none lowercase">{badge}</span>
            {/if}
          </a>
        </li>
      {/each}
    {/if}
  </ul>
{/each}
