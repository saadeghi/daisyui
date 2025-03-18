import { expect, test } from "bun:test"
import { readdirSync, statSync, existsSync } from "fs"
import { join } from "path"

const directories = ["base", "components", "themes", "utilities"]
const basePath = join(import.meta.dirname, "../src")
const targetPath = join(import.meta.dirname, "..")

// Helper function to check if a file exists
const fileExists = (path) => existsSync(path)

// Helper function to check if a directory exists
const directoryExists = (path) => {
  try {
    return statSync(path).isDirectory()
  } catch (error) {
    console.log(error)
    return false
  }
}

// Test 1: Ensure corresponding CSS files and directories exist
directories.forEach((dir) => {
  test(`Ensure corresponding CSS files and directories exist for ${dir}`, () => {
    const srcDir = join(basePath, dir)
    const targetDir = join(targetPath, dir === "themes" ? "theme" : dir)

    if (!directoryExists(srcDir)) {
      throw new Error(`Source directory does not exist: ${srcDir}`)
    }

    const files = readdirSync(srcDir).filter((file) => file.endsWith(".css"))

    // we need .css for reset but not .js
    const exclusions = ["reset"]

    files.forEach((file) => {
      const targetFile = join(targetDir, file)
      expect(fileExists(targetFile)).toBe(true)

      const fileName = file.replace(".css", "")
      const dirPath = join(targetDir, fileName)

      if (exclusions.includes(fileName)) {
        return
      }

      expect(directoryExists(dirPath)).toBe(true)
      expect(fileExists(join(dirPath, "index.js"))).toBe(true)
      expect(fileExists(join(dirPath, "object.js"))).toBe(true)
    })
  })
})

// Test 2: Ensure specific CSS files exist in ../colors
test("Ensure specific CSS files exist in ../colors", () => {
  const colorFiles = ["properties.css", "responsive.css", "states.css"]
  const colorsDir = join(targetPath, "colors")

  if (!directoryExists(colorsDir)) {
    throw new Error(`Colors directory does not exist: ${colorsDir}`)
  }

  colorFiles.forEach((file) => {
    const filePath = join(colorsDir, file)
    expect(fileExists(filePath)).toBe(true)
  })
})

// Test 3: Ensure specific files exist in the root directory
test("Ensure specific files exist in the root directory", () => {
  const rootFiles = [
    "chunks.css",
    "daisyui.css",
    "themes.css",
    "imports.js",
    "index.js",
    "build.js",
    "LICENSE",
    "package.json",
    "README.md",
  ]

  rootFiles.forEach((file) => {
    const filePath = join(targetPath, file)
    expect(fileExists(filePath)).toBe(true)
  })
})

// Test 4: Ensure index.js exists in ../theme
test("Ensure index.js exists in ../theme", () => {
  const themeIndexPath = join(targetPath, "theme", "index.js")
  expect(fileExists(themeIndexPath)).toBe(true)
})
