import { promises as fs } from "node:fs"
import path from "node:path"
import postcss from "postcss"
import postcssJs from "postcss-js"
import prefixer from "postcss-prefixer"
import { compileAndExtractStyles, loadThemes } from './compileAndExtractStyles.js'
import { replaceApplyTrueWithEmptyObject } from "./replaceApplyTrueWithEmptyObject.js"

export const cssToJs = async (cssFile) => {
  try {
    // Read the CSS file
    const cssContent = await fs.readFile(cssFile, "utf-8")

    // Load themes
    const { defaultTheme, theme } = await loadThemes()

    // First convert Tailwind CSS to raw CSS
    const rawCss = await compileAndExtractStyles(cssContent, defaultTheme, theme)

    // Optional: Add prefixer if needed
    // const prefixed = postcss([prefixer({ prefix: "dz-" })]).process(rawCss).css
    const prefixed = rawCss

    // Parse the CSS and convert to JS object
    const root = postcss.parse(prefixed)
    const jsContent = postcssJs.objectify(root)

    // Apply any necessary transformations
    replaceApplyTrueWithEmptyObject(jsContent)

    // Return stringified JS object
    return JSON.stringify(jsContent, null, null)
  } catch (error) {
    throw new Error(`Error converting CSS to JS: ${error.message}`)
  }
}
