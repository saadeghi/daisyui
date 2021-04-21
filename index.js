const base = require("./dist/base.js")
const baseRtl = require("./dist/base.rtl.js")
const styled = require("./dist/styled.js")
const styledRtl = require("./dist/styled.rtl.js")
const colors = require("./colors/index")

const mainFunction = ({ addBase, addComponents, addUtilities, config }) => {
  console.group();
  console.log('\x1b[35m%s\x1b[0m', '🌼 DaisyUI components library', '\x1b[0m', 'https://github.com/saadeghi/daisyui')

  // core
  // because rollupjs doesn't supprt dynamic require
  let file = styled
  if (config('daisyui.styled') === false && config('daisyui.rtl') === false) {
    console.log('\x1b[37m%s\x1b[0m', '🌼 base mode (components with basic style and no colors)')
    file = base
  } else if (config('daisyui.styled') === false && config('daisyui.rtl') === true) {
    console.log('\x1b[37m%s\x1b[0m', '🌼 base mode (components with basic style and no colors)')
    console.log('\x1b[37m%s\x1b[0m', '🌼 Direction: RTL')
    file = baseRtl
  } else if (config('daisyui.styled') === true && config('daisyui.rtl') === false) {
    console.log('\x1b[37m%s\x1b[0m', '🌼 styled mode')
    file = styled
  } else if (config('daisyui.styled') === true && config('daisyui.rtl') === true) {
    console.log('\x1b[37m%s\x1b[0m', '🌼 styled mode')
    console.log('\x1b[37m%s\x1b[0m', '🌼 Direction: RTL')
    file = styledRtl
  }
  addComponents(file)

  // inject @base style 
  if (config('daisyui.resets') !== false) {
    console.log('\x1b[36m%s\x1b[0m', '🌼 Adding resets')
    addBase(require('./dist/resets/general'))
  }

  // inject themes
  if (config('daisyui.themes') === true) {
    console.log('\x1b[36m%s\x1b[0m', '🌼 Adding themes')
    addComponents(require("./dist/themes.js"))
  }

  // inject @utilities style needed by components
  if (config('daisyui.utils') !== false) {
    console.log('\x1b[36m%s\x1b[0m', '🌼 Adding utilities')
    addUtilities(require('./dist/utilities/borderRadius'), { variants: ['responsive'] })
    addUtilities(require('./dist/utilities/fontSize'), { variants: ['responsive'] })
    addUtilities(require('./dist/utilities/glass'), { variants: ['responsive'] })
    addUtilities(require('./dist/utilities/sizing'), { variants: ['responsive'] })
    addUtilities(require('./dist/utilities/responsiveComponent'), { variants: ['responsive'] })
    addUtilities(require('./dist/utilities/typography'), { variants: ['responsive'] })
    addUtilities(require('./dist/utilities/variables'), { variants: ['responsive'] })
  }
  console.groupEnd();
}

// check if tailwindcss package exists
let isTailwindInstalled = false;
try {
  require.resolve('tailwindcss/plugin')
  isTailwindInstalled = true
} catch (er) {
  isTailwindInstalled = false
}
if (isTailwindInstalled) {
  module.exports = require("tailwindcss/plugin")(
    mainFunction, { theme: { extend: { colors } } }
  );
} else {
  module.exports = mainFunction;
}

