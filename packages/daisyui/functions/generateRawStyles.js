import fs from "fs/promises"
import path from "path"
import { getFileNames } from "./getFileNames.js"
import { cleanCss } from "./cleanCss.js"
import breakpoints from "./breakpoints.js"
import postcss from "postcss"
import selectorParser from "postcss-selector-parser"
import { compileAndExtractStyles, loadThemes } from "./compileAndExtractStyles.js"

export async function generateResponsiveVariants(css) {
  let responsiveStyles = ""
  let keyframesStyles = ""

  const root = postcss.parse(css)

  // Extract keyframes and remove them from the root
  root.walkAtRules("keyframes", (atRule) => {
    keyframesStyles += atRule.toString()
    atRule.remove()
  })

  for (const [breakpoint, minWidth] of Object.entries(breakpoints)) {
    const prefixedCss = await postcss([
      (root) => {
        root.walkRules((rule) => {
          if (rule.parent.type === "root") {
            rule.selector = selectorParser((selectors) => {
              selectors.each((selector) => {
                if (selector.first.type === "class") {
                  selector.first.value = `${breakpoint}:${selector.first.value}`
                }
              })
            }).processSync(rule.selector)
          }
        })
      },
    ]).process(root.toString(), { from: undefined })

    // Escape the colon in the class name for CSS
    const escapedCss = prefixedCss.css.replace(
      new RegExp(`\\.${breakpoint}:`, "g"),
      `.${breakpoint}\\:`,
    )

    responsiveStyles += `\n@media (min-width: ${minWidth}) {\n${escapedCss}\n}\n\n`
  }

  return css + responsiveStyles + keyframesStyles
}

async function processFile(file, stylesDir, distDir, defaultTheme, theme, responsive, exclude) {
  const styleContent = await fs.readFile(path.join(stylesDir, `${distDir}/${file}.css`), "utf-8")
  let stylesContent = await compileAndExtractStyles(styleContent, defaultTheme, theme)

  if (responsive && !exclude.includes(file)) {
    stylesContent = await generateResponsiveVariants(stylesContent)
  }

  stylesContent = cleanCss(stylesContent)

  await fs.writeFile(
    path.join(import.meta.dirname, distDir, `${distDir}/${file}.css`),
    stylesContent,
  )
}

export async function generateRawStyles({ srcDir, distDir, responsive = false, exclude = [] }) {
  try {
    const { defaultTheme, theme } = await loadThemes()

    const stylesDir = path.join(import.meta.dirname, srcDir)
    const files = await getFileNames(stylesDir, ".css", false)

    // Process all files concurrently
    const processPromises = files.map((file) =>
      processFile(file, stylesDir, distDir, defaultTheme, theme, responsive, exclude).catch(
        (fileError) => {
          throw new Error(`Error processing file ${file}: ${fileError.message}`)
          // You might want to throw or handle this error differently
        },
      ),
    )

    // Wait for all files to be processed
    await Promise.all(processPromises)
  } catch (error) {
    console.error("An error occurred while generating raw styles:", error)
    process.exit(1)
  }
}
