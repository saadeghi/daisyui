---
title: daisyUI base style
desc: daisyUI adds a few base styles to your page.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

These are the tiny base styles that daisyUI adds to your page. These styles are less than a kilobyte in total, so you don't need to worry about the size

| Name               | Description                                                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `properties`       | For necessary at-rules, like variable type for `--radialprogress`                                                                |
| `rootcolor`        | For `:root` and `[data-theme]` it sets background-color to `base-100` and text color to `base-content`                           |
| `scrollbar`        | Sets scrollbar-color for `:root`                                                                                                 |
| `rootscrolllock`   | Sets `:root` to `overflow: hidden` when modal or drawer is open                                                                  |
| `rootscrollgutter` | Adds a `scrollbar-gutter` to `:root` when modal or drawer is open, to avoid layout shift                                         |
| `svg`              | Contains small SVG images for noise filter, chat bubble tail mask, and tooltip tail mask. Can be disabled to use custom images.  |

If you want to opt out of each part, you can do it by setting the [`exclude` config](/docs/config/#exclude).  
For example, to opt out of the scrollbar-gutter and style, scrollbar-color, you can exclude it like this:

```postcss
@plugin "daisyui" {
  exclude: rootscrollgutter, rootcolor;
}
```

Or if you're using CDN, you can disable it from your [customized CDN file](/docs/cdn/) if you need to.

## Source code
- [properties](https://github.com/saadeghi/daisyui/blob/master/packages/daisyui/src/base/properties.css)
- [rootcolor](https://github.com/saadeghi/daisyui/blob/master/packages/daisyui/src/base/rootcolor.css)
- [scrollbar](https://github.com/saadeghi/daisyui/blob/master/packages/daisyui/src/base/scrollbar.css)
- [rootscrolllock](https://github.com/saadeghi/daisyui/blob/master/packages/daisyui/src/base/rootscrolllock.css)
- [rootscrollgutter](https://github.com/saadeghi/daisyui/blob/master/packages/daisyui/src/base/rootscrollgutter.css)
- [svg](https://github.com/saadeghi/daisyui/blob/master/packages/daisyui/src/base/svg.css)
