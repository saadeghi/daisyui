import { compile } from '../node_modules/tailwindcss/dist/lib.js'
import fs from 'fs/promises';
import path from 'path';
import { getFileNames } from './getFileNames';

export async function generateRawStyles({ srcDir, distDir }) {
  try {
    const [defaultTheme, theme] = await Promise.all([
      fs.readFile(path.join(import.meta.dir, '../node_modules/tailwindcss/theme.css'), 'utf-8'),
      fs.readFile(path.join(import.meta.dir, '../themes/index.css'), 'utf-8'),
    ]);

    const stylesDir = path.join(import.meta.dir, srcDir);
    const files = await getFileNames(stylesDir, '.css', false);

    for (const file of files) {
      try {
        const styleContent = await fs.readFile(path.join(stylesDir, `${distDir}/${file}.css`), 'utf-8');

        const compiledContent = await (await compile(`
          @layer theme{${defaultTheme}${theme}}
          @layer wrapperStart{${styleContent}}
          @layer wrapperEnd
        `)).build([]);

        const startIndex = compiledContent.indexOf('@layer wrapperStart');
        const endIndex = compiledContent.indexOf('@layer wrapperEnd');

        if (startIndex === -1 || endIndex === -1) {
          throw new Error(`Failed to find wrapper layers in compiled content for file: ${file}`);
        }

        // Find the opening curly brace after '@layer wrapperStart'
        const openingBraceIndex = compiledContent.indexOf('{', startIndex);

        // Find the last closing curly brace before '@layer wrapperEnd'
        const closingBraceIndex = compiledContent.lastIndexOf('}', endIndex);

        if (openingBraceIndex === -1 || closingBraceIndex === -1 || openingBraceIndex >= closingBraceIndex) {
          throw new Error(`Invalid wrapper structure in compiled content for file: ${file}`);
        }

        // Extract only the content inside the curly braces
        const stylesContent = compiledContent.slice(openingBraceIndex + 1, closingBraceIndex).trim();
        await fs.writeFile(path.join(import.meta.dir, distDir, `${distDir}/${file}.css`), stylesContent);
      } catch (fileError) {
        console.error(`Error processing file ${file}:`, fileError);
      }
    }
  } catch (error) {
    console.error('Error in generateRawStyles:', error);
    throw error;
  }
};
