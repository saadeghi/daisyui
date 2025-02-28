import { expect, test } from "bun:test"
import { readdirSync, readFileSync, statSync } from "fs"
import { join, resolve } from "path"
import { transform } from "lightningcss"

// Function to get all CSS files in a directory and its subdirectories, excluding specific directories
const getCssFiles = (dir, excludeDirs = []) => {
  let cssFiles = []
  const files = readdirSync(dir)

  files.forEach((file) => {
    const filePath = join(dir, file)
    const fileStat = statSync(filePath)

    if (fileStat.isDirectory()) {
      const resolvedPath = resolve(filePath)
      if (!excludeDirs.includes(resolvedPath)) {
        cssFiles = cssFiles.concat(getCssFiles(filePath, excludeDirs))
      }
    } else if (file.endsWith(".css")) {
      cssFiles.push(filePath)
    }
  })

  return cssFiles
}

// Directory containing CSS files
const cssDir = join(import.meta.dirname, "../")

// Directories to exclude (absolute paths)
const excludeDirs = [resolve(cssDir, "src"), resolve(cssDir, "functions")]

// Get all CSS files, excluding specified directories
const cssFiles = getCssFiles(cssDir, excludeDirs)

// Test all CSS files in a single test block
test("Validate all CSS files", () => {
  cssFiles.forEach((file) => {
    const cssContent = readFileSync(file, "utf-8")
    let result

    try {
      result = transform({
        code: Buffer.from(cssContent),
        filename: file,
        minify: false,
      })
    } catch (error) {
      console.error(`Error in CSS file: ${file}`, error)
      throw error
    }

    const warningsToIgnore = [{ type: "AtRuleInvalid", value: "property" }]

    const relevantWarnings = result.warnings.filter((warning) => {
      const shouldIgnore = warningsToIgnore.some(
        (rule) => rule.type === warning.type && rule.value === warning.value,
      )
      return !shouldIgnore
    })

    // Log remaining warnings if there are any
    if (relevantWarnings.length > 0) {
      console.error(`Warnings in CSS file: ${file}`)
      relevantWarnings.forEach((warning) => {
        console.error(warning)
      })
    }

    // Check if there are any warnings (excluding the filtered ones)
    expect(relevantWarnings.length).toBe(0)
  })
})
