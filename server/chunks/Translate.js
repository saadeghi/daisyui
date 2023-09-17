import { c as create_ssr_component, a as subscribe } from "./ssr.js";
import { t } from "./i18n.js";
const Translate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { text } = $$props;
  let { variables = {} } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.variables === void 0 && $$bindings.variables && variables !== void 0)
    $$bindings.variables(variables);
  $$unsubscribe_t();
  return `<!-- HTML_TAG_START -->${$t(text, variables)}<!-- HTML_TAG_END -->`;
});
export {
  Translate as T
};
