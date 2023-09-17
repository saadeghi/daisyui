import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Pagination",
  "desc": "Pagination is a group of buttons that allow the user to navigate between a set of related content.",
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
              desc: "Groups buttons together"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Pagination with an active button"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$join">
  <button class="$$join-item $$btn">1</button>
  <button class="$$join-item $$btn $$btn-active">2</button>
  <button class="$$join-item $$btn">3</button>
  <button class="$$join-item $$btn">4</button>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="join" data-svelte-h="svelte-n4y33i"><button class="join-item btn">1</button> <button class="join-item btn btn-active">2</button> <button class="join-item btn">3</button> <button class="join-item btn">4</button></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$join">
  <button class="$$join-item $$btn $$btn-xs">1</button>
  <button class="$$join-item $$btn $$btn-xs $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-xs">3</button>
  <button class="$$join-item $$btn $$btn-xs">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-sm">1</button>
  <button class="$$join-item $$btn $$btn-sm $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-sm">3</button>
  <button class="$$join-item $$btn $$btn-sm">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-md">1</button>
  <button class="$$join-item $$btn $$btn-md $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-md">3</button>
  <button class="$$join-item $$btn $$btn-md">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-lg">1</button>
  <button class="$$join-item $$btn $$btn-lg $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-lg">3</button>
  <button class="$$join-item $$btn $$btn-lg">4</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-ir5bmf"><div class="join"><button class="join-item btn btn-xs">1</button> <button class="join-item btn btn-xs btn-active">2</button> <button class="join-item btn btn-xs">3</button> <button class="join-item btn btn-xs">4</button></div> <div class="join"><button class="join-item btn btn-sm">1</button> <button class="join-item btn btn-sm btn-active">2</button> <button class="join-item btn btn-sm">3</button> <button class="join-item btn btn-sm">4</button></div> <div class="join"><button class="join-item btn btn-md">1</button> <button class="join-item btn btn-md btn-active">2</button> <button class="join-item btn btn-md">3</button> <button class="join-item btn btn-md">4</button></div> <div class="join"><button class="join-item btn btn-lg">1</button> <button class="join-item btn btn-lg btn-active">2</button> <button class="join-item btn btn-lg">3</button> <button class="join-item btn btn-lg">4</button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With a disabled button" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$join">
  <button class="$$join-item $$btn">1</button>
  <button class="$$join-item $$btn">2</button>
  <button class="$$join-item $$btn $$btn-disabled">...</button>
  <button class="$$join-item $$btn">99</button>
  <button class="$$join-item $$btn">100</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="join" data-svelte-h="svelte-m6i666"><button class="join-item btn">1</button> <button class="join-item btn">2</button> <button class="join-item btn btn-disabled">...</button> <button class="join-item btn">99</button> <button class="join-item btn">100</button></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Extra small buttons" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$join">
  <button class="$$join-item $$btn">«</button>
  <button class="$$join-item $$btn">Page 22</button>
  <button class="$$join-item $$btn">»</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="join" data-svelte-h="svelte-1ivi9ow"><button class="join-item btn">«</button> <button class="join-item btn">Page 22</button> <button class="join-item btn">»</button></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Nex/Prev outline buttons with equal width"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$join grid grid-cols-2">
  <button class="$$join-item $$btn $$btn-outline">Previous page</button>
  <button class="$$join-item $$btn $$btn-outline">Next</button>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="join grid grid-cols-2" data-svelte-h="svelte-2y10pd"><button class="join-item btn btn-outline">Previous page</button> <button class="join-item btn btn-outline">Next</button></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Using radio inputs" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$join">
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="1" checked />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="2" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="3" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="4" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="join" data-svelte-h="svelte-yxbbg"><input class="join-item btn btn-square" type="radio" name="options" aria-label="1" checked> <input class="join-item btn btn-square" type="radio" name="options" aria-label="2"> <input class="join-item btn btn-square" type="radio" name="options" aria-label="3"> <input class="join-item btn btn-square" type="radio" name="options" aria-label="4"></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
