import { execSync } from "child_process"
import fs from "fs"
import glob from "glob"

// WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1
// for normal text and 3:1 for large text. WCAG 2.1 requires a
// contrast ratio of at least 3:1 for graphics and user interface
// components (such as form input borders). WCAG Level AAA requires
// a contrast ratio of at least 7:1 for normal text and 4.5:1 for
// large text.

export const ContrastRatioWarningThreshold = 4.5
export const ContrastRatioErrorThreshold = 3

export const trimCssVariable = (input) => {
  return input.replace("--", "")
}

export const trimThemeName = (input) => {
  return input.replace("[data-theme=", "").replace("]", "")
}

export function executeCommand(command) {
  try {
    execSync(command, { stdio: "inherit" })
  } catch (error) {
    console.error(`Error executing command: ${command}`)
    console.error(error.message)
    throw error
  }
}

export function stringExistsInFile(filePath, searchString) {
  const firstMatchedFile = glob.sync(filePath)[0]
  if (!firstMatchedFile) {
    throw new Error(`File not found: ${filePath}`)
  }
  const fileContent = fs.readFileSync(firstMatchedFile, "utf8")
  return fileContent.includes(searchString)
}

export function printPackageDependencies(name) {
  fs.readFile(`src/tests/files/${name}/package.json`, "utf8", (err, data) => {
    if (err) throw err
    const packageJson = JSON.parse(data)
    const allDependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    }
    const dependencyNames = Object.keys(allDependencies)
    console.table(`${name} dependencies: ${dependencyNames.join(", ") || "No dependencies found."}`)
  })
}
