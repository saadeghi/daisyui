---
title: Use duskmoonUI with HTMX
desc: How to install and use duskmoonUI with HTMX
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> :INFO:
>
> This guide uses duskmoonUI as a Node.js dependency. If you don't want to use Node.js, try the [CDN version of duskmoonUI](/docs/cdn/).

### 1. Install

Initialize a new Node project in the current directory using `npm init -y` if it's not a Node project already.

Install Tailwind CSS CLI and duskmoonUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/cli@latest duskmoonui@latest
```

### 2. Add Tailwind CSS and duskmoonUI

Add Tailwind CSS and duskmoonUI to your CSS file.
Address your HTML and other markup files in the `source` function.
  
```postcss:app.css
@import "tailwindcss" source(none);
@source "./public/*.{html,js}";
@plugin "duskmoonui";
```

### 3. Build CSS

Add a script to your package.json to build the CSS.

```json:package.json
{
  "scripts": {
    "build:css": "npx @tailwindcss/cli -i app.css -o public/output.css"
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

Now you can use duskmoonUI class names!
