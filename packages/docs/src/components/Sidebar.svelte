<script>
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import SidebarMenuItem from "$components/SidebarMenuItem.svelte"
  import ChangelogMenu from "$components/ChangelogMenu.svelte"

  let { closeDrawer, pages, drawerSidebarScrollY, version, onOpenSearch, onPreFetchSearch } =
    $props()
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
        <kbd class="kbd kbd-sm font-mono opacity-50"><span class="me-1 text-sm">⌘</span>K</kbd>
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
  <li></li>
</ul>

<ul class="menu menu-horizontal menu-xs -mt-2 w-full justify-center gap-1">
  <li>
    <a
      href="https://github.com/saadeghi/daisyui"
      aria-label="GitHub"
      data-tip="GitHub"
      rel="noopener noreferrer"
      target="_blank"
      class="tooltip px-1"
    >
      <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
          >
          </path>
        </g>
      </svg>
    </a>
  </li>
  <li>
    <a
      href="https://x.com/daisyui_"
      aria-label="X.com"
      data-tip="X.com"
      rel="noopener noreferrer"
      target="_blank"
      class="tooltip px-1"
    >
      <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"
        >
        </path>
      </svg>
    </a>
  </li>
  <li>
    <a
      href="/discord/"
      aria-label="Discord"
      data-tip="Discord"
      rel="noopener noreferrer"
      target="_blank"
      class="tooltip px-1"
    >
      <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"> </path>
          <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"> </path>
          <path
            d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
          >
          </path>
          <path d="M7 16.5c3.5 1 6.5 1 10 0"> </path>
        </g>
      </svg>
    </a>
  </li>
  <li>
    <a
      href="https://github.com/saadeghi/daisyui?sponsor=1"
      aria-label="Support daisyUI"
      data-tip="Support daisyUI"
      rel="noopener noreferrer"
      target="_blank"
      class="tooltip px-1"
    >
      <svg
        width="18"
        class="size-5"
        height="18"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        />
      </svg>
    </a>
  </li>
</ul>
