

export const index = 60;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(docs)/docs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/60.ccf35fb2.js","_app/immutable/chunks/scheduler.cc1ce551.js","_app/immutable/chunks/index.ffedd617.js"];
export const stylesheets = [];
export const fonts = [];
