import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Range slider",
  "desc": "Range slider is used to select a value by sliding a handle.",
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
              class: "range",
              desc: "Range input"
            },
            {
              type: "modifier",
              class: "range-primary",
              desc: "Adds `primary` to range"
            },
            {
              type: "modifier",
              class: "range-secondary",
              desc: "Adds `secondary` to range"
            },
            {
              type: "modifier",
              class: "range-accent",
              desc: "Adds `accent` to range"
            },
            {
              type: "modifier",
              class: "range-success",
              desc: "Adds `success` to range"
            },
            {
              type: "modifier",
              class: "range-warning",
              desc: "Adds `warning` to range"
            },
            {
              type: "modifier",
              class: "range-info",
              desc: "Adds `info` to range"
            },
            {
              type: "modifier",
              class: "range-error",
              desc: "Adds `error` to range"
            },
            {
              type: "responsive",
              class: "range-lg",
              desc: "Large range"
            },
            {
              type: "responsive",
              class: "range-md",
              desc: "Medium range (default)"
            },
            {
              type: "responsive",
              class: "range-sm",
              desc: "Small range"
            },
            {
              type: "responsive",
              class: "range-xs",
              desc: "Extra small range"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Range" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="40" class="$$range" />`)}</pre>`;
        },
        default: () => {
          return `<input type="range" min="0" max="100" value="40" class="range max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With steps and measure" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="25" class="$$range" step="25" />
<div class="w-full flex justify-between text-xs px-2">
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full max-w-xs" data-svelte-h="svelte-19uo45j"><input type="range" min="0" max="100" value="25" class="range max-w-xs" step="25"> <div class="w-full flex justify-between text-xs px-2 max-w-xs"><span>|</span> <span>|</span> <span>|</span> <span>|</span> <span>|</span></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="40" class="$$range $$range-primary" />`)}</pre>`;
        },
        default: () => {
          return `<input type="range" min="0" max="100" value="40" class="range range-primary max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="40" class="$$range $$range-secondary" />`)}</pre>`;
        },
        default: () => {
          return `<input type="range" min="0" max="100" value="40" class="range range-secondary max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="40" class="$$range $$range-accent" />`)}</pre>`;
        },
        default: () => {
          return `<input type="range" min="0" max="100" value="40" class="range range-accent max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="40" class="$$range $$range-success" />`)}</pre>`;
        },
        default: () => {
          return `<input type="range" min="0" max="100" value="40" class="range range-success max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="40" class="$$range $$range-warning" />`)}</pre>`;
        },
        default: () => {
          return `<input type="range" min="0" max="100" value="40" class="range range-warning max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="40" class="$$range $$range-info" />`)}</pre>`;
        },
        default: () => {
          return `<input type="range" min="0" max="100" value="40" class="range range-info max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="40" class="$$range $$range-error" />`)}</pre>`;
        },
        default: () => {
          return `<input type="range" min="0" max="100" value="40" class="range range-error max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="range" min="0" max="100" value="40" class="$$range $$range-xs" /> 
<input type="range" min="0" max="100" value="50" class="$$range $$range-sm" /> 
<input type="range" min="0" max="100" value="60" class="$$range $$range-md" /> 
<input type="range" min="0" max="100" value="70" class="$$range $$range-lg" />`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col w-full items-center gap-4" data-svelte-h="svelte-hdbxvv"><input type="range" min="0" max="100" value="40" class="range range-xs max-w-xs"> <input type="range" min="0" max="100" value="50" class="range range-sm max-w-xs"> <input type="range" min="0" max="100" value="60" class="range range-md max-w-xs"> <input type="range" min="0" max="100" value="70" class="range range-lg max-w-xs"></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
