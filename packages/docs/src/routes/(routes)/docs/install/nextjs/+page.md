---
title: Install daisyUI for Next.js
desc: How to install Tailwind CSS and daisyUI in a Next.js project
---

### 1. Create a new Next.js project

```:Terminal
npx sv create
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss@next @tailwindcss/postcss@next daisyui@alpha
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

Put Tailwind and daisyUI to your CSS file
  
```postcss:app/globals.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
