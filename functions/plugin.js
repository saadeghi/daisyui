export const plugin = {
  withOptions: (pluginFunction, configFunction = () => ({})) => {
    const optionsFunction = (options) => ({
      handler: pluginFunction(options),
      config: configFunction(options),
    });
    optionsFunction.__isOptionsFunction = true;
    return optionsFunction;
  }
};
