<script>
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import TopBanner from "$components/TopBanner.svelte"
  import ThemeChange from "$components/ThemeChange.svelte"
  import LangChange from "$components/LangChange.svelte"
  import ChangelogMenu from "$components/ChangelogMenu.svelte"
  import DiscountCountdown from "$components/DiscountCountdown.svelte"
  import { track } from "$lib/analytics.svelte.js"
  import { fetchActiveDiscount } from "$lib/storeDiscount.js"

  import { t } from "$lib/i18n.svelte.js"

  $effect(() => {
    window.minimalAnalytics = {
      trackingId: "G-10F40JCSMZ",
    }
  })

  let {
    navbar = [],
    themes,
    hideLogoOnLargeScreen = false,
    hideSidebarButton = false,
    hideSidebarButtonOnLargeScreen = false,
    showSearch = false,
    showVersion = false,
    showLanguage = false,
    stargazersCount = null,
    version,
    scrollY = $bindable(),
    onOpenSearch,
    onPreFetchSearch,
    children,
  } = $props()
  let activeDiscount = $state(null)
  let switchNavbarStyle = $derived(scrollY > 40)

  onMount(async () => {
    try {
      activeDiscount = await fetchActiveDiscount(PUBLIC_DAISYUI_API_PATH)
    } catch (error) {
      console.error("Error loading active discount", error)
    }
  })

  const matchesActivePath = (item) => {
    if (!item) return false

    const pathname = $page.url.pathname

    if (item.href) {
      if (item.exact) return pathname === item.href
      if (pathname === item.href || pathname.startsWith(item.href)) return true

      return false
    }

    if (item.items) return item.items.some((child) => matchesActivePath(child))

    return false
  }

  const getActiveNavbarItems = (items) =>
    items.flatMap((item) => [
      ...(item?.href && matchesActivePath(item) ? [item] : []),
      ...(item?.items ? getActiveNavbarItems(item.items) : []),
    ])

  let activeNavbarItem = $derived(getActiveNavbarItems(navbar)[0])

  const containsItem = (items, activeItem) => {
    if (!activeItem) return false

    return (
      items?.some((item) => item === activeItem || containsItem(item.items, activeItem)) ?? false
    )
  }

  const isActive = (item) => {
    if (!item) return false
    if (item === activeNavbarItem) return true
    if (navbar.includes(item)) return containsItem(item.items, activeNavbarItem)

    return false
  }

  const hasText = (value) => typeof value === "string" && value.length > 0
  const activeDiscountExpiresAt = $derived(activeDiscount?.data?.attributes?.expires_at)
  const shouldShowCountdownTooltip = (item) =>
    item.countdown && activeDiscountExpiresAt && !$page.url.pathname.startsWith("/store/")
  const githubStarsLabel = $derived.by(() => {
    if (!Number.isFinite(stargazersCount)) return null

    const thousands = Math.floor(stargazersCount / 1000)
    return thousands > 0 ? `${thousands}k` : String(stargazersCount)
  })
</script>

<svelte:window bind:scrollY />
<TopBanner />
<div
  class={`
  bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full transform-[translate3d(0,0,0)] justify-center backdrop-blur-sm transition-shadow duration-100 print:hidden
  ${switchNavbarStyle ? "shadow-xs" : ""}
  `}
>
  <nav class="navbar w-full py-0">
    <div class="navbar-start">
      <span
        class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
        data-tip="Menu"
      >
        <label
          aria-label="Open menu"
          for="drawer"
          class={`btn btn-square btn-ghost drawer-button ${
            hideSidebarButtonOnLargeScreen ? "lg:hidden" : ""
          } ${hideSidebarButton ? "hidden" : ""}`}
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            >
            </path>
          </svg>
        </label>
      </span>

      <div class={`flex items-center gap-2`}>
        <a
          href="/"
          aria-current="page"
          aria-label="daisyUI"
          class="me-2 flex w-35 shrink-0 items-center gap-2"
          oncontextmenu={(e) => {
            e.preventDefault()
            goto("/brand")
          }}
        >
          <LogoHorizontal />
        </a>
        {#if showVersion}
          <ChangelogMenu {version} />
        {/if}
      </div>

      <!-- {@render children?.()} -->
    </div>
    <div class="navbar-center">
      <div
        class="tabs [--tab-height:2.5rem] tabs-xs xl:tabs-sm translate-y-0 tabs-border hidden items-center lg:flex"
      >
        {#each navbar as item, index}
          {#if item.items && hasText(item.name)}
            <button
              popovertarget={`navbar-item-${index}`}
              style="anchor-name:--navbar-item-${index}"
              class={`tab gap-1 px-3 font-normal ${isActive(item) ? "tab-active" : ""}`}
            >
              <span class="px-1 xl:px-2 flex items-center gap-1">
                {#if item.icon}
                  <span class="max-lg:hidden">{@html item.icon}</span>
                {/if}
                {$t(item.name)}
                <svg
                  class="mt-px size-2 fill-current opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </span>
            </button>
            <div
              popover
              id={`navbar-item-${index}`}
              style="position-anchor:--navbar-item-${index}"
              class="dropdown dropdown-center bg-base-200 text-base-content rounded-box top-px mt-6 w-56 border-(length:--border) border-white/5 shadow-2xl outline-(length:--border) outline-black/5"
            >
              <ul class="menu menu-sm w-full">
                {#each item.items as child}
                  <li>
                    {#if child.href && hasText(child.name)}
                      <a
                        href={child.href}
                        target={child.target === "blank" ? "_blank" : undefined}
                        rel={child.target === "blank" ? "noopener noreferrer" : undefined}
                        class={`group ${isActive(child) ? "menu-active" : ""}`}
                        onclick={() => track(`Navbar > ${item.name} > ${child.name}`)}
                      >
                        {#if child.icon}
                          <span>{@html child.icon}</span>
                        {/if}
                        {$t(child.name)}
                        {#if child.target === "blank"}
                          <svg
                            width="12"
                            height="12"
                            class="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                              d="M19 11H37V29"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path><path
                              d="M11.5439 36.4559L36.9997 11"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path></svg
                          >
                        {/if}
                      </a>
                    {/if}
                  </li>
                {/each}
              </ul>
            </div>
          {:else if item.href && hasText(item.name)}
            <a
              href={item.href}
              class={`tab group font-normal ${isActive(item) ? "tab-active before:[--radius-start:revert]" : ""}`}
              onclick={() => track(`Navbar > ${item.name}`)}
            >
              <span
                class={`px-1 xl:px-2 flex items-center gap-1 ${shouldShowCountdownTooltip(item) ? "tooltip tooltip-bottom tooltip-open group" : ""}`}
              >
                {#if item.icon}
                  <span class="max-xl:hidden text-base-content group-hover:opacity-100 opacity-50"
                    >{@html item.icon}</span
                  >
                {/if}
                {$t(item.name)}
                {#if shouldShowCountdownTooltip(item)}
                  <DiscountCountdown
                    expiresAt={activeDiscount.data.attributes.expires_at}
                    tooltip
                  />
                {/if}
              </span>
            </a>
          {/if}
        {/each}
      </div>
    </div>
    <div class="navbar-end items-center gap-1 lg:gap-2">
      {#if showSearch}
        <div class="w-full max-w-30 xl:max-w-40 max-lg:hidden xl:ms-4">
          <button
            class="input input-sm input-ghost hover:bg-base-200 focus-visible:bg-base-200 cursor-pointer transition-colors focus:outline-none"
            onclick={() => {
              onOpenSearch?.()
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
      {/if}

      <ThemeChange {themes} />
      {#if showLanguage}
        <LangChange />
      {/if}

      <a
        href="https://github.com/saadeghi/daisyui"
        aria-label="GitHub"
        title="GitHub"
        rel="noopener noreferrer"
        target="_blank"
        class={`btn btn-ghost group btn-sm ${githubStarsLabel ? "gap-1 px-2" : "btn-square"}`}
        onclick={() => track("Navbar > GitHub")}
      >
        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
            >
            </path>
          </g>
        </svg>
        {#if githubStarsLabel}
          <span class="text-[0.625rem] font-normal font-mono tabular-nums">{githubStarsLabel}</span>
        {/if}
      </a>
    </div>
  </nav>
</div>
