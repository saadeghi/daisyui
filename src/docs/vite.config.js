import path from "path"
import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: path.resolve("/src/components"),
    },
  },
})
