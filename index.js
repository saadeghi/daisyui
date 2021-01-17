const themes = require("./dist/themes.js")
const base = require("./dist/base.js")
const baseRtl = require("./dist/base.rtl.js")
const styled = require("./dist/styled.js")
const styledRtl = require("./dist/styled.rtl.js")

module.exports = ({ addComponents, config }) => {
  // because rollupjs doesn't supprt dynamic require
  let file = ''
  if (config('daisyui.styled') === false && config('daisyui.rtl') === false) {
    file = base
  }else if(config('daisyui.styled') === false && config('daisyui.rtl') === true) {
    file = baseRtl
  }else if(config('daisyui.styled') === true && config('daisyui.rtl') === false) {
    file = styled
  }else if(config('daisyui.styled') === true && config('daisyui.rtl') === true) {
    file = styledRtl
  }
  addComponents(file)
  if (config('daisyui.themes') === true) {
    addComponents(themes)
  }
}
