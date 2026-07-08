import { afterEach, expect, test } from "bun:test"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { createTempDirTracker, runInCwd } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-update-version-")
const moduleUrl = pathToFileURL(join(import.meta.dirname, "updateVersion.js")).href

afterEach(tempDirs.cleanup)

test("updateVersion syncs packages/daisyui/index.js with package.json", async () => {
  const dir = await tempDirs.make()
  await mkdir(join(dir, "packages", "daisyui"), { recursive: true })
  await writeFile(join(dir, "packages", "daisyui", "package.json"), '{"version":"9.8.7"}')
  await writeFile(join(dir, "packages", "daisyui", "index.js"), 'const version = "0.0.0"\n')

  await runInCwd(
    dir,
    `const { updateVersion } = await import(${JSON.stringify(moduleUrl)});
await updateVersion();`,
  )

  expect(await readFile(join(dir, "packages", "daisyui", "index.js"), "utf-8")).toBe(
    'const version = "9.8.7"\n',
  )
})
