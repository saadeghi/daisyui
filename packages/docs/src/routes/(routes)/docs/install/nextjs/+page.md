---
title: Install duskmoonUI for Next.js
desc: How to install Tailwind CSS and duskmoonUI in a Next.js project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Next.js project

Create a new Next.js project in the current directory

```sh:Terminal
npm create next-app@latest ./
```

### 2. Install Tailwind CSS and duskmoonUI

```sh:Terminal
npm install tailwindcss @tailwindcss/postcss duskmoonui@latest
```

### 3. Add Tailwind CSS and duskmoonUI

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

Put Tailwind CSS and duskmoonUI in your CSS file (and remove old styles)
  
```postcss:app/globals.css
@import "tailwindcss";
@plugin "duskmoonui";
```

Now you can use duskmoonUI class names!
