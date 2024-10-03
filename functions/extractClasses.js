import fs from 'fs';
import path from 'path';

// Function to extract class names from CSS content
const extractClassNames = (cssContent) => {
  const classRegex = /\.([a-zA-Z0-9_-]+)(?:\s*\{|\s*,|\s*:)/g;
  const matches = cssContent.match(classRegex);
  const classNames = matches ? matches.map(match => match.slice(1).trim().replace(/[{,:]/g, '').trim()) : [];
  return [...new Set(classNames)]; // Remove duplicates
}

// Function to process a single CSS file
const processCssFile = (srcDir, filePath) => {
  const cssContent = fs.readFileSync(filePath, 'utf8');
  const classNames = extractClassNames(cssContent);

  const fileName = path.basename(filePath, '.css');
  const outputDir = path.join(__dirname, '..', srcDir, fileName);
  const outputFilePath = path.join(outputDir, 'class.json');

  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Create JSON string
  const jsonString = JSON.stringify(classNames, null, 2);

  // Write to a new JSON file
  fs.writeFileSync(outputFilePath, jsonString);

  return classNames.length;
}

// Function to process all CSS files
export const extractClasses = ({ srcDir }) => {
  // Read all CSS files from the styles directory
  const stylesDir = path.join(__dirname, '..', 'css', srcDir);
  const cssFiles = fs.readdirSync(stylesDir).filter(file => file.endsWith('.css'));

  // Process each CSS file and sum up the total number of class names
  const totalClassNames = cssFiles.reduce((total, file) => {
    const filePath = path.join(stylesDir, file);
    return total + processCssFile(srcDir, filePath);
  }, 0);

  return totalClassNames;
}
