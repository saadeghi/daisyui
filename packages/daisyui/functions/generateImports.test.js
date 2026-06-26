import { afterEach, expect, test } from "bun:test"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { createTempDirTracker, runInCwd } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-generate-imports-")
const moduleUrl = pathToFileURL(join(import.meta.dirname, "generateImports.js")).href

const createPluginDir = async (root, category, name) => {
  const dir = join(root, category, name)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, "index.js"), "export default {}\n")
}

afterEach(tempDirs.cleanup)

test("generateImports writes imports grouped by base, components, and utilities", async () => {
  const dir = await tempDirs.make()
  await createPluginDir(dir, "base", "root")
  await createPluginDir(dir, "components", "button")
  await createPluginDir(dir, "utilities", "glass")
  await mkdir(join(dir, "components", "noIndex"), { recursive: true })

  await runInCwd(
    dir,
    `const { generateImports } = await import(${JSON.stringify(moduleUrl)});
await generateImports("imports.js");`,
  )

  const result = await readFile(join(dir, "imports.js"), "utf-8")
  expect(result).toContain("import root from './base/root/index.js';")
  expect(result).toContain("import button from './components/button/index.js';")
  expect(result).toContain("import glass from './utilities/glass/index.js';")
  expect(result).toContain("export const base = {root};")
  expect(result).toContain("export const components = {button};")
  expect(result).toContain("export const utilities = {glass};")
  expect(result).not.toContain("noIndex")
})
