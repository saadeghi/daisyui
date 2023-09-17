import { c as create_ssr_component, v as validate_component, d as each, b as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { S as SEO } from "../../../../../chunks/SEO.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SEO, "SEO").$$render($$result, { title: "title", desc: "desc" }, {}, {})} <div class="grid gap-6 justify-items-stretch">${each(posts, (post) => {
    return `<a class="card sm:card-side max-w-sm sm:max-w-none hover:bg-base-200 transition-colors"${add_attribute("href", `/blog/${post.slug}`, 0)}>${post.thumbnail ? `<figure class="sm:max-w-[12rem] w-full object-cover mx-auto sm:pr-0 p-6 max-sm:pb-0"><img loading="lazy"${add_attribute("src", post.thumbnail, 0)} class="border-base-content bg-base-300 rounded-btn border border-opacity-5"${add_attribute("alt", post.title, 0)}${add_attribute("style", `view-transition-name: ${encodeURI(post.slug).replaceAll("%20", "-")}-img`, 0)}> </figure>` : ``} <div class="card-body"${add_attribute("style", `view-transition-name: ${encodeURI(post.slug).replaceAll("%20", "-")}-text`, 0)}><h2 class="card-title">${escape(post.title)}</h2> <p class="text-xs opacity-60">${escape(post.desc)} </p></div> </a>`;
  })}</div>`;
});
export {
  Page as default
};
