import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, b as add_attribute } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Toggle",
  "desc": "Toggle is a checkbox that is styled to look like a switch button.",
  "published": true,
  "layout": "components"
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefix;
  $$unsubscribe_prefix = subscribe(prefix, (value) => value);
  let indeterminate = true;
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
              class: "toggle",
              desc: "For checkbox"
            },
            {
              type: "modifier",
              class: "toggle-primary",
              desc: "Adds `primary` to toggle"
            },
            {
              type: "modifier",
              class: "toggle-secondary",
              desc: "Adds `secondary` to toggle"
            },
            {
              type: "modifier",
              class: "toggle-accent",
              desc: "Adds `accent` to toggle"
            },
            {
              type: "modifier",
              class: "toggle-success",
              desc: "Adds `success` to toggle"
            },
            {
              type: "modifier",
              class: "toggle-warning",
              desc: "Adds `warning` to toggle"
            },
            {
              type: "modifier",
              class: "toggle-info",
              desc: "Adds `info` to toggle"
            },
            {
              type: "modifier",
              class: "toggle-error",
              desc: "Adds `error` to toggle"
            },
            {
              type: "responsive",
              class: "toggle-lg",
              desc: "Large toggle"
            },
            {
              type: "responsive",
              class: "toggle-md",
              desc: "Medium toggle (default)"
            },
            {
              type: "responsive",
              class: "toggle-sm",
              desc: "Small toggle"
            },
            {
              type: "responsive",
              class: "toggle-xs",
              desc: "Extra small toggle"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Toggle" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="checkbox" class="$$toggle" checked />`)}</pre>`;
        },
        default: () => {
          return `<input type="checkbox" class="toggle" checked>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With label and form-control" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span> 
    <input type="checkbox" class="$$toggle" checked />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-52" data-svelte-h="svelte-z3pb6i"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" class="toggle" checked></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Checkboxes with brand colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="flex flex-col">
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Remember me</span> 
      <input type="checkbox" class="$$toggle $$toggle-primary" checked />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Remember me</span> 
      <input type="checkbox" class="$$toggle $$toggle-secondary" checked />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Remember me</span> 
      <input type="checkbox" class="$$toggle $$toggle-accent" checked />
    </label>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col" data-svelte-h="svelte-1v1739s"><div class="form-control w-52"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" class="toggle toggle-primary" checked></label></div> <div class="form-control w-52"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" class="toggle toggle-secondary" checked></label></div> <div class="form-control w-52"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" class="toggle toggle-accent" checked></label></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Checkboxes with state colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="checkbox" class="$$toggle $$toggle-success" checked />
<input type="checkbox" class="$$toggle $$toggle-warning" checked />
<input type="checkbox" class="$$toggle $$toggle-info" checked />
<input type="checkbox" class="$$toggle $$toggle-error" checked />`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col items-center gap-2" data-svelte-h="svelte-1dywcte"><input type="checkbox" class="toggle toggle-success" checked> <input type="checkbox" class="toggle toggle-warning" checked> <input type="checkbox" class="toggle toggle-info" checked> <input type="checkbox" class="toggle toggle-error" checked></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="checkbox" class="$$toggle $$toggle-xs" checked />
<input type="checkbox" class="$$toggle $$toggle-sm" checked />
<input type="checkbox" class="$$toggle $$toggle-md" checked />
<input type="checkbox" class="$$toggle $$toggle-lg" checked />`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col items-center gap-2" data-svelte-h="svelte-13lgemg"><input type="checkbox" class="toggle toggle-xs" checked> <input type="checkbox" class="toggle toggle-sm" checked> <input type="checkbox" class="toggle toggle-md" checked> <input type="checkbox" class="toggle toggle-lg" checked></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="checkbox" class="$$toggle" disabled />`)}</pre>`;
        },
        default: () => {
          return `<input type="checkbox" class="toggle" disabled>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled and checked" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="checkbox" class="$$toggle" disabled checked />`)}</pre>`;
        },
        default: () => {
          return `<input type="checkbox" class="toggle" disabled checked>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Indeterminate" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<!-- You can make a toggle indeterminate using JS -->
<script>
  document.getElementById("my-toggle").indeterminate = true
<\/script>
<input type="checkbox" class="$$toggle" id="my-toggle" />`)}</pre>`;
        },
        default: () => {
          return `<input type="checkbox" class="toggle"${add_attribute("indeterminate", indeterminate, 0)}>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
