<script>
  import "../../global.css"
  import Navbar from "$components/Navbar.svelte"
  import Sidebar from "$components/Sidebar.svelte"
  import { page } from "$app/stores"
  import { setLang } from "$lib/i18n.svelte.js"
  import { onNavigate } from "$app/navigation"
  import minimalAnalytics from "@minimal-analytics/ga4"
  const { track } = minimalAnalytics

  let { data, children } = $props()

  onNavigate((navigation) => {
    track("G-10F40JCSMZ")
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
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

  function openDrawer() {
    checked = true
  }

  let navbarScrollPadding = $state("5rem")
  function addScrollPaddingToNavbar(action) {
    navbarScrollPadding = "5rem"
    document.documentElement.style.scrollPaddingTop = "5rem"
  }

  function removeScrollPaddingFromNavbar(action) {
    navbarScrollPadding = "0rem"
    document.documentElement.style.scrollPaddingTop = "0rem"
  }

  Array.prototype.matchPattern = function (inputString) {
    for (const pattern of this) {
      const regexPattern = pattern.replace(/\*/g, ".*")
      const regex = new RegExp(`^${regexPattern}$`)

      if (regex.test(inputString)) {
        return true
      }
    }

    return false
  }
</script>

<div
  class={`bg-base-100 drawer mx-auto max-w-[100rem] ${
    data.pagesThatDontNeedSidebar.matchPattern($page.url.pathname) ? "" : "lg:drawer-open"
  }`}
>
  <input id="drawer" type="checkbox" class="drawer-toggle" bind:checked />
  <div class={`drawer-content`} inert={checked || undefined}>
    <Navbar
      version={data.daisyuiVersion}
      {addScrollPaddingToNavbar}
      {removeScrollPaddingFromNavbar}
      pages={data.pages}
      themes={data.themes}
      showComponentsBtn="true"
      hideLogoOnLargeScreen={data.pagesThatDontNeedSidebar.matchPattern($page.url.pathname)
        ? false
        : true}
      hideSidebarButtonOnLargeScreen={data.pagesThatDontNeedSidebar.matchPattern($page.url.pathname)
        ? false
        : true}
      showSearch="true"
      showVersion="true"
      showLanguage="true"
    />
    <div
      class={`${
        data.pagesThatDontNeedSidebar.matchPattern($page.url.pathname)
          ? ""
          : "relative max-w-[100vw] px-6 pb-16 xl:pe-2"
      }`}
    >
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
  </div>
  <div
    class="drawer-side z-40"
    style="scroll-behavior: smooth; scroll-padding-top: {navbarScrollPadding};"
    bind:this={drawersidebar}
    onscroll={parseSidebarScroll}
  >
    <label for="drawer" class="drawer-overlay" aria-label="Close menu"></label>
    <aside class="bg-base-100 min-h-screen w-80">
      <Sidebar
        pages={data.pages}
        version={data.daisyuiVersion}
        {closeDrawer}
        {openDrawer}
        {drawerSidebarScrollY}
      />
      <div
        class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"
      ></div>
    </aside>
  </div>
</div>
