export default {
  renderers: [
    '@astrojs/renderer-svelte',
    '@astrojs/renderer-vue',
    '@astrojs/renderer-react',
  ],
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  }
}