(function(e){function t(t){for(var r,i,l=t[0],u=t[1],c=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"095d":function(e,t,n){},1952:function(e,t,n){"use strict";n("d7b6")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5c96"),a=n.n(o),i=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"}),n("Login"),e._m(0)],1)}),l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"version"},[e._v("Version 1.0")])])}],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("el-card",[n("h2",[e._v("NETFLIX CODE")]),n("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.model,rules:e.rules},nativeOn:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[n("el-form-item",{attrs:{prop:"email"}},[n("el-input",{attrs:{placeholder:"Email","prefix-icon":"fas fa-user"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),n("el-form-item",[n("el-button",{staticClass:"login-button",attrs:{loading:e.loading,type:"primary","native-type":"submit",block:""}},[e._v("Query ")])],1),n("a",{staticClass:"forgot-password",on:{click:e.open2}},[e._v("No code ?")])],1)],1)],1)},c=[],s=n("1da1"),f=(n("96cf"),{name:"login",data:function(){var e=function(e,t,n){var r=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(!t)return n(new Error("Email is required"));setTimeout((function(){r.test(t)?n():n(new Error("Email address is not valid"))}),100)};return{model:{email:""},loading:!1,rules:{email:[{validator:e,trigger:"blur"}]}}},methods:{simulateLogin:function(){return this.$http.get("https://apicode.4knfnf.com/query",{params:{email:this.model.email}}).then((function(e){return e.data.code})).catch((function(){return"ERROR"}))},login:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.form.validate();case 2:if(n=t.sent,!n){t.next=11;break}return e.loading=!0,t.next=7,e.simulateLogin();case 7:r=t.sent,o='<p class="p-code">'+r+"</p>",e.loading=!1,e.$alert(o,"YOUR CODE",{confirmButtonText:"Got it!",dangerouslyUseHTMLString:!0,center:!0});case 11:case"end":return t.stop()}}),t)})))()},open2:function(){this.$alert("Try again later ~","NO CODE?",{confirmButtonText:"Got it!",center:!0})}}}),p=f,d=(n("1952"),n("ed29"),n("2877")),m=Object(d["a"])(p,u,c,!1,null,"126e70de",null),v=m.exports,b={name:"App",components:{Login:v}},g=b,h=(n("5c0b"),Object(d["a"])(g,i,l,!1,null,null,null)),y=h.exports,O=n("bc3a"),_=n.n(O),w=n("2106"),x=n.n(w);r["default"].use(a.a,x.a,_.a),r["default"].prototype.$http=_.a,new r["default"]({el:"#app",render:function(e){return e(y)}})},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},d7b6:function(e,t,n){},ed29:function(e,t,n){"use strict";n("095d")}});
//# sourceMappingURL=app.f208aa2d.js.map