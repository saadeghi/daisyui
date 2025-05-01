<script>
  import { goto } from "$app/navigation"
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import { t } from "$lib/i18n.svelte.js"

  const newtabicon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="inline-block ms-1 size-3 fill-current opacity-0 group-hover:opacity-70"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z" /></svg>`
</script>

<div class="h-20"></div>

<div data-sveltekit-preload-data>
  <div class="bg-base-100 text-base-content">
    <footer class="footer md:footer-horizontal mx-auto max-w-7xl px-4 py-20 text-xs">
      <div>
        <div class="flex items-center gap-2">
          <a
            data-sveltekit-preload-data
            href="/"
            aria-current="page"
            aria-label="daisyUI"
            class="-ms-4 flex w-35 shrink-0 items-center gap-2 md:-mt-4 md:w-50"
            oncontextmenu={(e) => {
              e.preventDefault()
              goto("/brand")
            }}
          >
            <LogoHorizontal />
          </a>
        </div>
        <p class="text-base-content/70 mb-2">
          {@html $t("footer-tagline")}
        </p>
        <div class="mb-2 grid grid-cols-5 gap-2 lg:gap-3">
          <a
            title="GitHub"
            target="_blank"
            rel="noopener, noreferrer"
            href="https://github.com/saadeghi/daisyui"
            class="opacity-50 hover:opacity-100"
          >
            <svg
              class="size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-label="GitHub"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                >
                </path>
              </g>
            </svg>
          </a>

          <a
            title="Discord"
            target="_blank"
            rel="noopener, noreferrer"
            href="https://daisyui.com/discord/"
            class="opacity-50 hover:opacity-100"
          >
            <svg
              class="size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-label="Discord"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path
                  d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
                >
                </path>
                <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
              </g>
            </svg>
          </a>
          <a
            title="OpenCollective"
            target="_blank"
            rel="noopener, noreferrer"
            href="https://opencollective.com/daisyui"
            class="opacity-50 hover:opacity-100"
          >
            <svg
              class="m-0.5 size-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-label="OpenCollective"
            >
              <g fill="currentColor">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.54 0 4.894-.79 6.834-2.135l-3.107-3.109a7.715 7.715 0 1 1 0-13.512l3.107-3.109A11.943 11.943 0 0 0 12 0zm9.865 5.166l-3.109 3.107A7.67 7.67 0 0 1 19.715 12a7.682 7.682 0 0 1-.959 3.727l3.109 3.107A11.943 11.943 0 0 0 24 12c0-2.54-.79-4.894-2.135-6.834z"
                >
                </path>
              </g>
            </svg>
          </a>
          <a
            title="NPM"
            target="_blank"
            rel="noopener, noreferrer"
            href="https://www.npmjs.com/package/daisyui"
            class="opacity-50 hover:opacity-100"
          >
            <svg
              class="m-0.5 size-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-label="NPM"
              ><g fill="currentColor"><path d="M0 0v16h16V0H0zm13 13h-2V5H8v8H3V3h10v10z"></path></g
              ></svg
            >
          </a>
          <a
            title="X"
            target="_blank"
            rel="noopener, noreferrer"
            href="https://x.com/daisyui_"
            class="opacity-50 hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"
              >
              </path>
            </svg>
          </a>
          <a
            title="Unpkg CDN"
            target="_blank"
            rel="noopener, noreferrer"
            href="https://unpkg.com/browse/daisyui/"
            class="opacity-50 hover:opacity-100"
          >
            <svg
              class="size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-label="Unpkg CDN"
            >
              <path
                fill="currentColor"
                d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461.697-.057 1.563-.057 2.655-.057M9.75 8a.75.75 0 0 0-1.5 0v6A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14V8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"
              >
              </path>
            </svg>
          </a>
          <a
            title="JSdeliver CDN"
            target="_blank"
            rel="noopener, noreferrer"
            href="https://www.jsdelivr.com/package/npm/daisyui"
            class="opacity-50 hover:opacity-100"
          >
            <svg
              class="m-0.5 size-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-label="JSdeliver CDN"
            >
              <path
                fill="currentColor"
                d="M11.851 0L.811 4.02l1.56 14.7L11.85 24l9.6-5.28 1.74-14.76zm.062 4.622a6.668 6.75 0 0 1 2.666.572 12.507 12.507 0 0 0-2.59 1.95c-.045-.02-.092-.031-.138-.045a1.181 1.181 0 0 0-.346-.056c-.071 0-.141.01-.21.021a8.91 8.91 0 0 1-.615-2.318 6.668 6.75 0 0 1 1.171-.122 6.668 6.75 0 0 1 .062-.002zm-1.99.312a9.763 9.763 0 0 0 .69 2.504 1.213 1.213 0 0 0-.328.825 1.202 1.202 0 0 0 .18.63c-.937 1.294-1.656 2.803-1.905 4.31-.01.056-.013.11-.02.166-.282.09-.515.284-.656.54-.987-.333-1.885-.968-2.615-2.022a6.668 6.75 0 0 1-.026-.515 6.668 6.75 0 0 1 4.68-6.438zm5.507.709a6.668 6.75 0 0 1 2.53 2.9c-.377.953-1.049 1.892-1.893 2.727a1.242 1.242 0 0 0-.644-.184 1.243 1.243 0 0 0-.768.27c-.462-.354-.91-.737-1.318-1.168-.333-.35-.637-.73-.921-1.123.19-.215.31-.494.31-.802 0-.212-.061-.41-.159-.586 1.058-1.008 2.112-1.67 2.863-2.034zm-3.925 1.982a.624.624 0 0 1 .346.114.624.624 0 0 1 .292.524.624.624 0 0 1-.292.524.626.626 0 0 1-.346.113.634.634 0 0 1-.638-.637c0-.355.283-.638.638-.638zm-.441 1.771a1.205 1.205 0 0 0 .675.062c.036.05.075.097.112.148a11.438 11.438 0 0 0 .921 1.119 12.103 12.103 0 0 0 1.446 1.277c-.032.11-.054.224-.054.342a1.236 1.236 0 0 0 .066.38 9.91 9.91 0 0 1-2.118 1.042c-.087.029-.173.052-.261.078a7.735 7.735 0 0 1-1.87.332 1.15 1.15 0 0 0-.66-.773c.004-.024.005-.049.01-.073.219-1.333.873-2.73 1.733-3.934zm7.272.19a6.668 6.75 0 0 1 .245 1.786 6.668 6.75 0 0 1-.259 1.856 9.993 9.993 0 0 1-1.666-.63 1.243 1.243 0 0 0-.065-.713 9.434 9.434 0 0 0 1.745-2.3zm-2.913 2.101c.367 0 .657.291.657.658s-.291.657-.657.657c-.367 0-.658-.29-.658-.657s.29-.658.658-.658zm.837 1.59a10.79 10.79 0 0 0 1.802.688 6.668 6.75 0 0 1-6.149 4.157 6.668 6.75 0 0 1-.062-.004 6.668 6.75 0 0 1-.042 0c-.087-.042-.168-.08-.266-.129-.312-.154-.667-.352-.846-.5a3.796 3.796 0 0 1-1.294-2.03c.21-.111.38-.284.487-.495a8.428 8.428 0 0 0 1.96-.306 9.11 9.11 0 0 0 .513-.154 11.083 11.083 0 0 0 2.341-1.13c.205.143.452.23.719.23a1.248 1.248 0 0 0 .837-.328zm-10.707.116a5.761 5.761 0 0 0 2.212 1.298 1.146 1.146 0 0 0 .857.87 4.602 4.602 0 0 0 1.24 2.222 6.668 6.75 0 0 1-4.31-4.39zm3.327.464c.331 0 .595.263.595.596s-.264.595-.595.595a.59.59 0 0 1-.596-.595.591.591 0 0 1 .596-.596z"
              >
              </path>
            </svg>
          </a>
          <a
            title="StackBlitz"
            target="_blank"
            rel="noopener, noreferrer"
            href="/stackblitz"
            class="opacity-50 hover:opacity-100"
          >
            <svg
              class="size-4.5"
              aria-label="StackBlitz"
              viewBox="0 0 56 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4273 48.2853C23.7931 47.5845 23.0614 46.8837 22.3298 46.8837H1.11228C0.0148224 46.8837 -0.350997 45.8326 0.380642 45.1318L40.9866 0.282084C41.7182 -0.418693 43.1815 0.282084 42.8157 1.33325L32.9386 30.0651C32.5727 30.7659 32.9386 31.4666 33.6702 31.4666H54.8877C55.9852 31.4666 56.351 32.5178 55.6194 33.2186L15.0134 77.7179C14.2818 78.4187 12.8185 77.7179 13.1843 76.6667L23.4273 48.2853Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            title="CodePen"
            target="_blank"
            rel="noopener, noreferrer"
            href="/codepen"
            class="opacity-50 hover:opacity-100"
          >
            <svg
              class="size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-label="CodePen"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="m12 4 8 5.2M12 4 4 9.2M12 4v5.2m8 0v5.6m0-5.6-8 5.6m8 0L12 20m8-5.2-8-5.6M12 20l-8-5.2m8 5.2v-5.2m-8 0V9.2m0 5.6 8-5.6m-8 0 8 5.6"
                >
                </path>
              </g>
            </svg>
          </a>
          <a
            title="Tailwind Play"
            target="_blank"
            rel="noopener, noreferrer"
            href="/tailwindplay"
            class="opacity-50 hover:opacity-100"
          >
            <svg
              class="size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 54 33"
              aria-label="Tailwind Play"
            >
              <g clip-path="url(#twprefix__clip0)">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clip-rule="evenodd"
                >
                </path>
              </g>
              <defs>
                <clipPath id="twprefix__clip0">
                  <path fill="#fff" d="M0 0h54v32.4H0z"> </path>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <a href="/brand/" class="link link-hover">daisyUI Logo and brand</a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/daisyui/blob/master/LICENSE"
          class="link link-hover group"
        >
          {$t("license")}
          {@html newtabicon}
        </a>
        <a href="/docs/faq/" class="link link-hover">{$t("FAQ")}</a>
        <a href="/docs/roadmap/" class="link link-hover">
          {$t("Roadmap")}
        </a>
        <a href="/docs/changelog/" class="link link-hover">
          {$t("changelog")}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md"
          class="link link-hover group"
        >
          {$t("contributing")}
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="/llms.txt"
          class="link link-hover group"
        >
          llms.txt
          {@html newtabicon}
        </a>
      </div>
      <div>
        <span class="footer-title opacity-70">{$t("pages")}</span>
        <a class="link link-hover" href="/docs/install/">{$t("how-to-install")}</a>
        <a class="link link-hover" href="/docs/use/">{$t("how-to-use-components")}</a>
        <a class="link link-hover" href="/docs/customize/">{$t("how-to-customize")}</a>
        <a class="link link-hover" href="/docs/themes/">{$t("how-to-use-themes")}</a>
        <a class="link link-hover" href="/docs/colors/">{$t("color-system")}</a>
        <a class="link link-hover" href="/docs/config/">{$t("config")}</a>
        <a class="link link-hover" href="/resources/">{$t("Resources")}</a>
        <a class="link link-hover" href="/blog/">{$t("Blog")}</a>
        <a class="link link-hover" href="/store/">{$t("Store")}</a>
        <a class="link link-hover" href="/store/351127/">daisyUI Figma Library</a>
      </div>
      <div>
        <span class="footer-title opacity-70">{$t("Frameworks")}</span>
        <a class="link link-hover" href="/angular-component-library">Angular</a>
        <a class="link link-hover" href="/astro-component-library">Astro</a>
        <a class="link link-hover" href="/django-component-library">Django</a>
        <!-- <a class="link link-hover" href="/electron-component-library">Electron</a> -->
        <!-- <a class="link link-hover" href="/htmx-component-library">Htmx</a> -->
        <a class="link link-hover" href="/laravel-component-library">Laravel</a>
        <!-- <a class="link link-hover" href="/lit-component-library">Lit</a> -->
        <a class="link link-hover" href="/nextjs-component-library">Nextjs</a>
        <a class="link link-hover" href="/nuxt-component-library">Nuxt</a>
        <!-- <a class="link link-hover" href="/qwik-component-library">Qwik</a> -->
        <a class="link link-hover" href="/rails-component-library">Rails</a>
        <a class="link link-hover" href="/react-component-library">React</a>
        <!-- <a class="link link-hover" href="/solid-component-library">Solid</a> -->
        <a class="link link-hover" href="/svelte-component-library">Svelte</a>
        <!-- <a class="link link-hover" href="/unocss-component-library">UnoCSS</a> -->
        <a class="link link-hover" href="/vue-component-library">Vue</a>
      </div>
      <div>
        <span class="footer-title opacity-70">{$t("Compare libraries")}</span>
        <a class="link link-hover" href="/compare/mui-vs-daisyui">MUI vs daisyUI</a>
        <a class="link link-hover" href="/compare/shadcn-vs-daisyui">shadcn/ui vs daisyUI</a>
        <a class="link link-hover" href="/compare/bootstrap-vs-daisyui">Bootstrap vs daisyUI</a>
        <a class="link link-hover" href="/compare/flowbite-vs-daisyui">Flowbite vs daisyUI</a>
        <a class="link link-hover" href="/compare/radix-vs-daisyui">Radix vs daisyUI</a>
        <a class="link link-hover" href="/compare/bulma-vs-daisyui">Bulma vs daisyUI</a>
        <a class="link link-hover" href="/compare/nuxtui-vs-daisyui">NuxtUI vs daisyUI</a>
        <a class="link link-hover" href="/compare/heroui-vs-daisyui">HeroUI vs daisyUI</a>
        <a class="link link-hover" href="/compare/preline-vs-daisyui">Preline UI vs daisyUI</a>
        <a class="link link-hover" href="/compare/chakra-vs-daisyui">Chakra UI vs daisyUI</a>
      </div>

      <div>
        <span class="footer-title opacity-70">{$t("related projects")}</span>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/theme-change"
          class="link link-hover group"
        >
          Theme Change
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://mary-ui.com/"
          class="link link-hover group"
        >
          MaryUI (Laravel)
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/Dzoukr/Feliz.DaisyUI"
          class="link link-hover group"
        >
          Feliz.DaisyUI (F#)
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/phcurado/daisy_ui_components"
          class="link link-hover group"
        >
          Phcurado (Phoenix)
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://tailscan.com/?ref=daisyui"
          class="link link-hover group"
        >
          Tailscan extension
          {@html newtabicon}
        </a>
      </div>
    </footer>
  </div>
  <footer
    class="footer footer-center border-base-200 bg-base-200 text-base-content border-t px-4 py-12"
  >
    <div class="flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
      <a
        href="https://x.com/saadeghi"
        rel="noopener, noreferrer"
        target="_blank"
        class="inline-flex items-center justify-center hover:opacity-90"
      >
        <div class="avatar me-3">
          <div class="mask mask-squircle bg-neutral h-14 w-14 p-px">
            <img
              loading="lazy"
              width="54"
              height="54"
              src="https://img.daisyui.com/images/profile/people/pouya-saadeghi.webp"
              alt="Pouya Saadeghi"
              class="mask mask-squircle"
            />
          </div>
        </div>
        <div class="text-left">
          <p class="text-base-content/70 text-xs">{$t("created-by")}</p>
          <p class="text-base-content font-title text-lg font-semibold">Pouya Saadeghi</p>
        </div>
      </a>
      <div class="max-w-md grow text-left">
        <!-- <div id="mc_embed_signup">
          <form
            action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate=""
          >
            <input
              data-group="store group"
              type="checkbox"
              name="group[347002][8]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <input
              data-group="discounts group"
              type="checkbox"
              name="group[347002][1]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <input
              data-group="releases group"
              type="checkbox"
              name="group[347002][2]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <input
              data-group="blog group"
              type="checkbox"
              name="group[347002][4]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <input
              data-group="news group"
              type="checkbox"
              name="group[347002][16]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <div class="flex flex-col gap-2 w-full max-w-sm">
              <label for="mce-EMAIL">
                <div>
                  Enter your email address
                  <div class="label-text text-base-content/70 text-xs">
                    to get updates, news and discounts
                  </div>
                </div>
              </label>
              <div class="join">
                <input
                  type="email"
                  autocomplete="email"
                  name="EMAIL"
                  class="join-item input input-bordered w-full max-w-sm"
                  id="mce-EMAIL"
                  placeholder="mail@site.com"
                  required
                />
                <button name="subscribe" class="join-item btn btn-neutral">Subscribe</button>
              </div>
            </div>
            <div aria-hidden="true" class="hidden">
              <input
                type="text"
                name="b_42813cff910e47b1bd132369a_9fd7333f07"
                tabindex="-1"
                value=""
              />
            </div>
          </form>
        </div> -->

        <form
          action="https://app.kit.com/forms/7041226/subscriptions"
          method="post"
          target="_blank"
          class="flex flex-col"
        >
          <p class="text-base-content/70 mb-4 text-xs font-bold">
            Get the daisyUI updates and news
          </p>
          <div class="join mb-2">
            <input
              type="email"
              class="join-item input"
              name="email_address"
              placeholder="email@site.com"
              required
            />
            <button class="join-item btn btn-neutral">Subscribe</button>
          </div>
          <p class="text-base-content/60 text-[0.625rem] tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="text-success inline-block size-3"
            >
              <path
                fill-rule="evenodd"
                d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                clip-rule="evenodd"
              />
            </svg>
            We don't share your email address with anyone
          </p>
        </form>
      </div>
    </div>
  </footer>
</div>
