import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Textarea",
  "desc": "Textarea allows users to enter text in multiple lines.",
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
              type: "modifier",
              class: "label",
              desc: "For helper text"
            },
            {
              type: "modifier",
              class: "textarea",
              desc: "For <textarea> element"
            },
            {
              type: "modifier",
              class: "textarea-bordered",
              desc: "Adds border to textarea"
            },
            {
              type: "modifier",
              class: "textarea-ghost",
              desc: "Adds ghost style to textarea"
            },
            {
              type: "modifier",
              class: "textarea-primary",
              desc: "Adds `primary` color to textarea"
            },
            {
              type: "modifier",
              class: "textarea-secondary",
              desc: "Adds `secondary` color to textarea"
            },
            {
              type: "modifier",
              class: "textarea-accent",
              desc: "Adds `accent` color to textarea"
            },
            {
              type: "modifier",
              class: "textarea-info",
              desc: "Adds `info` color to textarea"
            },
            {
              type: "modifier",
              class: "textarea-success",
              desc: "Adds `success` color to textarea"
            },
            {
              type: "modifier",
              class: "textarea-warning",
              desc: "Adds `warning` color to textarea"
            },
            {
              type: "modifier",
              class: "textarea-error",
              desc: "Adds `error` color to textarea"
            },
            {
              type: "responsive",
              class: "textarea-lg",
              desc: "Large size for textarea"
            },
            {
              type: "responsive",
              class: "textarea-md",
              desc: "Medium (default) size for textarea"
            },
            {
              type: "responsive",
              class: "textarea-sm",
              desc: "Small size for textarea"
            },
            {
              type: "responsive",
              class: "textarea-xs",
              desc: "Extra small size for textarea"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Textarea" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Textarea with border" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea $$textarea-bordered" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Ghost (no background)" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea $$textarea-ghost" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea textarea-ghost" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With form control and labels" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$label">
    <span class="$$label-text">Your bio</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
  <textarea class="$$textarea $$textarea-bordered h-24" placeholder="Bio"></textarea>
  <label class="$$label">
    <span class="$$label-text-alt">Your bio</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control" data-svelte-h="svelte-guhnw2"><label class="label"><span class="label-text">Your bio</span> <span class="label-text-alt">Alt label</span></label> <textarea class="textarea h-24 textarea-bordered" placeholder="Bio"></textarea> <label class="label"><span class="label-text-alt">Your bio</span> <span class="label-text-alt">Alt label</span></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea $$textarea-primary" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea textarea-primary" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea $$textarea-secondary" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea textarea-secondary" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea $$textarea-accent" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea textarea-accent" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea $$textarea-info" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea textarea-info" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea $$textarea-success" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea textarea-success" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea $$textarea-warning" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea textarea-warning" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea $$textarea-error" placeholder="Bio"></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea textarea-error" placeholder="Bio"></textarea>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`
<!-- xs -->
<textarea placeholder="Bio" class="$$textarea $$textarea-bordered $$textarea-xs w-full max-w-xs" ></textarea>
<!-- sm -->
<textarea placeholder="Bio" class="$$textarea $$textarea-bordered $$textarea-sm w-full max-w-xs" ></textarea>
<!-- md -->
<textarea placeholder="Bio" class="$$textarea $$textarea-bordered $$textarea-md w-full max-w-xs" ></textarea>
<!-- lg -->
<textarea placeholder="Bio" class="$$textarea $$textarea-bordered $$textarea-lg w-full max-w-xs" ></textarea>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-4 w-full items-center" data-svelte-h="svelte-1m99nol"><textarea placeholder="Bio" class="textarea textarea-bordered textarea-xs w-full max-w-xs"></textarea> <textarea placeholder="Bio" class="textarea textarea-bordered textarea-sm w-full max-w-xs"></textarea> <textarea placeholder="Bio" class="textarea textarea-bordered textarea-md w-full max-w-xs"></textarea> <textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<textarea class="$$textarea" placeholder="Bio" disabled></textarea>`)}</pre>`;
        },
        default: () => {
          return `<textarea class="textarea" placeholder="Bio" disabled></textarea>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
