import { afterEach, expect, test } from "bun:test"
import { existsSync } from "node:fs"
import { mkdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { removeFiles } from "./removeFiles.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-remove-files-")

afterEach(tempDirs.cleanup)

test("removeFiles removes files and directories and ignores missing paths", async () => {
  const dir = await tempDirs.make()
  const filePath = join(dir, "file.css")
  const nestedDir = join(dir, "nested")
  await writeFile(filePath, "")
  await mkdir(nestedDir)
  await writeFile(join(nestedDir, "child.css"), "")

  await removeFiles([filePath, nestedDir, join(dir, "missing.css")])

  expect(existsSync(filePath)).toBe(false)
  expect(existsSync(nestedDir)).toBe(false)
})
