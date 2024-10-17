import fs from 'fs';
import path from 'path';

export const loadAllThemes = () => {
  const themesDir = path.join(__dirname, '../theme');
  const themeObjects = {};

  fs.readdirSync(themesDir).forEach(themeName => {
    const themeObjectPath = path.join(themesDir, themeName, 'object.js');
    if (fs.existsSync(themeObjectPath)) {
      try {
        const themeModule = require(themeObjectPath);
        themeObjects[themeName] = themeModule.default;
      } catch (error) {
        console.error(`Error importing theme: ${themeName}`, error);
      }
    }
  });

  return themeObjects;
};
