(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{5864:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forget-password",function(){return t(388)}])},3191:function(e,a,t){"use strict";var n=t(5893),r=t(9008),i=t.n(r);let l=e=>{let{pageTitle:a}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:a&&"".concat(a)}),(0,n.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,n.jsx)("meta",{name:"description",content:"inabudhabi"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,n.jsx)("link",{rel:"icon",href:"/assets/images/logo.jpg"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"})]})})};a.Z=l},2883:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var n=t(5893),r=t(7294),i=t(3081);let l=()=>{let{sticky:e}=(0,i.Z)(),[a,t]=(0,r.useState)(!1),l=()=>{!a&&window.pageYOffset>400?t(!0):a&&window.pageYOffset<=400&&t(!1)},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,r.useEffect)(()=>(window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{onClick:s,className:"scroll-top scroll-to-target ".concat(e?"open":""),"data-target":"html",children:(0,n.jsx)("i",{className:"fas fa-angle-up"})})})},s=()=>{window.WOW=t(5541),new WOW.WOW({live:!1}).init()},o=e=>{let{children:a}=e;return(0,r.useEffect)(()=>{setTimeout(()=>{s()},500)},[]),(0,n.jsxs)(n.Fragment,{children:[a,(0,n.jsx)(l,{})]})};var d=o},388:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return j}});var n=t(5893),r=t(7294),i=t(3191),l=t(2883),s=t(568),o=t(2175),d=t(1587),c=t(4640),u=t(9015),m=t(5405),p=function(e){return"object"==typeof e&&null!==e},h=function(e){var a=e.value,t=void 0===a?"":a,n=e.numInputs,i=void 0===n?4:n,l=e.onChange,s=e.onPaste,o=e.renderInput,d=e.shouldAutoFocus,c=void 0!==d&&d,u=e.inputType,m=void 0===u?"text":u,h=e.renderSeparator,f=e.placeholder,x=e.containerStyle,g=e.inputStyle,v=e.skipDefaultStyles,b=void 0!==v&&v,w=r.useState(0),_=w[0],j=w[1],y=r.useRef([]),Z=function(){return t?t.toString().split(""):[]},N="number"===m||"tel"===m;r.useEffect(function(){y.current=y.current.slice(0,i)},[i]),r.useEffect(function(){var e;c&&(null===(e=y.current[0])||void 0===e||e.focus())},[c]);var q=function(){if("string"==typeof f){if(f.length===i)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},E=function(e){return(N?!isNaN(Number(e)):"string"==typeof e)&&1===e.trim().length},S=function(e){var a=e.target.value;E(a)&&(O(a),R(_+1))},C=function(e){var a=e.nativeEvent;E(e.target.value)||(null===a.data&&"deleteContentBackward"===a.inputType&&(e.preventDefault(),O(""),R(_-1)),e.target.value="")},F=function(){j(_-1)},k=function(e){var a=Z();[e.code,e.key].includes("Backspace")?(e.preventDefault(),O(""),R(_-1)):"Delete"===e.code?(e.preventDefault(),O("")):"ArrowLeft"===e.code?(e.preventDefault(),R(_-1)):"ArrowRight"===e.code?(e.preventDefault(),R(_+1)):e.key===a[_]?(e.preventDefault(),R(_+1)):("Spacebar"===e.code||"Space"===e.code||"ArrowUp"===e.code||"ArrowDown"===e.code)&&e.preventDefault()},R=function(e){var a,t,n=Math.max(Math.min(i-1,e),0);y.current[n]&&(null===(a=y.current[n])||void 0===a||a.focus(),null===(t=y.current[n])||void 0===t||t.select(),j(n))},O=function(e){var a=Z();a[_]=e[0],L(a)},L=function(e){l(e.join(""))},T=function(e){e.preventDefault();var a,t=Z(),n=_,r=e.clipboardData.getData("text/plain").slice(0,i-_).split("");if(!(N&&r.some(function(e){return isNaN(Number(e))}))){for(var l=0;l<i;++l)l>=_&&r.length>0&&(t[l]=null!==(a=r.shift())&&void 0!==a?a:"",n++);R(n),L(t)}};return r.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},p(x)&&x),className:"string"==typeof x?x:void 0,onPaste:s},Array.from({length:i},function(e,a){return a}).map(function(e){var a,t,n;return r.createElement(r.Fragment,{key:e},o({value:null!==(a=Z()[e])&&void 0!==a?a:"",placeholder:null!==(n=null===(t=q())||void 0===t?void 0:t[e])&&void 0!==n?n:void 0,ref:function(a){return y.current[e]=a},onChange:S,onFocus:function(a){j(e),a.target.select()},onBlur:F,onKeyDown:k,onPaste:T,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(b?{}:{width:"1em",textAlign:"center"},p(g)?g:{}),className:"string"==typeof g?g:void 0,type:m,inputMode:N?"numeric":"text",onInput:C},e),e<i-1&&("function"==typeof h?h(e):h))}))},f=t(4790);let x=e=>{let{email:a,setactivity:t,otp:r,setOtp:i}=e,{mutate:l,isLoading:s}=(0,m.Oc)(),o=async()=>{if(6!=r.length)return(0,f.PK)("Please Fill The Otp Feild."),!1;l({email:a,otp:r},{onSuccess(e){1==e.flag&&t("password")}})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"tp-mail",children:(0,n.jsx)(h,{containerStyle:{justifyContent:"space-between"},numInputs:6,renderSeparator:"",value:r,onChange:i,renderInput:e=>(0,n.jsx)("input",{...e,className:"otp-input"})})}),(0,n.jsx)("div",{className:"tp-login-button pt-30 mb-3",children:(0,n.jsx)(u.z,{class:"tp-btn-yellow w-100 ",Loader:s,onClick:()=>o(),Text:"Verify",type:"submit",spinnerClass:"text-light"})})]})},g=e=>{let{email:a,setactivity:t,otp:r,setOtp:i}=e,{mutate:l,isLoading:s}=(0,m.xu)(),{updatePasswordSchema:p}=(0,d.Z)(),{handleChange:h,handleSubmit:f,handleBlur:x,errors:g,values:v,touched:b}=(0,o.TA)({initialValues:{email:a,otp:r,password:"",repeat_password:""},validationSchema:p,onSubmit:async(e,a)=>{let{resetForm:n}=a;l(e,{onSuccess(e){1==e.flag&&t("email")}}),n()}});return(0,n.jsxs)("form",{onSubmit:f,children:[(0,n.jsxs)("div",{className:"tp-mail",children:[(0,n.jsx)("label",{htmlFor:"password",className:"loginEmailLabel",children:"New Password"}),(0,n.jsx)("input",{value:v.password,onChange:h,onBlur:x,type:"password",placeholder:"Enter your password",id:"password"}),b.password&&(0,n.jsx)(c.Z,{error:g.password})]}),(0,n.jsxs)("div",{className:"tp-mail",children:[(0,n.jsx)("label",{htmlFor:"repeat_password",className:"loginEmailLabel",children:"Confirm Password"}),(0,n.jsx)("input",{value:v.repeat_password,onChange:h,onBlur:x,type:"password",id:"repeat_password",placeholder:"Enter your confirm password"}),b.repeat_password&&(0,n.jsx)(c.Z,{error:g.repeat_password})]}),(0,n.jsx)("div",{className:"tp-login-button pt-30 mb-3",children:(0,n.jsx)(u.z,{class:"tp-btn-yellow w-100 ",Loader:s,Text:"Save",type:"submit",spinnerClass:"text-light"})})]})},v=()=>{let{mutate:e,isLoading:a}=(0,m.N3)(),{resetPasswordSchema:t}=(0,d.Z)(),[i,l]=(0,r.useState)("email"),[s,p]=(0,r.useState)(""),{handleChange:h,handleSubmit:f,handleBlur:v,errors:b,values:w,touched:_}=(0,o.TA)({initialValues:{email:""},validationSchema:t,onSubmit:async(a,t)=>{let{resetForm:n}=t;e(a,{onSuccess(e){1==e.flag&&l("otp")}})}});return(0,n.jsxs)(n.Fragment,{children:["email"==i&&(0,n.jsxs)("form",{onSubmit:f,children:[(0,n.jsxs)("div",{className:"tp-mail",children:[(0,n.jsx)("label",{htmlFor:"email",className:"loginEmailLabel",children:"Email Address"}),(0,n.jsx)("input",{value:w.email,onChange:h,onBlur:v,type:"text",placeholder:"Enter your email address",id:"email"}),_.email&&(0,n.jsx)(c.Z,{error:b.email})]}),(0,n.jsx)("div",{className:"tp-login-button pt-30 mb-3",children:(0,n.jsx)(u.z,{class:"tp-btn-yellow w-100",Loader:a,Text:"Next",type:"submit",spinnerClass:"text-light"})})]}),"otp"==i&&(0,n.jsx)(x,{email:w.email,setactivity:l,otp:s,setOtp:p}),"password"==i&&(0,n.jsx)(g,{email:w.email,setactivity:l,otp:s,setOtp:p})]})},b=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"tp-login-area email-login-theme ",children:(0,n.jsx)("div",{className:"container-fluid p-0 ",children:(0,n.jsxs)("div",{className:"row ",children:[(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-12 m-none loginFormEmail-right-side-image",children:(0,n.jsx)("div",{className:"tp-login-thumb login-space d-flex justify-content-center h-100 px-4"})}),(0,n.jsx)("div",{className:"col-xl-5 col-lg-5 col-12",children:(0,n.jsx)("div",{className:"tp-login-wrapper container pb-80 d-flex ",children:(0,n.jsxs)("div",{className:"tplogin",children:[(0,n.jsx)("div",{className:"tplogin__title",children:(0,n.jsx)("h1",{className:"tp-login-title",children:"Forget Password"})}),(0,n.jsx)("div",{className:"tplogin__form tplogin__form_email",children:(0,n.jsx)(v,{})})]})})})]})})})}),w=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{}),(0,n.jsx)(b,{})]}),_=()=>(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(i.Z,{pageTitle:"Home Main"}),(0,n.jsx)(w,{})]});var j=_},9015:function(e,a,t){"use strict";t.d(a,{z:function(){return i}});var n=t(5893),r=t(524);let i=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{className:e.class,type:e.type,disabled:e.disabled?e.disabled:e.Loader,onClick:e.onClick,children:!1===e.Loader?e.Text:(0,n.jsx)(r.Z,{class:"text-light ".concat(e.spinnerClass)})})})},4640:function(e,a,t){"use strict";var n=t(5893);t(7294);let r=e=>{let{error:a}=e;return(0,n.jsx)(n.Fragment,{children:void 0!=a&&(0,n.jsx)("p",{style:{color:"red"},children:a})})};a.Z=r},524:function(e,a,t){"use strict";var n=t(5893);let r=e=>(0,n.jsx)("div",{className:"spinner-border "+e.class,style:{verticalAlign:"middle"}});a.Z=r},1587:function(e,a,t){"use strict";var n=t(6310);let r=()=>{let e=n.Ry().shape({name:n.Z_().required().label("name"),email:n.Z_().required().email().label("Email"),msg:n.Z_().required().min(20).label("Message")}),a=n.Ry().shape({name:n.Z_().required().label("Name"),email:n.Z_().required().email().label("Email"),review:n.Z_().required().min(20).label("Review")}),t=n.Ry().shape({name:n.Z_().required().min(5).max(50).label("name"),email:n.Z_().required().label("email"),phone:n.Z_().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"phone number is not valid").required().min(9).max(15).label("phone"),gender:n.Z_().required().label("gender"),city:n.Z_().required().label("city"),password:n.Z_().min(6).required(),re_password:n.Z_().oneOf([n.iH("password"),""]).required(),terms_and_conditions:n.Z_().required().label("Terms & Conditions")}),r=n.Ry().shape({email:n.Z_().required().email().label("Email"),password:n.Z_().required().min(3).label("Password")}),i=n.Ry().shape({email:n.Z_().required().email().label("email")}),l=n.Ry().shape({password:n.Z_().min(6).required(),repeat_password:n.Z_().oneOf([n.iH("password"),""]).required()}),s=n.Ry().shape({otp:n.Rx().required().label("Otp")}),o=n.Ry().shape({name:n.Z_().required().label("Name"),email:n.Z_().required().email().label("Email"),msg:n.Z_().required().min(20).label("Message")}),d=n.Ry().shape({old_password:n.Z_().required(),new_password:n.Z_().min(6).required(),repeat_new_password:n.Z_().oneOf([n.iH("new_password"),""]).required()}),c=n.Ry().shape({name:n.Z_().required().min(3).max(22).label("Name"),email:n.Z_().required().max(40).label("Email"),phone:n.Z_().required().min(3).max(50).label("City"),subject:n.Z_().required().max(100).label("subject"),message:n.Z_().required().max(500).label("Message")}),u=n.Ry().shape({first_name:n.Z_().required().min(3).max(20).label("First name"),last_name:n.Z_().required().min(3).max(20).label("Last Name"),email:n.Z_().required().email().label("Email"),phone:n.Z_().required().min(3).max(20).label("Phone"),message:n.Z_().required().min(10).max(400).label("Message")}),m=n.Ry().shape({name:n.Z_().required().min(5).max(50).label("name"),phone:n.Z_().required().min(5).max(15).label("phone"),gender:n.Z_().required().label("gender"),city:n.Z_().required().label("city")}),p=n.Ry().shape({rating:n.Rx().required().min(1,"Please Select The Rating.").max(5).label("Rating"),reviews:n.Z_().required("Please Fill Message Field.").min(10).max(1e3).label("Message")});return{aboutSchema:e,reviewSchema:a,signupSchema:t,signInSchema:r,resetPasswordSchema:i,updatePasswordSchema:l,otpSchema:s,contactSchema:o,ChangePasswordSchema:d,ContactUsFormSchema:c,SchemaContactUs:u,profileSchema:m,addReviewSchema:p}};a.Z=r}},function(e){e.O(0,[664,733,568,774,888,179],function(){return e(e.s=5864)}),_N_E=e.O()}]);