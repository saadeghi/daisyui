import { afterAll, beforeAll, describe, expect, test } from "bun:test"
import { parseStoredThemes, selectInitialTheme } from "./themeGeneratorStorage.js"

const originalDocument = globalThis.document

beforeAll(() => {
  globalThis.document = {
    createElement: () => {
      let color = ""
      return {
        style: {
          get color() {
            return color
          },
          set color(value) {
            color = typeof value === "string" && !value.includes("url(") ? value.trim() : ""
          },
        },
      }
    },
  }
})

afterAll(() => {
  if (originalDocument) globalThis.document = originalDocument
  else delete globalThis.document
})

const createTheme = (overrides = {}) => ({
  name: "light",
  "color-scheme": "light",
  default: false,
  prefersdark: false,
  id: "light-id",
  type: "builtin",
  "--color-primary": " red ",
  ...overrides,
})

describe("stored Theme Generator data", () => {
  test.each(["{", "{}", "[]"])("rejects invalid stored value %s", (value) => {
    expect(parseStoredThemes(value)).toBe(null)
  })

  test("rejects storage without a built-in theme", () => {
    expect(
      parseStoredThemes(JSON.stringify([createTheme({ id: "custom-id", type: "custom" })])),
    ).toBe(null)
  })

  test.each([
    [null],
    [createTheme({ id: undefined })],
    [createTheme({ type: undefined })],
    [createTheme({ "--color-primary": 1 })],
    [createTheme({ "--color-primary": "url(https://example.com)" })],
  ])("rejects a malformed theme entry", (theme) => {
    expect(parseStoredThemes(JSON.stringify([theme]))).toBe(null)
  })

  test("returns validated themes with normalized colors", () => {
    const themes = [createTheme(), createTheme({ id: "custom-id", name: "custom", type: "custom" })]

    expect(parseStoredThemes(JSON.stringify(themes))).toEqual([
      { ...themes[0], "--color-primary": "red" },
      { ...themes[1], "--color-primary": "red" },
    ])
  })
})

describe("initial Theme Generator selection", () => {
  test("selects a valid stored ID", () => {
    const themes = [createTheme(), createTheme({ id: "custom-id", name: "custom", type: "custom" })]
    expect(selectInitialTheme(themes, "custom-id")).toBe(themes[1])
  })

  test("falls back from an unknown ID to the built-in light theme", () => {
    const themes = [
      createTheme({ id: "dark-id", name: "dark", "color-scheme": "dark" }),
      createTheme(),
    ]
    expect(selectInitialTheme(themes, "missing")).toBe(themes[1])
  })

  test("falls back to the first built-in theme when light is unavailable", () => {
    const themes = [
      createTheme({ id: "custom-id", name: "custom", type: "custom" }),
      createTheme({ id: "dark-id", name: "dark", "color-scheme": "dark" }),
    ]
    expect(selectInitialTheme(themes, null)).toBe(themes[1])
  })
})
