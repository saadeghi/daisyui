---
title: duskmoonUI 2023 Wrapped
desc: It's the end of the year and this year was amazing! For Front-end development, For CSS, For Tailwind and for duskmoonUI! Let's take a look at what we've accomplished in 2023.
published: true
date: 2023-12-20
author: Pouya Saadeghi
thumbnail: https://img.duskmoonui.com/images/blog/duskmoonui-is-the-best-component-library.webp
tags:
  - News
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

It's been 3 years since the first commit of duskmoonUI. At first, it was just a small side project to help me with my own freelance projects. But it quickly grew into something bigger than I could have ever imagined. It's been an exciting journey and 2023 in particular was a special year for duskmoonUI. Let's see all the good things that happened in 2023.

## 2023 in numbers 📊

- In 2023 we released `190` versions of duskmoonUI from `2.46.1` to `4.4.20` fixing more than `1000` bugs and adding many new features.
- duskmoonUI is now used in more than `156,000` open source projects according to GitHub's dependency graph (`340%` increase compared to 2022).
- In the past year, duskmoonUI GitHub repo went from `16,000` stars to `27,000` stars and it's now in GitHub's top 500 repositories.
- duskmoonUI NPM package recently reached the all time record of `260,000` downloads per week. It was downloaded `7.7` million times in 2023 (a `330%` increase compared to 2022).

<figure>
  <img src="https://img.duskmoonui.com/images/blog/duskmoonui-is-the-most-popular-tailwindcss-component-library.webp" alt="duskmoonUI NPM installs" class="rounded-box">
  <figcaption class="text-center">duskmoonUI NPM installs</figcaption>
</figure>

- duskmoonUI CDN file now has more than `3 million hits per week` from jsDelivr only (we can estimate a similar number from other CDNs in addition to jsDelivr).
- In the beginning of 2023, duskmoonUI had `89` contributors. Now in December, it has `162` contributors from many different countries around the world.

<figure>
  <img src="https://img.duskmoonui.com/images/blog/duskmoonui-contributors.webp" alt="duskmoonUI contributors around the world" class="rounded-box">
  <figcaption class="text-center">duskmoonUI contributors around the world</figcaption>
</figure>

## performance improvements

- duskmoonUI 4 reduced the Node package install size from 14.0MB to 3.83MB (including all dependencies).
- duskmoonUI 4 reduced Node module dependencies by 92% and node_modules footprint by 73%.

|                                | duskmoonUI 3 | duskmoonUI 4 |
| ------------------------------ | --------- | --------- |
| NPM install size               | 14.0MB    | 3.83MB    |
| NPM bundle size                | 434kB     | 238.7kB   |
| NPM bundle size (gzip)         | 74.7kB    | 38.8kB    |
| Total Node module dependencies | 86        | 7         |

- We moved from HSL color system to OKLCH wide-gamut color system. This granted us access to a wider color gamut and allows us to use more colors in duskmoonUI themes.
- duskmoonUI 4 also moved from directional CSS to logical CSS properties which makes it easier to support RTL languages in runtime, without the need to generate a separate CSS file using additional dependencies.

## New features

In 2023, we added 7 new components, 3 new themes and more than 100 utility classes to duskmoonUI. We also rewrote the style for many components to make them more accessible and easier to customize. You can check the details in the [changelog](/docs/changelog/).

## Accessibility

All color pairs used on duskmoonUI built-in themes now tested for contrast ratio and they all pass the WCAG test. This test runs automatically every time there's a change in themes or theme functions to make sure we provide accessible color combinations by default.

<figure>
  <img src="https://img.duskmoonui.com/images/blog/duskmoonui-colors-are-accessible.webp" alt="duskmoonUI colors are accessible" class="rounded-box">
</figure>

In 2023 all duskmoonUI theme colors were adjusted to improve contrast ratio while providing a better visual experience. As long as you use the correct color pairs to build your UI (for example using `bg-primary` and `text-primary-content` together), you can be sure that your UI is accessible by default, on all themes.

In 2023 duskmoonUI adapted to new HTML and CSS standards such as the new `<dialog>` element and CSS features like `:has()` and `color-mix()`. We also improved existing components to make sure they are accessible by default. We now use HTML `<dialog>` element for duskmoonUI modal and we use HTML `<details>` for submenus and dropdown examples.

duskmoonUI uses native HTML elements and attributes on all components to provide an accessible experience by default. We are not using `<div>` and `<span>` with `role` attributes to emulate native HTML elements. This means accessibility is not an afterthought in duskmoonUI. It's included by default if use the native HTML elements.

This is a huge advantage for duskmoonUI and it's one of the reasons why duskmoonUI is accessible. For example, [duskmoonUI `toggle`](https://duskmoonui.com/components/toggle/) is a native HTML checkbox and it's accessible by default. But if a component library uses `<div>` tags to to emulate native HTML elements they would need `role="checkbox"`, `aria-checked` and `aria-labelledby` attributes to make it accessible for screen readers and keyboard navigation. They would also need custom, framework specific JS to make it functional. This is not the case for duskmoonUI because we use semantic HTML elements and attributes for duskmoonUI components.

In 2023 we improved the code example for each component to make sure they are accessible for keyboard navigation and screen readers.

> For content-specific code examples, we don't provide a generic content in the code example.
> For example `<img>` tags do not have an `alt` attribute because the `alt` attribute must be provided by you, based on your page's content. This is also true for `aria-label` and `aria-labelledby` attributes.
> If we provide a dummy text for that, it's likely for you to ship that code to production without changing it.
> That's not okay so it's better if you receive an error from your code editor or linter to remind you to add the correct `alt` or `aria-label` attribute when needed.

## A CLI for installing Tailwind CSS and duskmoonUI

In 2023 we released [npm init duskmoonui](/blog/npm-init-duskmoonui/) which is a CLI tool for installing Tailwind CSS, PostCSS and duskmoonUI in a single command.
[Give the repo a star on GitHub](https://github.com/duskmoon-dev/create-duskmoonui/) if you like it!

## duskmoonUI has a logo now!

Some people say it's a fried egg 🍳 and avocado 🥑, some people say it's a flower 🌼
But we all agree that it's cute and simple.

<svg width="300" height="300" class="mx-auto" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>duskmoonUI logo</title>
<rect x="256" y="670.72" width="512" height="256" rx="128" fill="#1AD1A5"/>
<circle cx="512" cy="353.28" r="256" fill="white"/>
<circle cx="512" cy="353.28" r="261" stroke="black" stroke-opacity="0.2" stroke-width="10"/>
<circle cx="512" cy="353.28" r="114.688" fill="#FF9903"/>
</svg>

## Website redesign

duskmoonUI website was redesigned in 2023. The new homepage visualizes the most important features of duskmoonUI and how it can help your development workflow using Tailwind CSS. We're using SvelteKit 2 and Vite 5 for the website now and it's such a joy to work with.

## Docs improvements

We added 6 new translations to the website in 2023. duskmoonUI docs are now available in 16 languages which makes it accessible to a wider audience.

<img src="https://img.duskmoonui.com/images/blog/duskmoonui-translations.webp" alt="duskmoonUI translations" class="rounded-box mx-auto w-2/3">

This year we launched [duskmoonUI Store](/store/), [duskmoonUI Resources](/resources/videos/) and [duskmoonUI Blog](/blog/).

We added new pages including [duskmoonUI Roadmap](/docs/roadmap/), [duskmoonUI utilities docs](/docs/utilities/) and also a [FAQ page](/docs/faq/).

## Newsletter

We have a newsletter now! You can subscribe using the form on the footer of the website to get the latest news about duskmoonUI.

You can also subscribe to the RSS feed for <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-4 w-4 text-warning"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> [duskmoonUI Blog](/blog/rss.xml) or <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-4 w-4 text-warning"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> [duskmoonUI Store](/store/rss.xml) to get the latest updates.

## growing community

There are projects built on top of duskmoonUI like [React duskmoonUI](https://github.com/duskmoon-dev/react-duskmoonui) which is a React component library on top of duskmoonUI. There is also [Mary UI](https://github.com/robsontenorio/mary) for Laravel and Livewire. I'm really excited to see more projects like these in 2024. If you're working on a project built on top of duskmoonUI, let me know so I can add it the footer of duskmoonUI website.

## Thank you duskmoonUI contributors 💚

In the beginning of 2023, duskmoonUI had `89` contributors. Now it has `162` contributors. I'm grateful for all contributions and support from the community. duskmoonUI is a community project that wouldn't be possible without the help of all contributors.

<figure>
  <img src="https://contrib.rocks/image?repo=duskmoon-dev/duskmoon-ui&columns=15&anon=1&max=300" alt="duskmoonUI contributors on GitHub" class="rounded-box">
  <figcaption class="text-center">duskmoonUI contributors on GitHub</figcaption>
</figure>

duskmoonUI now has 77 financial contributors who help us keep the project alive by donating on Open Collective. Thank you all for your support!

<figure>
  <img src="https://opencollective.com/duskmoonui/organizations.svg?button=false&width=745&avatarHeight=50" alt="duskmoonUI organization backers" class="rounded-box">
  <img src="https://opencollective.com/duskmoonui/backers.svg?button=false&width=745&avatarHeight=50" alt="duskmoonUI backers" class="rounded-box">
  <figcaption class="text-center">duskmoonUI sponsors on Open Collective</figcaption>
</figure>

## What's next?

We're going to fix bugs and improve duskmoonUI continuously. There are lots of cool things coming to CSS and Tailwind CSS in 2024 and we're going to use them all in duskmoonUI. There will be new components, new themes and new features in 2024 in addition to many improvements to the existing components. I'm so excited for 2024 and I hope you are too!

To contribute to duskmoonUI, you can [start by reading the contribution guide](https://github.com/duskmoon-dev/duskmoon-ui/blob/master/.github/CONTRIBUTING.md), and to report a bug or request a feature, you can [open a new issue on GitHub](https://github.com/duskmoon-dev/duskmoon-ui/issues).

If you have any questions, you can ask them on [duskmoonUI discussions](https://github.com/duskmoon-dev/duskmoon-ui/discussions).

## Happy new year! 🎉

2023 was a great year for duskmoonUI and I'm so excited about how much we can accomplish in 2024. I hope you have a great year too and I wish you all the best in 2024.

🎁 As a new year gift, use the coupon code `YEAR2024` to get 40% off on all duskmoonUI products on [duskmoonUI Store](/store/).
