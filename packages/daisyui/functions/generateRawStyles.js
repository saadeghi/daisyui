import fs from "fs/promises"
import path from "path"
import { getFileNames } from "./getFileNames.js"
import { cleanCss } from "./cleanCss.js"
import breakpoints from "./breakpoints.js"
import postcss from "postcss"
import selectorParser from "postcss-selector-parser"
import { compileAndExtractStyles, loadThemes } from "./compileAndExtractStyles.js"

// collect the class names of the top-level rules in a source file
export function getRootClasses(css) {
  const classes = new Set()
  postcss.parse(css).each((node) => {
    if (node.type !== "rule") return
    selectorParser((selectors) => {
      selectors.walkClasses((classNode) => classes.add(classNode.value))
    }).processSync(node.selector)
  })
  return classes
}

// transform selectors with breakpoint prefix
export function transformSelector(selector, breakpoint, rootClasses = new Set()) {
  const prefixFirstRootClass = (container) => {
    let target = null
    container.walkClasses((classNode) => {
      if (!target && rootClasses.has(classNode.value)) {
        target = classNode
      }
    })
    if (target) {
      target.value = `${breakpoint}:${target.value}`
    }
    return Boolean(target)
  }

  return selectorParser((selectors) => {
    selectors.each((selector) => {
      const first = selector.first
      // a flattened selector list keeps the component class in every argument of a leading :is()/:where()
      if (first.type === "pseudo" && /^:(is|where)$/.test(first.value) && first.nodes?.length) {
        let prefixed = false
        first.nodes.forEach((argument) => {
          if (prefixFirstRootClass(argument)) prefixed = true
        })
        if (prefixed) return
      }
      if (prefixFirstRootClass(selector)) return
      if (first.type === "class") {
        first.value = `${breakpoint}:${first.value}`
      }
    })
  }).processSync(selector)
}

// escape breakpoint colons in CSS
export function escapeBreakpointColon(css, breakpoint) {
  return css.replace(new RegExp(`\\.${breakpoint}:`, "g"), `.${breakpoint}\\:`)
}

// wrap styles in layer
export function wrapInLayer(styles, layer) {
  return layer ? `@layer ${layer} {\n${styles}\n}` : styles
}

// generate media query
export function generateMediaQuery(breakpoint, minWidth, styles) {
  return `\n@media (min-width: ${minWidth}) {\n${styles}\n}\n\n`
}

// extract keyframes
export function extractKeyframes(root) {
  let keyframesStyles = ""
  root.walkAtRules("keyframes", (atRule) => {
    keyframesStyles += atRule.toString()
    atRule.remove()
  })
  return keyframesStyles
}

function hasRuleAncestor(rule) {
  let parent = rule.parent

  while (parent) {
    if (parent.type === "rule") {
      return true
    }
    parent = parent.parent
  }

  return false
}

export async function generateResponsiveVariants(css, rootClasses = new Set()) {
  let responsiveStyles = ""
  const root = postcss.parse(css)

  const keyframesStyles = extractKeyframes(root)

  for (const [breakpoint, minWidth] of Object.entries(breakpoints)) {
    const prefixedCss = await postcss([
      (root) => {
        root.walkRules((rule) => {
          if (!hasRuleAncestor(rule)) {
            rule.selector = transformSelector(rule.selector, breakpoint, rootClasses)
          }
        })
      },
    ]).process(root.toString(), { from: undefined })

    const escapedCss = escapeBreakpointColon(prefixedCss.css, breakpoint)
    responsiveStyles += generateMediaQuery(breakpoint, minWidth, escapedCss)
  }

  return root.toString() + responsiveStyles + keyframesStyles
}

async function processFile(
  file,
  stylesDir,
  distDir,
  defaultTheme,
  theme,
  responsive,
  exclude,
  layer,
) {
  const styleContent = await fs.readFile(path.join(stylesDir, `${distDir}/${file}.css`), "utf-8")
  let stylesContent = await compileAndExtractStyles(styleContent, defaultTheme, theme)

  if (responsive && !exclude.includes(file)) {
    stylesContent = await generateResponsiveVariants(stylesContent, getRootClasses(styleContent))
  }

  stylesContent = cleanCss(stylesContent)

  if (layer) {
    stylesContent = `@layer ${layer} {\n${stylesContent}\n}`
  }

  await fs.writeFile(
    path.join(import.meta.dirname, distDir, `${distDir}/${file}.css`),
    stylesContent,
  )
}

export async function generateRawStyles({
  srcDir,
  distDir,
  responsive = false,
  exclude = [],
  layer = null,
}) {
  try {
    const { defaultTheme, theme } = await loadThemes()

    const stylesDir = path.join(import.meta.dirname, srcDir)
    const files = await getFileNames(stylesDir, ".css", false)

    // Process all files concurrently
    const processPromises = files.map((file) =>
      processFile(file, stylesDir, distDir, defaultTheme, theme, responsive, exclude, layer).catch(
        (fileError) => {
          throw new Error(`Error processing file ${file}: ${fileError.message}`)
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
