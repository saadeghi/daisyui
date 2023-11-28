import path from "path"
import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { visualizer } from "rollup-plugin-visualizer"

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
