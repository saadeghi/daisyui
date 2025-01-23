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

```postcss:app.css
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

```postcss:Example
@plugin "daisyui" {
  themes: nord --default, abyss --prefersdark, cupcake, dracula;
}
```
In this example, we have 4 themes: `nord`, `abyss`, `cupcake`, and `dracula`. nord is the default theme, abyss is the default theme for dark mode, and cupcake and dracula are available to use with `data-theme="cupcake"` and `data-theme="dracula"`.

## root

| Default value | Type | Description |
|--|--|--|
| `":root"` | string | The CSS selector to receive the CSS variables. |

```postcss:Example
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

```postcss:Example
@plugin "daisyui" {
  include: button, input, select;
}
```
In this example, we only include the button, input, and select components. All other styles of daisyUI library will be excluded.  
[Here are the file names you can include or exclude](https://github.com/saadeghi/daisyui/tree/v5/packages/daisyui/src/components).

## exclude

| Default value | Type | Description |
|--|--|--|
| | comma separated list | List of components to exclude. |

```postcss:Example
@plugin "daisyui" {
  exclude: checkbox, footer, typography, glass, rootcolor, rootscrollgutter;
}
```
In this example, we exclude the the listed files. All other parts of daisyUI will be available to use. This is useful if you want to opt out of some parts of daisyUI, especially the base styles like `rootscrollgutter` Or if you want to mix daisyUI for some parts and another library for the rest.  
[Here are the file names you can include or exclude](https://github.com/saadeghi/daisyui/tree/v5/packages/daisyui/src/components).


## prefix

| Default value | Type | Description |
|--|--|--|
| `""` | string | Prefix for all daisyUI classes. |

```postcss:Example
@plugin "daisyui" {
  prefix: "d-";
}
```
In this example, all daisyUI classes will be prefixed with `d-`. For example, `btn` will be `d-btn`.

## logs
  
| Default value | Type | Description |
|--|--|--|
| `true` | boolean | Enable or disable logs. |

```postcss:Example
@plugin "daisyui" {
  logs: false;
}
```
In this example, we disable the logs of daisyUI. This is useful if you want to clean up the console output.
