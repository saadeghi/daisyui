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
      <aside class="flex flex-col justify-between border-r border-base-200 bg-base-100 text-base-content w-80">

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
          <Menu class="flex flex-col p-4 pt-2 compact">
            <MenuItem class="mt-4 menu-title">
              <span>
                Docs
              </span>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/install">
                <Icon glyph="inbox-in" class="inline-block w-6 h-6 mr-2 stroke-current" />
                install
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/use">
                <Icon glyph="lightning-bolt" class="inline-block w-6 h-6 mr-2 stroke-current" />
                use
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/customize">
                <Icon glyph="code" class="inline-block w-6 h-6 mr-2 stroke-current" />
                customize components
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/default-themes">
                <Icon glyph="color-swatch" class="inline-block w-6 h-6 mr-2 stroke-current" />
                Themes
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/config">
                <Icon glyph="adjustments" class="inline-block w-6 h-6 mr-2 stroke-current" />
                config
              </NuxtLink>
            </MenuItem>
            <!--<MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/features">
                <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current" />
                Features
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/whats-included">
                <Icon glyph="info" class="inline-block w-6 h-6 mr-2 stroke-current" />
                What's included?
              </NuxtLink>
            </MenuItem>-->
          <!--</Menu>
          <Menu class="flex flex-col p-4 pt-0 compact">
            <MenuItem class="menu-title">
              <span>
                Core
              </span>
            </MenuItem>-->
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/core/colors">
                <Icon glyph="color" class="inline-block w-6 h-6 mr-2 fill-current" />
                Colors
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/core/layout">
                <Icon glyph="text" class="inline-block w-6 h-6 mr-2 fill-current" />
                Layout & Typography
              </NuxtLink>
            </MenuItem>
          </Menu>
          <Menu class="flex flex-col p-4 pt-0 compact">
            <MenuItem class="menu-title">
              <span>
                Components
              </span>
            </MenuItem>
            <MenuItem v-for="(item, itemindex) in componentPages" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
              <NuxtLink v-on:click.native="showMainMenu = false" class="justify-between capitalize" v-if="item.path" :to="item.path">
                {{ item.name }}
                <span v-if="item.new" class="lowercase badge badge-sm">new</span>
                <span v-if="item.updated" class="lowercase badge badge-sm">updated</span>
              </NuxtLink>
            </MenuItem>
            <MenuItem class="mt-4 menu-title">
              <span>
                Demos
              </span>
            </MenuItem>
            <MenuItem v-for="(item, itemindex) in demoPages" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" v-if="item.path" :to="item.path">
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
      docPages: [],
      corePages: [],
      componentPages: [],
      demoPages: [],
      showMainMenu: false,
      newComponents: [
        'indicator',
        'kbd',
        'form-range',
        'stack',
        'footer',
      ],
      updatedComponents: [
      ],
    }
  },
  created () {
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/docs')) {
        this.docPages.push({
          name: routeOption.name.replace("docs-", ""),
          path: routeOption.path,
        })
      }
    })
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/core')) {
        this.corePages.push({
          name: routeOption.name.replace("core-", ""),
          path: routeOption.path,
        })
      }
    })
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/components')) {
        this.componentPages.push({
          name: routeOption.name.replace("components-", ""),
          path: routeOption.path,
          new: this.newComponents.includes(routeOption.name.replace("components-", "")),
          updated: this.updatedComponents.includes(routeOption.name.replace("components-", "")),
        })
      }
    })
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/demos')) {
        this.demoPages.push({
          name: routeOption.name.replace("demos-", ""),
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
