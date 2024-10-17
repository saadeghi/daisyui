import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const getTheme = (filePath) => {
  let resolvedPath;
  if (filePath.endsWith('.css')) {
    resolvedPath = path.resolve(process.cwd(), filePath);
  } else {
    resolvedPath = path.resolve(process.cwd(), filePath + '.css');
    if (!fs.existsSync(resolvedPath)) {
      resolvedPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'css', 'themes', filePath + '.css');
    }
  }

  try {
    if (!fs.existsSync(resolvedPath)) {
      throw new Error(`File not found: ${resolvedPath}`);
    }

    const fileContent = fs.readFileSync(resolvedPath, 'utf8');
    const lines = fileContent.split('\n');
    const tokens = {};
    lines.forEach(line => {
      const [key, value] = line.split(':').map(part => part.trim());
      if (key && value) {
        tokens[key] = value.replace(';', '');
      }
    });

    return tokens;
  } catch (error) {
    console.error(`Error reading theme file: ${resolvedPath}`, error);
    return null;
  }
}

export const processThemes = (themes, themeRoot, addBase) => {
  const themeTokens = {};
  let hasDefaultTheme = false;
  let hasPrefersDarkTheme = false;

  themes.forEach(themeOption => {
    const [themePath, ...themeFlags] = themeOption.split(' ');
    const tokens = getTheme(themePath);
    if (tokens === null || Object.keys(tokens).length === 0) {
      console.warn(`No valid tokens found in theme file: ${themePath}`);
      return;
    }

    const themeName = path.basename(themePath, '.css');
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
  });

  return { themeTokens, hasDefaultTheme, hasPrefersDarkTheme };
}

export function handleThemeErrors(themeTokens, hasDefaultTheme, addBase, themeRoot) {
  if (Object.keys(themeTokens).length === 0) {
    console.error('No valid theme files were found. Please check your file paths and ensure the files exist.');
    return false;
  }

  if (!hasDefaultTheme) {
    const firstThemeName = Object.keys(themeTokens)[0];
    console.warn(`No default theme specified. The ${firstThemeName} will be used as default.`);
    const standardSelector = `[data-theme='${firstThemeName}'],:root:has(input.theme-controller[value=${firstThemeName}]:checked)`;
    addBase({
      [`${themeRoot},${standardSelector}`]: themeTokens[firstThemeName]
    });
  }

  return true;
}
