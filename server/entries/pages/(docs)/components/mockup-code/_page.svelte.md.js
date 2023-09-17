import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Code mockup",
  "desc": "Code mockup is used to show a block of code in a box that looks like a code editor.",
  "published": true,
  "layout": "components"
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefix;
  $$unsubscribe_prefix = subscribe(prefix, (value) => value);
  $$unsubscribe_prefix();
  return `${validate_component(Mdsvex_components, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(ClassTable, "ClassTable").$$render(
        $$result,
        {
          data: [
            {
              type: "component",
              class: "mockup-code",
              desc: "Container element"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "mockup code with line prefix" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="mockup-code" data-svelte-h="svelte-1tpfp1w"><pre data-prefix="$"><code>npm i daisyui</code></pre></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Multi line" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre> 
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="mockup-code" data-svelte-h="svelte-cizybz"><pre data-prefix="$"><code>npm i daisyui</code></pre> <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> <pre data-prefix=">" class="text-success"><code>Done!</code></pre></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Highlighted line" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-code">
  <pre data-prefix="1"><code>npm i daisyui</code></pre> 
  <pre data-prefix="2"><code>installing...</code></pre> 
  <pre data-prefix="3" class="bg-warning text-warning-content"><code>Error!</code></pre>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="mockup-code" data-svelte-h="svelte-1516gfz"><pre data-prefix="1"><code>npm i daisyui</code></pre> <pre data-prefix="2"><code>installing...</code></pre> <pre data-prefix="3" class="bg-warning text-warning-content"><code>Error!</code></pre></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Long line will scroll" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-code">
  <pre data-prefix="~"><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="mockup-code" data-svelte-h="svelte-1iln4kw"><pre data-prefix="~"><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Without prefix" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-code">
  <pre><code>without prefix</code></pre>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="mockup-code" data-svelte-h="svelte-sm52yy"><pre><code>without prefix</code></pre></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-code bg-primary text-primary-content">
  <pre><code>can be any color!</code></pre>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="mockup-code bg-primary text-primary-content" data-svelte-h="svelte-sa9cyp"><pre><code>can be any color!</code></pre></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
