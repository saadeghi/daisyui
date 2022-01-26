---
title: Install daisyUI as WindiCSS plugin
desc: 
thumbnail: https://api.lorem.space/image/album?w=500&h=500&hash=500B67FB
published: true
---

<div class="max-w-3xl alert alert-warning">
  <div class="items-center flex-1 gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
    <label>
      <div class="font-bold">
        Experimental
      </div>
      <div class="text-sm">
        WindiCSS generates plugin styles differently. <br/>There might be some bugs.
      </div>
    </label>
  </div>
</div>

You need [Node.js](https://nodejs.org/en/download/) and [WindiCSS](https://windicss.org/guide/installation.html) installed.

1. Install daisyUI:
  ```
  npm i daisyui
  ```
1. Then add daisyUI to your `windi.config.js` files:
  ```js
  const { transform } = require('windicss/helpers')
  module.exports = {
    plugins: [
      transform('daisyui'),
    ],
  }
  ```