import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Tabs",
  "desc": "Tabs can be used to show a list of links in a tabbed format.",
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
              class: "tabs",
              desc: "Container of tab items"
            },
            {
              type: "modifier",
              class: "tabs-boxed",
              desc: "Adds a box style to tabs container"
            },
            {
              type: "component",
              class: "tab",
              desc: "A tab item"
            },
            {
              type: "modifier",
              class: "tab-active",
              desc: "For the active tab"
            },
            {
              type: "modifier",
              class: "tab-disabled",
              desc: "For a visually disabled tab"
            },
            {
              type: "modifier",
              class: "tab-bordered",
              desc: "Adds bottom border to tab item"
            },
            {
              type: "modifier",
              class: "tab-lifted",
              desc: "Adds lifted style to tab item"
            },
            {
              type: "responsive",
              class: "tab-xs",
              desc: "Shows tab in extra small size"
            },
            {
              type: "responsive",
              class: "tab-sm",
              desc: "Shows tab in small size"
            },
            {
              type: "responsive",
              class: "tab-md",
              desc: "Shows tab in medium (default) size"
            },
            {
              type: "responsive",
              class: "tab-lg",
              desc: "Shows tab in large size"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Tabs" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tabs">
  <a class="$$tab">Tab 1</a> 
  <a class="$$tab $$tab-active">Tab 2</a> 
  <a class="$$tab">Tab 3</a>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="tabs" data-svelte-h="svelte-131vbid"><a class="tab">Tab 1</a> <a class="tab tab-active">Tab 2</a> <a class="tab">Tab 3</a></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Bordered" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tabs">
  <a class="$$tab $$tab-bordered">Tab 1</a> 
  <a class="$$tab $$tab-bordered $$tab-active">Tab 2</a> 
  <a class="$$tab $$tab-bordered">Tab 3</a>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="tabs" data-svelte-h="svelte-vi3166"><a class="tab tab-bordered">Tab 1</a> <a class="tab tab-bordered tab-active">Tab 2</a> <a class="tab tab-bordered">Tab 3</a></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Lifted" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tabs">
  <a class="$$tab $$tab-lifted">Tab 1</a> 
  <a class="$$tab $$tab-lifted $$tab-active">Tab 2</a> 
  <a class="$$tab $$tab-lifted">Tab 3</a>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="tabs" data-svelte-h="svelte-1f8cumn"><a class="tab tab-lifted">Tab 1</a> <a class="tab tab-lifted tab-active">Tab 2</a> <a class="tab tab-lifted">Tab 3</a></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Boxed" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$tabs tabs-boxed">
  <a class="$$tab">Tab 1</a> 
  <a class="$$tab $$tab-active">Tab 2</a> 
  <a class="$$tab">Tab 3</a>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="tabs tabs-boxed" data-svelte-h="svelte-swmqsw"><a class="tab">Tab 1</a> <a class="tab tab-active">Tab 2</a> <a class="tab">Tab 3</a></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<!-- xs -->
<div class="$$tabs">
  <a class="$$tab $$tab-xs $$tab-lifted">Tiny</a> 
  <a class="$$tab $$tab-xs $$tab-lifted $$tab-active">Tiny</a> 
  <a class="$$tab $$tab-xs $$tab-lifted">Tiny</a>
</div>
<!-- sm -->
<div class="$$tabs">
  <a class="$$tab $$tab-sm $$tab-lifted">Small</a> 
  <a class="$$tab $$tab-sm $$tab-lifted $$tab-active">Small</a> 
  <a class="$$tab $$tab-sm $$tab-lifted">Small</a>
</div>
<!-- md -->
<div class="$$tabs">
  <a class="$$tab $$tab-lifted">Normal</a> 
  <a class="$$tab $$tab-lifted $$tab-active">Normal</a> 
  <a class="$$tab $$tab-lifted">Normal</a>
</div>
<!-- lg -->
<div class="$$tabs">
  <a class="$$tab $$tab-lg $$tab-lifted">Large</a> 
  <a class="$$tab $$tab-lg $$tab-lifted $$tab-active">Large</a> 
  <a class="$$tab $$tab-lg $$tab-lifted">Large</a>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col items-center gap-6" data-svelte-h="svelte-172a2ai"><div class="tabs"><a class="tab tab-xs tab-lifted">Tiny</a> <a class="tab tab-xs tab-lifted tab-active">Tiny</a> <a class="tab tab-xs tab-lifted">Tiny</a></div> <div class="tabs"><a class="tab tab-sm tab-lifted">Small</a> <a class="tab tab-sm tab-lifted tab-active">Small</a> <a class="tab tab-sm tab-lifted">Small</a></div> <div class="tabs"><a class="tab tab-lifted">Normal</a> <a class="tab tab-lifted tab-active">Normal</a> <a class="tab tab-lifted">Normal</a></div> <div class="tabs"><a class="tab tab-lg tab-lifted">Large</a> <a class="tab tab-lg tab-lifted tab-active">Large</a> <a class="tab tab-lg tab-lifted">Large</a></div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
