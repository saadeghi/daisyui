<script>
  import "$components/StyleHandler.svelte"
  import Scripts from "$components/Scripts.svelte"
  import Navbar from "$components/Navbar.svelte"
  import Sidebar from "$components/Sidebar.svelte"
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  import { setLang } from "$lib/i18n"
  import { onNavigate } from "$app/navigation"

  export let data

  onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })

  onMount(() => {
    let lang = new URL(document.location).searchParams.get("lang")
    setLang(lang, false)
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"), false)
    }

    parseSidebarScroll()
    document.documentElement.style.scrollPaddingTop = "5rem"
    document.documentElement.style.scrollBehavior = "smooth"
  })

  let drawersidebar
  let drawerSidebarScrollY = 0
  function parseSidebarScroll() {
    drawerSidebarScrollY = drawersidebar.scrollTop
  }

  let checked = ""
  function closeDrawer() {
    checked = ""
  }

  function openDrawer() {
    checked = true
  }

  let navbarScrollPadding = "5rem"
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

<svelte:head>
  <link
    rel="alternate"
    type="application/rss+xml"
    title="daisyUI Blog"
    href="https://daisyui.com/blog/rss.xml" />
  <link
    media="screen and (min-width: 520px)"
    rel="preconnect"
    href="https://fonts.googleapis.com" />
  <link
    media="screen and (min-width: 520px)"
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin />
  <link
    media="screen and (min-width: 520px)"
    href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&family=Noto+Sans+JP:wght@300;900&family=Noto+Sans:wght@300;900&family=Vazirmatn:wght@300;900&display=swap"
    rel="stylesheet" />
  <meta name="theme-color" content="oklch(var(--b1))" />
  <link rel="icon" href="/images/daisyui-logo/daisyui-logomark.svg" type="image/svg+xml" />
  <link rel="icon" sizes="192x192" href="/images/daisyui-logo/favicon-192.png" />
  <link rel="apple-touch-icon" href="/images/daisyui-logo/favicon-180.png" />
  <link rel="manifest" href="/manifest.webmanifest" />
</svelte:head>

<div
  class={`bg-base-100 drawer ${
    data.pagesThatDontNeedSidebar.matchPattern($page.url.pathname) ? "" : "lg:drawer-open"
  }`}>
  <input id="drawer" type="checkbox" class="drawer-toggle" bind:checked />
  <div class={`drawer-content`} inert={checked || undefined}>
    <Navbar
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
      showLanguage="true" />
    <div
      class={`${
        data.pagesThatDontNeedSidebar.matchPattern($page.url.pathname)
          ? ""
          : "max-w-[100vw] px-6 pb-16 xl:pr-2"
      }`}>
      <slot />
    </div>
    <div class="toast toast-center z-10 [@supports(color:oklch(0_0_0))]:hidden">
      <div class="alert alert-warning grid-cols-[auto] py-2 text-xs">
        <span>
          <a
            class="link"
            rel="nofollow, noreferrer"
            target="_blank"
            href="https://www.wikihow.com/Update-Your-Browser">
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
    on:scroll={parseSidebarScroll}>
    <label for="drawer" class="drawer-overlay" aria-label="Close menu" />
    <aside class="bg-base-100 min-h-screen w-80">
      <svelte:component
        this={Sidebar}
        pages={data.pages}
        {closeDrawer}
        {openDrawer}
        {drawerSidebarScrollY} />
      <div
        class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]" />
    </aside>
  </div>
</div>
<Scripts />
