import { expect, test } from "vitest"
import * as colorFunctions from "../theming/functions"

test("Foreground color generator function", () => {
  expect(colorFunctions.generateForegroundColorFrom("#fff")).toBe("146 0% 19%")
  expect(colorFunctions.generateForegroundColorFrom("#000")).toBe("145 0% 78%")
  expect(colorFunctions.generateForegroundColorFrom("#fff", 1)).toBe("0 0% 0%")
  expect(colorFunctions.generateForegroundColorFrom("#000", 1)).toBe("161 100% 100%")
  expect(colorFunctions.generateForegroundColorFrom("#1D9BF0")).toBe("215 87% 93%")
  expect(colorFunctions.generateForegroundColorFrom("#CF212E")).toBe("8 93% 91%")
})
