"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6094],{5904:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=n(5893),r=n(1151);const c={title:"\ube60\ub978 \uc2dc\uc791 \uac00\uc774\ub4dc",weight:10},i=void 0,o={id:"quick-start",title:"\ube60\ub978 \uc2dc\uc791 \uac00\uc774\ub4dc",description:"\uc774 \uac00\uc774\ub4dc\ub294 \uae30\ubcf8 \uc635\uc158\uc73c\ub85c \ud074\ub7ec\uc2a4\ud130\ub97c \ube60\ub974\uac8c \uc2dc\uc791\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \uc124\uce58 \uc139\uc158\uc5d0\uc11c\ub294 K3s\ub97c \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/kr/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/quick-start.md",tags:[],version:"current",lastUpdatedAt:1710311678,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"\ube60\ub978 \uc2dc\uc791 \uac00\uc774\ub4dc",weight:10},sidebar:"mySidebar",previous:{title:"K3s - Lightweight Kubernetes",permalink:"/kr/"},next:{title:"Installation",permalink:"/kr/installation/"}},l={},d=[{value:"\uc124\uce58 \uc2a4\ud06c\ub9bd\ud2b8",id:"\uc124\uce58-\uc2a4\ud06c\ub9bd\ud2b8",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["\uc774 \uac00\uc774\ub4dc\ub294 \uae30\ubcf8 \uc635\uc158\uc73c\ub85c \ud074\ub7ec\uc2a4\ud130\ub97c \ube60\ub974\uac8c \uc2dc\uc791\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. ",(0,t.jsx)(s.a,{href:"/kr/installation/",children:"\uc124\uce58 \uc139\uc158"}),"\uc5d0\uc11c\ub294 K3s\ub97c \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc124\uba85\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(s.p,{children:["K3s \uad6c\uc131 \uc694\uc18c\ub4e4\uc774 \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,t.jsx)(s.a,{href:"/kr/architecture",children:"\uc544\ud0a4\ud14d\ucc98 \uc139\uc158"}),"\uc744 \ucc38\uc870\ud558\uc138\uc694."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["Kubernetes\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud558\uc2dc\ub098\uc694?\n\uacf5\uc2dd \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ubb38\uc11c\uc5d0\ub294 \uc774\ubbf8 \uae30\ubcf8 \uc0ac\ud56d\uc744 \uc124\uba85\ud558\ub294 \ud6cc\ub96d\ud55c \ud29c\ud1a0\ub9ac\uc5bc\uc774 ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/ko/docs/tutorials/kubernetes-basics/",children:"\uc5ec\uae30"})," \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(s.h2,{id:"\uc124\uce58-\uc2a4\ud06c\ub9bd\ud2b8",children:"\uc124\uce58 \uc2a4\ud06c\ub9bd\ud2b8"}),"\n",(0,t.jsxs)(s.p,{children:["K3s\ub294 systemd \ub610\ub294 openrc \uae30\ubc18 \uc2dc\uc2a4\ud15c\uc5d0 \uc11c\ube44\uc2a4\ub85c \uc124\uce58\ud558\ub294 \ud3b8\ub9ac\ud55c \ubc29\ubc95\uc73c\ub85c \uc124\uce58 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \uc2a4\ud06c\ub9bd\ud2b8\ub294 ",(0,t.jsx)(s.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"})," \uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubc29\ubc95\uc73c\ub85c K3s\ub97c \uc124\uce58\ud558\ub824\uba74, \uac04\ub2e8\ud558\uac8c \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc138\uc694:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,t.jsx)(s.p,{children:"\uc774 \uc124\uce58\ub97c \uc2e4\ud589\ud55c \ud6c4:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\ub178\ub4dc\uac00 \uc7ac\ubd80\ud305\ub418\uac70\ub098 \ud504\ub85c\uc138\uc2a4\uac00 \ucda9\ub3cc \ub610\ub294 \uc885\ub8cc\ub41c \uacbd\uc6b0 \uc790\ub3d9\uc73c\ub85c \uc7ac\uc2dc\uc791\ub418\ub3c4\ub85d K3s \uc11c\ube44\uc2a4\uac00 \uad6c\uc131\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"kubectl"}),", ",(0,t.jsx)(s.code,{children:"crictl"}),", ",(0,t.jsx)(s.code,{children:"ctr"}),", ",(0,t.jsx)(s.code,{children:"k3s-killall.sh"})," \ubc0f ",(0,t.jsx)(s.code,{children:"k3s-uninstall.sh"}),"\ub97c \ud3ec\ud568\ud55c \ucd94\uac00 \uc720\ud2f8\ub9ac\ud2f0\uac00 \uc124\uce58\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/etc/rancher/k3s/k3s.yaml"}),"\uc5d0 ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/ko/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"kubeconfig"})," \ud30c\uc77c\uc744 \uc791\uc131\ud558\uace0, K3s\uac00 \uc124\uce58\ud55c kubectl\uc774 \uc790\ub3d9\uc73c\ub85c \uc774\ub97c \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\ub2e8\uc77c \ub178\ub4dc \uc11c\ubc84 \uc124\uce58\ub294 \uc6cc\ud06c\ub85c\ub4dc \ud30c\ub4dc\ub97c \ud638\uc2a4\ud305\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4, \ucee8\ud2b8\ub864 \ud50c\ub808\uc778, kubelet \ubc0f \ucee8\ud14c\uc774\ub108 \ub7f0\ud0c0\uc784 \uad6c\uc131 \uc694\uc18c\ub97c \ud3ec\ud568\ud558\uc5ec \ubaa8\ub4e0 \uae30\ub2a5\uc744 \uac16\ucd98 Kubernetes \ud074\ub7ec\uc2a4\ud130\uc785\ub2c8\ub2e4. \uc11c\ubc84 \ub610\ub294 \uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\ub97c \ucd94\uac00\ud560 \ud544\uc694\ub294 \uc5c6\uc9c0\ub9cc, \ud074\ub7ec\uc2a4\ud130\uc5d0 \ucd94\uac00 \uc6a9\ub7c9 \ub610\ub294 \uc911\ubcf5\uc131\uc744 \ucd94\uac00\ud558\uae30 \uc704\ud574 \ucd94\uac00\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(s.p,{children:["\uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\ub97c \ucd94\uac00\ub85c \uc124\uce58\ud558\uc5ec \ud074\ub7ec\uc2a4\ud130\uc5d0 \ucd94\uac00\ud558\ub824\uba74, ",(0,t.jsx)(s.code,{children:"K3S_URL"})," \ubc0f ",(0,t.jsx)(s.code,{children:"K3S_TOKEN"})," \ud658\uacbd \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc124\uce58 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uc5d0\uc774\uc804\ud2b8 \uac00\uc785 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"K3S_URL"})," \ud30c\ub77c\ubbf8\ud130\ub97c \uc124\uc815\ud558\uba74 \uc778\uc2a4\ud1a8\ub7ec\uac00 K3s\ub97c \uc11c\ubc84\uac00 \uc544\ub2cc \uc5d0\uc774\uc804\ud2b8\ub85c \uad6c\uc131\ud569\ub2c8\ub2e4. K3s \uc5d0\uc774\uc804\ud2b8\ub294 \uc81c\uacf5\ub41c URL\uc5d0\uc11c \uc218\uc2e0 \ub300\uae30 \uc911\uc778 K3s \uc11c\ubc84\uc5d0 \ub4f1\ub85d\ub429\ub2c8\ub2e4. ",(0,t.jsx)(s.code,{children:"K3S_TOKEN"}),"\uc5d0 \uc0ac\uc6a9\ud560 \uac12\uc740 \uc11c\ubc84 \ub178\ub4dc\uc758 ",(0,t.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/node-token"}),"\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["\uac01 \uba38\uc2e0\uc740 \uace0\uc720\ud55c \ud638\uc2a4\ud2b8 \uc774\ub984\uc744 \uac00\uc838\uc57c \ud569\ub2c8\ub2e4. \uba38\uc2e0\uc5d0 \uace0\uc720 \ud638\uc2a4\ud2b8\uba85\uc774 \uc5c6\ub294 \uacbd\uc6b0, ",(0,t.jsx)(s.code,{children:"K3S_NODE_NAME"})," \ud658\uacbd \ubcc0\uc218\ub97c \uc804\ub2ec\ud558\uace0 \uac01 \ub178\ub4dc\uc5d0 \ub300\ud574 \uc720\ud6a8\ud55c \uace0\uc720 \ud638\uc2a4\ud2b8\uba85\uc774 \uc788\ub294 \uac12\uc744 \uc81c\uacf5\ud558\uc138\uc694."]})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var t=n(7294);const r={},c=t.createContext(r);function i(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);