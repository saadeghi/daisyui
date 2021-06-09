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
      <span class="tab tab-lifted tab-lg flex-grow cursor-default hidden md:block"></span>
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
        { title: "Basscss", url: "/docs/install/basscss" },
      ]
    };
  },
};
</script>

