import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Mask",
  "desc": "Mask crops the content of the element to common shapes.",
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
              class: "mask",
              desc: "Masks the content with shape"
            },
            {
              type: "modifier",
              class: "mask-squircle",
              desc: "Applies `squircle` shape"
            },
            {
              type: "modifier",
              class: "mask-heart",
              desc: "Applies `heart` shape"
            },
            {
              type: "modifier",
              class: "mask-hexagon",
              desc: "Applies `hexagon` shape"
            },
            {
              type: "modifier",
              class: "mask-hexagon-2",
              desc: "Applies `hexagon` alternative shape"
            },
            {
              type: "modifier",
              class: "mask-decagon",
              desc: "Applies `decagon` shape"
            },
            {
              type: "modifier",
              class: "mask-pentagon",
              desc: "Applies `pentagon` shape"
            },
            {
              type: "modifier",
              class: "mask-diamond",
              desc: "Applies `diamond` shape"
            },
            {
              type: "modifier",
              class: "mask-square",
              desc: "Applies `square` shape"
            },
            {
              type: "modifier",
              class: "mask-circle",
              desc: "Applies `circle` shape"
            },
            {
              type: "modifier",
              class: "mask-parallelogram",
              desc: "Applies `parallelogram` shape"
            },
            {
              type: "modifier",
              class: "mask-parallelogram-2",
              desc: "Applies `parallelogram` alternative shape"
            },
            {
              type: "modifier",
              class: "mask-parallelogram-3",
              desc: "Applies `parallelogram` alternative shape"
            },
            {
              type: "modifier",
              class: "mask-parallelogram-4",
              desc: "Applies `parallelogram` alternative shape"
            },
            {
              type: "modifier",
              class: "mask-star",
              desc: "Applies `star` shape"
            },
            {
              type: "modifier",
              class: "mask-star-2",
              desc: "Applies `star` alternative shape"
            },
            {
              type: "modifier",
              class: "mask-triangle",
              desc: "Applies `triangle` shape"
            },
            {
              type: "modifier",
              class: "mask-triangle-2",
              desc: "Applies `triangle` alternative shape"
            },
            {
              type: "modifier",
              class: "mask-triangle-3",
              desc: "Applies `triangle` alternative shape"
            },
            {
              type: "modifier",
              class: "mask-triangle-4",
              desc: "Applies `triangle` alternative shape"
            },
            {
              type: "modifier",
              class: "mask-half-1",
              desc: "Crops only the first half of mask"
            },
            {
              type: "modifier",
              class: "mask-half-2",
              desc: "Crops only the second half of mask"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Squircle" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-squircle" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Squircle CSS mask" class="mask mask-squircle w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Heart" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-heart" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Heart CSS mask" class="mask mask-heart w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Hexagon" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-hexagon" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Hexagon CSS mask" class="mask mask-hexagon w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Hexagon-2" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-hexagon-2" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Hexagon-2 CSS mask" class="mask mask-hexagon-2 w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Decagon" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-decagon" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Decagon CSS mask" class="mask mask-decagon w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Pentagon" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-pentagon" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Pentagon CSS mask" class="mask mask-pentagon w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Diamond" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-diamond" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Diamond CSS mask" class="mask mask-diamond w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Square" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-square" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Square CSS mask" class="mask mask-square w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Circle" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-circle" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Circle CSS mask" class="mask mask-circle w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Parallelogram" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-parallelogram" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Parallelogram CSS mask" class="mask mask-parallelogram w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Parallelogram-2" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-parallelogram-2" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Parallelogram-2 CSS mask" class="mask mask-parallelogram-2 w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Parallelogram-3" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-parallelogram-3" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Parallelogram-3 CSS mask" class="mask mask-parallelogram-3 w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Parallelogram-4" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-parallelogram-4" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Parallelogram-4 CSS mask" class="mask mask-parallelogram-4 w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Star" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-star" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Star CSS mask" class="mask mask-star w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Star-2" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-star-2" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Star-2 CSS mask" class="mask mask-star-2 w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Triangle" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-triangle" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Triangle CSS mask" class="mask mask-triangle w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Triangle-2" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-triangle-2" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Triangle-2 CSS mask" class="mask mask-triangle-2 w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Triangle-3" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-triangle-3" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Triangle-3 CSS mask" class="mask mask-triangle-3 w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Triangle-4" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<img class="$$mask $$mask-triangle-4" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />`)}</pre>`;
        },
        default: () => {
          return `<img alt="Triangle-4 CSS mask" class="mask mask-triangle-4 w-40 h-40" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg">`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
