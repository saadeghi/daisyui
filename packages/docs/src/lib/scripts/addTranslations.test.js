import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"
import { expect, test, beforeEach, afterEach } from "bun:test"
import { mkdirSync, writeFileSync, rmSync } from "fs"
import { join } from "path"

import {
  getFiles,
  shouldSkipFile,
  removeMetadata,
  processMarkdownFile,
  main,
  processTableCells,
  shouldSkipTableCell,
} from "./addTranslations.js"

// Test utilities
const createTempDir = (path) => {
  try {
    mkdirSync(path, { recursive: true })
  } catch (error) {
    if (error.code !== "EEXIST") throw error
  }
}

const createTempFile = (path, content) => {
  writeFileSync(path, content)
}

const cleanupTemp = (path) => {
  rmSync(path, { recursive: true, force: true })
}

// Test setup
const TEST_DIR = "./test-temp"
const TRANSLATION_FILE = join(TEST_DIR, "en.json")

beforeEach(() => {
  createTempDir(TEST_DIR)
})

afterEach(() => {
  cleanupTemp(TEST_DIR)
})

test("getFiles should return empty array for non-existent directory", () => {
  const files = getFiles("./non-existent-dir", /.md$/)
  expect(files).toEqual([])
})

test("shouldSkipFile should correctly identify files to skip", () => {
  expect(shouldSkipFile("packages/docs/src/routes/(routes)/blog/something.md")).toBe(true)
  expect(shouldSkipFile("CHANGELOG.md")).toBe(true)
  expect(shouldSkipFile("packages/docs/src/routes/(routes)/docs/v5/+page.md")).toBe(true)
  expect(shouldSkipFile("packages/docs/src/routes/normal/file.md")).toBe(false)
})

test("removeMetadata should strip frontmatter", () => {
  const content = `---
title: Test
---
actual content`
  expect(removeMetadata(content)).toBe("\nactual content")
})

test("processMarkdownFile should extract translations correctly", () => {
  const testMdPath = join(TEST_DIR, "test.md")
  const mdContent = `
# Title
This is a paragraph.

This is another paragraph with \`code\`.

[Link text](https://example.com)
`
  createTempFile(testMdPath, mdContent)

  const translations = processMarkdownFile(testMdPath)
  expect(translations).toContain("This is a paragraph.")
  expect(translations).toContain("This is another paragraph with `code`.")
  expect(translations).toContain("[Link text](https://example.com)")
})

test("main function should process files and update translations", () => {
  const sourcePath = join(TEST_DIR, "source")
  createTempDir(sourcePath)

  createTempFile(join(sourcePath, "file1.md"), "This is test content")
  createTempFile(TRANSLATION_FILE, JSON.stringify({}))

  const result = main([sourcePath], /\.md$/, TRANSLATION_FILE)

  expect(result.processedFiles).toBe(1)
  expect(result.totalFiles).toBe(1)
  expect(result.newTranslationsCount).toBe(1)
  expect(result.success).toBe(true)
})

test("processTableCells should extract table content correctly", () => {
  const mdContent = `
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`
  const ast = unified().use(remarkParse).use(remarkGfm).parse(mdContent)

  // Log the entire AST structure
  // console.log("AST structure:", JSON.stringify(ast, null, 2))

  const tableCells = processTableCells(ast)
  // console.log("Final extracted cells:", Array.from(tableCells))

  expect(tableCells.has("Header 1")).toBe(true)
  expect(tableCells.has("Header 2")).toBe(true)
  expect(tableCells.has("Cell 1")).toBe(true)
  expect(tableCells.has("Cell 2")).toBe(true)
})

test("shouldSkipTableCell should identify cells to skip", () => {
  expect(shouldSkipTableCell("---")).toBe(true)
  expect(shouldSkipTableCell("{COLOR_NAME}")).toBe(true)
  expect(shouldSkipTableCell("   ")).toBe(true)
  expect(shouldSkipTableCell("normal text")).toBe(false)
})

test("processMarkdownFile should handle double space newline correctly", () => {
  const testMdPath = join(TEST_DIR, "test-double-space-newline.md")
  const mdContent = `
Copilot can generate daisyUI code for you.
Add daisyUI's llms.txt file to your repo so that Copilot can use it by default.
`
  createTempFile(testMdPath, mdContent)

  const translations = processMarkdownFile(testMdPath)
  expect(translations).toContain("Copilot can generate daisyUI code for you.")
  expect(translations).toContain(
    "Add daisyUI's llms.txt file to your repo so that Copilot can use it by default.",
  )
})

test("processMarkdownFile should handle markdown links correctly", () => {
  const testMdPath = join(TEST_DIR, "test-markdown-link.md")
  const mdContent = `
[Link text](https://example.com)
`
  createTempFile(testMdPath, mdContent)

  const translations = processMarkdownFile(testMdPath)
  expect(translations).toContain("[Link text](https://example.com)")
})
