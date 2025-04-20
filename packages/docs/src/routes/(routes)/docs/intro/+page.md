---
title: Introduction
desc: What is daisyUI and why should you use it?
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

<div class="text-center">
  <img
    class="pointer-events-none inline-block align-bottom"
    src="https://img.daisyui.com/images/daisyui/mark-rotating.svg"
    alt="daisyUI logo"
    width="400"
    height="400"
    loading="lazy"
  />
</div>

## What is daisyUI?

daisyUI is a collection of CSS class names. These class names are a high-level abstraction of Tailwind CSS utility classes.  
Imagine you use Tailwind CSS with superpowers!

## How does daisyUI work?

daisyUI is a NPM package, you can install it as a dev dependency in your project.  
Then you add it to Tailwind CSS as a plugin. This makes all the daisyUI class names available to Tailwind CSS and you can use them like any other Tailwind CSS class names.

daisyUI uses the Tailwind CSS plugin API to extend the available Tailwind CSS class names. This means that daisyUI is fully compatible with Tailwind CSS and you can use it with any Tailwind CSS project.

## Why should I use daisyUI?

**daisyUI is for you if you:**

- Are tired of writing thousands of utility class names repeatedly
- Want more readable and maintainable code
- Need to design interfaces faster with less code
- Want a consistent design system across projects
- Want to use standard UI parts, without making design decisions for every single detail
- Want dark mode and many other themes available out of the box
- Want to use a design system that is based on real-world UI design principles
- Want development speed and customization at the same time

**daisyUI is not for you if you:**

- Want to waste time re-inventing all the standard UI parts like buttons, cards, checkboxes, etc, for each project.
- Want to swim in the ocean of thousands of class names and never find your way out.
- Want to make your codebase a mess and spend hours figuring out what part of the code is responsible for what part of the UI.
- Want to waste your time and money re-inventing the wheel instead of shipping your actual project.

## What's the difference between daisyUI and Tailwind CSS?

Tailwind CSS provides low-level utility classes, which usually include only one CSS rule.  
daisyUI classes are a combination of multiple CSS rule that are named semantically for each part of the UI.

For example Tailwind CSS class names decide if padding should be 4px or 8px. daisyUI class names decide if a HTML element should look like a `card`, a `button`, a `toggle`, etc, just like what we would call them semantically in a design system.

This makes it easier to design interfaces with less code and more consistency. For example if you want to make a card using Tailwind CSS you would have to write one or multiple utility class names for each single CSS rule. Doing this over and over again for each element, for each page, for each project is time consuming and hard to manage. It also makes it harder to maintain your code as you have to always figure out what part of the code is responsible for what part of the UI.

daisyUI solves this problem by providing higher level class names that are named based on the UI parts. For example to make a card, we simply use the `card` class name and daisyUI gives you all the necessary CSS rules to make a card. Then if you need additional customization, you can add Tailwind CSS utility classes to the element to make it look the way you want.

daisyUI is not a replacement for Tailwind CSS, it's a plugin that makes Tailwind CSS more powerful and easier to use.

## Is daisyUI aligned with Tailwind CSS' utility-first philosophy?

Yes! It's utility-first, not utility-only.

daisyUI is built on top of Tailwind CSS's component API. Tailwind CSS as a library provides utility classes and suggests using utility classes for maximum flexibility and customization. However that's means slower development and more code to write.  
That's why many people find it hard to use Tailwind CSS for designing interfaces. It takes a professional designer to make design decisions for many details of the UI to make them look good. It also takes a lot of time to write all the utility class names for each part of the UI. Even copying and pasting those huge chunks of utility class names is not helpful, as it makes the codebase hard to read and maintain.

Imagine one side of the spectrum is maximum customization and flexibility and you should make design decisions for every single detail. On the other side of the spectrum is maximum development speed and less code to write, but you have no control over the design. daisyUI and Tailwind CSS together give you the best of both worlds.  
Use daisyUI class names to write less code and develop faster, and use Tailwind CSS utility classes to customize the design when you need to.

Is it full circle?  
If you've been using Bootstrap many years ago, you may think it doesn't make sense to go back to using components.

But here's the catch: The problem with Bootstrap was not class names! Bootstrap class names were actually really fast to work with. The problem was lack of customization and flexibility. At some point every Bootstrap website looked the same unless you open a CSS file and write tons of custom CSS.  
Tailwind CSS solves this problem of customization and flexibility but the cost is slower development and more code to write! You wanted customization and flexibility? Good luck making design decisions for every single pixel in your page! Not a practical approach, right?

We need customization development speed at the same time. daisyUI is here to make this possible.

## How does daisyUI fit in Atomic Design principles?

Atomic Design is a methodology for creating design systems. It breaks down the UI into smaller parts, like atoms, molecules, organisms, etc.

You can think of Tailwind CSS utility classes as atoms. They are the smallest parts of the UI that you can use to build larger parts. daisyUI classes are like molecules and organisms. They are higher-level abstractions of the UI parts that are made of atoms.

Larger parts of the UI, like templates and pages are quickly possible by putting these molecules and organisms together in layouts, using grid or flexbox, and adding functionality and content to them.

## Is daisyUI free?

Yes, daisyUI is free and open-source, under the MIT license. You can use it in any project, commercial or non-commercial, without any restrictions.

Why is it free? daisyUI's goal is to improve the web development experience for everyone. I believe web development is already complex enough with all the different technologies, frameworks and tools. It takes a lot of time and effort to learn and master all these tools. daisyUI is here to make the design part of web development easier and faster, so you can focus on the actual product you are building.

## How can I support daisyUI?

You can support daisyUI by using it in your projects, sharing it with your friends and colleagues, and contributing to the project on GitHub. You can also support daisyUI by becoming a sponsor on GitHub or Open Collective.

## Can I use daisyUI without Tailwind CSS?

Yes, daisyUI can be used standalone without Tailwind CSS. However, it's recommended to use daisyUI with Tailwind CSS. Here's why:  
daisyUI provides pieces of UI you can use to make a website. Like Button, Toggle, Card, etc. You need something to glue these pieces together! For example you need flex box, grid, padding, margin, etc. Tailwind CSS provides these low-level utility classes that you can use to glue the UI pieces together. So daisyUI and Tailwind CSS are a perfect match. You can use daisyUI to design the UI parts and Tailwind CSS for layout, spacing, font-size and other low-level CSS rules.

Alternatively if you don't want to use Tailwind CSS, you can use daisyUI for components and write your own styles for layout, spacing, etc.

## Can I use daisyUI with other UI frameworks?

Yes, you can mix and match daisyUI with any UI framework that add styles based on class names. If there's any class name conflict, you can use prefix to avoid conflicts between two libraries.

## Which frameworks can I use daisyUI with?

ALL of them! daisyUI is framework agnostic. You can use it anywhere you can use CSS.

---
