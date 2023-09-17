import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Rating",
  "desc": "Rating is a set of radio buttons that allow the user to rate something.",
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
              class: "rating",
              desc: "Wrapper component for radio buttons"
            },
            {
              type: "modifier",
              class: "rating-half",
              desc: "To shows half of the shape"
            },
            {
              type: "modifier",
              class: "rating-hidden",
              desc: "hides the input. Useful to clear the the rating"
            },
            {
              type: "responsive",
              class: "rating-lg",
              desc: "Large rating"
            },
            {
              type: "responsive",
              class: "rating-md",
              desc: "Medium rating (default)"
            },
            {
              type: "responsive",
              class: "rating-sm",
              desc: "Small rating"
            },
            {
              type: "responsive",
              class: "rating-xs",
              desc: "Extra small rating"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Rating" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$rating">
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" checked />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="rating" data-svelte-h="svelte-cwlflj"><input type="radio" name="rating-1" class="mask mask-star"> <input type="radio" name="rating-1" class="mask mask-star" checked> <input type="radio" name="rating-1" class="mask mask-star"> <input type="radio" name="rating-1" class="mask mask-star"> <input type="radio" name="rating-1" class="mask mask-star"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "mask-star-2 with warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$rating">
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="rating" data-svelte-h="svelte-1i2axzq"><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "mask-heart with multiple colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$rating gap-1">
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-red-400" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-orange-400" checked />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-green-400" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="gap-1 rating" data-svelte-h="svelte-1xhbk2z"><input type="radio" name="rating-3" class="mask mask-heart bg-red-400"> <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked> <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400"> <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400"> <input type="radio" name="rating-3" class="mask mask-heart bg-green-400"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "mask-star-2 with green-500 color"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$rating">
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="rating" data-svelte-h="svelte-a8er1m"><input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2"> <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2" checked> <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2"> <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2"> <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2"></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<!-- xs -->
<div class="$$rating $$rating-xs">
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- sm -->
<div class="$$rating $$rating-sm">
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- md -->
<div class="$$rating $$rating-md">
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- lg -->
<div class="$$rating $$rating-lg">
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-2 items-center" data-svelte-h="svelte-18xy34"><div class="rating rating-xs"><input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked> <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"></div> <div class="rating rating-sm"><input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"></div> <div class="rating rating-md"><input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" checked> <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400"></div> <div class="rating rating-lg"><input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" checked> <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "with `rating-hidden`",
          desc: "`rating-hidden` is a hidden radio at the start to allow uses remove their rating."
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$rating $$rating-lg">
  <input type="radio" name="rating-9" class="$$rating-hidden" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" checked />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" />
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="rating rating-lg" data-svelte-h="svelte-6smcx8"><input type="radio" name="rating-9" class="rating-hidden"> <input type="radio" name="rating-9" class="mask mask-star-2"> <input type="radio" name="rating-9" class="mask mask-star-2" checked> <input type="radio" name="rating-9" class="mask mask-star-2"> <input type="radio" name="rating-9" class="mask mask-star-2"> <input type="radio" name="rating-9" class="mask mask-star-2"></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "half stars" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$rating $$rating-lg $$rating-half">
  <input type="radio" name="rating-10" class="rating-hidden" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" checked />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="rating rating-lg rating-half" data-svelte-h="svelte-16y8ylv"><input type="radio" name="rating-10" class="rating-hidden"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
