import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Dropdown",
  "desc": "Dropdown can open a menu or any other element when the button is clicked.",
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
              class: "dropdown",
              desc: "Container element"
            },
            {
              type: "component",
              class: "dropdown-content",
              desc: "Container for content"
            },
            {
              type: "modifier",
              class: "dropdown-end",
              desc: "Aligns to end"
            },
            {
              type: "modifier",
              class: "dropdown-top",
              desc: "Open from top"
            },
            {
              type: "modifier",
              class: "dropdown-bottom",
              desc: "Open from bottom"
            },
            {
              type: "modifier",
              class: "dropdown-left",
              desc: "Open from left"
            },
            {
              type: "modifier",
              class: "dropdown-right",
              desc: "Open from right"
            },
            {
              type: "modifier",
              class: "dropdown-hover",
              desc: "Opens on hover too"
            },
            {
              type: "modifier",
              class: "dropdown-open",
              desc: "Force open"
            }
          ]
        },
        {},
        {}
      )} <h3 id="method-1-using-details-and-summary-tags" data-svelte-h="svelte-191tlwd"><a aria-hidden="true" tabindex="-1" href="#method-1-using-details-and-summary-tags"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 1: using details and summary tags</h3> ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Dropdown menu using <details> tag",
          desc: "Stays open until gets clicked again. Or you can close it using JS by removing the `open` attribute"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<details class="$$dropdown mb-32">
  <summary class="m-1 btn">open or close</summary>
  <ul class="p-2 shadow $$menu $$dropdown-content z-[1] bg-base-100 $$rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`)}</pre>`;
          },
          default: () => {
            return `<details class="dropdown mb-32" data-svelte-h="svelte-15y092u"><summary class="m-1 btn">open or close</summary> <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></details>`;
          }
        }
      )} <h3 id="method-2-using-label-and-css-focus" data-svelte-h="svelte-18y1qi0"><a aria-hidden="true" tabindex="-1" href="#method-2-using-label-and-css-focus"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 2: using label and CSS focus</h3> <div class="alert text-sm mb-2" data-svelte-h="svelte-zm4pfq"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>We use a &lt;label tabindex=&quot;0&quot;&gt; instead of a &lt;button&gt; because Safari has <a rel="noopener noreferrer" target="_blank" href="https://bugs.webkit.org/show_bug.cgi?id=22261">a bug</a> that prevents the button from being focused.</div></div> <div class="alert text-sm" data-svelte-h="svelte-18t25r4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  Using tabindex=&quot;0&quot; is required so the dropdown can be focused.</div> ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown menu" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div data-svelte-h="svelte-19grsio"><div class="text-sm mb-4 text-center">Click outside to close</div> <div class="dropdown mb-32"><label tabindex="0" class="m-1 btn">Click to open</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div></div>`;
        }
      })} <h3 id="positions" data-svelte-h="svelte-1g7uh2t"><a aria-hidden="true" tabindex="-1" href="#positions"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Positions</h3> ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown / aligns to end" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-end">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-end mb-32" data-svelte-h="svelte-1582myi"><label tabindex="0" class="m-1 btn">Click</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown top" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-top">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-top mt-32" data-svelte-h="svelte-13frhj2"><label tabindex="0" class="m-1 btn">Click</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown top / aligns to end" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-top $$dropdown-end">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-top dropdown-end mt-32" data-svelte-h="svelte-bxzwjn"><label tabindex="0" class="m-1 btn">Click</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown bottom" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-bottom">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-bottom mb-32" data-svelte-h="svelte-19sykd2"><label tabindex="0" class="m-1 btn">Click</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown bottom / aligns to end" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-bottom $$dropdown-end">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-bottom dropdown-end mb-32" data-svelte-h="svelte-12vya15"><label tabindex="0" class="m-1 btn">Click</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown left" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-left">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-left mb-16" data-svelte-h="svelte-3ltc9u"><label tabindex="0" class="m-1 btn">Click</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown left / aligns to end" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-left $$dropdown-end">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-left dropdown-end mt-16" data-svelte-h="svelte-hkyawr"><label tabindex="0" class="m-1 btn">Click</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown right" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-right">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-right mb-16" data-svelte-h="svelte-a21qfp"><label tabindex="0" class="m-1 btn">Click</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown right / aligns to end" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-right $$dropdown-end">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-right dropdown-end mt-16" data-svelte-h="svelte-1c9bxa"><label tabindex="0" class="m-1 btn">Click</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} <h3 id="open-on-hover" data-svelte-h="svelte-1m15y18"><a aria-hidden="true" tabindex="-1" href="#open-on-hover"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Open on hover</h3> ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown on hover" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-hover">
  <label tabindex="0" class="$$btn m-1">Hover</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-hover mb-32" data-svelte-h="svelte-1911n7d"><label tabindex="0" class="m-1 btn">Hover</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} <h3 id="force-open" data-svelte-h="svelte-1p5onro"><a aria-hidden="true" tabindex="-1" href="#force-open"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Force open</h3> ${validate_component(Component, "Component").$$render($$result, { title: "Force open" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown $$dropdown-open">
  <label tabindex="0" class="$$btn m-1">Button</label>
  <ul tabindex="0" class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown dropdown-open mb-32" data-svelte-h="svelte-1739lkv"><label tabindex="0" class="m-1 btn">Button</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div>`;
        }
      })} <h3 id="more-examples" data-svelte-h="svelte-um8e2x"><a aria-hidden="true" tabindex="-1" href="#more-examples"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>More examples</h3> ${validate_component(Component, "Component").$$render($$result, { title: "Card as dropdown" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$dropdown">
  <label tabindex="0" class="$$btn m-1">Click</label>
  <div tabindex="0" class="$$dropdown-content z-[1] $$card $$card-compact w-64 p-2 shadow bg-primary text-primary-content">
    <div class="$$card-body">
      <h3 class="$$card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="dropdown mb-32" data-svelte-h="svelte-1vn90r4"><label tabindex="0" class="m-1 btn">Click</label> <div tabindex="0" class="w-64 p-2 shadow card card-compact dropdown-content z-[1] bg-primary text-primary-content"><div class="card-body"><h3 class="card-title">Card title!</h3> <p>you can use any element as a dropdown.</p></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Dropdown in navbar" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$navbar bg-base-300 rounded-box">
  <div class="flex-1 px-2 lg:flex-none">
    <a class="text-lg font-bold">daisyUI</a>
  </div> 
  <div class="flex justify-end flex-1 px-2">
    <div class="flex items-stretch">
      <a class="$$btn $$btn-ghost rounded-btn">Button</a>
      <div class="$$dropdown $$dropdown-end">
        <label tabindex="0" class="$$btn $$btn-ghost rounded-btn">Dropdown</label>
        <ul tabindex="0" class="$$menu $$dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><a>Item 1</a></li> 
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="navbar mb-40 bg-base-300 rounded-box w-full" data-svelte-h="svelte-aodx7b"><div class="flex-1 px-2 lg:flex-none"><a class="text-lg font-bold">daisyUI</a></div> <div class="flex justify-end flex-1 px-2"><div class="flex items-stretch"><a class="btn btn-ghost rounded-btn">Button</a> <div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-ghost rounded-btn">Dropdown</label> <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-4"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></div></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Helper dropdown" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`A normal text and a helper dropdown
<div class="$$dropdown $$dropdown-end">
  <label tabindex="0" class="$$btn $$btn-circle $$btn-ghost $$btn-xs text-info">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </label>
  <div tabindex="0" class="$$card $$compact $$dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
    <div class="$$card-body">
      <h2 class="$$card-title">You needed more info?</h2> 
      <p>Here is a description!</p>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="mb-28 mt-6 flex gap-1 items-center" data-svelte-h="svelte-e3mfrz">A normal text and a helper dropdown
  <div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></label> <div tabindex="0" class="shadow card compact dropdown-content z-[1] bg-base-100 rounded-box w-64"><div class="card-body"><h2 class="card-title">You needed more info?</h2> <p>Here is a description!</p></div></div></div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
