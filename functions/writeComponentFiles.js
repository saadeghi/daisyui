import { promises as fs } from "node:fs"
import path from "node:path"

export const writeComponentFiles = async (componentDir, jsContent) => {
  const indexJsPath = path.join(componentDir, "index.js")
  await fs.writeFile(indexJsPath, `export default ${jsContent};`)

  const indexCssPath = path.join(componentDir, "index.css")
  await fs.writeFile(indexCssPath, `@config "./config.js";\n`)

  const configJsPath = path.join(componentDir, "config.js")
  const configJsContent = `import { plugin } from '../../functions/plugin.js';
import index from './index.js';

export default {
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				...index
			});
		})
	],
};
`
  await fs.writeFile(configJsPath, configJsContent)
}
