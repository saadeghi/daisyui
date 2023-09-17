import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Countdown",
  "desc": "Countdown gives you a transition effect of changing numbers.",
  "published": true,
  "layout": "components"
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefix;
  $$unsubscribe_prefix = subscribe(prefix, (value) => value);
  let counter = 59;
  $$unsubscribe_prefix();
  return `${validate_component(Mdsvex_components, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You need to change to `--value` CSS variable using JS. Value must be a number between 0 and 99."
        },
        {},
        {}
      )} ${validate_component(ClassTable, "ClassTable").$$render(
        $$result,
        {
          data: [
            {
              type: "component",
              class: "countdown",
              desc: "Container element"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Countdown" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<span class="$$countdown">
  <span style={{"--value":${counter}}}></span>
</span>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$countdown">
  <span style="--value:${counter};"></span>
</span>`)}</pre>`;
        },
        default: () => {
          return `<span class="countdown"><span style="${"--value:" + escape(counter, true) + ";"}"></span></span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Large text" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<span class="$$countdown font-mono text-6xl">
  <span style={{"--value":${counter}}}></span>
</span>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$countdown font-mono text-6xl">
  <span style="--value:${counter};"></span>
</span>`)}</pre>`;
        },
        default: () => {
          return `<span class="countdown font-mono text-6xl"><span style="${"--value:" + escape(counter, true) + ";"}"></span></span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Clock countdown" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<span class="$$countdown font-mono text-2xl">
  <span style={{"--value":10}}></span>h
  <span style={{"--value":24}}></span>m
  <span style={{"--value":${counter}}}></span>s
</span>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$countdown font-mono text-2xl">
  <span style="--value:10;"></span>h
  <span style="--value:24;"></span>m
  <span style="--value:${counter};"></span>s
</span>`)}</pre>`;
        },
        default: () => {
          return `<span class="font-mono text-2xl countdown"><span style="--value:10;"></span>h
  <span style="--value:24;"></span>m
  <span style="${"--value:" + escape(counter, true) + ";"}"></span>s</span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Clock countdown with colons" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<span class="$$countdown font-mono text-2xl">
  <span style={{"--value":10}}></span>:
  <span style={{"--value":24}}></span>:
  <span style={{"--value":${counter}}}></span>
</span>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<span class="$$countdown font-mono text-2xl">
  <span style="--value:10;"></span>:
  <span style="--value:24;"></span>:
  <span style="--value:${counter};"></span>
</span>`)}</pre>`;
        },
        default: () => {
          return `<span class="font-mono text-2xl countdown"><span style="--value:10;"></span>:
  <span style="--value:24;"></span>:
  <span style="${"--value:" + escape(counter, true) + ";"}"></span></span>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Large text with labels" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<div class="flex gap-5">
  <div>
    <span class="$$countdown font-mono text-4xl">
        <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
        <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style={{"--value":${counter}}}></span>
    </span>
    sec
  </div>
</div>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<div class="flex gap-5">
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--value:${counter};"></span>
    </span>
    sec
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex gap-5"><div data-svelte-h="svelte-39z0qs"><span class="font-mono text-4xl countdown"><span style="--value:15;"></span></span>
    days</div> <div data-svelte-h="svelte-1kqekch"><span class="font-mono text-4xl countdown"><span style="--value:10;"></span></span>
    hours</div> <div data-svelte-h="svelte-9dqram"><span class="font-mono text-4xl countdown"><span style="--value:24;"></span></span>
    minutes</div> <div><span class="font-mono text-4xl countdown"><span style="${"--value:" + escape(counter, true) + ";"}"></span></span>
    sec</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Large text with labels under" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":${counter}}}></span>
    </span>
    sec
  </div>
</div>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:${counter};"></span>
    </span>
    sec
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="grid grid-flow-col gap-5 text-center auto-cols-max"><div class="flex flex-col" data-svelte-h="svelte-5id86f"><span class="font-mono text-5xl countdown"><span style="--value:15;"></span></span>
    days</div> <div class="flex flex-col" data-svelte-h="svelte-1b4i9kq"><span class="font-mono text-5xl countdown"><span style="--value:10;"></span></span>
    hours</div> <div class="flex flex-col" data-svelte-h="svelte-1mxgzm2"><span class="font-mono text-5xl countdown"><span style="--value:24;"></span></span>
    min</div> <div class="flex flex-col"><span class="font-mono text-5xl countdown"><span style="${"--value:" + escape(counter, true) + ";"}"></span></span>
    sec</div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "In boxes" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":${counter}}}></span>
    </span>
    sec
  </div>
</div>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:${counter};"></span>
    </span>
    sec
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="grid grid-flow-col gap-5 text-center auto-cols-max"><div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content" data-svelte-h="svelte-q6ngjl"><span class="font-mono text-5xl countdown"><span style="--value:15;"></span></span>
    days</div> <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content" data-svelte-h="svelte-5ib19g"><span class="font-mono text-5xl countdown"><span style="--value:10;"></span></span>
    hours</div> <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content" data-svelte-h="svelte-1h6z4l0"><span class="font-mono text-5xl countdown"><span style="--value:24;"></span></span>
    min</div> <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="font-mono text-5xl countdown"><span style="${"--value:" + escape(counter, true) + ";"}"></span></span>
    sec</div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
