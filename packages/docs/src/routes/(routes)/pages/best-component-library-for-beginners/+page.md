---
title: Best Component Library for Beginners
desc: Let's see why daisyUI is the best Tailwind CSS component library for beginners
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Learning CSS can be tough when you're just starting out. Making things look good on a webpage takes time to master.

This guide shows how daisyUI can make your learning journey easier and more fun.

## The Problem with CSS When You're Starting Out

When you're new to web development, you have a few ways to style your websites:

1. You can write CSS from scratch

   ❌ This takes a lot of time and your designs might look different on each page

   ```css
   /* Writing CSS from scratch example */
   .my-button {
     background-color: #4338ca;
     color: white;
     padding: 10px 16px;
     border-radius: 6px;
     font-weight: 600;
     font-size: 14px;
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
     cursor: pointer;
     transition: all 0.2s ease;
     border: none;
     outline: none;
     position: relative;
     overflow: hidden;
     display: inline-flex;
     align-items: center;
     justify-content: center;
     text-decoration: none;
   }
   .my-button:hover {
     background-color: #3730a3;
     transform: translateY(-1px);
     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   }
   .my-button:active {
     background-color: #312e81;
     transform: translateY(0);
     box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
   }
   .my-button:focus {
     outline: 2px solid #818cf8;
     outline-offset: 2px;
   }
   .my-button:disabled {
     background-color: #c7d2fe;
     color: #6366f1;
     cursor: not-allowed;
     box-shadow: none;
   }
   /* And this is just ONE button style. Now imagine doing this for every variant of every component! */
   ```

2. You can use Bootstrap

   ❌ Your website looks like every other Bootstrap site, and customizing it means fighting against the framework

   ```html
   <!-- Bootstrap example -->
   <button class="btn btn-primary">Click Me</button>

   <!-- Want a custom style? Get ready for this: -->
   <style>
     .btn-primary {
       --bs-btn-color: #fff;
       --bs-btn-bg: #6200ee !important; /* Have to use !important to override */
       --bs-btn-border-color: #6200ee !important;
       --bs-btn-hover-color: #fff;
       --bs-btn-hover-bg: #5000c7 !important;
       --bs-btn-hover-border-color: #4b00bd !important;
       --bs-btn-focus-shadow-rgb: 49, 132, 253;
       --bs-btn-active-color: #fff;
       --bs-btn-active-bg: #4b00bd !important;
       --bs-btn-active-border-color: #4700b3 !important;
       --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
       --bs-btn-disabled-color: #fff;
       --bs-btn-disabled-bg: #6200ee !important;
       --bs-btn-disabled-border-color: #6200ee !important;
     }
   </style>
   ```

3. You can try Tailwind CSS

   ❌ you will end up with a wall of class names that makes your HTML nearly unreadable

   ```html
   <!-- Tailwind CSS example - a realistic button with all needed features -->
   <button
     class="inline-flex w-auto items-center justify-center space-x-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-in-out hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400 disabled:opacity-50"
   >
     <svg
       xmlns="http://www.w3.org/2000/svg"
       class="h-4 w-4"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
       stroke-width="2"
     >
       <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
     </svg>
     <span>Click Me</span>
   </button>

   <!-- And what happens when you need to add a loading state? -->
   <button
     class="inline-flex w-auto items-center justify-center space-x-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-in-out hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400 disabled:opacity-50"
   >
     <svg
       class="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
     >
       <circle
         class="opacity-25"
         cx="12"
         cy="12"
         r="10"
         stroke="currentColor"
         stroke-width="4"
       ></circle>
       <path
         class="opacity-75"
         fill="currentColor"
         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
       ></path>
     </svg>
     <span>Loading...</span>
   </button>
   ```

4. You can use a framework-specific component library

   ❌ These libraries often come with lots of dependencies, which lowers the lifespan of your code when a dependency is no longer maintained or updated. Plus, you are limited to the specific customization options provided by the library, which can be frustrating when you want to customize your design. With framework-specific libraries, your markup is not portable, meaning you can't easily switch frameworks or use the same components in different projects. Of when you want the same UI among different parts of an app, you are locked into that specific framework's ecosystem.

   ```js
   import { Button } from "some-ui-library"

   return <Button className="btn btn-primary">Click Me</Button>
   ```

None of these options are perfect when you're learning. You either spend hours writing CSS, create a website that looks like a thousand others, or turn your HTML into an unreadable mess of class names.

## How daisyUI Helps New Developers

daisyUI works with Tailwind CSS to make building websites easier. It gives you ready-made components (like buttons, cards, and menus) that you can use right away.

Here's an example of how much simpler it makes things:

❌ Without daisyUI, you'd write all this for a button:

```html
<button
  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
  Click Me
</button>
```

✅ With daisyUI, you just write this:

```html
<button class="btn">Click Me</button>
```

That's a lot less to type and remember!

## Why daisyUI Is Great for Learning

### 1. Simple Class Names That Make Sense

Instead of remembering complicated class names, daisyUI uses words that describe what the thing actually is:

- `btn` for buttons
- `card` for cards
- `alert` for alerts

This makes your code easier to read and understand. It's like using plain English in your HTML.

[See all daisyUI components here](https://daisyui.com/components/)

### 2. Works With Whatever You Want to Learn Next

When you're learning, you might want to try different frameworks like React or Vue later on. daisyUI works with:

- Plain HTML files (what most people start with)
- React, Vue, or Svelte (popular frameworks you might learn next)
- Any other framework you might try

This means you can keep using what you've learned about daisyUI as you grow your skills.

### 3. It's Just CSS - No JavaScript Required

daisyUI is only CSS, which means:

- You don't have to learn JavaScript to use it
- There's less that can break in your code
- Your websites will load faster

For example, a dropdown menu in daisyUI needs no JavaScript:

```html
<!-- A dropdown without JavaScript -->
<div class="dropdown">
  <label tabindex="0" class="btn m-1">Click me</label>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

This is great when you're just starting out and don't want to deal with too many new things at once.

### 4. Easy Way to Learn About Themes

Themes are ways to change how your whole website looks at once. With daisyUI, changing themes is super easy:

```html
<html data-theme="light">
  <!-- Your website content goes here -->
</html>
```

Change "light" to "dark" or one of the other 35 built-in themes, and your whole site's colors change! This helps you learn about:

- How color schemes work together
- How to make dark mode for your websites
- How changing one thing can affect your whole design

### 5. Grows With You As You Learn

daisyUI is designed to be helpful no matter how much you know:

- **Just starting?** Use the basic components as they come

```html
<!-- Beginner: using components as they come -->
<button class="btn">Button</button>
```

- **Know a bit more?** Mix in some Tailwind classes to customize things

```html
<!-- Intermediate: customizing with additional Tailwind classes -->
<button class="btn rounded-full px-6">Custom Button</button>
```

You won't outgrow it as your skills improve.

## How to Start Using daisyUI

If you prefer to set things up manually, here's how to add daisyUI to an existing Tailwind CSS project:

1. Install daisyUI as a development dependency:

```bash
npm i -D daisyui
```

2. Add daisyUI to your CSS file:

```css
@import "tailwindcss";
@plugin "daisyui";
```

To see more detailed instructions, check out the [daisyUI installation guide](https://daisyui.com/docs/install/).
