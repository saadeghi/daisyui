

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c8263dbe.js","_app/immutable/chunks/scheduler.cc1ce551.js","_app/immutable/chunks/index.ffedd617.js","_app/immutable/chunks/stores.a46eee4e.js","_app/immutable/chunks/singletons.98825737.js","_app/immutable/chunks/index.3e418aa1.js"];
export const stylesheets = [];
export const fonts = [];
