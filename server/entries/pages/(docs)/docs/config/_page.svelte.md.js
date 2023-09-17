import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { M as Mdsvex } from "../../../../../chunks/mdsvex.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Config",
  "desc": "How to change the default configuration of daisyUI?",
  "published": true
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "daisyUI can be configured from your <code>tailwind.config.js</code> file."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render($$result, { text: "Default config" }, {}, {})}:
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>

  <span class="token comment">// add daisyUI plugin</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// daisyUI config (optional - here are the default values)</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]</span>
    <span class="token literal-property property">darkTheme</span><span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span> <span class="token comment">// name of one of the included themes for dark mode</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// applies background color and foreground color for root element by default</span>
    <span class="token literal-property property">styled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// include daisyUI colors and design decisions for all components</span>
    <span class="token literal-property property">utils</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// adds responsive and modifier utility classes</span>
    <span class="token literal-property property">rtl</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install &#96;tailwindcss-flip&#96; plugin for Tailwind CSS.</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Shows info about daisyUI version and used config in the console when building your CSS</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token comment">//...</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 id>${validate_component(Translate, "Translate").$$render($$result, { text: "Config values explained" }, {}, {})}:</h2> <ul><li><h3 id="styled" data-svelte-h="svelte-12wdwo8"><a aria-hidden="true" tabindex="-1" href="#styled"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>styled</h3> <p data-svelte-h="svelte-140327"><code>Boolean (default: true)</code></p> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If it's true, components will have colors and style so you won't need to design anything."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton."
        },
        {},
        {}
      )}</li> <li><h3 id="themes" data-svelte-h="svelte-473dtf"><a aria-hidden="true" tabindex="-1" href="#themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>themes</h3> <p data-svelte-h="svelte-b41uyo"><code>Boolean or array (default: false)</code></p> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If it's true, all themes will be included."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If it's false, only light and dark themes will be available."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If it's an array, only themes in the array will be included and the first theme will be the default theme."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Read more about <a href='/docs/themes/'>themes</a>."
        },
        {},
        {}
      )}</li> <li><h3 id="base" data-svelte-h="svelte-19o1rvq"><a aria-hidden="true" tabindex="-1" href="#base"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>base</h3> <p data-svelte-h="svelte-140327"><code>Boolean (default: true)</code></p> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added."
        },
        {},
        {}
      )}</li> <li><h3 id="utils" data-svelte-h="svelte-17zsfny"><a aria-hidden="true" tabindex="-1" href="#utils"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>utils</h3> <p data-svelte-h="svelte-140327"><code>Boolean (default: true)</code></p> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added."
        },
        {},
        {}
      )}</li> <li><h3 id="logs" data-svelte-h="svelte-u4mmx4"><a aria-hidden="true" tabindex="-1" href="#logs"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>logs</h3> <p data-svelte-h="svelte-140327"><code>Boolean (default: true)</code></p> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If it's true, daisyUI shows logs in the terminal while CSS is building."
        },
        {},
        {}
      )}</li> <li><h3 id="rtl" data-svelte-h="svelte-szskqf"><a aria-hidden="true" tabindex="-1" href="#rtl"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>rtl</h3> <p data-svelte-h="svelte-3gsp36"><code>Boolean (default: false)</code></p> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically."
        },
        {},
        {}
      )}</li> <li><h3 id="darktheme" data-svelte-h="svelte-o47ygu"><a aria-hidden="true" tabindex="-1" href="#darktheme"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>darkTheme</h3> <p data-svelte-h="svelte-1s7einc"><code>String (default: &quot;dark&quot;)</code></p> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme."
        },
        {},
        {}
      )}</li> <li><h3 id="prefix" data-svelte-h="svelte-13fjxyp"><a aria-hidden="true" tabindex="-1" href="#prefix"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>prefix</h3> <p data-svelte-h="svelte-1pou1ww"><code>String (default: &quot;&quot;)</code></p> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes)."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "For example: <code>btn</code> will become <code>prefix-btn</code>."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>."
        },
        {},
        {}
      )}</li></ul>`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
