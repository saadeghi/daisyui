import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs"
import { join } from "path"

// Reuse getFiles function
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
  return results.sort()
}

// Get primary language translations
function getPrimaryLanguageContent(primaryFile) {
  try {
    return JSON.parse(readFileSync(primaryFile, "utf-8"))
  } catch (error) {
    console.error(`Error reading primary language file:`, error)
    process.exit(1)
  }
}

// Sync translations with primary language
function syncTranslationsFile(filePath, primaryContent) {
  try {
    const content = JSON.parse(readFileSync(filePath, "utf-8"))
    let hasChanges = false
    const updatedContent = { ...content }

    // Keep track of added translations
    const addedTranslations = []

    // Check for missing translations
    Object.entries(primaryContent).forEach(([key, value]) => {
      if (!content.hasOwnProperty(key)) {
        updatedContent[key] = value
        hasChanges = true
        addedTranslations.push(key)
      }
    })

    if (hasChanges) {
      writeFileSync(filePath, JSON.stringify(updatedContent, null, 2))
      console.log(`Updated ${filePath}`)
      console.log("Added translations:", addedTranslations)
    } else {
      console.log(`No missing translations in ${filePath}`)
    }
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

  // Get primary language file (en.json)
  const primaryFile = join(translationDir, "en.json")
  if (!existsSync(primaryFile)) {
    console.error(`Primary language file (en.json) not found in ${translationDir}`)
    process.exit(1)
  }

  try {
    const primaryContent = getPrimaryLanguageContent(primaryFile)

    // Process each translation file except the primary language file
    translationFiles
      .filter((file) => file !== primaryFile)
      .forEach((file) => {
        try {
          syncTranslationsFile(file, primaryContent)
        } catch (error) {
          console.error(`Error processing translation file ${file}:`, error)
          process.exit(1)
        }
      })
  } catch (error) {
    console.error(`Error processing primary language file:`, error)
    process.exit(1)
  }
}
