<script>
  import { goto } from "$app/navigation"
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import TopBanner from "$components/TopBanner.svelte"
  import ThemeChange from "$components/ThemeChange.svelte"
  import LangChange from "$components/LangChange.svelte"
  import Search from "$components/Search.svelte"
  import ChangelogMenu from "$components/ChangelogMenu.svelte"
  import { track } from "$lib/analytics.svelte.js"

  import { t } from "$lib/i18n.svelte.js"

  $effect(() => {
    window.minimalAnalytics = {
      trackingId: "G-10F40JCSMZ",
    }
  })

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
            onclick={() => track("Navbar > Components")}
          >
            <svg
              class="size-4"
              width="16"
              height="16"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 29H6V43H20V29Z"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
              </path>
              <path
                d="M24 4L34 21H14L24 4Z"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
              </path>
              <path
                d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
              </path>
            </svg>
            {$t("components-btn")}
          </a>
        </div>

        <div class="hidden flex-none items-center lg:inline-block">
          <a
            data-sveltekit-preload-data
            href="/store/"
            class="btn btn-sm btn-ghost drawer-button font-normal"
            onclick={() => track("Navbar > Store")}
          >
            <svg
              class="size-4"
              width="16"
              height="16"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.0391 22V42H8.03906V22"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
              </path>
              <path
                d="M5.84231 13.7766C4.31276 17.7377 7.26307 22 11.5092 22C14.8229 22 17.5276 19.3137 17.5276 16C17.5276 19.3137 20.2139 22 23.5276 22H24.546C27.8597 22 30.546 19.3137 30.546 16C30.546 19.3137 33.2518 22 36.5655 22C40.8139 22 43.767 17.7352 42.2362 13.7723L39.2337 6H8.84523L5.84231 13.7766Z"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linejoin="bevel"
              >
              </path>
            </svg>
            {$t("Template Store")}
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
