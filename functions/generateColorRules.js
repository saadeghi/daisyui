import { compile } from '../node_modules/tailwindcss/dist/lib.js'
import fs from 'fs/promises';
import path from 'path';

export const generateColorRules = async (file) => {
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

  const generateVariants = (style, color) => {
    const baseClass = `.${style}-${color}{@apply ${style}-${color};}`;
    const responsiveClasses = breakpoints.map(bp =>
      `.${bp}\\:${style}-${color}{@apply ${bp}:${style}-${color};}`
    );
    const stateClasses = states.map(state =>
      `.${state}\\:${style}-${color}:${state}{@apply ${state}:${style}-${color};}`
    );
    return [baseClass, ...responsiveClasses, ...stateClasses];
  };

  const generatedStyles = colorNames.flatMap(color =>
    styles.flatMap(style => generateVariants(style, color))
  );

  const classCount = generatedStyles.length;

  const generatedStylesString = generatedStyles.join('\n');

  const compiledContent = await (await compile(`
    @layer base{${defaultTheme}${theme}}
    @layer wrapperStart{
      ${generatedStylesString}
    }
    @layer wrapperEnd
  `)).build([]);

  const startIndex = compiledContent.indexOf('@layer wrapperStart');
  const endIndex = compiledContent.indexOf('@layer wrapperEnd');

  if (startIndex !== -1 && endIndex !== -1) {
    // Find the opening curly brace after '@layer components'
    const openingBraceIndex = compiledContent.indexOf('{', startIndex);

    // Find the last closing curly brace before '@layer endcomponents'
    const closingBraceIndex = compiledContent.lastIndexOf('}', endIndex);

    if (openingBraceIndex !== -1 && closingBraceIndex !== -1 && openingBraceIndex < closingBraceIndex) {
      // Extract only the content inside the curly braces
      const colorsContent = compiledContent.slice(openingBraceIndex + 1, closingBraceIndex).trim();
      await fs.writeFile(path.join(import.meta.dir, `../${file}`), colorsContent);
    }
  }

  return classCount;
};
