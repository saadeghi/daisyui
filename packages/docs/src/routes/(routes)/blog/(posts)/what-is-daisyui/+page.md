---
title: What is daisyUI? (and other questions I get asked a lot)
desc: Is daisyUI against the Tailwind CSS philosophy? Are we going full circle? Why not just use Bootstrap? Here I answer some of the most common questions I get asked about daisyUI.
published: true
date: 2023-9-10
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/daisyui-stars.webp
tags:
  - Reviews
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## What is daisyUI?

[daisyUI](https://daisyui.com/) is a component library for Tailwind CSS. While Tailwind CSS provides utility classes for each CSS rule, daisyUI provides additional component class names to Tailwind CSS to make it faster and easier to build web pages.

## Is daisyUI against the Tailwind CSS philosophy?

No.
daisyUI is built on top of Tailwind CSS. Utility-first approach suggests that you should use utility classes for most of your CSS rules, but it doesn't mean you should use **utility classes only**.
Might be surprising to know but Tailwind CSS has an API for creating component classes (which is used by daisyUI) and Tailwind CSS itself also provides some component classes along with utility classes.

> It's called utility-first, not utility-only

## Isn't Tailwind CSS enough? Why do we need a component library on top of Tailwind CSS?

The truth is using **utility classes only**, is not practical for most people.

- It needs design knowledge because you need to make design decisions for each single CSS rule you use for your elements.
- It need deep CSS knowledge because you're basically using shorthand CSS rules for everything.
- It creates bloated HTML files. You need to add a hundred classes to a single element to style it.
- It's not fast. You need to think and decide for each single CSS class you want to use.
- You need to consider every state of elements, like hover, focus, active, etc. and add classes for them too.
- It's not easy to maintain. You end up with a lot of classes in your HTML files and it's hard to find and change them.
- Using utility classes only is basically re-inventing the wheel a lot of times. You need to write a lot of CSS classes just to make a simple element which looks exactly like the one you made before.

> So instead of **utility-only** let's keep it **utility-first**
> Let's use utility classes whenever we need customization
> and use component classes when we need speed

## But we already had Bootstrap. Are we going full circle?

Here's where Tailwind CSS and the utility classes really shine.
The biggest problem with Bootstrap and similar component libraries was that they were not customizable. You can't change the design of a component without overriding a lot of CSS rules. Customizing Bootstrap was so hard that almost every single Bootstrap website looked the same.
That wouldn't be a problem when the component library is built on top of Tailwind CSS. You can customize the design of each component by simply adding utility classes to it. It can't get any easier than that.
Now you have the speed of component class names and the flexibility of utility class names.

## Who is daisyUI for?

daisyUI is for people who want to build web pages fast but they also want to be able to customize the design of their components.

Using **utility classes only** is not practical for most people. It's not fast and it's not easy to maintain.

Using **component classes only** not practical either. It's not flexible and it's not customizable.

There should be a balance between these two approaches where we have access to both speed and flexibility.

> Having component classes on top of utility classes is the best of both worlds.

## Who shouldn't use daisyUI?

daisyUI is not for you if you don't need pre-made components. If you want to build everything from scratch, you don't need daisyUI. Tailwind CSS provides all you need.

## How is daisyUI different from other Tailwind CSS component libraries?

daisyUI offers short, intuitive, and easy to remember class names.
Other Tailwind CSS component libraries usually use the utility-only approach which results in bloated HTML files with a lot of class names.

Basically with daisyUI you use a single `btn` class to make a button and then you can customize it with utility classes. With other component libraries you use copy/paste 100 class names to make a button and then you can customize it by editing them.

## How can I use daisyUI?

To use daisyUI you need to install [Node.js](https://nodejs.org/en/download) and [Tailwind CSS](https://tailwindcss.com/docs/installation).

1. install daisyUI with npm:

```bash
npm i -D daisyui@latest
```

2. Then add daisyUI to your tailwind.config.js files:

```js
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```

Read more about [how to install daisyUI](https://daisyui.com/docs/install/) and [how to use daisyUI](https://daisyui.com/docs/use/).
