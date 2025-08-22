---
title: Install duskmoonUI for Lit
desc: How to install Tailwind CSS and duskmoonUI in a Lit + Vite project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Vite project

Create a new Vite project in the current directory

```sh:Terminal
npm create vite@latest ./ -- --template lit
```

### 2. Install Tailwind CSS and duskmoonUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest duskmoonui@latest
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

Put Tailwind CSS and duskmoonUI in your CSS file (and remove old styles)
  
```postcss:src/index.css
@import "tailwindcss";
@plugin "duskmoonui";
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
    return html`<button class="btn">duskmoonUI button</button> `;
  }
}

window.customElements.define("my-element", MyElement);
```

Now you can use duskmoonUI class names!
