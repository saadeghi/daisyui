import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Carousel",
  "desc": "Carousel show images or content in a scrollable area.",
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
              class: "carousel",
              desc: "Container element"
            },
            {
              type: "component",
              class: "carousel-item",
              desc: "Carousel item"
            },
            {
              type: "modifier",
              class: "carousel-center",
              desc: "Snap elements to center"
            },
            {
              type: "modifier",
              class: "carousel-end",
              desc: "Snap elements to end"
            },
            {
              type: "modifier",
              class: "carousel-vertical",
              desc: "Vertical carousel"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Snap to start (default)" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$carousel rounded-box">
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="carousel rounded-box" data-svelte-h="svelte-1l2mnr9"><div class="carousel-item"><img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger"></div> <div class="carousel-item"><img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger"></div> <div class="carousel-item"><img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger"></div> <div class="carousel-item"><img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger"></div> <div class="carousel-item"><img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger"></div> <div class="carousel-item"><img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger"></div> <div class="carousel-item"><img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Snap to center" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$carousel $$carousel-center rounded-box">
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="carousel carousel-center rounded-box" data-svelte-h="svelte-h1ecbi"><div class="carousel-item"><img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza"></div> <div class="carousel-item"><img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza"></div> <div class="carousel-item"><img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza"></div> <div class="carousel-item"><img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza"></div> <div class="carousel-item"><img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza"></div> <div class="carousel-item"><img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza"></div> <div class="carousel-item"><img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Snap to end" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$carousel $$carousel-end rounded-box">
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="carousel carousel-end rounded-box" data-svelte-h="svelte-1dbpbjk"><div class="carousel-item"><img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink"></div> <div class="carousel-item"><img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink"></div> <div class="carousel-item"><img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink"></div> <div class="carousel-item"><img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink"></div> <div class="carousel-item"><img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink"></div> <div class="carousel-item"><img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink"></div> <div class="carousel-item"><img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Carousel with full width items" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="w-64 $$carousel rounded-box">
  <div class="$$carousel-item w-full">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="$$carousel-item w-full">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="$$carousel-item w-full">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="$$carousel-item w-full">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="$$carousel-item w-full">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="$$carousel-item w-full">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="$$carousel-item w-full">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-64 carousel rounded-box" data-svelte-h="svelte-pgj689"><div class="w-full carousel-item"><img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="w-full" alt="Tailwind CSS carousel component"></div> <div class="w-full carousel-item"><img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="w-full" alt="Tailwind CSS carousel component"></div> <div class="w-full carousel-item"><img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="w-full" alt="Tailwind CSS carousel component"></div> <div class="w-full carousel-item"><img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" class="w-full" alt="Tailwind CSS carousel component"></div> <div class="w-full carousel-item"><img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="w-full" alt="Tailwind CSS carousel component"></div> <div class="w-full carousel-item"><img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" class="w-full" alt="Tailwind CSS carousel component"></div> <div class="w-full carousel-item"><img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="w-full" alt="Tailwind CSS carousel component"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Vertical carousel" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="h-96 $$carousel $$carousel-vertical rounded-box">
  <div class="$$carousel-item h-full">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
  </div> 
  <div class="$$carousel-item h-full">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
  </div> 
  <div class="$$carousel-item h-full">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
  </div> 
  <div class="$$carousel-item h-full">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" />
  </div> 
  <div class="$$carousel-item h-full">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
  </div> 
  <div class="$$carousel-item h-full">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" />
  </div> 
  <div class="$$carousel-item h-full">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="h-96 carousel carousel-vertical rounded-box" data-svelte-h="svelte-10ifsdj"><div class="carousel-item h-full"><img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Tailwind Image slider"></div> <div class="carousel-item h-full"><img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Tailwind Image slider"></div> <div class="carousel-item h-full"><img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Tailwind Image slider"></div> <div class="carousel-item h-full"><img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Tailwind Image slider"></div> <div class="carousel-item h-full"><img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Tailwind Image slider"></div> <div class="carousel-item h-full"><img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Tailwind Image slider"></div> <div class="carousel-item h-full"><img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Tailwind Image slider"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Carousel with half width items" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$carousel rounded-box w-96">
  <div class="$$carousel-item w-1/2">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="w-full" />
  </div> 
  <div class="$$carousel-item w-1/2">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="w-full" />
  </div> 
  <div class="$$carousel-item w-1/2">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="w-full" />
  </div> 
  <div class="$$carousel-item w-1/2">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" class="w-full" />
  </div> 
  <div class="$$carousel-item w-1/2">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="w-full" />
  </div> 
  <div class="$$carousel-item w-1/2">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" class="w-full" />
  </div> 
  <div class="$$carousel-item w-1/2">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="w-full" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-96 carousel rounded-box" data-svelte-h="svelte-n4ftvs"><div class="w-1/2 carousel-item"><img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="w-full" alt="Tailwind CSS Image slider"></div> <div class="w-1/2 carousel-item"><img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="w-full" alt="Tailwind CSS Image slider"></div> <div class="w-1/2 carousel-item"><img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="w-full" alt="Tailwind CSS Image slider"></div> <div class="w-1/2 carousel-item"><img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" class="w-full" alt="Tailwind CSS Image slider"></div> <div class="w-1/2 carousel-item"><img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="w-full" alt="Tailwind CSS Image slider"></div> <div class="w-1/2 carousel-item"><img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" class="w-full" alt="Tailwind CSS Image slider"></div> <div class="w-1/2 carousel-item"><img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="w-full" alt="Tailwind CSS Image slider"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Full-bleed carousel" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$carousel $$carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="rounded-box" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="rounded-box" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="rounded-box" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" class="rounded-box" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="rounded-box" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" class="rounded-box" />
  </div> 
  <div class="$$carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="rounded-box" />
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="max-w-md p-4 space-x-4 carousel carousel-center bg-neutral rounded-box" data-svelte-h="svelte-jpffvk"><div class="carousel-item"><img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="rounded-box" alt="Tailwind CSS component"></div> <div class="carousel-item"><img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="rounded-box" alt="Tailwind CSS component"></div> <div class="carousel-item"><img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="rounded-box" alt="Tailwind CSS component"></div> <div class="carousel-item"><img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" class="rounded-box" alt="Tailwind CSS component"></div> <div class="carousel-item"><img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="rounded-box" alt="Tailwind CSS component"></div> <div class="carousel-item"><img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" class="rounded-box" alt="Tailwind CSS component"></div> <div class="carousel-item"><img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="rounded-box" alt="Tailwind CSS component"></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Carousel with indicator buttons",
          desc: "This slider works with anchor links so the browser will snap vertically to the image when you click buttons."
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$carousel w-full">
  <div id="item1" class="$$carousel-item w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
  </div> 
  <div id="item2" class="$$carousel-item w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
  </div> 
  <div id="item3" class="$$carousel-item w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
  </div> 
  <div id="item4" class="$$carousel-item w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="$$btn $$btn-xs">1</a> 
  <a href="#item2" class="$$btn $$btn-xs">2</a> 
  <a href="#item3" class="$$btn $$btn-xs">3</a> 
  <a href="#item4" class="$$btn $$btn-xs">4</a>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="w-full carousel" data-svelte-h="svelte-p45sct"><div id="item1" class="w-full carousel-item"><img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" alt="Tailwind CSS image gallery"></div> <div id="item2" class="w-full carousel-item"><img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" alt="Tailwind CSS image gallery"></div> <div id="item3" class="w-full carousel-item"><img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" alt="Tailwind CSS image gallery"></div> <div id="item4" class="w-full carousel-item"><img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" alt="Tailwind CSS image gallery"></div></div> <div class="flex justify-center w-full py-2 gap-2" data-svelte-h="svelte-941awq"><a href="#item1" class="btn btn-xs">1</a> <a href="#item2" class="btn btn-xs">2</a> <a href="#item3" class="btn btn-xs">3</a> <a href="#item4" class="btn btn-xs">4</a></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Carousel with next/prev buttons",
          desc: "This slider works with anchor links so the browser will snap vertically to the image when you click buttons."
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$carousel w-full">
  <div id="slide1" class="$$carousel-item relative w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="$$carousel-item relative w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="$$carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="$$carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="w-full carousel" data-svelte-h="svelte-1h9nq6p"><div id="slide1" class="relative w-full carousel-item"><img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" alt="Tailwind CSS image slide"> <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide4" class="btn btn-circle">❮</a> <a href="#slide2" class="btn btn-circle">❯</a></div></div> <div id="slide2" class="relative w-full carousel-item"><img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" alt="Tailwind CSS image slide"> <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide1" class="btn btn-circle">❮</a> <a href="#slide3" class="btn btn-circle">❯</a></div></div> <div id="slide3" class="relative w-full carousel-item"><img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" alt="Tailwind CSS image slide"> <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide2" class="btn btn-circle">❮</a> <a href="#slide4" class="btn btn-circle">❯</a></div></div> <div id="slide4" class="relative w-full carousel-item"><img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" alt="Tailwind CSS image slide"> <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide3" class="btn btn-circle">❮</a> <a href="#slide1" class="btn btn-circle">❯</a></div></div></div>`;
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
