import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Indicator",
  "desc": "Indicators are used to place an element on the corner of another element.",
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
              class: "indicator",
              desc: "Container element"
            },
            {
              type: "component",
              class: "indicator-item",
              desc: "will be placed on the corner of sibling"
            },
            {
              type: "responsive",
              class: "indicator-start",
              desc: "align horizontally to the left"
            },
            {
              type: "responsive",
              class: "indicator-center",
              desc: "align horizontally to the center"
            },
            {
              type: "responsive",
              class: "indicator-end",
              desc: "align horizontally to the right (default)"
            },
            {
              type: "responsive",
              class: "indicator-top",
              desc: "align vertically to top (default)"
            },
            {
              type: "responsive",
              class: "indicator-middle",
              desc: "align vertically to middle"
            },
            {
              type: "responsive",
              class: "indicator-bottom",
              desc: "align vertically to bottom"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Empty badge as indicator" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary"></span> 
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="indicator" data-svelte-h="svelte-bqa2u8"><span class="indicator-item badge badge-secondary"></span> <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Badge as indicator" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-primary">new</span> 
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="indicator" data-svelte-h="svelte-ncapje"><span class="indicator-item badge badge-primary">new</span> <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "for button" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary">99+</span> 
  <button class="$$btn">inbox</button>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="indicator" data-svelte-h="svelte-19ivh6j"><span class="indicator-item badge badge-secondary">99+</span> <button class="btn">inbox</button></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "for tab" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tabs">
  <a class="$$tab $$tab-lifted">Messages</a> 
  <a class="$$indicator $$tab $$tab-lifted $$tab-active">
    Notifications 
    <span class="$$indicator-item $$badge">8</span>
  </a> 
  <a class="$$tab $$tab-lifted">Requests</a>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="tabs" data-svelte-h="svelte-1iigfiv"><a class="tab tab-lifted">Messages</a> <a class="indicator tab tab-lifted tab-active">Notifications 
    <span class="indicator-item badge">8</span></a> <a class="tab tab-lifted">Requests</a></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "for avatar" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$avatar $$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary">typing…</span> 
  <div class="w-20 h-20 rounded-lg">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="avatar indicator" data-svelte-h="svelte-1naq3zy"><span class="indicator-item badge badge-secondary">typing…</span> <div class="w-20 h-20 rounded-lg"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "for an input" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$badge">Required</span>
  <input type="text" placeholder="Your email address" class="$$input $$input-bordered" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="indicator" data-svelte-h="svelte-uan2g8"><span class="indicator-item badge">Required</span> <input type="text" placeholder="Your email address" class="input input-bordered"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "A button as an indicator for a card"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <div class="$$indicator-item $$indicator-bottom">
    <button class="$$btn $$btn-primary">Apply</button>
  </div> 
  <div class="$$card border">
    <div class="$$card-body">
      <h2 class="$$card-title">Job Title</h2> 
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator my-6 mx-10" data-svelte-h="svelte-1uupcjw"><div class="indicator-item indicator-bottom"><button class="btn btn-primary">Apply</button></div> <div class="border card bg-base-100"><div class="card-body"><h2 class="card-title">Job Title</h2> <p>Rerum reiciendis beatae tenetur excepturi</p></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "in center of an image" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-center $$indicator-middle $$badge $$badge-secondary">Uploading Image...</span> 
  <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="indicator" data-svelte-h="svelte-1is9qvq"><span class="indicator-item indicator-center indicator-middle badge badge-secondary">Uploading Image...</span> <img class="rounded" src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "indicator-top (default) indicator-start"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-start $$badge $$badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-1fldsj1"><span class="indicator-item indicator-start badge badge-secondary"></span> <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "indicator-top (default) indicator-center"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-center $$badge $$badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-1r58h24"><span class="indicator-item indicator-center badge badge-secondary"></span> <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "indicator-top (default) indicator-end (default)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-1tmnrhh"><span class="indicator-item badge badge-secondary"></span> <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "indicator-middle indicator-start"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-middle $$indicator-start $$badge $$badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-vmm6fo"><span class="indicator-item indicator-middle indicator-start badge badge-secondary"></span> <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "indicator-middle indicator-center"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-middle $$indicator-center $$badge $$badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-1rokjar"><span class="indicator-item indicator-middle indicator-center badge badge-secondary"></span> <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "indicator-middle indicator-end (default)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-middle $$badge $$badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-is2s3g"><span class="indicator-item indicator-middle badge badge-secondary"></span> <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "indicator-bottom indicator-start"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-bottom $$indicator-start $$badge $$badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-11gkdhq"><span class="indicator-item indicator-bottom indicator-start badge badge-secondary"></span> <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "indicator-bottom indicator-center"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-bottom $$indicator-center $$badge $$badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-nv1k3p"><span class="indicator-item indicator-bottom indicator-center badge badge-secondary"></span> <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "indicator-bottom indicator-end (default)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-bottom $$badge $$badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-1f6ng5y"><span class="indicator-item indicator-bottom badge badge-secondary"></span> <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "multiple indicators" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-top $$indicator-start $$badge $$badge-secondary">top+start</span>
  <span class="$$indicator-item $$indicator-top $$indicator-center $$badge $$badge-secondary">top+center</span>
  <span class="$$indicator-item $$indicator-top $$indicator-end $$badge $$badge-secondary">top+end</span>
  <span class="$$indicator-item $$indicator-middle $$indicator-start $$badge $$badge-secondary">middle+start</span>
  <span class="$$indicator-item $$indicator-middle $$indicator-center $$badge $$badge-secondary">middle+center</span>
  <span class="$$indicator-item $$indicator-middle $$indicator-end $$badge $$badge-secondary">middle+end</span>
  <span class="$$indicator-item $$indicator-bottom $$indicator-start $$badge $$badge-secondary">bottom+start</span>
  <span class="$$indicator-item $$indicator-bottom $$indicator-center $$badge $$badge-secondary">bottom+center</span>
  <span class="$$indicator-item $$indicator-bottom $$indicator-end $$badge $$badge-secondary">bottom+end</span>
  <div class="grid w-60 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="indicator" data-svelte-h="svelte-8ysvgr"><span class="indicator-item indicator-top indicator-start badge badge-secondary">top+start</span> <span class="indicator-item indicator-top indicator-center badge badge-secondary">top+center</span> <span class="indicator-item indicator-top indicator-end badge badge-secondary">top+end</span> <span class="indicator-item indicator-middle indicator-start badge badge-secondary">middle+start</span> <span class="indicator-item indicator-middle indicator-center badge badge-secondary">middle+center</span> <span class="indicator-item indicator-middle indicator-end badge badge-secondary">middle+end</span> <span class="indicator-item indicator-bottom indicator-start badge badge-secondary">bottom+start</span> <span class="indicator-item indicator-bottom indicator-center badge badge-secondary">bottom+center</span> <span class="indicator-item indicator-bottom indicator-end badge badge-secondary">bottom+end</span> <div class="grid w-60 h-32 bg-base-300 place-items-center">content</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Responsive",
          desc: "changes position based on resolution"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$indicator">
  <span class="$$indicator-item $$indicator-start sm:$$indicator-middle md:$$indicator-bottom lg:$$indicator-center xl:$$indicator-end badge badge-secondary"></span> 
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="indicator" data-svelte-h="svelte-1e2t7e2"><span class="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"></span> <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div></div>`;
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
