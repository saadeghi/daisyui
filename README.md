<div align="center">

[![][logo-url]](#)  

**UI Components for Tailwind CSS**  
Themeable, Scalable and Designer-Friendly  
[ [See all components][demo-url] ]
  
[![][tweet]][tweet-url]  

</div>

# DaisyUI

[![][build]][build-url] [![][install-size]][install-size-url] [![][base-css]][base-css-url] [![][styled-css]][styled-css-url]  
[![][npm]][npm-url] [![][dl]][npm-url] [![][commit]][gh-url] [![][license]][license-url]

---

## 🔗 Links
- 👉 [See all components][demo-url]
- ⛹️‍♀️ [Tailwind Play - Try it online][tw-play-url]
- 📘 [Theming guide][theming-url]
- 📘 [List of components][components-url]
- 📘 [FAQ][faq-url]
- 🐙 [GitHub][gh-url]
- 📦 [NPM][npm-url]

---

## 🌼 Features   
- **CSS components**: Use classes like `btn`, `card`, ...
- **Designer-friendly**: DaisyUI has 2 versions:
  - **Styled**: Beatiful UI library, no need to design elements (but still customizable).
  - **Base**: Only skeleton of components. No style, no colors.
- **Scalable**: All your components will use the same style based on a design system.
- **Customizable**: Customize the style of elements with Tailwind utility classes.
- **Themeable**: Add multiple themes or change colors with a CSS variable.
- **Semantic color names**: Use color names like `primary`, `secondary`, `accent`, ... just like your design system defines.  
[ [read more][faq-url] ]

---

## 👩‍💻 Install   

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

## 🎨 Customize theme and colors (optional)  
Add your custom colors in CSS file  
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
[tw-play-url]: https://play.tailwindcss.com/hn9vnQsIn2
[build-url]: https://github.com/saadeghi/daisyui/actions
[tweet-url]: https://twitter.com/intent/tweet?text=Checkout%20DaisyUI%20on%20github%20https://github.com/saadeghi/daisyui

[theming-url]: https://github.com/saadeghi/daisyui/blob/master/docs/theming.md
[faq-url]: https://github.com/saadeghi/daisyui/blob/master/docs/faq.md
[components-url]: https://github.com/saadeghi/daisyui/blob/master/docs/components.md
[demo-url]: https://daisyui.netlify.app/
[tailwind-url]: https://tailwindcss.com/
[logo-url]: https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg

