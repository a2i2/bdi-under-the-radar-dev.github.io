import{B as s,C as p,D as P,E as g}from"./index.911cae79.js";import{u as a}from"./storeHelpers.da90a6e3.js";const u=s("participant",()=>{const c=a(p),e=a(P),t=a(g),o=async n=>{const r=(await t.cacheFn(n)).find(i=>i.payloadType==="EVENT_LOG");if(!r)throw new Error("No event log protocol entry found");return r.id};return{cacheParticipant:c.cacheFn,getCachedParticipant:c.getFn,cacheParticipantSurveys:e.cacheFn,getCachedParticipantSurveys:e.getFn,cacheParticipantProtocolEntries:t.cacheFn,getCachedParticipantProtocolEntries:t.getFn,getEventLogProtocolId:o}});export{u};
