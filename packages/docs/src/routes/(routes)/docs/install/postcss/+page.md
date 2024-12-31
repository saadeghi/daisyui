---
title: Install daisyUI for PostCSS
desc: How to install Tailwind CSS and daisyUI in PostCSS
---

### 1. Install

```:Terminal
npm i postcss postcss-cli tailwindcss@next @tailwindcss/postcss@next daisyui@beta
```

### 2. Add Tailwind CSS and daisyUI

Create a postcss.config.mjs file and add Tailwind CSS to it

```js:postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
export default config;
```

Add Tailwind and daisyUI to your CSS file.  
Address your HTML and other markup files in the `source` function.
  
```postcss:app.css
@import "tailwindcss" source("./public/*.{html,js}");
@plugin "daisyui";
```

### 3. Build CSS

Add a script to your package.json to build the CSS.

```json:package.json
{
  "scripts": {
    "build:css": "postcss app.css -o public/output.css"
  },
}
```

Run the script to build the CSS file

```:Terminal
npm run build:css
```
