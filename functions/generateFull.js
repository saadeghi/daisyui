import fs from 'fs/promises';
import path from 'path';
import { getFileNames } from './getFileNames';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';

const readFileContent = async (filePath) => {
  return await fs.readFile(filePath, 'utf8');
};

const readThemeCSS = async () => {
  const themeDirs = ['light', 'dark'];
  const themeContents = await Promise.all(
    themeDirs.map(theme => readFileContent(path.join('./theme', theme, 'index.css')))
  );
  return themeContents.join('\n');
};

const readCSSDirectories = async () => {
  const directories = ['./base', './components', './utilities', './colors'];

  return Promise.all(directories.map(async (dir) => {
    const files = await getFileNames(dir, '.css', false);
    const contents = await Promise.all(
      files.map(file => readFileContent(`${dir}/${file}.css`))
    );
    return contents.join('\n');
  }));
};

export const generateFull = async (file) => {
  const contentArray = [
    // Read preflight CSS
    await readFileContent('node_modules/tailwindcss/preflight.css'),

    // Read theme CSS files
    await readThemeCSS(),

    // Read other CSS directories
    ...(await readCSSDirectories())
  ];

  // Combine all content and write to file
  await fs.writeFile(file, (await Promise.all(contentArray)).join('\n'));
};
