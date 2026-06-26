import { afterEach, expect, test } from "bun:test"
import { existsSync } from "node:fs"
import { writeFile } from "node:fs/promises"
import { join } from "node:path"
import { createDirectoryBasedOnFileNames } from "./createDirectoryBasedOnFileNames.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-create-dir-")

afterEach(tempDirs.cleanup)

for (const { name, fileName, extension } of [
  {
    name: "regular file name",
    fileName: "/path/to/source/component.js",
    extension: ".js",
  },
  {
    name: "different extension",
    fileName: "/path/to/source/component.tsx",
    extension: ".tsx",
  },
  {
    name: "nested source path",
    fileName: "/path/to/source/nested/component.js",
    extension: ".js",
  },
]) {
  test(`createDirectoryBasedOnFileNames creates a directory for ${name}`, async () => {
    const dir = await tempDirs.make()
    const result = await createDirectoryBasedOnFileNames(fileName, extension, dir)

    expect(result).toBe(join(dir, "component"))
    expect(existsSync(result)).toBe(true)
  })
}

test("createDirectoryBasedOnFileNames throws when mkdir fails", async () => {
  const dir = await tempDirs.make()
  const blockedDistDir = join(dir, "file-as-parent")
  await writeFile(blockedDistDir, "")

  await expect(
    createDirectoryBasedOnFileNames("component.js", ".js", blockedDistDir),
  ).rejects.toThrow()
})
