(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[52],{1003:function(e,t,n){"use strict";var a=n(4),r=n(66),o=n.n(r),i=n(94),c=n(13),s=n(0),l=n.n(s),d=n(32),u=n(46),b=n(27),j=n(624),m=n(49),p=n(650),h=n(149),x=n(257),O=n(57),f=n(261),g=n(656),v=n(642),y=n(658),k=n(646),w=n(583),C=n(570),S=n(150),z=n(684),I=n(675),M=n(676),P=n(129),R=n(679),B=n(174),V=n(699),H=n.n(V),D=n(706),E=n.n(D),A=n(764),F=n(1);t.a=function(e,t){var n=Object.assign({},t),r=Object(b.a)(),s=Object(R.a)(),V=Object(j.a)(r.breakpoints.down("md")),D=Object(d.d)((function(e){return e.customization})),W=l.a.useState(!0),L=Object(c.a)(W,2),_=L[0],G=L[1],T=Object(P.a)(),q=T.firebaseEmailPasswordSignIn,N=T.firebaseGoogleSignIn,J=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),U=l.a.useState(!1),K=Object(c.a)(U,2),Q=K[0],X=K[1],Y=function(){X(!Q)},Z=function(e){e.preventDefault()};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(F.jsx)(m.a,{item:!0,xs:12,children:Object(F.jsx)(B.a,{children:Object(F.jsxs)(p.a,{disableElevation:!0,fullWidth:!0,onClick:J,size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:"dark"===r.palette.mode?r.palette.dark.main:r.palette.grey[50],borderColor:"dark"===r.palette.mode?r.palette.dark.light+20:r.palette.grey[100]},children:[Object(F.jsx)(h.a,{sx:{mr:{xs:1,sm:2,width:20}},children:Object(F.jsx)("img",{src:A.a,alt:"google",width:16,height:16,style:{marginRight:V?8:16}})}),"Sign in with Google"]})})}),Object(F.jsx)(m.a,{item:!0,xs:12,children:Object(F.jsxs)(h.a,{sx:{alignItems:"center",display:"flex"},children:[Object(F.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(F.jsx)(p.a,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"dark"===r.palette.mode?"".concat(r.palette.dark.light+20," !important"):"".concat(r.palette.grey[100]," !important"),color:"".concat(r.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(D.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),Object(F.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(F.jsx)(m.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(F.jsx)(h.a,{sx:{mb:2},children:Object(F.jsx)(O.a,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),Object(F.jsx)(M.b,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:I.d().shape({email:I.f().email("Must be a valid email").max(255).required("Email is required"),password:I.f().max(255).required("Password is required")}),onSubmit:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var a,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,r=n.setStatus,i=n.setSubmitting,e.prev=1,e.next=4,q(t.email,t.password).then((function(){}),(function(e){s.current&&(r({success:!1}),a({submit:e.message}),i(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),s.current&&(r({success:!1}),a({submit:e.t0.message}),i(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(t){var o=t.errors,i=t.handleBlur,c=t.handleChange,s=t.handleSubmit,l=t.isSubmitting,d=t.touched,b=t.values;return Object(F.jsxs)("form",Object(a.a)(Object(a.a)({noValidate:!0,onSubmit:s},n),{},{children:[Object(F.jsxs)(f.a,{fullWidth:!0,error:Boolean(d.email&&o.email),sx:Object(a.a)({},r.typography.customInput),children:[Object(F.jsx)(g.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(F.jsx)(v.a,{id:"outlined-adornment-email-login",type:"email",value:b.email,name:"email",onBlur:i,onChange:c,label:"Email Address / Username",inputProps:{}}),d.email&&o.email&&Object(F.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-email-login",children:o.email})]}),Object(F.jsxs)(f.a,{fullWidth:!0,error:Boolean(d.password&&o.password),sx:Object(a.a)({},r.typography.customInput),children:[Object(F.jsx)(g.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(F.jsx)(v.a,{id:"outlined-adornment-password-login",type:Q?"text":"password",value:b.password,name:"password",onBlur:i,onChange:c,endAdornment:Object(F.jsx)(k.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:Y,onMouseDown:Z,edge:"end",size:"large",children:Q?Object(F.jsx)(H.a,{}):Object(F.jsx)(E.a,{})})}),label:"Password",inputProps:{}}),d.password&&o.password&&Object(F.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-password-login",children:o.password})]}),Object(F.jsxs)(C.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[Object(F.jsx)(S.a,{control:Object(F.jsx)(z.a,{checked:_,onChange:function(e){return G(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),Object(F.jsx)(O.a,{variant:"subtitle1",component:u.b,to:e.loginProp?"/pages/forgot-password/forgot-password".concat(e.loginProp):"/pages/forgot-password/forgot-password3",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})]}),o.submit&&Object(F.jsx)(h.a,{sx:{mt:3},children:Object(F.jsx)(y.a,{error:!0,children:o.submit})}),Object(F.jsx)(h.a,{sx:{mt:2},children:Object(F.jsx)(B.a,{children:Object(F.jsx)(p.a,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})}},2037:function(e,t,n){"use strict";n.r(t);var a=n(46),r=n(27),o=n(624),i=n(49),c=n(570),s=n(149),l=n(57),d=n(257),u=n(766),b=n(672),j=n(1003),m=n(263),p=n(768),h=n(686),x=n(687),O=n.p+"static/media/img-a2-login.dd9f8992.svg",f=n(1),g=[{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"},{title:"Ready to use components",description:"Ready made component to apply directly"},{title:"Multiple dashboard and widgets",description:"100+ widgets and customize controls"}];t.default=function(){var e=Object(r.a)(),t=Object(o.a)(e.breakpoints.down("md")),n=Object(o.a)(e.breakpoints.down("lg"));return Object(f.jsx)(u.a,{children:Object(f.jsxs)(i.a,{container:!0,justifyContent:t?"center":"space-between",alignItems:"center",children:[Object(f.jsx)(i.a,{item:!0,md:6,lg:7,xs:12,sx:{minHeight:"100vh"},children:Object(f.jsxs)(i.a,{sx:{minHeight:"100vh"},container:!0,alignItems:t?"center":"flex-start",justifyContent:t?"center":"space-between",children:[Object(f.jsx)(i.a,{item:!0,sx:{display:{xs:"none",md:"block"},m:3},children:Object(f.jsx)(a.b,{to:"#",children:Object(f.jsx)(m.a,{})})}),Object(f.jsx)(i.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 68px)",md:"calc(100vh - 152px)"}},children:Object(f.jsxs)(c.a,{justifyContent:"center",alignItems:"center",spacing:5,m:2,children:[Object(f.jsx)(s.a,{component:a.b,to:"#",sx:{display:{xs:"block",md:"none"}},children:Object(f.jsx)(m.a,{})}),Object(f.jsx)(b.a,{border:n,children:Object(f.jsxs)(i.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(f.jsx)(i.a,{item:!0,children:Object(f.jsxs)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(f.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(f.jsx)(l.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})}),Object(f.jsx)(i.a,{item:!0,xs:12,children:Object(f.jsx)(j.a,{loginProp:2})}),Object(f.jsx)(i.a,{item:!0,xs:12,children:Object(f.jsx)(d.a,{})}),Object(f.jsx)(i.a,{item:!0,xs:12,children:Object(f.jsx)(i.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(f.jsx)(l.a,{component:a.b,to:"/pages/register/register2",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})]})}),Object(f.jsx)(i.a,{item:!0,xs:12,sx:{m:3},children:Object(f.jsx)(h.a,{})})]})}),Object(f.jsx)(i.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(f.jsx)(p.a,{children:Object(f.jsxs)(i.a,{item:!0,container:!0,justifyContent:"center",children:[Object(f.jsx)(i.a,{item:!0,xs:12,children:Object(f.jsx)(i.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(f.jsx)(i.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(f.jsx)(x.a,{items:g})})})}),Object(f.jsx)(i.a,{item:!0,xs:12,sx:{position:"relative"},children:Object(f.jsx)("img",{alt:"Auth method",src:O,style:{maxWidth:"100%",margin:"0 auto",display:"block",width:300,position:"relative",zIndex:5}})})]})})})]})})}},666:function(e,t,n){"use strict";var a=n(13),r=n(5),o=n(7),i=n(2),c=n(0),s=(n(10),n(8)),l=n(148),d=n(15),u=n(124),b=n(9),j=n(6),m=n(11),p=n(127),h=n(20),x=n(57),O=n(104),f=n(125);function g(e){return Object(O.a)("MuiLink",e)}var v=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=Object(j.a)(x.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(d.b)(t,"palette.".concat(function(e){return w[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(u.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(r.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),S=c.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiLink"}),r=n.className,d=n.color,u=void 0===d?"primary":d,j=n.component,x=void 0===j?"a":j,O=n.onBlur,f=n.onFocus,v=n.TypographyClasses,w=n.underline,S=void 0===w?"always":w,z=n.variant,I=void 0===z?"inherit":z,M=Object(o.a)(n,k),P=Object(p.a)(),R=P.isFocusVisibleRef,B=P.onBlur,V=P.onFocus,H=P.ref,D=c.useState(!1),E=Object(a.a)(D,2),A=E[0],F=E[1],W=Object(h.a)(t,H),L=Object(i.a)({},n,{color:u,component:x,focusVisible:A,underline:S,variant:I}),_=function(e){var t=e.classes,n=e.component,a=e.focusVisible,r=e.underline,o={root:["root","underline".concat(Object(b.a)(r)),"button"===n&&"button",a&&"focusVisible"]};return Object(l.a)(o,g,t)}(L);return Object(y.jsx)(C,Object(i.a)({className:Object(s.default)(_.root,r),classes:v,color:u,component:x,onBlur:function(e){B(e),!1===R.current&&F(!1),O&&O(e)},onFocus:function(e){V(e),!0===R.current&&F(!0),f&&f(e)},ref:W,ownerState:L,variant:I},M))}));t.a=S},672:function(e,t,n){"use strict";var a=n(4),r=n(93),o=n(149),i=n(172),c=n(1),s=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,s);return Object(c.jsx)(i.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(c.jsx)(o.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},679:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},684:function(e,t,n){"use strict";var a=n(5),r=n(7),o=n(2),i=n(0),c=(n(10),n(148)),s=n(124),l=n(175),d=n(31),u=n(1),b=Object(d.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=n(9),h=n(11),x=n(6),O=n(104),f=n(125);function g(e){return Object(O.a)("MuiCheckbox",e)}var v=Object(f.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=Object(x.a)(l.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(p.a)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return Object(o.a)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},Object(a.a)(t,"&.".concat(v.checked,", &.").concat(v.indeterminate),{color:n.palette[r.color].main}),Object(a.a)(t,"&.".concat(v.disabled),{color:n.palette.action.disabled}),t))})),w=Object(u.jsx)(j,{}),C=Object(u.jsx)(b,{}),S=Object(u.jsx)(m,{}),z=i.forwardRef((function(e,t){var n,a,s=Object(h.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?w:l,b=s.color,j=void 0===b?"primary":b,m=s.icon,x=void 0===m?C:m,O=s.indeterminate,f=void 0!==O&&O,v=s.indeterminateIcon,z=void 0===v?S:v,I=s.inputProps,M=s.size,P=void 0===M?"medium":M,R=Object(r.a)(s,y),B=f?z:x,V=f?z:d,H=Object(o.a)({},s,{color:j,indeterminate:f,size:P}),D=function(e){var t=e.classes,n=e.indeterminate,a=e.color,r={root:["root",n&&"indeterminate","color".concat(Object(p.a)(a))]},i=Object(c.a)(r,g,t);return Object(o.a)({},t,i)}(H);return Object(u.jsx)(k,Object(o.a)({type:"checkbox",inputProps:Object(o.a)({"data-indeterminate":f},I),icon:i.cloneElement(B,{fontSize:null!=(n=B.props.fontSize)?n:P}),checkedIcon:i.cloneElement(V,{fontSize:null!=(a=V.props.fontSize)?a:P}),ownerState:H,ref:t},R,{classes:D}))}));t.a=z},686:function(e,t,n){"use strict";var a=n(570),r=n(57),o=n(666),i=n(1);t.a=function(){return Object(i.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(i.jsx)(r.a,{variant:"subtitle2",component:o.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(i.jsx)(r.a,{variant:"subtitle2",component:o.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},687:function(e,t,n){"use strict";var a=n(4),r=n(49),o=n(57),i=n(709),c=n.n(i),s=n(1);t.a=function(e){var t=e.items;return Object(s.jsx)(c.a,Object(a.a)(Object(a.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(s.jsxs)(r.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(o.a,{variant:"h1",children:e.title})}),Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(o.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},699:function(e,t,n){"use strict";var a=n(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(105)),o=n(1),i=(0,r.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},706:function(e,t,n){"use strict";var a=n(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(105)),o=n(1),i=(0,r.default)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=i},764:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.a57081bd.svg"},766:function(e,t,n){"use strict";var a=n(5),r=n(6),o=Object(r.a)("div")((function(e){var t=e.theme;return Object(a.a)({backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.background.paper,minHeight:"100vh"},t.breakpoints.down("lg"),{backgroundColor:"dark"===t.palette.mode?t.palette.dark.main:t.palette.primary.light})}));t.a=o},768:function(e,t,n){"use strict";n(0);var a=n(27),r=n(149),o=n.p+"static/media/img-a2-grid.51f4cf81.svg",i=n.p+"static/media/img-a2-grid-dark.ee5f31a9.svg",c=n(1);t.a=function(e){var t=e.children,n=Object(a.a)();return Object(c.jsx)(r.a,{component:"span",sx:{display:"flex",minHeight:"100%",height:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(i,")"):"url(".concat(o,")"),position:"absolute",backgroundPosition:"bottom left",backgroundRepeat:"no-repeat",overflow:"hidden",m:"0 0 0 auto",p:"100px 0",top:0,left:0,right:0,bottom:0,"& > *":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",top:0,left:0,right:0,zIndex:1,bottom:0,bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:n.palette.primary.light,opacity:"dark"===n.palette.mode?.85:.9}},children:t})}}}]);
//# sourceMappingURL=52.c351949b.chunk.js.map