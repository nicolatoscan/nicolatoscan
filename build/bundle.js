var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l,r;function a(e,t){return l||(l=document.createElement("a")),l.href=t,e===l.href}function c(e){return null==e?"":e}function d(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function m(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(e){return document.createTextNode(e)}function v(){return f(" ")}function w(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e){r=e}const C=[],k=[],y=[],L=[],A=Promise.resolve();let S=!1;function M(e){y.push(e)}const T=new Set;let E=0;function B(){const e=r;do{for(;E<C.length;){const e=C[E];E++,x(e),I(e.$$)}for(x(null),C.length=0,E=0;k.length;)k.pop()();for(let e=0;e<y.length;e+=1){const t=y[e];T.has(t)||(T.add(t),t())}y.length=0}while(C.length);for(;L.length;)L.pop()();S=!1,T.clear(),x(e)}function I(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const z=new Set;let q;function P(){q={r:0,c:[],p:q}}function D(){q.r||i(q.c),q=q.p}function H(e,t){e&&e.i&&(z.delete(e),e.i(t))}function j(e,t,n,i){if(e&&e.o){if(z.has(e))return;z.add(e),q.c.push((()=>{z.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}function N(e){e&&e.c()}function R(e,n,s,l){const{fragment:r,on_mount:a,on_destroy:c,after_update:d}=e.$$;r&&r.m(n,s),l||M((()=>{const n=a.map(t).filter(o);c?c.push(...n):i(n),e.$$.on_mount=[]})),d.forEach(M)}function _(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function O(e,t){-1===e.$$.dirty[0]&&(C.push(e),S||(S=!0,A.then(B)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(t,o,s,l,a,c,d,h=[-1]){const m=r;x(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(m?m.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:o.target||m.$$.root};d&&d(p.root);let g=!1;if(p.ctx=s?s(t,o.props||{},((e,n,...i)=>{const o=i.length?i[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),g&&O(t,e)),n})):[],p.update(),g=!0,i(p.before_update),p.fragment=!!l&&l(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(u)}else p.fragment&&p.fragment.c();o.intro&&H(t.$$.fragment),R(t,o.target,o.anchor,o.customElement),B()}x(m)}class W{$destroy(){_(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function F(t){let n;return{c(){n=p("div"),n.innerHTML='<div class="title svelte-l1almu"><p class="larger svelte-l1almu">Welcome to my CV,</p> \n    <h1 class="svelte-l1almu">I&#39;m Nicola Toscan</h1> \n    <p class="svelte-l1almu">Developer and data scientist</p></div>',b(n,"class","header svelte-l1almu")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class U extends W{constructor(e){super(),V(this,e,null,F,s,{})}}function G(t){let n,i;return{c(){n=g("svg"),i=g("path"),b(i,"d","M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"),b(i,"fill",t[2]),b(n,"width",t[0]),b(n,"height",t[1]),b(n,"viewBox",t[3])},m(e,t){h(e,n,t),d(n,i)},p(e,[t]){4&t&&b(i,"fill",e[2]),1&t&&b(n,"width",e[0]),2&t&&b(n,"height",e[1]),8&t&&b(n,"viewBox",e[3])},i:e,o:e,d(e){e&&u(n)}}}function J(e,t,n){let{size:i="1em"}=t,{width:o=i}=t,{height:s=i}=t,{color:l="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,o=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[o,s,l,r,i]}class Z extends W{constructor(e){super(),V(this,e,J,G,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function K(t){let n,i;return{c(){n=g("svg"),i=g("path"),b(i,"d","M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"),b(i,"fill",t[2]),b(n,"width",t[0]),b(n,"height",t[1]),b(n,"viewBox",t[3])},m(e,t){h(e,n,t),d(n,i)},p(e,[t]){4&t&&b(i,"fill",e[2]),1&t&&b(n,"width",e[0]),2&t&&b(n,"height",e[1]),8&t&&b(n,"viewBox",e[3])},i:e,o:e,d(e){e&&u(n)}}}function Q(e,t,n){let{size:i="1em"}=t,{width:o=i}=t,{height:s=i}=t,{color:l="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,o=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[o,s,l,r,i]}class X extends W{constructor(e){super(),V(this,e,Q,K,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function Y(t){let n,i;return{c(){n=g("svg"),i=g("path"),b(i,"d","M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"),b(i,"fill",t[2]),b(n,"width",t[0]),b(n,"height",t[1]),b(n,"viewBox",t[3])},m(e,t){h(e,n,t),d(n,i)},p(e,[t]){4&t&&b(i,"fill",e[2]),1&t&&b(n,"width",e[0]),2&t&&b(n,"height",e[1]),8&t&&b(n,"viewBox",e[3])},i:e,o:e,d(e){e&&u(n)}}}function ee(e,t,n){let{size:i="1em"}=t,{width:o=i}=t,{height:s=i}=t,{color:l="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,o=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[o,s,l,r,i]}class te extends W{constructor(e){super(),V(this,e,ee,Y,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function ne(t){let n,i;return{c(){n=g("svg"),i=g("path"),b(i,"d","M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"),b(i,"fill",t[2]),b(n,"width",t[0]),b(n,"height",t[1]),b(n,"viewBox",t[3])},m(e,t){h(e,n,t),d(n,i)},p(e,[t]){4&t&&b(i,"fill",e[2]),1&t&&b(n,"width",e[0]),2&t&&b(n,"height",e[1]),8&t&&b(n,"viewBox",e[3])},i:e,o:e,d(e){e&&u(n)}}}function ie(e,t,n){let{size:i="1em"}=t,{width:o=i}=t,{height:s=i}=t,{color:l="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,o=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[o,s,l,r,i]}class oe extends W{constructor(e){super(),V(this,e,ie,ne,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function se(t){let n,i,o,s,l,r,a,c,m,g,w,$,x,C,k,y,L,A,S,M,T,E,B,I,z,q,P,D,O,V,W,F,U,G,J,K;return q=new Z({props:{color:"#ed9074",size:"48"}}),O=new X({props:{color:"#ed9074",size:"48"}}),F=new te({props:{color:"#ed9074",size:"48"}}),J=new oe({props:{color:"#ed9074",size:"48"}}),{c(){n=p("h3"),n.textContent="ABOUT ME",i=v(),o=p("div"),s=p("p"),s.innerHTML='<span class="info-name svelte-vxhlda">Name:</span>Nicola Toscan',l=v(),r=p("p"),r.innerHTML='<span class="info-name svelte-vxhlda">From:</span>Italy',a=v(),c=p("p"),m=p("span"),m.textContent="Age:",g=f(t[0]),w=v(),$=p("p"),$.innerHTML='<span class="info-name svelte-vxhlda">Now in:</span>Stockholm',x=v(),C=p("div"),k=p("div"),y=v(),L=p("p"),A=f("I'm a "),S=f(t[0]),M=f(" years old Italian student, currently attending a Masters Degree in Data Science at KTH Royal Institute of Technology and TU Berlin."),T=p("br"),E=f("\n        I'm passionate about data science and web development."),B=v(),I=p("div"),z=p("a"),N(q.$$.fragment),P=v(),D=p("a"),N(O.$$.fragment),V=v(),W=p("a"),N(F.$$.fragment),U=v(),G=p("a"),N(J.$$.fragment),b(s,"class","svelte-vxhlda"),b(r,"class","svelte-vxhlda"),b(m,"class","info-name svelte-vxhlda"),b(c,"class","svelte-vxhlda"),b($,"class","svelte-vxhlda"),b(o,"class","my-info svelte-vxhlda"),b(k,"class","picture svelte-vxhlda"),b(L,"class","svelte-vxhlda"),b(C,"class","about svelte-vxhlda"),b(z,"href","https://www.github.com/nicolatoscan/"),b(z,"target","_blank"),b(z,"class","svelte-vxhlda"),b(D,"href","https://www.linkedin.com/in/nicolatoscan/"),b(D,"target","_blank"),b(D,"class","svelte-vxhlda"),b(W,"href","mailto:nicolatoscan.99+cv@gmail.com"),b(W,"target","_blank"),b(W,"class","svelte-vxhlda"),b(G,"href","https://www.t.me/nicolatoscan/"),b(G,"target","_blank"),b(G,"class","svelte-vxhlda"),b(I,"class","urls svelte-vxhlda")},m(e,t){h(e,n,t),h(e,i,t),h(e,o,t),d(o,s),d(o,l),d(o,r),d(o,a),d(o,c),d(c,m),d(c,g),d(o,w),d(o,$),h(e,x,t),h(e,C,t),d(C,k),d(C,y),d(C,L),d(L,A),d(L,S),d(L,M),d(L,T),d(L,E),h(e,B,t),h(e,I,t),d(I,z),R(q,z,null),d(I,P),d(I,D),R(O,D,null),d(I,V),d(I,W),R(F,W,null),d(I,U),d(I,G),R(J,G,null),K=!0},p:e,i(e){K||(H(q.$$.fragment,e),H(O.$$.fragment,e),H(F.$$.fragment,e),H(J.$$.fragment,e),K=!0)},o(e){j(q.$$.fragment,e),j(O.$$.fragment,e),j(F.$$.fragment,e),j(J.$$.fragment,e),K=!1},d(e){e&&u(n),e&&u(i),e&&u(o),e&&u(x),e&&u(C),e&&u(B),e&&u(I),_(q),_(O),_(F),_(J)}}}function le(e){return[Math.floor(((new Date).getTime()-new Date(1999,0,31).getTime())/315576e5)]}class re extends W{constructor(e){super(),V(this,e,le,se,s,{})}}function ae(e,t,n){const i=e.slice();return i[7]=t[n],i[8]=t,i[9]=n,i}function ce(e,t,n){const i=e.slice();return i[10]=t[n],i}function de(e){let t,n;return{c(){t=p("img"),a(t.src,n=e[7].img)||b(t,"src",n),b(t,"alt",""),b(t,"class","svelte-ymk6e9")},m(e,n){h(e,t,n)},p(e,i){2&i&&!a(t.src,n=e[7].img)&&b(t,"src",n)},d(e){e&&u(t)}}}function he(e){let t,n=e[7].subtitles,i=[];for(let t=0;t<n.length;t+=1)i[t]=me(ce(e,n,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=f("")},m(e,n){for(let t=0;t<i.length;t+=1)i[t].m(e,n);h(e,t,n)},p(e,o){if(2&o){let s;for(n=e[7].subtitles,s=0;s<n.length;s+=1){const l=ce(e,n,s);i[s]?i[s].p(l,o):(i[s]=me(l),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(e){m(i,e),e&&u(t)}}}function ue(e){let t,n;return{c(){t=p("img"),a(t.src,n="./images/flags/"+e[10].flag.toLowerCase()+".svg")||b(t,"src",n),b(t,"alt","flag"),b(t,"class","flag svelte-ymk6e9")},m(e,n){h(e,t,n)},p(e,i){2&i&&!a(t.src,n="./images/flags/"+e[10].flag.toLowerCase()+".svg")&&b(t,"src",n)},d(e){e&&u(t)}}}function me(e){let t,n,i,o,s,l=e[10].text+"",r=e[10].flag&&ue(e);return{c(){t=p("div"),r&&r.c(),n=v(),i=p("h5"),o=f(l),s=v(),b(i,"class","svelte-ymk6e9"),b(t,"class","subtitle svelte-ymk6e9")},m(e,l){h(e,t,l),r&&r.m(t,null),d(t,n),d(t,i),d(i,o),h(e,s,l)},p(e,i){e[10].flag?r?r.p(e,i):(r=ue(e),r.c(),r.m(t,n)):r&&(r.d(1),r=null),2&i&&l!==(l=e[10].text+"")&&$(o,l)},d(e){e&&u(t),r&&r.d(),e&&u(s)}}}function pe(e){let t,n,i,o,s,l=e[7].showMore?"Show less":"Show more",r=e[7].showMore&&ge(e);function a(){return e[3](e[7],e[8],e[9])}return{c(){r&&r.c(),t=v(),n=p("p"),i=f(l),b(n,"class","show-more")},m(e,l){r&&r.m(e,l),h(e,t,l),h(e,n,l),d(n,i),o||(s=w(n,"click",a),o=!0)},p(n,o){(e=n)[7].showMore?r?r.p(e,o):(r=ge(e),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),2&o&&l!==(l=e[7].showMore?"Show less":"Show more")&&$(i,l)},d(e){r&&r.d(e),e&&u(t),e&&u(n),o=!1,s()}}}function ge(e){let t,n=e[7].more+"";return{c(){t=p("p"),b(t,"class","more")},m(e,i){h(e,t,i),t.innerHTML=n},p(e,i){2&i&&n!==(n=e[7].more+"")&&(t.innerHTML=n)},d(e){e&&u(t)}}}function fe(e){let t,n,i,o,s,l,r,a,m,g,w,x,C,k,y,L,A,S=e[7].title+"",M=e[7].description+"",T=e[7].img&&de(e),E=e[7].subtitles&&he(e),B=e[7].more&&pe(e);return{c(){t=p("div"),n=p("div"),T&&T.c(),i=v(),o=p("div"),s=p("h4"),l=f(S),r=v(),E&&E.c(),a=v(),m=p("div"),g=p("p"),w=v(),B&&B.c(),x=v(),C=p("span"),k=v(),y=p("span"),L=v(),b(n,"class","box-img svelte-ymk6e9"),b(s,"class","svelte-ymk6e9"),b(o,"class","box-title"),b(C,"class","fi fi-gr"),b(y,"class","fi fi-gr fis"),b(m,"class","box-description"),b(t,"class",A=c(e[7].flipped?"box flipped":"box")+" svelte-ymk6e9")},m(e,c){h(e,t,c),d(t,n),T&&T.m(n,null),d(t,i),d(t,o),d(o,s),d(s,l),d(o,r),E&&E.m(o,null),d(t,a),d(t,m),d(m,g),g.innerHTML=M,d(m,w),B&&B.m(m,null),d(m,x),d(m,C),d(m,k),d(m,y),d(t,L)},p(e,i){e[7].img?T?T.p(e,i):(T=de(e),T.c(),T.m(n,null)):T&&(T.d(1),T=null),2&i&&S!==(S=e[7].title+"")&&$(l,S),e[7].subtitles?E?E.p(e,i):(E=he(e),E.c(),E.m(o,null)):E&&(E.d(1),E=null),2&i&&M!==(M=e[7].description+"")&&(g.innerHTML=M),e[7].more?B?B.p(e,i):(B=pe(e),B.c(),B.m(m,x)):B&&(B.d(1),B=null),2&i&&A!==(A=c(e[7].flipped?"box flipped":"box")+" svelte-ymk6e9")&&b(t,"class",A)},d(e){e&&u(t),T&&T.d(),E&&E.d(),B&&B.d()}}}function ve(t){let n,i,o,s,l=t[2][t[0]]+"",r=t[1],a=[];for(let e=0;e<r.length;e+=1)a[e]=fe(ae(t,r,e));return{c(){n=p("h3"),i=f(l),o=v(),s=p("div");for(let e=0;e<a.length;e+=1)a[e].c();b(s,"class","boxes")},m(e,t){h(e,n,t),d(n,i),h(e,o,t),h(e,s,t);for(let e=0;e<a.length;e+=1)a[e].m(s,null)},p(e,[t]){if(1&t&&l!==(l=e[2][e[0]]+"")&&$(i,l),2&t){let n;for(r=e[1],n=0;n<r.length;n+=1){const i=ae(e,r,n);a[n]?a[n].p(i,t):(a[n]=fe(i),a[n].c(),a[n].m(s,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},i:e,o:e,d(e){e&&u(n),e&&u(o),e&&u(s),m(a,e)}}}function we(e,t,n){var i;let{type:o}=t;const s={Education:[{img:"./images/kth.jpg",title:"Attending Master's in Data Science",subtitles:[{flag:"Se",text:"KTH, Stockholm, Sweden | August 2021 - June 2022"},{flag:"De",text:"TUB, Berlin, Germany | October 2022 - Current"}],description:"                I am currently attending a joint Master degree in Stockholm and Berlin in Data Science, with a minor in Entrepreneur & Innovation.                I spent the first year in Stockholm and I will spend the second year in Berlin.",showMore:!1,more:"The complete list of courses I have taken:                <ul>                <li>Machine Learning</li>                <li>Scalable Machine Learning and Deep Learning</li>                <li>Programming for Data Science</li>                <li>Data Mining, Basic Course</li>                <li>Research Methodology and Scientific Writing</li>                <li>Entrepreneurship for Engineers</li>                <li>Business Development Lab of Entrepreneurship Engineers</li>                <li>e-Business Strategies</li>                </ui>                "},{img:"./images/trento.jpg",title:"Bachelor's in Computer Science",subtitles:[{flag:"It",text:"University of Trento, Trento, Italy | September 2018 - July 2022"}],description:"                I have taken courses in Software Engineering, Data Structures, Algorithms, and Programming and Mathematics.                I graduated with the highest grade of 110 cum laude in July 2022",showMore:!1,more:"The complete list of courses I have taken:                <ul>                <li>Algorithms and Data Structures</li>                <li>Computer Programming 1</li>                <li>Programming Languages</li>                <li>Software Engineering 1 & 2</li>                <li>Formal Languages and Compilers</li>                <li>Geometry and Linear Algebra</li>                <li>Calculus 1</li>                <li>Probability and Statistics</li>                <li>Mathematical Foundations of Computer Science</li>                <li>Physics</li>                <li>Operating Systems</li>                <li>Logic</li>                <li>Databases</li>                <li>Networks</li>                <li>Computer Architectures</li>                <li>Human-Computer Interaction</li>                <li>Introduction to Computer and Network Security</li>                <li>Introduction to Web Programming</li>                <li>Introduction to Mobile Development</li>                <li>Introduction to Machine Learning</li>                </ui>                "}],Experience:[{flipped:!0,img:"./images/wiki.jpg",title:"Data Science Internship",subtitles:[{flag:"Es",text:"Eurecat, Barcelona, Spain | January - June 2021"}],description:"Analyzing emotions in messages written and received by a user in Wikipedia talk pages over time using Python."},{flipped:!0,img:"./images/aqrate.jpg",title:"Web Developer Internship",subtitles:[{flag:"It",text:"Aqrate, Montebelluna, Italy | Summer of 2016 and 2017"}],description:"Continuous development of multiple restful web apps and APIs used by the company itself or their clients. Developed with Angular, .NET Framework, ASP-NET MVC and Azure authentication services with TypeScript, JavaScript and C#."}],Projects:[{img:"./images/rennes.jpg",title:"Summer School - Solutions for Healthier Digital Cities",subtitles:[{flag:"Fr",text:"Université de Rennes 1, Rennes, France | July 2022"}],description:"Two week summer school in Rennes on the topic of digital solutions for healthier cities organazied by EiT.                Work in teams on challenging cases, with the end goal of creating a start-up solving the problem.                We took courses on Entrepreneurship and Business analysis."},{img:"./images/eagle.jpg",title:"Eletric Racing Car Telemetry",subtitles:[{flag:"It",text:"Eagle TRT, Trento, Italy | Semptember 2020 - June 2021"}],description:"Developing a telemetry software using C for an electric formula SAE car, designed and build by the Eagle Trento racing team since September 2020."},{img:"./images/webapp.jpg",title:"Web Apps as management software",description:"Developed the following two management software applications as web apps using Vue, Node.js, MongoDB and SQL databases:<br />                <ul>                <li>Management software for the accomodation offered by the University of Trento through Opera.</li>                <li>Management software to catalogued books of the libraries of Bolzano through librilib(e)ri.</li>                </ui>"}]},l=null!==(i=null==s?void 0:s[o])&&void 0!==i?i:[];return e.$$set=e=>{"type"in e&&n(0,o=e.type)},[o,l,{Education:"Education",Experience:"Work Experiences",Projects:"Other Experiences"},(e,t,i)=>{n(1,t[i].showMore=!e.showMore,l)}]}class be extends W{constructor(e){super(),V(this,e,we,ve,s,{type:0})}}function $e(t){let n,i,o;return{c(){n=p("h3"),n.textContent="Skills",i=v(),o=p("div"),o.innerHTML='<h4 class="spacer svelte-qmc1x1">SOFT SKILLS:</h4> \n    <p class="spacer svelte-qmc1x1">Flexibility, Team work, Work under pressure</p> \n\n    <h4 class="svelte-qmc1x1">PROGRAMMING LANGUAGES:</h4> \n    <p class="svelte-qmc1x1">Typescript, Javascript, Python, C#, C++, Java</p> \n\n    <h4 class="svelte-qmc1x1">JS FRAMEWORKS:</h4> \n    <p class="svelte-qmc1x1">Vue, React, Angular, Express.js</p> \n\n    <h4 class="svelte-qmc1x1">DESKTOP &amp; MOBILE:</h4> \n    <p class="svelte-qmc1x1">.NET, Android Studio</p> \n\n    <h4 class="svelte-qmc1x1">DATABASES:</h4> \n    <p class="svelte-qmc1x1">Postgtres, MongoDB</p> \n\n    <h4 class="svelte-qmc1x1">IT SOFTWARES:</h4> \n    <p class="svelte-qmc1x1">Linux, Git, Docker</p> \n\n    <h4 class="svelte-qmc1x1">CLOUD INFRASTRUCTURE:</h4> \n    <p class="svelte-qmc1x1">Google Cloud, Azure, Aws, Heroku</p> \n\n    <h4 class="svelte-qmc1x1">OTHER SOFTWARES:</h4> \n    <p class="svelte-qmc1x1">Office suite, Photoshop, Premiere Pro</p>',b(o,"class","skills svelte-qmc1x1")},m(e,t){h(e,n,t),h(e,i,t),h(e,o,t)},p:e,i:e,o:e,d(e){e&&u(n),e&&u(i),e&&u(o)}}}class xe extends W{constructor(e){super(),V(this,e,null,$e,s,{})}}function Ce(t){let n,i,o;return{c(){n=p("h3"),n.textContent="and more",i=v(),o=p("div"),o.innerHTML='<div class="something svelte-2tnmqn"><h4>Hackathon and Competitive Coding challenge</h4> \n        <div><ul class="svelte-2tnmqn"><li class="svelte-2tnmqn">Google HashCode (2019 and 2020)</li> \n                <li class="svelte-2tnmqn">Reply Code challenge (2020)</li> \n                <li class="svelte-2tnmqn">“Code vs Covid19” online (2020) - WebApp to track Covid19 in Vue.js</li> \n                <li class="svelte-2tnmqn">“NOI Hackathon” in Bolzano (2019) - Alexa voice recognition skill - 1st position</li> \n                <li class="svelte-2tnmqn">&quot;hack.developers&quot; in Venice (2017) - Angular Component for Italian public administration</li></ul></div></div> \n\n    <div class="something svelte-2tnmqn"><h4>Tutor and organizer</h4> \n        <p>Tutor and organizer of 3 courses addressed to members of voluntary associations and other students about “Computer use essentials”, “The basics of Photoshop” and “The basics of Angular” from 2016 to 2018</p></div> \n\n    <div class="something svelte-2tnmqn"><h4>Photos &amp; Video Editing</h4> \n        <p>Filmed and edited short videos and photos for local public initiative like calendars, local festival posters and short videos for some of my city events. Edited using Adobe Photoshop, Adobe Premiere Pro and Adobe After Effects.</p></div>',b(o,"class","somethings")},m(e,t){h(e,n,t),h(e,i,t),h(e,o,t)},p:e,i:e,o:e,d(e){e&&u(n),e&&u(i),e&&u(o)}}}class ke extends W{constructor(e){super(),V(this,e,null,Ce,s,{})}}function ye(e){let t;return{c(){t=p("ul"),t.innerHTML="<li>Understand and describe the devices and services used to support communications in data networks and the Internet</li> \n                <li>Understand and describe the role of protocol layers in data networks</li> \n                <li>Understand and describe the importance of addressing and naming schemes at various layers of data networks in IPv4 and IPv6 environments</li> \n                <li>Design, calculate, and apply subnet masks and addresses to fulfill given requirements in IPv4 and IPv6 networks</li> \n                <li>Explain fundamental Ethernet concepts such as media, services, and operations</li> \n                <li>Build a simple Ethernet network using routers and switches</li> \n                <li>Use Cisco command-line interface (CLI) commands to perform basic router and switch configurations</li> \n                <li>Utilize common network utilities to verify small network operations and analyze data traffic</li>"},m(e,n){h(e,t,n)},d(e){e&&u(t)}}}function Le(e){let t,n;return{c(){t=f("Overal Score: 189\n        "),n=p("ul"),n.innerHTML="<li>Reading: 195</li> \n            <li>Use of English: 190</li> \n            <li>Writing: 171</li> \n            <li>Listening: 201</li> \n            <li>Speaking: 188</li>"},m(e,i){h(e,t,i),h(e,n,i)},d(e){e&&u(t),e&&u(n)}}}function Ae(t){let n,o,s,l,r,a,c,m,g,x,C,k,y,L,A,S,M,T,E,B,I,z,q,P,D=t[0]?"Show less":"Show more",H=t[1]?"Show less":"Show more",j=t[0]&&ye(),N=t[1]&&Le();return{c(){n=p("h3"),n.textContent="Certificates",o=v(),s=p("div"),l=p("div"),r=p("h4"),r.textContent="CCNA Routing and Switching: Introduction to Networks",a=v(),c=p("h5"),c.textContent="Cisco Network accademy | November 2017",m=v(),j&&j.c(),g=v(),x=p("p"),C=f(D),k=v(),y=p("div"),L=p("h4"),L.textContent="Certificate in Advance English (CAE)",A=v(),S=p("h5"),S.textContent="Cambridge English | March 2017",M=v(),T=p("p"),T.textContent="Cambridge English Level 2 Certificate in ESOL International (Advance)",E=v(),N&&N.c(),B=v(),I=p("p"),z=f(H),b(r,"class","svelte-1qv02er"),b(c,"class","svelte-1qv02er"),b(x,"class","show-more"),b(l,"class","something svelte-1qv02er"),b(L,"class","svelte-1qv02er"),b(S,"class","svelte-1qv02er"),b(I,"class","show-more"),b(y,"class","something svelte-1qv02er"),b(s,"class","somethings")},m(e,i){h(e,n,i),h(e,o,i),h(e,s,i),d(s,l),d(l,r),d(l,a),d(l,c),d(l,m),j&&j.m(l,null),d(l,g),d(l,x),d(x,C),d(s,k),d(s,y),d(y,L),d(y,A),d(y,S),d(y,M),d(y,T),d(y,E),N&&N.m(y,null),d(y,B),d(y,I),d(I,z),q||(P=[w(x,"click",t[2]),w(I,"click",t[3])],q=!0)},p(e,[t]){e[0]?j||(j=ye(),j.c(),j.m(l,g)):j&&(j.d(1),j=null),1&t&&D!==(D=e[0]?"Show less":"Show more")&&$(C,D),e[1]?N||(N=Le(),N.c(),N.m(y,B)):N&&(N.d(1),N=null),2&t&&H!==(H=e[1]?"Show less":"Show more")&&$(z,H)},i:e,o:e,d(e){e&&u(n),e&&u(o),e&&u(s),j&&j.d(),N&&N.d(),q=!1,i(P)}}}function Se(e,t,n){let i=!1,o=!1;return[i,o,()=>{n(0,i=!i)},()=>{n(1,o=!o)}]}class Me extends W{constructor(e){super(),V(this,e,Se,Ae,s,{})}}function Te(e,t,n){const i=e.slice();return i[2]=t[n],i}function Ee(e,t,n){const i=e.slice();return i[5]=t[n],i}function Be(t){let n,i,o,s,l,r,a,c,m=t[5].name+"",g=t[5].description+"";return{c(){n=p("a"),i=p("p"),o=f(m),s=v(),l=p("p"),r=f(g),a=v(),b(i,"class","name svelte-1vwb4g4"),b(l,"class","description svelte-1vwb4g4"),b(n,"href",c=t[5].link),b(n,"target","”_blank”"),b(n,"class","svelte-1vwb4g4")},m(e,t){h(e,n,t),d(n,i),d(i,o),d(n,s),d(n,l),d(l,r),d(n,a)},p:e,d(e){e&&u(n)}}}function Ie(e){let t,n,i,o,s,l,r=e[2].name+"",a=e[2].projects,c=[];for(let t=0;t<a.length;t+=1)c[t]=Be(Ee(e,a,t));return{c(){t=p("div"),n=p("h4"),i=f(r),o=v(),s=p("div");for(let e=0;e<c.length;e+=1)c[e].c();l=v(),b(n,"class","svelte-1vwb4g4"),b(s,"class","list"),b(t,"class","something svelte-1vwb4g4")},m(e,r){h(e,t,r),d(t,n),d(n,i),d(t,o),d(t,s);for(let e=0;e<c.length;e+=1)c[e].m(s,null);d(t,l)},p(e,t){if(2&t){let n;for(a=e[2].projects,n=0;n<a.length;n+=1){const i=Ee(e,a,n);c[n]?c[n].p(i,t):(c[n]=Be(i),c[n].c(),c[n].m(s,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=a.length}},d(e){e&&u(t),m(c,e)}}}function ze(e){let t,n,i,o,s,l,r,a,g,f,w=e[1],$=[];for(let t=0;t<w.length;t+=1)$[t]=Ie(Te(e,w,t));return a=new Z({props:{color:"#FFF",size:"32"}}),{c(){t=p("h3"),t.textContent="Personal Projects",n=v(),i=p("div");for(let e=0;e<$.length;e+=1)$[e].c();o=v(),s=p("div"),l=p("a"),r=p("p"),r.textContent="And many more on my Github",N(a.$$.fragment),b(i,"class","somethings"),b(r,"class","svelte-1vwb4g4"),b(l,"href","https://github.com/nicolatoscan"),b(l,"target","_blank"),b(l,"class",g=c(e[0]?"dark":"#000")+" svelte-1vwb4g4"),b(s,"class","more-github svelte-1vwb4g4")},m(e,c){h(e,t,c),h(e,n,c),h(e,i,c);for(let e=0;e<$.length;e+=1)$[e].m(i,null);h(e,o,c),h(e,s,c),d(s,l),d(l,r),R(a,l,null),f=!0},p(e,[t]){if(2&t){let n;for(w=e[1],n=0;n<w.length;n+=1){const o=Te(e,w,n);$[n]?$[n].p(o,t):($[n]=Ie(o),$[n].c(),$[n].m(i,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=w.length}(!f||1&t&&g!==(g=c(e[0]?"dark":"#000")+" svelte-1vwb4g4"))&&b(l,"class",g)},i(e){f||(H(a.$$.fragment,e),f=!0)},o(e){j(a.$$.fragment,e),f=!1},d(e){e&&u(t),e&&u(n),e&&u(i),m($,e),e&&u(o),e&&u(s),_(a)}}}function qe(e,t,n){let{darkTheme:i}=t;return e.$$set=e=>{"darkTheme"in e&&n(0,i=e.darkTheme)},[i,[{name:"Web",projects:[{name:"CV",link:"https://github.com/nicolatoscan/cv",description:"This website"},{name:"Rememo",link:"https://github.com/nicolatoscan/rememo-webapp",description:"WebApp with flashcards to learn languages"},{name:"Monopoly Bank",link:"https://github.com/nicolatoscan/monopoly-bank",description:'Manage a "Credit card Monopoly" game when the card reader breaks'},{name:"Concorso Presepi",link:"https://github.com/nicolatoscan/concorso-presepi-2020",description:"Vote for the best nativity scene in my Village"},{name:"Copy Lorem Ipsum",link:"https://github.com/nicolatoscan/copy-lorem-ipsum",description:"By opening this site Lorem Ipsum will be copied in your clipboard"}]},{name:"Telegram & Discord Bots",projects:[{name:"Twitch to MP3",link:"https://github.com/nicolatoscan/twitch-to-mp3-telegram-bot",description:"Get a twitch live as a mp3 podcast on Telegram"},{name:"Laundry",link:"https://github.com/nicolatoscan/laundry-bot",description:"Check availability and book laundry in a student accomodation"},{name:"Aurora",link:"https://github.com/nicolatoscan/aurora-bot",description:"Allerts you when the northen lights may be visible"},{name:"P&S Grades",link:"https://github.com/nicolatoscan/probabilita-statistica-unitn-telegram-bot",description:"Get the latest daily grade of a course at the University of Trento"},{name:"Discord cinema",link:"https://github.com/nicolatoscan/cinebiscotto-discord-bot",description:"Create a channel on Discord and launch a countdown to watch a movie together"},{name:"Auto Suscriber Exam",link:"https://github.com/nicolatoscan/automatic-suscribe-exam",description:"Automatically suscribes you to the exam you want when a new place is available"},{name:"Telegram shell controller",link:"https://github.com/nicolatoscan/telegram-shell-controller",description:"Control your shell from your phone"},{name:"Files bot",link:"https://github.com/nicolatoscan/file-bot",description:"Remotely download a file and upload it to Telegram"}]},{name:"Android",projects:[{name:"Rememo",link:"https://github.com/nicolatoscan/rememo-android-app",description:"Android App with flashcards to learn languages"},{name:"Frier Timer",link:"https://github.com/nicolatoscan/FrierTimer",description:"Android app to check fring time in two basket friers"}]},{name:"Arduino",projects:[{name:"Smart lights",link:"https://github.com/nicolatoscan/smart-hub-console-controller",description:"Controll the lights of my house with Arduino"}]},{name:"Data Science & Algorithms",projects:[{name:"Wikipedia communities",link:"https://github.com/nicolatoscan/wikipedia-communities",description:"Detect wikipedia communities from the interaction graph"},{name:"Galaxies",link:"https://github.com/nicolatoscan/ml-galaxies",description:"Classify galaxies from their images"},{name:"Wikipedia emotions",link:"https://github.com/nicolatoscan/wiki-emo-dp",description:"Analysis of wikipedia emotions"},{name:"Masyu",link:"https://github.com/nicolatoscan/SWRace-JeffWho",description:"Our proposal to solve the Masyu puzzle, a NP problem"}]}]]}class Pe extends W{constructor(e){super(),V(this,e,qe,ze,s,{darkTheme:0})}}function De(t){let n,i;return{c(){n=g("svg"),i=g("path"),b(i,"d","M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"),b(i,"fill",t[2]),b(n,"width",t[0]),b(n,"height",t[1]),b(n,"viewBox",t[3])},m(e,t){h(e,n,t),d(n,i)},p(e,[t]){4&t&&b(i,"fill",e[2]),1&t&&b(n,"width",e[0]),2&t&&b(n,"height",e[1]),8&t&&b(n,"viewBox",e[3])},i:e,o:e,d(e){e&&u(n)}}}function He(e,t,n){let{size:i="1em"}=t,{width:o=i}=t,{height:s=i}=t,{color:l="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,o=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[o,s,l,r,i]}class je extends W{constructor(e){super(),V(this,e,He,De,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function Ne(t){let n,i;return{c(){n=g("svg"),i=g("path"),b(i,"d","M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"),b(i,"fill",t[2]),b(n,"width",t[0]),b(n,"height",t[1]),b(n,"viewBox",t[3])},m(e,t){h(e,n,t),d(n,i)},p(e,[t]){4&t&&b(i,"fill",e[2]),1&t&&b(n,"width",e[0]),2&t&&b(n,"height",e[1]),8&t&&b(n,"viewBox",e[3])},i:e,o:e,d(e){e&&u(n)}}}function Re(e,t,n){let{size:i="1em"}=t,{width:o=i}=t,{height:s=i}=t,{color:l="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,o=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[o,s,l,r,i]}class _e extends W{constructor(e){super(),V(this,e,Re,Ne,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function Oe(e){let t,n;return t=new _e({props:{color:"#ed9074",size:"32"}}),{c(){N(t.$$.fragment)},m(e,i){R(t,e,i),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function Ve(e){let t,n;return t=new je({props:{color:"#ed9074",size:"32"}}),{c(){N(t.$$.fragment)},m(e,i){R(t,e,i),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function We(e){let t,n,i,o,s,l,r,a,m,g,f,$,x,C,k,y,L,A,S,M,T,E,B,I,z,q,O,V,W,F,G,J,Z,K,Q;n=new U({});let X=e[0]&&Oe(),Y=!e[0]&&Ve();return a=new re({}),f=new be({props:{type:"Education"}}),C=new be({props:{type:"Experience"}}),L=new xe({}),M=new be({props:{type:"Projects"}}),B=new Pe({props:{darkTheme:e[0]}}),q=new ke({}),W=new Me({}),{c(){t=p("div"),N(n.$$.fragment),i=v(),o=p("div"),X&&X.c(),s=v(),Y&&Y.c(),l=v(),r=p("div"),N(a.$$.fragment),m=v(),g=p("div"),N(f.$$.fragment),$=v(),x=p("div"),N(C.$$.fragment),k=v(),y=p("div"),N(L.$$.fragment),A=v(),S=p("div"),N(M.$$.fragment),T=v(),E=p("div"),N(B.$$.fragment),I=v(),z=p("div"),N(q.$$.fragment),O=v(),V=p("div"),N(W.$$.fragment),F=v(),G=p("footer"),G.innerHTML='<p class="svelte-6ono55">Made with Svelte by Me</p> \n    <p class="svelte-6ono55">Last updated September 2022</p>',b(o,"class","theme-switch svelte-6ono55"),b(r,"id","about-me"),b(r,"class","section svelte-6ono55"),b(g,"id","education"),b(g,"class","section svelte-6ono55"),b(x,"id","experiences"),b(x,"class","section svelte-6ono55"),b(y,"id","skills"),b(y,"class","section svelte-6ono55"),b(S,"id","other-experiences"),b(S,"class","section svelte-6ono55"),b(E,"id","projects"),b(E,"class","section svelte-6ono55"),b(z,"id","else"),b(z,"class","section svelte-6ono55"),b(V,"id","certifications"),b(V,"class","section svelte-6ono55"),b(G,"class","svelte-6ono55"),b(t,"class",J=c(e[0]?"main dark":"main")+" svelte-6ono55")},m(c,u){h(c,t,u),R(n,t,null),d(t,i),d(t,o),X&&X.m(o,null),d(o,s),Y&&Y.m(o,null),d(t,l),d(t,r),R(a,r,null),d(t,m),d(t,g),R(f,g,null),d(t,$),d(t,x),R(C,x,null),d(t,k),d(t,y),R(L,y,null),d(t,A),d(t,S),R(M,S,null),d(t,T),d(t,E),R(B,E,null),d(t,I),d(t,z),R(q,z,null),d(t,O),d(t,V),R(W,V,null),d(t,F),d(t,G),Z=!0,K||(Q=w(o,"click",e[1]),K=!0)},p(e,[n]){e[0]?X?1&n&&H(X,1):(X=Oe(),X.c(),H(X,1),X.m(o,s)):X&&(P(),j(X,1,1,(()=>{X=null})),D()),e[0]?Y&&(P(),j(Y,1,1,(()=>{Y=null})),D()):Y?1&n&&H(Y,1):(Y=Ve(),Y.c(),H(Y,1),Y.m(o,null));const i={};1&n&&(i.darkTheme=e[0]),B.$set(i),(!Z||1&n&&J!==(J=c(e[0]?"main dark":"main")+" svelte-6ono55"))&&b(t,"class",J)},i(e){Z||(H(n.$$.fragment,e),H(X),H(Y),H(a.$$.fragment,e),H(f.$$.fragment,e),H(C.$$.fragment,e),H(L.$$.fragment,e),H(M.$$.fragment,e),H(B.$$.fragment,e),H(q.$$.fragment,e),H(W.$$.fragment,e),Z=!0)},o(e){j(n.$$.fragment,e),j(X),j(Y),j(a.$$.fragment,e),j(f.$$.fragment,e),j(C.$$.fragment,e),j(L.$$.fragment,e),j(M.$$.fragment,e),j(B.$$.fragment,e),j(q.$$.fragment,e),j(W.$$.fragment,e),Z=!1},d(e){e&&u(t),_(n),X&&X.d(),Y&&Y.d(),_(a),_(f),_(C),_(L),_(M),_(B),_(q),_(W),K=!1,Q()}}}function Fe(e,t,n){let i="true"===localStorage.getItem("darkTheme");return[i,function(){n(0,i=!i),localStorage.setItem("darkTheme",i?"true":"false")}]}return new class extends W{constructor(e){super(),V(this,e,Fe,We,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
