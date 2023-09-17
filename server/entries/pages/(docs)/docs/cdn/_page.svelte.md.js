import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { M as Mdsvex } from "../../../../../chunks/mdsvex.js";
import { r as readEnv } from "../../../../../chunks/i18n.js";
import { I as InstallTabs } from "../../../../../chunks/InstallTabs.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Use daisyUI from CDN",
  "desc": "How to use daisyUI from a CDN?",
  "published": true
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let version = readEnv("VITE_DAISYUI_VERSION", "latest");
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(InstallTabs, "InstallTabs").$$render($$result, {}, {}, {})} <div class="max-w-3xl alert alert-warning mb-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div><div class="font-bold">${validate_component(Translate, "Translate").$$render($$result, { text: "Warning" }, {}, {})}</div> <div class="text-sm">${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large."
        },
        {},
        {}
      )}</div></div></div> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You don't need to install anything."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Just add one of these to the <code>head</code> tag of your HTML"
        },
        {},
        {}
      )}:
<ul><li>daisyUI <code>${escape(version)}</code> CSS file + Tailwind CSS CDN script:</li></ul> <pre class="language-html"><code class="language-html">
<span class="token tag"><span class="token tag" data-svelte-h="svelte-1fb7udk"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name" data-svelte-h="svelte-1s5iglc">href</span><span class="token attr-value"><span class="token punctuation attr-equals" data-svelte-h="svelte-bwz0n6">=</span><span class="token punctuation" data-svelte-h="svelte-hek2gm">&quot;</span>https://cdn.jsdelivr.net/npm/daisyui@${escape(version)}/dist/full.css<span class="token punctuation" data-svelte-h="svelte-hek2gm">&quot;</span></span> <span class="token attr-name" data-svelte-h="svelte-r4xi9s">rel</span><span class="token attr-value" data-svelte-h="svelte-1i2z5ks"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name" data-svelte-h="svelte-6m6x1h">type</span><span class="token attr-value" data-svelte-h="svelte-6tvbl"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token punctuation" data-svelte-h="svelte-9xt5jp">/&gt;</span></span>
<span class="token tag" data-svelte-h="svelte-ommo7k"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.tailwindcss.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag" data-svelte-h="svelte-1kkwune"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre>`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
