import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { M as Mdsvex } from "../../../../../chunks/mdsvex.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Add component classes to your HTML",
  "desc": "How to use daisyUI classes to style your page?",
  "published": true
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc."
        },
        {},
        {}
      )} <ol><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "So instead of making a button using only utility classes"
        },
        {},
        {}
      )}:</li></ol> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Button
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <button class="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-gray-800 rounded-md cursor-pointer hover:bg-gray-900" data-svelte-h="svelte-18x0zgi">Button</button> <ol start="2"><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can just use a component class like this"
        },
        {},
        {}
      )}:</li></ol> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <button class="btn" data-svelte-h="svelte-110q4ch">Button</button> <ol start="3"><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Then you can modify the component with daisyUI additional utility classes"
        },
        {},
        {}
      )}:</li></ol> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <button class="btn btn-primary" data-svelte-h="svelte-9jdat2">Button</button> <ol start="4"><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Or you can modify the component with Tailwind CSS utility classes"
        },
        {},
        {}
      )}:</li></ol> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn w-64 rounded-full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <button class="w-64 rounded-full btn" data-svelte-h="svelte-1v2xdyu">Button</button>`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
