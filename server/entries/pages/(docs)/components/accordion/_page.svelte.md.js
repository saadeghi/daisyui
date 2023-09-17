import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Accordion",
  "desc": "Accordion is used for showing and hiding content but only one item can stay open at a time.",
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
              class: "collapse",
              desc: "Container element"
            },
            {
              type: "component",
              class: "collapse-title",
              desc: "Title element"
            },
            {
              type: "component",
              class: "collapse-content",
              desc: "Container for content"
            },
            {
              type: "modifier",
              class: "collapse-arrow",
              desc: "Adds arrow icon"
            },
            {
              type: "modifier",
              class: "collapse-plus",
              desc: "Adds plus/minus icon"
            },
            {
              type: "modifier",
              class: "collapse-open",
              desc: "Force open"
            },
            {
              type: "modifier",
              class: "collapse-close",
              desc: "Force close"
            }
          ]
        },
        {},
        {}
      )} <div class="alert text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Accordion uses the same style as the <a href='/components/collapse/' class='link'>collapse component</a> but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input."
        },
        {},
        {}
      )}</div></div> <div class="alert text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set."
        },
        {},
        {}
      )}</div></div> ${validate_component(Component, "Component").$$render($$result, { title: "Accordion using radio inputs" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="collapse bg-base-200" data-svelte-h="svelte-clm1hr"><input type="radio" name="my-accordion-1" checked="checked"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse bg-base-200" data-svelte-h="svelte-h9xsaw"><input type="radio" name="my-accordion-1"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse bg-base-200" data-svelte-h="svelte-h9xsaw"><input type="radio" name="my-accordion-1"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accordion with arrow icon" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="collapse collapse-arrow bg-base-200" data-svelte-h="svelte-497nvj"><input type="radio" name="my-accordion-2" checked="checked"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow bg-base-200" data-svelte-h="svelte-mpai6"><input type="radio" name="my-accordion-2"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow bg-base-200" data-svelte-h="svelte-mpai6"><input type="radio" name="my-accordion-2"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accordion with plus/minus icon" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="collapse collapse-plus bg-base-200" data-svelte-h="svelte-1n8yy1f"><input type="radio" name="my-accordion-3" checked="checked"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-plus bg-base-200" data-svelte-h="svelte-7maod4"><input type="radio" name="my-accordion-3"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-plus bg-base-200" data-svelte-h="svelte-7maod4"><input type="radio" name="my-accordion-3"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Using Accordion and Join together",
          desc: "to join the items together and handle border radius automatically"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$join $$join-vertical w-full">
  <div class="$$collapse $$collapse-arrow $$join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div class="$$collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="$$collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div class="$$collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="$$collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div class="$$collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="$$collapse-content"> 
      <p>hello</p>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="join join-vertical w-full" data-svelte-h="svelte-mwrxrm"><div class="collapse collapse-arrow join-item border border-base-300"><input type="radio" name="my-accordion-4" checked="checked"> <div class="collapse-title">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow join-item border border-base-300"><input type="radio" name="my-accordion-4"> <div class="collapse-title">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow join-item border border-base-300"><input type="radio" name="my-accordion-4"> <div class="collapse-title">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div></div>`;
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
