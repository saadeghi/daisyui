import { mdsvex } from "mdsvex"
import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import path from "path"

export default {
  extensions: [".svelte", ".svelte.md", ".md"],

  preprocess: [
    mdsvex({
      extensions: [".svelte.md", ".md"],
    }),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    trailingSlash: "always",
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: true,
    }),
    vite: {
      server: {
        fs: {
          strict: false,
        },
      },
      resolve: {
        alias: {
          "@src": path.resolve("./src"),
          "@static": path.resolve("./static"),
          "@components": path.resolve("./src/components"),
        },
      },
    },
  },
}
