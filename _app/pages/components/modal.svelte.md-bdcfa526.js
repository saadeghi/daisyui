import{S as T,i as Y,s as q,w as _,k as E,x as y,m as M,y as g,g as d,q as v,o as x,B as k,d as m,J as B,e as p,t as u,c as f,a as h,h as $,b as i,H as b,a1 as A,P as I}from"../../chunks/vendor-df54b326.js";import{C as D,a as P,r as S}from"../../chunks/actions-3c65db6c.js";import{p as F}from"../../chunks/PrefixEdit-657e5948.js";import"../../chunks/preload-helper-ec9aa979.js";function J(r){let e,s;return{c(){e=p("label"),s=u("open modal"),this.h()},l(o){e=f(o,"LABEL",{for:!0,class:!0});var a=h(e);s=$(a,"open modal"),a.forEach(m),this.h()},h(){i(e,"for","my-modal"),i(e,"class","btn modal-button")},m(o,a){d(o,e,a),b(e,s)},d(o){o&&m(e)}}}function L(r){let e,s=`<!-- The button to open modal -->
<label for="my-modal" class="$$btn $$modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="$$modal-toggle">
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="$$modal-action">
      <label for="my-modal" class="$$btn">Yay!</label>
    </div>
  </div>
</div>`,o,a,n,c;return{c(){e=p("pre"),o=u(s),this.h()},l(t){e=f(t,"PRE",{slot:!0});var l=h(e);o=$(l,s),l.forEach(m),this.h()},h(){i(e,"slot","html")},m(t,l){d(t,e,l),b(e,o),n||(c=A(a=S.call(null,e,{to:r[0]})),n=!0)},p(t,l){a&&I(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&m(e),n=!1,c()}}}function R(r){let e,s;return{c(){e=p("a"),s=u("open modal"),this.h()},l(o){e=f(o,"A",{href:!0,class:!0,rel:!0});var a=h(e);s=$(a,"open modal"),a.forEach(m),this.h()},h(){i(e,"href","#my-modal-2"),i(e,"class","btn"),i(e,"rel","external")},m(o,a){d(o,e,a),b(e,s)},d(o){o&&m(e)}}}function W(r){let e,s=`<!-- The button to open modal -->
<a href="#my-modal-2" class="$$btn">open modal</a>
<!-- Put this part before </body> tag -->
<div class="$$modal" id="my-modal-2">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="$$modal-action">
     <a href="#" class="$$btn">Yay!</a>
    </div>
  </div>
</div>`,o,a,n,c;return{c(){e=p("pre"),o=u(s),this.h()},l(t){e=f(t,"PRE",{slot:!0});var l=h(e);o=$(l,s),l.forEach(m),this.h()},h(){i(e,"slot","html")},m(t,l){d(t,e,l),b(e,o),n||(c=A(a=S.call(null,e,{to:r[0]})),n=!0)},p(t,l){a&&I(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&m(e),n=!1,c()}}}function H(r){let e,s,o,a,n,c;return e=new D({props:{data:[{type:"component",class:"modal",desc:"Container element"},{type:"component",class:"modal-box",desc:"The content of modal"},{type:"component",class:"modal-action",desc:"Container for modal buttons"},{type:"component",class:"modal-toggle",desc:"For checkbox that controls modal"},{type:"component",class:"modal-button",desc:"For <label> that checks the checkbox to opens/closes modal"},{type:"modifier",class:"modal-open",desc:"Add/remove this class to open/close the modal using JS"}]}}),o=new P({props:{title:"Modal using label + hidden checkbox",desc:'Make sure each modal you use, has a unique ID. In this example, ID is "my-modal".',$$slots:{html:[L],default:[J]},$$scope:{ctx:r}}}),n=new P({props:{title:"Modal using anchor link",desc:"Anchor links might not work well on some SPA frameworks so if there are problems, use the first example",$$slots:{html:[W],default:[R]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment),s=E(),_(o.$$.fragment),a=E(),_(n.$$.fragment)},l(t){y(e.$$.fragment,t),s=M(t),y(o.$$.fragment,t),a=M(t),y(n.$$.fragment,t)},m(t,l){g(e,t,l),d(t,s,l),g(o,t,l),d(t,a,l),g(n,t,l),c=!0},p(t,[l]){const w={};l&3&&(w.$$scope={dirty:l,ctx:t}),o.$set(w);const C={};l&3&&(C.$$scope={dirty:l,ctx:t}),n.$set(C)},i(t){c||(v(e.$$.fragment,t),v(o.$$.fragment,t),v(n.$$.fragment,t),c=!0)},o(t){x(e.$$.fragment,t),x(o.$$.fragment,t),x(n.$$.fragment,t),c=!1},d(t){k(e,t),t&&m(s),k(o,t),t&&m(a),k(n,t)}}}const O={title:"Modal",desc:"Modal is used to show a dialog or a box when you click a button.",published:!0};function j(r,e,s){let o;return B(r,F,a=>s(0,o=a)),[o]}class Q extends T{constructor(e){super();Y(this,e,j,H,q,{})}}export{Q as default,O as metadata};
