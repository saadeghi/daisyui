import path from "path"
import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@src": path.resolve("/src"),
      "@static": path.resolve("/static"),
      "@components": path.resolve("/src/components"),
    },
  },
})
