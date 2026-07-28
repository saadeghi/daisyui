import { visit } from "unist-util-visit"

const decodeHeadingText = (text) => text.replace(/&quot;/g, '"')

const getHtmlHeadingText = (html) => {
  const dataHeadingText = html.match(/\bdata-heading-text=(["'])(.*?)\1/)
  if (dataHeadingText) return decodeHeadingText(dataHeadingText[2])

  const translateText = html.match(/<Translate\s+text=(["'])(.*?)\1/)
  if (translateText) return decodeHeadingText(translateText[2])

  return ""
}

export const getHeadingText = (node) => {
  if (node.type === "text" || node.type === "inlineCode") return node.value
  if (node.type === "html") return getHtmlHeadingText(node.value)
  if (!Array.isArray(node.children)) return ""

  return node.children.map(getHeadingText).join("")
}

export const slugHeadingText = (headingText) =>
  headingText
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

export const createHeadingSlugger = () => {
  const usedIds = new Set()

  return (headingText) => {
    const baseId = slugHeadingText(headingText)
    if (!baseId) return ""

    let id = baseId
    let suffix = 2
    while (usedIds.has(id)) {
      id = `${baseId}-${suffix}`
      suffix += 1
    }
    usedIds.add(id)
    return id
  }
}

export const remarkHeadingIds = () => (tree) => {
  const slugHeading = createHeadingSlugger()

  visit(tree, "heading", (node) => {
    if (node.depth < 2) return

    node.data ??= {}
    node.data.hProperties ??= {}
    node.data.hProperties.id = slugHeading(getHeadingText(node))
  })
}
