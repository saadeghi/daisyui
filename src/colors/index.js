const colorValues = require('./colorNames')

let colorObject = {
  "transparent": "transparent",
  "current": "currentColor",
}

for (const [key, item] of Object.entries(colorValues)) {
  colorObject[key] = ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(`+ item +`))`
    }
    return `hsl(var(`+ item +`) / ${opacityValue})`
  }
}

module.exports = colorObject