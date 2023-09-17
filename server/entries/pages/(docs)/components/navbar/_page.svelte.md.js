import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Navbar",
  "desc": "Navbar is used to show a navigation bar on the top of the page.",
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
              class: "navbar",
              desc: "Container element"
            },
            {
              type: "component",
              class: "navbar-start",
              desc: "Child element, fills 50% of width to be on start"
            },
            {
              type: "component",
              class: "navbar-center",
              desc: "Child element, fills remaining space to be on center"
            },
            {
              type: "component",
              class: "navbar-end",
              desc: "Child element, fills 50% of width to be on end"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Navbar with title only" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$navbar bg-base-100">
  <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="navbar bg-base-100 shadow-xl rounded-box" data-svelte-h="svelte-ka4ily"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Navbar with title and icon" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$navbar bg-base-100">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="navbar bg-base-100 shadow-xl rounded-box" data-svelte-h="svelte-3832yc"><div class="flex-1"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div> <div class="flex-none"><button class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></button></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Navbar with icon at start and end"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$navbar bg-base-100">
  <div class="flex-none">
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div class="flex-1">
    <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="navbar bg-base-100 shadow-xl rounded-box" data-svelte-h="svelte-1xmtt4d"><div class="flex-none"><button class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div> <div class="flex-1"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div> <div class="flex-none"><button class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></button></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Navbar with menu and submenu" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$navbar bg-base-100">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="$$menu $$menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul class="p-2 bg-base-100">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="navbar bg-base-100 mb-32 shadow-xl rounded-box" data-svelte-h="svelte-1nuf1bc"><div class="flex-1"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div> <div class="flex-none"><ul class="menu menu-horizontal px-1 bg-base-100"><li><a>Link</a></li> <li><details><summary>Parent</summary> <ul class="p-2 bg-base-100"><li><a>Link 1</a></li> <li><a>Link 2</a></li></ul></details></li></ul></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Navbar with search input and dropdown"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$navbar bg-base-100">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none gap-2">
    <div class="$$form-control">
      <input type="text" placeholder="Search" class="$$input $$input-bordered w-24 md:w-auto" />
    </div>
    <div class="$$dropdown $$dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="$$badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="navbar bg-base-100 mb-32 shadow-xl rounded-box" data-svelte-h="svelte-1h2mpp1"><div class="flex-1"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div> <div class="flex-none gap-2"><div class="form-control"><input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto"></div> <div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></label> <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"><li><a class="justify-between">Profile
            <span class="badge">New</span></a></li> <li><a>Settings</a></li> <li><a>Logout</a></li></ul></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Navbar with icon, indicator and dropdown"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$navbar bg-base-100">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <div class="$$dropdown $$dropdown-end">
      <label tabindex="0" class="$$btn $$btn-ghost $$btn-circle">
        <div class="$$indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="$$badge $$badge-sm $$indicator-item">8</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 z-[1] $$card $$card-compact $$dropdown-content w-52 bg-base-100 shadow">
        <div class="$$card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="$$card-actions">
            <button class="$$btn $$btn-primary $$btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="$$dropdown $$dropdown-end">
      <label tabindex="0" class="$$btn $$btn-ghost $$btn-circle $$avatar">
        <div class="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabindex="0" class="$$menu $$menu-sm $$dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="$$badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="navbar bg-base-100 mb-40 shadow-xl rounded-box" data-svelte-h="svelte-kvembh"><div class="flex-1"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div> <div class="flex-none"><div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-ghost btn-circle"><div class="indicator"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <span class="badge badge-sm indicator-item">8</span></div></label> <div tabindex="0" class="mt-3 z-[1] card card-compact w-52 dropdown-content bg-base-100 shadow"><div class="card-body"><span class="font-bold text-lg">8 Items</span> <span class="text-info">Subtotal: $999</span> <div class="card-actions"><button class="btn btn-primary btn-block">View cart</button></div></div></div></div> <div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></label> <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"><li><a class="justify-between">Profile
            <span class="badge">New</span></a></li> <li><a>Settings</a></li> <li><a>Logout</a></li></ul></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Navbar with dropdown, center logo and icon"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$navbar bg-base-100">
  <div class="$$navbar-start">
    <div class="$$dropdown">
      <label tabindex="0" class="$$btn $$btn-ghost $$btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="$$menu $$menu-sm $$dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div class="$$navbar-center">
    <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="$$navbar-end">
    <button class="$$btn $$btn-ghost $$btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button class="$$btn $$btn-ghost $$btn-circle">
      <div class="$$indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="$$badge $$badge-xs $$badge-primary $$indicator-item"></span>
      </div>
    </button>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="navbar bg-base-100 mb-40 shadow-xl rounded-box" data-svelte-h="svelte-1gd62sn"><div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></label> <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"><li><a>Homepage</a></li> <li><a>Portfolio</a></li> <li><a>About</a></li></ul></div></div> <div class="navbar-center"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div> <div class="navbar-end"><button class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button> <button class="btn btn-ghost btn-circle"><div class="indicator"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg> <span class="badge badge-xs badge-primary indicator-item"></span></div></button></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "responsive (dropdown menu on small screen, center menu on large screen)",
          desc: "Resize screen to see changes"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$navbar bg-base-100">
  <div class="$$navbar-start">
    <div class="$$dropdown">
      <label tabindex="0" class="$$btn $$btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="$$menu $$menu-sm $$dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="$$navbar-center hidden lg:flex">
    <ul class="$$menu $$menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabindex="0">
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div class="$$navbar-end">
    <a class="$$btn">Button</a>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="navbar bg-base-100 mb-48 shadow-xl rounded-box" data-svelte-h="svelte-1cpb0k7"><div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label> <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Parent</a> <ul class="p-2 bg-base-100"><li><a>Submenu 1</a></li> <li><a>Submenu 2</a></li></ul></li> <li><a>Item 3</a></li></ul></div> <a class="btn btn-ghost normal-case text-xl">daisyUI</a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li><a>Item 1</a></li> <li><details><summary>Parent</summary> <ul class="p-2 bg-base-100"><li><a>Submenu 1</a></li> <li><a>Submenu 2</a></li></ul></details></li> <li><a>Item 3</a></li></ul></div> <div class="navbar-end"><a class="btn">Button</a></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Navbar with colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$navbar bg-neutral text-neutral-content">
  <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
</div>
<div class="$$navbar bg-base-300">
  <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
</div>
<div class="$$navbar bg-primary text-primary-content">
  <a class="$$btn $$btn-ghost normal-case text-xl">daisyUI</a>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="navbar bg-neutral text-neutral-content rounded-box" data-svelte-h="svelte-oeeowu"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div> <div class="navbar bg-base-300 rounded-box" data-svelte-h="svelte-1vq7bqj"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div> <div class="navbar bg-primary text-primary-content rounded-box" data-svelte-h="svelte-r3frb4"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
