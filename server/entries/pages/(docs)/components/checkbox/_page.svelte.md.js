import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, b as add_attribute } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Checkbox",
  "desc": "Checkboxes are used to select or deselect a value.",
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
              class: "checkbox",
              desc: "For checkbox"
            },
            {
              type: "modifier",
              class: "checkbox-primary",
              desc: "Adds `primary` to checkbox"
            },
            {
              type: "modifier",
              class: "checkbox-secondary",
              desc: "Adds `secondary` to checkbox"
            },
            {
              type: "modifier",
              class: "checkbox-accent",
              desc: "Adds `accent` to checkbox"
            },
            {
              type: "modifier",
              class: "checkbox-success",
              desc: "Adds `success` to checkbox"
            },
            {
              type: "modifier",
              class: "checkbox-warning",
              desc: "Adds `warning` to checkbox"
            },
            {
              type: "modifier",
              class: "checkbox-info",
              desc: "Adds `info` to checkbox"
            },
            {
              type: "modifier",
              class: "checkbox-error",
              desc: "Adds `error` to checkbox"
            },
            {
              type: "responsive",
              class: "checkbox-lg",
              desc: "Large checkbox"
            },
            {
              type: "responsive",
              class: "checkbox-md",
              desc: "Medium checkbox (default)"
            },
            {
              type: "responsive",
              class: "checkbox-sm",
              desc: "Small checkbox"
            },
            {
              type: "responsive",
              class: "checkbox-xs",
              desc: "Extra small checkbox"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Checkbox" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="checkbox" checked="checked" class="$$checkbox" />`)}</pre>`;
        },
        default: () => {
          return `<input type="checkbox" checked="checked" class="checkbox">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With label and form-control" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="$$checkbox" />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-52" data-svelte-h="svelte-178kkav"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" checked="checked" class="checkbox"></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="$$checkbox checkbox-primary" />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-52" data-svelte-h="svelte-jxtu3v"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" checked="checked" class="checkbox checkbox-primary"></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-secondary" />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-52" data-svelte-h="svelte-k4cc8j"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" checked="checked" class="checkbox checkbox-secondary"></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-accent" />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-52" data-svelte-h="svelte-q1qtmh"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" checked="checked" class="checkbox checkbox-accent"></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-success" />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-52" data-svelte-h="svelte-dm2t10"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" checked="checked" class="checkbox checkbox-success"></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-warning" />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-52" data-svelte-h="svelte-20mksx"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" checked="checked" class="checkbox checkbox-warning"></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-info" />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-52" data-svelte-h="svelte-1sfevoj"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" checked="checked" class="checkbox checkbox-info"></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-error" />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-52" data-svelte-h="svelte-jenecb"><label class="cursor-pointer label"><span class="label-text">Remember me</span> <input type="checkbox" checked="checked" class="checkbox checkbox-error"></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-xs" /> 
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-sm" /> 
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-md" /> 
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-lg" />`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col items-center gap-2" data-svelte-h="svelte-7yrwtg"><input type="checkbox" checked="checked" class="checkbox checkbox-xs"> <input type="checkbox" checked="checked" class="checkbox checkbox-sm"> <input type="checkbox" checked="checked" class="checkbox checkbox-md"> <input type="checkbox" checked="checked" class="checkbox checkbox-lg"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="checkbox" class="$$checkbox" disabled />`)}</pre>`;
        },
        default: () => {
          return `<input type="checkbox" disabled="disabled" class="checkbox">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled and checked" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="checkbox" class="$$checkbox" disabled checked />`)}</pre>`;
        },
        default: () => {
          return `<input type="checkbox" disabled="disabled" class="checkbox" checked="checked">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Indeterminate" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<!-- You can make a checkbox indeterminate using JS -->
<script>
  document.getElementById("my-checkbox").indeterminate = true
<\/script>
<input type="checkbox" class="$$checkbox" id="my-checkbox" />`)}</pre>`;
        },
        default: () => {
          return `<input type="checkbox" class="checkbox"${add_attribute("indeterminate", indeterminate, 0)}>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
