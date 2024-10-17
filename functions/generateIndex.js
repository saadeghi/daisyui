import fs from 'fs/promises';
import variables from './variables';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';
import { processThemes } from './processTheme';

const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'));

// Generate the JS content
const generateJSContent = async () => {
  let imports = '';
  let addBaseContent = '';
  let addComponentsContent = '';
  let addUtilitiesContent = '';

  try {
    // Process themes
    const themes = await processThemes();

    // Add base imports and content
    const base = await getDirectoriesWithTargetFile('./base', 'index.js');
    base.forEach(item => {
      const importName = `${item}`;
      imports += `import ${importName} from './base/${item}';\n`;
      addBaseContent += `      ${importName}({ addBase });\n`;
    });

    // Add component imports and content
    const components = await getDirectoriesWithTargetFile('./components', 'index.js');
    components.forEach(item => {
      const importName = `${item}`;
      imports += `import ${importName} from './components/${item}';\n`;
      addComponentsContent += `      ${importName}({ addComponents });\n`;
    });

    // Add utilities imports and content
    const utilities = await getDirectoriesWithTargetFile('./utilities', 'index.js');
    utilities.forEach(item => {
      const importName = `${item}`;
      imports += `import ${importName} from './utilities/${item}';\n`;
      addUtilitiesContent += `      ${importName}({ addUtilities });\n`;
    });

    const content = `import { plugin } from './functions/plugin.js';
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

      let themesContent = '';
      options.themes.forEach(themeOption => {
        const [themeName, flag] = themeOption.split(' ');
        if (themes[themeName]) {
        let selector = ':root:has(input.theme-controller[value=' + themeName + ']:checked),[data-theme='+themeName+']';
          let themeCSS = JSON.stringify(themes[themeName]);

          if (flag === '--default') {
          selector = ':root,' + selector;
          }

          themesContent += '      addBase({' + '"' + selector + '": ' + themeCSS + '});';

          if (flag === '--prefersDark') {
            themesContent += '      addBase({"@media (prefers-color-scheme: dark)": {":root": ' + themeCSS + '}});';
          }
        }
      });

${addBaseContent}
${addComponentsContent}
${addUtilitiesContent}
    }
  },
  (options) => {
    return {
      theme: {
        extend: ${JSON.stringify(variables, null, 2)}
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
