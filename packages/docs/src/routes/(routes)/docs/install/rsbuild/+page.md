---
title: Install daisyUI for Rsbuild
desc: How to install Tailwind CSS and daisyUI in a Rsbuild project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Rsbuild project

Create a new Rsbuild project in the current directory

```sh:Terminal
npm create rsbuild -d ./
```

### 2. Install Tailwind CSS and daisyUI

Rsbuild has built-in support for PostCSS

```sh:Terminal
npm add tailwindcss @tailwindcss/postcss daisyui@latest
```

Create a postcss.config.mjs file and add Tailwind CSS to it

```js:postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
export default config;
```

Put Tailwind CSS and daisyUI in your CSS file at `src/` (and remove old styles).
  
```postcss:src/App.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
