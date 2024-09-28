import fs from 'fs/promises';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';

// Generate the CSS content
const generateCSSContent = async () => {
  let content = '@import "./themes";\n';
  let themeCount = 1;
  let componentCount = 0;

  // Add theme imports
  const themes = await getDirectoriesWithTargetFile('./themes', 'index.css', ['default']);
  themes.forEach(theme => {
    content += `@import "./themes/${theme}";\n`;
    themeCount++;
  });

  // Add component configs
  const components = await getDirectoriesWithTargetFile('./components', 'config.js', []);
  components.forEach(component => {
    content += `@config "./components/${component}/config.js";\n`;
    componentCount++;
  });

  return { content, themeCount, componentCount };
};

// Write the generated content to a file
const writeToFile = async (content, filename) => {
  await fs.writeFile(filename, content, 'utf8');
};

// Main function to generate CSS
export const generateIndex = async (filename) => {
  const { content: cssContent, themeCount, componentCount } = await generateCSSContent();
  await writeToFile(cssContent, filename);
  return themeCount + componentCount;
};
