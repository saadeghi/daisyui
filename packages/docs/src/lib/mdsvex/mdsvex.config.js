import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import { mdsvex, escapeSvelte } from "mdsvex"
import { createHighlighter } from "shiki"
// import { transformerNotationHighlight } from "@shikijs/transformers"
import remarkGithub from "remark-github"
import remarkCodeTitles from "remark-flexible-code-titles"
// import toc from "@jsdevtools/rehype-toc"
import rehypeSlug from "rehype-slug"
import { remarkLinkHeadings } from "./remark-link-headings.js"
import rehypeExternalLinks from "rehype-external-links"
import { visit } from "unist-util-visit"
import { remarkRenderComponent } from "./remark-render-component.js"
import { remarkTranslate } from "./remark-translate.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const theme = JSON.parse(await fs.readFile(path.join(__dirname, "shiki.theme.json"), "utf-8"))

const highlighter = await createHighlighter({
  langs: [
    "bash",
    "css",
    "diff",
    "dotenv",
    "erb",
    "html",
    "js",
    "json",
    "jsx",
    "md",
    "postcss",
    "py",
    "rb",
    "sh",
    "sass",
    "svelte",
    "toml",
    "ts",
    "tsx",
    "vue",
  ],
  themes: [theme],
  // transformers: [transformerNotationHighlight()],
})

const placeholders = {
  ":WARNING:": `<svg class="size-4 ms-2 inline-block text-warning" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="16.75" r="1.25" fill="currentColor" stroke-width="2"></circle><line x1="12" y1="13" x2="12" y2="9" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line><path d="m10.171,4.06l-7.899,13.783c-.806,1.406.209,3.157,1.829,3.157h15.798c1.62,0,2.635-1.751,1.829-3.157l-7.899-13.783c-.81-1.413-2.849-1.413-3.659,0Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>`,
  ":INFO:": `<svg class="size-4 ms-2 inline-block text-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" stroke-width="2"></circle></g></svg>`,
  ":SUCCESS:": `<svg class="size-4 ms-2 inline-block text-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></g></svg>`,
  ":TLDR:": `<svg class="size-4 ms-2 inline-block text-base-content/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M11 18H3"></path><path d="m15 18 2 2 4-4"></path><path d="M16 12H3"></path><path d="M16 6H3"></path></g></svg>`,
  ":FF:": `<svg class="size-4 inline-block text-base-content/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><path d="M15.053 6.912A1.797 1.797 0 0 0 12 8.201v9a1.8 1.8 0 0 0 3.053 1.287C17.434 16.174 21 12.701 21 12.701s-3.566-3.474-5.947-5.789zm-9 0A1.797 1.797 0 0 0 3 8.201v9a1.8 1.8 0 0 0 3.053 1.287C8.434 16.174 12 12.701 12 12.701S8.434 9.227 6.053 6.912z"></path></g></svg>`,
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

function customClasses(options) {
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
  // [
  //   toc,
  //   {
  //     position: "beforeend",
  //     headings: ["h2", "h3", "h4"],
  //     cssClasses: {
  //       toc: "fixed top-[23rem] end-0 w-[9rem] text-[0.6875rem] pe-4",
  //       link: "opacity-50 hover:opacity-80",
  //       listItem: "",
  //       list: "flex flex-col gap-1",
  //     },
  //   },
  // ],
  // [
  //   linkHeadings,
  //   {
  //     behavior: "prepend",
  //     content: {
  //       type: "element",
  //       tagName: "span",
  //       properties: {
  //         className: [
  //           "heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group",
  //         ],
  //       },
  //       children: [
  //         {
  //           type: "text",
  //           value:
  //             '<svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" ><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"/></svg>',
  //         },
  //       ],
  //     },
  //   },
  // ],
  [rehypeExternalLinks, { rel: ["nofollow"], target: ["_blank"] }],
]

const remarkPlugins = [
  replacePlaceholders,
  remarkRenderComponent,
  remarkTranslate,
  [remarkGithub, { repository: "https://github.com/saadeghi/daisyui" }],
  [
    remarkCodeTitles,
    {
      containerClassName: "has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]",
      titleClassName: "p-1 -mb-6 italic opacity-60 text-xs code-tab",
    },
  ],
  [
    customClasses,
    {
      blockquote: "alert not-italic items-start text-xs leading-loose *:m-0!",
    },
  ],
  remarkLinkHeadings,
]

export const mdsvexExtensions = [".svx", ".md"]

const config = {
  smartypants: false,
  extensions: mdsvexExtensions,
  remarkPlugins: remarkPlugins,
  rehypePlugins: rehypePlugins, // Keep rehypePlugins after remarkPlugins
  layout: {
    components: "src/lib/mdsvex/layout-components.svelte",
    blog: "src/lib/mdsvex/layout-blog.svelte",
    docs: "src/lib/mdsvex/layout-docs.svelte",
    contentLanding: "src/lib/mdsvex/layout-contentLanding.svelte",
  },
  highlight: {
    highlighter: async (code, lang = "text") => {
      let html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }))
      if (lang === "diff") {
        html = html.replace(
          /<span style="color:var\(--shiki-([^)]+)\)">/g,
          '<span class="shiki-$1" style="color:var(--shiki-$1)">',
        )
        html = html.replace(
          /<span class="shiki-punctuation" style="color:var\(--shiki-punctuation\)">([+-])<\/span>/g,
          '<span class="select-none" style="color:var(--shiki-punctuation)">$1</span>',
        )
        return `{@html \`${html.replace('<pre class="', '<pre class="shiki-diff ')}\` }`
      }
      return `{@html \`${escapeSvelte(html)}\` }`
    },
  },
}

export const mdsvexConfig = mdsvex(config)
