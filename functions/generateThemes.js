import fs from 'fs/promises';
import path from 'path';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';

const readFileContent = async (filePath) => {
  return await fs.readFile(filePath, 'utf8');
};

const readAllThemeCSS = async () => {
  // Get all directories in the ./theme folder that contain an index.css file
  const themeDirs = await getDirectoriesWithTargetFile('./theme', 'index.css');

  // Read the content of each theme's index.css file
  const themeContents = await Promise.all(
    themeDirs.map(themeDir => readFileContent(path.join('./theme', themeDir, 'index.css')))
  );

  return themeContents.join('\n');
};

export const generateThemes = async (outputFile) => {
  try {
    // Read all theme CSS files
    const themeContent = await readAllThemeCSS();

    // Write the combined theme content to the output file
    await fs.writeFile(outputFile, themeContent);

    console.log(`Themes have been generated and written to ${outputFile}`);
  } catch (error) {
    console.error('Error generating themes:', error);
  }
};
