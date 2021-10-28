(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{66:function(e,n,t){"use strict";t.r(n),t.d(n,"db",(function(){return A}));var a,r,c=t(4),o=t.n(c),s=t(46),i=t.n(s),u=t(47),d=t(24),l=t(11),b=t(29),j=t(12),h=t(21),p=t(23),x=h.c.nav(a||(a=Object(p.a)(["\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px;\n\n    h1 > a {\n        color: black;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    ul {\n        display: flex;\n        flex-direction: rows;\n        gap: 10px;\n        list-style: none;\n    }\n"]))),O=t(6);function f(e){function n(){console.log("Reset Game"),e.setIsGameOver(!1)}return Object(O.jsxs)(x,{children:[Object(O.jsx)("h1",{onClick:n,children:Object(O.jsx)(b.b,{to:"/",children:"Where's Waldo?"})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{onClick:n,children:Object(O.jsx)(b.c,{exact:!0,to:"/gobbling-gluttons",children:"Gobbling Gluttons"})}),Object(O.jsx)("li",{onClick:n,children:Object(O.jsx)(b.c,{exact:!0,to:"/ski-resort",children:"Ski Resort"})})]})]})}var g=h.c.div(r||(r=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    text-align: center;\n"]))),m=t.p+"static/media/Where's Waldo.08992c55.png";function v(){return Object(O.jsxs)(g,{children:[Object(O.jsxs)("figure",{children:[Object(O.jsx)("img",{src:m,alt:"Where's Waldo?"}),Object(O.jsx)("figcaption",{children:"Welcome to Where's Waldo!"})]}),Object(O.jsx)("section",{children:Object(O.jsx)("p",{children:"Choose a game to play!"})})]})}var k,w=t(0),y=t.n(w),W=t(3);function I(e){function n(e){return t.apply(this,arguments)}function t(){return(t=Object(W.a)(y.a.mark((function n(t){var a,r,c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=Object(d.b)(A,e.level,t),n.next=3,Object(d.c)(a);case 3:if(!(r=n.sent).exists()){n.next=9;break}return c=r.data(),n.abrupt("return",c);case 9:console.error("No such document!");case 10:case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function a(e){return r.apply(this,arguments)}function r(){return(r=Object(W.a)(y.a.mark((function t(a){var r,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.target.textContent,e.setIsContextMenuOpen(!e.isContextMenuOpen),t.next=4,n(r);case 4:if(!(c=t.sent)){t.next=24;break}if(!(Math.abs(e.mouseCoords.x-c.x)<10&&Math.abs(e.mouseCoords.y-c.y)<10)){t.next=22;break}console.log("You found ".concat(r,"!")),t.t0=r,t.next="Odlaw"===t.t0?11:"Waldo"===t.t0?13:"Wenda"===t.t0?15:"Wizard"===t.t0?17:19;break;case 11:return e.setIsOdlawFound(!0),t.abrupt("break",19);case 13:return e.setIsWaldoFound(!0),t.abrupt("break",19);case 15:return e.setIsWendaFound(!0),t.abrupt("break",19);case 17:return e.setIsWizardFound(!0),t.abrupt("break",19);case 19:t.next=23;break;case 22:console.log("".concat(r," not found, try again!"));case 23:case 24:case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(n){switch(n){case"Odlaw":return!!e.isOdlawFound;case"Waldo":return!!e.isWaldoFound;case"Wenda":return!!e.isWendaFound;case"Wizard":return!!e.isWizardFound;default:return!1}}return Object(O.jsx)("ul",{children:e.characters.map((function(e){return Object(O.jsx)("li",{onClick:a,children:c(e)?Object(O.jsx)("s",{children:e}):e},e)}))})}var C,F=h.c.section(k||(k=Object(p.a)(["\n    display: flex;\n    user-select: none;\n    width: 100%;\n    height: auto;\n\n    img {\n        --webkit-user-drag: none;\n        object-fit: contain;\n        width: 100%;\n        height: auto;\n    }\n\n    ul {\n        left: ","px;\n        top: ","px;\n        color: ",";\n        display: flex;\n        flex-direction: column;\n        position: absolute;\n        list-style: none;\n        background-color: ",";\n        padding: 3px;\n        border-radius: 7px;\n        gap: 3px;\n    }\n\n    li:hover {\n        color: ",";\n        cursor: pointer;\n        background-color: ",";\n        border-radius: 3px;\n    }\n"])),(function(e){return e.menuCoords.x+1}),(function(e){return e.menuCoords.y}),(function(e){return e.theme.contextMenu.text}),(function(e){return e.theme.contextMenu.background}),(function(e){return e.theme.contextMenu.hover.text}),(function(e){return e.theme.contextMenu.hover.background}));function G(e){var n=Object(c.useState)({x:0,y:0}),t=Object(l.a)(n,2),a=t[0],r=t[1],o=Object(c.useState)({x:0,y:0}),s=Object(l.a)(o,2),i=s[0],u=s[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),p=h[0],x=h[1],f=Object(c.useState)(!1),g=Object(l.a)(f,2),m=g[0],v=g[1],k=Object(c.useState)(!1),w=Object(l.a)(k,2),C=w[0],G=w[1],S=Object(c.useState)(!1),M=Object(l.a)(S,2),z=M[0],E=M[1],R=Object(c.useState)(!1),B=Object(l.a)(R,2),N=B[0],Y=B[1],J=Object(c.useState)([]),P=Object(l.a)(J,2),D=P[0],H=P[1],Q=Object(j.f)();function U(){return U=Object(W.a)(y.a.mark((function n(){var t,a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.d)(Object(d.a)(A,e.level));case 2:t=n.sent,a=[],t.forEach((function(e){a.push(e.id)})),H(a);case 6:case"end":return n.stop()}}),n)}))),U.apply(this,arguments)}function X(e){var n=e.target.getBoundingClientRect(),t=n.width,a=n.height,c=e.nativeEvent,o=c.offsetX,s=c.offsetY,i=Math.round(o/t*1e3),d=Math.round(s/a*1e3),l={x:e.pageX,y:e.pageY},b={x:i,y:d};console.log(b),r(b),u(l)}function _(){return(_=Object(W.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X(n),x(!p);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var n=[];for(var t in D){switch(D[t]){case"Odlaw":n.push(m);break;case"Waldo":n.push(C);break;case"Wenda":n.push(z);break;case"Wizard":n.push(N)}if(n.includes(!1))return;e.setIsGameOver(!0)}}),[m,C,z,N]),Object(c.useEffect)((function(){v(!1),G(!1),E(!1),Y(!1),function(){U.apply(this,arguments)}()}),[Q.location]),Object(O.jsxs)(F,{menuCoords:i,children:[p?Object(O.jsx)(I,{isContextMenuOpen:p,setIsContextMenuOpen:x,img:e.img,level:e.level,characters:D,mouseCoords:a,isOdlawFound:m,setIsOdlawFound:v,isWaldoFound:C,setIsWaldoFound:G,isWendaFound:z,setIsWendaFound:E,isWizardFound:N,setIsWizardFound:Y}):null,Object(O.jsx)("img",{onClick:function(e){return _.apply(this,arguments)},src:e.img,draggable:"false",alt:"Where's Waldo?"})]})}function S(e){return Object(O.jsx)(g,{children:Object(O.jsxs)("section",{children:[Object(O.jsx)("p",{children:"Game over!"}),Object(O.jsx)("button",{onClick:function(){e.setIsGameOver(!1)},children:"Play Again"})]})})}function M(){return Object(O.jsx)("div",{children:"Error 404 - Page Not Found"})}var z=Object(h.b)(C||(C=Object(p.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        background: ",";\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        width: 100%;\n        height: auto;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n    }\n"])),(function(e){return e.theme.body})),E={contextMenu:{background:"black",text:"pink",hover:{text:"coral",background:"white"}},body:"#fff"},R=t.p+"static/media/Where's Waldo Gobbling Gluttons.3e56f8b3.jpg",B=t.p+"static/media/Where's Waldo Ski Resort.e623c363.png";function N(){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),t=n[0],a=n[1];return Object(O.jsx)(b.a,{children:Object(O.jsxs)(h.a,{theme:E,children:[Object(O.jsx)(z,{}),Object(O.jsx)(f,{setIsGameOver:a}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(O.jsx)(j.a,{exact:!0,path:"/gobbling-gluttons",children:t?Object(O.jsx)(S,{isGameOver:t,setIsGameOver:a}):Object(O.jsx)(G,{isGameOver:t,setIsGameOver:a,img:R,level:"Gobbling Gluttons"})}),Object(O.jsx)(j.a,{exact:!0,path:"/ski-resort",children:t?Object(O.jsx)(S,{isGameOver:t,setIsGameOver:a}):Object(O.jsx)(G,{isGameOver:t,setIsGameOver:a,img:B,level:"Ski Resort"})}),Object(O.jsx)(j.a,{component:M})]})]})})}var Y=Object(u.a)({apiKey:"AIzaSyA-_xHp4FOaCpr4mQkqyLxpg_YW3JhmPfQ",authDomain:"wheres-waldo-78b7d.firebaseapp.com",projectId:"wheres-waldo-78b7d",storageBucket:"wheres-waldo-78b7d.appspot.com",messagingSenderId:"91226203075",appId:"1:91226203075:web:01c1fbfc3ca1bf8df11376"}),A=Object(d.e)(Y);i.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.589c92b5.chunk.js.map