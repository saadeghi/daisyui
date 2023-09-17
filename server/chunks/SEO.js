import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "./ssr.js";
import { t, d as siteData, r as readEnv } from "./i18n.js";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formattedTitle;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { formatTitle = true } = $$props;
  let { title = "" } = $$props;
  let { desc = siteData.desc } = $$props;
  let { img = siteData.card } = $$props;
  if ($$props.formatTitle === void 0 && $$bindings.formatTitle && formatTitle !== void 0)
    $$bindings.formatTitle(formatTitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  formattedTitle = formatTitle ? title ? `${$t(title)} — ${$t(siteData.title)}` : `${$t(siteData.title)}` : title;
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-16rcqg9_START -->${$$result.title = `<title>${escape(formattedTitle)}</title>`, ""}<meta name="description"${add_attribute("content", desc, 0)}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${add_attribute("content", formattedTitle, 0)}><meta name="twitter:description"${add_attribute("content", desc, 0)}><meta name="twitter:image"${add_attribute("content", readEnv("VITE_ROOT") + img, 0)}><meta name="twitter:image:alt"${add_attribute("content", formattedTitle, 0)}><meta property="og:title"${add_attribute("content", formattedTitle, 0)}><meta property="og:description"${add_attribute("content", desc, 0)}><meta property="og:image"${add_attribute("content", readEnv("VITE_ROOT") + img, 0)}><!-- HEAD_svelte-16rcqg9_END -->`, ""}`;
});
export {
  SEO as S
};
