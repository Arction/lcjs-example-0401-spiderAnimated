(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,a,s)=>{const t=s(377),{lightningChart:r,SpiderWebMode:o,Themes:i}=t,n=r({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Spider({theme:i[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Animated Radar Chart").setAxisInterval(100).setWebMode(o.Circle).addSeries(),d=["Category A","Category B","Category C","Category D","Category E"];n.addPoints({axis:d[0],value:100},{axis:d[1],value:100},{axis:d[2],value:100},{axis:d[3],value:100},{axis:d[4],value:100}),setInterval((()=>{for(const e of d){const a=100*Math.random();n.addPoints({axis:e,value:a})}}),2e3)}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);