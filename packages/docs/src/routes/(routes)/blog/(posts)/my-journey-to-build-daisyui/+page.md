---
title: "My Journey to build daisyUI: Why Tailwind CSS was not enough?"
desc: In search of the most efficient way to style a website there's a lot to explore. In this post I'll share my journey to build daisyUI, a component library on top of Tailwind CSS.
published: true
date: 2023-10-4
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/my-journey-to-build-daisyui.webp
tags:
  - Reviews
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## The early days

It was about 15 years ago when I first started getting into web development and from the beginning, CSS was my favorite part. I loved the ability to style the same content in different ways. I was amazed by the power of CSS and how it could change the whole look and feel of a website with a few lines of code.

Back then there was no build tool and no CSS processing. People where writing inline CSS for small projects and if it was a lot of styles they would use a vanilla `.css` file.

I was also using vanilla CSS. Starting from the top of the page, adding class names to elements and then writing the styles for those classes. It was a lot of fun and I was enjoying it. However as the projects got bigger and bigger, it used to go out of control and hard to maintain. At that time, No one was talking about CSS architecture and how to write maintainable CSS. So I was just doing my best to keep it clean and organized.

## experimenting CSS libraries

As CSS evolved and people started to use it more and more, they realized that there are some common patterns that they use over and over again. So they started to create methods and libraries to make it easier to maintain CSS.

Early CSS libraries started to show up.
Blueprint, 960.gs, YUI, Bootstrap, Foundation, etc.

- Libraries like [Blueprint](http://www.blueprintcss.org/) were providing default styles for HTML tags and also a few class names to set colors or positions for the elements. Nowadays we call them utility classes.
- Libraries like [960.gs](https://960.gs/) were only providing a grid system to make it easier to create layouts.
- Libraries like [Bootstrap](https://getbootstrap.com/) or [YUI](https://yuilibrary.com/) were providing a set of components like buttons, tabs, etc.

These libraries got very popular and people started to use them more and more. However, I had a hard time customizing them. I was not able to change the look and feel of the components without overriding a lot of styles. I used each of them for a few projects but I was always looking for a better solution for my next project.

## Trying to fix the problem with CSS design methodologies

I couldn't find a CSS library that I could use for all my projects because I wanted a new design for each project. So instead of relying on a CSS library, I was writing vanilla CSS for each project but every time I was trying to make it more maintainable and easier to customize.

There were CSS writing methodologies like OOCSS, ACSS, SMACSS and BEM to solve this problem but I was always finding myself jumping from one methodology to another or mixing them together. Some strict rules of these methodologies were not working for me and I was always trying to find a better way to write CSS.

## Perfecting the style with CSS preprocessors

[Less](http://lesscss.org/) and [Sass](https://sass-lang.com/) were the first CSS preprocessors that I used. With them finally I was able to overengineer my CSS in order to make it more maintainable. I tried many structures to organize my CSS but at the end when projects got bigger, it was always hard to maintain.

I was basically copy/pasting my Sass files from one project to another and then overriding them to change the colors and design details. I had some failed attempts to create a single Sass architecture that I could use for all my projects where each project could have its own design. But I was never able to make it work. It was too complicated to organize a multi-purpose CSS architecture to cover all my needs across all my projects.

## Back to Bootstrap prison

Then I tried to build a customizable theme on top of Bootstrap where I could change the design details without overriding a lot of styles. That project didn't go well either. It is so hard to time consuming to fight bootstrap's default styles and make it look the way you want.

## Tailwind to the rescue

Tailwind CSS got my attention when I saw it for the first time. It was a CSS framework that was not providing any default styles. It was only providing utility classes to make it easier to style your website. It was a great idea to make things easier to customize. I started using it on a few projects and I was happy with it.

The idea of having utility classes for every CSS rule was great. Finally I had a fully customizable CSS framework that I could use for all my projects. I was able to use the same HTML for multiple projects and then change a few colors and design details to make it look different.

## But utility-only was slow and bloated

However like everyone else, I was not happy with the amount of class names I had to use for every element on every page and on every project. At one point I was having my ideal class names for each component (Button, input, card, etc) and I was copying the exact same class names to every project. It was a lot of work and I was not happy with it.

## Utility-first, not utility-only

I needed a faster and easier way. All I needed to customize for a button was color, border-radius and size. I didn't want to write all the class names for the button every time. I wanted to simply have a `.btn` class as easy as Bootstrap but with the ability to customize it.

I started to make a CSS file and put all my default styles in `@apply` directives. This way I could simply use a `btn` class and then customize it using `bg-*` utility class. It was a lot better. My Code became cleaner and I was able to develop my projects faster!

Now I had the power of customization using Tailwind CSS utility classes and the ease of use of Bootstrap. I was happy with it and I was using it for all my projects.

## Birth of daisyUI

I was using my `@apply` collection on all my projects and it was working great. I decided to publish it as a library so other people could use it too. I had to find a name for it. I was looking for a short name that could represent the idea of growth and prettiness. Finally I went with 🌼 daisyUI. It's short, easy to remember and the name was available on NPM.

I started to work on it as a side project. I used Tailwind CSS' plugin API to make it as easy as possible to use. For version 0.x I started with a few components and then I added more and more components to it. Finally it was ready to be used on real projects. With version 1.0, I got a lot of feedback from the community and I was able to improve it with every release. Every time I was adding a new component, I was trying to make it as customizable as possible. I was trying to make it easy to use and easy to customize.

I extended the Tailwind CSS color names to make all daisyUI components themeable by default. I wanted to make it as easy as possible to change the colors of the components because for me, personally it was important that websites made with daisyUI look different from each other. This was possible thanks to Tailwind CSS API and I was able to make it work. Now, daisyUI not only provides a set of components but also provides themes that apply colors to all components.

## If it can be styled with CSS only, it should be styled with CSS only

It's important for me that daisyUI as a CSS component library doesn't depend on any JavaScript library. I provided styles for the components that could be interactive using CSS-only but things like datepickers, etc. are not part of daisyUI. I wanted to keep it as simple as possible and let people use their favorite JavaScript libraries for the interactive components. Gladly there are a lot of headless JavaScript libraries out there and most of them are compatible with daisyUI. You can simply use daisyUI class names or color CSS variables to style them.

## Best of both worlds

I'm happy with daisyUI and I'm using it for all my projects. It allows me to create a new design for each project and it makes it easy to customize the look and feel of the components.

I see daisyUI as the best of both worlds. Component classes for speed and utility classes for customization.

Now I have the customization power of Tailwind CSS and the development speed of Bootstrap. I have never been able to do this with any other CSS library. I'm glad that I was able to find a solution that works for me and I'm happy to share it with the community.

## Thank you!

I want to thank everyone who has used daisyUI and provided feedback. I'm glad that I was able to help you with your projects. I'm also thankful to everyone who has contributed to daisyUI and everyone who donated to support the project.

There are currently 130 contributors on [GitHub](https://github.com/saadeghi/daisyui) and 60 financial supporters on [Open Collective](https://opencollective.com/daisyui). daisyUI wouldn't be possible without your support. Thank you all! 💚
