import { brotliCompressSync, constants } from "node:zlib"
import { readFileSync, readdirSync } from "fs"
import { join, extname, basename } from "path"

const basePath = join(process.cwd(), "../daisyui/")

const getBrotliSize = (filePath, compressionLevel = 11) => {
  // compression level: 0-11. 6 is jsdelivr default
  try {
    const content = readFileSync(join(basePath, filePath))
    const compressed = brotliCompressSync(content, {
      params: {
        [constants.BROTLI_PARAM_QUALITY]: compressionLevel,
      },
    })
    return compressed.length / 1024 // size in KB
  } catch (error) {
    console.error(`Error getting Brotli size for file ${filePath}:`, error)
    return 0
  }
}

const getCssFiles = (dirPath, checkedCondition) => {
  const files = readdirSync(dirPath).filter((file) => extname(file) === ".css")
  return files.map((file) => ({
    path: join(dirPath.replace(basePath, ""), file),
    name: basename(file, ".css"),
    checked: checkedCondition(file),
  }))
}

const baseFiles = getCssFiles(join(basePath, "base"), () => true)
const componentFiles = getCssFiles(join(basePath, "components"), (file) =>
  ["button.css", "toggle.css", "checkbox.css", "input.css", "select.css", "menu.css"].includes(
    file,
  ),
)
const utilityFiles = getCssFiles(join(basePath, "utilities"), (file) => [].includes(file))
const colorFiles = getCssFiles(join(basePath, "colors"), (file) => [].includes(file))
const themeFiles = getCssFiles(join(basePath, "theme"), (file) => ["light.css"].includes(file))

const files = [...baseFiles, ...componentFiles, ...utilityFiles, ...colorFiles, ...themeFiles]

// Update the files array with the Brotli-compressed sizes
files.forEach((file) => {
  file.size = getBrotliSize(file.path, 11)
})

const groupedFiles = [
  { name: "Base styles", files: files.filter((file) => file.path.startsWith("base/")) },
  {
    name: "Components and modifiers",
    files: files.filter((file) => file.path.startsWith("components/")),
  },
  { name: "Utility classes", files: files.filter((file) => file.path.startsWith("utilities/")) },
  { name: "Color utitliy classes", files: files.filter((file) => file.path.startsWith("colors/")) },
  { name: "Themes", files: files.filter((file) => file.path.startsWith("theme/")) },
]

export async function load() {
  return {
    files,
    groupedFiles,
    daisyuiCssSize: Math.floor(getBrotliSize("daisyui.css", 6)),
  }
}
