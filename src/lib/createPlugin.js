function createPlugin(plugin, config) {
  return {
    handler: plugin,
    config,
  }
}
createPlugin.withOptions = function (pluginFunction, configFunction = () => ({})) {
  const optionsFunction = function (options) {
    return {
      __options: options,
      handler: pluginFunction(options),
      config: configFunction(options),
    }
  }
  optionsFunction.__isOptionsFunction = true
  optionsFunction.__pluginFunction = pluginFunction
  optionsFunction.__configFunction = configFunction
  return optionsFunction
}

module.exports = createPlugin
