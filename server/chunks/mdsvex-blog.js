import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape, d as each } from "./ssr.js";
import { p as page } from "./stores.js";
import { S as SEO } from "./SEO.js";
import { g as formattedDate, h as timeago } from "./i18n.js";
const Mdsvex_blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title, desc, date, author, tags, thumbnail, published } = $$props;
  const slug = $page.url.pathname.split("/").at(-2);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
    $$bindings.thumbnail(thumbnail);
  if ($$props.published === void 0 && $$bindings.published && published !== void 0)
    $$bindings.published(published);
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render($$result, { title, desc, img: thumbnail }, {}, {})} <div class="prose prose-sm md:prose-base mx-auto">${thumbnail ? `<figure class="w-full"><img loading="lazy"${add_attribute("src", thumbnail, 0)} class="border-base-content bg-base-300 rounded-box border border-opacity-5"${add_attribute("alt", title, 0)}${add_attribute("style", `view-transition-name: ${slug.replaceAll("%20", "-")}-img`, 0)}></figure>` : ``} <div${add_attribute("style", `view-transition-name: ${slug.replaceAll("%20", "-")}-text`, 0)}><div class="mb-2 text-xs text-base-content/60"><span${add_attribute("title", formattedDate(date), 0)} class="italic">Published ${escape(timeago(date))}</span> ${author ? `by
        <span>${escape(author)}</span>` : ``}</div> ${title ? `<h1>${escape(title)}</h1>` : ``} ${desc ? `<p>${escape(desc)}</p>` : ``} ${slots.default ? slots.default({}) : ``}</div> ${published && tags ? `<div class="mb-2 text-xs opacity-60 flex flex-wrap gap-2"><span data-svelte-h="svelte-1j0hbyd">Tags:</span> ${each(tags, (tag) => {
    return `<a class="link"${add_attribute("href", `/blog/tag/${tag.replace(/ /g, "-").toLowerCase()}`, 0)}>${escape(tag)} </a>`;
  })}</div>` : ``}</div>`;
});
export {
  Mdsvex_blog as M
};
