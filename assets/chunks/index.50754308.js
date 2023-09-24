import{_ as a,o as e,c as n,v as i,d as N,i as y,x as _,y as j,a2 as T,n as A,b as t,D as P,C as V,z as u,F as w,a3 as B,E as C,t as f,a as D,a4 as O,T as E}from"./framework.59a1e8ef.js";import{s as h,F as G,a as m,b as p,c as H,d as W,u as Z,e as R,i as U,f as Y,h as q,g as J}from"./index.51ec0e29.js";const K={},Q={width:"1em",height:"1em",viewBox:"0 0 16 16"},X=i("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[i("path",{d:"m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5"}),i("circle",{cx:"8",cy:"8",r:"6.25"})],-1),ee=[X];function te(s,r){return e(),n("svg",Q,ee)}const oe=a(K,[["render",te]]),ne={},se={width:"1em",height:"1em",viewBox:"0 0 16 16"},ie=i("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M6.75 14.25h2.5M8 1.75c-2.75 0-4.25 2-4.25 4s2 2.5 2 4.5v1h4.5v-1c0-2 2-2.5 2-4.5s-1.5-4-4.25-4z"},null,-1),re=[ie];function ce(s,r){return e(),n("svg",se,re)}const ae=a(ne,[["render",ce]]),le={},de={width:"32",height:"32",viewBox:"0 0 24 24"},_e=i("path",{fill:"currentColor",d:"M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653l-.655 2.947l2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"},null,-1),he=[_e];function ue(s,r){return e(),n("svg",de,he)}const fe=a(le,[["render",ue]]),me={},pe={width:"1em",height:"1em",viewBox:"0 0 16 16"},ge=i("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5.25 5.75c1.5 0 3-4 4.5-4v4h4.5s-.5 7.5-3.5 7.5h-5.5zm0 0h-3.5v7.5h3.5"},null,-1),ve=[ge];function ke(s,r){return e(),n("svg",pe,ve)}const $e=a(me,[["render",ke]]),ye={},we={width:"32",height:"32",viewBox:"0 0 32 32"},Be=i("path",{fill:"currentColor",d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zm-1-11h2v9h-2z"},null,-1),Ce=i("path",{fill:"currentColor",d:"M29 30H3a1 1 0 0 1-.887-1.461l13-25a1 1 0 0 1 1.774 0l13 25A1 1 0 0 1 29 30ZM4.65 28h22.7l.001-.003L16.002 6.17h-.004L4.648 27.997Z"},null,-1),Fe=[Be,Ce];function be(s,r){return e(),n("svg",we,Fe)}const ze=a(ye,[["render",be]]),Me={},Le={width:"1em",height:"1em",viewBox:"0 0 16 16"},Ie=i("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 1.75c-2.468 0-4.25 1.5-4.25 3.5v3l-2 3.5h12.5l-2-3.5v-3c0-2-1.166-3.5-4.25-3.5zm-2.25 10.5c0 3 4.5 3 4.5 0"},null,-1),Se=[Ie];function xe(s,r){return e(),n("svg",Le,Se)}const Ne=a(Me,[["render",xe]]),je={title:{type:[String,Object],default:()=>null},message:{type:[String,Object],default:()=>null},type:h(void 0,s=>G.includes(s)),close:m(),duration:p(2500),round:m(),showIcon:m(!0),icon:H(),color:h(),background:h(),offset:p(20),placement:h("top-right",s=>["top-left","top-right","bottom-left","bottom-right"].includes(s)),zIndex:p(),closeBtn:{type:[String,Object],default:()=>null},onClose:W()},Te={key:0,class:"f-notification__icon"},Ae={class:"f-notification__content"},Pe={key:1,class:"f-notification__title"},Ve={key:2,class:"f-notification__message"},De=N({name:"FNotification",__name:"notification",props:je,setup(s,{expose:r}){const l=s,{classList:F,styleList:b,visible:z,offsetStyle:M,offsetVal:L,onBeforeLeave:I,onAfterLeave:S,clearTimer:g,startTime:v,handelClose:k}=Z(l,"notification"),$=y(()=>l.icon?l.icon:{default:fe,primary:ae,success:$e,danger:oe,warning:ze,info:Ne}[l.type]),x=y(()=>l.placement.includes("right"));return r({offsetVal:L}),(o,c)=>(e(),_(E,{mode:"out-in",appear:"",name:"f-notification-fade"+(x.value?"-right":"-left"),onBeforeLeave:t(I),onAfterLeave:t(S)},{default:j(()=>[T(i("div",{class:A(t(F)),style:P([t(M),t(b)]),onMouseleave:c[1]||(c[1]=(...d)=>t(v)&&t(v)(...d)),onMouseenter:c[2]||(c[2]=(...d)=>t(g)&&t(g)(...d))},[$.value?(e(),n("div",Te,[V(t(R),{icon:$.value,size:25},null,8,["icon"])])):u("",!0),i("div",Ae,[o.title?(e(),n(w,{key:0},[B(o.title)?(e(),_(C(o.title),{key:0})):(e(),n("h3",Pe,f(o.title),1))],64)):u("",!0),B(o.message)?(e(),_(C(o.message),{key:1})):(e(),n("div",Ve,f(o.message),1))]),o.close?(e(),n("div",{key:1,class:"f-notification__close",onClick:c[0]||(c[0]=(...d)=>t(k)&&t(k)(...d))},[t(U)(o.closeBtn)?(e(),n(w,{key:0},[D(f(o.closeBtn),1)],64)):(e(),_(t(Y),{key:1,icon:o.closeBtn,size:15,color:"#a4a4a4"},null,8,["icon"]))])):u("",!0)],38),[[O,t(z)]])]),_:1},8,["name","onBeforeLeave","onAfterLeave"]))}}),{Message:Oe}=q(De,"notification"),He=J(Oe,"FNotification");export{He as F};
