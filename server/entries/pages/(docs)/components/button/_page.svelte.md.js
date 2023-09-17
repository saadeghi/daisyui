import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Button",
  "desc": "Buttons allow the user to take actions or make choices.",
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
              class: "btn",
              desc: "Button"
            },
            {
              type: "modifier",
              class: "btn-neutral",
              desc: "Button with `neutral` color"
            },
            {
              type: "modifier",
              class: "btn-primary",
              desc: "Button with `primary` color"
            },
            {
              type: "modifier",
              class: "btn-secondary",
              desc: "Button with `secondary` color"
            },
            {
              type: "modifier",
              class: "btn-accent",
              desc: "Button with `accent` color"
            },
            {
              type: "modifier",
              class: "btn-info",
              desc: "Button with `info` color"
            },
            {
              type: "modifier",
              class: "btn-success",
              desc: "Button with `success` color"
            },
            {
              type: "modifier",
              class: "btn-warning",
              desc: "Button with `warning` color"
            },
            {
              type: "modifier",
              class: "btn-error",
              desc: "Button with `error` color"
            },
            {
              type: "modifier",
              class: "btn-ghost",
              desc: "Button with ghost style"
            },
            {
              type: "modifier",
              class: "btn-link",
              desc: "Button styled as a link"
            },
            {
              type: "modifier",
              class: "btn-outline",
              desc: "Transparent Button with colored border"
            },
            {
              type: "modifier",
              class: "btn-active",
              desc: "Force button to show active state"
            },
            {
              type: "modifier",
              class: "btn-disabled",
              desc: "Force button to show disabled state"
            },
            {
              type: "modifier",
              class: "glass",
              desc: "Button with a glass effect"
            },
            {
              type: "modifier",
              class: "no-animation",
              desc: "Disables click animation"
            },
            {
              type: "responsive",
              class: "btn-lg",
              desc: "Large button"
            },
            {
              type: "responsive",
              class: "btn-md",
              desc: "Medium button (default)"
            },
            {
              type: "responsive",
              class: "btn-sm",
              desc: "Small button"
            },
            {
              type: "responsive",
              class: "btn-xs",
              desc: "Extra small button"
            },
            {
              type: "responsive",
              class: "btn-wide",
              desc: "Wide button (more horizontal padding)"
            },
            {
              type: "responsive",
              class: "btn-block",
              desc: "Full width button"
            },
            {
              type: "responsive",
              class: "btn-circle",
              desc: "Circle button with a 1:1 ratio"
            },
            {
              type: "responsive",
              class: "btn-square",
              desc: "Square button with a 1:1 ratio"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Button" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn">Button</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn" data-svelte-h="svelte-110q4ch">Button</button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Buttons with brand colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn">Button</button>
<button class="$$btn $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-primary">Primary</button>
<button class="$$btn $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-accent">Accent</button>
<button class="$$btn $$btn-ghost">Ghost</button>
<button class="$$btn $$btn-link">Link</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn" data-svelte-h="svelte-110q4ch">Button</button> <button class="btn btn-neutral" data-svelte-h="svelte-13pltym">Neutral</button> <button class="btn btn-primary" data-svelte-h="svelte-192kntw">Primary</button> <button class="btn btn-secondary" data-svelte-h="svelte-15ihm4o">Secondary</button> <button class="btn btn-accent" data-svelte-h="svelte-1n54a7o">Accent</button> <button class="btn btn-ghost" data-svelte-h="svelte-l5rmvu">Ghost</button> <button class="btn btn-link" data-svelte-h="svelte-5oxh0">Link</button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Active buttons" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn $$btn-active">Default</button>
<button class="$$btn $$btn-active $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-active $$btn-primary">Primary</button>
<button class="$$btn $$btn-active $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-active $$btn-accent">Accent</button>
<button class="$$btn $$btn-active $$btn-ghost">Ghost</button>
<button class="$$btn $$btn-active $$btn-link">Link</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn btn-active" data-svelte-h="svelte-cfxf0b">Default</button> <button class="btn btn-active btn-neutral" data-svelte-h="svelte-6oqsxn">Neutral</button> <button class="btn btn-active btn-primary" data-svelte-h="svelte-17rfot">Primary</button> <button class="btn btn-active btn-secondary" data-svelte-h="svelte-crwtzt">Secondary</button> <button class="btn btn-active btn-accent" data-svelte-h="svelte-184kcd">Accent</button> <button class="btn btn-active btn-ghost" data-svelte-h="svelte-1f7krgv">Ghost</button> <button class="btn btn-active btn-link" data-svelte-h="svelte-1htn8hp">Link</button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Buttons with state colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn $$btn-info">Info</button>
<button class="$$btn $$btn-success">Success</button>
<button class="$$btn $$btn-warning">Warning</button>
<button class="$$btn $$btn-error">Error</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn btn-info" data-svelte-h="svelte-1cjinn8">Info</button> <button class="btn btn-success" data-svelte-h="svelte-1u4fxc6">Success</button> <button class="btn btn-warning" data-svelte-h="svelte-127w2t0">Warning</button> <button class="btn btn-error" data-svelte-h="svelte-sqhs4s">Error</button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Outline buttons" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn $$btn-outline">Default</button>
<button class="$$btn $$btn-outline $$btn-primary">Primary</button>
<button class="$$btn $$btn-outline $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-outline $$btn-accent">Accent</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn btn-outline" data-svelte-h="svelte-zrdjwt">Default</button> <button class="btn btn-outline btn-primary" data-svelte-h="svelte-12zxtib">Primary</button> <button class="btn btn-outline btn-secondary" data-svelte-h="svelte-6fym1r">Secondary</button> <button class="btn btn-outline btn-accent" data-svelte-h="svelte-1dbke1f">Accent</button>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Outline buttons with state colors"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<button class="$$btn $$btn-outline $$btn-info">Info</button>
<button class="$$btn $$btn-outline $$btn-success">Success</button>
<button class="$$btn $$btn-outline $$btn-warning">Warning</button>
<button class="$$btn $$btn-outline $$btn-error">Error</button>`)}</pre>`;
          },
          default: () => {
            return `<button class="btn btn-outline btn-info" data-svelte-h="svelte-1v56bgz">Info</button> <button class="btn btn-outline btn-success" data-svelte-h="svelte-yxugxx">Success</button> <button class="btn btn-outline btn-warning" data-svelte-h="svelte-1izq2kz">Warning</button> <button class="btn btn-outline btn-error" data-svelte-h="svelte-69jc0b">Error</button>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Button sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn $$btn-lg">Large</button>
<button class="$$btn">Normal</button>
<button class="$$btn $$btn-sm">Small</button>
<button class="$$btn $$btn-xs">Tiny</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn btn-lg" data-svelte-h="svelte-vh764c">Large</button> <button class="btn" data-svelte-h="svelte-1u2p14m">Normal</button> <button class="btn btn-sm" data-svelte-h="svelte-1mdcvln">Small</button> <button class="btn btn-xs" data-svelte-h="svelte-18u6omt">Tiny</button>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Responsive button",
          desc: "This button will have different sizes on different browser viewpoints"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<button class="$$btn $$btn-xs sm:$$btn-sm md:$$btn-md lg:$$btn-lg">Responsive</button>`)}</pre>`;
          },
          default: () => {
            return `<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" data-svelte-h="svelte-11osyre">Responsive</button>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Wide button" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn $$btn-wide">Wide</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn btn-wide" data-svelte-h="svelte-1nce17c">Wide</button>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Glass button",
          bg: "/images/stock/photo-1507358522600-9f71e620c44e.jpg"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<button class="$$btn $$glass">Glass button</button>`)}</pre>`;
          },
          default: () => {
            return `<button class="btn glass" data-svelte-h="svelte-x56tfl">Glass button</button>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Buttons with different HTML tags",
          desc: "You can use `btn` class on <button>, <input>, <a>, etc..."
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<a role="button" class="$$btn">Link</a>
<button type="submit" class="$$btn">Button</button>
<input type="button" value="Input" class="$$btn" />
<input type="submit" value="Submit" class="$$btn" />
<input type="radio" aria-label="Radio" class="$$btn" />
<input type="checkbox" aria-label="Checkbox" class="$$btn" />
<input type="reset" value="Reset" class="$$btn" />`)}</pre>`;
          },
          default: () => {
            return `<a role="button" class="btn" data-svelte-h="svelte-oeyilu">Link</a> <button type="submit" class="btn" data-svelte-h="svelte-1dv9uo0">Button</button> <input type="button" value="Input" class="btn"> <input type="submit" value="Submit" class="btn"> <input type="radio" aria-label="Radio" class="btn"> <input type="checkbox" aria-label="Checkbox" class="btn"> <input type="reset" value="Reset" class="btn">`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled buttons" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn" disabled="disabled">Disabled using attribute</button>
<button class="$$btn $$btn-disabled" tabindex="-1" role="button" aria-disabled="true">Disabled using class name</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn" disabled="disabled" data-svelte-h="svelte-c0m4o">Disabled using attribute</button> <button class="btn btn-disabled" tabindex="-1" role="button" aria-disabled="true" data-svelte-h="svelte-96zn1x">Disabled using class name</button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Square button" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn $$btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button class="$$btn $$btn-square $$btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn btn-square" data-svelte-h="svelte-wb8jh9"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> <button class="btn btn-square btn-outline" data-svelte-h="svelte-fg6shk"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Circle button" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn $$btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button class="$$btn $$btn-circle $$btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn btn-circle" data-svelte-h="svelte-1tw3kx4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> <button class="btn btn-circle btn-outline" data-svelte-h="svelte-stnond"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Icon at start" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Button
</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn" data-svelte-h="svelte-uts300"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
  Button</button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Icon at end" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn" data-svelte-h="svelte-14d01u2">Button
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Button block" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn $$btn-block">block</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn btn-block" data-svelte-h="svelte-puk1am">block</button>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Button with loading spinner" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn $$btn-square">
  <span class="$$loading $$loading-spinner"></span>
</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn btn-square" data-svelte-h="svelte-8awl0b"><span class="loading loading-spinner"></span></button>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Button with loading spinner and text"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<button class="$$btn">
  <span class="$$loading $$loading-spinner"></span>
  loading
</button>`)}</pre>`;
          },
          default: () => {
            return `<button class="btn" data-svelte-h="svelte-6v5dw9"><span class="loading loading-spinner"></span>
  loading</button>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Button without click animation" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<button class="$$btn no-animation">I don't have click animation</button>`)}</pre>`;
        },
        default: () => {
          return `<button class="btn no-animation" data-svelte-h="svelte-15kxicg">I don&#39;t have click animation</button>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
