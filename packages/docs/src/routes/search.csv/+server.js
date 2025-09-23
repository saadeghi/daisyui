export const prerender = true

import { readFileSync, readdirSync, statSync } from "fs"
import { join, relative } from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import yaml from "js-yaml"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const initialSearchCSV = `daisyUI Components,/components/
daisyUI Store,/store/
Official daisyUI Figma Library,/store/daisyui-figma-library/
Theme Generator,/theme-generator/
daisyUI on Tailwind CSS Playground,/tailwindplay/
daisyUI Discord,/discord/
daisyUI Swag Store,https://swag.daisyui.com/
daisyUI GitHub,https://github.com/saadeghi/daisyui
daisyUI Changelog,/docs/changelog/
daisyUI llms.txt,/llms.txt`

// List of paths to ignore (relative to routes directory)
const IGNORED_PATHS = [
  "(frameworks)/",
  "blog/",
  "docs/v5/",
  "pages/",
  "docs/upgrade/",
  "components/button/design/",
  "components/button/accessibility/",
]

// Function to check if a file path should be ignored
function shouldIgnoreFile(filePath, routesDir) {
  const relativePath = relative(routesDir, filePath)

  return IGNORED_PATHS.some((ignoredPath) => {
    // Check if the file is in an ignored directory or subdirectory
    return relativePath.startsWith(ignoredPath) || relativePath.includes(`/${ignoredPath}`)
  })
}

// Function to recursively find all .md files
function findMarkdownFiles(dir, fileList = []) {
  try {
    const files = readdirSync(dir)

    files.forEach((file) => {
      const filePath = join(dir, file)
      const stat = statSync(filePath)

      if (stat.isDirectory()) {
        findMarkdownFiles(filePath, fileList)
      } else if (file.endsWith(".md")) {
        fileList.push(filePath)
      }
    })

    return fileList
  } catch (error) {
    console.error("Error reading directory:", dir, error)
    return []
  }
}

// Function to parse frontmatter from markdown content
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/
  const match = content.match(frontmatterRegex)

  if (!match) return {}

  const frontmatterText = match[1]
  const frontmatter = {}

  // Simple YAML parser for frontmatter
  frontmatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":")
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim()
      const value = line
        .substring(colonIndex + 1)
        .trim()
        .replace(/^["']|["']$/g, "")
      frontmatter[key] = value
    }
  })

  return frontmatter
}

// Filter function to remove tilde (~) prefix
function removeTildePrefix(text) {
  return text.replace(/^~\s*/, "")
}

// Filter function to remove HTML tags
function removeHtmlTags(text) {
  // Special handling for Translate component
  const translateMatch = text.match(/<Translate\s+text="([^"]+)"\s*\/?>/)
  if (translateMatch) {
    return translateMatch[1]
  }

  // Remove HTML tags but preserve the text content
  return text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")
}

// Filter function to remove bold markdown (**text**)
function removeBoldMarkdown(text) {
  return text.replace(/\*\*(.*?)\*\*/g, "$1")
}

// Filter function to remove numbered list prefixes (e.g., "4. ")
function removeNumberedListPrefix(text) {
  return text.replace(/^\d+\.\s+/, "")
}

// Function to clean heading text by applying all filters
function cleanHeadingText(text) {
  let cleaned = text

  // Apply filters step by step with debugging
  const original = cleaned

  cleaned = removeTildePrefix(cleaned)
  cleaned = removeHtmlTags(cleaned)
  cleaned = removeBoldMarkdown(cleaned)
  cleaned = removeNumberedListPrefix(cleaned)

  const final = cleaned.trim()

  // Debug empty results
  if (!final && original) {
    console.warn(`Title became empty after cleaning: "${original}" -> "${final}"`)
  }

  return final
}

// Function to extract headings from markdown content
function extractHeadings(content) {
  // Remove frontmatter
  const contentWithoutFrontmatter = content.replace(/^---\s*\n[\s\S]*?\n---\n/, "")

  // Find all headings (## and ###)
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings = []
  let match

  while ((match = headingRegex.exec(contentWithoutFrontmatter)) !== null) {
    const level = match[1].length
    const originalTitle = match[2].trim()

    // Clean the title first
    const cleanedTitle = cleanHeadingText(originalTitle)

    // Skip if cleaned title is empty
    if (!cleanedTitle) {
      console.warn(`Warning: Empty title after cleaning: "${originalTitle}"`)
      continue
    }

    // Create URL anchor from cleaned title
    const anchor = cleanedTitle
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, "") // Remove leading/trailing hyphens

    // Skip if anchor is empty
    if (!anchor) {
      console.warn(`Warning: Empty anchor after processing: "${cleanedTitle}"`)
      continue
    }

    headings.push({
      title: cleanedTitle,
      level,
      anchor,
    })
  }

  return headings
}

// Function to convert file path to URL
function filePathToUrl(filePath, routesDir) {
  const relativePath = relative(routesDir, filePath)

  // Remove +page.md and convert to URL format
  let url = relativePath.replace(/\/\+page\.md$/, "/")

  // Handle root +page.md files
  if (url === "+page.md") {
    url = "/"
  }

  // Remove parentheses from route groups
  url = url.replace(/\([^)]*\)/g, "")

  // Clean up multiple slashes
  url = url.replace(/\/+/g, "/")

  // Ensure leading slash
  if (!url.startsWith("/")) {
    url = "/" + url
  }

  return url
}

// Function to escape CSV values
function escapeCsvValue(value) {
  // If value contains comma, newline, or quote, wrap in quotes and escape quotes
  if (value.includes(",") || value.includes("\n") || value.includes('"')) {
    return '"' + value.replace(/"/g, '""') + '"'
  }
  return value
}

// Function to fetch store data from external API
async function fetchStoreData() {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/store.yaml`)
    if (!response.ok) {
      throw new Error(`Failed to fetch store data: ${response.status}`)
    }
    const yamlText = await response.text()
    return yaml.load(yamlText)
  } catch (e) {
    console.error(`Error loading store data`, e)
    return null
  }
}

// Function to fetch individual product data
async function fetchProduct(id) {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/store/${id}.yaml`)
    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.status}`)
    }
    const yamlText = await response.text()
    return yaml.load(yamlText)
  } catch (e) {
    console.error(`Error loading product ${id}`, e)
    return null
  }
}

// Function to generate store page CSV entries
async function generateStoreEntries() {
  const csvRows = []

  try {
    const storeData = await fetchStoreData()
    if (!storeData || !storeData.productOrder) {
      console.warn("No store data or product order found")
      return csvRows
    }

    // Add main store page
    csvRows.push(`${escapeCsvValue("Store")},${escapeCsvValue("/store/")}`)

    // Add individual product pages
    for (const productId of storeData.productOrder) {
      try {
        const product = await fetchProduct(productId)
        if (product && product.title) {
          const productUrl = `/store/${productId}/`
          csvRows.push(`${escapeCsvValue(product.title)},${escapeCsvValue(productUrl)}`)
        }
      } catch (productError) {
        console.error(`Error processing product ${productId}:`, productError)
        // Continue processing other products
      }
    }
  } catch (error) {
    console.error("Error generating store entries:", error)
  }

  return csvRows
}

export async function GET() {
  try {
    // Path to the routes directory - relative to this file
    const routesDir = join(__dirname, "../(routes)")

    // Find all markdown files
    const markdownFiles = findMarkdownFiles(routesDir)

    const csvRows = []
    const pageEntries = []
    const headingEntries = []

    // Add CSV header
    csvRows.push("title,url")

    // Add store entries first
    const storeEntries = await generateStoreEntries()
    csvRows.push(...storeEntries)

    // First pass: collect all page entries
    for (const filePath of markdownFiles) {
      try {
        // Check if this file should be ignored
        if (shouldIgnoreFile(filePath, routesDir)) {
          continue
        }

        const content = readFileSync(filePath, "utf-8")
        const frontmatter = parseFrontmatter(content)

        // Get page title from frontmatter or filename
        const title = frontmatter.title || frontmatter.desc || "Untitled"

        // Convert file path to URL
        const url = filePathToUrl(filePath, routesDir)

        // Add page entry
        pageEntries.push(`${escapeCsvValue(title)},${escapeCsvValue(url)}`)
      } catch (fileError) {
        console.error(`Error processing file ${filePath}:`, fileError)
        // Continue processing other files
      }
    }

    // Second pass: collect all heading entries
    for (const filePath of markdownFiles) {
      try {
        // Check if this file should be ignored
        if (shouldIgnoreFile(filePath, routesDir)) {
          continue
        }

        const content = readFileSync(filePath, "utf-8")
        const headings = extractHeadings(content)

        // Convert file path to URL
        const url = filePathToUrl(filePath, routesDir)

        // Add heading entries
        headings.forEach((heading) => {
          headingEntries.push(
            `${escapeCsvValue(heading.title)},${escapeCsvValue(url)}#${heading.anchor}`,
          )
        })
      } catch (fileError) {
        console.error(`Error processing file ${filePath}:`, fileError)
        // Continue processing other files
      }
    }

    // Add all page entries first (higher priority)
    csvRows.push(...pageEntries)

    // Then add all heading entries (lower priority)
    csvRows.push(...headingEntries)

    const csvContent = initialSearchCSV + "\n" + csvRows.join("\n")

    return new Response(csvContent, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  } catch (error) {
    console.error("Error generating CSV search data:", error)
    return new Response("Error generating CSV search data", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }
}
