import { compile } from '../node_modules/tailwindcss/dist/lib.js'
import fs from 'fs/promises';
import path from 'path';

export const generateColorRules = async ({ distDir }) => {
  const [defaultTheme, theme] = await Promise.all([
    fs.readFile(path.join(import.meta.dir, '../node_modules/tailwindcss/theme.css'), 'utf-8'),
    fs.readFile(path.join(import.meta.dir, '../themes/index.css'), 'utf-8'),
  ]);

  const colorNames = [
    'base-100', 'base-200', 'base-300', 'base-content',
    'primary', 'primary-content', 'secondary', 'secondary-content',
    'accent', 'accent-content', 'neutral', 'neutral-content',
    'info', 'info-content', 'success', 'success-content',
    'warning', 'warning-content', 'error', 'error-content'
  ];

  const styles = [
    'bg', 'to', 'via', 'from', 'text', 'ring',
    'stroke', 'border', 'outline', 'ring-offset'
  ];

  const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];

  const states = ['hover', 'focus'];

  const generateBaseVariants = (style, color) => {
    return `.${style}-${color}{@apply ${style}-${color};}`;
  };

  const generateResponsiveVariants = (style, color, breakpoint) => {
    if (breakpoint.match(/^\d/)) {
      return `.\\3${breakpoint[0]}${breakpoint.slice(1)}\\:${style}-${color}{@apply ${style}-${color};}`;
    }
    return `.${breakpoint}\\:${style}-${color}{@apply ${style}-${color};}`;
  };

  const generateStateVariants = (style, color) => {
    return states.map(state =>
      `.${state}\\:${style}-${color}:${state}{@apply ${state}:${style}-${color};}`
    );
  };

  const generatePropertiesContent = () => {
    return colorNames.flatMap(color =>
      styles.map(style => generateBaseVariants(style, color))
    ).join('\n');
  };

  const generateResponsiveContent = (breakpoint) => {
    return colorNames.flatMap(color =>
      styles.map(style => generateResponsiveVariants(style, color, breakpoint))
    ).join('\n');
  };

  const generateStatesContent = () => {
    return colorNames.flatMap(color =>
      styles.flatMap(style => generateStateVariants(style, color))
    ).join('\n');
  };

  const compileAndWriteFile = async (content, fileName) => {
    const compiledContent = await (await compile(`
      @layer base{${defaultTheme}${theme}}
      @layer wrapperStart{
        ${content}
      }
      @layer wrapperEnd
    `)).build([]);

    const startIndex = compiledContent.indexOf('@layer wrapperStart');
    const endIndex = compiledContent.indexOf('@layer wrapperEnd');

    if (startIndex !== -1 && endIndex !== -1) {
      const openingBraceIndex = compiledContent.indexOf('{', startIndex);
      const closingBraceIndex = compiledContent.lastIndexOf('}', endIndex);

      if (openingBraceIndex !== -1 && closingBraceIndex !== -1 && openingBraceIndex < closingBraceIndex) {
        const extractedContent = compiledContent.slice(openingBraceIndex + 1, closingBraceIndex).trim();
        const colorsDir = path.join(import.meta.dir, distDir);
        await fs.mkdir(colorsDir, { recursive: true });
        await fs.writeFile(path.join(colorsDir, fileName), extractedContent);
      }
    }
  };

  await compileAndWriteFile(generatePropertiesContent(), 'properties.css');

  // Generate separate files for each breakpoint
  for (const breakpoint of breakpoints) {
    await compileAndWriteFile(generateResponsiveContent(breakpoint), `responsive-${breakpoint}.css`);
  }

  await compileAndWriteFile(generateStatesContent(), 'states.css');

  return colorNames.length * styles.length * (1 + breakpoints.length + states.length);
};
