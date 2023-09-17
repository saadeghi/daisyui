import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Toast",
  "desc": "Toast is a wrapper to stack elements, positioned on the corner of page.",
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
              class: "toast",
              desc: "Container element that sticks to the corner of page"
            },
            {
              type: "responsive",
              class: "toast-start",
              desc: "align horizontally to the left"
            },
            {
              type: "responsive",
              class: "toast-center",
              desc: "align horizontally to the center"
            },
            {
              type: "responsive",
              class: "toast-end",
              desc: "align horizontally to the right (default)"
            },
            {
              type: "responsive",
              class: "toast-top",
              desc: "align vertically to top"
            },
            {
              type: "responsive",
              class: "toast-middle",
              desc: "align vertically to middle"
            },
            {
              type: "responsive",
              class: "toast-bottom",
              desc: "align vertically to bottom (default)"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "toast with alert inside" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$toast">
  <div class="$$alert $$alert-info">
    <span>New message arrived.</span>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full h-64 relative" data-svelte-h="svelte-12i5xvd"><div class="toast absolute"><div class="alert alert-info"><span>New message arrived.</span></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "toast-top toast-start" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$toast $$toast-top $$toast-start">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full h-64 relative" data-svelte-h="svelte-zvrjw3"><div class="toast toast-top toast-start absolute"><div class="alert alert-info"><span>New mail arrived.</span></div> <div class="alert alert-success"><span>Message sent successfully.</span></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "toast-top toast-center" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$toast $$toast-top $$toast-center">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full h-64 relative" data-svelte-h="svelte-1o83xry"><div class="toast toast-top toast-center absolute"><div class="alert alert-info"><span>New mail arrived.</span></div> <div class="alert alert-success"><span>Message sent successfully.</span></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "toast-top toast-end" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$toast $$toast-top $$toast-end">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full h-64 relative" data-svelte-h="svelte-argbfi"><div class="toast toast-top toast-end absolute"><div class="alert alert-info"><span>New mail arrived.</span></div> <div class="alert alert-success"><span>Message sent successfully.</span></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "toast-start toast-middle" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$toast $$toast-start $$toast-middle">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full h-64 relative" data-svelte-h="svelte-rpwaqh"><div class="toast toast-start toast-middle absolute"><div class="alert alert-info"><span>New mail arrived.</span></div> <div class="alert alert-success"><span>Message sent successfully.</span></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "toast-center toast-middle" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$toast $$toast-center $$toast-middle">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full h-64 relative" data-svelte-h="svelte-17me5yy"><div class="toast toast-center toast-middle absolute"><div class="alert alert-info"><span>New mail arrived.</span></div> <div class="alert alert-success"><span>Message sent successfully.</span></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "toast-end toast-middle" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$toast $$toast-end $$toast-middle">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full h-64 relative" data-svelte-h="svelte-mq064s"><div class="toast toast-end toast-middle absolute"><div class="alert alert-info"><span>New mail arrived.</span></div> <div class="alert alert-success"><span>Message sent successfully.</span></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "toast-start toast-bottom (default)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$toast $$toast-start">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="w-full h-64 relative" data-svelte-h="svelte-17fdvv2"><div class="toast toast-start absolute"><div class="alert alert-info"><span>New mail arrived.</span></div> <div class="alert alert-success"><span>Message sent successfully.</span></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "toast-center toast-bottom (default)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$toast $$toast-center">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="w-full h-64 relative" data-svelte-h="svelte-1k884gv"><div class="toast toast-center absolute"><div class="alert alert-info"><span>New mail arrived.</span></div> <div class="alert alert-success"><span>Message sent successfully.</span></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "toast-end (default) toast-bottom (default)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$toast $$toast-end">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="w-full h-64 relative" data-svelte-h="svelte-165ayf3"><div class="toast toast-end absolute"><div class="alert alert-info"><span>New mail arrived.</span></div> <div class="alert alert-success"><span>Message sent successfully.</span></div></div></div>`;
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
