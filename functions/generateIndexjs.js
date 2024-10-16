import fs from 'fs/promises';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';
const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'));

const toSnakeCase = (str) => {
  return str.replace(/-/g, '_');
};

// Generate the JS content
const generateJSContent = async () => {
  let imports = '';
  let addBaseContent = '';
  let addComponentsContent = '';
  let addUtilitiesContent = '';

  try {
    // Add base imports and content
    const base = await getDirectoriesWithTargetFile('./base', 'index.js', []);
    base.forEach(item => {
      const importName = `${toSnakeCase(item)}`;
      imports += `import ${importName} from './base/${item}';\n`;
      addBaseContent += `    ...${importName},\n`;
    });

    // Add theme imports and content
    const themes = await getDirectoriesWithTargetFile('./themes', 'index.css', []);
    themes.forEach(item => {
      if (item !== 'default') {
        const importName = `${toSnakeCase(item)}`;
        imports += `import ${importName} from './themes/${item}/index.css';\n`;
        addBaseContent += `    ...${importName},\n`;
      }
    });

    // Add component imports and content
    const components = await getDirectoriesWithTargetFile('./components', 'index.js', []);
    components.forEach(item => {
      const importName = `${toSnakeCase(item)}`;
      imports += `import ${importName} from './components/${item}';\n`;
      addComponentsContent += `    ...${importName},\n`;
    });

    // Add utilities imports and content
    const utilities = await getDirectoriesWithTargetFile('./utilities', 'index.js', []);
    utilities.forEach(item => {
      const importName = `${toSnakeCase(item)}`;
      imports += `import ${importName} from './utilities/${item}';\n`;
      addUtilitiesContent += `    ...${importName},\n`;
    });

    const content = `${imports}
console.log('/*! 🌼 daisyUI ${packageJson.version} */')
export default ({ addBase, addComponents, addUtilities }) => {
  addBase({
${addBaseContent.trimEnd()}
  })
  addComponents({
${addComponentsContent.trimEnd()}
  })
  addUtilities({
${addUtilitiesContent.trimEnd()}
  })
}
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
export const generateIndexJs = async (filename) => {
  try {
    const { content: jsContent } = await generateJSContent();
    await writeToFile(jsContent, filename);
  } catch (error) {
    throw new Error(`Failed to generate index.js: ${error.message}`);
  }
};
