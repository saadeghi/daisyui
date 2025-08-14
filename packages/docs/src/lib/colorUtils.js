// Color conversion utilities for the theme generator

import { oklch as culoriOklch, formatHex, parseHex } from 'culori'

export function hexToOklch(hex) {
  const color = culoriOklch(parseHex(hex))
  if (!color) return ''
  // Format: oklch(65% 0.2 15)
  return `oklch(${Math.round(color.l * 100)}% ${color.c.toFixed(3)} ${Math.round(color.h)})`
}

export function oklchToHex(oklchStr) {
  const match = oklchStr.match(/oklch\(([^%]+)%\s+([0-9.]+)\s+([0-9.]+)\)/)
  if (!match) return '#000000'
  const [, l, c, h] = match
  const color = { mode: 'oklch', l: parseFloat(l) / 100, c: parseFloat(c), h: parseFloat(h) }
  return formatHex(color)
}

export function validateHex(hex) {
  return /^#[0-9A-F]{6}$/i.test(hex)
}

export function validateOklch(oklch) {
  return /^oklch\([^)]+\)$/.test(oklch)
}

export function isValidColor(color) {
  return validateHex(color) || validateOklch(color) || color.startsWith('oklch(')
}

// Helper function to convert any color format to OKLCH
export function toOklch(color) {
  if (color.startsWith('oklch(')) {
    return color
  }
  if (validateHex(color)) {
    return hexToOklch(color)
  }
  return color
}

// Helper function to convert any color format to hex
export function toHex(color) {
  if (validateHex(color)) {
    return color
  }
  if (color.startsWith('oklch(')) {
    return oklchToHex(color)
  }
  return color
} 