"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59958],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,r(r({ref:t},l),{},{components:n})):a.createElement(k,r({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51830:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r={title:"\u5229\u7528 APISIX Ingress \u5b9e\u73b0 Istio \u670d\u52a1\u7684\u5b89\u5168\u66b4\u9732",authors:[{name:"\u5f20\u664b\u6d9b",title:"Author",url:"https://github.com/tao12345666333",image_url:"https://avatars.githubusercontent.com/u/3264292?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Istio","Kubernetes","APISIX Ingress Controller","Service Mesh"],description:"\u672c\u6587\u5c06\u901a\u8fc7\u975e\u5e38\u8be6\u7ec6\u7684\u64cd\u4f5c\u6b65\u9aa4\uff0c\u5411\u5927\u5bb6\u4e00\u6b65\u6b65\u5730\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 Istio Service Mesh \u548c Apache APISIX\uff0c\u5c06\u542f\u7528 Service Mesh \u7684 Kubernetes \u96c6\u7fa4\u4e2d\u670d\u52a1\u66b4\u9732\u81f3\u96c6\u7fa4\u5916\u3002",tags:["Technology"]},s=void 0,c={permalink:"/zh/blog/2021/12/17/exposure-istio-with-apisix-ingress",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/12/17/exposure-istio-with-apisix-ingress.md",title:"\u5229\u7528 APISIX Ingress \u5b9e\u73b0 Istio \u670d\u52a1\u7684\u5b89\u5168\u66b4\u9732",description:"\u672c\u6587\u5c06\u901a\u8fc7\u975e\u5e38\u8be6\u7ec6\u7684\u64cd\u4f5c\u6b65\u9aa4\uff0c\u5411\u5927\u5bb6\u4e00\u6b65\u6b65\u5730\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 Istio Service Mesh \u548c Apache APISIX\uff0c\u5c06\u542f\u7528 Service Mesh \u7684 Kubernetes \u96c6\u7fa4\u4e2d\u670d\u52a1\u66b4\u9732\u81f3\u96c6\u7fa4\u5916\u3002",date:"2021-12-17T00:00:00.000Z",formattedDate:"2021\u5e7412\u670817\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:5.64,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",title:"Author",url:"https://github.com/tao12345666333",image_url:"https://avatars.githubusercontent.com/u/3264292?v=4",imageURL:"https://avatars.githubusercontent.com/u/3264292?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],nextItem:{title:"\u76f4\u64ad\u9884\u544a | Apache APISIX \xd7 Apache RocketMQ \u7ebf\u4e0a\u5206\u4eab",permalink:"/zh/blog/2021/12/16/apisix-with-rocketmq-meetup"}},p={authorsImageUrls:[void 0,void 0]},l=[{value:"Service Mesh \u7b80\u4ecb",id:"service-mesh-\u7b80\u4ecb",children:[]},{value:"\u7b2c\u4e00\u6b65\uff1a\u51c6\u5907 Kubernetes \u96c6\u7fa4",id:"\u7b2c\u4e00\u6b65\uff1a\u51c6\u5907-kubernetes-\u96c6\u7fa4",children:[]},{value:"\u7b2c\u4e8c\u6b65\uff1a\u90e8\u7f72 Istio",id:"\u7b2c\u4e8c\u6b65\uff1a\u90e8\u7f72-istio",children:[]},{value:"\u7b2c\u4e09\u6b65\uff1a\u90e8\u7f72 Apache APISIX",id:"\u7b2c\u4e09\u6b65\uff1a\u90e8\u7f72-apache-apisix",children:[]},{value:"\u6d4b\u8bd5\u73af\u8282",id:"\u6d4b\u8bd5\u73af\u8282",children:[{value:"\u7b80\u5355\u6d4b\u8bd5",id:"\u7b80\u5355\u6d4b\u8bd5",children:[]},{value:"BookInfo \u90e8\u7f72\u6d4b\u8bd5",id:"bookinfo-\u90e8\u7f72\u6d4b\u8bd5",children:[]}]},{value:"\u53ef\u89c6\u5316\u5904\u7406\u5229\u5668\uff1aKiali",id:"\u53ef\u89c6\u5316\u5904\u7406\u5229\u5668\uff1akiali",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u901a\u8fc7\u975e\u5e38\u8be6\u7ec6\u7684\u64cd\u4f5c\u6b65\u9aa4\uff0c\u5411\u5927\u5bb6\u4e00\u6b65\u6b65\u5730\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 Istio Service Mesh \u548c Apache APISIX\uff0c\u5c06\u542f\u7528 Service Mesh \u7684 Kubernetes \u96c6\u7fa4\u4e2d\u670d\u52a1\u66b4\u9732\u81f3\u96c6\u7fa4\u5916\u3002")),(0,o.kt)("h2",{id:"service-mesh-\u7b80\u4ecb"},"Service Mesh \u7b80\u4ecb"),(0,o.kt)("p",null,"\u968f\u7740\u4e91\u539f\u751f\u6280\u672f\u7684\u706b\u70ed\u53d1\u5c55\uff0cService Mesh \u9010\u6e10\u5728\u5fae\u670d\u52a1\u9886\u57df\u6d41\u884c\u8d77\u6765\u3002\u5f53\u4e0b Service Mesh \u6bd4\u8f83\u6d41\u884c\u7684\u5b9e\u73b0\u65b9\u6848\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://linkerd.io/"},"Linkerd"),"\u3002"),(0,o.kt)("p",null,"\u4e0b\u56fe\u4e3a Service Mesh \u793a\u610f\u56fe\uff0c\u901a\u8fc7\u5f15\u5165 Sidecar Proxy \u6765\u5b8c\u6210\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u4e92\u8054\u53ca\u901a\u4fe1\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639712507435-09449e11-8862-41ff-acdf-a35f1f1562e5.png",alt:"Service Mesh \u793a\u610f\u56fe"})),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u56fe\u6211\u4eec\u53ef\u4ee5\u770b\u51fa Service Mesh \u6bd4\u8f83\u4fa7\u91cd\u4f20\u7edf\u610f\u4e49\u4e0a\u7684\u4e1c\u897f\u5411\u6d41\u91cf\uff0c\u5373\u670d\u52a1\u95f4\u7684\u6d41\u91cf\u3002\u5f53\u6211\u4eec\u5c06 Service Mesh \u4e0e Kubernetes \u914d\u5408\u4f7f\u7528\u65f6\uff0c\u4e1c\u897f\u5411\u6d41\u91cf\u5bf9\u5e94\u7684\u5219\u662f Kubernetes \u96c6\u7fa4\u5185\u7684\u6d41\u91cf\u3002"),(0,o.kt)("p",null,"\u56de\u5230\u771f\u5b9e\u4f7f\u7528\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u4e0d\u4f1a\u53ea\u63a5\u89e6\u5230\u5305\u542b Kubernetes \u96c6\u7fa4\u5185\u7684\u6d41\u91cf\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u9700\u8981\u5c06\u4e00\u4e9b\u670d\u52a1\u66b4\u9732\u5230\u96c6\u7fa4\u5916\uff0c\u4f9b\u7528\u6237\u6216\u5176\u4ed6\u670d\u52a1\u4f7f\u7528\u3002\u4f46\u5c06 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u670d\u52a1\u66b4\u9732\u5230\u96c6\u7fa4\u5916\u65f6\uff0c\u6211\u4eec\u5c31\u5fc5\u987b\u8981\u8003\u8651\u8bf8\u5982\u5b89\u5168\u6027\u548c\u53ef\u89c2\u6d4b\u6027\u7b49\u76f8\u5173\u56e0\u7d20\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u901a\u8fc7\u4f7f\u7528 Istio Service Mesh \u548c Apache APISIX\uff0c\u4e3a\u5927\u5bb6\u6f14\u793a\u5982\u4f55\u5c06\u542f\u7528 Service Mesh \u7684 Kubernetes \u96c6\u7fa4\u4e2d\u670d\u52a1\u5b89\u5168\u66b4\u9732\u81f3\u96c6\u7fa4\u5916\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639730236819-0911b90b-811f-4451-b0e5-f89ac3e04b77.png",alt:"\u6574\u4f53\u64cd\u4f5c\u793a\u610f\u56fe"})),(0,o.kt)("h2",{id:"\u7b2c\u4e00\u6b65\uff1a\u51c6\u5907-kubernetes-\u96c6\u7fa4"},"\u7b2c\u4e00\u6b65\uff1a\u51c6\u5907 Kubernetes \u96c6\u7fa4"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/"},"Kind")," \u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u96c6\u7fa4\u7528\u4e8e\u6f14\u793a\u3002\u5173\u4e8e\u5982\u4f55\u901a\u8fc7 Kind \u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\u53ef\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u7528\u4e8e\u521b\u5efa\u6f14\u793a\u96c6\u7fa4\u6240\u4f7f\u7528\u7684 yaml \u914d\u7f6e\u6587\u4ef6\uff0c\u5c06\u5176\u4fdd\u5b58\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"kind-config.yaml"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n- role: worker\n- role: worker\n- role: worker\n")),(0,o.kt)("p",null,"\u7136\u540e\u4f7f\u7528\u6b64\u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'(MoeLove) \u279c kind create cluster --config kind-config.yaml\nCreating cluster "kind" ...\n \u2713 Ensuring node image (kindest/node:v1.22.2) \ud83d\uddbc\n \u2713 Preparing nodes \ud83d\udce6 \ud83d\udce6 \ud83d\udce6 \ud83d\udce6\n \u2713 Writing configuration \ud83d\udcdc\n \u2713 Starting control-plane \ud83d\udd79\ufe0f\n \u2713 Installing CNI \ud83d\udd0c\n \u2713 Installing StorageClass \ud83d\udcbe\n \u2713 Joining worker nodes \ud83d\ude9c\nSet kubectl context to "kind-kind"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-kind\n\nNot sure what to do next? \ud83d\ude05  Check out https://kind.sigs.k8s.io/docs/user/quick-start/\n')),(0,o.kt)("h2",{id:"\u7b2c\u4e8c\u6b65\uff1a\u90e8\u7f72-istio"},"\u7b2c\u4e8c\u6b65\uff1a\u90e8\u7f72 Istio"),(0,o.kt)("p",null,"\u5728 Kubernetes \u96c6\u7fa4\u521b\u5efa\u5b8c\u6bd5\u540e\uff0c\u6211\u4eec\u6765\u8fdb\u884c Istio \u7684\u76f8\u5173\u90e8\u7f72\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u5148\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-istio")," \u7684\u76ee\u5f55\uff0c\u8fdb\u5165\u8be5\u76ee\u5f55\u540e\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'(MoeLove) \u279c mkdir apisix-istio\n(MoeLove) \u279c cd apisix-istio\n(MoeLove) \u279c curl -sL https://istio.io/downloadIstio | sh -\n\nDownloading istio-1.12.1 from https://github.com/istio/istio/releases/download/1.12.1/istio-1.12.1-linux-amd64.tar.gz ...\n\nIstio 1.12.1 Download Complete!\n\nIstio has been successfully downloaded into the istio-1.12.1 folder on your system.\n\nNext Steps:\nSee https://istio.io/latest/docs/setup/install/ to add Istio to your Kubernetes cluster.\n\nTo configure the istioctl client tool for your workstation,\nadd the /root/apisix-istio/istio-1.12.1/bin directory to your environment path variable with:\n         export PATH="$PATH:/root/apisix-istio/istio-1.12.1/bin"\n\nBegin the Istio pre-installation check by running:\n         istioctl x precheck\n\nNeed more information? Visit https://istio.io/latest/docs/setup/install/\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u64cd\u4f5c\u6267\u884c\u5b8c\u6bd5\uff0c\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u51fa\u4e00\u4e2a\u65b0\u76ee\u5f55\u3002\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0a\u547d\u4ee4\u7684\u8f93\u51fa\u7ee7\u7eed\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'(MoeLove) \u279c ls\nistio-1.12.1\n(MoeLove) \u279c export PATH="$PATH:/root/apisix-istio/istio-1.12.1/bin"\n(MoeLove) \u279c istioctl x precheck\n\u2714 No issues found when checking the cluster. Istio is safe to install or upgrade!\n  To get started, check out https://istio.io/latest/docs/setup/getting-started/\n')),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u5f00\u59cb\u8fdb\u884c\u771f\u6b63\u7684\u90e8\u7f72\u64cd\u4f5c\u3002\u5c06\u5176\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"--set profile=minimal")," \u8fdb\u884c\u6700\u5c0f\u5316\u5b89\u88c5\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c istioctl install --set profile=minimal  -y\n\u2714 Istio core\ninstalled\n\n\u2714 Istiod\ninstalled\n\n\u2714 Installation\ncomplete\n\nMaking this installation the default for injection and validation.\n\nThank you for installing Istio 1.12.  Please take a few minutes to tell us about your install/upgrade experience!  https://forms.gle/FegQbc9UvePd4Z9z7\n")),(0,o.kt)("p",null,"\u6700\u540e\u68c0\u67e5\u5f53\u524d\u7684\u90e8\u7f72\u72b6\u6001\uff0c\u53ef\u4ee5\u770b\u5230 Pod \u5df2\u7ecf\u5728\u8fd0\u884c\u4e2d\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl -n istio-system get pods\nNAME                      READY   STATUS    RESTARTS   AGE\nistiod-58d79b7bff-g66cv   1/1     Running   0          1m\n")),(0,o.kt)("h2",{id:"\u7b2c\u4e09\u6b65\uff1a\u90e8\u7f72-apache-apisix"},"\u7b2c\u4e09\u6b65\uff1a\u90e8\u7f72 Apache APISIX"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u8fdb\u884c Apache APISIX \u7684\u76f8\u5173\u90e8\u7f72\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u521b\u5efa\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-istio")," \u7684 Namespace \u5e76\u5f00\u542f\u81ea\u52a8\u6ce8\u5165\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl create ns apisix-istio\nnamespace/apisix-istio created\n(MoeLove) \u279c kubectl label namespace apisix-istio istio-injection=enabled\nnamespace/apisix-istio labeled\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6dfb\u52a0 Helm Repo \u5e76\u4f7f\u7528 Helm \u8fdb\u884c Apache APISIX \u548c Apache APISIX Ingress Controller \u7684\u90e8\u7f72\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'(MoeLove) \u279c helm repo add apisix https://charts.apiseven.com\n"apisix" has been added to your repositories\n(MoeLove) \u279c helm install apisix-istio apisix/apisix --set gateway.type=NodePort --set ingress-controller.enabled=true --set ingress-controller.config.apisix.serviceNamespace=apisix-istio  --set ingress-controller.config.apisix.serviceName=apisix-istio-admin  --namespace apisix-istio\nNAME: apisix-istio\nLAST DEPLOYED: Wed Dec 15 14:16:33 2021\nNAMESPACE: apisix-istio\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\n1. Get the application URL by running these commands:\n  export NODE_PORT=$(kubectl get --namespace apisix-istio -o jsonpath="{.spec.ports[0].nodePort}" services apisix-istio-gateway)\n  export NODE_IP=$(kubectl get nodes --namespace apisix-istio -o jsonpath="{.items[0].status.addresses[0].address}")\n  echo http://$NODE_IP:$NODE_PORT\n')),(0,o.kt)("p",null,"\u6267\u884c\u5b8c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u53ef\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u7b49\u5f85\u6240\u6709 Pod \u5747\u6b63\u5e38\u8fd0\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl -n apisix-istio wait --for=condition=Ready pods --all\npod/apisix-istio-7bdfcb4bd9-89jcn condition met\npod/apisix-istio-etcd-0 condition met\npod/apisix-istio-etcd-1 condition met\npod/apisix-istio-etcd-2 condition met\npod/apisix-istio-ingress-controller-5fcbb75b8c-b4nnc condition met\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5f53\u524d Pod \u5168\u90e8\u7684\u5df2\u7ecf\u6b63\u5e38\u8fd0\u884c\u4e86\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u8fdb\u884c\u76f8\u5173\u6d4b\u8bd5\u548c\u9a8c\u8bc1\u3002"),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u73af\u8282"},"\u6d4b\u8bd5\u73af\u8282"),(0,o.kt)("h3",{id:"\u7b80\u5355\u6d4b\u8bd5"},"\u7b80\u5355\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u5728\u4e4b\u524d\u4f7f\u7528 Helm \u90e8\u7f72 Apache APISIX \u65f6\uff0c\u6211\u4eec\u5c06\u670d\u52a1\u66b4\u9732\u65b9\u5f0f\u9009\u62e9\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort"),"\uff0c\u6240\u4ee5\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u76f4\u63a5\u8bbf\u95ee\u5230 Apache APISIX\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'(MoeLove) \u279c export NODE_PORT=$(kubectl get --namespace apisix-istio -o jsonpath="{.spec.ports[0].nodePort}" services apisix-istio-gateway)\n(MoeLove) \u279c export NODE_IP=$(kubectl get nodes --namespace apisix-istio -o jsonpath="{.items[0].status.addresses[0].address}")\n(MoeLove) \u279c curl http://$NODE_IP:$NODE_PORT\n{"error_msg":"404 Route Not Found"}\n')),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42\u65f6\u6211\u4eec\u589e\u52a0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," \u9009\u9879\uff0c\u67e5\u770b\u4e00\u4e0b\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'(MoeLove) \u279c curl -v http://$NODE_IP:$NODE_PORT\n* Rebuilt URL to: http://172.20.0.2:31225/\n*   Trying 172.20.0.2...\n* TCP_NODELAY set\n* Connected to 172.20.0.2 (172.20.0.2) port 31225 (#0)\n> GET / HTTP/1.1\n> Host: 172.20.0.2:31225\n> User-Agent: curl/7.58.0\n> Accept: */*\n>\n< HTTP/1.1 404 Not Found\n< date: Wed, 15 Dec 2021 14:31:40 GMT\n< content-type: text/plain; charset=utf-8\n< server: istio-envoy\n< x-envoy-upstream-service-time: 1\n< x-envoy-decorator-operation: apisix-istio-gateway.apisix-istio.svc.cluster.local:80/*\n< transfer-encoding: chunked\n<\n{"error_msg":"404 Route Not Found"}\n* Connection #0 to host 172.20.0.2 left intact\n')),(0,o.kt)("p",null,"\u4ece\u4e0a\u8ff0\u7684\u8f93\u51fa\u7ed3\u679c\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u54cd\u5e94\u5934\u4e2d\u5305\u542b\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"< server: istio-envoy\n< x-envoy-upstream-service-time: 1\n< x-envoy-decorator-operation: apisix-istio-gateway.apisix-istio.svc.cluster.local:80/*\n")),(0,o.kt)("p",null,"\u8fd9\u8bf4\u660e Istio \u7684\u81ea\u52a8\u6ce8\u5165\u5df2\u7ecf\u6210\u529f\uff0c\u5f53\u524d\u76f4\u63a5\u8fdb\u884c\u4ea4\u4e92\u7684\u5e76\u4e0d\u662f Apache APISIX \u800c\u662f Istio \u7684 Sidecar\u3002"),(0,o.kt)("h3",{id:"bookinfo-\u90e8\u7f72\u6d4b\u8bd5"},"BookInfo \u90e8\u7f72\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4f7f\u7528 Istio \u81ea\u5e26\u7684 BookInfo \u793a\u4f8b\u7a0b\u5e8f\u8fdb\u884c\u76f8\u5173\u6d4b\u8bd5\u9a8c\u8bc1\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u521b\u5efa\u4e00\u4e2a Namespace\uff0c\u5e76\u5f00\u542f Istio \u7684\u81ea\u52a8\u6ce8\u5165\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl create ns bookinfo\nnamespace/bookinfo created\n(MoeLove) \u279c kubectl label namespace bookinfo istio-injection=enabled\nnamespace/bookinfo labeled\n")),(0,o.kt)("p",null,"\u7136\u540e\u8fdb\u884c BookInfo \u90e8\u7f72\uff0c\u76f8\u5173\u90e8\u7f72\u6587\u4ef6\u5728\u4e0a\u8ff0\u5b89\u88c5 Istio \u8fc7\u7a0b\u4e2d\u4f1a\u81ea\u52a8\u521b\u5efa\u5728\u76ee\u5f55\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl -n bookinfo apply -f istio-1.12.1/samples/bookinfo/platform/kube/bookinfo.yaml\nservice/details created\nserviceaccount/bookinfo-details created\ndeployment.apps/details-v1 created\nservice/ratings created\nserviceaccount/bookinfo-ratings created\ndeployment.apps/ratings-v1 created\nservice/reviews created\nserviceaccount/bookinfo-reviews created`\ndeployment.apps/reviews-v1 created\ndeployment.apps/reviews-v2 created\ndeployment.apps/reviews-v3 created\nservice/productpage created\nserviceaccount/bookinfo-productpage created\ndeployment.apps/productpage-v1 created\n")),(0,o.kt)("p",null,"\u7b49\u5f85\u6240\u6709 Pod \u6b63\u5e38\u8fd0\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl -n bookinfo get pods\nNAME                             READY   STATUS    RESTARTS   AGE\ndetails-v1-96cf758d8-qr6p9       2/2     Running   0          64s\nproductpage-v1-5f75dfbfb-22hcw   2/2     Running   0          64s\nratings-v1-779dbc4fdd-jt5zp      2/2     Running   0          64s\nreviews-v1-ffbbf7fc8-kxvrr       2/2     Running   0          64s\nreviews-v2-54546c6f84-pnjkn      2/2     Running   0          64s\nreviews-v3-74d6bf84cd-h4r9z      2/2     Running   0          63s\n")),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Apache APISIX \u5c06\u670d\u52a1\u66b4\u9732\u5230 Kubernetes \u96c6\u7fa4\u5916\u4e86\u3002\u4f7f\u7528\u5982\u4e0b\u5185\u5bb9\u521b\u5efa\u4e00\u6761\u8def\u7531\u914d\u7f6e\uff0c\u4fdd\u5b58\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"productpage-ar.yaml"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2beta2\nkind: ApisixRoute\nmetadata:\n name: productpage\nspec:\n http:\n - name: rule1\n   match:\n     hosts:\n     - apisix-istio.dev\n     paths:\n       - /*\n   backends:\n   - serviceName: productpage\n     servicePort: 9080\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5907\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4ee5\u4e0a\u914d\u7f6e\u53ef\u7406\u89e3\u4e3a\uff1a\u521b\u5efa\u4e00\u6761\u8def\u7531\uff0c\u8bbe\u7f6e\u57df\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-istio.dev")," \u5e76\u5c06\u6240\u6709\u8bf7\u6c42\u6d41\u91cf\u5747\u8f6c\u53d1\u81f3 ",(0,o.kt)("inlineCode",{parentName:"p"},"productpage")," \u670d\u52a1\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"9080")," \u7aef\u53e3\u3002"))),(0,o.kt)("p",null,"\u7136\u540e\u521b\u5efa\u6b64\u8d44\u6e90\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl -n bookinfo apply -f productpage-ar.yaml\napisixroute.apisix.apache.org/productpage created\n")),(0,o.kt)("p",null,"\u643a\u5e26\u6211\u4eec\u521a\u624d\u914d\u7f6e\u7684\u57df\u540d\u518d\u6b21\u8bf7\u6c42 Apache APISIX \uff0c\u53ef\u4ee5\u770b\u5230\u8fd4\u56de\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," \u76f8\u5173\u63d0\u793a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'(MoeLove) \u279c curl -I -H "HOST: apisix-istio.dev" http://$NODE_IP:$NODE_PORT/\nHTTP/1.1 200 OK\ncontent-type: text/html; charset=utf-8\ncontent-length: 1683\ndate: Wed, 15 Dec 2021 15:47:30 GMT\nx-envoy-upstream-service-time: 7\nserver: istio-envoy\nx-envoy-decorator-operation: apisix-istio-gateway.apisix-istio.svc.cluster.local:80/*\n')),(0,o.kt)("p",null,"\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"port-forward")," \u7684\u65b9\u5f0f\u5c06 Apache APISIX \u7aef\u53e3\u66b4\u9732\u51fa\u6765\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl -n apisix-istio port-forward --address 0.0.0.0 svc/apisix-istio-gateway 8080:80\nForwarding from 0.0.0.0:8080 -> 9080\n")),(0,o.kt)("p",null,"\u6700\u540e\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST: apisix-istio.dev")," \u7684 Header \u5e76\u5c1d\u8bd5\u8fdb\u884c\u8bf7\u6c42\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230\u5982\u4e0b\u6240\u793a\u7684\u6b63\u786e\u9875\u9762\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639713895938-dec7460b-fa51-443e-a32e-fe2000788127.png",alt:"\u6700\u7ec8\u663e\u793a\u9875\u9762"})),(0,o.kt)("h2",{id:"\u53ef\u89c6\u5316\u5904\u7406\u5229\u5668\uff1akiali"},"\u53ef\u89c6\u5316\u5904\u7406\u5229\u5668\uff1aKiali"),(0,o.kt)("p",null,"Kiali \u662f\u4e00\u4e2a\u53ef\u4ee5\u5bf9 Istio \u8fdb\u884c\u53ef\u89c6\u5316\u7684\u5de5\u5177\uff0c\u53ef\u4f5c\u4e3a Istio add-on \u8fdb\u884c\u5b89\u88c5\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\u76f4\u63a5\u4f7f\u7528 Istio \u643a\u5e26\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"addons")," \u76ee\u5f55\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u90e8\u7f72\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl -n istio-system apply -f  istio-1.12.1/samples/addons/\nserviceaccount/grafana created\nconfigmap/grafana created\nservice/grafana created\ndeployment.apps/grafana created\nconfigmap/istio-grafana-dashboards created\nconfigmap/istio-services-grafana-dashboards created\ndeployment.apps/jaeger created\nservice/tracing created\nservice/zipkin created\nservice/jaeger-collector created\nserviceaccount/kiali created\nconfigmap/kiali created\nclusterrole.rbac.authorization.k8s.io/kiali-viewer created\nclusterrole.rbac.authorization.k8s.io/kiali created\nclusterrolebinding.rbac.authorization.k8s.io/kiali created\nrole.rbac.authorization.k8s.io/kiali-controlplane created\nrolebinding.rbac.authorization.k8s.io/kiali-controlplane created\nservice/kiali created\ndeployment.apps/kiali created\nserviceaccount/prometheus created\nconfigmap/prometheus created\nclusterrole.rbac.authorization.k8s.io/prometheus created\nclusterrolebinding.rbac.authorization.k8s.io/prometheus created\nservice/prometheus created\ndeployment.apps/prometheus created\n")),(0,o.kt)("p",null,"\u7b49\u5f85 Pod \u6b63\u5e38\u8fd0\u884c\u540e\u67e5\u770b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl -n istio-system get pods\nNAME                          READY   STATUS    RESTARTS   AGE\ngrafana-6ccd56f4b6-wq6k5      1/1     Running   0          2m12s\nistiod-58d79b7bff-g66cv       1/1     Running   0          42m\njaeger-5d44bc5c5d-84ksf       1/1     Running   0          2m11s\nkiali-79b86ff5bc-w457g        1/1     Running   0          2m3s\nprometheus-64fd8ccd65-2mjcc   2/2     Running   0          2m9s\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c Kiali \u7684\u7aef\u53e3\u8f6c\u53d1\u5e76\u5728\u6d4f\u89c8\u5668\u4e2d\u8fdb\u884c\u8bbf\u95ee\u3002\u5f53\u7136\u4f7f\u7528\u4e0a\u8ff0 ",(0,o.kt)("inlineCode",{parentName:"p"},"port-forward")," \u7684\u65b9\u5f0f\u4e5f\u662f\u4e00\u6837\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(MoeLove) \u279c istioctl dashboard kiali  --address 0.0.0.0 --port 9999 --browser=false\nhttp://0.0.0.0:9999/kiali\nskipping opening a browser\n")),(0,o.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://0.0.0.0:9999/kiali"),"\uff0c\u540c\u65f6\u5c1d\u8bd5\u591a\u6b21\u901a\u8fc7 Apache APISIX \u8bbf\u95ee BookInfo \u670d\u52a1\uff0c\u5373\u53ef\u770b\u5230\u5982\u4e0b\u6548\u679c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639714083338-d5a0601e-5dcb-446d-9b25-89ec95044ebd.png",alt:"\u8bbf\u95ee BookInfo"})),(0,o.kt)("p",null,"\u70b9\u51fb Graph \uff0c\u5c06 Namespace \u9009\u62e9\u4e3a BookInfo\u3002\u5728\u6d4b\u8bd5\u8bbf\u95ee BookInfo \u5e94\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u770b\u5230\u5982\u4e0b\u6240\u793a\u6548\u679c\u3002\u53ef\u4ee5\u770b\u5230\u6d41\u91cf\u4ece Apache APISIX \u8fdb\u6765\uff0c\u7136\u540e\u6d41\u5411\u5e94\u7528\u7a0b\u5e8f\u7684\u5404\u4e2a\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639714198376-27882a16-751b-436d-9212-69cad379bb72.png",alt:"\u6d41\u7a0b\u56fe"})),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u5168\u90e8\u6d41\u7a0b\u7ed3\u675f\u3002\u6211\u4eec\u5df2\u7ecf\u6210\u529f\u5730\u4f7f\u7528 Apache APISIX \u548c Apache APISIX Ingress Controller\uff0c\u5c06\u5f00\u542f Service Mesh \u7684 Kubernetes  \u96c6\u7fa4\u4e2d\u7684\u670d\u52a1\u5b89\u5168\u5730\u66b4\u9732\u51fa\u6765\u4e86\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u672c\u6587\u901a\u8fc7\u975e\u5e38\u8be6\u7ec6\u7684\u64cd\u4f5c\u6b65\u9aa4\uff0c\u5411\u5927\u5bb6\u4e00\u6b65\u6b65\u5730\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 Istio Service Mesh \u548c Apache APISIX\uff0c\u5c06\u542f\u7528 Service Mesh \u7684 Kubernetes \u96c6\u7fa4\u4e2d\u670d\u52a1\u66b4\u9732\u81f3\u96c6\u7fa4\u5916\u3002\u540e\u7eed\u4e5f\u53ef\u4ee5\u901a\u8fc7 Apache APISIX \u4e30\u5bcc\u7684\u63d2\u4ef6\u80fd\u529b\u63d0\u4f9b\u66f4\u591a\u5b89\u5168\u9632\u62a4\u6216\u6d41\u91cf\u63a7\u5236\u3002"),(0,o.kt)("p",null,"\u5e0c\u671b\u901a\u8fc7\u4ee5\u4e0a\u7684\u7ec6\u8282\u6559\u5b66\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5927\u5bb6\u5728\u4f7f\u7528 Apache APISIX \u65f6\u66f4\u65b9\u4fbf\u5730\u5b9e\u73b0\u4e0e Istio \u7b49\u65b9\u6848\u8fdb\u884c\u96c6\u6210\u3002"))}d.isMDXComponent=!0}}]);