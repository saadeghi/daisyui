import { expect, test } from "bun:test"

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
