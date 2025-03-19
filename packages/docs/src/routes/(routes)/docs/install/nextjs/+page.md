---
title: Install daisyUI for Next.js
desc: How to install Tailwind CSS and daisyUI in a Next.js project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Next.js project

Create a new Next.js project in the current directory

```sh:Terminal
npm create next-app@latest ./
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss @tailwindcss/postcss daisyui@latest
```

### 3. Add Tailwind CSS and daisyUI

Add Tailwind CSS to your PostCSS config file

```js:postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
export default config;
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:app/globals.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
