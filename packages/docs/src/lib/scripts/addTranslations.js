import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs"
import { join, resolve } from "path"
import { visit } from "unist-util-visit"
import { unified } from "unified"
import remarkParse from "remark-parse"

const SKIP_FILES = [
  "packages/docs/src/routes/(routes)/docs/v5/+page.md",
  "packages/docs/src/routes/(routes)/docs/upgrade/+page.md",
  "CHANGELOG.md",
]

const SKIP_DIRECTORIES = ["packages/docs/src/routes/(routes)/blog"]

const getFiles = (dir, pattern) => {
  if (!existsSync(dir)) {
    console.error(`Directory not found: ${dir}`)
    return []
  }

  return readdirSync(dir, { withFileTypes: true }).flatMap((file) => {
    const filePath = join(dir, file.name)
    return file.isDirectory()
      ? getFiles(filePath, pattern)
      : pattern.test(file.name)
        ? [filePath]
        : []
  })
}

const shouldSkipFile = (filePath) => {
  const normalizedPath = filePath.replace(/\\/g, "/")

  if (normalizedPath.includes("CHANGELOG.md")) return true

  if (SKIP_DIRECTORIES.some((skipDir) => normalizedPath.includes(skipDir.replace(/\\/g, "/")))) {
    console.log(`Skipping file in directory: ${normalizedPath}`)
    return true
  }

  return SKIP_FILES.some(
    (skipPath) =>
      normalizedPath.endsWith(skipPath.replace(/\\/g, "/")) ||
      normalizedPath === skipPath.replace(/\\/g, "/"),
  )
}

const extractTextFromNode = (node) => {
  if (node.type === "text") return node.value.trim()
  if (node.children && node.children.length) {
    return node.children.map(extractTextFromNode).filter(Boolean).join(" ").trim()
  }
  return ""
}

const isInsideCodeBlock = (node, parent) => {
  if (parent && parent.type === "code") return true

  let currentNode = node
  while (currentNode && currentNode.parent) {
    if (currentNode.parent.type === "code") return true

    if (
      currentNode.parent.type === "root" &&
      currentNode.parent.children.some(
        (child) => child.type === "code" && (child.lang === "html" || child.lang === "jsx"),
      )
    ) {
      const nodeStart = node.position?.start?.offset
      const codeBlocks = currentNode.parent.children.filter(
        (child) => child.type === "code" && (child.lang === "html" || child.lang === "jsx"),
      )

      if (
        codeBlocks.some(
          (codeBlock) =>
            nodeStart > codeBlock.position?.start?.offset &&
            nodeStart < codeBlock.position?.end?.offset + 100,
        )
      ) {
        return true
      }
    }

    currentNode = currentNode.parent
  }

  return false
}

const extractTranslatableText = (filePath) => {
  if (shouldSkipFile(filePath)) {
    console.log(`Skipping file: ${filePath}`)
    return []
  }

  console.log(`Processing file: ${filePath}`)
  const content = readFileSync(filePath, "utf-8")

  let processableContent = content.startsWith("---")
    ? content.slice(content.indexOf("---", 3) + 3)
    : content

  // Remove content inside <script> tags
  processableContent = processableContent.replace(/<script[\s\S]*?<\/script>/g, "")

  // Remove content inside Svelte template tags
  processableContent = processableContent.replace(/{#each[\s\S]*?\/each}/g, "")

  const ast = unified().use(remarkParse).parse(processableContent)
  const translations = new Set()
  const tableCellTexts = new Set()

  visit(ast, "table", (node) => {
    console.log("Found table in AST")
    node.children?.forEach((row, rowIndex) => {
      row.children?.forEach((cell, cellIndex) => {
        let cellText = ""
        cell.children?.forEach((child) => {
          if (child.type === "text" || child.type === "inlineCode") {
            cellText += child.value.trim()
          } else if (child.type === "paragraph") {
            child.children?.forEach((grandChild) => {
              if (grandChild.type === "text") {
                cellText += grandChild.value.trim()
              }
            })
          }
        })

        if (cellText && !cellText.match(/^[-:]+$/) && !cellText.match(/^\s*$/)) {
          if (/{COLOR_NAME}/.test(cellText)) {
            console.log(`Skipping table cell containing {COLOR_NAME}: "${cellText}"`)
            return
          }
          console.log(`[AST] Found table cell [${rowIndex},${cellIndex}]: "${cellText}"`)
          tableCellTexts.add(cellText)
        }
      })
    })
  })

  const tableRegex = /^\s*\|.*\|\s*$/
  const separatorRegex = /^\s*\|[-:\s|]+\|\s*$/
  const lines = processableContent.split("\n")
  let inTable = false
  let tableLineCount = 0

  console.log(`Processing ${lines.length} lines for tables`)

  lines.forEach((line, i) => {
    const trimmedLine = line.trim()

    if (tableRegex.test(trimmedLine)) {
      if (!inTable) {
        console.log(`Found table start at line ${i + 1}: ${trimmedLine}`)
        inTable = true
        tableLineCount = 1
      } else {
        tableLineCount++
      }

      if (separatorRegex.test(trimmedLine)) {
        console.log(`  Skipping separator line: ${trimmedLine}`)
        return
      }

      const cells = trimmedLine.split("|").filter(Boolean)
      console.log(`  Found ${cells.length} cells in line ${i + 1}`)

      cells.forEach((cell, j) => {
        let cellText = cell.trim()

        if (!cellText) return

        if (cellText.startsWith("`") && cellText.endsWith("`")) {
          cellText = cellText.slice(1, -1)
        }

        if (
          (cellText.startsWith("<") && cellText.includes(">")) ||
          /<[a-z][\s\S]*>/i.test(cellText)
        ) {
          console.log(`  Skipping HTML-like cell: ${cellText}`)
          return
        }

        if (/{COLOR_NAME}/.test(cellText)) {
          console.log(`Skipping table cell containing {COLOR_NAME}: "${cellText}"`)
          return
        }

        if (cellText) {
          console.log(`  [Line] Found table cell [${tableLineCount},${j}]: "${cellText}"`)
          tableCellTexts.add(cellText)
        }
      })
    } else if (inTable) {
      console.log(`Table ended at line ${i}`)
      inTable = false
      tableLineCount = 0
    }
  })

  const processNode = (node, type, callback) => {
    visit(ast, type, (node, index, parent) => {
      if (!isInsideCodeBlock(node, parent)) {
        const text = extractTextFromNode(node)
        if (text) callback(text)
      }
    })
  }

  processNode(ast, "heading", (text) => translations.add(text))
  processNode(ast, "paragraph", (text) => translations.add(text))
  processNode(ast, "listItem", (text) => translations.add(text))
  processNode(ast, "emphasis", (text) => translations.add(text))
  processNode(ast, "strong", (text) => translations.add(text))
  processNode(ast, "blockquote", (text) => translations.add(text))

  const filteredTranslations = new Set()

  translations.forEach((text) => {
    if (text.startsWith("~")) {
      console.log(`Skipping text starting with ~: ${text}`)
      return
    }

    if (/{COLOR_NAME}/.test(text)) {
      console.log(`Skipping text containing {COLOR_NAME}: ${text}`)
      return
    }

    if (/{.*}/.test(text)) {
      console.log(`Skipping text containing {}: ${text}`)
      return
    }

    if (text.includes("|") && (text.split("|").length > 2 || text.includes("\n|"))) {
      console.log(`Skipping table-like text: ${text.substring(0, 50)}...`)
      return
    }

    if (text.trim().startsWith("<") && text.includes(">")) {
      console.log(`Skipping HTML-like text: ${text.substring(0, 50)}...`)
      return
    }

    if (/<[a-z][\s\S]*>/i.test(text)) {
      console.log(`Skipping text with HTML tags: ${text.substring(0, 50)}...`)
      return
    }

    if (/^--[\w-]+$/.test(text.trim())) {
      console.log(`Skipping CSS variable: ${text}`)
      return
    }

    filteredTranslations.add(text)
  })

  console.log(`Processing ${tableCellTexts.size} table cells for translations`)
  tableCellTexts.forEach((cellText) => {
    if (/^--[\w-]+$/.test(cellText.trim())) {
      console.log(`Skipping CSS variable in table cell: ${cellText}`)
      return
    }
    filteredTranslations.add(cellText)
  })

  return Array.from(filteredTranslations)
}

const updateTranslationsFile = (translationsFilePath, newTranslations) => {
  let translations = {}

  try {
    if (existsSync(translationsFilePath)) {
      translations = JSON.parse(readFileSync(translationsFilePath, "utf-8"))
    }

    let addedCount = 0

    newTranslations.forEach((text) => {
      if (!translations[text]) {
        translations[text] = text
        addedCount++
      }
    })

    writeFileSync(translationsFilePath, JSON.stringify(translations, null, 2))

    console.log(`Added ${addedCount} new translations to ${translationsFilePath}`)
    return addedCount
  } catch (error) {
    console.error(`Error updating translations file ${translationsFilePath}:`, error)
    return 0
  }
}

const sourceDirs = ["./packages/docs/src/routes"]
const mdFilePattern = /\.md$/
const translationFilePath = "./packages/docs/src/translation/en.json"

const mdFiles = sourceDirs.flatMap((dir) => getFiles(resolve(dir), mdFilePattern))

console.log(`Found ${mdFiles.length} markdown files`)

const allTranslations = new Set()
let processedCount = 0

mdFiles.forEach((file) => {
  const translations = extractTranslatableText(file)
  if (translations.length > 0) {
    processedCount++
    translations.forEach((text) => allTranslations.add(text))
  }
})

console.log(`Processed ${processedCount} of ${mdFiles.length} files`)
console.log(`Found ${allTranslations.size} unique translatable texts`)

const addedCount = updateTranslationsFile(translationFilePath, Array.from(allTranslations))

if (addedCount > 0) {
  console.log(`Successfully added ${addedCount} new translations`)
} else {
  console.log("No new translations added")
}
