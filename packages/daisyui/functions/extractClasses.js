import fs from "fs/promises"
import path from "path"

// Function to extract class names from CSS content
const extractClassNames = async (cssContent) => {
  const classRegex =
    /\.([a-zA-Z_-][a-zA-Z0-9_-]*)(?=\s*[{,:(])|:where\(\.([a-zA-Z_-][a-zA-Z0-9_-]*)\)/g
  const matches = cssContent.match(classRegex)
  const classNames = matches
    ? matches.map((match) => {
        const cleanedMatch = match.replace(/:where\(\.|[{,:()]/g, "").trim()
        return cleanedMatch.startsWith(".") ? cleanedMatch.slice(1) : cleanedMatch
      })
    : []
  return [...new Set(classNames)] // Remove duplicates
}

// Function to process a single CSS file
const processCssFile = async (srcDir, filePath) => {
  try {
    const cssContent = await fs.readFile(filePath, "utf8")
    const classNames = await extractClassNames(cssContent)

    const fileName = path.basename(filePath, ".css")
    const outputDir = path.join(import.meta.dirname, "..", srcDir, fileName)
    const outputFilePath = path.join(outputDir, "class.json")

    // Create directory if it doesn't exist
    try {
      await fs.mkdir(outputDir, { recursive: true })
    } catch (err) {
      if (err.code !== "EEXIST") throw err
    }

    // Create JSON string
    const jsonString = JSON.stringify(classNames, null, 2)

    // Write to a new JSON file
    await fs.writeFile(outputFilePath, jsonString)

    return classNames.length
  } catch (error) {
    throw new Error(`Error processing file ${filePath}: ${error.message}`)
  }
}

// Function to process all CSS files
export const extractClasses = async ({ srcDir }) => {
  try {
    // Read all CSS files from the styles directory
    const stylesDir = path.join(import.meta.dirname, "..", "src", srcDir)
    const cssFiles = await fs.readdir(stylesDir)
    const filteredCssFiles = cssFiles.filter((file) => file.endsWith(".css"))

    if (filteredCssFiles.length === 0) {
      throw new Error("No CSS files found in the specified directory")
    }

    // Process each CSS file and sum up the total number of class names
    const classNameCounts = await Promise.all(
      filteredCssFiles.map(async (file) => {
        const filePath = path.join(stylesDir, file)
        return await processCssFile(srcDir, filePath)
      }),
    )

    const totalClassNames = classNameCounts.reduce((total, count) => total + count, 0)

    return totalClassNames
  } catch (error) {
    throw new Error(`Error extracting classes: ${error.message}`)
  }
}
