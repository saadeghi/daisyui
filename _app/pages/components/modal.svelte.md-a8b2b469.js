import{S as P,i as S,s as T,w as _,k as E,x as y,m as M,y as g,g as d,q as v,o as x,B as k,d as r,e as p,t as h,c as u,a as f,h as b,b as m,H as $,L as I}from"../../chunks/vendor-bfed1aed.js";import{C as Y,a as A}from"../../chunks/ClassTable-225b3e1d.js";import"../../chunks/preload-helper-ec9aa979.js";import"../../chunks/stores-7e0df911.js";function q(c){let e,s;return{c(){e=p("label"),s=h("open modal"),this.h()},l(t){e=u(t,"LABEL",{for:!0,class:!0});var a=f(e);s=b(a,"open modal"),a.forEach(r),this.h()},h(){m(e,"for","my-modal"),m(e,"class","btn modal-button")},m(t,a){d(t,e,a),$(e,s)},d(t){t&&r(e)}}}function L(c){let e,s=`<!-- The button to open modal -->
<label for="my-modal" class="btn modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle">
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>`,t;return{c(){e=p("pre"),t=h(s),this.h()},l(a){e=u(a,"PRE",{slot:!0});var l=f(e);t=b(l,s),l.forEach(r),this.h()},h(){m(e,"slot","html")},m(a,l){d(a,e,l),$(e,t)},p:I,d(a){a&&r(e)}}}function B(c){let e,s;return{c(){e=p("a"),s=h("open modal"),this.h()},l(t){e=u(t,"A",{href:!0,class:!0,rel:!0});var a=f(e);s=b(a,"open modal"),a.forEach(r),this.h()},h(){m(e,"href","#my-modal-2"),m(e,"class","btn"),m(e,"rel","external")},m(t,a){d(t,e,a),$(e,s)},d(t){t&&r(e)}}}function D(c){let e,s=`<!-- The button to open modal -->
<a href="#my-modal-2" class="btn">open modal</a>
<!-- Put this part before </body> tag -->
<div class="modal" id="my-modal-2">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
     <a href="#" class="btn">Yay!</a>
    </div>
  </div>
</div>`,t;return{c(){e=p("pre"),t=h(s),this.h()},l(a){e=u(a,"PRE",{slot:!0});var l=f(e);t=b(l,s),l.forEach(r),this.h()},h(){m(e,"slot","html")},m(a,l){d(a,e,l),$(e,t)},p:I,d(a){a&&r(e)}}}function F(c){let e,s,t,a,l,i;return e=new Y({props:{data:[{type:"component",class:"modal",desc:"Container element"},{type:"component",class:"modal-box",desc:"The content of modal"},{type:"component",class:"modal-action",desc:"Container for modal buttons"},{type:"component",class:"modal-toggle",desc:"For checkbox that controls modal"},{type:"component",class:"modal-button",desc:"For <label> that checks the checkbox to opens/closes modal"},{type:"modifier",class:"modal-open",desc:"Add/remove this class to open/close the modal using JS"}]}}),t=new A({props:{title:"Modal using label + hidden checkbox",desc:'Make sure each modal you use, has a unique ID. In this example, ID is "my-modal".',$$slots:{html:[L],default:[q]},$$scope:{ctx:c}}}),l=new A({props:{title:"Modal using anchor link",desc:"Anchor links might not work well on some SPA frameworks so if there are problems, use the first example",$$slots:{html:[D],default:[B]},$$scope:{ctx:c}}}),{c(){_(e.$$.fragment),s=E(),_(t.$$.fragment),a=E(),_(l.$$.fragment)},l(o){y(e.$$.fragment,o),s=M(o),y(t.$$.fragment,o),a=M(o),y(l.$$.fragment,o)},m(o,n){g(e,o,n),d(o,s,n),g(t,o,n),d(o,a,n),g(l,o,n),i=!0},p(o,[n]){const w={};n&1&&(w.$$scope={dirty:n,ctx:o}),t.$set(w);const C={};n&1&&(C.$$scope={dirty:n,ctx:o}),l.$set(C)},i(o){i||(v(e.$$.fragment,o),v(t.$$.fragment,o),v(l.$$.fragment,o),i=!0)},o(o){x(e.$$.fragment,o),x(t.$$.fragment,o),x(l.$$.fragment,o),i=!1},d(o){k(e,o),o&&r(s),k(t,o),o&&r(a),k(l,o)}}}const j={title:"Modal",desc:"Modal is used to show a dialog or a box when you click a button.",published:!0};class z extends P{constructor(e){super();S(this,e,null,F,T,{})}}export{z as default,j as metadata};
