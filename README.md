<div align="center">

[![][logo-url]](#)  

**UI Components for Tailwind CSS**  
Themeable, Scalable and Designer-Friendly  
[ [See all components][netlify-url] ]
  
[![][tweet]][tweet-url]  

</div>

[![][banner-url]][netlify-url]  

# DaisyUI  
[![][build]][build-url] [![][install-size]][install-size-url] [![][styled-css]][styled-css-url]  
[![][npm]][npm-url] [![][dl]][npm-url] [![][commit]][gh-url] [![][license]][license-url]

>***It's like Tailwind CSS on steroids!***  
>You have everything from [Tailwind CSS][tailwind-url], *but* you can also use component classes like `btn`, `card`, etc...

---

## 🔗 Links
- 👉 [ [See all components][netlify-url] ]
- 📘 Documents: [Netlify][netlify-url] | [Github][gh-pages-url]
- 🎲 Try it online: [Tailwind Play][tw-play-url] | [Codepen][codepen-url]
- 📦 Source: [GitHub][gh-url] | [NPM][npm-url]
- 📦 CDN: [Unpkg][unpkg-url] | [JSdeliver][jsdeliver-url]

---

## 🌼 Features   
- **Component classes**: It adds component classes to Tailwind. Classes like `btn`, `card`,... No need to deal with hundreds of utility classes.
- **Tailwind CSS plugin**: DaisyUI is a Tailwind CSS plugin so you can simply add it to your `tailwind.config.js` file.
- **Based on design system**: DaisyUI applies design system concepts to Tailwind CSS. All components on your page are committed to a single design system.
- **Customizable**: You can customize the design of components with Tailwind utility classes and CSS variables.
- **Semantic color names**: Use color names like `primary`, `secondary`, `accent`,... just like your design system defines.
- **RTL supported**: Enable `rtl` config for right to left layouts.
- **Themeable**: Add multiple themes or change colors with a CSS variable. You can even set a theme for a specific section of your page.
- **Designer-friendly**: You can disable `styled` config and only get the skeleton of components. No style, no colors. You can style everything using utility classes.

---

## 👩‍💻 Install now!  

```
npm i daisyui
```

Then add DaisyUI to your `tailwind.config.js`
```js
module.exports = {
  
  plugins: [
    require('daisyui'),
  ],

  // OPTIONAL: if you want to use DaisyUI colors everywhere
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },

}
```


<details>
<summary>
  Or use a CDN
</summary>


>*Loading CSS files from CDN is not recommended for production. It's better to install Tailwind and DaisyUI as Nodejs dependencies so you can config/customize everything, and purge unused styles.*  

- **Full.css** (Tailwind's default style + DaisyUI components)  
  [![][full-css]][full-css-url]  
  ```
  https://cdn.jsdelivr.net/npm/daisyui@0.8.x/dist/full.css
  ```
- **Default themes** (optional)  
  [![][theme-css]][theme-css-url]   
  ```
  https://cdn.jsdelivr.net/npm/daisyui@0.8.x/dist/themes.css
  ```


</details>

---
## 🎉 Use  
Use component classes like `btn`, `card`, etc... to build your UI.  
```html
<a class="btn">Hello!</a>
```
```html
<div class="shadow card">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2> 
    <p>Card text</p>
  </div>
</div> 
```

👉 [See all components][netlify-url]  
🎲 [Try it online][tw-play-url]  

---

## 📘 Documents + Examples  
Read the documents for more info  
[ [daisyui.netlify.app][netlify-url] ↗︎ ]

---

<details>
<summary>
  List of components
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
- [x] Drawer
- [ ] Empty placeholder
- [ ] Footer
- [ ] Form
  - [x] Select
  - [x] Text input
  - [x] Text area
  - [x] Checkbox
  - [x] Radio
  - [ ] Range slider
  - [x] Toggle
  - [ ] Upload
- [x] Hero
- [ ] Loading
- [x] Menu
- [ ] Mockup
  - [ ] Browser
  - [x] Code
  - [x] Phone
  - [x] Window
- [x] Navbar
- [ ] Modal
- [x] Pagination
- [x] Progress
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



[install-size]: https://badgen.net/bundlephobia/min/daisyui?label=Package%20size&color=purple
[base-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/base.css?label=base.css&color=purple
[styled-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/styled.css?label=CSS%20size&color=purple
[full-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/full.css?label=full.css&color=purple
[theme-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/themes.css?label=themes.css&color=pink
[build]: https://badgen.net/github/checks/saadeghi/daisyui?label=build
[npm]: https://badgen.net/npm/v/daisyui?label=version&icon=npm&color=purple
[dl]: https://badgen.net/npm/dt/daisyui?icon=npm&color=purple
[commit]: https://badgen.net/github/last-commit/saadeghi/daisyui?icon=github&color=purple
[license]: https://badgen.net/github/license/saadeghi/daisyui?color=purple
[tweet]: https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fsaadeghi%2Fdaisyui

[install-size-url]: https://bundlephobia.com/result?p=daisyui
[base-css-url]: https://cdn.jsdelivr.net/npm/daisyui@0.8.x/dist/base.css
[styled-css-url]: https://cdn.jsdelivr.net/npm/daisyui@0.8.x/dist/styled.css
[full-css-url]: https://cdn.jsdelivr.net/npm/daisyui@0.8.x/dist/full.css
[theme-css-url]: https://cdn.jsdelivr.net/npm/daisyui@0.8.x/dist/themes.css
[license-url]: https://github.com/saadeghi/daisyui/blob/master/LICENSE
[npm-url]: https://www.npmjs.com/package/daisyui
[gh-url]: https://github.com/saadeghi/daisyui
[tw-play-url]: https://play.tailwindcss.com/whCH0z6ZlQ
[codepen-url]: https://codepen.io/saadeghi/pen/gOwWKvv
[unpkg-url]: https://unpkg.com/browse/daisyui/
[jsdeliver-url]: https://www.jsdelivr.com/package/npm/daisyui
[build-url]: https://github.com/saadeghi/daisyui/actions
[tweet-url]: https://twitter.com/intent/tweet?text=DaisyUI%20%0D%0AUI%20Components%20for%20Tailwind%20CSS%20%0D%0Ahttps://github.com/saadeghi/daisyui

[theming-url]: https://daisyui.netlify.app/docs/add-themes
[netlify-url]: https://daisyui.netlify.app/
[gh-pages-url]: https://saadeghi.github.io/daisyui-demo/
[tailwind-url]: https://tailwindcss.com/
[logo-url]: https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg
[banner-url]: https://raw.githubusercontent.com/saadeghi/files/main/daisyui/presentation/dark-theme-wide.png

