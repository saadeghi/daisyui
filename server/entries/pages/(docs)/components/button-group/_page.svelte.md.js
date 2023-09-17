import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Button group",
  "desc": "Button group shows buttons next to each other.",
  "published": true,
  "layout": "components"
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefix;
  $$unsubscribe_prefix = subscribe(prefix, (value) => value);
  $$unsubscribe_prefix();
  return `${validate_component(Mdsvex_components, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<div class="alert alert-warning"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div><div class="font-bold">${validate_component(Translate, "Translate").$$render($$result, { text: "Deprecated" }, {}, {})}</div> <div>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "This component is deprecated and will be removed in the next major version. Use <a class='link' href='/components/join'>Join</a> instead."
        },
        {},
        {}
      )}</div></div></div> ${validate_component(ClassTable, "ClassTable").$$render(
        $$result,
        {
          data: [
            {
              type: "component",
              class: "btn-group",
              desc: "Container for grouping multiple buttons"
            },
            {
              type: "responsive",
              class: "btn-group-horizontal",
              desc: "Show buttons horizontally (default)"
            },
            {
              type: "responsive",
              class: "btn-group-vertical",
              desc: "Show buttons vertically"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Button group" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$btn-group">
  <button class="$$btn $$btn-active">Button</button>
  <button class="$$btn">Button</button>
  <button class="$$btn">Button</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="btn-group" data-svelte-h="svelte-1vzja54"><button class="btn btn-active">Button</button> <button class="btn">Button</button> <button class="btn">Button</button></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Button group vertical" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$btn-group btn-group-vertical">
  <button class="$$btn $$btn-active">Button</button>
  <button class="$$btn">Button</button>
  <button class="$$btn">Button</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="btn-group btn-group-vertical" data-svelte-h="svelte-1t4apjr"><button class="btn btn-active">Button</button> <button class="btn">Button</button> <button class="btn">Button</button></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Responsive - Vertical for small screen, Horizontal on large screen"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$btn-group btn-group-vertical lg:btn-group-horizontal">
  <button class="$$btn $$btn-active">Button</button>
  <button class="$$btn">Button</button>
  <button class="$$btn">Button</button>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="btn-group btn-group-vertical lg:btn-group-horizontal" data-svelte-h="svelte-k83yo7"><button class="btn btn-active">Button</button> <button class="btn">Button</button> <button class="btn">Button</button></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Button group with radio buttons" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$btn-group">
  <input type="radio" name="options" data-title="1" class="$$btn" />
  <input type="radio" name="options" data-title="2" class="$$btn" checked />
  <input type="radio" name="options" data-title="3" class="$$btn" />
  <input type="radio" name="options" data-title="4" class="$$btn" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="btn-group" data-svelte-h="svelte-1q5izjo"><input type="radio" name="options" data-title="1" class="btn"> <input type="radio" name="options" data-title="2" checked="checked" class="btn"> <input type="radio" name="options" data-title="3" class="btn"> <input type="radio" name="options" data-title="4" class="btn"></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
