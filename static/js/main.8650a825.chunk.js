(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),s=n(3),a=n(2),o=n(8),u=n(12),i="LOAD_USER",l="SELECT_USER",d="LOAD_TODOS",j="DELETE_TODO",b="LOAD_ERROR",O=function(e){return{type:i,user:e}},p=function(e){return{type:l,userId:e}},f=function(e){return{type:d,todos:e}},h=function(e){return{type:b,message:e}},x=function(e){return e.user},m=function(e){return e.userId},_=function(e){return e.todos},v=function(e){return e.errorLoading},y={user:null,userId:0,todos:[],errorLoading:""},C=Object(o.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(a.a)(Object(a.a)({},e),{},{todos:t.todos});case i:return Object(a.a)(Object(a.a)({},e),{},{user:t.user});case l:return Object(a.a)(Object(a.a)({},e),{},{userId:t.userId});case j:return Object(a.a)(Object(a.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});case b:return Object(a.a)(Object(a.a)({},e),{},{errorLoading:t.message});default:return e}}),Object(u.composeWithDevTools)()),L=C,N=n(5),T=n(4),k=n.n(T),g=n(0),w="https://mate.academy/students-api",E=function(){var e=Object(N.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(N.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=(n(21),n(1)),U=function(){var e=Object(s.c)(x),t=Object(s.b)(),n=Object(s.c)(m),c=Object(s.c)(v);Object(g.useEffect)((function(){function e(){return(e=Object(N.a)(k.a.mark((function e(){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(n);case 3:c=e.sent,t(O(c)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(h("Can not load user"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var r=Object(g.useCallback)((function(e){t(p(e))}),[]);return Object(I.jsx)(I.Fragment,{children:e?Object(I.jsxs)("div",{className:"CurrentUser",children:[Object(I.jsx)("h2",{className:"CurrentUser__title",children:Object(I.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(I.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:e.name}),Object(I.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(I.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(I.jsx)("button",{type:"button",className:"CurrentUser__button",onClick:function(){return r(0)},children:"Clear"})]}):Object(I.jsx)("p",{children:c})})},D=n(10),S=(n(23),function(){var e=Object(g.useState)(""),t=Object(D.a)(e,2),n=t[0],c=t[1],r=Object(g.useState)(""),a=Object(D.a)(r,2),o=a[0],u=a[1],i=Object(s.c)(_),l=Object(s.b)(),d=function(){switch(o){case"Active":return i.filter((function(e){return!e.completed}));case"Completed":return i.filter((function(e){return e.completed}));default:return i}}().filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})),b=Object(g.useCallback)((function(e){l(function(e){return{type:j,id:e}}(e))}),[]),O=Object(g.useCallback)((function(e){l(p(e))}),[]);return Object(I.jsxs)("div",{className:"TodoList",children:[Object(I.jsx)("h1",{children:"Redux list of todos"}),Object(I.jsx)("label",{children:Object(I.jsx)("input",{className:"TodoList__select",type:"text",value:n,"data-cy":"filterByTitle",onChange:function(e){c(e.target.value)}})}),Object(I.jsxs)("select",{className:"TodoList__select",value:o,onChange:function(e){u(e.target.value)},children:[Object(I.jsx)("option",{value:"All",children:"All"}),Object(I.jsx)("option",{value:"Active",children:"Active"}),Object(I.jsx)("option",{value:"Completed",children:"Completed"})]}),Object(I.jsx)("div",{className:"TodoList__list-container",children:Object(I.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:d.map((function(e){return Object(I.jsxs)("li",{className:"\n                    TodoList__item\n                    ".concat(e.completed?"TodoList__item--checked":"TodoList__item--unchecked"),children:[Object(I.jsxs)("label",{className:"TodoList__input",children:[Object(I.jsx)("input",{type:"checkbox",readOnly:!0}),Object(I.jsx)("p",{children:e.title})]}),e.userId&&Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{type:"button","data-cy":"userButton",className:"TodoList__user-button button\n                       ".concat(e.completed&&"TodoList__user-button--selected","\n                        "),onClick:function(){return O(e.userId)},children:"User ".concat(e.userId)}),Object(I.jsx)("button",{type:"button",onClick:function(){return b(e.id)},className:"TodoList__deleteButton button",children:"DELETE"})]})]},e.id)}))})})]})}),R=(n(24),n(25),function(){var e=Object(s.c)(m),t=Object(s.b)(),n=Object(g.useCallback)(Object(N.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:n=e.sent,t(f(n));case 4:case"end":return e.stop()}}),e)}))),[]);return Object(g.useEffect)((function(){n()}),[]),Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)("div",{className:"App__sidebar",children:Object(I.jsx)(S,{})}),Object(I.jsx)("div",{className:"App__content",children:Object(I.jsx)("div",{className:"App__content-container",children:e?Object(I.jsx)(U,{}):"No user selected"})})]})})}),B=function(){return Object(I.jsx)(s.a,{store:L,children:Object(I.jsx)(R,{})})};r.a.render(Object(I.jsx)(B,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8650a825.chunk.js.map