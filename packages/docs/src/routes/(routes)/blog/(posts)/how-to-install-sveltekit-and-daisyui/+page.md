---
title: How to install SvelteKit with daisyUI?
desc: SvelteKit is a meta framework for building web applications. It is based on Svelte, a compiler that turns your Svelte components into fast and efficient JavaScript.
published: true
date: 2023-11-25
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/install-sveltekit-daisyui.webp
tags:
  - Frameworks
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

The biggest advantage of using Svelte, aside from speed and developer experience, is that it's a disappearing framework. It doesn't add any runtime library to your app, so you would only ship the code that you actually use.

If you haven't used Svelte before, You would be surprised how easy it is to learn compared to other frameworks.

## How to install SvelteKit?

1. To start new [SvelteKit](https://kit.svelte.dev/) project, you can use the following command:

```
npm create svelte@latest my-app
```

It asks you a few questions.
Let's pick `Skeleton project`:

```
┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ○ SvelteKit demo app
│  ● Skeleton project (Barebones scaffolding for your new SvelteKit app)
│  ○ Library project
└
```

2. After the setup is done, go to the project directory and install dependencies and start the development server:

```
cd my-app
npm install
npm run dev -- --open
```

It opens a new browser tab at `http://localhost:5173/` and you can see `Welcome to SvelteKit` message!

That's it! You have a new SvelteKit project.

## How to add Tailwind CSS and daisyUI to SvelteKit?

1. Install Tailwind CSS, PostCSS, Autoprefixer and daisyUI,
   Then generate tailwind.config.js and postcss.config.js files:

```
npm install -D tailwindcss postcss autoprefixer daisyui
npx tailwindcss init -p
```

2. Edit `tailwind.config.js` file. Add `content` and `plugins` to it:

```diff
/** @type {import('tailwindcss').Config} */
export default {
- content: [],
+ content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
  },
- plugins: [],
+ plugins: [require('daisyui')],
}
```

3. Add the following lines to `svelte.config.js` file:

```diff
import adapter from '@sveltejs/adapter-auto';
+import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
+ preprocess: vitePreprocess(),
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter()
  }
};

export default config;
```

4. Create a new `src/routes/+layout.svelte` file and import `tailwindcss/tailwind.css` in it using this command

```sh
echo '
<script>
  import "tailwindcss/tailwind.css";
</script>

<slot />
' > src/routes/+layout.svelte
```

## How to use daisyUI components in SvelteKit?

Add a daisyUI button to `src/routes/+page.svelte` file:

```diff
 <h1>Welcome to SvelteKit</h1>
 <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
+<button class="btn btn-primary">Hello daisyUI</button>
```

Run the development server and see the button with daisyUI styles!

```
npm run dev -- --open
```

Easy, right?

Explore all the [daisyUI components](https://daisyui.com/components/) you can use in your project,
And also check out the [SvelteKit docs](https://kit.svelte.dev/) to learn more about SvelteKit.
