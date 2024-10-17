export const processThemes = (themes, themeRoot, addBase, allThemes) => {
  const themeTokens = {};
  let hasDefaultTheme = false;
  let hasPrefersDarkTheme = false;

  // Ensure themes is always an array
  const themeArray = Array.isArray(themes) ? themes : [themes];

  for (const themeOption of themeArray) {
    const [themeName, ...themeFlags] = themeOption.split(' ');
    const tokens = allThemes[themeName];
    if (!tokens || Object.keys(tokens).length === 0) {
      console.warn(`No valid tokens found in theme: ${themeName}`);
      continue;
    }

    themeTokens[themeName] = tokens;

    // Handle default theme
    if (themeFlags.includes('--default')) {
      if (hasDefaultTheme) {
        console.warn(`Multiple default themes specified. Using ${themeName} as default.`);
      }
      hasDefaultTheme = true;
      const standardSelector = `[data-theme='${themeName}'],:root:has(input.theme-controller[value=${themeName}]:checked)`;
      addBase({
        [`${themeRoot},${standardSelector}`]: tokens
      });
    }

    // Handle prefers-dark theme
    if (themeFlags.includes('--prefersDark')) {
      if (hasPrefersDarkTheme) {
        console.warn(`Multiple prefers-dark themes specified. Using ${themeName} for prefers-dark.`);
      }
      hasPrefersDarkTheme = true;
      addBase({
        '@media (prefers-color-scheme: dark)': {
          [themeRoot]: tokens
        }
      });
    }

    // Add theme
    if (!themeFlags.includes('--default')) {
      addBase({
        [`[data-theme="${themeName}"]`]: tokens
      });
    }
  }

  return { themeTokens, hasDefaultTheme, hasPrefersDarkTheme };
}

export function handleThemeErrors(themeTokens) {
  if (!themeTokens || Object.keys(themeTokens).length === 0) {
    console.error('No valid theme files were found. Please check your theme configuration and ensure the themes exist.');
    return false;
  }

  return true;
}
