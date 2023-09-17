import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { S as SEO } from "../../../../chunks/SEO.js";
import { T as Translate } from "../../../../chunks/Translate.js";
import { extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
import lchPlugin from "colord/plugins/lch";
import hwbPlugin from "colord/plugins/hwb";
import labPlugin from "colord/plugins/lab";
import xyzPlugin from "colord/plugins/xyz";
import "randomcolor";
const ColorPicker_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  extend([mixPlugin, namesPlugin, lchPlugin, hwbPlugin, labPlugin, xyzPlugin]);
  let wrapper;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SEO, "SEO").$$render(
      $$result,
      {
        title: "daisyUI Theme Generator",
        desc: "Tailwind CSS Theme Generator - Tailwind CSS daisyUI custom theme and custom colors",
        img: `/images/theme-generator.jpg`
      },
      {},
      {}
    )} <div class="prose mb-10 pt-10"><h1>${validate_component(Translate, "Translate").$$render($$result, { text: "daisyUI Theme Generator" }, {}, {})}</h1> <p>${validate_component(Translate, "Translate").$$render(
      $$result,
      {
        text: "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them."
      },
      {},
      {}
    )}</p> <div class="alert alert-info not-prose mb-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content h-6 w-6 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div><p>${validate_component(Translate, "Translate").$$render(
      $$result,
      {
        text: "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)"
      },
      {},
      {}
    )}</p> <p>${validate_component(Translate, "Translate").$$render(
      $$result,
      {
        text: "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use."
      },
      {},
      {}
    )}</p></div></div> <div class="alert alert-info not-prose text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content h-6 w-6 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div><p>${validate_component(Translate, "Translate").$$render(
      $$result,
      {
        text: "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)"
      },
      {},
      {}
    )}</p></div></div></div> <div class="flex flex-col gap-4 xl:flex-row"><div class="flex-shrink-0 xl:min-w-[29rem]"><div class="sticky top-[5.5rem]"><h2 class="px-2 pb-4 text-xl font-bold" data-svelte-h="svelte-1w26obz">tailwind.config.js</h2> ${``}</div></div> <div><h2 class="px-2 pb-4 text-xl font-bold">${validate_component(Translate, "Translate").$$render($$result, { text: "Preview" }, {}, {})}</h2> <div data-theme="light" class="bg-transparent"><div class="rounded-box bg-base-100 border-base-content/5 text-base-content not-prose grid gap-3 border p-6" data-theme="mytheme"${add_attribute("this", wrapper, 0)} data-svelte-h="svelte-1stblde"> <div class="grid grid-cols-2 gap-2 md:grid-cols-4"><button class="btn">Default</button> <button class="btn btn-primary">Primary</button> <button class="btn btn-secondary">Secondary</button> <button class="btn btn-accent">Accent</button> <button class="btn btn-info">Info</button> <button class="btn btn-success">Success</button> <button class="btn btn-warning">Warning</button> <button class="btn btn-error">Error</button></div>  <div class="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4"><span class="badge">Default</span> <span class="badge badge-primary">Primary</span> <span class="badge badge-secondary">Secondary</span> <span class="badge badge-accent">Accent</span> <span class="badge badge-info">Info</span> <span class="badge badge-success">Success</span> <span class="badge badge-warning">Warning</span> <span class="badge badge-error">Error</span></div> <div class="flex flex-col gap-3"><div class="flex flex-col gap-3 md:flex-row"><div class="md:w-1/2"> <div class="tabs"><button class="tab tab-lifted">Tab</button> <button class="tab tab-lifted tab-active">Tab</button> <button class="tab tab-lifted">Tab</button></div>  <div class="flex flex-col"><span class="link">I&#39;m a simple link</span> <span class="link link-primary">I&#39;m a simple link</span> <span class="link link-secondary">I&#39;m a simple link</span> <span class="link link-accent">I&#39;m a simple link</span></div></div> <div class="flex flex-col gap-3 md:w-1/2"><progress value="20" max="100" class="progress">Default</progress> <progress value="25" max="100" class="progress progress-primary">Primary</progress> <progress value="30" max="100" class="progress progress-secondary">Secondary</progress> <progress value="40" max="100" class="progress progress-accent">Accent</progress> <progress value="45" max="100" class="progress progress-info">Info</progress> <progress value="55" max="100" class="progress progress-success">Success</progress> <progress value="70" max="100" class="progress progress-warning">Warning</progress> <progress value="90" max="100" class="progress progress-error">Error</progress></div></div> <div class="flex flex-col gap-3 md:flex-row"> <div class="stats bg-base-300 border-base-300 border md:w-1/2"><div class="stat"><div class="stat-title">Total Page Views</div> <div class="stat-value">89,400</div> <div class="stat-desc">21% more than last month</div></div></div>  <div class="flex flex-wrap items-center justify-center gap-3 md:w-1/2"><div class="radial-progress" style="--value:60;--size:3.5rem">60%</div> <div class="radial-progress" style="--value:75;--size:3.5rem">75%</div> <div class="radial-progress" style="--value:90;--size:3.5rem">90%</div></div></div></div> <div class="flex flex-col gap-3"><div class="flex flex-col gap-3 md:flex-row"><div class="md:w-1/2"> <div><input type="checkbox" class="toggle" checked> <input type="checkbox" class="toggle toggle-primary" checked> <input type="checkbox" class="toggle toggle-secondary" checked> <input type="checkbox" class="toggle toggle-accent" checked></div>  <div><input type="checkbox" class="checkbox" checked> <input type="checkbox" class="checkbox checkbox-primary" checked> <input type="checkbox" class="checkbox checkbox-secondary" checked> <input type="checkbox" class="checkbox checkbox-accent" checked></div>  <div><input type="radio" name="radio-1" class="radio" checked> <input type="radio" name="radio-1" class="radio radio-primary"> <input type="radio" name="radio-1" class="radio radio-secondary"> <input type="radio" name="radio-1" class="radio radio-accent"></div></div>  <div class="md:w-1/2"><input type="range" min="0" max="100" value="90" class="range range-xs"> <input type="range" min="0" max="100" value="70" class="range range-xs range-primary"> <input type="range" min="0" max="100" value="50" class="range range-xs range-secondary"> <input type="range" min="0" max="100" value="40" class="range range-xs range-accent"></div></div>  <div class="flex flex-col gap-3 md:flex-row"><div class="flex flex-col gap-3 md:w-1/2"><input type="text" placeholder="Default" class="input input-bordered w-full"> <input type="text" placeholder="Primary" class="input input-primary input-bordered w-full"> <input type="text" placeholder="Secondary" class="input input-secondary input-bordered w-full"> <input type="text" placeholder="Accent" class="input input-accent input-bordered w-full"></div> <div class="flex flex-col gap-3 md:w-1/2"><input type="text" placeholder="Info" class="input input-info input-bordered w-full"> <input type="text" placeholder="Success" class="input input-success input-bordered w-full"> <input type="text" placeholder="Warning" class="input input-warning input-bordered w-full"> <input type="text" placeholder="Error" class="input input-error input-bordered w-full"></div></div>  <div class="navbar bg-neutral text-neutral-content rounded-box"><div class="flex-none"><button class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div> <div class="flex-1"><button class="btn btn-ghost text-xl normal-case">daisyUI</button></div></div> <div class="flex gap-3"> <div class="flex flex-grow flex-col gap-3"><div class="text-4xl font-bold">Text Size 1</div> <div class="text-3xl font-bold">Text Size 2</div> <div class="text-2xl font-bold">Text Size 3</div> <div class="text-xl font-bold">Text Size 4</div> <div class="text-lg font-bold">Text Size 5</div> <div class="text-sm font-bold">Text Size 6</div> <div class="text-xs font-bold">Text Size 7</div></div>  <ul class="steps steps-vertical"><li class="step step-primary">Step 1</li> <li class="step step-primary">Step 2</li> <li class="step">Step 3</li> <li class="step">Step 4</li></ul></div></div>  <div class="flex flex-col gap-3"><div class="alert"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>12 unread messages. Tap to see.</span></div> <div class="alert alert-info"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 flex-shrink-0 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>New software update available.</span></div> <div class="alert alert-success"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Your purchase has been confirmed!</span></div> <div class="alert alert-warning"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <span>Warning: Invalid email address!</span></div> <div class="alert alert-error"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Error! Task failed successfully.</span></div></div></div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
