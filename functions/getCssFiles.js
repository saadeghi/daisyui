import { promises as fs } from "node:fs"
import path from "node:path"

export const getCssFiles = async (dir) => {
	let cssFiles = []
	const files = await fs.readdir(dir, { withFileTypes: true })

	for (const file of files) {
		const filePath = path.join(dir, file.name)

		if (file.isDirectory()) {
			const subDirFiles = await getCssFiles(filePath)
			cssFiles = cssFiles.concat(subDirFiles)
		} else if (file.isFile() && file.name.endsWith(".css")) {
			cssFiles.push(filePath)
		}
	}

	return cssFiles
}
