import fs from 'fs/promises';
import { getFileNames } from './getFileNames';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';

export const generateFull = async (filename) => {

  let content = `@import url(https://cdn.jsdelivr.net/npm/tailwindcss@4.0.0-alpha.25/preflight.min.css) layer(base);\n`;

  const themes = await getDirectoriesWithTargetFile('./themes', 'index.css', []);
  themes.forEach(theme => {
    content += `@import url(themes/${theme}/index.css) layer(themes);\n`;
  });


  const baseFiles = await getFileNames('./base', ".css", false);
  baseFiles.forEach(filePath => {
    content += `@import url(base/${filePath}.css) layer(base);\n`;
  });

  const componentFiles = await getFileNames('./components', ".css", false);
  componentFiles.forEach(filePath => {
    content += `@import url(components/${filePath}.css) layer(components);\n`;
  });

  const utilityFiles = await getFileNames('./utilities', ".css", false);
  utilityFiles.forEach(filePath => {
    content += `@import url(utilities/${filePath}.css) layer(utilities);\n`;
  });

  content += `@import url(colors/properties.css) layer(utilities);\n`;
  content += `@import url(colors/states.css) layer(utilities);\n`;
  content += `@import url(colors/responsive-sm.css) layer(utilities) screen and (min-width: 40rem);\n`;
  content += `@import url(colors/responsive-md.css) layer(utilities) screen and (min-width: 48rem);\n`;
  content += `@import url(colors/responsive-lg.css) layer(utilities) screen and (min-width: 64rem);\n`;
  content += `@import url(colors/responsive-xl.css) layer(utilities) screen and (min-width: 80rem);\n`;
  content += `@import url(colors/responsive-2xl.css) layer(utilities) screen and (min-width: 96rem);\n`;


  // Write to file
  await fs.writeFile(`./${filename}`, content, 'utf8');

  // Count the number of imports
  const importCount = content.split('@import').length - 1;

  return importCount;
}
