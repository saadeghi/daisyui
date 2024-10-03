import { compile } from '../node_modules/tailwindcss/dist/lib.js'
import fs from 'fs/promises';
import path from 'path';
import { getFileNames } from './getFileNames';

export async function generateRawStyles({ srcDir, distDir }) {
  const [defaultTheme, theme] = await Promise.all([
    fs.readFile(path.join(import.meta.dir, '../node_modules/tailwindcss/theme.css'), 'utf-8'),
    fs.readFile(path.join(import.meta.dir, '../themes/index.css'), 'utf-8'),
  ]);

  const stylesDir = path.join(import.meta.dir, srcDir);
  const files = await getFileNames(stylesDir, '.css', false);

  let fileCount = 0;
  let totalSize = 0;

  for (const file of files) {
    const styleContent = await fs.readFile(path.join(stylesDir, `${distDir}/${file}.css`), 'utf-8');

    const compiledContent = await (await compile(`
      @layer theme{${defaultTheme}${theme}}
      @layer wrapperStart{${styleContent}}
      @layer wrapperEnd
    `)).build([]);

    const startIndex = compiledContent.indexOf('@layer wrapperStart');
    const endIndex = compiledContent.indexOf('@layer wrapperEnd');

    if (startIndex !== -1 && endIndex !== -1) {
      // Find the opening curly brace after '@layer wrapperStart'
      const openingBraceIndex = compiledContent.indexOf('{', startIndex);

      // Find the last closing curly brace before '@layer wrapperEnd'
      const closingBraceIndex = compiledContent.lastIndexOf('}', endIndex);

      if (openingBraceIndex !== -1 && closingBraceIndex !== -1 && openingBraceIndex < closingBraceIndex) {
        // Extract only the content inside the curly braces
        const stylesContent = compiledContent.slice(openingBraceIndex + 1, closingBraceIndex).trim();
        await fs.writeFile(path.join(import.meta.dir, distDir, `${distDir}/${file}.css`), stylesContent);
        fileCount++;
        totalSize += Buffer.byteLength(stylesContent, 'utf8');
      }
    }
  }
  return { fileCount, totalSize };
};
