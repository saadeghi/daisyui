import { promises as fs } from "node:fs"
import path from "node:path"

export const createDirectoryBasedOnFileNames = async (fileName, fileExtension, distDir) => {
  const componentName = path.basename(fileName, fileExtension)
  const componentDir = path.join(distDir, componentName)
  await fs.mkdir(componentDir, { recursive: true })
  return componentDir
}
