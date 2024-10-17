import fs from 'fs/promises';
import path from 'path';

export const copyFile = async (from, to, newName = null) => {
  try {
    const destDir = path.dirname(to);
    await fs.mkdir(destDir, { recursive: true });

    let destPath = to;
    if (newName) {
      destPath = path.join(destDir, newName);
    }

    await fs.copyFile(from, destPath);
    console.log(`File copied successfully from ${from} to ${destPath}`);
  } catch (error) {
    console.error(`Error copying file from ${from} to ${to}:`, error);
  }
};
