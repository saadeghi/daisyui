var daisyuiInfo = require('./package.json')
const colors = require("./colors/index")
const utilities = require('./dist/utilities')
const base = require('./dist/base')
const unstyled = require("./dist/unstyled")
const unstyledRtl = require("./dist/unstyled.rtl")
const styled = require("./dist/styled")
const styledRtl = require("./dist/styled.rtl")
const responsive = require('./dist/responsive')
const themes = require('./dist/themes')

const mainFunction = ({ addBase, addComponents, addUtilities, config }) => {
  let diasyuiIncludedItems = []
  let logs = false
  if (config('daisyui.logs') != false) {
    logs = true
  }
  if (logs) {
    console.log()
    console.log('\x1b[35m%s\x1b[0m', '🌼 DaisyUI components ' + daisyuiInfo.version, '\x1b[0m', daisyuiInfo.homepage)
    console.group()
  }

  // inject @base style 
  if (config('daisyui.base') != false) {
    addBase(base)
    diasyuiIncludedItems.push('base')
  }

  // core
  // because rollupjs doesn't supprt dynamic require
  let file = styled
  if (config('daisyui.styled') == false && config('daisyui.rtl') == false) {
    diasyuiIncludedItems.push('unstyled components')
    file = unstyled
  } else if (config('daisyui.styled') == false && config('daisyui.rtl') == true) {
    diasyuiIncludedItems.push('unstyled components')
    console.log('\x1b[36m%s\x1b[0m', ' Direction:', '\x1b[0m', 'RTL');
    file = unstyledRtl
  } else if (config('daisyui.styled') != false && config('daisyui.rtl') != true) {
    diasyuiIncludedItems.push('components')
    file = styled
  } else if (config('daisyui.styled') !== false && config('daisyui.rtl') == true) {
    diasyuiIncludedItems.push('components')
    console.log('\x1b[36m%s\x1b[0m', ' Direction:', '\x1b[0m', 'RTL');
    file = styledRtl
  }
  addComponents(file)


  // inject themes
  let includedThemesObj = new Object()
  let themesArray = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
  ]
  let ValidThemes = themesArray

  if (config('daisyui.themes') != false) {
    if (Array.isArray( config('daisyui.themes') )) {
      themesArray = config('daisyui.themes')
    }
    // if (themesArray.includes("dark")) {
    //   console.log(themesArray)
    //   themesArray = ['dark', ...themesArray.filter(item => item !== 'dark')]
    //   console.log(themesArray)
    // }
    
    themesArray.forEach((theme, index) => {
      try {
        if (index === 0) { // first theme as default
          includedThemesObj[':root'] = themes['[data-theme='+theme+']']
        }else if (index === 1) {
          if (themesArray[0] !== 'dark') {
            // auto dark
            includedThemesObj['@media (prefers-color-scheme: dark)'] = {':root': themes['[data-theme=dark]']}
          }
          // first theme with name
          includedThemesObj['[data-theme='+themesArray[0]+']'] = themes['[data-theme='+themesArray[0]+']']
          includedThemesObj['[data-theme='+theme+']'] = themes['[data-theme='+theme+']']
        }else{
          // the rest
          includedThemesObj['[data-theme='+theme+']'] = themes['[data-theme='+theme+']']
        }



      }
      catch (e) {
        console.log(`\n\n\x1b[33;1m! warning\x1b[0m - Invalid theme name in \x1b[34mtailwind.config.js\x1b[0m: \x1b[31m'${theme}'\x1b[0m`)
        console.log(`Only these theme names are valid:`)
        console.log(ValidThemes)
        console.log(`\n\n`)
      }

    });
    diasyuiIncludedItems.push('themes[' + themesArray.length + ']')
  }else{
    includedThemesObj[':root'] = themes['[data-theme=light]']
    diasyuiIncludedItems.push('default theme')
  }
  addBase(includedThemesObj)

  // inject @utilities style needed by components
  if (config('daisyui.utils') != false) {
    addUtilities(utilities, { variants: ['responsive'] })
    addUtilities(responsive, { variants: ['responsive'] })
    diasyuiIncludedItems.push('utilities')
  }
  if (logs) {
    console.log('\x1b[32m%s\x1b[0m', '✔︎ Including:', '\x1b[0m', '' + diasyuiIncludedItems.join(', '));
    if (isTailwindInstalled === false) {
      console.log(`\n\x1b[33;1m! warning\x1b[0m - unable to require \x1b[36mtailwindcss/plugin\x1b[0m
DaisyUI color are now only available for DaisyUI components.
If you want to use DaisyUI color as utility classes (like 'bg-primary')
you need to add this to your \x1b[34mtailwind.config.js\x1b[0m file:
───────────────────────────────────────
\x1b[34mmodule.exports = {
  \x1b[32mtheme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },\x1b[0m
\x1b[34m}\x1b[0m
───────────────────────────────────────  
      `)
    }
    console.log()
    console.groupEnd()
  }
}

// check if tailwindcss package exists
let isTailwindInstalled = false;
try {
  require.resolve('tailwindcss/plugin')
  isTailwindInstalled = true
} catch (er) {
  isTailwindInstalled = false
}
if (isTailwindInstalled !== false) {
  module.exports = require("tailwindcss/plugin")(
    mainFunction, { theme: { extend: { colors } } }
  );
} else {
  module.exports = mainFunction;
}
 
