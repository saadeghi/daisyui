import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Tooltip",
  "desc": "Tooltip can be used to show a message when hovering over an element.",
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
              type: "responsive",
              class: "tooltip",
              desc: "Container element"
            },
            {
              type: "component",
              class: "tooltip-open",
              desc: "Force open tooltip"
            },
            {
              type: "responsive",
              class: "tooltip-top",
              desc: "Put tooltip on top"
            },
            {
              type: "responsive",
              class: "tooltip-bottom",
              desc: "Put tooltip on bottom"
            },
            {
              type: "responsive",
              class: "tooltip-left",
              desc: "Put tooltip on left"
            },
            {
              type: "responsive",
              class: "tooltip-right",
              desc: "Put tooltip on right"
            },
            {
              type: "modifier",
              class: "tooltip-primary",
              desc: "Adds `primary` color to tooltip"
            },
            {
              type: "modifier",
              class: "tooltip-secondary",
              desc: "Adds `secondary` color to tooltip"
            },
            {
              type: "modifier",
              class: "tooltip-accent",
              desc: "Adds `accent` color to tooltip"
            },
            {
              type: "modifier",
              class: "tooltip-info",
              desc: "Adds `info` color to tooltip"
            },
            {
              type: "modifier",
              class: "tooltip-success",
              desc: "Adds `success` color to tooltip"
            },
            {
              type: "modifier",
              class: "tooltip-warning",
              desc: "Adds `warning` color to tooltip"
            },
            {
              type: "modifier",
              class: "tooltip-error",
              desc: "Adds `error` color to tooltip"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Tooltip" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-1xhq1de"><div class="tooltip" data-tip="hello"><button class="btn">Hover me</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Force open" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open" data-tip="hello">
  <button class="$$btn">Force open</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-1o75lnf"><div class="tooltip tooltip-open" data-tip="hello"><button class="btn">Force open</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Top" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-top" data-tip="hello">
  <button class="$$btn">Top</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-v8u2e0"><div class="tooltip tooltip-open tooltip-top" data-tip="hello"><button class="btn">Top</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Bottom" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-bottom" data-tip="hello">
  <button class="$$btn">Bottom</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-1h2yu02"><div class="tooltip tooltip-open tooltip-bottom" data-tip="hello"><button class="btn">Bottom</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Left" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-left" data-tip="hello">
  <button class="$$btn">Left</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-1vxir26"><div class="tooltip tooltip-open tooltip-left" data-tip="hello"><button class="btn">Left</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Right" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-right" data-tip="hello">
  <button class="$$btn">Right</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-1a0ln62"><div class="tooltip tooltip-open tooltip-right" data-tip="hello"><button class="btn">Right</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-primary" data-tip="primary">
  <button class="$$btn $$btn-primary">primary</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-1x3dmkb"><div data-tip="primary" class="tooltip tooltip-open tooltip-primary"><button class="btn btn-primary">primary</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-secondary" data-tip="secondary">
  <button class="$$btn $$btn-secondary">secondary</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-9tk1aj"><div data-tip="secondary" class="tooltip tooltip-open tooltip-secondary"><button class="btn btn-secondary">secondary</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-accent" data-tip="accent">
  <button class="$$btn $$btn-accent">accent</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-ljqf0b"><div data-tip="accent" class="tooltip tooltip-open tooltip-accent"><button class="btn btn-accent">accent</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-info" data-tip="info">
  <button class="$$btn $$btn-info">info</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-16ifeu7"><div data-tip="info" class="tooltip tooltip-open tooltip-info"><button class="btn btn-info">info</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-success" data-tip="success">
  <button class="$$btn $$btn-success">success</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-1lg6d2j"><div data-tip="success" class="tooltip tooltip-open tooltip-success"><button class="btn btn-success">success</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-warning" data-tip="warning">
  <button class="$$btn $$btn-warning">warning</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-lnhq3z"><div data-tip="warning" class="tooltip tooltip-open tooltip-warning"><button class="btn btn-warning">warning</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tooltip $$tooltip-open $$tooltip-error" data-tip="error">
  <button class="$$btn $$btn-error">error</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="my-6" data-svelte-h="svelte-9ftz7"><div data-tip="error" class="tooltip tooltip-open tooltip-error"><button class="btn btn-error">error</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Responsive tooltip. only show for large screen"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$lg:tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="my-6" data-svelte-h="svelte-1yhthzt"><div class="lg:tooltip" data-tip="hello"><button class="btn">Hover me</button></div></div>`;
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
