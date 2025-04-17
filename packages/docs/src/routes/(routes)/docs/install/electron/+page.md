---
title: Install daisyUI for Electron
desc: How to install Tailwind CSS and daisyUI in a Electron project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Node project

Initialize a new Node project

> :INFO:
>
> `entry point` should be `main.js`

```sh:Terminal
mkdir myapp
cd myapp
npm init
```

Run this command to add the required scripts to your `package.json`

```sh:Terminal
npm pkg set scripts.start="electron ."
npm pkg set scripts.build:css="tailwindcss -i src/input.css -o public/output.css"
```

### 2. Install Electron, Tailwind CSS, and daisyUI

```sh:Terminal
npm install electron tailwindcss@latest @tailwindcss/cli@latest daisyui@latest
```

### 3. Create files

Create a `main.js` at the root of your project with the following content

```js:main.js
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow()
  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})
```

Create a `src/index.html` file with the following content

```html:src/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <link rel="stylesheet" type="text/css" href="../public/output.css">
  </head>
  <body>
    <button class="btn">Hello daisyUI</button>
  </body>
</html>
```

Create a `src/input.css` file with the following content

```postcss:src/input.css
@import "tailwindcss";
@plugin "daisyui";
```

### 3. Build the CSS and run the project

```sh:Terminal
npm run build:css
npm start
```

Now you can use daisyUI class names!
