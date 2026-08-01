---
title: Use daisyUI with Stimulus
desc: How to install and use daisyUI with Stimulus
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> :INFO:
>
> Stimulus does not handle CSS, so daisyUI is installed the same way as in any other project.  
> If you use Rails, follow the [Rails install guide](/docs/install/rails/) instead, because Stimulus already comes with Rails.

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

Load Stimulus from a CDN and start the application.

```html:public/index.html
<script type="module">
  import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
  window.Stimulus = Application.start()
</script>
```

If you use a bundler, install `@hotwired/stimulus` with npm and import it from the package name instead.

Now you can use daisyUI class names!

```html:public/index.html
<button class="btn btn-primary">Hello daisyUI!</button>
```
