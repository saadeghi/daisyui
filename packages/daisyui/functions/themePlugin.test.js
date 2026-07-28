import { expect, mock, test } from "bun:test"
import themePlugin from "../theme/index.js"

test("themePlugin adds custom theme tokens under the requested selector", () => {
  const { handler } = themePlugin({
    name: 'brand "theme\\name',
    default: true,
    "--color-primary": "red",
  })
  const addBase = mock(() => {})

  handler({ addBase })

  expect(addBase).toHaveBeenCalledWith({
    ':where(:root),:root:has(input.theme-controller[value="brand\\20 \\22 theme\\5c name"]:checked),[data-theme="brand\\20 \\22 theme\\5c name"]':
      {
        "color-scheme": "normal",
        "--color-primary": "red",
      },
  })
})

test("themePlugin adds prefers-color-scheme styles with custom root", () => {
  const { handler } = themePlugin({
    name: "brand",
    prefersdark: true,
    root: ".app",
    "--color-primary": "red",
  })
  const addBase = mock(() => {})

  handler({ addBase })

  expect(addBase).toHaveBeenCalledWith({
    "@media (prefers-color-scheme: dark)": {
      ".app:not([data-theme])": {
        "color-scheme": "normal",
        "--color-primary": "red",
      },
    },
  })
})
