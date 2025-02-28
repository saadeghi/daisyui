---
title: Install daisyUI for Laravel
desc: How to install Tailwind CSS and daisyUI in a Laravel project
---

### 1. Create a new Laravel project

Install PHP, Composer and Laravel Installer according to the [official Laravel documentation](https://laravel.com/docs/11.x/installation#creating-a-laravel-project)

Create a new Laravel project

```sh:Terminal
laravel new my-app
cd my-app
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```js:vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
Add the template files you want as source. [Learn more about Tailwind CSS `@source` directive](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources).
  
```postcss:resources/css/app.css
@import "tailwindcss";
@source "../views";
@plugin "daisyui";
```

### 3. Run your project

Run your Laravel project

```sh:Terminal
php artisan serve
```
And on another terminal tab, run Vite

```sh:Terminal
npm run dev
```

Now you can use daisyUI class names!
