(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{67:function(n,e,t){"use strict";t.r(e),t.d(e,"db",(function(){return zn}));var i=t(5),r=t.n(i),o=t(47),c=t.n(o),a=t(48),s=t(15),d=t(0),l=t.n(d),u=t(4),h=t(9),p=t(24),b=t(14),j=t(12),f=t(2);function x(n){return Object(i.useEffect)((function(){!1===n.isGameOver?n.setIsTimerOn(!0):n.setIsTimerOn(!1)}),[n.isGameOver]),Object(i.useEffect)((function(){var e;return n.isTimerOn&&(e=setInterval((function(){n.setTime((function(n){return n+10}))}),10)),function(){clearInterval(e)}}),[n.isTimerOn]),Object(f.jsxs)("time",{onClick:function(){n.setIsTimerOn(!n.isTimerOn)},children:[Object(f.jsxs)("span",{children:[Math.floor(n.time/6e4%60).toString().slice(-2),":"]}),Object(f.jsx)("span",{children:("0"+Math.floor(n.time/1e3%60)).slice(-2)})]})}var m,O,g=t(13),w=j.c.aside(m||(m=Object(g.a)(["\n  justify-self: end;\n  transition: all 3s;\n\n  #levelList {\n    display: ","; // 'flex' or 'none'\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    background: white;\n    width: auto;\n    height: ",";\n    margin: 3px 16px 0 0;\n    padding: ",";\n    border: 2px solid ",";\n    border-radius: ",";\n    transition: all 0.75s;\n    z-index: 1;\n    list-style-type: none;\n  }\n\n  a {\n    padding: 8px;\n    margin: 0;\n    opacity: ",";\n    display: ","; // 'inline-block' or 'none'\n    transition: opacity, background-color, color, 0.25s;\n    width: 100%;\n    height: 100%;\n    color: ",";\n  }\n\n  a:hover {\n    background-color: ",";\n    border-radius: ",";\n    color: white;\n  }\n\n  .active {\n    color: ",";\n  }\n"])),(function(n){return n.isDropDownOpen?"flex":"none"}),(function(n){return n.isDropDownOpen?"auto":"0px"}),(function(n){return n.theme.sizing.ul.padding}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.sizing.ul.borderRadius}),(function(n){return n.isDropDownOpen?1:0}),(function(n){return n.isDropDownOpen?"inline-block":"none"}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.sizing.ul.borderRadius}),(function(n){return n.theme.colors.secondary}));function v(n){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),r=t[0],o=t[1];function c(){n.setIsGameOver(!1),o(!1)}return Object(f.jsxs)(w,{isDropDownOpen:r,children:[Object(f.jsx)("button",{onClick:function(){o(!r)},children:"Level Select"}),Object(f.jsx)("ul",{id:"levelList",children:n.levelList.map((function(n,e){return Object(f.jsx)(p.c,{onClick:c,exact:!0,to:n.path,children:Object(f.jsx)("li",{children:n.name})})}))})]})}var y,k=j.c.nav(O||(O=Object(g.a)(["\n  position: sticky;\n  top: 0;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr auto 1fr;\n  align-items: center;\n  padding: 16px;\n  background-color: white;\n  gap: 8px;\n  z-index: 1;\n\n  #first {\n    color: ",";\n  }\n\n  #second {\n    color: ",";\n  }\n\n  time {\n    padding: 8px;\n    background-color: ",";\n    color: white;\n    border-radius: 7px;\n    cursor: pointer;\n  }\n\n  section {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    gap: 8px;\n  }\n\n  button {\n    cursor: pointer;\n    color: white;\n    background-color: ",";\n    padding: 5px;\n    border-radius: 7px;\n    border: inherit;\n    font: inherit;\n\n    a {\n      color: white;\n    }\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  ul {\n    display: flex;\n    flex-direction: rows;\n    gap: 10px;\n    list-style: none;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.primary}));function M(n){function e(){n.setIsGameOver(!1),n.setIsGameOn(!1),n.setLevel(void 0)}return Object(f.jsxs)(k,{id:"nav",children:[Object(f.jsx)("h1",{onClick:e,children:Object(f.jsxs)(p.b,{to:"/",children:[Object(f.jsx)("span",{id:"first",children:"Where's"})," ",Object(f.jsx)("span",{id:"second",children:"Waldo?"})]})}),n.isGameOn?Object(f.jsx)(x,{time:n.time,setTime:n.setTime,isTimerOn:n.isTimerOn,setIsTimerOn:n.setIsTimerOn,isGameOver:n.isGameOver}):null,Object(f.jsxs)("section",{children:[Object(f.jsx)(v,{setIsGameOver:n.setIsGameOver,levelList:n.levelList}),Object(f.jsx)(p.b,{onClick:e,to:"/high-scores",children:Object(f.jsx)("button",{children:"High Scores"})})]})]})}var W,C,T,I,S,F,z,D=j.c.aside(y||(y=Object(g.a)(["\n  justify-self: end;\n  transition: all 3s;\n\n  display: ","; // 'flex' or 'none'\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: absolute;\n  background: white;\n  bottom: 50px;\n  width: auto;\n  height: ",";\n  padding: ",";\n  border: 2px solid\n    ",";\n  border-radius: ",";\n  transition: all 0.75s;\n  z-index: 1;\n  list-style-type: none;\n\n  p {\n    padding: 8px;\n    margin: 0;\n    opacity: ",";\n    display: ","; // 'inline-block' or 'none'\n    transition: opacity, background-color, color, 0.25s;\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(n){return n.isTooltipOpen?"flex":"none"}),(function(n){return n.isTooltipOpen?"auto":"0px"}),(function(n){return n.theme.sizing.ul.padding}),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary}),(function(n){return n.theme.sizing.ul.borderRadius}),(function(n){return n.isTooltipOpen?1:0}),(function(n){return n.isTooltipOpen?"inline-block":"none"}));function L(n){return Object(f.jsx)(D,{isTooltipOpen:n.isTooltipOpen,waldoMode:n.waldoMode,children:n.waldoMode?Object(f.jsx)("p",{children:'When "Waldo Mode" is enabled you only need to find Waldo to complete the selected level!'}):Object(f.jsx)("p",{children:'When "Challenge Mode" is enabled you need to find every hidden character to complete the selected level!'})})}var G,N=j.c.main(W||(W=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  gap: 16px;\n  width: 100%;\n  height: auto;\n  text-align: center;\n\n  figure {\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    height: auto;\n    text-align: center;\n    overflow-x: none;\n  }\n\n  img {\n    object-fit: contain;\n  }\n\n  #homeLogo {\n    border: none;\n    width: 100%;\n    img {\n      width: 100%;\n      max-height: 35vh;\n    }\n  }\n\n  a {\n    border: 3px solid\n      ",";\n    border-radius: 8px;\n    padding: 16px;\n  }\n\n  h3 {\n    color: white;\n    color: black;\n    padding: 8px;\n    border-radius: 7px;\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary})),E=j.c.section(C||(C=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  gap: 16px;\n\n  figure {\n    height: auto;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  figcaption {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary})),R=Object(j.c)(E)(T||(T=Object(g.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-content: space-around;\n  padding: 0 3vw;\n  height: auto;\n\n  a {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 8px;\n  }\n\n  img {\n    width: 100%;\n    height: 30vh;\n    object-fit: cover;\n    object-position: right bottom;\n    border-radius: 5px;\n  }\n\n  @media only screen and (max-width: 1000px) {\n    figure > * {\n      width: 100%;\n    }\n  }\n  @media only screen and (max-width: 800px) {\n    grid-auto-flow: row;\n    grid-template-columns: 1fr 1fr;\n  }\n  @media only screen and (max-width: 600px) {\n    grid-template-columns: 1fr;\n  }\n"]))),B=Object(j.c)(R)(I||(I=Object(g.a)(["\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  justify-items: center;\n  img {\n    width: auto;\n    max-width: 200px;\n    object-fit: contain;\n  }\n  @media only screen and (max-width: 800px) {\n    grid-auto-flow: row;\n    grid-template-columns: 1fr 1fr 1fr;\n    img {\n      height: 25vh;\n      max-width: 100px;\n    }\n  }\n  @media only screen and (max-width: 500px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media only screen and (max-width: 300px) {\n    display: flex;\n  }\n"]))),H=(Object(j.c)(B)(S||(S=Object(g.a)(["\n  @media only screen and (max-width: 1000px) {\n    img {\n      height: 100px;\n      width: 100px;\n    }\n  }\n"]))),j.c.section(F||(F=Object(g.a)(["\n  display: flex;\n  position: relative;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n"])))),X=j.c.div(z||(z=Object(g.a)(["\n  position: absolute;\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 7vw 0 0;\n  user-select: none;\n  @media only screen and (max-width: 669px) {\n    position: relative;\n    align-self: center;\n    margin: 8px 0 0 0;\n  }\n\n  label {\n    width: fit-content;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    flex-shrink: 0;\n  }\n\n  /* Hide default HTML checkbox */\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  span {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ",";\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  span:before {\n    position: absolute;\n    content: '';\n    height: 26px;\n    min-width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  input:focus + span {\n    box-shadow: 0 0 1px ",";\n  }\n\n  input:checked + span:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary})),Y=t.p+"static/media/Where'sWaldo.13ab699b.png",J=t.p+"static/media/Odlaw.7f2337c8.png",P=t.p+"static/media/Waldo.2a7963c3.png",U=t.p+"static/media/Wenda.c2c5c953.png",A=t.p+"static/media/WizardWhitebeard.77d677dc.png",Q=t.p+"static/media/Woof.b5718edf.png";function _(n){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),r=t[0],o=t[1];function c(){o(!r),console.log("OPEN/CLOSE")}return Object(f.jsxs)(N,{waldoMode:n.waldoMode,children:[Object(f.jsx)("figure",{id:"homeLogo",children:Object(f.jsx)("img",{src:Y,alt:"Where's Waldo?"})}),Object(f.jsxs)(E,{children:[Object(f.jsxs)(H,{children:[Object(f.jsx)("h3",{children:"Choose a level!"}),Object(f.jsxs)(X,{onMouseEnter:c,onMouseLeave:c,waldoMode:n.waldoMode,children:[Object(f.jsx)(L,{isTooltipOpen:r,waldoMode:n.waldoMode}),Object(f.jsxs)("label",{htmlFor:"checkbox",children:[n.waldoMode?"Waldo":"Challenge"," Mode"]}),Object(f.jsxs)("label",{className:"switch",children:[Object(f.jsx)("input",{onClick:function(){n.setWaldoMode(!n.waldoMode)},type:"checkbox",id:"checkbox"}),Object(f.jsx)("span",{})]})]})]}),Object(f.jsx)(R,{children:n.levelList.map((function(n,e){return Object(f.jsx)("figure",{children:Object(f.jsxs)(p.b,{to:n.path,children:[Object(f.jsx)("figcaption",{children:Object(f.jsx)("b",{children:n.name})}),Object(f.jsx)("img",{src:n.img,alt:n.name})]})},e)}))})]}),Object(f.jsxs)(E,{children:[Object(f.jsx)("h3",{children:"Look for these characters!"}),Object(f.jsxs)(B,{children:[Object(f.jsxs)("figure",{children:[Object(f.jsx)("figcaption",{children:Object(f.jsx)("b",{children:"Waldo"})}),Object(f.jsx)("img",{src:P,alt:"Waldo"})]}),Object(f.jsxs)("figure",{children:[Object(f.jsx)("figcaption",{children:Object(f.jsx)("b",{children:"Wenda"})}),Object(f.jsx)("img",{src:U,alt:"Wenda"})]}),Object(f.jsxs)("figure",{children:[Object(f.jsx)("figcaption",{children:Object(f.jsx)("b",{children:"Wizard"})}),Object(f.jsx)("img",{src:A,alt:"Wizard"})]}),Object(f.jsxs)("figure",{children:[Object(f.jsx)("figcaption",{children:Object(f.jsx)("b",{children:"Odlaw"})}),Object(f.jsx)("img",{src:J,alt:"Odlaw"})]}),Object(f.jsxs)("figure",{children:[Object(f.jsx)("figcaption",{children:Object(f.jsx)("b",{children:"Woof"})}),Object(f.jsx)("img",{src:Q,alt:"Woof"})]})]})]})]})}var q=j.c.aside(G||(G=Object(g.a)(["\n  position: fixed;\n  color: white;\n  top: 10rem;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 8px;\n  background-color: ",";\n  border-radius: ",";\n  z-index: 1;\n"])),(function(n){return n.notificationData.isCharacterFound?function(n){return n.theme.colors.primary}:function(n){return n.theme.colors.secondary}}),(function(n){return n.theme.sizing.ul.borderRadius}));function K(n){return Object(f.jsx)(q,{notificationData:n.notificationData,children:n.notificationData.isCharacterFound?Object(f.jsxs)("span",{children:["You found ",Object(f.jsx)("b",{children:n.notificationData.character}),"!"]}):Object(f.jsxs)("span",{children:[Object(f.jsx)("b",{children:n.notificationData.character})," not found, try again!"]})})}var V,Z,$=t(35);function nn(n){function e(n){return t.apply(this,arguments)}function t(){return(t=Object(u.a)(l.a.mark((function e(t){var i,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(s.c)(zn,"Levels",n.level,"Coordinates",t),e.next=3,Object(s.d)(i);case 3:if(!(r=e.sent).exists()){e.next=9;break}return o=r.data(),e.abrupt("return",o);case 9:console.error("No such document!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(n){return r.apply(this,arguments)}function r(){return(r=Object(u.a)(l.a.mark((function t(i){var r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.target.textContent,n.setIsContextMenuOpen(!n.isContextMenuOpen),t.next=4,e(r);case 4:if(!(o=t.sent)){t.next=26;break}if(!(Math.abs(n.mouseCoords.x-o.x)<25&&Math.abs(n.mouseCoords.y-o.y)<42)){t.next=24;break}clearTimeout(n.notificationData.timer),n.setNotificationData({isNotificationOpen:!0,character:r,isCharacterFound:!0,timer:setTimeout((function(){n.setNotificationData(Object($.a)(Object($.a)({},n.notificationData),{},{isNotificationOpen:!1}))}),3e3)}),t.t0=r,t.next="Odlaw"===t.t0?12:"Waldo"===t.t0?14:"Wenda"===t.t0?16:"Wizard"===t.t0?18:"Woof"===t.t0?20:22;break;case 12:return n.setIsOdlawFound(!0),t.abrupt("break",22);case 14:return n.setIsWaldoFound(!0),t.abrupt("break",22);case 16:return n.setIsWendaFound(!0),t.abrupt("break",22);case 18:return n.setIsWizardFound(!0),t.abrupt("break",22);case 20:return n.setIsWoofFound(!0),t.abrupt("break",22);case 22:t.next=26;break;case 24:clearTimeout(n.notificationData.timer),n.setNotificationData({isNotificationOpen:!0,character:r,isCharacterFound:!1,timer:setTimeout((function(){n.setNotificationData(Object($.a)(Object($.a)({},n.notificationData),{},{isNotificationOpen:!1}))}),3e3)});case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(e){switch(e){case"Odlaw":return!!n.isOdlawFound;case"Waldo":return!!n.isWaldoFound;case"Wenda":return!!n.isWendaFound;case"Wizard":return!!n.isWizardFound;case"Woof":return!!n.isWoofFound;default:return!1}}return Object(f.jsx)("ul",{children:n.waldoMode?Object(f.jsx)("li",{onClick:i,children:o(n.character)?Object(f.jsx)("s",{children:n.character}):n.character},n.character):n.characters.map((function(n){return Object(f.jsx)("li",{onClick:i,children:o(n)?Object(f.jsx)("s",{children:n}):n},n)}))})}var en,tn,rn,on=j.c.main(V||(V=Object(g.a)(["\n  display: flex;\n  user-select: none;\n  width: 100%;\n  height: auto;\n\n  figure {\n    text-align: center;\n  }\n\n  figcaption {\n    padding: 8px;\n  }\n\n  img {\n    --webkit-user-drag: none;\n    object-fit: contain;\n    width: 100%;\n    height: auto;\n    border: 7px solid\n      ",";\n    border-radius: 7px;\n    ",";\n    ",";\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary}),(function(n){return n.isTimerOn?null:"filter: blur(16px)"}),(function(n){return n.isTimerOn?null:"-webkit-filter: blur(16px)"})),cn=j.c.p(Z||(Z=Object(g.a)(["\n  position: fixed;\n  color: white;\n  left: 50%;\n  top: ",";\n  transition: top 1s ease 0s;\n  transform: translateX(-50%);\n  padding: 8px;\n  background-color: ",";\n  border-radius: ",";\n  cursor: pointer;\n  z-index: 1;\n"])),(function(n){return n.isNotificationOpen?"15rem":"10rem"}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.sizing.ul.borderRadius})),an=75,sn=j.c.div(en||(en=Object(g.a)(["\n  ul {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    left: ","px;\n    top: ","px;\n    color: ",";\n    background-color: white;\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    gap: 3px;\n    list-style: none;\n    z-index: 1;\n  }\n\n  li {\n    padding: 3px;\n  }\n\n  li:hover {\n    color: white;\n    cursor: pointer;\n    background-color: ",";\n    transition: opacity, background-color, color, 0.25s;\n    border-radius: 3px;\n  }\n"])),(function(n){return n.menuCoords.x+37.5+3}),(function(n){return n.menuCoords.y-18.75}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.sizing.ul.padding}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.sizing.ul.borderRadius}),(function(n){return n.theme.colors.primary})),dn=j.c.div(tn||(tn=Object(g.a)(["\n  left: ","px;\n  top: ","px;\n  display: flex;\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  border: 5px dashed ",";\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 30px;\n  z-index: 1;\n"])),(function(n){return n.menuCoords.x-37.5}),(function(n){return n.menuCoords.y-37.5}),an,an,(function(n){return n.theme.colors.targetingBox}));function ln(n){var e=Object(i.useState)({x:0,y:0}),t=Object(h.a)(e,2),r=t[0],o=t[1],c=Object(i.useState)({x:0,y:0}),a=Object(h.a)(c,2),d=a[0],p=a[1],j=Object(i.useState)(!1),x=Object(h.a)(j,2),m=x[0],O=x[1],g=Object(i.useState)(!1),w=Object(h.a)(g,2),v=w[0],y=w[1],k=Object(i.useState)(!1),M=Object(h.a)(k,2),W=M[0],C=M[1],T=Object(i.useState)(!1),I=Object(h.a)(T,2),S=I[0],F=I[1],z=Object(i.useState)(!1),D=Object(h.a)(z,2),L=D[0],G=D[1],N=Object(i.useState)(!1),E=Object(h.a)(N,2),R=E[0],B=E[1],H=Object(i.useState)(""),X=Object(h.a)(H,2),Y=X[0],J=X[1],P=Object(i.useState)([]),U=Object(h.a)(P,2),A=U[0],Q=U[1],_=Object(i.useState)({isNotificationOpen:!1,character:"",isCharacterFound:!1,timer:setTimeout((function(){}),0)}),q=Object(h.a)(_,2),V=q[0],Z=q[1],$=Object(b.f)(),en=Object(i.useRef)(!0);function tn(){return tn=Object(u.a)(l.a.mark((function e(){var t,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.e)(Object(s.b)(zn,"Levels",n.level,"Coordinates"));case 2:t=e.sent,i=[],t.forEach((function(n){i.push(n.id)})),n.waldoMode?J("Waldo"):Q(i);case 6:case"end":return e.stop()}}),e)}))),tn.apply(this,arguments)}function rn(n){var e=n.target.getBoundingClientRect(),t=e.width,i=e.height,r=n.nativeEvent,c=r.offsetX,a=r.offsetY,s=Math.round(c/t*1e3),d=Math.round(a/i*1e3),l={x:n.pageX,y:n.pageY};o({x:s,y:d}),p(l)}function an(n){return ln.apply(this,arguments)}function ln(){return(ln=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:rn(t),n.isTimerOn?O(!m):n.setIsTimerOn(!n.isTimerOn);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){if(en.current)return en.current=!1,void n.setIsGameOn(!0);var e=[];for(var t in A)switch(A[t]){case"Odlaw":e.push(v);break;case"Waldo":e.push(W);break;case"Wenda":e.push(S);break;case"Wizard":e.push(L)}return n.waldoMode?W?(n.setIsTimerOn(!1),n.setIsGameOn(!1),n.setIsGameOver(!0)):void 0:e.includes(!1)?void 0:(n.setIsTimerOn(!1),n.setIsGameOn(!1),n.setIsGameOver(!0))}),[v,W,S,L]),Object(i.useEffect)((function(){y(!1),C(!1),F(!1),G(!1),function(){tn.apply(this,arguments)}(),n.setTime(0)}),[$.location]),Object(f.jsxs)(on,{isTimerOn:n.isTimerOn,waldoMode:n.waldoMode,children:[V.isNotificationOpen?Object(f.jsx)(K,{notificationData:V}):null,n.isTimerOn?null:Object(f.jsx)(cn,{onClick:function(){return n.setIsTimerOn(!n.isTimerOn)},isNotificationOpen:V.isNotificationOpen,children:"Game is paused"}),m?Object(f.jsxs)(sn,{menuCoords:d,children:[Object(f.jsx)(dn,{onClick:an,menuCoords:d}),Object(f.jsx)(nn,{isContextMenuOpen:m,setIsContextMenuOpen:O,notificationData:V,setNotificationData:Z,img:n.img,level:n.level,character:Y,characters:A,mouseCoords:r,isOdlawFound:v,setIsOdlawFound:y,isWaldoFound:W,setIsWaldoFound:C,isWendaFound:S,setIsWendaFound:F,isWizardFound:L,setIsWizardFound:G,isWoofFound:R,setIsWoofFound:B,waldoMode:n.waldoMode})]}):null,Object(f.jsxs)("figure",{children:[Object(f.jsx)("figcaption",{children:Object(f.jsx)("h3",{children:n.level})}),Object(f.jsx)("img",{onClick:an,src:n.img,draggable:"false",alt:"Where's Waldo?"})]})]})}var un,hn,pn,bn,jn,fn=j.c.main(rn||(rn=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background-color: white;\n  gap: 64px;\n  width: 100%;\n  height: auto;\n  text-align: center;\n\n  figure {\n    height: clamp(15vh, 35vh, 35vh);\n    width: auto;\n  }\n\n  figcaption {\n    padding: 16px 0 0 0;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  button {\n    cursor: pointer;\n    color: white;\n    background-color: ",";\n    padding: 5px;\n    border-radius: 7px;\n    border: none;\n    font: inherit;\n  }\n\n  fieldset {\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n    gap: 8px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  #submitButton {\n    cursor: pointer;\n    color: white;\n    background-color: ",";\n    padding: 5px;\n    border-radius: 7px;\n    border: none;\n    font: inherit;\n  }\n\n  label {\n    text-align: left;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary})),xn=t.p+"static/media/WaldoFound.80f74ad0.png";function mn(n){var e=Object(b.f)(),t=Object(i.useRef)(null);function r(){return(r=Object(u.a)(l.a.mark((function i(r){var o;return l.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r.preventDefault(),e.push({pathname:"/high-scores",state:{level:n.level}}),o=t.current.value,!n.waldoMode){i.next=14;break}return i.prev=4,i.next=7,Object(s.a)(Object(s.b)(zn,"Levels",n.level,"High Scores"),{username:o,time:n.time,waldoMode:!0});case 7:i.next=12;break;case 9:i.prev=9,i.t0=i.catch(4),console.error("Error adding document: ",i.t0);case 12:i.next=22;break;case 14:return i.prev=14,i.next=17,Object(s.a)(Object(s.b)(zn,"Levels",n.level,"High Scores"),{username:o,time:n.time});case 17:i.next=22;break;case 19:i.prev=19,i.t1=i.catch(14),console.error("Error adding document: ",i.t1);case 22:case"end":return i.stop()}}),i,null,[[4,9],[14,19]])})))).apply(this,arguments)}return Object(f.jsxs)(fn,{children:[Object(f.jsxs)("figure",{children:[Object(f.jsx)("img",{src:xn,alt:"You found Waldo!"}),Object(f.jsx)("figcaption",{children:"You found Waldo!"})]}),Object(f.jsxs)("form",{onSubmit:function(n){return r.apply(this,arguments)},children:[Object(f.jsxs)("h3",{children:["You completed ",Object(f.jsx)("b",{children:n.level})," in"," ",Object(f.jsxs)("b",{children:[n.time/1e3," seconds!"]})]}),Object(f.jsxs)("fieldset",{children:[Object(f.jsx)("legend",{children:"Enter your name to save your score!"}),Object(f.jsx)("label",{htmlFor:"username",children:"Username"}),Object(f.jsx)("input",{ref:t,type:"text",id:"username"})]}),Object(f.jsx)("input",{id:"submitButton",type:"submit",value:"Submit"})]}),Object(f.jsx)("button",{onClick:function(){n.setIsGameOver(!1)},children:"Play Again"})]})}var On,gn=j.c.main(un||(un=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  gap: 16px;\n  width: 100%;\n  height: auto;\n  text-align: center;\n\n  figure {\n    width: auto;\n    height: 100%;\n    padding: 8px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  #scoresImg {\n    img {\n      max-height: 35vh;\n    }\n  }\n\n  table,\n  th,\n  td {\n    border: 2px solid black;\n    border-collapse: collapse;\n  }\n\n  table {\n    width: 100%;\n\n    caption,\n    th,\n    td {\n      padding: 16px;\n    }\n\n    .username {\n      width: 80%;\n    }\n\n    .time {\n      width: 20%;\n    }\n  }\n"]))),wn=j.c.section(hn||(hn=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  gap: 16px;\n\n  figure {\n    height: 100%;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    height: auto;\n    text-align: center;\n    overflow-x: none;\n  }\n\n  img {\n    width: auto;\n    height: auto;\n  }\n\n  figcaption {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary})),vn=Object(j.c)(wn)(pn||(pn=Object(g.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-content: space-around;\n  padding: 0 3vw;\n  height: auto;\n\n  figure {\n    border: 3px solid\n      ",";\n    border-radius: 8px;\n    padding: 16px;\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    height: 30vh;\n    object-fit: cover;\n    object-position: right bottom;\n    border-radius: 5px;\n  }\n\n  @media only screen and (max-width: 1000px) {\n    img {\n      height: 20vh;\n    }\n  }\n\n  @media only screen and (max-width: 669px) {\n    padding: 0;\n    figure {\n      padding: 8px;\n    }\n    img {\n      height: 15vh;\n    }\n  }\n  @media only screen and (max-width: 600px) {\n    grid-template-columns: 1fr 1fr;\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary})),yn=j.c.section(bn||(bn=Object(g.a)(["\n  display: flex;\n  position: relative;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n"]))),kn=j.c.div(jn||(jn=Object(g.a)(["\n  position: absolute;\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 3vw 0 0;\n  user-select: none;\n  @media only screen and (max-width: 669px) {\n    position: relative;\n    align-self: center;\n    margin: 8px 0 0 0;\n  }\n\n  label {\n    width: fit-content;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    flex-shrink: 0;\n  }\n\n  /* Hide default HTML checkbox */\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  span {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ",";\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  span:before {\n    position: absolute;\n    content: '';\n    height: 26px;\n    min-width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  input:focus + span {\n    box-shadow: 0 0 1px ",";\n  }\n\n  input:checked + span:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n"])),(function(n){return n.waldoMode?n.theme.colors.primary:n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary})),Mn=t.p+"static/media/CharacterBanner.25ed0c72.png";function Wn(n){var e=Object(i.useState)([]),t=Object(h.a)(e,2),r=t[0],o=t[1],c=Object(b.g)(),a=Object(i.useRef)(null),d=Object(i.useRef)(!0);function p(){return p=Object(u.a)(l.a.mark((function e(t){var i,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.e)(Object(s.b)(zn,"Levels",t,"High Scores"));case 2:i=e.sent,r=[],i.forEach((function(e){var i=e.data();"Ski Resort"===t||"Jurassic"===t?r.push(e):n.waldoMode?"waldoMode"in i&&r.push(e):"waldoMode"in i||r.push(e)})),c=r.map((function(n){return n.data()})),a=c.sort((function(n,e){return n.time-e.time})),o(a);case 8:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function j(){n.setWaldoMode(!n.waldoMode)}return Object(i.useEffect)((function(){if(d.current)d.current=!1;else{var n=document.getElementById("nav"),e=60;n&&(e=n.getBoundingClientRect().height);var t=a.current.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:t,behavior:"smooth"})}}),[r]),Object(i.useEffect)((function(){try{var e=c.state.level;n.setLevel(e)}catch(t){}}),[]),Object(i.useEffect)((function(){n.level&&function(n){p.apply(this,arguments)}(n.level)}),[n.level,n.waldoMode]),Object(f.jsxs)(gn,{children:[Object(f.jsx)("figure",{id:"scoresImg",children:Object(f.jsx)("img",{src:Mn,alt:"Characters"})}),Object(f.jsx)("h2",{children:"High Scores"}),Object(f.jsxs)(wn,{children:[Object(f.jsx)("h3",{children:"Choose a level!"}),Object(f.jsx)(vn,{waldoMode:n.waldoMode,children:n.levelList.map((function(e,t){return Object(f.jsxs)("figure",{onClick:function(){return t=e.name,void n.setLevel(t);var t},children:[Object(f.jsx)("figcaption",{children:Object(f.jsx)("b",{children:e.name})}),Object(f.jsx)("img",{src:e.img,alt:e.name})]},t)}))})]}),Object(f.jsxs)("table",{ref:a,id:"leaderboard",children:[Object(f.jsx)("caption",{children:n.level?Object(f.jsxs)(yn,{children:[Object(f.jsx)("h3",{children:n.level}),Object(f.jsxs)(kn,{waldoMode:n.waldoMode,children:[Object(f.jsxs)("label",{htmlFor:"checkbox",children:[n.waldoMode?"Waldo":"Challenge"," Mode"]}),Object(f.jsxs)("label",{className:"switch",children:[Object(f.jsx)("input",{onClick:j,type:"checkbox",id:"checkbox"}),Object(f.jsx)("span",{})]})]})]}):Object(f.jsxs)(yn,{children:[Object(f.jsx)("h3",{children:"Choose a level first!"}),Object(f.jsxs)(kn,{waldoMode:n.waldoMode,children:[Object(f.jsxs)("label",{htmlFor:"checkbox",children:[n.waldoMode?"Waldo":"Challenge"," Mode"]}),Object(f.jsxs)("label",{className:"switch",children:[Object(f.jsx)("input",{onClick:j,type:"checkbox",id:"checkbox"}),Object(f.jsx)("span",{})]})]})]})}),Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{className:"rank",children:"Rank"}),Object(f.jsx)("th",{className:"username",children:"Username"}),Object(f.jsx)("th",{className:"time",children:"Time"})]})}),Object(f.jsx)("tbody",{children:r.map((function(n,e){return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[e+1,"."]}),Object(f.jsx)("td",{children:n.username}),Object(f.jsxs)("td",{children:[Object(f.jsxs)("span",{children:[Math.floor(n.time/6e4%60).toString().slice(-2),":"]}),Object(f.jsx)("span",{children:("0"+Math.floor(n.time/1e3%60)).slice(-2)})]})]},e)}))})]})]})}function Cn(){return Object(f.jsx)("div",{children:"Error 404 - Page Not Found"})}var Tn=Object(j.b)(On||(On=Object(g.a)(["\n\n    html {\n        scroll-behavior: smooth;\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        width: 100%;\n        height: auto;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n    }\n"]))),In={colors:{primary:"#2d9edf",secondary:"#ee2223",targetingBox:"#39ff14"},sizing:{ul:{padding:"3px 5px",borderRadius:"7px"}}};function Sn(){var n=Object(i.useState)(!1),e=Object(h.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)(!1),c=Object(h.a)(o,2),a=c[0],d=c[1],x=Object(i.useState)(0),m=Object(h.a)(x,2),O=m[0],g=m[1],w=Object(i.useState)(!1),v=Object(h.a)(w,2),y=v[0],k=v[1],W=Object(i.useState)(void 0),C=Object(h.a)(W,2),T=C[0],I=C[1],S=Object(i.useState)(!0),F=Object(h.a)(S,2),z=F[0],D=F[1],L=Object(i.useState)([]),G=Object(h.a)(L,2),N=G[0],E=G[1];function R(){return R=Object(u.a)(l.a.mark((function n(){var e,t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[],t=Object(s.g)(Object(s.b)(zn,"Levels")),n.next=4,Object(s.e)(t);case 4:n.sent.forEach((function(n){var t=n.data();e.push(t)})),E(e);case 7:case"end":return n.stop()}}),n)}))),R.apply(this,arguments)}return Object(i.useEffect)((function(){!function(){R.apply(this,arguments)}()}),[]),Object(f.jsx)(p.a,{children:Object(f.jsxs)(j.a,{theme:In,children:[Object(f.jsx)(Tn,{}),Object(f.jsx)(M,{setIsGameOver:d,isGameOn:t,setIsGameOn:r,time:O,setTime:g,isTimerOn:y,setIsTimerOn:k,isGameOver:a,setLevel:I,levelList:N}),Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{exact:!0,path:"/",children:Object(f.jsx)(_,{waldoMode:z,setWaldoMode:D,levelList:N})}),N.map((function(n,e){return Object(f.jsx)(b.a,{exact:!0,path:n.path,children:a?Object(f.jsx)(mn,{isGameOver:a,setIsGameOver:d,time:O,level:n.name,waldoMode:z}):Object(f.jsx)(ln,{isGameOver:a,setIsGameOver:d,isGameOn:t,setIsGameOn:r,setTime:g,isTimerOn:y,setIsTimerOn:k,img:n.img,level:n.name,waldoMode:z})},e)})),Object(f.jsx)(b.a,{exact:!0,path:"/high-scores",children:Object(f.jsx)(Wn,{level:T,setLevel:I,levelList:N,waldoMode:z,setWaldoMode:D})}),Object(f.jsx)(b.a,{component:Cn})]})]})})}var Fn=Object(a.a)({apiKey:"AIzaSyA-_xHp4FOaCpr4mQkqyLxpg_YW3JhmPfQ",authDomain:"wheres-waldo-78b7d.firebaseapp.com",projectId:"wheres-waldo-78b7d",storageBucket:"wheres-waldo-78b7d.appspot.com",messagingSenderId:"91226203075",appId:"1:91226203075:web:01c1fbfc3ca1bf8df11376"}),zn=Object(s.f)(Fn);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Sn,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.bb6bfb1c.chunk.js.map