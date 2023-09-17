import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Avatar",
  "desc": "Avatars are used to show a thumbnail representation of an individual or business in the interface.",
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
              class: "avatar",
              desc: "Container element"
            },
            {
              type: "component",
              class: "avatar-group",
              desc: "Container for grouping multiple avatars"
            },
            {
              type: "modifier",
              class: "online",
              desc: "shows a green dot as online indicator"
            },
            {
              type: "modifier",
              class: "offline",
              desc: "shows a gray dot as offline indicator"
            },
            {
              type: "modifier",
              class: "placeholder",
              desc: "to show some letters as avatar placeholder"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Avatar" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar">
  <div class="w-24 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar" data-svelte-h="svelte-tk0hy4"><div class="w-24 rounded bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Avatar in custom sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar">
  <div class="w-32 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-20 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-16 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-8 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar" data-svelte-h="svelte-tk0hy4"><div class="w-24 rounded bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar" data-svelte-h="svelte-gp8thz"><div class="w-16 rounded bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar" data-svelte-h="svelte-6mrmmj"><div class="w-12 rounded bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar" data-svelte-h="svelte-1csmakc"><div class="w-8 rounded bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Avatar rounded" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar">
  <div class="w-24 rounded-xl">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-24 rounded-full">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar" data-svelte-h="svelte-hz3is3"><div class="w-24 rounded-xl bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar" data-svelte-h="svelte-101s0se"><div class="w-24 rounded-full bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Avatar with mask" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar">
  <div class="w-24 $$mask $$mask-squircle">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-24 $$mask $$mask-hexagon">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-24 $$mask $$mask-triangle">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar" data-svelte-h="svelte-1v2uway"><div class="w-24 mask mask-squircle bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar" data-svelte-h="svelte-rihgak"><div class="w-24 mask mask-hexagon bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar" data-svelte-h="svelte-18wx5bc"><div class="w-24 mask mask-triangle bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Avatar group" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar-group -space-x-6">
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar-group -space-x-6" data-svelte-h="svelte-q2azz9"><div class="avatar"><div class="w-12 bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar"><div class="w-12 bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar"><div class="w-12 bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar"><div class="w-12 bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Avatar group with counter" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar-group -space-x-6">
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar $$placeholder">
    <div class="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar-group -space-x-6" data-svelte-h="svelte-al23x8"><div class="avatar"><div class="w-12 bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar"><div class="w-12 bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar"><div class="w-12 bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar placeholder"><div class="w-12 bg-neutral-focus text-neutral-content"><span>+99</span></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Avatar with ring" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar" data-svelte-h="svelte-7k73qd"><div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Avatar with presence indicator" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar $$online">
  <div class="w-24 rounded-full">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar $$offline">
  <div class="w-24 rounded-full">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar online" data-svelte-h="svelte-nnt771"><div class="w-24 rounded-full bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div> <div class="avatar offline" data-svelte-h="svelte-19oe97h"><div class="w-24 rounded-full bg-base-300"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Avatar placeholder" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar $$placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span class="text-3xl">K</span>
  </div>
</div> 
<div class="$$avatar $$online $$placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
    <span class="text-xl">JO</span>
  </div>
</div> 
<div class="$$avatar $$placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
    <span>MX</span>
  </div>
</div> 
<div class="$$avatar $$placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
    <span class="text-xs">AA</span>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar placeholder" data-svelte-h="svelte-ij46vj"><div class="bg-neutral-focus text-neutral-content rounded-full w-24"><span class="text-3xl">K</span></div></div> <div class="avatar online placeholder" data-svelte-h="svelte-t13aw"><div class="bg-neutral-focus text-neutral-content rounded-full w-16"><span class="text-xl">JO</span></div></div> <div class="avatar placeholder" data-svelte-h="svelte-1in1h64"><div class="bg-neutral-focus text-neutral-content rounded-full w-12"><span>MX</span></div></div> <div class="avatar placeholder" data-svelte-h="svelte-13aj3a6"><div class="bg-neutral-focus text-neutral-content rounded-full w-8"><span class="text-xs">AA</span></div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
