import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Progress",
  "desc": "Progress bar can be used to show the progress of a task or to show the passing of time.",
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
              class: "progress",
              desc: "Progress element"
            },
            {
              type: "modifier",
              class: "progress-primary",
              desc: "Adds `primary` color"
            },
            {
              type: "modifier",
              class: "progress-secondary",
              desc: "Adds `secondary` color"
            },
            {
              type: "modifier",
              class: "progress-accent",
              desc: "Adds `accent` color"
            },
            {
              type: "modifier",
              class: "progress-info",
              desc: "Adds `info` color"
            },
            {
              type: "modifier",
              class: "progress-success",
              desc: "Adds `success` color"
            },
            {
              type: "modifier",
              class: "progress-warning",
              desc: "Adds `warning` color"
            },
            {
              type: "modifier",
              class: "progress-error",
              desc: "Adds `error` color"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Progress" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<progress class="$$progress w-56" value="0" max="100"></progress>
<progress class="$$progress w-56" value="10" max="100"></progress>
<progress class="$$progress w-56" value="40" max="100"></progress>
<progress class="$$progress w-56" value="70" max="100"></progress>
<progress class="$$progress w-56" value="100" max="100"></progress>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-1alxo6a"><progress class="progress w-56" value="0" max="100"></progress> <progress class="progress w-56" value="10" max="100"></progress> <progress class="progress w-56" value="40" max="100"></progress> <progress class="progress w-56" value="70" max="100"></progress> <progress class="progress w-56" value="100" max="100"></progress></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<progress class="$$progress $$progress-primary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="100" max="100"></progress>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-1z0ywto"><progress class="progress progress-primary w-56" value="0" max="100"></progress> <progress class="progress progress-primary w-56" value="10" max="100"></progress> <progress class="progress progress-primary w-56" value="40" max="100"></progress> <progress class="progress progress-primary w-56" value="70" max="100"></progress> <progress class="progress progress-primary w-56" value="100" max="100"></progress></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<progress class="$$progress $$progress-secondary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="100" max="100"></progress>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-1m8wirc"><progress class="progress progress-secondary w-56" value="0" max="100"></progress> <progress class="progress progress-secondary w-56" value="10" max="100"></progress> <progress class="progress progress-secondary w-56" value="40" max="100"></progress> <progress class="progress progress-secondary w-56" value="70" max="100"></progress> <progress class="progress progress-secondary w-56" value="100" max="100"></progress></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<progress class="$$progress $$progress-accent w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="100" max="100"></progress>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-5fi9sa"><progress class="progress progress-accent w-56" value="0" max="100"></progress> <progress class="progress progress-accent w-56" value="10" max="100"></progress> <progress class="progress progress-accent w-56" value="40" max="100"></progress> <progress class="progress progress-accent w-56" value="70" max="100"></progress> <progress class="progress progress-accent w-56" value="100" max="100"></progress></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<progress class="$$progress $$progress-success w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="100" max="100"></progress>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-f3ffyz"><progress class="progress progress-success w-56" value="0" max="100"></progress> <progress class="progress progress-success w-56" value="10" max="100"></progress> <progress class="progress progress-success w-56" value="40" max="100"></progress> <progress class="progress progress-success w-56" value="70" max="100"></progress> <progress class="progress progress-success w-56" value="100" max="100"></progress></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<progress class="$$progress $$progress-info w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="100" max="100"></progress>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-1brrmn4"><progress class="progress progress-info w-56" value="0" max="100"></progress> <progress class="progress progress-info w-56" value="10" max="100"></progress> <progress class="progress progress-info w-56" value="40" max="100"></progress> <progress class="progress progress-info w-56" value="70" max="100"></progress> <progress class="progress progress-info w-56" value="100" max="100"></progress></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<progress class="$$progress $$progress-warning w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="100" max="100"></progress>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-sfhxle"><progress class="progress progress-warning w-56" value="0" max="100"></progress> <progress class="progress progress-warning w-56" value="10" max="100"></progress> <progress class="progress progress-warning w-56" value="40" max="100"></progress> <progress class="progress progress-warning w-56" value="70" max="100"></progress> <progress class="progress progress-warning w-56" value="100" max="100"></progress></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<progress class="$$progress $$progress-error w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="100" max="100"></progress>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-1g6i12c"><progress class="progress progress-error w-56" value="0" max="100"></progress> <progress class="progress progress-error w-56" value="10" max="100"></progress> <progress class="progress progress-error w-56" value="40" max="100"></progress> <progress class="progress progress-error w-56" value="70" max="100"></progress> <progress class="progress progress-error w-56" value="100" max="100"></progress></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Indeterminate (without value)" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<progress class="progress w-56"></progress>`)}</pre>`;
        },
        default: () => {
          return `<progress class="progress w-56"></progress>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
