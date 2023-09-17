import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape, m as missing_component, l as compute_slots, d as each } from "./ssr.js";
import { p as page } from "./stores.js";
import { S as Sponsors, A as Ads } from "./Ads.js";
import { C as ComponentFooter } from "./ComponentFooter.js";
import { S as SEO } from "./SEO.js";
import { t } from "./i18n.js";
import { o as onMount } from "./ssr2.js";
import { T as Translate } from "./Translate.js";
import { w as writable } from "./index2.js";
import debounce from "lodash.debounce";
const Mdsvex_components = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $page, $$unsubscribe_page;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title } = $$props;
  let { desc } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  $$unsubscribe_t();
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: `Tailwind ${title} ${$t("Component")}`,
      desc: `Tailwind ${title} examples: ${desc} component`,
      img: `/images${$page.url.pathname.replace(/\/$/, "")}.jpg`
    },
    {},
    {}
  )} <div class="flex flex-col-reverse justify-between gap-6 xl:flex-row"><div class="prose prose-sm md:prose-base w-full max-w-4xl flex-grow pt-10">${title ? `<h1><!-- HTML_TAG_START -->${$t(title)}<!-- HTML_TAG_END --></h1>` : ``} ${desc ? `<p><!-- HTML_TAG_START -->${$t(desc)}<!-- HTML_TAG_END --></p>` : ``} ${slots.default ? slots.default({}) : ``} ${validate_component(ComponentFooter, "ComponentFooter").$$render($$result, {}, {}, {})} <div class="not-prose flex justify-center xl:hidden">${validate_component(Sponsors, "Sponsors").$$render($$result, { wrapperClasses: "flex-col sm:flex-row" }, {}, {})}</div></div> ${validate_component(Ads, "Ads").$$render($$result, { slot: "carbon2" }, {}, {})}</div>`;
});
const Component_svelte_svelte_type_style_lang = "";
const css = {
  code: '.prose .code-wrapper{max-width:100vw;overflow-x:auto}.prose .code-wrapper>pre{max-height:32em}.prose .component-preview pre[class*="language-"]{width:100%;max-width:100%;font-size:14px;padding-right:2.5rem;padding-top:1rem;padding-bottom:1rem;border-top-right-radius:0.75rem;border-top-left-radius:0.75rem;border-bottom-right-radius:0.75rem;border-bottom-left-radius:0.75rem;margin:0;min-height:6rem}.prose .component-preview pre[class*="language-"] .token.comment{color:hsl(var(--nc) / 0.4)}.prose .component-preview .preview{background-image:repeating-linear-gradient(\n      45deg,\n      hsl(var(--b1)),\n      hsl(var(--b1)) 13px,\n      hsl(var(--b2)) 13px,\n      hsl(var(--b2)) 14px\n    )}',
  map: null
};
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let titleStr;
  let $$slots = compute_slots(slots);
  let { title = void 0 } = $$props;
  let { desc = void 0 } = $$props;
  let { bg = void 0 } = $$props;
  let { classes = void 0 } = $$props;
  let { responsive = false } = $$props;
  let wrapper;
  let showContent = "preview";
  let htmlSlot;
  let jsxSlot;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  $$result.css.add(css);
  titleStr = title ? title.replace(/[ ]/g, "-").replace(
    /[^A-Za-z0-9-]/g,
    ""
    // replace all non-alphanumeric chars
  ).toLowerCase() : "";
  return `<div class="component-preview not-prose text-base-content my-6 lg:my-12"${add_attribute("id", titleStr, 0)}${add_attribute("this", wrapper, 0)}>${title ? `<div class="pb-2 text-sm font-bold"><a class="opacity-20 hover:opacity-60"${add_attribute("href", `#${titleStr}`, 0)}>#</a> <span class="component-preview-title">${escape(title)}</span></div>` : ``} ${desc ? `<div class="pb-2 text-xs opacity-70">${escape(desc)}</div>` : ``} <div class="grid"><div class="tabs z-10 -mb-px"><button${add_attribute(
    "class",
    `tab tab-lifted ${"tab-active [--tab-bg:hsl(var(--b1))]"}`,
    0
  )}>${validate_component(Translate, "Translate").$$render($$result, { text: "Preview" }, {}, {})}</button> <button${add_attribute(
    "class",
    `tab tab-lifted ${"[--tab-border-color:transparent]"}`,
    0
  )}>HTML</button> <button${add_attribute(
    "class",
    `tab tab-lifted ${"[--tab-border-color:transparent]"}`,
    0
  )}>JSX</button> <div class="tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]"></div></div> ${`<div class="bg-base-300 rounded-b-box rounded-tr-box relative overflow-x-auto"><div class="${[
    "preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 " + escape(classes, true),
    responsive ? "resize-x" : ""
  ].join(" ").trim()}"${add_attribute("style", bg ? `background-image: url(${bg})` : ``, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`} ${onMount && showContent == "html" ? `<div class="grid"><div class="hidden"${add_attribute("this", htmlSlot, 0)}>${slots.html ? slots.html({}) : ``}</div> <div class="code-wrapper col-start-1 row-start-1">${validate_component(missing_component, "svelte:component").$$render($$result, { language: "html" }, {}, {
    default: () => {
      return `${slots.html ? slots.html({}) : ``}`;
    }
  })}</div> <div class="col-start-1 row-start-1 flex items-start justify-end p-2"><div${add_attribute("data-tip", "copy", 0)} class="tooltip tooltip-left tooltip-accent"><button class="btn btn-square btn-sm btn-neutral">${`<svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"></path></svg>`}</button></div></div></div>` : ``} ${onMount && showContent == "jsx" ? `<div class="grid"><div class="hidden"${add_attribute("this", jsxSlot, 0)}>${$$slots.jsx ? `<pre>${slots.jsx ? slots.jsx({}) : ``}</pre>` : `<pre>${slots.html ? slots.html({}) : ``}</pre>`}</div> <div class="code-wrapper col-start-1 row-start-1">${validate_component(missing_component, "svelte:component").$$render($$result, { language: "svelte" }, {}, {
    default: () => {
      return `<div>${$$slots.jsx ? `${slots.jsx ? slots.jsx({}) : ``}` : `${slots.html ? slots.html({}) : ``}`}</div>`;
    }
  })}</div> <div class="col-start-1 row-start-1 flex items-start justify-end p-2"><div${add_attribute("data-tip", "copy", 0)} class="tooltip tooltip-left tooltip-accent"><button class="btn btn-square btn-sm btn-neutral">${`<svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"></path></svg>`}</button></div></div></div>` : ``}</div> </div>`;
});
const prefix = writable("");
const PrefixEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prefix, $$unsubscribe_prefix;
  $$unsubscribe_prefix = subscribe(prefix, (value) => $prefix = value);
  debounce(
    (e) => {
      if (e.target.value !== $prefix) {
        prefix.set(e.target.value);
      }
    },
    500
  );
  $$unsubscribe_prefix();
  return `<div class="tooltip tooltip-right font-normal" data-tip="Add custom prefix"><input class="input input-bordered input-xs w-min max-w-[3.8rem]" type="text" placeholder="prefix–"${add_attribute("value", $prefix, 0)}></div>`;
});
const ClassTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prefix, $$unsubscribe_prefix;
  let $t, $$unsubscribe_t;
  $$unsubscribe_prefix = subscribe(prefix, (value) => $prefix = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_prefix();
  $$unsubscribe_t();
  return `<div class="not-prose relative mb-10 mt-6 max-h-[25rem] overflow-x-auto"><table class="table-xs md:table-sm table-pin-rows table w-full"><thead><tr class="border-b-0"><th class="bg-base-200 rounded-l-box flex items-center gap-2 normal-case lg:py-3">${validate_component(PrefixEdit, "PrefixEdit").$$render($$result, {}, {}, {})} <span>${validate_component(Translate, "Translate").$$render($$result, { text: "Class name" }, {}, {})}</span></th> <th class="bg-base-200 normal-case lg:py-3">${validate_component(Translate, "Translate").$$render($$result, { text: "Type" }, {}, {})}</th> <th class="bg-base-200 rounded-r-box lg:py-3"></th></tr></thead> <tbody>${$prefix ? `<tr><td colspan="3" class="!px-0"><div class="text-info-content bg-info relative inline-flex items-center gap-2 rounded-lg p-2 px-3"><svg class="fill-info absolute -top-1.5 left-8 scale-x-150" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 512 512"><polygon points="256 32 20 464 492 464 256 32"></polygon></svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content h-4 w-4 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div class="text-xs">${validate_component(Translate, "Translate").$$render(
    $$result,
    {
      text: "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>"
    },
    {},
    {}
  )}</div></div></td></tr>` : ``} ${each(data, (item, index) => {
    return `<tr><th class="w-3/12 font-normal"><span class="whitespace-nowrap font-mono lowercase">${escape(`${$prefix}${item.class}`)}</span></th> <td class="w-1/12">${item.type == "component" ? `<span class="badge badge-sm badge-ghost w-24 whitespace-nowrap">${validate_component(Translate, "Translate").$$render($$result, { text: "Component" }, {}, {})} </span>` : ``} ${item.type == "modifier" ? `<div class="tooltip cursor-help"${add_attribute("data-tip", $t("Changes the style of a component"), 0)}><span class="badge badge-sm badge-outline w-24 whitespace-nowrap">${validate_component(Translate, "Translate").$$render($$result, { text: "Modifier" }, {}, {})}</span> </div>` : ``} ${item.type == "responsive" ? `<div class="tooltip cursor-help"${add_attribute("data-tip", $t("Supports responsive prefixes (sm:, lg:, …)"), 0)}><span class="badge badge-sm badge-success w-24 whitespace-nowrap">${validate_component(Translate, "Translate").$$render($$result, { text: "Responsive" }, {}, {})}</span> </div>` : ``}</td> <td class="w-8/12 min-w-[20rem]">${escape(item.desc)}</td> </tr>`;
  })}</tbody></table> <div class="bg-base-100 pointer-events-none sticky bottom-0 -mt-6 flex h-16 [mask-image:linear-gradient(transparent,#000000)]"></div></div>`;
});
export {
  ClassTable as C,
  Mdsvex_components as M,
  Component as a,
  prefix as p
};
