<div align="center">

[![][logo-url]](#)  

CSS components for [Tailwind CSS ↗︎][tailwind-url]  
Styled + unstyled UI components  
Scalable, [Themeable][theming-url] and designer-friendly  
[ [demo ↗︎][demo-url] ]
  
[![][tweet]][tweet-url]  

</div>

# DaisyUI

[![][build]][build-url] [![][install-size]][install-size-url] [![][base-css]][base-css-url] [![][styled-css]][styled-css-url]  
[![][npm]][npm-url] [![][dl]][npm-url] [![][commit]][gh-url] [![][license]][license-url]


# 🌼 Demo   
[See all components][demo-url] ↗︎

# 👩‍💻 Use   
## 1. Install  

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
(Not recommended for production)  

| Version | Description | URL |
| - | - | - |
| **Base** <br/> [![][base-css]][base-css-url] | Unstyled domponents <br/><sup>(Basic layout, no color, no visual style)</sup> | `https://unpkg.com/daisyui@latest/dist/base.css` |
| **Styled** <br/> [![][styled-css]][styled-css-url] | DaisyUI Styled domponents <br/><sup>(But you can't use DaisyUI colors on other elements)</sup> | `https://unpkg.com/daisyui@latest/dist/styled.css` |
| **Full** <br/> [![][full-css]][full-css-url] | Tailwind default style + DaisyUI styled domponents <br/><sup>(But it's a large file for production)</sup> | `https://unpkg.com/daisyui@latest/dist/full.css` |


</details>

---

## 2. Customize theme and colors (optional)
  
Add your custom colors in your CSS file  
[ [Theming guide and examples][theming-url] ↗︎ ]

<details>
<summary>
  Quick example
</summary>

```css
/* Values are HSL (hue, saturation, lightness) */
:root {
  --d: 0 0% 100%; /* default color */
  --p1: 340 82% 62%; /* Primary color - light */
  --p2: 340 82% 52%; /* Primary color - normal */
  --p3: 340 82% 42%; /* Primary color - dark */
  --s1: 262 52% 56%; /* Secondary color - light */
  --s2: 262 52% 46%; /* Secondary color - normal */
  --s3: 262 52% 36%; /* Secondary color - dark */
  --a1: 199 98% 58%; /* Accent color - light */
  --a2: 199 98% 48%; /* Accent color - normal */
  --a3: 199 98% 38%; /* Accent color - dark */
  --c1: 220 14% 96%; /* Content colors */
  --c2: 228 14% 93%;
  --c3: 220 15% 84%;
  --c4: 218 14% 65%;
  --c5: 220 14% 46%;
  --c6: 220 14% 37%;
  --c7: 219 14% 28%;
  --c8: 222 13% 19%;
  --c9: 223 14% 10%;
  --cp: 0 0% 100%; /* Foreground content color to use on a primary color */
  --cs: 0 0% 100%; /* Foreground content color to use on a secondary color */
  --ca: 0 0% 100%; /* Foreground content color to use on a accent color */
  --in: 207 90% 54%; /* Info */
  --su: 174 100% 29%; /* Success */
  --wa: 36 100% 50%; /* Warning */
  --er: 14 100% 57%; /* Error */
}
```

</details>

# 🤔 FAQ


<details>
<summary>
  Why do I need it?
</summary>

> Instead of using lots of utility classes for all elements, use component classes like `.btn`, `.card`, `.navbar`, etc... for your common elements to make sure all your elements use same style  
> Instead of using general-purpose color names like `blue-600` or `gray-100` use semantic role names like `primary`, `content-300` or `info`. This way, you can change primary color of your whole project using a single CSS variable; no need to replace all color classes in all files. You can also define multiple themes (not just dark-mode) using CSS variables.  
  
</details>
  
<details>
<summary>
  How does it work?
</summary>

> **DaisyUI** provides basic/unstyled component classes that you can use for almost all design systems. You will need different `.btn` sizes for every project so you can have a basic style that predefined `.xs`, `.sm`, `.lg` sizes for your `.btn` but it has no color or additianal styles.  
> **DaisyUI** also has an optional `styled` version that is useful if you don't want to fully design your components but you want to use custom color themes.  
> **DaisyUI** is based on tailwind so you can customize everything with utility classes and [purge ↗︎](https://tailwindcss.com/docs/optimizing-for-production#purge-css-options) all unused class names.  
  
</details>
  
<details>
<summary>
  What's included?
</summary>
 
> When you add `daisyui/styled` as a Tailwind CSS plugin, it gives you ready-to-use UI component classes to use. Like `.btn`, `.card`, `.alert`, etc...  
> If you use styled version, you get something pre-designed (like Bootstrap) but you can still customize it with Tailwind utility classes.  
> If you use the base (unstyled) version, it has no color or visual style so you can fully style the components with Tailwind utility classes or Tailwind's `@apply` directive. 
  
</details>
  
<details>
<summary>
  Concepts
</summary>

> **Spacing, layout, Typography**  
  You will handle these with Tailwind utility classes. It's easy to create any layout with flexbox or grid. Also for spacing (margins, paddings, etc...), Tailwind classes are perfect for the job. For typography, I suggest using the official [Tailwind Typography ↗︎](https://github.com/tailwindlabs/tailwindcss-typography) plugin.  
    
> **Colors and theming**  
  Instead of using Tailwind's general-purpose colors we use a custom/themeable set of color names (Why? 👉 [Theming guide ↗︎][theming-url])  
    
> **Components**  
  DaisyUI has component classes for every component (button, card, etc...) so you don't need to use many utility classes to build a button. Just use a `.btn` class.  
  
</details>  
  
<details>
<summary>
  What is "preset"?
</summary>

```js
module.exports = {
  // ...
  presets: [
    require('daisyui/preset')
  ],
}

```
> When you add DaisyUI preset it will add:
> A set of [semantic color names][theming-url] (as utility classes)  
> A few additional utility classes that are used by components (like border-radius, min-height, etc...)

</details>
  

<details>
<summary>
  Extending and customizing
</summary>

> You can define multiple custom themes using a few CSS variable.  
> You can use Tailwind utility classes anywhere. So your button element can look like `<a class="px-16 m-5 shadow-md btn">`  
> You're not forced to use all the components. Unused components will be purged anyway.  
> If you use the `base` style, you can fully design elements using Tailwind utility classes or Tailwind's `@apply` directive.  
> For example, you can style your button this way:  
```postcss
.btn{
  @apply px-16 m-5 shadow-md;
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
- [x] Artboard
- [ ] App bar
- [x] Avatar
- [ ] Avatar group
- [x] Badge
- [ ] Banner
- [ ] Breadcrumb
- [x] Button
- [x] Button group
- [ ] Calendar
- [x] Card
- [ ] Chat bubble
- [ ] Comment
- [ ] Countdown
- [ ] Divider
- [ ] Empty placeholder
- [ ] Footer
- [ ] Form
  - [ ] Dropdown
  - [ ] Select
  - [x] Text input
  - [ ] Text area
  - [x] Checkbox
  - [ ] Radio
  - [ ] Range slider
  - [x] Toggle
  - [ ] Upload
- [x] Hero
- [ ] Loading
- [x] Menu
- [x] Navbar
- [ ] Modal
- [x] Pagination
- [x] Progress
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



[install-size]: https://badgen.net/bundlephobia/min/daisyui?&color=purple
[base-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/base.css?label=base.css%20size&color=purple
[styled-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/styled.css?label=styled.css%20size&color=purple
[full-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/full.css?label=full.css%20size&color=purple
[build]: https://badgen.net/github/checks/saadeghi/daisyui?label=build
[npm]: https://badgen.net/npm/v/daisyui?label=version&icon=npm&color=purple
[dl]: https://badgen.net/npm/dt/daisyui?icon=npm&color=purple
[commit]: https://badgen.net/github/last-commit/saadeghi/daisyui?icon=github&color=purple
[license]: https://badgen.net/github/license/saadeghi/daisyui?color=purple
[tweet]: https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fsaadeghi%2Fdaisyui

[install-size-url]: https://bundlephobia.com/result?p=daisyui
[base-css-url]: https://unpkg.com/daisyui@latest/dist/base.css
[styled-css-url]: https://unpkg.com/daisyui@latest/dist/styled.css
[full-css-url]: https://unpkg.com/daisyui@latest/dist/full.css
[license-url]: https://github.com/saadeghi/daisyui/blob/master/LICENSE
[npm-url]: https://www.npmjs.com/package/daisyui
[gh-url]: https://github.com/saadeghi/daisyui
[build-url]: https://github.com/saadeghi/daisyui/actions
[tweet-url]: https://twitter.com/intent/tweet?text=Checkout%20DaisyUI%20on%20github%20https://github.com/saadeghi/daisyui

[theming-url]: https://github.com/saadeghi/daisyui/blob/master/docs/theming.md
[demo-url]: https://daisyui.netlify.app/
[tailwind-url]: https://tailwindcss.com/
[logo-url]: https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg

