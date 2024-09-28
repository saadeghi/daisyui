import fs from 'fs';
import path from 'path';

function getDirectoriesWithTargetFile(directory, targetFile, ignoreDirs) {
  return fs.readdirSync(directory)
    .filter(file => fs.statSync(path.join(directory, file)).isDirectory())
    .filter(dir => !ignoreDirs.includes(dir))
    .filter(dir => fs.existsSync(path.join(directory, dir, targetFile)));
}

// Generate the CSS content
function generateCSSContent() {
  let content = '@import "./themes";\n';

  // Add theme imports
  const themes = getDirectoriesWithTargetFile('./themes', 'index.css', ['default']);
  themes.forEach(theme => {
    content += `@import "./themes/${theme}";\n`;
  });

  // Add component configs
  const components = getDirectoriesWithTargetFile('./components', 'config.js', []);
  components.forEach(component => {
    content += `@config "./components/${component}/config.js";\n`;
  });

  return content;
}

// Write the generated content to a file
function writeToFile(content, filename) {
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`Created ${filename}`);
}

// Main function to generate CSS
export function generateIndex(filename) {
  const cssContent = generateCSSContent();
  writeToFile(cssContent, filename);
}
