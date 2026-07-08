<script>
  import Navbar from "$components/Navbar.svelte"
  import Sidebar from "$components/Sidebar.svelte"
  import Search from "$components/Search.svelte"
  import { page } from "$app/stores"
  import { loadRouteTranslations, setLang } from "$lib/i18n.svelte.js"
  import { onNavigate } from "$app/navigation"
  import minimalAnalytics from "@minimal-analytics/ga4"
  const { track } = minimalAnalytics

  let { data, children } = $props()

  // Search modal control
  let searchComponent = $state()

  function handleOpenSearch() {
    if (searchComponent) {
      searchComponent.openModal()
    }
  }

  function handlePreFetchSearch() {
    if (searchComponent) {
      searchComponent.preFetchData()
    }
  }

  onNavigate((navigation) => {
    track("G-10F40JCSMZ")

    const routeTranslations = navigation.to?.url
      ? loadRouteTranslations(navigation.to.url.pathname)
      : Promise.resolve()

    if (!document.startViewTransition) return routeTranslations

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        await routeTranslations
        resolve()
        await navigation.complete
      })
    })
  })

  $effect(() => {
    loadRouteTranslations($page.url.pathname)
  })

  $effect(() => {
    let lang = new URL(document.location).searchParams.get("lang")
    setLang(lang, false)
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"), false)
    }

    parseSidebarScroll()
    document.documentElement.style.scrollPaddingTop = "5rem"
    document.documentElement.style.scrollBehavior = "smooth"
  })

  let drawersidebar = $state()
  let drawerSidebarScrollY = $state(0)
  function parseSidebarScroll() {
    drawerSidebarScrollY = drawersidebar.scrollTop
  }

  let checked = $state("")
  function closeDrawer() {
    checked = ""
  }

  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

  const matchesPathPattern = (pathname, pattern) => {
    if (!pattern) return false
    if (pattern.includes("*")) {
      const regex = new RegExp(`^${pattern.split("*").map(escapeRegExp).join(".*")}$`)
      return regex.test(pathname)
    }

    return pathname === pattern
  }

  const matchesHref = (pathname, href) => {
    if (!href) return false
    if (pathname === href) return true
    if (!href.endsWith("/")) return false

    return pathname.startsWith(href) && href !== "/"
  }

  const getSidebarSectionLinks = (items = []) =>
    items.flatMap((item) => [
      ...(item?.href ? [item.href] : []),
      ...(item?.items ? getSidebarSectionLinks(item.items) : []),
    ])

  const getSidebarSectionItems = (section) => section?.[0]?.items ?? section ?? []

  const isNoSidebarPath = (pathname) =>
    data.pagesThatDontNeedSidebar.some((pattern) => matchesPathPattern(pathname, pattern))

  const getSidebarPages = (pathname) => {
    if (isNoSidebarPath(pathname)) return []

    for (const [name, section] of Object.entries(data.sidebar)) {
      if (name === "noSidebar") continue

      const items = getSidebarSectionItems(section)
      const links = getSidebarSectionLinks(section)
      const sectionHref = `/${name}/`

      if (matchesHref(pathname, sectionHref) || links.some((href) => matchesHref(pathname, href))) {
        return items
      }
    }

    return []
  }

  let activeSidebarPages = $derived(getSidebarPages($page.url.pathname))
  let hasDesktopSidebar = $derived(activeSidebarPages.length > 0)

  // Calculate if drawer-content should be inert
  let innerWidth = $state(0)
  let shouldBeInert = $derived.by(() => {
    if (!checked) return false

    const isLargeScreen = innerWidth >= 1024

    if (isLargeScreen && hasDesktopSidebar) return false

    return true
  })

  $effect(() => {
    if (innerWidth >= 1024 && !hasDesktopSidebar && checked) {
      closeDrawer()
    }
  })
</script>

<svelte:window bind:innerWidth />
<Navbar
  version={data.daisyuiVersion}
  navbar={data.navbar}
  themes={data.themes}
  hideLogoOnLargeScreen={hasDesktopSidebar}
  hideSidebarButtonOnLargeScreen={true}
  showSearch="true"
  showVersion="true"
  showLanguage="true"
  stargazersCount={data.stargazersCount}
  onOpenSearch={handleOpenSearch}
  onPreFetchSearch={handlePreFetchSearch}
/>
<div
  class={`bg-base-100 drawer mx-auto max-w-[100rem] ${hasDesktopSidebar ? "lg:drawer-open" : ""}`}
>
  <input
    id="drawer"
    type="checkbox"
    autocomplete="off"
    class="drawer-toggle"
    aria-label="Toggle drawer"
    bind:checked
  />
  <main class={`drawer-content`} inert={shouldBeInert || undefined}>
    <div class={`${hasDesktopSidebar ? "relative max-w-[100vw] px-6 pb-16 xl:pe-2" : ""}`}>
      {@render children?.()}
    </div>
    <div class="toast toast-center z-10 [@supports(color:oklch(0%_0_0))]:hidden">
      <div class="alert alert-warning grid-cols-[auto] py-2 text-xs">
        <span>
          <a
            class="link"
            rel="nofollow, noreferrer"
            target="_blank"
            href="https://www.wikihow.com/Update-Your-Browser"
          >
            Please upgrade your browser
          </a>
        </span>
      </div>
    </div>
  </main>
  <div
    class={`drawer-side z-40 ${
      hasDesktopSidebar
        ? "lg:sticky lg:top-16 border-transparent lg:h-[calc(100vh-5rem)]"
        : "lg:h-screen"
    }`}
    style="scroll-behavior: smooth; scroll-padding-top: 5rem;"
    bind:this={drawersidebar}
    onscroll={parseSidebarScroll}
  >
    <label for="drawer" class="drawer-overlay" aria-label="Close menu"></label>
    <aside
      class={`bg-base-100 min-h-screen w-80 ${
        hasDesktopSidebar ? "lg:min-h-[calc(100vh-5rem)]" : "lg:min-h-screen"
      }`}
    >
      <Sidebar
        pages={activeSidebarPages}
        navbar={data.navbar}
        sidebar={data.sidebar}
        version={data.daisyuiVersion}
        {closeDrawer}
        {drawerSidebarScrollY}
        onOpenSearch={handleOpenSearch}
        onPreFetchSearch={handlePreFetchSearch}
      />
      <div
        class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"
      ></div>
    </aside>
  </div>
</div>

<!-- Search Modal -->
<Search bind:this={searchComponent} />
