import{s as c,g as l}from"./CXAiZ6fo.js";import{a as f,v as o,I as b,g as p,h as d,aj as g}from"./B_Mm4G8F.js";let s=!1,i=Symbol();function y(e,n,r){const u=r[n]??(r[n]={store:null,source:o(void 0),unsubscribe:f});if(u.store!==e&&!(i in r))if(u.unsubscribe(),u.store=e??null,e==null)u.source.v=void 0,u.unsubscribe=f;else{var t=!0;u.unsubscribe=c(e,a=>{t?u.source.v=a:b(u.source,a)}),t=!1}return e&&i in r?l(e):p(u.source)}function m(){const e={};function n(){d(()=>{for(var r in e)e[r].unsubscribe();g(e,i,{enumerable:!1,value:!0})})}return[e,n]}function I(e){var n=s;try{return s=!1,[e(),s]}finally{s=n}}export{y as a,I as c,m as s};
