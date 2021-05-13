const colorValues = require('./color-values')

let colorObject = {
  "transparent": "transparent",
  "current": "currentColor",
}

for (const [key, item] of Object.entries(colorValues)) {
  colorObject[key] = `hsla(var(--${item.name}, ${item.value}) / var(--tw-bg-opacity, 1))`
}

module.exports = colorObject
