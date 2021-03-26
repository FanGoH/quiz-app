(this["webpackJsonpvideogame-trivia"]=this["webpackJsonpvideogame-trivia"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),r=n.n(s),i=(n(15),n(6)),l=n.n(i),o=n(9),u=n(2),j=(n(17),n(7)),b=n(0),d=function(e){var t=e.loading;return Object(b.jsx)(b.Fragment,{children:t&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"spinner-border text-info",role:"status",children:Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})},h=function(e){var t=e.dataArray,n=e.selectHandler,c=e.selectedID;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Select a category"}),Object(b.jsx)("div",{className:"my-3",children:Object(b.jsxs)("select",{value:c,onChange:n,className:"form-select","aria-label":"Default select example",children:[Object(b.jsx)("option",{value:"0",children:"All mixed up!"},"0"),t.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]})},O=function(e){var t=e.onStart,n=Object(j.useFetch)("https://opentdb.com/api_category.php"),a=n.data,s=n.errors,r=n.loading,i=Object(c.useState)("10"),l=Object(u.a)(i,2),o=l[0],O=l[1],m=Object(c.useState)("0"),p=Object(u.a)(m,2),x=p[0],f=p[1],v=Object(c.useState)(""),g=Object(u.a)(v,2),y=g[0],N=g[1],S=Object(c.useState)(""),k=Object(u.a)(S,2),w=k[0],C=k[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{loading:r}),!r&&!s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Choose number of questions"}),Object(b.jsx)("div",{className:"input-group my-3",children:Object(b.jsx)("input",{type:"number",className:"form-control",value:o,onChange:function(e){return O(e.target.value)},"aria-label":"noquestions","aria-describedby":"basic-addon1"})}),Object(b.jsx)("h4",{children:"Select a Difficulty"}),Object(b.jsx)("div",{className:"my-3",children:Object(b.jsxs)("select",{value:y,onChange:function(e){return N(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(b.jsx)("option",{value:"",children:"Anything goes!"},"0"),Object(b.jsx)("option",{value:"easy",children:"Easy"},"1"),Object(b.jsx)("option",{value:"medium",children:"Medium"},"2"),Object(b.jsx)("option",{value:"hard",children:"Hard"},"3")]})}),Object(b.jsx)("h4",{children:"Select a Question Format"}),Object(b.jsx)("div",{className:"my-3",children:Object(b.jsxs)("select",{value:w,onChange:function(e){return C(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(b.jsx)("option",{value:"",children:"Any!"},"0"),Object(b.jsx)("option",{value:"boolean",children:"True/False"},"1"),Object(b.jsx)("option",{value:"multiple",children:"Multiple Options"},"2")]})}),Object(b.jsx)(h,{dataArray:a.trivia_categories,selectHandler:function(e){f(e.target.value)},selectedID:x}),Object(b.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){return t({category:x,difficulty:y,noQuestions:o,questionFormat:w})},children:"Start Playing!"})]})]})},m=n(10),p=function(e){var t=e.question,n=e.pointHandler,s=Object(c.useState)(),r=Object(u.a)(s,2),i=r[0],l=r[1],o=Object(c.useState)(!1),j=Object(u.a)(o,2),d=j[0],h=j[1],O=Object(c.useState)([]),p=Object(u.a)(O,2),x=p[0],f=p[1];Object(c.useEffect)((function(){h(!1),l(void 0),f(function(e){for(var t,n=[];0!==e.length;)n.push(e.splice((t=e.length,Math.floor(Math.random()*t)%t),1)[0]);return n}([t.correct_answer].concat(Object(m.a)(t.incorrect_answers))))}),[t]);var v=function(e,n){var c=t.correct_answer===e;return!d||!c&&i!==n?"btn-outline-dark":c?"btn-success":"btn-danger"};return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"mb-3",dangerouslySetInnerHTML:{__html:t.question}}),x.map((function(e,t){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("input",{type:"checkbox",className:"btn-check",name:"questionAnswer",id:"option".concat(t),autoComplete:"off",value:t,checked:i===t,readOnly:!0}),Object(b.jsx)("label",{className:"btn ".concat(v(e,t)),htmlFor:"questionAnswer",dangerouslySetInnerHTML:{__html:e},onClick:function(){return l(t)}})]},e)})),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{className:"btn btn-primary mb-3",onClick:function(){x[i]===t.correct_answer?n((function(e){return e+1})):n((function(e){return e-1})),h(!0)},disabled:isNaN(i)||d,children:"Check Answer"})]})},x=function(e){var t=e.questions,n=Object(c.useState)(0),a=Object(u.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),o=l[0],j=l[1],d=Object(c.useState)(0),h=Object(u.a)(d,2),O=h[0],m=h[1];return o?Object(b.jsxs)("div",{className:"alert-success p-5",children:[Object(b.jsxs)("h1",{children:["Results: You got ",s,"/",t.length," points!"]}),Object(b.jsx)("a",{href:"/",className:"btn btn-success",children:"Play Again!"})]}):Object(b.jsxs)("div",{className:"bg-white text-dark py-3",children:[Object(b.jsxs)("div",{className:"mb-3",style:{width:"50%",transform:"translateX(50%)",display:"flex",justifyContent:"space-between"},children:[Object(b.jsxs)("span",{children:["Question No: ",O+1,"/",t.length]}),Object(b.jsxs)("span",{children:["Points: ",s]})]}),Object(b.jsx)(p,{question:t[O],pointHandler:r}),O!==t.length-1?Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){m((function(e){return e+1}))},children:"Next Question (Skip)"}):Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return j(!0)},children:"Display results"})]})};var f=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(u.a)(s,2),i=r[0],j=r[1],d=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,c,s,r,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.noQuestions,c=t.category,s=t.difficulty,r=t.questionFormat,e.next=3,fetch("https://opentdb.com/api.php?amount=".concat(n,"&category=").concat(c,"&difficulty=").concat(s,"&type=").concat(r));case 3:return i=e.sent,e.next=6,i.json();case 6:o=e.sent,a(o.results),j(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Welcome to the Trivia!"}),i?Object(b.jsx)(x,{questions:n}):Object(b.jsx)(O,{onStart:d})]})})})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f064d81f.chunk.js.map