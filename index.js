module.exports = ({ addComponents, config }) => {
  let fileName = 'styled'
  let postfix = ''
  if (config('daisyui.styled') === false) {
    fileName = 'base'
  }
  if (config('daisyui.rtl') === true) {
    postfix = '.rtl'
  }
  addComponents(require("./dist/"+ fileName + postfix +".js"))
  if (config('daisyui.themes') === true) {
    addComponents(require("./dist/themes.js"))
  }
}
