import fs from 'fs/promises';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';
const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'));

const generateAddContentLogic = (itemMapEntries) => `
  const itemMap = { ${itemMapEntries} };

  const shouldIncludeItem = (name) => {
    if (include && exclude) {
      return include.includes(name) && !exclude.includes(name);
    }
    if (include) {
      return include.includes(name);
    }
    if (exclude) {
      return !exclude.includes(name);
    }
    return true;
  };

  Object.entries(itemMap).forEach(([name, { item, category }]) => {
    if (shouldIncludeItem(name)) {
      switch (category) {
        case 'base':
          item({ addBase });
          break;
        case 'utilities':
          item({ addUtilities });
          break;
        case 'components':
        default:
          item({ addComponents });
          break;
      }
    }
  });
`;

// Generate the JS content
const generateJSContent = async () => {
  let imports = '';
  let itemMapEntries = '';

  try {
    // Function to process each category (base, components, utilities)
    const processCategory = async (category) => {
      const items = await getDirectoriesWithTargetFile(`./${category}`, 'index.js');
      items.forEach(item => {
        const importName = `${item}`;
        imports += `import ${importName} from './${category}/${item}';\n`;
        itemMapEntries += `${importName}: { item: ${importName}, category: '${category}' },\n`;
      });
    };

    // Process all categories
    await processCategory('base');
    await processCategory('components');
    await processCategory('utilities');

    const addContentLogic = generateAddContentLogic(itemMapEntries);

    const content = `import { plugin } from './functions/plugin.js';
import { pluginOptionsHandler } from './functions/pluginOptionsHandler.js';
import variables from './functions/variables.js';
import allThemes from './theme/object.js';

${imports}

export default plugin.withOptions(
  (options) => {
    return ({ addBase, addComponents, addUtilities }) => {
      const { include, exclude } = pluginOptionsHandler(options, addBase, allThemes, "${packageJson.version}");
${addContentLogic}
    }
  },
  (options) => {
    return {
      theme: {
        extend: variables
      }
    }
  }
)
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
export const generateIndex = async (filename) => {
  try {
    const { content: jsContent } = await generateJSContent();
    await writeToFile(jsContent, filename);
  } catch (error) {
    throw new Error(`Failed to generate index.js: ${error.message}`);
  }
};
