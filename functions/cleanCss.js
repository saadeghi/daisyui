export const cleanCss = (cssContent) => {
  // Only replace var() that have a fallback value after the comma
  return cssContent
    // remove empty fallbacks
    .replace(/var\((--[^,)]+),\s*\)/g, 'var($1)')
    // remove spacing,width css variable if there's a fallback value
    .replace(/var\((--(spacing|width)[\w-]*),\s*((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g, (match, variable, prefix, fallback) => {
      // If there's no actual fallback value, return the original match
      if (!fallback.trim()) {
        return match;
      }
      return fallback.trim();
    });
};
