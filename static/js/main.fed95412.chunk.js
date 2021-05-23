(this["webpackJsonpreact-tic-tac-toe-2"]=this["webpackJsonpreact-tic-tac-toe-2"]||[]).push([[0],{20:function(n,r,e){"use strict";e.r(r);var t,i,o,c,a,l,s,b,u,d,g,m,j=e(0),f=e.n(j),h=e(9),O=e.n(h),y=e(5),p=e(2),x=e(3),k=Object(x.a)(t||(t=Object(p.a)(["\n  html {\n    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;\n    line-height: 1.5;\n  }\n  body {\n    font-family: inherit;\n    line-height: inherit;\n    margin: 0;\n  }\n"]))),v=e(1),w=x.b.div(i||(i=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin-bottom: 1.25rem;\n"]))),T=x.b.div(o||(o=Object(p.a)(["\n  width: 50%;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  border-width: ",";\n  &.firstPlayer {\n    color: rgb(4, 120, 87);\n    border-style: solid;\n    border-color: rgb(4, 120, 87);\n  }\n  &.secondPlayer {\n    color: rgb(124, 58, 237);\n    border-style: solid;\n    border-color: rgb(124, 58, 237);\n  }\n"])),(function(n){return n.isTurn?"0 0 3px":"0"})),A=function(n){return Object(v.jsxs)(w,{children:[Object(v.jsx)(T,{className:"firstPlayer",isTurn:n.isFirstTurn,children:"O"}),Object(v.jsx)(T,{className:"secondPlayer",isTurn:!n.isFirstTurn,children:"X"})]})},S=x.b.div(c||(c=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.5rem;\n  margin-bottom: 2.5rem;\n"]))),C=x.b.button(a||(a=Object(p.a)(["\n  background-color: rgb(229, 231, 235);\n  border: 0 solid #e5e7eb;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  width: 5rem;\n  transition-property: background-color, border-color, color, fill, stroke,\n    opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: background-color, border-color, color, fill, stroke,\n    opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 0.15s;\n  &:hover {\n    opacity: 0.6;\n    cursor: pointer;\n  }\n  &[disabled] {\n    cursor: not-allowed;\n    color: rgb(255, 255, 255);\n    ",";\n  }\n"])),(function(n){var r=n.marker;return E(r)})),E=function(n){return"O"===n?"\n    background-color: rgb(4, 120, 87);\n    ":"X"===n?"\n    background-color: rgb(124, 58, 237);\n    ":"\n    background-color: rgb(107, 114, 128);\n    "},F=function(n){return Object(v.jsx)(S,{children:n.tableArray.map((function(r,e){return Object(v.jsx)(C,{onClick:function(){return n.onClick(n.tableArray,n.isFirstTurn,e)},disabled:null!==n.tableArray[e]||null!==n.victoryPlayer,marker:n.tableArray[e],children:n.tableArray[e]},e)}))})},P=x.b.div(l||(l=Object(p.a)([""]))),z=x.b.p(s||(s=Object(p.a)(["\n  text-align: center;\n  margin-bottom: 0.75rem;\n"]))),I=x.b.div(b||(b=Object(p.a)(["\n  text-align: center;\n"]))),N=x.b.button(u||(u=Object(p.a)(["\n  color: rgb(255, 255, 255);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 3.5rem;\n  padding-right: 3.5rem;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0.25rem;\n  background-color: rgb(60, 60, 60);\n  cursor: pointer;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 0.15s;\n  border: 0 solid #e5e7eb;\n  &:hover {\n    background-color: rgb(40, 40, 40);\n  }\n"]))),R=function(n){var r;return Object(v.jsxs)(P,{children:[Object(v.jsx)(z,{children:(r=n.victoryPlayer,null===r?"starting...":"draw"===r?"Draw":"".concat(r," is Win"))}),Object(v.jsx)(I,{children:Object(v.jsx)(N,{onClick:n.onClick,children:"RESTART"})})]})},U=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],X=x.b.main(d||(d=Object(p.a)(['\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  &:after {\n    z-index: -1;\n    content: "";\n    display: block;\n    position: absolute;\n    width: 200%;\n    height: 100%;\n    background: linear-gradient(\n      90deg,\n      rgba(4, 120, 87, 0.3) 50%,\n      rgba(124, 58, 237, 0.3) 50%\n    );\n    transition: 0.2s ease-out;\n    top: 0;\n    left: ',";\n  }\n"])),(function(n){return n.isFirstTurn?"0":"-100%"})),B=x.b.div(g||(g=Object(p.a)(["\n  width: 16rem;\n  margin-left: auto;\n  margin-right: auto;\n"]))),J=x.b.h1(m||(m=Object(p.a)(["\n  color: rgb(20, 20, 20);\n  text-align: center;\n  margin-bottom: 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n"]))),M=function(){var n=Object(j.useState)(!0),r=Object(y.a)(n,2),e=r[0],t=r[1],i=Object(j.useState)(new Array(9).fill(null)),o=Object(y.a)(i,2),c=o[0],a=o[1],l=Object(j.useState)(null),s=Object(y.a)(l,2),b=s[0],u=s[1];return Object(j.useEffect)((function(){!function(n,r){if(null===r){var e=!n.some((function(n){return null===n}));null===r&&e&&u("draw")}}(c,b)}),[c,b]),Object(j.useEffect)((function(){!function(n){U.forEach((function(r){var e=[n[r[0]],n[r[1]],n[r[2]]],t=e[0],i=e[1];t===i&&i===e[2]&&null!==t&&u(t)}))}(c)}),[c]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(k,{}),Object(v.jsx)(X,{isFirstTurn:e,children:Object(v.jsxs)(B,{children:[Object(v.jsx)(J,{children:"TIC TAC TOE"}),Object(v.jsx)(A,{isFirstTurn:e}),Object(v.jsx)(F,{victoryPlayer:b,isFirstTurn:e,tableArray:c,onClick:function(n,r,e){!function(n,r,e){var t=n.slice();t[e]=r?"O":"X",a(t)}(n,r,e),t((function(n){return!n}))}}),Object(v.jsx)(R,{victoryPlayer:b,onClick:function(){t(!0),a(new Array(9).fill(null)),u(null)}})]})})]})};O.a.render(Object(v.jsx)(f.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fed95412.chunk.js.map