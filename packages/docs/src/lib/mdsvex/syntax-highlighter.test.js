import { afterAll, describe, expect, test } from "bun:test"
import fs from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"
import { fileURLToPath } from "node:url"
import { createHighlighter } from "./syntax-highlighter.js"

const directory = path.dirname(fileURLToPath(import.meta.url))
const theme = JSON.parse(await fs.readFile(path.join(directory, "syntax-theme.json"), "utf8"))
const languages = [
  "bash",
  "css",
  "diff",
  "dotenv",
  "erb",
  "html",
  "js",
  "json",
  "jsx",
  "md",
  "postcss",
  "py",
  "rb",
  "sh",
  "sass",
  "svelte",
  "toml",
  "ts",
  "rust",
  "tsx",
  "vue",
]
const highlighter = await createHighlighter({ langs: languages, themes: [theme] })
const highlight = (code, lang) => highlighter.codeToHtml(code, { lang, theme })

afterAll(() => highlighter.dispose())

describe("syntax highlighter compatibility", () => {
  test("preserves the loaded language and alias order", () => {
    expect(highlighter.getLoadedLanguages()).toEqual([
      "shellscript",
      "css",
      "diff",
      "dotenv",
      "javascript",
      "html",
      "java",
      "xml",
      "sql",
      "typescript",
      "jsx",
      "tsx",
      "graphql",
      "regexp",
      "c",
      "glsl",
      "cpp-macro",
      "cpp",
      "lua",
      "yaml",
      "ruby",
      "erb",
      "json",
      "postcss",
      "python",
      "sass",
      "toml",
      "rust",
      "html-derivative",
      "markdown",
      "haml",
      "svelte",
      "vue",
      "markdown-vue",
      "vue-directives",
      "vue-interpolations",
      "vue-sfc-style-variable-injection",
      "bash",
      "sh",
      "shell",
      "zsh",
      "md",
      "js",
      "cjs",
      "mjs",
      "ts",
      "cts",
      "mts",
      "gql",
      "regex",
      "c++",
      "yml",
      "rb",
      "py",
      "rs",
    ])
  })

  test("preserves plain-text markup and entity encoding", () => {
    expect(highlight('a & < > "', "text")).toBe(
      '<pre class="syntax tokyo-night" style="background-color:var(--syntax-bg);color:var(--syntax-punctuation)" tabindex="0"><code><span class="line"><span>a &#x26; &#x3C; > "</span></span></code></pre>',
    )
  })

  test("preserves empty line and final newline markup", () => {
    expect(highlight("\n", "txt")).toBe(
      '<pre class="syntax tokyo-night" style="background-color:var(--syntax-bg);color:var(--syntax-punctuation)" tabindex="0"><code><span class="line"><span></span></span>\n<span class="line"><span></span></span></code></pre>',
    )
  })

  test("preserves token boundaries, whitespace merging, and font styles", () => {
    expect(highlight("const x = true", "js")).toBe(
      '<pre class="syntax tokyo-night" style="background-color:var(--syntax-bg);color:var(--syntax-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--syntax-attr-name);font-style:italic">const</span><span style="color:var(--syntax-attr-name)"> x</span><span style="color:var(--syntax-punctuation)"> = </span><span style="color:#FF9E64">true</span></span></code></pre>',
    )
  })

  test("preserves diff token markup", () => {
    expect(highlight("@@ -1 +1 @@\n-old\n+new", "diff")).toBe(
      '<pre class="syntax tokyo-night" style="background-color:var(--syntax-bg);color:var(--syntax-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--syntax-punctuation)">@@ -1 +1 @@</span></span>\n<span class="line"><span style="color:var(--syntax-punctuation)">-</span><span style="color:var(--syntax-deleted)">old</span></span>\n<span class="line"><span style="color:var(--syntax-punctuation)">+</span><span style="color:var(--syntax-added)">new</span></span></code></pre>',
    )
  })

  test("preserves canonical language aliases", () => {
    expect(highlight("const value = 1", "javascript")).toBe(highlight("const value = 1", "js"))
    expect(highlight("## Heading", "markdown")).toBe(highlight("## Heading", "md"))
  })

  test("keeps embedded Svelte and Vue grammars available", () => {
    expect(highlight('<script lang="ts">let value: number = 1</script>', "svelte")).toContain(
      "var(--syntax-attr-name)",
    )
    expect(highlight('<script setup lang="ts">const value: number = 1</script>', "vue")).toContain(
      "var(--syntax-attr-name)",
    )
  })

  test("preserves unsupported-language failures", () => {
    try {
      highlight("value", "definitely-not-a-language")
      throw new Error("Expected an unsupported-language error")
    } catch (error) {
      expect(String(error)).toBe(
        "SyntaxHighlightError: Language `definitely-not-a-language` not found, you may need to load it first",
      )
    }
  })

  test("keeps every stored grammar consistent with its provenance manifest", async () => {
    const highlightingDirectory = path.join(directory, "highlighting")
    const bundle = JSON.parse(
      await fs.readFile(path.join(highlightingDirectory, "grammars.json"), "utf8"),
    )
    const manifest = JSON.parse(
      await fs.readFile(path.join(highlightingDirectory, "grammar-manifest.json"), "utf8"),
    )

    expect(Object.keys(bundle)).toEqual(manifest.languageOrder)
    for (const grammar of manifest.grammars) {
      expect(bundle[grammar.name].scopeName).toBe(grammar.scopeName)
      expect(
        crypto.createHash("sha256").update(JSON.stringify(bundle[grammar.name])).digest("hex"),
      ).toBe(grammar.sha256)
    }
  })

  test("uses the dependency-light TextMate engine", async () => {
    const packageJson = JSON.parse(
      await fs.readFile(path.join(directory, "../../../package.json"), "utf8"),
    )
    expect(packageJson.devDependencies["vscode-textmate"]).toBe("9.3.2")
    expect(packageJson.devDependencies["vscode-oniguruma"]).toBe("2.0.1")
  })
})
