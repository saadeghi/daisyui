<div align="center">

[![][logo-url]](#)  

CSS components for [Tailwind CSS ↗︎][tailwind-url]  
Styled + unstyled UI components  
Scalable, [Themeable][theming-url] and designer-friendly  
[ [demo ↗︎][demo-url] ]
  
[![][tweet]][tweet-url]  

</div>

# DaisyUI

[![][install-size]][install-size-url] [![][base-css]][base-css-url] [![][styled-css]][styled-css-url]  
[![][build]][build-url] [![][npm]][npm-url] [![][dl]][npm-url] [![][commit]][gh-url] [![][license]][license-url]


# 🌼 Demo   
[See all components][demo-url] ↗︎

# 👩‍💻 Use   
## 1. Install  

You need [`TailwindCSS 2.0+`][tailwind-url] ↗︎  
Install package:

```
npm i daisyui
```

Then add plugin and preset to `tailwind.config.js`
```js
module.exports = {
  plugins: [
    require('daisyui/styled'), // 🎨 for styled UI
    // require('daisyui'), // for base UI only
  ],
  presets: [
    require('daisyui/preset')
  ],
}

```
<details>
<summary>
  Or use a CDN
</summary>
  
🎨 styled version
```
<link rel="stylesheet" href="https://unpkg.com/daisyui@latest/dist/styled.css" />
```
📐 unstyled version
```
<link rel="stylesheet" href="https://unpkg.com/daisyui@latest/dist/base.css" />
```
</details>

---

## 2. Set up the colors for your design system (optional)
  
If you want to use your custom colors , you need to define the color values in your css. Colors must be themeable so we're using CSS Variables.  
[Theming guide and examples][theming-url] ↗︎


# 🤔 FAQ


<details>
<summary>
  Why do I need it?
</summary>

> [Utility first ↗︎](https://tailwindcss.com/docs/utility-first) is fast and scalable but developing a design system with utility first is messy and hard to manage when your codebase gets larger. So why not use a single `.btn` class for all your buttons instead of repeating ~15 utility classes on all your files? This way you can make sure all your components are sharing the same CSS and they respect the same design rules.  
  
</details>
  
<details>
<summary>
  How does it work?
</summary>

> **DaisyUI** provides basic/unstyled component classes that you can use for almost all design systems. You will need different `.btn` sizes for every project so you can have a basic style that predefined `.xs`, `.sm`, `.lg` sizes for your `.btn` but it has no color or additianal styles.  
> **DaisyUI** also has an optional `styled` version that is useful if you don't want to fully design your components but you want to use custom colors.  
> **DaisyUI** is based on tailwind so you can customize everything with utility classes and [purge ↗︎](https://tailwindcss.com/docs/optimizing-for-production#purge-css-options) all unused class names.  
  
</details>
  
<details>
<summary>
  What's included?
</summary>
 
> When you add `daisyui/styled` as a Tailwind CSS plugin, it gives you ready-to-use UI component classes to use. Like `.btn`, `.card`, `.alert`, etc...  
> If you use the unstyled version, it has no color or visual style so you can fully style the components with Tailwind utility classes. If you use styled version, you get something pre-designed (like Bootstrap) but you can still customize it with Tailwind classes.  
  
</details>
  
<details>
<summary>
  Concepts
</summary>

> **Typography, spacing, layout**  
  You will handle these with Tailwind classes. We suggest using the official [Tailwind Typography ↗︎](https://github.com/tailwindlabs/tailwindcss-typography) plugin
> **Colors and theming**  
  You should ditch Tailwind's default and multi-purpose color set and set your custom set of colors for a DaisyUI project. ([Theming guide ↗︎][theming-url])
> **Components**  
  (like button, card, etc...) DaisyUI will handle this, so you don't need to use many utility classes to build a button. you just use `.btn`  
  
</details>  
  
<details>
<summary>
  What is "preset"
</summary>

```js
module.exports = {
  // ...
  presets: [
    require('daisyui/preset')
  ],
}

```
> When you add DaisyUI preset it will replaces default tailwind colors with a set of semantic color set that is themeable and can be configed with CSS variables.  
> `daisyui/preset` also adds a few `borderRadius` that is used in components. They are also configurable with CSS variables.

</details>
  

<details>
<summary>
  Extending and customizing
</summary>

> You can use Tailwind utility classes anywhere. So your button element can look like `<a class="px-16 m-5 opacity-50 btn">` 
> You're not forced to use all the components. Unused components will be purged anyway.  
> If you use the `base` style, you can fully design elements using your custom css and add custom classes to existing DaisyUI components.  
> For example, you can style your button this way:
```postcss
.btn{
  @apply font-normal rounded-full border-4 shadow-md;
}
```
  
</details>

---

# 🎛 List of components  
<details>
<summary>
  Show
</summary>

- [x] Accordion
- [x] Alert
- [ ] Artboard
- [ ] App bar
- [x] Avatar
- [ ] Avatar group
- [x] Badge
- [ ] Banner
- [ ] Breadcrumb
- [x] [Button](docs/button.md)
- [x] Button group
- [x] Card
- [ ] Chat bubble
- [ ] Comment
- [ ] Divider
- [ ] Empty placeholder
- [ ] Form
  - [ ] Dropdown
  - [ ] Select
  - [x] Text input
  - [ ] Text area
  - [ ] Checkbox
  - [ ] Radio
  - [ ] Range slider
  - [ ] Switch
  - [ ] Upload
- [x] Hero
- [ ] Loading
- [x] Menu
- [ ] Navbar
- [ ] Modal
- [x] Pagination
- [ ] Progress
- [ ] Progress indicator
- [ ] Skeleton placeholder
- [ ] Statistic
- [ ] Steps
- [ ] Tag
- [ ] Tabs
- [ ] Timeline
- [ ] Toast
- [ ] Tooltip
</details>

---
  
<div align="center">
  
  
Please share  
  
[![][tweet]][tweet-url]  

</div>




[install-size]: https://badgen.net/packagephobia/publish/daisyui?label=package%20install%20size&icon=npm&color=purple
[base-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/base.css?label=base.css%20size&color=purple
[styled-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/styled.css?label=styled.css%20size&color=purple
[build]: https://badgen.net/github/checks/saadeghi/daisyui?label=build
[npm]: https://badgen.net/npm/v/daisyui?label=version&icon=npm&color=purple
[dl]: https://badgen.net/npm/dt/daisyui?icon=npm&color=purple
[commit]: https://badgen.net/github/last-commit/saadeghi/daisyui?icon=github&color=purple
[license]: https://badgen.net/github/license/saadeghi/daisyui?color=purple
[tweet]: https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fsaadeghi%2Fdaisyui

[install-size-url]: https://packagephobia.com/result?p=daisyui
[base-css-url]: https://unpkg.com/daisyui@latest/dist/base.css
[styled-css-url]: https://unpkg.com/daisyui@latest/dist/styled.css
[license-url]: https://github.com/saadeghi/daisyui/blob/master/LICENSE
[npm-url]: https://www.npmjs.com/package/daisyui
[gh-url]: https://github.com/saadeghi/daisyui
[build-url]: https://github.com/saadeghi/daisyui/actions
[tweet-url]: https://twitter.com/intent/tweet?text=Checkout%20DaisyUI%20on%20github%20https://github.com/saadeghi/daisyui

[theming-url]: https://github.com/saadeghi/daisyui/blob/master/docs/theming.md
[demo-url]: https://daisyui.netlify.app/
[tailwind-url]: https://tailwindcss.com/
[logo-url]: https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg

