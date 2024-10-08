import fs from 'fs';
import path from 'path';

// Function to extract class names from CSS content
const extractClassNames = async (cssContent) => {
  const classRegex = /\.([a-zA-Z0-9_-]+)(?:\s*\{|\s*,|\s*:)/g;
  const matches = cssContent.match(classRegex);
  const classNames = matches ? matches.map(match => match.slice(1).trim().replace(/[{,:]/g, '').trim()) : [];
  return [...new Set(classNames)]; // Remove duplicates
}

// Function to process a single CSS file
const processCssFile = async (srcDir, filePath) => {
  try {
    const cssContent = await fs.promises.readFile(filePath, 'utf8');
    const classNames = extractClassNames(cssContent);

    const fileName = path.basename(filePath, '.css');
    const outputDir = path.join(__dirname, '..', srcDir, fileName);
    const outputFilePath = path.join(outputDir, 'class.json');

    // Create directory if it doesn't exist
    await fs.promises.mkdir(outputDir, { recursive: true });

    // Create JSON string
    const jsonString = JSON.stringify(classNames, null, 2);

    // Write to a new JSON file
    await fs.promises.writeFile(outputFilePath, jsonString);
  } catch (error) {
    console.error(`Error processing file ${filePath}: ${error.message}`);
    throw error;
  }
}

// Function to process all CSS files
export const extractClasses = async ({ srcDir }) => {
  try {
    // Read all CSS files from the styles directory
    const stylesDir = path.join(__dirname, '..', 'css', srcDir);
    const cssFiles = await fs.promises.readdir(stylesDir);
    const filteredCssFiles = cssFiles.filter(file => file.endsWith('.css'));

    // Process each CSS file
    await Promise.all(filteredCssFiles.map(async (file) => {
      const filePath = path.join(stylesDir, file);
      await processCssFile(srcDir, filePath);
    }));
  } catch (error) {
    console.error(`Error extracting classes: ${error.message}`);
    throw error;
  }
}
