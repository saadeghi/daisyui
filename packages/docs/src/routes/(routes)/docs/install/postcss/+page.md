---
title: Install daisyUI for PostCSS
desc: How to install Tailwind CSS and daisyUI in PostCSS
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Install

Initialize a new Node project in the current directory using `npm init -y` if it's not a Node project already.

Install PostCSS, Tailwind CSS, and daisyUI

```sh:Terminal
npm i postcss postcss-cli tailwindcss @tailwindcss/postcss daisyui@latest
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

Add Tailwind CSS and daisyUI to your CSS file.  
Address your HTML and other markup files in the `source` function.
  
```postcss:app.css
@import "tailwindcss" source(none);
@source "./public/*.{html,js}";
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

```sh:Terminal
npm run build:css
```
This command creates a `public/output.css` file with the compiled CSS. You can link this file to your HTML file.

```html:public/index.html
<link href="./output.css" rel="stylesheet">
```

Now you can use daisyUI class names!
