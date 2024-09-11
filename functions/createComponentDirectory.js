import { promises as fs } from "node:fs"
import path from "node:path"

export const createComponentDirectory = async (cssFile, distDir) => {
	const componentName = path.basename(cssFile, ".css")
	const componentDir = path.join(distDir, componentName)
	await fs.mkdir(componentDir, { recursive: true })
	return componentDir
}
