import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { unified } from "unified"
import remarkParse from "remark-parse"
import { visit } from "unist-util-visit"

export const defaultLang = "en"
export const chunkNames = ["common", "home", "docs", "components", "other"]
export const sourceFilePattern = /\.(md|svelte|js)$/
export const doNotTranslateAfterMarker = "<!-- DO NOT TRANSLATE ANYTHING BELOW THIS LINE -->"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
export const docsRoot = path.resolve(scriptDir, "../../..")
export const repoRoot = path.resolve(docsRoot, "../..")
export const translationDir = path.join(docsRoot, "src/translation")
export const sourceDirs = [path.join(docsRoot, "src/routes")]

export const excludedPaths = [
  "packages/docs/src/routes/(routes)/docs/upgrade",
  "packages/docs/src/routes/(routes)/docs/v5",
  "packages/docs/src/routes/(routes)/(marketing)",
  "packages/docs/src/routes/(routes)/blog",
  "packages/docs/src/routes/(routes)/store",
  "packages/docs/src/lib/scripts",
  "CHANGELOG.md",
]

export const skipAfterMarkerPaths = [
  "packages/docs/src/routes/(routes)/docs/layout-and-typography/+page.md",
]

export const normalizeFilePath = (filePath) => filePath.replace(/\\/g, "/")

export const repoRelativePath = (filePath) => {
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(filePath)
  return normalizeFilePath(path.relative(repoRoot, absolutePath))
}

const matchesConfiguredPath = (filePath, configuredPath) => {
  const normalizedPath = normalizeFilePath(filePath)
  const normalizedConfiguredPath = normalizeFilePath(configuredPath)

  return (
    normalizedPath === normalizedConfiguredPath ||
    normalizedPath.endsWith(`/${normalizedConfiguredPath}`) ||
    normalizedPath.startsWith(`${normalizedConfiguredPath}/`) ||
    normalizedPath.includes(`/${normalizedConfiguredPath}/`)
  )
}

export const isExcludedFile = (filePath) =>
  excludedPaths.some((excludedPath) => matchesConfiguredPath(filePath, excludedPath))

export const shouldSkipAfterMarker = (filePath) =>
  skipAfterMarkerPaths.some((skipPath) => matchesConfiguredPath(filePath, skipPath))

export const isComponentRouteFile = (filePath) =>
  matchesConfiguredPath(filePath, "packages/docs/src/routes/(routes)/components")

export const getTranslationChunkForFile = (filePath) => {
  const normalizedPath = normalizeFilePath(filePath)

  if (normalizedPath.includes("/src/lib/")) return "common"
  if (normalizedPath.includes("/routes/(routes)/docs/")) return "docs"
  if (normalizedPath.includes("/routes/(routes)/components/")) return "components"
  if (normalizedPath.endsWith("/routes/(routes)/+page.md")) return "home"
  if (normalizedPath.endsWith("/routes/(routes)/+page.svelte")) return "home"

  return "other"
}

export const getTranslationFilePath = (lang, chunk) =>
  path.join(translationDir, `${lang}.${chunk}.json`)

export const getFiles = (dir, pattern = sourceFilePattern) => {
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const filePath = path.join(dir, entry.name)
      if (entry.isDirectory()) return getFiles(filePath, pattern)
      return pattern.test(entry.name) ? [filePath] : []
    })
    .sort()
}

export const getSourceFiles = () =>
  sourceDirs.flatMap((sourceDir) => getFiles(sourceDir, sourceFilePattern))

export const getTranslationFiles = () => getFiles(translationDir, /\.json$/)

export const parseTranslationFileName = (filePath) => {
  const fileName = path.basename(filePath)
  const match = fileName.match(/^(.+)\.([^.]+)\.json$/)
  if (!match) return null

  return {
    lang: match[1],
    chunk: match[2],
    fileName,
  }
}

export const getLanguages = () =>
  [
    ...new Set(
      getTranslationFiles()
        .map(parseTranslationFileName)
        .filter(Boolean)
        .filter(({ chunk }) => chunkNames.includes(chunk))
        .map(({ lang }) => lang),
    ),
  ].sort()

export const readJsonFile = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"))

export const writeJsonFile = (filePath, data) => {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`)
}

export const readTranslations = (lang, chunk) => {
  const filePath = getTranslationFilePath(lang, chunk)
  return fs.existsSync(filePath) ? readJsonFile(filePath) : {}
}

export const readAllTranslations = () => {
  const translations = new Map()
  for (const filePath of getTranslationFiles()) {
    const parsed = parseTranslationFileName(filePath)
    if (!parsed || !chunkNames.includes(parsed.chunk)) continue
    translations.set(`${parsed.lang}.${parsed.chunk}`, readJsonFile(filePath))
  }
  return translations
}

const escapeQuotes = (text) => text.replace(/"/g, "&quot;")
const decodeQuotes = (text) => text.replace(/&quot;/g, '"')
const isExternalUrl = (url) => /^https?:\/\//i.test(url) || url.startsWith("//")

const createLinkHtml = (url, text) => {
  const attributes = [`href="${escapeQuotes(url)}"`]

  if (isExternalUrl(url)) {
    attributes.push('rel="nofollow"')
    attributes.push('target="_blank"')
  }

  return `<a ${attributes.join(" ")}>${text}</a>`
}

const removeMetadata = (content) =>
  content.startsWith("---") ? content.slice(content.indexOf("---", 3) + 3) : content

const cleanContent = (content) =>
  content.replace(/<script[\s\S]*?<\/script>/g, "").replace(/{#each[\s\S]*?\/each}/g, "")

const extractTextFromNode = (node) => {
  if (node.type === "text") return node.value
  if (node.type === "inlineCode") return `\`${node.value}\``
  if (node.type === "break") return "\n"
  if (node.type === "link") {
    const text =
      node.children
        ?.map((child) => {
          if (child.type === "inlineCode") return `<code>${escapeQuotes(child.value)}</code>`
          return extractTextFromNode(child)
        })
        .join("") || ""
    return createLinkHtml(node.url, text)
  }
  if (node.children?.length) return node.children.map(extractTextFromNode).join("")
  return ""
}

const shouldSkipText = (text) => {
  const trimmedText = text.trim()
  if (!trimmedText) return true

  const skipPatterns = [
    /^.$/,
    /^\d+$/,
    /^--[\w-]+$/,
    /^--[\w-]+\s*:.*/,
    /^[.#][^{]+{[^}]+}/,
    /```[\s\S]*?```/,
    /^~/,
    /{COLOR_NAME}/,
    /^\{[\s\S]*\}$/,
    /^\{[\w.]+\}\w*$/,
    /^.*\|.*\n\|.*$/,
    /^.*\|.*\|.*$/,
    /^<\w+.*$/i,
    /^\/>$/,
    /^class=["'].*["']>$/,
    /^[a-z][\w:-]+=["'][\s\S]*["']$/i,
    /^min=["'].*["'].*\/>$/,
    /^(ctrl|shift|del)$/,
    /^[◀︎▶︎↖︎↗︎↙︎↘︎]$/,
    /^\.\.\.$/,
    /^\[svelte:.*\].*$/,
    /^<\/svelte:.*>$/,
    /^\d+[hm]$/,
    /^\d+:$/,
    /^https:\/\/$/,
    /^\.\w+$/,
    /^(type|class|required|placeholder|min|max|title|desc)=["'].*["']$/,
  ]

  if (skipPatterns.some((pattern) => pattern.test(trimmedText))) return true
  if (["◀︎", "▶︎", "↖︎", "↗︎", "↙︎", "↘︎"].includes(trimmedText)) return true
  if (trimmedText.includes("```")) return true
  if (trimmedText.includes("class=")) return true

  return false
}

const addTranslationText = (translations, text) => {
  const trimmedText = text.trim()
  if (!shouldSkipText(trimmedText)) translations.add(trimmedText)
}

const extractTranslateComponentTexts = (content) => {
  const texts = new Set()
  const patterns = [
    /<Translate\s+[^>]*text=(["'])((?:\\.|(?!\1)[\s\S])*)\1[^>]*\/?>/g,
    /<Translate\s+[^>]*text=\{(["'`])((?:\\.|(?!\1)[\s\S])*)\1\}[^>]*\/?>/g,
  ]

  for (const pattern of patterns) {
    for (const match of content.matchAll(pattern)) {
      const text = decodeQuotes(match[2].replace(/\\(["'`])/g, "$1")).trim()
      if (!shouldSkipText(text)) texts.add(text)
    }
  }

  return texts
}

export const extractMarkdownTranslations = (content, filePath = "", options = {}) => {
  const { honorSkipRules = true } = options
  if (honorSkipRules && isExcludedFile(filePath)) return []
  const skipComponentBlockHeadings = honorSkipRules && isComponentRouteFile(filePath)

  let processableContent = cleanContent(removeMetadata(content))
  if (honorSkipRules && shouldSkipAfterMarker(filePath)) {
    processableContent = processableContent.split(doNotTranslateAfterMarker)[0]
  }

  const translations = new Set(extractTranslateComponentTexts(processableContent))
  const codeBlockRanges = [...processableContent.matchAll(/```[\s\S]*?```/g)].map((match) => [
    match.index,
    match.index + match[0].length,
  ])
  const lines = processableContent.split(/\r?\n/)
  let currentPosition = 0

  for (const line of lines) {
    const inCodeBlock = codeBlockRanges.some(
      ([start, end]) => currentPosition >= start && currentPosition < end,
    )
    currentPosition += line.length + 1

    if (inCodeBlock || !line.trim()) continue
    if (line.includes("<Translate")) continue

    const lineAst = unified().use(remarkParse).parse(line)

    visit(lineAst, ["heading", "paragraph", "tableCell"], (node) => {
      const text = extractTextFromNode(node)
      if (skipComponentBlockHeadings && node.type === "heading" && text.trim().startsWith("~")) {
        return
      }

      addTranslationText(translations, text)
    })

    visit(lineAst, "html", (node) => {
      const match = node.value?.match(/^<([a-z][\w-]*)([^>]*)>([^<]+)<\/\1>$/i)
      if (match) addTranslationText(translations, match[3])
    })
  }

  return [...translations]
}

export const extractSvelteTranslations = (content, filePath = "", options = {}) => {
  const { honorSkipRules = true } = options
  if (honorSkipRules && isExcludedFile(filePath)) return []

  const translations = new Set(extractTranslateComponentTexts(content))
  const translationCallPattern = /\$t\(\s*(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g

  for (const match of content.matchAll(translationCallPattern)) {
    const text = match[2].replace(/\\(["'`])/g, "$1").trim()
    if (text) translations.add(text)
  }

  return [...translations]
}

export const extractTranslationsFromContent = (content, filePath = "", options = {}) => {
  if (filePath.endsWith(".svelte") || filePath.endsWith(".js")) {
    return extractSvelteTranslations(content, filePath, options)
  }

  if (filePath.endsWith(".md")) {
    return extractMarkdownTranslations(content, filePath, options)
  }

  return []
}

export const extractTranslationsFromFile = (filePath, options = {}) =>
  extractTranslationsFromContent(
    fs.readFileSync(filePath, "utf8"),
    repoRelativePath(filePath),
    options,
  )

export const extractSourceTranslations = (options = {}) => {
  const result = new Map()

  for (const filePath of getSourceFiles()) {
    const relativePath = repoRelativePath(filePath)
    const keys = extractTranslationsFromFile(filePath, options)
    if (!keys.length) continue

    const chunk = getTranslationChunkForFile(relativePath)
    result.set(relativePath, { chunk, keys })
  }

  return result
}

export const getExpectedKeysByChunk = (sourceTranslations = extractSourceTranslations()) => {
  const expected = Object.fromEntries(chunkNames.map((chunk) => [chunk, new Set()]))

  for (const { chunk, keys } of sourceTranslations.values()) {
    for (const key of keys) expected[chunk].add(key)
  }

  return expected
}

export const syncMissingTranslations = ({ write = false } = {}) => {
  const expectedKeysByChunk = getExpectedKeysByChunk()
  const languages = getLanguages()
  const changes = []
  const commonTranslations = readTranslations(defaultLang, "common")

  for (const chunk of chunkNames) {
    const englishFile = getTranslationFilePath(defaultLang, chunk)
    const englishTranslations = fs.existsSync(englishFile) ? readJsonFile(englishFile) : {}
    const nextEnglish = { ...englishTranslations }

    for (const key of expectedKeysByChunk[chunk]) {
      if (chunk !== "common" && Object.hasOwn(commonTranslations, key)) continue
      if (!Object.hasOwn(nextEnglish, key)) {
        nextEnglish[key] = key
        changes.push({ file: repoRelativePath(englishFile), key, action: "add" })
      }
    }

    if (write) writeJsonFile(englishFile, nextEnglish)

    for (const lang of languages.filter((lang) => lang !== defaultLang)) {
      const filePath = getTranslationFilePath(lang, chunk)
      if (!fs.existsSync(filePath)) continue

      const translations = readJsonFile(filePath)
      const nextTranslations = {}
      let changed = false

      for (const key of Object.keys(nextEnglish)) {
        if (Object.hasOwn(translations, key)) {
          nextTranslations[key] = translations[key]
        } else {
          nextTranslations[key] = nextEnglish[key]
          changed = true
          changes.push({ file: repoRelativePath(filePath), key, action: "add" })
        }
      }

      for (const [key, value] of Object.entries(translations)) {
        if (!Object.hasOwn(nextTranslations, key)) {
          nextTranslations[key] = value
        }
      }

      if (write && changed) writeJsonFile(filePath, nextTranslations)
    }
  }

  return changes
}

const getTranslationPathForFileId = (fileId) => {
  const chunkSeparatorIndex = fileId.lastIndexOf(".")
  const lang = fileId.slice(0, chunkSeparatorIndex)
  const chunk = fileId.slice(chunkSeparatorIndex + 1)

  return repoRelativePath(getTranslationFilePath(lang, chunk))
}

const collectTranslationKeys = (translationsByFile) => {
  const keysByChunk = Object.fromEntries(chunkNames.map((chunk) => [chunk, new Set()]))
  const allKeys = new Set()
  const filesByKey = new Map()
  const chunksByKey = new Map()

  for (const [fileId, translations] of translationsByFile) {
    const chunk = fileId.slice(fileId.lastIndexOf(".") + 1)
    if (!chunkNames.includes(chunk)) continue
    const filePath = getTranslationPathForFileId(fileId)
    for (const key of Object.keys(translations)) {
      keysByChunk[chunk].add(key)
      allKeys.add(key)
      filesByKey.set(key, [...(filesByKey.get(key) || []), filePath])
      chunksByKey.set(key, [...new Set([...(chunksByKey.get(key) || []), chunk])])
    }
  }

  return { keysByChunk, allKeys, filesByKey, chunksByKey }
}

const extractPlaceholders = (text) =>
  [...String(text).matchAll(/{{\s*[\w.]+\s*}}/g)].map(([m]) => m)
export const validateTranslations = () => {
  const issues = []
  const languages = getLanguages()
  const translationsByFile = readAllTranslations()
  const sourceTranslations = extractSourceTranslations()
  const expectedKeysByChunk = getExpectedKeysByChunk(sourceTranslations)
  const { allKeys, filesByKey, chunksByKey } = collectTranslationKeys(translationsByFile)
  const englishCommon = translationsByFile.get(`${defaultLang}.common`) || {}

  for (const chunk of chunkNames) {
    const english = translationsByFile.get(`${defaultLang}.${chunk}`) || {}
    const englishKeys = Object.keys(english)
    const englishKeySet = new Set(englishKeys)

    for (const key of expectedKeysByChunk[chunk]) {
      if (chunk !== "common" && Object.hasOwn(englishCommon, key)) continue
      if (!englishKeySet.has(key)) {
        issues.push({
          type: "missing-source-key",
          file: repoRelativePath(getTranslationFilePath(defaultLang, chunk)),
          message: `${key} is used in ${chunk} source files but missing from en.${chunk}.json`,
        })
      }
    }

    for (const lang of languages.filter((lang) => lang !== defaultLang)) {
      const translations = translationsByFile.get(`${lang}.${chunk}`)
      if (!translations) {
        issues.push({
          type: "missing-file",
          file: repoRelativePath(getTranslationFilePath(lang, chunk)),
          message: `${lang}.${chunk}.json is missing`,
        })
        continue
      }

      const keys = Object.keys(translations)
      const keySet = new Set(keys)
      const missing = englishKeys.filter((key) => !keySet.has(key))
      const extra = keys.filter((key) => !englishKeySet.has(key))

      for (const key of missing) {
        issues.push({
          type: "missing-translation-key",
          file: repoRelativePath(getTranslationFilePath(lang, chunk)),
          message: `${lang}.${chunk}.json is missing key: ${key}`,
        })
      }

      for (const key of extra) {
        issues.push({
          type: "extra-translation-key",
          file: repoRelativePath(getTranslationFilePath(lang, chunk)),
          message: `${lang}.${chunk}.json has extra key: ${key}`,
        })
      }

      for (const key of englishKeys.filter((key) => keySet.has(key))) {
        const englishPlaceholders = extractPlaceholders(english[key]).sort()
        const translatedPlaceholders = extractPlaceholders(translations[key]).sort()
        if (englishPlaceholders.join("\0") !== translatedPlaceholders.join("\0")) {
          issues.push({
            type: "placeholder-mismatch",
            file: repoRelativePath(getTranslationFilePath(lang, chunk)),
            message: `${lang}.${chunk}.json placeholder mismatch for key: ${key}`,
          })
        }
      }
    }
  }

  const allowedKeys = new Set()
  for (const { keys } of sourceTranslations.values()) {
    for (const key of keys) allowedKeys.add(key)
  }

  const excludedSourcesByKey = new Map()
  for (const filePath of getSourceFiles().filter((filePath) =>
    isExcludedFile(repoRelativePath(filePath)),
  )) {
    const relativePath = repoRelativePath(filePath)
    for (const key of extractTranslationsFromFile(filePath, { honorSkipRules: false })) {
      excludedSourcesByKey.set(key, [...(excludedSourcesByKey.get(key) || []), relativePath])
    }
  }

  for (const [key, sources] of excludedSourcesByKey) {
    if (allKeys.has(key) && !allowedKeys.has(key)) {
      issues.push({
        type: "excluded-route-key",
        key,
        chunks: chunksByKey.get(key) || [],
        files: filesByKey.get(key) || [],
        sources,
        message: `Translation key exists but is only extracted from excluded routes. Remove this key from translation files or use it in a non-excluded source file.`,
      })
    }
  }

  return issues
}

export const getUnusedTranslationKeys = () => {
  const sourceTranslations = extractSourceTranslations()
  const allowedKeysByChunk = getExpectedKeysByChunk(sourceTranslations)
  const unusedByChunk = Object.fromEntries(chunkNames.map((chunk) => [chunk, []]))
  const allowedKeys = new Set()
  for (const keys of Object.values(allowedKeysByChunk)) {
    for (const key of keys) allowedKeys.add(key)
  }

  const excludedKeys = new Set()
  for (const filePath of getSourceFiles().filter((filePath) =>
    isExcludedFile(repoRelativePath(filePath)),
  )) {
    for (const key of extractTranslationsFromFile(filePath, { honorSkipRules: false })) {
      if (!allowedKeys.has(key)) excludedKeys.add(key)
    }
  }

  for (const chunk of chunkNames) {
    if (chunk === "common") continue
    const english = readTranslations(defaultLang, chunk)
    for (const key of Object.keys(english)) {
      if (excludedKeys.has(key)) unusedByChunk[chunk].push(key)
    }
  }

  return unusedByChunk
}

export const pruneTranslations = ({ write = false } = {}) => {
  const unusedByChunk = getUnusedTranslationKeys()
  const languages = getLanguages()
  const changes = []

  for (const chunk of chunkNames) {
    const unused = new Set(unusedByChunk[chunk])
    if (!unused.size) continue

    for (const lang of languages) {
      const filePath = getTranslationFilePath(lang, chunk)
      if (!fs.existsSync(filePath)) continue

      const translations = readJsonFile(filePath)
      const nextTranslations = {}

      for (const [key, value] of Object.entries(translations)) {
        if (unused.has(key)) {
          changes.push({ file: repoRelativePath(filePath), key, action: "remove" })
        } else {
          nextTranslations[key] = value
        }
      }

      if (write && Object.keys(nextTranslations).length !== Object.keys(translations).length) {
        writeJsonFile(filePath, nextTranslations)
      }
    }
  }

  return changes
}

export const getTranslationReport = () => {
  const languages = getLanguages()
  const sourceTranslations = extractSourceTranslations()
  const expectedKeysByChunk = getExpectedKeysByChunk(sourceTranslations)
  const unusedByChunk = getUnusedTranslationKeys()

  return {
    languages,
    files: getTranslationFiles().map(repoRelativePath),
    chunks: Object.fromEntries(
      chunkNames.map((chunk) => [
        chunk,
        {
          expectedSourceKeys:
            chunk === "common"
              ? Object.keys(readTranslations(defaultLang, chunk)).length
              : expectedKeysByChunk[chunk].size,
          englishKeys: Object.keys(readTranslations(defaultLang, chunk)).length,
          unusedEnglishKeys: unusedByChunk[chunk].length,
        },
      ]),
    ),
  }
}

export const printChanges = (changes, emptyMessage) => {
  if (!changes.length) {
    console.log(emptyMessage)
    return
  }

  for (const change of changes) {
    console.log(`${change.action} ${change.file}: ${change.key}`)
  }
}
