import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, e as escape, d as each } from "../../../chunks/ssr.js";
import { t, p as pages, r as readEnv, a as pagesThatDontNeedSidebar, c as currentLang } from "../../../chunks/i18n.js";
import { p as page } from "../../../chunks/stores.js";
import { L as LogoContextMenu, S as Search, N as Navbar, a as Scripts } from "../../../chunks/Scripts.js";
import { w as writable } from "../../../chunks/index2.js";
import resolveConfig from "tailwindcss/resolveConfig.js";
function useMediaQuery(query) {
  const matches = writable(false);
  return matches;
}
const tailwindConfig = "data:application/node;base64,bW9kdWxlLmV4cG9ydHMgPSB7CiAgY29udGVudDogWyIuL3NyYy8qKi8qLntodG1sLGpzLHN2ZWx0ZSx0cyxzdngsbWQsanNvbn0iXSwKICBzYWZlbGlzdDogWwogICAgIm1yLTEiLAogICAgIm9wYWNpdHktMjAiLAogICAgImhvdmVyOm9wYWNpdHktNjAiLAogICAgInRleHQtYmFzZSIsCiAgICAiZm9udC1ib2xkIiwKICAgICJpbmxpbmUtYmxvY2siLAogICAgImFsaWduLW1pZGRsZSIsCiAgICAicmVsYXRpdmUiLAogICAgIi1tdC0xIiwKICAgICJbJl9zdmddOnZpc2libGUiLAogIF0sCiAgdGhlbWU6IHsKICAgIGV4dGVuZDogewogICAgICBjb2xvcnM6IHJlcXVpcmUoIi4uL3RoZW1pbmciKSwKICAgICAgZm9udEZhbWlseTogewogICAgICAgIHRpdGxlOiBbIkZpZ3RyZWUiLCAiTm90byBTYW5zIEpQIiwgIk5vdG8gU2FucyIsICJzYW5zLXNlcmlmIl0sCiAgICAgIH0sCiAgICB9LAogIH0sCiAgZGFpc3l1aTogewogICAgbG9nczogZmFsc2UsCiAgICB0aGVtZXM6IHRydWUsCiAgfSwKICBwbHVnaW5zOiBbCiAgICByZXF1aXJlKCJAdGFpbHdpbmRjc3MvdHlwb2dyYXBoeSIpLAogICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICJwcm9kdWN0aW9uIiA/IHJlcXVpcmUoImRhaXN5dWkiKSA6IFtdLAogIF0sCiAgcHJlc2V0czogWwogICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICJwcm9kdWN0aW9uIiA/IFtdIDogcmVxdWlyZSgiLi4vY29tcG9uZW50cy90YWlsd2luZC5jb25maWcuanMiKSwKICAgICJub2RlX21vZHVsZXMvdGFpbHdpbmRjc3Mvc3R1YnMvZGVmYXVsdENvbmZpZy5zdHViLmpzIiwKICBdLAp9Cg==";
function increaseWithUnit(target, delta) {
  if (typeof target === "number")
    return target + delta;
  const value = target.match(/^-?[0-9]+\.?[0-9]*/)?.[0] || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function useBreakpoints() {
  const fullConfig = resolveConfig(tailwindConfig);
  const breakpoints = fullConfig.theme.screens;
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return {
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    },
    ...shortcutMethods
  };
}
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let switchNavbarStyle;
  let $page, $$unsubscribe_page;
  let $showSearch, $$unsubscribe_showSearch;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let contextMenuEl;
  let { closeDrawer } = $$props;
  let { openDrawer } = $$props;
  let version = readEnv("VITE_DAISYUI_VERSION", "latest");
  let { drawerSidebarScrollY } = $$props;
  const breakpoints = useBreakpoints();
  const showSearch = breakpoints.smaller("lg");
  $$unsubscribe_showSearch = subscribe(showSearch, (value) => $showSearch = value);
  if ($$props.closeDrawer === void 0 && $$bindings.closeDrawer && closeDrawer !== void 0)
    $$bindings.closeDrawer(closeDrawer);
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0)
    $$bindings.openDrawer(openDrawer);
  if ($$props.drawerSidebarScrollY === void 0 && $$bindings.drawerSidebarScrollY && drawerSidebarScrollY !== void 0)
    $$bindings.drawerSidebarScrollY(drawerSidebarScrollY);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    switchNavbarStyle = drawerSidebarScrollY > 40 ? true : false;
    $$rendered = `<div${add_attribute("class", `bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur ${$page.url.pathname == "/" ? "" : "lg:flex"} ${switchNavbarStyle ? "shadow-sm" : ""}`, 0)}><a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2" data-svelte-h="svelte-pw6yxt"><svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg> <div class="font-title inline-flex text-lg md:text-2xl"><span class="lowercase">daisy</span> <span class="uppercase text-[#1AD1A5]">UI</span></div></a> ${validate_component(LogoContextMenu, "LogoContextMenu").$$render(
      $$result,
      { this: contextMenuEl },
      {
        this: ($$value) => {
          contextMenuEl = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="dropdown"><label tabindex="0" class="link link-hover font-mono text-xs">${escape(version)}</label> <ul tabindex="0" class="dropdown-content menu menu-sm bg-base-200 rounded-box mt-8 w-36 p-2 shadow" data-svelte-h="svelte-hx87pu"><li><a href="/docs/changelog/">Changelog</a></li> <li></li> <li><a target="_blank" rel="noopener, noreferrer" href="https://v2.daisyui.com/">Version 2.x</a></li> <li><a target="_blank" rel="noopener, noreferrer" href="https://v1.daisyui.com/">Version 1.x</a></li></ul></div></div> ${$showSearch ? `<div${add_attribute("class", `bg-base-100 grid-row-2 sticky top-0 z-10 grid w-full gap-y-2 bg-opacity-90 px-2 py-3 backdrop-blur ${switchNavbarStyle ? "shadow-sm" : ""}`, 0)}><div class="flex w-full">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div></div>` : ``} <ul class="menu bg-base-200 py-2 px-4 justify-between menu-horizontal w-full lg:hidden"><li><a href="/components/">${escape($t("components-btn"))}</a></li> <li><a href="/blog/">${escape($t("Blog"))}</a></li> <li><a target="_blank" href="https://github.com/saadeghi/daisyui" rel="noopener, noreferrer">${escape($t("GitHub"))}</a></li></ul> <div class="h-4"></div> ${each(pages, ({ name, icon, items }) => {
      return `<ul class="menu menu-sm lg:menu-md px-4 py-0">${name && name != "excluded" ? `<li></li> <li class="menu-title flex flex-row gap-4">${icon ? `<span class="text-base-content"><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --></span>` : ``} <span>${escape($t(name))}</span> </li>` : ``} ${name != "excluded" ? `${each(items, ({ name: name2, href, icon: icon2, badge, hidden, highlightAnotherItem, deprecated }) => {
        return `${!hidden ? `<li><a${add_attribute("href", href, 0)} data-sveltekit-preload-data="hover"${add_attribute(
          "id",
          $page.url.pathname.startsWith(href + "/") ? "active-menu" : "",
          0
        )}${add_attribute(
          "class",
          `${$page.url.pathname == href ? "active" : ""} ${$page.url.pathname == highlightAnotherItem + "/" ? "active" : ""} ${$page.url.pathname.startsWith(href + "/") ? "active" : ""}`,
          0
        )}>${icon2 != "" ? `<span><!-- HTML_TAG_START -->${icon2}<!-- HTML_TAG_END --> </span>` : ``} <span${add_attribute("class", `${deprecated && "line-through"}`, 0)}><!-- HTML_TAG_START -->${$t(name2)}<!-- HTML_TAG_END --></span> ${badge != "" ? `<span class="badge badge-sm font-mono lowercase">${escape($t(badge))} </span>` : ``}</a> </li>` : ``}`;
      })}` : ``} </ul>`;
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_showSearch();
  $$unsubscribe_t();
  return $$rendered;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.prose code[class*="language-"],.code-wrapper code[class*="language-"],code[class*="language-"],pre[class*="language-"]{background:unset}.prose pre[class*="language-"]{max-width:clamp(20rem, calc(100vw - 4rem), 80ch);background-color:hsl(var(--n));color:hsl(var(--nc))}.prose pre[class*="language-"] ::selection{background-color:hsl(var(--nc));color:hsl(var(--n))}@media(min-width: 1024px){.prose pre[class*="language-"]{max-width:clamp(20rem, calc(100vw - 20rem - 4rem), 80ch)}}@media(min-width: 1280px){.prose pre[class*="language-"]{max-width:clamp(20rem, calc(100vw - 20rem - 4rem - 8rem), 80ch)}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentLang;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentLang = subscribe(currentLang, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let drawersidebar;
  let drawerSidebarScrollY = 0;
  let checked = "";
  function closeDrawer() {
    checked = "";
  }
  function openDrawer() {
    checked = true;
  }
  let navbarScrollPadding = "5rem";
  function addScrollPaddingToNavbar(action) {
    navbarScrollPadding = "5rem";
    document.documentElement.style.scrollPaddingTop = "5rem";
  }
  function removeScrollPaddingFromNavbar(action) {
    navbarScrollPadding = "0rem";
    document.documentElement.style.scrollPaddingTop = "0rem";
  }
  $$result.css.add(css);
  $$unsubscribe_currentLang();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1wagzpy_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&family=Noto+Sans+JP:wght@300;900&family=Noto+Sans:wght@300;900&display=swap" rel="stylesheet"><!-- HEAD_svelte-1wagzpy_END -->`, ""} <div${add_attribute(
    "class",
    `bg-base-100 drawer ${pagesThatDontNeedSidebar.includes($page.url.pathname) ? "" : "lg:drawer-open"}`,
    0
  )}><input id="drawer" type="checkbox" class="drawer-toggle"${add_attribute("checked", checked, 1)}> <div${add_attribute("class", `drawer-content`, 0)}>${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      addScrollPaddingToNavbar,
      removeScrollPaddingFromNavbar,
      showBlogBtn: "true",
      showComponentsBtn: "true",
      hideLogoOnLargeScreen: $page.url.pathname == "/" ? false : true,
      hideSidebarButtonOnLargeScreen: $page.url.pathname == "/" ? false : true,
      showSearch: "true",
      showVersion: "true",
      showLanguage: "true"
    },
    {},
    {}
  )} <div${add_attribute(
    "class",
    `${pagesThatDontNeedSidebar.includes($page.url.pathname) ? "" : "max-w-[100vw] px-6 pb-16 xl:pr-2"}`,
    0
  )}>${slots.default ? slots.default({}) : ``}</div></div> <div class="drawer-side z-40" style="${"scroll-behavior: smooth; scroll-padding-top: " + escape(navbarScrollPadding, true) + ";"}"${add_attribute("this", drawersidebar, 0)}><label for="drawer" class="drawer-overlay" aria-label="Close menu"></label> <aside class="bg-base-100 w-80">${validate_component(Sidebar, "Sidebar").$$render(
    $$result,
    {
      closeDrawer,
      openDrawer,
      drawerSidebarScrollY
    },
    {},
    {}
  )} <div class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"></div></aside></div></div> <input type="checkbox" id="my_modal_6" class="modal-toggle" aria-label="Open or close modal"> <div class="modal" data-svelte-h="svelte-9hp7vt"><div class="modal-box"><h3 class="text-lg font-bold">Hello!</h3> <p class="py-4">This modal works with a hidden checkbox!</p> <div class="modal-action"><label for="my_modal_6" class="btn">Close</label></div></div></div> <input type="checkbox" id="my_modal_7" class="modal-toggle" aria-label="Open or close modal"> <div class="modal" data-svelte-h="svelte-5hocmr"><div class="modal-box"><h3 class="text-lg font-bold">Congratulations random Internet user!</h3> <p class="py-4">You&#39;ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p></div> <label class="modal-backdrop" for="my_modal_7">Close</label></div> <div class="modal" id="my_modal_8" data-svelte-h="svelte-8xfwcg"><div class="modal-box"><h3 class="text-lg font-bold">Hello!</h3> <p class="py-4">This modal works with anchor links</p> <div class="modal-action"> <a href="#" class="btn" rel="external">Close</a></div></div></div> ${validate_component(Scripts, "Scripts").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
