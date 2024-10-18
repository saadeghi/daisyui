import fs from 'fs/promises';
import path from 'path';

export const generateThemesObject = async (outputPath) => {
  const themesDir = path.join(__dirname, '../theme');
  const themeObjects = {};

  const themeNames = await fs.readdir(themesDir);

  for (const themeName of themeNames) {
    const themeObjectPath = path.join(themesDir, themeName, 'object.js');
    if (await fs.exists(themeObjectPath)) {
      try {
        const themeModule = await import(themeObjectPath);
        themeObjects[themeName] = themeModule.default;
      } catch (error) {
        console.error(`Error importing theme: ${themeName}`, error);
      }
    }
  }

  // Convert themeObjects to a string in the desired format
  const themeObjectsString = `export default ${JSON.stringify(themeObjects, null, 2)}`;

  // Write the string to the specified output file
  await fs.writeFile(outputPath, themeObjectsString, 'utf8');

};
