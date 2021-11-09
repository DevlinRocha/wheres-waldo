(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{67:function(e,n,t){"use strict";t.r(n),t.d(n,"db",(function(){return we}));var i=t(5),c=t.n(i),r=t(47),s=t.n(r),o=t(48),a=t(18),l=t(11),d=t(19),u=t(12),j=t(13),b=t(2);function h(e){return Object(i.useEffect)((function(){!1===e.isGameOver?e.setIsTimerOn(!0):e.setIsTimerOn(!1)}),[e.isGameOver]),Object(i.useEffect)((function(){var n;return e.isTimerOn&&(n=setInterval((function(){e.setTime((function(e){return e+10}))}),10)),function(){clearInterval(n)}}),[e.isTimerOn]),Object(b.jsxs)("time",{children:[Object(b.jsxs)("span",{children:[Math.floor(e.time/6e4%60).toString().slice(-2),":"]}),Object(b.jsx)("span",{children:("0"+Math.floor(e.time/1e3%60)).slice(-2)})]})}var p,x,O=t(14),f=j.c.aside(p||(p=Object(O.a)(["\n    justify-self: end;\n    transition: all 3s;\n\n    #levelList {\n        display: ","; // 'flex' or 'none'\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n        position: absolute;\n        background: white;\n        width: auto;\n        height: ",";\n        margin: 3px 16px 0 0;\n        padding: ",";\n        border: 1px solid ",";\n        border-radius: ",";\n        transition: all 0.75s;\n        z-index: 1;\n        list-style-type: none;\n    }\n\n    a {\n        padding: 8px;\n        margin: 0;\n        opacity: ",";\n        display: ","; // 'inline-block' or 'none'\n        transition: opacity, background-color, color, 0.25s;\n        width: 100%;\n        height: 100%;\n        color: ",";\n    }\n\n    a:hover {\n\n        background-color: ",";\n        border-radius: ",";\n        color: white;\n    }\n\n    .active {\n        color: ",";\n    }\n"])),(function(e){return e.isDropDownOpen?"flex":"none"}),(function(e){return e.isDropDownOpen?"auto":"0px"}),(function(e){return e.theme.sizing.ul.padding}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.sizing.ul.borderRadius}),(function(e){return e.isDropDownOpen?1:0}),(function(e){return e.isDropDownOpen?"inline-block":"none"}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.sizing.ul.borderRadius}),(function(e){return e.theme.colors.secondary}));function m(e){var n=Object(i.useState)(!1),t=Object(l.a)(n,2),c=t[0],r=t[1];function s(){e.setIsGameOver(!1),r(!1)}return Object(b.jsxs)(f,{isDropDownOpen:c,children:[Object(b.jsx)("button",{onClick:function(){r(!c)},children:"Level Select"}),Object(b.jsxs)("ul",{id:"levelList",children:[Object(b.jsx)(d.c,{onClick:s,exact:!0,to:"/gobbling-gluttons",children:Object(b.jsx)("li",{children:"Gobbling Gluttons"})}),Object(b.jsx)(d.c,{onClick:s,exact:!0,to:"/ski-resort",children:Object(b.jsx)("li",{children:"Ski Resort"})}),Object(b.jsx)(d.c,{onClick:s,exact:!0,to:"/toys-toys-toys",children:Object(b.jsx)("li",{children:"Toys! Toys! Toys!"})})]})]})}var g,v,y,w=j.c.nav(x||(x=Object(O.a)(["\n\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr auto 1fr;\n    align-items: center;\n    padding: 16px;\n    background-color: white;\n    gap: 8px;\n\n    #first {\n        color: ",";\n    }\n\n    #second {\n        color: ",";\n    }\n\n    time {\n        padding: 8px;\n        background-color: ",";\n        color: white;\n        border-radius: 7px;\n    }\n\n    section {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-end;\n        gap: 8px;\n    }\n\n    button {\n        cursor: pointer;\n        color: white;\n        background-color: ",";\n        padding: 5px;\n        border-radius: 7px;\n        border: inherit;\n        font: inherit;\n\n        a {\n            color: white;\n        }\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    ul {\n        display: flex;\n        flex-direction: rows;\n        gap: 10px;\n        list-style: none;\n    }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.primary}));function k(e){function n(){e.setIsGameOver(!1),e.setIsGameOn(!1),e.setLevel(void 0)}return Object(b.jsxs)(w,{children:[Object(b.jsx)("h1",{onClick:n,children:Object(b.jsxs)(d.b,{to:"/",children:[Object(b.jsx)("span",{id:"first",children:"Where's"})," ",Object(b.jsx)("span",{id:"second",children:"Waldo?"})]})}),e.isGameOn?Object(b.jsx)(h,{time:e.time,setTime:e.setTime,isTimerOn:e.isTimerOn,setIsTimerOn:e.setIsTimerOn,isGameOver:e.isGameOver}):null,Object(b.jsxs)("section",{children:[Object(b.jsx)(m,{setIsGameOver:e.setIsGameOver}),Object(b.jsx)(d.b,{onClick:n,to:"/high-scores",children:Object(b.jsx)("button",{children:"High Scores"})})]})]})}var T=j.c.main(g||(g=Object(O.a)(["\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 16px;\n    background-color: white;\n    gap: 32px;\n    width: 100%;\n    height: auto;\n    text-align: center;\n\n    #homeLogo {\n        border: none;\n        img {\n            height: clamp(15vh, 35vh, 35vh);\n            width: auto;\n        }\n    }\n\n    a {\n        border: 3px solid ",";\n        border-radius: 8px;\n        padding: 8px;\n    }\n\n    figure {\n        padding: px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        overflow-x: none;\n    }\n\n    img {\n        object-fit: contain;\n    }\n\n    h3 {\n        color: white;\n        color: black;\n        padding: 8px;\n        border-radius: 7px;\n    }\n"])),(function(e){return e.theme.colors.primary})),G=j.c.section(v||(v=Object(O.a)(["\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: auto;\n\n    a {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-decoration: none;\n    }\n\n    figcaption {\n        color: ",";\n        padding: 8px;\n        width: clamp(auto, 50%, auto);\n    }\n"])),(function(e){return e.theme.colors.secondary})),W=Object(j.c)(G)(y||(y=Object(O.a)(["\n\n    flex-direction: row;\n    justify-content: space-around;\n    background-color: white;\n    gap: 8px;\n    padding: 32px 0 0;\n\n    figure {\n        width: clamp(15vw, 100%, 25vw);\n        height: clamp(10vh, 25vh, 35vh);\n\n        a {\n            text-decoration: none;\n            width: 100%;\n            height: 100%;\n        }\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n"]))),I=t.p+"static/media/Where'sWaldo.13ab699b.png",C=t.p+"static/media/GobblingGluttons.3e56f8b3.jpg",S=t.p+"static/media/SkiResort.e623c363.png",F=t.p+"static/media/ToysToysToys.bd8c0dd8.jpg",D=t.p+"static/media/Odlaw.7f2337c8.png",z=t.p+"static/media/Waldo.2a7963c3.png",R=t.p+"static/media/Wenda.c2c5c953.png",N=t.p+"static/media/WizardWhitebeard.77d677dc.png",L=t.p+"static/media/Woof.b5718edf.png",M=t.p+"static/media/Binoculars.dcc41ad0.png",B=t.p+"static/media/Bone.6d651ea5.png",E=t.p+"static/media/Camera.e9500640.png",Y=t.p+"static/media/Key.dfbc9908.png",H=t.p+"static/media/Scroll.b95f5488.png";function K(){return Object(b.jsxs)(T,{children:[Object(b.jsx)("figure",{id:"homeLogo",children:Object(b.jsx)("img",{src:I,alt:"Where's Waldo?"})}),Object(b.jsxs)(G,{children:[Object(b.jsx)("h3",{children:"Choose a level!"}),Object(b.jsxs)(W,{children:[Object(b.jsx)(d.b,{to:"/gobbling-gluttons",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Gobbling Gluttons"})}),Object(b.jsx)("img",{src:C,alt:"Gobbling Gluttons"})]})}),Object(b.jsx)(d.b,{to:"/ski-resort",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Ski Resort"})}),Object(b.jsx)("img",{src:S,alt:"Ski Resort"})]})}),Object(b.jsx)(d.b,{to:"/toys-toys-toys",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Toys! Toys! Toys!"})}),Object(b.jsx)("img",{src:F,alt:"Toys! Toys! Toys!"})]})})]})]}),Object(b.jsxs)(G,{children:[Object(b.jsx)("h3",{children:"Look for these characters!"}),Object(b.jsxs)(W,{children:[Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Waldo"})}),Object(b.jsx)("img",{src:z,alt:"Waldo"})]}),Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Wenda"})}),Object(b.jsx)("img",{src:R,alt:"Wenda"})]}),Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Wizard"})}),Object(b.jsx)("img",{src:N,alt:"Wizard"})]}),Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Odlaw"})}),Object(b.jsx)("img",{src:D,alt:"Odlaw"})]}),Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Woof"})}),Object(b.jsx)("img",{src:L,alt:"Woof"})]})]})]}),Object(b.jsxs)(G,{children:[Object(b.jsx)("h3",{children:"Find these items!"}),Object(b.jsxs)(W,{children:[Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Binoculars"})}),Object(b.jsx)("img",{src:M,alt:"Binoculars"})]}),Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Bone"})}),Object(b.jsx)("img",{src:B,alt:"Bone"})]}),Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Camera"})}),Object(b.jsx)("img",{src:E,alt:"Camera"})]}),Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Key"})}),Object(b.jsx)("img",{src:Y,alt:"Key"})]}),Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Scroll"})}),Object(b.jsx)("img",{src:H,alt:"Scroll"})]})]})]})]})}var U,A=t(0),J=t.n(A),P=t(4),X=j.c.aside(U||(U=Object(O.a)(["\n    position: fixed;\n    color: white;\n    top: 5rem;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 8px;\n    background-color: ",";\n    border-radius: ",";\n    z-index: 1;\n"])),(function(e){return e.notificationData.isCharacterFound?function(e){return e.theme.colors.primary}:function(e){return e.theme.colors.secondary}}),(function(e){return e.theme.sizing.ul.borderRadius}));function Q(e){return Object(b.jsx)(X,{notificationData:e.notificationData,children:e.notificationData.isCharacterFound?Object(b.jsxs)("span",{children:["You found ",Object(b.jsx)("b",{children:e.notificationData.character}),"!"]}):Object(b.jsxs)("span",{children:[Object(b.jsx)("b",{children:e.notificationData.character})," not found, try again!"]})})}var _,q=t(35);function V(e){function n(e){return t.apply(this,arguments)}function t(){return(t=Object(P.a)(J.a.mark((function n(t){var i,c,r;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=Object(a.c)(we,"Levels",e.level,"Coordinates",t),n.next=3,Object(a.d)(i);case 3:if(!(c=n.sent).exists()){n.next=9;break}return r=c.data(),n.abrupt("return",r);case 9:console.error("No such document!");case 10:case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function i(e){return c.apply(this,arguments)}function c(){return(c=Object(P.a)(J.a.mark((function t(i){var c,r;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=i.target.textContent,e.setIsContextMenuOpen(!e.isContextMenuOpen),t.next=4,n(c);case 4:if(!(r=t.sent)){t.next=28;break}if(!(Math.abs(e.mouseCoords.x-r.x)<25&&Math.abs(e.mouseCoords.y-r.y)<42)){t.next=25;break}clearTimeout(e.notificationData.timer),e.setNotificationData({isNotificationOpen:!0,character:c,isCharacterFound:!0,timer:setTimeout((function(){e.setNotificationData(Object(q.a)(Object(q.a)({},e.notificationData),{},{isNotificationOpen:!1}))}),3e3)}),t.t0=c,t.next="Odlaw"===t.t0?12:"Waldo"===t.t0?14:"Wenda"===t.t0?16:"Wizard"===t.t0?18:"Woof"===t.t0?20:22;break;case 12:return e.setIsOdlawFound(!0),t.abrupt("break",22);case 14:return e.setIsWaldoFound(!0),t.abrupt("break",22);case 16:return e.setIsWendaFound(!0),t.abrupt("break",22);case 18:return e.setIsWizardFound(!0),t.abrupt("break",22);case 20:return e.setIsWoofFound(!0),t.abrupt("break",22);case 22:t.next=27;break;case 25:clearTimeout(e.notificationData.timer),e.setNotificationData({isNotificationOpen:!0,character:c,isCharacterFound:!1,timer:setTimeout((function(){e.setNotificationData(Object(q.a)(Object(q.a)({},e.notificationData),{},{isNotificationOpen:!1}))}),3e3)});case 27:case 28:case 29:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function r(n){switch(n){case"Odlaw":return!!e.isOdlawFound;case"Waldo":return!!e.isWaldoFound;case"Wenda":return!!e.isWendaFound;case"Wizard":return!!e.isWizardFound;case"Woof":return!!e.isWoofFound;default:return!1}}return Object(b.jsx)("ul",{children:e.characters.map((function(e){return Object(b.jsx)("li",{onClick:i,children:r(e)?Object(b.jsx)("s",{children:e}):e},e)}))})}var Z,$,ee,ne=j.c.main(_||(_=Object(O.a)(["\n    display: flex;\n    user-select: none;\n    width: 100%;\n    height: auto;\n\n    figure {\n        text-align: center;\n    }\n\n    figcaption {\n        padding: 8px;\n    }\n\n    img {\n        --webkit-user-drag: none;\n        object-fit: contain;\n        width: 100%;\n        height: auto;\n        border: 7px solid ",";\n        border-radius: 7px;\n    }\n"])),(function(e){return e.theme.colors.secondary})),te=75,ie=j.c.div(Z||(Z=Object(O.a)(["\n    ul {\n        display: flex;\n        flex-direction: column;\n        position: absolute;\n        left: ","px;\n        top: ","px;\n        color: ",";\n        background-color: white;\n        padding: ",";\n        border: 1px solid ",";\n        border-radius: ",";\n        gap: 3px;\n        list-style: none;\n        z-index: 1;\n    }\n\n    li {\n        padding: 3px;\n    }\n\n    li:hover {\n        color: white;\n        cursor: pointer;\n        background-color: ",";\n        transition: opacity, background-color, color, 0.25s;\n        border-radius: 3px;\n    }\n"])),(function(e){return e.menuCoords.x+37.5+3}),(function(e){return e.menuCoords.y-18.75}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.sizing.ul.padding}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.sizing.ul.borderRadius}),(function(e){return e.theme.colors.primary})),ce=j.c.div($||($=Object(O.a)(["\n    left: ","px;\n    top: ","px;\n    display: flex;\n    position: absolute;\n    height: ","px;\n    width: ","px;\n    border: 5px dashed ",";\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 30px;\n    z-index: 1;\n"])),(function(e){return e.menuCoords.x-37.5}),(function(e){return e.menuCoords.y-37.5}),te,te,(function(e){return e.theme.colors.targetingBox}));function re(e){var n=Object(i.useState)({x:0,y:0}),t=Object(l.a)(n,2),c=t[0],r=t[1],s=Object(i.useState)({x:0,y:0}),o=Object(l.a)(s,2),d=o[0],j=o[1],h=Object(i.useState)(!1),p=Object(l.a)(h,2),x=p[0],O=p[1],f=Object(i.useState)(!1),m=Object(l.a)(f,2),g=m[0],v=m[1],y=Object(i.useState)(!1),w=Object(l.a)(y,2),k=w[0],T=w[1],G=Object(i.useState)(!1),W=Object(l.a)(G,2),I=W[0],C=W[1],S=Object(i.useState)(!1),F=Object(l.a)(S,2),D=F[0],z=F[1],R=Object(i.useState)(!1),N=Object(l.a)(R,2),L=N[0],M=N[1],B=Object(i.useState)([]),E=Object(l.a)(B,2),Y=E[0],H=E[1],K=Object(i.useState)({isNotificationOpen:!1,character:"",isCharacterFound:!1,timer:setTimeout((function(){}),0)}),U=Object(l.a)(K,2),A=U[0],X=U[1],_=Object(u.f)(),q=Object(i.useRef)(!0);function Z(){return Z=Object(P.a)(J.a.mark((function n(){var t,i;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(a.e)(Object(a.b)(we,"Levels",e.level,"Coordinates"));case 2:t=n.sent,i=[],t.forEach((function(e){i.push(e.id)})),H(i);case 6:case"end":return n.stop()}}),n)}))),Z.apply(this,arguments)}function $(e){var n=e.target.getBoundingClientRect(),t=n.width,i=n.height,c=e.nativeEvent,s=c.offsetX,o=c.offsetY,a=Math.round(s/t*1e3),l=Math.round(o/i*1e3),d={x:e.pageX,y:e.pageY};r({x:a,y:l}),j(d)}function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(P.a)(J.a.mark((function e(n){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$(n),O(!x);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){if(q.current)return q.current=!1,void e.setIsGameOn(!0);var n=[];for(var t in Y)switch(Y[t]){case"Odlaw":n.push(g);break;case"Waldo":n.push(k);break;case"Wenda":n.push(I);break;case"Wizard":n.push(D)}return n.includes(!1)?void 0:(e.setIsTimerOn(!1),e.setIsGameOn(!1),e.setIsGameOver(!0))}),[g,k,I,D]),Object(i.useEffect)((function(){v(!1),T(!1),C(!1),z(!1),function(){Z.apply(this,arguments)}(),e.setTime(0)}),[_.location]),Object(b.jsxs)(ne,{children:[A.isNotificationOpen?Object(b.jsx)(Q,{notificationData:A}):null,x?Object(b.jsxs)(ie,{menuCoords:d,children:[Object(b.jsx)(ce,{onClick:ee,menuCoords:d}),Object(b.jsx)(V,{isContextMenuOpen:x,setIsContextMenuOpen:O,notificationData:A,setNotificationData:X,img:e.img,level:e.level,characters:Y,mouseCoords:c,isOdlawFound:g,setIsOdlawFound:v,isWaldoFound:k,setIsWaldoFound:T,isWendaFound:I,setIsWendaFound:C,isWizardFound:D,setIsWizardFound:z,isWoofFound:L,setIsWoofFound:M})]}):null,Object(b.jsxs)("figure",{children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("h3",{children:e.level})}),Object(b.jsx)("img",{onClick:ee,src:e.img,draggable:"false",alt:"Where's Waldo?"})]})]})}var se,oe,ae,le=j.c.main(ee||(ee=Object(O.a)(["\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 16px;\n    background-color: white;\n    gap: 64px;\n    width: 100%;\n    height: auto;\n    text-align: center;\n\n    figure {\n        height: clamp(15vh, 35vh, 35vh);\n        width: auto;\n    }\n\n    figcaption {\n        padding: 16px 0 0 0;\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n\n    button {\n        cursor: pointer;\n        color: white;\n        background-color: ",";\n        padding: 5px;\n        border-radius: 7px;\n        border: none;\n        font: inherit;\n    }\n\n    fieldset {\n        display: flex;\n        flex-direction: column;\n        padding: 16px;\n        gap: 8px;\n    }\n\n    form {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n    }\n\n    #submitButton {\n        cursor: pointer;\n        color: white;\n        background-color: ",";\n        padding: 5px;\n        border-radius: 7px;\n        border: none;\n        font: inherit;\n    }\n\n    label {\n        text-align: left;\n    }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),de=t.p+"static/media/WaldoFound.80f74ad0.png";function ue(e){var n=Object(u.f)(),t=Object(i.useRef)(null);function c(){return(c=Object(P.a)(J.a.mark((function i(c){var r;return J.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return c.preventDefault(),n.push({pathname:"/high-scores",state:{level:e.level}}),r=t.current.value,i.prev=3,i.next=6,Object(a.a)(Object(a.b)(we,"Levels",e.level,"High Scores"),{username:r,time:e.time});case 6:i.next=11;break;case 8:i.prev=8,i.t0=i.catch(3),console.error("Error adding document: ",i.t0);case 11:case 12:case"end":return i.stop()}}),i,null,[[3,8]])})))).apply(this,arguments)}return Object(b.jsxs)(le,{children:[Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{src:de,alt:"You found Waldo!"}),Object(b.jsx)("figcaption",{children:"You found Waldo!"})]}),Object(b.jsxs)("form",{onSubmit:function(e){return c.apply(this,arguments)},children:[Object(b.jsxs)("h3",{children:["You completed ",Object(b.jsx)("b",{children:e.level})," in ",Object(b.jsxs)("b",{children:[e.time/1e3," seconds!"]})]}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Enter your name to save your score!"}),Object(b.jsx)("label",{htmlFor:"username",children:"Username"}),Object(b.jsx)("input",{ref:t,type:"text",id:"username"})]}),Object(b.jsx)("input",{id:"submitButton",type:"submit",value:"Submit"})]}),Object(b.jsx)("button",{onClick:function(){e.setIsGameOver(!1)},children:"Play Again"})]})}var je,be=j.c.main(se||(se=Object(O.a)(["\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 16px;\n    gap: 32px;\n    background-color: white;\n    width: 100%;\n    height: auto;\n    text-align: center;\n\n    figure {\n        height: clamp(15vh, 35vh, 35vh);\n        width: auto;\n    }\n\n    figcaption {\n        padding: 16px 0 0 0;\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n\n    table, th, td {\n        border: 2px solid black;\n        border-collapse: collapse;\n    }\n\n    table {\n        width: 100%;\n\n        caption, th, td {\n            padding: 16px;\n        }\n\n        .username {\n            width: 80%;\n        }\n\n        .time {\n            width: 20%;\n        }\n    }\n"]))),he=j.c.section(oe||(oe=Object(O.a)(["\n\n    margin: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: auto;\n\n    figure {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    figcaption {\n        color: ",";\n        padding: 8px;\n        width: clamp(auto, 50%, auto);\n    }\n"])),(function(e){return e.theme.colors.secondary})),pe=Object(j.c)(he)(ae||(ae=Object(O.a)(["\n\n    flex-direction: row;\n    justify-content: space-around;\n    background-color: white;\n    padding: 32px 0 0;\n\n    figure {\n        width: clamp(15vw, 100%, 25vw);\n        height: clamp(10vh, 25vh, 35vh);\n        border: 3px solid ",";\n        border-radius: 8px;\n        padding: 8px;\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n"])),(function(e){return e.theme.colors.primary})),xe=t.p+"static/media/CharacterBanner.25ed0c72.png";function Oe(e){var n=Object(i.useState)([]),t=Object(l.a)(n,2),c=t[0],r=t[1],s=Object(u.g)(),o=Object(i.useRef)(null);function d(n){e.setLevel(n)}function j(){return j=Object(P.a)(J.a.mark((function e(n){var t,i,c,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.e)(Object(a.b)(we,"Levels",n,"High Scores"));case 2:t=e.sent,i=[],t.forEach((function(e){i.push(e)})),c=i.map((function(e){return e.data()})),s=c.sort((function(e,n){return e.time-n.time})),r(s);case 8:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}return Object(i.useEffect)((function(){o.current&&o.current.scrollIntoView()}),[c]),Object(i.useEffect)((function(){try{var n=s.state.level;e.setLevel(n)}catch(t){}}),[]),Object(i.useEffect)((function(){e.level&&function(e){j.apply(this,arguments)}(e.level)}),[e.level]),Object(b.jsxs)(be,{children:[Object(b.jsx)("figure",{children:Object(b.jsx)("img",{src:xe,alt:"Characters"})}),Object(b.jsx)("h2",{children:"High Scores"}),Object(b.jsxs)(he,{children:[Object(b.jsx)("h3",{children:"Choose a level!"}),Object(b.jsxs)(pe,{children:[Object(b.jsxs)("figure",{onClick:function(){return d("Gobbling Gluttons")},children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Gobbling Gluttons"})}),Object(b.jsx)("img",{src:C,alt:"Gobbling Gluttons"})]}),Object(b.jsxs)("figure",{onClick:function(){return d("Ski Resort")},children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Ski Resort"})}),Object(b.jsx)("img",{src:S,alt:"Ski Resort"})]}),Object(b.jsxs)("figure",{onClick:function(){return d("Toys! Toys! Toys!")},children:[Object(b.jsx)("figcaption",{children:Object(b.jsx)("b",{children:"Toys! Toys! Toys!"})}),Object(b.jsx)("img",{src:F,alt:"Toys! Toys! Toys!"})]})]})]}),Object(b.jsxs)("table",{ref:o,id:"leaderboard",children:[Object(b.jsx)("caption",{children:Object(b.jsx)("h3",{children:e.level?e.level:"Choose a level first!"})}),Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"rank",children:"Rank"}),Object(b.jsx)("th",{className:"username",children:"Username"}),Object(b.jsx)("th",{className:"time",children:"Time"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,n){return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[n+1,"."]}),Object(b.jsx)("td",{children:e.username}),Object(b.jsxs)("td",{children:[Object(b.jsxs)("span",{children:[Math.floor(e.time/6e4%60).toString().slice(-2),":"]}),Object(b.jsx)("span",{children:("0"+Math.floor(e.time/1e3%60)).slice(-2)})]})]},n)}))})]})]})}function fe(){return Object(b.jsx)("div",{children:"Error 404 - Page Not Found"})}var me=Object(j.b)(je||(je=Object(O.a)(["\n\n    html {\n        scroll-behavior: smooth;\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        width: 100%;\n        height: auto;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n    }\n"]))),ge={colors:{primary:"#2d9edf",secondary:"#ee2223",targetingBox:"#39ff14"},sizing:{ul:{padding:"3px 5px",borderRadius:"7px"}}};function ve(){var e=Object(i.useState)(!1),n=Object(l.a)(e,2),t=n[0],c=n[1],r=Object(i.useState)(!1),s=Object(l.a)(r,2),o=s[0],a=s[1],h=Object(i.useState)(0),p=Object(l.a)(h,2),x=p[0],O=p[1],f=Object(i.useState)(!1),m=Object(l.a)(f,2),g=m[0],v=m[1],y=Object(i.useState)(void 0),w=Object(l.a)(y,2),T=w[0],G=w[1];return Object(b.jsx)(d.a,{children:Object(b.jsxs)(j.a,{theme:ge,children:[Object(b.jsx)(me,{}),Object(b.jsx)(k,{setIsGameOver:a,isGameOn:t,setIsGameOn:c,time:x,setTime:O,isTimerOn:g,setIsTimerOn:v,isGameOver:o,setLevel:G}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",component:K}),Object(b.jsx)(u.a,{exact:!0,path:"/gobbling-gluttons",children:o?Object(b.jsx)(ue,{isGameOver:o,setIsGameOver:a,time:x,level:"Gobbling Gluttons"}):Object(b.jsx)(re,{isGameOver:o,setIsGameOver:a,isGameOn:t,setIsGameOn:c,setTime:O,setIsTimerOn:v,img:C,level:"Gobbling Gluttons"})}),Object(b.jsx)(u.a,{exact:!0,path:"/ski-resort",children:o?Object(b.jsx)(ue,{isGameOver:o,setIsGameOver:a,time:x,level:"Ski Resort"}):Object(b.jsx)(re,{isGameOver:o,setIsGameOver:a,isGameOn:t,setIsGameOn:c,setTime:O,setIsTimerOn:v,img:S,level:"Ski Resort"})}),Object(b.jsx)(u.a,{exact:!0,path:"/toys-toys-toys",children:o?Object(b.jsx)(ue,{isGameOver:o,setIsGameOver:a,time:x,level:"Toys! Toys! Toys!"}):Object(b.jsx)(re,{isGameOver:o,setIsGameOver:a,isGameOn:t,setIsGameOn:c,setTime:O,setIsTimerOn:v,img:F,level:"Toys! Toys! Toys!"})}),Object(b.jsx)(u.a,{exact:!0,path:"/high-scores",children:Object(b.jsx)(Oe,{level:T,setLevel:G})}),Object(b.jsx)(u.a,{component:fe})]})]})})}var ye=Object(o.a)({apiKey:"AIzaSyA-_xHp4FOaCpr4mQkqyLxpg_YW3JhmPfQ",authDomain:"wheres-waldo-78b7d.firebaseapp.com",projectId:"wheres-waldo-78b7d",storageBucket:"wheres-waldo-78b7d.appspot.com",messagingSenderId:"91226203075",appId:"1:91226203075:web:01c1fbfc3ca1bf8df11376"}),we=Object(a.f)(ye);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(ve,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.dc90664d.chunk.js.map