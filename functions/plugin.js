const createPlugin = (handler, config) => {
  return { handler: handler, config: config }
}
createPlugin.withOptions = (handlerFn, configFn = () => ({})) => {
  const optionsFunction = (options) => {
    return { handler: handlerFn(options), config: configFn(options) }
  }
  return (optionsFunction.__isOptionsFunction = true), optionsFunction
}
export const plugin = createPlugin
