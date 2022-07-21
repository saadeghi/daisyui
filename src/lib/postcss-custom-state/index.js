const Tokenizer = require('css-selector-tokenizer');
const { findIndices, deepCopy } = require("./utils");

function buildCustomStateSelector(node, state, indices) {
  const nodeCopy = deepCopy(node);

  indices.forEach((index) => {
    const customState = state[node.nodes[index].name];
    const parsedCustomState = Tokenizer.parse(customState)
    nodeCopy.nodes[index] = parsedCustomState.nodes[0].nodes[0];
  })

  return nodeCopy;
}

function iterateSelectorNodes(selector, options) {
  const { state } = options;

  const nodes = [];
  // Look through all nodes and look for selectors
  selector.nodes.forEach((node) => {
    // Keep the current one, no modification
    nodes.push(node);
    if (node.type === 'selector') {
      // Find selectors that have a pseudo-class and check if there is a matching custom state
      const indices = findIndices(node.nodes, ({type, name}) => type === 'pseudo-class' && state[name])
      if (indices.length !== 0) {
        const newStateSelector = buildCustomStateSelector(node, state, indices);
        nodes.push(newStateSelector);
      }
    }
  })

  return {
    ...selector,
    nodes,
  };
}

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  const { state } = {
    state: {},
    ...opts,
  };

  if (typeof state !== 'object') {
    throw new Error('@postcss-custom-state: state options should be an Object.');
  }

  Object.values(state).forEach((customState) => {
    if (typeof customState !== 'string') {
      throw new Error('@postcss-prefix: state rule should be of type string.');
    }
  })

  if (Object.keys(state).length === 0) return;

  return {
    postcssPlugin: 'postcss-custom-state',
    Root(root) {
      root.walkRules((rule) => {
        const parsed = Tokenizer.parse(rule.selector);
        const selector = iterateSelectorNodes(parsed, { state });
        rule.selector = Tokenizer.stringify(selector);
      });
    },
  };
}

module.exports.postcss = true