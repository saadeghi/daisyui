import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Divider",
  "desc": "Divider will be used to separate content vertically or horizontally.",
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
              class: "divider",
              desc: "Put a divider line between two elements"
            },
            {
              type: "responsive",
              class: "divider-vertical",
              desc: "Divide elements on top of each other (default)"
            },
            {
              type: "responsive",
              class: "divider-horizontal",
              desc: "Divide elements next to each other"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Divider" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="flex flex-col w-full border-opacity-50">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  <div class="$$divider">OR</div>
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col w-full" data-svelte-h="svelte-x5jme9"><div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> <div class="divider">OR</div> <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Divider horizontal" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="flex w-full">
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  <div class="$$divider $$divider-horizontal">OR</div>
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex w-full" data-svelte-h="svelte-1sv1cu1"><div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div> <div class="divider divider-horizontal">OR</div> <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Divider with no text" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="$$divider"></div> 
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col w-full" data-svelte-h="svelte-16kblxc"><div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> <div class="divider"></div> <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "responsive (lg:divider-horizontal)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="flex flex-col w-full lg:flex-row">
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="$$divider lg:$$divider-horizontal">OR</div> 
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="flex flex-col w-full lg:flex-row" data-svelte-h="svelte-18hm0fz"><div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> <div class="divider lg:divider-horizontal">OR</div> <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div></div>`;
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
