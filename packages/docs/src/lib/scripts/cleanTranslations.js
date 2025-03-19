import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs"
import { join } from "path"

const isMatchingFile = (fileName, pattern) => pattern.test(fileName)

const readDirFiles = (dir, options = { withFileTypes: true }) =>
  existsSync(dir) ? readdirSync(dir, options) : []

const readFileContent = (filePath) => readFileSync(filePath, "utf-8")

const parseJSON = (content) => JSON.parse(content)

export const getFilesInDir = (dir, pattern) => {
  const processFile = (file, dir) =>
    file.isDirectory()
      ? getFilesInDir(join(dir, file.name), pattern)
      : isMatchingFile(file.name, pattern)
        ? [join(dir, file.name)]
        : []

  return readDirFiles(dir).flatMap((file) => processFile(file, dir))
}

const extractTranslations = (content) =>
  Object.entries(content)
    .filter(([key]) => !key.startsWith("__"))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

const getTranslationsFromFile = (file) => {
  try {
    return extractTranslations(parseJSON(readFileContent(file)))
  } catch (error) {
    console.error(`Error parsing translation file ${file}:`, error)
    process.exit(1)
  }
}

export const loadAllTranslations = (files) =>
  files.reduce((acc, file) => ({ ...acc, ...getTranslationsFromFile(file) }), {})

const isTranslationUsed = (content, key) => {
  // Escape special regex characters in the key
  const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const escapedKey = escapeRegex(key)

  // Create patterns that match all common usage scenarios
  const patterns = [
    // Direct usage in content
    new RegExp(escapedKey),
    // As a string in quotes (both single and double)
    new RegExp(`["']${escapedKey}["']`),
    // As an object property or parameter
    new RegExp(`[:,]\\s*["']${escapedKey}["']`),
    // In Translate component
    new RegExp(`text=["']${escapedKey}["']`),
    // As object property values (including name, title, etc)
    new RegExp(`(?:name|title):\\s*["']${escapedKey}["']`),
    // As any property value in an object
    new RegExp(`{[^}]*["']${escapedKey}["'][^}]*}`),
    // As direct object property assignment
    new RegExp(`:\\s*["']${escapedKey}["'](?:,|\\s|$)`),
  ]

  // Check if any pattern matches
  return patterns.some((pattern) => pattern.test(content))
}

const findTranslationsInFile = (file, translations) => {
  try {
    // Only process markdown and text files
    if (!file.endsWith(".md") && !file.endsWith(".svelte")) {
      return []
    }

    const content = readFileContent(file)
    return Object.entries(translations)
      .filter(([key, value]) => isTranslationUsed(content, key, value))
      .map(([key]) => key)
  } catch (error) {
    console.error(`Error reading/processing source file ${file}:`, error)
    process.exit(1)
  }
}

export const getUsedTranslations = (sourceFiles, translations) =>
  new Set(sourceFiles.flatMap((file) => findTranslationsInFile(file, translations)))

export const getUnusedTranslations = (allTranslations, usedTranslations) =>
  new Set(Object.keys(allTranslations).filter((key) => !usedTranslations.has(key.trim())))

const normalizeForComparison = (text) => text.replace(/\s+/g, " ").replace(/`/g, "").trim()

const removeUnusedTranslations = (content, unusedTranslations) => {
  const unusedNormalized = new Set(Array.from(unusedTranslations).map(normalizeForComparison))

  return Object.fromEntries(
    Object.entries(content).filter(([key]) => {
      const normalizedKey = normalizeForComparison(key)
      return !unusedNormalized.has(normalizedKey)
    }),
  )
}

const cleanTranslationFile = (filePath, unusedTranslations) => {
  try {
    const content = parseJSON(readFileContent(filePath))
    const cleaned = removeUnusedTranslations(content, unusedTranslations)
    if (Object.keys(content).length !== Object.keys(cleaned).length) {
      writeFileSync(filePath, JSON.stringify(cleaned, null, 2))
      console.log(`Cleaned ${filePath}`)
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error)
  }
}

const translationDir = "./packages/docs/src/translation"
const sourceDirs = ["./packages/docs/src/routes", "./packages/docs/src/components"]
const sourceFilePattern = /\.(md|svelte|js)$/

const translationFiles = getFilesInDir(translationDir, /\.json$/)
if (!translationFiles.length) {
  console.error(`No translation files found in ${translationDir}`)
  process.exit(1)
}

const sourceFiles = sourceDirs.flatMap((dir) => getFilesInDir(dir, sourceFilePattern))

const allTranslations = loadAllTranslations(translationFiles)
const usedTranslations = getUsedTranslations(sourceFiles, allTranslations)
const unusedTranslations = getUnusedTranslations(allTranslations, usedTranslations)

if (unusedTranslations.size > 0) {
  console.log(`Found ${unusedTranslations.size} unused translations`)
  translationFiles.forEach((file) => cleanTranslationFile(file, unusedTranslations))
} else {
  console.log("No unused translations found")
}
