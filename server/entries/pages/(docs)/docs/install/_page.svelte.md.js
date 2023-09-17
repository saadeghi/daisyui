import { c as create_ssr_component, v as validate_component, d as each, b as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { M as Mdsvex } from "../../../../../chunks/mdsvex.js";
import "@svelte-put/inline-svg";
import { I as InstallTabs } from "../../../../../chunks/InstallTabs.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
import { f as exampleRepos } from "../../../../../chunks/i18n.js";
const metadata = {
  "title": "Install daisyUI as a Tailwind CSS plugin",
  "desc": "How to install daisyUI as a Tailwind CSS plugin?",
  "published": true
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(InstallTabs, "InstallTabs").$$render($$result, {}, {}, {})} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed."
        },
        {},
        {}
      )} <ol><li>${validate_component(Translate, "Translate").$$render($$result, { text: "Install daisyUI" }, {}, {})}:</li></ol> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">npm i -D daisyui@latest</code>`}<!-- HTML_TAG_END --></pre> <ol start="2"><li>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Then add daisyUI to your <code>tailwind.config.js</code> files"
        },
        {},
        {}
      )}:</li></ol> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 id>${validate_component(Translate, "Translate").$$render($$result, { text: "daisyUI example repositories" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools."
        },
        {},
        {}
      )} <div class="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 my-10 gap-6">${each(exampleRepos, ({ name, href, logos }) => {
        return `<a class="card border-2 border-base-content/5 card-compact transition-all duration-200 hover:shadow hover:-translate-y-1"${add_attribute("href", href, 0)} target="\\_blank" rel="noopener, noreferrer"><figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end overflow-visible">${logos.length === 1 ? `<svg width="96" height="96" class="aspect-square w-full h-auto"></svg>` : `<div class="grid w-full"><svg width="96" height="96" class="aspect-square col-start-1 row-start-1 w-full h-auto"></svg> <svg width="96" height="96" class="aspect-square col-start-1 row-start-1 w-3/5 -mr-4 -mb-4 place-self-end justify-self-end drop-shadow-md h-auto"></svg> </div>`}</figure> <div class="card-body text-center"><span class="text-xs">${escape(name)}</span></div> </a>`;
      })}</div>`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
