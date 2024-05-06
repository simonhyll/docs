"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4457],{6733:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var n=s(5893),t=s(1151),i=s(9965),c=s(4996);const l={title:"\u67b6\u6784"},d=void 0,a={id:"architecture",title:"\u67b6\u6784",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u9ad8\u53ef\u7528\uff08HA\uff09K3s \u670d\u52a1\u5668\u96c6\u7fa4\u7684\u67b6\u6784\uff0c\u4ee5\u53ca K3s \u4e0e\u5355\u8282\u70b9\u670d\u52a1\u5668\u96c6\u7fa4\u7684\u533a\u522b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/zh/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/architecture.md",tags:[],version:"current",lastUpdatedAt:1715027917e3,frontMatter:{title:"\u67b6\u6784"},sidebar:"mySidebar",previous:{title:"token",permalink:"/zh/cli/token"},next:{title:"\u96c6\u7fa4\u8bbf\u95ee",permalink:"/zh/cluster-access"}},o={},h=[{value:"\u5e26\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u5355\u670d\u52a1\u5668\u8bbe\u7f6e",id:"\u5e26\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u5355\u670d\u52a1\u5668\u8bbe\u7f6e",level:3},{value:"\u9ad8\u53ef\u7528 K3s",id:"\u9ad8\u53ef\u7528-k3s",level:3},{value:"Agent \u8282\u70b9\u7684\u56fa\u5b9a\u6ce8\u518c\u5730\u5740",id:"agent-\u8282\u70b9\u7684\u56fa\u5b9a\u6ce8\u518c\u5730\u5740",level:3},{value:"Agent \u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406",id:"agent-\u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406",level:3}];function u(e){const r={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{TabItem:l,Tabs:d}=r;return l||x("TabItem",!0),d||x("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4e86\u9ad8\u53ef\u7528\uff08HA\uff09K3s \u670d\u52a1\u5668\u96c6\u7fa4\u7684\u67b6\u6784\uff0c\u4ee5\u53ca K3s \u4e0e\u5355\u8282\u70b9\u670d\u52a1\u5668\u96c6\u7fa4\u7684\u533a\u522b\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u672c\u6587\u8fd8\u63cf\u8ff0\u4e86 Agent \u8282\u70b9\u662f\u5982\u4f55\u6ce8\u518c\u5230 K3s Server \u7684\u3002"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Server \u8282\u70b9\u6307\u7684\u662f\u8fd0\u884c ",(0,n.jsx)(r.code,{children:"k3s server"})," \u547d\u4ee4\u7684\u4e3b\u673a\uff0ccontrol plane \u548c\u6570\u636e\u5b58\u50a8\u7ec4\u4ef6\u7531 K3s \u7ba1\u7406\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["Agent \u8282\u70b9\u6307\u7684\u662f\u8fd0\u884c ",(0,n.jsx)(r.code,{children:"k3s agent"})," \u547d\u4ee4\u7684\u4e3b\u673a\uff0c\u4e0d\u5177\u6709\u4efb\u4f55\u6570\u636e\u5b58\u50a8\u6216 control plane \u7ec4\u4ef6\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["Server \u548c Agent \u90fd\u8fd0\u884c kubelet\u3001\u5bb9\u5668\u8fd0\u884c\u65f6\u548c CNI\u3002\u6709\u5173\u8fd0\u884c\u65e0 Agent \u7684 Server \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.jsx)(r.a,{href:"/zh/advanced#%E8%BF%90%E8%A1%8C%E6%97%A0-agent-%E7%9A%84-server%E5%AE%9E%E9%AA%8C%E6%80%A7",children:"\u9ad8\u7ea7\u9009\u9879"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:s(4530).Z+"",width:"1562",height:"898"})}),"\n",(0,n.jsx)(r.h3,{id:"\u5e26\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u5355\u670d\u52a1\u5668\u8bbe\u7f6e",children:"\u5e26\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u5355\u670d\u52a1\u5668\u8bbe\u7f6e"}),"\n",(0,n.jsx)(r.p,{children:"\u4e0b\u56fe\u663e\u793a\u4e86\u5177\u6709\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5e93\u7684\u5355\u8282\u70b9 K3s Server \u96c6\u7fa4\u793a\u4f8b\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u5728\u6b64\u914d\u7f6e\u4e2d\uff0c\u6bcf\u4e2a Agent \u8282\u70b9\u90fd\u6ce8\u518c\u5230\u540c\u4e00\u4e2a Server \u8282\u70b9\u3002K3s \u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 Server \u8282\u70b9\u4e0a\u7684 K3s API \u6765\u64cd\u4f5c Kubernetes \u8d44\u6e90\u3002"}),"\n",(0,n.jsx)(i.Z,{alt:"K3s Architecture with a Single Server",sources:{light:(0,c.Z)("/img/k3s-architecture-single-server.svg"),dark:(0,c.Z)("/img/k3s-architecture-single-server-dark.svg")}}),"\n",(0,n.jsx)(r.h3,{id:"\u9ad8\u53ef\u7528-k3s",children:"\u9ad8\u53ef\u7528 K3s"}),"\n",(0,n.jsx)(r.p,{children:"\u5355\u670d\u52a1\u5668\u96c6\u7fa4\u53ef\u4ee5\u6ee1\u8db3\u5404\u79cd\u7528\u4f8b\uff0c\u4f46\u5982\u679c\u4f60\u7684\u73af\u5883\u5bf9 Kubernetes control plane \u7684\u6b63\u5e38\u8fd0\u884c\u65f6\u95f4\u6709\u8981\u6c42\uff0c\u4f60\u53ef\u4ee5\u5728 HA \u914d\u7f6e\u4e2d\u8fd0\u884c K3s\u3002\u4e00\u4e2a\u9ad8\u53ef\u7528 K3s \u96c6\u7fa4\u5305\u62ec\uff1a"}),"\n",(0,n.jsxs)(d,{children:[(0,n.jsxs)(l,{value:"\u5d4c\u5165\u5f0f\u6570\u636e\u5e93",children:[(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u4e09\u4e2a\u6216\u591a\u4e2a ",(0,n.jsx)(r.strong,{children:"Server \u8282\u70b9"}),"\u4e3a Kubernetes API \u63d0\u4f9b\u670d\u52a1\u5e76\u8fd0\u884c\u5176\u4ed6 control plane \u670d\u52a1"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8"}),"\uff08\u4e0e\u5355\u8282\u70b9\u8bbe\u7f6e\u4e2d\u4f7f\u7528\u7684\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5b58\u50a8\u76f8\u53cd\uff09"]}),"\n"]}),(0,n.jsx)(i.Z,{alt:"K3s Architecture with High-availability Servers",sources:{light:(0,c.Z)("/img/k3s-architecture-ha-embedded.svg"),dark:(0,c.Z)("/img/k3s-architecture-ha-embedded-dark.svg")}})]}),(0,n.jsxs)(l,{value:"\u5916\u90e8\u6570\u636e\u5e93",children:[(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u4e24\u4e2a\u6216\u591a\u4e2a ",(0,n.jsx)(r.strong,{children:"Server \u8282\u70b9"}),"\u4e3a Kubernetes API \u63d0\u4f9b\u670d\u52a1\u5e76\u8fd0\u884c\u5176\u4ed6 control plane \u670d\u52a1"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u5916\u90e8\u6570\u636e\u5b58\u50a8"}),"\uff08\u4f8b\u5982 MySQL\u3001PostgreSQL \u6216 etcd\uff09"]}),"\n"]}),(0,n.jsx)(i.Z,{alt:"K3s Architecture with High-availability Servers and an External DB",sources:{light:(0,c.Z)("/img/k3s-architecture-ha-external.svg"),dark:(0,c.Z)("/img/k3s-architecture-ha-external-dark.svg")}})]})]}),"\n",(0,n.jsx)(r.h3,{id:"agent-\u8282\u70b9\u7684\u56fa\u5b9a\u6ce8\u518c\u5730\u5740",children:"Agent \u8282\u70b9\u7684\u56fa\u5b9a\u6ce8\u518c\u5730\u5740"}),"\n",(0,n.jsx)(r.p,{children:"\u5728 HA \u670d\u52a1\u5668\u914d\u7f6e\u4e2d\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u80fd\u4f7f\u7528\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740\u5411 Kubernetes API \u6ce8\u518c\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u6ce8\u518c\u540e\uff0cAgent \u8282\u70b9\u76f4\u63a5\u4e0e\u5176\u4e2d\u4e00\u4e2a Server \u8282\u70b9\u5efa\u7acb\u8fde\u63a5\u3002"}),"\n",(0,n.jsx)(i.Z,{alt:"Agent Registration HA",sources:{light:(0,c.Z)("/img/k3s-production-setup.svg"),dark:(0,c.Z)("/img/k3s-production-setup-dark.svg")}}),"\n",(0,n.jsx)(r.h3,{id:"agent-\u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406",children:"Agent \u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406"}),"\n",(0,n.jsxs)(r.p,{children:["Agent \u8282\u70b9\u901a\u8fc7 ",(0,n.jsx)(r.code,{children:"k3s agent"})," \u8fdb\u7a0b\u53d1\u8d77\u7684 WebSocket \u8fde\u63a5\u8fdb\u884c\u6ce8\u518c\uff0c\u8fde\u63a5\u7531\u4f5c\u4e3a agent \u8fdb\u7a0b\u4e00\u90e8\u5206\u8fd0\u884c\u7684\u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668\u7ef4\u62a4\u3002\u6700\u521d\uff0cAgent \u901a\u8fc7\u672c\u5730\u8d1f\u8f7d\u5747\u8861\u5668\u7aef\u53e3 6443 \u8fde\u63a5\u5230 supervisor\uff08\u548c kube-apiserver\uff09\u3002\u8d1f\u8f7d\u5747\u8861\u5668\u7ef4\u62a4\u4e86\u4e00\u4e2a\u8981\u8fde\u63a5\u7684\u53ef\u7528\u7aef\u70b9\u5217\u8868\u3002\u9ed8\u8ba4\uff08\u4e5f\u662f\u6700\u521d\u552f\u4e00\u7684\uff09\u7aef\u70b9\u6765\u6e90\u4e8e ",(0,n.jsx)(r.code,{children:"--server"})," \u5730\u5740\u4e2d\u7684\u4e3b\u673a\u540d\u3002\u8fde\u63a5\u5230\u96c6\u7fa4\u540e\uff0cAgent \u4f1a\u4ece\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Kubernetes Service \u7aef\u70b9\u5217\u8868\u4e2d\u68c0\u7d22 kube-apiserver \u5730\u5740\u5217\u8868\u3002\u8fd9\u4e9b\u7aef\u70b9\u6dfb\u52a0\u5230\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u7136\u540e\u8d1f\u8f7d\u5747\u8861\u5668\u5c06\u4fdd\u6301\u4e0e\u96c6\u7fa4\u4e2d\u6240\u6709 Server \u7a33\u5b9a\u8fde\u63a5\uff0c\u63d0\u4f9b\u4e0e kube-apiserver \u7684\u8fde\u63a5\uff0c\u4ece\u800c\u5bb9\u5fcd\u5355\u4e2a Server \u7684\u4e2d\u65ad\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["Agent \u5c06\u4f7f\u7528\u8282\u70b9\u96c6\u7fa4 Secret \u4ee5\u53ca\u968f\u673a\u751f\u6210\u7684\u8282\u70b9\u5bc6\u7801\u6ce8\u518c\u5230 Server\uff0c\u5bc6\u7801\u5b58\u50a8\u5728 ",(0,n.jsx)(r.code,{children:"/etc/rancher/node/password"})," \u4e2d\u3002Server \u4f1a\u5c06\u5404\u4e2a\u8282\u70b9\u7684\u5bc6\u7801\u5b58\u50a8\u4e3a Kubernetes Secret\uff0c\u540e\u7eed\u7684\u4efb\u4f55\u5c1d\u8bd5\u90fd\u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u5bc6\u7801\u3002\u8282\u70b9\u5bc6\u7801 Secret \u5b58\u50a8\u5728 ",(0,n.jsx)(r.code,{children:"kube-system"})," \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u540d\u79f0\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"<host>.node-password.k3s"})," \u6a21\u677f\u3002\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u4fdd\u62a4\u8282\u70b9 ID \u7684\u5b8c\u6574\u6027\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c Agent \u7684 ",(0,n.jsx)(r.code,{children:"/etc/rancher/node"})," \u76ee\u5f55\u88ab\u5220\u9664\uff0c\u6216\u8005\u4f60\u5e0c\u671b\u4f7f\u7528\u73b0\u6709\u540d\u79f0\u91cd\u65b0\u52a0\u5165\u8282\u70b9\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664\u8be5\u8282\u70b9\u3002\u8fd9\u5c06\u6e05\u9664\u65e7\u8282\u70b9\u6761\u76ee\u548c\u8282\u70b9\u5bc6\u7801 Secret\uff0c\u5e76\u5141\u8bb8\u8282\u70b9\uff08\u91cd\u65b0\uff09\u52a0\u5165\u96c6\u7fa4\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u7ecf\u5e38\u91cd\u590d\u4f7f\u7528\u4e3b\u673a\u540d\uff0c\u4f46\u65e0\u6cd5\u5220\u9664\u8282\u70b9\u5bc6\u7801 Secret\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"--with-node-id"})," \u6807\u5fd7\u542f\u52a8 K3s Server \u6216 Agent\uff0c\u4ece\u800c\u5c06\u552f\u4e00\u7684\u8282\u70b9 ID \u81ea\u52a8\u9644\u52a0\u5230\u4e3b\u673a\u540d\u3002\u542f\u7528\u540e\uff0c\u8282\u70b9 ID \u4e5f\u5b58\u50a8\u5728 ",(0,n.jsx)(r.code,{children:"/etc/rancher/node/"})," \u4e2d\u3002"]})]})}function g(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}function x(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4530:(e,r,s)=>{s.d(r,{Z:()=>n});const n=s.p+"assets/images/how-it-works-k3s-revised-9c025ef482404bca2e53a89a0ba7a3c5.svg"},1151:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>c});var n=s(7294);const t={},i=n.createContext(t);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);