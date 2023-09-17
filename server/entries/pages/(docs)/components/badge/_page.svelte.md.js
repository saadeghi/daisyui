import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Badge",
  "desc": "Badges are used to inform the user of the status of specific data.",
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
              class: "badge",
              desc: "Container element"
            },
            {
              type: "modifier",
              class: "badge-neutral",
              desc: "badge with `neutral` color"
            },
            {
              type: "modifier",
              class: "badge-primary",
              desc: "badge with `primary` color"
            },
            {
              type: "modifier",
              class: "badge-secondary",
              desc: "badge with `secondary` color"
            },
            {
              type: "modifier",
              class: "badge-accent",
              desc: "badge with `accent` color"
            },
            {
              type: "modifier",
              class: "badge-ghost",
              desc: "badge with `ghost` color"
            },
            {
              type: "modifier",
              class: "badge-info",
              desc: "badge with `info` color"
            },
            {
              type: "modifier",
              class: "badge-success",
              desc: "badge with `success` color"
            },
            {
              type: "modifier",
              class: "badge-warning",
              desc: "badge with `warning` color"
            },
            {
              type: "modifier",
              class: "badge-error",
              desc: "badge with `error` color"
            },
            {
              type: "modifier",
              class: "badge-outline",
              desc: "transparent badge with [colorful] border"
            },
            {
              type: "responsive",
              class: "badge-lg",
              desc: "badge with large size"
            },
            {
              type: "responsive",
              class: "badge-md",
              desc: "badge with medium size (default)"
            },
            {
              type: "responsive",
              class: "badge-sm",
              desc: "badge with small size"
            },
            {
              type: "responsive",
              class: "badge-xs",
              desc: "badge with extra small size"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Badge" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$badge">Badge</span>`)}</pre>`;
        },
        default: () => {
          return `<span class="badge" data-svelte-h="svelte-aqibv3">Badge</span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Badge with brand colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$badge">default</div>
<div class="$$badge $$badge-neutral">neutral</div>
<div class="$$badge $$badge-primary">primary</div>
<div class="$$badge $$badge-secondary">secondary</div>
<div class="$$badge $$badge-accent">accent</div>
<div class="$$badge $$badge-ghost">ghost</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="badge" data-svelte-h="svelte-t3ak83">default</div> <div class="badge badge-neutral" data-svelte-h="svelte-fnhst6">neutral</div> <div class="badge badge-primary" data-svelte-h="svelte-13xzh2w">primary</div> <div class="badge badge-secondary" data-svelte-h="svelte-d2tols">secondary</div> <div class="badge badge-accent" data-svelte-h="svelte-1lqs2vk">accent</div> <div class="badge badge-ghost" data-svelte-h="svelte-1od8seq">ghost</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Outline badge" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$badge $$badge-outline">default</div>
<div class="$$badge $$badge-primary $$badge-outline">primary</div>
<div class="$$badge $$badge-secondary $$badge-outline">secondary</div>
<div class="$$badge $$badge-accent $$badge-outline">accent</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="badge badge-outline" data-svelte-h="svelte-ldtuz3">default</div> <div class="badge badge-primary badge-outline" data-svelte-h="svelte-5jz5x8">primary</div> <div class="badge badge-secondary badge-outline" data-svelte-h="svelte-1ccql3g">secondary</div> <div class="badge badge-accent badge-outline" data-svelte-h="svelte-1eawpkc">accent</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Badge sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$badge $$badge-lg">987,654</div>
<div class="$$badge $$badge-md">987,654</div>
<div class="$$badge $$badge-sm">987,654</div>
<div class="$$badge $$badge-xs">987,654</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="badge badge-lg" data-svelte-h="svelte-p8njj0">987,654</div> <div class="badge badge-md" data-svelte-h="svelte-41kvp8">987,654</div> <div class="badge badge-sm" data-svelte-h="svelte-mh5xy9">987,654</div> <div class="badge badge-xs" data-svelte-h="svelte-1mqt89o">987,654</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Empty badge" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$badge $$badge-primary $$badge-lg"></div>
<div class="$$badge $$badge-primary $$badge-md"></div>
<div class="$$badge $$badge-primary $$badge-sm"></div>
<div class="$$badge $$badge-primary $$badge-xs"></div>`)}</pre>`;
        },
        default: () => {
          return `<div class="badge badge-primary badge-lg"></div> <div class="badge badge-primary badge-md"></div> <div class="badge badge-primary badge-sm"></div> <div class="badge badge-primary badge-xs"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Badge with state colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$badge $$badge-info gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  info
</div>
<div class="$$badge $$badge-success gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  success
</div>
<div class="$$badge $$badge-warning gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  warning
</div>
<div class="$$badge $$badge-error gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  error
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="badge badge-info gap-2" data-svelte-h="svelte-16t25vy"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  info</div> <div class="badge badge-success gap-2" data-svelte-h="svelte-nzjrc0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  success</div> <div class="badge badge-warning gap-2" data-svelte-h="svelte-dbuqjm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  warning</div> <div class="badge badge-error gap-2" data-svelte-h="svelte-3hs29a"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  error</div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Badge in a text",
          classes: "flex-col"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<h2 class="text-xl">
  Heading
  <span class="badge badge-lg">NEW</span>
</h2>
<h3 class="text-lg">
  Heading
  <span class="badge badge-md">NEW</span>
</h3>
<h4 class="text-base">
  Heading
  <span class="badge badge-sm">NEW</span>
</h4>
<h5 class="text-sm">
  Heading
  <span class="badge badge-xs">NEW</span>
</h5>`)}</pre>`;
          },
          default: () => {
            return `<h2 class="text-xl" data-svelte-h="svelte-1058fjd">Heading
  <span class="badge badge-lg">NEW</span></h2> <h3 class="text-lg" data-svelte-h="svelte-kbvidg">Heading
  <span class="badge badge-md">NEW</span></h3> <h4 class="text-base" data-svelte-h="svelte-g6ol9p">Heading
  <span class="badge badge-sm">NEW</span></h4> <h5 class="text-sm" data-svelte-h="svelte-jkjnhd">Heading
  <span class="badge badge-xs">NEW</span></h5>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Badge in a button" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn">
  Inbox
  <div class="$$badge">+99</div>
</button>
<button class="$$btn">
  Inbox
  <div class="$$badge $$badge-secondary">+99</div>
</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn" data-svelte-h="svelte-1izuaw7">Inbox
  <div class="badge">+99</div></button> <button class="btn" data-svelte-h="svelte-1j8fk17">Inbox
  <div class="badge badge-secondary">+99</div></button>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
