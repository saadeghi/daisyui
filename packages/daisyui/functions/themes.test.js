import { expect, test } from "bun:test"
import { readdirSync, readFileSync } from "fs"
import { join } from "path"

const requiredValues = [
  "color-scheme",
  "--color-base-100",
  "--color-base-200",
  "--color-base-300",
  "--color-base-content",
  "--color-primary",
  "--color-primary-content",
  "--color-secondary",
  "--color-secondary-content",
  "--color-accent",
  "--color-accent-content",
  "--color-neutral",
  "--color-neutral-content",
  "--color-info",
  "--color-info-content",
  "--color-success",
  "--color-success-content",
  "--color-warning",
  "--color-warning-content",
  "--color-error",
  "--color-error-content",
  "--radius-selector",
  "--radius-field",
  "--radius-box",
  "--border-width",
]

const isOklch = (value) => /^oklch\(\d+(\.\d+)?% \d+(\.\d+)? \d+(\.\d+)?\)$/.test(value)
const isRem = (value) => /^\d+(\.\d+)?rem$/.test(value)
const isPx = (value) => /^\d+(\.\d+)?px$/.test(value)

const themesDir = join(__dirname, "../src/themes")
const themeFiles = readdirSync(themesDir).filter((file) => file.endsWith(".css"))

themeFiles.forEach((file) => {
  const filePath = join(themesDir, file)
  const content = readFileSync(filePath, "utf-8")

  test(`Theme file ${file} should include all required values`, () => {
    requiredValues.forEach((value) => {
      const regex = new RegExp(`${value}:\\s*([^;]+);`)
      const match = content.match(regex)
      expect(match).toBeTruthy()
      if (match) {
        const [, cssValue] = match
        if (value === "color-scheme") {
          // Check that color-scheme does not have extra quotes
          expect(cssValue).not.toMatch(/^".*"$/)
          expect(["light", "dark"]).toContain(cssValue)
        } else if (value.startsWith("--color-")) {
          expect(isOklch(cssValue)).toBe(true)
        } else if (value.startsWith("--radius-")) {
          expect(isRem(cssValue)).toBe(true)
        } else if (value === "--border-width") {
          expect(isPx(cssValue)).toBe(true)
        }
      }
    })
  })
})
