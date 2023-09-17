import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Window mockup",
  "desc": "Window mockup shows a box that looks like an operating system window.",
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
              class: "mockup-window",
              desc: "Container element"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "window mockup with border" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-window border border-base-300">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="border mockup-window border-base-300 w-full" data-svelte-h="svelte-d9jmkr"><div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "window mockup with background color"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$mockup-window border bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="border mockup-window bg-base-300 w-full" data-svelte-h="svelte-41p9od"><div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
