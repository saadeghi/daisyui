import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Radial progress",
  "desc": "Radial progress can be used to show the progress of a task or to show the passing of time.",
  "published": true,
  "layout": "components"
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefix;
  $$unsubscribe_prefix = subscribe(prefix, (value) => value);
  $$unsubscribe_prefix();
  return `${validate_component(Mdsvex_components, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Radial progress needs `--value` CSS variable to work.<br />To change the size, use `--size` CSS variable which has a default value of `4rem`.<br />To change the thickness, use `--thickness` CSS variable which is 10% of the size by default.<br />"
        },
        {},
        {}
      )} <div class="alert alert-info text-sm" data-svelte-h="svelte-4097td"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  For radial progress we use &lt;div&gt; instead of &lt;progress&gt; tag because Browsers are unable to show the text inside &lt;progress&gt; tag and Firefox doesn&#39;t show the pseudo elements inside &lt;progress&gt; bar at all.</div> ${validate_component(ClassTable, "ClassTable").$$render(
        $$result,
        {
          data: [
            {
              type: "component",
              class: "radial-progress",
              desc: "Shows a radial progress"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Radial progress" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<div className="$$radial-progress" style={{"--value":70}}>70%</div>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$radial-progress" style="--value:70;">70%</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="radial-progress" style="--value:70;" data-svelte-h="svelte-17fk3p">70%</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Different values" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<div className="$$radial-progress" style={{"--value":0}}>0%</div>
<div className="$$radial-progress" style={{"--value":20}}>20%</div>
<div className="$$radial-progress" style={{"--value":60}}>60%</div>
<div className="$$radial-progress" style={{"--value":80}}>80%</div>
<div className="$$radial-progress" style={{"--value":100}}>100%</div>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$radial-progress" style="--value:0;">0%</div>
<div class="$$radial-progress" style="--value:20;">20%</div>
<div class="$$radial-progress" style="--value:60;">60%</div>
<div class="$$radial-progress" style="--value:80;">80%</div>
<div class="$$radial-progress" style="--value:100;">100%</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="radial-progress" style="--value:0;" data-svelte-h="svelte-twe061">0%</div> <div class="radial-progress" style="--value:20;" data-svelte-h="svelte-lo6icv">20%</div> <div class="radial-progress" style="--value:60;" data-svelte-h="svelte-15qo9hz">60%</div> <div class="radial-progress" style="--value:80;" data-svelte-h="svelte-1a4tpvv">80%</div> <div class="radial-progress" style="--value:100;" data-svelte-h="svelte-1v5n991">100%</div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Custom color" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<div className="$$radial-progress text-primary" style={{"--value":70}}>70%</div>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$radial-progress text-primary" style="--value:70;">70%</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="radial-progress text-primary" style="--value:70;" data-svelte-h="svelte-tbl5k9">70%</div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "With background color and border"
        },
        {},
        {
          jsx: () => {
            return `<pre slot="jsx">${escape(`<div className="$$radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>`)}</pre>`;
          },
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:70;">70%</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:70;" data-svelte-h="svelte-ooi2ox">70%</div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Custom size and custom thickness"
        },
        {},
        {
          jsx: () => {
            return `<pre slot="jsx">${escape(`<div className="$$radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>70%</div>
<div className="$$radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div>`)}</pre>`;
          },
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$radial-progress" style="--value:70; --size:12rem; --thickness: 2px;">70%</div>
<div class="$$radial-progress" style="--value:70; --size:12rem; --thickness: 2rem;">70%</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2px;" data-svelte-h="svelte-dh3oc5">70%</div> <div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2rem;" data-svelte-h="svelte-wt6s3x">70%</div>`;
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
