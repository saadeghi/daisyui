// Validation patterns
const themeNamePattern = /^[a-z]{3,20}$/
const borderRadiusPattern = /^(0|0rem|0\.125rem|0\.25rem|0\.5rem|0\.75rem|1rem|2rem)$/
const sizePattern = /^(0\.1875rem|0\.21875rem|0\.25rem|0\.28125rem|0\.3125rem)$/
const borderWidthPattern = /^(0\.5px|1px|1\.5px|2px)$/
const depthPattern = /^(0|1)$/
const noisePattern = /^(0|1)$/

export function validateColor(color) {
  if (typeof color !== "string") {
    console.error("Color must be a string")
    return false
  }

  try {
    const temp = document.createElement("div")
    temp.style.color = color
    return temp.style.color !== ""
  } catch (error) {
    console.error("Invalid color format:", error)
    return false
  }
}

export function validateThemeName(name) {
  if (typeof name !== "string") {
    console.error("Theme name must be a string", name)
    return false
  }
  if (!themeNamePattern.test(name)) {
    console.error("Theme name does not match the required pattern", name)
    return false
  }
  return true
}

export function validateRadius(radius) {
  return typeof radius === "string" && borderRadiusPattern.test(radius)
}

export function validateSize(size) {
  return typeof size === "string" && sizePattern.test(size)
}

export function validateBorderWidth(size) {
  return typeof size === "string" && borderWidthPattern.test(size)
}

export function validateDepth(size) {
  return typeof size === "string" && depthPattern.test(size)
}

export function validateNoise(size) {
  return typeof size === "string" && noisePattern.test(size)
}

export function validateThemeStructure(data) {
  try {
    if (!data || typeof data !== "object") throw new Error("Invalid data structure")

    if (!validateThemeName(data.name)) throw new Error("Invalid theme name")
    if (!["light", "dark"].includes(data["color-scheme"])) {
      console.error(data)
      throw new Error("Invalid color scheme")
    }

    // Validate all values
    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith("--color-") && !validateColor(value))
        throw new Error(`Invalid color value for ${key}`)
      if (key.startsWith("--radius-") && !validateRadius(value))
        throw new Error(`Invalid radius value for ${key}:${value}`)
      if (key.startsWith("--size-") && !validateSize(value))
        throw new Error(`Invalid size for ${key}`)
      if (key.startsWith("--border") && !validateBorderWidth(value))
        throw new Error(`Invalid border width value for ${key}`)
    }

    return data
  } catch (error) {
    console.error(error.message)
    return null
  }
}

export function validateBoolean(value) {
  return value === "true" || value === "false"
}
