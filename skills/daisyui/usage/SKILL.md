---
name: daisyui-usage
description: MANDATORY usage rules for daisyUI 5
---

## daisyUI 5 usage rules
1. We can give styles to a HTML element by adding daisyUI class names to it. By adding a component class name, part class names (if there's any available for that component), and modifier class names (if there's any available for that component)
2. Components can be customized using Tailwind CSS utility classes if the customization is not possible using the existing daisyUI classes. For example `btn px-10` sets a custom horizontal padding to a `btn`
3. If customization of daisyUI styles using Tailwind CSS utility classes didn't work because of CSS specificity issues, you can use the `!` at the end of the Tailwind CSS utility class to override the existing styles. For example `btn bg-red-500!` sets a custom background color to a `btn` forcefully. This is a last resort solution and should be used sparingly
4. If a specific component or something similar to it doesn't exist in daisyUI, you can create your own component using Tailwind CSS utility
5. when using Tailwind CSS `flex` and `grid` for layout, it should be responsive using Tailwind CSS responsive utility prefixes.
6. Only allowed class names are existing daisyUI class names or Tailwind CSS utility classes.
7. Ideally, you won't need to write any custom CSS. Using daisyUI class names or Tailwind CSS utility classes is preferred.
8. Suggested - if you need placeholder images, use https://picsum.photos/200/300 with the size you want
9. Suggested - when designing, don't add a custom font unless it's necessary
10. Don't add `bg-base-100 text-base-content` to body unless it's necessary
11. For design decisions, use Refactoring UI book best practices
12. Always use the default variant of daisyUI components unless the user asked for a specific variant or color. For example when you need a button, do not use `btn btn-primary`, prefer `btn`, unless the user asked for a specific variant.

daisyUI 5 class names are one of the following categories. These type names are only for reference and are not used in the actual code
- `component`: the required component class
- `part`: a child part of a component
- `style`: sets a specific style to component or part
- `behavior`: changes the behavior of component or part
- `color`: sets a specific color to component or part
- `size`: sets a specific size to component or part
- `placement`: sets a specific placement to component or part
- `direction`: sets a specific direction to component or part
- `modifier`: modifies the component or part in a specific way
- `variant`: prefixes for utility classes that conditionally apply styles. syntax is `variant:utility-class`

## Customizing a component in CSS

Use Tailwind's `@utility` directive to customize a daisyUI component globally:

```css
@utility btn {
  @apply rounded-full;
}
```

## daisyUI utilities and variables

- Semantic colors work with Tailwind color utilities and opacity modifiers, for example `bg-primary`, `border-base-300`, and `text-base-content/60`.
- `rounded-box`, `rounded-field`, and `rounded-selector` use the active theme's radius tokens.
- `glass` applies the daisyUI glass effect.
- Components can expose CSS variables for component-specific customization. Examples include `--value` and `--digits` on countdown, and `--size` and `--thickness` on radial progress.

## Base modules

daisyUI includes the `properties`, `rootcolor`, `scrollbar`, `rootscrolllock`, `rootscrollgutter`, and `svg` base modules. Exclude an unwanted module from the plugin config by its module name:

```css
@plugin "daisyui" {
  exclude: rootscrollgutter;
}
```

Use `include` or `exclude` for library modules; use Tailwind utilities or `@utility` for visual customization.
