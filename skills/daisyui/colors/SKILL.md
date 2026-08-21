---
name: daisyui-colors
description: Color rules that you must use with daisyUI 5
---

## daisyUI 5 colors

### daisyUI color names
- `primary`: The main brand color.
- `primary-content`: Foreground content color for use on `primary`.
- `secondary`: An optional secondary brand color.
- `secondary-content`: Foreground content color for use on `secondary`.
- `accent`: An optional accent brand color.
- `accent-content`: Foreground content color for use on `accent`.
- `neutral`: A dark neutral color for UI areas that do not use saturated colors.
- `neutral-content`: Foreground content color for use on `neutral`.
- `base-100`: The page base-surface color for blank backgrounds.
- `base-200`: A darker base shade that gives elevation.
- `base-300`: A still darker base shade that gives more elevation.
- `base-content`: Foreground content color for use on a base color.
- `info`: Color for information and help messages.
- `info-content`: Foreground content color for use on `info`.
- `success`: Color for success and safe-state messages.
- `success-content`: Foreground content color for use on `success`.
- `warning`: Color for warning and caution messages.
- `warning-content`: Foreground content color for use on `warning`.
- `error`: Color for error, danger, and destructive-action messages.
- `error-content`: Foreground content color for use on `error`.

### daisyUI color rules
1. daisyUI adds semantic color names to the Tailwind CSS colors.
2. Use daisyUI color names in utility classes as you use other Tailwind CSS color names. For example, `bg-primary` uses the primary color for the background.
3. The value of each daisyUI color name is a variable. Thus, the color can change with the theme.
4. Do not use `dark:` with daisyUI color names.
5. If possible, use only daisyUI color names. This lets colors change automatically with the theme.
6. If you use a Tailwind CSS color name such as `red-500`, its color stays the same in all themes.
7. If you use a daisyUI color name such as `primary`, its color changes with the theme.
8. Avoid Tailwind CSS color names for text. For example, `text-gray-800` on `bg-base-100` becomes unreadable in a dark theme because `bg-base-100` is dark.
9. `*-content` colors must have clear contrast with their related colors.
10. Use `base-*` colors for most of the page. Use the default variant for all elements. Use `primary` only for the most important element on the page. Use it only once.
11. In rare cases, you can use a Tailwind CSS color if content must keep the same color in all themes. For example, you can use `text-red-500` instead of `text-error`. For an SVG icon or chart, a fixed color can be necessary.

### Enable and apply themes

The default configuration enables `light` and `dark`. In the daisyUI plugin, select specified themes, all themes, or no built-in themes:

```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake;
}
```

- Use `themes: all;` to enable all built-in themes.
- Use `themes: false;` to disable all built-in themes. Usually, do this before you define only custom themes.
- Add `data-theme="THEME_NAME"` to `<html>` or a nested element. You can nest themes with no depth limit.

```html
<html data-theme="dark">
  <section data-theme="light">
    <div data-theme="retro">Nested theme</div>
  </section>
</html>
```

### daisyUI custom theme with custom colors
A CSS file that contains Tailwind CSS, daisyUI, and a custom daisyUI theme has this structure:
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

  --size-selector: 0.25rem; /* base size of selectors (checkbox, toggle, badge). Value must be 0.25rem unless we intentionally want bigger selectors. If so it can be 0.28125 or 0.3125. If we intentionally want smaller selectors, it can be 0.21875 or 0.1875 */
  --size-field: 0.25rem; /* base size of fields (button, input, select, tab). Value must be 0.25rem unless we intentionally want bigger fields. If so it can be 0.28125 or 0.3125. If we intentionally want smaller fields, it can be 0.21875 or 0.1875 */

  --border: 1px; /* border size. Value must be 1px unless we intentionally want thicker borders. If so it can be 1.5px or 2px. If we intentionally want thinner borders, it can be 0.5px */

  --depth: 1; /* only 0 or 1 - Adds a shadow and subtle 3D depth effect to components */
  --noise: 0; /* only 0 or 1 - Adds a subtle noise (grain) effect to components */
}
```
#### Rules
- You must include all CSS variables in the example.
- Colors can use OKLCH, hex, or another format.
- If you generate a custom theme, do not include the comments from the example. Give only the code.

Optional: Use the visual tool at https://daisyui.com/theme-generator/ to make a custom theme.

### Change a built-in theme

Use the built-in theme name. Change only the necessary values. daisyUI inherits the other values:

```css
@plugin "daisyui/theme" {
  name: "light";
  default: true;
  --color-primary: blue;
  --color-secondary: teal;
}
```

For a custom CDN theme, define the same variables in a selector. The selector must match the selected `data-theme` and theme controller:

```css
:root:has(input.theme-controller[value=mytheme]:checked),
[data-theme="mytheme"] {
  color-scheme: light;
  --color-primary: oklch(55% 0.3 240);
  /* define the remaining custom-theme variables */
}
```

To make the Tailwind `dark:` variant follow one or more daisyUI themes, define a custom variant:

```css
@custom-variant dark (&:where([data-theme=night], [data-theme=night] *));
```
