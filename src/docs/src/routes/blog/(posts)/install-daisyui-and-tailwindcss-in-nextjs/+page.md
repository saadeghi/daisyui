---
title: How to install daisyUI and Tailwind CSS in Next.js
desc: Next.js is currently one of the popular JavaScript meta frameworks for building web applications. Since we can use daisyUI in any JavaScript framework, we can also use it in Next.js. In this article, we will learn how to use daisyUI component library in Next.js.
published: true
date: 2023-9-22
author: Pouya Saadeghi
thumbnail: /images/blog/daisyui-nextjs-component-library.jpg
tags:
  - Next.js
  - React
  - JavaScript frameworks
---

Installing Next.js is pretty straightforward. It also includes Tailwind CSS by default. After installing Next.js, we can install daisyUI as a plugin and start using it in our Next.js project.

### Installing Next.js

1. Let's start by creating a new Next.js project.  
   You can use the following command to create a new Next.js project:

```
npx create-next-app@latest
```

2. Answer the questions to complete the project creation process.  
   Make sure to enable `Tailwind CSS` when asked about it:

![Install Next.js](/images/blog/install-nextjs.jpg)

### Installing daisyUI

3. Now install the latest version of daisyUI as a dev dependency:

```
npm i -D daisyui@latest
```

4. Open `tailwind.config.js` file  
   Add `require("daisyui")` to the `plugins` array:

```diff
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
- plugins: [],
+ plugins: [require("daisyui")],
}
```

### Using daisyUI

5. Open `/app/page.js` file  
   Replace the content with:

```jsx
export default function Home() {
  return (
    <>
      <button className="btn btn-primary">Hello daisyUI!</button>
    </>
  )
}
```

### Ready to go!

6. Run the project using:

```
npm run dev
```

And open `http://localhost:3000/` to see a button with daisyUI styles.

You can now use any [daisyUI component](https://daisyui.com/components/) or any [Tailwind CSS utility class](https://tailwindcss.com/) in your Next.js project.
