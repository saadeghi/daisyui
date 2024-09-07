import { promises as fs } from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';
import postcssJs from 'postcss-js';

// Helper function to traverse and modify the object
function replaceApplyTrueWithEmptyObject(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      // Recursively traverse the object
      replaceApplyTrueWithEmptyObject(obj[key]);
    }

    // Check for @apply rules and replace true with {}
    if (key.startsWith('@apply') && obj[key] === true) {
      obj[key] = {};
    }
  }
}

// Function to recursively get all .css files from a directory
async function getCssFiles(dir) {
  let cssFiles = [];
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(dir, file.name);

    if (file.isDirectory()) {
      const subDirFiles = await getCssFiles(filePath);
      cssFiles = cssFiles.concat(subDirFiles);
    } else if (file.isFile() && file.name.endsWith('.css')) {
      cssFiles.push(filePath);
    }
  }

  return cssFiles;
}

// Function to process and convert CSS files to JS
async function processCssFiles(srcDir = 'css', distDir = 'js') {
  // Get all CSS files recursively from the source directory
  const cssFiles = await getCssFiles(srcDir);

  for (const cssFile of cssFiles) {
    const cssContent = await fs.readFile(cssFile, 'utf-8');

    // Parse CSS and convert it to JS object
    const root = postcss.parse(cssContent);
    let jsContent = postcssJs.objectify(root);

    // Modify the JS object to replace "@apply ...: true" with "@apply ...: {}"
    replaceApplyTrueWithEmptyObject(jsContent);

    // Convert modified JS object to a string
    const jsContentString = JSON.stringify(jsContent, null, 2);

    // Generate corresponding JS file path in /dist directory
    const relativePath = path.relative(srcDir, cssFile);
    const jsFilePath = path.join(distDir, relativePath).replace(/\.css$/, '.js');

    // Ensure the output directory exists
    await fs.mkdir(path.dirname(jsFilePath), { recursive: true });

    // Write JS content to the output file
    await fs.writeFile(jsFilePath, `export default ${jsContentString};`);

    console.log(`Converted: ${cssFile} -> ${jsFilePath}`);
  }
}

// Run the function
processCssFiles().catch(console.error);
