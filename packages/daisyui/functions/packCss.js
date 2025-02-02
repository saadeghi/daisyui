import fs from "fs/promises"
import path from "path"
import { getFileNames } from "./getFileNames.js"
import { cleanCss } from "./cleanCss.js"

const readFileContent = async (filePath) => {
  return await fs.readFile(filePath, "utf8")
}
const getThemeDirs = () => ["light", "dark"]
const createThemePath = (theme) => path.join("./theme", `${theme}.css`)
const readThemeCSS = async () => {
  const themeDirs = getThemeDirs()
  const themeContents = await Promise.all(
    themeDirs.map((theme) => readFileContent(createThemePath(theme))),
  )
  return themeContents.join("\n")
}

const directoryMap = {
  "./base": false,
  "./components": false,
  "./utilities": false,
  "./colors": "utilities",
}

const filterExcludedFiles = (files, excludeFiles) => {
  return files.filter((file) => !excludeFiles.includes(`${file}.css`))
}

const readDirectoryContent = async (directory, excludeFiles = []) => {
  const files = await getFileNames(directory, ".css", false)
  const filteredFiles = filterExcludedFiles(files, excludeFiles)

  const contents = await Promise.all(
    filteredFiles.map(async (file) => {
      const content = await readFileContent(`${directory}/${file}.css`)
      return content
    }),
  )

  return contents
}

const readAllCSSDirectories = async (excludeFiles = []) => {
  const directories = Object.keys(directoryMap)

  const allContents = await Promise.all(
    directories.map((dir) => readDirectoryContent(dir, excludeFiles)),
  )

  return allContents.flat()
}
const combineContent = (themeCSS, otherCSS) => {
  return [themeCSS, ...otherCSS].join("\n")
}
const writeContentToFile = async (file, content) => {
  const cleanedContent = cleanCss(content)
  await fs.writeFile(file, cleanedContent)
}
export const packCss = async (file, excludeFiles = []) => {
  const [themeCSS, otherCSS] = await Promise.all([
    readThemeCSS(),
    readAllCSSDirectories(excludeFiles),
  ])

  const allContent = combineContent(themeCSS, otherCSS)
  await writeContentToFile(file, allContent)
}
