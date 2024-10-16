import { promises as fs } from "fs"
import path from "path"

export const createPluginFiles = async (type, componentDir, jsContent, fileName) => {

  const types = {
    base: "addBase",
    component: "addComponents",
    utility: "addUtilities",
  };

  // create index.js
  const indexJsPath = path.join(componentDir, "object.js")
  await fs.writeFile(indexJsPath, `export default ${jsContent};`)

  // create config.js
  const configJsPath = path.join(componentDir, "index.js")
  const configJsContent = `import ${fileName} from './object.js';
export default ({ ${types[type]} }) => {
	${types[type]}({...${fileName}})
}
`
  await fs.writeFile(configJsPath, configJsContent)
}
