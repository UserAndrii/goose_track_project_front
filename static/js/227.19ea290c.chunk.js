"use strict";(self.webpackChunkgoose_track_project_front=self.webpackChunkgoose_track_project_front||[]).push([[227],{92333:function(n,t,e){e.d(t,{g:function(){return s}});var i=e(57689),r=e(15302),a=e(3216),d=e(91951),o=e(80184),s=function(n){var t=n.isMonthPage,e=n.nextPeriod,s=n.prevPeriod,l=n.currentMonth,x=n.currentDay,h=(0,i.UO)().currentDate,u=(0,a.default)(h,"yyyy-MM-dd",new Date),p=void 0===h?l:u,c=void 0===h?x:u;return(0,o.jsxs)("div",{className:r.Z.toolbar__innerBlock,children:[(0,o.jsx)("button",{className:r.Z.toolbar__curerntDate,children:t?(0,d.default)(p,"MMMM yyyy"):(0,d.default)(c,"d MMMM yyyy")}),(0,o.jsxs)("div",{className:r.Z.toggleButtons,children:[(0,o.jsx)("button",{className:r.Z.toggleButtons__previous,onClick:s,children:"<"}),(0,o.jsx)("button",{className:r.Z.toggleButtons__next,onClick:e,children:">"})]})]})}},99227:function(n,t,e){e.r(t),e.d(t,{default:function(){return K}});var i=e(29439),r=e(92333),a=e(93433),d=e(72791),o=e(48128),s=e(82839),l=e(90466),x=e(12891),h=e(17684),u=e(53336),p=e(87970),c=e(72274),g=e(80184);function f(n){var t=n.x,e=n.y,i=n.width,r=n.height,a=n.borderRadius;return(0,g.jsx)("g",{children:(0,g.jsx)("rect",{x:t,y:e,width:i,height:r,fill:"url(#pvGradient)",rx:a,ry:a})})}function m(n){var t=n.x,e=n.y,i=n.width,r=n.height,a=n.borderRadius;return(0,g.jsx)("g",{children:(0,g.jsx)("rect",{x:t,y:e,width:i,height:r,fill:"url(#uvGradient)",rx:a,ry:a})})}var y=function(n){var t=n.x,e=n.y,i=n.width,r=n.value,a=n.lineHeight,d=n.fontSize;return(0,g.jsx)("g",{children:(0,g.jsxs)("text",{x:t+i/2,y:e-10,fill:"#343434",textAnchor:"middle",dominantBaseline:"middle",fontSize:d,fontStyle:"normal",fontWeight:500,fontFamily:"Poppins",lineheight:a,children:[r,"%"]})})},v=[{name:"To Do",uv:0,pv:0},{name:"In Progress",uv:0,pv:0},{name:"Done",uv:0,pv:0}];function w(n){var t=n.currentDay,e=n.currentMonth,r=(0,d.useState)(860),w=(0,i.Z)(r,2),j=w[0],b=w[1],Z=(0,d.useState)(440),S=(0,i.Z)(Z,2),D=S[0],M=S[1],k=(0,d.useState)(27),z=(0,i.Z)(k,2),_=z[0],R=z[1],F=(0,d.useState)(40),E=(0,i.Z)(F,2),P=E[0],C=E[1],N=(0,d.useState)(40),O=(0,i.Z)(N,2),B=O[0],G=O[1],L=(0,d.useState)(40),T=(0,i.Z)(L,2),I=T[0],K=T[1],W=(0,d.useState)(16),H=(0,i.Z)(W,2),$=H[0],q=H[1],A=(0,d.useState)(18),U=(0,i.Z)(A,2),J=U[0],Q=U[1],V=(0,d.useState)(14),X=(0,i.Z)(V,2),Y=X[0],nn=X[1],tn=(0,d.useState)(21),en=(0,i.Z)(tn,2),rn=en[0],an=en[1],dn=(0,d.useState)(v),on=(0,i.Z)(dn,2),sn=on[0],ln=on[1],xn=(0,c.o)(e),hn=xn.data,un=xn.refetch;return(0,d.useEffect)((function(){if(un(),hn){var n=(0,a.Z)(hn.data);if(n&&n.length>0){var e=[{name:"To Do",uv:0===n.length?0:Math.ceil(n.filter((function(n){return"TODO"===n.category})).length/n.length*100),pv:0===n.filter((function(n){return n.date===t})).length?0:Math.ceil(n.filter((function(n){return"TODO"===n.category&&n.date===t})).length/n.filter((function(n){return n.date===t})).length*100)},{name:"In Progress",uv:0===n.length?0:Math.ceil(n.filter((function(n){return"INPROGRESS"===n.category})).length/n.length*100),pv:0===n.filter((function(n){return n.date===t})).length?0:Math.ceil(n.filter((function(n){return"INPROGRESS"===n.category&&n.date===t})).length/n.filter((function(n){return n.date===t})).length*100)},{name:"Done",uv:0===n.length?0:Math.ceil(n.filter((function(n){return"DONE"===n.category})).length/n.length*100),pv:0===n.filter((function(n){return n.date===t})).length?0:Math.ceil(n.filter((function(n){return"DONE"===n.category&&n.date===t})).length/n.filter((function(n){return n.date===t})).length*100)}];ln(e)}else ln(v)}}),[hn,t,un]),(0,d.useEffect)((function(){function n(){var n=window.innerWidth;n<=375||n<=768?(b(307),M(418),R(22),C(14),G(80),K(40),q("12px"),Q("16px"),nn("12px"),an("16px")):n<1440?(b(640),M(424),R(27),C(32),G(64),K(32),q("16px"),Q("18px"),nn("14px"),an("21px")):(b(860),M(440),R(27),C(40),G(80),K(40),q("16px"),Q("18px"),nn("14px"),an("21px"))}return n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),(0,g.jsxs)(o.v,{width:j,height:D,data:sn,margin:{top:B,right:P,left:P,bottom:I},style:{border:"0.8px solid #E3F3FF",borderRadius:16},children:[(0,g.jsx)(s.q,{strokeDasharray:"0 0",vertical:!1,stroke:"#E3F3FF",horizontal:{strokeWidth:1}}),(0,g.jsx)(l.K,{dataKey:"name",axisLine:!1,tickLine:!1,tick:{dy:19},style:{color:"#343434",fontSize:"14px",fontWeight:400,lineHeight:"21px"}}),(0,g.jsx)(x.B,{axisLine:!1,tickLine:!1,domain:[0,100],tick:{dx:-P,color:"#343434",fontSize:"14px",fontWeight:400,lineHeight:"150%"},children:(0,g.jsx)(h._,{value:"Tasks",position:"top",dx:-25,dy:-24,style:{color:"#343434",fontSize:Y,fontWeight:600,lineHeight:rn}})}),(0,g.jsx)(u.$,{dataKey:"pv",fill:"none",shape:(0,g.jsx)(f,{borderRadius:8}),barSize:_,style:{zIndex:2},children:(0,g.jsx)(p.e,{dataKey:"pv",content:y,lineheight:J,fontSize:$})}),(0,g.jsx)(u.$,{dataKey:"uv",barSize:_,fill:"none",style:{zIndex:2,borderTopLeftRadius:0,borderTopRightRadius:0},shape:(0,g.jsx)(m,{borderRadius:8}),children:(0,g.jsx)(p.e,{dataKey:"uv",content:y,lineheight:J,fontSize:$})}),(0,g.jsxs)("defs",{children:[(0,g.jsxs)("linearGradient",{id:"pvGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,g.jsx)("stop",{offset:"0%",stopColor:"rgba(255, 210, 221, 0)"}),(0,g.jsx)("stop",{offset:"100%",stopColor:"#FFD2DD"})]}),(0,g.jsxs)("linearGradient",{id:"uvGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,g.jsx)("stop",{offset:"0%",stopColor:"rgba(62, 133, 243, 0)"}),(0,g.jsx)("stop",{offset:"100%",stopColor:"#3E85F3"})]})]})]})}var j,b,Z,S,D,M,k=e(30168),z=e(50225),_=z.Z.div(j||(j=(0,k.Z)(["\n  width: 1057px;\n  height: 100%;\n  box-sizing: border-box;\n  background-color: var(--main-background-color);\n  border-radius: 16px;\n  padding: 0 114px;\n  padding-top: 134px;\n  padding-bottom: auto;\n\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n\n  @media (max-width: 375px) {\n    max-width: 335px;\n    height: 100%;\n    margin: 0 auto;\n    padding: 0 14px;\n    padding-top: 28px;\n    padding-bottom: auto;\n  }\n\n  @media screen and (min-width: 376px) and (max-width: 767px) {\n    width: 335px;\n    height: 100%;\n    padding: 0 14px;\n    padding-top: 28px;\n    padding-bottom: auto;\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1439px) {\n    width: 704px;\n    height: 100%;\n    padding: 0 32px;\n    padding-top: 140px;\n    padding-bottom: auto;\n  }\n"]))),R=z.Z.div(b||(b=(0,k.Z)(["\n  width: 860px;\n  display: flex;\n  margin-bottom: 40px;\n  padding: 0 40px;\n\n  @media (max-width: 375px) {\n    max-width: 307px;\n    height: auto;\n    flex-direction: column;\n    padding: 0;\n  }\n\n  @media screen and (min-width: 376px) and (max-width: 767px) {\n    width: 307px;\n    flex-direction: column;\n    padding: 0;\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1439px) {\n    width: 640px;\n    padding: 0 32px;\n  }\n"]))),F=z.Z.div(Z||(Z=(0,k.Z)(["\n  display: flex;\n  width: 179px;\n\n  @media (max-width: 375px) {\n    max-width: 158;\n    height: auto;\n    margin-top: 20px;\n  }\n  @media screen and (min-width: 376px) and (max-width: 767px) {\n    margin-top: 20px;\n  }\n"]))),E=z.Z.div(S||(S=(0,k.Z)(["\n  width: 90px;\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n\n  // justify-content: center;\n  // align-items: center;\n  // margin: 0 auto;\n\n  @media (max-width: 375px) {\n    margin-right: 14px;\n  }\n\n  @media screen and (min-width: 376px) and (max-width: 767px) {\n    margin-right: 14px;\n  }\n"]))),P=z.Z.div(D||(D=(0,k.Z)(["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n"]))),C=z.Z.p(M||(M=(0,k.Z)(["\n  color: var(--calendar-date-color);\n  font-family: Poppins, sans-serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  @media (max-width: 375px) {\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 376px) and (max-width: 767px) {\n    font-size: 14px;\n  }\n"]))),N=e(74157),O=e(39040),B=e(1104),G=e(76753),L=e(74888),T=e(28030),I=e(91951),K=function(){var n=(0,d.useState)((0,N.Z)()),t=(0,i.Z)(n,2),e=t[0],a=t[1],o=(0,d.useState)(e),s=(0,i.Z)(o,2),l=s[0],x=s[1];return(0,g.jsxs)(_,{children:[(0,g.jsxs)(R,{children:[(0,g.jsx)(r.g,{currentDay:e,isMonthPage:!1,nextPeriod:function(){var n=(0,O.default)(e,1);1===n.getDate()&&x((0,B.default)(l,1)),a(n)},prevPeriod:function(){var n=(0,G.default)(e,1);n.getDate()===(0,L.default)((0,T.default)(l,1)).getDate()&&x((0,T.default)(l,1)),a(n)}}),(0,g.jsxs)(F,{children:[(0,g.jsxs)(E,{children:[(0,g.jsx)(P,{style:{backgroundColor:"#FFD2DD",marginRight:"8px"}}),(0,g.jsx)(C,{children:"By Day"})]}),(0,g.jsxs)(E,{children:[(0,g.jsx)(P,{style:{backgroundColor:"#3E85F3",marginRight:"8px"}}),(0,g.jsx)(C,{children:"By Month"})]})]})]}),(0,g.jsx)(w,{currentDay:(0,I.default)(e,"yyyy-MM-dd"),currentMonth:(0,I.default)(l,"yyyy-MM")})]})}}}]);
//# sourceMappingURL=227.19ea290c.chunk.js.map