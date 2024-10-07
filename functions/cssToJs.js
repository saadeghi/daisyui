import { promises as fs } from "node:fs"
import postcss from "postcss"
import postcssJs from "postcss-js"
import prefixer from "postcss-prefixer"
import { replaceApplyTrueWithEmptyObject } from "./replaceApplyTrueWithEmptyObject.js"

export const cssToJs = async (cssFile) => {
	const cssContent = await fs.readFile(cssFile, "utf-8")
	// const prefixed = postcss([prefixer({ prefix: "dz-" })]).process(cssContent).css
	const prefixed = cssContent
	const root = postcss.parse(prefixed)
	const jsContent = postcssJs.objectify(root)
	replaceApplyTrueWithEmptyObject(jsContent)
	return JSON.stringify(jsContent, null, null)
}
