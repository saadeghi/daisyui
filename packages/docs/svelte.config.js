import { mdsvex } from "mdsvex"
import adapter from "@sveltejs/adapter-static"

import { mdsvexConfig } from "./mdsvex.config.js"

export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: true,
    }),
  },
  onwarn: (warning, handler) => {
    if (warning.code.startsWith("a11y-no-noninteractive-tabindex")) {
      return
    }
    handler(warning)
  },
}
