---
title: Add component classes to your HTML
desc: 
published: true
---

Once you [installed](/docs/install) daisyUI, you can use component classes like `btn`, `card`, etc...

1. So instead of making a button using only utility classes:

  ```html
  <button class="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-gray-800 rounded-md cursor-pointer hover:bg-gray-900">
    Button
  </button>
  ```
  <button class="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-gray-800 rounded-md cursor-pointer hover:bg-gray-900">Button</button>

2. You can just use a component class like this:

  ```html
  <button class="btn">Button</button>
  ```
  <button class="btn">Button</button>

3. Then you can modify the component with daisyUI additional utility classes:

  ```html
  <button class="btn btn-primary">Button</button>
  ```
  <button class="btn btn-primary">Button</button>

4. Or you can modify the component with Tailwind CSS utility classes:

  ```html
  <button class="w-64 rounded-full btn">Button</button>
  ```
  <button class="w-64 rounded-full btn">Button</button>