import fs from "fs/promises"
import path, { join } from "path"
import { fileURLToPath } from "url"
import { mdsvex, escapeSvelte } from "mdsvex"
import { createHighlighter } from "shiki"
// import { transformerNotationHighlight } from "@shikijs/transformers"
import { githubLinks } from "./github-links.js"
import { codeTitles } from "./code-titles.js"
import { linkHeadings } from "./heading-links.js"
import { decorateExternalLinks } from "./external-links.js"
import { visit } from "./visit.js"
import { renderComponent } from "./render-component.js"
import { translate } from "./translate.js"
import { assignFallbackHeadingIds, assignHeadingIds } from "./headingIds.js"

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
    "rust",
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

function renderHighlightedBlock(html, code, extraPreClass = "", showCopyButton = true) {
  const clipboardText = encodeURIComponent(code)
  const renderedHtml =
    extraPreClass.length > 0 ? html.replace('<pre class="', `<pre class="${extraPreClass} `) : html

  if (!showCopyButton) {
    return `<div class="relative">\n{@html \`${renderedHtml}\` }\n</div>`
  }

  return `<div class="relative">\n  <div class="tooltip tooltip-left tooltip-accent self-start [justify-self:right] absolute right-2 top-1 z-10" data-tip="copy">\n    <button\n      class="btn btn-square btn-xs btn-neutral"\n      data-copy-code="${clipboardText}"\n      aria-label="Copy to clipboard"\n    >\n      <svg class="size-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n        <path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"></path>\n      </svg>\n    </button>\n  </div>\n{@html \`${renderedHtml}\` }\n</div>`
}

const transformMarkdown = () => {
  const transforms = [
    replacePlaceholders(),
    assignHeadingIds(),
    renderComponent(),
    translate(),
    githubLinks({ repository: "https://github.com/saadeghi/daisyui" }),
    codeTitles({
      containerClassName: "has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]",
      titleClassName: "p-1 -mb-6 italic opacity-60 text-xs code-tab",
    }),
    customClasses({
      blockquote: "alert not-italic items-start text-xs leading-loose *:m-0!",
    }),
    linkHeadings(),
    assignFallbackHeadingIds(),
    decorateExternalLinks(),
  ]

  return async (tree, file) => {
    for (const transform of transforms) {
      await transform(tree, file)
    }
  }
}

export const mdsvexExtensions = [".svx", ".md"]

const config = {
  smartypants: false,
  extensions: mdsvexExtensions,
  remarkPlugins: [transformMarkdown],
  layout: {
    components: join(__dirname, "layout-components.svelte"),
    blog: join(__dirname, "layout-blog.svelte"),
    docs: join(__dirname, "layout-docs.svelte"),
    contentLanding: join(__dirname, "layout-contentLanding.svelte"),
    content: join(__dirname, "layout-content.svelte"),
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
        return renderHighlightedBlock(html, code, "shiki-diff", false)
      }
      return renderHighlightedBlock(escapeSvelte(html), code)
    },
  },
}

export const mdsvexConfig = mdsvex(config)
