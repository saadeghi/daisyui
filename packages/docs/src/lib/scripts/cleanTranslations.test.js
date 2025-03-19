import { expect, test } from "bun:test"
import {
  getFilesInDir,
  loadAllTranslations,
  getUsedTranslations,
  getUnusedTranslations,
} from "./cleanTranslations.js"

test("All translation keys should be used (efficient match)", () => {
  const translationDir = "./packages/docs/src/translation"
  const sourceDirs = ["./packages/docs/src/routes", "./packages/docs/src/components"]
  const sourceFilePattern = /\.(md|svelte|js)$/

  const translationFiles = getFilesInDir(translationDir, /\.json$/)
  expect(translationFiles.length).toBeGreaterThan(0)

  const allSourceFiles = []
  sourceDirs.forEach((dir) => {
    const files = getFilesInDir(dir, sourceFilePattern)
    allSourceFiles.push(...files)
  })
  expect(allSourceFiles.length).toBeGreaterThan(0)

  const allTranslations = loadAllTranslations(translationFiles)
  const usedTranslations = getUsedTranslations(allSourceFiles, allTranslations)
  const unusedTranslations = getUnusedTranslations(allTranslations, usedTranslations)

  if (unusedTranslations.size > 0) {
    console.error("\nUnused translations:")
    unusedTranslations.forEach((key) => console.error(key))
    throw new Error(
      `Found ${unusedTranslations.size} unused translations.\n Run 'bun run lang:clean' to clean them`,
    )
  }
})
