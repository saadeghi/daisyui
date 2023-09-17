import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Artboard",
  "desc": "Artboard provides fixed size container to display a demo content on mobile size.",
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
              class: "artboard",
              desc: "Container element"
            },
            {
              type: "modifier",
              class: "artboard-demo",
              desc: "Adds shadow and radius. Puts items in center"
            },
            {
              type: "modifier",
              class: "phone-1",
              desc: "Size 1 (320×568)"
            },
            {
              type: "modifier",
              class: "phone-2",
              desc: "Size 2 (375×667)"
            },
            {
              type: "modifier",
              class: "phone-3",
              desc: "Size 3 (414×736)"
            },
            {
              type: "modifier",
              class: "phone-4",
              desc: "Size 4 (375×812)"
            },
            {
              type: "modifier",
              class: "phone-5",
              desc: "Size 5 (414×896)"
            },
            {
              type: "modifier",
              class: "phone-6",
              desc: "Size 6 (320×1024)"
            },
            {
              type: "modifier",
              class: "artboard-horizontal",
              desc: "shows horizontal view"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Artboard size 1" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$artboard $$phone-1">320×568</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="artboard phone-1 artboard-demo" data-svelte-h="svelte-1nh0tia">320×568</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Artboard size 2" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$artboard $$phone-2">375×667</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="artboard phone-2 artboard-demo" data-svelte-h="svelte-uhutil">375×667</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Artboard size 3" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$artboard $$phone-3">414×736</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="artboard phone-3 artboard-demo" data-svelte-h="svelte-1q9ixr9">414×736</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Artboard size 4" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$artboard $$phone-4">375×812</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="artboard phone-4 artboard-demo" data-svelte-h="svelte-17epfn5">375×812</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Artboard size 5" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$artboard $$phone-5">414×896</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="artboard phone-5 artboard-demo" data-svelte-h="svelte-11vosga">414×896</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Artboard size 6" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$artboard $$phone-6">320×1024</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="artboard phone-6 artboard-demo" data-svelte-h="svelte-636x2d">320×1024</div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Artboard horizontal size 1 (568×320)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$artboard $$artboard-horizontal $$phone-1">568×320</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="artboard artboard-horizontal phone-1 artboard-demo" data-svelte-h="svelte-1ddkn94">568×320</div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Artboard horizontal size 2 (667×375)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$artboard $$artboard-horizontal $$phone-2">667×375</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="artboard artboard-horizontal phone-2 artboard-demo" data-svelte-h="svelte-1h1jx07">667×375</div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Artboard horizontal size 3 (736×414)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$artboard $$artboard-horizontal $$phone-3">736×414</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="artboard artboard-horizontal phone-3 artboard-demo" data-svelte-h="svelte-1usaypj">736×414</div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Artboard horizontal size 4 (812×375)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$artboard $$artboard-horizontal $$phone-4">812×375</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="artboard artboard-horizontal phone-4 artboard-demo" data-svelte-h="svelte-8yfjlb">812×375</div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Artboard horizontal size 5 (896×414)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$artboard $$artboard-horizontal $$phone-5">896×414</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="artboard artboard-horizontal phone-5 artboard-demo" data-svelte-h="svelte-ltb1q4">896×414</div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Artboard horizontal size 6 (1024×320)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$artboard $$artboard-horizontal $$phone-6">1024×320</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="artboard artboard-horizontal phone-6 artboard-demo" data-svelte-h="svelte-133edtf">1024×320</div>`;
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
