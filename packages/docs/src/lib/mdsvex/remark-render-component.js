import { visit } from "unist-util-visit"

// Helper to get text from a heading node
function getHeadingText(node) {
  if (!node.children || !node.children.length) return ""
  const textNode = node.children.find((child) => child.type === "text")
  return textNode ? textNode.value : ""
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

// Transform a component into its final nodes
function componentToNodes(comp) {
  const nodes = [
    {
      type: "html",
      value: `<Component title="${comp.title}" desc="${comp.description}">\n`,
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
