import{d as G,l as f,a0 as $,e as w,c as i,f as s,T as D,b as e,R as W,J as F,K as z,g as n,t as o,F as N,h as x,B as K,o as l,A as c,p as M,a as Y,s as j,a1 as q,Y as H,$ as Q,a2 as X,a3 as Z,_ as tt}from"./index.99933a87.js";const r=d=>(M("data-v-70c0c44a"),d=d(),Y(),d),et={class:"auth-test-page"},nt=r(()=>e("hr",null,null,-1)),at={class:"atp-grid"},st={class:"atp-email"},ot=["disabled"],it={class:"atp-participant"},lt={key:0,class:"atp-button-row"},ct=r(()=>e("hr",null,null,-1)),ut=r(()=>e("hr",null,null,-1)),rt={key:0},dt={class:"profile-box"},pt=["src"],_t=r(()=>e("div",null,"Auth0 User Info:",-1)),ht=r(()=>e("div",null,"ID Token Claims:",-1)),vt={key:1},gt=G({__name:"TestAuthView",setup(d){var b,I;const C=j();function V(t){C.push(t)}const{isAuthenticated:v,isLoading:A,user:a,idTokenClaims:p,getAccessTokenSilently:y,loginWithRedirect:k,logout:B}=K(),g=f(""),m=f(""),_=f((I=(b=a.value)==null?void 0:b.email)!=null?I:"");$(a,t=>{t.email&&(_.value=t.email)});const E=w(()=>{var t;return JSON.stringify((t=a==null?void 0:a.value)!=null?t:"",null,"	")}),J=w(()=>{var t;return JSON.stringify((t=p==null?void 0:p.value)!=null?t:"",null,"	")}),S=w(()=>{var t;return(t=p.value)==null?void 0:t.user_metadata.participantId});async function L(){try{const t=await q();g.value=JSON.stringify(t,null,"	")}catch(t){g.value=`${t}`}}async function O(){try{const t=await y();console.log(t);const h=await H("00000000-0000-0000-0000-000000000001",t);m.value=JSON.stringify(h,null,"	")}catch(t){console.log("caught"),m.value=`${t}`}}async function P(){const t=_.value;await Q(t),k({appState:{target:"/auth-test"},authorizationParams:{screen_hint:"signup",login_hint:t}})}const R=()=>{k({appState:{target:"/auth-test"}})},T=()=>B({logoutParams:{returnTo:window.location.origin+X}}),U=async()=>{const t=await y();await Z(S.value,t),T()};return(t,u)=>(l(),i("div",et,[s(D,{label:"Back",onClick:u[0]||(u[0]=h=>V("/"))}),nt,e("div",at,[e("div",null,[e("div",st,[W("email: "),F(e("input",{"onUpdate:modelValue":u[1]||(u[1]=h=>_.value=h),type:"text",disabled:n(v)},null,8,ot),[[z,_.value]])]),e("div",it,"participantId: "+o(n(S)),1),n(A)?x("",!0):(l(),i("div",lt,[n(v)?x("",!0):(l(),i(N,{key:0},[s(c,{label:"Sign Up",icon:"signup",onClick:P}),s(c,{label:"Log In",icon:"signup",onClick:R})],64)),n(v)?(l(),i(N,{key:1},[s(c,{label:"Log Out",icon:"signup",onClick:T}),s(c,{label:"Withdraw (delete user info)",icon:"signup",onClick:U})],64)):x("",!0)])),ct,e("div",null,[s(c,{label:"Get Experiments",icon:"download",onClick:L}),e("pre",null,o(g.value),1)]),ut,e("div",null,[s(c,{label:"Get Experiment",icon:"download",onClick:O}),e("pre",null,o(m.value),1)])]),e("div",null,[n(a)?(l(),i("div",rt,[e("div",dt,[e("img",{src:n(a).picture,alt:"Profile"},null,8,pt),e("div",null,[e("h2",null,o(n(a).nickname),1),e("span",null,o(n(a).email),1)])]),_t,e("pre",null,o(n(E)),1),ht,e("pre",null,o(n(J)),1)])):(l(),i("div",vt,"No User info"))])])]))}});const ft=tt(gt,[["__scopeId","data-v-70c0c44a"]]);export{ft as default};
