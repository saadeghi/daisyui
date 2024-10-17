import fs from 'fs/promises';
import path from 'path';
import { getFileNames } from './getFileNames';

export const wrapContent = (themeName, content) => {
  return `[data-theme="${themeName}"],
:root:has(input.theme-controller[value=${themeName}]:checked) {
${content}}
`;
};

export const generateThemes = async ({ srcDir, distDir }) => {
  const themeNames = await getFileNames(srcDir, '.css');

  for (const themeName of themeNames) {
    const srcPath = path.join(srcDir, `${themeName}.css`);
    const distPath = path.join(distDir, themeName, 'index.css');

    const content = await fs.readFile(srcPath, 'utf-8');
    const wrappedContent = wrapContent(themeName, content);

    await fs.mkdir(path.dirname(distPath), { recursive: true });
    await fs.writeFile(distPath, wrappedContent);
  }
};
