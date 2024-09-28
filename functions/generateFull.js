import fs from 'fs/promises';
import { getFileNames } from './getFileNames';
import { getDirectories } from './getDirectories';

export async function generateFull(filename) {

  let content = `@import url(https://cdn.jsdelivr.net/npm/tailwindcss@4.0.0-alpha.25/preflight.min.css) layer(base);\n`;

  const themes = await getDirectories('./themes');
  themes.forEach(theme => {
    content += `@import url(themes/${theme}/index.css) layer(themes);\n`;
  });

  const componentFiles = await getFileNames('./components', ".css", false);
  componentFiles.forEach(filePath => {
    content += `@import url(components/${filePath}.css) layer(components);\n`;
  });

  // Write to file
  await fs.writeFile(`./${filename}`, content, 'utf8');
  console.log(`Created ${filename}`);
}
