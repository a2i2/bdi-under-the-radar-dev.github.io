import{f as c,h as p,x as f,z as d,P as _,Q as r,k as i,c as m,R as x,o as v,_ as T}from"./index.7ccfd875.js";const V=["autofocus"],k=c({__name:"TextInput",props:{modelValue:null,autofocus:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:a}){const u=o,t=p({get(){return u.modelValue},set(e){a("update:modelValue",e)}}),s=f();return d(()=>{var e;u.autofocus&&((e=s.value)==null||e.focus())}),(e,n)=>_((v(),m("input",{ref_key:"inputRef",ref:s,"onUpdate:modelValue":n[0]||(n[0]=l=>x(t)?t.value=l:null),class:"text-input",autofocus:o.autofocus},null,8,V)),[[r,i(t)]])}});const I=T(k,[["__scopeId","data-v-7c42df3e"]]);export{I as T};
