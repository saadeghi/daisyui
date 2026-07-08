import { afterEach, expect, test } from "bun:test"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { createTempDirTracker, runInCwd } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-generate-chunks-")
const moduleUrl = pathToFileURL(join(import.meta.dirname, "generateChunks.js")).href

const createSourceTree = async (dir) => {
  for (const directory of ["theme", "base", "components", "utilities", "colors"]) {
    await mkdir(join(dir, directory), { recursive: true })
  }

  await writeFile(join(dir, "theme", "custom.css"), "")
  await writeFile(join(dir, "theme", "dark.css"), "")
  await writeFile(join(dir, "theme", "light.css"), "")
  await writeFile(join(dir, "base", "base1.css"), "")
  await writeFile(join(dir, "base", "base2.css"), "")
  await writeFile(join(dir, "components", "component1.css"), "")
  await writeFile(join(dir, "components", "component2.css"), "")
  await writeFile(join(dir, "utilities", "utility1.css"), "")
  await writeFile(join(dir, "utilities", "utility2.css"), "")
  await writeFile(join(dir, "colors", "color1.css"), "")
  await writeFile(join(dir, "colors", "color2.css"), "")
}

afterEach(tempDirs.cleanup)

test("generateChunks generates correct CSS imports", async () => {
  const dir = await tempDirs.make()
  await createSourceTree(dir)

  await runInCwd(
    dir,
    `const { generateChunks } = await import(${JSON.stringify(moduleUrl)});
await generateChunks("output.css");`,
  )

  const result = await readFile(join(dir, "output.css"), "utf-8")
  const lines = result.trim().split("\n")

  expect(lines.slice(0, 2)).toEqual([
    "@import url(theme/light.css);",
    "@import url(theme/dark.css);",
  ])
  expect(lines).not.toContain("@import url(theme/custom.css);")
  expect(new Set(lines)).toEqual(
    new Set([
      "@import url(theme/light.css);",
      "@import url(theme/dark.css);",
      "@import url(base/base1.css);",
      "@import url(base/base2.css);",
      "@import url(components/component1.css);",
      "@import url(components/component2.css);",
      "@import url(utilities/utility1.css);",
      "@import url(utilities/utility2.css);",
      "@import url(colors/color1.css);",
      "@import url(colors/color2.css);",
    ]),
  )
})

test("generateChunks throws error if writing to file fails", async () => {
  const dir = await tempDirs.make()
  await createSourceTree(dir)

  await runInCwd(
    dir,
    `const { generateChunks } = await import(${JSON.stringify(moduleUrl)});
try {
  await generateChunks("missing/output.css");
  process.exit(1);
} catch (error) {
  if (!error.message.includes("Failed to generate full CSS:")) {
    throw error;
  }
}`,
  )
})
