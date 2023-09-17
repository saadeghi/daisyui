import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Phone mockup",
  "desc": "Phone mockup shows a mockup of an iPhone.",
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
              class: "mockup-phone",
              desc: "Container element"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "iPhone mockup" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-phone">
  <div class="$$camera"></div> 
  <div class="$$display">
    <div class="$$artboard $$artboard-demo $$phone-1">Hi.</div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="mockup-phone" data-svelte-h="svelte-1bo3b1h"><div class="camera"></div> <div class="display"><div class="artboard artboard-demo phone-1">Hi.</div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-phone border-primary">
  <div class="$$camera"></div> 
  <div class="$$display">
    <div class="$$artboard $$artboard-demo $$phone-1">Hi.</div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="mockup-phone border-primary" data-svelte-h="svelte-eqso50"><div class="camera"></div> <div class="display"><div class="artboard artboard-demo phone-1">Hi.</div></div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
