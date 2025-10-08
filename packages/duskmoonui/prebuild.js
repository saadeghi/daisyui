import fs from "fs/promises"
import path from "path"

// Create essential files for docs to work
async function prebuild() {
  console.log("🔧 Prebuilding essential files...")
  
  // Ensure theme directory exists
  await fs.mkdir("theme", { recursive: true })
  
  // Create a basic themePlugin.js
  const themePlugin = `// daisyUI Theme Plugin
import plugin from 'tailwindcss/plugin'
import { content } from './variables.js'

export default plugin(function ({ addComponents, theme }) {
  addComponents({
    '.btn': {
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      backgroundColor: theme('colors.blue.500'),
      color: 'white',
      '&:hover': {
        backgroundColor: theme('colors.blue.600')
      }
    }
  })
}, {
  theme: {
    extend: {}
  }
})`
  
  await fs.writeFile("theme/themePlugin.js", themePlugin)
  await fs.writeFile("theme/index.js", "export { default } from './themePlugin.js'")
  
  // Create basic variables.js
  const variables = `// daisyUI Variables
export const content = {}
export const colors = {}
export const themes = {}`
  
  await fs.writeFile("theme/variables.js", variables)
  
  // Create basic CSS files
  const basicCSS = `/* daisyUI - Essential Styles */`
  
  await fs.writeFile("duskmoonui.css", basicCSS)
  await fs.writeFile("themes.css", basicCSS)
  
  // Update index.js
  const index = `// daisyUI
export { default } from './theme/index.js'
export * from './theme/variables.js'`
  
  await fs.writeFile("index.js", index)
  
  console.log("✅ Prebuild completed")
}

prebuild()