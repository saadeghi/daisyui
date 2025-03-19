---
title: Install Tailwind CSS and PostCSS and daisyUI with one command
desc: It can be annoying to install, setup, config and import all the dependencies. But now, you can do it with a single command.
published: true
date: 2023-10-6
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/npm-init-daisyui.webp
tags:
  - Guides
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## The manual way

Setting up Tailwind CSS and PostCSS and then adding daisyUI is not that hard at all, but it can be annoying to do the same process again and again on every project.

- Install Tailwind CSS and PostCSS and Autoprefixer
- Create tailwind.config.js file
- Create postcss.config.js file
- Add Tailwind CSS to postcss.config.js
- Install daisyUI
- Require daisyUI in tailwind.config.js

## An easier way ✨

<style>.embed-container { position: relative; padding-bottom: 68%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container rounded-box'><iframe title="npm init daisyui" src='https://www.youtube.com/embed/2b0KzuRZEX8' frameborder='0' allowfullscreen></iframe></div>

Now, you can do all of these with a single command:

```
npm init daisyui
```

## Benefits

- You don't need to worry about the config files and missing something
- You don't need to do the boring work of setup and config every time
- You can use it in existing projects or new projects
- You can choose to only install daisyUI
- You can choose to setup PostCSS and Autoprefixer or to Tailwind CSS CLI instead

## How to use it?

`npm init daisyui` gives you 3 options:

```
🌼 Initializing daisyUI…

? Do you want to setup Tailwind CSS first?
❯ No need. I already have Tailwind
  Yes. Setup Tailwind first
  Yes. Setup Tailwind first (with PostCSS)
```

If it's a new project of if you didn't have Tailwind CSS installed, you can choose the second or third option. Otherwise, you can choose the first option and it will skip the Tailwind CSS setup.

## What it does?

1. If you choose the first option

   - Installs daisyUI
   - Adds daiysUI to your tailwind.config.js file.

2. If you choose the second option

   - Installs Tailwind CSS
   - Creates tailwind.config.js file (`npx tailwindcss init`) with default config
   - Creates tailwind.css file with `@tailwind` directives in it
   - Installs daisyUI
   - Adds daiysUI to your tailwind.config.js file.

3. If you choose the third option
   - Installs Tailwind CSS
   - Creates tailwind.config.js file (`npx tailwindcss init`) with default config
   - Installs PostCSS and Autoprefixer
   - Creates postcss.config.js file
   - Adds Tailwind CSS and Autoprefixer to postcss.config.js
   - Installs daisyUI
   - Adds daiysUI to your tailwind.config.js file.

## Can I use it with Yarn or Bun?

Yes.

How to initiate Tailwind CSS and daisyUI with Yarn:

```
yarn create daisyui
```

How to initiate Tailwind CSS and daisyUI with Bun:

```
bun create daisyui
```

You can also use `create` alias instead of `init` in NPM:

```
npm create daisyui
```

## What it doesn't do?

1. It doesn't setup `content` config in `tailwind.config.js` file.
   You need to do it yourself because it depends on your file structure. You can read more about it in [Tailwind CSS docs](https://tailwindcss.com/docs/content-configuration).
2. It doesn't add your CSS file into your HTML.
   You need to do it yourself because it depends on your build tool or bundler.
   You may want to import it like this:

   ```js
   import "/output.css"
   ```

   Or put it in HTML like this:

   ```html
   <link href="/output.css" rel="stylesheet" />
   ```

3. It doesn't add any scripts in `package.json` file to build your CSS file.
   If you're using a bundler, it will be handled automatically. Otherwise you may need to add a script to `package.json` file to build your CSS file.
   Like this:

   ```
   npx tailwindcss -i tailwind.css -o output.css
   ```

   Or this:

   ```
   npx postcss-cli tailwind.css -o output.css
   ```

## Source code

It's open source of course and the source code is here:
https://github.com/daisyui/create-daisyui/

Let me know if you have any suggestions or feedback.
