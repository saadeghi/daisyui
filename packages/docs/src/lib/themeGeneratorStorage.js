import { validateThemeStructure } from "./themeGeneratorValidation.js"

export function parseStoredThemes(value) {
  if (typeof value !== "string") return null

  try {
    const themes = JSON.parse(value)
    if (!Array.isArray(themes) || themes.length === 0) return null
    if (
      !themes.every(
        (theme) =>
          validateThemeStructure(theme) &&
          typeof theme.id === "string" &&
          theme.id.trim() &&
          ["builtin", "custom"].includes(theme.type) &&
          typeof theme.default === "boolean" &&
          typeof theme.prefersdark === "boolean",
      )
    ) {
      return null
    }
    if (!themes.some((theme) => theme.type === "builtin")) return null

    return themes.map((theme) => ({
      ...theme,
      ...Object.fromEntries(
        Object.entries(theme)
          .filter(([key]) => key.startsWith("--color-"))
          .map(([key, color]) => [key, color.trim()]),
      ),
    }))
  } catch {
    return null
  }
}

export function selectInitialTheme(themes, selectedId) {
  return (
    themes.find((theme) => theme.id === selectedId) ??
    themes.find((theme) => theme.type === "builtin" && theme.name === "light") ??
    themes.find((theme) => theme.type === "builtin")
  )
}
