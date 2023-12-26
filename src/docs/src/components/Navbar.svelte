<script>
  import Countdown from "svelte-countdown"

  const dateFormat = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }

  // import ThemeChange from "$components/ThemeChange.svelte"
  // import LangChange from "$components/LangChange.svelte"
  // import Search from "$components/Search.svelte"
  // import LogoContextMenu from "$components/LogoContextMenu.svelte"
  // import ChangelogMenu from "$components/ChangelogMenu.svelte"

  let contextMenuEl

  export let pages
  export let themes
  export let hideLogoOnLargeScreen = false
  export let hideSidebarButton = false
  export let hideSidebarButtonOnLargeScreen = false
  export let showComponentsBtn = false
  export let showSearch = false
  export let showVersion = false
  export let showLanguage = false

  import { t } from "$lib/i18n"

  export let scrollY
  $: switchNavbarStyle = scrollY > 40 ? true : false

  export let addScrollPaddingToNavbar
  export let removeScrollPaddingFromNavbar
</script>

<svelte:window bind:scrollY />
{#if false}
  <div class="bg-base-100 flex justify-center rounded-sm p-1">
    <a
      href="/store/"
      class="alert hover:bg-base-300 hover:border-base-300 group flex max-w-xl justify-center rounded-full p-2 text-center text-xs transition-colors duration-300 ease-out">
      <p class="leading-relaxed [text-wrap:balance]">
        🎁 <span class="text-base-content/70 group-hover:text-base-content">
          Use <code
            class="decoration-success font-mono tracking-wide underline decoration-wavy underline-offset-4">
            YEAR2024
          </code>
          code to get 40% discount on daisyUI store
          <Countdown
            from={new Date("2023-12-26T00:00:00.000000Z").toLocaleString("en-GB", dateFormat)}
            dateFormat="DD/MM/YYYY, HH:mm:ss"
            let:remaining>
            {#if remaining.done === false}
              <span class="border-base-content/20 rounded-full border border-dashed px-2 py-1">
                <date
                  datetime={new Date("2023-11-30T00:00:00.000000Z").toLocaleString(
                    "en-GB",
                    dateFormat
                  )}
                  class="countdown font-mono text-xs">
                  {remaining.days * 24 + remaining.hours}h&nbsp;
                  <span style={`--value:${remaining.minutes}`}></span>
                  m&nbsp;
                  <span style={`--value:${remaining.seconds}`}></span>
                  s
                </date>
                remaining
              </span>
            {/if}
          </Countdown>
        </span>
      </p>
    </a>
  </div>
{/if}
<div
  class={`
  bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] 
  ${switchNavbarStyle ? "shadow-sm" : ""}
  `}>
  <nav class="navbar w-full">
    <div class="flex flex-1 md:gap-1 lg:gap-2">
      <span
        class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
        data-tip="Menu">
        <label
          aria-label="Open menu"
          for="drawer"
          class={`btn btn-square btn-ghost drawer-button ${
            hideSidebarButtonOnLargeScreen ? "lg:hidden" : ""
          } ${hideSidebarButton ? "hidden" : ""}`}>
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </span>

      <div class={`flex items-center gap-2 ${hideLogoOnLargeScreen ? "lg:hidden" : ""}`}>
        <a
          data-sveltekit-preload-data
          href="/"
          aria-current="page"
          aria-label="daisyUI"
          class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2"
          on:contextmenu|preventDefault={(e) => contextMenuEl.openContextMenu(e)}>
          <svg
            class="h-6 w-6 md:h-8 md:w-8"
            width="32"
            height="32"
            viewBox="0 0 415 415"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5" />
            <circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3" />
            <circle cx="207.5" cy="135" r="125" fill="white" />
            <circle cx="207.5" cy="135" r="56" fill="#FF9903" />
          </svg>

          <span class="font-title text-base-content text-lg md:text-2xl">daisyUI</span>
        </a>
        {#await import("./LogoContextMenu.svelte") then Module}
          <Module.default bind:this={contextMenuEl} />
        {/await}
        {#if showVersion}
          {#await import("./ChangelogMenu.svelte") then Module}
            <Module.default />
          {/await}
        {/if}
      </div>

      <slot />

      {#if showSearch}
        <div class="hidden w-full max-w-sm lg:flex">
          {#await import("./Search.svelte") then Module}
            <Module.default {pages} {removeScrollPaddingFromNavbar} {addScrollPaddingToNavbar} />
          {/await}
        </div>
      {/if}
    </div>
    <div class="flex-0">
      {#if showComponentsBtn}
        <div class={`hidden flex-none items-center lg:block`}>
          <a
            data-sveltekit-preload-data
            href="/components/"
            class="btn btn-ghost drawer-button font-normal">
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
      {/if}
      {#await import("./ThemeChange.svelte")}
        <div class="btn btn-ghost cursor-wait">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-5 w-5 stroke-current md:hidden">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
            </path>
          </svg>
          <span class="hidden font-normal md:inline">Theme</span>
          <svg
            width="12px"
            height="12px"
            class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
      {:then Module}
        <Module.default {themes} />
      {/await}
      {#if showLanguage}
        {#await import("./LangChange.svelte")}
          <div class="btn btn-ghost cursor-wait">
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512">
              <path
                d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z">
              </path>
              <path
                d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z">
              </path>
            </svg>
            <svg
              width="12px"
              height="12px"
              class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
        {:then Module}
          <Module.default />
        {/await}
      {/if}
    </div>
  </nav>
</div>
