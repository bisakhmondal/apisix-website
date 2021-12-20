"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2461],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10132:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a={title:"Route"},c=void 0,u={unversionedId:"architecture-design/route",id:"architecture-design/route",isDocsHomePage:!1,title:"Route",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/architecture-design/route.md",sourceDirName:"architecture-design",slug:"/architecture-design/route",permalink:"/zh/docs/apisix/next/architecture-design/route",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/architecture-design/route.md",tags:[],version:"current",frontMatter:{title:"Route"},sidebar:"docs",previous:{title:"APISIX",permalink:"/zh/docs/apisix/next/architecture-design/apisix"},next:{title:"Plugin",permalink:"/zh/docs/apisix/next/architecture-design/plugin"}},p=[],s={toc:p};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Route \u5b57\u9762\u610f\u601d\u5c31\u662f\u8def\u7531\uff0c\u901a\u8fc7\u5b9a\u4e49\u4e00\u4e9b\u89c4\u5219\u6765\u5339\u914d\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\uff0c\u7136\u540e\u6839\u636e\u5339\u914d\u7ed3\u679c\u52a0\u8f7d\u5e76\u6267\u884c\u76f8\u5e94\u7684\n\u63d2\u4ef6\uff0c\u5e76\u628a\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u5230\u6307\u5b9a Upstream\u3002"),(0,o.kt)("p",null,"Route \u4e2d\u4e3b\u8981\u5305\u542b\u4e09\u90e8\u5206\u5185\u5bb9\uff1a\u5339\u914d\u89c4\u5219\uff08\u6bd4\u5982 uri\u3001host\u3001remote_addr \u7b49\uff09\uff0c\u63d2\u4ef6\u914d\uff08\u9650\u6d41\u9650\u901f\u7b49\uff09\u548c\u4e0a\u6e38\u4fe1\u606f\u3002\n\u8bf7\u770b\u4e0b\u56fe\u793a\u4f8b\uff0c\u662f\u4e00\u4e9b Route \u89c4\u5219\u7684\u5b9e\u4f8b\uff0c\u5f53\u67d0\u4e9b\u5c5e\u6027\u503c\u76f8\u540c\u65f6\uff0c\u56fe\u4e2d\u7528\u76f8\u540c\u989c\u8272\u6807\u8bc6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/routes-example.png",alt:"\u8def\u7531\u793a\u4f8b"})),(0,o.kt)("p",null,"\u6211\u4eec\u76f4\u63a5\u5728 Route \u4e2d\u5b8c\u6210\u6240\u6709\u53c2\u6570\u7684\u914d\u7f6e\uff0c\u4f18\u70b9\u662f\u5bb9\u6613\u8bbe\u7f6e\uff0c\u6bcf\u4e2a Route \u90fd\u76f8\u5bf9\u72ec\u7acb\u81ea\u7531\u5ea6\u6bd4\u8f83\u9ad8\u3002\u4f46\u5f53\u6211\u4eec\u7684 Route \u6709\u6bd4\u8f83\u591a\u7684\u91cd\u590d\u914d\u7f6e\uff08\u6bd4\u5982\u542f\u7528\u76f8\u540c\u7684\u63d2\u4ef6\u914d\u7f6e\u6216\u4e0a\u6e38\u4fe1\u606f\uff09\uff0c\u4e00\u65e6\u6211\u4eec\u8981\u66f4\u65b0\u8fd9\u4e9b\u76f8\u540c\u5c5e\u6027\u65f6\uff0c\u5c31\u9700\u8981\u904d\u5386\u6240\u6709 Route \u5e76\u8fdb\u884c\u4fee\u6539\uff0c\u7ed9\u540e\u671f\u7ba1\u7406\u7ef4\u62a4\u589e\u52a0\u4e0d\u5c11\u590d\u6742\u5ea6\u3002"),(0,o.kt)("p",null,"\u4e0a\u9762\u63d0\u53ca\u91cd\u590d\u7684\u7f3a\u70b9\u5728 APISIX \u4e2d\u72ec\u7acb\u62bd\u8c61\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/service"},"Service")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/upstream"},"Upstream")," \u4e24\u4e2a\u6982\u5ff5\u6765\u89e3\u51b3\u3002"),(0,o.kt)("p",null,'\u4e0b\u9762\u521b\u5efa\u7684 Route \u793a\u4f8b\uff0c\u662f\u628a URL \u4e3a "/index.html" \u7684\u8bf7\u6c42\u4ee3\u7406\u5230\u5730\u5740\u4e3a "127.0.0.1:1980" \u7684 Upstream \u670d\u52a1\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n\nHTTP/1.1 201 Created\nDate: Sat, 31 Aug 2019 01:17:15 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"node":{"value":{"uri":"\\/index.html","upstream":{"nodes":{"127.0.0.1:1980":1},"type":"roundrobin"}},"createdIndex":61925,"key":"\\/apisix\\/routes\\/1","modifiedIndex":61925},"action":"create"}\n')),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u63a5\u6536\u5230\u6210\u529f\u5e94\u7b54\uff0c\u8868\u793a\u8be5 Route \u5df2\u6210\u529f\u521b\u5efa\u3002"),(0,o.kt)("p",null,"\u6709\u5173 Route \u7684\u5177\u4f53\u9009\u9879\uff0c\u53ef\u5177\u4f53\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api#route"},"Admin API \u4e4b Route"),"\u3002"))}l.isMDXComponent=!0}}]);