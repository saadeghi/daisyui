import{o as A,L as P,V,A as E,D as l,C as f,aL as w,Z as g,h as m,aj as I,aw as N}from"./DAwYhius.js";function F(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const j=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function G(t){return j.includes(t)}const D={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function U(t){return t=t.toLowerCase(),D[t]??t}const M=["touchstart","touchmove"];function X(t){return M.includes(t)}const O=["textarea","script","style","title"];function Z(t){return O.includes(t)}function H(t,e){if(e){const r=document.body;t.autofocus=!0,E(()=>{document.activeElement===r&&t.focus()})}}function J(t){A&&P(t)!==null&&V(t)}let y=!1;function W(){y||(y=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function K(t,e,r,n=!0){n&&r();for(var o of e)t.addEventListener(o,r);m(()=>{for(var a of e)t.removeEventListener(a,r)})}function L(t){var e=w,r=g;l(null),f(null);try{return t()}finally{l(e),f(r)}}function Q(t,e,r,n=r){t.addEventListener(e,()=>L(r));const o=t.__on_r;o?t.__on_r=()=>{o(),n(!0)}:t.__on_r=()=>n(!0),W()}const B=new Set,C=new Set;function R(t,e,r,n={}){function o(a){if(n.capture||q.call(e,a),!a.cancelBubble)return L(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?E(()=>{e.addEventListener(t,o,n)}):e.addEventListener(t,o,n),o}function Y(t,e,r,n,o){var a={capture:n,passive:o},i=R(t,e,r,a);(e===document.body||e===window||e===document)&&m(()=>{e.removeEventListener(t,i,a)})}function $(t){for(var e=0;e<t.length;e++)B.add(t[e]);for(var r of C)r(t)}function q(t){var b;var e=this,r=e.ownerDocument,n=t.type,o=((b=t.composedPath)==null?void 0:b.call(t))||[],a=o[0]||t.target,i=0,p=t.__root;if(p){var _=o.indexOf(p);if(_!==-1&&(e===document||e===window)){t.__root=e;return}var v=o.indexOf(e);if(v===-1)return;_<=v&&(i=_)}if(a=o[i]||t.target,a!==e){I(t,"currentTarget",{configurable:!0,get(){return a||r}});var k=w,T=g;l(null),f(null);try{for(var u,h=[];a!==null;){var d=a.assignedSlot||a.parentNode||a.host||null;try{var s=a["__"+n];if(s!=null&&(!a.disabled||t.target===a))if(N(s)){var[S,...x]=s;S.apply(a,[t,...x])}else s.call(a,t)}catch(c){u?h.push(c):u=c}if(t.cancelBubble||d===e||d===null)break;a=d}if(u){for(let c of h)queueMicrotask(()=>{throw c});throw u}}finally{t.__root=e,delete t.currentTarget,l(k),f(T)}}}export{B as a,Q as b,W as c,$ as d,Y as e,F as f,R as g,q as h,X as i,H as j,G as k,K as l,Z as m,U as n,J as o,C as r,L as w};
