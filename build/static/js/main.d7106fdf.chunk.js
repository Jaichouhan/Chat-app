(this["webpackJsonpreact-messenger"]=this["webpackJsonpreact-messenger"]||[]).push([[0],{60:function(e,t,a){},61:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a.n(c),s=a(37),r=a.n(s),i=(a(60),a(61),a(24)),l=a(16),j=a(0),o=a.n(j),d=a(1),u=a(12),b=a(49),O=a(28),m=a(11),h=a(20),x=Object(b.a)({apiKey:"AIzaSyC4Bd_CXupIyNKZ9TR-arMSUnwOKrXixv8",authDomain:"vender-chat-plugin.firebaseapp.com",databaseURL:"https://vender-chat-plugin-default-rtdb.firebaseio.com",projectId:"vender-chat-plugin",storageBucket:"vender-chat-plugin.appspot.com",messagingSenderId:"748089670667",appId:"1:748089670667:web:d62cfd307513065db99b0e",measurementId:"G-FJ3DNEN5JY"}),p=Object(O.b)(x),f=Object(m.f)(x),v=Object(h.c)(x),g=a.p+"static/media/image1.f02b66c0.jpg",N=a(30),w=a.n(N),S=a(4),y=function(e){var t=e.user1,a=e.user,n=e.selectUser,s=e.chat,r=null===a||void 0===a?void 0:a.uid,i=Object(c.useState)(""),l=Object(u.a)(i,2),j=l[0],o=l[1];return Object(c.useEffect)((function(){var e="".concat(t>r?t+r:r+t),a=Object(m.g)(Object(m.d)(f,"lastMsg",e),(function(e){o(e.data())}));return function(){return a()}}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"user_wrapper ".concat(s.name===a.name&&"selected_user"),onClick:function(){return n(a)},children:Object(S.jsx)("div",{className:"user_info",children:Object(S.jsxs)("div",{className:"chat-page-user-info",children:[Object(S.jsx)("img",{src:a.avatar||g,alt:"avatar"}),Object(S.jsxs)("div",{className:"chat-page-user-name",children:[Object(S.jsxs)("p",{children:[a.name,(null===j||void 0===j?void 0:j.from)!==t&&(null===j||void 0===j?void 0:j.unread)&&Object(S.jsx)("small",{className:"unread",children:"New"})]}),j&&Object(S.jsx)("p",{className:"truncate",children:j.text})]}),Object(S.jsxs)("p",{className:"chat-page-user-info-p",children:[Object(S.jsx)(w.a,{fromNow:!0,children:(a.isOnline,a.createdAt.toDate())}),Object(S.jsx)("div",{className:"user_status ".concat(a.isOnline?"online":"offline")})]})]})})}),Object(S.jsx)("div",{onClick:function(){return n(a)},className:"sm_container ".concat(s.name===a.name&&"selected_user"),children:Object(S.jsx)("img",{src:a.avatar||g,alt:"avatar",className:"avatar sm_screen"})})]})},k=function(e){var t=e.handleSubmit,a=e.text,c=e.setText,n=e.setImg;return Object(S.jsx)("form",{className:"",onSubmit:t,children:Object(S.jsxs)("div",{className:"chat-model-size-input-i",children:[Object(S.jsx)("input",{type:"text",placeholder:"Enter message",value:a,onChange:function(e){return c(e.target.value)}}),Object(S.jsx)("label",{htmlFor:"img",children:Object(S.jsx)("i",{className:"fa fa-paperclip",id:"featured","aria-hidden":"true"})}),Object(S.jsx)("input",{onChange:function(e){return n(e.target.files[0])},type:"file",id:"img",accept:"image/*",style:{display:"none"}})]})})},C=function(e){var t=e.msg,a=e.user1,n=(e.text,Object(c.useRef)());return Object(c.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[t]),Object(S.jsx)("div",{className:"message_wrapper ".concat(t.from===a?"own":""),children:Object(S.jsxs)("div",{className:t.from===a?"chat-model-size-client":"chat-model-size-help",ref:n,children:[t.media?Object(S.jsx)("img",{src:t.media,alt:t.text}):null,Object(S.jsxs)("p",{children:[" ",t.text]}),Object(S.jsxs)("span",{children:[Object(S.jsx)(w.a,{fromNow:!0,children:t.createdAt.toDate()}),console.log(t)]})]})})},D=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),i=r[0],l=r[1],j=Object(c.useState)(""),b=Object(u.a)(j,2),O=b[0],x=b[1],g=Object(c.useState)(""),N=Object(u.a)(g,2),w=N[0],D=N[1],A=Object(c.useState)([]),_=Object(u.a)(A,2),I=_[0],z=_[1],E=p.currentUser.uid,J=JSON.parse(localStorage.getItem("id")),P=J.id,F="".concat(E>P?E+P:P+E),U=Object(m.c)(f,"messages",F,"chat");Object(m.i)(U,Object(m.h)("createdAt","asc"));Object(c.useEffect)((function(){var e=Object(m.c)(f,"users"),t=Object(m.i)(e,Object(m.l)("uid","not-in",[E])),a=Object(m.g)(t,(function(e){var t=[];e.forEach((function(e){t.push(e.data())})),n(t)}));return function(){return a()}}),[]);var M=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(t),a=Object(m.c)(f,"messages",F,"chat"),c=Object(m.i)(a,Object(m.h)("createdAt","asc")),Object(m.g)(c,(function(e){var t=[];e.forEach((function(e){t.push(e.data())})),z(t)})),e.next=6,Object(m.e)(Object(m.d)(f,"lastMsg",F));case 6:if(!(n=e.sent).data()||n.data().from===E){e.next=10;break}return e.next=10,Object(m.k)(Object(m.d)(f,"lastMsg",F),{unread:!1});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,c,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),O){e.next=3;break}return e.abrupt("return",!1);case 3:if(!w){e.next=12;break}return c=Object(h.d)(v,"images/".concat((new Date).getTime()," - ").concat(w.name)),e.next=7,Object(h.e)(c,w);case 7:return n=e.sent,e.next=10,Object(h.b)(Object(h.d)(v,n.ref.fullPath));case 10:s=e.sent,a=s;case 12:Object(m.b)(Object(m.c)(f,"messages",F,"chat"),{text:O,from:E,to:P,createdAt:m.a.fromDate(new Date),media:a||"",senderName:J.name,senderGmail:J.email}),Object(m.j)(Object(m.d)(f,"lastMsg",F),{text:O,from:E,to:P,createdAt:m.a.fromDate(new Date),media:a||"",unread:!0,senderName:J.name,senderGmail:J.email}),x(""),D("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"home_container",children:[Object(S.jsxs)("div",{className:"users_container",children:[Object(S.jsxs)("div",{className:"chat-page-border",children:[Object(S.jsxs)("label",{className:"switch",children:[Object(S.jsx)("input",{type:"checkbox",className:"switch-input"}),Object(S.jsx)("span",{className:"switch-label"}),Object(S.jsx)("span",{className:"switch-handle"})]}),Object(S.jsx)("p",{children:"Desktop Notification"})]}),a.map((function(e){return Object(S.jsx)(y,{user:e,selectUser:M,user1:E,chat:i},e.uid)}))]}),Object(S.jsx)("div",{className:"messages_container",children:i?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"chat-model-size-img",children:[Object(S.jsx)("img",{src:"/static/media/image1.f02b66c0.jpg",alt:"img"}),Object(S.jsxs)("div",{className:"chat-model-size-status",children:[Object(S.jsx)("p",{children:i.name}),Object(S.jsx)("span",{children:"1 min"})]})]}),Object(S.jsx)("div",{className:"messages",children:I.length?I.map((function(e,t){return Object(S.jsx)(C,{msg:e,user1:E,text:O},t)})):null}),Object(S.jsx)(k,{handleSubmit:R,text:O,setText:x,setImg:D})]}):Object(S.jsx)("h3",{className:"no_conv",children:"Select a user to start conversation"})})]})},A=function(){return Object(S.jsx)("div",{style:{position:"relative"},children:Object(S.jsx)("h2",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:"Loading..."})})},_=Object(c.createContext)(),I=function(e){var t=e.children,a=Object(c.useState)(null),n=Object(u.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(!0),l=Object(u.a)(i,2),j=l[0],o=l[1];return Object(c.useEffect)((function(){Object(O.c)(p,(function(e){r(e),o(!1)}))}),[]),j?Object(S.jsx)(A,{}):Object(S.jsx)(_.Provider,{value:{user:s},children:t})},z=function(){var e=Object(l.g)(),t=Object(c.useContext)(_).user,a=function(){var t=Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.k)(Object(m.d)(f,"users",p.currentUser.uid),{isOnline:!1});case 2:return t.next=4,Object(O.e)(p);case 4:e.replace("/login"),window.localStorage.clear(),window.location.reload();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(S.jsxs)("nav",{children:[Object(S.jsx)("h3",{children:Object(S.jsx)(i.b,{to:"/",children:"Messenger"})}),Object(S.jsx)("div",{children:t?Object(S.jsxs)("div",{children:[Object(S.jsx)(i.b,{to:"/dashboard",children:"Dashboard"}),Object(S.jsx)(i.b,{to:"/profile",children:"Profile"}),Object(S.jsx)("button",{className:"btn",onClick:a,children:"Logout"})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(i.b,{to:"/register",children:"Register"}),Object(S.jsx)(i.b,{to:"/login",children:"Login"})]})})]})},E=a(5),J=a(15),P=function(){var e=Object(c.useState)({name:"",email:"",password:"",error:null,loading:!1}),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(l.g)(),r=a.name,i=a.email,j=a.password,b=a.error,h=a.loading,x=function(e){n(Object(J.a)(Object(J.a)({},a),{},Object(E.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(d.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n(Object(J.a)(Object(J.a)({},a),{},{error:null,loading:!0})),r&&i&&j||n(Object(J.a)(Object(J.a)({},a),{},{error:"All fields are required"})),e.prev=3,e.next=6,Object(O.a)(p,i,j);case 6:return c=e.sent,e.next=9,Object(m.j)(Object(m.d)(f,"users",c.user.uid),{uid:c.user.uid,name:r,email:i,createdAt:m.a.fromDate(new Date),isOnline:!0});case 9:n({name:"",email:"",password:"",error:null,loading:!1,createdAt:m.a.fromDate(new Date)}),s.replace("/"),localStorage.setItem("os-user",JSON.stringify(a)),localStorage.setItem("id",JSON.stringify({id:305,name:"jai Chouhan",email:"jaichouhan@gmail.com"})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),n(Object(J.a)(Object(J.a)({},a),{},{error:e.t0.message,loading:!1}));case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("section",{children:[Object(S.jsx)("h3",{children:"Create An Account"}),Object(S.jsxs)("form",{className:"form",onSubmit:v,children:[Object(S.jsxs)("div",{className:"input_container",children:[Object(S.jsx)("label",{htmlFor:"name",children:"Name"}),Object(S.jsx)("input",{type:"text",name:"name",value:r,onChange:x})]}),Object(S.jsxs)("div",{className:"input_container",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email"}),Object(S.jsx)("input",{type:"text",name:"email",value:i,onChange:x})]}),Object(S.jsxs)("div",{className:"input_container",children:[Object(S.jsx)("label",{htmlFor:"password",children:"Password"}),Object(S.jsx)("input",{type:"password",name:"password",value:j,onChange:x})]}),b?Object(S.jsx)("p",{className:"error",children:b}):null,Object(S.jsx)("div",{className:"btn_container",children:Object(S.jsx)("button",{className:"btn",disabled:h,children:h?"Creating ...":"Register"})})]})]})},F=function(){var e=Object(c.useState)({email:"",password:"",error:null,loading:!1}),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(l.g)(),r=a.email,i=a.password,j=a.error,b=a.loading,h=function(e){n(Object(J.a)(Object(J.a)({},a),{},Object(E.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(d.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n(Object(J.a)(Object(J.a)({},a),{},{error:null,loading:!0})),r&&i||n(Object(J.a)(Object(J.a)({},a),{},{error:"All fields are required"})),e.prev=3,e.next=6,Object(O.d)(p,r,i);case 6:return c=e.sent,e.next=9,Object(m.k)(Object(m.d)(f,"users",c.user.uid),{isOnline:!0});case 9:n({email:"",password:"",error:null,loading:!1}),s.replace("/"),localStorage.setItem("os-user",JSON.stringify(a)),localStorage.setItem("id",JSON.stringify({id:305,name:"jai Chouhan",email:"jaichouhan@gmail.com"})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),n(Object(J.a)(Object(J.a)({},a),{},{error:e.t0.message,loading:!1}));case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("section",{children:[Object(S.jsx)("h3",{children:"Log into your Account"}),Object(S.jsxs)("form",{className:"form",onSubmit:x,children:[Object(S.jsxs)("div",{className:"input_container",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email"}),Object(S.jsx)("input",{type:"text",name:"email",value:r,onChange:h})]}),Object(S.jsxs)("div",{className:"input_container",children:[Object(S.jsx)("label",{htmlFor:"password",children:"Password"}),Object(S.jsx)("input",{type:"password",name:"password",value:i,onChange:h})]}),j?Object(S.jsx)("p",{className:"error",children:j}):null,Object(S.jsx)("div",{className:"btn_container",children:Object(S.jsx)("button",{className:"btn",disabled:b,children:b?"Logging in ...":"Login"})})]})]})},U=function(){return Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"25px",height:"25px",cursor:"pointer"},viewBox:"0 0 20 20",fill:"currentColor",children:Object(S.jsx)("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})},M=function(e){var t=e.deleteImage;return Object(S.jsx)("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",style:{width:"25px",height:"25px",cursor:"pointer",color:"#f24957"},viewBox:"0 0 20 20",fill:"currentColor",children:Object(S.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})},R=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(u.a)(s,2),i=r[0],j=r[1],b=Object(l.g)("");Object(c.useEffect)((function(){if(Object(m.e)(Object(m.d)(f,"users",p.currentUser.uid)).then((function(e){e.exists&&(console.log(e.data()),j(e.data()))})),a){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(h.d)(v,"avatar/".concat((new Date).getTime()," - ").concat(a.name)),e.prev=1,!i.avatarPath){e.next=5;break}return e.next=5,Object(h.a)(Object(h.d)(v,i.avatarPath));case 5:return e.next=7,Object(h.e)(t,a);case 7:return c=e.sent,e.next=10,Object(h.b)(Object(h.d)(v,c.ref.fullPath));case 10:return s=e.sent,e.next=13,Object(m.k)(Object(m.d)(f,"users",p.currentUser.uid),{avatar:s,avatarPath:c.ref.fullPath});case 13:n(""),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[a]);var O=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Delete avatar?")){e.next=8;break}return e.next=5,Object(h.a)(Object(h.d)(v,i.avatarPath));case 5:return e.next=7,Object(m.k)(Object(m.d)(f,"users",p.currentUser.uid),{avatar:"",avatarPath:""});case 7:b.replace("/");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return i?Object(S.jsx)("section",{children:Object(S.jsxs)("div",{className:"profile_container",children:[Object(S.jsxs)("div",{className:"img_container",children:[Object(S.jsx)("img",{src:i.avatar||g,alt:"avatar"}),Object(S.jsx)("div",{className:"overlay",children:Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{htmlFor:"photo",children:Object(S.jsx)(U,{})}),i.avatar?Object(S.jsx)(M,{deleteImage:O}):null,Object(S.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},id:"photo",onChange:function(e){return n(e.target.files[0])}})]})})]}),Object(S.jsxs)("div",{className:"text_container",children:[Object(S.jsx)("h3",{children:i.name}),Object(S.jsx)("p",{children:i.email}),Object(S.jsx)("hr",{}),Object(S.jsxs)("small",{children:["Joined on: ",i.createdAt.toDate().toDateString()]})]})]})}):null},L=a(53),T=["component"],V=function(e){var t=e.component,a=Object(L.a)(e,T),n=Object(c.useContext)(_).user;return Object(S.jsx)(l.b,Object(J.a)(Object(J.a)({},a),{},{exact:!0,render:function(e){return null===n?Object(S.jsx)(l.a,{to:"/login"}):Object(S.jsx)(t,Object(J.a)({},e))}}))},B=(a(70),a(52)),G=function(){var e=Object(c.useRef)(),t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),l=i[0],j=i[1],o=Object(c.useState)([]),d=Object(u.a)(o,2),b=d[0],O=d[1],h=Object(c.useState)(),x=Object(u.a)(h,2),v=x[0],N=x[1],y=function(){return s(!1)},k=JSON.parse(localStorage.getItem("os-user")),C=p.currentUser.uid,D=JSON.parse(localStorage.getItem("id"));Object(c.useEffect)((function(){Object(m.e)(Object(m.d)(f,"users",p.currentUser.uid)).then((function(e){e.exists&&N(e.data())}))}),[]),Object(c.useEffect)((function(){var t;null===(t=e.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}),[l]),Object(c.useEffect)((function(){var e=D&&D.id,t="".concat(C>e?C+e:e+C),a=Object(m.c)(f,"messages",t,"chat"),c=Object(m.i)(a,Object(m.h)("createdAt","asc"));Object(m.g)(c,(function(e){var t=[];e.forEach((function(e){t.push(e.data())})),O(t)}))}),[]);return Object(S.jsxs)("div",{children:[!0===n?Object(S.jsx)(B.a,{open:n,onClose:y,classNames:{modal:"message-pop-model"},center:!0,children:Object(S.jsxs)("div",{className:"chat-model-size",children:[Object(S.jsxs)("div",{className:"chat-model-size-img",children:[Object(S.jsx)("img",{src:g,alt:"img"}),Object(S.jsxs)("div",{className:"chat-model-size-status",children:[Object(S.jsx)("p",{children:v&&v.name}),Object(S.jsx)("span",{children:Object(S.jsx)(w.a,{fromNow:!0,children:v&&v.createdAt.toDate()})})]})]}),Object(S.jsx)("div",{className:"chat-model-size-height",children:b&&b.map((function(t,a){return Object(S.jsxs)("div",{className:C?"chat-model-size-client-model":"chat-model-size-help-model",style:{position:"relative"},ref:e,children:[t.media?Object(S.jsx)("img",{src:t.media,alt:t.text}):null,Object(S.jsx)("p",{children:t.text}),Object(S.jsx)("span",{children:Object(S.jsx)(w.a,{fromNow:!0,children:t.createdAt.toDate()})})]},a)}))}),Object(S.jsx)("div",{className:"chat-model-size-position",children:Object(S.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=D.id,a="".concat(C>t?C+t:t+C);Object(m.b)(Object(m.c)(f,"messages",a,"chat"),{text:l,from:C,to:t,createdAt:m.a.fromDate(new Date),senderGmail:k.email,recevierName:D.name,recevierGmail:D.email}),j("")},children:Object(S.jsxs)("div",{className:"chat-model-size-input d-flex",children:[Object(S.jsx)("div",{className:"chat-model-size-input-i",children:Object(S.jsx)("input",{type:"text",placeholder:"Say something",value:l,onInput:function(e){return j(e.target.value)}})}),Object(S.jsx)("div",{className:"",children:Object(S.jsx)("button",{type:"submit",disabled:!l,children:"Send"})})]})})})]})}):Object(S.jsxs)("div",{className:"app",children:[Object(S.jsx)("div",{className:"open-btn-dot"}),Object(S.jsx)("button",{type:"button",className:"open-btn",onClick:function(){return s(!0)},children:"CHAT NOW"})]}),n?Object(S.jsx)("div",{className:"close-model",onClick:y,children:Object(S.jsx)("i",{className:"fa fa-close"})}):""]})};var H=function(){return Object(S.jsx)(I,{children:Object(S.jsxs)(i.a,{children:[Object(S.jsx)(z,{}),Object(S.jsxs)(l.d,{children:[Object(S.jsx)(l.b,{exact:!0,path:"/register",component:P}),Object(S.jsx)(l.b,{exact:!0,path:"/login",component:F}),Object(S.jsx)(V,{exact:!0,path:"/profile",component:R}),Object(S.jsx)(V,{exact:!0,path:"/dashboard",component:D}),Object(S.jsx)(V,{exact:!0,path:"/",component:G})]})]})})};r.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(H,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.d7106fdf.chunk.js.map