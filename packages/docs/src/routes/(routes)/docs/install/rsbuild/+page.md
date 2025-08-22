---
title: Install duskmoonUI for Rsbuild
desc: How to install Tailwind CSS and duskmoonUI in a Rsbuild project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Rsbuild project

Create a new Rsbuild project in the current directory

```sh:Terminal
npm create rsbuild -d ./
```

### 2. Install Tailwind CSS and duskmoonUI

Rsbuild has built-in support for PostCSS

```sh:Terminal
npm add tailwindcss @tailwindcss/postcss duskmoonui@latest
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

Put Tailwind CSS and duskmoonUI in your CSS file at `src/` (and remove old styles).
  
```postcss:src/App.css
@import "tailwindcss";
@plugin "duskmoonui";
```

Now you can use duskmoonUI class names!
