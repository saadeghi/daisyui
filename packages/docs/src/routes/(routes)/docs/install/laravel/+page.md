---
title: Install daisyUI for Laravel
desc: How to install Tailwind CSS and daisyUI in a Laravel project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Laravel project

Install PHP, Composer and Laravel Installer according to the [official Laravel documentation](https://laravel.com/docs/12.x/installation#creating-a-laravel-project)

Create a new Laravel project

```sh:Terminal
laravel new my-app
cd my-app
```

### 2. Install daisyUI

```sh:Terminal
npm i -D daisyui@latest
```

Add daisyUI in your CSS file

```diff:resources/css/app.css
@import "tailwindcss";
/* other stuff */

+ @plugin "daisyui";
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
