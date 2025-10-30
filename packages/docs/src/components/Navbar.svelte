<script>
  import { goto } from "$app/navigation"
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import TopBanner from "$components/TopBanner.svelte"
  import ThemeChange from "$components/ThemeChange.svelte"
  import LangChange from "$components/LangChange.svelte"
  import ChangelogMenu from "$components/ChangelogMenu.svelte"
  import { track } from "$lib/analytics.svelte.js"

  import { t } from "$lib/i18n.svelte.js"

  $effect(() => {
    window.minimalAnalytics = {
      trackingId: "G-10F40JCSMZ",
    }
  })

  let {
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
    onOpenSearch,
    onPreFetchSearch,
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
        <div class="-mt-1 w-full max-w-[15rem] max-lg:hidden xl:ms-4">
          <button
            class="input input-ghost hover:bg-base-200 focus-visible:bg-base-200 cursor-pointer transition-colors focus:outline-none"
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
            <span class="grow text-left">Search…</span>
            <kbd class="kbd kbd-sm font-mono opacity-50"><span class="me-1 text-sm">⌘</span>K</kbd>
          </button>
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
              class="size-4 opacity-50"
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
            <!-- <svg
              class="size-4 opacity-50"
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
            </svg> -->
            <svg
              class="size-4 opacity-50"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g stroke="currentColor" fill="none" stroke-linejoin="miter" stroke-linecap="butt">
                <line
                  x1="3"
                  y1="11"
                  x2="29"
                  y2="11"
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="2.5"
                ></line>
                <line
                  x1="12"
                  y1="11"
                  x2="12"
                  y2="29"
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="2.5"
                ></line>
                <path
                  d="m26,29H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h20c1.657,0,3,1.343,3,3v20c0,1.657-1.343,3-3,3Z"
                  fill="none"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="2.5"
                ></path>
              </g>
            </svg>
            {$t("Templates")}
          </a>
        </div>
        <div class="hidden flex-none items-center lg:inline-block">
          <a
            data-sveltekit-preload-data
            href="/store/daisyui-figma-library/"
            class="btn btn-sm btn-ghost drawer-button font-normal"
            onclick={() => track("Navbar > Store")}
          >
            <svg
              class="size-4 opacity-50"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1.75"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="15" cy="12" r="3"></circle>
                <path
                  d="M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z"
                ></path>
                <path d="M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z"></path>
                <path d="M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z"></path>
                <path d="M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z"></path>
              </g>
            </svg>
            {$t("Figma")}
          </a>
        </div>
        <div class="hidden flex-none items-center lg:inline-block">
          <a
            data-sveltekit-preload-data
            href="/blueprint/"
            class="btn btn-sm btn-ghost drawer-button font-normal"
            onclick={() => track("Navbar > Store")}
          >
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              class="size-4.5 opacity-50"
              viewBox="0 0 195 195"
              fill="none"
            >
              <path
                d="M25 97.8528L92.8822 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177"
                stroke="currentColor"
                stroke-width="15"
              />
              <path
                d="M76.2652 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52"
                stroke="currentColor"
                stroke-width="15"
              />
              <path
                d="M109.853 46.9411L59.6482 97.1457C50.2756 106.518 50.2756 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2167 140.459 93.5893 131.087L143.794 80.8822"
                stroke="currentColor"
                stroke-width="15"
              />
            </svg>
            MCP
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
