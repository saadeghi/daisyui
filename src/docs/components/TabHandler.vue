<template>
  <div class="overflow-x-auto mb-10">
    <div class="tabs flex-nowrap whitespace-nowrap">
      <NuxtLink
        v-for="(tab, index) in tabs"
        v-bind:key="tab.url"
        v-bind:to="tab.url"
        v-bind:class="{ 'tab-active': $nuxt.$route.path == tab.url }"
        class="tab tab-lifted tab-lg"
      >
        {{ tab.title }}
      </NuxtLink>
      <a class="tab tab-lifted tab-lg" target="_blank" rel="noopener" href="https://github.com/saadeghi/daisyui/tree/master/examples">
        <span class="text-xs link flex items-center">
          More examples on github
          <svg class="fill-current ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V12H19V19Z"/></svg>
        </span>
      </a>
      <span class="tab tab-lifted tab-lg flex-grow cursor-default"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Tailwind Plugin", url: "/docs/install" },
        { title: "Use CDN", url: "/docs/install/cdn" },
        { title: "WindiCSS", url: "/docs/install/windicss" },
        { title: "Tachyons", url: "/docs/install/tachyons" },
        { title: "BassCSS", url: "/docs/install/basscss" },
      ]
    };
  },
};
</script>

