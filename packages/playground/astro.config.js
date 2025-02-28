import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

import react from "@astrojs/react"
import vue from "@astrojs/vue"

export default defineConfig({
  integrations: [react(), vue()],
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
