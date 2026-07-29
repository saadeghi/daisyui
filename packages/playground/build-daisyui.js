import { basename, dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { createDirectoryBasedOnFileNames } from "../daisyui/functions/createDirectoryBasedOnFileNames.js"
import { createPluginFiles } from "../daisyui/functions/createPluginFiles.js"
import { cssToJs } from "../daisyui/functions/cssToJs.js"
import { generateThemesObject } from "../daisyui/functions/generateThemesObject.js"

const projectRoot = fileURLToPath(new URL(".", import.meta.url))
const daisyuiRoot = resolve(projectRoot, "../daisyui")
const sourceGroups = new Map([
  [resolve(daisyuiRoot, "src/base"), { type: "base", outputRoot: resolve(daisyuiRoot, "base") }],
  [
    resolve(daisyuiRoot, "src/components"),
    { type: "component", outputRoot: resolve(daisyuiRoot, "components") },
  ],
  [
    resolve(daisyuiRoot, "src/themes"),
    { type: "base", outputRoot: resolve(daisyuiRoot, "theme"), themes: true },
  ],
  [
    resolve(daisyuiRoot, "src/utilities"),
    { type: "utility", outputRoot: resolve(daisyuiRoot, "utilities") },
  ],
])

const inputFile = process.argv[2]

if (!inputFile) {
  throw new Error("A daisyUI source file is required")
}

const sourceFile = resolve(inputFile)
const sourceGroup = sourceGroups.get(dirname(sourceFile))

if (!sourceGroup || !sourceFile.endsWith(".css")) {
  throw new Error(`Unsupported daisyUI source file: ${sourceFile}`)
}

const name = basename(sourceFile, ".css")
const [styles, outputDirectory] = await Promise.all([
  cssToJs(sourceFile),
  createDirectoryBasedOnFileNames(name, ".css", sourceGroup.outputRoot),
])

await createPluginFiles(sourceGroup.type, outputDirectory, styles, name)

if (sourceGroup.themes) {
  await generateThemesObject(resolve(daisyuiRoot, "theme/object.js"))
}
