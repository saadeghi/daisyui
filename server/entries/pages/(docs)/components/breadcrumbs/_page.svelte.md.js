import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Breadcrumbs",
  "desc": "Breadcrumbs helps users to navigate through the website.",
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
              class: "breadcrumbs",
              desc: "Container element"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Breadcrumbs" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="text-sm $$breadcrumbs">
  <ul>
    <li><a>Home</a></li> 
    <li><a>Documents</a></li> 
    <li>Add Document</li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="text-sm breadcrumbs" data-svelte-h="svelte-1ky13dk"><ul><li><a>Home</a></li> <li><a>Documents</a></li> <li>Add Document</li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Breadcrumbs with icons" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="text-sm $$breadcrumbs">
  <ul>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Home
      </a>
    </li> 
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Documents
      </a>
    </li> 
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      Add Document
    </li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="text-sm breadcrumbs" data-svelte-h="svelte-1nk7pnq"><ul><li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Home</a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Documents</a></li> <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      Add Document</li></ul></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Breadcrumbs with max-width",
          desc: "If you set max-width or the list gets larger than the container it will scroll"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="max-w-xs text-sm $$breadcrumbs">
  <ul>
    <li>Long text 1</li>
    <li>Long text 2</li>
    <li>Long text 3</li>
    <li>Long text 4</li>
    <li>Long text 5</li>
  </ul>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="max-w-xs text-sm breadcrumbs" data-svelte-h="svelte-10d6jh1"><ul><li>Long text 1</li> <li>Long text 2</li> <li>Long text 3</li> <li>Long text 4</li> <li>Long text 5</li></ul></div>`;
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
