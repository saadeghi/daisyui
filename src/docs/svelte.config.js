import { mdsvex } from "mdsvex"
import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import path from "path"
import headingSlugs from "rehype-slug"
import linkHeadings from "rehype-autolink-headings"

const rehypePlugins = [
  headingSlugs,
  [
    linkHeadings,
    {
      behavior: "prepend",
      content: {
        type: "element",
        tagName: "span",
        properties: {
          className: ["mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"],
        },
        children: [
          {
            type: "text",
            value: "#",
          },
        ],
      },
    },
  ],
]

export default {
  extensions: [".svelte", ".svelte.md", ".md"],

  preprocess: [
    mdsvex({
      extensions: [".svelte.md", ".md"],
      rehypePlugins: rehypePlugins,
      layout: {
        _: "src/routes/_markdown.svelte",
      },
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
      optimizeDeps: {
        include: ["fuzzy"],
      },
    },
  },
}
