import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Loading",
  "desc": "Loading shows an animation to indicate that something is loading.",
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
              class: "loading",
              desc: "loading element"
            },
            {
              type: "modifier",
              class: "loading-spinner",
              desc: "Shows the spinner animation"
            },
            {
              type: "modifier",
              class: "loading-dots",
              desc: "Shows the dots animation"
            },
            {
              type: "modifier",
              class: "loading-ring",
              desc: "Shows the ring animation"
            },
            {
              type: "modifier",
              class: "loading-ball",
              desc: "Shows the ball animation"
            },
            {
              type: "modifier",
              class: "loading-bars",
              desc: "Shows the bars animation"
            },
            {
              type: "modifier",
              class: "loading-infinity",
              desc: "Shows the infinity animation"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Loading spinner" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$loading $$loading-spinner $$loading-xs"></span>
<span class="$$loading $$loading-spinner $$loading-sm"></span>
<span class="$$loading $$loading-spinner $$loading-md"></span>
<span class="$$loading $$loading-spinner $$loading-lg"></span>`)}</pre>`;
        },
        default: () => {
          return `<span class="loading loading-spinner loading-xs"></span> <span class="loading loading-spinner loading-sm"></span> <span class="loading loading-spinner loading-md"></span> <span class="loading loading-spinner loading-lg"></span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Loading dots" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$loading $$loading-dots $$loading-xs"></span>
<span class="$$loading $$loading-dots $$loading-sm"></span>
<span class="$$loading $$loading-dots $$loading-md"></span>
<span class="$$loading $$loading-dots $$loading-lg"></span>`)}</pre>`;
        },
        default: () => {
          return `<span class="loading loading-dots loading-xs"></span> <span class="loading loading-dots loading-sm"></span> <span class="loading loading-dots loading-md"></span> <span class="loading loading-dots loading-lg"></span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Loading ring" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$loading $$loading-ring $$loading-xs"></span>
<span class="$$loading $$loading-ring $$loading-sm"></span>
<span class="$$loading $$loading-ring $$loading-md"></span>
<span class="$$loading $$loading-ring $$loading-lg"></span>`)}</pre>`;
        },
        default: () => {
          return `<span class="loading loading-ring loading-xs"></span> <span class="loading loading-ring loading-sm"></span> <span class="loading loading-ring loading-md"></span> <span class="loading loading-ring loading-lg"></span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Loading ball" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$loading $$loading-ball $$loading-xs"></span>
<span class="$$loading $$loading-ball $$loading-sm"></span>
<span class="$$loading $$loading-ball $$loading-md"></span>
<span class="$$loading $$loading-ball $$loading-lg"></span>`)}</pre>`;
        },
        default: () => {
          return `<span class="loading loading-ball loading-xs"></span> <span class="loading loading-ball loading-sm"></span> <span class="loading loading-ball loading-md"></span> <span class="loading loading-ball loading-lg"></span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Loading bars" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$loading $$loading-bars $$loading-xs"></span>
<span class="$$loading $$loading-bars $$loading-sm"></span>
<span class="$$loading $$loading-bars $$loading-md"></span>
<span class="$$loading $$loading-bars $$loading-lg"></span>`)}</pre>`;
        },
        default: () => {
          return `<span class="loading loading-bars loading-xs"></span> <span class="loading loading-bars loading-sm"></span> <span class="loading loading-bars loading-md"></span> <span class="loading loading-bars loading-lg"></span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Loading infinity" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$loading $$loading-infinity $$loading-xs"></span>
<span class="$$loading $$loading-infinity $$loading-sm"></span>
<span class="$$loading $$loading-infinity $$loading-md"></span>
<span class="$$loading $$loading-infinity $$loading-lg"></span>`)}</pre>`;
        },
        default: () => {
          return `<span class="loading loading-infinity loading-xs"></span> <span class="loading loading-infinity loading-sm"></span> <span class="loading loading-infinity loading-md"></span> <span class="loading loading-infinity loading-lg"></span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Loading with colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$loading $$loading-spinner text-primary"></span>
<span class="$$loading $$loading-spinner text-secondary"></span>
<span class="$$loading $$loading-spinner text-accent"></span>
<span class="$$loading $$loading-spinner text-neutral"></span>
<span class="$$loading $$loading-spinner text-info"></span>
<span class="$$loading $$loading-spinner text-success"></span>
<span class="$$loading $$loading-spinner text-warning"></span>
<span class="$$loading $$loading-spinner text-error"></span>`)}</pre>`;
        },
        default: () => {
          return `<span class="loading loading-spinner text-primary"></span> <span class="loading loading-spinner text-secondary"></span> <span class="loading loading-spinner text-accent"></span> <span class="loading loading-spinner text-neutral"></span> <span class="loading loading-spinner text-info"></span> <span class="loading loading-spinner text-success"></span> <span class="loading loading-spinner text-warning"></span> <span class="loading loading-spinner text-error"></span>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
