<script>
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import SidebarMenuItem from "$components/SidebarMenuItem.svelte"
  import ChangelogMenu from "$components/ChangelogMenu.svelte"

  let {
    closeDrawer,
    openDrawer,
    pages,
    drawerSidebarScrollY,
    version,
    onOpenSearch,
    onPreFetchSearch,
  } = $props()
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
      <button
        class="input input-ghost hover:bg-base-200 focus-visible:bg-base-200 cursor-pointer transition-colors focus:outline-none"
        onclick={() => {
          onOpenSearch?.()
          closeDrawer()
        }}
        onmouseenter={() => {
          // Pre-fetch search data on hover
          onPreFetchSearch?.()
        }}
        onfocus={() => {
          onPreFetchSearch?.()
        }}
        ontouchstart={() => {
          onPreFetchSearch?.()
        }}
      >
        <svg
          class="hidden size-4 shrink-0 opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <g fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.82 4.74a6 6 0 1 1 1.06-1.06l2.79 2.79a.75.75 0 1 1-1.06 1.06l-2.79-2.79Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        <span class="grow text-left">Search…</span>
        <kbd class="kbd kbd-sm font-mono"><span class="me-1 text-sm">⌘</span>K</kbd>
      </button>
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
