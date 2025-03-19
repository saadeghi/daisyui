---
title: daisyUI 5 alpha is in development
desc: daisyUI 5 alpha is in development and I'm looking for your suggestions, feedbacks and ideas to make it better.
published: true
date: 2024-10-21
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/daisyui-alpha.webp
tags:
  - News
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

daisyUI 5 alpha is in development [[v5 branch](https://github.com/saadeghi/daisyui/tree/v5)]

- There's no docs or changelog yet
- Some components are not ready
- There are many bugs and any alpha version may break things
- If you use it in production a baby dolphin will die

## Try it

1. You can try this [Tailwind Play link](https://play.tailwindcss.com/iOzVcc4McC?file=css) which includes a big dump of components
2. Or you can try the new [daisyui.css](https://cdn.jsdelivr.net/npm/daisyui@alpha/daisyui.css) or the new [chunks.css](https://cdn.jsdelivr.net/npm/daisyui@alpha/chunks.css)!
3. Or if you're brave enough to try Tailwind CSS 4 alpha + daisyUI 5 alpha,
[Install Tailwind CSS 4 `alpha`](https://tailwindcss.com/blog/tailwindcss-v4-alpha) and then install daisyUI `alpha`
```
npm i -D daisyui@alpha
```
Your CSS file:
```css
@import "tailwindcss";
@plugin "daisyui";
```

You can use options

```css
@plugin "daisyui" {
  logs: true;
  root: ":root";
  include: button, badge, input, card;
  exclude: badge;
  themes: light --default, dark --prefersdark, cupcake;
}
```

You can add custom themes

```css
@plugin "daisyui/theme" {
  name: "my-theme";
  default: false;
  prefersdark: false;
  color-scheme: light;

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

  --radius-selector: .5rem;
  --radius-field: .5rem;
  --radius-box: .5rem;
  --border: 1px;
}
```

## Feedbacks needed

Here's how you can help:
- **Feedback**: What do you like/dislike about v5 so far?
- **Suggestions**: Any features or improvements you'd like to see in the stable version of daisyUI 5?
- **Bug Reports**: Found a new bug in v5 alpha? Let me know.

Put your feedbacks in the comments [here in the **GitHub Discussion**](https://github.com/saadeghi/daisyui/discussions/3246)

Thank you for your help! 🙏
