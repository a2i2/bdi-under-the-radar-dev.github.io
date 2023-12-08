import{f as m,y,x as h,I as b,c,e,j as l,T as t,J as k,F as x,s as f,o as d,A as g,p as w,b as I,_ as S}from"./index.a03e24fa.js";import{T}from"./TextInput.2bd745ff.js";const r=s=>(w("data-v-c171e60a"),s=s(),I(),s),V={class:"dev-home-view"},C=r(()=>e("h1",null,"Dev home page",-1)),E=r(()=>e("hr",null,null,-1)),D=r(()=>e("h3",null,"Actual Surveys",-1)),H=m({__name:"DevHomeView",setup(s){y().setPageTitle("Home");const u="testhomepage:experimentId",a=h(_());b(a,o=>{try{window.localStorage.setItem(u,o)}catch(n){console.warn(`Could not save experimentId: ${o}`,n)}});function _(){let o="00000000-0000-0000-0000-000000000001";try{const n=window.localStorage.getItem(u);console.log("found: ",n),n!==null&&(o=n)}catch(n){console.warn("Could not retrieve saved experimentId",n)}return o}function p(){a.value="00000000-0000-0000-0000-000000000001"}const v=["baseline","dce_0","dce_1","dce_2","dce_3","dce_4","dce_5","follow_up","intervention_0","intervention_1","intervention_2","intervention_3","intervention_4","intervention_5","mental_health","video_feedback"];return(o,n)=>(d(),c("div",V,[C,e("ul",null,[e("li",null,[l(t,{label:"Root Home",link:"/"})]),e("li",null,[l(t,{label:"User Home (requires auth)",link:"your-surveys"})]),e("li",null,[l(t,{label:"Error Page",link:"error-page"})]),e("li",null,[l(t,{label:"Consent Page",link:"consent/"+a.value},null,8,["link"]),k(" - with experimentId: "),l(T,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=i=>a.value=i),type:"text"},null,8,["modelValue"]),l(g,{label:"Reset",icon:"reset",onClick:p})]),e("li",null,[l(t,{label:"UTR Survey",link:"utr-survey"})]),e("li",null,[l(t,{label:"Follow Up Survey",link:"follow-up-survey"})]),e("li",null,[l(t,{label:"Auth Test",link:"auth-test"})]),e("li",null,[l(t,{label:"Consent Test",link:"consent-test"})]),e("li",null,[l(t,{label:"Eligibility Test",link:"eligibility-test"})]),e("li",null,[l(t,{label:"DCE Survey Test",link:"dce-survey"})])]),E,D,e("ul",null,[(d(),c(x,null,f(v,i=>e("li",{key:i},[l(t,{label:i,link:"test-survey/"+i},null,8,["label","link"])])),64))])]))}});const F=S(H,[["__scopeId","data-v-c171e60a"]]);export{F as default};
