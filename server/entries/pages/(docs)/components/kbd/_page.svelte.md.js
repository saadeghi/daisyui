import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Kbd",
  "desc": "Kbd is used to display keyboard shortcuts.",
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
              class: "kbd",
              desc: "Do show a keyboard key or a shortcut key"
            },
            {
              type: "responsive",
              class: "kbd-lg",
              desc: "Large size"
            },
            {
              type: "responsive",
              class: "kbd-md",
              desc: "Medium size (default)"
            },
            {
              type: "responsive",
              class: "kbd-sm",
              desc: "Small size"
            },
            {
              type: "responsive",
              class: "kbd-xs",
              desc: "Extra small size"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Kbd" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<kbd class="$$kbd">A</kbd>`)}</pre>`;
        },
        default: () => {
          return `<kbd class="kbd" data-svelte-h="svelte-1qc0gcp">A</kbd>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Kbd sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<kbd class="$$kbd $$kbd-lg">Shift</kbd>
<kbd class="$$kbd $$kbd-md">Shift</kbd>
<kbd class="$$kbd $$kbd-sm">Shift</kbd>
<kbd class="$$kbd $$kbd-xs">Shift</kbd>`)}</pre>`;
        },
        default: () => {
          return `<kbd class="kbd kbd-lg" data-svelte-h="svelte-1eeurlr">Shift</kbd> <kbd class="kbd kbd-md" data-svelte-h="svelte-1btm7h7">Shift</kbd> <kbd class="kbd kbd-sm" data-svelte-h="svelte-tzadd6">Shift</kbd> <kbd class="kbd kbd-xs" data-svelte-h="svelte-em9kp3">Shift</kbd>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "In text" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`Press <kbd class="$$kbd $$kbd-sm">F</kbd> to pay respects.`)}</pre>`;
        },
        default: () => {
          return `Press <kbd class="kbd kbd-sm" data-svelte-h="svelte-14r0elo">F</kbd> to pay respects.`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Key combination" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<kbd class="$$kbd">ctrl</kbd>
+
<kbd class="$$kbd">shift</kbd>
+
<kbd class="$$kbd">del</kbd>`)}</pre>`;
        },
        default: () => {
          return `<kbd class="kbd" data-svelte-h="svelte-13l8fp7">ctrl</kbd>
+
<kbd class="kbd" data-svelte-h="svelte-1xkad3i">shift</kbd>
+
<kbd class="kbd" data-svelte-h="svelte-1qyr9v7">del</kbd>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Function Keys" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<kbd class="$$kbd">⌘</kbd>
<kbd class="$$kbd">⌥</kbd>
<kbd class="$$kbd">⇧</kbd>
<kbd class="$$kbd">⌃</kbd>`)}</pre>`;
        },
        default: () => {
          return `<kbd class="kbd" data-svelte-h="svelte-6wizja">⌘</kbd> <kbd class="kbd" data-svelte-h="svelte-1xh882t">⌥</kbd> <kbd class="kbd" data-svelte-h="svelte-hcs563">⇧</kbd> <kbd class="kbd" data-svelte-h="svelte-cv698v">⌃</kbd>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "A full keyboard" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="flex justify-center gap-1 my-1 w-full">
  <kbd class="$$kbd">q</kbd>
  <kbd class="$$kbd">w</kbd>
  <kbd class="$$kbd">e</kbd>
  <kbd class="$$kbd">r</kbd>
  <kbd class="$$kbd">t</kbd>
  <kbd class="$$kbd">y</kbd>
  <kbd class="$$kbd">u</kbd>
  <kbd class="$$kbd">i</kbd>
  <kbd class="$$kbd">o</kbd>
  <kbd class="$$kbd">p</kbd>
</div> 
<div class="flex justify-center gap-1 my-1 w-full">
  <kbd class="$$kbd">a</kbd>
  <kbd class="$$kbd">s</kbd>
  <kbd class="$$kbd">d</kbd>
  <kbd class="$$kbd">f</kbd>
  <kbd class="$$kbd">g</kbd>
  <kbd class="$$kbd">h</kbd>
  <kbd class="$$kbd">j</kbd>
  <kbd class="$$kbd">k</kbd>
  <kbd class="$$kbd">l</kbd>
</div> 
<div class="flex justify-center gap-1 my-1 w-full">
  <kbd class="$$kbd">z</kbd>
  <kbd class="$$kbd">x</kbd>
  <kbd class="$$kbd">c</kbd>
  <kbd class="$$kbd">v</kbd>
  <kbd class="$$kbd">b</kbd>
  <kbd class="$$kbd">n</kbd>
  <kbd class="$$kbd">m</kbd>
  <kbd class="$$kbd">/</kbd>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="overflow-x-auto" data-svelte-h="svelte-1eudf6l"><div class="flex justify-center gap-1 w-full"><kbd class="kbd">q</kbd> <kbd class="kbd">w</kbd> <kbd class="kbd">e</kbd> <kbd class="kbd">r</kbd> <kbd class="kbd">t</kbd> <kbd class="kbd">y</kbd> <kbd class="kbd">u</kbd> <kbd class="kbd">i</kbd> <kbd class="kbd">o</kbd> <kbd class="kbd">p</kbd></div> <div class="flex justify-center gap-1 w-full"><kbd class="kbd">a</kbd> <kbd class="kbd">s</kbd> <kbd class="kbd">d</kbd> <kbd class="kbd">f</kbd> <kbd class="kbd">g</kbd> <kbd class="kbd">h</kbd> <kbd class="kbd">j</kbd> <kbd class="kbd">k</kbd> <kbd class="kbd">l</kbd></div> <div class="flex justify-center gap-1 w-full"><kbd class="kbd">z</kbd> <kbd class="kbd">x</kbd> <kbd class="kbd">c</kbd> <kbd class="kbd">v</kbd> <kbd class="kbd">b</kbd> <kbd class="kbd">n</kbd> <kbd class="kbd">m</kbd> <kbd class="kbd">/</kbd></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Arrow Keys" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="flex justify-center w-full">
  <kbd class="$$kbd">▲</kbd>
</div>
<div class="flex justify-center gap-12 w-full">
  <kbd class="$$kbd">◀︎</kbd>
  <kbd class="$$kbd">▶︎</kbd>
</div>
<div class="flex justify-center w-full">
  <kbd class="$$kbd">▼</kbd>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex justify-center w-full" data-svelte-h="svelte-111n7lw"><kbd class="kbd">▲</kbd></div> <div class="flex justify-center gap-12 w-full" data-svelte-h="svelte-a7mbml"><kbd class="kbd">◀︎</kbd> <kbd class="kbd">▶︎</kbd></div> <div class="flex justify-center w-full" data-svelte-h="svelte-tbm8d2"><kbd class="kbd">▼</kbd></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
