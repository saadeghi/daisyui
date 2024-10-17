import fs from 'fs/promises';
import variables from './variables';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';
import { processTheme } from './processTheme';
import { loadAllThemes } from './loadThemes';
const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'));

// Generate the JS content
const generateJSContent = async () => {
  let imports = '';
  let addBaseContent = '';
  let addComponentsContent = '';
  let addUtilitiesContent = '';

  try {
    // Process themes
    const themes = await processTheme();

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

    const allThemes = loadAllThemes();
    const content = `import { plugin } from './functions/plugin.js';
${imports}
const allThemes = ${JSON.stringify(allThemes)};
export default plugin.withOptions(
  (options = {
    logs: true,
    themeRoot: ":root",
    themes: ['light --default', 'dark --prefersDark'],
  }) => {
    return ({ addBase, addComponents, addUtilities }) => {
      const {
        logs=true,
        themes=['light --default', 'dark --prefersDark'],
        themeRoot = ":root"
      } = options;
      if (options.logs !== false) {
        console.log('/*! 🌼 daisyUI ${packageJson.version} */')
      }

      let themesContent = '';
      const applyTheme = (themeName, flag) => {
        if (allThemes[themeName]) {
          let selector = themeRoot+':has(input.theme-controller[value=' + themeName + ']:checked),[data-theme='+themeName+']';
          let themeCSS = JSON.stringify(allThemes[themeName]);
          if (flag === '--default') {
            selector = themeRoot+',' + selector;
          }
          addBase({ [selector]: allThemes[themeName] });

          if (flag === '--prefersDark') {
            addBase({"@media (prefers-color-scheme: dark)": {themeRoot: allThemes[themeName]}});
          }
        }
      };

      if (Array.isArray(themes)) {
        themes.forEach(themeOption => {
          const [themeName, flag] = themeOption.split(' ');
          applyTheme(themeName, flag);
        });
      } else {
        const [themeName, flag] = themes.split(' ');
        applyTheme(themeName, flag);
      }

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
