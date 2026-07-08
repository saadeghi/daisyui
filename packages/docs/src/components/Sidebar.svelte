<script>
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import ChangelogMenu from "$components/ChangelogMenu.svelte"
  import { t } from "$lib/i18n.svelte.js"
  import { track } from "$lib/analytics.svelte.js"

  let {
    closeDrawer,
    pages = [],
    navbar = [],
    sidebar = {},
    drawerSidebarScrollY,
    version,
    onOpenSearch,
    onPreFetchSearch,
  } = $props()
  let switchNavbarStyle = $derived(drawerSidebarScrollY > 40)

  const getHrefPathPrefix = (href) => {
    if (!href?.startsWith("/")) return null
    const segment = href.split("/").filter(Boolean)[0]

    return segment ? `/${segment}/` : null
  }

  const matchesActivePath = (item) => {
    if (!item) return false

    const pathname = $page.url.pathname

    if (item.href) {
      if (pathname === item.highlightAnotherItem) return true
      if (item.exact) return pathname === item.href
      if (pathname === item.href || pathname.startsWith(item.href)) return true

      return false
    }

    if (item.items) return item.items.some((child) => matchesActivePath(child))

    return false
  }

  const getActiveItems = (items) =>
    items.flatMap((item) => [
      ...(item?.href && matchesActivePath(item) ? [item] : []),
      ...(item?.items ? getActiveItems(item.items) : []),
    ])

  let activeNavbarItem = $derived(getActiveItems(navbar)[0])
  let activeSidebarItem = $derived(getActiveItems(pages)[0])

  const containsItem = (items, activeItem) => {
    if (!activeItem) return false

    return (
      items?.some((item) => item === activeItem || containsItem(item.items, activeItem)) ?? false
    )
  }

  const isActive = (item) => {
    if (!item) return false
    if (item === activeNavbarItem || item === activeSidebarItem) return true
    if (!navbar.includes(item)) return false

    return containsItem(item.items, activeNavbarItem)
  }

  const hasText = (value) => typeof value === "string" && value.length > 0
  const shouldFlattenMobileNav = (item) => ["Tools", "More"].includes(item.name)

  const getSidebarSectionItems = (section) => section?.[0]?.items ?? section ?? []
  const getSidebarSectionRoot = (section) =>
    section?.[0]?.items ? section[0] : { name: section?.[0]?.name }
  const getSidebarSectionLinks = (items = []) =>
    items.flatMap((item) => [
      ...(item?.href ? [item.href] : []),
      ...(item?.items ? getSidebarSectionLinks(item.items) : []),
    ])

  const getSidebarMenuRoot = (items) => {
    for (const [name, section] of Object.entries(sidebar)) {
      if (name === "noSidebar") continue
      if (getSidebarSectionItems(section) === items) return getSidebarSectionRoot(section)
    }

    return null
  }

  const getSidebarPagesForNavItem = (navItem) => {
    const navPrefix = getHrefPathPrefix(navItem?.href)
    if (!navPrefix) return []

    for (const [name, section] of Object.entries(sidebar)) {
      if (name === "noSidebar") continue

      const items = getSidebarSectionItems(section)
      const links = getSidebarSectionLinks(section)

      if (links.some((href) => getHrefPathPrefix(href) === navPrefix)) {
        return items
      }
    }

    return []
  }

  const openMobileSidebarPages = (item) => {
    const navItemSidebarPages = getSidebarPagesForNavItem(item)

    if (navItemSidebarPages.length) {
      selectedMobilePages = navItemSidebarPages
      showMobileMainMenu = false
      return true
    }

    return false
  }

  let selectedMobilePages = $state(null)
  let mobileSidebarPages = $derived(selectedMobilePages ?? pages)
  let hasMobileSidebarMenuItems = $derived(mobileSidebarPages.some(Boolean))
  let showMobileMainMenu = $state(false)
  let desktopSidebarMenuRoot = $derived(getSidebarMenuRoot(pages))

  $effect(() => {
    $page.url.pathname
    selectedMobilePages = null
    showMobileMainMenu = false
  })
</script>

<div
  class={`bg-base-100/90 grid-row-2 sticky top-0 z-10 grid w-full gap-y-2 px-2 py-3 backdrop-blur lg:hidden ${
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
      <span class="grow text-left">{$t("Search…")}</span>
      <kbd class="kbd kbd-sm font-mono opacity-50"><span class="me-1 text-sm">⌘</span>K</kbd>
    </button>
  </div>
</div>

<div class="h-4"></div>

<div class="lg:hidden" data-sveltekit-preload-code="viewport">
  {#if hasMobileSidebarMenuItems && !showMobileMainMenu}
    <ul class="menu w-full px-4 py-0">
      <li>
        <button
          onclick={() => {
            showMobileMainMenu = true
          }}
        >
          <svg
            class="size-4 shrink-0 fill-current opacity-60 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
          </svg>
          {$t("Back")}
        </button>
      </li>
      <li></li>
      {@render sidebarMenuItems(mobileSidebarPages)}
    </ul>
  {:else}
    <ul class="menu w-full px-4 py-0">
      {#each navbar as item}
        {#if shouldFlattenMobileNav(item) && item.items}
          {#each item.items as child}
            {#if hasText(child.name) && child.href}
              {@const navItemSidebarPages = getSidebarPagesForNavItem(child)}
              <li>
                {#if navItemSidebarPages.length}
                  <button
                    class={isActive(child) ? "menu-active" : ""}
                    onclick={() => {
                      track(`Mobile Menu > ${item.name} > ${child.name}`)
                      selectedMobilePages = navItemSidebarPages
                      showMobileMainMenu = false
                    }}
                  >
                    {#if child.icon}
                      <span>{@html child.icon}</span>
                    {:else if child.iconUrl}
                      <img
                        class="size-4 shrink-0 object-contain"
                        src={child.iconUrl}
                        alt={child.name}
                      />
                    {/if}
                    <span class="grow text-start">{$t(child.name)}</span>
                    {@render mobileSubmenuArrow()}
                  </button>
                {:else}
                  <a
                    href={child.href}
                    target={child.target === "blank" ? "_blank" : undefined}
                    rel={child.target === "blank" ? "noopener noreferrer" : undefined}
                    class={isActive(child) ? "menu-active" : ""}
                    onclick={() => {
                      track(`Mobile Menu > ${item.name} > ${child.name}`)
                      closeDrawer()
                    }}
                  >
                    {#if child.icon}
                      <span>{@html child.icon}</span>
                    {:else if child.iconUrl}
                      <img
                        class="size-4 shrink-0 object-contain"
                        src={child.iconUrl}
                        alt={child.name}
                      />
                    {/if}
                    {$t(child.name)}
                  </a>
                {/if}
              </li>
            {:else}
              <li></li>
            {/if}
          {/each}
        {:else}
          {#if !hasText(item.name) && !item.items}
            <li></li>
          {:else}
            <li>
              {#if item.items}
                <span class={isActive(item) ? "menu-active" : ""}>
                  {#if item.icon}
                    <span>{@html item.icon}</span>
                  {/if}
                  {#if hasText(item.name)}
                    {$t(item.name)}
                  {/if}
                </span>
                <ul>
                  {#each item.items as child}
                    {#if hasText(child.name) && child.href}
                      {@const navItemSidebarPages = getSidebarPagesForNavItem(child)}
                      <li>
                        {#if navItemSidebarPages.length}
                          <button
                            class={isActive(child) ? "menu-active" : ""}
                            onclick={() => {
                              track(`Mobile Menu > ${item.name} > ${child.name}`)
                              selectedMobilePages = navItemSidebarPages
                              showMobileMainMenu = false
                            }}
                          >
                            {#if child.icon}
                              <span>{@html child.icon}</span>
                            {:else if child.iconUrl}
                              <img
                                class="size-4 shrink-0 object-contain"
                                src={child.iconUrl}
                                alt={child.name}
                              />
                            {/if}
                            <span class="grow text-start">{$t(child.name)}</span>
                            {@render mobileSubmenuArrow()}
                          </button>
                        {:else}
                          <a
                            href={child.href}
                            target={child.target === "blank" ? "_blank" : undefined}
                            rel={child.target === "blank" ? "noopener noreferrer" : undefined}
                            class={isActive(child) ? "menu-active" : ""}
                            onclick={() => {
                              track(`Mobile Menu > ${item.name} > ${child.name}`)
                              closeDrawer()
                            }}
                          >
                            {#if child.icon}
                              <span>{@html child.icon}</span>
                            {:else if child.iconUrl}
                              <img
                                class="size-4 shrink-0 object-contain"
                                src={child.iconUrl}
                                alt={child.name}
                              />
                            {/if}
                            {$t(child.name)}
                          </a>
                        {/if}
                      </li>
                    {:else}
                      <li></li>
                    {/if}
                  {/each}
                </ul>
              {:else if hasText(item.name) && item.href}
                {#if getSidebarPagesForNavItem(item).length}
                  <button
                    class={isActive(item) ? "menu-active" : ""}
                    onclick={() => {
                      track(`Mobile Menu > ${item.name}`)
                      openMobileSidebarPages(item)
                    }}
                  >
                    {#if item.icon}
                      <span>{@html item.icon}</span>
                    {:else if item.iconUrl}
                      <img
                        class="size-4 shrink-0 object-contain"
                        src={item.iconUrl}
                        alt={item.name}
                      />
                    {/if}
                    <span class="grow text-start">{$t(item.name)}</span>
                    {@render mobileSubmenuArrow()}
                  </button>
                {:else}
                  <a
                    href={item.href}
                    class={isActive(item) ? "menu-active" : ""}
                    onclick={() => {
                      track(`Mobile Menu > ${item.name}`)
                      closeDrawer()
                    }}
                  >
                    {#if item.icon}
                      <span>{@html item.icon}</span>
                    {:else if item.iconUrl}
                      <img
                        class="size-4 shrink-0 object-contain"
                        src={item.iconUrl}
                        alt={item.name}
                      />
                    {/if}
                    {$t(item.name)}
                  </a>
                {/if}
              {/if}
            </li>
          {/if}
        {/if}
      {/each}
    </ul>
  {/if}
</div>

{#snippet mobileSubmenuArrow()}
  <svg
    class="ms-auto size-4 shrink-0 fill-current opacity-60 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
  </svg>
{/snippet}

{#snippet sidebarMenuItems(items)}
  {#each items as item}
    {#if item}
      {@render sidebarMenuItem(item)}
    {/if}
  {/each}
{/snippet}

{#snippet sidebarMenuItem(item)}
  {#if !hasText(item.name) && !item.items}
    <li></li>
  {:else if hasText(item.name)}
    <li>
      {#if item.items || !item.href}
        {#if !item.href}
          <h2 class="menu-title flex items-center gap-2 px-1.5">
            {#if item.icon}
              <span class="ms-1 text-base-content opacity-40">{@html item.icon}</span>
            {:else if item.iconUrl}
              <img
                class="ms-1 size-4 shrink-0 object-contain opacity-60"
                src={item.iconUrl}
                alt={item.name}
              />
            {/if}
            {#if hasText(item.name)}
              {$t(item.name)}
            {/if}
          </h2>
        {/if}
        {#if item.items}
          {@render sidebarMenuItems(item.items)}
        {/if}
      {/if}
      {#if !item.items && item.href && hasText(item.name)}
        <a
          href={item.href}
          target={item.target === "blank" ? "_blank" : undefined}
          rel={item.target === "blank" ? "noopener noreferrer" : undefined}
          onclick={closeDrawer}
          class={`group ${isActive(item) ? "menu-active" : ""} ${
            item.highlight
              ? "from-primary to-primary/0 hover:to-primary/10 outline-primary/5 bg-linear-50 from-[-300%] to-60% outline-1 -outline-offset-1"
              : ""
          }`}
        >
          {#if item.icon}
            <span class={item.highlight ? " group-hover:text-primary transition-colors" : ""}>
              {@html item.icon}
            </span>
          {:else if item.iconUrl}
            <img class="size-4 shrink-0 object-contain" src={item.iconUrl} alt={item.name} />
          {/if}
          <span class={item.deprecated ? "line-through" : undefined}>
            {#if hasText(item.name)}
              {@html $t(item.name)}
            {/if}
          </span>
          {#if hasText(item.badge)}
            <span
              class={`badge badge-xs text-opacity-70 font-mono ${item.badgeclass && item.badgeclass}`}
            >
              {#if hasText(item.badge)}
                {$t(item.badge)}
              {/if}
            </span>
          {/if}
          {#if item.target === "blank"}
            <svg
              width="12"
              height="12"
              class="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H37V29"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
              </path>
              <path
                d="M11.5439 36.4559L36.9997 11"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
              </path>
            </svg>
          {/if}
        </a>
      {/if}
    </li>
  {/if}
{/snippet}

{#if pages.length}
  <ul class="menu hidden w-full px-4 py-0 lg:flex" data-sveltekit-preload-data>
    {#if hasText(desktopSidebarMenuRoot?.name)}
      <li>
        <h2 class="menu-title flex items-center gap-2 px-3.5">
          <!-- {#if desktopSidebarMenuRoot.icon}
            <span class="ms-1 text-base-content">{@html desktopSidebarMenuRoot.icon}</span>
          {/if} -->
          {$t(desktopSidebarMenuRoot.name)}
        </h2>
      </li>
      <li></li>
    {/if}
    {@render sidebarMenuItems(pages)}
  </ul>
{/if}
