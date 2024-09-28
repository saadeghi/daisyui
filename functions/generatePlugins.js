import fs from 'fs/promises';
import { getFileNames } from "./getFileNames.js"
import { cssToJs } from "./cssToJs.js"
import { createDirectoryBasedOnFileNames } from "./createDirectoryBasedOnFileNames.js"
import { createComponentPlugins } from "./createComponentPlugins.js"

export const generatePlugins = async ({ srcDir, distDir }) => {
  let fileCount = 0;
  await fs.mkdir(distDir, { recursive: true })
  const cssFiles = await getFileNames(srcDir, ".css")
  for (const cssFile of cssFiles) {
    const jsContent = await cssToJs(`${srcDir}/${cssFile}.css`)
    const componentDir = await createDirectoryBasedOnFileNames(cssFile, ".css", distDir)
    await createComponentPlugins(componentDir, jsContent)
    fileCount++;
  }
  return fileCount;
}
