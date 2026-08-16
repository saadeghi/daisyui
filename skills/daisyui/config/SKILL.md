---
name: daisyui-config
description: Configuration options for daisyUI 5
---

## Configuration

daisyUI 5 configuration documentation: https://daisyui.com/docs/config/

daisyUI with no configuration:

```css
@plugin "daisyui";
```

daisyUI configuration with only the `light` theme:

```css
@plugin "daisyui" {
  themes: light --default;
}
```

daisyUI with all default settings:

```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
  root: ":root";
  include: ;
  exclude: ;
  prefix: ;
  logs: true;
}
```
Example configuration:
This configuration enables all built-in themes. The `bumblebee` theme is the default theme. The `synthwave` theme is the `prefersdark` theme, which is the default dark mode.
To use another enabled theme, add `data-theme="THEME_NAME"` to the `<html>` element.
The configuration excludes the root scrollbar gutter. It uses the `daisy-` prefix for all daisyUI classes and disables console logs.
```css
@plugin "daisyui" {
  themes: light, dark, cupcake, bumblebee --default, emerald, corporate, synthwave --prefersdark, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, caramellatte, abyss, silk;
  root: ":root";
  include: ;
  exclude: rootscrollgutter, checkbox;
  prefix: daisy-;
  logs: false;
}
```
