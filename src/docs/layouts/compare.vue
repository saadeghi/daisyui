<template>
<div>
  <div class="drawer drawer-mobile">
    <input id="main-menu" type="checkbox" class="drawer-toggle" v-model="showMainMenu" >
    <main class="flex-grow block overflow-x-hidden bg-base-100 text-base-content drawer-content" ref="drawerContent">
      <Header/>
      <div class="p-4 lg:p-10">
        <Nuxt />
      </div>

    </main>
    <div class="drawer-side">
      <label for="main-menu" class="drawer-overlay"></label>
      <aside class="flex flex-col border-r border-base-200 bg-base-100 text-base-content w-80">

        <div class="sticky inset-x-0 top-0 z-50 hidden w-full py-1 transition duration-200 ease-in-out border-b lg:block border-base-200 bg-base-100">
          <div class="mx-auto space-x-1 navbar max-w-none">

            <div class="flex items-center flex-none">
              <NuxtLink to="/" class="px-2 flex-0 btn btn-ghost md:px-4" aria-label="Homepage">
                <div class="inline-block text-3xl font-title text-primary">
                  <span class="lowercase">daisy</span><span class="uppercase text-base-content">UI</span>
                </div>
              </NuxtLink>
            </div>

            <a href="https://github.com/saadeghi/daisyui/blob/master/CHANGELOG.md" target="_blank" class="font-mono text-xs" rel="nofollow"
              v-bind:class="{
                'opacity-80 pl-2': isHomepage,
                'opacity-50': !isHomepage,
              }"
            >
              <div data-tip="Changelog" class="tooltip tooltip-bottom">
                <span class="hidden lg:inline xl:ml-2">version</span>&nbsp;{{ DAISYUI_VERSION }}
              </div>
            </a>

          </div>
        </div>

        <div>
          <Menu class="flex flex-col p-4 pt-0 compact">
            <MenuItem class="mt-4">
              <NuxtLink v-on:click.native="showMainMenu = false" to="/docs/install">
                <Icon glyph="back" class="inline-block w-6 h-6 mr-2 stroke-current" />
                Go back to docs
              </NuxtLink>
            </MenuItem>
            <MenuItem class="menu-title">
              <span>
                Alternatives
              </span>
            </MenuItem>
            <MenuItem v-for="(item, itemindex) in comparePages" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
              <NuxtLink v-on:click.native="showMainMenu = false" class="justify-between" v-if="item.path" :to="item.path">
                {{ item.name }}
              </NuxtLink>
            </MenuItem>
          </Menu>
        </div>
      </aside>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DAISYUI_VERSION: process.env.DAISYUI_VERSION,
      comparePages: [],
      demoPages: [],
      showMainMenu: false,
    }
  },
  created () {
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/compare')) {
        this.comparePages.push({
          name: routeOption.name.replace("compare-", "").replace(/-/g, " "),
          path: routeOption.path,
        })
      }
    })
  },
  watch: {
    $route () {
      this.$refs.drawerContent.scrollTop = 0;
    }
  },
  computed: {
    isHomepage() {
      return this.$route.path === '/'
    },
  },
}
</script>
