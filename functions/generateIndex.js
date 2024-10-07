import fs from 'fs/promises';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';

// Generate the CSS content
const generateCSSContent = async () => {
  let content = '@import "./themes";\n';

  // Add theme imports
  const themes = await getDirectoriesWithTargetFile('./themes', 'index.css', ['default']);
  themes.forEach(theme => {
    content += `@import "./themes/${theme}";\n`;
  });

  // Add base configs
  const base = await getDirectoriesWithTargetFile('./base', 'config.js', []);
  base.forEach(item => {
    content += `@config "./base/${item}/config.js";\n`;
  });

  // Add component configs
  const components = await getDirectoriesWithTargetFile('./components', 'config.js', []);
  components.forEach(item => {
    content += `@config "./components/${item}/config.js";\n`;
  });

  // Add utilities configs
  const utilities = await getDirectoriesWithTargetFile('./utilities', 'config.js', []);
  utilities.forEach(item => {
    content += `@config "./utilities/${item}/config.js";\n`;
  });

  return { content };
};

// Write the generated content to a file
const writeToFile = async (content, filename) => {
  await fs.writeFile(filename, content, 'utf8');
};

// Main function to generate CSS
export const generateIndex = async (filename) => {
  const { content: cssContent } = await generateCSSContent();
  await writeToFile(cssContent, filename);
};
