"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7239],{4363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(5893),i=n(1151);const r={title:"Quick-Start Guide",weight:10},a=void 0,o={id:"quick-start",title:"Quick-Start Guide",description:"This guide will help you quickly launch a cluster with default options. The installation section covers in greater detail how K3s can be set up.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/quick-start.md",tags:[],version:"current",lastUpdatedAt:1710311678,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"Quick-Start Guide",weight:10},sidebar:"mySidebar",previous:{title:"K3s - Lightweight Kubernetes",permalink:"/"},next:{title:"Installation",permalink:"/installation/"}},l={},c=[{value:"Install Script",id:"install-script",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This guide will help you quickly launch a cluster with default options. The ",(0,s.jsx)(t.a,{href:"/installation/",children:"installation section"})," covers in greater detail how K3s can be set up."]}),"\n",(0,s.jsxs)(t.p,{children:["Make sure your nodes meet the the ",(0,s.jsx)(t.a,{href:"/installation/requirements",children:"requirements"})," before proceeding."]}),"\n",(0,s.jsxs)(t.p,{children:["For information on how K3s components work together, refer to the ",(0,s.jsx)(t.a,{href:"/architecture",children:"architecture section."})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["New to Kubernetes? The official Kubernetes docs already have some great tutorials outlining the basics ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/",children:"here"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"install-script",children:"Install Script"}),"\n",(0,s.jsxs)(t.p,{children:["K3s provides an installation script that is a convenient way to install it as a service on systemd or openrc based systems. This script is available at ",(0,s.jsx)(t.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"}),". To install K3s using this method, just run:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,s.jsx)(t.p,{children:"After running this installation:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The K3s service will be configured to automatically restart after node reboots or if the process crashes or is killed"}),"\n",(0,s.jsxs)(t.li,{children:["Additional utilities will be installed, including ",(0,s.jsx)(t.code,{children:"kubectl"}),", ",(0,s.jsx)(t.code,{children:"crictl"}),", ",(0,s.jsx)(t.code,{children:"ctr"}),", ",(0,s.jsx)(t.code,{children:"k3s-killall.sh"}),", and ",(0,s.jsx)(t.code,{children:"k3s-uninstall.sh"})]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"kubeconfig"})," file will be written to ",(0,s.jsx)(t.code,{children:"/etc/rancher/k3s/k3s.yaml"})," and the kubectl installed by K3s will automatically use it"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"A single-node server installation is a fully-functional Kubernetes cluster, including all the datastore, control-plane, kubelet, and container runtime components necessary to host workload pods. It is not necessary to add additional server or agents nodes, but you may want to do so to add additional capacity or redundancy to your cluster."}),"\n",(0,s.jsxs)(t.p,{children:["To install additional agent nodes and add them to the cluster, run the installation script with the ",(0,s.jsx)(t.code,{children:"K3S_URL"})," and ",(0,s.jsx)(t.code,{children:"K3S_TOKEN"})," environment variables. Here is an example showing how to join an agent:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Setting the ",(0,s.jsx)(t.code,{children:"K3S_URL"})," parameter causes the installer to configure K3s as an agent, instead of a server. The K3s agent will register with the K3s server listening at the supplied URL. The value to use for ",(0,s.jsx)(t.code,{children:"K3S_TOKEN"})," is stored at ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/node-token"})," on your server node."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Each machine must have a unique hostname. If your machines do not have unique hostnames, pass the ",(0,s.jsx)(t.code,{children:"K3S_NODE_NAME"})," environment variable and provide a value with a valid and unique hostname for each node."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);