import { promises as fs } from "node:fs"
import { getCssFiles } from "./functions/getCssFiles.js"
import { cssToJs } from "./functions/cssToJs.js"
import { createComponentDirectory } from "./functions/createComponentDirectory.js"
import { writeComponentFiles } from "./functions/writeComponentFiles.js"

async function processCssFiles({ srcDir, distDir }) {
	await fs.mkdir(distDir, { recursive: true })
	const cssFiles = await getCssFiles(srcDir)

	for (const cssFile of cssFiles) {
		try {
			const jsContent = await cssToJs(cssFile)
			const componentDir = await createComponentDirectory(cssFile, distDir)
			await writeComponentFiles(componentDir, jsContent)
			console.log(`Created ${componentDir}`)
		} catch (error) {
			console.error(`Error processing ${cssFile}:`, error)
		}
	}
}

processCssFiles({ srcDir: "css/components", distDir: "components" }).catch(console.error)
