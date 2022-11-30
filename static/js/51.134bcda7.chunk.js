(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[51],{1004:function(e,t,n){"use strict";var a=n(4),r=n(66),i=n.n(r),c=n(94),o=n(13),s=n(0),l=n.n(s),d=n(46),u=n(32),b=n(27),j=n(624),m=n(49),p=n(650),h=n(149),x=n(257),O=n(57),f=n(579),g=n(261),v=n(656),y=n(642),k=n(658),w=n(646),C=n(583),S=n(150),z=n(684),I=n(675),M=n(676),R=n(129),P=n(679),V=n(764),B=n(174),E=n(765),W=n(699),A=n.n(W),H=n(706),D=n.n(H),F=n(1);t.a=function(e){var t=Object.assign({},e),n=Object(b.a)(),r=Object(P.a)(),W=Object(j.a)(n.breakpoints.down("md")),H=Object(u.d)((function(e){return e.customization})),L=l.a.useState(!1),N=Object(o.a)(L,2),_=N[0],G=N[1],T=l.a.useState(!0),q=Object(o.a)(T,2),U=q[0],J=q[1],Z=l.a.useState(0),$=Object(o.a)(Z,2),K=$[0],Q=$[1],X=l.a.useState(),Y=Object(o.a)(X,2),ee=Y[0],te=Y[1],ne=Object(R.a)(),ae=ne.firebaseRegister,re=ne.firebaseGoogleSignIn,ie=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){G(!_)},oe=function(e){e.preventDefault()},se=function(e){var t=Object(E.b)(e);Q(t),te(Object(E.a)(t))};return Object(s.useEffect)((function(){se("123456")}),[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(F.jsx)(m.a,{item:!0,xs:12,children:Object(F.jsx)(B.a,{children:Object(F.jsxs)(p.a,{variant:"outlined",fullWidth:!0,onClick:ie,size:"large",sx:{color:"grey.700",backgroundColor:"dark"===n.palette.mode?n.palette.dark.main:n.palette.grey[50],borderColor:"dark"===n.palette.mode?n.palette.dark.light+20:n.palette.grey[100]},children:[Object(F.jsx)(h.a,{sx:{mr:{xs:1,sm:2,width:20}},children:Object(F.jsx)("img",{src:V.a,alt:"google",width:16,height:16,style:{marginRight:W?8:16}})}),"Sign up with Google"]})})}),Object(F.jsx)(m.a,{item:!0,xs:12,children:Object(F.jsxs)(h.a,{sx:{alignItems:"center",display:"flex"},children:[Object(F.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(F.jsx)(p.a,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"dark"===n.palette.mode?"".concat(n.palette.dark.light+20," !important"):"".concat(n.palette.grey[100]," !important"),color:"".concat(n.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(H.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),Object(F.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(F.jsx)(m.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(F.jsx)(h.a,{sx:{mb:2},children:Object(F.jsx)(O.a,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),Object(F.jsx)(M.b,{initialValues:{email:"",password:"",submit:null},validationSchema:I.d().shape({email:I.f().email("Must be a valid email").max(255).required("Email is required"),password:I.f().max(255).required("Password is required")}),onSubmit:function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,c=n.setStatus,o=n.setSubmitting,e.prev=1,e.next=4,ae(t.email,t.password).then((function(){}),(function(e){r.current&&(c({success:!1}),a({submit:e.message}),o(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),r.current&&(c({success:!1}),a({submit:e.t0.message}),o(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,i=e.handleBlur,c=e.handleChange,o=e.handleSubmit,s=e.isSubmitting,l=e.touched,u=e.values;return Object(F.jsxs)("form",Object(a.a)(Object(a.a)({noValidate:!0,onSubmit:o},t),{},{children:[Object(F.jsxs)(m.a,{container:!0,spacing:W?0:2,children:[Object(F.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(F.jsx)(f.a,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:Object(a.a)({},n.typography.customInput)})}),Object(F.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(F.jsx)(f.a,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:Object(a.a)({},n.typography.customInput)})})]}),Object(F.jsxs)(g.a,{fullWidth:!0,error:Boolean(l.email&&r.email),sx:Object(a.a)({},n.typography.customInput),children:[Object(F.jsx)(v.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),Object(F.jsx)(y.a,{id:"outlined-adornment-email-register",type:"email",value:u.email,name:"email",onBlur:i,onChange:c,inputProps:{}}),l.email&&r.email&&Object(F.jsx)(k.a,{error:!0,id:"standard-weight-helper-text--register",children:r.email})]}),Object(F.jsxs)(g.a,{fullWidth:!0,error:Boolean(l.password&&r.password),sx:Object(a.a)({},n.typography.customInput),children:[Object(F.jsx)(v.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(F.jsx)(y.a,{id:"outlined-adornment-password-register",type:_?"text":"password",value:u.password,name:"password",label:"Password",onBlur:i,onChange:function(e){c(e),se(e.target.value)},endAdornment:Object(F.jsx)(w.a,{position:"end",children:Object(F.jsx)(C.a,{"aria-label":"toggle password visibility",onClick:ce,onMouseDown:oe,edge:"end",size:"large",children:_?Object(F.jsx)(A.a,{}):Object(F.jsx)(D.a,{})})}),inputProps:{}}),l.password&&r.password&&Object(F.jsx)(k.a,{error:!0,id:"standard-weight-helper-text-password-register",children:r.password})]}),0!==K&&Object(F.jsx)(g.a,{fullWidth:!0,children:Object(F.jsx)(h.a,{sx:{mb:2},children:Object(F.jsxs)(m.a,{container:!0,spacing:2,alignItems:"center",children:[Object(F.jsx)(m.a,{item:!0,children:Object(F.jsx)(h.a,{style:{backgroundColor:null===ee||void 0===ee?void 0:ee.color},sx:{width:85,height:8,borderRadius:"7px"}})}),Object(F.jsx)(m.a,{item:!0,children:Object(F.jsx)(O.a,{variant:"subtitle1",fontSize:"0.75rem",children:null===ee||void 0===ee?void 0:ee.label})})]})})}),Object(F.jsx)(m.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(F.jsx)(m.a,{item:!0,children:Object(F.jsx)(S.a,{control:Object(F.jsx)(z.a,{checked:U,onChange:function(e){return J(e.target.checked)},name:"checked",color:"primary"}),label:Object(F.jsxs)(O.a,{variant:"subtitle1",children:["Agree with \xa0",Object(F.jsx)(O.a,{variant:"subtitle1",component:d.b,to:"#",children:"Terms & Condition."})]})})})}),r.submit&&Object(F.jsx)(h.a,{sx:{mt:3},children:Object(F.jsx)(k.a,{error:!0,children:r.submit})}),Object(F.jsx)(h.a,{sx:{mt:2},children:Object(F.jsx)(B.a,{children:Object(F.jsx)(p.a,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]}))}})]})}},2038:function(e,t,n){"use strict";n.r(t);var a=n(46),r=n(27),i=n(624),c=n(49),o=n(570),s=n(149),l=n(57),d=n(257),u=n(766),b=n(672),j=n(263),m=n(1004),p=n(768),h=n(686),x=n(687),O=n.p+"static/media/img-a2-signup.66f0729d.svg",f=n(1),g=[{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(r.a)(),t=Object(i.a)(e.breakpoints.down("md")),n=Object(i.a)(e.breakpoints.down("lg"));return Object(f.jsx)(u.a,{children:Object(f.jsxs)(c.a,{container:!0,justifyContent:t?"center":"space-between",alignItems:"center",children:[Object(f.jsx)(c.a,{item:!0,md:6,lg:7,xs:12,sx:{minHeight:"100vh"},children:Object(f.jsxs)(c.a,{sx:{minHeight:"100vh"},container:!0,alignItems:t?"center":"flex-start",justifyContent:t?"center":"space-between",children:[Object(f.jsx)(c.a,{item:!0,sx:{display:{xs:"none",md:"block"},m:3},children:Object(f.jsx)(a.b,{to:"#",children:Object(f.jsx)(j.a,{})})}),Object(f.jsx)(c.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 68px)",md:"calc(100vh - 152px)"}},children:Object(f.jsxs)(o.a,{justifyContent:"center",alignItems:"center",spacing:5,m:2,children:[Object(f.jsx)(s.a,{component:a.b,to:"#",sx:{display:{xs:"block",md:"none"}},children:Object(f.jsx)(j.a,{})}),Object(f.jsx)(b.a,{border:n,children:Object(f.jsxs)(c.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(f.jsx)(c.a,{item:!0,xs:12,children:Object(f.jsxs)(o.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(f.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),Object(f.jsx)(l.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})}),Object(f.jsx)(c.a,{item:!0,xs:12,children:Object(f.jsx)(m.a,{})}),Object(f.jsx)(c.a,{item:!0,xs:12,children:Object(f.jsx)(d.a,{})}),Object(f.jsx)(c.a,{item:!0,xs:12,children:Object(f.jsx)(c.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(f.jsx)(l.a,{component:a.b,to:"/pages/login/login2",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})]})}),Object(f.jsx)(c.a,{item:!0,xs:12,sx:{m:3},children:Object(f.jsx)(h.a,{})})]})}),Object(f.jsx)(c.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(f.jsx)(p.a,{children:Object(f.jsxs)(c.a,{item:!0,container:!0,justifyContent:"center",children:[Object(f.jsx)(c.a,{item:!0,xs:12,children:Object(f.jsx)(c.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(f.jsx)(c.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(f.jsx)(x.a,{items:g})})})}),Object(f.jsx)(c.a,{item:!0,xs:12,children:Object(f.jsx)("img",{alt:"Auth method",src:O,style:{maxWidth:"100%",margin:"0 auto",display:"block",width:300}})})]})})})]})})}},666:function(e,t,n){"use strict";var a=n(13),r=n(5),i=n(7),c=n(2),o=n(0),s=(n(10),n(8)),l=n(148),d=n(15),u=n(124),b=n(9),j=n(6),m=n(11),p=n(127),h=n(20),x=n(57),O=n(104),f=n(125);function g(e){return Object(O.a)("MuiLink",e)}var v=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=Object(j.a)(x.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(d.b)(t,"palette.".concat(function(e){return w[e]||e}(n.color)))||n.color;return Object(c.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(u.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(r.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),S=o.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiLink"}),r=n.className,d=n.color,u=void 0===d?"primary":d,j=n.component,x=void 0===j?"a":j,O=n.onBlur,f=n.onFocus,v=n.TypographyClasses,w=n.underline,S=void 0===w?"always":w,z=n.variant,I=void 0===z?"inherit":z,M=Object(i.a)(n,k),R=Object(p.a)(),P=R.isFocusVisibleRef,V=R.onBlur,B=R.onFocus,E=R.ref,W=o.useState(!1),A=Object(a.a)(W,2),H=A[0],D=A[1],F=Object(h.a)(t,E),L=Object(c.a)({},n,{color:u,component:x,focusVisible:H,underline:S,variant:I}),N=function(e){var t=e.classes,n=e.component,a=e.focusVisible,r=e.underline,i={root:["root","underline".concat(Object(b.a)(r)),"button"===n&&"button",a&&"focusVisible"]};return Object(l.a)(i,g,t)}(L);return Object(y.jsx)(C,Object(c.a)({className:Object(s.default)(N.root,r),classes:v,color:u,component:x,onBlur:function(e){V(e),!1===P.current&&D(!1),O&&O(e)},onFocus:function(e){B(e),!0===P.current&&D(!0),f&&f(e)},ref:F,ownerState:L,variant:I},M))}));t.a=S},672:function(e,t,n){"use strict";var a=n(4),r=n(93),i=n(149),c=n(172),o=n(1),s=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,s);return Object(o.jsx)(c.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(o.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},679:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},684:function(e,t,n){"use strict";var a=n(5),r=n(7),i=n(2),c=n(0),o=(n(10),n(148)),s=n(124),l=n(175),d=n(31),u=n(1),b=Object(d.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=n(9),h=n(11),x=n(6),O=n(104),f=n(125);function g(e){return Object(O.a)("MuiCheckbox",e)}var v=Object(f.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=Object(x.a)(l.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(p.a)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return Object(i.a)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},Object(a.a)(t,"&.".concat(v.checked,", &.").concat(v.indeterminate),{color:n.palette[r.color].main}),Object(a.a)(t,"&.".concat(v.disabled),{color:n.palette.action.disabled}),t))})),w=Object(u.jsx)(j,{}),C=Object(u.jsx)(b,{}),S=Object(u.jsx)(m,{}),z=c.forwardRef((function(e,t){var n,a,s=Object(h.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?w:l,b=s.color,j=void 0===b?"primary":b,m=s.icon,x=void 0===m?C:m,O=s.indeterminate,f=void 0!==O&&O,v=s.indeterminateIcon,z=void 0===v?S:v,I=s.inputProps,M=s.size,R=void 0===M?"medium":M,P=Object(r.a)(s,y),V=f?z:x,B=f?z:d,E=Object(i.a)({},s,{color:j,indeterminate:f,size:R}),W=function(e){var t=e.classes,n=e.indeterminate,a=e.color,r={root:["root",n&&"indeterminate","color".concat(Object(p.a)(a))]},c=Object(o.a)(r,g,t);return Object(i.a)({},t,c)}(E);return Object(u.jsx)(k,Object(i.a)({type:"checkbox",inputProps:Object(i.a)({"data-indeterminate":f},I),icon:c.cloneElement(V,{fontSize:null!=(n=V.props.fontSize)?n:R}),checkedIcon:c.cloneElement(B,{fontSize:null!=(a=B.props.fontSize)?a:R}),ownerState:E,ref:t},P,{classes:W}))}));t.a=z},686:function(e,t,n){"use strict";var a=n(570),r=n(57),i=n(666),c=n(1);t.a=function(){return Object(c.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},687:function(e,t,n){"use strict";var a=n(4),r=n(49),i=n(57),c=n(709),o=n.n(c),s=n(1);t.a=function(e){var t=e.items;return Object(s.jsx)(o.a,Object(a.a)(Object(a.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(s.jsxs)(r.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(i.a,{variant:"h1",children:e.title})}),Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(i.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},699:function(e,t,n){"use strict";var a=n(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(105)),i=n(1),c=(0,r.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=c},706:function(e,t,n){"use strict";var a=n(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(105)),i=n(1),c=(0,r.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=c},764:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.a57081bd.svg"},765:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(33),r=n.n(a),i=function(e){return e<2?{label:"Poor",color:r.a.errorMain}:e<3?{label:"Weak",color:r.a.warningDark}:e<4?{label:"Normal",color:r.a.orangeMain}:e<5?{label:"Good",color:r.a.successMain}:e<6?{label:"Strong",color:r.a.successDark}:{label:"Poor",color:r.a.errorMain}},c=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}},766:function(e,t,n){"use strict";var a=n(5),r=n(6),i=Object(r.a)("div")((function(e){var t=e.theme;return Object(a.a)({backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.background.paper,minHeight:"100vh"},t.breakpoints.down("lg"),{backgroundColor:"dark"===t.palette.mode?t.palette.dark.main:t.palette.primary.light})}));t.a=i},768:function(e,t,n){"use strict";n(0);var a=n(27),r=n(149),i=n.p+"static/media/img-a2-grid.51f4cf81.svg",c=n.p+"static/media/img-a2-grid-dark.ee5f31a9.svg",o=n(1);t.a=function(e){var t=e.children,n=Object(a.a)();return Object(o.jsx)(r.a,{component:"span",sx:{display:"flex",minHeight:"100%",height:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(c,")"):"url(".concat(i,")"),position:"absolute",backgroundPosition:"bottom left",backgroundRepeat:"no-repeat",overflow:"hidden",m:"0 0 0 auto",p:"100px 0",top:0,left:0,right:0,bottom:0,"& > *":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",top:0,left:0,right:0,zIndex:1,bottom:0,bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:n.palette.primary.light,opacity:"dark"===n.palette.mode?.85:.9}},children:t})}}}]);
//# sourceMappingURL=51.134bcda7.chunk.js.map