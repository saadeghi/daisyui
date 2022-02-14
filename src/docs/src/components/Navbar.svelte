<script>
  import { page } from "$app/stores"
  import { readEnv } from "$lib/util"
  import ThemeChange from "@components/ThemeChange.svelte"

  export let drawerContentScrollY
  $: switchNavbarStyle = drawerContentScrollY > 40 ? true : false
</script>

<div
  class={`
  sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
  ${$page.url.pathname == "/" ? (switchNavbarStyle ? "bg-base-100 text-base-content shadow-sm" : "text-primary-content") : switchNavbarStyle ? "bg-base-100 text-base-content shadow-sm" : "bg-base-100 text-base-content"}
  `}
>
  <nav class="navbar w-full">
    <div class="flex flex-1 gap-1 lg:gap-2">
      <label for="drawer" class={`btn btn-square btn-ghost drawer-button ${$page.url.pathname != "/" ? "lg:hidden" : ""}`}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </label>
      <div class={`flex items-center gap-2 ${$page.url.pathname == "/" ? "" : "lg:hidden"}`}>
        <a href="/" aria-current="page" aria-label="Homepage" class={`flex-0 btn btn-ghost active nuxt-link-active px-2 ${switchNavbarStyle || $page.url.pathname != "/" ? "" : "hidden"}`}>
          <div class="inline-flex font-title text-lg text-primary transition-all duration-200 md:text-3xl">
            <span class={`lowercase ${switchNavbarStyle || $page.url.pathname != "/" ? "text-primary" : "text-primary-content"}`}>daisy</span>
            <span class={`uppercase ${switchNavbarStyle || $page.url.pathname != "/" ? "text-base-content" : "text-primary-content"}`}>UI</span>
          </div>
        </a>
        <a href="/docs/changelog" class={`link link-hover font-mono text-xs text-opacity-50 ${switchNavbarStyle || $page.url.pathname != "/" ? "" : "hidden"}`}>
          <div data-tip="Changelog" class="tooltip tooltip-bottom">
            {readEnv("VITE_DAISYUI_VERSION", "latest")}
          </div>
        </a>
      </div>
    </div>
    <div class="flex-0">
      <div class={`items-center flex-none hidden ${$page.url.pathname == "/" ? "lg:block" : ""}`}>
        <a href="/components" class="btn btn-ghost drawer-button normal-case">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline-block h-6 w-6 fill-current md:mr-2"><path d="M6.5,22 C4.01471863,22 2,19.9852814 2,17.5 C2,15.0147186 4.01471863,13 6.5,13 C8.98528137,13 11,15.0147186 11,17.5 C11,19.9852814 8.98528137,22 6.5,22 Z M17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 Z M6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 Z M17.5,11 C15.0147186,11 13,8.98528137 13,6.5 C13,4.01471863 15.0147186,2 17.5,2 C19.9852814,2 22,4.01471863 22,6.5 C22,8.98528137 19.9852814,11 17.5,11 Z M17.5,9 C18.8807119,9 20,7.88071187 20,6.5 C20,5.11928813 18.8807119,4 17.5,4 C16.1192881,4 15,5.11928813 15,6.5 C15,7.88071187 16.1192881,9 17.5,9 Z M6.5,9 C7.88071187,9 9,7.88071187 9,6.5 C9,5.11928813 7.88071187,4 6.5,4 C5.11928813,4 4,5.11928813 4,6.5 C4,7.88071187 5.11928813,9 6.5,9 Z M17.5,20 C18.8807119,20 20,18.8807119 20,17.5 C20,16.1192881 18.8807119,15 17.5,15 C16.1192881,15 15,16.1192881 15,17.5 C15,18.8807119 16.1192881,20 17.5,20 Z M6.5,20 C7.88071187,20 9,18.8807119 9,17.5 C9,16.1192881 7.88071187,15 6.5,15 C5.11928813,15 4,16.1192881 4,17.5 C4,18.8807119 5.11928813,20 6.5,20 Z" /></svg>
          Components
        </a>
      </div>
      <ThemeChange />
      <div title="Github ↗︎" class="flex-none items-center">
        <a aria-label="Github" target="_blank" href="https://github.com/saadeghi/daisyui" rel="noopener" class="btn btn-ghost drawer-button normal-case btn-square">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline-block h-5 w-5 fill-current md:h-6 md:w-6"><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" /></svg>
        </a>
      </div>
    </div>
  </nav>
</div>
