<script>
  import { page } from "$app/stores"
  import Search from "$components/Search.svelte"
  // import LogoContextMenu from "$components/LogoContextMenu.svelte"
  import SidebarMenuItem from "$components/SidebarMenuItem.svelte"
  // import ChangelogMenu from "$components/ChangelogMenu.svelte"
  let contextMenuEl

  let { closeDrawer, openDrawer, pages, drawerSidebarScrollY, version } = $props()
  let switchNavbarStyle = $derived(drawerSidebarScrollY > 40)

  let innerWidth = $state(undefined)
</script>

<svelte:window bind:innerWidth />

<div
  data-sveltekit-preload-data
  class={`bg-base-100/90 sticky top-0 z-20 hidden navbar items-center gap-2 px-4 py-2 backdrop-blur ${
    $page.url.pathname == "/" ? "" : "lg:flex"
  } ${switchNavbarStyle ? "shadow-xs" : ""}`}
>
  <a
    href="/"
    aria-current="page"
    aria-label="Homepage"
    class="flex-0 btn btn-ghost px-2"
    oncontextmenu={(e) => {
      e.preventDefault()
      contextMenuEl.openContextMenu(e)
    }}
  >
    <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
      <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
      <circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3"></circle>
      <circle cx="207.5" cy="135" r="125" fill="white"></circle>
      <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
    </svg>

    <div class="font-title inline-flex text-lg md:text-2xl">daisyUI</div>
  </a>

  {#await import("./LogoContextMenu.svelte") then Module}
    <Module.default bind:this={contextMenuEl} />
  {/await}
  {#await import("./ChangelogMenu.svelte") then Module}
    <Module.default {version} />
  {/await}
</div>

{#if innerWidth < 1024}
  <div
    class={`bg-base-100/90 grid-row-2 sticky top-0 z-10 grid w-full gap-y-2 px-2 py-3 backdrop-blur ${
      switchNavbarStyle ? "shadow-sm" : ""
    }`}
  >
    <div class="flex w-full">
      <Search {pages} onsearch={closeDrawer} onfocus={openDrawer} />
    </div>
  </div>
{/if}

<div class="h-4"></div>

<ul class="menu w-full px-4 py-0">
  {#each pages as { name, href, icon, badge, badgeclass, highlightAnotherItem, deprecated, items, collapsible, target, highlight }}
    <SidebarMenuItem
      {closeDrawer}
      {name}
      {href}
      {icon}
      {badge}
      {badgeclass}
      {highlightAnotherItem}
      {deprecated}
      {items}
      {collapsible}
      {highlight}
      {target}
    />
  {/each}
</ul>
