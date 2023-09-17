import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Stack",
  "desc": "Stack visually puts elements on top of each other.",
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
              class: "stack",
              desc: "Puts the child elements on top of each other"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "3 divs without stack" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div>
  <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div> 
  <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div> 
  <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div data-svelte-h="svelte-1f9gnqo"><div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div> <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div> <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "3 divs with stack" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$stack">
  <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div> 
  <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div> 
  <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="stack mb-4" data-svelte-h="svelte-gmwcuh"><div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div> <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div> <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "stacked images" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$stack">
  <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Image 1" class="rounded" />
  <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Image 2" class="rounded" />
  <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Image 3" class="rounded" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="stack mb-4" data-svelte-h="svelte-13a0tjr"><img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Image 1" class="rounded w-28"> <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Image 2" class="rounded w-28"> <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Image 3" class="rounded w-28"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "stacked cards" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$stack">
  <div class="text-center border border-base-content $$card w-36 bg-base-100">
    <div class="$$card-body">A</div>
  </div> 
  <div class="text-center border border-base-content $$card w-36 bg-base-100">
    <div class="$$card-body">B</div>
  </div> 
  <div class="text-center border border-base-content $$card w-36 bg-base-100">
    <div class="$$card-body">C</div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="stack mb-4" data-svelte-h="svelte-1fazp3h"><div class="text-center border border-base-content card w-36 bg-base-100"><div class="card-body">A</div></div> <div class="text-center border border-base-content card w-36 bg-base-100"><div class="card-body">B</div></div> <div class="text-center border border-base-content card w-36 bg-base-100"><div class="card-body">C</div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "stacked cards with shadow" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$stack">
  <div class="text-center shadow-md w-36 $$card bg-base-200">
    <div class="$$card-body">A</div>
  </div> 
  <div class="text-center shadow w-36 $$card bg-base-200">
    <div class="$$card-body">B</div>
  </div> 
  <div class="text-center shadow-sm w-36 $$card bg-base-200">
    <div class="$$card-body">C</div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="stack mb-4" data-svelte-h="svelte-1bg2seb"><div class="text-center shadow-md w-36 card bg-base-200"><div class="card-body">A</div></div> <div class="text-center shadow w-36 card bg-base-200"><div class="card-body">B</div></div> <div class="text-center shadow-sm w-36 card bg-base-200"><div class="card-body">C</div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "stacked cards" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$stack">
  <div class="$$card shadow-md bg-primary text-primary-content">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 1</h2> 
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div> 
  <div class="$$card shadow bg-primary text-primary-content">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 2</h2> 
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div> 
  <div class="$$card shadow-sm bg-primary text-primary-content">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 3</h2> 
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="stack mb-4" data-svelte-h="svelte-i60m64"><div class="shadow-md card bg-primary text-primary-content"><div class="card-body"><h2 class="card-title">Notification 1</h2> <p>You have 3 unread messages. Tap here to see.</p></div></div> <div class="shadow card bg-primary text-primary-content"><div class="card-body"><h2 class="card-title">Notification 2</h2> <p>You have 3 unread messages. Tap here to see.</p></div></div> <div class="shadow-sm card bg-primary text-primary-content"><div class="card-body"><h2 class="card-title">Notification 3</h2> <p>You have 3 unread messages. Tap here to see.</p></div></div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
