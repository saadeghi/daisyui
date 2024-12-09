import { mdsvex } from "mdsvex"

import remarkGithub from "remark-github"
import codeTitle from "remark-code-titles"
import remarkCodeTitles from "remark-flexible-code-titles"

import rehypeSlug from "rehype-slug"
import linkHeadings from "rehype-autolink-headings"
import rehypeExternalLinks from "rehype-external-links"
import { visit } from "unist-util-visit"

const placeholders = {
  ":WARNING:": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4 ms-2 inline-block text-warning"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="16.75" r="1.25" fill="currentColor" stroke-width="2"></circle><line x1="12" y1="13" x2="12" y2="9" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line><path d="m10.171,4.06l-7.899,13.783c-.806,1.406.209,3.157,1.829,3.157h15.798c1.62,0,2.635-1.751,1.829-3.157l-7.899-13.783c-.81-1.413-2.849-1.413-3.659,0Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>`,
  ":INFO:": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4 ms-2 inline-block text-info"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" stroke-width="2"></circle></g></svg>`,
}

function replacePlaceholders() {
  return (tree) => {
    visit(tree, "text", (node) => {
      Object.keys(placeholders).forEach((placeholder) => {
        if (node.value.includes(placeholder)) {
          node.type = "html"
          node.value = node.value.replace(new RegExp(placeholder, "g"), placeholders[placeholder])
        }
      })
    })
  }
}

export default function customClasses(options) {
  return (tree) => {
    visit(tree, (node) => {
      if (options[node.type]) {
        if (!node.data) {
          node.data = {}
        }
        if (!node.data.hProperties) {
          node.data.hProperties = {}
        }
        node.data.hProperties.className = (node.data.hProperties.className || []).concat(
          options[node.type],
        )
      }
    })
  }
}

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
  // codeTitle,
  [
    remarkCodeTitles,
    {
      containerClassName: "has-[.code-tab]:my-4",
      titleClassName: "p-1 opacity-60 text-xs code-tab",
    },
  ],
  [
    customClasses,
    {
      blockquote: "alert not-italic items-start text-xs leading-loose *:m-0!",
    },
  ],
  replacePlaceholders,
]

export const mdsvexExtensions = [".svx", ".md"]

const config = {
  extensions: mdsvexExtensions,
  rehypePlugins: rehypePlugins,
  remarkPlugins: remarkPlugins,
  layout: {
    components: "src/lib/mdsvex-components.svelte",
    blog: "src/lib/mdsvex-blog.svelte",
    _: "src/lib/mdsvex.svelte",
  },
}

export const mdsvexConfig = mdsvex(config)
