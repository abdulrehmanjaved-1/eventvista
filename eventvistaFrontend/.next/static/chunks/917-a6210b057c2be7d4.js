"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{8554:function(e,s,a){a.d(s,{Z:function(){return o}});var t=a(5893),i=a(7294),l=a(2213),n=a(329),d=a(4955);let c=e=>{let{mode:s,pageRef:a}=e,[c,r]=(0,i.useState)(0),{data:o,isLoading:m,refetch:u,isFetching:h}=(0,n.z7)({take:l.Xy.EVENTS,page:c+1});return((0,i.useEffect)(()=>{r(0)},[s]),m)?(0,t.jsx)("div",{style:{width:"100%",height:"20vh",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)("h3",{className:"text-primary",children:"Loading.....!"})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"container event-main-top-div",children:[(0,t.jsxs)("div",{className:"row mb-5 main-row-event-and-view-all",children:[(0,t.jsx)("div",{className:"col-md-6 col-6",children:(0,t.jsx)("div",{className:"tpproduct",children:(0,t.jsx)("h1",{className:"class-event-home-page-heading text-danger",children:"Your Recommendations"})})}),(0,t.jsx)("div",{className:"col-md-6 col-6",children:(0,t.jsx)("div",{className:"tpfilter d-flex align-items-center"})})]}),(0,t.jsx)("div",{className:"row pt-10",children:!m&&(null==o?void 0:o.data.data.map(e=>(0,t.jsx)(d.Z,{event:e,loading:m,eventsRefetch:u},e.id)))})]})})},r=()=>{let[e,s]=(0,i.useState)("brands"),a=(0,i.useRef)(null);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"shop-area pt-30 pb-130",ref:a,children:(0,t.jsx)(c,{mode:e,setMode:s,pageRef:a})})})};var o=r},4955:function(e,s,a){a.d(s,{Z:function(){return _}});var t=a(5893);let i=()=>(0,t.jsxs)("div",{className:"shimmer-loader-main",children:[(0,t.jsx)("div",{className:"loader-shimmer-banner shimmer-animation"}),(0,t.jsxs)("div",{className:"loader-shimmer-content",children:[(0,t.jsx)("div",{className:"loader-shimmer-header",children:(0,t.jsx)("div",{className:"loader-shimmer-title shimmer-animation"})}),(0,t.jsx)("div",{className:"loader-shimmer-list shimmer-animation"})]})]});var l=a(9015),n=a(7294),d=a(9473),c=a(1163),r=a(4790),o=a(5735),m=a(8767);let u=()=>(0,m.useMutation)(o.Z.wishlist.add,{}),h=()=>(0,m.useMutation)(o.Z.addCalendae,{}),v=()=>(0,m.useMutation)(o.Z.wishlist.remove,{}),x=()=>(0,m.useMutation)(o.Z.removeCalendar,{}),j=e=>{let s,{is_wishlist:a,id:i,refetch:o}=e,m=(0,c.useRouter)(),{user:h}=(0,d.v9)(e=>e.auth),[x,j]=(0,n.useState)(a),[p,g]=(0,n.useState)(!1),{mutate:f,isLoading:N}=u(),{mutate:w,isLoading:b}=v(),_=e=>{if(!(null==h?void 0:h.hasOwnProperty("id")))return m.push("/signin"),!1;g(!0),s=setTimeout(()=>{g(!1)},1e3);let a={event_id:e};x?w(a,{onSuccess(e){S(e)}}):f(a,{onSuccess(e){S(e)}})},S=e=>{(null==e?void 0:e.flag)==1&&((0,r.PK)(e.message,"success"),j(e=>!e)),o()};return(0,n.useEffect)(()=>()=>{clearTimeout(s)},[]),(0,t.jsx)(l.z,{class:"".concat(!0==x&&"active"," ").concat(p||(x?b:N)?"bg-transparent":""),Loader:p||(x?b:N),Text:(0,t.jsx)("i",{className:"fal fa-heart"}),onClick:()=>{_(i)},type:"button",spinnerClass:"text-light "})};var p=a(1664),g=a.n(p),f=a(9588),N=a(7509);let w=e=>{let s,{is_calendar:a,id:i,refetch:o}=e,m=(0,c.useRouter)(),{user:u}=(0,d.v9)(e=>e.auth),[v,j]=(0,n.useState)(a),[p,g]=(0,n.useState)(!1),{mutate:f,isLoading:N}=h(),{mutate:w,isLoading:b}=x(),_=e=>{if(!(null==u?void 0:u.hasOwnProperty("id")))return m.push("/signin"),!1;g(!0),s=setTimeout(()=>{g(!1)},1e3);let a={event_id:e};v?w(a,{onSuccess(e){S(e)}}):f(a,{onSuccess(e){S(e)}})},S=e=>{(null==e?void 0:e.flag)==1&&((0,r.PK)(e.message,"success"),j(e=>!e)),o()};return(0,n.useEffect)(()=>()=>{clearTimeout(s)},[]),(0,t.jsx)(l.z,{class:"".concat(!0==v&&"active"," ").concat(p||(v?b:N)?"bg-transparent":""),Loader:p||(v?b:N),Text:(0,t.jsx)("i",{className:"fa fa-calendar"}),onClick:()=>{_(i)},type:"button",spinnerClass:"text-light "})},b=e=>{let{event:s,loading:a,eventsRefetch:l}=e;(0,r.Df)(null==s?void 0:s.start_date),(0,r.Df)(null==s?void 0:s.end_date);let[d,c]=(0,n.useState)(!1),o=e=>{c(e)},[m,u]=(0,n.useState)(0),[h,v]=(0,n.useState)(""),x="/events/".concat(m,"/").concat(h),p="".concat(N.mk).concat(x),b="".concat(N.nv).concat(x),_="".concat(N.tQ).concat(x),S="".concat(N.LC).concat(x);return"".concat('"http://localhost:3000";').concat(x),(0,t.jsxs)("div",{className:"col-xl-6 col-lg-6 col-md-6 p-relative",children:[a&&(0,t.jsx)(i,{}),(0,t.jsxs)("div",{className:"tpshopitem mb-15 wow fadeInUp","data-wow-delay":".6s",children:[(0,t.jsxs)("div",{className:"tpshopitem__thumb p-relative fix p-relative event ",children:[(0,t.jsxs)(g(),{href:"",children:[" ",(0,t.jsx)("img",{src:null==s?void 0:s.feature_image,className:"event-featured-image",alt:"shop-thumb"})]}),(0,t.jsxs)("div",{className:"tpshopitem__thumb-icon",children:[(0,t.jsx)(j,{is_wishlist:null==s?void 0:s.is_wishlist,refetch:l,id:null==s?void 0:s.id}),(0,t.jsx)(w,{is_calendar:null==s?void 0:s.is_calendar,refetch:l,id:null==s?void 0:s.id})]}),(0,t.jsx)("div",{className:"tpshopitem__is-featured-event",children:(0,t.jsx)("div",{className:"featured-text",onClick:()=>{o(!0),u(null==s?void 0:s.id),v(null==s?void 0:s.slug)},children:"Share Event"})})]}),(0,t.jsxs)("div",{className:"row p-4",children:[(0,t.jsx)("div",{className:"col-md-6 col-xxl-6 col-6 title-event-col",children:(0,t.jsx)("div",{className:"title-event-div",children:(0,t.jsxs)(g(),{href:"/events/".concat(null==s?void 0:s.id,"/").concat(null==s?void 0:s.slug),className:"view-detailed-text",children:[(0,t.jsx)("p",{children:(0,r.Sc)(null==s?void 0:s.name,45)}),(0,t.jsxs)("p",{className:"calendar-image-and-time-between",children:[(0,t.jsx)("img",{src:"/assets/media/icons/calendar.png",alt:""}),(0,t.jsxs)("span",{className:"date-between",children:[" ",null==s?void 0:s.start_time_renew," - ",null==s?void 0:s.end_time_renew]})]})]})})}),(0,t.jsx)(f.N,{ShowModelVisible:d,setModalVisibility:o,facebookShare:p,twitterShare:b,linkedInShare:_,whatsappShare:S})]})]})]},s.id)};var _=b},1410:function(e,s,a){a.d(s,{Z:function(){return j}});var t=a(5893),i=a(7294),l=a(9473),n=a(719),d=a(965),c=a(4790),r=a(1664),o=a.n(r);let m=e=>{let{data:s,path:a}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"slider_item",children:(0,t.jsxs)(o(),{href:"".concat(a,"/").concat(s.id,"/").concat(s.slug),children:[" ",(0,t.jsx)("img",{src:s.feature_image}),(0,t.jsx)("span",{children:(0,c.Sc)(s.name,100)})]})})})};var u=a(329);let h={effect:"fade",slidesPerView:1,spaceBetween:30,autoplay:{delay:4e3,disableOnInteraction:!0},navigation:{nextEl:".slider-n",prevEl:".slider-p"},modules:[d.W_],loop:!0},v=()=>{var e,s;let[a,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)(!1),{data:r,isLoading:o}=(0,u.z7)({take:12});return(0,i.useEffect)(()=>{c(!0),l(!0)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"slider_title",children:"You have power over your mind - not outside events. Realize this, and you will find strength."}),a&&(0,t.jsx)(n.tq,{loop:d,...h,breakpoints:{720:{slidesPerView:2},968:{slidesPerView:1}},className:"swiper-container top-slider tp-slider slider-active",children:!o&&(null==r?void 0:null===(e=r.data)||void 0===e?void 0:null===(s=e.data)||void 0===s?void 0:s.map((e,s)=>(0,t.jsx)(n.o5,{children:(0,t.jsx)(m,{data:e,path:"events"})},s)))}),(0,t.jsx)("div",{className:"container p-relative slider-actions-main",children:(0,t.jsxs)("div",{className:"d-flex align-items-center gap-3 justify-content-center",children:[(0,t.jsx)("div",{className:"slider-p slider-actions",children:(0,t.jsx)("img",{src:"/assets/media/slider/left.svg",alt:""})}),(0,t.jsx)("div",{className:"slider-n slider-actions",children:(0,t.jsx)("img",{src:"/assets/media/slider/right.svg",alt:""})})]})})]})},x=()=>{let{home_mode:e}=(0,l.v9)(e=>e.global);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{className:"slider-area slider-tp-top pt-100 p-relative",children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsx)(v,{})}),(0,t.jsxs)("div",{className:"header-video",children:[(0,t.jsx)("div",{className:"vid-overlay"}),(0,t.jsx)("img",{src:"/assets/images/bgImage.jpg",alt:"",style:{width:"100%",height:"100%"}})]})]})})};var j=x},7848:function(e,s,a){var t=a(5893);a(7294);var i=a(7642),l=a(568),n=a(1163);let d=e=>{let{children:s}=e,a=(0,n.useRouter)();return(0,t.jsxs)("div",{children:[(0,t.jsx)(l.Z,{type:"/"==a.asPath&&"home"}),(0,t.jsx)("main",{children:s}),(0,t.jsx)(i.Z,{})]})};s.Z=d},9015:function(e,s,a){a.d(s,{z:function(){return l}});var t=a(5893),i=a(524);let l=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("button",{className:e.class,type:e.type,disabled:e.disabled?e.disabled:e.Loader,onClick:e.onClick,children:!1===e.Loader?e.Text:(0,t.jsx)(i.Z,{class:"text-light ".concat(e.spinnerClass)})})})},524:function(e,s,a){var t=a(5893);let i=e=>(0,t.jsx)("div",{className:"spinner-border "+e.class,style:{verticalAlign:"middle"}});s.Z=i}}]);