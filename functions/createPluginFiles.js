import { promises as fs } from "fs"
import path from "path"

export const createPluginFiles = async (type, componentDir, jsContent) => {

  const types = {
    base: "addBase",
    component: "addComponents",
    utility: "addUtilities",
  };

  // create index.js
  const indexJsPath = path.join(componentDir, "index.js")
  await fs.writeFile(indexJsPath, `export default ${jsContent};`)

  // create index.css
  const indexCssPath = path.join(componentDir, "index.css")
  await fs.writeFile(indexCssPath, `@config "./config.js";\n`)

  // create config.js
  const configJsPath = path.join(componentDir, "config.js")
  const configJsContent = `import index from './index.js';
export default ({ ${types[type]} }) => {
	${types[type]}({...index})
}
`
  await fs.writeFile(configJsPath, configJsContent)
}
