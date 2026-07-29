import fs from "node:fs/promises"
import path from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"

const directory = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const { INITIAL, Registry } = require("vscode-textmate")
const { createOnigScanner, createOnigString, loadWASM } = require("vscode-oniguruma")
const plainLanguages = new Set(["", "plain", "plaintext", "text", "txt"])
let loadEnginePromise

class SyntaxHighlightError extends Error {
  constructor(message) {
    super(message)
    this.name = "SyntaxHighlightError"
  }
}

function initializeEngine() {
  loadEnginePromise ??= fs
    .readFile(require.resolve("vscode-oniguruma/release/onig.wasm"))
    .then((wasm) => loadWASM(wasm))
  return loadEnginePromise
}

function normalizeTheme(rawTheme) {
  const theme = structuredClone(rawTheme)
  theme.type ||= "dark"
  theme.settings = theme.settings ?? theme.tokenColors ?? []
  theme.fg ||=
    theme.colors?.["editor.foreground"] ?? (theme.type === "light" ? "#333333" : "#bbbbbb")
  theme.bg ||=
    theme.colors?.["editor.background"] ?? (theme.type === "light" ? "#fffffe" : "#1e1e1e")

  const firstSetting = theme.settings[0]
  if (!(firstSetting?.settings && !firstSetting.scope)) {
    theme.settings.unshift({
      settings: {
        foreground: theme.fg,
        background: theme.bg,
      },
    })
  }

  let replacementCount = 0
  const valueToPlaceholder = new Map()
  const placeholderToValue = new Map()

  function replaceNonHexColor(value) {
    if (!value || value.startsWith("#")) return value
    if (!valueToPlaceholder.has(value)) {
      replacementCount += 1
      const placeholder = `#${replacementCount.toString(16).padStart(8, "0")}`
      valueToPlaceholder.set(value, placeholder)
      placeholderToValue.set(placeholder.toUpperCase(), value)
    }
    return valueToPlaceholder.get(value)
  }

  theme.settings = theme.settings.map((setting) => ({
    ...setting,
    settings: {
      ...setting.settings,
      ...(setting.settings?.foreground
        ? { foreground: replaceNonHexColor(setting.settings.foreground) }
        : {}),
      ...(setting.settings?.background
        ? { background: replaceNonHexColor(setting.settings.background) }
        : {}),
    },
  }))

  return {
    normalizedTheme: theme,
    outputTheme: {
      name: theme.name,
      fg: rawTheme.fg ?? rawTheme.colors?.["editor.foreground"] ?? theme.fg,
      bg: rawTheme.bg ?? rawTheme.colors?.["editor.background"] ?? theme.bg,
    },
    placeholderToValue,
  }
}

function splitLines(code) {
  if (code.length === 0) return [""]
  return code.split(/\r?\n/)
}

export async function createTextMateEngine({ langs = [], themes = [] }) {
  const [grammarBundleText, manifestText] = await Promise.all([
    fs.readFile(path.join(directory, "grammars.json"), "utf8"),
    fs.readFile(path.join(directory, "grammar-manifest.json"), "utf8"),
    initializeEngine(),
  ])
  const grammarBundle = JSON.parse(grammarBundleText)
  const manifest = JSON.parse(manifestText)
  const rawTheme = themes[0]
  if (!rawTheme) throw new SyntaxHighlightError("No theme was provided")

  const grammarByName = new Map()
  const grammarByScope = new Map()
  for (const grammarMetadata of manifest.grammars) {
    const grammar = grammarBundle[grammarMetadata.name]
    grammarByName.set(grammarMetadata.name, grammarMetadata)
    for (const alias of grammarMetadata.aliases) grammarByName.set(alias, grammarMetadata)
    grammarByScope.set(grammarMetadata.scopeName, grammar)
  }

  for (const language of langs) {
    if (!plainLanguages.has(language) && !grammarByName.has(language)) {
      throw new SyntaxHighlightError(
        `Language \`${language}\` not found, you may need to load it first`,
      )
    }
  }

  const { normalizedTheme, outputTheme, placeholderToValue } = normalizeTheme(rawTheme)
  const injectionsByScope = new Map()
  for (const grammarMetadata of manifest.grammars) {
    for (const target of grammarMetadata.injectTo) {
      // The former engine did not activate this Vue injection in Markdown. Microsoft
      // vscode-textmate does, so omit only this edge to preserve the verified output.
      if (grammarMetadata.name === "vue-interpolations" && target === "text.html.markdown") {
        continue
      }
      const injections = injectionsByScope.get(target) ?? []
      injections.push(grammarMetadata.scopeName)
      injectionsByScope.set(target, injections)
    }
  }

  const registry = new Registry({
    onigLib: Promise.resolve({ createOnigScanner, createOnigString }),
    theme: normalizedTheme,
    loadGrammar: async (scopeName) => grammarByScope.get(scopeName),
    getInjections: (scopeName) => {
      const parts = scopeName.split(".")
      const injections = []
      for (let index = 1; index <= parts.length; index += 1) {
        injections.push(...(injectionsByScope.get(parts.slice(0, index).join(".")) ?? []))
      }
      return injections
    },
  })

  const loadedGrammars = new Map()
  for (const languageName of manifest.languageOrder) {
    const grammarMetadata = grammarByName.get(languageName)
    const grammar = await registry.loadGrammarWithConfiguration(grammarMetadata.scopeName, 1, {
      balancedBracketSelectors: ["*"],
      unbalancedBracketSelectors: [],
    })
    loadedGrammars.set(languageName, grammar)
  }
  const colorMap = registry.getColorMap()

  function tokenize(code, languageId) {
    const lines = splitLines(code)
    if (plainLanguages.has(languageId)) {
      return lines.map((line) => [{ content: line }])
    }

    const grammarMetadata = grammarByName.get(languageId)
    if (!grammarMetadata) {
      throw new SyntaxHighlightError(
        `Language \`${languageId}\` not found, you may need to load it first`,
      )
    }

    const grammar = loadedGrammars.get(grammarMetadata.name)
    let ruleStack = INITIAL
    return lines.map((line) => {
      if (line === "") return []
      const result = grammar.tokenizeLine2(line, ruleStack, 500)
      ruleStack = result.ruleStack
      const tokens = []
      for (let index = 0; index < result.tokens.length; index += 2) {
        const start = result.tokens[index]
        const end = result.tokens[index + 2] ?? line.length
        if (start === end) continue
        const metadata = result.tokens[index + 1]
        const foreground = colorMap[(metadata & 16744448) >>> 15]
        tokens.push({
          content: line.slice(start, end),
          color: placeholderToValue.get(foreground) ?? foreground,
          fontStyle: (metadata & 30720) >>> 11,
        })
      }
      return tokens
    })
  }

  return {
    tokenize,
    theme: outputTheme,
    getLoadedLanguages: () => [...manifest.loadedLanguages],
    getLoadedThemes: () => [outputTheme.name],
    dispose: () => registry.dispose(),
  }
}
