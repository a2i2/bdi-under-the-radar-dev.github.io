import{f as d,v as p,s as v,K as m,c as _,e,h as l,Y as o,L as b,H as h,I as y,o as x,A as f,p as w,d as g,_ as k}from"./index.2c883dfa.js";const I=s=>(w("data-v-8b6bb9fc"),s=s(),g(),s),S={class:"dev-home-view"},T=I(()=>e("h1",null,"Dev home page",-1)),C=d({__name:"DevHomeView",setup(s){p().setPageTitle("Home");const i="testhomepage:experimentId",a=v(r());m(a,n=>{try{window.localStorage.setItem(i,n)}catch(t){console.warn(`Could not save experimentId: ${n}`,t)}});function r(){let n="00000000-0000-0000-0000-000000000001";try{const t=window.localStorage.getItem(i);console.log("found: ",t),t!==null&&(n=t)}catch(t){console.warn("Could not retrieve saved experimentId",t)}return n}function u(){a.value="00000000-0000-0000-0000-000000000001"}return(n,t)=>(x(),_("div",S,[T,e("ul",null,[e("li",null,[l(o,{label:"Root Home",link:"/"})]),e("li",null,[l(o,{label:"User Home (requires auth)",link:"user-home"})]),e("li",null,[l(o,{label:"Error Page",link:"error-page"})]),e("li",null,[l(o,{label:"Consent Page",link:"consent/"+a.value},null,8,["link"]),b(" - with experimentId: "),h(e("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>a.value=c),type:"text"},null,512),[[y,a.value]]),l(f,{label:"Reset",icon:"reset",onClick:u})]),e("li",null,[l(o,{label:"UTR Survey",link:"utr-survey"})]),e("li",null,[l(o,{label:"Follow Up Survey",link:"follow-up-survey"})]),e("li",null,[l(o,{label:"Auth Test",link:"auth-test"})]),e("li",null,[l(o,{label:"Consent Test",link:"consent-test"})]),e("li",null,[l(o,{label:"Eligibility Test",link:"eligibility-test"})]),e("li",null,[l(o,{label:"DCE Survey Test",link:"dce-survey"})])])]))}});const H=k(C,[["__scopeId","data-v-8b6bb9fc"]]);export{H as default};
