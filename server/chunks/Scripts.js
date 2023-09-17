import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each, f as add_classes, g as compute_rest_props, h as createEventDispatcher, i as spread, j as escape_object, k as escape_attribute_value, l as compute_slots, v as validate_component } from "./ssr.js";
import { t, b as themes, c as currentLang, l as langs, p as pages, r as readEnv } from "./i18n.js";
import "theme-change";
import { p as page } from "./stores.js";
import fuzzy from "fuzzy";
const tailwind = "";
const prismMaterialDark = "";
const prismThemesModify = "";
const ThemeChange = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { dropdownClasses = "" } = $$props;
  let { btnClasses = "btn-ghost" } = $$props;
  let { contentClasses = "mt-16" } = $$props;
  if ($$props.dropdownClasses === void 0 && $$bindings.dropdownClasses && dropdownClasses !== void 0)
    $$bindings.dropdownClasses(dropdownClasses);
  if ($$props.btnClasses === void 0 && $$bindings.btnClasses && btnClasses !== void 0)
    $$bindings.btnClasses(btnClasses);
  if ($$props.contentClasses === void 0 && $$bindings.contentClasses && contentClasses !== void 0)
    $$bindings.contentClasses(contentClasses);
  $$unsubscribe_t();
  return `<div title="Change Theme"${add_attribute("class", `dropdown dropdown-end ${dropdownClasses}`, 0)}><div tabindex="0"${add_attribute("class", `btn normal-case ${btnClasses}`, 0)}><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-5 w-5 stroke-current md:hidden"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg> <span class="hidden font-normal md:inline">${escape($t("change-theme-btn"))}</span> <svg width="12px" height="12px" class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg></div> <div${add_attribute("class", `dropdown-content bg-base-200 text-base-content rounded-box top-px h-[70vh] max-h-96 w-56 overflow-y-auto shadow ${contentClasses}`, 0)}><div class="grid grid-cols-1 gap-3 p-3" tabindex="0">${each(themes, (theme) => {
    return `<button class="outline-base-content overflow-hidden rounded-lg text-left"${add_attribute("data-set-theme", theme.id, 0)} data-act-class="[&_svg]:visible"><div${add_attribute("data-theme", theme.id, 0)} class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="invisible h-3 w-3 shrink-0"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg> <div class="flex-grow text-sm">${escape(theme.id)}</div> <div class="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l"><div class="bg-primary w-2 rounded"></div> <div class="bg-secondary w-2 rounded"></div> <div class="bg-accent w-2 rounded"></div> <div class="bg-neutral w-2 rounded"></div> </div></div> </div></div> </button>`;
  })} <a class="outline-base-content overflow-hidden rounded-lg" href="/theme-generator/"><div class="hover:bg-neutral hover:text-neutral-content w-full cursor-pointer font-sans"><div class="flex gap-2 p-3"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 512 512"><path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"></path><line x1="90.25" y1="90.25" x2="124.19" y2="124.19"></line><path d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z"></path><path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z"></path><line x1="293.89" y1="90.25" x2="259.95" y2="124.19"></line><path d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z"></path><line x1="124.19" y1="259.95" x2="90.25" y2="293.89"></line><path d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z"></path><path d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z"></path><path d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z"></path></svg> <div class="flex-grow text-sm font-bold">${escape($t("Make your theme"))}!</div></div></div></a></div></div></div>`;
});
const LangChange = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $currentLang, $$unsubscribe_currentLang;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_currentLang = subscribe(currentLang, (value) => $currentLang = value);
  $$unsubscribe_t();
  $$unsubscribe_currentLang();
  return `<div title="Change Language" class="dropdown dropdown-end"><div tabindex="0" class="btn btn-ghost normal-case" data-svelte-h="svelte-16sc62l"><svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path><path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path></svg> <svg width="12px" height="12px" class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg></div> <div class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 w-56 overflow-y-auto shadow"><ul class="menu menu-sm gap-1" tabindex="0">${each(langs, (langItem) => {
    return `${$t("__name", {}, langItem, false) !== "__name" ? `<li><button${add_classes(($currentLang == langItem ? "active" : "").trim())}>${$t("__code", {}, langItem, false) !== "__code" ? `<span class="badge badge-sm badge-outline font-mono !text-[.6rem] pt-px opacity-50 font-bold tracking-widest !pr-1 !pl-1.5">${escape($t("__code", {}, langItem))} </span>` : ``} ${escape($t("__name", {}, langItem))} ${$t("__status", {}, langItem) !== "__status" && $t("__status", {}, langItem) !== "" ? `<span class="badge badge-sm badge-ghost">${escape($t("__status", {}, langItem))} </span>` : ``}</button> </li>` : ``}`;
  })}</ul></div></div>`;
});
const Search_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: ".hide-label.svelte-wqugyy{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}",
  map: null
};
const Search$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "value",
    "autofocus",
    "debounce",
    "label",
    "hideLabel",
    "id",
    "ref",
    "removeFormAriaAttributes"
  ]);
  let { value = "" } = $$props;
  let { autofocus = false } = $$props;
  let { debounce = 0 } = $$props;
  let { label = "Label" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "search" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  let { removeFormAriaAttributes = false } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.debounce === void 0 && $$bindings.debounce && debounce !== void 0)
    $$bindings.debounce(debounce);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.removeFormAriaAttributes === void 0 && $$bindings.removeFormAriaAttributes && removeFormAriaAttributes !== void 0)
    $$bindings.removeFormAriaAttributes(removeFormAriaAttributes);
  $$result.css.add(css$2);
  return `<form data-svelte-search${add_attribute("role", removeFormAriaAttributes ? null : "search", 0)}${add_attribute("aria-labelledby", removeFormAriaAttributes ? null : id, 0)}><label id="${escape(id, true) + "-label"}"${add_attribute("for", id, 0)} class="${["svelte-wqugyy", hideLabel ? "hide-label" : ""].join(" ").trim()}">${slots.label ? slots.label({}) : `${escape(label)}`}</label> <input${spread(
    [
      { name: "search" },
      { type: "search" },
      { placeholder: "Search..." },
      { autocomplete: "off" },
      { spellcheck: "false" },
      escape_object($$restProps),
      { id: escape_attribute_value(id) }
    ],
    { classes: "svelte-wqugyy" }
  )}${add_attribute("this", ref, 0)}${add_attribute("value", value, 0)}> </form>`;
});
const Search$2 = Search$1;
const Typeahead_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '[data-svelte-typeahead].svelte-4tg1b1.svelte-4tg1b1{position:relative;background-color:#fff}ul.svelte-4tg1b1.svelte-4tg1b1{position:absolute;top:100%;left:0;width:100%;margin:0;padding:0;list-style:none;background-color:inherit;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1)}[aria-expanded="true"].svelte-4tg1b1 ul.svelte-4tg1b1{z-index:1}li.svelte-4tg1b1.svelte-4tg1b1,.no-results.svelte-4tg1b1.svelte-4tg1b1{padding:0.25rem 1rem}li.svelte-4tg1b1.svelte-4tg1b1{cursor:pointer}li.svelte-4tg1b1.svelte-4tg1b1:not(:last-of-type){border-bottom:1px solid #e0e0e0}li.svelte-4tg1b1.svelte-4tg1b1:hover{background-color:#e5e5e5}.selected.svelte-4tg1b1.svelte-4tg1b1{background-color:#e5e5e5}.selected.svelte-4tg1b1.svelte-4tg1b1:hover{background-color:#cacaca}.disabled.svelte-4tg1b1.svelte-4tg1b1{opacity:0.4;cursor:not-allowed}[data-svelte-search] label{margin-bottom:0.25rem;display:inline-flex;font-size:0.875rem}[data-svelte-search] input{width:100%;padding:0.5rem 0.75rem;background:none;font-size:1rem;border:0;border-radius:0;border:1px solid #e5e5e5}[data-svelte-search] input:focus{outline-color:#0f62fe;outline-offset:2px;outline-width:1px}',
  map: null
};
const Typeahead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let showResults;
  let $$restProps = compute_rest_props($$props, [
    "id",
    "value",
    "data",
    "extract",
    "disable",
    "filter",
    "autoselect",
    "inputAfterSelect",
    "results",
    "focusAfterSelect",
    "showDropdownOnFocus",
    "showAllResultsOnFocus",
    "limit"
  ]);
  let $$slots = compute_slots(slots);
  let { id = "typeahead-" + Math.random().toString(36) } = $$props;
  let { value = "" } = $$props;
  let { data = [] } = $$props;
  let { extract = (item) => item } = $$props;
  let { disable = (item) => false } = $$props;
  let { filter = (item) => false } = $$props;
  let { autoselect = true } = $$props;
  let { inputAfterSelect = "update" } = $$props;
  let { results = [] } = $$props;
  let { focusAfterSelect = false } = $$props;
  let { showDropdownOnFocus = false } = $$props;
  let { showAllResultsOnFocus = false } = $$props;
  let { limit = Infinity } = $$props;
  createEventDispatcher();
  let comboboxRef = null;
  let searchRef = null;
  let hideDropdown = false;
  let selectedIndex = -1;
  let isFocused = false;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.extract === void 0 && $$bindings.extract && extract !== void 0)
    $$bindings.extract(extract);
  if ($$props.disable === void 0 && $$bindings.disable && disable !== void 0)
    $$bindings.disable(disable);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.autoselect === void 0 && $$bindings.autoselect && autoselect !== void 0)
    $$bindings.autoselect(autoselect);
  if ($$props.inputAfterSelect === void 0 && $$bindings.inputAfterSelect && inputAfterSelect !== void 0)
    $$bindings.inputAfterSelect(inputAfterSelect);
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  if ($$props.focusAfterSelect === void 0 && $$bindings.focusAfterSelect && focusAfterSelect !== void 0)
    $$bindings.focusAfterSelect(focusAfterSelect);
  if ($$props.showDropdownOnFocus === void 0 && $$bindings.showDropdownOnFocus && showDropdownOnFocus !== void 0)
    $$bindings.showDropdownOnFocus(showDropdownOnFocus);
  if ($$props.showAllResultsOnFocus === void 0 && $$bindings.showAllResultsOnFocus && showAllResultsOnFocus !== void 0)
    $$bindings.showAllResultsOnFocus(showAllResultsOnFocus);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    options = { pre: "<mark>", post: "</mark>", extract };
    results = fuzzy.filter(value, data, options).filter(({ score }) => score > 0).slice(0, limit).filter((result) => !filter(result.original)).map((result) => ({
      ...result,
      disabled: disable(result.original)
    }));
    results.map((result) => extract(result.original)).join("");
    showResults = results.length > 0;
    {
      if (showDropdownOnFocus) {
        showResults = showResults && isFocused;
      }
    }
    $$rendered = ` <div data-svelte-typeahead role="combobox" aria-haspopup="listbox" aria-controls="${escape(id, true) + "-listbox"}"${add_attribute("aria-expanded", showResults, 0)} id="${escape(id, true) + "-typeahead"}" class="${["svelte-4tg1b1", results.length > 0 ? "dropdown" : ""].join(" ").trim()}"${add_attribute("this", comboboxRef, 0)}>${validate_component(Search$2, "Search").$$render(
      $$result,
      Object.assign(
        {},
        { id },
        { removeFormAriaAttributes: true },
        $$restProps,
        { "aria-autocomplete": "list" },
        { "aria-controls": id + "-listbox" },
        { "aria-labelledby": id + "-label" },
        {
          "aria-activedescendant": null
        },
        { ref: searchRef },
        { value }
      ),
      {
        ref: ($$value) => {
          searchRef = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )} <ul role="listbox" aria-labelledby="${escape(id, true) + "-label"}" id="${escape(id, true) + "-listbox"}" class="${["svelte-4tg1b1", "svelte-typeahead-list"].join(" ").trim()}">${showResults ? `${each(results, (result, index) => {
      return ` <li role="option" id="${escape(id, true) + "-result-" + escape(index, true)}"${add_attribute("aria-selected", selectedIndex === index, 0)} class="${[
        "svelte-4tg1b1",
        (selectedIndex === index ? "selected" : "") + " " + (result.disabled ? "disabled" : "")
      ].join(" ").trim()}">${slots.default ? slots.default({ result, index, value }) : ` <!-- HTML_TAG_START -->${result.string}<!-- HTML_TAG_END --> `} </li>`;
    })}` : ``} ${$$slots["no-results"] && !hideDropdown && value.length > 0 && results.length === 0 ? `<div class="${["svelte-4tg1b1", "no-results"].join(" ").trim()}">${slots["no-results"] ? slots["no-results"]({ value }) : ``}</div>` : ``}</ul> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Search_svelte_svelte_type_style_lang = "";
const css = {
  code: '.searchbox.searchbox [data-svelte-typeahead][data-svelte-typeahead]{background-color:transparent;width:100%;max-width:100%}[data-svelte-search][data-svelte-search] label{display:none}[data-svelte-search][data-svelte-search] input{background-color:transparent;color:inherit;border:2px solid transparent;border-radius:var(--rounded-btn);padding-left:2.5em}[data-svelte-search][data-svelte-search] input::placeholder{color:inherit}[data-svelte-search][data-svelte-search] input:focus{outline:none;outline-offset:0;border:2px solid hsl(var(--bc) / 0.2);background-color:hsl(var(--b1));color:hsl(var(--bc))}[data-svelte-typeahead][data-svelte-typeahead].dropdown[aria-expanded="true"]\n .svelte-typeahead-list{transform:translateY(0.5em);background:hsl(var(--b1) / 0.99);border:0 solid hsl(var(--bc) / 0.2);border-radius:var(--rounded-box);overflow:hidden;padding:0.5rem;backdrop-filter:blur(1rem);margin-top:0.5rem;box-shadow:rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px}[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list .selected,[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list .selected:hover{background:hsl(var(--n));color:hsl(var(--nc))}[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list li{color:hsl(var(--bc));border-radius:var(--rounded-btn)}[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list li:hover{background:hsl(var(--b2));color:hsl(var(--bc))}[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list li:not(:last-of-type){border-bottom:none}',
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  createEventDispatcher();
  let searchIndex = [];
  pages.forEach((group) => {
    group.items.forEach((item) => {
      searchIndex.push(item);
    });
  });
  let os;
  let seachboxEl;
  let { addScrollPaddingToNavbar } = $$props;
  let { removeScrollPaddingFromNavbar } = $$props;
  if ($$props.addScrollPaddingToNavbar === void 0 && $$bindings.addScrollPaddingToNavbar && addScrollPaddingToNavbar !== void 0)
    $$bindings.addScrollPaddingToNavbar(addScrollPaddingToNavbar);
  if ($$props.removeScrollPaddingFromNavbar === void 0 && $$bindings.removeScrollPaddingFromNavbar && removeScrollPaddingFromNavbar !== void 0)
    $$bindings.removeScrollPaddingFromNavbar(removeScrollPaddingFromNavbar);
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `  <label${add_attribute("class", `searchbox relative mx-3 w-full`, 0)}${add_attribute("this", seachboxEl, 0)}><svg${add_attribute(
    "class",
    `pointer-events-none absolute z-10 my-3.5 ml-4 stroke-current opacity-60 ${$page.url.pathname == "/" ? "text-current" : "text-base-content"}`,
    0
  )} width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> ${validate_component(Typeahead, "Typeahead").$$render(
    $$result,
    {
      placeholder: $t("Search") + "…",
      limit: 8,
      label: "Search",
      data: searchIndex,
      extract: (item) => item.tags,
      inputAfterSelect: "clear"
    },
    {},
    {
      default: ({ result }) => {
        return `<div class="py-1 text-sm font-normal">${escape(searchIndex[result.index].name)}</div>`;
      }
    }
  )} <div${add_attribute("class", `pointer-events-none absolute right-10 top-2.5 gap-1 opacity-50 ${$page.url.pathname == "/" ? "hidden" : "hidden lg:flex"}`, 0)}>${["macos"].includes(os) ? `<kbd class="kbd kbd-sm" data-svelte-h="svelte-1pv9l7m">⌘</kbd> <kbd class="kbd kbd-sm" data-svelte-h="svelte-8gtzw5">K</kbd>` : `${["windows", "linux"].includes(os) ? `<kbd class="kbd kbd-sm" data-svelte-h="svelte-mabxvd">ctrl</kbd> <kbd class="kbd kbd-sm" data-svelte-h="svelte-8gtzw5">K</kbd>` : ``}`}</div> </label>`;
});
const LogoContextMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pos = { x: 0, y: 0 };
  let showMenu = false;
  function openContextMenu(e) {
    showMenu = true;
    pos = { x: e.clientX, y: e.clientY };
  }
  if ($$props.openContextMenu === void 0 && $$bindings.openContextMenu && openContextMenu !== void 0)
    $$bindings.openContextMenu(openContextMenu);
  return `${showMenu ? `<ul style="${"top:" + escape(pos.y, true) + "px; left:" + escape(pos.x, true) + "px"}" class="menu menu-sm bg-base-100 border-base-300 rounded-box absolute z-[99] border p-2 shadow"><li class="menu-title" data-svelte-h="svelte-12616rw">Download daisyUI Logo</li> <li data-svelte-h="svelte-113rx7z"><a rel="noopener, noreferrer" target="_blank" href="/images/daisyui-logo/daisyui-logomark.svg">SVG logo</a></li> <li data-svelte-h="svelte-30by7i"><a rel="noopener, noreferrer" target="_blank" href="/images/daisyui-logo/daisyui-logotype.svg">SVG logotype</a></li> <li></li> <li data-svelte-h="svelte-1q0jnxf"><a rel="noopener, noreferrer" target="_blank" href="/images/daisyui-logo/daisyui-logomark-1024-1024.png">PNG logo</a></li> <li data-svelte-h="svelte-x3bhd8"><a rel="noopener, noreferrer" target="_blank" href="/images/daisyui-logo/daisyui-logotype-3600-1024.png">PNG logotype</a></li></ul>` : ``} `;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let switchNavbarStyle;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let contextMenuEl;
  let { hideLogoOnLargeScreen = false } = $$props;
  let { hideSidebarButton = false } = $$props;
  let { hideSidebarButtonOnLargeScreen = false } = $$props;
  let { showComponentsBtn = false } = $$props;
  let { showBlogBtn = false } = $$props;
  let { showSearch = false } = $$props;
  let { showVersion = false } = $$props;
  let { showLanguage = false } = $$props;
  let version = readEnv("VITE_DAISYUI_VERSION", "latest");
  let { scrollY } = $$props;
  let { addScrollPaddingToNavbar } = $$props;
  let { removeScrollPaddingFromNavbar } = $$props;
  if ($$props.hideLogoOnLargeScreen === void 0 && $$bindings.hideLogoOnLargeScreen && hideLogoOnLargeScreen !== void 0)
    $$bindings.hideLogoOnLargeScreen(hideLogoOnLargeScreen);
  if ($$props.hideSidebarButton === void 0 && $$bindings.hideSidebarButton && hideSidebarButton !== void 0)
    $$bindings.hideSidebarButton(hideSidebarButton);
  if ($$props.hideSidebarButtonOnLargeScreen === void 0 && $$bindings.hideSidebarButtonOnLargeScreen && hideSidebarButtonOnLargeScreen !== void 0)
    $$bindings.hideSidebarButtonOnLargeScreen(hideSidebarButtonOnLargeScreen);
  if ($$props.showComponentsBtn === void 0 && $$bindings.showComponentsBtn && showComponentsBtn !== void 0)
    $$bindings.showComponentsBtn(showComponentsBtn);
  if ($$props.showBlogBtn === void 0 && $$bindings.showBlogBtn && showBlogBtn !== void 0)
    $$bindings.showBlogBtn(showBlogBtn);
  if ($$props.showSearch === void 0 && $$bindings.showSearch && showSearch !== void 0)
    $$bindings.showSearch(showSearch);
  if ($$props.showVersion === void 0 && $$bindings.showVersion && showVersion !== void 0)
    $$bindings.showVersion(showVersion);
  if ($$props.showLanguage === void 0 && $$bindings.showLanguage && showLanguage !== void 0)
    $$bindings.showLanguage(showLanguage);
  if ($$props.scrollY === void 0 && $$bindings.scrollY && scrollY !== void 0)
    $$bindings.scrollY(scrollY);
  if ($$props.addScrollPaddingToNavbar === void 0 && $$bindings.addScrollPaddingToNavbar && addScrollPaddingToNavbar !== void 0)
    $$bindings.addScrollPaddingToNavbar(addScrollPaddingToNavbar);
  if ($$props.removeScrollPaddingFromNavbar === void 0 && $$bindings.removeScrollPaddingFromNavbar && removeScrollPaddingFromNavbar !== void 0)
    $$bindings.removeScrollPaddingFromNavbar(removeScrollPaddingFromNavbar);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    switchNavbarStyle = scrollY > 40 ? true : false;
    $$rendered = ` <div${add_attribute(
      "class",
      `
  sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content 
  ${switchNavbarStyle && "shadow-sm"}
  `,
      0
    )}><nav class="navbar w-full"><div class="flex flex-1 md:gap-1 lg:gap-2"><span class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Menu"><label aria-label="Open menu" for="drawer"${add_attribute(
      "class",
      `btn btn-square btn-ghost drawer-button ${hideSidebarButtonOnLargeScreen ? "lg:hidden" : ""}
            ${hideSidebarButton ? "hidden" : ""}
          }`,
      0
    )}><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></span> <div${add_attribute("class", `flex items-center gap-2 ${hideLogoOnLargeScreen ? "lg:hidden" : ""}`, 0)}><a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2" data-svelte-h="svelte-11qcss2"><svg class="h-6 w-6 md:h-8 md:w-8" width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg> <div class="font-title inline-flex text-lg md:text-2xl"><span class="lowercase">daisy</span> <span class="uppercase text-[#1AD1A5]">UI</span></div></a> ${validate_component(LogoContextMenu, "LogoContextMenu").$$render(
      $$result,
      { this: contextMenuEl },
      {
        this: ($$value) => {
          contextMenuEl = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${showVersion ? `<div class="dropdown"><label tabindex="0" class="link link-hover my-8 inline-block font-mono text-xs">${escape(version)}</label> <ul tabindex="0" class="dropdown-content menu menu-sm bg-base-200 rounded-box w-36 p-2 shadow" data-svelte-h="svelte-9uoigy"><li><a href="/docs/changelog/">Changelog</a></li> <li></li> <li><a target="_blank" rel="noopener, noreferrer" href="https://v2.daisyui.com/">Version 2.x</a></li> <li><a target="_blank" rel="noopener, noreferrer" href="https://v1.daisyui.com/">Version 1.x</a></li></ul></div>` : ``}</div> ${slots.default ? slots.default({}) : ``} ${showSearch ? `<div class="hidden w-full max-w-sm lg:flex">${validate_component(Search, "Search").$$render(
      $$result,
      {
        removeScrollPaddingFromNavbar,
        addScrollPaddingToNavbar
      },
      {},
      {}
    )}</div>` : ``}</div> <div class="flex-0">${showComponentsBtn ? `<div${add_attribute("class", `hidden flex-none items-center lg:block`, 0)}><a data-sveltekit-preload-data="hover" href="/components/" class="btn btn-ghost drawer-button font-normal normal-case"> ${escape($t("components-btn"))}</a></div>` : ``} ${showBlogBtn ? `<div${add_attribute("class", `hidden flex-none items-center lg:block`, 0)} data-svelte-h="svelte-13vs4g"><a data-sveltekit-preload-data="hover" href="/blog/" class="btn btn-ghost drawer-button font-normal normal-case">Blog</a></div>` : ``} ${validate_component(ThemeChange, "ThemeChange").$$render($$result, {}, {}, {})} ${showLanguage ? `${validate_component(LangChange, "LangChange").$$render($$result, {}, {}, {})}` : ``} <span class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)] max-lg:hidden" data-tip="GitHub" data-svelte-h="svelte-1v88l1d"><div class="flex-none items-center"><a aria-label="Github" target="_blank" href="https://github.com/saadeghi/daisyui" rel="noopener, noreferrer" class="btn btn-ghost drawer-button btn-square normal-case"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline-block h-5 w-5 fill-current md:h-6 md:w-6"><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path></svg></a></div></span></div></nav></div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const Scripts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-42l0dw_START -->${readEnv("VITE_ADS") == "true" ? `` : ``}${readEnv("VITE_GTM") == "true" ? `<script data-svelte-h="svelte-rpvcwd">;(function (w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({ "gtm.start": new Date().getTime(), "event": "gtm.js" })
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : ""
        j.async = true
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
        f.parentNode.insertBefore(j, f)
      })(window, document, "script", "dataLayer", "G-5N0NM9KW6D")<\/script>` : ``}<!-- HEAD_svelte-42l0dw_END -->`, ""} ${readEnv("VITE_GTM") == "true" ? ` <noscript data-svelte-h="svelte-11ag8wl"><iframe title="GTM" src="https://www.googletagmanager.com/ns.html?id=G-5N0NM9KW6D" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> ` : ``}`;
});
export {
  LogoContextMenu as L,
  Navbar as N,
  Search as S,
  Scripts as a
};
