const colorValues = require('./color-values')

let colorObject = {
  "transparent": "transparent",
  "current": "currentColor",
}

for (const [key, item] of Object.entries(colorValues)) {
  colorObject[key] = ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(--`+ item['name'] +`) / ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `hsla(var(--`+ item['name'] +`) / var(${opacityVariable}, 1))`
    }
    return `hsl(var(--`+ item['name'] +`))`
  }
}

module.exports = colorObject