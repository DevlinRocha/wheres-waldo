(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{67:function(n,e,t){"use strict";t.r(e),t.d(e,"db",(function(){return Fn}));var i=t(5),r=t.n(i),o=t(47),c=t.n(o),s=t(48),a=t(16),d=t(11),l=t(19),u=t(14),b=t(12),h=t(2);function j(n){return Object(i.useEffect)((function(){!1===n.isGameOver?n.setIsTimerOn(!0):n.setIsTimerOn(!1)}),[n.isGameOver]),Object(i.useEffect)((function(){var e;return n.isTimerOn&&(e=setInterval((function(){n.setTime((function(n){return n+10}))}),10)),function(){clearInterval(e)}}),[n.isTimerOn]),Object(h.jsxs)("time",{onClick:function(){n.setIsTimerOn(!n.isTimerOn)},children:[Object(h.jsxs)("span",{children:[Math.floor(n.time/6e4%60).toString().slice(-2),":"]}),Object(h.jsx)("span",{children:("0"+Math.floor(n.time/1e3%60)).slice(-2)})]})}var p,x,f=t(13),O=b.c.aside(p||(p=Object(f.a)(["\n  justify-self: end;\n  transition: all 3s;\n\n  #levelList {\n    display: ","; // 'flex' or 'none'\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    background: white;\n    width: auto;\n    height: ",";\n    margin: 3px 16px 0 0;\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    transition: all 0.75s;\n    z-index: 1;\n    list-style-type: none;\n  }\n\n  a {\n    padding: 8px;\n    margin: 0;\n    opacity: ",";\n    display: ","; // 'inline-block' or 'none'\n    transition: opacity, background-color, color, 0.25s;\n    width: 100%;\n    height: 100%;\n    color: ",";\n  }\n\n  a:hover {\n    background-color: ",";\n    border-radius: ",";\n    color: white;\n  }\n\n  .active {\n    color: ",";\n  }\n"])),(function(n){return n.isDropDownOpen?"flex":"none"}),(function(n){return n.isDropDownOpen?"auto":"0px"}),(function(n){return n.theme.sizing.ul.padding}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.sizing.ul.borderRadius}),(function(n){return n.isDropDownOpen?1:0}),(function(n){return n.isDropDownOpen?"inline-block":"none"}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.sizing.ul.borderRadius}),(function(n){return n.theme.colors.secondary}));function m(n){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),r=t[0],o=t[1];function c(){n.setIsGameOver(!1),o(!1)}return Object(h.jsxs)(O,{isDropDownOpen:r,children:[Object(h.jsx)("button",{onClick:function(){o(!r)},children:"Level Select"}),Object(h.jsxs)("ul",{id:"levelList",children:[Object(h.jsx)(l.c,{onClick:c,exact:!0,to:"/gobbling-gluttons",children:Object(h.jsx)("li",{children:"Gobbling Gluttons"})}),Object(h.jsx)(l.c,{onClick:c,exact:!0,to:"/ski-resort",children:Object(h.jsx)("li",{children:"Ski Resort"})}),Object(h.jsx)(l.c,{onClick:c,exact:!0,to:"/toys-toys-toys",children:Object(h.jsx)("li",{children:"Toys! Toys! Toys!"})})]})]})}var g,w,y,v,k,T,M,W=b.c.nav(x||(x=Object(f.a)(["\n  position: sticky;\n  top: 0;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr auto 1fr;\n  align-items: center;\n  padding: 16px;\n  background-color: white;\n  gap: 8px;\n  z-index: 1;\n\n  #first {\n    color: ",";\n  }\n\n  #second {\n    color: ",";\n  }\n\n  time {\n    padding: 8px;\n    background-color: ",";\n    color: white;\n    border-radius: 7px;\n    cursor: pointer;\n  }\n\n  section {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    gap: 8px;\n  }\n\n  button {\n    cursor: pointer;\n    color: white;\n    background-color: ",";\n    padding: 5px;\n    border-radius: 7px;\n    border: inherit;\n    font: inherit;\n\n    a {\n      color: white;\n    }\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  ul {\n    display: flex;\n    flex-direction: rows;\n    gap: 10px;\n    list-style: none;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.primary}));function G(n){function e(){n.setIsGameOver(!1),n.setIsGameOn(!1),n.setLevel(void 0)}return Object(h.jsxs)(W,{children:[Object(h.jsx)("h1",{onClick:e,children:Object(h.jsxs)(l.b,{to:"/",children:[Object(h.jsx)("span",{id:"first",children:"Where's"})," ",Object(h.jsx)("span",{id:"second",children:"Waldo?"})]})}),n.isGameOn?Object(h.jsx)(j,{time:n.time,setTime:n.setTime,isTimerOn:n.isTimerOn,setIsTimerOn:n.setIsTimerOn,isGameOver:n.isGameOver}):null,Object(h.jsxs)("section",{children:[Object(h.jsx)(m,{setIsGameOver:n.setIsGameOver}),Object(h.jsx)(l.b,{onClick:e,to:"/high-scores",children:Object(h.jsx)("button",{children:"High Scores"})})]})]})}var I=b.c.main(g||(g=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  gap: 16px;\n  width: 100%;\n  height: auto;\n  text-align: center;\n\n  figure {\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    height: auto;\n    text-align: center;\n    overflow-x: none;\n  }\n\n  img {\n    object-fit: contain;\n  }\n\n  #homeLogo {\n    border: none;\n    width: 100%;\n    img {\n      width: 100%;\n      height: 35vh;\n    }\n  }\n\n  a {\n    border: 3px solid\n      ",";\n    border-radius: 8px;\n    padding: 16px;\n  }\n\n  h3 {\n    color: white;\n    color: black;\n    padding: 8px;\n    border-radius: 7px;\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary})),C=b.c.section(w||(w=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  gap: 16px;\n\n  figure {\n    height: auto;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  figcaption {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary})),S=Object(b.c)(C)(y||(y=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-content: space-around;\n  padding: 0 3vw;\n  height: auto;\n\n  a {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 8px;\n  }\n\n  img {\n    width: 100%;\n    height: 30vh;\n    object-fit: cover;\n    object-position: right bottom;\n    border-radius: 5px;\n  }\n\n  @media only screen and (device-width: 1000px) {\n    figure > * {\n      height: auto;\n      width: 100%;\n    }\n\n    img {\n      width: 100%;\n    }\n  }\n  @media only screen and (device-width: 669px) {\n    grid-auto-flow: row;\n    grid-template-columns: 1fr 1fr;\n  }\n  @media only screen and (device-width: 500px) {\n    grid-template-columns: 1fr;\n  }\n"]))),F=Object(b.c)(S)(v||(v=Object(f.a)(["\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  img {\n    max-width: 200px;\n    object-fit: contain;\n  }\n  @media only screen and (device-width: 669px) {\n    grid-auto-flow: row;\n    grid-template-columns: 1fr 1fr 1fr;\n    img {\n      height: 25vh;\n    }\n  }\n  @media only screen and (device-width: 360px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media only screen and (device-width: 300px) {\n    display: flex;\n  }\n"]))),D=(Object(b.c)(F)(k||(k=Object(f.a)(["\n  @media only screen and (device-width: 1000px) {\n    img {\n      height: 100px;\n      width: 100px;\n    }\n  }\n"]))),b.c.section(T||(T=Object(f.a)(["\n  display: flex;\n  position: relative;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n"])))),z=b.c.div(M||(M=Object(f.a)(["\n  position: absolute;\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 7vw 0 0;\n  @media only screen and (device-width: 669px) {\n    position: relative;\n    align-self: center;\n    margin: 8px 0 0 0;\n  }\n\n  label {\n    width: fit-content;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    flex-shrink: 0;\n  }\n\n  /* Hide default HTML checkbox */\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  span {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ",";\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  span:before {\n    position: absolute;\n    content: '';\n    height: 26px;\n    min-width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  input:focus + span {\n    box-shadow: 0 0 1px ",";\n  }\n\n  input:checked + span:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary})),N=t.p+"static/media/Where'sWaldo.13ab699b.png",R=t.p+"static/media/GobblingGluttons.3e56f8b3.jpg",L=t.p+"static/media/SkiResort.e623c363.png",E=t.p+"static/media/ToysToysToys.bd8c0dd8.jpg",H=t.p+"static/media/Odlaw.7f2337c8.png",X=t.p+"static/media/Waldo.2a7963c3.png",B=t.p+"static/media/Wenda.c2c5c953.png",Y=t.p+"static/media/WizardWhitebeard.77d677dc.png",U=t.p+"static/media/Woof.b5718edf.png";function A(n){return Object(h.jsxs)(I,{waldoMode:n.waldoMode,children:[Object(h.jsx)("figure",{id:"homeLogo",children:Object(h.jsx)("img",{src:N,alt:"Where's Waldo?"})}),Object(h.jsxs)(C,{children:[Object(h.jsxs)(D,{children:[Object(h.jsx)("h3",{children:"Choose a level!"}),Object(h.jsxs)(z,{waldoMode:n.waldoMode,children:[Object(h.jsxs)("label",{htmlFor:"checkbox",children:[n.waldoMode?"Waldo":"Challenge"," Mode"]}),Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{onClick:function(){n.setWaldoMode(!n.waldoMode)},type:"checkbox",id:"checkbox"}),Object(h.jsx)("span",{})]})]})]}),Object(h.jsxs)(S,{children:[Object(h.jsx)("figure",{children:Object(h.jsxs)(l.b,{to:"/gobbling-gluttons",children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Gobbling Gluttons"})}),Object(h.jsx)("img",{src:R,alt:"Gobbling Gluttons"})]})}),Object(h.jsx)("figure",{children:Object(h.jsxs)(l.b,{to:"/ski-resort",children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Ski Resort"})}),Object(h.jsx)("img",{src:L,alt:"Ski Resort"})]})}),Object(h.jsx)("figure",{children:Object(h.jsxs)(l.b,{to:"/toys-toys-toys",children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Toys! Toys! Toys!"})}),Object(h.jsx)("img",{src:E,alt:"Toys! Toys! Toys!"})]})})]})]}),Object(h.jsxs)(C,{children:[Object(h.jsx)("h3",{children:"Look for these characters!"}),Object(h.jsxs)(F,{children:[Object(h.jsxs)("figure",{children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Waldo"})}),Object(h.jsx)("img",{src:X,alt:"Waldo"})]}),Object(h.jsxs)("figure",{children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Wenda"})}),Object(h.jsx)("img",{src:B,alt:"Wenda"})]}),Object(h.jsxs)("figure",{children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Wizard"})}),Object(h.jsx)("img",{src:Y,alt:"Wizard"})]}),Object(h.jsxs)("figure",{children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Odlaw"})}),Object(h.jsx)("img",{src:H,alt:"Odlaw"})]}),Object(h.jsxs)("figure",{children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Woof"})}),Object(h.jsx)("img",{src:U,alt:"Woof"})]})]})]})]})}var J,P=t(0),Q=t.n(P),_=t(4),q=b.c.aside(J||(J=Object(f.a)(["\n  position: fixed;\n  color: white;\n  top: 10rem;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 8px;\n  background-color: ",";\n  border-radius: ",";\n  z-index: 1;\n"])),(function(n){return n.notificationData.isCharacterFound?function(n){return n.theme.colors.primary}:function(n){return n.theme.colors.secondary}}),(function(n){return n.theme.sizing.ul.borderRadius}));function K(n){return Object(h.jsx)(q,{notificationData:n.notificationData,children:n.notificationData.isCharacterFound?Object(h.jsxs)("span",{children:["You found ",Object(h.jsx)("b",{children:n.notificationData.character}),"!"]}):Object(h.jsxs)("span",{children:[Object(h.jsx)("b",{children:n.notificationData.character})," not found, try again!"]})})}var V,Z,$=t(35);function nn(n){function e(n){return t.apply(this,arguments)}function t(){return(t=Object(_.a)(Q.a.mark((function e(t){var i,r,o;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(a.c)(Fn,"Levels",n.level,"Coordinates",t),e.next=3,Object(a.d)(i);case 3:if(!(r=e.sent).exists()){e.next=9;break}return o=r.data(),e.abrupt("return",o);case 9:console.error("No such document!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(n){return r.apply(this,arguments)}function r(){return(r=Object(_.a)(Q.a.mark((function t(i){var r,o;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.target.textContent,n.setIsContextMenuOpen(!n.isContextMenuOpen),t.next=4,e(r);case 4:if(!(o=t.sent)){t.next=26;break}if(!(Math.abs(n.mouseCoords.x-o.x)<25&&Math.abs(n.mouseCoords.y-o.y)<42)){t.next=24;break}clearTimeout(n.notificationData.timer),n.setNotificationData({isNotificationOpen:!0,character:r,isCharacterFound:!0,timer:setTimeout((function(){n.setNotificationData(Object($.a)(Object($.a)({},n.notificationData),{},{isNotificationOpen:!1}))}),3e3)}),t.t0=r,t.next="Odlaw"===t.t0?12:"Waldo"===t.t0?14:"Wenda"===t.t0?16:"Wizard"===t.t0?18:"Woof"===t.t0?20:22;break;case 12:return n.setIsOdlawFound(!0),t.abrupt("break",22);case 14:return n.setIsWaldoFound(!0),t.abrupt("break",22);case 16:return n.setIsWendaFound(!0),t.abrupt("break",22);case 18:return n.setIsWizardFound(!0),t.abrupt("break",22);case 20:return n.setIsWoofFound(!0),t.abrupt("break",22);case 22:t.next=26;break;case 24:clearTimeout(n.notificationData.timer),n.setNotificationData({isNotificationOpen:!0,character:r,isCharacterFound:!1,timer:setTimeout((function(){n.setNotificationData(Object($.a)(Object($.a)({},n.notificationData),{},{isNotificationOpen:!1}))}),3e3)});case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(e){switch(e){case"Odlaw":return!!n.isOdlawFound;case"Waldo":return!!n.isWaldoFound;case"Wenda":return!!n.isWendaFound;case"Wizard":return!!n.isWizardFound;case"Woof":return!!n.isWoofFound;default:return!1}}return Object(h.jsx)("ul",{children:n.waldoMode?Object(h.jsx)("li",{onClick:i,children:o(n.character)?Object(h.jsx)("s",{children:n.character}):n.character},n.character):n.characters.map((function(n){return Object(h.jsx)("li",{onClick:i,children:o(n)?Object(h.jsx)("s",{children:n}):n},n)}))})}var en,tn,rn,on=b.c.main(V||(V=Object(f.a)(["\n  display: flex;\n  user-select: none;\n  width: 100%;\n  height: auto;\n\n  figure {\n    text-align: center;\n  }\n\n  figcaption {\n    padding: 8px;\n  }\n\n  img {\n    --webkit-user-drag: none;\n    object-fit: contain;\n    width: 100%;\n    height: auto;\n    border: 7px solid\n      ",";\n    border-radius: 7px;\n    ",";\n    ",";\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary}),(function(n){return n.isTimerOn?null:"filter: blur(16px)"}),(function(n){return n.isTimerOn?null:"-webkit-filter: blur(16px)"})),cn=b.c.p(Z||(Z=Object(f.a)(["\n  position: fixed;\n  color: white;\n  left: 50%;\n  top: ",";\n  transition: top 1s ease 0s;\n  transform: translateX(-50%);\n  padding: 8px;\n  background-color: ",";\n  border-radius: ",";\n  cursor: pointer;\n  z-index: 1;\n"])),(function(n){return n.isNotificationOpen?"15rem":"10rem"}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.sizing.ul.borderRadius})),sn=75,an=b.c.div(en||(en=Object(f.a)(["\n  ul {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    left: ","px;\n    top: ","px;\n    color: ",";\n    background-color: white;\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    gap: 3px;\n    list-style: none;\n    z-index: 1;\n  }\n\n  li {\n    padding: 3px;\n  }\n\n  li:hover {\n    color: white;\n    cursor: pointer;\n    background-color: ",";\n    transition: opacity, background-color, color, 0.25s;\n    border-radius: 3px;\n  }\n"])),(function(n){return n.menuCoords.x+37.5+3}),(function(n){return n.menuCoords.y-18.75}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.sizing.ul.padding}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.sizing.ul.borderRadius}),(function(n){return n.theme.colors.primary})),dn=b.c.div(tn||(tn=Object(f.a)(["\n  left: ","px;\n  top: ","px;\n  display: flex;\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  border: 5px dashed ",";\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 30px;\n  z-index: 1;\n"])),(function(n){return n.menuCoords.x-37.5}),(function(n){return n.menuCoords.y-37.5}),sn,sn,(function(n){return n.theme.colors.targetingBox}));function ln(n){var e=Object(i.useState)({x:0,y:0}),t=Object(d.a)(e,2),r=t[0],o=t[1],c=Object(i.useState)({x:0,y:0}),s=Object(d.a)(c,2),l=s[0],b=s[1],j=Object(i.useState)(!1),p=Object(d.a)(j,2),x=p[0],f=p[1],O=Object(i.useState)(!1),m=Object(d.a)(O,2),g=m[0],w=m[1],y=Object(i.useState)(!1),v=Object(d.a)(y,2),k=v[0],T=v[1],M=Object(i.useState)(!1),W=Object(d.a)(M,2),G=W[0],I=W[1],C=Object(i.useState)(!1),S=Object(d.a)(C,2),F=S[0],D=S[1],z=Object(i.useState)(!1),N=Object(d.a)(z,2),R=N[0],L=N[1],E=Object(i.useState)(""),H=Object(d.a)(E,2),X=H[0],B=H[1],Y=Object(i.useState)([]),U=Object(d.a)(Y,2),A=U[0],J=U[1],P=Object(i.useState)({isNotificationOpen:!1,character:"",isCharacterFound:!1,timer:setTimeout((function(){}),0)}),q=Object(d.a)(P,2),V=q[0],Z=q[1],$=Object(u.f)(),en=Object(i.useRef)(!0);function tn(){return tn=Object(_.a)(Q.a.mark((function e(){var t,i;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.e)(Object(a.b)(Fn,"Levels",n.level,"Coordinates"));case 2:t=e.sent,i=[],t.forEach((function(n){i.push(n.id)})),n.waldoMode?B("Waldo"):J(i);case 6:case"end":return e.stop()}}),e)}))),tn.apply(this,arguments)}function rn(n){var e=n.target.getBoundingClientRect(),t=e.width,i=e.height,r=n.nativeEvent,c=r.offsetX,s=r.offsetY,a=Math.round(c/t*1e3),d=Math.round(s/i*1e3),l={x:n.pageX,y:n.pageY};o({x:a,y:d}),b(l)}function sn(n){return ln.apply(this,arguments)}function ln(){return(ln=Object(_.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:rn(t),n.isTimerOn?f(!x):n.setIsTimerOn(!n.isTimerOn);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){if(en.current)return en.current=!1,void n.setIsGameOn(!0);var e=[];for(var t in A)switch(A[t]){case"Odlaw":e.push(g);break;case"Waldo":e.push(k);break;case"Wenda":e.push(G);break;case"Wizard":e.push(F)}return n.waldoMode?k?(n.setIsTimerOn(!1),n.setIsGameOn(!1),n.setIsGameOver(!0)):void 0:e.includes(!1)?void 0:(n.setIsTimerOn(!1),n.setIsGameOn(!1),n.setIsGameOver(!0))}),[g,k,G,F]),Object(i.useEffect)((function(){w(!1),T(!1),I(!1),D(!1),function(){tn.apply(this,arguments)}(),n.setTime(0)}),[$.location]),Object(h.jsxs)(on,{isTimerOn:n.isTimerOn,waldoMode:n.waldoMode,children:[V.isNotificationOpen?Object(h.jsx)(K,{notificationData:V}):null,n.isTimerOn?null:Object(h.jsx)(cn,{onClick:function(){return n.setIsTimerOn(!n.isTimerOn)},isNotificationOpen:V.isNotificationOpen,children:"Game is paused"}),x?Object(h.jsxs)(an,{menuCoords:l,children:[Object(h.jsx)(dn,{onClick:sn,menuCoords:l}),Object(h.jsx)(nn,{isContextMenuOpen:x,setIsContextMenuOpen:f,notificationData:V,setNotificationData:Z,img:n.img,level:n.level,character:X,characters:A,mouseCoords:r,isOdlawFound:g,setIsOdlawFound:w,isWaldoFound:k,setIsWaldoFound:T,isWendaFound:G,setIsWendaFound:I,isWizardFound:F,setIsWizardFound:D,isWoofFound:R,setIsWoofFound:L,waldoMode:n.waldoMode})]}):null,Object(h.jsxs)("figure",{children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("h3",{children:n.level})}),Object(h.jsx)("img",{onClick:sn,src:n.img,draggable:"false",alt:"Where's Waldo?"})]})]})}var un,bn,hn,jn,pn,xn=b.c.main(rn||(rn=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background-color: white;\n  gap: 64px;\n  width: 100%;\n  height: auto;\n  text-align: center;\n\n  figure {\n    height: clamp(15vh, 35vh, 35vh);\n    width: auto;\n  }\n\n  figcaption {\n    padding: 16px 0 0 0;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  button {\n    cursor: pointer;\n    color: white;\n    background-color: ",";\n    padding: 5px;\n    border-radius: 7px;\n    border: none;\n    font: inherit;\n  }\n\n  fieldset {\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n    gap: 8px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  #submitButton {\n    cursor: pointer;\n    color: white;\n    background-color: ",";\n    padding: 5px;\n    border-radius: 7px;\n    border: none;\n    font: inherit;\n  }\n\n  label {\n    text-align: left;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary})),fn=t.p+"static/media/WaldoFound.80f74ad0.png";function On(n){var e=Object(u.f)(),t=Object(i.useRef)(null);function r(){return(r=Object(_.a)(Q.a.mark((function i(r){var o;return Q.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r.preventDefault(),e.push({pathname:"/high-scores",state:{level:n.level}}),o=t.current.value,!n.waldoMode){i.next=14;break}return i.prev=4,i.next=7,Object(a.a)(Object(a.b)(Fn,"Levels",n.level,"High Scores"),{username:o,time:n.time,waldoMode:!0});case 7:i.next=12;break;case 9:i.prev=9,i.t0=i.catch(4),console.error("Error adding document: ",i.t0);case 12:i.next=22;break;case 14:return i.prev=14,i.next=17,Object(a.a)(Object(a.b)(Fn,"Levels",n.level,"High Scores"),{username:o,time:n.time});case 17:i.next=22;break;case 19:i.prev=19,i.t1=i.catch(14),console.error("Error adding document: ",i.t1);case 22:case"end":return i.stop()}}),i,null,[[4,9],[14,19]])})))).apply(this,arguments)}return Object(h.jsxs)(xn,{children:[Object(h.jsxs)("figure",{children:[Object(h.jsx)("img",{src:fn,alt:"You found Waldo!"}),Object(h.jsx)("figcaption",{children:"You found Waldo!"})]}),Object(h.jsxs)("form",{onSubmit:function(n){return r.apply(this,arguments)},children:[Object(h.jsxs)("h3",{children:["You completed ",Object(h.jsx)("b",{children:n.level})," in"," ",Object(h.jsxs)("b",{children:[n.time/1e3," seconds!"]})]}),Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Enter your name to save your score!"}),Object(h.jsx)("label",{htmlFor:"username",children:"Username"}),Object(h.jsx)("input",{ref:t,type:"text",id:"username"})]}),Object(h.jsx)("input",{id:"submitButton",type:"submit",value:"Submit"})]}),Object(h.jsx)("button",{onClick:function(){n.setIsGameOver(!1)},children:"Play Again"})]})}var mn,gn=b.c.main(un||(un=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  gap: 16px;\n  width: 100%;\n  height: auto;\n  text-align: center;\n\n  figure {\n    width: auto;\n    height: 100%;\n    padding: 8px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  table,\n  th,\n  td {\n    border: 2px solid black;\n    border-collapse: collapse;\n  }\n\n  table {\n    width: 100%;\n\n    caption,\n    th,\n    td {\n      padding: 16px;\n    }\n\n    .username {\n      width: 80%;\n    }\n\n    .time {\n      width: 20%;\n    }\n  }\n"]))),wn=b.c.section(bn||(bn=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  gap: 16px;\n\n  figure {\n    height: 100%;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    height: auto;\n    text-align: center;\n    overflow-x: none;\n  }\n\n  img {\n    width: auto;\n    height: auto;\n  }\n\n  figcaption {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary})),yn=Object(b.c)(wn)(hn||(hn=Object(f.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  justify-content: space-around;\n  padding: 0 3vw;\n  height: auto;\n\n  figure {\n    border: 3px solid\n      ",";\n    border-radius: 8px;\n    padding: 16px;\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    height: 30vh;\n    object-fit: cover;\n    object-position: right bottom;\n    border-radius: 5px;\n  }\n\n  @media only screen and (device-width: 1000px) {\n    img {\n      height: 20vh;\n    }\n  }\n\n  @media only screen and (device-width: 669px) {\n    padding: 0;\n    figure {\n      padding: 8px;\n    }\n    img {\n      height: 15vh;\n    }\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary})),vn=b.c.section(jn||(jn=Object(f.a)(["\n  display: flex;\n  position: relative;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n"]))),kn=b.c.div(pn||(pn=Object(f.a)(["\n  position: absolute;\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 3vw 0 0;\n  @media only screen and (device-width: 669px) {\n    position: relative;\n    align-self: center;\n    margin: 8px 0 0 0;\n  }\n\n  label {\n    width: fit-content;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    flex-shrink: 0;\n  }\n\n  /* Hide default HTML checkbox */\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  span {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ",";\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  span:before {\n    position: absolute;\n    content: '';\n    height: 26px;\n    min-width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  input:focus + span {\n    box-shadow: 0 0 1px ",";\n  }\n\n  input:checked + span:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary})),Tn=t.p+"static/media/CharacterBanner.25ed0c72.png";function Mn(n){var e=Object(i.useState)([]),t=Object(d.a)(e,2),r=t[0],o=t[1],c=Object(u.g)(),s=Object(i.useRef)(null),l=Object(i.useRef)(!0);function b(e){n.setLevel(e)}function j(){return j=Object(_.a)(Q.a.mark((function e(t){var i,r,c,s;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.e)(Object(a.b)(Fn,"Levels",t,"High Scores"));case 2:i=e.sent,r=[],i.forEach((function(e){var i=e.data();n.waldoMode&&"Ski Resort"!==t?"waldoMode"in i&&r.push(e):"waldoMode"in i||r.push(e)})),c=r.map((function(n){return n.data()})),s=c.sort((function(n,e){return n.time-e.time})),o(s);case 8:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function p(){n.setWaldoMode(!n.waldoMode)}return Object(i.useEffect)((function(){l.current?l.current=!1:s.current&&s.current.scrollIntoView()}),[r]),Object(i.useEffect)((function(){try{var e=c.state.level;n.setLevel(e)}catch(t){}}),[]),Object(i.useEffect)((function(){n.level&&function(n){j.apply(this,arguments)}(n.level)}),[n.level,n.waldoMode]),Object(h.jsxs)(gn,{children:[Object(h.jsx)("figure",{children:Object(h.jsx)("img",{src:Tn,alt:"Characters"})}),Object(h.jsx)("h2",{children:"High Scores"}),Object(h.jsxs)(wn,{children:[Object(h.jsx)("h3",{children:"Choose a level!"}),Object(h.jsxs)(yn,{waldoMode:n.waldoMode,children:[Object(h.jsxs)("figure",{onClick:function(){return b("Gobbling Gluttons")},children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Gobbling Gluttons"})}),Object(h.jsx)("img",{src:R,alt:"Gobbling Gluttons"})]}),Object(h.jsxs)("figure",{onClick:function(){return b("Ski Resort")},children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Ski Resort"})}),Object(h.jsx)("img",{src:L,alt:"Ski Resort"})]}),Object(h.jsxs)("figure",{onClick:function(){return b("Toys! Toys! Toys!")},children:[Object(h.jsx)("figcaption",{children:Object(h.jsx)("b",{children:"Toys! Toys! Toys!"})}),Object(h.jsx)("img",{src:E,alt:"Toys! Toys! Toys!"})]})]})]}),Object(h.jsxs)("table",{ref:s,id:"leaderboard",children:[Object(h.jsx)("caption",{children:n.level?Object(h.jsxs)(vn,{children:[Object(h.jsx)("h3",{children:n.level}),Object(h.jsxs)(kn,{waldoMode:n.waldoMode,children:[Object(h.jsxs)("label",{htmlFor:"checkbox",children:[n.waldoMode?"Waldo":"Challenge"," Mode"]}),Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{onClick:p,type:"checkbox",id:"checkbox"}),Object(h.jsx)("span",{})]})]})]}):Object(h.jsxs)(vn,{children:[Object(h.jsx)("h3",{children:"Choose a level first!"}),Object(h.jsxs)(kn,{waldoMode:n.waldoMode,children:[Object(h.jsxs)("label",{htmlFor:"checkbox",children:[n.waldoMode?"Waldo":"Challenge"," Mode"]}),Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{onClick:p,type:"checkbox",id:"checkbox"}),Object(h.jsx)("span",{})]})]})]})}),Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"rank",children:"Rank"}),Object(h.jsx)("th",{className:"username",children:"Username"}),Object(h.jsx)("th",{className:"time",children:"Time"})]})}),Object(h.jsx)("tbody",{children:r.map((function(n,e){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[e+1,"."]}),Object(h.jsx)("td",{children:n.username}),Object(h.jsxs)("td",{children:[Object(h.jsxs)("span",{children:[Math.floor(n.time/6e4%60).toString().slice(-2),":"]}),Object(h.jsx)("span",{children:("0"+Math.floor(n.time/1e3%60)).slice(-2)})]})]},e)}))})]})]})}function Wn(){return Object(h.jsx)("div",{children:"Error 404 - Page Not Found"})}var Gn=Object(b.b)(mn||(mn=Object(f.a)(["\n\n    html {\n        scroll-behavior: smooth;\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        width: 100%;\n        height: auto;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n    }\n"]))),In={colors:{primary:"#2d9edf",secondary:"#ee2223",targetingBox:"#39ff14"},sizing:{ul:{padding:"3px 5px",borderRadius:"7px"}}};function Cn(){var n=Object(i.useState)(!1),e=Object(d.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)(!1),c=Object(d.a)(o,2),s=c[0],a=c[1],j=Object(i.useState)(0),p=Object(d.a)(j,2),x=p[0],f=p[1],O=Object(i.useState)(!1),m=Object(d.a)(O,2),g=m[0],w=m[1],y=Object(i.useState)(void 0),v=Object(d.a)(y,2),k=v[0],T=v[1],M=Object(i.useState)(!0),W=Object(d.a)(M,2),I=W[0],C=W[1];return Object(h.jsx)(l.a,{children:Object(h.jsxs)(b.a,{theme:In,children:[Object(h.jsx)(Gn,{}),Object(h.jsx)(G,{setIsGameOver:a,isGameOn:t,setIsGameOn:r,time:x,setTime:f,isTimerOn:g,setIsTimerOn:w,isGameOver:s,setLevel:T}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",children:Object(h.jsx)(A,{waldoMode:I,setWaldoMode:C})}),Object(h.jsx)(u.a,{exact:!0,path:"/gobbling-gluttons",children:s?Object(h.jsx)(On,{isGameOver:s,setIsGameOver:a,time:x,level:"Gobbling Gluttons",waldoMode:I}):Object(h.jsx)(ln,{isGameOver:s,setIsGameOver:a,isGameOn:t,setIsGameOn:r,setTime:f,isTimerOn:g,setIsTimerOn:w,img:R,level:"Gobbling Gluttons",waldoMode:I})}),Object(h.jsx)(u.a,{exact:!0,path:"/ski-resort",children:s?Object(h.jsx)(On,{isGameOver:s,setIsGameOver:a,time:x,level:"Ski Resort",waldoMode:I}):Object(h.jsx)(ln,{isGameOver:s,setIsGameOver:a,isGameOn:t,setIsGameOn:r,setTime:f,isTimerOn:g,setIsTimerOn:w,img:L,level:"Ski Resort",waldoMode:I})}),Object(h.jsx)(u.a,{exact:!0,path:"/toys-toys-toys",children:s?Object(h.jsx)(On,{isGameOver:s,setIsGameOver:a,time:x,level:"Toys! Toys! Toys!",waldoMode:I}):Object(h.jsx)(ln,{isGameOver:s,setIsGameOver:a,isGameOn:t,setIsGameOn:r,setTime:f,isTimerOn:g,setIsTimerOn:w,img:E,level:"Toys! Toys! Toys!",waldoMode:I})}),Object(h.jsx)(u.a,{exact:!0,path:"/high-scores",children:Object(h.jsx)(Mn,{level:k,setLevel:T,waldoMode:I,setWaldoMode:C})}),Object(h.jsx)(u.a,{component:Wn})]})]})})}var Sn=Object(s.a)({apiKey:"AIzaSyA-_xHp4FOaCpr4mQkqyLxpg_YW3JhmPfQ",authDomain:"wheres-waldo-78b7d.firebaseapp.com",projectId:"wheres-waldo-78b7d",storageBucket:"wheres-waldo-78b7d.appspot.com",messagingSenderId:"91226203075",appId:"1:91226203075:web:01c1fbfc3ca1bf8df11376"}),Fn=Object(a.f)(Sn);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Cn,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.aab6a477.chunk.js.map