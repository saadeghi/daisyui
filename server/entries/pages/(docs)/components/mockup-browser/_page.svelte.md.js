import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Browser mockup",
  "desc": "Browser mockup shows a box that looks like a browser window.",
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
              class: "mockup-browser",
              desc: "Container element"
            },
            {
              type: "component",
              class: "mockup-browser-toolbar",
              desc: "The toolbar that can include addressbar or other things"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "browser mockup with border" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$mockup-browser border border-base-300">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input border border-base-300">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="border mockup-browser border-base-300 w-full" data-svelte-h="svelte-sd5d1v"><div class="mockup-browser-toolbar"><div class="input border border-base-300">https://daisyui.com</div></div> <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "browser mockup with background color"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$mockup-browser border bg-base-300">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="border mockup-browser bg-base-300 w-full" data-svelte-h="svelte-1qsmpip"><div class="mockup-browser-toolbar"><div class="input">https://daisyui.com</div></div> <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div></div>`;
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
