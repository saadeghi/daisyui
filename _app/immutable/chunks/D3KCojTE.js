import{j as g,k as H,H as L,l as O,m as p,o as c,q as A,u as C,v as _,w as I,x as Y,y as j,z as k,A as M,B as S,C as V,D as $,E as w,p as q,F as z,G as B,a as F}from"./DuQXaRSr.js";import{a as G,r as D,h,i as P}from"./Bz1Tp6uE.js";import{r as W}from"./DAeVVXYV.js";import{d as J}from"./CdYxi-0P.js";let E=!0;function x(t){E=t}function ee(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function K(t,e){return N(t,e)}function te(t,e){g(),e.intro=e.intro??!1;const r=e.target,u=w,l=_;try{for(var a=H(r);a&&(a.nodeType!==8||a.data!==L);)a=O(a);if(!a)throw p;c(!0),A(a),C();const i=N(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==I)throw Y(),p;return c(!1),i}catch(i){if(i===p)return e.recover===!1&&j(),g(),k(r),c(!1),K(t,e);throw i}finally{c(u),A(l),W()}}const d=new Map;function N(t,{target:e,anchor:r,props:u={},events:l,context:a,intro:i=!0}){g();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=P(n);e.addEventListener(n,h,{passive:f});var T=d.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),d.set(n,1)):d.set(n,T+1)}}};y(M(G)),D.add(y);var m=void 0,b=S(()=>{var o=r??e.appendChild(V());return $(()=>{if(a){q({});var s=z;s.c=a}l&&(u.$$events=l),w&&J(o,null),E=i,m=t(o,u)||{},E=!0,w&&(B.nodes_end=_),a&&F()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=d.get(s);--n===0?(document.removeEventListener(s,h),d.delete(s)):d.set(s,n)}D.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(m,b),m}let R=new WeakMap;function re(t,e){const r=R.get(t);return r?(R.delete(t),r(e)):Promise.resolve()}export{E as a,x as b,te as h,K as m,ee as s,re as u};
