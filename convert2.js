import { promises as fs } from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import { replaceApplyTrueWithEmptyObject } from './functions/replaceApplyTrueWithEmptyObject.js';
import { getCssFiles } from './functions/getCssFiles.js';


// Function to process and convert CSS files to JS
async function processCssFiles(srcDir = 'css/components', distDir = 'components') {
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

    // Generate corresponding component directory path
    const componentName = path.basename(cssFile, '.css');
    const componentDir = path.join(distDir, componentName);

    // Ensure the component directory exists
    await fs.mkdir(componentDir, { recursive: true });

    // Write JS content to index.js
    const indexJsPath = path.join(componentDir, 'index.js');
    await fs.writeFile(indexJsPath, `export default ${jsContentString};`);

    // Create index.css
    const indexCssPath = path.join(componentDir, 'index.css');
    await fs.writeFile(indexCssPath,
      `@config "./config.js";
`
    );

    // Create config.js
    const configJsPath = path.join(componentDir, 'config.js');
    const configJsContent =
      `import { plugin } from '../../plugin.js';
import index from './index.js';

export default {
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ...index
      });
    })
  ],
};
`;
    await fs.writeFile(configJsPath, configJsContent);

    console.log(`Processed: ${cssFile} -> ${componentDir}`);
  }
}

// Run the function
processCssFiles().catch(console.error);
