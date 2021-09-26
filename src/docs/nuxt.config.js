function getFiles(path, format = 'css') {
  const fs = require('fs');
  let filesArray = [];
  fs.readdirSync(path).forEach(file => {
    if (file.endsWith('.' + format) && !file.startsWith('index')) {
      filesArray.push(path + '/' + file)
    }
  });
  return filesArray;
}

export default {
  gtm: {
    id: 'GTM-WJ8HL28',
    enabled: process.env.NODE_ENV === 'production' ? true : false,
    pageTracking: true,
    scriptDefer: true,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'daisyUI — Tailwind CSS Components',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, height=device-height, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Tailwind CSS Components plugin — daisyUI tailwind component library'
      },
      {
        property: "og:site_name",
        content: "Redfern Dev"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://daisyui.com",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Tailwind CSS Components",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Tailwind CSS Components plugin — daisyUI tailwind component library",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://daisyui.com/card.png",
      },
      {
        property: "og:image:width",
        content: "740"
      },
      {
        property: "og:image:height",
        content: "300"
      },

      {
        name: "twitter:site",
        content: "@bobross"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://daisyui.com",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Tailwind CSS Components",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Tailwind CSS Components plugin — daisyUI tailwind component library",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://daisyui.com/card.png",
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      // {
      //   rel: 'stylesheet',
      //   href: (process.env.NODE_ENV === 'production') ? 'https://cdn.jsdelivr.net/npm/daisyui@'+ process.env.DAISYUI_VERSION +'/dist/full.css' : ''
      // },
      // {
      //   rel: 'stylesheet',
      //   href: (process.env.NODE_ENV === 'production') ? 'https://cdn.jsdelivr.net/npm/daisyui@'+ process.env.DAISYUI_VERSION +'/dist/themes.css' : ''
      // },
    ],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'ca-pub-4812562253949561',
        async: true
      }
    //   {
    //     src: "https://cdn.jsdelivr.net/npm/theme-change@2.0.1/index.js",
    //     body: true,
    //     async: true, defer: true
    //   },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    ...(process.env.NODE_ENV === 'production' ? ['~/assets/css/style'] : []),
    ...(process.env.NODE_ENV === 'production' ? [] : ['~/assets/css/fonts']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['node_modules/tailwindcss/base']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../../dist/themes.css']),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../base')]),
    ...(process.env.NODE_ENV === 'production' ? [] : ['node_modules/tailwindcss/components']),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../components/unstyled')]),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../components/styled')]),
    ...(process.env.NODE_ENV === 'production' ? [] : ['node_modules/tailwindcss/utilities']),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../utilities/global')]),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../utilities/unstyled')]),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../utilities/styled')]),

  ],



  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-highlightjs',
    // { src: "~/plugins/theme-change", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  components: [
    '~/components',
    '~/components/ui',
    '~/components/demo',
    '~/components/landing',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
    "@nuxtjs/svg",
    // "nuxt-vite"
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/gtm',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: '/nuxt-files/',
    parallel: true,
    cache: true,
    // hardSource: false,
    // sourceMap: false,
    // postcss: {
    //   plugins: {
    //     'postcss-nested': {},
    //     'tailwindcss': {},
    //   },
    // }
  },
  target: 'static',
  router: {
    base: (process.env.ROUTER_BASE) ? process.env.ROUTER_BASE : '/',
    // linkActiveClass: 'bg-primary bg-opacity-20 text-primary',
    linkExactActiveClass: 'active',
  },
}
