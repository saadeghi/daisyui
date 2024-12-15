import fs from "fs/promises"
import path from "path"

export const generateThemesObject = async (outputPath) => {
  const themesDir = path.join(import.meta.dirname, "../theme")
  const themeObjects = {}

  const themeNames = await fs.readdir(themesDir)

  // Use Promise.all to parallelize theme imports
  await Promise.all(
    themeNames.map(async (themeName) => {
      const themeObjectPath = path.join(themesDir, themeName, "object.js")
      if (
        await fs
          .stat(themeObjectPath)
          .then((stats) => stats.isFile())
          .catch(() => false)
      ) {
        try {
          const themeModule = await import(themeObjectPath)
          themeObjects[themeName] = themeModule.default
        } catch (error) {
          throw new Error(`Error importing theme: ${themeName}`, error)
        }
      }
    }),
  )

  // Convert themeObjects to a string in the desired format
  const themeObjectsString = `export default ${JSON.stringify(themeObjects, null, null)}`

  // Write the string to the specified output file
  await fs.writeFile(outputPath, themeObjectsString, "utf8")
}
