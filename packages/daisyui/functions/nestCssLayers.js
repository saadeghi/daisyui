const appendRule = (styles, selector, rule) => {
  const currentRule = styles[selector]

  if (currentRule === undefined) {
    styles[selector] = rule
    return
  }

  styles[selector] = Array.isArray(currentRule) ? [...currentRule, rule] : [currentRule, rule]
}

const wrapWithAtRules = (rule, atRules) =>
  atRules.reduceRight((wrappedRule, atRule) => ({ [atRule]: wrappedRule }), rule)

const moveLayerRules = (styles, layerValue, atRules) => {
  const layerBlocks = Array.isArray(layerValue) ? layerValue : [layerValue]

  for (const layerBlock of layerBlocks) {
    for (const [key, value] of Object.entries(layerBlock)) {
      if (key.startsWith("@")) {
        moveLayerRules(styles, value, [...atRules, key])
        continue
      }

      appendRule(styles, key, wrapWithAtRules(value, atRules))
    }
  }
}

export const nestCssLayers = (styles) => {
  const nestedStyles = {}

  for (const [key, value] of Object.entries(styles)) {
    if (key.startsWith("@layer ")) {
      moveLayerRules(nestedStyles, value, [key])
      continue
    }

    appendRule(nestedStyles, key, value)
  }

  return nestedStyles
}
