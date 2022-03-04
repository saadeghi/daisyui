<div align="center">

[![][logo-url]][docs-url]

**Tailwind CSS Components**  
Adds component classes like `btn`, `card` and more to Tailwind CSS

[ [See all components][docs-url] ]

[![][tweet]][tweet-url]

</div>

[![][banner-url]][docs-url]

# daisyUI 2.0

[![][build]][build-url] [![][npm]][npm-url] [![][number-of-components]][docs-url] [![][license]][license-url]  
[![][dl]][npm-url] [![][stars]][gh-url] [![][commit]][gh-url]

- 👉 [ [See all components][docs-url] ]
- 📘 Documents: [daisyui.com][docs-url]
- 🎲 Try it online: [Tailwind Play][tw-play-url] | [Codepen][codepen-url]
- 📦 Source: [GitHub][gh-url] | [NPM][npm-url] | [Unpkg][unpkg-url] | [JSdeliver][jsdeliver-url] | [cdnjs][cdnjs-url]

---

## 🌼 Features

<details>
<summary>
  show / hide
</summary>

- **Tailwind CSS plugin**  
  daisyUI is a Tailwind CSS plugin. Install it and add it to your `tailwind.config.js` file.
- **Component classes**  
  Adds component classes to Tailwind. Classes like `btn`, `card`,… So you will end up with a cleaner HTML.
- **Semantic color names**  
  Adds color names like `primary`, `secondary`, `accent`,….
- **Customizable**  
  You can customize the design of components with Tailwind utility classes and CSS variables.
- **Themeable**  
  Add multiple themes and customize colors. You can even set a theme for a specific section of your page.
- **RTL supported**  
  Enable `rtl` config for right to left layouts.
- **Pure CSS**  
  No script file. Pure CSS. Works on all frameworks!

</details>

---

## 📀 Install now!

```bash
npm i daisyui
```

Then add daisyUI to your `tailwind.config.js`  
[ [Read more][docs-url-install] ]

```js
module.exports = {
  plugins: [require("daisyui")],
};
```

<details>
<summary>
  Or use a CDN
</summary>

Loading CSS files from CDN is not recommended for production. It's better to install Tailwind and daisyUI as Nodejs dependencies so you can config/customize everything, and purge unused styles.

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@2.5.0/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>
```

</details>

---

## 🚀 Use

Use component classes to build your UI.

```html
<a class="btn">Hello!</a>
```

```html
<input type="checkbox" class="checkbox" />
```

```html
<input type="checkbox" class="toggle" />
```

```html
<div class="alert alert-success">Message sent successfully</div>
```

👉 [See all components][docs-url]  
🎲 [Try it online][tw-play-url]

---

## 📘 Documents + Examples

See the official site:  
[ [daisyui.com][docs-url] ↗︎ ]

---

## 🤝 Contributing

Read the documents for more info:  
[ [Read contribution guide](https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md) ]

---

## List of Components

<details>
<summary>
  show / hide
</summary>

- Actions
  - [x] Button
  - [x] Dropdown
  - [x] Modal
  - [x] Swap

- Data display
  - [x] Alert
  - [x] Avatar
  - [x] Badge
  - [ ] Banner
  - [ ] Calendar
  - [x] Card
  - [x] Carousel
  - [ ] Chat bubble
  - [x] Collapse
  - [ ] Comment
  - [x] Countdown
  - [ ] Empty placeholder
  - [x] Kbd
  - [ ] Loading
  - [x] Progress
  - [x] Radial progress
  - [x] Stat
  - [x] Table
  - [ ] Tag
  - [ ] Timeline
  - [ ] Toast
  - [x] Tooltip
  - [ ] Treeview

- Data input
  - [x] Checkbox
  - [x] Text input
  - [x] Radio
  - [x] Range
  - [x] Rating
  - [x] Select
  - [x] Textarea
  - [x] Toggle
  - [ ] Upload
  
- Layout
  - [x] Artboard
  - [x] Button group
  - [x] Divider
  - [x] Drawer
  - [x] Footer
  - [x] Hero
  - [x] Indicator
  - [x] Input group
  - [x] Mask
  - [x] Stack

- Navigation
  - [ ] App bar
  - [x] Breadcrumbs
  - [x] Link
  - [x] Menu
  - [x] Navbar
  - [x] Pagination
  - [x] Steps
  - [x] Tab

- Mockup
  - [ ] Browser
  - [x] Code
  - [x] Phone
  - [x] Window


</details>

---

## Featured on:

<details>
<summary>
  show / hide
</summary>
  
- Blogs
  - [Logrocket](https://blog.logrocket.com/daisyui-tailwind-components-react-apps/)
  - [GraphCMS](https://graphcms.com/blog/build-a-personal-timeline-with-graphcms-and-sveltekit)
  - [wweb.dev](https://wweb.dev/weekly/85/)
  - [flaming.codes](https://flaming.codes/posts/boostrap-tailwind-alternative-with-daisy-ui)
  - [rockyourcode](https://www.rockyourcode.com/how-to-setup-react-typescript-with-snowpack-and-daisyui/)
  - [HackerNews](https://news.ycombinator.com/item?id=28004515)
  - [Product Hunt](https://www.producthunt.com/posts/daisyui)
  - [Siecle Digital](https://siecledigital.fr/2021/05/29/daisyui-plugin-gratuit-avec-composants-tailwind-css-a/)
  - [speckyboy](https://speckyboy.com/weekly-news-for-designers-594/)
  - [dailydev](https://app.daily.dev/posts/-4OPGw0te)
  - [Future Tech Blog (Japanese)](https://future-architect.github.io/articles/20211124a/)
- Youtube videos
  - [Supabase & Sveltekit - Build Twitter in 75 minutes](https://www.youtube.com/watch?v=mPQyckogDYc)
  - [Setup the Best Frontend JavaScript Stack - Svelte, Vite, TailwindCSS and DaisyUI](https://www.youtube.com/watch?v=mEBPN_9jTAE)
  - [Jamstack powered Image gallery with Cloudinary, Tailwind and DaisyUI](https://www.youtube.com/watch?v=Hpjq0D1vcpM)
  - [SvelteKit Crash Course w/ Tailwind CSS and DaisyUI, GraphQL and dynamic routes](https://www.youtube.com/watch?v=zH2qG9YwN3s)
  - [DaisyUI : Worth a try or skip on by?](https://www.youtube.com/watch?v=hM9fENyAquM)
  - [How to use daisyUI in SvelteKit?](https://www.youtube.com/watch?v=haKnkk6ds20) 
  - [DaisyUI Untuk Yang Mau Pindah ke TailwindCSS dari Bootstrap (Indonesian)](https://www.youtube.com/watch?v=Wm2g6FWec34)
  - [Next.js - Tailwind - DeisyUI Setup](https://www.youtube.com/watch?v=uXQgJbUj3PQ)
  - [Svelte Setup with Vite, Tailwind, DaisyUI. Custom Themes!](https://www.youtube.com/watch?v=5lF5PxBJoso)
  - [Build a blog with Svelte](https://www.youtube.com/watch?v=u9jtHBE6NL8)
  - [Building a product in less than 10 minutes: Laravel, InertiaJS, VueJS, TailwindCSS, DaisyUI](https://www.youtube.com/watch?v=XR1rS-CCfx0)
  - [Infinite scrolling with MERN | ReactJS, TailwindCSS v3, DaisyUI | NodeJs, Express, MongoDB](https://www.youtube.com/watch?v=y7LYoRGRqRI)
  - [How to install TailwindCSS v3 and DaisyUI to your React app](https://www.youtube.com/watch?v=XBYvzPe7skc)
  - [Laravel: DaisyUI Agiliza Tus Desarrollos Con TailwindCSS + Select2 Tailwind Style (Spanish)](https://www.youtube.com/watch?v=28db3jojTgo)
- Courses
  - [Building with SvelteKit and GraphCMS](https://explorers.netlify.com/learn/building-with-sveltekit-and-graphcms)
  - [Svelte for Beginners by Mike Karan](https://www.udemy.com/course/svelte-for-beginners/)
  - [React Front To Back 2022 by Brad Traversy](https://www.udemy.com/course/react-front-to-back-2022/)
  - [Build Instagram profile page UI clone w/Next.js TailwindCSS](https://www.udemy.com/course/build-instagram-profile-page-ui-clone-nextjs-tailwindcss/)
  - [Instagram UI Clone Login Page w/ NextJS & TailwindCSS](https://www.udemy.com/course/instagram-ui-clone-login-page-w-nextjs-tailwindcss/)
  - [Build your Developer Portfolio and Blog from Scratch with Svelte and GraphCMS](https://www.freecodecamp.org/news/build-your-developer-portfolio-from-scratch-with-sveltekit-and-graphcms/)

</details>

---

<div align="center">
  
  
༼ つ ◕_◕ ༽つ  Please share  
  
[![][tweet]][tweet-url]

</div>

[install-size]: https://badgen.net/bundlephobia/minzip/daisyui?label=bundle%20size&color=green
[build]: https://badgen.net/github/checks/saadeghi/daisyui?label=build
[npm]: https://badgen.net/github/tag/saadeghi/daisyui?label=version&color=green
[dl]: https://badgen.net/npm/dt/daisyui?label=installs&icon=npm&color=green
[commit]: https://badgen.net/github/last-commit/saadeghi/daisyui?icon=github&color=green
[license]: https://badgen.net/github/license/saadeghi/daisyui?color=green
[stars]: https://badgen.net/github/stars/saadeghi/daisyui?color=green
[tweet]: https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fsaadeghi%2Fdaisyui
[install-size-url]: https://bundlephobia.com/result?p=daisyui
[license-url]: https://github.com/saadeghi/daisyui/blob/master/LICENSE
[npm-url]: https://www.npmjs.com/package/daisyui
[cdnjs-url]: https://cdnjs.com/libraries/daisyui
[gh-url]: https://github.com/saadeghi/daisyui
[tw-play-url]: https://daisyui.com/tailwindplay
[codepen-url]: https://codepen.io/saadeghi/pen/gOwWKvv
[unpkg-url]: https://unpkg.com/browse/daisyui/
[jsdeliver-url]: https://www.jsdelivr.com/package/npm/daisyui
[build-url]: https://github.com/saadeghi/daisyui/actions
[tweet-url]: https://twitter.com/intent/tweet?text=daisyUI%20%0D%0AUI%20Components%20for%20Tailwind%20CSS%20%0D%0Ahttps://github.com/saadeghi/daisyui
[number-of-components]: https://badgen.net/badge/total%20components/45/green
[docs-url-install]: https://daisyui.com/docs/install
[docs-url]: https://daisyui.com/
[logo-url]: https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg
[banner-url]: https://raw.githubusercontent.com/saadeghi/files/main/daisyui/card-3.png
