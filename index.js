const base = require("./dist/base.js")
const baseRtl = require("./dist/base.rtl.js")
const styled = require("./dist/styled.js")
const styledRtl = require("./dist/styled.rtl.js")

module.exports = ({ addBase, addComponents, addUtilities, config }) => {

  // core
  // because rollupjs doesn't supprt dynamic require
  let file = styled
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

  // inject @base style 
  if (config('daisyui.resets') !== false) {
    addBase(require('./dist/resets/general'))
  }

  // inject themes
  if (config('daisyui.themes') === true) {
    addComponents(require("./dist/themes.js"))
  }

  // inject @utilities style needed by components
  if (config('daisyui.utils') !== false) {
    addUtilities(require('./dist/utilities/borderRadius'),{ variants: ['responsive'] })
    addUtilities(require('./dist/utilities/fontSize'),{ variants: ['responsive'] })
    addUtilities(require('./dist/utilities/glass'),{ variants: ['responsive'] })
    addUtilities(require('./dist/utilities/sizing'),{ variants: ['responsive'] })
    addUtilities(require('./dist/utilities/responsiveComponent'),{ variants: ['responsive'] })
    addUtilities(require('./dist/utilities/typography'),{ variants: ['responsive'] })
    addUtilities(require('./dist/utilities/variables'),{ variants: ['responsive'] })
  }
}
