import { promises as fs } from "node:fs"
import postcss from "postcss"
import postcssJs from "postcss-js"
import { compileAndExtractStyles, loadThemes } from "./compileAndExtractStyles.js"
import { replaceApplyTrueWithEmptyObject } from "./replaceApplyTrueWithEmptyObject.js"
import { cleanCss } from "./cleanCss.js"

// function to convert camelCase to kebab-case
const camelToKebab = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
}

// Function to transform object keys from camelCase to kebab-case
const transformKeys = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj

  if (Array.isArray(obj)) {
    return obj.map(transformKeys)
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      camelToKebab(key),
      typeof value === "object" ? transformKeys(value) : value,
    ]),
  )
}

export const cssToJs = async (cssFile) => {
  try {
    // Read the CSS file
    const cssContent = await fs.readFile(cssFile, "utf-8")

    // Load themes
    const { defaultTheme, theme } = await loadThemes()

    // First convert Tailwind CSS to raw CSS
    const rawCss = await compileAndExtractStyles(cssContent, defaultTheme, theme)

    // Clean the CSS
    const cleanedCss = cleanCss(rawCss)

    // Parse the CSS and convert to JS object
    const root = postcss.parse(cleanedCss)
    const jsContent = postcssJs.objectify(root)

    const kebabCaseContent = transformKeys(jsContent)

    // Apply any necessary transformations
    replaceApplyTrueWithEmptyObject(kebabCaseContent)

    // Return stringified JS object
    return JSON.stringify(kebabCaseContent, null, null)
  } catch (error) {
    throw new Error(`Error converting CSS to JS: ${error.message}`)
  }
}
