import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { M as Mdsvex } from "../../../../../chunks/mdsvex.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Customize daisyUI components",
  "desc": "How to customize daisyUI?",
  "published": true
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything."
        },
        {},
        {}
      )}</p> <p>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "But you can still customize components in many ways."
        },
        {},
        {}
      )}</p> <ul><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Let's say, you want to customize this button:"
        },
        {},
        {}
      )}</li></ul> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <button class="btn" data-svelte-h="svelte-110q4ch">Button</button> <ol><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can use daisyUI utility classes:"
        },
        {},
        {}
      )}</li></ol> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-accent btn-outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <button class="btn btn-primary" data-svelte-h="svelte-1iu17yi">One</button> <button class="btn btn-secondary" data-svelte-h="svelte-12ic5ow">Two</button> <button class="btn btn-accent btn-outline" data-svelte-h="svelte-6ho0df">Three</button> <ol start="2"><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can use Tailwind's utility classes:"
        },
        {},
        {}
      )}</li></ol> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn rounded-full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn rounded-none px-16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <button class="rounded-full btn" data-svelte-h="svelte-zz4vpq">One</button> <button class="px-16 rounded-none btn" data-svelte-h="svelte-v8bxlh">Two</button> <ol start="3"><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can customize components on your CSS file, using Tailwind's @apply directive:"
        },
        {},
        {}
      )}</li></ol> <pre class="language-css"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.btn</span> <span class="token punctuation">&#123;</span>
  <span class="token atrule"><span class="token rule">@apply</span> rounded-full<span class="token punctuation">;</span></span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <ol start="4"><li>${validate_component(Translate, "Translate").$$render($$result, { text: "You can also:" }, {}, {})}</li></ol> <ul><li><a href="/theme-generator">${validate_component(Translate, "Translate").$$render($$result, { text: "Add your own theme." }, {}, {})}</a></li> <li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>."
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
