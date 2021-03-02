let colorValues = {
  "primary"           : {name: "p", value: "259 94% 51%"},
  "primary-focus"     : {name: "pf", value: "259 94% 41%"},
  "primary-content"   : {name: "pc", value: "0 0% 100%"},

  "secondary"         : {name: "s", value: "314 100% 47%"},
  "secondary-focus"   : {name: "sf", value: "314 100% 37%"},
  "secondary-content" : {name: "sc", value: "0 0% 100%"},

  "accent"            : {name: "a", value: "174 60% 51%"},
  "accent-focus"      : {name: "af", value: "174 60% 41%"},
  "accent-content"    : {name: "ac", value: "0 0% 100%"},

  "neutral"           : {name: "n", value: "219 14% 28%"},
  "neutral-focus"     : {name: "nf", value: "221 39% 11%"},
  "neutral-content"   : {name: "nc", value: "0 0% 100%"},

  "base-100"          : {name: "b1", value: "0 0% 100%"},
  "base-200"          : {name: "b2", value: "220 14% 96%"},
  "base-300"          : {name: "b3", value: "228 14% 93%"},
  "base-content"      : {name: "bc", value: "219 14% 28%"},

  "info"              : {name: "in", value: "207 90% 54%"},
  "success"           : {name: "su", value: "174 100% 29%"},
  "warning"           : {name: "wa", value: "36 100% 50%"},
  "error"             : {name: "er", value: "14 100% 57%"},
}

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

module.exports = colorObject;