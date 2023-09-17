import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { M as Mdsvex_blog } from "../../../../../chunks/mdsvex-blog.js";
const metadata = {
  "title": "All about daisyUI color system and comparing it to Tailwind CSS color names",
  "desc": "Why use semantic color names instead of Tailwind CSS color shades? Accessing to all color shades or using a color system... Which one is better?",
  "published": true,
  "date": "2023-9-11",
  "author": "Pouya Saadeghi",
  "thumbnail": "/images/blog/semantic-colors.jpg",
  "tags": ["Colors"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex_blog, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1p58gy0">Tailwind CSS as a general purpose utility-first CSS framework, provides all the color shades you may need for your website. Basically every shade of every color. However it’s not a good idea to have all those colors in your website. You should choose a few colors and use them consistently across your website.</p> <p data-svelte-h="svelte-15whju6">A good design practice is to have a color system with semantic color names.<br>
A standard approach is to have brand color names like <code>primary</code>, <code>secondary</code>, <code>accent</code>, and state colors like <code>success</code>, <code>warning</code>, <code>error</code>, <code>info</code>. In addition to some neutral color shades for the background, text, and border colors.
<img src="/images/blog/daisyui-semantic-colors.jpg" alt="Semantic colors">
daisyUI offers a limited set of semantic color names where can have any value (thanks to CSS variables).</p> <p data-svelte-h="svelte-7dzwlb">Using this color system your website can have a different look and feel by simply changing the color values once. You don’t need to change the color of each element individually.</p> <p data-svelte-h="svelte-kcr9qq">Semantic color names make more sense because when we design interfaces, we don’t just use any random color. We define a specific color palette with names like primary, secondary, etc. and we only use those specific colors in our interfaces. Also, using semantic color names makes theming easier. You wouldn’t have to define dark-mode colors for every single element and you wouldn’t be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.</p> <p data-svelte-h="svelte-1j7d3ka">Read more about <a href="https://daisyui.com/docs/colors" rel="nofollow">daisyUI color system</a>.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
