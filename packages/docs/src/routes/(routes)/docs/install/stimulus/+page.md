---
title: Use daisyUI with Stimulus
desc: How to install and use daisyUI with Stimulus
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> :INFO:
>
> If you're using Rails, follow the [Rails install guide](/docs/install/rails/).

### 1. Install

Initialize a new Node project in the current directory using `npm init -y` if it's not a Node project already.

Install Tailwind CSS CLI and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/cli@latest daisyui@latest
```

### 2. Add Tailwind CSS and daisyUI

Add Tailwind CSS and daisyUI to your CSS file.

```postcss:app.css
@import "tailwindcss";
@plugin "daisyui";
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

### 4. Add Stimulus

Load Stimulus from CDN and start the application.

```html:public/index.html
<script type="module">
  import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
  window.Stimulus = Application.start()
</script>
```

Or if you're using a bundler:
  1. Install it with `npm i @hotwired/stimulus`
  2. Import it like `import { Application } from "@hotwired/stimulus"`

Now you can use daisyUI class names!

```html:public/index.html
<button class="btn btn-primary">Hello daisyUI!</button>
```
