(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{4758:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return s(8512)}])},3191:function(e,a,s){"use strict";var i=s(5893),l=s(9008),r=s.n(l);let n=e=>{let{pageTitle:a}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:a&&"".concat(a)}),(0,i.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,i.jsx)("meta",{name:"description",content:"inabudhabi"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,i.jsx)("link",{rel:"icon",href:"/assets/images/logo.jpg"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"})]})})};a.Z=n},2883:function(e,a,s){"use strict";s.d(a,{Z:function(){return o}});var i=s(5893),l=s(7294),r=s(3081);let n=()=>{let{sticky:e}=(0,r.Z)(),[a,s]=(0,l.useState)(!1),n=()=>{!a&&window.pageYOffset>400?s(!0):a&&window.pageYOffset<=400&&s(!1)},t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,l.useEffect)(()=>(window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("button",{onClick:t,className:"scroll-top scroll-to-target ".concat(e?"open":""),"data-target":"html",children:(0,i.jsx)("i",{className:"fas fa-angle-up"})})})},t=()=>{window.WOW=s(5541),new WOW.WOW({live:!1}).init()},d=e=>{let{children:a}=e;return(0,l.useEffect)(()=>{setTimeout(()=>{t()},500)},[]),(0,i.jsxs)(i.Fragment,{children:[a,(0,i.jsx)(n,{})]})};var o=d},8512:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return y}});var i=s(5893),l=s(7294),r=s(3191),n=s(2883),t=s(568),d=s(2175),o=s(1587),m=s(4640),c=s(1664),u=s.n(c),p=s(3977),h=s(4601);s(1259);let x=(0,p.ZF)({apiKey:"AIzaSyDe619_-vmvTLN9YcDea5fEhqR5i5vQwr8",authDomain:"testpush-e896f.firebaseapp.com",projectId:"testpush-e896f",storageBucket:"testpush-e896f.appspot.com",messagingSenderId:"1090658494347",appId:"1:1090658494347:web:868cf6facf3d449e10718e"}),_=async()=>{let e=(0,h.KL)(x);try{let a=await (0,h.LP)(e,{vapidKey:"BO5QHD8c1XDce48lKkDSx_I29soZG28fVh5gnma9ULXQxoIef3VTCrViVuk74BBpda1fxbJ0w-bWEvLHsnoV3Bo"});return console.log(a),a}catch(e){return console.error(e),null}};var b=s(9015),g=s(5405),f=s(9473),j=s(1163);let w=()=>{let{user:e,guest_id:a}=(0,f.v9)(e=>e.auth),{push:s}=(0,j.useRouter)();(0,l.useEffect)(()=>{e&&s("/")},[e]);let{signInSchema:r}=(0,o.Z)(),{mutate:n,isLoading:t}=(0,g.ec)(),{handleChange:c,handleSubmit:p,handleBlur:h,errors:x,values:w,touched:v}=(0,d.TA)({initialValues:{email:"",password:"",guest_id:a},validationSchema:r,onSubmit:async(e,a)=>{let{resetForm:s}=a,i=await _();void 0===i&&(i=null,delete e.fcm_token),void 0!=i&&null!=i&&(e.fcm_token=i),n(e),s()}});return(0,i.jsxs)("form",{onSubmit:p,children:[(0,i.jsxs)("div",{className:"tp-mail",children:[(0,i.jsx)("label",{htmlFor:"email",className:"loginEmailLabel",children:"Email Address"}),(0,i.jsx)("input",{value:w.email,onChange:c,onBlur:h,type:"text",placeholder:"Enter your email address",id:"email"}),v.email&&(0,i.jsx)(m.Z,{error:x.email})]}),(0,i.jsxs)("div",{className:"tp-mail",children:[(0,i.jsx)("label",{htmlFor:"Password",className:"loginEmailLabel",children:"Password"}),(0,i.jsx)("input",{value:w.password,onChange:c,onBlur:h,type:"password",placeholder:"Enter your password",id:"password"}),v.password&&(0,i.jsx)(m.Z,{error:x.password})]}),(0,i.jsxs)("div",{className:"tp-forgot-password d-flex justify-content-between",children:[(0,i.jsxs)("div",{className:"checkbox",children:[(0,i.jsx)("input",{type:"checkbox",id:"Remember",name:"fav_language",value:"Remember"})," ",(0,i.jsx)("label",{htmlFor:"Remember",className:"loginEmailLabel",children:"Remember Me"})]}),(0,i.jsx)("div",{className:"forgot",children:(0,i.jsx)(u(),{href:"/forget-password",children:"Forget Password?"})})]}),(0,i.jsx)("div",{className:"tp-login-button mb-3",children:(0,i.jsx)(b.z,{class:"tp-btn-yellow w-100",Loader:t,Text:"Login",type:"submit",spinnerClass:"text-light"})}),(0,i.jsx)("div",{className:"tp-signup d-flex justify-content-center",children:(0,i.jsxs)("div",{className:"signin",children:["Don’t have an account? ",(0,i.jsx)(u(),{href:"/signup",children:"Sign up"})]})})]})},v=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"tp-login-area email-login-theme ",children:(0,i.jsx)("div",{className:"container-fluid p-0 ",children:(0,i.jsx)("div",{className:"row d-flex justify-content-center",children:(0,i.jsx)("div",{className:"col-xl-5 col-lg-5 col-12",children:(0,i.jsx)("div",{className:"tp-login-wrapper container pb-80 d-flex ",children:(0,i.jsxs)("div",{className:"tplogin",children:[(0,i.jsx)("div",{className:"tplogin__title",children:(0,i.jsx)("h1",{className:"tp-login-title",children:"Welcome to Back"})}),(0,i.jsx)("div",{className:"tplogin__form tplogin__form_email",children:(0,i.jsx)(w,{})})]})})})})})})}),Z=()=>{let{user:e,guest_id:a}=(0,f.v9)(e=>e.auth),{push:s}=(0,j.useRouter)();return(0,l.useEffect)(()=>{e&&s("/")},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{}),(0,i.jsx)(v,{})]})},q=()=>(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(r.Z,{pageTitle:"Home Main"}),(0,i.jsx)(Z,{})]});var y=q},9015:function(e,a,s){"use strict";s.d(a,{z:function(){return r}});var i=s(5893),l=s(524);let r=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("button",{className:e.class,type:e.type,disabled:e.disabled?e.disabled:e.Loader,onClick:e.onClick,children:!1===e.Loader?e.Text:(0,i.jsx)(l.Z,{class:"text-light ".concat(e.spinnerClass)})})})},4640:function(e,a,s){"use strict";var i=s(5893);s(7294);let l=e=>{let{error:a}=e;return(0,i.jsx)(i.Fragment,{children:void 0!=a&&(0,i.jsx)("p",{style:{color:"red"},children:a})})};a.Z=l},524:function(e,a,s){"use strict";var i=s(5893);let l=e=>(0,i.jsx)("div",{className:"spinner-border "+e.class,style:{verticalAlign:"middle"}});a.Z=l},1587:function(e,a,s){"use strict";var i=s(6310);let l=()=>{let e=i.Ry().shape({name:i.Z_().required().label("name"),email:i.Z_().required().email().label("Email"),msg:i.Z_().required().min(20).label("Message")}),a=i.Ry().shape({name:i.Z_().required().label("Name"),email:i.Z_().required().email().label("Email"),review:i.Z_().required().min(20).label("Review")}),s=i.Ry().shape({name:i.Z_().required().min(5).max(50).label("name"),email:i.Z_().required().label("email"),phone:i.Z_().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"phone number is not valid").required().min(9).max(15).label("phone"),gender:i.Z_().required().label("gender"),city:i.Z_().required().label("city"),password:i.Z_().min(6).required(),re_password:i.Z_().oneOf([i.iH("password"),""]).required(),terms_and_conditions:i.Z_().required().label("Terms & Conditions")}),l=i.Ry().shape({email:i.Z_().required().email().label("Email"),password:i.Z_().required().min(3).label("Password")}),r=i.Ry().shape({email:i.Z_().required().email().label("email")}),n=i.Ry().shape({password:i.Z_().min(6).required(),repeat_password:i.Z_().oneOf([i.iH("password"),""]).required()}),t=i.Ry().shape({otp:i.Rx().required().label("Otp")}),d=i.Ry().shape({name:i.Z_().required().label("Name"),email:i.Z_().required().email().label("Email"),msg:i.Z_().required().min(20).label("Message")}),o=i.Ry().shape({old_password:i.Z_().required(),new_password:i.Z_().min(6).required(),repeat_new_password:i.Z_().oneOf([i.iH("new_password"),""]).required()}),m=i.Ry().shape({name:i.Z_().required().min(3).max(22).label("Name"),email:i.Z_().required().max(40).label("Email"),phone:i.Z_().required().min(3).max(50).label("City"),subject:i.Z_().required().max(100).label("subject"),message:i.Z_().required().max(500).label("Message")}),c=i.Ry().shape({first_name:i.Z_().required().min(3).max(20).label("First name"),last_name:i.Z_().required().min(3).max(20).label("Last Name"),email:i.Z_().required().email().label("Email"),phone:i.Z_().required().min(3).max(20).label("Phone"),message:i.Z_().required().min(10).max(400).label("Message")}),u=i.Ry().shape({name:i.Z_().required().min(5).max(50).label("name"),phone:i.Z_().required().min(5).max(15).label("phone"),gender:i.Z_().required().label("gender"),city:i.Z_().required().label("city")}),p=i.Ry().shape({rating:i.Rx().required().min(1,"Please Select The Rating.").max(5).label("Rating"),reviews:i.Z_().required("Please Fill Message Field.").min(10).max(1e3).label("Message")});return{aboutSchema:e,reviewSchema:a,signupSchema:s,signInSchema:l,resetPasswordSchema:r,updatePasswordSchema:n,otpSchema:t,contactSchema:d,ChangePasswordSchema:o,ContactUsFormSchema:m,SchemaContactUs:c,profileSchema:u,addReviewSchema:p}};a.Z=l}},function(e){e.O(0,[801,664,733,345,568,774,888,179],function(){return e(e.s=4758)}),_N_E=e.O()}]);