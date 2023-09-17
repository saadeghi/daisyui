import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Text Input",
  "desc": "Text Input is a simple input field.",
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
              class: "label",
              desc: "For helper text"
            },
            {
              type: "component",
              class: "input",
              desc: "For <input> element"
            },
            {
              type: "modifier",
              class: "input-bordered",
              desc: "Adds border to input"
            },
            {
              type: "modifier",
              class: "input-ghost",
              desc: "Adds ghost style to input"
            },
            {
              type: "modifier",
              class: "input-primary",
              desc: "Adds `primary` color to input"
            },
            {
              type: "modifier",
              class: "input-secondary",
              desc: "Adds `secondary` color to input"
            },
            {
              type: "modifier",
              class: "input-accent",
              desc: "Adds `accent` color to input"
            },
            {
              type: "modifier",
              class: "input-info",
              desc: "Adds `info` color to input"
            },
            {
              type: "modifier",
              class: "input-success",
              desc: "Adds `success` color to input"
            },
            {
              type: "modifier",
              class: "input-warning",
              desc: "Adds `warning` color to input"
            },
            {
              type: "modifier",
              class: "input-error",
              desc: "Adds `error` color to input"
            },
            {
              type: "responsive",
              class: "input-lg",
              desc: "Large size for input"
            },
            {
              type: "responsive",
              class: "input-md",
              desc: "Medium (default) size for input"
            },
            {
              type: "responsive",
              class: "input-sm",
              desc: "Small size for input"
            },
            {
              type: "responsive",
              class: "input-xs",
              desc: "Extra small size for input"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Text input" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Text input with border" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input $$input-bordered w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Ghost (no background)" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input $$input-ghost w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input input-ghost w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With form-control and labels" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control w-full max-w-xs">
  <label class="$$label">
    <span class="$$label-text">What is your name?</span>
    <span class="$$label-text-alt">Top Right label</span>
  </label>
  <input type="text" placeholder="Type here" class="$$input $$input-bordered w-full max-w-xs" />
  <label class="$$label">
    <span class="$$label-text-alt">Bottom Left label</span>
    <span class="$$label-text-alt">Bottom Right label</span>
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-full max-w-xs" data-svelte-h="svelte-1mfmu4w"><label class="label"><span class="label-text">What is your name?</span> <span class="label-text-alt">Top Right label</span></label> <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"> <label class="label"><span class="label-text-alt">Bottom Left label</span> <span class="label-text-alt">Bottom Right label</span></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-primary w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-secondary w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-accent w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-info w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-success w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-warning w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-error w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="Type here" class="input input-bordered input-error w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`
<!-- xs -->
<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-xs w-full max-w-xs" />
<!-- sm -->
<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-sm w-full max-w-xs" />
<!-- md -->
<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-md w-full max-w-xs" />
<!-- lg -->
<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-lg w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-4 w-full items-center" data-svelte-h="svelte-1oavv51"><input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs"> <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs"> <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs"> <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="text" placeholder="You can't touch this" class="$$input $$input-bordered w-full max-w-xs" disabled />`)}</pre>`;
        },
        default: () => {
          return `<input type="text" placeholder="You can't touch this" class="input input-bordered w-full max-w-xs" disabled>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
