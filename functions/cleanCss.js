export const cleanCss = (cssContent) => {
  // Only replace var() that have a fallback value after the comma
  return cssContent
    // remove empty fallbacks
    .replace(/var\((--[^,)]+),\s*\)/g, 'var($1)')
    // remove css variable if there's a fallback value
    .replace(/(?<![\w-]|in\s[\w]+,\s)var\((--[\w-]+),([^)(]+)\)/g, (match, variable, fallback) => {
      // If there's no actual fallback value, return the original match
      if (!fallback.trim()) {
        return match;
      }
      return fallback.trim();
    });
};
