import { version } from './package.json';
import { pluginOptionsHandler } from './functions/pluginOptionsHandler.js';
import { plugin } from './functions/plugin.js';
import variables from './functions/variables.js';
import themesObject from './theme/object.js';
import imports from './imports';

export default plugin.withOptions(
  (options) => {
    return ({ addBase, addComponents, addUtilities }) => {
      const { include, exclude } = pluginOptionsHandler(options, addBase, themesObject, version);

      const shouldIncludeItem = (name) => {
        if (include && exclude) {
          return include.includes(name) && !exclude.includes(name);
        }
        if (include) {
          return include.includes(name);
        }
        if (exclude) {
          return !exclude.includes(name);
        }
        return true;
      };

      Object.entries(imports).forEach(([name, { item, category }]) => {
        if (!shouldIncludeItem(name)) return;

        if (category === 'base') {
          item({ addBase });
          return;
        }

        if (category === 'utilities') {
          item({ addUtilities });
          return;
        }

        item({ addComponents });
      });
    };
  },
  () => ({
    theme: {
      extend: variables
    }
  })
);
