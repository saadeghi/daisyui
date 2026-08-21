---
name: daisyui-usage
description: Usage rules that you must use with daisyUI 5
---

## daisyUI 5 usage rules
1. To style an HTML element, add daisyUI class names to it. Add the necessary component class name. Also add the applicable part and modifier class names.
2. If the current daisyUI classes cannot make a necessary change, use Tailwind CSS utility classes. For example, `btn px-10` sets custom horizontal padding on a `btn`.
3. If CSS specificity prevents a change to a daisyUI style, add `!` to the end of the Tailwind utility. For example, `btn bg-red-500!` overrides the background color of a `btn`. Use this method only if other methods do not work. Do not use it frequently.
4. If daisyUI does not have an applicable component, make a component with Tailwind CSS utilities.
5. When you use Tailwind CSS `flex` or `grid` for a layout, add responsive utility prefixes.
6. Use only current daisyUI class names or Tailwind CSS utility classes.
7. If custom CSS is not necessary, do not write it. If possible, use daisyUI class names or Tailwind CSS utility classes.
8. If you need placeholder images, use https://picsum.photos/200/300 with the necessary dimensions.
9. If a custom font is not necessary, do not add one.
10. If `bg-base-100 text-base-content` is not necessary, do not add it to the body.
11. For design decisions, use the methods in the Refactoring UI book.
12. If the user does not request a variant or color, use the default variant. For example, use `btn` for a button. If the user does not request that variant, do not use `btn btn-primary`.

Each daisyUI 5 class name is in one of these categories. These category names are for reference only. Do not use them in code.
- `component`: The necessary component class.
- `part`: A child part of a component.
- `style`: Sets a specified style on a component or part.
- `behavior`: Changes the behavior of a component or part.
- `color`: Sets a specified color on a component or part.
- `size`: Sets a specified size on a component or part.
- `placement`: Sets a specified position for a component or part.
- `direction`: Sets a specified direction for a component or part.
- `modifier`: Changes the component or part in a specified way.
- `variant`: A prefix for a utility class that applies styles in specified conditions. The syntax is `variant:utility-class`.

## Change a component in CSS

Use the Tailwind `@utility` directive to change a daisyUI component globally:

```css
@utility btn {
  @apply rounded-full;
}
```

## daisyUI utilities and variables

- You can use semantic colors with Tailwind color utilities and opacity modifiers. Examples are `bg-primary`, `border-base-300`, and `text-base-content/60`.
- `rounded-box`, `rounded-field`, and `rounded-selector` use the radius tokens of the active theme.
- `glass` applies the daisyUI glass effect.
- Some components supply CSS variables for component-specific changes. Countdown uses `--value` and `--digits`. Radial progress uses `--size` and `--thickness`.

## Base modules

daisyUI includes the `properties`, `rootcolor`, `scrollbar`, `rootscrolllock`, `rootscrollgutter`, and `svg` base modules. To exclude a module from the plugin configuration, use its module name:

```css
@plugin "daisyui" {
  exclude: rootscrollgutter;
}
```

Use `include` or `exclude` for library modules. For visual changes, use Tailwind utilities or `@utility`.
