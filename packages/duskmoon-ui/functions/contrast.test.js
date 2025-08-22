import { wcagContrast } from "culori"
import { expect, test } from "bun:test"
import fs from "fs"
import path from "path"

const minContrast = 3
const optimalContrast = 4.5
const maxContrast = 7

function rateContrast(contrast) {
  if (contrast >= maxContrast) {
    return "AAA"
  }
  if (contrast >= optimalContrast) {
    return "AA"
  }
  if (contrast <= minContrast) {
    return "🛑"
  }
  return ""
}

const themesDir = path.resolve(import.meta.dirname, "../src/themes")
const colorPairs = [
  ["--color-base-100", "--color-base-content"],
  ["--color-base-200", "--color-base-content"],
  ["--color-base-300", "--color-base-content"],
  ["--color-primary", "--color-primary-content"],
  ["--color-secondary", "--color-secondary-content"],
  ["--color-accent", "--color-accent-content"],
  ["--color-neutral", "--color-neutral-content"],
  ["--color-info", "--color-info-content"],
  ["--color-success", "--color-success-content"],
  ["--color-warning", "--color-warning-content"],
  ["--color-error", "--color-error-content"],
]

const getCssVariables = (cssContent) => {
  const variables = {}
  const regex = /--([\w-]+):\s*([^;]+);/g
  let match
  while ((match = regex.exec(cssContent)) !== null) {
    variables[`--${match[1]}`] = match[2].trim()
  }
  return variables
}

const themes = fs.readdirSync(themesDir).filter((file) => file.endsWith(".css"))

test("All theme color contrasts", () => {
  const results = []

  themes.forEach((theme) => {
    const themeName = path.basename(theme, ".css")
    const themePath = path.join(themesDir, theme)
    const cssContent = fs.readFileSync(themePath, "utf8")
    const variables = getCssVariables(cssContent)

    colorPairs.forEach(([color1, color2]) => {
      const colorValue1 = variables[color1]
      const colorValue2 = variables[color2]
      const contrast = parseFloat(wcagContrast(colorValue1, colorValue2).toFixed(2))
      const result = {
        theme: themeName,
        colorPair: `${color1.replace("--color-", "")}, ${color2.replace("--color-", "")}`,
        ratio: contrast,
        rate: rateContrast(contrast),
      }
      results.push(result)
    })
  })

  console.table(results)

  results.forEach(({ ratio }) => {
    expect(ratio).toBeGreaterThan(minContrast)
  })
})
