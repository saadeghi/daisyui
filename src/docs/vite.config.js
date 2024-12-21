import { sveltekit } from "@sveltejs/kit/vite"
import path from "node:path"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    sveltekit(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
      template: "treemap",
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      $components: path.resolve("/src/components"),
    },
  },
})
