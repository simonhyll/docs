"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mySidebar":[{"type":"link","label":"K3s - \u8f7b\u91cf\u7ea7 Kubernetes","href":"/zh/","docId":"introduction"},{"type":"link","label":"\u67b6\u6784","href":"/zh/architecture/","docId":"architecture/architecture"},{"type":"link","label":"\u5feb\u901f\u5165\u95e8\u6307\u5357","href":"/zh/quick-start/","docId":"quick-start/quick-start"},{"type":"category","label":"\u5b89\u88c5","items":[{"type":"link","label":"\u8981\u6c42","href":"/zh/installation/requirements","docId":"installation/requirements"},{"type":"link","label":"\u914d\u7f6e\u9009\u9879","href":"/zh/installation/configuration","docId":"installation/configuration"},{"type":"link","label":"\u7f51\u7edc\u9009\u9879","href":"/zh/installation/network-options","docId":"installation/network-options"},{"type":"link","label":"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e","href":"/zh/installation/private-registry","docId":"installation/private-registry"},{"type":"link","label":"\u79bb\u7ebf\u5b89\u88c5","href":"/zh/installation/airgap","docId":"installation/airgap"},{"type":"link","label":"\u7ba1\u7406 Server \u89d2\u8272","href":"/zh/installation/server-roles","docId":"installation/server-roles"},{"type":"link","label":"\u7ba1\u7406\u5c01\u88c5\u7684\u7ec4\u4ef6","href":"/zh/installation/packaged-components","docId":"installation/packaged-components"},{"type":"link","label":"Kubernetes \u4eea\u8868\u677f","href":"/zh/installation/kube-dashboard","docId":"installation/kube-dashboard"},{"type":"link","label":"\u5378\u8f7d K3s","href":"/zh/installation/uninstall","docId":"installation/uninstall"}],"collapsed":true,"collapsible":true,"href":"/zh/installation/"},{"type":"category","label":"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8","items":[{"type":"link","label":"\u5907\u4efd\u548c\u6062\u590d","href":"/zh/datastore/backup-restore","docId":"datastore/backup-restore"},{"type":"link","label":"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd","href":"/zh/datastore/ha-embedded","docId":"datastore/ha-embedded"},{"type":"link","label":"\u9ad8\u53ef\u7528\u5916\u90e8\u6570\u636e\u5e93","href":"/zh/datastore/ha","docId":"datastore/ha"}],"collapsed":true,"collapsible":true,"href":"/zh/datastore/"},{"type":"link","label":"\u96c6\u7fa4\u8bbf\u95ee","href":"/zh/cluster-access/","docId":"cluster-access/cluster-access"},{"type":"category","label":"\u5347\u7ea7","items":[{"type":"link","label":"\u505c\u6b62 K3s","href":"/zh/upgrades/killall","docId":"upgrades/killall"},{"type":"link","label":"\u624b\u52a8\u5347\u7ea7","href":"/zh/upgrades/manual","docId":"upgrades/manual"},{"type":"link","label":"\u81ea\u52a8\u5347\u7ea7","href":"/zh/upgrades/automated","docId":"upgrades/automated"}],"collapsed":true,"collapsible":true,"href":"/zh/upgrades/"},{"type":"link","label":"\u5377\u548c\u5b58\u50a8","href":"/zh/storage/","docId":"storage/storage"},{"type":"link","label":"\u7f51\u7edc","href":"/zh/networking/","docId":"networking/networking"},{"type":"link","label":"Helm","href":"/zh/helm/","docId":"helm/helm"},{"type":"link","label":"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e","href":"/zh/advanced/","docId":"advanced/advanced"},{"type":"link","label":"\u5e38\u89c1\u95ee\u9898","href":"/zh/faq/","docId":"faq/faq"},{"type":"category","label":"CLI \u5de5\u5177","items":[{"type":"link","label":"server","href":"/zh/cli/server","docId":"cli/server"},{"type":"link","label":"agent","href":"/zh/cli/agent","docId":"cli/agent"},{"type":"link","label":"certificate","href":"/zh/cli/certificate","docId":"cli/certificate"},{"type":"link","label":"etcd-snapshot","href":"/zh/cli/etcd-snapshot","docId":"cli/etcd-snapshot"},{"type":"link","label":"secrets-encrypt","href":"/zh/cli/secrets-encrypt","docId":"cli/secrets-encrypt"},{"type":"link","label":"token","href":"/zh/cli/token","docId":"cli/token"}],"collapsed":true,"collapsible":true,"href":"/zh/cli/"},{"type":"category","label":"\u53c2\u8003","items":[{"type":"link","label":"\u73af\u5883\u53d8\u91cf","href":"/zh/reference/env-variables","docId":"reference/env-variables"},{"type":"link","label":"\u8d44\u6e90\u5206\u6790","href":"/zh/reference/resource-profiling","docId":"reference/resource-profiling"}],"collapsed":true,"collapsible":true,"href":"/zh/reference/"},{"type":"link","label":"\u5df2\u77e5\u95ee\u9898","href":"/zh/known-issues/","docId":"known-issues/known-issues"},{"type":"category","label":"\u5b89\u5168","items":[{"type":"link","label":"Secret \u52a0\u5bc6","href":"/zh/security/secrets-encryption","docId":"security/secrets-encryption"},{"type":"link","label":"CIS Hardening Guide","href":"/zh/security/hardening-guide","docId":"security/hardening-guide"},{"type":"link","label":"CIS Self Assessment Guide","href":"/zh/security/self-assessment","docId":"security/self-assessment"}],"collapsed":true,"collapsible":true,"href":"/zh/security/"}]},"docs":{"advanced/advanced":{"id":"advanced/advanced","title":"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e","description":"\u672c\u6587\u63cf\u8ff0\u4e86\u7528\u4e8e\u8fd0\u884c\u548c\u7ba1\u7406 K3s \u7684\u9ad8\u7ea7\u8bbe\u7f6e\uff0c\u4ee5\u53ca\u4e3a K3s \u51c6\u5907\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u6240\u9700\u7684\u6b65\u9aa4\u3002","sidebar":"mySidebar"},"architecture/architecture":{"id":"architecture/architecture","title":"\u67b6\u6784","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u9ad8\u53ef\u7528\uff08HA\uff09K3s \u670d\u52a1\u5668\u96c6\u7fa4\u7684\u67b6\u6784\uff0c\u4ee5\u53ca K3s \u4e0e\u5355\u8282\u70b9\u670d\u52a1\u5668\u96c6\u7fa4\u7684\u533a\u522b\u3002","sidebar":"mySidebar"},"backup-restore/backup-restore":{"id":"backup-restore/backup-restore","title":"\u5907\u4efd\u548c\u6062\u590d","description":"\u672c\u6587\u5df2\u8fc1\u79fb\u5230\u6b64\u5904\u3002"},"cli/agent":{"id":"cli/agent","title":"agent","description":"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Agent\u3002","sidebar":"mySidebar"},"cli/certificate":{"id":"cli/certificate","title":"certificate","description":"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66","sidebar":"mySidebar"},"cli/cli":{"id":"cli/cli","title":"CLI \u5de5\u5177","description":"K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u542b\u4e86\u5f88\u591a\u5de5\u5177\uff0c\u53ef\u5e2e\u52a9\u4f60\u7ba1\u7406\u96c6\u7fa4\u3002","sidebar":"mySidebar"},"cli/etcd-snapshot":{"id":"cli/etcd-snapshot","title":"etcd-snapshot","description":"\u4ece v1.19.1+k3s1 \u8d77\u53ef\u7528","sidebar":"mySidebar"},"cli/secrets-encrypt":{"id":"cli/secrets-encrypt","title":"secrets-encrypt","description":"K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Secret \u52a0\u5bc6\u3002","sidebar":"mySidebar"},"cli/server":{"id":"cli/server","title":"server","description":"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Server\u3002","sidebar":"mySidebar"},"cli/token":{"id":"cli/token","title":"token","description":"K3s \u4f7f\u7528 Token \u6765\u4fdd\u62a4\u52a0\u5165\u8282\u70b9\u7684\u8fc7\u7a0b\u3002Token \u7528\u4e8e\u9a8c\u8bc1\u52a0\u5165\u7684\u8282\u70b9\u548c\u96c6\u7fa4\u3002","sidebar":"mySidebar"},"cluster-access/cluster-access":{"id":"cluster-access/cluster-access","title":"\u96c6\u7fa4\u8bbf\u95ee","description":"/etc/rancher/k3s/k3s.yaml \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86\u4e0a\u6e38\u7684 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff08\u5982 kubectl \u6216 helm)\uff0c\u4f60\u9700\u8981\u7528\u6b63\u786e\u7684 kubeconfig \u8def\u5f84\u914d\u7f6e\u5b83\u4eec\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5bfc\u51fa KUBECONFIG \u73af\u5883\u53d8\u91cf\u6216\u8c03\u7528 --kubeconfig \u547d\u4ee4\u884c\u6807\u5fd7\u6765\u5b8c\u6210\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u793a\u4f8b\u3002","sidebar":"mySidebar"},"datastore/backup-restore":{"id":"datastore/backup-restore","title":"\u5907\u4efd\u548c\u6062\u590d","description":"K3s \u7684\u5907\u4efd\u548c\u6062\u590d\u65b9\u5f0f\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u3002","sidebar":"mySidebar"},"datastore/datastore":{"id":"datastore/datastore","title":"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8","description":"K3s \u4e0e\u5176\u4ed6 Kubernetes \u53d1\u884c\u7248\u7684\u4e0d\u540c\u4e4b\u5904\uff0c\u5728\u4e8e K3s \u652f\u6301\u4f7f\u7528 etcd \u4ee5\u5916\u7684\u6570\u636e\u5e93\u6765\u8fd0\u884c Kubernetes\u3002\u8be5\u529f\u80fd\u8ba9 Kubernetes \u8fd0\u7ef4\u66f4\u52a0\u7075\u6d3b\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u5408\u9002\u7684\u6570\u636e\u5b58\u50a8\u9009\u9879\u3002\u4f8b\u5982\uff1a","sidebar":"mySidebar"},"datastore/ha":{"id":"datastore/ha","title":"\u9ad8\u53ef\u7528\u5916\u90e8\u6570\u636e\u5e93","description":"\u6ce8\u610f\uff1a\u6211\u4eec\u5728 v1.0.0 \u7248\u672c\u4e2d\u5f15\u5165\u4e86\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher \u7684\u5b98\u65b9\u652f\u6301\u3002","sidebar":"mySidebar"},"datastore/ha-embedded":{"id":"datastore/ha-embedded","title":"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd","description":"\u5b8c\u5168\u652f\u6301 v1.19.5+k3s1","sidebar":"mySidebar"},"faq/faq":{"id":"faq/faq","title":"\u5e38\u89c1\u95ee\u9898","description":"\u672c\u6587\u4f1a\u5b9a\u671f\u66f4\u65b0\uff0c\u7528\u4e8e\u89e3\u7b54\u7528\u6237\u5e38\u89c1\u7684 K3s \u76f8\u5173\u95ee\u9898\u3002","sidebar":"mySidebar"},"helm/helm":{"id":"helm/helm","title":"Helm","description":"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u4e3a Kubernetes YAML \u6e05\u5355\u6587\u4ef6\u63d0\u4f9b\u4e86\u6a21\u677f\u8bed\u6cd5\u3002\u501f\u52a9 Helm\uff0c\u5f00\u53d1\u4eba\u5458\u6216\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u521b\u5efa\u79f0\u4e3a Chart \u7684\u53ef\u914d\u7f6e\u6a21\u677f\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u4f7f\u7528\u9759\u6001\u6e05\u5355\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 Chart catalog\uff0c\u8bf7\u53c2\u9605 https://helm.sh/docs/intro/quickstart/\u3002","sidebar":"mySidebar"},"installation/airgap":{"id":"installation/airgap","title":"\u79bb\u7ebf\u5b89\u88c5","description":"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 K3s\u3002\u79bb\u7ebf\u73af\u5883\u6307\u7684\u662f\u4e0d\u76f4\u63a5\u8fde\u63a5\u5230 Internet \u7684\u73af\u5883\u3002\u4f60\u53ef\u4ee5\u90e8\u7f72\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u548c mirror docker.io\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u90e8\u7f72\u955c\u50cf\uff0c\u4f8b\u5982\u7528\u4e8e\u5c0f\u578b\u96c6\u7fa4\u3002","sidebar":"mySidebar"},"installation/configuration":{"id":"installation/configuration","title":"\u914d\u7f6e\u9009\u9879","description":"\u672c\u6587\u91cd\u70b9\u4ecb\u7ecd\u9996\u6b21\u8bbe\u7f6e K3s \u65f6\u5e38\u7528\u7684\u9009\u9879\u3002\u5982\u9700\u4e86\u89e3\u8be6\u60c5\uff0c\u8bf7\u53c2\u9605\u6709\u5173\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e\u4ee5\u53ca server \u548c agent \u547d\u4ee4\u7684\u6587\u6863\u3002","sidebar":"mySidebar"},"installation/datastore":{"id":"installation/datastore","title":"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8\u9009\u9879","description":"\u672c\u6587\u5df2\u8fc1\u79fb\u5230\u6b64\u5904\u3002"},"installation/disable-flags":{"id":"installation/disable-flags","title":"\u7981\u7528\u7ec4\u4ef6\u6807\u5fd7","description":"\u672c\u6587\u5df2\u8fc1\u79fb\u5230\u6b64\u5904\u3002"},"installation/ha":{"id":"installation/ha","title":"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528","description":"\u672c\u6587\u5df2\u8fc1\u79fb\u5230\u6b64\u5904\u3002"},"installation/ha-embedded":{"id":"installation/ha-embedded","title":"\u5177\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528","description":"\u672c\u6587\u5df2\u8fc1\u79fb\u5230\u6b64\u5904\u3002"},"installation/installation":{"id":"installation/installation","title":"\u5b89\u88c5","description":"\u672c\u6587\u5305\u542b\u4e86\u5728\u5404\u79cd\u73af\u5883\u4e0b\u5b89\u88c5 K3s \u7684\u8bf4\u660e\u3002\u5728\u5f00\u59cb\u5b89\u88c5 K3s \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u6ee1\u8db3 K3s \u7684\u5b89\u88c5\u8981\u6c42\u3002","sidebar":"mySidebar"},"installation/kube-dashboard":{"id":"installation/kube-dashboard","title":"Kubernetes \u4eea\u8868\u677f","description":"\u672c\u5b89\u88c5\u6307\u5357\u5c06\u5e2e\u52a9\u4f60\u5728 K3s \u4e0a\u90e8\u7f72\u548c\u914d\u7f6e Kubernetes \u4eea\u8868\u677f\u3002","sidebar":"mySidebar"},"installation/network-options":{"id":"installation/network-options","title":"\u7f51\u7edc\u9009\u9879","description":"\u672c\u6587\u4ecb\u7ecd\u4e86 K3s \u7f51\u7edc\u914d\u7f6e\u9009\u9879\uff0c\u5305\u62ec\u914d\u7f6e\u6216\u66ff\u6362 Flannel\uff0c\u4ee5\u53ca\u914d\u7f6e IPv6\u3002","sidebar":"mySidebar"},"installation/packaged-components":{"id":"installation/packaged-components","title":"\u7ba1\u7406\u5c01\u88c5\u7684\u7ec4\u4ef6","description":"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\uff08AddOn\uff09","sidebar":"mySidebar"},"installation/private-registry":{"id":"installation/private-registry","title":"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e","description":"\u4f60\u53ef\u4ee5\u5c06 Containerd \u914d\u7f6e\u4e3a\u8fde\u63a5\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u5e76\u5728\u8282\u70b9\u4e0a\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u79c1\u6709\u955c\u50cf\u3002","sidebar":"mySidebar"},"installation/requirements":{"id":"installation/requirements","title":"\u8981\u6c42","description":"K3s \u975e\u5e38\u8f7b\u91cf\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u6700\u4f4e\u8981\u6c42\uff0c\u5982\u4e0b\u6240\u8ff0\u3002","sidebar":"mySidebar"},"installation/server-roles":{"id":"installation/server-roles","title":"\u7ba1\u7406 Server \u89d2\u8272","description":"\u4f7f\u7528 --cluster-init \u542f\u52a8 K3s Server \u5c06\u8fd0\u884c\u6240\u6709 control-plane \u7ec4\u4ef6\uff0c\u5305\u62ec apiserver\u3001controller-manager\u3001scheduler \u548c etcd\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7981\u7528\u7279\u5b9a\u7ec4\u4ef6\u6765\u5c06 control-plane \u548c etcd \u89d2\u8272\u62c6\u5206\u5230\u5355\u72ec\u7684\u8282\u70b9\u4e0a\u3002","sidebar":"mySidebar"},"installation/uninstall":{"id":"installation/uninstall","title":"\u5378\u8f7d K3s","description":"\u5378\u8f7d K3s \u4f1a\u5220\u9664 local \u96c6\u7fa4\u6570\u636e\u3001\u914d\u7f6e\u4ee5\u53ca\u6240\u6709\u811a\u672c\u548c CLI \u5de5\u5177\u3002","sidebar":"mySidebar"},"introduction":{"id":"introduction","title":"K3s - \u8f7b\u91cf\u7ea7 Kubernetes","description":"K3s \u662f\u8f7b\u91cf\u7ea7\u7684 Kubernetes\u3002K3s \u6613\u4e8e\u5b89\u88c5\uff0c\u4ec5\u9700\u8981 Kubernetes \u5185\u5b58\u7684\u4e00\u534a\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2a\u5c0f\u4e8e 100 MB \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002","sidebar":"mySidebar"},"known-issues/known-issues":{"id":"known-issues/known-issues","title":"\u5df2\u77e5\u95ee\u9898","description":"\u6211\u4eec\u4f1a\u5b9a\u671f\u66f4\u65b0\u5df2\u77e5\u95ee\u9898\u6587\u6863\uff0c\u8bf4\u660e\u4e0b\u4e00\u4e2a\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u53ef\u80fd\u65e0\u6cd5\u7acb\u5373\u89e3\u51b3\u7684\u95ee\u9898\u3002","sidebar":"mySidebar"},"networking/networking":{"id":"networking/networking","title":"\u7f51\u7edc","description":"\u672c\u6587\u4ecb\u7ecd\u4e86 CoreDNS\u3001Traefik Ingress controller \u548c Klipper service load balancer \u662f\u5982\u4f55\u5728 K3s \u4e2d\u5de5\u4f5c\u7684\u3002","sidebar":"mySidebar"},"quick-start/quick-start":{"id":"quick-start/quick-start","title":"\u5feb\u901f\u5165\u95e8\u6307\u5357","description":"\u672c\u6307\u5357\u5e2e\u52a9\u4f60\u4f7f\u7528\u9ed8\u8ba4\u9009\u9879\u5feb\u901f\u542f\u52a8\u96c6\u7fa4\u3002\u5b89\u88c5\u90e8\u5206\u66f4\u8be6\u7ec6\u5730\u4ecb\u7ecd\u4e86\u5982\u4f55\u8bbe\u7f6e K3s\u3002","sidebar":"mySidebar"},"reference/agent-config":{"id":"reference/agent-config","title":"Agent \u914d\u7f6e","description":"\u672c\u6587\u5df2\u8fc1\u79fb\u5230\u6b64\u5904\u3002"},"reference/env-variables":{"id":"reference/env-variables","title":"\u73af\u5883\u53d8\u91cf","description":"\u5982\u5feb\u901f\u5165\u95e8\u6307\u5357\u4e2d\u6240\u8ff0\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 https://get.k3s.io \u4e0a\u63d0\u4f9b\u7684\u5b89\u88c5\u811a\u672c\u5728\u57fa\u4e8e systemd \u548c openrc \u7684\u7cfb\u7edf\u4e0a\u5c06 K3s \u5b89\u88c5\u4e3a\u670d\u52a1\u3002","sidebar":"mySidebar"},"reference/reference":{"id":"reference/reference","title":"\u53c2\u8003","description":"\u672c\u8282\u8be6\u7ec6\u4ecb\u7ecd\u4e86 K3s \u5b89\u88c5\u811a\u672c\u3001\u670d\u52a1\u5668/\u5ba2\u6237\u7aef\u914d\u7f6e\u9009\u9879\u4ee5\u53ca\u5176\u4ed6\u5de5\u5177\u7684\u4f7f\u7528\u8bf4\u660e\u3002","sidebar":"mySidebar"},"reference/resource-profiling":{"id":"reference/resource-profiling","title":"\u8d44\u6e90\u5206\u6790","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u6d4b\u8bd5\u7ed3\u679c\uff0c\u7528\u4e8e\u786e\u5b9a K3s \u7684\u6700\u4f4e\u8d44\u6e90\u8981\u6c42\u3002","sidebar":"mySidebar"},"reference/server-config":{"id":"reference/server-config","title":"Server \u914d\u7f6e","description":"\u672c\u6587\u5df2\u8fc1\u79fb\u5230\u6b64\u5904\u3002"},"security/hardening-guide":{"id":"security/hardening-guide","title":"CIS Hardening Guide","description":"\u8bf7\u77e5\u6089\uff0c\u672c\u6587\u4ec5\u63d0\u4f9b\u82f1\u6587\u7248\u3002","sidebar":"mySidebar"},"security/secrets-encryption":{"id":"security/secrets-encryption","title":"Secret \u52a0\u5bc6","description":"K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u9996\u6b21\u542f\u52a8 server \u65f6\uff0c\u4f20\u9012\u6807\u5fd7 --secrets-encryption \u5c06\u81ea\u52a8\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a","sidebar":"mySidebar"},"security/security":{"id":"security/security","title":"\u5b89\u5168","description":"\u672c\u8282\u4ecb\u7ecd\u4e86\u52a0\u5f3a K3s \u96c6\u7fa4\u5b89\u5168\u6027\u7684\u65b9\u6cd5\uff0c\u5305\u62ec 2 \u4e2a\u90e8\u5206\u3002\u672c\u6307\u5357\u5047\u8bbe K3s \u4e0e\u5d4c\u5165\u5f0f etcd \u4e00\u8d77\u8fd0\u884c\u3002","sidebar":"mySidebar"},"security/self-assessment":{"id":"security/self-assessment","title":"CIS Self Assessment Guide","description":"\u8bf7\u77e5\u6089\uff0c\u672c\u6587\u4ec5\u63d0\u4f9b\u82f1\u6587\u7248\u3002","sidebar":"mySidebar"},"storage/storage":{"id":"storage/storage","title":"\u5377\u548c\u5b58\u50a8","description":"\u5728\u90e8\u7f72\u9700\u8981\u4fdd\u200b\u200b\u7559\u6570\u636e\u7684\u5e94\u7528\u65f6\uff0c\u4f60\u9700\u8981\u521b\u5efa\u6301\u4e45\u5b58\u50a8\u3002\u6301\u4e45\u5b58\u50a8\u5141\u8bb8\u4f60\u5728\u8fd0\u884c\u5e94\u7528\u7684 pod \u4e4b\u5916\u5b58\u50a8\u5e94\u7528\u6570\u636e\u3002\u5373\u4f7f\u8fd0\u884c\u5e94\u7528\u7684 pod \u53d1\u751f\u6545\u969c\uff0c\u8fd9\u79cd\u5b58\u50a8\u65b9\u5f0f\u4e5f\u80fd\u8ba9\u4f60\u4fdd\u7559\u5e94\u7528\u6570\u636e\u3002","sidebar":"mySidebar"},"upgrades/automated":{"id":"upgrades/automated","title":"\u81ea\u52a8\u5347\u7ea7","description":"Overview","sidebar":"mySidebar"},"upgrades/killall":{"id":"upgrades/killall","title":"\u505c\u6b62 K3s","description":"\u4e3a\u4e86\u5728\u5347\u7ea7\u671f\u95f4\u5b9e\u73b0\u9ad8\u53ef\u7528\u6027\uff0cK3s \u5bb9\u5668\u5728 K3s \u670d\u52a1\u505c\u6b62\u65f6\u4f1a\u7ee7\u7eed\u8fd0\u884c\u3002","sidebar":"mySidebar"},"upgrades/manual":{"id":"upgrades/manual","title":"\u624b\u52a8\u5347\u7ea7","description":"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u6240\u9700\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002","sidebar":"mySidebar"},"upgrades/upgrades":{"id":"upgrades/upgrades","title":"\u5347\u7ea7","description":"\u5347\u7ea7 K3s \u96c6\u7fa4","sidebar":"mySidebar"}}}')}}]);