import { visit } from "unist-util-visit"
import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Cache for keyword mappings to avoid re-reading files on every build
let keywordMappings = null
let lastScanTime = 0
const CACHE_DURATION = 5000 // 5 seconds

/**
 * Scans the pages directory and extracts keywords from frontmatter
 * Returns a map of keyword -> { url, title, keywords }
 */
async function scanPagesForKeywords() {
  const now = Date.now()

  // Return cached mappings if still fresh
  if (keywordMappings && now - lastScanTime < CACHE_DURATION) {
    return keywordMappings
  }

  const mappings = new Map()

  // Path to the pages directory
  const pagesDir = path.join(__dirname, "../../routes/(routes)/pages")

  try {
    const entries = await fs.readdir(pagesDir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const pageFile = path.join(pagesDir, entry.name, "+page.md")

        try {
          const content = await fs.readFile(pageFile, "utf-8")

          // Extract frontmatter
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
          if (!frontmatterMatch) continue

          const frontmatter = frontmatterMatch[1]

          // Extract title
          const titleMatch = frontmatter.match(/^title:\s*(.+)$/m)
          const title = titleMatch ? titleMatch[1].trim() : entry.name

          // Extract keywords
          const keywordsMatch = frontmatter.match(/^keywords:\s*(.+)$/m)
          if (!keywordsMatch) continue

          const keywords = keywordsMatch[1]
            .split(",")
            .map((k) => k.trim())
            .filter((k) => k.length > 0)

          const url = `/pages/${entry.name}/`

          // Store each keyword as a mapping to this page
          keywords.forEach((keyword) => {
            mappings.set(keyword.toLowerCase(), {
              url,
              title,
              keywords,
              originalKeyword: keyword,
            })
          })
        } catch (err) {
          // Skip files that can't be read
          console.warn(`Could not read page file: ${pageFile}`, err)
        }
      }
    }
  } catch (err) {
    console.warn(`Could not scan pages directory: ${pagesDir}`, err)
  }

  keywordMappings = mappings
  lastScanTime = now

  return mappings
}

/**
 * Finds keyword matches in text and returns replacement info
 */
function findKeywordMatches(text, keywordMappings, currentPageUrl, linkedKeywords) {
  const matches = []

  // Sort keywords by length (longest first) to avoid partial matches
  const sortedKeywords = Array.from(keywordMappings.keys()).sort((a, b) => b.length - a.length)

  for (const keyword of sortedKeywords) {
    const pageInfo = keywordMappings.get(keyword)

    // Don't link to the current page
    if (pageInfo.url === currentPageUrl) continue

    // Skip if this keyword has already been linked in this page
    if (linkedKeywords.has(keyword)) continue

    // Create a case-insensitive regex that matches whole words/phrases
    // Use word boundaries for single words, but allow phrase matching
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const regex = new RegExp(`\\b${escapedKeyword}\\b`, "gi")

    let match
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        matchedText: match[0],
        keyword,
        pageInfo,
      })
      // Only take the first match for this keyword
      break
    }
  }

  // Sort matches by start position and remove overlapping matches
  matches.sort((a, b) => a.start - b.start)

  const nonOverlapping = []
  let lastEnd = -1

  for (const match of matches) {
    if (match.start >= lastEnd) {
      nonOverlapping.push(match)
      lastEnd = match.end
    }
  }

  return nonOverlapping
}

/**
 * Converts text with keyword matches into mixed text/link nodes
 */
function createLinkedNodes(text, matches) {
  if (matches.length === 0) {
    return [{ type: "text", value: text }]
  }

  const nodes = []
  let lastPos = 0

  for (const match of matches) {
    // Add text before the match
    if (match.start > lastPos) {
      nodes.push({
        type: "text",
        value: text.slice(lastPos, match.start),
      })
    }

    // Add the link
    nodes.push({
      type: "link",
      url: match.pageInfo.url,
      title: match.pageInfo.title,
      children: [
        {
          type: "text",
          value: match.matchedText,
        },
      ],
    })

    lastPos = match.end
  }

  // Add remaining text
  if (lastPos < text.length) {
    nodes.push({
      type: "text",
      value: text.slice(lastPos),
    })
  }

  return nodes
}

export function remarkKeywordLinks() {
  return async (tree, file) => {
    // Get current page URL from file path for context
    const filename = file.filename || file.history?.[0] || ""
    let currentPageUrl = ""

    if (filename.includes("/pages/")) {
      const match = filename.match(/\/pages\/([^/]+)\//)
      if (match) {
        currentPageUrl = `/pages/${match[1]}/`
      }
    }

    // Get keyword mappings
    const keywordMappings = await scanPagesForKeywords()

    if (keywordMappings.size === 0) {
      return // No keywords found, nothing to do
    }

    // Track which keywords have already been linked in this page
    const linkedKeywords = new Set()

    // Process text nodes to find and replace keywords with links
    visit(tree, "text", (node, index, parent) => {
      // Skip if the text node is already inside a link or code block
      if (
        !parent ||
        parent.type === "link" ||
        parent.type === "code" ||
        parent.type === "inlineCode"
      ) {
        return
      }

      // Skip if parent is a heading (to avoid duplicate links with existing heading anchors)
      if (parent.type === "heading") {
        return
      }

      const text = node.value
      if (!text || text.trim().length === 0) {
        return
      }

      // Find keyword matches in this text, excluding already linked keywords
      const matches = findKeywordMatches(text, keywordMappings, currentPageUrl, linkedKeywords)

      if (matches.length > 0) {
        // Mark these keywords as linked
        matches.forEach((match) => linkedKeywords.add(match.keyword))

        // Replace this text node with mixed text/link nodes
        const newNodes = createLinkedNodes(text, matches)

        // Replace the current text node with the new nodes
        parent.children.splice(index, 1, ...newNodes)

        // Return the index adjustment so visit continues correctly
        return index + newNodes.length - 1
      }
    })
  }
}
