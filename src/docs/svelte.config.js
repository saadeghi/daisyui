import { mdsvex } from "mdsvex"
import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import headingSlugs from "rehype-slug"
import linkHeadings from "rehype-autolink-headings"
import rehypeExternalLinks from "rehype-external-links"
import remarkGithub from "remark-github"

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
  [rehypeExternalLinks, { rel: ["nofollow"], target: ["_blank"] }],
]
const remarkPlugins = [[remarkGithub, { repository: "https://github.com/saadeghi/daisyui" }]]

export default {
  extensions: [".svelte", ".svelte.md", ".md"],

  preprocess: [
    mdsvex({
      extensions: [".svelte.md", ".md"],
      rehypePlugins: rehypePlugins,
      remarkPlugins: remarkPlugins,
      layout: {
        components: "src/lib/mdsvex-components.svelte",
        blog: "src/lib/mdsvex-blog.svelte",
        _: "src/lib/mdsvex.svelte",
      },
    }),
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
    if (warning.code.startsWith("a11y-no-noninteractive-tabindex")) {
      return
    }
    handler(warning)
  },
}
