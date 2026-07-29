import { expect, test } from "bun:test"
import packageJson from "../package.json"

test("package includes the nestCssLayers runtime dependency", () => {
  expect(packageJson.files).toContain("functions/nestCssLayers.js")
})

for (const subpath of [
  "daisyui/theme",
  "daisyui/theme/object",
  "daisyui/functions/themeOrder",
  "daisyui/functions/variables",
]) {
  test(`package export resolves ${subpath}`, async () => {
    const module = await import(subpath)

    expect(module.default).toBeDefined()
  })
}
