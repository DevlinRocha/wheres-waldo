(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{66:function(e,n,t){"use strict";t.r(n),t.d(n,"db",(function(){return $}));var c,r,a,o,s=t(4),i=t.n(s),u=t(46),d=t.n(u),l=t(47),b=t(24),j=t(11),p=t(25),x=t(12),O=t(15),h=t(17),f=O.c.nav(c||(c=Object(h.a)(["\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px;\n\n    h1 > a {\n        color: black;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    ul {\n        display: flex;\n        flex-direction: rows;\n        gap: 10px;\n        list-style: none;\n    }\n"]))),g=O.c.aside(r||(r=Object(h.a)(["\n    transition: all 3s;\n\n    p {\n        cursor: pointer;\n    }\n\n    ul {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        text-align: center;\n        position: absolute;\n        background: white;\n        width: auto;\n        height: ",";\n        transition: all 1s;\n        border-radius: 15px;\n    }\n\n    li {\n        opacity: ",";\n        display: ","; // 'none' or 'flex'\n        transition: all 1s;\n    }\n\n    .active {\n        color: ",";\n    }\n"])),(function(e){return e.isDropDownOpen?"100px":"0px"}),(function(e){return e.isDropDownOpen?1:0}),(function(e){return e.isDropDownOpen?"inline-block":"none"}),(function(e){return e.theme.contextMenu.selectionMenu.hover.text})),m=t(6);function v(e){var n=Object(s.useState)(!1),t=Object(j.a)(n,2),c=t[0],r=t[1];function a(){e.setIsGameOver(!1),r(!1)}return Object(m.jsxs)(g,{isDropDownOpen:c,children:[Object(m.jsx)("p",{onClick:function(){r(!c)},children:"Level Select"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:a,children:Object(m.jsx)(p.c,{exact:!0,to:"/gobbling-gluttons",children:"Gobbling Gluttons"})}),Object(m.jsx)("li",{onClick:a,children:Object(m.jsx)(p.c,{exact:!0,to:"/ski-resort",children:"Ski Resort"})})]})]})}function w(e){return Object(m.jsxs)(f,{children:[Object(m.jsx)("h1",{onClick:function(){e.setIsGameOver(!1)},children:Object(m.jsx)(p.b,{to:"/",children:"Where's Waldo?"})}),Object(m.jsx)(v,{setIsGameOver:e.setIsGameOver})]})}var k=O.c.div(a||(a=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    text-align: center;\n    gap: 64px;\n\n    img {\n        height: 35vh;\n        width: auto;\n        padding: 32px;\n    }\n"]))),y=Object(O.c)(k)(o||(o=Object(h.a)(["\n    flex-direction: row;\n"]))),W=t.p+"static/media/Where'sWaldo.13ab699b.png",C=t.p+"static/media/Odlaw.7f2337c8.png",I=t.p+"static/media/Waldo.2a7963c3.png",M=t.p+"static/media/Wenda.c2c5c953.png",F=t.p+"static/media/WizardWhitebeard.77d677dc.png";function G(){return Object(m.jsxs)(k,{children:[Object(m.jsx)("figure",{children:Object(m.jsx)("img",{src:W,alt:"Where's Waldo?"})}),Object(m.jsxs)(k,{children:[Object(m.jsx)("p",{children:"Look for these characters!"}),Object(m.jsxs)(y,{children:[Object(m.jsxs)("figure",{children:[Object(m.jsx)("figcaption",{children:"Waldo"}),Object(m.jsx)("img",{src:I,alt:"Waldo"})]}),Object(m.jsxs)("figure",{children:[Object(m.jsx)("figcaption",{children:"Wenda"}),Object(m.jsx)("img",{src:M,alt:"Wenda"})]}),Object(m.jsxs)("figure",{children:[Object(m.jsx)("figcaption",{children:"Wizard"}),Object(m.jsx)("img",{src:F,alt:"Wizard"})]}),Object(m.jsxs)("figure",{children:[Object(m.jsx)("figcaption",{children:"Odlaw"}),Object(m.jsx)("img",{src:C,alt:"Odlaw"})]})]})]})]})}var S,z=t(0),D=t.n(z),B=t(3);function E(e){function n(e){return t.apply(this,arguments)}function t(){return(t=Object(B.a)(D.a.mark((function n(t){var c,r,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=Object(b.b)($,e.level,t),n.next=3,Object(b.c)(c);case 3:if(!(r=n.sent).exists()){n.next=9;break}return a=r.data(),n.abrupt("return",a);case 9:console.error("No such document!");case 10:case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(e){return r.apply(this,arguments)}function r(){return(r=Object(B.a)(D.a.mark((function t(c){var r,a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.target.textContent,e.setIsContextMenuOpen(!e.isContextMenuOpen),t.next=4,n(r);case 4:if(!(a=t.sent)){t.next=24;break}if(!(Math.abs(e.mouseCoords.x-a.x)<25&&Math.abs(e.mouseCoords.y-a.y)<42)){t.next=22;break}console.log("You found ".concat(r,"!")),t.t0=r,t.next="Odlaw"===t.t0?11:"Waldo"===t.t0?13:"Wenda"===t.t0?15:"Wizard"===t.t0?17:19;break;case 11:return e.setIsOdlawFound(!0),t.abrupt("break",19);case 13:return e.setIsWaldoFound(!0),t.abrupt("break",19);case 15:return e.setIsWendaFound(!0),t.abrupt("break",19);case 17:return e.setIsWizardFound(!0),t.abrupt("break",19);case 19:t.next=23;break;case 22:console.log("".concat(r," not found, try again!"));case 23:case 24:case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(n){switch(n){case"Odlaw":return!!e.isOdlawFound;case"Waldo":return!!e.isWaldoFound;case"Wenda":return!!e.isWendaFound;case"Wizard":return!!e.isWizardFound;default:return!1}}return Object(m.jsx)("ul",{children:e.characters.map((function(e){return Object(m.jsx)("li",{onClick:c,children:a(e)?Object(m.jsx)("s",{children:e}):e},e)}))})}var R,Y,N=O.c.section(S||(S=Object(h.a)(["\n    display: flex;\n    user-select: none;\n    width: 100%;\n    height: auto;\n\n    img {\n        --webkit-user-drag: none;\n        object-fit: contain;\n        width: 100%;\n        height: auto;\n    }\n"]))),A=75,J=O.c.div(R||(R=Object(h.a)(["\n    ul {\n        left: ","px;\n        top: ","px;\n        color: ",";\n        display: flex;\n        flex-direction: column;\n        position: absolute;\n        list-style: none;\n        background-color: ",";\n        padding: 3px;\n        border-radius: 7px;\n        gap: 3px;\n        z-index: 1;\n    }\n\n    li:hover {\n        color: ",";\n        cursor: pointer;\n        background-color: ",";\n        border-radius: 3px;\n    }\n"])),(function(e){return e.menuCoords.x+37.5+3}),(function(e){return e.menuCoords.y-18.75}),(function(e){return e.theme.contextMenu.selectionMenu.text}),(function(e){return e.theme.contextMenu.selectionMenu.background}),(function(e){return e.theme.contextMenu.selectionMenu.hover.text}),(function(e){return e.theme.contextMenu.selectionMenu.hover.background})),L=O.c.div(Y||(Y=Object(h.a)(["\n    left: ","px;\n    top: ","px;\n    display: flex;\n    position: absolute;\n    height: ","px;\n    width: ","px;\n    border: 5px dashed ",";\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 30px;\n    z-index: 1;\n"])),(function(e){return e.menuCoords.x-37.5}),(function(e){return e.menuCoords.y-37.5}),A,A,(function(e){return e.theme.contextMenu.targetingBox.borderColor}));function P(e){var n=Object(s.useState)({x:0,y:0}),t=Object(j.a)(n,2),c=t[0],r=t[1],a=Object(s.useState)({x:0,y:0}),o=Object(j.a)(a,2),i=o[0],u=o[1],d=Object(s.useState)(!1),l=Object(j.a)(d,2),p=l[0],O=l[1],h=Object(s.useState)(!1),f=Object(j.a)(h,2),g=f[0],v=f[1],w=Object(s.useState)(!1),k=Object(j.a)(w,2),y=k[0],W=k[1],C=Object(s.useState)(!1),I=Object(j.a)(C,2),M=I[0],F=I[1],G=Object(s.useState)(!1),S=Object(j.a)(G,2),z=S[0],R=S[1],Y=Object(s.useState)([]),A=Object(j.a)(Y,2),P=A[0],H=A[1],Q=Object(x.f)(),U=Object(s.useRef)(!0);function X(){return X=Object(B.a)(D.a.mark((function n(){var t,c;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.d)(Object(b.a)($,e.level));case 2:t=n.sent,c=[],t.forEach((function(e){c.push(e.id)})),H(c);case 6:case"end":return n.stop()}}),n)}))),X.apply(this,arguments)}function _(e){var n=e.target.getBoundingClientRect(),t=n.width,c=n.height,a=e.nativeEvent,o=a.offsetX,s=a.offsetY,i=Math.round(o/t*1e3),d=Math.round(s/c*1e3),l={x:e.pageX,y:e.pageY};r({x:i,y:d}),u(l)}function q(e){return K.apply(this,arguments)}function K(){return(K=Object(B.a)(D.a.mark((function e(n){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(n),O(!p);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){if(!U.current){var n=[];for(var t in P)switch(P[t]){case"Odlaw":n.push(g);break;case"Waldo":n.push(y);break;case"Wenda":n.push(M);break;case"Wizard":n.push(z)}return n.includes(!1)?void 0:e.setIsGameOver(!0)}U.current=!1}),[g,y,M,z]),Object(s.useEffect)((function(){v(!1),W(!1),F(!1),R(!1),function(){X.apply(this,arguments)}()}),[Q.location]),Object(m.jsxs)(N,{children:[p?Object(m.jsxs)(J,{menuCoords:i,children:[Object(m.jsx)(L,{onClick:q,menuCoords:i}),Object(m.jsx)(E,{isContextMenuOpen:p,setIsContextMenuOpen:O,img:e.img,level:e.level,characters:P,mouseCoords:c,isOdlawFound:g,setIsOdlawFound:v,isWaldoFound:y,setIsWaldoFound:W,isWendaFound:M,setIsWendaFound:F,isWizardFound:z,setIsWizardFound:R})]}):null,Object(m.jsx)("img",{onClick:q,src:e.img,draggable:"false",alt:"Where's Waldo?"})]})}var H,Q=t.p+"static/media/WaldoFound.80f74ad0.png";function U(e){return Object(m.jsx)(k,{children:Object(m.jsxs)("section",{children:[Object(m.jsxs)("figure",{children:[Object(m.jsx)("img",{src:Q,alt:"You found Waldo!"}),Object(m.jsx)("figcaption",{children:"You found Waldo!"})]}),Object(m.jsx)("button",{onClick:function(){e.setIsGameOver(!1)},children:"Play Again"})]})})}function X(){return Object(m.jsx)("div",{children:"Error 404 - Page Not Found"})}var _=Object(O.b)(H||(H=Object(h.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        background: ",";\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        width: 100%;\n        height: auto;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n    }\n"])),(function(e){return e.theme.body})),q={contextMenu:{selectionMenu:{background:"black",text:"pink",hover:{text:"coral",background:"white"}},targetingBox:{borderColor:"#39ff14"}},body:"#fff"},K=t.p+"static/media/GobblingGluttons.3e56f8b3.jpg",T=t.p+"static/media/SkiResort.e623c363.png";function V(){var e=Object(s.useState)(!1),n=Object(j.a)(e,2),t=n[0],c=n[1];return Object(m.jsx)(p.a,{children:Object(m.jsxs)(O.a,{theme:q,children:[Object(m.jsx)(_,{}),Object(m.jsx)(w,{setIsGameOver:c}),Object(m.jsxs)(x.c,{children:[Object(m.jsx)(x.a,{exact:!0,path:"/",component:G}),Object(m.jsx)(x.a,{exact:!0,path:"/gobbling-gluttons",children:t?Object(m.jsx)(U,{isGameOver:t,setIsGameOver:c}):Object(m.jsx)(P,{isGameOver:t,setIsGameOver:c,img:K,level:"Gobbling Gluttons"})}),Object(m.jsx)(x.a,{exact:!0,path:"/ski-resort",children:t?Object(m.jsx)(U,{isGameOver:t,setIsGameOver:c}):Object(m.jsx)(P,{isGameOver:t,setIsGameOver:c,img:T,level:"Ski Resort"})}),Object(m.jsx)(x.a,{component:X})]})]})})}var Z=Object(l.a)({apiKey:"AIzaSyA-_xHp4FOaCpr4mQkqyLxpg_YW3JhmPfQ",authDomain:"wheres-waldo-78b7d.firebaseapp.com",projectId:"wheres-waldo-78b7d",storageBucket:"wheres-waldo-78b7d.appspot.com",messagingSenderId:"91226203075",appId:"1:91226203075:web:01c1fbfc3ca1bf8df11376"}),$=Object(b.e)(Z);d.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.5f6ff77f.chunk.js.map