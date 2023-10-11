import path from "path"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"

export default defineConfig({
  plugins: [splitVendorChunkPlugin(), sveltekit()],
  resolve: {
    alias: {
      "@src": path.resolve("/src"),
      "@static": path.resolve("/static"),
      "@components": path.resolve("/src/components"),
    },
  },
})
