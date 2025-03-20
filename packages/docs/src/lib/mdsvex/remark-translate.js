import { visit } from "unist-util-visit"
import path from "path"

// Helper function to escape quotes in the text
const escapeQuotes = (text) => text.replace(/"/g, "&quot;")

// Creates a Translate node for a given text
const createTranslateNode = (text) => ({
  type: "html",
  value: `<Translate text="${escapeQuotes(text)}" />`,
})

// Helper function to handle text with code blocks
const handleTextWithCode = (text) => {
  // If the text is already wrapped in HTML tags, return as is
  if (text.startsWith("<") && text.endsWith(">")) {
    return { type: "html", value: text }
  }

  // Split text into parts: text and code blocks
  const parts = []
  let currentText = ""
  let inCode = false
  let codeContent = ""

  for (let i = 0; i < text.length; i++) {
    const char = text[i]

    if (char === "`") {
      if (inCode) {
        // End of code block
        if (currentText.trim()) {
          parts.push(createTranslateNode(currentText.trim()))
          currentText = ""
        }
        parts.push({ type: "html", value: `<code>${codeContent}</code>` })
        codeContent = ""
        inCode = false
      } else {
        // Start of code block
        if (currentText.trim()) {
          parts.push(createTranslateNode(currentText.trim()))
          currentText = ""
        }
        inCode = true
      }
      continue
    }

    if (inCode) {
      codeContent += char
    } else {
      currentText += char
    }
  }

  // Handle any remaining text
  if (currentText.trim()) {
    parts.push(createTranslateNode(currentText.trim()))
  }

  // If we only have one part and it's a translate node, return it directly
  if (parts.length === 1 && parts[0].type === "html" && parts[0].value.startsWith("<Translate")) {
    return parts[0]
  }

  // Otherwise, combine all parts
  const combinedHtml = parts.map((p) => p.value).join(" ")
  return { type: "html", value: combinedHtml }
}

export function remarkTranslate() {
  return (tree, file) => {
    // Skip processing if file is CHANGELOG.md
    const filename = file.filename || file.history?.[0] || ""
    const basename = path.basename(filename)

    if (basename === "CHANGELOG.md") {
      return
    }

    // For headings, preserve original text in a property and add a wrapper with id
    visit(tree, "heading", (node) => {
      if (node.children && node.children.length) {
        const textNodes = node.children.filter((child) => child.type === "text")

        if (textNodes.length) {
          const headingText = textNodes.map((textNode) => textNode.value).join("")

          // Generate an ID for the heading based on the text
          const headingId = headingText
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")

          // Create a wrapper span that contains the Translate component
          // but preserves the original text for ID generation
          const wrapperNode = {
            type: "html",
            value: `<span data-heading-text="${escapeQuotes(headingText)}">${handleTextWithCode(headingText).value}</span>`,
          }

          // Replace text nodes with our wrapper
          node.children = node.children.map((child) =>
            child.type === "text" ? wrapperNode : child,
          )

          // Ensure the heading has the correct ID
          if (!node.data) node.data = {}
          if (!node.data.hProperties) node.data.hProperties = {}
          node.data.hProperties.id = headingId
        }
      }
    })

    // Process table cells individually
    visit(tree, ["table"], (tableNode) => {
      if (tableNode.children) {
        // For each row
        tableNode.children.forEach((row) => {
          if (row.children) {
            // For each cell in the row
            row.children.forEach((cell) => {
              if (cell.children) {
                // For each element in the cell
                cell.children.forEach((child, index) => {
                  if (child.type === "text" && child.value.trim()) {
                    cell.children[index] = handleTextWithCode(child.value.trim())
                  } else if (child.type === "paragraph" && child.children) {
                    // For paragraphs inside cells
                    child.children.forEach((grandChild, grandIndex) => {
                      if (grandChild.type === "text" && grandChild.value.trim()) {
                        child.children[grandIndex] = handleTextWithCode(grandChild.value.trim())
                      }
                    })
                  } else if (child.type === "inlineCode") {
                    // Keep code formatting
                    const code = child.value
                    cell.children[index] = {
                      type: "html",
                      value: `<code>${code}</code>`,
                    }
                  }
                })
              }
            })
          }
        })
      }
    })

    // Process paragraphs
    visit(tree, "paragraph", (node) => {
      if (node.children && node.children.length) {
        let i = 0
        while (i < node.children.length) {
          const child = node.children[i]
          if (child.type === "text") {
            // Split text by line breaks to preserve formatting
            const lines = child.value.split(/(\n+)/)
            if (lines.length > 1) {
              // If there are line breaks, create multiple translate nodes
              const newNodes = []
              lines.forEach((line, lineIndex) => {
                if (lineIndex % 2 === 0 && line.trim()) {
                  // Text content
                  newNodes.push(handleTextWithCode(line))
                } else {
                  // Line breaks
                  newNodes.push({ type: "text", value: line })
                }
              })
              node.children.splice(i, 1, ...newNodes)
              i += newNodes.length
            } else if (child.value.trim()) {
              // Simple text without line breaks
              const nodes = [handleTextWithCode(child.value)]
              node.children.splice(i, 1, ...nodes)
              i += nodes.length
            } else {
              i++
            }
          } else {
            i++
          }
        }
      }
    })

    // Process list items
    visit(tree, "listItem", (node) => {
      if (node.children && node.children.length) {
        node.children.forEach((child) => {
          if (child.type === "paragraph" && child.children) {
            let i = 0
            while (i < child.children.length) {
              const grandChild = child.children[i]
              if (grandChild.type === "text" && grandChild.value.trim()) {
                const nodes = [handleTextWithCode(grandChild.value)]
                child.children.splice(i, 1, ...nodes)
                i += nodes.length
              } else {
                i++
              }
            }
          }
        })
      }
    })

    // Process emphasis and strong
    visit(tree, ["emphasis", "strong"], (node) => {
      if (node.children && node.children.length) {
        let i = 0
        while (i < node.children.length) {
          const child = node.children[i]
          if (child.type === "text" && child.value.trim()) {
            const nodes = [handleTextWithCode(child.value)]
            node.children.splice(i, 1, ...nodes)
            i += nodes.length
          } else {
            i++
          }
        }
      }
    })

    // Process blockquotes
    visit(tree, "blockquote", (node) => {
      if (node.children && node.children.length) {
        node.children.forEach((child) => {
          if (child.type === "paragraph" && child.children) {
            let i = 0
            while (i < child.children.length) {
              const grandChild = child.children[i]
              if (grandChild.type === "text" && grandChild.value.trim()) {
                const nodes = [handleTextWithCode(grandChild.value)]
                child.children.splice(i, 1, ...nodes)
                i += nodes.length
              } else {
                i++
              }
            }
          }
        })
      }
    })
  }
}
