import { execSync } from "child_process"
import fs from "fs"
import glob from "glob"

export const trimCssVariable = (input) => {
  return input.replace("--", "")
}

export const trimThemeName = (input) => {
  return input.replace("[data-theme=", "").replace("]", "")
}

export function executeCommand(command) {
  try {
    execSync(command, { stdio: ["inherit"] })
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
