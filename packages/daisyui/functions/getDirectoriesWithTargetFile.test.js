import { afterEach, expect, test } from "bun:test"
import { mkdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { getDirectoriesWithTargetFile } from "./getDirectoriesWithTargetFile.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-target-dirs-")

afterEach(tempDirs.cleanup)

test("getDirectoriesWithTargetFile returns directories containing the target file", async () => {
  const dir = await tempDirs.make()
  await mkdir(join(dir, "button"))
  await mkdir(join(dir, "card"))
  await mkdir(join(dir, "input"))
  await writeFile(join(dir, "button", "index.js"), "")
  await writeFile(join(dir, "card", "object.js"), "")
  await writeFile(join(dir, "loose.js"), "")

  const result = await getDirectoriesWithTargetFile(dir, "index.js")

  expect(result).toEqual(["button"])
})

test("getDirectoriesWithTargetFile ignores directories without the target file", async () => {
  const dir = await tempDirs.make()
  await mkdir(join(dir, "button"))
  await mkdir(join(dir, "card"))

  const result = await getDirectoriesWithTargetFile(dir, "index.js")

  expect(result).toEqual([])
})
