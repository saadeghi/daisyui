import { c as create_ssr_component, a as subscribe, v as validate_component, d as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { c as currentLang } from "../../../chunks/i18n.js";
import { F as Footer } from "../../../chunks/Footer.js";
import { S as Sponsors, A as Ads } from "../../../chunks/Ads.js";
import { N as Navbar, a as Scripts } from "../../../chunks/Scripts.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const onNavigate = /* @__PURE__ */ client_method("on_navigate");
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentLang;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentLang = subscribe(currentLang, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  let { data } = $$props;
  let { tags } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_currentLang();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1wagzpy_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&family=Noto+Sans+JP:wght@300;900&family=Noto+Sans:wght@300;900&display=swap" rel="stylesheet"><!-- HEAD_svelte-1wagzpy_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, { hideSidebarButton: "true" }, {}, {})} <div class="flex flex-col-reverse justify-between gap-6 xl:flex-row"><div class="max-w-none w-full flex-grow pt-10"><div class="flex flex-col lg:flex-row justify-center w-full p-4 gap-6 min-h-[50vh]"><div class="max-w-2xl max-lg:w-full max-lg:mx-auto"><div class="sticky top-32 mx-auto sm:max-w-none"><div class="px-6 mb-8" data-svelte-h="svelte-3g9qpd"><a href="/blog" class="hover:opacity-80 inline-block"><h1 class="font-title text-xl font-extrabold text-base-content">daisyUI blog</h1></a> <p class="text-xs italic text-base-content/60">Updates, ideas and resources</p></div> ${tags.length > 0 ? `<ul class="menu menu-horizontal lg:w-56 lg:menu-vertical"><li class="menu-title" data-svelte-h="svelte-slrl5a">Tags</li> ${each(tags, (tag) => {
    return `<li><a data-sveltekit-reload${add_attribute("href", `/blog/tag/${tag.replace(/ /g, "-").toLowerCase()}`, 0)}${add_attribute("class", tag.replace(/ /g, "-").toLowerCase() === $page.url.pathname.split("/").at(-2) && `active`, 0)}>${escape(tag)}</a> </li>`;
  })}</ul>` : ``}</div></div> <div class="w-full max-w-2xl mx-auto">${slots.default ? slots.default({}) : ``}</div></div> <div class="flex justify-center xl:hidden">${validate_component(Sponsors, "Sponsors").$$render($$result, { wrapperClasses: "flex-col sm:flex-row" }, {}, {})}</div></div> ${validate_component(Ads, "Ads").$$render($$result, { slot: "carbon2" }, {}, {})}</div> <div class="h-20"></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${validate_component(Scripts, "Scripts").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
