import{d as m,m as c,l as y,a0 as C,c as x,b as t,f as o,T as s,R as w,J as b,K as g,o as f,A as k,p as I,a as S,s as T,_ as $}from"./index.4fa9c258.js";const D=a=>(I("data-v-c925ce15"),a=a(),S(),a),E={class:"dev-home-view"},V=D(()=>t("h1",null,"Dev home page",-1)),H=m({__name:"DevHomeView",setup(a){c().setPageTitle("Home");const u="testhomepage:experimentId",r=y(v());C(r,i=>{try{window.localStorage.setItem(u,i)}catch(e){console.warn(`Could not save experimentId: ${i}`,e)}});function v(){let i="00000000-0000-0000-0000-000000000001";try{const e=window.localStorage.getItem(u);console.log("found: ",e),e!==null&&(i=e)}catch(e){console.warn("Could not retrieve saved experimentId",e)}return i}function d(){r.value="00000000-0000-0000-0000-000000000001"}const p=T();function n(i){p.push(i)}return(i,e)=>(f(),x("div",E,[V,t("ul",null,[t("li",null,[o(s,{label:"Root Home",onClick:e[0]||(e[0]=l=>n("/"))})]),t("li",null,[o(s,{label:"User Home (requires auth)",onClick:e[1]||(e[1]=l=>n("/user-home"))})]),t("li",null,[o(s,{label:"Error Page",onClick:e[2]||(e[2]=l=>n("/error-page"))})]),t("li",null,[o(s,{label:"Consent Page",onClick:e[3]||(e[3]=l=>n("/consent/"+r.value))}),w(" - with experimentId: "),b(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>r.value=l),type:"text"},null,512),[[g,r.value]]),o(k,{label:"Reset",icon:"reset",onClick:d})]),t("li",null,[o(s,{label:"UTR Survey",onClick:e[5]||(e[5]=l=>n("/utr-survey"))})]),t("li",null,[o(s,{label:"Follow Up Survey",onClick:e[6]||(e[6]=l=>n("/follow-up-survey"))})]),t("li",null,[o(s,{label:"Auth Test",onClick:e[7]||(e[7]=l=>n("/auth-test"))})]),t("li",null,[o(s,{label:"Consent Test",onClick:e[8]||(e[8]=l=>n("/consent-test"))})]),t("li",null,[o(s,{label:"Eligibility Test",onClick:e[9]||(e[9]=l=>n("/eligibility-test"))})]),t("li",null,[o(s,{label:"DCE Survey Test",onClick:e[10]||(e[10]=l=>n("/dce-survey"))})])])]))}});const _=$(H,[["__scopeId","data-v-c925ce15"]]);export{_ as default};
