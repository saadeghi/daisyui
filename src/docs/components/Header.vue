<template>
  <div id="nav"
    v-bind:class="{
      'border-transparent bg-transparent text-primary-content fixed': isHomepage,
      'border-base-200 bg-base-100 text-base-content': !isHomepage || toggleNavClass(),
      'sticky': !isHomepage,
    }"
    class="inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b"
  >
    <div class="mx-auto space-x-1 navbar max-w-none">
      <div class="flex-none">
        <label for="main-menu" class="btn btn-square btn-ghost drawer-button lg:hidden" v-if="!isHomepage">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>

      <div class="flex items-center flex-none"
        v-bind:class="{
          'hidden': !toggleNavClass() && isHomepage,
          'lg:hidden': !isHomepage,
        }"
      >
        <NuxtLink to="/" class="px-2 flex-0 btn btn-ghost md:px-4" aria-label="Homepage">
          <div class="inline-block text-3xl font-title text-primary">
            <span class="lowercase">daisy</span><span class="uppercase text-base-content">UI</span>
          </div>
        </NuxtLink>
      </div>

      <a href="https://github.com/saadeghi/daisyui/blob/master/CHANGELOG.md" target="_blank" class="font-mono text-xs" rel="nofollow"
          v-bind:class="{
          'opacity-80 pl-2': isHomepage,
          'hidden': toggleNavClass() && isHomepage,
          'opacity-50 lg:hidden': !isHomepage,
        }"
      >
        <div data-tip="Changelog" class="tooltip tooltip-bottom">
          <span class="hidden lg:inline xl:ml-2">version</span>&nbsp;{{ DAISYUI_VERSION }}
        </div>
      </a>

      <div class="flex-1"></div>
      <div class="items-center flex-none hidden lg:block" v-if="isHomepage">
        <NuxtLink
          to="/components/button"
          class="normal-case btn btn-ghost drawer-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 fill-current md:mr-2"
          >
            <path
              d="M6.5,22 C4.01471863,22 2,19.9852814 2,17.5 C2,15.0147186 4.01471863,13 6.5,13 C8.98528137,13 11,15.0147186 11,17.5 C11,19.9852814 8.98528137,22 6.5,22 Z M17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 Z M6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 Z M17.5,11 C15.0147186,11 13,8.98528137 13,6.5 C13,4.01471863 15.0147186,2 17.5,2 C19.9852814,2 22,4.01471863 22,6.5 C22,8.98528137 19.9852814,11 17.5,11 Z M17.5,9 C18.8807119,9 20,7.88071187 20,6.5 C20,5.11928813 18.8807119,4 17.5,4 C16.1192881,4 15,5.11928813 15,6.5 C15,7.88071187 16.1192881,9 17.5,9 Z M6.5,9 C7.88071187,9 9,7.88071187 9,6.5 C9,5.11928813 7.88071187,4 6.5,4 C5.11928813,4 4,5.11928813 4,6.5 C4,7.88071187 5.11928813,9 6.5,9 Z M17.5,20 C18.8807119,20 20,18.8807119 20,17.5 C20,16.1192881 18.8807119,15 17.5,15 C16.1192881,15 15,16.1192881 15,17.5 C15,18.8807119 16.1192881,20 17.5,20 Z M6.5,20 C7.88071187,20 9,18.8807119 9,17.5 C9,16.1192881 7.88071187,15 6.5,15 C5.11928813,15 4,16.1192881 4,17.5 C4,18.8807119 5.11928813,20 6.5,20 Z"
            />
          </svg>

          Components
        </NuxtLink>
      </div>

      <div class="dropdown dropdown-end" title="Change Theme">
        <div tabindex="0" class="m-1 normal-case btn-ghost btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current md:mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
          <span class="hidden md:inline">
            Change Theme
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-4 h-4 ml-1 fill-current"
            viewBox="0 0 1792 1792"
          >
            <path
              d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
            />
          </svg>
        </div>
        <div class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content"
          v-bind:class="{
            'rounded-t-box': isHomepage && !toggleNavClass(),
          }"
        >
          <ul class="p-4 menu compact">
            <li v-for="(theme, index) in themes">
              <a tabindex="0" :data-set-theme="theme.id" data-act-class="active">{{ theme.name }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="items-center flex-none" title="Github ↗︎">
        <a
          aria-label="Github"
          target="_blank"
          href="https://github.com/saadeghi/daisyui"
          rel="noopener"
          class="normal-case btn btn-ghost drawer-button btn-square"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-6 h-6 fill-current"
            viewBox="0 0 512 512"
          >
            <path
              d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { themeChange } from "theme-change";

export default {
  data() {
    return {
      DAISYUI_VERSION: process.env.DAISYUI_VERSION,
      scrolled: false,
      themes: [
        { id: "light", name: "🌝  light" },
        { id: "dark", name: "🌚  dark" },
        { id: "cupcake", name: "🧁  cupcake" },
        { id: "bumblebee", name: "🐝  bumblebee" },
        { id: "emerald", name: "✳️  Emerald" },
        { id: "corporate", name: "🏢  Corporate" },
        { id: "synthwave", name: "🌃  synthwave" },
        { id: "retro", name: "👴  retro" },
        { id: "cyberpunk", name: "🤖  cyberpunk" },
        { id: "valentine", name: "🌸  valentine" },
        { id: "halloween", name: "🎃  halloween" },
        { id: "garden", name: "🌷  garden" },
        { id: "forest", name: "🌲  forest" },
        { id: "aqua", name: "🐟  aqua" },
        { id: "lofi", name: "👓  lofi" },
        { id: "pastel", name: "🖍  pastel" },
        { id: "fantasy", name: "🧚‍♀️  fantasy" },
        { id: "wireframe", name: "📝  Wireframe" },
        { id: "black", name: "🏴  black" },
        { id: "luxury", name: "💎  luxury" },
        { id: "dracula", name: "🧛‍♂️  dracula" },
      ],
    };
  },
  methods: {
    toggleNavClass(){
      if(this.scrolled == false){
        return false
      } else {
        return true
      }
    }
  },
  computed: {
    isHomepage() {
      return this.$route.path === '/'
    },
  },
  mounted() {
    themeChange(false);
    window.document.onscroll = () => {
      let navBar = document.getElementById('nav');
      if(window.scrollY > navBar.offsetTop){
        this.scrolled = true;
        } else {
        this.scrolled = false;
      }
    }
  },
};
</script>
