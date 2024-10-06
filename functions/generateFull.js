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

  // Load color files with specific ordering
  const colorFiles = await getFileNames('./colors', ".css", false);

  // Ensure that properties.css and states.css come first
  if (colorFiles.includes('properties')) {
    content += `@import url(colors/properties.css) layer(utilities);\n`;
  }
  if (colorFiles.includes('states')) {
    content += `@import url(colors/states.css) layer(utilities);\n`;
  }

  const responsiveFiles = {
    'responsive-sm': '40rem',
    'responsive-md': '48rem',
    'responsive-lg': '64rem',
    'responsive-xl': '80rem',
    'responsive-2xl': '96rem'
  };

  // Import responsive files in the correct order
  Object.entries(responsiveFiles).forEach(([file, minWidth]) => {
    if (colorFiles.includes(file)) {
      content += `@import url(colors/${file}.css) layer(utilities) (min-width: ${minWidth});\n`;
    }
  });

  // Write to file
  await fs.writeFile(`./${filename}`, content, 'utf8');

  // Count the number of imports
  const importCount = content.split('@import').length - 1;

  return importCount;
}
