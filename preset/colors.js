let colorValues = {
  "default"           : {name: "d", value: "0 0% 100%"},
  "primary-lighten"   : {name: "p1", value: "259 94% 61%"},
  "primary"           : {name: "p2", value: "259 94% 51%"},
  "primary-darken"    : {name: "p3", value: "259 94% 41%"},
  "secondary-lighten" : {name: "s1", value: "314 100% 57%"},
  "secondary"         : {name: "s2", value: "314 100% 47%"},
  "secondary-darken"  : {name: "s3", value: "314 100% 37%"},
  "accent-lighten"    : {name: "a1", value: "174 60% 61%"},
  "accent"            : {name: "a2", value: "174 60% 51%"},
  "accent-darken"     : {name: "a3", value: "174 60% 41%"},
  "content-primary"   : {name: "cp", value: "0 0% 100%"},
  "content-secondary" : {name: "cs", value: "0 0% 100%"},
  "content-accent"    : {name: "ca", value: "0 0% 100%"},
  "content-100"       : {name: "c1", value: "220 14% 96%"},
  "content-200"       : {name: "c2", value: "228 14% 93%"},
  "content-300"       : {name: "c3", value: "220 15% 84%"},
  "content-400"       : {name: "c4", value: "218 14% 65%"},
  "content-500"       : {name: "c5", value: "220 14% 46%"},
  "content-600"       : {name: "c6", value: "220 14% 37%"},
  "content-700"       : {name: "c7", value: "219 14% 28%"},
  "content-800"       : {name: "c8", value: "222 13% 19%"},
  "content-900"       : {name: "c9", value: "223 14% 10%"},
  "info"              : {name: "in", value: "207 90% 54%"},
  "success"           : {name: "su", value: "174 100% 29%"},
  "warning"           : {name: "wa", value: "36 100% 50%"},
  "error"             : {name: "er", value: "14 100% 57%"},
}

let colorObject = {
  theme: {
    extend: {
      colors: {
        "transparent": "transparent",
      },
    },
  },
}

for (const [key, item] of Object.entries(colorValues)) {
  colorObject["theme"]["extend"]["colors"][key] = ({ opacityVariable, opacityValue }) => {
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