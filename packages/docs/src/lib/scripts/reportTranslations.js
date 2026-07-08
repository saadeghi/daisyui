import fs from "node:fs"
import {
  chunkNames,
  defaultLang,
  extractSourceTranslations,
  getExpectedKeysByChunk,
  getLanguages,
  getTranslationFilePath,
  getUnusedTranslationKeys,
  readTranslations,
  repoRelativePath,
} from "./translationConfig.js"

const verbose = process.argv.includes("-v") || process.argv.includes("--verbose")
const formatCount = (value) => (value === 0 ? "-" : value)
const languageRows = []
const chunkRows = []
const languages = [
  defaultLang,
  ...getLanguages()
    .filter((lang) => lang !== defaultLang)
    .sort(),
]
const unusedByChunk = getUnusedTranslationKeys()
const sourceTranslations = extractSourceTranslations()
const expectedKeysByChunk = getExpectedKeysByChunk(sourceTranslations)
const sourceKeys = new Set()
for (const { keys } of sourceTranslations.values()) {
  for (const key of keys) sourceKeys.add(key)
}
const staleEnglishKeysByChunk = Object.fromEntries(
  chunkNames.map((chunk) => {
    const englishTranslations = readTranslations(defaultLang, chunk)
    return [chunk, Object.keys(englishTranslations).filter((key) => !sourceKeys.has(key))]
  }),
)
const sourceByChunk = Object.fromEntries(
  chunkNames.map((chunk) => {
    const englishTranslations = readTranslations(defaultLang, chunk)
    const englishKeys = Object.keys(englishTranslations)
    const sourceKeys = chunk === "common" ? englishKeys : [...expectedKeysByChunk[chunk]]
    return [chunk, sourceKeys]
  }),
)
const issues = {
  unused: [],
  extra: [],
  missing: [],
}
const issueLabels = {
  unused: "Unused translation",
  extra: "Missing in English",
  missing: "Missing in translation",
}

const getKeyLine = (filePath, key) => {
  const encodedKey = JSON.stringify(key)
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/)
  const index = lines.findIndex((line) => line.trimStart().startsWith(`${encodedKey}:`))
  return index === -1 ? 1 : index + 1
}

const addIssue = (type, filePath, key) => {
  issues[type].push(`${repoRelativePath(filePath)}:${getKeyLine(filePath, key)}`)
}

for (const lang of languages) {
  const summary = {
    lang,
    unused: 0,
    extra: 0,
    missing: 0,
  }

  for (const chunk of chunkNames) {
    const englishTranslations = readTranslations(defaultLang, chunk)
    const englishKeys = Object.keys(englishTranslations)
    const unusedKeys = new Set(unusedByChunk[chunk] || [])
    const translations = readTranslations(lang, chunk)
    const filePath = getTranslationFilePath(lang, chunk)
    const englishFilePath = getTranslationFilePath(defaultLang, chunk)
    const keys = Object.keys(translations)
    const englishKeySet = new Set(englishKeys)
    const keySet = new Set(keys)
    const missingKeys = englishKeys.filter((key) => !keySet.has(key))
    const extraKeys = keys.filter((key) => !englishKeySet.has(key))
    const unusedFileKeys = keys.filter((key) => unusedKeys.has(key))

    summary.missing += missingKeys.length
    summary.extra += extraKeys.length
    summary.unused += unusedFileKeys.length

    for (const key of unusedFileKeys) addIssue("unused", filePath, key)
    for (const key of extraKeys) addIssue("extra", filePath, key)
    for (const key of missingKeys) addIssue("missing", englishFilePath, key)
  }

  languageRows.push({
    Language: summary.lang,
    "Unused keys": formatCount(summary.unused),
    "Missing in English": formatCount(summary.extra),
    "Missing in translation": formatCount(summary.missing),
  })
}

for (const chunk of chunkNames) {
  const englishTranslations = readTranslations(defaultLang, chunk)
  const row = {
    file: chunk,
    source: sourceByChunk[chunk].length,
    translated: Object.keys(englishTranslations).length,
  }

  if (verbose) row["unused english"] = formatCount(staleEnglishKeysByChunk[chunk].length)

  chunkRows.push(row)
}

console.table(languageRows)
console.table(chunkRows)

for (const [type, locations] of Object.entries(issues)) {
  if (!locations.length) continue

  console.log(`\n${issueLabels[type]}:`)
  for (const location of locations) {
    console.log(location)
  }
}

if (verbose) {
  const staleEnglishKeys = Object.entries(staleEnglishKeysByChunk).flatMap(([chunk, keys]) => {
    const filePath = getTranslationFilePath(defaultLang, chunk)
    return keys.map((key) => ({
      filePath,
      key,
    }))
  })

  if (staleEnglishKeys.length) {
    console.log("\nEnglish keys missing from source:")
    for (const { filePath, key } of staleEnglishKeys) {
      console.log(`${repoRelativePath(filePath)}:${getKeyLine(filePath, key)} ${key}`)
    }
  } else {
    console.log("\nEnglish keys missing from source: -")
  }
}
