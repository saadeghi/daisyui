import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "File Input",
  "desc": "File Input is a an input field for uploading files.",
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
              class: "file-input",
              desc: "For <input> element"
            },
            {
              type: "modifier",
              class: "file-input-bordered",
              desc: "Adds border to input"
            },
            {
              type: "modifier",
              class: "file-input-ghost",
              desc: "Adds ghost style to input"
            },
            {
              type: "modifier",
              class: "file-input-primary",
              desc: "Adds `primary` color to input"
            },
            {
              type: "modifier",
              class: "file-input-secondary",
              desc: "Adds `secondary` color to input"
            },
            {
              type: "modifier",
              class: "file-input-accent",
              desc: "Adds `accent` color to input"
            },
            {
              type: "modifier",
              class: "file-input-info",
              desc: "Adds `info` color to input"
            },
            {
              type: "modifier",
              class: "file-input-success",
              desc: "Adds `success` color to input"
            },
            {
              type: "modifier",
              class: "file-input-warning",
              desc: "Adds `warning` color to input"
            },
            {
              type: "modifier",
              class: "file-input-error",
              desc: "Adds `error` color to input"
            },
            {
              type: "responsive",
              class: "file-input-lg",
              desc: "Large size for input"
            },
            {
              type: "responsive",
              class: "file-input-md",
              desc: "Medium (default) size for input"
            },
            {
              type: "responsive",
              class: "file-input-sm",
              desc: "Small size for input"
            },
            {
              type: "responsive",
              class: "file-input-xs",
              desc: "Extra small size for input"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "File input" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "File input with border" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input $$file-input-bordered w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input file-input-bordered w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Ghost (no background)" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input $$file-input-ghost w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input file-input-ghost w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With form-control and labels" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control w-full max-w-xs">
  <label class="$$label">
    <span class="$$label-text">Pick a file</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
  <input type="file" class="$$file-input $$file-input-bordered w-full max-w-xs" />
  <label class="$$label">
    <span class="$$label-text-alt">Alt label</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-full max-w-xs" data-svelte-h="svelte-11a2mez"><label class="label"><span class="label-text">Pick a file</span> <span class="label-text-alt">Alt label</span></label> <input type="file" class="file-input file-input-bordered w-full max-w-xs"> <label class="label"><span class="label-text-alt">Alt label</span> <span class="label-text-alt">Alt label</span></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input $$file-input-bordered $$file-input-primary w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input file-input-bordered file-input-primary w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input $$file-input-bordered $$file-input-secondary w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input file-input-bordered file-input-secondary w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input $$file-input-bordered $$file-input-accent w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input file-input-bordered file-input-accent w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input $$file-input-bordered $$file-input-info w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input file-input-bordered file-input-info w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input $$file-input-bordered $$file-input-success w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input file-input-bordered file-input-success w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input $$file-input-bordered $$file-input-warning w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input file-input-bordered file-input-warning w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" class="$$file-input $$file-input-bordered $$file-input-error w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" class="file-input file-input-bordered file-input-error w-full max-w-xs">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`
<!-- xs -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-xs w-full max-w-xs" />
<!-- sm -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-sm w-full max-w-xs" />
<!-- md -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-md w-full max-w-xs" />
<!-- lg -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-lg w-full max-w-xs" />`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-4 w-full items-center" data-svelte-h="svelte-efp6ux"><input type="file" class="file-input file-input-bordered file-input-xs w-full max-w-xs"> <input type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs"> <input type="file" class="file-input file-input-bordered file-input-md w-full max-w-xs"> <input type="file" class="file-input file-input-bordered file-input-lg w-full max-w-xs"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<input type="file" placeholder="You can't touch this" class="$$file-input $$file-input-bordered w-full max-w-xs" disabled />`)}</pre>`;
        },
        default: () => {
          return `<input type="file" placeholder="You can't touch this" class="file-input file-input-bordered w-full max-w-xs" disabled>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
