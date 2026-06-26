import { afterEach, expect, test } from "bun:test"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { minify, minifyCssInDirectory } from "./minify.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-minify-")

afterEach(tempDirs.cleanup)

test("minify minifies an existing CSS file and prepends the package banner", async () => {
  const dir = await tempDirs.make()
  const filePath = join(dir, "style.css")
  await writeFile(filePath, ".btn { color: red; }\n")

  await minify(filePath)

  const result = await readFile(filePath, "utf-8")
  expect(result).toStartWith("/*! 🌼 daisyUI ")
  expect(result).toContain(".btn{color:red}")
})

test("minify returns without writing when the file does not exist", async () => {
  await expect(minify(join(await tempDirs.make(), "missing.css"))).resolves.toBeUndefined()
})

test("minifyCssInDirectory minifies only CSS files in provided directories", async () => {
  const dir = await tempDirs.make()
  await mkdir(join(dir, "nested"))
  await writeFile(join(dir, "style.css"), ".btn { color: red; }\n")
  await writeFile(join(dir, "script.js"), "export default true\n")

  await minifyCssInDirectory([dir])

  expect(await readFile(join(dir, "style.css"), "utf-8")).toContain(".btn{color:red}")
  expect(await readFile(join(dir, "script.js"), "utf-8")).toBe("export default true\n")
})
