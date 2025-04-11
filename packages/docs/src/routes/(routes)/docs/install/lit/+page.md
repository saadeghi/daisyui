---
title: Install daisyUI for Lit
desc: How to install Tailwind CSS and daisyUI in a Lit + Vite project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Vite project

Create a new Vite project in the current directory

```sh:Terminal
npm create vite@latest ./ -- --template lit
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```js:vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
});
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:src/index.css
@import "tailwindcss";
@plugin "daisyui";
```

### 3. Make the CSS available for shadow DOM elements

Put this code in `src/my-element.js` file and remove the old code
```js:src/my-element.js
import { LitElement, html } from "lit";
import { unsafeCSS } from "lit";
import globalStyles from "./index.css?inline";

export class MyElement extends LitElement {
  static styles = [unsafeCSS(globalStyles)];
  render() {
    return html`<button class="btn">daisyUI button</button> `;
  }
}

window.customElements.define("my-element", MyElement);
```

Now you can use daisyUI class names!
