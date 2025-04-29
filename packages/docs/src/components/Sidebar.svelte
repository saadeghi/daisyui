<script>
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import Search from "$components/Search.svelte"
  import SidebarMenuItem from "$components/SidebarMenuItem.svelte"
  import ChangelogMenu from "$components/ChangelogMenu.svelte"

  let { closeDrawer, openDrawer, pages, drawerSidebarScrollY, version } = $props()
  let switchNavbarStyle = $derived(drawerSidebarScrollY > 40)

  let innerWidth = $state(undefined)
</script>

<svelte:window bind:innerWidth />

<div
  data-sveltekit-preload-data
  class={`bg-base-100/90 navbar sticky top-0 z-20 hidden items-center gap-2 px-4 py-0 backdrop-blur ${
    $page.url.pathname == "/" ? "" : "lg:flex"
  } ${switchNavbarStyle ? "shadow-xs" : ""}`}
>
  <a
    data-sveltekit-preload-data
    href="/"
    aria-current="page"
    aria-label="daisyUI"
    class="-ms-2 me-2 flex w-35 shrink-0 items-center gap-2"
    oncontextmenu={(e) => {
      e.preventDefault()
      goto("/brand")
    }}
  >
    <LogoHorizontal />
  </a>
  <ChangelogMenu {version} />
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
