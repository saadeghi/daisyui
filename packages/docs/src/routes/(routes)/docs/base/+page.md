---
title: daisyUI base style
desc: daisyUI adds a few base styles to your page.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

These are the tiny base styles that daisyUI adds to your page. These styles are less than a kilobyte in total, so you don't need to worry about the size

| Name | Description |
|--|--|
| `reset` | A lite version of the original Tailwind CSS reset file (preflight), only includes the parts that would affect daisyUI components. |
| `properties` | For necessary at-rules, like variable type for `--radialprogress` |
| `keyframes` | Animation keyframes |
| `rootcolor` | For `:root` and `[data-theme]` it sets background-color to `base-100` and text color to `base-content` |
| `scrollbar` | Sets scrollbar-color for `:root` |
| `rootscrolllock` | Sets `:root` to `overflow: hidden` when modal or drawer is open |
| `rootscrollgutter` | Adds a `scrollbar-gutter` to `:root` when modal or drawer is open, to avoid layout shift |

If you want to opt out of each part, you can do it by setting the [`exclude` config](/docs/config/#exclude).  
For example, to opt out of the scrollbar-gutter and style, scrollbar-color, you can exclude it like this:

```postcss
@plugin "daisyui" {
  exclude: rootscrollgutter, rootcolor;
}
```

Or if you're using CDN, you can disable it from your [customized CDN file](/docs/cdn/) if you need to.
