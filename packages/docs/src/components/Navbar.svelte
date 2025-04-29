<script>
  import { goto } from "$app/navigation"
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import TopBanner from "$components/TopBanner.svelte"
  import ThemeChange from "$components/ThemeChange.svelte"
  import LangChange from "$components/LangChange.svelte"
  import Search from "$components/Search.svelte"
  import ChangelogMenu from "$components/ChangelogMenu.svelte"

  import { t } from "$lib/i18n.svelte.js"
  let {
    pages,
    themes,
    hideLogoOnLargeScreen = false,
    hideSidebarButton = false,
    hideSidebarButtonOnLargeScreen = false,
    showComponentsBtn = false,
    showSearch = false,
    showVersion = false,
    showLanguage = false,
    version,
    scrollY = $bindable(),
    addScrollPaddingToNavbar,
    removeScrollPaddingFromNavbar,
    children,
  } = $props()
  let switchNavbarStyle = $derived(scrollY > 40)
</script>

<svelte:window bind:scrollY />
<TopBanner />
<div
  class={`
  bg-base-100/90 text-base-content sticky top-0 z-30 flex h-16 w-full [transform:translate3d(0,0,0)] justify-center backdrop-blur transition-shadow duration-100 print:hidden
  ${switchNavbarStyle ? "shadow-xs" : ""}
  `}
>
  <nav class="navbar w-full py-0">
    <div class="flex flex-1 items-center md:gap-1 lg:gap-2">
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

      <div class={`flex items-center gap-2 ${hideLogoOnLargeScreen ? "lg:hidden" : ""}`}>
        <a
          data-sveltekit-preload-data
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

      {@render children?.()}

      {#if showSearch}
        <div class="hidden w-full max-w-sm lg:flex">
          <Search {pages} {removeScrollPaddingFromNavbar} {addScrollPaddingToNavbar} />
        </div>
      {/if}
    </div>
    <div class="flex xl:gap-1">
      {#if showComponentsBtn}
        <div class="hidden flex-none items-center lg:inline-block">
          <a
            data-sveltekit-preload-data
            href="/components/"
            class="btn btn-sm btn-ghost drawer-button font-normal"
          >
            <!-- <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-5 w-5 fill-current">
              <path
                d="M6.5,22 C4.01471863,22 2,19.9852814 2,17.5 C2,15.0147186 4.01471863,13 6.5,13 C8.98528137,13 11,15.0147186 11,17.5 C11,19.9852814 8.98528137,22 6.5,22 Z M17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 Z M6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 Z M17.5,11 C15.0147186,11 13,8.98528137 13,6.5 C13,4.01471863 15.0147186,2 17.5,2 C19.9852814,2 22,4.01471863 22,6.5 C22,8.98528137 19.9852814,11 17.5,11 Z M17.5,9 C18.8807119,9 20,7.88071187 20,6.5 C20,5.11928813 18.8807119,4 17.5,4 C16.1192881,4 15,5.11928813 15,6.5 C15,7.88071187 16.1192881,9 17.5,9 Z M6.5,9 C7.88071187,9 9,7.88071187 9,6.5 C9,5.11928813 7.88071187,4 6.5,4 C5.11928813,4 4,5.11928813 4,6.5 C4,7.88071187 5.11928813,9 6.5,9 Z M17.5,20 C18.8807119,20 20,18.8807119 20,17.5 C20,16.1192881 18.8807119,15 17.5,15 C16.1192881,15 15,16.1192881 15,17.5 C15,18.8807119 16.1192881,20 17.5,20 Z M6.5,20 C7.88071187,20 9,18.8807119 9,17.5 C9,16.1192881 7.88071187,15 6.5,15 C5.11928813,15 4,16.1192881 4,17.5 C4,18.8807119 5.11928813,20 6.5,20 Z" />
            </svg> -->
            {$t("components-btn")}
          </a>
        </div>

        <div class="hidden flex-none items-center lg:inline-block">
          <a
            data-sveltekit-preload-data
            href="/store/"
            class="btn btn-sm btn-ghost drawer-button font-normal"
          >
            {$t("Official Store")}
          </a>
        </div>
      {/if}
      <ThemeChange {themes} />
      {#if showLanguage}
        <LangChange />
      {/if}
    </div>
  </nav>
</div>
