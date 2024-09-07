function u(n, i) { return { handler: n, config: i } } u.withOptions = function (n, i = () => ({})) { function t(o) { return { handler: n(o), config: i(o) } } return t.__isOptionsFunction = !0, t };
export const plugin = u
