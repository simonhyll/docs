"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2409],{3754:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>n,metadata:()=>h,toc:()=>c});var t=i(5893),r=i(1151);const n={hide_table_of_contents:!0,sidebar_position:1},l="v1.29.X",h={id:"release-notes/v1.29.X",title:"v1.29.X",description:"Before upgrading from earlier releases, be sure to read the Kubernetes Urgent Upgrade Notes.",source:"@site/docs/release-notes/v1.29.X.md",sourceDirName:"release-notes",slug:"/release-notes/v1.29.X",permalink:"/release-notes/v1.29.X",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/release-notes/v1.29.X.md",tags:[],version:"current",lastUpdatedAt:1710311678,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:1,frontMatter:{hide_table_of_contents:!0,sidebar_position:1},sidebar:"mySidebar",previous:{title:"Resource Profiling",permalink:"/reference/resource-profiling"},next:{title:"v1.28.X",permalink:"/release-notes/v1.28.X"}},o={},c=[{value:"Release v1.29.2+k3s1",id:"release-v1292k3s1",level:2},{value:"Changes since v1.29.1+k3s2:",id:"changes-since-v1291k3s2",level:3},{value:"Release v1.29.1+k3s2",id:"release-v1291k3s2",level:2},{value:"Changes since v1.29.0+k3s1:",id:"changes-since-v1290k3s1",level:3},{value:"Release v1.29.0+k3s1",id:"release-v1290k3s1",level:2},{value:"Changes since v1.28.4+k3s2:",id:"changes-since-v1284k3s2",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"v129x",children:"v1.29.X"}),"\n",(0,t.jsx)(s.admonition,{title:"Upgrade Notice",type:"warning",children:(0,t.jsxs)(s.p,{children:["Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,t.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#urgent-upgrade-notes",children:"Urgent Upgrade Notes"}),"."]})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Version"}),(0,t.jsx)(s.th,{children:"Release date"}),(0,t.jsx)(s.th,{children:"Kubernetes"}),(0,t.jsx)(s.th,{children:"Kine"}),(0,t.jsx)(s.th,{children:"SQLite"}),(0,t.jsx)(s.th,{children:"Etcd"}),(0,t.jsx)(s.th,{children:"Containerd"}),(0,t.jsx)(s.th,{children:"Runc"}),(0,t.jsx)(s.th,{children:"Flannel"}),(0,t.jsx)(s.th,{children:"Metrics-server"}),(0,t.jsx)(s.th,{children:"Traefik"}),(0,t.jsx)(s.th,{children:"CoreDNS"}),(0,t.jsx)(s.th,{children:"Helm-controller"}),(0,t.jsx)(s.th,{children:"Local-path-provisioner"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/release-notes/v1.29.X#release-v1292k3s1",children:"v1.29.2+k3s1"})}),(0,t.jsx)(s.td,{children:"Feb 29 2024"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#v1292",children:"v1.29.2"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.4",children:"v0.11.4"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.11-k3s2",children:"v1.7.11-k3s2"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/runc/releases/tag/v1.1.12-k3s1",children:"v1.1.12-k3s1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.24.2",children:"v0.24.2"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3",children:"v0.6.3"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.5",children:"v2.10.5"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.8",children:"v0.15.8"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.26",children:"v0.0.26"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/release-notes/v1.29.X#release-v1291k3s2",children:"v1.29.1+k3s2"})}),(0,t.jsx)(s.td,{children:"Feb 06 2024"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#v1291",children:"v1.29.1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.0",children:"v0.11.0"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_42_0.html",children:"3.42.0"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.11-k3s2",children:"v1.7.11-k3s2"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12-k3s1",children:"v1.1.12-k3s1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.24.0",children:"v0.24.0"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3",children:"v0.6.3"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.5",children:"v2.10.5"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.8",children:"v0.15.8"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.24",children:"v0.0.24"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/release-notes/v1.29.X#release-v1290k3s1",children:"v1.29.0+k3s1"})}),(0,t.jsx)(s.td,{children:"Dec 22 2023"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#v1290",children:"v1.29.0"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.0",children:"v0.11.0"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_42_0.html",children:"3.42.0"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.11-k3s2",children:"v1.7.11-k3s2"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.10",children:"v1.1.10"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.24.0",children:"v0.24.0"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3",children:"v0.6.3"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.5",children:"v2.10.5"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.4",children:"v0.15.4"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.24",children:"v0.0.24"})})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.h2,{id:"release-v1292k3s1",children:["Release ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.29.2+k3s1",children:"v1.29.2+k3s1"})]}),"\n",(0,t.jsx)(s.p,{children:"This release updates Kubernetes to v1.29.2, and fixes a number of issues."}),"\n",(0,t.jsxs)(s.p,{children:["For more details on what's new, see the ",(0,t.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#changelog-since-v1291",children:"Kubernetes release notes"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"changes-since-v1291k3s2",children:"Changes since v1.29.1+k3s2:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Bump Local Path Provisioner version ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8953",children:"(#8953)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add ability to install K3s PR Artifact from GitHub ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9185",children:"(#9185)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Adds ",(0,t.jsx)(s.code,{children:"INSTALL_K3S_PR"})," option to install a build of K3s from any open PR with CI approval"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Bump Trivy version ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9237",children:"(#9237)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Bump codecov/codecov-action from 3 to 4 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9353",children:"(#9353)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Update stable channel ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9388",children:"(#9388)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix snapshot reconcile retry ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9318",children:"(#9318)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add check for etcd-snapshot-dir and fix panic in Walk ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9317",children:"(#9317)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Bump CNI plugins to v1.4.0 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9249",children:"(#9249)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix issue with coredns node hosts controller ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9354",children:"(#9354)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Fixed issue that could cause coredns pods to fail to start when the embedded helm controller is disabled, due to the configmap not being updated with node hosts entries."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Fix on-demand snapshots on ipv6-only nodes ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9247",children:"(#9247)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Bump flannel version ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9395",children:"(#9395)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Bumped flannel to v0.24.2"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Build: Align drone base images ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8959",children:"(#8959)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Changed how lastHeartBeatTime works in the etcd condition ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9263",children:"(#9263)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Runtimes refactor using exec.LookPath ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9311",children:"(#9311)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Directories containing runtimes need to be included in the $PATH environment variable for effective runtime detection."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Bump cri-dockerd to fix compat with Docker Engine 25 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9290",children:"(#9290)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add codcov secret for integration tests on Push ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9422",children:"(#9422)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Allow executors to define ",(0,t.jsx)(s.code,{children:"containerd"})," and ",(0,t.jsx)(s.code,{children:"cridockerd"})," behavior ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9184",children:"(#9184)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Update Kube-router to v2.0.1 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9396",children:"(#9396)"})]}),"\n",(0,t.jsxs)(s.li,{children:[": Test_UnitApplyContainerdQoSClassConfigFileIfPresent (Created) ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8945",children:"(#8945)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Readd ",(0,t.jsx)(s.code,{children:"k3s secrets-encrypt rotate-keys"})," with correct support for KMSv2 GA ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9340",children:"(#9340)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix iptables check when sbin isn't in user PATH ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9344",children:"(#9344)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Don't create NodePasswordValidationFailed event if agent is disabled ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9312",children:"(#9312)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"NodePasswordValidationFailed"})," Events will no longer be emitted, if the agent is disabled."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Expose rootless state dir under ~/.rancher/k3s/rootless ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9308",children:"(#9308)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["When running k3s in rootless mode, expose rootlesskit's state directory as ",(0,t.jsx)(s.code,{children:"~/.rancher/k3s/rootless"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Expose rootless containerd socket directories for external access ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9309",children:"(#9309)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Mount k3s rootless containerd & cri-dockerd socket directories to ",(0,t.jsx)(s.code,{children:"$XDG_RUNTIME_DIR/k3s/containerd"})," and ",(0,t.jsx)(s.code,{children:"$XDG_RUNTIME_DIR/k3s/cri-dockerd"})," respectively."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Bump kine and set NotifyInterval to what the apiserver expects ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9349",children:"(#9349)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Update Kubernetes to v1.29.2 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9493",children:"(#9493)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix drone publish for arm ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9503",children:"(#9503)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Remove failing Drone step ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9517",children:"(#9517)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Restore original order of agent startup functions ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9539",children:"(#9539)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix netpol startup when flannel is disabled ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9571",children:"(#9571)"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.h2,{id:"release-v1291k3s2",children:["Release ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.29.1+k3s2",children:"v1.29.1+k3s2"})]}),"\n",(0,t.jsx)(s.p,{children:"This release updates Kubernetes to v1.29.1, and fixes a number of issues."}),"\n",(0,t.jsxs)(s.p,{children:["For more details on what's new, see the ",(0,t.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#changelog-since-v1290",children:"Kubernetes release notes"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Important Notes"})}),"\n",(0,t.jsxs)(s.p,{children:["Addresses the runc CVE: ",(0,t.jsx)(s.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2024-21626",children:"CVE-2024-21626"})," by updating runc to v1.1.12."]}),"\n",(0,t.jsx)(s.h3,{id:"changes-since-v1290k3s1",children:"Changes since v1.29.0+k3s1:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Bump Sonobuoy version ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8910",children:"(#8910)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Bump actions/setup-go from 4 to 5 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9036",children:"(#9036)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Chore: Update Code of Conduct to Redirect to CNCF CoC ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9104",children:"(#9104)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"NONE"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Update stable channel to v1.28.5+k3s1 and add v1.29 channel ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9110",children:"(#9110)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Added support for env *_PROXY variables for agent loadbalancer ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9070",children:"(#9070)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"HTTP_PROXY, HTTPS_PROXY and NO_PROXY environment variables are now taken into account by the agent loadbalancer if K3S_AGENT_HTTP_PROXY_ALLOWED env variable is set to true."}),"\n",(0,t.jsxs)(s.li,{children:["This however doesn't affect local requests as the function used prevents that: ",(0,t.jsx)(s.a,{href:"https://pkg.go.dev/net/http#ProxyFromEnvironment",children:"https://pkg.go.dev/net/http#ProxyFromEnvironment"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Add a retry around updating a secrets-encrypt node annotations ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9039",children:"(#9039)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Silence SELinux warning on INSTALL_K3S_SKIP_SELINUX_RPM ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8703",children:"(#8703)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add ServiceLB support for PodHostIPs FeatureGate ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8917",children:"(#8917)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Added support for env *_PROXY variables for agent loadbalancer ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9118",children:"(#9118)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Redirect error stream to null when checking nm-cloud systemd unit ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8815",children:"(#8815)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Remove confusing "nm-cloud-setup.service: No such file or directory" journalctl log'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Dockerfile.dapper: set $HOME properly ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9090",children:"(#9090)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add system-agent-installer-k3s step to GA release instructions ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9153",children:"(#9153)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix install script checksum ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9159",children:"(#9159)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix the OTHER etcd snapshot s3 log message that prints the wrong variable ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8944",children:"(#8944)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Handle logging flags when parsing kube-proxy args ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8916",children:"(#8916)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix nil map in full snapshot configmap reconcile ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9049",children:"(#9049)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add support for containerd cri registry config_path ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8973",children:"(#8973)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add more paths to crun runtime detection ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9086",children:"(#9086)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add runtime checking of golang version ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9054",children:"(#9054)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix OS PRETTY_NAME on tagged releases ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9062",children:"(#9062)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Print error when downloading file error inside install script ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/6874",children:"(#6874)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Wait for cloud-provider taint to be gone before starting the netpol controller ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9076",children:"(#9076)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Bump Trivy version ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8812",children:"(#8812)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Use ",(0,t.jsx)(s.code,{children:"ipFamilyPolicy: RequireDualStack"})," for dual-stack kube-dns ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8984",children:"(#8984)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Handle etcd status condition when node is not ready and disable etcd ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9084",children:"(#9084)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Update s3 e2e test ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9025",children:"(#9025)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add e2e startup test for rootless k3s ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8383",children:"(#8383)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add spegel distributed registry mirror ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8977",children:"(#8977)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Bump quic-go for CVE-2023-49295 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9208",children:"(#9208)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Enable network policy controller metrics ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9195",children:"(#9195)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Kube-router network policy controller metrics are now exposed via the default node metrics endpoint"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Fix nonexistent dependency repositories ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9213",children:"(#9213)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Move proxy dialer out of init() and fix crash when using ",(0,t.jsx)(s.code,{children:"K3S_AGENT_HTTP_PROXY_ALLOWED=true"})," ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9219",children:"(#9219)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Error getting node in setEtcdStatusCondition ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9210",children:"(#9210)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Update to v1.29.1 and Go 1.21.6 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9259",children:"(#9259)"})]}),"\n",(0,t.jsxs)(s.li,{children:["New stale action ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9278",children:"(#9278)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix handling of bare hostname or IP as endpoint address in registries.yaml ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9323",children:"(#9323)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Bump runc to v1.1.12 and helm-controller to v0.15.7 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9332",children:"(#9332)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Bump helm-controller to fix issue with ChartContent ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9345",children:"(#9345)"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.h2,{id:"release-v1290k3s1",children:["Release ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.29.0+k3s1",children:"v1.29.0+k3s1"})]}),"\n",(0,t.jsx)(s.p,{children:"This release is K3S's first in the v1.29 line. This release updates Kubernetes to v1.29.0."}),"\n",(0,t.jsxs)(s.p,{children:["Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,t.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#urgent-upgrade-notes",children:"Urgent Upgrade Notes"}),"."]}),"\n",(0,t.jsx)(s.admonition,{title:"Important",type:"warning",children:(0,t.jsxs)(s.p,{children:["This release removes the expiremental ",(0,t.jsx)(s.code,{children:"rotate-keys"})," subcommand due to changes in Kubernetes upstream for ",(0,t.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/issues/117728",children:"KMSv2"}),", the subcommand should be added back in future releases."]})}),"\n",(0,t.jsx)(s.admonition,{title:"Important",type:"warning",children:(0,t.jsxs)(s.p,{children:["This release also removes the ",(0,t.jsx)(s.code,{children:"multi-cluster-cidr"})," flag, since the support for this alpha feature has been removed completely from ",(0,t.jsx)(s.a,{href:"https://groups.google.com/g/kubernetes-sig-network/c/nts1xEZ--gQ/m/2aTOUNFFAAAJ",children:"Kubernetes upstream"}),", this flag should be removed from the configuration before upgrade."]})}),"\n",(0,t.jsx)(s.h3,{id:"changes-since-v1284k3s2",children:"Changes since v1.28.4+k3s2:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Fix overlapping address range ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8913",children:"(#8913)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Modify CONTRIBUTING.md guide ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8954",children:"(#8954)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Nov 2023 stable channel update ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9022",children:"(#9022)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Default runtime and runtime classes for wasm/nvidia/crun ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8936",children:"(#8936)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Added runtime classes for wasm/nvidia/crun"}),"\n",(0,t.jsx)(s.li,{children:"Added default runtime flag for containerd"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Bump containerd/runc to v1.7.10-k3s1/v1.1.10 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8962",children:"(#8962)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Allow setting default-runtime on servers ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9027",children:"(#9027)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Bump containerd to v1.7.11 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9040",children:"(#9040)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Remove GA feature-gates ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8970",children:"(#8970)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Only publish to code_cov on merged E2E builds ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9051",children:"(#9051)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Update Kubernetes to v1.29.0+k3s1 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9052",children:"(#9052)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Update flannel to v0.24.0 and remove multiclustercidr flag ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9075",children:"(#9075)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Remove rotate-keys subcommand ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9079",children:"(#9079)"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{})]})}function a(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>h,a:()=>l});var t=i(7294);const r={},n=t.createContext(r);function l(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);