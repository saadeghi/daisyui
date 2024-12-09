import adapter from "@sveltejs/adapter-static"

import { mdsvexConfig, mdsvexExtensions } from "./mdsvex.config.js"

export default {
  extensions: [".svelte", ...mdsvexExtensions],
  preprocess: [mdsvexConfig],
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
