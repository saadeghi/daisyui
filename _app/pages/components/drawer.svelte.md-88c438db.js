import{S as Le,i as De,s as Ae,w as K,k as y,e as o,t as A,x as Q,m as E,c as n,a as c,h as P,d as r,b as s,y as W,g as B,H as e,q as X,o as Z,B as ee,J as Pe,a0 as oe,P as ne,F as xe,G as Se}from"../../chunks/vendor-38dc972c.js";import{C as Ve,a as se,r as ce,p as Ne}from"../../chunks/actions-2e8cca18.js";import"../../chunks/preload-helper-ec9aa979.js";function Te(j){let t,p,m,i,d,h,u,l,w,O,b,$,x,S,L,I,g,D;return{c(){t=o("div"),p=o("input"),m=y(),i=o("div"),d=o("label"),h=A("Open drawer"),u=y(),l=o("div"),w=o("label"),O=y(),b=o("ul"),$=o("li"),x=o("a"),S=A("Sidebar Item 1"),L=y(),I=o("li"),g=o("a"),D=A("Sidebar Item 2"),this.h()},l(k){t=n(k,"DIV",{class:!0});var v=c(t);p=n(v,"INPUT",{id:!0,type:!0,class:!0}),m=E(v),i=n(v,"DIV",{class:!0});var C=c(i);d=n(C,"LABEL",{for:!0,class:!0});var N=c(d);h=P(N,"Open drawer"),N.forEach(r),C.forEach(r),u=E(v),l=n(v,"DIV",{class:!0});var V=c(l);w=n(V,"LABEL",{for:!0,class:!0}),c(w).forEach(r),O=E(V),b=n(V,"UL",{class:!0});var _=c(b);$=n(_,"LI",{});var U=c($);x=n(U,"A",{});var a=c(x);S=P(a,"Sidebar Item 1"),a.forEach(r),U.forEach(r),L=E(_),I=n(_,"LI",{});var f=c(I);g=n(f,"A",{});var T=c(g);D=P(T,"Sidebar Item 2"),T.forEach(r),f.forEach(r),_.forEach(r),V.forEach(r),v.forEach(r),this.h()},h(){s(p,"id","my-drawer"),s(p,"type","checkbox"),s(p,"class","drawer-toggle"),s(d,"for","my-drawer"),s(d,"class","btn btn-primary drawer-button"),s(i,"class","flex flex-col items-center justify-center drawer-content"),s(w,"for","my-drawer"),s(w,"class","drawer-overlay"),s(b,"class","menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"),s(l,"class","drawer-side"),s(t,"class","drawer w-full rounded")},m(k,v){B(k,t,v),e(t,p),e(t,m),e(t,i),e(i,d),e(d,h),e(t,u),e(t,l),e(l,w),e(l,O),e(l,b),e(b,$),e($,x),e(x,S),e(b,L),e(b,I),e(I,g),e(g,D)},d(k){k&&r(t)}}}function Be(j){let t,p=`<div class="$$drawer h-screen w-full rounded">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle">
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,m,i,d,h;return{c(){t=o("pre"),m=A(p),this.h()},l(u){t=n(u,"PRE",{slot:!0});var l=c(t);m=P(l,p),l.forEach(r),this.h()},h(){s(t,"slot","html")},m(u,l){B(u,t,l),e(t,m),d||(h=oe(i=ce.call(null,t,{to:j[0]})),d=!0)},p(u,l){i&&ne(i.update)&&l&1&&i.update.call(null,{to:u[0]})},d(u){u&&r(t),d=!1,h()}}}function je(j){let t,p,m,i,d,h,u,l,w,O,b,$,x,S,L,I,g,D;return{c(){t=o("div"),p=o("input"),m=y(),i=o("div"),d=o("label"),h=A("Open drawer"),u=y(),l=o("div"),w=o("label"),O=y(),b=o("ul"),$=o("li"),x=o("a"),S=A("Sidebar Item 1"),L=y(),I=o("li"),g=o("a"),D=A("Sidebar Item 2"),this.h()},l(k){t=n(k,"DIV",{class:!0});var v=c(t);p=n(v,"INPUT",{id:!0,type:!0,class:!0}),m=E(v),i=n(v,"DIV",{class:!0});var C=c(i);d=n(C,"LABEL",{for:!0,class:!0});var N=c(d);h=P(N,"Open drawer"),N.forEach(r),C.forEach(r),u=E(v),l=n(v,"DIV",{class:!0});var V=c(l);w=n(V,"LABEL",{for:!0,class:!0}),c(w).forEach(r),O=E(V),b=n(V,"UL",{class:!0});var _=c(b);$=n(_,"LI",{});var U=c($);x=n(U,"A",{});var a=c(x);S=P(a,"Sidebar Item 1"),a.forEach(r),U.forEach(r),L=E(_),I=n(_,"LI",{});var f=c(I);g=n(f,"A",{});var T=c(g);D=P(T,"Sidebar Item 2"),T.forEach(r),f.forEach(r),_.forEach(r),V.forEach(r),v.forEach(r),this.h()},h(){s(p,"id","my-drawer-2"),s(p,"type","checkbox"),s(p,"class","drawer-toggle"),s(d,"for","my-drawer-2"),s(d,"class","btn btn-primary drawer-button lg:hidden"),s(i,"class","flex flex-col items-center justify-center drawer-content"),s(w,"for","my-drawer-2"),s(w,"class","drawer-overlay"),s(b,"class","menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"),s(l,"class","drawer-side"),s(t,"class","drawer drawer-mobile w-full")},m(k,v){B(k,t,v),e(t,p),e(t,m),e(t,i),e(i,d),e(d,h),e(t,u),e(t,l),e(l,w),e(l,O),e(l,b),e(b,$),e($,x),e(x,S),e(b,L),e(b,I),e(I,g),e(g,D)},d(k){k&&r(t)}}}function Ce(j){let t,p=`<div class="h-screen $$drawer $$drawer-mobile w-full">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle">
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-2" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>`,m,i,d,h;return{c(){t=o("pre"),m=A(p),this.h()},l(u){t=n(u,"PRE",{slot:!0});var l=c(t);m=P(l,p),l.forEach(r),this.h()},h(){s(t,"slot","html")},m(u,l){B(u,t,l),e(t,m),d||(h=oe(i=ce.call(null,t,{to:j[0]})),d=!0)},p(u,l){i&&ne(i.update)&&l&1&&i.update.call(null,{to:u[0]})},d(u){u&&r(t),d=!1,h()}}}function Oe(j){let t,p,m,i,d,h,u,l,w,O,b,$,x,S,L,I,g,D,k,v,C,N,V,_,U,a,f,T,R,M,z,F,ie,de,H,Y,ue;return{c(){t=o("div"),p=o("input"),m=y(),i=o("div"),d=o("div"),h=o("div"),u=o("label"),l=xe("svg"),w=xe("path"),O=y(),b=o("div"),$=A("Navbar Title"),x=y(),S=o("div"),L=o("ul"),I=o("li"),g=o("a"),D=A("Navbar Item 1"),k=y(),v=o("li"),C=o("a"),N=A("Navbar Item 2"),V=y(),_=o("div"),U=A("Content"),a=y(),f=o("div"),T=o("label"),R=y(),M=o("ul"),z=o("li"),F=o("a"),ie=A("Sidebar Item 1"),de=y(),H=o("li"),Y=o("a"),ue=A("Sidebar Item 2"),this.h()},l(G){t=n(G,"DIV",{class:!0});var q=c(t);p=n(q,"INPUT",{id:!0,type:!0,class:!0}),m=E(q),i=n(q,"DIV",{class:!0});var te=c(i);d=n(te,"DIV",{class:!0});var J=c(d);h=n(J,"DIV",{class:!0});var fe=c(h);u=n(fe,"LABEL",{for:!0,class:!0});var pe=c(u);l=Se(pe,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var me=c(l);w=Se(me,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),c(w).forEach(r),me.forEach(r),pe.forEach(r),fe.forEach(r),O=E(J),b=n(J,"DIV",{class:!0});var ve=c(b);$=P(ve,"Navbar Title"),ve.forEach(r),x=E(J),S=n(J,"DIV",{class:!0});var be=c(S);L=n(be,"UL",{class:!0});var ae=c(L);I=n(ae,"LI",{});var he=c(I);g=n(he,"A",{});var we=c(g);D=P(we,"Navbar Item 1"),we.forEach(r),he.forEach(r),k=E(ae),v=n(ae,"LI",{});var $e=c(v);C=n($e,"A",{});var _e=c(C);N=P(_e,"Navbar Item 2"),_e.forEach(r),$e.forEach(r),ae.forEach(r),be.forEach(r),J.forEach(r),V=E(te),_=n(te,"DIV",{class:!0});var ge=c(_);U=P(ge,"Content"),ge.forEach(r),te.forEach(r),a=E(q),f=n(q,"DIV",{class:!0});var re=c(f);T=n(re,"LABEL",{for:!0,class:!0}),c(T).forEach(r),R=E(re),M=n(re,"UL",{class:!0});var le=c(M);z=n(le,"LI",{});var ye=c(z);F=n(ye,"A",{});var Ee=c(F);ie=P(Ee,"Sidebar Item 1"),Ee.forEach(r),ye.forEach(r),de=E(le),H=n(le,"LI",{});var Ie=c(H);Y=n(Ie,"A",{});var ke=c(Y);ue=P(ke,"Sidebar Item 2"),ke.forEach(r),Ie.forEach(r),le.forEach(r),re.forEach(r),q.forEach(r),this.h()},h(){s(p,"id","my-drawer-3"),s(p,"type","checkbox"),s(p,"class","drawer-toggle"),s(w,"stroke-linecap","round"),s(w,"stroke-linejoin","round"),s(w,"stroke-width","2"),s(w,"d","M4 6h16M4 12h16M4 18h16"),s(l,"xmlns","http://www.w3.org/2000/svg"),s(l,"fill","none"),s(l,"viewBox","0 0 24 24"),s(l,"class","inline-block w-6 h-6 stroke-current"),s(u,"for","my-drawer-3"),s(u,"class","btn btn-square btn-ghost"),s(h,"class","flex-none lg:hidden"),s(b,"class","flex-1 px-2 mx-2"),s(L,"class","menu menu-horizontal"),s(S,"class","flex-none hidden lg:block"),s(d,"class","w-full navbar bg-base-300"),s(_,"class","flex justify-center items-center flex-grow"),s(i,"class","flex flex-col drawer-content"),s(T,"for","my-drawer-3"),s(T,"class","drawer-overlay"),s(M,"class","p-4 overflow-y-auto menu w-80 bg-base-100"),s(f,"class","drawer-side"),s(t,"class","drawer w-full rounded")},m(G,q){B(G,t,q),e(t,p),e(t,m),e(t,i),e(i,d),e(d,h),e(h,u),e(u,l),e(l,w),e(d,O),e(d,b),e(b,$),e(d,x),e(d,S),e(S,L),e(L,I),e(I,g),e(g,D),e(L,k),e(L,v),e(v,C),e(C,N),e(i,V),e(i,_),e(_,U),e(t,a),e(t,f),e(f,T),e(f,R),e(f,M),e(M,z),e(z,F),e(F,ie),e(M,de),e(M,H),e(H,Y),e(Y,ue)},d(G){G&&r(t)}}}function Ue(j){let t,p=`<div class="$$drawer h-screen w-full">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle"> 
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full $$navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="$$btn $$btn-square $$btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="$$menu $$menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-3" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,m,i,d,h;return{c(){t=o("pre"),m=A(p),this.h()},l(u){t=n(u,"PRE",{slot:!0});var l=c(t);m=P(l,p),l.forEach(r),this.h()},h(){s(t,"slot","html")},m(u,l){B(u,t,l),e(t,m),d||(h=oe(i=ce.call(null,t,{to:j[0]})),d=!0)},p(u,l){i&&ne(i.update)&&l&1&&i.update.call(null,{to:u[0]})},d(u){u&&r(t),d=!1,h()}}}function Me(j){let t,p,m,i,d,h,u,l,w,O,b,$,x,S,L,I,g,D;return{c(){t=o("div"),p=o("input"),m=y(),i=o("div"),d=o("label"),h=A("Open drawer"),u=y(),l=o("div"),w=o("label"),O=y(),b=o("ul"),$=o("li"),x=o("a"),S=A("Sidebar Item 1"),L=y(),I=o("li"),g=o("a"),D=A("Sidebar Item 2"),this.h()},l(k){t=n(k,"DIV",{class:!0});var v=c(t);p=n(v,"INPUT",{id:!0,type:!0,class:!0}),m=E(v),i=n(v,"DIV",{class:!0});var C=c(i);d=n(C,"LABEL",{for:!0,class:!0});var N=c(d);h=P(N,"Open drawer"),N.forEach(r),C.forEach(r),u=E(v),l=n(v,"DIV",{class:!0});var V=c(l);w=n(V,"LABEL",{for:!0,class:!0}),c(w).forEach(r),O=E(V),b=n(V,"UL",{class:!0});var _=c(b);$=n(_,"LI",{});var U=c($);x=n(U,"A",{});var a=c(x);S=P(a,"Sidebar Item 1"),a.forEach(r),U.forEach(r),L=E(_),I=n(_,"LI",{});var f=c(I);g=n(f,"A",{});var T=c(g);D=P(T,"Sidebar Item 2"),T.forEach(r),f.forEach(r),_.forEach(r),V.forEach(r),v.forEach(r),this.h()},h(){s(p,"id","my-drawer-4"),s(p,"type","checkbox"),s(p,"class","drawer-toggle"),s(d,"for","my-drawer-4"),s(d,"class","btn btn-primary drawer-button"),s(i,"class","flex flex-col items-center justify-center drawer-content"),s(w,"for","my-drawer-4"),s(w,"class","drawer-overlay"),s(b,"class","menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"),s(l,"class","drawer-side"),s(t,"class","drawer drawer-end w-full rounded")},m(k,v){B(k,t,v),e(t,p),e(t,m),e(t,i),e(i,d),e(d,h),e(t,u),e(t,l),e(l,w),e(l,O),e(l,b),e(b,$),e($,x),e(x,S),e(b,L),e(b,I),e(I,g),e(g,D)},d(k){k&&r(t)}}}function ze(j){let t,p=`<div class="$$drawer $$drawer-end h-screen w-full">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle">
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-4" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,m,i,d,h;return{c(){t=o("pre"),m=A(p),this.h()},l(u){t=n(u,"PRE",{slot:!0});var l=c(t);m=P(l,p),l.forEach(r),this.h()},h(){s(t,"slot","html")},m(u,l){B(u,t,l),e(t,m),d||(h=oe(i=ce.call(null,t,{to:j[0]})),d=!0)},p(u,l){i&&ne(i.update)&&l&1&&i.update.call(null,{to:u[0]})},d(u){u&&r(t),d=!1,h()}}}function Re(j){let t,p,m,i,d,h,u,l,w,O=`<code class="language-js"><span class="token punctuation">.</span>drawer <span class="token comment">// The root container</span>
  \u251C\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>toggle <span class="token comment">// A hidden checkbox to toggle the visibility of the sidebar</span>
  \u251C\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>content <span class="token comment">// All your page content goes here</span>
  \u2502    \u251C\u2500\u2500 <span class="token comment">// navbar</span>
  \u2502    \u251C\u2500\u2500 <span class="token comment">// content</span>
  \u2502    \u2514\u2500\u2500 <span class="token comment">// footer</span>
  \u2514\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>side <span class="token comment">// Sidebar wrapper</span>
       \u251C\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>overlay <span class="token comment">// A dark overlay that covers the whole page when the drawer is open</span>
       \u2514\u2500\u2500 <span class="token comment">// Sidebar content (menu or anything)</span></code>`,b,$,x,S,L,I,g,D,k,v,C,N,V,_,U;return t=new Ve({props:{data:[{type:"component",class:"drawer",desc:"Container element"},{type:"component",class:"drawer-toggle",desc:"For checkbox element that controls the drawer"},{type:"component",class:"drawer-content",desc:"The content container"},{type:"component",class:"drawer-side",desc:"The sidebar container"},{type:"component",class:"drawer-overlay",desc:"The label covers the content when drawer is open"},{type:"modifier",class:"drawer-mobile",desc:"Makes drawer to open/close on mobile but will be always visible on desktop"},{type:"modifier",class:"drawer-end",desc:"puts drawer to the right"}]}}),D=new se({props:{title:"Drawer",$$slots:{html:[Be],default:[Te]},$$scope:{ctx:j}}}),v=new se({props:{title:"Drawer for mobile + fixed sidebar for desktop",desc:"Drawer is always open on desktop size. Drawer can be toggled on mobile size. Resize the browser to see toggle button on mobile size",$$slots:{html:[Ce],default:[je]},$$scope:{ctx:j}}}),N=new se({props:{title:"Navbar menu for desktop + sidebar drawer for mobile",desc:"Change screen size to show/hide menu",$$slots:{html:[Ue],default:[Oe]},$$scope:{ctx:j}}}),_=new se({props:{title:"Drawer that opens from right side of page",$$slots:{html:[ze],default:[Me]},$$scope:{ctx:j}}}),{c(){K(t.$$.fragment),p=y(),m=o("p"),i=A("Drawer sidebar can be visible by default on large screens or it can be toggleable on both large and small screens."),d=y(),h=o("p"),u=A("Drawer tags structure:"),l=y(),w=o("pre"),b=y(),$=o("p"),x=A("You can check/uncheck the checkbox using JavaScript or using "),S=o("code"),L=A("<label>"),I=A(" tag."),g=y(),K(D.$$.fragment),k=y(),K(v.$$.fragment),C=y(),K(N.$$.fragment),V=y(),K(_.$$.fragment),this.h()},l(a){Q(t.$$.fragment,a),p=E(a),m=n(a,"P",{});var f=c(m);i=P(f,"Drawer sidebar can be visible by default on large screens or it can be toggleable on both large and small screens."),f.forEach(r),d=E(a),h=n(a,"P",{});var T=c(h);u=P(T,"Drawer tags structure:"),T.forEach(r),l=E(a),w=n(a,"PRE",{class:!0});var R=c(w);R.forEach(r),b=E(a),$=n(a,"P",{});var M=c($);x=P(M,"You can check/uncheck the checkbox using JavaScript or using "),S=n(M,"CODE",{});var z=c(S);L=P(z,"<label>"),z.forEach(r),I=P(M," tag."),M.forEach(r),g=E(a),Q(D.$$.fragment,a),k=E(a),Q(v.$$.fragment,a),C=E(a),Q(N.$$.fragment,a),V=E(a),Q(_.$$.fragment,a),this.h()},h(){s(w,"class","language-js")},m(a,f){W(t,a,f),B(a,p,f),B(a,m,f),e(m,i),B(a,d,f),B(a,h,f),e(h,u),B(a,l,f),B(a,w,f),w.innerHTML=O,B(a,b,f),B(a,$,f),e($,x),e($,S),e(S,L),e($,I),B(a,g,f),W(D,a,f),B(a,k,f),W(v,a,f),B(a,C,f),W(N,a,f),B(a,V,f),W(_,a,f),U=!0},p(a,[f]){const T={};f&3&&(T.$$scope={dirty:f,ctx:a}),D.$set(T);const R={};f&3&&(R.$$scope={dirty:f,ctx:a}),v.$set(R);const M={};f&3&&(M.$$scope={dirty:f,ctx:a}),N.$set(M);const z={};f&3&&(z.$$scope={dirty:f,ctx:a}),_.$set(z)},i(a){U||(X(t.$$.fragment,a),X(D.$$.fragment,a),X(v.$$.fragment,a),X(N.$$.fragment,a),X(_.$$.fragment,a),U=!0)},o(a){Z(t.$$.fragment,a),Z(D.$$.fragment,a),Z(v.$$.fragment,a),Z(N.$$.fragment,a),Z(_.$$.fragment,a),U=!1},d(a){ee(t,a),a&&r(p),a&&r(m),a&&r(d),a&&r(h),a&&r(l),a&&r(w),a&&r(b),a&&r($),a&&r(g),ee(D,a),a&&r(k),ee(v,a),a&&r(C),ee(N,a),a&&r(V),ee(_,a)}}}const Ye={title:"Drawer",desc:"Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",published:!0};function qe(j,t,p){let m;return Pe(j,Ne,i=>p(0,m=i)),[m]}class Ge extends Le{constructor(t){super();De(this,t,qe,Re,Ae,{})}}export{Ge as default,Ye as metadata};
