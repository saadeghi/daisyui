import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Join",
  "desc": "Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.",
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
              class: "join",
              desc: "Container for grouping multiple items"
            },
            {
              type: "component",
              class: "join-item",
              desc: "Item inside join. Can be a button, input, etc."
            },
            {
              type: "responsive",
              class: "join-vertical",
              desc: "Show items vertically"
            },
            {
              type: "responsive",
              class: "join-horizontal",
              desc: "Show items horizontally"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Join" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$join">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="join" data-svelte-h="svelte-1bt8as7"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Group items vertically" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$join $$join-vertical">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="join join-vertical" data-svelte-h="svelte-1uoedpi"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Responsive: it's vertical on small screen and horizontal on large screen"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$join $$join-vertical lg:$$join-horizontal">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="join join-vertical lg:join-horizontal" data-svelte-h="svelte-180b29s"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "With extra elements in the group",
          desc: "Even if join-item is not a direct child of the group, it still gets the style"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$join">
  <div>
    <div>
      <input class="$$input $$input-bordered $$join-item" placeholder="Search"/>
    </div>
  </div>
  <select class="$$select $$select-bordered $$join-item">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div class="$$indicator">
    <span class="$$indicator-item $$badge $$badge-secondary">new</span> 
    <button class="$$btn $$join-item">Search</button>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="join"><div data-svelte-h="svelte-bfvye3"><div><input class="input input-bordered join-item w-[5.3rem] md:w-52" placeholder="Search"></div></div> <select class="select select-bordered join-item w-[5.8rem] md:w-auto"><option disabled selected value="Filter" data-svelte-h="svelte-1fcdbg5">Filter</option><option value="Sci-fi" data-svelte-h="svelte-kz0s2t">Sci-fi</option><option value="Drama" data-svelte-h="svelte-xqjqwb">Drama</option><option value="Action" data-svelte-h="svelte-pj43a">Action</option></select> <div class="indicator" data-svelte-h="svelte-1g4j08e"><span class="indicator-item badge badge-secondary">new</span> <button class="btn join-item">Search</button></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Custom border radius" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$join">
  <input class="$$input $$input-bordered $$join-item" placeholder="Email"/>
  <button class="$$btn $$join-item rounded-r-full">Subscribe</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="join" data-svelte-h="svelte-rbzhuk"><input class="input input-bordered join-item w-36 lg:w-52" placeholder="Email"> <button class="btn join-item rounded-r-full">Subscribe</button></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Join radio inputs with btn style"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$join">
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 1" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 2" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 3" />
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="join" data-svelte-h="svelte-181a2yp"><input class="join-item btn" type="radio" name="options" aria-label="Radio 1"> <input class="join-item btn" type="radio" name="options" aria-label="Radio 2"> <input class="join-item btn" type="radio" name="options" aria-label="Radio 3"></div>`;
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
