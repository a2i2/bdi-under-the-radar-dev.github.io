import{d as f,x,r as g,Y as w,b as v,f as t,e as l,T as s,g as y,G as k,H as I,u as _,J as S,k as p,O as T,Z as $,p as V,i as D,j as H,_ as E}from"./index.1d7e6142.js";const m=r=>(V("data-v-bfd01b01"),r=r(),D(),r),B={class:"dev-home-view"},R=m(()=>t("h1",null,"Dev home page",-1)),N=m(()=>t("br",null,null,-1)),P={key:0},U=f({__name:"DevHomeView",setup(r){const u=x();u.setPageCount(0),u.setPageTitle("Home");const d="testhomepage:experimentId",a=g(c());w(a,i=>{try{window.localStorage.setItem(d,i)}catch(e){console.warn(`Could not save experimentId: ${i}`,e)}});function c(){let i="00000000-0000-0000-0000-000000000001";try{const e=window.localStorage.getItem(d);console.log("found: ",e),e!==null&&(i=e)}catch(e){console.warn("Could not retrieve saved experimentId",e)}return i}function b(){a.value="00000000-0000-0000-0000-000000000001"}const C=H();function n(i){C.push(i)}return(i,e)=>(p(),v("div",B,[R,t("ul",null,[t("li",null,[l(s,{label:"Root Home",onClick:e[0]||(e[0]=o=>n("/"))})]),t("li",null,[l(s,{label:"User Home (requires auth)",onClick:e[1]||(e[1]=o=>n("/user-home"))})]),t("li",null,[l(s,{label:"Error Page",onClick:e[2]||(e[2]=o=>n("/error-page"))})]),t("li",null,[l(s,{label:"Consent Page",onClick:e[3]||(e[3]=o=>n("/consent/"+a.value))}),y(" - with experimentId: "),k(t("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>a.value=o),type:"text"},null,512),[[I,a.value]]),l(T,{label:"Reset",icon:"reset",onClick:b})])]),N,_($)?(p(),v("ul",P,[t("li",null,[l(s,{label:"UTR Survey",onClick:e[5]||(e[5]=o=>n("/utr-survey"))})]),t("li",null,[l(s,{label:"Follow Up Survey",onClick:e[6]||(e[6]=o=>n("/follow-up-survey"))})]),t("li",null,[l(s,{label:"Auth Test",onClick:e[7]||(e[7]=o=>n("/auth-test"))})]),t("li",null,[l(s,{label:"Consent Test",onClick:e[8]||(e[8]=o=>n("/consent-test"))})]),t("li",null,[l(s,{label:"Eligibility Test",onClick:e[9]||(e[9]=o=>n("/eligibility-test"))})])])):S("",!0)]))}});const h=E(U,[["__scopeId","data-v-bfd01b01"]]);export{h as default};
