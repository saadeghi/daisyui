<script>
  import { page } from "$app/stores"
  import { pages } from "@src/lib/data.js"
  import { readEnv } from "$lib/util"
  import { useBreakpoints } from "$lib/breakpoints"
  import Search from "@components/Search.svelte"

  import LogoContextMenu from "@components/LogoContextMenu.svelte"
  let contextMenuEl

  export let closeDrawer
  export let openDrawer

  let version = readEnv("VITE_DAISYUI_VERSION", "latest")

  export let drawerSidebarScrollY
  $: switchNavbarStyle = drawerSidebarScrollY > 40 ? true : false

  const breakpoints = useBreakpoints()
  const showSearch = breakpoints.smaller("lg")

  import { t } from "@src/lib/i18n"
</script>

<div
  class={`bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur ${
    $page.url.pathname == "/" ? "" : "lg:flex"
  } ${switchNavbarStyle ? "shadow-sm" : ""}`}>
  <a
    href="/"
    aria-current="page"
    aria-label="Homepage"
    class="flex-0 btn btn-ghost px-2"
    on:contextmenu|preventDefault={(e) => contextMenuEl.openContextMenu(e)}>
    <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
      <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5" />
      <circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3" />
      <circle cx="207.5" cy="135" r="125" fill="white" />
      <circle cx="207.5" cy="135" r="56" fill="#FF9903" />
    </svg>

    <div class="font-title inline-flex text-lg md:text-2xl">
      <span class="lowercase">daisy</span>
      <span class="uppercase text-[#1AD1A5]">UI</span>
    </div>
  </a>
  <LogoContextMenu bind:this={contextMenuEl} />
  <div class="dropdown">
    <label tabindex="0" class="link link-hover font-mono text-xs">
      {version}
    </label>
    <ul
      tabindex="0"
      class="dropdown-content menu menu-sm bg-base-200 rounded-box mt-8 w-40 p-2 shadow">
      <li><a href="/docs/changelog">Changelog</a></li>
      <li />
      <li>
        <a target="_blank" rel="noopener, noreferrer" href="https://v2.daisyui.com/">Version 2.x</a>
      </li>
      <li>
        <a target="_blank" rel="noopener, noreferrer" href="https://v1.daisyui.com/">Version 1.x</a>
      </li>
    </ul>
  </div>
</div>

{#if $showSearch}
  <div
    class={`bg-base-100 grid-row-2 sticky top-0 z-10 grid w-full gap-y-2 bg-opacity-90 px-2 py-3 backdrop-blur ${
      switchNavbarStyle ? "shadow-sm" : ""
    }`}>
    <div class="flex w-full">
      <Search on:search={closeDrawer} on:focus={openDrawer} />
    </div>
  </div>
{/if}

<div class="h-4" />

{#each pages as { name, icon, items }}
  <ul class="menu menu-sm lg:menu-md px-4 py-0">
    {#if name && name != "excluded"}
      <li />
      <li class="menu-title flex flex-row gap-4">
        {#if icon}
          <span class="text-base-content">{@html icon}</span>
        {/if}
        <span>{$t(name)}</span>
      </li>
    {/if}
    {#if name != "excluded"}
      {#each items as { name, href, icon, badge, hidden, highlightAnotherItem, deprecated }}
        {#if !hidden}
          <li>
            <a
              {href}
              data-sveltekit-preload-data="hover"
              on:click={closeDrawer}
              id={$page.url.pathname.startsWith(href + "/") ? "active-menu" : ""}
              class={`${$page.url.pathname == href ? "active" : ""} ${
                $page.url.pathname == highlightAnotherItem + "/" ? "active" : ""
              } ${$page.url.pathname.startsWith(href + "/") ? "active" : ""}`}>
              {#if icon != ""}
                <span>
                  {@html icon}
                </span>
              {/if}
              <span class={`${deprecated && "line-through"}`}>
                {@html $t(name)}
              </span>
              {#if badge != ""}
                <span class="badge badge-sm font-mono lowercase">
                  {$t(badge)}
                </span>
              {/if}
            </a>
          </li>
        {/if}
      {/each}
    {/if}
  </ul>
{/each}
