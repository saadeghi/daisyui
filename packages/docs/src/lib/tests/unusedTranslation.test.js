import { expect, test } from "bun:test"
import {
  getFiles,
  loadTranslations,
  findUsedTranslations,
  findUnusedTranslations,
} from "../scripts/removeUnusedTranslations.js"

test("All translation keys should be used (efficient match)", () => {
  const translationDir = "./packages/docs/src/translation"
  const sourceDirs = ["./packages/docs/src/routes", "./packages/docs/src/components"]
  const sourceFilePattern = /\.(md|svelte|js)$/

  const translationFiles = getFiles(translationDir, /\.json$/)
  expect(translationFiles.length).toBeGreaterThan(0)

  const allSourceFiles = []
  sourceDirs.forEach((dir) => {
    const files = getFiles(dir, sourceFilePattern)
    allSourceFiles.push(...files)
  })
  expect(allSourceFiles.length).toBeGreaterThan(0)

  const allTranslations = loadTranslations(translationFiles)
  const usedTranslations = findUsedTranslations(allSourceFiles, allTranslations)
  const unusedTranslations = findUnusedTranslations(allTranslations, usedTranslations)

  if (unusedTranslations.size > 0) {
    console.error("\nUnused translations:")
    unusedTranslations.forEach((key) => console.error(key))
    throw new Error(
      `Found ${unusedTranslations.size} unused translations.\n Run 'bun run lang:clean' to clean them`,
    )
  }
})
