import { visit } from "./visit.js"

const isExternalUrl = (url) => /^(?:https?:)?\/\//i.test(url)

/**
 * Adds the same attributes as the former rehype-external-links pass, while
 * links are still Markdown nodes.
 */
export const decorateExternalLinks = () => (tree) => {
  const definitions = new Map()

  visit(tree, "definition", (node) => {
    definitions.set(node.identifier.toLowerCase(), node)
  })

  visit(tree, ["link", "linkReference"], (node) => {
    const target = node.type === "link" ? node : definitions.get(node.identifier.toLowerCase())
    if (!target || !isExternalUrl(target.url)) return

    node.data ??= {}
    node.data.hProperties ??= {}
    node.data.hProperties.rel = ["nofollow"]
    node.data.hProperties.target = "_blank"
  })
}
