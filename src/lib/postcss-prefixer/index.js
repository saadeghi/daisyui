const Tokenizer = require('css-selector-tokenizer');
const {
  parseAttrSelector,
  attrStringify,
  itMatchesOne,
} = require('./utils');

function prefixNode(node, prefix) {
  if (['class', 'id'].includes(node.type)) {
    return {
      ...node,
      name: `${prefix}${node.name}`,
    };
  }

  if (['attribute'].includes(node.type) && node.content) {
    const {
      type, operator, head, classes, foot,
    } = parseAttrSelector(node);

    if (!['class', 'id'].includes(type)) return node;

    return {
      ...node,
      content: attrStringify({
        type,
        operator,
        head,
        classes: classes.map((cls) => `${prefix}${cls}`),
        foot,
      }),
    }
  }

  return node;
}

function iterateSelectorNodes(selector, options) {
  const { prefix, ignore } = options;
  return {
    ...selector,
    nodes: selector.nodes.map((node) => {
      if (['selector', 'nested-pseudo-class'].includes(node.type)) {
        return iterateSelectorNodes(node, options);
      }

      if (itMatchesOne(ignore, Tokenizer.stringify(node))) return node;

      return prefixNode(node, prefix);
    }),
  };
}

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  const { prefix, ignore } = {
    prefix: '',
    ignore: [],
    ...opts,
  };

  if (typeof prefix !== 'string') {
    throw new Error('@postcss-prefix: prefix option should be of type string.');
  }

  if (!Array.isArray(ignore)) {
    throw new Error('@postcss-prefix: ignore options should be an Array.');
  }

  if (!prefix.length) return;

  return {
    postcssPlugin: 'postcss-prefixer',
    Root(root, postcss) {
      root.walkRules((rule) => {
        const parsed = Tokenizer.parse(rule.selector);
        const selector = iterateSelectorNodes(parsed, { prefix, ignore });

        rule.selector = Tokenizer.stringify(selector);
      });
    },
  };
}

module.exports.postcss = true
