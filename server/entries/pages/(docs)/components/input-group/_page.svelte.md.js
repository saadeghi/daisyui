import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Input group",
  "desc": "Input group puts an input next to a text or a button.",
  "published": true,
  "layout": "components"
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefix;
  $$unsubscribe_prefix = subscribe(prefix, (value) => value);
  $$unsubscribe_prefix();
  return `${validate_component(Mdsvex_components, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<div class="alert alert-warning"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div><div class="font-bold">${validate_component(Translate, "Translate").$$render($$result, { text: "Deprecated" }, {}, {})}</div> <div>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "This component is deprecated and will be removed in the next major version. Use <a class='link' href='/components/join'>Join</a> instead."
        },
        {},
        {}
      )}</div></div></div> ${validate_component(ClassTable, "ClassTable").$$render(
        $$result,
        {
          data: [
            {
              type: "component",
              class: "input-group",
              desc: "Container for grouping elements"
            },
            {
              type: "modifier",
              class: "input-group-lg",
              desc: "Large size for input-group wrapper"
            },
            {
              type: "modifier",
              class: "input-group-md",
              desc: "Medium (default) size for input-group wrapper"
            },
            {
              type: "modifier",
              class: "input-group-sm",
              desc: "Small size for input-group wrapper"
            },
            {
              type: "modifier",
              class: "input-group-xs",
              desc: "Extra small size for input-group wrapper"
            },
            {
              type: "modifier",
              class: "input-group-vertical",
              desc: "Vertical direction for input-group items"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Group label and text input horizontally"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$label">
    <span class="$$label-text">Your Email</span>
  </label>
  <label class="$$input-group">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" class="$$input $$input-bordered" />
  </label>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="form-control" data-svelte-h="svelte-9voxl5"><label class="label"><span class="label-text">Your Email</span></label> <label class="input-group"><span>Email</span> <input type="text" placeholder="info@site.com" class="input input-bordered"></label></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Group text input and label horizontally"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$label">
    <span class="$$label-text">Enter amount</span>
  </label>
  <label class="$$input-group">
    <input type="text" placeholder="0.01" class="$$input $$input-bordered" />
    <span>BTC</span>
  </label>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="form-control" data-svelte-h="svelte-1qq5eg0"><label class="label"><span class="label-text">Enter amount</span></label> <label class="input-group"><input type="text" placeholder="0.01" class="input input-bordered"> <span>BTC</span></label></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "label on both sides" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$label">
    <span class="$$label-text">Enter amount</span>
  </label>
  <label class="$$input-group">
    <span>Price</span>
    <input type="text" placeholder="10" class="$$input $$input-bordered" />
    <span>USD</span>
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control" data-svelte-h="svelte-1l327fh"><label class="label"><span class="label-text">Enter amount</span></label> <label class="input-group"><span>Price</span> <input type="text" placeholder="10" class="input input-bordered"> <span>USD</span></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Group label and text input vertically"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$label">
    <span class="$$label-text">Your Email</span>
  </label>
  <label class="$$input-group $$input-group-vertical">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" class="$$input $$input-bordered" />
  </label>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="form-control" data-svelte-h="svelte-impxiu"><label class="label"><span class="label-text">Your Email</span></label> <label class="input-group input-group-vertical"><span>Email</span> <input type="text" placeholder="info@site.com" class="input input-bordered"></label></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <label class="$$input-group $$input-group-lg">
    <span>LG</span>
    <input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-lg" />
  </label>
</div>
<div class="$$form-control">
  <label class="$$input-group $$input-group-md">
    <span>MD</span>
    <input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-md" />
  </label>
</div>
<div class="$$form-control">
  <label class="$$input-group $$input-group-sm">
    <span>SM</span>
    <input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-sm" />
  </label>
</div>
<div class="$$form-control">
  <label class="$$input-group $$input-group-xs">
    <span>XS</span>
    <input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-xs" />
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-4 items-center" data-svelte-h="svelte-ycxjp6"><div class="form-control"><label class="input-group input-group-lg"><span>LG</span> <input type="text" placeholder="Type here" class="input input-bordered input-lg"></label></div> <div class="form-control"><label class="input-group input-group-md"><span>MD</span> <input type="text" placeholder="Type here" class="input input-bordered input-md"></label></div> <div class="form-control"><label class="input-group input-group-sm"><span>SM</span> <input type="text" placeholder="Type here" class="input input-bordered input-sm"></label></div> <div class="form-control"><label class="input-group input-group-xs"><span>XS</span> <input type="text" placeholder="Type here" class="input input-bordered input-xs"></label></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Group text input and button" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <div class="$$input-group">
    <input type="text" placeholder="Search…" class="$$input $$input-bordered" />
    <button class="$$btn $$btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control" data-svelte-h="svelte-1caev5e"><div class="input-group"><input type="text" placeholder="Search…" class="input input-bordered"> <button class="btn btn-square"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Group select and button" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control">
  <div class="$$input-group">
    <select class="$$select $$select-bordered">
      <option disabled selected>Pick category</option>
      <option>T-shirts</option>
      <option>Mugs</option>
    </select>
    <button class="$$btn">Go</button>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control"><div class="input-group"><select class="select select-bordered"><option disabled selected value="Pick category" data-svelte-h="svelte-1nzoa7o">Pick category</option><option value="T-shirts" data-svelte-h="svelte-12hv6fq">T-shirts</option><option value="Mugs" data-svelte-h="svelte-1fki2vk">Mugs</option></select> <button class="btn" data-svelte-h="svelte-157zp5v">Go</button></div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
