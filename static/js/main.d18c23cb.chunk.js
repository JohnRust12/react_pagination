(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),r=t(4),i=t(1);t(10);function l(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var s=t(2),o=t.n(s),j=t(0),d=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,r=l(1,Math.ceil(a/t)),i=1===c,s=c===Math.ceil(a/t),d=function(e){s||"next"!==e||n(c+1),i||"prev"!==e||n(c-1)};return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:i}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":i,onClick:function(){return d("prev")},children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:c===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:s}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":s,onClick:function(){return d("next")},children:"\xbb"})})]})},u=l(1,42).map((function(e){return"Item ".concat(e)})),h=[3,5,10,20],p=function(){var e=Object(i.useState)(5),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(1),l=Object(r.a)(n,2),s=l[0],o=l[1],p=(s-1)*t,g=s*t>u.length?u.length:s*t,m=u.slice(p,g);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(p+1," - ").concat(g," of ").concat(u.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){c(+e.target.value),o(1)},children:h.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:u.length,perPage:t,currentPage:s,onPageChange:o}),Object(j.jsx)("ul",{children:m.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d18c23cb.chunk.js.map