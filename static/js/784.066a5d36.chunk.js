"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[784],{8784:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var s=n(5861),a=n(4942),i=n(1413),c=n(9439),r=n(7757),l=n.n(r),m=n(2791),_=n(9434),p=n(1087),h=n(7689),u=n(1243),o=function(){var e=(0,s.Z)(l().mark((function e(t){var n,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/shipments/".concat(t));case 3:return n=e.sent,s=n.data,e.abrupt("return",s);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=o,x=n(1999),g={block:"ShipmentPage_block__Qd9cI",page__container:"ShipmentPage_page__container__sx-9l",shipment__title:"ShipmentPage_shipment__title__3arO-",shipment__form:"ShipmentPage_shipment__form__aXE92",shipment__container:"ShipmentPage_shipment__container__pg4LL",shipment__input:"ShipmentPage_shipment__input__pR2Za",shipment__submit:"ShipmentPage_shipment__submit__7VrLY",shipment__back:"ShipmentPage_shipment__back__uZSm9"},b=n(184);function N(){var e=(0,m.useState)(""),t=(0,c.Z)(e,2),n=t[0],r=t[1],u=(0,m.useState)(!1),o=(0,c.Z)(u,2),N=o[0],f=o[1],v=(0,h.UO)().id,j=(0,_.I0)(),k=(0,h.s0)();(0,m.useEffect)((function(){d(v).then((function(e){e?r(e):(r(""),k("/notFound"))}))}),[v,k]);var S=function(e){var t=e.target,s=t.name,c=t.value;n[s]!==c&&(r((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},s,c))})),console.log(n),f(!0))},Z=function(){var e=(0,s.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j((0,x.zT)(n));case 3:f(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsx)("div",{className:g.block,children:(0,b.jsxs)("div",{className:g.page__container,children:[(0,b.jsx)("h2",{className:g.shipment__title,children:"Shipment Details"}),(0,b.jsxs)("form",{onSubmit:Z,className:g.shipment__form,children:[(0,b.jsxs)("div",{className:g.shipment__container,children:[(0,b.jsx)("label",{htmlFor:"id",className:g.shipment__lable,children:"orderNo:"}),(0,b.jsx)("input",{type:"text",id:"id",disabled:!0,name:"id",value:n.id||"",className:g.shipment__input})]}),(0,b.jsxs)("div",{className:g.shipment__container,children:[(0,b.jsx)("label",{htmlFor:"date",className:g.shipment__lable,children:"date:"}),(0,b.jsx)("input",{type:"text",id:"date",name:"date",value:n.date||"",onChange:S,className:g.shipment__input})]}),(0,b.jsxs)("div",{className:g.shipment__container,children:[(0,b.jsx)("label",{htmlFor:"customer",className:g.shipment__lable,children:"customer:"}),(0,b.jsx)("input",{type:"text",id:"customer",name:"customer",value:n.customer||"",onChange:S,className:g.shipment__input})]}),(0,b.jsxs)("div",{className:g.shipment__container,children:[(0,b.jsx)("label",{htmlFor:"trackingNo",className:g.shipment__lable,children:"trackingNo:"}),(0,b.jsx)("input",{type:"text",id:"trackingNo",name:"trackingNo",value:n.trackingNo||"",onChange:S,className:g.shipment__input})]}),(0,b.jsxs)("div",{className:g.shipment__container,children:[(0,b.jsx)("label",{htmlFor:"consignee",className:g.shipment__lable,children:"consignee:"}),(0,b.jsx)("input",{type:"text",id:"consignee",name:"consignee",value:n.consignee||"",onChange:S,className:g.shipment__input})]}),(0,b.jsxs)("div",{className:g.shipment__container,children:[(0,b.jsx)("label",{htmlFor:"status",className:g.shipment__lable,children:"status:"}),(0,b.jsx)("input",{type:"text",id:"status",name:"status",value:n.status||"",onChange:S,className:g.shipment__input})]}),(0,b.jsx)("button",{type:"submit",disabled:!N,className:g.shipment__submit,children:"Edit"}),(0,b.jsx)(p.rU,{to:"/shipments",className:g.shipment__back,children:"Go back"})]})]})})}}}]);
//# sourceMappingURL=784.066a5d36.chunk.js.map