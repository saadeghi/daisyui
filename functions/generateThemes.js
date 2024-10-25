import fs from 'fs/promises';
import path from 'path';
import { getDirectoriesWithTargetFile } from './getDirectoriesWithTargetFile';
import themeOrder from './themeOrder';

const readFileContent = async (filePath) => {
  return await fs.readFile(filePath, 'utf8');
};

const readAllThemeCSS = async () => {
  // Get all directories in the ./theme folder that contain an index.css file
  const themeDirs = await getDirectoriesWithTargetFile('./theme', 'index.css');

  // Read the content of each theme's index.css file and store in an object
  const themeContents = {};
  await Promise.all(
    themeDirs.map(async themeDir => {
      const content = await readFileContent(path.join('./theme', themeDir, 'index.css'));
      themeContents[themeDir] = content;
    })
  );

  // Sort themes according to the specified order
  const sortedThemeContents = themeOrder
    .filter(theme => themeDirs.includes(theme))
    .map(theme => themeContents[theme]);

  return sortedThemeContents.join('\n');
};

export const generateThemes = async (outputFile) => {
  try {
    // Read all theme CSS files
    const themeContent = await readAllThemeCSS();

    // Write the combined theme content to the output file
    await fs.writeFile(outputFile, themeContent);

  } catch (error) {
    throw new Error('Error generating themes:', error);
  }
};
