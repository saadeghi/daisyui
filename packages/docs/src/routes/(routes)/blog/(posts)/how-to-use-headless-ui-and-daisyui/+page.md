---
title: How to use Headless UI and daisyUI together?
desc: What is Headless UI and why it is suggested to use it with daisyUI?
published: true
date: 2023-9-28
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/headless-ui.webp
tags:
  - Component Libraries
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Headless UI is a set of completely unstyled, fully accessible UI components for React and Vue. It gives you functionality without design decisions. daisyUI is a Tailwind CSS component library that provides design decisions without functionality. That's why it is suggested to use them together.

## Why use Headless UI?

As a CSS-only component library, daisyUI doesn't include any JavaScript code. However sometimes you need JS to make interactive components or to improve keyboard navigation. That's where [Headless UI](https://headlessui.com/) comes in. It provides you with fully accessible UI components for React and Vue.

## How to install Headless UI?

[Headless UI](https://headlessui.com/) is available for React and Vue. But there is an [unofficial port of Headless UI for Svelte](https://github.com/rgossiaux/svelte-headlessui) too.

1. To install Headless UI for Vue, run the following command:

```bash
npm install @headlessui/vue
```

Or this command if you're using React:

```bash
npm install @headlessui/react
```

2. Now you can use any of the [Headless UI components](https://headlessui.com/) by copy/pasting the code to your project.

For example, according to Headless UI docs, this is how you can create a dropdown menu:

```jsx
import { Menu } from "@headlessui/react"

export default function MyDropDown() {
  return (
    <Menu>
      <Menu.Button>Button</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          <li>
            <a href="/link">Item 1</a>
          </li>
        </Menu.Item>
        <Menu.Item>
          <li>
            <a href="/link">Item 2</a>
          </li>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
```

3. Add daisyUI

After [installing daisyUI](https://daisyui.com/docs/install/) you can use daisyUI's styles in Headless UI components.
Simply add daisyUI class names (and Tailwind CSS utility classes) where it's needed:

```jsx
import { Menu } from "@headlessui/react"

export default function MyDropDown() {
  return (
    <Menu>
      <Menu.Button className="btn">Button</Menu.Button>
      <Menu.Items className="menu rounded-box bg-base-200 w-52">
        <Menu.Item>
          <li>
            <a href="/link">Item 1</a>
          </li>
        </Menu.Item>
        <Menu.Item>
          <li>
            <a href="/link">Item 2</a>
          </li>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
```

Visit [Headless UI docs](https://headlessui.com/) to learn more about its components.
