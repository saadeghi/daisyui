import { plugin } from './plugin.js';
import toggle from './js/components/toggle.js';

export default {
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addComponents({
        ...toggle
      });
    })
  ],
};
