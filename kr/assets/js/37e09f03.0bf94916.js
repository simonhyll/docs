"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6328],{7539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(5893),r=n(1151);const i={title:"Stopping K3s",weight:4},a=void 0,l={id:"upgrades/killall",title:"Stopping K3s",description:"To allow high availability during upgrades, the K3s containers continue running when the K3s service is stopped.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/upgrades/killall.md",sourceDirName:"upgrades",slug:"/upgrades/killall",permalink:"/kr/upgrades/killall",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/killall.md",tags:[],version:"current",lastUpdatedAt:1710311678,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"Stopping K3s",weight:4},sidebar:"mySidebar",previous:{title:"\uc5c5\uadf8\ub808\uc774\ub4dc",permalink:"/kr/upgrades/"},next:{title:"Manual Upgrades",permalink:"/kr/upgrades/manual"}},o={},c=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"To allow high availability during upgrades, the K3s containers continue running when the K3s service is stopped."}),"\n",(0,s.jsxs)(t.p,{children:["To stop all of the K3s containers and reset the containerd state, the ",(0,s.jsx)(t.code,{children:"k3s-killall.sh"})," script can be used."]}),"\n",(0,s.jsx)(t.p,{children:"The killall script cleans up containers, K3s directories, and networking components while also removing the iptables chain with all the associated rules. The cluster data will not be deleted."}),"\n",(0,s.jsx)(t.p,{children:"To run the killall script from a server node, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"/usr/local/bin/k3s-killall.sh\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var s=n(7294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);