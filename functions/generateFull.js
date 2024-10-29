import fs from 'fs/promises';
import path from 'path';
import { getFileNames } from './getFileNames';
import { cleanCss } from './cleanCss';

const readFileContent = async (filePath) => {
  return await fs.readFile(filePath, 'utf8');
};

const readThemeCSS = async () => {
  const themeDirs = ['light', 'dark'];
  const themeContents = await Promise.all(
    themeDirs.map(theme => readFileContent(path.join('./theme', `${theme}.css`)))
  );
  return themeContents.join('\n');
};

const readAllCSSDirectories = async () => {
  const directories = ['./base', './components', './utilities', './colors'];

  const allFiles = await Promise.all(directories.map(dir =>
    getFileNames(dir, '.css', false)
  ));

  const allContents = await Promise.all(
    allFiles.flatMap((files, index) =>
      files.map(file => readFileContent(`${directories[index]}/${file}.css`))
    )
  );

  return allContents;
};


export const generateFull = async (file) => {
  const [
    // preflightCSS,
    themeCSS,
    otherCSS
  ] = await Promise.all([
    // Read preflight CSS
    // readFileContent('node_modules/tailwindcss/preflight.css'),

    // Read theme CSS files
    readThemeCSS(),

    // Read other CSS directories
    readAllCSSDirectories()
  ]);

  // Combine all content and write to file
  let allContent = [
    // preflightCSS,
    themeCSS,
    ...otherCSS
  ].join('\n');

  allContent = cleanCss(allContent);

  await fs.writeFile(file, allContent);
};
