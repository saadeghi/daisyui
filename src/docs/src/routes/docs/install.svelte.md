---
title: Install daisyUI as Tailwind CSS plugin
desc: How to install daisyUI as a Tailwind CSS plugin?
published: true
---

<script>
  import InstallTabs from "@components/InstallTabs.svelte"
  import { exampleRepos } from "@src/lib/data.js"
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

## daisyUI example repositories

See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.

<div class="not-prose grid grid-cols-5 my-10 gap-6">

{#each exampleRepos as { name, href, logos }}
<a class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1" {href} target="\_blank" rel="noopener">

<figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
{#if logos.length === 1}
<img class="w-full h-auto" src={logos[0]} alt={name}>
{:else}
<div class="grid w-full">
<img class="col-start-1 row-start-1 w-full h-auto" src={logos[0]} alt={name}>
<img class="col-start-1 row-start-1 w-3/5 -mr-4 -mb-4 place-self-end justify-self-end drop-shadow-md h-auto" src={logos[1]} alt={name}>
</div>
{/if}
</figure>
<div class="card-body text-center">
<span class="text-xs">{name}</span>
</div>
</a>
{/each}

</div>
