import { plugin } from '../functions/plugin.js';

export default plugin.withOptions(
  (options = {}) => {
    return ({ addBase }) => {
      const {
        name = 'custom-theme',
        default: isDefault = false,
        prefersDark = false,
        'color-scheme': colorScheme,
        ...themeTokens
      } = options;

      let selector = `[data-theme="${name}"]`;
      if (isDefault) {
        selector = `:root,${selector}`;
      }

      const baseStyles = {
        [selector]: {
          'color-scheme': colorScheme,
          ...themeTokens
        }
      };

      if (prefersDark) {
        addBase({
          '@media (prefers-color-scheme: dark)': {
            ':root': baseStyles[selector]
          }
        });
      }

      addBase(baseStyles);
    };
  }
);
