(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{21:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),u=t(15),o=t.n(u),a=(t(21),t(6)),i=t(3),s=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,u=e.newNumber,o=e.handleNumberChange;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:t,onChange:r})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:u,onChange:o})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.newFilter,t=e.setFilter;return Object(c.jsxs)("div",{children:["filter names with: ",Object(c.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.name,t=e.number,r=e.id,u=e.removePerson;return Object(c.jsxs)("div",{children:[n," ",t,Object(c.jsx)("button",{onClick:function(){return u(r)},children:"delete"})]})},j=function(e){var n=e.personsToShow,t=e.removePerson;return Object(c.jsx)("div",{children:Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsx)(l,{id:e.id,name:e.name,number:e.number,removePerson:t},e.id)}))})})},b=t(4),f=t.n(b),h="/api/persons",m=function(){return f.a.get(h).then((function(e){return e.data}))},O=function(e){return f.a.post(h,e).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},x=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},p=(t(39),function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],o=Object(r.useState)(""),l=Object(i.a)(o,2),b=l[0],f=l[1],h=Object(r.useState)(""),p=Object(i.a)(h,2),g=p[0],w=p[1],C=Object(r.useState)(""),N=Object(i.a)(C,2),S=N[0],P=N[1],F=Object(r.useState)(null),y=Object(i.a)(F,2),T=y[0],k=y[1],L=Object(r.useState)(null),A=Object(i.a)(L,2),I=A[0],B=A[1];Object(r.useEffect)((function(){m().then((function(e){u(e)}))}),[]);var D=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})),E=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"success",children:n})},J=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(E,{message:T}),Object(c.jsx)(J,{message:I}),Object(c.jsx)(d,{newFilter:S,setFilter:function(e){P(e.target.value)}}),Object(c.jsx)("h2",{children:"Add new person"}),Object(c.jsx)(s,{addPerson:function(e){e.preventDefault();var n={name:b,number:g};if(t.some((function(e){return e.name===b}))){var c=t.find((function(e){return e.name===b})),r=Object(a.a)(Object(a.a)({},c),{},{number:g});window.confirm("".concat(b," is already added to the phonebook. Replace old number with the new one?"))&&x(c.id,r).then((function(){u(t.map((function(e){return e.id!==c.id?e:r})))})).catch((function(e){B("Information of ".concat(b," has already been removed from the server")),setTimeout((function(){B(null)}),5e3)}))}else O(n).then((function(e){u(t.concat(e))})),k("Added ".concat(b)),setTimeout((function(){k(null)}),5e3);f(""),w("")},newName:b,handleNameChange:function(e){f(e.target.value)},newNumber:g,handleNumberChange:function(e){w(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(j,{personsToShow:D,removePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name,"?"))&&v(e).then((function(){u(t.filter((function(n){return n.id!==e})))}))}})]})}),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,u=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),u(e),o(e)}))};o.a.render(Object(c.jsx)(p,{}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.36c7bf9c.chunk.js.map