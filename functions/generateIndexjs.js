import fs from 'fs/promises';
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

    const content = `${imports}
console.log('/*! 🌼 daisyUI ${packageJson.version} */')
const plugin = {
  withOptions: (pluginFunction, configFunction = () => ({})) => {
    const optionsFunction = (options) => ({
      handler: pluginFunction(options),
      config: configFunction(options),
    });
    optionsFunction.__isOptionsFunction = true;
    return optionsFunction;
  }
};
export default plugin.withOptions(
  (options = {}) => {
    return ({ addBase, addComponents, addUtilities }) => {
${addBaseContent}
${addComponentsContent}
${addUtilitiesContent}
    }
  },
  (options) => {
    return {
      theme: {
        extend: {
          colors: {
            'base-100': 'oklch(100% 0 0)',
            'base-200': 'oklch(96.1151% 0 0)',
            'base-300': 'oklch(92.4169% 0.00108 197.137559)',
            'base-content': 'oklch(27.8078% 0.029596 256.84795)',
            'primary': 'oklch(49.12% 0.3096 275.75)',
            'primary-content': 'oklch(89.824% 0.06192 275.75)',
            'secondary': 'oklch(69.71% 0.329 342.55)',
            'secondary-content': 'oklch(98.71% 0.0106 342.55)',
            'accent': 'oklch(76.76% 0.184 183.61)',
            'accent-content': 'oklch(15.352% 0.0368 183.61)',
            'neutral': 'oklch(20% 0.02476 255.701624)',
            'neutral-content': 'oklch(89.4994% 0.011585 252.096176)',
            'info': 'oklch(72.06% 0.191 231.6)',
            'info-content': 'oklch(0% 0 0)',
            'success': 'oklch(64.8% 0.15 160)',
            'success-content': 'oklch(0% 0 0)',
            'warning': 'oklch(84.71% 0.199 83.87)',
            'warning-content': 'oklch(0% 0 0)',
            'error': 'oklch(71.76% 0.221 22.18)',
            'error-content': 'oklch(0% 0 0)',
          },
          borderRadius: {
            'badge': '1.9rem',
            'btn': '0.5rem',
            'box': '1rem',
          },
          borderWidth: {
            'button': '1px',
            'tab': '1px',
          }
        }
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
