import { c as create_ssr_component, a as subscribe, v as validate_component } from "./ssr.js";
import { p as page } from "./stores.js";
import { S as Sponsors, A as Ads } from "./Ads.js";
import { C as ComponentFooter } from "./ComponentFooter.js";
import { S as SEO } from "./SEO.js";
import { t } from "./i18n.js";
const Mdsvex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { title } = $$props;
  let { desc } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title,
      desc,
      img: `/images${$page.url.pathname.replace(/\/$/, "")}.jpg`
    },
    {},
    {}
  )} <div class="flex flex-col-reverse justify-between gap-6 xl:flex-row"><div class="prose prose-sm md:prose-base w-full max-w-4xl flex-grow pt-10">${title ? `<h1><!-- HTML_TAG_START -->${$t(title)}<!-- HTML_TAG_END --></h1>` : ``} ${desc ? `<p><!-- HTML_TAG_START -->${$t(desc)}<!-- HTML_TAG_END --></p>` : ``} ${slots.default ? slots.default({}) : ``} ${validate_component(ComponentFooter, "ComponentFooter").$$render($$result, {}, {}, {})} <div class="not-prose flex justify-center xl:hidden">${validate_component(Sponsors, "Sponsors").$$render($$result, { wrapperClasses: "flex-col sm:flex-row" }, {}, {})}</div></div> ${validate_component(Ads, "Ads").$$render($$result, { slot: "carbon2" }, {}, {})}</div>`;
});
export {
  Mdsvex as M
};
