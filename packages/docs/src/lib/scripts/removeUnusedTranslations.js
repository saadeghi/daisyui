import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs"
import { join } from "path"

// Helper function to recursively get all files matching a pattern
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
  return results
}

// Load translations from files
export function loadTranslations(files) {
  const translations = {}
  files.forEach((file) => {
    try {
      const content = JSON.parse(readFileSync(file, "utf-8"))
      for (const key in content) {
        if (key.startsWith("__")) continue
        translations[key] = content[key]
      }
    } catch (error) {
      console.error(`Error parsing translation file ${file}:`, error)
      process.exit(1)
    }
  })
  return translations
}

// Find used translations in source files
export function findUsedTranslations(sourceFiles, translations) {
  const usedTranslations = new Set()

  for (const file of sourceFiles) {
    try {
      const content = readFileSync(file, "utf-8")
      const contentLower = content.toLowerCase()

      for (const key in translations) {
        // Check for the translation key itself
        if (content.includes(key)) {
          usedTranslations.add(key)
          continue
        }

        // Check for the translation value
        const keyToFind = translations[key].toLowerCase()
        const cleanKeyToFind = keyToFind.replace(/[^a-z0-9]/g, "")
        const cleanContent = contentLower.replace(/[^a-z0-9]/g, "")

        if (cleanContent.includes(cleanKeyToFind)) {
          usedTranslations.add(key)
        }
      }
    } catch (error) {
      console.error(`Error reading/processing source file ${file}:`, error)
      process.exit(1)
    }
  }

  return usedTranslations
}

// Find unused translations
export function findUnusedTranslations(allTranslations, usedTranslations) {
  const unusedTranslations = new Set()
  for (const key in allTranslations) {
    if (!usedTranslations.has(key)) {
      unusedTranslations.add(key)
    }
  }
  return unusedTranslations
}

// Clean translations file
export function cleanTranslationsFile(filePath, unusedTranslations) {
  try {
    const content = JSON.parse(readFileSync(filePath, "utf-8"))
    let modified = false

    unusedTranslations.forEach((key) => {
      if (key in content) {
        delete content[key]
        modified = true
      }
    })

    if (modified) {
      writeFileSync(filePath, JSON.stringify(content, null, 2))
      console.log(`Cleaned ${filePath}`)
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error)
  }
}

// Main execution
if (require.main === module) {
  const translationDir = "./packages/docs/src/translation"
  const sourceDirs = ["./packages/docs/src/routes", "./packages/docs/src/components"]
  const sourceFilePattern = /\.(md|svelte|js)$/

  const translationFiles = getFiles(translationDir, /\.json$/)
  if (translationFiles.length === 0) {
    console.error(`No translation files found in ${translationDir}`)
    process.exit(1)
  }

  const allSourceFiles = []
  sourceDirs.forEach((dir) => {
    allSourceFiles.push(...getFiles(dir, sourceFilePattern))
  })

  const allTranslations = loadTranslations(translationFiles)
  const usedTranslations = findUsedTranslations(allSourceFiles, allTranslations)
  const unusedTranslations = findUnusedTranslations(allTranslations, usedTranslations)

  if (unusedTranslations.size > 0) {
    console.log(`Found ${unusedTranslations.size} unused translations`)
    translationFiles.forEach((file) => cleanTranslationsFile(file, unusedTranslations))
  } else {
    console.log("No unused translations found")
  }
}
