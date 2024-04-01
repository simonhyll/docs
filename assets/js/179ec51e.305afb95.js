"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7176],{7698:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(5893),t=s(1151);const i={title:"secrets-encrypt"},c="k3s secrets-encrypt",l={id:"cli/secrets-encrypt",title:"secrets-encrypt",description:"K3s supports enabling secrets encryption at rest. For more information, see Secrets Encryption.",source:"@site/docs/cli/secrets-encrypt.md",sourceDirName:"cli",slug:"/cli/secrets-encrypt",permalink:"/cli/secrets-encrypt",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/secrets-encrypt.md",tags:[],version:"current",lastUpdatedAt:1712009246e3,frontMatter:{title:"secrets-encrypt"},sidebar:"mySidebar",previous:{title:"etcd-snapshot",permalink:"/cli/etcd-snapshot"},next:{title:"token",permalink:"/cli/token"}},a={},o=[{value:"Secrets Encryption Tool",id:"secrets-encryption-tool",level:2},{value:"New Encryption Key Rotation (Expiremental)",id:"new-encryption-key-rotation-expiremental",level:3},{value:"Encryption Key Rotation Classic",id:"encryption-key-rotation-classic",level:3},{value:"Secrets Encryption Disable/Re-enable",id:"secrets-encryption-disablere-enable",level:3},{value:"Secrets Encryption Status",id:"secrets-encryption-status",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{TabItem:s,Tabs:i}=n;return s||p("TabItem",!0),i||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"k3s-secrets-encrypt",children:"k3s secrets-encrypt"}),"\n",(0,r.jsxs)(n.p,{children:["K3s supports enabling secrets encryption at rest. For more information, see ",(0,r.jsx)(n.a,{href:"/security/secrets-encryption",children:"Secrets Encryption"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"secrets-encryption-tool",children:"Secrets Encryption Tool"}),"\n",(0,r.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,r.jsxs)(n.p,{children:["Available as of ",(0,r.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.8%2Bk3s1",children:"v1.21.8+k3s1"})]})}),"\n",(0,r.jsxs)(n.p,{children:["K3s contains a CLI tool ",(0,r.jsx)(n.code,{children:"secrets-encrypt"}),", which enables automatic control over the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Disabling/Enabling secrets encryption"}),"\n",(0,r.jsx)(n.li,{children:"Adding new encryption keys"}),"\n",(0,r.jsx)(n.li,{children:"Rotating and deleting encryption keys"}),"\n",(0,r.jsx)(n.li,{children:"Reencrypting secrets"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Failure to follow proper procedure for rotating encryption keys can leave your cluster permanently corrupted. Proceed with caution."})}),"\n",(0,r.jsx)(n.h3,{id:"new-encryption-key-rotation-expiremental",children:"New Encryption Key Rotation (Expiremental)"}),"\n",(0,r.jsxs)(n.admonition,{title:"Version Gate",type:"info",children:[(0,r.jsxs)(n.p,{children:["Available as of ",(0,r.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.28.1%2Bk3s1",children:"v1.28.1+k3s1"}),". This new version of the tool utilized K8s ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#configure-automatic-reloading",children:"automatic config reloading"})," which is currently in beta. GA is expected in v1.29.0"]}),(0,r.jsxs)(n.p,{children:["For older releases, see ",(0,r.jsx)(n.a,{href:"#encryption-key-rotation-classic",children:"Encryption Key Rotation Classic"})]})]}),"\n",(0,r.jsxs)(i,{groupId:"se",children:[(0,r.jsxs)(s,{value:"Single-Server",default:!0,children:[(0,r.jsx)(n.p,{children:"To rotate secrets encryption keys on a single-server cluster:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start the K3s server with the flag ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["Starting K3s without encryption and enabling it at a later time is currently ",(0,r.jsx)(n.em,{children:"not"})," supported."]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Rotate secrets encryption keys"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"k3s secrets-encrypt rotate-keys\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Wait for reencryption to finish. Watch the server logs, or wait for:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: reencrypt_finished\n"})}),"\n"]}),"\n"]})]}),(0,r.jsxs)(s,{value:"High-Availability",children:[(0,r.jsx)(n.p,{children:"To rotate secrets encryption keys on HA setups:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start up all three K3s servers with the ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})," flag. For brevity, the servers will be referred to as S1, S2, S3."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Starting K3s without encryption and enabling it at a later time is currently ",(0,r.jsx)(n.em,{children:"not"})," supported."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Rotate secrets encryption keys on S1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt rotate-keys\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Wait for reencryption to finish. Watch the server logs, or wait for:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: reencrypt_finished\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"K3s will reencrypt ~5 secrets per second. Clusters with large # of secrets can take several minutes to reencrypt. You can track progress in the server logs."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Restart K3s on S1 with same arguments. If running K3s as a service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once S1 is up, restart K3s on S2 and S3"}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"encryption-key-rotation-classic",children:"Encryption Key Rotation Classic"}),"\n",(0,r.jsxs)(i,{groupId:"se",children:[(0,r.jsxs)(s,{value:"Single-Server",default:!0,children:[(0,r.jsx)(n.p,{children:"To rotate secrets encryption keys on a single-server cluster:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start the K3s server with the flag ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["Starting K3s without encryption and enabling it at a later time is currently ",(0,r.jsx)(n.em,{children:"not"})," supported."]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Prepare"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt prepare\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kill and restart the K3s server with same arguments. If running K3s as a service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Rotate"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt rotate\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kill and restart the K3s server with same arguments"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reencrypt"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["K3s will reencrypt ~5 secrets per second.",(0,r.jsx)(n.br,{}),"\n","Clusters with large # of secrets can take several minutes to reencrypt."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt\n"})}),"\n"]}),"\n"]})]}),(0,r.jsxs)(s,{value:"High-Availability",children:[(0,r.jsx)(n.p,{children:"The steps are the same for both embedded DB and external DB clusters."}),(0,r.jsx)(n.p,{children:"To rotate secrets encryption keys on HA setups:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start up all three K3s servers with the ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})," flag. For brevity, the servers will be referred to as S1, S2, S3."]}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Starting K3s without encryption and enabling it at a later time is currently ",(0,r.jsx)(n.em,{children:"not"})," supported."]}),"\n",(0,r.jsxs)(n.li,{children:["While not required, it is recommended that you pick one server node from which to run the ",(0,r.jsx)(n.code,{children:"secrets-encrypt"})," commands."]}),"\n"]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Prepare on S1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt prepare\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kill and restart S1 with same arguments. If running K3s as a service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once S1 is up, kill and restart the S2 and S3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Rotate on S1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt rotate\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kill and restart S1 with same arguments"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once S1 is up, kill and restart the S2 and S3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reencrypt on S1"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["K3s will reencrypt ~5 secrets per second.",(0,r.jsx)(n.br,{}),"\n","Clusters with large # of secrets can take several minutes to reencrypt."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kill and restart S1 with same arguments"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once S1 is up, kill and restart the S2 and S3"}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"secrets-encryption-disablere-enable",children:"Secrets Encryption Disable/Re-enable"}),"\n",(0,r.jsxs)(i,{groupId:"se",children:[(0,r.jsxs)(s,{value:"Single-Server",default:!0,children:[(0,r.jsxs)(n.p,{children:["After launching a server with ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})," flag, secrets encryption can be disabled."]}),(0,r.jsx)(n.p,{children:"To disable secrets encryption on a single-node cluster:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Disable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt disable\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kill and restart the K3s server with same arguments. If running K3s as a service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reencrypt with flags"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt --force --skip\n"})}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"To re-enable secrets encryption on a single node cluster:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt enable\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kill and restart the K3s server with same arguments"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reencrypt with flags"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt --force --skip\n"})}),"\n"]}),"\n"]})]}),(0,r.jsxs)(s,{value:"High-Availability",children:[(0,r.jsxs)(n.p,{children:["After launching a HA cluster with ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})," flags, secrets encryption can be disabled."]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["While not required, it is recommended that you pick one server node from which to run the ",(0,r.jsx)(n.code,{children:"secrets-encrypt"})," commands."]})}),(0,r.jsx)(n.p,{children:"For brevity, the three servers used in this guide will be referred to as S1, S2, S3."}),(0,r.jsx)(n.p,{children:"To disable secrets encryption on a HA cluster:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Disable on S1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt disable\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kill and restart S1 with same arguments. If running K3s as a service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once S1 is up, kill and restart the S2 and S3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reencrypt with flags on S1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt --force --skip\n"})}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"To re-enable secrets encryption on a HA cluster:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable on S1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt enable\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kill and restart S1 with same arguments"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once S1 is up, kill and restart the S2 and S3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reencrypt with flags on S1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt --force --skip\n"})}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"secrets-encryption-status",children:"Secrets Encryption Status"}),"\n",(0,r.jsxs)(n.p,{children:["The secrets-encrypt tool includes a ",(0,r.jsx)(n.code,{children:"status"})," command that displays information about the current status of secrets encryption on the node."]}),"\n",(0,r.jsx)(n.p,{children:"An example of the command on a single-server node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: start\nServer Encryption Hashes: All hashes match\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Another example on HA cluster, after rotating the keys, but before restarting the servers:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: rotate\nServer Encryption Hashes: hash does not match between node-1 and node-2\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey-2021-12-10T22:54:38Z\n        AES-CBC   aescbckey\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Details on each section are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Encryption Status"}),": Displayed whether secrets encryption is disabled or enabled on the node"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Current Rotation Stage"}),": Indicates the current rotation stage on the node.",(0,r.jsx)(n.br,{}),"\n","Stages are: ",(0,r.jsx)(n.code,{children:"start"}),", ",(0,r.jsx)(n.code,{children:"prepare"}),", ",(0,r.jsx)(n.code,{children:"rotate"}),", ",(0,r.jsx)(n.code,{children:"reencrypt_request"}),", ",(0,r.jsx)(n.code,{children:"reencrypt_active"}),", ",(0,r.jsx)(n.code,{children:"reencrypt_finished"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Server Encryption Hashes"}),": Useful for HA clusters, this indicates whether all servers are on the same stage with their local files. This can be used to identify whether a restart of servers is required before proceeding to the next stage. In the HA example above, node-1 and node-2 have different hashes, indicating that they currently do not have the same encryption configuration. Restarting the servers will sync up their configuration."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Key Table"}),": Summarizes information about the secrets encryption keys found on the node.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Active"}),': The "*" indicates which, if any, of the keys are currently used for secrets encryption. An active key is used by Kubernetes to encrypt any new secrets.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Key Type"}),": All keys using this tool are ",(0,r.jsx)(n.code,{children:"AES-CBC"})," type. See more info ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers",children:"here."})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": Name of the encryption key."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var r=s(7294);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);