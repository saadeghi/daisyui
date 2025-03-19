---
title: "Mary UI: Laravel blade components made with daisyUI"
desc: Mary UI is a collection of Laravel blade components made for Livewire 3 and styled around daisyUI and Tailwind CSS
published: true
date: 2023-9-13
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/mary-ui.webp
tags:
  - Frameworks
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## What is Mary UI?

[Mary UI](https://mary-ui.com/) is a collection of Laravel blade components made for Livewire 3.
These components are built on top of [daisyUI](https://daisyui.com/) and [Tailwind CSS](https://tailwindcss.com/).
If you're a Laravel developer and you're using Livewire, you'll love Mary UI because it makes it faster and easier to build web pages.

Mary UI does not ship any custom CSS and relies on daisyUI and Tailwind for out-of-box styling. You can customize most of components styles, by inline overriding daisyUI and Tailwind CSS classes.

## How does it look like?

Mary UI allows you to use daisyUI components in your Laravel blade files using Livewire syntax.

To make a form like this:
![Mary UI form](https://img.daisyui.com/images/blog/mary-ui-form.webp)
All you need would be these few lines:

```html
<x-form wire:submit="save">
  <x-input label="Name" wire:model="name" />
  <x-input
    label="Amount"
    wire:model="amount"
    prefix="USD"
    money
    hint="It submits an unmasked value" />
  <x-slot:actions>
    <x-button label="Cancel" />
    <x-button label="Click me!" class="btn-primary" type="submit" spinner="save" />
  </x-slot:actions>
</x-form>
```

## How to install Mary UI on a new Laravel project?

You can install Mary UI using composer:

```bash
composer require robsontenorio/mary
```

If it's a new Laravel project, you can complete the setup by running the following command:

```bash
php artisan mary:install
```

And start the dev server

```bash
yarn dev
```

Read more about [Mary UI installation](https://mary-ui.com/docs/installation).

## How to install Mary UI on existing Laravel project?

Install Mary UI using composer:

```bash
composer require robsontenorio/mary
```

If it's an existing Laravel project, Install daisyUI and Tailwind CSS and initialize Tailwind CSS config file:

```bash
yarn add -D tailwindcss daisyui@latest postcss autoprefixer && npx tailwindcss init -p
```

Change your tailwind.config.js file like this:

```js
export default {
  content: [
    // You will probably also need those lines
    "./resources/**/**/*.{js,blade.php}",
    "./app/View/Components/**/**/*.php",
    "./app/Livewire/**/**/*.php",

    // Add mary
    "./vendor/robsontenorio/mary/src/View/Components/**/*.php",
  ],

  // Add daisyUI
  plugins: [require("daisyui")],
}
```

Add Tailwind directives to `resources/css/app.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Setup Livewire default app template.

```bash
# It creates `views/components/layouts/app.blade.php`
php artisan livewire:layout
```

Then add `@vite` on default app template `views/components/layouts/app.blade.php`

```html
<head>
  ...
  <!-- This -->
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
  ...
</body>
```

Finally, start dev server.

```bash
yarn dev
```

That's it! You can now use Mary UI components in your blade files.

Read more about [Mary UI](https://mary-ui.com).
