(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{67:function(e,n,t){"use strict";t.r(n),t.d(n,"db",(function(){return Le}));var i=t(5),r=t.n(i),o=t(47),c=t.n(o),s=t(48),a=t(16),l=t(11),d=t(19),u=t(14),b=t(12),j=t(2);function h(e){return Object(i.useEffect)((function(){!1===e.isGameOver?e.setIsTimerOn(!0):e.setIsTimerOn(!1)}),[e.isGameOver]),Object(i.useEffect)((function(){var n;return e.isTimerOn&&(n=setInterval((function(){e.setTime((function(e){return e+10}))}),10)),function(){clearInterval(n)}}),[e.isTimerOn]),Object(j.jsxs)("time",{onClick:function(){e.setIsTimerOn(!e.isTimerOn)},children:[Object(j.jsxs)("span",{children:[Math.floor(e.time/6e4%60).toString().slice(-2),":"]}),Object(j.jsx)("span",{children:("0"+Math.floor(e.time/1e3%60)).slice(-2)})]})}var p,x,f=t(13),O=b.c.aside(p||(p=Object(f.a)(["\n  justify-self: end;\n  transition: all 3s;\n\n  #levelList {\n    display: ","; // 'flex' or 'none'\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    background: white;\n    width: auto;\n    height: ",";\n    margin: 3px 16px 0 0;\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    transition: all 0.75s;\n    z-index: 1;\n    list-style-type: none;\n  }\n\n  a {\n    padding: 8px;\n    margin: 0;\n    opacity: ",";\n    display: ","; // 'inline-block' or 'none'\n    transition: opacity, background-color, color, 0.25s;\n    width: 100%;\n    height: 100%;\n    color: ",";\n  }\n\n  a:hover {\n    background-color: ",";\n    border-radius: ",";\n    color: white;\n  }\n\n  .active {\n    color: ",";\n  }\n"])),(function(e){return e.isDropDownOpen?"flex":"none"}),(function(e){return e.isDropDownOpen?"auto":"0px"}),(function(e){return e.theme.sizing.ul.padding}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.sizing.ul.borderRadius}),(function(e){return e.isDropDownOpen?1:0}),(function(e){return e.isDropDownOpen?"inline-block":"none"}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.sizing.ul.borderRadius}),(function(e){return e.theme.colors.secondary}));function m(e){var n=Object(i.useState)(!1),t=Object(l.a)(n,2),r=t[0],o=t[1];function c(){e.setIsGameOver(!1),o(!1)}return Object(j.jsxs)(O,{isDropDownOpen:r,children:[Object(j.jsx)("button",{onClick:function(){o(!r)},children:"Level Select"}),Object(j.jsxs)("ul",{id:"levelList",children:[Object(j.jsx)(d.c,{onClick:c,exact:!0,to:"/gobbling-gluttons",children:Object(j.jsx)("li",{children:"Gobbling Gluttons"})}),Object(j.jsx)(d.c,{onClick:c,exact:!0,to:"/ski-resort",children:Object(j.jsx)("li",{children:"Ski Resort"})}),Object(j.jsx)(d.c,{onClick:c,exact:!0,to:"/toys-toys-toys",children:Object(j.jsx)("li",{children:"Toys! Toys! Toys!"})})]})]})}var g,w,y,v,k,T,M,W=b.c.nav(x||(x=Object(f.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr auto 1fr;\n  align-items: center;\n  padding: 16px;\n  background-color: white;\n  gap: 8px;\n\n  #first {\n    color: ",";\n  }\n\n  #second {\n    color: ",";\n  }\n\n  time {\n    padding: 8px;\n    background-color: ",";\n    color: white;\n    border-radius: 7px;\n    cursor: pointer;\n  }\n\n  section {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    gap: 8px;\n  }\n\n  button {\n    cursor: pointer;\n    color: white;\n    background-color: ",";\n    padding: 5px;\n    border-radius: 7px;\n    border: inherit;\n    font: inherit;\n\n    a {\n      color: white;\n    }\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  ul {\n    display: flex;\n    flex-direction: rows;\n    gap: 10px;\n    list-style: none;\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.primary}));function G(e){function n(){e.setIsGameOver(!1),e.setIsGameOn(!1),e.setLevel(void 0)}return Object(j.jsxs)(W,{children:[Object(j.jsx)("h1",{onClick:n,children:Object(j.jsxs)(d.b,{to:"/",children:[Object(j.jsx)("span",{id:"first",children:"Where's"})," ",Object(j.jsx)("span",{id:"second",children:"Waldo?"})]})}),e.isGameOn?Object(j.jsx)(h,{time:e.time,setTime:e.setTime,isTimerOn:e.isTimerOn,setIsTimerOn:e.setIsTimerOn,isGameOver:e.isGameOver}):null,Object(j.jsxs)("section",{children:[Object(j.jsx)(m,{setIsGameOver:e.setIsGameOver}),Object(j.jsx)(d.b,{onClick:n,to:"/high-scores",children:Object(j.jsx)("button",{children:"High Scores"})})]})]})}var C=b.c.main(g||(g=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background-color: white;\n  gap: 32px;\n  width: 100%;\n  height: auto;\n  text-align: center;\n\n  figure {\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    gap: 8px;\n    height: auto;\n    text-align: center;\n    overflow-x: none;\n  }\n\n  img {\n    object-fit: contain;\n  }\n\n  #homeLogo {\n    border: none;\n    width: 75vw;\n    img {\n      width: 100%;\n      height: 35vh;\n    }\n  }\n\n  a {\n    border: 3px solid\n      ",";\n    border-radius: 8px;\n    padding: 16px;\n  }\n\n  h3 {\n    color: white;\n    color: black;\n    padding: 8px;\n    border-radius: 7px;\n  }\n"])),(function(e){return e.waldoMode?e.theme.colors.primary:e.theme.colors.secondary})),I=b.c.section(w||(w=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  gap: 32px;\n\n  figure {\n    height: 100%;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  figcaption {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.secondary})),S=Object(b.c)(I)(y||(y=Object(f.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  justify-content: space-around;\n  background-color: white;\n  gap: 5vw;\n  padding: 0 5vw;\n  height: 100%;\n\n  a {\n    width: 100%;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n\n  @media only screen and (max-device-width: 1000px) {\n    grid-auto-flow: row;\n    grid-auto-columns: 1fr;\n    figure {\n      height: 100%;\n    }\n  }\n"]))),F=Object(b.c)(S)(v||(v=Object(f.a)(["\n  img {\n    height: 300px;\n    width: 150px;\n  }\n  @media only screen and (max-device-width: 1000px) {\n    img {\n      width: 75%;\n    }\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"]))),D=Object(b.c)(F)(k||(k=Object(f.a)(["\n  img {\n    width: 150px;\n    height: 150px;\n  }\n  @media only screen and (max-device-width: 1000px) {\n    img {\n      width: 50%;\n    }\n  }\n"]))),z=b.c.section(T||(T=Object(f.a)(["\n  display: flex;\n  position: relative;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n"]))),N=b.c.div(M||(M=Object(f.a)(["\n  position: absolute;\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 10vw;\n  @media only screen and (max-device-width: 669px) {\n    position: relative;\n    align-self: center;\n    margin: 8px 0 0 0;\n  }\n\n  label {\n    width: fit-content;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    flex-shrink: 0;\n  }\n\n  /* Hide default HTML checkbox */\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  span {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ",";\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  span:before {\n    position: absolute;\n    content: '';\n    height: 26px;\n    min-width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  input:focus + span {\n    box-shadow: 0 0 1px ",";\n  }\n\n  input:checked + span:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n"])),(function(e){return e.waldoMode?e.theme.colors.primary:e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),R=t.p+"static/media/Where'sWaldo.13ab699b.png",L=t.p+"static/media/GobblingGluttons.3e56f8b3.jpg",B=t.p+"static/media/SkiResort.e623c363.png",E=t.p+"static/media/ToysToysToys.bd8c0dd8.jpg",H=t.p+"static/media/Odlaw.7f2337c8.png",X=t.p+"static/media/Waldo.2a7963c3.png",Y=t.p+"static/media/Wenda.c2c5c953.png",K=t.p+"static/media/WizardWhitebeard.77d677dc.png",U=t.p+"static/media/Woof.b5718edf.png",A=t.p+"static/media/Binoculars.dcc41ad0.png",J=t.p+"static/media/Bone.6d651ea5.png",P=t.p+"static/media/Camera.e9500640.png",Q=t.p+"static/media/Key.dfbc9908.png",_=t.p+"static/media/Scroll.b95f5488.png";function q(e){return Object(j.jsxs)(C,{waldoMode:e.waldoMode,children:[Object(j.jsx)("figure",{id:"homeLogo",children:Object(j.jsx)("img",{src:R,alt:"Where's Waldo?"})}),Object(j.jsxs)(I,{children:[Object(j.jsxs)(z,{children:[Object(j.jsx)("h3",{children:"Choose a level!"}),Object(j.jsxs)(N,{waldoMode:e.waldoMode,children:[Object(j.jsxs)("label",{htmlFor:"checkbox",children:[e.waldoMode?"Waldo":"Challenge"," Mode"]}),Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{onClick:function(){e.setWaldoMode(!e.waldoMode)},type:"checkbox",id:"checkbox"}),Object(j.jsx)("span",{})]})]})]}),Object(j.jsxs)(S,{children:[Object(j.jsx)("figure",{children:Object(j.jsxs)(d.b,{to:"/gobbling-gluttons",children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Gobbling Gluttons"})}),Object(j.jsx)("img",{src:L,alt:"Gobbling Gluttons"})]})}),Object(j.jsx)("figure",{children:Object(j.jsxs)(d.b,{to:"/ski-resort",children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Ski Resort"})}),Object(j.jsx)("img",{src:B,alt:"Ski Resort"})]})}),Object(j.jsx)("figure",{children:Object(j.jsxs)(d.b,{to:"/toys-toys-toys",children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Toys! Toys! Toys!"})}),Object(j.jsx)("img",{src:E,alt:"Toys! Toys! Toys!"})]})})]})]}),Object(j.jsxs)(I,{children:[Object(j.jsx)("h3",{children:"Look for these characters!"}),Object(j.jsxs)(F,{children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Waldo"})}),Object(j.jsx)("img",{src:X,alt:"Waldo"})]}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Wenda"})}),Object(j.jsx)("img",{src:Y,alt:"Wenda"})]}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Wizard"})}),Object(j.jsx)("img",{src:K,alt:"Wizard"})]}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Odlaw"})}),Object(j.jsx)("img",{src:H,alt:"Odlaw"})]}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Woof"})}),Object(j.jsx)("img",{src:U,alt:"Woof"})]})]})]}),Object(j.jsxs)(I,{children:[Object(j.jsx)("h3",{children:"Find these items!"}),Object(j.jsxs)(D,{children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Binoculars"})}),Object(j.jsx)("img",{src:A,alt:"Binoculars"})]}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Bone"})}),Object(j.jsx)("img",{src:J,alt:"Bone"})]}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Camera"})}),Object(j.jsx)("img",{src:P,alt:"Camera"})]}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Key"})}),Object(j.jsx)("img",{src:Q,alt:"Key"})]}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Scroll"})}),Object(j.jsx)("img",{src:_,alt:"Scroll"})]})]})]})]})}var V,Z=t(0),$=t.n(Z),ee=t(4),ne=b.c.aside(V||(V=Object(f.a)(["\n  position: fixed;\n  color: white;\n  top: 10rem;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 8px;\n  background-color: ",";\n  border-radius: ",";\n  z-index: 1;\n"])),(function(e){return e.notificationData.isCharacterFound?function(e){return e.theme.colors.primary}:function(e){return e.theme.colors.secondary}}),(function(e){return e.theme.sizing.ul.borderRadius}));function te(e){return Object(j.jsx)(ne,{notificationData:e.notificationData,children:e.notificationData.isCharacterFound?Object(j.jsxs)("span",{children:["You found ",Object(j.jsx)("b",{children:e.notificationData.character}),"!"]}):Object(j.jsxs)("span",{children:[Object(j.jsx)("b",{children:e.notificationData.character})," not found, try again!"]})})}var ie,re,oe=t(35);function ce(e){function n(e){return t.apply(this,arguments)}function t(){return(t=Object(ee.a)($.a.mark((function n(t){var i,r,o;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=Object(a.c)(Le,"Levels",e.level,"Coordinates",t),n.next=3,Object(a.d)(i);case 3:if(!(r=n.sent).exists()){n.next=9;break}return o=r.data(),n.abrupt("return",o);case 9:console.error("No such document!");case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function i(e){return r.apply(this,arguments)}function r(){return(r=Object(ee.a)($.a.mark((function t(i){var r,o;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.target.textContent,e.setIsContextMenuOpen(!e.isContextMenuOpen),t.next=4,n(r);case 4:if(!(o=t.sent)){t.next=26;break}if(!(Math.abs(e.mouseCoords.x-o.x)<25&&Math.abs(e.mouseCoords.y-o.y)<42)){t.next=24;break}clearTimeout(e.notificationData.timer),e.setNotificationData({isNotificationOpen:!0,character:r,isCharacterFound:!0,timer:setTimeout((function(){e.setNotificationData(Object(oe.a)(Object(oe.a)({},e.notificationData),{},{isNotificationOpen:!1}))}),3e3)}),t.t0=r,t.next="Odlaw"===t.t0?12:"Waldo"===t.t0?14:"Wenda"===t.t0?16:"Wizard"===t.t0?18:"Woof"===t.t0?20:22;break;case 12:return e.setIsOdlawFound(!0),t.abrupt("break",22);case 14:return e.setIsWaldoFound(!0),t.abrupt("break",22);case 16:return e.setIsWendaFound(!0),t.abrupt("break",22);case 18:return e.setIsWizardFound(!0),t.abrupt("break",22);case 20:return e.setIsWoofFound(!0),t.abrupt("break",22);case 22:t.next=26;break;case 24:clearTimeout(e.notificationData.timer),e.setNotificationData({isNotificationOpen:!0,character:r,isCharacterFound:!1,timer:setTimeout((function(){e.setNotificationData(Object(oe.a)(Object(oe.a)({},e.notificationData),{},{isNotificationOpen:!1}))}),3e3)});case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(n){switch(n){case"Odlaw":return!!e.isOdlawFound;case"Waldo":return!!e.isWaldoFound;case"Wenda":return!!e.isWendaFound;case"Wizard":return!!e.isWizardFound;case"Woof":return!!e.isWoofFound;default:return!1}}return Object(j.jsx)("ul",{children:e.waldoMode?Object(j.jsx)("li",{onClick:i,children:o(e.character)?Object(j.jsx)("s",{children:e.character}):e.character},e.character):e.characters.map((function(e){return Object(j.jsx)("li",{onClick:i,children:o(e)?Object(j.jsx)("s",{children:e}):e},e)}))})}var se,ae,le,de=b.c.main(ie||(ie=Object(f.a)(["\n  display: flex;\n  user-select: none;\n  width: 100%;\n  height: auto;\n\n  figure {\n    text-align: center;\n  }\n\n  figcaption {\n    padding: 8px;\n  }\n\n  img {\n    --webkit-user-drag: none;\n    object-fit: contain;\n    width: 100%;\n    height: auto;\n    border: 7px solid\n      ",";\n    border-radius: 7px;\n    ",";\n    ",";\n  }\n"])),(function(e){return e.waldoMode?e.theme.colors.primary:e.theme.colors.secondary}),(function(e){return e.isTimerOn?null:"filter: blur(16px)"}),(function(e){return e.isTimerOn?null:"-webkit-filter: blur(16px)"})),ue=b.c.p(re||(re=Object(f.a)(["\n  position: fixed;\n  color: white;\n  left: 50%;\n  top: ",";\n  transition: top 1s ease 0s;\n  transform: translateX(-50%);\n  padding: 8px;\n  background-color: ",";\n  border-radius: ",";\n  cursor: pointer;\n  z-index: 1;\n"])),(function(e){return e.isNotificationOpen?"15rem":"10rem"}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.sizing.ul.borderRadius})),be=75,je=b.c.div(se||(se=Object(f.a)(["\n  ul {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    left: ","px;\n    top: ","px;\n    color: ",";\n    background-color: white;\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    gap: 3px;\n    list-style: none;\n    z-index: 1;\n  }\n\n  li {\n    padding: 3px;\n  }\n\n  li:hover {\n    color: white;\n    cursor: pointer;\n    background-color: ",";\n    transition: opacity, background-color, color, 0.25s;\n    border-radius: 3px;\n  }\n"])),(function(e){return e.menuCoords.x+37.5+3}),(function(e){return e.menuCoords.y-18.75}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.sizing.ul.padding}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.sizing.ul.borderRadius}),(function(e){return e.theme.colors.primary})),he=b.c.div(ae||(ae=Object(f.a)(["\n  left: ","px;\n  top: ","px;\n  display: flex;\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  border: 5px dashed ",";\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 30px;\n  z-index: 1;\n"])),(function(e){return e.menuCoords.x-37.5}),(function(e){return e.menuCoords.y-37.5}),be,be,(function(e){return e.theme.colors.targetingBox}));function pe(e){var n=Object(i.useState)({x:0,y:0}),t=Object(l.a)(n,2),r=t[0],o=t[1],c=Object(i.useState)({x:0,y:0}),s=Object(l.a)(c,2),d=s[0],b=s[1],h=Object(i.useState)(!1),p=Object(l.a)(h,2),x=p[0],f=p[1],O=Object(i.useState)(!1),m=Object(l.a)(O,2),g=m[0],w=m[1],y=Object(i.useState)(!1),v=Object(l.a)(y,2),k=v[0],T=v[1],M=Object(i.useState)(!1),W=Object(l.a)(M,2),G=W[0],C=W[1],I=Object(i.useState)(!1),S=Object(l.a)(I,2),F=S[0],D=S[1],z=Object(i.useState)(!1),N=Object(l.a)(z,2),R=N[0],L=N[1],B=Object(i.useState)(""),E=Object(l.a)(B,2),H=E[0],X=E[1],Y=Object(i.useState)([]),K=Object(l.a)(Y,2),U=K[0],A=K[1],J=Object(i.useState)({isNotificationOpen:!1,character:"",isCharacterFound:!1,timer:setTimeout((function(){}),0)}),P=Object(l.a)(J,2),Q=P[0],_=P[1],q=Object(u.f)(),V=Object(i.useRef)(!0);function Z(){return Z=Object(ee.a)($.a.mark((function n(){var t,i;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(a.e)(Object(a.b)(Le,"Levels",e.level,"Coordinates"));case 2:t=n.sent,i=[],t.forEach((function(e){i.push(e.id)})),e.waldoMode?X("Waldo"):A(i);case 6:case"end":return n.stop()}}),n)}))),Z.apply(this,arguments)}function ne(e){var n=e.target.getBoundingClientRect(),t=n.width,i=n.height,r=e.nativeEvent,c=r.offsetX,s=r.offsetY,a=Math.round(c/t*1e3),l=Math.round(s/i*1e3),d={x:e.pageX,y:e.pageY};o({x:a,y:l}),b(d)}function ie(e){return re.apply(this,arguments)}function re(){return(re=Object(ee.a)($.a.mark((function n(t){return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:ne(t),e.isTimerOn?f(!x):e.setIsTimerOn(!e.isTimerOn);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(i.useEffect)((function(){if(V.current)return V.current=!1,void e.setIsGameOn(!0);var n=[];for(var t in U)switch(U[t]){case"Odlaw":n.push(g);break;case"Waldo":n.push(k);break;case"Wenda":n.push(G);break;case"Wizard":n.push(F)}return e.waldoMode?k?(e.setIsTimerOn(!1),e.setIsGameOn(!1),e.setIsGameOver(!0)):void 0:n.includes(!1)?void 0:(e.setIsTimerOn(!1),e.setIsGameOn(!1),e.setIsGameOver(!0))}),[g,k,G,F]),Object(i.useEffect)((function(){w(!1),T(!1),C(!1),D(!1),function(){Z.apply(this,arguments)}(),e.setTime(0)}),[q.location]),Object(j.jsxs)(de,{isTimerOn:e.isTimerOn,waldoMode:e.waldoMode,children:[Q.isNotificationOpen?Object(j.jsx)(te,{notificationData:Q}):null,e.isTimerOn?null:Object(j.jsx)(ue,{onClick:function(){return e.setIsTimerOn(!e.isTimerOn)},isNotificationOpen:Q.isNotificationOpen,children:"Game is paused"}),x?Object(j.jsxs)(je,{menuCoords:d,children:[Object(j.jsx)(he,{onClick:ie,menuCoords:d}),Object(j.jsx)(ce,{isContextMenuOpen:x,setIsContextMenuOpen:f,notificationData:Q,setNotificationData:_,img:e.img,level:e.level,character:H,characters:U,mouseCoords:r,isOdlawFound:g,setIsOdlawFound:w,isWaldoFound:k,setIsWaldoFound:T,isWendaFound:G,setIsWendaFound:C,isWizardFound:F,setIsWizardFound:D,isWoofFound:R,setIsWoofFound:L,waldoMode:e.waldoMode})]}):null,Object(j.jsxs)("figure",{children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("h3",{children:e.level})}),Object(j.jsx)("img",{onClick:ie,src:e.img,draggable:"false",alt:"Where's Waldo?"})]})]})}var xe,fe,Oe,me,ge,we=b.c.main(le||(le=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background-color: white;\n  gap: 64px;\n  width: 100%;\n  height: auto;\n  text-align: center;\n\n  figure {\n    height: clamp(15vh, 35vh, 35vh);\n    width: auto;\n  }\n\n  figcaption {\n    padding: 16px 0 0 0;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  button {\n    cursor: pointer;\n    color: white;\n    background-color: ",";\n    padding: 5px;\n    border-radius: 7px;\n    border: none;\n    font: inherit;\n  }\n\n  fieldset {\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n    gap: 8px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  #submitButton {\n    cursor: pointer;\n    color: white;\n    background-color: ",";\n    padding: 5px;\n    border-radius: 7px;\n    border: none;\n    font: inherit;\n  }\n\n  label {\n    text-align: left;\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),ye=t.p+"static/media/WaldoFound.80f74ad0.png";function ve(e){var n=Object(u.f)(),t=Object(i.useRef)(null);function r(){return(r=Object(ee.a)($.a.mark((function i(r){var o;return $.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r.preventDefault(),n.push({pathname:"/high-scores",state:{level:e.level}}),o=t.current.value,!e.waldoMode){i.next=14;break}return i.prev=4,i.next=7,Object(a.a)(Object(a.b)(Le,"Levels",e.level,"High Scores"),{username:o,time:e.time,waldoMode:!0});case 7:i.next=12;break;case 9:i.prev=9,i.t0=i.catch(4),console.error("Error adding document: ",i.t0);case 12:i.next=22;break;case 14:return i.prev=14,i.next=17,Object(a.a)(Object(a.b)(Le,"Levels",e.level,"High Scores"),{username:o,time:e.time});case 17:i.next=22;break;case 19:i.prev=19,i.t1=i.catch(14),console.error("Error adding document: ",i.t1);case 22:case"end":return i.stop()}}),i,null,[[4,9],[14,19]])})))).apply(this,arguments)}return Object(j.jsxs)(we,{children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:ye,alt:"You found Waldo!"}),Object(j.jsx)("figcaption",{children:"You found Waldo!"})]}),Object(j.jsxs)("form",{onSubmit:function(e){return r.apply(this,arguments)},children:[Object(j.jsxs)("h3",{children:["You completed ",Object(j.jsx)("b",{children:e.level})," in"," ",Object(j.jsxs)("b",{children:[e.time/1e3," seconds!"]})]}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Enter your name to save your score!"}),Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{ref:t,type:"text",id:"username"})]}),Object(j.jsx)("input",{id:"submitButton",type:"submit",value:"Submit"})]}),Object(j.jsx)("button",{onClick:function(){e.setIsGameOver(!1)},children:"Play Again"})]})}var ke,Te=b.c.main(xe||(xe=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  gap: 32px;\n  background-color: white;\n  width: 100%;\n  height: auto;\n  text-align: center;\n\n  figure {\n    width: auto;\n    height: 100%;\n    padding: 8px;\n  }\n\n  figcaption {\n    padding: 16px 0 0 0;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  table,\n  th,\n  td {\n    border: 2px solid black;\n    border-collapse: collapse;\n  }\n\n  table {\n    width: 100%;\n\n    caption,\n    th,\n    td {\n      padding: 16px;\n    }\n\n    .username {\n      width: 80%;\n    }\n\n    .time {\n      width: 20%;\n    }\n  }\n"]))),Me=b.c.section(fe||(fe=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  gap: 32px;\n\n  figure {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n  }\n\n  figcaption {\n    color: ",";\n    width: clamp(auto, 50%, auto);\n  }\n"])),(function(e){return e.theme.colors.secondary})),We=Object(b.c)(Me)(Oe||(Oe=Object(f.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  justify-content: space-around;\n  background-color: white;\n  gap: 8px;\n\n  figure {\n    width: auto;\n    height: auto;\n    max-height: 35vh;\n    border: 3px solid\n      ",";\n    border-radius: 8px;\n    padding: 8px;\n    cursor: pointer;\n  }\n\n  img {\n    height: 150px;\n    object-fit: contain;\n  }\n"])),(function(e){return e.waldoMode?e.theme.colors.primary:e.theme.colors.secondary})),Ge=b.c.section(me||(me=Object(f.a)(["\n  display: flex;\n  position: relative;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n"]))),Ce=b.c.div(ge||(ge=Object(f.a)(["\n  position: absolute;\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 32px;\n  @media only screen and (max-device-width: 669px) {\n    position: relative;\n    align-self: center;\n    margin: 8px 0 0 0;\n  }\n\n  label {\n    width: fit-content;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    flex-shrink: 0;\n  }\n\n  /* Hide default HTML checkbox */\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  span {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ",";\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  span:before {\n    position: absolute;\n    content: '';\n    height: 26px;\n    min-width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  input:focus + span {\n    box-shadow: 0 0 1px ",";\n  }\n\n  input:checked + span:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n"])),(function(e){return e.waldoMode?e.theme.colors.primary:e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),Ie=t.p+"static/media/CharacterBanner.25ed0c72.png";function Se(e){var n=Object(i.useState)([]),t=Object(l.a)(n,2),r=t[0],o=t[1],c=Object(u.g)(),s=Object(i.useRef)(null),d=Object(i.useRef)(!0);function b(n){e.setLevel(n)}function h(){return h=Object(ee.a)($.a.mark((function n(t){var i,r,c,s;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(a.e)(Object(a.b)(Le,"Levels",t,"High Scores"));case 2:i=n.sent,r=[],i.forEach((function(n){var i=n.data();e.waldoMode&&"Ski Resort"!==t?"waldoMode"in i&&r.push(n):"waldoMode"in i||r.push(n)})),c=r.map((function(e){return e.data()})),s=c.sort((function(e,n){return e.time-n.time})),o(s);case 8:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function p(){e.setWaldoMode(!e.waldoMode)}return Object(i.useEffect)((function(){d.current?d.current=!1:s.current&&s.current.scrollIntoView()}),[r]),Object(i.useEffect)((function(){try{var n=c.state.level;e.setLevel(n)}catch(t){}}),[]),Object(i.useEffect)((function(){e.level&&function(e){h.apply(this,arguments)}(e.level)}),[e.level,e.waldoMode]),Object(j.jsxs)(Te,{children:[Object(j.jsx)("figure",{children:Object(j.jsx)("img",{src:Ie,alt:"Characters"})}),Object(j.jsx)("h2",{children:"High Scores"}),Object(j.jsxs)(Me,{children:[Object(j.jsx)("h3",{children:"Choose a level!"}),Object(j.jsxs)(We,{waldoMode:e.waldoMode,children:[Object(j.jsxs)("figure",{onClick:function(){return b("Gobbling Gluttons")},children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Gobbling Gluttons"})}),Object(j.jsx)("img",{src:L,alt:"Gobbling Gluttons"})]}),Object(j.jsxs)("figure",{onClick:function(){return b("Ski Resort")},children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Ski Resort"})}),Object(j.jsx)("img",{src:B,alt:"Ski Resort"})]}),Object(j.jsxs)("figure",{onClick:function(){return b("Toys! Toys! Toys!")},children:[Object(j.jsx)("figcaption",{children:Object(j.jsx)("b",{children:"Toys! Toys! Toys!"})}),Object(j.jsx)("img",{src:E,alt:"Toys! Toys! Toys!"})]})]})]}),Object(j.jsxs)("table",{ref:s,id:"leaderboard",children:[Object(j.jsx)("caption",{children:e.level?Object(j.jsxs)(Ge,{children:[Object(j.jsx)("h3",{children:e.level}),Object(j.jsxs)(Ce,{waldoMode:e.waldoMode,children:[Object(j.jsxs)("label",{htmlFor:"checkbox",children:[e.waldoMode?"Waldo":"Challenge"," Mode"]}),Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{onClick:p,type:"checkbox",id:"checkbox"}),Object(j.jsx)("span",{})]})]})]}):Object(j.jsxs)(Ge,{children:[Object(j.jsx)("h3",{children:"Choose a level first!"}),Object(j.jsxs)(Ce,{waldoMode:e.waldoMode,children:[Object(j.jsxs)("label",{htmlFor:"checkbox",children:[e.waldoMode?"Waldo":"Challenge"," Mode"]}),Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{onClick:p,type:"checkbox",id:"checkbox"}),Object(j.jsx)("span",{})]})]})]})}),Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"rank",children:"Rank"}),Object(j.jsx)("th",{className:"username",children:"Username"}),Object(j.jsx)("th",{className:"time",children:"Time"})]})}),Object(j.jsx)("tbody",{children:r.map((function(e,n){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[n+1,"."]}),Object(j.jsx)("td",{children:e.username}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("span",{children:[Math.floor(e.time/6e4%60).toString().slice(-2),":"]}),Object(j.jsx)("span",{children:("0"+Math.floor(e.time/1e3%60)).slice(-2)})]})]},n)}))})]})]})}function Fe(){return Object(j.jsx)("div",{children:"Error 404 - Page Not Found"})}var De=Object(b.b)(ke||(ke=Object(f.a)(["\n\n    html {\n        scroll-behavior: smooth;\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        width: 100%;\n        height: auto;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n    }\n"]))),ze={colors:{primary:"#2d9edf",secondary:"#ee2223",targetingBox:"#39ff14"},sizing:{ul:{padding:"3px 5px",borderRadius:"7px"}}};function Ne(){var e=Object(i.useState)(!1),n=Object(l.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(!1),c=Object(l.a)(o,2),s=c[0],a=c[1],h=Object(i.useState)(0),p=Object(l.a)(h,2),x=p[0],f=p[1],O=Object(i.useState)(!1),m=Object(l.a)(O,2),g=m[0],w=m[1],y=Object(i.useState)(void 0),v=Object(l.a)(y,2),k=v[0],T=v[1],M=Object(i.useState)(!0),W=Object(l.a)(M,2),C=W[0],I=W[1];return Object(j.jsx)(d.a,{children:Object(j.jsxs)(b.a,{theme:ze,children:[Object(j.jsx)(De,{}),Object(j.jsx)(G,{setIsGameOver:a,isGameOn:t,setIsGameOn:r,time:x,setTime:f,isTimerOn:g,setIsTimerOn:w,isGameOver:s,setLevel:T}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",children:Object(j.jsx)(q,{waldoMode:C,setWaldoMode:I})}),Object(j.jsx)(u.a,{exact:!0,path:"/gobbling-gluttons",children:s?Object(j.jsx)(ve,{isGameOver:s,setIsGameOver:a,time:x,level:"Gobbling Gluttons",waldoMode:C}):Object(j.jsx)(pe,{isGameOver:s,setIsGameOver:a,isGameOn:t,setIsGameOn:r,setTime:f,isTimerOn:g,setIsTimerOn:w,img:L,level:"Gobbling Gluttons",waldoMode:C})}),Object(j.jsx)(u.a,{exact:!0,path:"/ski-resort",children:s?Object(j.jsx)(ve,{isGameOver:s,setIsGameOver:a,time:x,level:"Ski Resort",waldoMode:C}):Object(j.jsx)(pe,{isGameOver:s,setIsGameOver:a,isGameOn:t,setIsGameOn:r,setTime:f,isTimerOn:g,setIsTimerOn:w,img:B,level:"Ski Resort",waldoMode:C})}),Object(j.jsx)(u.a,{exact:!0,path:"/toys-toys-toys",children:s?Object(j.jsx)(ve,{isGameOver:s,setIsGameOver:a,time:x,level:"Toys! Toys! Toys!",waldoMode:C}):Object(j.jsx)(pe,{isGameOver:s,setIsGameOver:a,isGameOn:t,setIsGameOn:r,setTime:f,isTimerOn:g,setIsTimerOn:w,img:E,level:"Toys! Toys! Toys!",waldoMode:C})}),Object(j.jsx)(u.a,{exact:!0,path:"/high-scores",children:Object(j.jsx)(Se,{level:k,setLevel:T,waldoMode:C,setWaldoMode:I})}),Object(j.jsx)(u.a,{component:Fe})]})]})})}var Re=Object(s.a)({apiKey:"AIzaSyA-_xHp4FOaCpr4mQkqyLxpg_YW3JhmPfQ",authDomain:"wheres-waldo-78b7d.firebaseapp.com",projectId:"wheres-waldo-78b7d",storageBucket:"wheres-waldo-78b7d.appspot.com",messagingSenderId:"91226203075",appId:"1:91226203075:web:01c1fbfc3ca1bf8df11376"}),Le=Object(a.f)(Re);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Ne,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.6413a836.chunk.js.map