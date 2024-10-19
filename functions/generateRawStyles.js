import { compile } from '../node_modules/tailwindcss/dist/lib.js'
import fs from 'fs/promises';
import path from 'path';
import { getFileNames } from './getFileNames';
import breakpoints from './breakpoints';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';

export async function generateResponsiveVariants(css) {
  let responsiveStyles = '';

  for (const [breakpoint, minWidth] of Object.entries(breakpoints)) {
    const prefixedCss = await postcss([
      (root) => {
        root.walkRules(rule => {
          if (rule.parent.type === 'root') {
            rule.selector = selectorParser(selectors => {
              selectors.each(selector => {
                if (selector.first.type === 'class') {
                  selector.first.value = `${breakpoint}:${selector.first.value}`;
                }
              });
            }).processSync(rule.selector);
          }
        });
      }
    ]).process(css, { from: undefined });

    // Escape the colon in the class name for CSS
    const escapedCss = prefixedCss.css.replace(
      new RegExp(`\\.${breakpoint}:`, 'g'),
      `.${breakpoint}\\:`
    );

    responsiveStyles += `\n@media (min-width: ${minWidth}) {\n${escapedCss}\n}\n\n`;
  }

  return css + responsiveStyles;
}

async function loadThemes() {
  const [defaultTheme, theme] = await Promise.all([
    fs.readFile(path.join(import.meta.dir, '../node_modules/tailwindcss/theme.css'), 'utf-8'),
    fs.readFile(path.join(import.meta.dir, './variables.css'), 'utf-8'),
  ]);
  return { defaultTheme, theme };
}

async function compileAndExtractStyles(styleContent, defaultTheme, theme) {
  const compiledContent = await (await compile(`
    @layer theme{${defaultTheme}${theme}}
    @layer wrapperStart{${styleContent}}
    @layer wrapperEnd
  `)).build([]);

  const startIndex = compiledContent.indexOf('@layer wrapperStart');
  const endIndex = compiledContent.indexOf('@layer wrapperEnd');

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Failed to find wrapper layers in compiled content');
  }

  const openingBraceIndex = compiledContent.indexOf('{', startIndex);
  const closingBraceIndex = compiledContent.lastIndexOf('}', endIndex);

  if (openingBraceIndex === -1 || closingBraceIndex === -1 || openingBraceIndex >= closingBraceIndex) {
    throw new Error('Invalid wrapper structure in compiled content');
  }

  return compiledContent.slice(openingBraceIndex + 1, closingBraceIndex).trim();
}

async function processFile(file, stylesDir, distDir, defaultTheme, theme, responsive) {
  const styleContent = await fs.readFile(path.join(stylesDir, `${distDir}/${file}.css`), 'utf-8');
  let stylesContent = await compileAndExtractStyles(styleContent, defaultTheme, theme);

  if (responsive) {
    stylesContent = await generateResponsiveVariants(stylesContent);
  }

  await fs.writeFile(path.join(import.meta.dir, distDir, `${distDir}/${file}.css`), stylesContent);
}

export async function generateRawStyles({ srcDir, distDir, responsive = false }) {
  try {
    const { defaultTheme, theme } = await loadThemes();

    const stylesDir = path.join(import.meta.dir, srcDir);
    const files = await getFileNames(stylesDir, '.css', false);

    // Process all files concurrently
    const processPromises = files.map(file =>
      processFile(file, stylesDir, distDir, defaultTheme, theme, responsive)
        .catch(fileError => {
          console.error(`Error processing file ${file}: ${fileError.message}`);
          // You might want to throw or handle this error differently
        })
    );

    // Wait for all files to be processed
    await Promise.all(processPromises);

  } catch (error) {
    throw error;
  }
}
