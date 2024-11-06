// Validation patterns
const themeNamePattern = /^[a-z]{3,20}$/
const borderRadiusPattern = /^(0|0\.25rem|0\.5rem|1rem|2rem)$/
const borderWidthPattern = /^[12]px$/

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
	return typeof name === "string" && themeNamePattern.test(name)
}

export function validateRadius(radius) {
	return typeof radius === "string" && borderRadiusPattern.test(radius)
}

export function validateBorderWidth(spacing) {
	return typeof spacing === "string" && borderWidthPattern.test(spacing)
}

export function validateThemeStructure(data) {
	try {
		if (!data || typeof data !== "object") return null

		if (!validateThemeName(data.name)) return null
		if (!["light", "dark"].includes(data["color-scheme"])) return null

		// Validate all values
		for (const [key, value] of Object.entries(data)) {
			if (key.startsWith("--color-") && !validateColor(value)) return null
			if (key.startsWith("--radius-") && !validateRadius(value)) return null
			if (key.startsWith("--spacing-") && !validateBorderWidth(value)) return null
		}

		return data
	} catch {
		return null
	}
}
