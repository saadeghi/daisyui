import fs from "fs/promises"
import { getDirectoriesWithTargetFile } from "./getDirectoriesWithTargetFile.js"

const generateJSContent = async () => {
  // Create separate arrays for each category
  let baseItems = []
  let componentItems = []
  let utilityItems = []
  let imports = ""

  try {
    // Function to process each category
    const processCategory = async (category) => {
      const items = await getDirectoriesWithTargetFile(`./${category}`, "index.js")
      items.forEach((item) => {
        const importName = `${item}`
        imports += `import ${importName} from './${category}/${item}/index.js';\n`

        // Add items to their respective arrays
        switch (category) {
          case "base":
            baseItems.push(importName)
            break
          case "components":
            componentItems.push(importName)
            break
          case "utilities":
            utilityItems.push(importName)
            break
        }
      })
    }

    // Process all categories
    await processCategory("base")
    await processCategory("components")
    await processCategory("utilities")

    // Generate the content with separate exports
    const content = `${imports}
export const base = {${baseItems.join(",")}};
export const components = {${componentItems.join(",")}};
export const utilities = {${utilityItems.join(",")}};
`

    return { content }
  } catch (error) {
    throw new Error(`Failed to generate JS content: ${error.message}`)
  }
}

// Write the generated content to a file
const writeToFile = async (content, filename) => {
  try {
    await fs.writeFile(filename, content, "utf8")
  } catch (error) {
    throw new Error(`Failed to write file ${filename}: ${error.message}`)
  }
}

// Main function to generate JS
export const generateImports = async (filename) => {
  try {
    const { content: jsContent } = await generateJSContent()
    await writeToFile(jsContent, filename)
  } catch (error) {
    throw new Error(`Failed to generate ${filename}: ${error.message}`)
  }
}
