import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Steps",
  "desc": "Steps can be used to show a list of steps in a process.",
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
              class: "steps",
              desc: "Container of step items"
            },
            {
              type: "component",
              class: "step",
              desc: "A step item"
            },
            {
              type: "modifier",
              class: "step-primary",
              desc: "Adds `primary` color to step"
            },
            {
              type: "modifier",
              class: "step-secondary",
              desc: "Adds `secondary` color to step"
            },
            {
              type: "modifier",
              class: "step-accent",
              desc: "Adds `accent` color to step"
            },
            {
              type: "modifier",
              class: "step-info",
              desc: "Adds `info` color to step"
            },
            {
              type: "modifier",
              class: "step-success",
              desc: "Adds `success` color to step"
            },
            {
              type: "modifier",
              class: "step-warning",
              desc: "Adds `warning` color to step"
            },
            {
              type: "modifier",
              class: "step-error",
              desc: "Adds `error` color to step"
            },
            {
              type: "responsive",
              class: "steps-vertical",
              desc: "makes `steps` vertical"
            },
            {
              type: "responsive",
              class: "steps-horizontal",
              desc: "makes `steps` horizontal"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Horizontal" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$steps">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="steps" data-svelte-h="svelte-m9w580"><li class="step step-primary">Register</li> <li class="step step-primary">Choose plan</li> <li class="step">Purchase</li> <li class="step">Receive Product</li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Vertical" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$steps $$steps-vertical">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="steps steps-vertical" data-svelte-h="svelte-1ydqiqq"><li class="step step-primary">Register</li> <li class="step step-primary">Choose plan</li> <li class="step">Purchase</li> <li class="step">Receive Product</li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "responsive (vertical on small screen, horizontal on large screen)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$steps $$steps-vertical lg:$$steps-horizontal">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="steps steps-vertical lg:steps-horizontal" data-svelte-h="svelte-oj62z3"><li class="step step-primary">Register</li> <li class="step step-primary">Choose plan</li> <li class="step">Purchase</li> <li class="step">Receive Product</li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "With data-content" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$steps">
  <li data-content="?" class="$$step $$step-neutral">Step 1</li>
  <li data-content="!" class="$$step $$step-neutral">Step 2</li>
  <li data-content="✓" class="$$step $$step-neutral">Step 3</li>
  <li data-content="✕" class="$$step $$step-neutral">Step 4</li>
  <li data-content="★" class="$$step $$step-neutral">Step 5</li>
  <li data-content="" class="$$step $$step-neutral">Step 6</li>
  <li data-content="●" class="$$step $$step-neutral">Step 7</li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="steps" data-svelte-h="svelte-10fwj4f"><li data-content="?" class="step step-neutral">Step 1</li> <li data-content="!" class="step step-neutral">Step 2</li> <li data-content="✓" class="step step-neutral">Step 3</li> <li data-content="✕" class="step step-neutral">Step 4</li> <li data-content="★" class="step step-neutral">Step 5</li> <li data-content="" class="step step-neutral">Step 6</li> <li data-content="●" class="step step-neutral">Step 7</li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Custom colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$steps">
  <li class="$$step $$step-info">Fly to moon</li>
  <li class="$$step $$step-info">Shrink the moon</li>
  <li class="$$step $$step-info">Grab the moon</li>
  <li class="$$step $$step-error" data-content="?">Sit on toilet</li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="steps" data-svelte-h="svelte-12gfkng"><li class="step step-info">Fly to moon</li> <li class="step step-info">Shrink the moon</li> <li class="step step-info">Grab the moon</li> <li data-content="?" class="step step-error">Sit on toilet</li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With scrollable wrapper" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="overflow-x-auto">
  <ul class="$$steps">
    <li class="$$step">start</li>
    <li class="$$step $$step-secondary">2</li>
    <li class="$$step $$step-secondary">3</li>
    <li class="$$step $$step-secondary">4</li>
    <li class="$$step">5</li>
    <li class="$$step $$step-accent">6</li>
    <li class="$$step $$step-accent">7</li>
    <li class="$$step">8</li>
    <li class="$$step $$step-error">9</li>
    <li class="$$step $$step-error">10</li>
    <li class="$$step">11</li>
    <li class="$$step">12</li>
    <li class="$$step $$step-warning">13</li>
    <li class="$$step $$step-warning">14</li>
    <li class="$$step">15</li>
    <li class="$$step $$step-neutral">16</li>
    <li class="$$step $$step-neutral">17</li>
    <li class="$$step $$step-neutral">18</li>
    <li class="$$step $$step-neutral">19</li>
    <li class="$$step $$step-neutral">20</li>
    <li class="$$step $$step-neutral">21</li>
    <li class="$$step $$step-neutral">22</li>
    <li class="$$step $$step-neutral">23</li>
    <li class="$$step $$step-neutral">end</li>
  </ul>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="overflow-x-auto" data-svelte-h="svelte-z15paa"><ul class="steps"><li class="step">start</li> <li class="step step-secondary">2</li> <li class="step step-secondary">3</li> <li class="step step-secondary">4</li> <li class="step">5</li> <li class="step step-accent">6</li> <li class="step step-accent">7</li> <li class="step">8</li> <li class="step step-error">9</li> <li class="step step-error">10</li> <li class="step">11</li> <li class="step">12</li> <li class="step step-warning">13</li> <li class="step step-warning">14</li> <li class="step">15</li> <li class="step step-neutral">16</li> <li class="step step-neutral">17</li> <li class="step step-neutral">18</li> <li class="step step-neutral">19</li> <li class="step step-neutral">20</li> <li class="step step-neutral">21</li> <li class="step step-neutral">22</li> <li class="step step-neutral">23</li> <li class="step step-neutral">end</li></ul></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
