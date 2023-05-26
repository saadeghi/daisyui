import { mdsvex } from "mdsvex"
import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import headingSlugs from "rehype-slug"
import linkHeadings from "rehype-autolink-headings"
import { inlineSvg } from "@svelte-put/preprocess-inline-svg"

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
          className: [
            "mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1",
          ],
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
        _: "src/lib/mdsvex.svelte",
      },
    }),
    inlineSvg(),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: true,
    }),
  },
  onwarn: (warning, handler) => {
    if (warning.code.startsWith("a11y-")) {
      return
    }
    handler(warning)
  },
}
