import { promises as fs } from "node:fs"

export const getDirectories = async (sourcePath) => {
  const entries = await fs.readdir(sourcePath, { withFileTypes: true });
  return entries
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}
