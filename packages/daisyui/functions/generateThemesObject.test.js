import { afterEach, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { generateThemesObject } from "./generateThemesObject.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-themes-object-")

afterEach(tempDirs.cleanup)

test("generateThemesObject writes JS and declaration files for available themes", async () => {
  const dir = await tempDirs.make()
  const output = join(dir, "object.js")

  await generateThemesObject(output)

  const js = await readFile(output, "utf-8")
  const dts = await readFile(join(dir, "object.d.ts"), "utf-8")

  expect(js).toStartWith("export default ")
  expect(js).toContain('"light"')
  expect(js).toContain('"dark"')
  expect(dts).toContain("interface Theme")
  expect(dts).toContain("light: Theme")
})
