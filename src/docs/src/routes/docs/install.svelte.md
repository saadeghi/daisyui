---
title: Install daisyUI as Tailwind CSS plugin
desc: How to install daisyUI as a Tailwind CSS plugin?
published: true
---

<script>
  import InstallTabs from "@components/InstallTabs.svelte"
</script>

<InstallTabs />

You need [Node.js](https://nodejs.org/en/download/) and [Tailwind CSS](https://tailwindcss.com/docs/installation) installed.

1. Install daisyUI:

```
npm i daisyui
```

2. Then add daisyUI to your `tailwind.config.js` files:

```js
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```
