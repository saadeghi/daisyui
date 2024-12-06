import remarkGithub from "remark-github"
import codeTitle from "remark-code-titles"
import rehypeSlug from "rehype-slug"
import linkHeadings from "rehype-autolink-headings"
import rehypeExternalLinks from "rehype-external-links"

const rehypePlugins = [
  rehypeSlug,
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

const remarkPlugins = [
  [remarkGithub, { repository: "https://github.com/saadeghi/daisyui" }],
  codeTitle,
]

export const mdsvexConfig = {
  extensions: [".svx", ".md"],
  rehypePlugins: rehypePlugins,
  remarkPlugins: remarkPlugins,
  layout: {
    components: "src/lib/mdsvex-components.svelte",
    blog: "src/lib/mdsvex-blog.svelte",
    _: "src/lib/mdsvex.svelte",
  },
}
