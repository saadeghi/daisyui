#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import { writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { createTailwindPlay } from "./index.mjs"

const packageDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = resolve(packageDirectory, "../..")
const componentPathPattern = /^packages\/daisyui\/src\/components\/([a-z0-9-]+)\.css$/
const docsRoot = "packages/docs/src/routes/(routes)/components"
const defaultTimeoutMs = 45_000
const forbiddenPrCssAtRules = new Set(["config", "plugin", "source"])

const usage = `Usage:
  bun packages/tailwind-play-share/pr-preview.mjs \\
    --base-sha <sha> \\
    --head-sha <sha> \\
    --output <path>

Options:
  --base-sha <sha>   Pull request base commit
  --head-sha <sha>   Pull request head commit
  --output <path>    Write the generated preview metadata as JSON
  --browser <path>   Chrome/Chromium executable
  --timeout <ms>     Timeout for each browser operation (default: ${defaultTimeoutMs})
  --verbose          Write Tailwind Play progress information to stderr
  --help             Show this help`

function takeValue(argv, index, flag) {
  const value = argv[index + 1]
  if (value === undefined) throw new Error(`${flag} requires a value`)
  return value
}

export function parsePreviewArgs(argv) {
  const options = {
    baseSha: undefined,
    browser: undefined,
    headSha: undefined,
    help: false,
    output: undefined,
    timeoutMs: defaultTimeoutMs,
    verbose: false,
  }

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index]
    switch (argument) {
      case "--base-sha":
        options.baseSha = takeValue(argv, index, argument)
        index += 1
        break
      case "--head-sha":
        options.headSha = takeValue(argv, index, argument)
        index += 1
        break
      case "--output":
        options.output = takeValue(argv, index, argument)
        index += 1
        break
      case "--browser":
        options.browser = takeValue(argv, index, argument)
        index += 1
        break
      case "--timeout": {
        const timeoutMs = Number(takeValue(argv, index, argument))
        if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
          throw new Error("--timeout must be a positive number of milliseconds")
        }
        options.timeoutMs = timeoutMs
        index += 1
        break
      }
      case "--verbose":
        options.verbose = true
        break
      case "--help":
      case "-h":
        options.help = true
        break
      default:
        throw new Error(`Unknown option: ${argument}`)
    }
  }

  return options
}

function git(args) {
  try {
    return execFileSync("git", args, {
      cwd: repositoryRoot,
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    })
  } catch (error) {
    const details = error.stderr?.trim() || error.message
    throw new Error(`git ${args[0]} failed: ${details}`)
  }
}

function componentNameFromPath(filePath) {
  return filePath.match(componentPathPattern)?.[1]
}

function isCssWhitespace(character) {
  return (
    character === " " ||
    character === "\n" ||
    character === "\r" ||
    character === "\t" ||
    character === "\f"
  )
}

function isCssHexDigit(character) {
  return character !== undefined && /^[0-9a-f]$/i.test(character)
}

function consumeCssComment(source, index) {
  const end = source.indexOf("*/", index + 2)
  return end === -1 ? source.length : end + 2
}

function consumeCssEscape(source, index) {
  let cursor = index + 1
  if (cursor >= source.length) return { end: cursor, value: "\uFFFD" }

  if (isCssHexDigit(source[cursor])) {
    let hexadecimal = ""
    while (hexadecimal.length < 6 && isCssHexDigit(source[cursor])) {
      hexadecimal += source[cursor]
      cursor += 1
    }
    if (isCssWhitespace(source[cursor])) {
      if (source[cursor] === "\r" && source[cursor + 1] === "\n") cursor += 1
      cursor += 1
    }
    const codePoint = Number.parseInt(hexadecimal, 16)
    const value =
      codePoint === 0 || codePoint > 0x10ffff || (codePoint >= 0xd800 && codePoint <= 0xdfff)
        ? "\uFFFD"
        : String.fromCodePoint(codePoint)
    return { end: cursor, value }
  }

  if (source[cursor] === "\r" && source[cursor + 1] === "\n") {
    return { end: cursor + 2, value: "" }
  }
  if (source[cursor] === "\n" || source[cursor] === "\r" || source[cursor] === "\f") {
    return { end: cursor + 1, value: "" }
  }
  return { end: cursor + 1, value: source[cursor] }
}

function consumeCssIdentifier(source, index) {
  let cursor = index
  let value = ""

  while (cursor < source.length) {
    const character = source[cursor]
    if (source.startsWith("/*", cursor)) {
      cursor = consumeCssComment(source, cursor)
      continue
    }
    if (/^[a-z0-9_-]$/i.test(character) || character.codePointAt(0) >= 0x80) {
      value += character
      cursor += 1
      continue
    }
    if (character === "\\") {
      const escape = consumeCssEscape(source, cursor)
      value += escape.value
      cursor = escape.end
      continue
    }
    break
  }

  return { end: cursor, value }
}

function consumeCssString(source, index) {
  const quote = source[index]
  let cursor = index + 1
  let value = ""

  while (cursor < source.length) {
    const character = source[cursor]
    if (character === quote) return { end: cursor + 1, value }
    if (character === "\\") {
      const escape = consumeCssEscape(source, cursor)
      value += escape.value
      cursor = escape.end
      continue
    }
    value += character
    cursor += 1
  }

  return { end: cursor, value }
}

function skipCssWhitespaceAndComments(source, index) {
  let cursor = index
  while (cursor < source.length) {
    if (isCssWhitespace(source[cursor])) {
      cursor += 1
      continue
    }
    if (source.startsWith("/*", cursor)) {
      cursor = consumeCssComment(source, cursor)
      continue
    }
    break
  }
  return cursor
}

function consumeCssUrl(source, index) {
  let cursor = skipCssWhitespaceAndComments(source, index)
  if (source[cursor] === '"' || source[cursor] === "'") {
    const string = consumeCssString(source, cursor)
    cursor = skipCssWhitespaceAndComments(source, string.end)
    if (source[cursor] === ")") cursor += 1
    return { end: cursor, value: string.value }
  }

  let value = ""
  while (cursor < source.length && source[cursor] !== ")") {
    if (source.startsWith("/*", cursor)) {
      cursor = consumeCssComment(source, cursor)
      continue
    }
    if (source[cursor] === "\\") {
      const escape = consumeCssEscape(source, cursor)
      value += escape.value
      cursor = escape.end
      continue
    }
    value += source[cursor]
    cursor += 1
  }
  if (source[cursor] === ")") cursor += 1
  return { end: cursor, value: value.trim() }
}

function readCssImportTarget(source, index) {
  const cursor = skipCssWhitespaceAndComments(source, index)
  if (source[cursor] === '"' || source[cursor] === "'") {
    return consumeCssString(source, cursor).value
  }

  const identifier = consumeCssIdentifier(source, cursor)
  const openingParenthesis = skipCssWhitespaceAndComments(source, identifier.end)
  if (identifier.value.toLowerCase() === "url" && source[openingParenthesis] === "(") {
    return consumeCssUrl(source, openingParenthesis + 1).value
  }
  return undefined
}

function isExternalCssUrl(value) {
  if (!value) return false
  const normalized = normalizeCssUrl(value)
  if (normalized.startsWith("//")) return true
  const scheme = normalized.match(/^([a-z][a-z0-9+.-]*):/i)?.[1]?.toLowerCase()
  return scheme !== undefined && scheme !== "data"
}

function isNonLocalCssUrl(value) {
  if (!value) return false
  const normalized = normalizeCssUrl(value)
  return normalized.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(normalized)
}

function normalizeCssUrl(value) {
  return [...value.trim()]
    .filter((character) => {
      const codePoint = character.codePointAt(0)
      return codePoint > 0x20 && codePoint !== 0x7f
    })
    .join("")
}

function unsafePrCss(filePath, reason) {
  throw new Error(`Unsafe PR CSS in ${filePath}: ${reason}`)
}

export function assertSafePrCss(css, filePath = "component stylesheet") {
  let index = 0

  while (index < css.length) {
    if (css.startsWith("/*", index)) {
      index = consumeCssComment(css, index)
      continue
    }
    if (css[index] === '"' || css[index] === "'") {
      index = consumeCssString(css, index).end
      continue
    }
    if (css[index] === "@") {
      const atRule = consumeCssIdentifier(css, index + 1)
      const name = atRule.value.toLowerCase()
      if (forbiddenPrCssAtRules.has(name)) {
        unsafePrCss(filePath, `@${name} is not allowed`)
      }
      if (name === "import" && isNonLocalCssUrl(readCssImportTarget(css, atRule.end))) {
        unsafePrCss(filePath, "external @import URLs are not allowed")
      }
      index = atRule.end
      continue
    }
    if (/^[a-z_-]$/i.test(css[index]) || css[index] === "\\") {
      const identifier = consumeCssIdentifier(css, index)
      const openingParenthesis = skipCssWhitespaceAndComments(css, identifier.end)
      if (identifier.value.toLowerCase() === "url" && css[openingParenthesis] === "(") {
        const url = consumeCssUrl(css, openingParenthesis + 1)
        if (isExternalCssUrl(url.value)) {
          unsafePrCss(filePath, "external URLs are not allowed")
        }
        index = url.end
        continue
      }
      index = identifier.end
      continue
    }
    index += 1
  }
}

export function parseNameStatus(output) {
  const tokens = output.split("\0")
  if (tokens.at(-1) === "") tokens.pop()
  const changes = []

  for (let index = 0; index < tokens.length;) {
    const status = tokens[index]
    index += 1
    if (!status) continue

    const kind = status[0]
    if (kind === "R" || kind === "C") {
      const oldPath = tokens[index]
      const headPath = tokens[index + 1]
      index += 2
      if (!oldPath || !headPath) throw new Error(`Malformed git diff entry for status ${status}`)
      changes.push({ headPath, kind, oldPath, status })
      continue
    }

    const filePath = tokens[index]
    index += 1
    if (!filePath) throw new Error(`Malformed git diff entry for status ${status}`)
    changes.push({
      headPath: kind === "D" ? undefined : filePath,
      kind,
      oldPath: kind === "D" ? filePath : undefined,
      status,
    })
  }

  return changes
}

export function planComponentChanges(changes) {
  const excludeNames = new Set()
  const headCssPaths = new Set()
  const docsTargets = []

  for (const change of changes) {
    const oldName = change.oldPath && componentNameFromPath(change.oldPath)
    const headName = change.headPath && componentNameFromPath(change.headPath)
    if (!oldName && !headName) continue

    if (change.kind === "R") {
      if (oldName) excludeNames.add(oldName)
      if (headName) {
        excludeNames.add(headName)
        headCssPaths.add(change.headPath)
      }
      docsTargets.push({
        fallbackCssFilename: oldName ? `${oldName}.css` : undefined,
        preferredCssFilename: headName ? `${headName}.css` : undefined,
      })
      continue
    }

    if (change.kind === "C") {
      if (headName) {
        excludeNames.add(headName)
        headCssPaths.add(change.headPath)
        docsTargets.push({ preferredCssFilename: `${headName}.css` })
      }
      continue
    }

    const componentName = headName ?? oldName
    excludeNames.add(componentName)
    if (change.headPath) headCssPaths.add(change.headPath)
    docsTargets.push({
      fallbackCssFilename: change.kind === "D" ? `${oldName}.css` : undefined,
      preferredCssFilename: change.kind === "D" ? undefined : `${headName}.css`,
    })
  }

  return {
    docsTargets,
    excludeNames: [...excludeNames].sort(),
    headCssPaths: [...headCssPaths].sort(),
  }
}

function readFileAtRevision(revision, filePath) {
  return git(["show", `${revision}:${filePath}`])
}

function listDocsPages(revision) {
  return git(["ls-tree", "-r", "--name-only", "-z", revision, "--", docsRoot])
    .split("\0")
    .filter((filePath) => filePath.endsWith("/+page.md"))
    .sort()
}

export function sourceCssFilename(markdown) {
  return markdown.match(/^source:\s+\S*\/([^/\s]+\.css)\s*$/m)?.[1]
}

export function extractFirstHtmlExample(markdown, filePath = "component page") {
  const match = markdown.match(/^[ \t]*```html[ \t]*\r?\n([\s\S]*?)^[ \t]*```[ \t]*$/m)
  if (!match) throw new Error(`No fenced HTML example found in ${filePath}`)
  return match[1].replaceAll("$$", "").trim()
}

export function indexDocsPages(pages) {
  const index = new Map()
  for (const { filePath, markdown } of pages) {
    const cssFilename = sourceCssFilename(markdown)
    if (!cssFilename) continue
    const mappedPages = index.get(cssFilename) ?? []
    mappedPages.push({ filePath, markdown })
    index.set(cssFilename, mappedPages)
  }
  return index
}

function buildDocsIndex(revision) {
  return indexDocsPages(
    listDocsPages(revision).map((filePath) => ({
      filePath,
      markdown: readFileAtRevision(revision, filePath),
    })),
  )
}

export function combineHtmlExamples(pages) {
  return pages
    .map(({ filePath, markdown }) => {
      const routeName = filePath
        .split("/")
        .at(-2)
        .replace(/[^a-z0-9_-]/gi, "")
      const html = extractFirstHtmlExample(markdown, filePath)
      return `<!-- daisyUI docs example: ${routeName} -->\n${html}`
    })
    .join("\n\n")
}

export function buildBeforeCss() {
  return '@import "tailwindcss";\n@plugin "daisyui";\n'
}

export function buildAfterCss(excludeNames, cssFiles) {
  const plugin = [
    '@import "tailwindcss";',
    '@plugin "daisyui" {',
    `  exclude: ${excludeNames.join(", ")};`,
    "}",
  ].join("\n")
  const changedCss = cssFiles
    .map(({ componentName, css }) => `/* PR component: ${componentName} */\n${css.trimEnd()}`)
    .join("\n\n")
  return `${plugin}\n${changedCss ? `\n${changedCss}\n` : ""}`
}

export function buildPreviewInputs(baseSha, headSha) {
  const diff = git([
    "diff",
    "--name-status",
    "--find-renames",
    "-z",
    baseSha,
    headSha,
    "--",
    "packages/daisyui/src/components",
  ])
  const changes = parseNameStatus(diff)
  const plan = planComponentChanges(changes)
  if (plan.excludeNames.length === 0) {
    throw new Error("No changed component CSS files were found between the supplied commits")
  }

  const cssFiles = plan.headCssPaths.map((filePath) => {
    const css = readFileAtRevision(headSha, filePath)
    assertSafePrCss(css, filePath)
    return { componentName: componentNameFromPath(filePath), css }
  })

  const headDocs = buildDocsIndex(headSha)
  const baseDocs = buildDocsIndex(baseSha)
  const pagesByPath = new Map()

  for (const target of plan.docsTargets) {
    const preferred = target.preferredCssFilename && headDocs.get(target.preferredCssFilename)
    const fallback = target.fallbackCssFilename && baseDocs.get(target.fallbackCssFilename)
    const pages = preferred?.length ? preferred : fallback
    if (!pages?.length) {
      const cssFilename = target.preferredCssFilename ?? target.fallbackCssFilename
      throw new Error(`No component docs page maps to ${cssFilename}`)
    }
    for (const page of pages) pagesByPath.set(page.filePath, page)
  }

  const pages = [...pagesByPath.values()].sort((left, right) =>
    left.filePath.localeCompare(right.filePath),
  )
  return {
    afterCss: buildAfterCss(plan.excludeNames, cssFiles),
    beforeCss: buildBeforeCss(),
    components: plan.excludeNames,
    docsPages: pages.map(({ filePath }) => filePath),
    html: combineHtmlExamples(pages),
  }
}

export async function generatePrPreview({
  baseSha,
  browser,
  headSha,
  timeoutMs = defaultTimeoutMs,
  verbose = false,
}) {
  const inputs = buildPreviewInputs(baseSha, headSha)
  const browserOptions = { browser, headed: false, timeoutMs, verbose }
  const beforeUrl = await createTailwindPlay({
    ...browserOptions,
    css: inputs.beforeCss,
    html: inputs.html,
  })
  const afterUrl = await createTailwindPlay({
    ...browserOptions,
    css: inputs.afterCss,
    html: inputs.html,
  })

  return {
    afterUrl,
    beforeUrl,
    components: inputs.components,
    docsPages: inputs.docsPages,
    headSha,
  }
}

async function main() {
  const options = parsePreviewArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage)
    return
  }
  if (!options.baseSha) throw new Error("--base-sha is required")
  if (!options.headSha) throw new Error("--head-sha is required")
  if (!options.output) throw new Error("--output is required")

  const preview = await generatePrPreview(options)
  await writeFile(resolve(options.output), `${JSON.stringify(preview, null, 2)}\n`)
}

const isMain =
  process.argv[1] !== undefined && import.meta.url === pathToFileURL(resolve(process.argv[1])).href

if (isMain) {
  main().catch((error) => {
    console.error(`tailwind-play-pr-preview: ${error.message}`)
    process.exitCode = 1
  })
}
