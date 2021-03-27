const colorValues = require('./color-values')

let colorObject = {
  "transparent": "transparent",
}

for (const [key, item] of Object.entries(colorValues)) {
  colorObject[key] = ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(--`+ item['name'] +`, `+ item['value'] +`) / ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `hsla(var(--`+ item['name'] +`, `+ item['value'] +`) / var(${opacityVariable}, 1))`
    }
    return `hsl(var(--`+ item['name'] +`, `+ item['value']+ `))`
  }
}

module.exports = colorObject