import{S as xe,i as Se,s as Le,w as K,k as g,e as s,t as D,x as Q,m as y,c as o,a as n,h as A,d as r,b as l,y as W,g as B,H as e,q as X,o as Z,B as ee,K as oe,F as Ie,G as ke}from"../../chunks/vendor-6c3f1da5.js";import{C as De,a as se}from"../../chunks/ClassTable-96235e25.js";import"../../chunks/preload-helper-ec9aa979.js";function Ae(M){let t,u,v,i,c,I,V,f,h,C,m,b,k,x,S,E,_,L;return{c(){t=s("div"),u=s("input"),v=g(),i=s("div"),c=s("label"),I=D("Open drawer"),V=g(),f=s("div"),h=s("label"),C=g(),m=s("ul"),b=s("li"),k=s("a"),x=D("Sidebar Item 1"),S=g(),E=s("li"),_=s("a"),L=D("Sidebar Item 2"),this.h()},l($){t=o($,"DIV",{class:!0});var p=n(t);u=o(p,"INPUT",{id:!0,type:!0,class:!0}),v=y(p),i=o(p,"DIV",{class:!0});var j=n(i);c=o(j,"LABEL",{for:!0,class:!0});var P=n(c);I=A(P,"Open drawer"),P.forEach(r),j.forEach(r),V=y(p),f=o(p,"DIV",{class:!0});var N=n(f);h=o(N,"LABEL",{for:!0,class:!0}),n(h).forEach(r),C=y(N),m=o(N,"UL",{class:!0});var w=n(m);b=o(w,"LI",{});var O=n(b);k=o(O,"A",{});var a=n(k);x=A(a,"Sidebar Item 1"),a.forEach(r),O.forEach(r),S=y(w),E=o(w,"LI",{});var d=n(E);_=o(d,"A",{});var T=n(_);L=A(T,"Sidebar Item 2"),T.forEach(r),d.forEach(r),w.forEach(r),N.forEach(r),p.forEach(r),this.h()},h(){l(u,"id","my-drawer"),l(u,"type","checkbox"),l(u,"class","drawer-toggle"),l(c,"for","my-drawer"),l(c,"class","btn btn-primary drawer-button"),l(i,"class","flex flex-col items-center justify-center drawer-content"),l(h,"for","my-drawer"),l(h,"class","drawer-overlay"),l(m,"class","menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"),l(f,"class","drawer-side"),l(t,"class","drawer w-full rounded")},m($,p){B($,t,p),e(t,u),e(t,v),e(t,i),e(i,c),e(c,I),e(t,V),e(t,f),e(f,h),e(f,C),e(f,m),e(m,b),e(b,k),e(k,x),e(m,S),e(m,E),e(E,_),e(_,L)},d($){$&&r(t)}}}function Ve(M){let t,u=`<div class="h-screen drawer w-full rounded">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,v;return{c(){t=s("pre"),v=D(u),this.h()},l(i){t=o(i,"PRE",{slot:!0});var c=n(t);v=A(c,u),c.forEach(r),this.h()},h(){l(t,"slot","html")},m(i,c){B(i,t,c),e(t,v)},p:oe,d(i){i&&r(t)}}}function Ne(M){let t,u,v,i,c,I,V,f,h,C,m,b,k,x,S,E,_,L;return{c(){t=s("div"),u=s("input"),v=g(),i=s("div"),c=s("label"),I=D("Open drawer"),V=g(),f=s("div"),h=s("label"),C=g(),m=s("ul"),b=s("li"),k=s("a"),x=D("Sidebar Item 1"),S=g(),E=s("li"),_=s("a"),L=D("Sidebar Item 2"),this.h()},l($){t=o($,"DIV",{class:!0});var p=n(t);u=o(p,"INPUT",{id:!0,type:!0,class:!0}),v=y(p),i=o(p,"DIV",{class:!0});var j=n(i);c=o(j,"LABEL",{for:!0,class:!0});var P=n(c);I=A(P,"Open drawer"),P.forEach(r),j.forEach(r),V=y(p),f=o(p,"DIV",{class:!0});var N=n(f);h=o(N,"LABEL",{for:!0,class:!0}),n(h).forEach(r),C=y(N),m=o(N,"UL",{class:!0});var w=n(m);b=o(w,"LI",{});var O=n(b);k=o(O,"A",{});var a=n(k);x=A(a,"Sidebar Item 1"),a.forEach(r),O.forEach(r),S=y(w),E=o(w,"LI",{});var d=n(E);_=o(d,"A",{});var T=n(_);L=A(T,"Sidebar Item 2"),T.forEach(r),d.forEach(r),w.forEach(r),N.forEach(r),p.forEach(r),this.h()},h(){l(u,"id","my-drawer-2"),l(u,"type","checkbox"),l(u,"class","drawer-toggle"),l(c,"for","my-drawer-2"),l(c,"class","btn btn-primary drawer-button lg:hidden"),l(i,"class","flex flex-col items-center justify-center drawer-content"),l(h,"for","my-drawer-2"),l(h,"class","drawer-overlay"),l(m,"class","menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"),l(f,"class","drawer-side"),l(t,"class","drawer drawer-mobile w-full")},m($,p){B($,t,p),e(t,u),e(t,v),e(t,i),e(i,c),e(c,I),e(t,V),e(t,f),e(f,h),e(f,C),e(f,m),e(m,b),e(b,k),e(k,x),e(m,S),e(m,E),e(E,_),e(_,L)},d($){$&&r(t)}}}function Pe(M){let t,u=`<div class="h-screen drawer drawer-mobile w-full">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle">
  <div class="flex flex-col items-center justify-center drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,v;return{c(){t=s("pre"),v=D(u),this.h()},l(i){t=o(i,"PRE",{slot:!0});var c=n(t);v=A(c,u),c.forEach(r),this.h()},h(){l(t,"slot","html")},m(i,c){B(i,t,c),e(t,v)},p:oe,d(i){i&&r(t)}}}function Te(M){let t,u,v,i,c,I,V,f,h,C,m,b,k,x,S,E,_,L,$,p,j,P,N,w,O,a,d,T,R,U,z,H,ne,ce,J,Y,ie;return{c(){t=s("div"),u=s("input"),v=g(),i=s("div"),c=s("div"),I=s("div"),V=s("label"),f=Ie("svg"),h=Ie("path"),C=g(),m=s("div"),b=D("Navbar Title"),k=g(),x=s("div"),S=s("ul"),E=s("li"),_=s("a"),L=D("Navbar Item 1"),$=g(),p=s("li"),j=s("a"),P=D("Navbar Item 2"),N=g(),w=s("div"),O=D("Content"),a=g(),d=s("div"),T=s("label"),R=g(),U=s("ul"),z=s("li"),H=s("a"),ne=D("Sidebar Item 1"),ce=g(),J=s("li"),Y=s("a"),ie=D("Sidebar Item 2"),this.h()},l(G){t=o(G,"DIV",{class:!0});var q=n(t);u=o(q,"INPUT",{id:!0,type:!0,class:!0}),v=y(q),i=o(q,"DIV",{class:!0});var te=n(i);c=o(te,"DIV",{class:!0});var F=n(c);I=o(F,"DIV",{class:!0});var de=n(I);V=o(de,"LABEL",{for:!0,class:!0});var ue=n(V);f=ke(ue,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var fe=n(f);h=ke(fe,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),n(h).forEach(r),fe.forEach(r),ue.forEach(r),de.forEach(r),C=y(F),m=o(F,"DIV",{class:!0});var pe=n(m);b=A(pe,"Navbar Title"),pe.forEach(r),k=y(F),x=o(F,"DIV",{class:!0});var ve=n(x);S=o(ve,"UL",{class:!0});var ae=n(S);E=o(ae,"LI",{});var me=n(E);_=o(me,"A",{});var he=n(_);L=A(he,"Navbar Item 1"),he.forEach(r),me.forEach(r),$=y(ae),p=o(ae,"LI",{});var be=n(p);j=o(be,"A",{});var we=n(j);P=A(we,"Navbar Item 2"),we.forEach(r),be.forEach(r),ae.forEach(r),ve.forEach(r),F.forEach(r),N=y(te),w=o(te,"DIV",{class:!0});var _e=n(w);O=A(_e,"Content"),_e.forEach(r),te.forEach(r),a=y(q),d=o(q,"DIV",{class:!0});var re=n(d);T=o(re,"LABEL",{for:!0,class:!0}),n(T).forEach(r),R=y(re),U=o(re,"UL",{class:!0});var le=n(U);z=o(le,"LI",{});var ge=n(z);H=o(ge,"A",{});var ye=n(H);ne=A(ye,"Sidebar Item 1"),ye.forEach(r),ge.forEach(r),ce=y(le),J=o(le,"LI",{});var Ee=n(J);Y=o(Ee,"A",{});var $e=n(Y);ie=A($e,"Sidebar Item 2"),$e.forEach(r),Ee.forEach(r),le.forEach(r),re.forEach(r),q.forEach(r),this.h()},h(){l(u,"id","my-drawer-3"),l(u,"type","checkbox"),l(u,"class","drawer-toggle"),l(h,"stroke-linecap","round"),l(h,"stroke-linejoin","round"),l(h,"stroke-width","2"),l(h,"d","M4 6h16M4 12h16M4 18h16"),l(f,"xmlns","http://www.w3.org/2000/svg"),l(f,"fill","none"),l(f,"viewBox","0 0 24 24"),l(f,"class","inline-block w-6 h-6 stroke-current"),l(V,"for","my-drawer-3"),l(V,"class","btn btn-square btn-ghost"),l(I,"class","flex-none lg:hidden"),l(m,"class","flex-1 px-2 mx-2"),l(S,"class","menu horizontal"),l(x,"class","flex-none hidden lg:block"),l(c,"class","w-full navbar bg-base-300"),l(w,"class","flex justify-center items-center flex-grow"),l(i,"class","flex flex-col drawer-content"),l(T,"for","my-drawer-3"),l(T,"class","drawer-overlay"),l(U,"class","p-4 overflow-y-auto menu w-80 bg-base-100"),l(d,"class","drawer-side"),l(t,"class","drawer w-full rounded")},m(G,q){B(G,t,q),e(t,u),e(t,v),e(t,i),e(i,c),e(c,I),e(I,V),e(V,f),e(f,h),e(c,C),e(c,m),e(m,b),e(c,k),e(c,x),e(x,S),e(S,E),e(E,_),e(_,L),e(S,$),e(S,p),e(p,j),e(j,P),e(i,N),e(i,w),e(w,O),e(t,a),e(t,d),e(d,T),e(d,R),e(d,U),e(U,z),e(z,H),e(H,ne),e(U,ce),e(U,J),e(J,Y),e(Y,ie)},d(G){G&&r(t)}}}function Be(M){let t,u=`<div class="h-screen drawer w-full">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> 
  <div class="flex flex-col drawer-content">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,v;return{c(){t=s("pre"),v=D(u),this.h()},l(i){t=o(i,"PRE",{slot:!0});var c=n(t);v=A(c,u),c.forEach(r),this.h()},h(){l(t,"slot","html")},m(i,c){B(i,t,c),e(t,v)},p:oe,d(i){i&&r(t)}}}function je(M){let t,u,v,i,c,I,V,f,h,C,m,b,k,x,S,E,_,L;return{c(){t=s("div"),u=s("input"),v=g(),i=s("div"),c=s("label"),I=D("Open drawer"),V=g(),f=s("div"),h=s("label"),C=g(),m=s("ul"),b=s("li"),k=s("a"),x=D("Sidebar Item 1"),S=g(),E=s("li"),_=s("a"),L=D("Sidebar Item 2"),this.h()},l($){t=o($,"DIV",{class:!0});var p=n(t);u=o(p,"INPUT",{id:!0,type:!0,class:!0}),v=y(p),i=o(p,"DIV",{class:!0});var j=n(i);c=o(j,"LABEL",{for:!0,class:!0});var P=n(c);I=A(P,"Open drawer"),P.forEach(r),j.forEach(r),V=y(p),f=o(p,"DIV",{class:!0});var N=n(f);h=o(N,"LABEL",{for:!0,class:!0}),n(h).forEach(r),C=y(N),m=o(N,"UL",{class:!0});var w=n(m);b=o(w,"LI",{});var O=n(b);k=o(O,"A",{});var a=n(k);x=A(a,"Sidebar Item 1"),a.forEach(r),O.forEach(r),S=y(w),E=o(w,"LI",{});var d=n(E);_=o(d,"A",{});var T=n(_);L=A(T,"Sidebar Item 2"),T.forEach(r),d.forEach(r),w.forEach(r),N.forEach(r),p.forEach(r),this.h()},h(){l(u,"id","my-drawer-4"),l(u,"type","checkbox"),l(u,"class","drawer-toggle"),l(c,"for","my-drawer-4"),l(c,"class","btn btn-primary drawer-button"),l(i,"class","flex flex-col items-center justify-center drawer-content"),l(h,"for","my-drawer-4"),l(h,"class","drawer-overlay"),l(m,"class","menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"),l(f,"class","drawer-side"),l(t,"class","drawer drawer-end w-full rounded")},m($,p){B($,t,p),e(t,u),e(t,v),e(t,i),e(i,c),e(c,I),e(t,V),e(t,f),e(f,h),e(f,C),e(f,m),e(m,b),e(b,k),e(k,x),e(m,S),e(m,E),e(E,_),e(_,L)},d($){$&&r(t)}}}function Ce(M){let t,u=`<div class="h-screen drawer w-full rounded">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle">
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,v;return{c(){t=s("pre"),v=D(u),this.h()},l(i){t=o(i,"PRE",{slot:!0});var c=n(t);v=A(c,u),c.forEach(r),this.h()},h(){l(t,"slot","html")},m(i,c){B(i,t,c),e(t,v)},p:oe,d(i){i&&r(t)}}}function Oe(M){let t,u,v,i,c,I,V,f,h,C=`<code class="language-js"><span class="token punctuation">.</span>drawer <span class="token comment">// The root container</span>
  \u251C\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>toggle <span class="token comment">// A hidden checkbox to toggle the visibility of the sidebar</span>
  \u251C\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>content <span class="token comment">// All your page content goes here</span>
  \u2502    \u251C\u2500\u2500 <span class="token comment">// navbar</span>
  \u2502    \u251C\u2500\u2500 <span class="token comment">// content</span>
  \u2502    \u2514\u2500\u2500 <span class="token comment">// footer</span>
  \u2514\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>side <span class="token comment">// Sidebar wrapper</span>
       \u251C\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>overlay <span class="token comment">// A dark overlay that covers the whole page when the drawer is open</span>
       \u2514\u2500\u2500 <span class="token comment">// Sidebar content (menu or anything)</span></code>`,m,b,k,x,S,E,_,L,$,p,j,P,N,w,O;return t=new De({props:{data:[{type:"component",class:"drawer",desc:"Container element"},{type:"component",class:"drawer-toggle",desc:"For checkbox element that controls the drawer"},{type:"component",class:"drawer-content",desc:"The content container"},{type:"component",class:"drawer-side",desc:"The sidebar container"},{type:"component",class:"drawer-overlay",desc:"The label covers the content when drawer is open"},{type:"modifier",class:"drawer-mobile",desc:"Makes drawer to open/close on mobile but will be always visible on desktop"},{type:"modifier",class:"drawer-end",desc:"puts drawer to the right"}]}}),L=new se({props:{title:"Drawer",$$slots:{html:[Ve],default:[Ae]},$$scope:{ctx:M}}}),p=new se({props:{title:"Drawer for mobile + fixed sidebar for desktop",desc:"Drawer is always open on desktop size. Drawer can be toggled on mobile size. Resize the browser to see toggle button on mobile size",$$slots:{html:[Pe],default:[Ne]},$$scope:{ctx:M}}}),P=new se({props:{title:"Navbar menu for desktop + sidebar drawer for mobile",desc:"Change screen size to show/hide menu",$$slots:{html:[Be],default:[Te]},$$scope:{ctx:M}}}),w=new se({props:{title:"Drawer that opens from right side of page",$$slots:{html:[Ce],default:[je]},$$scope:{ctx:M}}}),{c(){K(t.$$.fragment),u=g(),v=s("p"),i=D("Drawer sidebar can be visible by default on large screens or it can be toggleable on both large and small screens."),c=g(),I=s("p"),V=D("Drawer tags structure:"),f=g(),h=s("pre"),m=g(),b=s("p"),k=D("You can check/uncheck the checkbox using JavaScript or using "),x=s("code"),S=D("<label>"),E=D(" tag."),_=g(),K(L.$$.fragment),$=g(),K(p.$$.fragment),j=g(),K(P.$$.fragment),N=g(),K(w.$$.fragment),this.h()},l(a){Q(t.$$.fragment,a),u=y(a),v=o(a,"P",{});var d=n(v);i=A(d,"Drawer sidebar can be visible by default on large screens or it can be toggleable on both large and small screens."),d.forEach(r),c=y(a),I=o(a,"P",{});var T=n(I);V=A(T,"Drawer tags structure:"),T.forEach(r),f=y(a),h=o(a,"PRE",{class:!0});var R=n(h);R.forEach(r),m=y(a),b=o(a,"P",{});var U=n(b);k=A(U,"You can check/uncheck the checkbox using JavaScript or using "),x=o(U,"CODE",{});var z=n(x);S=A(z,"<label>"),z.forEach(r),E=A(U," tag."),U.forEach(r),_=y(a),Q(L.$$.fragment,a),$=y(a),Q(p.$$.fragment,a),j=y(a),Q(P.$$.fragment,a),N=y(a),Q(w.$$.fragment,a),this.h()},h(){l(h,"class","language-js")},m(a,d){W(t,a,d),B(a,u,d),B(a,v,d),e(v,i),B(a,c,d),B(a,I,d),e(I,V),B(a,f,d),B(a,h,d),h.innerHTML=C,B(a,m,d),B(a,b,d),e(b,k),e(b,x),e(x,S),e(b,E),B(a,_,d),W(L,a,d),B(a,$,d),W(p,a,d),B(a,j,d),W(P,a,d),B(a,N,d),W(w,a,d),O=!0},p(a,[d]){const T={};d&1&&(T.$$scope={dirty:d,ctx:a}),L.$set(T);const R={};d&1&&(R.$$scope={dirty:d,ctx:a}),p.$set(R);const U={};d&1&&(U.$$scope={dirty:d,ctx:a}),P.$set(U);const z={};d&1&&(z.$$scope={dirty:d,ctx:a}),w.$set(z)},i(a){O||(X(t.$$.fragment,a),X(L.$$.fragment,a),X(p.$$.fragment,a),X(P.$$.fragment,a),X(w.$$.fragment,a),O=!0)},o(a){Z(t.$$.fragment,a),Z(L.$$.fragment,a),Z(p.$$.fragment,a),Z(P.$$.fragment,a),Z(w.$$.fragment,a),O=!1},d(a){ee(t,a),a&&r(u),a&&r(v),a&&r(c),a&&r(I),a&&r(f),a&&r(h),a&&r(m),a&&r(b),a&&r(_),ee(L,a),a&&r($),ee(p,a),a&&r(j),ee(P,a),a&&r(N),ee(w,a)}}}const Re={title:"Drawer",desc:"Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",published:!0};class qe extends xe{constructor(t){super();Se(this,t,null,Oe,Le,{})}}export{qe as default,Re as metadata};
