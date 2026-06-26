import { afterEach, expect, test } from "bun:test"
import { mkdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { getFileNames } from "./getFileNames.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-get-file-names-")

afterEach(tempDirs.cleanup)

test("getFileNames returns matching file basenames recursively by default", async () => {
  const dir = await tempDirs.make()
  await mkdir(join(dir, "nested"))
  await writeFile(join(dir, "button.css"), "")
  await writeFile(join(dir, "readme.md"), "")
  await writeFile(join(dir, "nested", "card.css"), "")

  const result = await getFileNames(dir, ".css")

  expect(result.sort()).toEqual(["button", "card"])
})

test("getFileNames can skip nested directories", async () => {
  const dir = await tempDirs.make()
  await mkdir(join(dir, "nested"))
  await writeFile(join(dir, "button.css"), "")
  await writeFile(join(dir, "nested", "card.css"), "")

  const result = await getFileNames(dir, ".css", false)

  expect(result).toEqual(["button"])
})
