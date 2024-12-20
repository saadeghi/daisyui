---
title: Config
desc: How to change the default configuration of daisyUI?
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

daisyUI can be configured from your CSS file.  

Replace the semicolon `;` after `@plugin "daisyui"` with brackets `{}` and add the configuration inside the brackets.

```diff:app.css
- @plugin "daisyui";
+ @plugin "daisyui" {
+ }
```

Default config:

```css:app.css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
  root: ":root";
  include: ;
  exclude: ;
  prefix: ;
  logs: true;
}
```

## theme

| Default value | Type | Description |
|--|--|--|
| `light --default, dark --prefersdark` | string or comma separated list | List of themes to enable. Use `--default` flag to set a default theme. Use `--prefersdark` flag to set a default theme for dark mode. |

```css:Example
@plugin "daisyui" {
  themes: nord --default, abyss --prefersdark, cupcake, dracula;
}
```
In this example, we have 4 themes: `nord`, `abyss`, `cupcake`, and `dracula`. nord is the default theme, abyss is the default theme for dark mode, and cupcake and dracula are available to use with `data-theme="cupcake"` and `data-theme="dracula"`.

## root

| Default value | Type | Description |
|--|--|--|
| `":root"` | string | The CSS selector to receive the CSS variables. |

```css:Example
@plugin "daisyui" {
  root: "#my-app";
}
```
In this example, we set the CSS variables on `#my-app` instead of `:root`. This way all daisyUI global CSS variables will be scoped to `#my-app`.  
This is useful to use daisyUI in a scoped environment like a web component or a shadow DOM or a specific part of the page.

## include

| Default value | Type | Description |
|--|--|--|
| | comma separated list | List of components to include. |

```css:Example
@plugin "daisyui" {
  include: button, input, select;
}
```
In this example, we only include the button, input, and select components. All other styles of daisyUI library will be excluded.

## exclude

| Default value | Type | Description |
|--|--|--|
| | comma separated list | List of components to exclude. |

```css:Example
@plugin "daisyui" {
  exclude: checkbox, footer, rootscrollgutter;
}
```
In this example, we exclude the checkbox and footer components and the rootscrollgutter base style. All other parts of daisyUI will be available to use.

## prefix

| Default value | Type | Description |
|--|--|--|
| `""` | string | Prefix for all daisyUI classes. |

```css:Example
@plugin "daisyui" {
  prefix: "d-";
}
```
In this example, all daisyUI classes will be prefixed with `d-`. For example, `btn` will be `d-btn`.

## logs
  
| Default value | Type | Description |
|--|--|--|
| `true` | boolean | Enable or disable logs. |

```css:Example
@plugin "daisyui" {
  logs: false;
}
```
In this example, we disable the logs of daisyUI. This is useful if you want to clean up the console output.
