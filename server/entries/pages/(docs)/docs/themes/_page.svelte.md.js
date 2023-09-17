import { c as create_ssr_component, d as each, b as add_attribute, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { M as Mdsvex } from "../../../../../chunks/mdsvex.js";
import { b as themes } from "../../../../../chunks/i18n.js";
import "theme-change";
import { T as Translate } from "../../../../../chunks/Translate.js";
const ThemePreviews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">${each(themes, (theme) => {
    return `<div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"${add_attribute("data-set-theme", theme.id, 0)} data-act-class="!outline-base-content"><div${add_attribute("data-theme", theme.id, 0)} class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div> <div class="bg-base-300 col-start-1 row-start-3"></div> <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2"><div class="font-bold">${escape(theme.id)}</div> <div class="flex flex-wrap gap-1" data-svelte-h="svelte-1kw79c2"><div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-primary-content text-sm font-bold">A</div></div> <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-secondary-content text-sm font-bold">A</div></div> <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-accent-content text-sm font-bold">A</div></div> <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-neutral-content text-sm font-bold">A</div></div> </div></div> </div></div> </div>`;
  })}</div>`;
});
const metadata = {
  "title": "daisyUI themes",
  "desc": "How to use daisyUI themes?",
  "published": true
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "daisyUI comes with a number of themes, which you can use with no extra effort."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Each theme defines a set of colors which will be used on all daisyUI elements."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:"
        },
        {},
        {}
      )} <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"light"</span><span class="token punctuation">,</span> <span class="token string">"dark"</span><span class="token punctuation">,</span> <span class="token string">"cupcake"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cupcake<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <blockquote>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage."
        },
        {},
        {}
      )}</blockquote> <h2 id>${validate_component(Translate, "Translate").$$render($$result, { text: "List of themes" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render($$result, { text: "Try them:" }, {}, {})} ${validate_component(ThemePreviews, "ThemePreviews").$$render($$result, {}, {}, {})} <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"light"</span><span class="token punctuation">,</span>
      <span class="token string">"dark"</span><span class="token punctuation">,</span>
      <span class="token string">"cupcake"</span><span class="token punctuation">,</span>
      <span class="token string">"bumblebee"</span><span class="token punctuation">,</span>
      <span class="token string">"emerald"</span><span class="token punctuation">,</span>
      <span class="token string">"corporate"</span><span class="token punctuation">,</span>
      <span class="token string">"synthwave"</span><span class="token punctuation">,</span>
      <span class="token string">"retro"</span><span class="token punctuation">,</span>
      <span class="token string">"cyberpunk"</span><span class="token punctuation">,</span>
      <span class="token string">"valentine"</span><span class="token punctuation">,</span>
      <span class="token string">"halloween"</span><span class="token punctuation">,</span>
      <span class="token string">"garden"</span><span class="token punctuation">,</span>
      <span class="token string">"forest"</span><span class="token punctuation">,</span>
      <span class="token string">"aqua"</span><span class="token punctuation">,</span>
      <span class="token string">"lofi"</span><span class="token punctuation">,</span>
      <span class="token string">"pastel"</span><span class="token punctuation">,</span>
      <span class="token string">"fantasy"</span><span class="token punctuation">,</span>
      <span class="token string">"wireframe"</span><span class="token punctuation">,</span>
      <span class="token string">"black"</span><span class="token punctuation">,</span>
      <span class="token string">"luxury"</span><span class="token punctuation">,</span>
      <span class="token string">"dracula"</span><span class="token punctuation">,</span>
      <span class="token string">"cmyk"</span><span class="token punctuation">,</span>
      <span class="token string">"autumn"</span><span class="token punctuation">,</span>
      <span class="token string">"business"</span><span class="token punctuation">,</span>
      <span class="token string">"acid"</span><span class="token punctuation">,</span>
      <span class="token string">"lemonade"</span><span class="token punctuation">,</span>
      <span class="token string">"night"</span><span class="token punctuation">,</span>
      <span class="token string">"coffee"</span><span class="token punctuation">,</span>
      <span class="token string">"winter"</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "The default theme is <code>light</code> (or <code>dark</code> for dark mode)"
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>"
        },
        {},
        {}
      )} <h2 id="-1"><a aria-hidden="true" tabindex="-1" href="#-1" data-svelte-h="svelte-1trhte2"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render($$result, { text: "How to remove unused themes?" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can only include the themes you want in your project."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "This will reduce the size of your CSS file."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render($$result, { text: "In the below example" }, {}, {})} <ul><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "<code>cupcake</code> will be the default theme for light mode"
        },
        {},
        {}
      )}</li> <li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "<code>dark</code> will be the default theme for dark mode"
        },
        {},
        {}
      )}</li> <li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>"
        },
        {},
        {}
      )}</li></ul> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"cupcake"</span><span class="token punctuation">,</span> <span class="token string">"dark"</span><span class="token punctuation">,</span> <span class="token string">"cmyk"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 id="-2"><a aria-hidden="true" tabindex="-1" href="#-2" data-svelte-h="svelte-les9x9"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render($$result, { text: "How to disable all themes?" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If you only want the default light and dark themes, set <code>themes</code> config to false."
        },
        {},
        {}
      )} <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array."
        },
        {},
        {}
      )} <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 id="-3"><a aria-hidden="true" tabindex="-1" href="#-3" data-svelte-h="svelte-10vq208"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "How to use a theme only for a section of a page?"
        },
        {},
        {}
      )}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can nest themes and there is no limit!"
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can force a section of your HTML to only use a specific theme."
        },
        {},
        {}
      )} <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    This div will always use light theme
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>retro<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This span will always use retro theme!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <h2 id="-4"><a aria-hidden="true" tabindex="-1" href="#-4" data-svelte-h="svelte-1esoxbv"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render($$result, { text: "How to add a new custom theme?" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can add a new theme from <code>tailwind.config.js</code> file."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes."
        },
        {},
        {}
      )} <ul><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "The first theme (<code>mytheme</code>) will be the default theme."
        },
        {},
        {}
      )}</li> <li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "<code>dark</code> theme will be the default theme for dark mode."
        },
        {},
        {}
      )}</li></ul> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button)."
        },
        {},
        {}
      )} <div class="alert alert-info text-sm mb-2 max-w-3xl not-prose"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors."
        },
        {},
        {}
      )}</p></div> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">mytheme</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token string-property property">"primary"</span><span class="token operator">:</span> <span class="token string">"#a991f7"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"secondary"</span><span class="token operator">:</span> <span class="token string">"#f6d860"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"accent"</span><span class="token operator">:</span> <span class="token string">"#37cdbe"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"neutral"</span><span class="token operator">:</span> <span class="token string">"#3d4451"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"base-100"</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token string">"dark"</span><span class="token punctuation">,</span>
      <span class="token string">"cupcake"</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 id="-5"><a aria-hidden="true" tabindex="-1" href="#-5" data-svelte-h="svelte-1ndbw9i"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render($$result, { text: "CSS variables in daisyUI themes" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:"
        },
        {},
        {}
      )} <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">mytheme</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token string-property property">"primary"</span><span class="token operator">:</span> <span class="token string">"#a991f7"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"secondary"</span><span class="token operator">:</span> <span class="token string">"#f6d860"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"accent"</span><span class="token operator">:</span> <span class="token string">"#37cdbe"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"neutral"</span><span class="token operator">:</span> <span class="token string">"#3d4451"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"base-100"</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>

          <span class="token string-property property">"--rounded-box"</span><span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span> <span class="token comment">// border radius rounded-box utility class, used in card and other large boxes</span>
          <span class="token string-property property">"--rounded-btn"</span><span class="token operator">:</span> <span class="token string">"0.5rem"</span><span class="token punctuation">,</span> <span class="token comment">// border radius rounded-btn utility class, used in buttons and similar element</span>
          <span class="token string-property property">"--rounded-badge"</span><span class="token operator">:</span> <span class="token string">"1.9rem"</span><span class="token punctuation">,</span> <span class="token comment">// border radius rounded-badge utility class, used in badges and similar</span>
          <span class="token string-property property">"--animation-btn"</span><span class="token operator">:</span> <span class="token string">"0.25s"</span><span class="token punctuation">,</span> <span class="token comment">// duration of animation when you click on button</span>
          <span class="token string-property property">"--animation-input"</span><span class="token operator">:</span> <span class="token string">"0.2s"</span><span class="token punctuation">,</span> <span class="token comment">// duration of animation for inputs like checkbox, toggle, radio, etc</span>
          <span class="token string-property property">"--btn-text-case"</span><span class="token operator">:</span> <span class="token string">"uppercase"</span><span class="token punctuation">,</span> <span class="token comment">// set default text transform for buttons</span>
          <span class="token string-property property">"--btn-focus-scale"</span><span class="token operator">:</span> <span class="token string">"0.95"</span><span class="token punctuation">,</span> <span class="token comment">// scale transform of button when you focus on it</span>
          <span class="token string-property property">"--border-btn"</span><span class="token operator">:</span> <span class="token string">"1px"</span><span class="token punctuation">,</span> <span class="token comment">// border width of buttons</span>
          <span class="token string-property property">"--tab-border"</span><span class="token operator">:</span> <span class="token string">"1px"</span><span class="token punctuation">,</span> <span class="token comment">// border width of tabs</span>
          <span class="token string-property property">"--tab-radius"</span><span class="token operator">:</span> <span class="token string">"0.5rem"</span><span class="token punctuation">,</span> <span class="token comment">// border radius of tabs</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 id="-6"><a aria-hidden="true" tabindex="-1" href="#-6" data-svelte-h="svelte-18czmeh"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render($$result, { text: "Custom CSS for a daisyUI theme" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can apply custom style to a daisyUI themes using CSS:"
        },
        {},
        {}
      )} <pre class="language-css"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">[data-theme="mytheme"] .btn</span> <span class="token punctuation">&#123;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 id="-7"><a aria-hidden="true" tabindex="-1" href="#-7" data-svelte-h="svelte-1147cro"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "How to customize an existing theme?"
        },
        {},
        {}
      )}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:"
        },
        {},
        {}
      )} <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"[data-theme=light]"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">"primary"</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"primary-focus"</span><span class="token operator">:</span> <span class="token string">"mediumblue"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 id="-8"><a aria-hidden="true" tabindex="-1" href="#-8" data-svelte-h="svelte-1lhqozb"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "How to add custom styles for a specific theme?"
        },
        {},
        {}
      )}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can write custom style for your elements only for a specific theme."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "In this example, .btn-twitter class only will have this style on light theme."
        },
        {},
        {}
      )} <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"[data-theme=light]"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">".btn-twitter"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            <span class="token string-property property">"background-color"</span><span class="token operator">:</span> <span class="token string">"#1EA1F1"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"border-color"</span><span class="token operator">:</span> <span class="token string">"#1EA1F1"</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token string-property property">".btn-twitter:hover"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            <span class="token string-property property">"background-color"</span><span class="token operator">:</span> <span class="token string">"#1C96E1"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"border-color"</span><span class="token operator">:</span> <span class="token string">"#1C96E1"</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
