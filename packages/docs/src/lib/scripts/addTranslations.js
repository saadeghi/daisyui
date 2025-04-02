import fs from "fs"
import { join, resolve } from "path"
import { visit } from "unist-util-visit"
import { unified } from "unified"
import remarkParse from "remark-parse"

// Configuration
const config = {
  skipFiles: [
    "packages/docs/src/routes/(routes)/docs/v5/+page.md",
    "packages/docs/src/routes/(routes)/docs/upgrade/+page.md",
    "packages/docs/src/routes/(routes)/docs/layout-and-typography/+page.md",
    "CHANGELOG.md",
  ],
  skipDirectories: ["packages/docs/src/routes/(routes)/blog"],
}

// File System Operations
export const getFiles = (fs, dir, pattern) => {
  if (!fs.existsSync(dir)) {
    // console.log(`Directory not found: ${dir}`)
    return []
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((file) => {
    const filePath = join(dir, file.name)
    return file.isDirectory()
      ? getFiles(fs, filePath, pattern)
      : pattern.test(file.name)
        ? [filePath]
        : []
  })
}

const readMarkdownFile = (fs, filePath) => fs.readFileSync(filePath, "utf-8")

// Path Validation
const normalizeFilePath = (path) => path.replace(/\\/g, "/")

export const shouldSkipFile = (filePath) => {
  const normalizedPath = normalizeFilePath(filePath)
  if (normalizedPath.includes("CHANGELOG.md")) return true

  return (
    config.skipDirectories.some((dir) => normalizedPath.includes(normalizeFilePath(dir))) ||
    config.skipFiles.some(
      (skipPath) =>
        normalizedPath.endsWith(normalizeFilePath(skipPath)) ||
        normalizedPath === normalizeFilePath(skipPath),
    )
  )
}

// Content Processing
export const removeMetadata = (content) =>
  content.startsWith("---") ? content.slice(content.indexOf("---", 3) + 3) : content

export const cleanContent = (content) =>
  content.replace(/<script[\s\S]*?<\/script>/g, "").replace(/{#each[\s\S]*?\/each}/g, "")

// AST Processing
const extractTextFromNode = (node) => {
  if (node.type === "text") return node.value
  if (node.type === "inlineCode") return `\`${node.value}\``
  if (node.type === "link") {
    const text = node.children.map(extractTextFromNode).join("")
    return `[${text}](${node.url})`
  }
  if (node.children?.length) {
    return node.children.map(extractTextFromNode).join("")
  }
  return ""
}

// Text Filtering
const shouldSkipText = (text) => {
  // Array of regex patterns with comments explaining each one
  const skipPatterns = [
    /^.$/, // Skip single character strings (e.g., "a")
    /^\d+$/, // Skip strings that are just numbers (e.g., "99")
    /^--[\w-]+$/, // Skip CSS variables (e.g., "--size-field")
    /^--[\w-]+\s*:.*/, // Skip CSS variable declarations (e.g., "--color-primary: blue;")
    /```[\s\S]*?```/, // Skip content inside code blocks
    /^~/, // Skip text starting with tilde
    /{COLOR_NAME}/, // Skip color name placeholders
    /{.*}/, // Skip content in curly braces
    /^.*\|.*\n\|.*$/, // Skip table-like content with pipe characters
    /^.*\|.*\|.*$/, // Skip lines with multiple pipe characters (likely tables)
    /<[a-z][\s\S]*>/i, // Skip HTML-like content

    // HTML tags and attributes
    /^<\w+.*$/i, // Skip strings starting with HTML tags like "<input"
    /^\/>$/, // Skip closing tag fragments like "/>"
    /^class=["'].*["']>$/, // Skip class attributes
    /^min=["'].*["'].*\/>$/, // Skip HTML attribute combinations ending with "/>"

    // Special characters and keyboard keys
    /^(ctrl|shift|del)$/, // Skip keyboard key names
    /^[◀︎▶︎↖︎↗︎↙︎↘︎]$/, // Skip arrow symbols
    /^\.\.\.$/, // Skip ellipsis

    // Svelte specific tags
    /^\[svelte:.*\].*$/, // Skip svelte tag references like "[svelte:head]..."
    /^<\/svelte:.*>$/, // Skip closing svelte tags like "</svelte:head>"

    // Time formats and units
    /^\d+[hm]$/, // Skip time units like "10h", "24m"
    /^\d+:$/, // Skip time formats like "10:", "24:"

    // URLs and domains
    /^https:\/\/$/, // Skip URL protocol
    /^\.\w+$/, // Skip domain extensions like ".com"

    // HTML attributes
    /^(type|class|required|placeholder|min|max|title)=["'].*["']$/, // Skip HTML attributes
  ]

  // Check if text matches any of the skip patterns
  for (const pattern of skipPatterns) {
    if (pattern.test(text)) return true
  }

  // Additional checks for specific strings that might not be caught by regex
  const specificStringsToSkip = [
    "...",
    "ctrl",
    "shift",
    "del",
    "◀︎",
    "▶︎",
    "↖︎",
    "↗︎",
    "↙︎",
    "↘︎",
    "https://",
    ".com",
    "10h",
    "24m",
    "10:",
    "24:",
  ]

  if (specificStringsToSkip.includes(text)) return true

  // Additional check for code blocks using triple backticks
  if (text.includes("```")) return true

  // Skip lines with HTML-like content
  if (text.startsWith("<") && (text.includes("/>") || text.includes(">"))) return true

  // Skip class attributes
  if (text.includes("class=")) return true

  return false
}

// Additional function to detect if content is within a code block
export const isWithinCodeBlock = (content, position) => {
  const codeBlockMatches = [...content.matchAll(/```[\s\S]*?```/g)]

  for (const match of codeBlockMatches) {
    if (position >= match.index && position < match.index + match[0].length) {
      return true
    }
  }

  return false
}

// Table Processing
export const processTableCells = (node) => {
  const tableCellTexts = new Set()

  visit(node, (node) => {
    if (node.type === "tableCell") {
      const cellContent = node.children
        ?.map((child) => {
          if (child.type === "text") {
            return child.value.trim()
          }
          if (child.type === "paragraph") {
            return child.children?.map((c) => (c.type === "text" ? c.value.trim() : "")).join("")
          }
          return ""
        })
        .join("")
        .trim()

      if (cellContent && !shouldSkipTableCell(cellContent)) {
        tableCellTexts.add(cellContent)
      }
    }
  })

  return tableCellTexts
}

export const shouldSkipTableCell = (text) =>
  Boolean(text.match(/^[-:]+$/)) || Boolean(text.match(/^\s*$/)) || /{COLOR_NAME}/.test(text)

// Translation File Operations
export const loadTranslations = (fs, filePath) => {
  try {
    return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf-8")) : {}
  } catch (error) {
    console.error(`Error loading translations from ${filePath}:`, error)
    return {}
  }
}

export const saveTranslations = (fs, filePath, translations) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(translations, null, 2))
    return true
  } catch (error) {
    console.error(`Error saving translations to ${filePath}:`, error)
    return false
  }
}

// Main Processing Functions
export const processMarkdownFile = (fs, filePath) => {
  if (shouldSkipFile(filePath)) {
    return []
  }

  const content = readMarkdownFile(fs, filePath)
  const processableContent = cleanContent(removeMetadata(content))

  // Check for code blocks in the entire content
  const codeBlocks = [...processableContent.matchAll(/```[\s\S]*?```/g)]
  const codeBlockRanges = codeBlocks.map((match) => [match.index, match.index + match[0].length])

  // Split the content by actual newlines in the source
  const lines = processableContent.split(/\r?\n/)

  // Process each line individually
  const translations = new Set()
  let currentPosition = 0

  lines.forEach((line) => {
    if (!line.trim()) {
      // Update position counter even for empty lines
      currentPosition += line.length + 1 // +1 for the newline
      return
    }

    // Skip processing if this line is within a code block
    const inCodeBlock = codeBlockRanges.some(
      ([start, end]) => currentPosition >= start && currentPosition < end,
    )

    if (!inCodeBlock) {
      // Process each line as separate markdown content
      const lineAst = unified().use(remarkParse).parse(line)

      visit(lineAst, "paragraph", (node) => {
        // Get text from paragraph children
        const text = node.children
          .map((child) => {
            if (child.type === "text") return child.value
            if (child.type === "inlineCode") return `\`${child.value}\``
            if (child.type === "link") {
              const linkText = child.children.map(extractTextFromNode).join("")
              return `[${linkText}](${child.url})`
            }
            return ""
          })
          .join("")
          .trim()

        if (text && !shouldSkipText(text)) {
          translations.add(text)
        }
      })
    }

    // Update position counter
    currentPosition += line.length + 1 // +1 for the newline
  })

  return Array.from(translations)
}

// Main Execution
export const main = (fs, sourceDirs, pattern, translationFilePath) => {
  const mdFiles = sourceDirs.flatMap((dir) => getFiles(fs, resolve(dir), pattern))
  // console.log(`Found ${mdFiles.length} markdown files`)

  const allTranslations = new Set()
  let processedCount = 0

  mdFiles.forEach((file) => {
    const translations = processMarkdownFile(fs, file)
    if (translations.length > 0) {
      processedCount++
      translations.forEach((text) => allTranslations.add(text))
    }
  })

  const existingTranslations = loadTranslations(fs, translationFilePath)
  const newTranslations = Array.from(allTranslations).reduce((acc, text) => {
    if (!existingTranslations[text]) {
      acc[text] = text
    }
    return acc
  }, {})

  const success = saveTranslations(fs, translationFilePath, {
    ...existingTranslations,
    ...newTranslations,
  })

  return {
    processedFiles: processedCount,
    totalFiles: mdFiles.length,
    newTranslationsCount: Object.keys(newTranslations).length,
    success,
  }
}

// Usage
const sourceDirs = ["./packages/docs/src/routes"]
const mdFilePattern = /\.md$/
const translationFilePath = "./packages/docs/src/translation/en.json"

const result = main(fs, sourceDirs, mdFilePattern, translationFilePath)
console.log(`Processed ${result.processedFiles} of ${result.totalFiles} files`)
console.log(`Added ${result.newTranslationsCount} new translations`)
