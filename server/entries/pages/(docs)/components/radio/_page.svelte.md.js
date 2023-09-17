import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Radio",
  "desc": "Radio buttons allow the user to select one option from a set.",
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
              class: "form-control",
              desc: "Container element"
            },
            {
              type: "component",
              class: "radio",
              desc: "For radio input"
            },
            {
              type: "modifier",
              class: "radio-primary",
              desc: "Adds `primary` to radio"
            },
            {
              type: "modifier",
              class: "radio-secondary",
              desc: "Adds `secondary` to radio"
            },
            {
              type: "modifier",
              class: "radio-accent",
              desc: "Adds `accent` to radio"
            },
            {
              type: "modifier",
              class: "radio-success",
              desc: "Adds `success` to radio"
            },
            {
              type: "modifier",
              class: "radio-warning",
              desc: "Adds `warning` to radio"
            },
            {
              type: "modifier",
              class: "radio-info",
              desc: "Adds `info` to radio"
            },
            {
              type: "modifier",
              class: "radio-error",
              desc: "Adds `error` to radio"
            },
            {
              type: "responsive",
              class: "radio-lg",
              desc: "Large radio"
            },
            {
              type: "responsive",
              class: "radio-md",
              desc: "Medium radio (default)"
            },
            {
              type: "responsive",
              class: "radio-sm",
              desc: "Small radio"
            },
            {
              type: "responsive",
              class: "radio-xs",
              desc: "Extra small radio"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Radio" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="radio" name="radio-1" class="$$radio" checked />
<input type="radio" name="radio-1" class="$$radio" />`)}</pre>`;
        },
        default: () => {
          return `<input type="radio" name="radio-1" class="radio" checked> <input type="radio" name="radio-1" class="radio">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="radio" name="radio-2" class="$$radio $$radio-primary" checked />
<input type="radio" name="radio-2" class="$$radio $$radio-primary" />`)}</pre>`;
        },
        default: () => {
          return `<input type="radio" name="radio-2" class="radio radio-primary" checked> <input type="radio" name="radio-2" class="radio radio-primary">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="radio" name="radio-3" class="$$radio $$radio-secondary" checked />
<input type="radio" name="radio-3" class="$$radio $$radio-secondary" />`)}</pre>`;
        },
        default: () => {
          return `<input type="radio" name="radio-3" class="radio radio-secondary" checked> <input type="radio" name="radio-3" class="radio radio-secondary">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="radio" name="radio-4" class="$$radio $$radio-accent" checked />
<input type="radio" name="radio-4" class="$$radio $$radio-accent" />`)}</pre>`;
        },
        default: () => {
          return `<input type="radio" name="radio-4" class="radio radio-accent" checked> <input type="radio" name="radio-4" class="radio radio-accent">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="radio" name="radio-5" class="$$radio $$radio-success" checked />
<input type="radio" name="radio-5" class="$$radio $$radio-success" />`)}</pre>`;
        },
        default: () => {
          return `<input type="radio" name="radio-5" class="radio radio-success" checked> <input type="radio" name="radio-5" class="radio radio-success">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="radio" name="radio-6" class="$$radio $$radio-warning" checked />
<input type="radio" name="radio-6" class="$$radio $$radio-warning" />`)}</pre>`;
        },
        default: () => {
          return `<input type="radio" name="radio-6" class="radio radio-warning" checked> <input type="radio" name="radio-6" class="radio radio-warning">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="radio" name="radio-7" class="$$radio $$radio-info" checked />
<input type="radio" name="radio-7" class="$$radio $$radio-info" />`)}</pre>`;
        },
        default: () => {
          return `<input type="radio" name="radio-7" class="radio radio-info" checked> <input type="radio" name="radio-7" class="radio radio-info">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="radio" name="radio-8" class="$$radio $$radio-error" checked />
<input type="radio" name="radio-8" class="$$radio $$radio-error" />`)}</pre>`;
        },
        default: () => {
          return `<input type="radio" name="radio-8" class="radio radio-error" checked> <input type="radio" name="radio-8" class="radio radio-error">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="radio" name="radio-9" class="$$radio" disabled checked />
<input type="radio" name="radio-9" class="$$radio" disabled />`)}</pre>`;
        },
        default: () => {
          return `<input type="radio" name="radio-9" class="radio" disabled checked> <input type="radio" name="radio-9" class="radio" disabled>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "With label and form-control and custom colors!"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Red pill</span> 
    <input type="radio" name="radio-10" class="$$radio checked:bg-red-500" checked />
  </label>
</div>
<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Blue pill</span> 
    <input type="radio" name="radio-10" class="$$radio checked:bg-blue-500" checked />
  </label>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="flex flex-col" data-svelte-h="svelte-a2mhkk"><div class="form-control w-52"><label class="cursor-pointer label"><span class="label-text">Red pill</span> <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked></label></div> <div class="form-control w-52"><label class="cursor-pointer label"><span class="label-text">Blue pill</span> <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked></label></div></div>`;
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
