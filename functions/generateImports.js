import fs from 'fs/promises';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';

const generateJSContent = async () => {
  let imports = '';
  let exports = '';

  try {
    // Function to process each category (base, components, utilities)
    const processCategory = async (category) => {
      const items = await getDirectoriesWithTargetFile(`./${category}`, 'index.js');
      items.forEach(item => {
        const importName = `${item}`;
        imports += `import ${importName} from './${category}/${item}';\n`;
        exports += `\n  ${importName}: { item: ${importName}, category: '${category}' },`;
      });
    };

    // Process all categories
    await processCategory('base');
    await processCategory('components');
    await processCategory('utilities');


    const content = `${imports}
export default {${exports}
};
`;
    return { content };
  } catch (error) {
    throw new Error(`Failed to generate JS content: ${error.message}`);
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

// Main function to generate JS
export const generateImports = async (filename) => {
  try {
    const { content: jsContent } = await generateJSContent();
    await writeToFile(jsContent, filename);
  } catch (error) {
    throw new Error(`Failed to generate ${filename}: ${error.message}`);
  }
};
