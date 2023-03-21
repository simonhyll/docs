"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(p,".").concat(m)]||d[m]||k[m]||l;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const l={title:"\u7f51\u7edc",weight:35},i=void 0,o={unversionedId:"networking/networking",id:"networking/networking",title:"\u7f51\u7edc",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 CoreDNS\u3001Traefik Ingress controller \u548c Klipper service load balancer \u662f\u5982\u4f55\u5728 K3s \u4e2d\u5de5\u4f5c\u7684\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/networking/networking.md",sourceDirName:"networking",slug:"/networking/",permalink:"/zh/networking/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/networking.md",tags:[],version:"current",lastUpdatedAt:1679431464,formattedLastUpdatedAt:"2023\u5e743\u670821\u65e5",frontMatter:{title:"\u7f51\u7edc",weight:35},sidebar:"mySidebar",previous:{title:"\u5377\u548c\u5b58\u50a8",permalink:"/zh/storage/"},next:{title:"Helm",permalink:"/zh/helm/"}},p={},c=[{value:"CoreDNS",id:"coredns",level:2},{value:"Traefik Ingress Controller",id:"traefik-ingress-controller",level:2},{value:"\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668",id:"\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668",level:2},{value:"Service Load Balancer",id:"service-load-balancer",level:2},{value:"ServiceLB \u7684\u5de5\u4f5c\u539f\u7406",id:"servicelb-\u7684\u5de5\u4f5c\u539f\u7406",level:3},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:3},{value:"\u63a7\u5236 ServiceLB \u8282\u70b9\u9009\u62e9",id:"\u63a7\u5236-servicelb-\u8282\u70b9\u9009\u62e9",level:3},{value:"\u521b\u5efa ServiceLB \u8282\u70b9\u6c60",id:"\u521b\u5efa-servicelb-\u8282\u70b9\u6c60",level:3},{value:"\u7981\u7528 ServiceLB",id:"\u7981\u7528-servicelb",level:3},{value:"\u90e8\u7f72\u5916\u90e8 Cloud Controller Manager",id:"\u90e8\u7f72\u5916\u90e8-cloud-controller-manager",level:2},{value:"\u6ca1\u6709\u4e3b\u673a\u540d\u7684\u8282\u70b9",id:"\u6ca1\u6709\u4e3b\u673a\u540d\u7684\u8282\u70b9",level:2},{value:"\u591a\u96c6\u7fa4 CIDR\uff08\u5b9e\u9a8c\u6027\uff09",id:"\u591a\u96c6\u7fa4-cidr\u5b9e\u9a8c\u6027",level:2}],s={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86 CoreDNS\u3001Traefik Ingress controller \u548c Klipper service load balancer \u662f\u5982\u4f55\u5728 K3s \u4e2d\u5de5\u4f5c\u7684\u3002"),(0,a.kt)("p",null,"\u6709\u5173 Flannel \u914d\u7f6e\u9009\u9879\u548c\u540e\u7aef\u9009\u62e9\uff0c\u4ee5\u53ca\u5982\u4f55\u8bbe\u7f6e\u81ea\u5df1\u7684 CNI\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/installation/network-options"},"\u5b89\u88c5\u7f51\u7edc\u9009\u9879"),"\u9875\u9762\u3002"),(0,a.kt)("p",null,"\u6709\u5173 K3s \u9700\u8981\u5f00\u653e\u54ea\u4e9b\u7aef\u53e3\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh/installation/requirements#%E7%BD%91%E7%BB%9C"},"\u7f51\u7edc\u8981\u6c42"),"\u3002"),(0,a.kt)("h2",{id:"coredns"},"CoreDNS"),(0,a.kt)("p",null,"CoreDNS \u5728 Server \u542f\u52a8\u65f6\u81ea\u52a8\u90e8\u7f72\u3002\u8981\u7981\u7528\u5b83\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable=coredns")," \u9009\u9879\u6765\u914d\u7f6e\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 Server\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u5b89\u88c5 CoreDNS\uff0c\u5219\u9700\u8981\u81ea\u5df1\u5b89\u88c5\u96c6\u7fa4 DNS \u63d0\u4f9b\u7a0b\u5e8f\u3002"),(0,a.kt)("h2",{id:"traefik-ingress-controller"},"Traefik Ingress Controller"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik")," \u662f\u4e00\u79cd\u73b0\u4ee3\u7684 HTTP \u53cd\u5411\u4ee3\u7406\u548c\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u53ef\u4ee5\u8f7b\u677e\u90e8\u7f72\u5fae\u670d\u52a1\u3002\u5b83\u5728\u8bbe\u8ba1\u3001\u90e8\u7f72\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u65b9\u9762\u7b80\u5316\u4e86\u7f51\u7edc\u590d\u6742\u6027\u3002"),(0,a.kt)("p",null,"Traefik Ingress Controller \u90e8\u7f72\u4e86\u4e00\u4e2a\u4f7f\u7528\u7aef\u53e3 80 \u548c 443 \u7684 LoadBalancer Service\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cServiceLB \u5c06\u5728\u6240\u6709\u96c6\u7fa4\u6210\u5458\u4e0a\u516c\u5f00\u8fd9\u4e9b\u7aef\u53e3\uff0c\u6362\u8a00\u4e4b\uff0c\u8fd9\u4e9b\u7aef\u53e3\u65e0\u6cd5\u7528\u4e8e\u5176\u4ed6 HostPort \u6216 NodePort pod\u3002"),(0,a.kt)("p",null,"Traefik \u5728\u542f\u52a8\u670d\u52a1\u5668\u65f6\u9ed8\u8ba4\u90e8\u7f72\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/installation/packaged-components"},"\u7ba1\u7406\u6253\u5305\u7ec4\u4ef6"),"\u3002\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik.yaml"),"\u3002"),(0,a.kt)("p",null,"\u4e0d\u8981\u624b\u52a8\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"traefik.yaml")," \u6587\u4ef6\uff0c\u56e0\u4e3a K3s \u4f1a\u5728\u542f\u52a8\u65f6\u4f7f\u7528\u9ed8\u8ba4\u503c\u66ff\u6362\u8be5\u6587\u4ef6\u3002\u76f8\u53cd\uff0c\u4f60\u9700\u8981\u901a\u8fc7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," \u4e2d\u521b\u5efa\u5176\u4ed6 ",(0,a.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," \u6e05\u5355\u6765\u81ea\u5b9a\u4e49 Traefik\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/helm/#%E4%BD%BF%E7%94%A8-helmchartconfig-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%89%93%E5%8C%85%E7%BB%84%E4%BB%B6"},"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6"),"\u3002\u6709\u5173\u914d\u7f6e\u503c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-helm-chart/tree/master/traefik"},"\u5b98\u65b9 Traefik Helm \u914d\u7f6e\u53c2\u6570"),"\u3002"),(0,a.kt)("p",null,"\u8981\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664 Traefik\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable=traefik")," \u6807\u5fd7\u6765\u542f\u52a8\u6240\u6709 Server\u3002"),(0,a.kt)("p",null,"K3s 1.20 \u53ca\u66f4\u65e9\u7248\u672c\u5305\u62ec\u4e86 Traefik v1\u3002\u9664\u975e\u627e\u5230\u73b0\u6709\u7684 Traefik v1\uff08\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cTraefik \u4e0d\u4f1a\u5347\u7ea7\u5230 v2\uff09\uff0c\u5426\u5219 K3s 1.21 \u53ca\u66f4\u9ad8\u7248\u672c\u5c06\u5b89\u88c5 Traefik v2\u3002\u6709\u5173 K3s \u4e2d\u5305\u542b\u7684 Traefik \u7248\u672c\uff0c\u8bf7\u53c2\u9605\u7248\u672c\u7684\u53d1\u884c\u8bf4\u660e\u3002"),(0,a.kt)("p",null,"\u8981\u4ece\u8f83\u65e7\u7684 Traefik v1 \u5b9e\u4f8b\u8fc1\u79fb\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/migration/v1-to-v2/"},"Traefik \u6587\u6863"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-migration-tool"},"\u8fc1\u79fb\u5de5\u5177"),"\u3002"),(0,a.kt)("h2",{id:"\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668"},"\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668"),(0,a.kt)("p",null,"K3s \u5305\u542b\u4e00\u4e2a\u5d4c\u5165\u5f0f\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668\u3002\u5e95\u5c42\u5b9e\u73b0\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cloudnativelabs/kube-router"},"kube-router")," \u7684 netpol \u63a7\u5236\u5668\u5e93\uff08\u6ca1\u6709\u5176\u4ed6 kube-router \u529f\u80fd\uff09\uff0c\u4f60\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/tree/master/pkg/agent/netpol"},"\u6b64\u5904"),"\u627e\u5230 netpol\u3002"),(0,a.kt)("p",null,"\u8981\u7981\u7528\u5b83\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-network-policy")," \u6807\u5fd7\u6765\u542f\u52a8\u6bcf\u4e2a server\u3002"),(0,a.kt)("h2",{id:"service-load-balancer"},"Service Load Balancer"),(0,a.kt)("p",null,"\u4efb\u4f55 LoadBalancer \u63a7\u5236\u5668\u90fd\u53ef\u4ee5\u90e8\u7f72\u5230\u4f60\u7684 K3s \u96c6\u7fa4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cK3s \u63d0\u4f9b\u4e00\u4e2a\u79f0\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"ServiceLB"),"\uff08\u4ee5\u524d\u79f0\u4e3a Klipper LoadBalancer\uff09\u7684\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u5b83\u4f1a\u4f7f\u7528\u53ef\u7528\u7684\u4e3b\u673a\u7aef\u53e3\u3002"),(0,a.kt)("p",null,"\u4e0a\u6e38 Kubernetes \u5141\u8bb8\u521b\u5efa LoadBalancer \u7c7b\u578b\u7684 Service\uff0c\u4f46\u4e0d\u5305\u62ec\u9ed8\u8ba4\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u5b9e\u73b0\uff0c\u56e0\u6b64\u8fd9\u4e9b Service \u5728\u5b89\u88c5\u4e4b\u524d\u4f1a\u4fdd\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"pending")," \u72b6\u6001\u3002\u8bb8\u591a\u6258\u7ba1\u670d\u52a1\u9700\u8981 Amazon EC2 \u6216 Microsoft Azure \u7b49\u4e91\u5382\u5546\u6765\u63d0\u4f9b\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668\u5b9e\u73b0\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0cK3s ServiceLB \u53ef\u4ee5\u5728\u6ca1\u6709\u4e91\u5382\u5546\u6216\u4efb\u4f55\u989d\u5916\u914d\u7f6e\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 LoadBalancer Service\u3002"),(0,a.kt)("h3",{id:"servicelb-\u7684\u5de5\u4f5c\u539f\u7406"},"ServiceLB \u7684\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"ServiceLB \u63a7\u5236\u5668\u4f1a\u76d1\u89c6 Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service"),"\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.type")," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a LoadBalancer Service\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet"),"\u3002\u8fd9\u4e2a DaemonSet \u4f9d\u6b21\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u521b\u5efa\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"svc-")," \u524d\u7f00\u7684 Pod\u3002\u8fd9\u4e9b Pod \u4f7f\u7528 iptables \u5c06\u6d41\u91cf\u4ece Pod \u7684 NodePort \u8f6c\u53d1\u5230 Service \u7684 ClusterIP \u5730\u5740\u548c\u7aef\u53e3\u3002"),(0,a.kt)("p",null,"\u5982\u679c ServiceLB Pod \u5728\u914d\u7f6e\u4e86\u5916\u90e8 IP \u7684\u8282\u70b9\u4e0a\u8fd0\u884c\uff0c\u5219\u8be5\u8282\u70b9\u7684\u5916\u90e8 IP \u5c06\u586b\u5145\u5230 Service \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"status.loadBalancer.ingress")," \u5730\u5740\u5217\u8868\u4e2d\u3002\u5426\u5219\u5c06\u4f7f\u7528\u8282\u70b9\u7684\u5185\u90e8 IP\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u521b\u5efa\u4e86\u591a\u4e2a LoadBalancer Service\uff0c\u5219\u4f1a\u4e3a\u6bcf\u4e2a Service \u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684 DaemonSet\u3002"),(0,a.kt)("p",null,"\u53ea\u8981\u5b83\u4eec\u4f7f\u7528\u4e0d\u540c\u7684\u7aef\u53e3\uff0c\u5c31\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u4e0a\u516c\u5f00\u591a\u4e2a Service\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u521b\u5efa\u4e00\u4e2a\u4fa6\u542c\u7aef\u53e3 80 \u7684 LoadBalancer Service\uff0cServiceLB \u5c06\u5c1d\u8bd5\u5728\u96c6\u7fa4\u4e2d\u4e3a\u7aef\u53e3 80 \u5bfb\u627e\u7a7a\u95f2\u4e3b\u673a\u3002\u5982\u679c\u6ca1\u6709\u8be5\u7aef\u53e3\u53ef\u7528\u7684\u4e3b\u673a\uff0c\u5219 LB \u5c06\u505c\u7559\u5728 Pending \u72b6\u6001\u3002"),(0,a.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,a.kt)("p",null,"\u5728 K3s \u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer"},"LoadBalancer \u7c7b\u578b\u7684 Service"),"\u3002"),(0,a.kt)("h3",{id:"\u63a7\u5236-servicelb-\u8282\u70b9\u9009\u62e9"},"\u63a7\u5236 ServiceLB \u8282\u70b9\u9009\u62e9"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"svccontroller.k3s.cattle.io/enablelb=true")," \u6807\u7b7e\u6dfb\u52a0\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u8282\u70b9\uff0cServiceLB \u63a7\u5236\u5668\u4f1a\u5207\u6362\u5230 allow-list \u6a21\u5f0f\uff0c\u53ea\u6709\u5177\u6709\u8be5\u6807\u7b7e\u7684\u8282\u70b9\u624d\u6709\u8d44\u683c\u6258\u7ba1 LoadBalancer Pod\u3002\u672a\u6807\u8bb0\u7684\u8282\u70b9\u5c06\u88ab ServiceLB \u6392\u9664\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8282\u70b9\u6ca1\u6709\u6807\u7b7e\u3002\u53ea\u8981\u6240\u6709\u8282\u70b9\u4fdd\u6301\u672a\u6807\u8bb0\u72b6\u6001\uff0c\u6240\u6709\u5177\u6709\u53ef\u7528\u7aef\u53e3\u7684\u8282\u70b9\u90fd\u5c06\u88ab ServiceLB \u4f7f\u7528\u3002")),(0,a.kt)("h3",{id:"\u521b\u5efa-servicelb-\u8282\u70b9\u6c60"},"\u521b\u5efa ServiceLB \u8282\u70b9\u6c60"),(0,a.kt)("p",null,"\u8981\u9009\u62e9\u7279\u5b9a\u7684\u8282\u70b9\u5b50\u96c6\u6765\u6258\u7ba1 LoadBalancer \u7684 pod\uff0c\u8bf7\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"enablelb")," \u6807\u7b7e\u6dfb\u52a0\u5230\u6240\u9700\u7684\u8282\u70b9\uff0c\u5e76\u5728\u8282\u70b9\u548c\u670d\u52a1\u4e0a\u8bbe\u7f6e\u5339\u914d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"lbpool")," \u6807\u7b7e\u503c\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool1")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/enablelb=true")," \u6807\u8bb0\u8282\u70b9 A \u548c\u8282\u70b9 B"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool2")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/enablelb=true")," \u6807\u8bb0\u8282\u70b9 C \u548c\u8282\u70b9 D"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6807\u7b7e ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool1")," \u5728\u7aef\u53e3 443 \u4e0a\u521b\u5efa\u4e00\u4e2a LoadBalancer Service\u3002\u8be5 Service \u7684 DaemonSet \u4ec5\u5c06 Pod \u90e8\u7f72\u5230\u8282\u70b9 A \u548c\u8282\u70b9 B\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6807\u7b7e ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool2")," \u5728\u7aef\u53e3 443 \u4e0a\u521b\u5efa\u53e6\u4e00\u4e2a LoadBalancer Service\u3002DaemonSet \u53ea\u4f1a\u5c06 Pod \u90e8\u7f72\u5230\u8282\u70b9 C \u548c\u8282\u70b9 D\u3002")),(0,a.kt)("h3",{id:"\u7981\u7528-servicelb"},"\u7981\u7528 ServiceLB"),(0,a.kt)("p",null,"\u8981\u7981\u7528 ServiceLB\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable=servicelb")," \u6807\u8bb0\u6765\u914d\u7f6e\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 Server\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u8fd0\u884c\u4e0d\u540c\u7684 LB\uff0c\u4f8b\u5982 MetalLB\uff0c\u8fd9\u662f\u5fc5\u8981\u7684\u3002"),(0,a.kt)("h2",{id:"\u90e8\u7f72\u5916\u90e8-cloud-controller-manager"},"\u90e8\u7f72\u5916\u90e8 Cloud Controller Manager"),(0,a.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u5927\u5c0f\uff0cK3s \u5220\u9664\u4e86\u6240\u6709\u201c\u6811\u5185\u201d\uff08\u5185\u7f6e\uff09\u4e91\u63d0\u4f9b\u7a0b\u5e8f\u3002\u76f8\u53cd\uff0cK3s \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5d4c\u5165\u5f0f Cloud Controller Manager (CCM) \u5b58\u6839\uff0c\u5b83\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"li"},"--node-ip")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"--node-external-ip")," \u6807\u5fd7\u8bbe\u7f6e\u8282\u70b9 InternalIP \u548c ExternalIP \u5730\u5740\u5b57\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6258\u7ba1 ServiceLB LoadBalancer \u63a7\u5236\u5668\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6e05\u9664\u4e91\u63d0\u4f9b\u5546\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"external")," \u65f6\u51fa\u73b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"node.cloudprovider.kubernetes.io/uninitialized")," \u6c61\u70b9\u3002")),(0,a.kt)("p",null,"\u5728\u90e8\u7f72\u5916\u90e8 CCM \u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-cloud-controller")," \u6807\u5fd7\u542f\u52a8\u6240\u6709 K3s Server \u4ee5\u7981\u7528\u5d4c\u5165\u5f0f CCM\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7981\u7528\u4e86\u5185\u7f6e CCM \u5e76\u4e14\u6ca1\u6709\u6b63\u786e\u90e8\u7f72\u548c\u914d\u7f6e\u5916\u90e8\u66ff\u4ee3\u54c1\uff0c\u8282\u70b9\u5c06\u4ecd\u7136\u5177\u6709\u6c61\u70b9\u800c\u4e14\u65e0\u6cd5\u8c03\u5ea6\u3002")),(0,a.kt)("h2",{id:"\u6ca1\u6709\u4e3b\u673a\u540d\u7684\u8282\u70b9"},"\u6ca1\u6709\u4e3b\u673a\u540d\u7684\u8282\u70b9"),(0,a.kt)("p",null,"\u4e00\u4e9b\u4e91\u63d0\u4f9b\u5546\uff08\u4f8b\u5982 Linode\uff09\u5c06\u521b\u5efa\u4ee5 \u201clocalhost\u201d \u4f5c\u4e3a\u4e3b\u673a\u540d\u7684\u4e3b\u673a\uff0c\u800c\u5176\u4ed6\u4e91\u63d0\u4f9b\u5546\u53ef\u80fd\u6839\u672c\u6ca1\u6709\u8bbe\u7f6e\u4e3b\u673a\u540d\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u57df\u540d\u89e3\u6790\u51fa\u73b0\u95ee\u9898\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--node-name")," \u6807\u5fd7\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"K3S_NODE_NAME")," \u73af\u5883\u53d8\u91cf\u8fd0\u884c K3s\uff0c\u8fd9\u4f1a\u901a\u8fc7\u4f20\u9012\u8282\u70b9\u540d\u79f0\u6765\u89e3\u51b3\u6b64\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"\u591a\u96c6\u7fa4-cidr\u5b9e\u9a8c\u6027"},"\u591a\u96c6\u7fa4 CIDR\uff08\u5b9e\u9a8c\u6027\uff09"),(0,a.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4ece v1.26.3+k3s1 \u5f00\u59cb\u4f5c\u4e3a\u5b9e\u9a8c\u529f\u80fd")),(0,a.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u542f\u7528\u6b64\u6807\u5fd7\u540e\uff0c\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668\u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002")),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.26")," \u5f00\u59cb\uff0cKubernetes \u5f15\u5165\u4e86\u591a\u96c6\u7fa4 CIDR \u4f5c\u4e3a alpha \u529f\u80fd\u3002(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-network/2593-multiple-cluster-cidrs"},"https://github.com/kubernetes/enhancements/tree/master/keps/sig-network/2593-multiple-cluster-cidrs"),")"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--multi-cluster-cidr")," \u6807\u5fd7\u5728 K3s Server \u4e0a\u542f\u7528\u6b64\u529f\u80fd\uff0c\u5b83\u53ef\u7528\u4e8e\u5b9a\u4e49\u591a\u4e2a\u96c6\u7fa4 CIDR\uff0c\u4e3a\u6bcf\u4e2a\u8282\u70b9\u5206\u914d podCIDR\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728\u5df2\u8fd0\u884c\u7684\u96c6\u7fa4\u4e0a\u8fdb\u884c\u6269\u5c55\u3002\n\u4f60\u53ef\u4ee5\u4f7f\u7528 API \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"clustercidr")," \u8d44\u6e90\uff08\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," \u914d\u7f6e\u7684 CIDR \u5b9a\u4e49\u4e3a\u9ed8\u8ba4\u503c\uff09\u3002"),(0,a.kt)("p",null,"\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"clustercidr")," \u53ef\u4ee5\u5982\u4e0b\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: networking.k8s.io/v1alpha1\nkind: ClusterCIDR\nmetadata:\n  name: new-cidr\nspec:\n  nodeSelector:\n    nodeSelectorTerms:\n      - matchExpressions:\n        - key: kubernetes.io/hostname\n          operator: In\n          values:\n          -  "worker2"\n  perNodeHostBits: 8\n  ipv4: 10.247.0.0/16\n')),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," \u5339\u914d\u7684\u8282\u70b9\u5c06\u4f7f\u7528\u65b0\u5b9a\u4e49\u8d44\u6e90\u7684 podCIDR\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5df2\u62e5\u6709 CIDR \u7684\u8282\u70b9\u65e0\u6cd5\u83b7\u5f97\u65b0\u7684 CIDR\u3002\u4f60\u5fc5\u987b\u79fb\u9664\u6216\u91cd\u542f\u5b83\u3002")),(0,a.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ipv4")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ipv6")," \u6765\u5b9a\u4e49\u53cc\u6808 CIDR\uff0c\u4f46 ",(0,a.kt)("inlineCode",{parentName:"p"},"perNodeHostBits")," \u662f\u76f8\u540c\u7684\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," \u6765\u5b9a\u4e49\u53cc\u6808\u914d\u7f6e\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller")," \u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"--node-cidr-mask-size-ipv6")," \u6807\u5fd7\u9700\u8981\u5177\u6709\u4e0e IPv4 \u76f8\u540c\u7684\u5927\u5c0f\u3002")))}k.isMDXComponent=!0}}]);