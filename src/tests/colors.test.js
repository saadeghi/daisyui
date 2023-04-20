import { expect, test } from 'vitest'
import * as colorFunctions from '../theming/functions'

test('Foreground color generator function', () => {
  expect(colorFunctions.generateForegroundColorFrom("lch(100% 0 0)")).toBe("20 0 0")
  expect(colorFunctions.generateForegroundColorFrom("lch(0% 0 0)")).toBe("80 0 0")
  expect(colorFunctions.generateForegroundColorFrom("lch(100% 0 0)", 1)).toBe("0 0 0")
  expect(colorFunctions.generateForegroundColorFrom("lch(0% 0 0)", 1)).toBe("100 0 0")
  expect(colorFunctions.generateForegroundColorFrom("lch(60.83% 53.53 259.57)")).toBe("92.17 10.71 259.57")
  expect(colorFunctions.generateForegroundColorFrom("lch(45.82% 76.92 31.84)")).toBe("89.16 15.38 31.84")
})
