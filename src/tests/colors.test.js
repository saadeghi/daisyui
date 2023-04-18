import { expect, test } from 'vitest'
import * as colorFunctions from '../colors/functions'

import { colorToHslValue } from "./utils"


test('Foreground color generator function', () => {
  expect(colorFunctions.generateForegroundColorFrom("#fff")).toBe("0 0% 20%")
  expect(colorFunctions.generateForegroundColorFrom("#000")).toBe("0 0% 80%")
  expect(colorFunctions.generateForegroundColorFrom("#fff", 1)).toBe("0 0% 0%")
  expect(colorFunctions.generateForegroundColorFrom("#000", 1)).toBe("0 0% 100%")
  expect(colorFunctions.generateForegroundColorFrom("#1D9BF0")).toBe("204.17 100% 10.549%")
  expect(colorFunctions.generateForegroundColorFrom("#CF212E")).toBe("355.52 100% 89.412%")
})
