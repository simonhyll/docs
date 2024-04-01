"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9606],{837:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var n=s(5893),t=s(1151);const r={title:"\u96c6\u7fa4\u8bbf\u95ee",weight:21},l=void 0,a={id:"cluster-access",title:"\u96c6\u7fa4\u8bbf\u95ee",description:"/etc/rancher/k3s/k3s.yaml \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86\u4e0a\u6e38\u7684 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff08\u5982 kubectl \u6216 helm)\uff0c\u4f60\u9700\u8981\u7528\u6b63\u786e\u7684 kubeconfig \u8def\u5f84\u914d\u7f6e\u5b83\u4eec\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5bfc\u51fa KUBECONFIG \u73af\u5883\u53d8\u91cf\u6216\u8c03\u7528 --kubeconfig \u547d\u4ee4\u884c\u6807\u5fd7\u6765\u5b8c\u6210\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u793a\u4f8b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cluster-access.md",sourceDirName:".",slug:"/cluster-access",permalink:"/zh/cluster-access",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cluster-access.md",tags:[],version:"current",lastUpdatedAt:1712009246e3,frontMatter:{title:"\u96c6\u7fa4\u8bbf\u95ee",weight:21},sidebar:"mySidebar",previous:{title:"\u67b6\u6784",permalink:"/zh/architecture"},next:{title:"\u5377\u548c\u5b58\u50a8",permalink:"/zh/storage"}},o={},i=[{value:"\u4f7f\u7528 kubectl \u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",id:"\u4f7f\u7528-kubectl-\u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",level:3}];function u(e){const c={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"/etc/rancher/k3s/k3s.yaml"})," \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86\u4e0a\u6e38\u7684 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff08\u5982 kubectl \u6216 helm)\uff0c\u4f60\u9700\u8981\u7528\u6b63\u786e\u7684 kubeconfig \u8def\u5f84\u914d\u7f6e\u5b83\u4eec\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5bfc\u51fa ",(0,n.jsx)(c.code,{children:"KUBECONFIG"})," \u73af\u5883\u53d8\u91cf\u6216\u8c03\u7528 ",(0,n.jsx)(c.code,{children:"--kubeconfig"})," \u547d\u4ee4\u884c\u6807\u5fd7\u6765\u5b8c\u6210\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u793a\u4f8b\u3002"]}),"\n",(0,n.jsx)(c.p,{children:"\u4f7f\u7528 KUBECONFIG \u73af\u5883\u53d8\u91cf\uff1a"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"export KUBECONFIG=/etc/rancher/k3s/k3s.yaml\nkubectl get pods --all-namespaces\nhelm ls --all-namespaces\n"})}),"\n",(0,n.jsx)(c.p,{children:"\u6216\u8005\u5728\u547d\u4ee4\u4e2d\u6307\u5b9a kubeconfig \u6587\u4ef6\u7684\u4f4d\u7f6e\uff1a"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl --kubeconfig /etc/rancher/k3s/k3s.yaml get pods --all-namespaces\nhelm --kubeconfig /etc/rancher/k3s/k3s.yaml ls --all-namespaces\n"})}),"\n",(0,n.jsx)(c.h3,{id:"\u4f7f\u7528-kubectl-\u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",children:"\u4f7f\u7528 kubectl \u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4"}),"\n",(0,n.jsxs)(c.p,{children:["\u5c06 ",(0,n.jsx)(c.code,{children:"/etc/rancher/k3s/k3s.yaml"})," \u590d\u5236\u5230\u4f4d\u4e8e\u96c6\u7fa4\u5916\u90e8\u7684\u4e3b\u673a\u4e0a\u7684 ",(0,n.jsx)(c.code,{children:"~/.kube/config"}),"\u3002\u7136\u540e\uff0c\u5c06 ",(0,n.jsx)(c.code,{children:"server"})," \u5b57\u6bb5\u7684\u503c\u66ff\u6362\u4e3a\u4f60 K3s Server \u7684 IP \u6216\u540d\u79f0\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(c.code,{children:"kubectl"})," \u6765\u7ba1\u7406 K3s \u96c6\u7fa4\u3002"]})]})}function d(e={}){const{wrapper:c}={...(0,t.a)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,c,s)=>{s.d(c,{Z:()=>a,a:()=>l});var n=s(7294);const t={},r=n.createContext(t);function l(e){const c=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function a(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:c},e.children)}}}]);