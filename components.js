import { compile } from './node_modules/tailwindcss/dist/lib.js'
import fs from 'fs/promises';
import path from 'path';

const main = async () => {
  const [defaultTheme, theme] = await Promise.all([
    fs.readFile(path.join(import.meta.dir, '/node_modules/tailwindcss/theme.css'), 'utf-8'),
    fs.readFile(path.join(import.meta.dir, './themes/index.css'), 'utf-8'),
  ]);

  const componentsDir = path.join(import.meta.dir, './css/components');
  const files = await fs.readdir(componentsDir);

  for (const file of files) {
    const component = await fs.readFile(path.join(componentsDir, file), 'utf-8');

    const compiledContent = await (await compile(`
      @layer theme{${defaultTheme}${theme}}
      @layer components{${component}}
      @layer endcomponents
    `)).build([]);

    const startIndex = compiledContent.indexOf('@layer components');
    const endIndex = compiledContent.indexOf('@layer endcomponents');

    if (startIndex !== -1 && endIndex !== -1) {
      // Find the opening curly brace after '@layer components'
      const openingBraceIndex = compiledContent.indexOf('{', startIndex);

      // Find the last closing curly brace before '@layer endcomponents'
      const closingBraceIndex = compiledContent.lastIndexOf('}', endIndex);

      if (openingBraceIndex !== -1 && closingBraceIndex !== -1 && openingBraceIndex < closingBraceIndex) {
        // Extract only the content inside the curly braces
        const componentsContent = compiledContent.slice(openingBraceIndex + 1, closingBraceIndex).trim();
        await fs.writeFile(path.join(import.meta.dir, './components', file), componentsContent);
      } else {
        console.warn(`Could not find proper opening and closing braces for components in ${file}.`);
      }
    } else {
      console.warn(`Could not find @layer components or @layer endcomponents in the compiled content for ${file}.`);
    }

  }
};

main();
