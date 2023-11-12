<script>
  import ThemeChange from "$components/ThemeChange.svelte"
  import LangChange from "$components/LangChange.svelte"
  import Search from "$components/Search.svelte"
  import LogoContextMenu from "$components/LogoContextMenu.svelte"
  import ChangelogMenu from "$components/ChangelogMenu.svelte"

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
          href="/"
          aria-current="page"
          aria-label="Homepage"
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

          <div class="font-title inline-flex text-lg rtl:flex-row-reverse md:text-2xl">
            <span class="lowercase">daisy</span>
            <span class="uppercase text-[#1AD1A5]">UI</span>
          </div>
        </a>
        <LogoContextMenu bind:this={contextMenuEl} />
        {#if showVersion}
          <ChangelogMenu />
        {/if}
      </div>

      <slot />

      {#if showSearch}
        <div class="hidden w-full max-w-sm lg:flex">
          <Search {pages} {removeScrollPaddingFromNavbar} {addScrollPaddingToNavbar} />
        </div>
      {/if}
    </div>
    <div class="flex-0">
      {#if showComponentsBtn}
        <div class={`hidden flex-none items-center lg:block`}>
          <a
            data-sveltekit-preload-data="hover"
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
      <ThemeChange {themes} />
      {#if showLanguage}
        <LangChange />
      {/if}
    </div>
  </nav>
</div>
