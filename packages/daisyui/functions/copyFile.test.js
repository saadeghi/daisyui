import { afterEach, expect, test } from "bun:test"
import { readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { copyFile } from "./copyFile.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-copy-file-")

afterEach(tempDirs.cleanup)

test("copyFile copies file to destination", async () => {
  const dir = await tempDirs.make()
  const from = join(dir, "source.txt")
  const to = join(dir, "nested", "destination.txt")
  await writeFile(from, "content")

  await copyFile(from, to)

  expect(await readFile(to, "utf-8")).toBe("content")
})

test("copyFile copies file to destination with new name", async () => {
  const dir = await tempDirs.make()
  const from = join(dir, "source.txt")
  const to = join(dir, "nested", "destination.txt")
  const renamed = join(dir, "nested", "renamed.txt")
  await writeFile(from, "content")

  await copyFile(from, to, "renamed.txt")

  expect(await readFile(renamed, "utf-8")).toBe("content")
})

test("copyFile throws error if copying fails", async () => {
  const dir = await tempDirs.make()
  const from = join(dir, "missing.txt")
  const to = join(dir, "nested", "destination.txt")

  await expect(copyFile(from, to)).rejects.toThrow(`Error copying file from ${from} to ${to}:`)
})
