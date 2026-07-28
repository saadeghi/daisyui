import { plugin } from "../functions/plugin.js"
import allThemes from "./object.js"

const escapeCssString = (value) =>
  String(value).replace(
    /[^a-zA-Z0-9_-]/gu,
    (character) => `\\${character.codePointAt(0).toString(16)} `,
  )

export default plugin.withOptions((options = {}) => {
  return ({ addBase }) => {
    const {
      name = "custom-theme",
      default: isDefault = false,
      prefersdark = false,
      "color-scheme": colorScheme,
      root = ":root",
      ...customThemeTokens
    } = options

    const escapedName = escapeCssString(name)
    let selector = `${root}:has(input.theme-controller[value="${escapedName}"]:checked),[data-theme="${escapedName}"]`
    if (isDefault) {
      selector = `:where(${root}),${selector}`
    }

    // Merge custom theme with built-in theme if it exists
    let themeTokens = { ...customThemeTokens }
    if (allThemes[name]) {
      const builtinTheme = allThemes[name]
      themeTokens = {
        ...builtinTheme,
        ...customThemeTokens,
        "color-scheme": colorScheme ?? builtinTheme["color-scheme"],
      }
    }

    const baseStyles = {
      [selector]: {
        "color-scheme": themeTokens["color-scheme"] ?? colorScheme ?? "normal",
        ...themeTokens,
      },
    }

    if (prefersdark) {
      // Use :root:not([data-theme]) for dark mode specificity
      const darkSelector =
        root === ":root" ? ":root:not([data-theme])" : `${root}:not([data-theme])`
      addBase({
        "@media (prefers-color-scheme: dark)": {
          [darkSelector]: baseStyles[selector],
        },
      })
    }

    addBase(baseStyles)
  }
})
