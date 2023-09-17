import { c as create_ssr_component, a as subscribe, d as each, b as add_attribute } from "./ssr.js";
import { p as page } from "./stores.js";
import { t } from "./i18n.js";
const InstallTabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const tabs = [
    {
      name: "Tailwind Plugin",
      href: "/docs/install/"
    },
    { name: "Use CDN", href: "/docs/cdn/" }
  ];
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<div class="not-prose mb-10 overflow-x-auto"><div class="tabs flex-nowrap whitespace-nowrap">${each(tabs, ({ name, href }) => {
    return `<a${add_attribute("href", href, 0)}${add_attribute("class", `tab tab-lifted xl:tab-lg ${$page.url.pathname == href ? "tab-active" : ""}`, 0)}><!-- HTML_TAG_START -->${$t(name)}<!-- HTML_TAG_END --> </a>`;
  })}  <span class="tab tab-lifted xl:tab-lg flex-grow cursor-default"></span></div></div>`;
});
export {
  InstallTabs as I
};
