export const cleanCss = (cssContent) => {
  // Precompile regular expressions for better performance
  const emptyFallbackRegex = /var\((--[^,)]+),\s*\)/g
  const spacingWidthFallbackRegex =
    /var\((--(spacing|width)[\w-]*),\s*((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g
  const spacingVarRegex = /var\(--spacing\)/g

  return cssContent
    .replace(emptyFallbackRegex, "var($1)")
    .replace(spacingWidthFallbackRegex, (match, variable, prefix, fallback) => {
      // If there's no actual fallback value, return the original match
      return fallback.trim() ? fallback.trim() : match
    })
    .replace(spacingVarRegex, "0.25rem")
}
