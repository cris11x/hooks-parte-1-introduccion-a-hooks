(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{28:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(15),s=c.n(a),r=c(17),i=c(7),j=c(2),b=c(1),o=function(){return Object(b.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(b.jsx)(i.b,{to:"/",className:"navbar-brand",children:"useContext"}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)(i.c,{exact:!0,activeClassName:"active",className:"nav-link active","aria-current":"page",to:"./",children:"Home"}),Object(b.jsx)(i.c,{exact:!0,activeClassName:"active",className:"nav-link active","aria-current":"page",to:"./about",children:"About"}),Object(b.jsx)(i.c,{exact:!0,activeClassName:"active",className:"nav-link active","aria-current":"page",to:"./login",children:"Login"})]})})]})},l=Object(n.createContext)(null),x=function(){var e=Object(n.useContext)(l),t=e.user,c=e.setUser;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"AboutScreen"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("pre",{children:[JSON.stringify(t,null,3),";"]}),Object(b.jsx)("button",{className:"btn btn-warning",onClick:function(){c({})},children:"Logout"})]})},u=function(){var e=Object(n.useContext)(l).user;return console.log(e),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"HomeScreen"}),Object(b.jsx)("hr",{}),Object(b.jsx)("pre",{children:JSON.stringify(e,null,3)})]})},d=function(){var e=Object(n.useContext)(l).setUser;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"LoginScreen"}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return e({id:1115076545,name:"Martin Santos"})},children:"Login"})]})},O=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(o,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:"/",component:u}),Object(b.jsx)(j.b,{exact:!0,path:"/about",component:x}),Object(b.jsx)(j.b,{exact:!0,path:"/login",component:d}),Object(b.jsx)(j.a,{to:"/"})]})})]})})},h=function(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(b.jsx)(l.Provider,{value:{user:c,setUser:a},children:Object(b.jsx)(O,{})})};s.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.fe4acec5.chunk.js.map