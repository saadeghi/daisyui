---
name: daisyui-colors
description: MANDATORY color usage rules for daisyUI 5
---

## daisyUI 5 colors

### daisyUI color names
- `primary`: Primary brand color, The main color of your brand
- `primary-content`: Foreground content color to use on primary color
- `secondary`: Secondary brand color, The optional, secondary color of your brand
- `secondary-content`: Foreground content color to use on secondary color
- `accent`: Accent brand color, The optional, accent color of your brand
- `accent-content`: Foreground content color to use on accent color
- `neutral`: Neutral dark color, For not-saturated parts of UI
- `neutral-content`: Foreground content color to use on neutral color
- `base-100`:-100 Base surface color of page, used for blank backgrounds
- `base-200`:-200 Base color, darker shade, to create elevations
- `base-300`:-300 Base color, even more darker shade, to create elevations
- `base-content`: Foreground content color to use on base color
- `info`: Info color, For informative/helpful messages
- `info-content`: Foreground content color to use on info color
- `success`: Success color, For success/safe messages
- `success-content`: Foreground content color to use on success color
- `warning`: Warning color, For warning/caution messages
- `warning-content`: Foreground content color to use on warning color
- `error`: Error color, For error/danger/destructive messages
- `error-content`: Foreground content color to use on error color

### daisyUI color rules
1. daisyUI adds semantic color names to Tailwind CSS colors
2. daisyUI color names can be used in utility classes, like other Tailwind CSS color names. For example, `bg-primary` will use the primary color for the background
3. daisyUI color names include variables as value so they can change based on the theme
4. There's no need to use `dark:` for daisyUI color names
5. Ideally only daisyUI color names should be used for colors so the colors can change automatically based on the theme
6. If a Tailwind CSS color name (like `red-500`) is used, it will be the same red color on all themes
7. If a daisyUI color name (like `primary`) is used, it will change color based on the theme
8. Using Tailwind CSS color names for text colors should be avoided because Tailwind CSS color `text-gray-800` on `bg-base-100` would be unreadable on a dark theme - because on dark theme, `bg-base-100` is a dark color
9. `*-content` colors should have a good contrast compared to their associated colors
10. Use `base-*` colors for majority of the page. Use the default variant for all elements. Use `primary` color once only, for the most important element on the page.

### daisyUI custom theme with custom colors
A CSS file with Tailwind CSS, daisyUI and a custom daisyUI theme looks like this:
```css
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "mytheme";
  default: true; /* set as default */
  prefersdark: false; /* set as default dark mode (prefers-color-scheme:dark) */
  color-scheme: light; /* color of browser-provided UI */

  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: oklch(20% 0.05 240);
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --color-secondary: oklch(70% 0.25 200);
  --color-secondary-content: oklch(98% 0.01 200);
  --color-accent: oklch(65% 0.25 160);
  --color-accent-content: oklch(98% 0.01 160);
  --color-neutral: oklch(50% 0.05 240);
  --color-neutral-content: oklch(98% 0.01 240);
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(65% 0.25 140);
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: oklch(65% 0.3 30);
  --color-error-content: oklch(98% 0.01 30);

  --radius-selector: 1rem; /* border radius of selectors (checkbox, toggle, badge) */
  --radius-field: 0.25rem; /* border radius of fields (button, input, select, tab) */
  --radius-box: 0.5rem; /* border radius of boxes (card, modal, alert) */
  /* preferred values for --radius-* : 0rem, 0.25rem, 0.5rem, 1rem, 2rem */

  --size-selector: 0.25rem; /* base size of selectors (checkbox, toggle, badge). Value must be 0.25rem unless we intentionally want bigger selectors. In so it can be 0.28125 or 0.3125. If we intentionally want smaller selectors, it can be 0.21875 or 0.1875 */
  --size-field: 0.25rem; /* base size of fields (button, input, select, tab). Value must be 0.25rem unless we intentionally want bigger fields. In so it can be 0.28125 or 0.3125. If we intentionally want smaller fields, it can be 0.21875 or 0.1875 */

  --border: 1px; /* border size. Value must be 1px unless we intentionally want thicker borders. In so it can be 1.5px or 2px. If we intentionally want thinner borders, it can be 0.5px */

  --depth: 1; /* only 0 or 1 – Adds a shadow and subtle 3D depth effect to components */
  --noise: 0; /* only 0 or 1 - Adds a subtle noise (grain) effect to components */
}
```
#### Rules
- All CSS variables above are required
- Colors can be OKLCH or hex or other formats
- If you're generating a custom theme, do not include the comments from the example above. Just provide the code.

People can use https://daisyui.com/theme-generator/ visual tool to create their own theme.
