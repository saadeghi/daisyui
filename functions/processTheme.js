import path from 'path';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile.js';

export const processThemes = async () => {
  const themeDirectories = await getDirectoriesWithTargetFile('./theme', 'object.js');
  const themes = {};

  for (const themeDir of themeDirectories) {
    const themePath = path.join('../theme', themeDir, 'object.js');
    try {
      const themeModule = await import(themePath);
      const themeObject = themeModule.default;

      themes[`${themeDir}`] = themeObject;
    } catch (error) {
      console.error(`Error processing theme ${themeDir}:`, error);
    }
  }

  return themes;
};
