<script>
  import { page } from "$app/stores"
  import { menu } from "@src/lib/data.js"
  import { pkgVersion } from "$lib/util"
  export let closeDrawer

  export let drawerSidebarScrollY
  $: switchNavbarStyle = drawerSidebarScrollY > 40 ? true : false
</script>

<div class={`z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden ${$page.url.pathname == "/" ? "" : "lg:flex"} ${switchNavbarStyle ? "shadow-sm" : ""}`}>
  <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost active nuxt-link-active px-2">
    <div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
      <span class="lowercase">daisy</span>
      <span class="text-base-content uppercase">UI</span>
    </div>
  </a>
  <a href="/docs/changelog" class="link link-hover font-mono text-xs text-opacity-50">
    <div data-tip="Changelog" class="tooltip tooltip-bottom">
      {pkgVersion()}
    </div>
  </a>
</div>

{#each menu as { name, items }}
  <ul class="menu menu-compact flex flex-col p-0 px-4">
    {#if name}
      <li />
      <li class="menu-title"><span>{name}</span></li>
    {/if}
    {#each items as { name, href, icon, badge }}
      <li>
        <a
          {href}
          on:click={closeDrawer}
          class={`flex gap-4 
          ${$page.url.pathname == href ? "active" : ""}
          ${$page.url.pathname.startsWith(href + "/") ? "active" : ""}
          sveltekit:prefetch
        `}
        >
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
  </ul>
{/each}
