import { expect, test } from 'vitest'
import * as colorFunctions from '../colors/functions'

import { colorToHslValue } from "./utils"


test('Foreground color generator function', () => {
  expect(colorFunctions.generateForegroundColorFrom("#fff")).toBe(colorToHslValue("#333"))
  expect(colorFunctions.generateForegroundColorFrom("#000")).toBe(colorToHslValue("#ccc"))
  expect(colorFunctions.generateForegroundColorFrom("#fff", 1)).toBe(colorToHslValue("#000"))
  expect(colorFunctions.generateForegroundColorFrom("#000", 1)).toBe(colorToHslValue("#fff"))
  expect(colorFunctions.generateForegroundColorFrom("#1D9BF0")).toBe(colorToHslValue("#d2edff"))
  expect(colorFunctions.generateForegroundColorFrom("#CF212E")).toBe(colorToHslValue("#ffc7cb"))
})
