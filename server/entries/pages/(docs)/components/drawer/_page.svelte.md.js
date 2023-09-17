import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Drawer",
  "desc": "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",
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
              class: "drawer",
              desc: "The root container"
            },
            {
              type: "component",
              class: "drawer-toggle",
              desc: "For the hidden checkbox that controls the drawer"
            },
            {
              type: "component",
              class: "drawer-content",
              desc: "Container for all page content"
            },
            {
              type: "component",
              class: "drawer-side",
              desc: "The sidebar container"
            },
            {
              type: "component",
              class: "drawer-overlay",
              desc: "The label covers the content when drawer is open"
            },
            {
              type: "modifier",
              class: "drawer-end",
              desc: "puts drawer to the right"
            },
            {
              type: "responsive",
              class: "drawer-open",
              desc: "Forces the drawer to be open"
            }
          ]
        },
        {},
        {}
      )} <h3 id="drawer-tags-structure" data-svelte-h="svelte-64q3i8"><a aria-hidden="true" tabindex="-1" href="#drawer-tags-structure"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Drawer tags structure</h3> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token punctuation">.</span>drawer <span class="token comment">// The root container</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>toggle <span class="token comment">// A hidden checkbox to toggle the visibility of the sidebar</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>content <span class="token comment">// All your page content goes here</span>
  │    ├── <span class="token comment">// navbar</span>
  │    ├── <span class="token comment">// content</span>
  │    └── <span class="token comment">// footer</span>
  └── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>side <span class="token comment">// Sidebar wrapper</span>
       ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>overlay <span class="token comment">// A dark overlay that covers the whole page when the drawer is open</span>
       └── <span class="token comment">// Sidebar content (menu or anything)</span></code>`}<!-- HTML_TAG_END --></pre> <div class="alert text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Drawer sidebar is hidden by default. You can make it visible on larger screens using <code>lg:drawer-open</code> class (or using other responsive prefixes: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)"
        },
        {},
        {}
      )}</div></div> <div class="alert text-sm mt-4" data-svelte-h="svelte-1gaknfc"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>You can check/uncheck the checkbox using JavaScript or by clicking the <code>&lt;label&gt;</code> tag which is assigned to the hidden checkbox</div></div> ${validate_component(Component, "Component").$$render($$result, { title: "Drawer" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$drawer">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="drawer h-56 rounded overflow-hidden" data-svelte-h="svelte-awdj8m"><input id="my-drawer" type="checkbox" class="drawer-toggle"> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Responsive",
          desc: "Sidebar is always visible on large screen, can be toggled on small screen because of lg:drawer-open class"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$drawer lg:$$drawer-open">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-2" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="drawer lg:drawer-open h-56 rounded overflow-hidden" data-svelte-h="svelte-1a79wez"><input id="my-drawer-2" type="checkbox" class="drawer-toggle"> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-2" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Navbar menu for desktop + sidebar drawer for mobile",
          desc: "Change screen size to show/hide menu"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$drawer">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle" /> 
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full $$navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="$$btn $$btn-square $$btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="$$menu $$menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-3" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="drawer h-56 rounded overflow-hidden" data-svelte-h="svelte-lwhdi2"><input id="my-drawer-3" type="checkbox" class="drawer-toggle"> <div class="flex flex-col drawer-content"><div class="w-full navbar bg-base-300"><div class="flex-none lg:hidden"><label for="my-drawer-3" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div> <div class="flex-1 px-2 mx-2">Navbar Title</div> <div class="flex-none hidden lg:block"><ul class="menu menu-horizontal"><li><a>Navbar Item 1</a></li> <li><a>Navbar Item 2</a></li></ul></div></div> <div class="flex justify-center items-center flex-grow">Content</div></div> <div class="drawer-side h-full absolute"><label for="my-drawer-3" class="drawer-overlay"></label> <ul class="p-4 menu w-60 md:w-80 min-h-full bg-base-200"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Drawer that opens from right side of page"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$drawer $$drawer-end">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-4" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="drawer drawer-end h-56 rounded overflow-hidden" data-svelte-h="svelte-jxi3fu"><input id="my-drawer-4" type="checkbox" class="drawer-toggle"> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-4" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div></div>`;
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
