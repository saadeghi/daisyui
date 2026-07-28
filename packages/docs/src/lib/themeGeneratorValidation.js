// Validation patterns
const themeNamePattern = /^[a-z][a-z0-9- ]{1,18}[a-z0-9]$|^[a-z]{3,20}$/
const borderRadiusPattern = /^(0|0rem|0\.125rem|0\.25rem|0\.5rem|0\.75rem|1rem|2rem)$/
const sizePattern = /^(0\.1875rem|0\.21875rem|0\.25rem|0\.28125rem|0\.3125rem)$/
const borderWidthPattern = /^(0\.5px|1px|1\.5px|2px)$/
const depthPattern = /^(0|1)$/
const noisePattern = /^(0|1)$/

const colorProperties = new Set([
  "--color-base-100",
  "--color-base-200",
  "--color-base-300",
  "--color-base-content",
  "--color-primary",
  "--color-primary-content",
  "--color-secondary",
  "--color-secondary-content",
  "--color-accent",
  "--color-accent-content",
  "--color-neutral",
  "--color-neutral-content",
  "--color-info",
  "--color-info-content",
  "--color-success",
  "--color-success-content",
  "--color-warning",
  "--color-warning-content",
  "--color-error",
  "--color-error-content",
])
const radiusProperties = new Set(["--radius-selector", "--radius-field", "--radius-box"])
const sizeProperties = new Set(["--size-selector", "--size-field"])
const effectProperties = new Set(["--border", "--depth", "--noise"])
const metadataProperties = new Set(["name", "default", "prefersdark", "id", "type"])
const styleProperties = new Set([
  "color-scheme",
  ...colorProperties,
  ...radiusProperties,
  ...sizeProperties,
  ...effectProperties,
])
const allowedProperties = new Set([...metadataProperties, ...styleProperties])

export function isThemeStyleProperty(key) {
  return styleProperties.has(key)
}

export function validateColor(color) {
  if (typeof color !== "string") {
    console.error("Color must be a string")
    return false
  }

  // Ignore hex colors with alpha
  if (color.startsWith("#") && ![4, 7].includes(color.length)) {
    return false
  }

  // Ignore unbalanced paranthesis
  if (color.split("(").length !== color.split(")").length) {
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
  const trimmedName = name.trim()
  if (!themeNamePattern.test(trimmedName)) {
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
    if (!data || typeof data !== "object" || Array.isArray(data))
      throw new Error("Invalid data structure")

    if (!validateThemeName(data.name)) throw new Error("Invalid theme name")
    if (!["light", "dark"].includes(data["color-scheme"])) {
      console.error(data)
      throw new Error("Invalid color scheme")
    }

    // Validate all values
    for (const [key, value] of Object.entries(data)) {
      if (!allowedProperties.has(key)) throw new Error(`Unknown theme property: ${key}`)
      if (colorProperties.has(key) && !validateColor(value))
        throw new Error(`Invalid color value for ${key}`)
      if (radiusProperties.has(key) && !validateRadius(value))
        throw new Error(`Invalid radius value for ${key}:${value}`)
      if (sizeProperties.has(key) && !validateSize(value))
        throw new Error(`Invalid size for ${key}`)
      if (key === "--border" && !validateBorderWidth(value))
        throw new Error(`Invalid border width value for ${key}`)
      if (key === "--depth" && !validateDepth(value))
        throw new Error(`Invalid depth value for ${key}`)
      if (key === "--noise" && !validateNoise(value))
        throw new Error(`Invalid noise value for ${key}`)
      if (["default", "prefersdark"].includes(key) && typeof value !== "boolean")
        throw new Error(`Invalid boolean value for ${key}`)
      if (key === "id" && (typeof value !== "string" || !value.trim()))
        throw new Error("Invalid theme id")
      if (key === "type" && !["builtin", "custom"].includes(value))
        throw new Error("Invalid theme type")
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
