import { compile } from "tailwindcss"
import fs from "fs/promises"
import path from "path"

export const generateColorRules = async ({
  distDir,
  properties,
  breakpoints,
  states,
  opacities = {
    properties: [],
    responsive: [],
    states: [],
  },
  outputFiles = {
    properties: null,
    responsive: null,
    states: null,
  },
}) => {
  try {
    const [defaultTheme, theme] = await Promise.all([
      fs.readFile(
        path.join(import.meta.dirname, "../../../node_modules/tailwindcss/theme.css"),
        "utf-8",
      ),
      fs.readFile(path.join(import.meta.dirname, "./variables.css"), "utf-8"),
    ])

    const colorNames = [
      "base-100",
      "base-200",
      "base-300",
      "base-content",
      "primary",
      "primary-content",
      "secondary",
      "secondary-content",
      "accent",
      "accent-content",
      "neutral",
      "neutral-content",
      "info",
      "info-content",
      "success",
      "success-content",
      "warning",
      "warning-content",
      "error",
      "error-content",
    ]

    const getStyleProperty = (style) => {
      const stylePropertyMap = {
        bg: "background-color",
        text: "color",
        border: "border-color",
        fill: "fill",
        stroke: "stroke",
        outline: "outline-color",
        accent: "accent-color",
        caret: "caret-color",
        ring: "--tw-ring-color",
        "ring-offset": "--tw-ring-offset-color",
        shadow: "--tw-shadow-color",
        decoration: "text-decoration-color",
        divide: "border-color",
        placeholder: "--tw-placeholder-color",
      }
      return stylePropertyMap[style] || "color"
    }

    const generateBaseVariants = (style, color) => {
      return `.${style}-${color}{@apply ${style}-${color};}`
    }

    const generateOpacityVariants = (style, color, opacityList) => {
      return opacityList.map(
        (opacity) =>
          `.${style}-${color}\\/${opacity}{${getStyleProperty(style)}:color-mix(in oklab,var(--color-${color})${opacity}%,#0000);}`,
      )
    }

    const generateResponsiveVariants = (style, color, includeOpacities = []) => {
      const baseVariants = breakpoints.map((bp) =>
        bp.match(/^\d/)
          ? `.\\3${bp[0]}${bp.slice(1)}\\:${style}-${color}{@apply ${bp}:${style}-${color};}`
          : `.${bp}\\:${style}-${color}{@apply ${bp}:${style}-${color};}`,
      )

      const opacityVariants = includeOpacities.length
        ? breakpoints.flatMap((bp) =>
            includeOpacities.map((opacity) => {
              const prefix = bp.match(/^\d/) ? `\\3${bp[0]}${bp.slice(1)}` : bp
              return `.${prefix}\\:${style}-${color}\\/${opacity}{@apply ${bp}:${style}-${color}\\/${opacity};}`
            }),
          )
        : []

      return [...baseVariants, ...opacityVariants]
    }

    const generateStateVariants = (style, color, includeOpacities = []) => {
      const baseVariants = states.map(
        (state) => `.${state}\\:${style}-${color}:${state}{@apply ${state}:${style}-${color};}`,
      )

      const opacityVariants = includeOpacities.length
        ? states.flatMap((state) =>
            includeOpacities.map(
              (opacity) =>
                `.${state}\\:${style}-${color}\\/${opacity}:${state}{@apply ${state}:${style}-${color}\\/${opacity};}`,
            ),
          )
        : []

      return [...baseVariants, ...opacityVariants]
    }

    const generatePropertiesContent = () => {
      return colorNames
        .flatMap((color) =>
          properties.flatMap((style) => [
            generateBaseVariants(style, color),
            ...generateOpacityVariants(style, color, opacities.properties || []),
          ]),
        )
        .join("\n")
    }

    const generateResponsiveContent = (groupBreakpoints = true) => {
      if (groupBreakpoints) {
        return breakpoints
          .map((bp) => {
            const prefix = bp.match(/^\d/) ? `\\3${bp[0]}${bp.slice(1)}` : bp
            const classes = colorNames
              .flatMap((color) =>
                properties.flatMap((style) => {
                  const baseClass = `.${prefix}\\:${style}-${color}{@apply ${style}-${color};}`
                  const opacityClasses = (opacities.responsive || []).map(
                    (opacity) =>
                      `.${prefix}\\:${style}-${color}\\/${opacity}{@apply ${style}-${color}\\/${opacity};}`,
                  )
                  return [baseClass, ...opacityClasses]
                }),
              )
              .join("\n")
            return `@media ${getBreakpointWidth(bp)} {\n${classes}\n}`
          })
          .join("\n\n")
      }
      return colorNames
        .flatMap((color) =>
          properties.flatMap((style) =>
            generateResponsiveVariants(style, color, opacities.responsive || []),
          ),
        )
        .join("\n")
    }

    const getBreakpointWidth = (breakpoint) => {
      const widths = {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem",
      }
      if (breakpoint.startsWith("max-")) {
        return `(width < ${widths[breakpoint.slice(4)] || "40rem"})`
      }
      return `(width >= ${widths[breakpoint] || "40rem"})`
    }

    const generateStatesContent = () => {
      return colorNames
        .flatMap((color) =>
          properties.flatMap((style) =>
            generateStateVariants(style, color, opacities.states || []),
          ),
        )
        .join("\n")
    }

    const compileAndWriteFile = async (content, fileName) => {
      const compiledContent = (
        await compile(`
        @layer base{${defaultTheme}${theme}}
        @layer wrapperStart{
          ${content}
        }
        @layer wrapperEnd
      `)
      ).build([])

      const startIndex = compiledContent.indexOf("@layer wrapperStart")
      const endIndex = compiledContent.indexOf("@layer wrapperEnd")

      if (startIndex === -1 || endIndex === -1) {
        throw new Error("Failed to find wrapper layers in compiled content")
      }

      const openingBraceIndex = compiledContent.indexOf("{", startIndex)
      const closingBraceIndex = compiledContent.lastIndexOf("}", endIndex)

      if (
        openingBraceIndex === -1 ||
        closingBraceIndex === -1 ||
        openingBraceIndex >= closingBraceIndex
      ) {
        throw new Error("Invalid wrapper layer structure in compiled content")
      }

      let extractedContent = compiledContent.slice(openingBraceIndex + 1, closingBraceIndex).trim()

      // For responsive.css, we need to preserve the media queries
      if (fileName === outputFiles.responsive) {
        extractedContent = extractedContent.replace(/&/g, "")
      }

      const colorsDir = path.join(import.meta.dirname, distDir)
      await fs.mkdir(colorsDir, { recursive: true })
      await fs.writeFile(path.join(colorsDir, fileName), extractedContent)
    }

    await Promise.all(
      [
        outputFiles.properties &&
          compileAndWriteFile(generatePropertiesContent(), outputFiles.properties),
        outputFiles.responsive &&
          compileAndWriteFile(generateResponsiveContent(), outputFiles.responsive),
        outputFiles.states && compileAndWriteFile(generateStatesContent(), outputFiles.states),
      ].filter(Boolean),
    )
  } catch (error) {
    throw new Error(error)
  }
}
