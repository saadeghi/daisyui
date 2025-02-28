import path from "node:path"
import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import tailwindcss from "@tailwindcss/vite"
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
	plugins: [
		tailwindcss(),
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
