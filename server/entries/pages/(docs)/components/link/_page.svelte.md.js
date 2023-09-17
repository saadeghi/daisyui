import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Link",
  "desc": "Link adds the missing underline style to links.",
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
              class: "link",
              desc: "Adds underline to a text"
            },
            {
              type: "modifier",
              class: "link-neutral",
              desc: "Link with `neutral` color"
            },
            {
              type: "modifier",
              class: "link-primary",
              desc: "Link with `primary` color"
            },
            {
              type: "modifier",
              class: "link-secondary",
              desc: "Link with `secondary` color"
            },
            {
              type: "modifier",
              class: "link-accent",
              desc: "Link with `accent` color"
            },
            {
              type: "modifier",
              class: "link-success",
              desc: "Link with `success` color"
            },
            {
              type: "modifier",
              class: "link-info",
              desc: "Link with `info` color"
            },
            {
              type: "modifier",
              class: "link-warning",
              desc: "Link with `warning` color"
            },
            {
              type: "modifier",
              class: "link-error",
              desc: "Link with `error` color"
            },
            {
              type: "modifier",
              class: "link-hover",
              desc: "Only show underline on hover"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Link" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link" data-svelte-h="svelte-1v7w523">I&#39;m a simple link</a>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Link" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<p>Tailwind CSS resets the style of links by default.
  <br/>
  Add "link" class to make it look like a 
  <a class="$$link">normal link</a> again.
</p>`)}</pre>`;
        },
        default: () => {
          return `<p data-svelte-h="svelte-1fcmz5n">Tailwind CSS resets the style of links by default.
  <br>
  Add &quot;link&quot; class to make it look like a 
  <a class="link">normal link</a> again.</p>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link $$link-primary">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link link-primary" data-svelte-h="svelte-9z8a1s">I&#39;m a simple link</a>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link $$link-secondary">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link link-secondary" data-svelte-h="svelte-bk94uo">I&#39;m a simple link</a>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link $$link-accent">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link link-accent" data-svelte-h="svelte-1d4m41a">I&#39;m a simple link</a>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Neutral color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link $$link-neutral">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link link-neutral" data-svelte-h="svelte-a6wd1j">I&#39;m a simple link</a>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link $$link-success">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link link-success" data-svelte-h="svelte-f16y9r">I&#39;m a simple link</a>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link $$link-info">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link link-info" data-svelte-h="svelte-1gq98gg">I&#39;m a simple link</a>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link $$link-warning">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link link-warning" data-svelte-h="svelte-19hrj86">I&#39;m a simple link</a>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link $$link-error">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link link-error" data-svelte-h="svelte-ebqu2g">I&#39;m a simple link</a>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Show underline only on hover" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<a class="$$link $$link-hover">I'm a simple link</a>`)}</pre>`;
        },
        default: () => {
          return `<a class="link link-hover" data-svelte-h="svelte-1h27mf8">I&#39;m a simple link</a>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
