import { visit } from "./visit.js"

// Adapted from remark-flexible-code-titles (MIT).
// Copyright (c) 2026 ipikuka.
const defaults = {
  title: true,
  titleTagName: "div",
  titleClassName: "remark-code-title",
  container: true,
  containerTagName: "div",
  containerClassName: "remark-code-container",
}

const cleanProperties = (properties) => {
  for (const [key, value] of Object.entries(properties)) {
    if ((typeof value === "string" && value === "") || (Array.isArray(value) && !value.length)) {
      properties[key] = undefined
    }
    if (key === "className") delete properties.className
  }
  return properties
}

const extractCodeInfo = (node, settings) => {
  const { lang: inputLang, meta: inputMeta } = node
  if (!inputLang) return { language: null, title: null, meta: null }

  let language = inputLang
  let meta = inputMeta ?? null
  let title = null

  if (/showLineNumbers/.test(language)) {
    language = language.replace(/showLineNumbers/, "")
    meta = meta?.length ? `${meta} showLineNumbers` : "showLineNumbers"
  }

  if (language.includes("{")) {
    const start = language.search("{")
    const end = language.search("}")
    const metaPart = end >= 0 ? language.substring(start, end + 1) : language.slice(start)
    language = language.replace(metaPart, "")
    meta = meta?.length ? metaPart + meta : metaPart
  }

  if (language.includes(":")) {
    const index = language.search(":")
    const metaPart = language.slice(index)
    language = language.slice(0, index)
    meta = meta?.length ? `${metaPart} ${meta}` : metaPart
  }

  const lineRange = /{([\d\s,-]+)}/g
  if (meta?.length && lineRange.test(meta)) {
    meta = meta.replace(lineRange, (match) => match.replace(/ /g, ""))
  }

  meta = meta?.replace(/(?<=\S)\{/, " {") ?? null
  meta = meta?.replace(/\}(?=\S)/, "} ") ?? null

  if (meta?.includes(":")) {
    const match = meta.match(/:\s*.*?(?=[\s{]|$)/)
    if (match) {
      const matched = match[0]
      title = matched.replace(/:\s*/, "")
      if (/^showLineNumbers$/i.test(title)) {
        title = null
        meta = meta.replace(/:\s*/, "")
      } else {
        meta = meta.replace(matched, "")
      }
    }
  }

  if (!language && typeof settings.handleMissingLanguageAs === "string") {
    language = settings.handleMissingLanguageAs
  }

  meta = meta?.replace(/\s+/g, " ").trim() ?? null
  if (title && settings.tokenForSpaceInTitle) {
    title = title.replaceAll(settings.tokenForSpaceInTitle, " ")
  }

  if (title?.trim() === "") title = null
  if (language === "") language = null
  if (meta === "") meta = null

  return { language, title, meta }
}

export const codeTitles = (options) => {
  const settings = { ...defaults, ...options }

  return (tree) => {
    visit(tree, "code", (node, index, parent) => {
      if (!parent || index === undefined) return

      const { language, title, meta } = extractCodeInfo(node, settings)
      node.lang = language
      node.meta = meta

      let titleNode
      if (settings.title && title) {
        titleNode = {
          type: "paragraph",
          children: [{ type: "text", value: title }],
          data: {
            hName: settings.titleTagName,
            hProperties: {
              className: [settings.titleClassName],
              ...cleanProperties(settings.titleProperties?.(language ?? "", title) ?? {}),
            },
          },
        }
      }

      if (settings.container) {
        const container = {
          type: "container",
          children: titleNode ? [titleNode, node] : [node],
          data: {
            hName: settings.containerTagName,
            hProperties: {
              className: [settings.containerClassName],
              ...cleanProperties(settings.containerProperties?.(language ?? "", title ?? "") ?? {}),
            },
          },
        }
        parent.children.splice(index, 1, container)
      } else if (titleNode) {
        parent.children.splice(index, 0, titleNode)
      }
    })
  }
}
