import fs from 'fs/promises';
import { getFileNames } from "./getFileNames.js"
import { cssToJs } from "./cssToJs.js"
import { createComponentDirectory } from "./createComponentDirectory.js"
import { writeComponentFiles } from "./writeComponentFiles.js"

export const generatePlugins = async ({ srcDir, distDir }) => {
  let fileCount = 0;
  await fs.mkdir(distDir, { recursive: true })
  const cssFiles = await getFileNames(srcDir, ".css")
  for (const cssFile of cssFiles) {
    const jsContent = await cssToJs(`${srcDir}/${cssFile}.css`)
    const componentDir = await createComponentDirectory(cssFile, distDir)
    await writeComponentFiles(componentDir, jsContent)
    fileCount++;
  }
  return fileCount;
}
