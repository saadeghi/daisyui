import {
  validateColor,
  validateThemeName,
  validateRadius,
  validateBorderWidth,
  validateBoolean,
} from "$lib/themeGeneratorValidation"

export function parseThemeCSS(text, currentThemeData) {
  try {
    const regex = /^@plugin "daisyui\/theme" \{[\s\S]*\}$/m
    const isValidStructure = regex.test(text)

    if (!isValidStructure) {
      console.error('Invalid CSS structure: Must start with @plugin "daisyui/theme" {')
      return null
    }

    const match = text.match(/[^{]*\{([^}]*)\}/)

    if (!match) {
      console.error("Failed to extract properties from CSS text")
      return null
    }

    const props = match[1]
      .split(";")
      .map((prop) => prop.trim())
      .filter(Boolean)

    // Log the extracted properties

    const newThemeData = { ...currentThemeData }
    let hasErrors = false

    for (const prop of props) {
      const [key, value] = prop.split(":").map((s) => s.trim())

      // Log each key-value pair

      // Handle base theme properties
      if (key === "name") {
        const cleanName = value.replace(/['"]/g, "")
        if (!validateThemeName(cleanName)) {
          console.error(`Invalid theme name: ${cleanName} (must be 3-20 lowercase letters)`)
          hasErrors = true
          continue
        }
        newThemeData.name = cleanName
      } else if (key === "color-scheme") {
        const scheme = value.replace(/['"]/g, "")
        if (!["light", "dark"].includes(scheme)) {
          console.error(`Invalid color-scheme: ${scheme} (must be "light" or "dark")`)
          hasErrors = true
          continue
        }
        newThemeData["color-scheme"] = scheme
      } else if (key === "default") {
        if (!validateBoolean(value.trim())) {
          console.error(`Invalid value for default: ${value} (must be "true" or "false")`)
          hasErrors = true
          continue
        }
        newThemeData.default = value.trim() === "true"
      } else if (key === "prefersdark") {
        if (!validateBoolean(value.trim())) {
          console.error(`Invalid value for prefersdark: ${value} (must be "true" or "false")`)
          hasErrors = true
          continue
        }
        newThemeData.prefersdark = value.trim() === "true"
      }
      // Handle CSS custom properties
      else if (key.startsWith("--color-")) {
        if (!validateColor(value)) {
          console.error(`Invalid color value for ${key}: ${value}`)
          hasErrors = true
          continue
        }
        try {
          const temp = document.createElement("div")
          temp.style.color = value
          temp.style.color = `oklch(from ${temp.style.color})`
          if (temp.style.color) {
            newThemeData[key] = temp.style.color
          } else {
            console.error(`Failed to convert color to OKLCH: ${value}`)
            hasErrors = true
          }
        } catch (error) {
          console.error(`Error converting color to OKLCH: ${value}`, error)
          hasErrors = true
        }
      } else if (key.startsWith("--radius-")) {
        if (!validateRadius(value)) {
          console.error(
            `Invalid radius value for ${key}: ${value} (must be 0, 0.25rem, 0.5rem, 1rem, or 2rem)`,
          )
          hasErrors = true
          continue
        }
        newThemeData[key] = value
      } else if (key.startsWith("--spacing-")) {
        if (!validateBorderWidth(value)) {
          console.error(`Invalid border width for ${key}: ${value} (must be 1px or 2px)`)
          hasErrors = true
          continue
        }
        newThemeData[key] = value
      } else {
        console.error(`Unknown property: ${key}`)
        hasErrors = true
      }
    }

    if (!hasErrors) {
      return newThemeData
    }
    return null
  } catch (error) {
    console.error("Failed to parse CSS:", error)
    return null
  }
}
