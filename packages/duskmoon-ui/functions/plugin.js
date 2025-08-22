export const plugin = {
  withOptions: (pluginFunction, configFunction = () => ({})) => {
    const optionsFunction = (options) => {
      const handler = pluginFunction(options)
      const config = configFunction(options)
      return { handler, config }
    }
    optionsFunction.__isOptionsFunction = true
    return optionsFunction
  },
}
