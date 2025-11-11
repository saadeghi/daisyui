import { visit } from "unist-util-visit"

// Helper to escape quotes for HTML attributes
function escapeQuotes(text) {
  return text.replace(/"/g, "&quot;").replace(/'/g, "&#39;")
}

// Helper to get text from a heading node
function getHeadingText(node) {
  if (!node.children || !node.children.length) return ""

  // For ID generation, we want plain text without formatting
  let plainText = ""

  node.children.forEach((child) => {
    if (child.type === "text") {
      plainText += child.value
    } else if (child.type === "inlineCode") {
      plainText += child.value // Just the code content, no backticks for ID
    } else if (child.type === "emphasis") {
      const content =
        child.children
          ?.map((c) => (c.type === "text" ? c.value : c.type === "inlineCode" ? c.value : ""))
          .join("") || ""
      plainText += content
    } else if (child.type === "strong") {
      const content =
        child.children
          ?.map((c) => (c.type === "text" ? c.value : c.type === "inlineCode" ? c.value : ""))
          .join("") || ""
      plainText += content
    } else if (child.type === "link") {
      const linkText =
        child.children
          ?.map((c) => (c.type === "text" ? c.value : c.type === "inlineCode" ? c.value : ""))
          .join("") || ""
      plainText += linkText
    }
  })

  return plainText
}

// Check if a node is a component heading
function isComponentHeading(node) {
  return node.type === "heading" && node.depth === 3 && getHeadingText(node).startsWith("~")
}

// Create initial component structure
function createComponent(headingNode) {
  return {
    type: "component",
    title: getHeadingText(headingNode).slice(1), // Remove the ~ prefix
    description: "",
    descriptionNodes: [], // Store the actual nodes for proper rendering
    demo: [],
    htmlCode: null,
    jsxCode: null,
    nodes: [headingNode],
  }
}

// Helper to check if a code block belongs to a component
function isComponentCode(node) {
  return (node.type === "code" && node.lang && node.lang === "html") || node.lang === "jsx"
}

// Process a node for the current component
function processComponentNode(node, component) {
  component.nodes.push(node)

  if (node.type === "heading" && node.depth === 4) {
    component.description = getHeadingText(node)
    component.descriptionNodes = node.children // Preserve original formatting
  } else if (node.type === "code") {
    if (node.lang === "html" && !component.htmlCode) {
      component.htmlCode = node
    } else if (node.lang === "jsx" && !component.jsxCode) {
      component.jsxCode = node
    }
  } else if (node.type !== "heading") {
    if (node.type === "paragraph") {
      component.demo.push(...node.children.filter((child) => child.type === "html"))
    } else if (node.type === "html") {
      component.demo.push(node)
    }
  }
}

// Helper function to convert nodes to HTML string with proper escaping
function nodesToHtml(nodes) {
  if (!nodes || !Array.isArray(nodes)) return ""

  return nodes
    .map((node) => {
      if (node.type === "text") {
        return node.value
      } else if (node.type === "inlineCode") {
        return `<code>${node.value}</code>`
      } else if (node.type === "emphasis") {
        const content =
          node.children
            ?.map((child) =>
              child.type === "text"
                ? child.value
                : child.type === "inlineCode"
                  ? `<code>${child.value}</code>`
                  : "",
            )
            .join("") || ""
        return `<em>${content}</em>`
      } else if (node.type === "strong") {
        const content =
          node.children
            ?.map((child) =>
              child.type === "text"
                ? child.value
                : child.type === "inlineCode"
                  ? `<code>${child.value}</code>`
                  : "",
            )
            .join("") || ""
        return `<strong>${content}</strong>`
      } else if (node.type === "link") {
        const linkText =
          node.children
            ?.map((child) =>
              child.type === "text"
                ? child.value
                : child.type === "inlineCode"
                  ? `<code>${child.value}</code>`
                  : "",
            )
            .join("") || ""
        // FIXED: Use single quotes for href to avoid quote conflicts
        return `<a href='${node.url}'>${linkText}</a>`
      }
      return ""
    })
    .join("")
}

// Transform a component into its final nodes
function componentToNodes(comp) {
  // Use the properly formatted description with HTML
  const formattedDescription =
    comp.descriptionNodes.length > 0 ? nodesToHtml(comp.descriptionNodes) : comp.description

  // Escape quotes in both title and description for HTML attributes
  const escapedTitle = escapeQuotes(comp.title)
  const escapedDescription = escapeQuotes(formattedDescription)

  const nodes = [
    {
      type: "html",
      value: `<Component title="${escapedTitle}" desc="${escapedDescription}">\n`,
    },
    ...comp.demo,
    {
      type: "html",
      value: "{#snippet html()}\n\n",
    },
    comp.htmlCode,
    {
      type: "html",
      value: "\n{/snippet}",
    },
  ]

  if (comp.jsxCode) {
    nodes.push(
      {
        type: "html",
        value: "\n{#snippet jsx()}\n\n",
      },
      comp.jsxCode,
      {
        type: "html",
        value: "\n{/snippet}",
      },
    )
  }

  nodes.push({
    type: "html",
    value: "\n</Component>",
  })

  return nodes
}

// Main transform function
export function remarkRenderComponent() {
  return (tree) => {
    const components = []
    let currentComponent = null
    const componentNodes = new Set()

    // First pass: collect all components and their content
    visit(tree, (node, index, parent) => {
      // Added index and parent parameters
      if (isComponentHeading(node)) {
        currentComponent = createComponent(node)
        components.push(currentComponent)
        componentNodes.add(node)
        return visit.SKIP
      }

      if (!currentComponent) {
        return
      }

      if (node.type === "heading" && node.depth === 3) {
        currentComponent = null
        return
      }

      // Only process html and jsx code blocks
      if (isComponentCode(node)) {
        componentNodes.add(node)
        if (node.lang === "html" && !currentComponent.htmlCode) {
          processComponentNode(node, currentComponent)
        } else if (node.lang === "jsx" && !currentComponent.jsxCode) {
          processComponentNode(node, currentComponent)
          // Remove the JSX node from the tree immediately
          if (parent && index !== null) {
            parent.children.splice(index, 1)
          }
          currentComponent = null
          return [visit.SKIP, index] // Skip to next sibling
        }
      } else if (!currentComponent.htmlCode) {
        componentNodes.add(node)
        processComponentNode(node, currentComponent)
      }
    })

    // Second pass: rebuild tree
    const finalChildren = []

    tree.children.forEach((node) => {
      if (!componentNodes.has(node)) {
        finalChildren.push(node)
      } else {
        const component = components.find((comp) => comp.nodes[0] === node)
        if (component) {
          finalChildren.push(...componentToNodes(component))
        }
      }
    })

    tree.children = finalChildren
  }
}
