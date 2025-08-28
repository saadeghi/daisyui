import { plugin } from "../functions/plugin.js"
import allThemes from "./object.js"

export default plugin.withOptions((options = {}) => {
  return ({ addBase }) => {
    const {
      name = "custom-theme",
      default: isDefault = false,
      prefersdark = false,
      "color-scheme": colorScheme = "normal",
      root = ":root",
      ...customThemeTokens
    } = options

    let selector = `${root}:has(input.theme-controller[value=${name}]:checked),[data-theme="${name}"]`
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
        "color-scheme": colorScheme || builtinTheme.colorScheme,
      }
    }

    const baseStyles = {
      [selector]: {
        "color-scheme": themeTokens["color-scheme"] || colorScheme,
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
