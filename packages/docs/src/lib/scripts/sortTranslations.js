import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs"
import { join } from "path"

// Reuse getFiles function from the previous script
export function getFiles(dir, pattern) {
  let results = []
  if (!existsSync(dir)) {
    console.error(`Directory not found: ${dir}`)
    return results
  }
  const list = readdirSync(dir, { withFileTypes: true })
  list.forEach((file) => {
    if (file.isDirectory()) {
      results = results.concat(getFiles(join(dir, file.name), pattern))
    } else if (pattern.test(file.name)) {
      results.push(join(dir, file.name))
    }
  })
  return results.sort() // Sort files alphabetically
}

// Get the reference order from the primary language file (e.g. en.json)
function getPrimaryLanguageOrder(primaryFile) {
  const primaryTranslations = JSON.parse(readFileSync(primaryFile, "utf-8"))
  return Object.keys(primaryTranslations).filter((key) => !key.startsWith("__"))
}

// Sort and write translations to file
function sortTranslationsFile(filePath, primaryOrder) {
  try {
    const content = JSON.parse(readFileSync(filePath, "utf-8"))
    const sortedContent = {}

    // First, add metadata keys (starting with __) in alphabetical order
    const metadataKeys = Object.keys(content)
      .filter((key) => key.startsWith("__"))
      .sort()

    metadataKeys.forEach((key) => {
      sortedContent[key] = content[key]
    })

    // Then add translations in the same order as primary language
    primaryOrder.forEach((key) => {
      if (content.hasOwnProperty(key)) {
        sortedContent[key] = content[key]
      }
    })

    // Add any remaining translations that weren't in primary order
    Object.keys(content).forEach((key) => {
      if (!sortedContent.hasOwnProperty(key)) {
        sortedContent[key] = content[key]
      }
    })

    // Write the sorted content back to file
    writeFileSync(filePath, JSON.stringify(sortedContent, null, 2))
    console.log(`Sorted ${filePath}`)
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error)
    process.exit(1)
  }
}

// Main execution
if (require.main === module) {
  const translationDir = "./packages/docs/src/translation"
  const translationFiles = getFiles(translationDir, /\.json$/)

  if (translationFiles.length === 0) {
    console.error(`No translation files found in ${translationDir}`)
    process.exit(1)
  }

  // Get primary language (en.json) order first
  const primaryFile = join(translationDir, "en.json")
  if (!existsSync(primaryFile)) {
    console.error(`Primary language file (en.json) not found in ${translationDir}`)
    process.exit(1)
  }

  try {
    const primaryOrder = getPrimaryLanguageOrder(primaryFile)

    // Process each translation file using the primary order
    translationFiles.forEach((file) => {
      try {
        sortTranslationsFile(file, primaryOrder)
      } catch (error) {
        console.error(`Error processing translation file ${file}:`, error)
        process.exit(1)
      }
    })
  } catch (error) {
    console.error(`Error reading primary language file:`, error)
    process.exit(1)
  }
}
