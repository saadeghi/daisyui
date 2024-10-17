import fs from 'fs/promises';
import defaultTheme from './defaultTheme';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';
const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'));

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
      const importName = `${item}`;
      imports += `import ${importName} from './base/${item}';\n`;
      addBaseContent += `      ${importName}({ addBase });\n`;
    });

    // Add component imports and content
    const components = await getDirectoriesWithTargetFile('./components', 'index.js', []);
    components.forEach(item => {
      const importName = `${item}`;
      imports += `import ${importName} from './components/${item}';\n`;
      addComponentsContent += `      ${importName}({ addComponents });\n`;
    });

    // Add utilities imports and content
    const utilities = await getDirectoriesWithTargetFile('./utilities', 'index.js', []);
    utilities.forEach(item => {
      const importName = `${item}`;
      imports += `import ${importName} from './utilities/${item}';\n`;
      addUtilitiesContent += `      ${importName}({ addUtilities });\n`;
    });

    const content = `import { plugin } from './functions/plugin.js';
import { processThemes, handleThemeErrors } from './functions/processThemes.js';
${imports}

export default plugin.withOptions(
  (options = {
    logs: true,
    themeRoot: ":root",
    themes: ['light --default', 'dark --prefersDark'],
  }) => {
    return ({ addBase, addComponents, addUtilities }) => {
      const { logs, themes, themeRoot = ":root" } = options;
      if (options.logs !== false) {
        console.log('/*! 🌼 daisyUI ${packageJson.version} */')
      }
      const { themeTokens, hasDefaultTheme, hasPrefersDarkTheme } = processThemes(themes, themeRoot, addBase);

      if (!handleThemeErrors(themeTokens, hasDefaultTheme, addBase, themeRoot)) {
        return;
      }
${addBaseContent}
${addComponentsContent}
${addUtilitiesContent}
    }
  },
  (options) => {
    return {
      theme: {
        extend: ${JSON.stringify(defaultTheme, null, 2)}
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
export const generateIndexJs = async (filename) => {
  try {
    const { content: jsContent } = await generateJSContent();
    await writeToFile(jsContent, filename);
  } catch (error) {
    throw new Error(`Failed to generate index.js: ${error.message}`);
  }
};
