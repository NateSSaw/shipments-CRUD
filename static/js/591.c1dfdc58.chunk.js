"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[591],{591:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var s=t(9439),r=t(9434),i=function(n){return n.shipments.shipmentsList},c=function(n){return n.shipments.isLoading},a="LoadMoreBtn_load__izGLg",o="LoadMoreBtn_center__5Yoyo",l=t(184),d=function(n){var e=n.page,t=n.onNextPage,s=n.onPrevPage,c=(0,r.v9)(i);return(0,l.jsxs)("div",{className:o,children:[e>1&&(0,l.jsx)("button",{className:a,type:"button",onClick:s,children:"Prev Page"}),(null===c||void 0===c?void 0:c.length)>0&&e<10&&(0,l.jsx)("button",{className:a,type:"button",onClick:t,children:"Next Page"})]})},u="Spiner_spinner__noRo0",h="Spiner_wrapper__CjprP";function x(){return(0,l.jsx)("div",{className:h,children:(0,l.jsx)("i",{className:u})})}var j=function(){return(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"ORDERNO"}),(0,l.jsx)("th",{children:"DELIVERYDATE"}),(0,l.jsx)("th",{children:"CUSTOMER"}),(0,l.jsx)("th",{children:"TRACKINGNO"}),(0,l.jsx)("th",{children:"STATUS"}),(0,l.jsx)("th",{colSpan:"2",children:"CONSIGNEE"})]})})},_=t(1087),f=t(1999),m="TableRow_body__thw+O",p="TableRow_container__btn__kUQav",b="TableRow_edit__ofjjv",v="TableRow_delete__+PYLI",N=function(){var n=(0,r.v9)(i),e=(0,r.I0)();return(0,l.jsx)("tbody",{className:m,children:n&&n.map((function(n){var t=n.id,s=n.date,r=n.customer,i=n.trackingNo,c=n.status,a=n.consignee;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:t}),(0,l.jsx)("td",{children:s}),(0,l.jsx)("td",{children:r}),(0,l.jsx)("td",{children:i}),(0,l.jsx)("td",{children:c}),(0,l.jsx)("td",{children:a}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)(_.rU,{className:b,to:"/shipments/".concat(t)}),(0,l.jsx)("button",{type:"button",className:v,onClick:function(){return function(n){e((0,f.x0)(n))}(t)}})]})})]},t)}))})},g=t(2791),P="ShipmentsTable_container__oWFXY",T="ShipmentsTable_table__oCm59";function C(){var n=(0,g.useState)(1),e=(0,s.Z)(n,2),t=e[0],i=e[1],a=(0,r.I0)(),o=(0,r.v9)(c);(0,g.useEffect)((function(){a((0,f.bB)(t))}),[a,t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:P,children:(0,l.jsxs)("table",{className:T,children:[(0,l.jsx)(j,{}),(0,l.jsx)(N,{})]})}),o&&(0,l.jsx)(x,{}),!o&&(0,l.jsx)(d,{page:t,onNextPage:function(){i((function(n){return n+1}))},onPrevPage:function(){i((function(n){return n-1}))}})]})}function R(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(C,{})})}}}]);
//# sourceMappingURL=591.c1dfdc58.chunk.js.map