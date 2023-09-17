import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as each, b as add_attribute } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as SEO } from "../../../../chunks/SEO.js";
import { T as Translate } from "../../../../chunks/Translate.js";
import { A as Ads } from "../../../../chunks/Ads.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { components } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render($$result, { title: "Components", desc: "Components" }, {}, {})} <div class="flex flex-col-reverse justify-between gap-6 xl:flex-row"><div class="flex flex-col gap-6 pt-10"><div class="prose max-w-4xl flex-grow"><h1>${validate_component(Translate, "Translate").$$render($$result, { text: "All daisyUI components" }, {}, {})}</h1> <p>${escape(Object.keys(components).length)} ${validate_component(Translate, "Translate").$$render($$result, { text: "components" }, {}, {})}</p></div> <div class="not-prose grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">${each(components, ({ slug, title, desc }) => {
    return `<a class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"${add_attribute("href", `${$page.url.pathname.replace(/\/$/, "")}/${slug}`, 0)}><figure class="px-4 pt-4"><img loading="lazy"${add_attribute("src", `/images/components/${slug}.jpg`, 0)} class="border-base-content bg-base-300 rounded-lg border border-opacity-5"${add_attribute("alt", title, 0)}></figure> <div class="card-body"><h2 class="card-title">${validate_component(Translate, "Translate").$$render($$result, { text: title }, {}, {})}</h2> <p class="text-xs opacity-60">${validate_component(Translate, "Translate").$$render($$result, { text: desc || "" }, {}, {})}</p></div> </a>`;
  })}</div></div> ${validate_component(Ads, "Ads").$$render($$result, { slot: "carbon2" }, {}, {})}</div>`;
});
export {
  Page as default
};
