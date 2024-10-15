import fs from 'fs/promises';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';

// Generate the CSS content
const generateCSSContent = async () => {
  let content = '@import "./themes";\n';

  try {
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
  } catch (error) {
    throw new Error(`Failed to generate CSS content: ${error.message}`);
  }
};

// Write the generated content to a file
const writeToFile = async (content, filename) => {
  try {
    await fs.writeFile(filename, content, 'utf8');
  } catch (error) {
    throw new Error(`Failed to write file ${filename}: ${error.message}`);
  }
};

// Main function to generate CSS
export const generateIndexCss = async (filename) => {
  try {
    const { content: cssContent } = await generateCSSContent();
    await writeToFile(cssContent, filename);
  } catch (error) {
    throw new Error(`Failed to generate index: ${error.message}`);
  }
};
