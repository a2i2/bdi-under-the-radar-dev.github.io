import{d as C,c,r as V,o as b,a as B,b as i,e as f,T as h,u as n,f as a,t as l,g as T,F as E,h as N,p as U,i as $,j as F,k as d,l as H,_ as L}from"./index.1d7e6142.js";import{u as M}from"./participantStore.3cf7cba2.js";import"./storeHelpers.4b307abb.js";const p=s=>(U("data-v-53d48e27"),s=s(),$(),s),O=p(()=>a("br",null,null,-1)),j=p(()=>a("hr",null,null,-1)),A=p(()=>a("h1",null,"Profile Page",-1)),D=C({__name:"UserHomeView",setup(s){const{user:k,getAccessTokenSilently:I}=H(),g=k,w=F();function v(e){w.push(e)}const m=M(),r=c(()=>g.value.user_metadata.participantId),u=c(()=>m.getCachedParticipantSurveys(r.value)),_=c(()=>{var e,o;return(o=(e=u.value)==null?void 0:e.find(t=>!t.completed))==null?void 0:o.id}),x=async()=>{const e=await I();m.cacheParticipantSurveys(r.value,e,!0)},y=V();async function S(){try{await x()}catch(P){console.log("Failed to download surveys",P)}const e=u.value,t=e&&e.length>0?30:5;y.value=setTimeout(S,t*1e3)}return b(()=>{S()}),B(()=>{clearTimeout(y.value)}),(e,o)=>(d(),i("div",null,[f(h,{label:"Back",onClick:o[0]||(o[0]=t=>v("/"))}),O,f(h,{label:`Goto: ${n(_)}`,onClick:o[1]||(o[1]=t=>v(`/survey/${n(_)}`))},null,8,["label"]),j,A,a("div",null,[a("div",null,"participantId: "+l(n(r)),1),a("div",null,[T(" Surveys "),(d(!0),i(E,null,N(n(u),t=>(d(),i("summary",{key:t.id},[T(l(t.displayName)+" "+l(t.completed?"COMPLETE":"INCOMPLETE")+" ",1),a("details",null,[a("pre",null,l(t),1)])]))),128))])])]))}});const q=L(D,[["__scopeId","data-v-53d48e27"]]);export{q as default};
