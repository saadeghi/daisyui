export const cleanCss = (cssContent) => {
  // Precompile regular expressions for better performance
  const emptyFallbackRegex = /var\((--[^,)]+),\s*\)/g
  const spacingWidthFallbackRegex =
    /var\((--(spacing|width)[\w-]*),\s*((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g
  const spacingVarRegex = /var\(--spacing\)/g

  // Remove empty fallbacks
  cssContent = cssContent.replace(emptyFallbackRegex, "var($1)")

  // Remove spacing, width css variable if there's a fallback value
  cssContent = cssContent.replace(
    spacingWidthFallbackRegex,
    (match, variable, prefix, fallback) => {
      // If there's no actual fallback value, return the original match
      return fallback.trim() ? fallback.trim() : match
    },
  )

  // Replace all `var(--spacing)` with `0.25rem`
  cssContent = cssContent.replace(spacingVarRegex, "0.25rem")

  return cssContent
}
