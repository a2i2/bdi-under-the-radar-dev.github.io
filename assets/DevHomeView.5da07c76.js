import{d as y,m as x,l as b,$ as g,c as d,b as t,f as o,T as s,P as w,I as f,J as k,g as I,h as S,o as v,A as $,a0 as T,p as _,a as D,s as V,_ as E}from"./index.bc9a9a22.js";const p=r=>(_("data-v-51c422c0"),r=r(),D(),r),H={class:"dev-home-view"},B=p(()=>t("h1",null,"Dev home page",-1)),R=p(()=>t("br",null,null,-1)),A={key:0},N=y({__name:"DevHomeView",setup(r){x().setPageTitle("Home");const u="testhomepage:experimentId",a=b(m());g(a,i=>{try{window.localStorage.setItem(u,i)}catch(e){console.warn(`Could not save experimentId: ${i}`,e)}});function m(){let i="00000000-0000-0000-0000-000000000001";try{const e=window.localStorage.getItem(u);console.log("found: ",e),e!==null&&(i=e)}catch(e){console.warn("Could not retrieve saved experimentId",e)}return i}function c(){a.value="00000000-0000-0000-0000-000000000001"}const C=V();function n(i){C.push(i)}return(i,e)=>(v(),d("div",H,[B,t("ul",null,[t("li",null,[o(s,{label:"Root Home",onClick:e[0]||(e[0]=l=>n("/"))})]),t("li",null,[o(s,{label:"User Home (requires auth)",onClick:e[1]||(e[1]=l=>n("/user-home"))})]),t("li",null,[o(s,{label:"Error Page",onClick:e[2]||(e[2]=l=>n("/error-page"))})]),t("li",null,[o(s,{label:"Consent Page",onClick:e[3]||(e[3]=l=>n("/consent/"+a.value))}),w(" - with experimentId: "),f(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>a.value=l),type:"text"},null,512),[[k,a.value]]),o($,{label:"Reset",icon:"reset",onClick:c})])]),R,I(T)?(v(),d("ul",A,[t("li",null,[o(s,{label:"UTR Survey",onClick:e[5]||(e[5]=l=>n("/utr-survey"))})]),t("li",null,[o(s,{label:"Follow Up Survey",onClick:e[6]||(e[6]=l=>n("/follow-up-survey"))})]),t("li",null,[o(s,{label:"Auth Test",onClick:e[7]||(e[7]=l=>n("/auth-test"))})]),t("li",null,[o(s,{label:"Consent Test",onClick:e[8]||(e[8]=l=>n("/consent-test"))})]),t("li",null,[o(s,{label:"Eligibility Test",onClick:e[9]||(e[9]=l=>n("/eligibility-test"))})]),t("li",null,[o(s,{label:"DCE Survey Test",onClick:e[10]||(e[10]=l=>n("/dce-survey"))})])])):S("",!0)]))}});const q=E(N,[["__scopeId","data-v-51c422c0"]]);export{q as default};
