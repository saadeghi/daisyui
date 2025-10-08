import fs from "fs/promises"
import path from "path"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const { version } = require("./package.json")

const isDev = process.argv.includes("--dev")

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function copyFile(from, to, newName = null) {
  try {
    const destDir = path.dirname(to)
    await fs.mkdir(destDir, { recursive: true })

    let destPath = to
    if (newName) {
      destPath = path.join(destDir, newName)
    }

    await fs.copyFile(from, destPath)
  } catch (error) {
    throw new Error(`Error copying file from ${from} to ${to}: ${error.message}`)
  }
}

async function simpleBuild() {
  try {
    console.log(`🌼 Starting simple build for daisyUI ${version}`)
    
    // Clean previous build
    if (!isDev) {
      const dirsToClean = ["theme", "base", "colors", "components", "utilities"]
      await Promise.all(dirsToClean.map(dir => 
        fs.rm(dir, { recursive: true, force: true }).catch(() => {})
      ))
    }

    // Copy essential files
    await copyFile("./functions/themePlugin.js", "./theme/themePlugin.js", "index.js")
    
    // Create a basic CSS file
    const basicCss = `/* daisyUI ${version} - Basic Build */
/* This is a minimal build for CI/CD purposes */
`
    
    await fs.writeFile("duskmoonui.css", basicCss)
    await fs.writeFile("themes.css", basicCss)
    
    // Create a basic index.js
    const indexJs = `// daisyUI ${version}
// Minimal build for CI/CD
export { default } from './theme/themePlugin.js'
`
    await fs.writeFile("index.js", indexJs)
    
    console.log(`✅ Simple build completed for daisyUI ${version}`)
  } catch (error) {
    console.error(`❌ Build failed: ${error.message}`)
    throw error
  }
}

simpleBuild()