import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Card",
  "desc": "Cards are used to group and display content in a way that is easily readable.",
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
              class: "card",
              desc: "Container element"
            },
            {
              type: "component",
              class: "card-title",
              desc: "Title of card"
            },
            {
              type: "component",
              class: "card-body",
              desc: "Container for content"
            },
            {
              type: "component",
              class: "card-actions",
              desc: "Container for buttons"
            },
            {
              type: "modifier",
              class: "card-bordered",
              desc: "Adds border to <card>"
            },
            {
              type: "modifier",
              class: "image-full",
              desc: "The image in <figure> element will be the background"
            },
            {
              type: "responsive",
              class: "card-normal",
              desc: "Applies default paddings"
            },
            {
              type: "responsive",
              class: "card-compact",
              desc: "Applies smaller padding"
            },
            {
              type: "responsive",
              class: "card-side",
              desc: "The image in <figure> will be on to the side"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Card" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="card w-96 bg-base-100 shadow-xl" data-svelte-h="svelte-1oufy6g"><figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"></figure> <div class="card-body"><h2 class="card-title">Shoes!</h2> <p>If a dog chews shoes whose shoes does he choose?</p> <div class="justify-end card-actions"><button class="btn btn-primary">Buy Now</button></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Compact card (less padding for `card-body`)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$card $$card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="card w-96 bg-base-100 card-compact shadow-xl" data-svelte-h="svelte-ejmz26"><figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"></figure> <div class="card-body"><h2 class="card-title">Shoes!</h2> <p>If a dog chews shoes whose shoes does he choose?</p> <div class="justify-end card-actions"><button class="btn btn-primary">Buy Now</button></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Card with badge" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">
      Shoes!
      <div class="$$badge $$badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <div class="$$badge $$badge-outline">Fashion</div> 
      <div class="$$badge $$badge-outline">Products</div>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="card w-96 bg-base-100 shadow-xl" data-svelte-h="svelte-1u8hxdu"><figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"></figure> <div class="card-body"><h2 class="card-title">Shoes!
      <div class="badge badge-secondary">NEW</div></h2> <p>If a dog chews shoes whose shoes does he choose?</p> <div class="justify-end card-actions"><div class="badge badge-outline">Fashion</div> <div class="badge badge-outline">Products</div></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Card with bottom image" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$card w-96 bg-base-100 shadow-xl">
  <div class="$$card-body">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="card w-96 bg-base-100 shadow-xl" data-svelte-h="svelte-19okvep"><div class="card-body"><h2 class="card-title">Shoes!</h2> <p>If a dog chews shoes whose shoes does he choose?</p></div> <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"></figure></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Card with centered content and paddings"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="$$card-body items-center text-center">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="card w-96 bg-base-100 shadow-xl" data-svelte-h="svelte-npb27v"><figure class="px-10 pt-10"><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl"></figure> <div class="card-body items-center text-center"><h2 class="card-title">Shoes!</h2> <p>If a dog chews shoes whose shoes does he choose?</p> <div class="card-actions"><button class="btn btn-primary">Buy Now</button></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Card with image overlay" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="card w-96 bg-base-100 shadow-xl image-full" data-svelte-h="svelte-1czsuuv"><figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"></figure> <div class="card-body"><h2 class="card-title">Shoes!</h2> <p>If a dog chews shoes whose shoes does he choose?</p> <div class="justify-end card-actions"><button class="btn btn-primary">Buy Now</button></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Card with no image" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$card w-96 bg-base-100 shadow-xl">
  <div class="$$card-body">
    <h2 class="$$card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="card w-96 bg-base-100 shadow-xl" data-svelte-h="svelte-1j6hqpx"><div class="card-body"><h2 class="card-title">Card title!</h2> <p>If a dog chews shoes whose shoes does he choose?</p> <div class="justify-end card-actions"><button class="btn btn-primary">Buy Now</button></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Card with custom color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$card w-96 bg-primary text-primary-content">
  <div class="$$card-body">
    <h2 class="$$card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn">Buy Now</button>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="card w-96 bg-primary text-primary-content" data-svelte-h="svelte-xb5ud6"><div class="card-body"><h2 class="card-title">Card title!</h2> <p>If a dog chews shoes whose shoes does he choose?</p> <div class="justify-end card-actions"><button class="btn">Buy Now</button></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Centered card with neutral color"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$card w-96 bg-neutral text-neutral-content">
  <div class="$$card-body items-center text-center">
    <h2 class="$$card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Accept</button>
      <button class="$$btn $$btn-ghost">Deny</button>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="card w-96 bg-neutral text-neutral-content" data-svelte-h="svelte-1i3w544"><div class="card-body items-center text-center"><h2 class="card-title">Cookies!</h2> <p>We are using cookies for no reason.</p> <div class="justify-end card-actions"><button class="btn btn-primary">Accept</button> <button class="btn btn-ghost">Deny</button></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Card with action on top" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$card w-96 bg-base-100 shadow-xl">
  <div class="$$card-body">
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-square $$btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="card w-96 bg-base-100 shadow-xl" data-svelte-h="svelte-1jhynqq"><div class="card-body"><div class="justify-end card-actions"><button class="btn btn-square btn-sm"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <p>We are using cookies for no reason.</p></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Card glass",
          bg: "/images/stock/photo-1481026469463-66327c86e544.jpg"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$card w-96 glass">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Learn now!</button>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="card w-96 glass" data-svelte-h="svelte-11sivfk"><figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"></figure> <div class="card-body"><h2 class="card-title">Life hack</h2> <p>How to park your car at your garage?</p> <div class="justify-end card-actions"><button class="btn btn-primary">Learn now!</button></div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Card with image on side" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$card $$card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Watch</button>
    </div>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="card card-side bg-base-100 shadow-xl" data-svelte-h="svelte-fbr2cn"><figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"></figure> <div class="card-body"><h2 class="card-title">New movie is released!</h2> <p>Click the button to watch on Jetflix app.</p> <div class="justify-end card-actions"><button class="btn btn-primary">Watch</button></div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Responsive card (vertical on small screen, horizontal on large screen)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$card lg:$$card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Listen</button>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="card lg:card-side bg-base-100 shadow-xl" data-svelte-h="svelte-14o4x66"><figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"></figure> <div class="card-body"><h2 class="card-title">New album is released!</h2> <p>Click the button to listen on Spotiwhy app.</p> <div class="justify-end card-actions"><button class="btn btn-primary">Listen</button></div></div></div>`;
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
