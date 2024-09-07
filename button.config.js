import { plugin } from './plugin.js';
import button from './js/components/button.js';

export default {
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addComponents({
        ...button
      });
    })
  ],
};
