import{v as p,w as P,x as g,y as h}from"./index.4e38452d.js";import{a}from"./authUtils.69c7a701.js";const y=p("participant",()=>{const c=a(P),e=a(g),t=a(h),o=async(n,i)=>{const r=(await t.cacheFn(n,i)).find(s=>s.payloadType==="EVENT_LOG");if(!r)throw new Error("No event log protocol entry found");return r.id};return{cacheParticipant:c.cacheFn,getCachedParticipant:c.getFn,cacheParticipantSurveys:e.cacheFn,getCachedParticipantSurveys:e.getFn,cacheParticipantProtocolEntries:t.cacheFn,getCachedParticipantProtocolEntries:t.getFn,getEventLogProtocolId:o}});export{y as u};
