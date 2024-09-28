import fs from 'fs/promises';
import { getFileNames } from "./getFileNames.js"
import { cssToJs } from "./cssToJs.js"
import { createComponentDirectory } from "./createComponentDirectory.js"
import { writeComponentFiles } from "./writeComponentFiles.js"

export async function generatePlugins({ srcDir, distDir }) {
  await fs.mkdir(distDir, { recursive: true })
  const cssFiles = await getFileNames(srcDir, ".css")

  for (const cssFile of cssFiles) {
    try {
      const jsContent = await cssToJs(`${srcDir}/${cssFile}.css`)
      const componentDir = await createComponentDirectory(cssFile, distDir)
      await writeComponentFiles(componentDir, jsContent)
      console.log(`Created ${componentDir}/index.js`)
    } catch (error) {
      console.error(`Error processing ${cssFile}:`, error)
    }
  }
}
