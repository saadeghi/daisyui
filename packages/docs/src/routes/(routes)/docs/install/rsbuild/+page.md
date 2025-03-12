---
title: Install daisyUI for Rsbuild
desc: How to install Tailwind CSS and daisyUI in a Rsbuild project
---

### 1. Create a new Rsbuild project

Create a new Rsbuild project in the current directory

```sh:Terminal
pnpm create rsbuild@latest
```

### 2. Install Tailwind CSS and daisyUI

Rsbuild has built-in support for PostCSS

```sh:Terminal
pnpm add tailwindcss @tailwindcss/postcss daisyui@latest
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

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:src/App.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!


[For example](https://github.com/zwlcoding/rsbuild-daisyui-example).
