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

test.each([
  ["dark", undefined, "dark"],
  ["light", undefined, "light"],
  ["dark", "light", "light"],
])("themePlugin preserves the %s color scheme unless overridden", (name, colorScheme, expected) => {
  const { handler } = themePlugin({
    name,
    "color-scheme": colorScheme,
    "--color-primary": "red",
  })
  const addBase = mock(() => {})

  handler({ addBase })

  const styles = addBase.mock.calls[0][0]
  expect(Object.values(styles)[0]["color-scheme"]).toBe(expected)
})
