import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Hero",
  "desc": "Hero is a component for displaying a large box or image with a title and description.",
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
              class: "hero",
              desc: "Container element"
            },
            {
              type: "component",
              class: "hero-content",
              desc: "Container for content"
            },
            {
              type: "component",
              class: "hero-overlay",
              desc: "Overlay that covers the background image"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Centered hero" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$hero min-h-screen bg-base-200">
  <div class="$$hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="hero min-h-[30rem] rounded bg-base-200" data-svelte-h="svelte-b1oxtm"><div class="text-center hero-content"><div class="max-w-md"><h3 class="text-5xl font-bold">Hello there</h3> <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> <button class="btn btn-primary">Get Started</button></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Hero with figure" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$hero min-h-screen bg-base-200">
  <div class="$$hero-content flex-col lg:flex-row">
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="hero min-h-[30rem] rounded bg-base-200" data-svelte-h="svelte-ndrrj3"><div class="flex-col hero-content lg:flex-row"><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Tailwind CSS hero component"> <div><h3 class="text-5xl font-bold">Box Office News!</h3> <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> <button class="btn btn-primary">Get Started</button></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Hero with figure but reverse order"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$hero min-h-screen bg-base-200">
  <div class="$$hero-content flex-col lg:flex-row-reverse">
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="hero min-h-[30rem] rounded bg-base-200" data-svelte-h="svelte-1vawo1k"><div class="flex-col hero-content lg:flex-row-reverse"><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Tailwind CSS hero component"> <div><h3 class="text-5xl font-bold">Box Office News!</h3> <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> <button class="btn btn-primary">Get Started</button></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Hero with form" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$hero min-h-screen bg-base-200">
  <div class="$$hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="$$card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="$$card-body">
        <div class="$$form-control">
          <label class="$$label">
            <span class="$$label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="$$input $$input-bordered" />
        </div>
        <div class="$$form-control">
          <label class="$$label">
            <span class="$$label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="$$input $$input-bordered" />
          <label class="$$label">
            <a href="#" class="$$label-text-alt $$link $$link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="$$form-control mt-6">
          <button class="$$btn $$btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="hero min-h-[30rem] rounded bg-base-200" data-svelte-h="svelte-dpg0ry"><div class="flex-col hero-content lg:flex-row-reverse"><div class="text-center lg:text-left"><h3 class="text-5xl font-bold">Login now!</h3> <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p></div> <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><div class="card-body"><div class="form-control"><label class="label"><span class="label-text">Email</span></label> <input type="text" placeholder="email" class="input input-bordered"></div> <div class="form-control"><label class="label"><span class="label-text">Password</span></label> <input type="text" placeholder="password" class="input input-bordered"> <label class="label"><a href="#" class="label-text-alt link link-hover">Forgot password?</a></label></div> <div class="form-control mt-6"><button class="btn btn-primary">Login</button></div></div></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Hero with overlay image" }, {}, {
        jsx: () => {
          return `<pre slot="jsx">${escape(`<div class="$$hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div class="$$hero-overlay bg-opacity-60"></div>
  <div class="$$hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>`)}</pre>`;
        },
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
  <div class="$$hero-overlay bg-opacity-60"></div>
  <div class="$$hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="hero min-h-[30rem] rounded" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);" data-svelte-h="svelte-1qb4t8e"><div class="hero-overlay rounded bg-opacity-60"></div> <div class="text-center hero-content text-neutral-content"><div class="max-w-md"><h1 class="mb-5 text-5xl font-bold">Hello there</h1> <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> <button class="btn btn-primary">Get Started</button></div></div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
