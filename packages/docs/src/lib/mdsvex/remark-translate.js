import { visit } from "unist-util-visit"
import path from "path"

// Helper function to escape quotes in the text
const escapeQuotes = (text) => text.replace(/"/g, "&quot;")

// Creates a Translate node for a given text
const createTranslateNode = (text) => ({
  type: "html",
  value: `<Translate text="${escapeQuotes(text)}" />`,
})

// Helper function to split combined text into potential translation units
const splitTextIntoSentences = (text) => {
  // Split by line breaks (which represent <br> in markdown when using two spaces)
  const parts = text.split(/\s*\n\s*/).filter((part) => part.trim())

  // Also try splitting by periods followed by uppercase letters (sentence boundaries)
  const allParts = []
  for (const part of parts) {
    // Split sentences but be careful not to split on periods inside code blocks
    const sentences = part.split(/(?<=\.)\s+(?=[A-Z])/)
    allParts.push(...sentences)
  }

  return allParts.map((part) => part.trim()).filter((part) => part.length > 0)
}

// Helper function to handle combined text that might need to be split
const handleCombinedText = (combinedText) => {
  // First, try to process as a single unit
  const singleResult = handleTextWithCode(combinedText)

  // If the text contains line breaks, try splitting into sentences
  if (combinedText.includes("\n")) {
    const sentences = splitTextIntoSentences(combinedText)
    if (sentences.length > 1) {
      // Create separate translation nodes for each sentence
      const nodes = sentences.map((sentence) => handleTextWithCode(sentence))

      // If we have multiple sentences, return them as separate nodes with line breaks
      const result = []
      for (let i = 0; i < nodes.length; i++) {
        result.push(nodes[i])
        if (i < nodes.length - 1) {
          // Add a line break between sentences
          result.push({ type: "html", value: "<br>" })
        }
      }
      return result
    }
  }

  // Return as single translation node
  return [singleResult]
}

// Helper function to handle text with code blocks
const handleTextWithCode = (text) => {
  // If the text is already wrapped in HTML tags, return as is
  if (text.startsWith("<") && text.endsWith(">")) {
    return { type: "html", value: text }
  }

  // For translation keys, preserve backticks as they appear in the original markdown
  // The Translate component will handle converting them to <code> tags during rendering
  return createTranslateNode(text)
}

export function remarkTranslate() {
  return (tree, file) => {
    // Skip processing if file is CHANGELOG.md
    const filename = file.filename || file.history?.[0] || ""
    const basename = path.basename(filename)

    if (basename === "CHANGELOG.md") {
      return
    }

    // Skip processing files that contain CSS code blocks to prevent build issues
    // This is necessary because the translation plugin can interfere with how
    // the build system processes CSS content within fenced code blocks
    let hasCssCodeBlock = false
    visit(tree, "code", (node) => {
      if (
        node.lang &&
        (node.lang.includes("css") || node.lang.includes("scss") || node.lang.includes("sass"))
      ) {
        hasCssCodeBlock = true
      }
    })

    if (hasCssCodeBlock) {
      return // Skip translation for files with CSS/SCSS/Sass code blocks
    }

    // Mark fenced code blocks (```code```) to skip translation
    // but continue processing inline code (`inlineCode`) and all other content
    const skipNodes = new Set()
    visit(tree, "code", (node) => {
      // The "code" node type represents fenced code blocks (```code```)
      // We want to skip translation for these specific nodes
      skipNodes.add(node)
    })

    // Helper function to check if we should skip processing a node or its ancestors
    const _shouldSkip = (node, parent) => {
      if (skipNodes.has(node)) return true
      if (parent && skipNodes.has(parent)) return true
      return false
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
                  if (child.type === "text" && child.value) {
                    cell.children[index] = handleTextWithCode(child.value)
                  } else if (child.type === "paragraph" && child.children) {
                    // For paragraphs inside cells
                    child.children.forEach((grandChild, grandIndex) => {
                      if (grandChild.type === "text" && grandChild.value) {
                        child.children[grandIndex] = handleTextWithCode(grandChild.value)
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

    // Process paragraphs (but skip those inside table cells as they're already processed)
    visit(tree, "paragraph", (node, index, parent) => {
      // Skip paragraphs inside table cells - they are already processed by table processing above
      if (parent && parent.type === "tableCell") {
        return
      }

      if (node.children && node.children.length) {
        // Check if the paragraph contains mixed content (text, inlineCode, break, or link)
        const hasMixedContent =
          (node.children.some((child) => child.type === "inlineCode") ||
            node.children.some((child) => child.type === "break") ||
            node.children.some((child) => child.type === "link")) &&
          node.children.some((child) => child.type === "text")

        if (hasMixedContent) {
          // Combine all children into a single translation string, preserving backticks and links
          let combinedText = ""
          for (const child of node.children) {
            if (child.type === "text") {
              combinedText += child.value
            } else if (child.type === "inlineCode") {
              combinedText += `\`${child.value}\``
            } else if (child.type === "break") {
              combinedText += "\n"
            } else if (child.type === "link") {
              // Output as HTML <a> tag, with <code> for inlineCode inside
              let linkText = ""
              for (const linkChild of child.children || []) {
                if (linkChild.type === "text") {
                  linkText += escapeQuotes(linkChild.value)
                } else if (linkChild.type === "inlineCode") {
                  linkText += `<code>${escapeQuotes(linkChild.value)}</code>`
                } else {
                  // fallback: just ignore other types for now
                }
              }
              combinedText += `<a href=${escapeQuotes(child.url)}>${linkText}</a>`
            }
          }

          // Handle the combined text, potentially splitting into multiple translation units
          const translationNodes = handleCombinedText(combinedText)

          // Replace all children with the translation nodes
          node.children = translationNodes
        } else {
          // Process each child individually as before
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
                  if (lineIndex % 2 === 0 && line) {
                    // Text content
                    newNodes.push(handleTextWithCode(line))
                  } else {
                    // Line breaks
                    newNodes.push({ type: "text", value: line })
                  }
                })
                node.children.splice(i, 1, ...newNodes)
                i += newNodes.length
              } else if (child.value) {
                // Simple text without line breaks
                const nodes = [handleTextWithCode(child.value)]
                node.children.splice(i, 1, ...nodes)
                i += nodes.length
              } else {
                i++
              }
            } else if (child.type === "link") {
              // Output as HTML <a> tag, with <code> for inlineCode inside
              let linkText = ""
              for (const linkChild of child.children || []) {
                if (linkChild.type === "text") {
                  linkText += escapeQuotes(linkChild.value)
                } else if (linkChild.type === "inlineCode") {
                  linkText += `<code>${escapeQuotes(linkChild.value)}</code>`
                } else {
                  // fallback: just ignore other types for now
                }
              }
              const linkHtml = `<a href=${escapeQuotes(child.url)}>${linkText}</a>`
              node.children[i] = handleTextWithCode(linkHtml)
              i++
            } else {
              i++
            }
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
              if (grandChild.type === "text" && grandChild.value) {
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
          if (child.type === "text" && child.value) {
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
              if (grandChild.type === "text" && grandChild.value) {
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
