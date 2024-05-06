"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5927],{2589:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=s(5893),r=s(1151),i=s(9965),a=s(4996);const o={title:"Architecture"},d=void 0,c={id:"architecture",title:"Architecture",description:"Servers and Agents",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/architecture.md",tags:[],version:"current",lastUpdatedAt:1715027917e3,frontMatter:{title:"Architecture"},sidebar:"mySidebar",previous:{title:"token",permalink:"/cli/token"},next:{title:"Cluster Access",permalink:"/cluster-access"}},l={},h=[{value:"Servers and Agents",id:"servers-and-agents",level:3},{value:"Single-server Setup with an Embedded DB",id:"single-server-setup-with-an-embedded-db",level:3},{value:"High-Availability K3s",id:"high-availability-k3s",level:3},{value:"Fixed Registration Address for Agent Nodes",id:"fixed-registration-address-for-agent-nodes",level:3},{value:"How Agent Node Registration Works",id:"how-agent-node-registration-works",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{TabItem:o,Tabs:d}=t;return o||v("TabItem",!0),d||v("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"servers-and-agents",children:"Servers and Agents"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A server node is defined as a host running the ",(0,n.jsx)(t.code,{children:"k3s server"})," command, with control-plane and datastore components managed by K3s."]}),"\n",(0,n.jsxs)(t.li,{children:["An agent node is defined as a host running the ",(0,n.jsx)(t.code,{children:"k3s agent"})," command, without any datastore or control-plane components."]}),"\n",(0,n.jsxs)(t.li,{children:["Both servers and agents run the kubelet, container runtime, and CNI. See the ",(0,n.jsx)(t.a,{href:"/advanced#running-agentless-servers-experimental",children:"Advanced Options"})," documentation for more information on running agentless servers."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(4530).Z+"",width:"1562",height:"898"})}),"\n",(0,n.jsx)(t.h3,{id:"single-server-setup-with-an-embedded-db",children:"Single-server Setup with an Embedded DB"}),"\n",(0,n.jsx)(t.p,{children:"The following diagram shows an example of a cluster that has a single-node K3s server with an embedded SQLite database."}),"\n",(0,n.jsx)(t.p,{children:"In this configuration, each agent node is registered to the same server node. A K3s user can manipulate Kubernetes resources by calling the K3s API on the server node."}),"\n",(0,n.jsx)(i.Z,{alt:"K3s Architecture with a Single Server",sources:{light:(0,a.Z)("/img/k3s-architecture-single-server.svg"),dark:(0,a.Z)("/img/k3s-architecture-single-server-dark.svg")}}),"\n",(0,n.jsx)(t.h3,{id:"high-availability-k3s",children:"High-Availability K3s"}),"\n",(0,n.jsx)(t.p,{children:"Single server clusters can meet a variety of use cases, but for environments where uptime of the Kubernetes control plane is critical, you can run K3s in an HA configuration. An HA K3s cluster comprises:"}),"\n",(0,n.jsxs)(d,{children:[(0,n.jsxs)(o,{value:"Embedded DB",children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Three or more ",(0,n.jsx)(t.strong,{children:"server nodes"})," that will serve the Kubernetes API and run other control plane services"]}),"\n",(0,n.jsxs)(t.li,{children:["An ",(0,n.jsx)(t.strong,{children:"embedded etcd datastore"})," (as opposed to the embedded SQLite datastore used in single-server setups)"]}),"\n"]}),(0,n.jsx)(i.Z,{alt:"K3s Architecture with High-availability Servers",sources:{light:(0,a.Z)("/img/k3s-architecture-ha-embedded.svg"),dark:(0,a.Z)("/img/k3s-architecture-ha-embedded-dark.svg")}})]}),(0,n.jsxs)(o,{value:"External DB",children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Two or more ",(0,n.jsx)(t.strong,{children:"server nodes"})," that will serve the Kubernetes API and run other control plane services"]}),"\n",(0,n.jsxs)(t.li,{children:["An ",(0,n.jsx)(t.strong,{children:"external datastore"})," (such as MySQL, PostgreSQL, or etcd)"]}),"\n"]}),(0,n.jsx)(i.Z,{alt:"K3s Architecture with High-availability Servers and an External DB",sources:{light:(0,a.Z)("/img/k3s-architecture-ha-external.svg"),dark:(0,a.Z)("/img/k3s-architecture-ha-external-dark.svg")}})]})]}),"\n",(0,n.jsx)(t.h3,{id:"fixed-registration-address-for-agent-nodes",children:"Fixed Registration Address for Agent Nodes"}),"\n",(0,n.jsx)(t.p,{children:"In the high-availability server configuration, each node can also register with the Kubernetes API by using a fixed registration address, as shown in the diagram below."}),"\n",(0,n.jsx)(t.p,{children:"After registration, the agent nodes establish a connection directly to one of the server nodes."}),"\n",(0,n.jsx)(i.Z,{alt:"Agent Registration HA",sources:{light:(0,a.Z)("/img/k3s-production-setup.svg"),dark:(0,a.Z)("/img/k3s-production-setup-dark.svg")}}),"\n",(0,n.jsx)(t.h3,{id:"how-agent-node-registration-works",children:"How Agent Node Registration Works"}),"\n",(0,n.jsxs)(t.p,{children:["Agent nodes are registered with a websocket connection initiated by the ",(0,n.jsx)(t.code,{children:"k3s agent"})," process, and the connection is maintained by a client-side load balancer running as part of the agent process. Initially, the agent connects to the supervisor (and kube-apiserver) via the local load-balancer on port 6443. The load-balancer maintains a list of available endpoints to connect to. The default (and initially only) endpoint is seeded by the hostname from the ",(0,n.jsx)(t.code,{children:"--server"})," address. Once it connects to the cluster, the agent retrieves a list of kube-apiserver addresses from the Kubernetes service endpoint list in the default namespace. Those endpoints are added to the load balancer, which then maintains stable connections to all servers in the cluster, providing a connection to the kube-apiserver that tolerates outages of individual servers."]}),"\n",(0,n.jsxs)(t.p,{children:["Agents will register with the server using the node cluster secret along with a randomly generated password for the node, stored at ",(0,n.jsx)(t.code,{children:"/etc/rancher/node/password"}),". The server will store the passwords for individual nodes as Kubernetes secrets, and any subsequent attempts must use the same password. Node password secrets are stored in the ",(0,n.jsx)(t.code,{children:"kube-system"})," namespace with names using the template ",(0,n.jsx)(t.code,{children:"<host>.node-password.k3s"}),". This is done to protect the integrity of node IDs."]}),"\n",(0,n.jsxs)(t.p,{children:["If the ",(0,n.jsx)(t.code,{children:"/etc/rancher/node"})," directory of an agent is removed, or you wish to rejoin a node using an existing name, the node should be deleted from the cluster. This will clean up both the old node entry, and the node password secret, and allow the node to (re)join the cluster."]}),"\n",(0,n.jsxs)(t.p,{children:["If you frequently reuse hostnames, but are unable to remove the node password secrets, a unique node ID can be automatically appended to the hostname by launching K3s servers or agents using the ",(0,n.jsx)(t.code,{children:"--with-node-id"})," flag. When enabled, the node ID is also stored in ",(0,n.jsx)(t.code,{children:"/etc/rancher/node/"}),"."]})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}function v(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4530:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/how-it-works-k3s-revised-9c025ef482404bca2e53a89a0ba7a3c5.svg"},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var n=s(7294);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);