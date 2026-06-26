import { afterEach, expect, test } from "bun:test"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { createPluginFiles } from "./createPluginFiles.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-create-plugin-files-")

afterEach(tempDirs.cleanup)

const expectPluginFiles = async (type, helperName) => {
  const dir = await tempDirs.make()
  const componentDir = join(dir, "component")
  await mkdir(componentDir)

  await createPluginFiles(type, componentDir, "{ color: 'red' }", "component")

  expect(await readFile(join(componentDir, "object.js"), "utf-8")).toBe(
    "export default { color: 'red' };",
  )
  expect(await readFile(join(componentDir, "index.js"), "utf-8")).toBe(`import component from './object.js';
import { addPrefix } from '../../functions/addPrefix.js';

export default ({ ${helperName}, prefix = '' }) => {
  const prefixedcomponent = addPrefix(component, prefix);
  ${helperName}({ ...prefixedcomponent });
};
`)
}

for (const [type, helperName] of [
  ["base", "addBase"],
  ["component", "addComponents"],
  ["utility", "addUtilities"],
]) {
  test(`createPluginFiles creates object.js and index.js for ${type} type`, async () => {
    await expectPluginFiles(type, helperName)
  })
}

test("createPluginFiles throws error if writeFile fails", async () => {
  const dir = await tempDirs.make()
  const componentDir = join(dir, "component")
  await writeFile(componentDir, "")

  await expect(
    createPluginFiles("base", componentDir, "{ color: 'red' }", "component"),
  ).rejects.toThrow()
})
