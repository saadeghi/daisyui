import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

import svelte from "@astrojs/svelte"
import alpine from "@astrojs/alpinejs"
// import solid from "@astrojs/solid-js"
import react from "@astrojs/react"
import vue from "@astrojs/vue"

export default defineConfig({
  integrations: [svelte(), alpine(), react(), vue()],
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
