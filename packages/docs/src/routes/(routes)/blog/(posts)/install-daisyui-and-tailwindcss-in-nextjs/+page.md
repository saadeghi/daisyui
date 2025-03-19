---
title: How to install daisyUI and Tailwind CSS in Next.js 14
desc: In this article, we will learn how to use daisyUI component library in Next.js.
published: true
date: 2023-9-22
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/daisyui-nextjs-component-library.webp
tags:
  - Frameworks
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Next.js is currently one of the popular JavaScript meta frameworks for building web applications. Since we can use daisyUI in any JavaScript framework, we can also use it in Next.js.

Installing Next.js is pretty straightforward. It also includes Tailwind CSS by default. After installing Next.js, we can install daisyUI as a plugin and start using it in our Next.js project.

### Installing Next.js

1. Let's start by creating a new Next.js project.
   You can use the following command to create a new Next.js project:

```
npx create-next-app@latest
```

2. Answer the questions to complete the project creation process.
   Make sure to enable `Tailwind CSS` when asked about it:

![Install Next.js](https://img.daisyui.com/images/blog/install-nextjs.webp)

Go to the project directory. If you named it `my-app`:

```
cd my-app
```

### Installing daisyUI

3. Now install the latest version of daisyUI as a dev dependency:

```
npm i -D daisyui@latest
```

4. Open `tailwind.config.ts` file
   Add daisyUI as a plugin:

```diff
import type { Config } from 'tailwindcss'
+ import daisyui from 'daisyui'
const config: Config = {
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
+ plugins: [daisyui],
}
export default config

```

### Using daisyUI

5. Open `/app/page.tsx` file
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

7. Extra: You can also remove the default Next.js styles from `app/globals.css`, to have a clean start. Only keep the following line:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
