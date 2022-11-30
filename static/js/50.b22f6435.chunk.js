(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[50],{1004:function(e,t,a){"use strict";var n=a(4),r=a(66),i=a.n(r),c=a(94),o=a(13),s=a(0),l=a.n(s),d=a(46),u=a(32),j=a(27),b=a(624),m=a(49),h=a(650),p=a(149),x=a(257),O=a(57),f=a(579),g=a(261),v=a(656),w=a(642),k=a(658),y=a(646),C=a(583),S=a(150),z=a(684),I=a(675),P=a(676),M=a(129),R=a(679),E=a(764),B=a(174),V=a(765),W=a(699),H=a.n(W),A=a(706),D=a.n(A),G=a(1);t.a=function(e){var t=Object.assign({},e),a=Object(j.a)(),r=Object(R.a)(),W=Object(b.a)(a.breakpoints.down("md")),A=Object(u.d)((function(e){return e.customization})),F=l.a.useState(!1),_=Object(o.a)(F,2),q=_[0],L=_[1],N=l.a.useState(!0),T=Object(o.a)(N,2),U=T[0],J=T[1],Z=l.a.useState(0),$=Object(o.a)(Z,2),K=$[0],Q=$[1],X=l.a.useState(),Y=Object(o.a)(X,2),ee=Y[0],te=Y[1],ae=Object(M.a)(),ne=ae.firebaseRegister,re=ae.firebaseGoogleSignIn,ie=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){L(!q)},oe=function(e){e.preventDefault()},se=function(e){var t=Object(V.b)(e);Q(t),te(Object(V.a)(t))};return Object(s.useEffect)((function(){se("123456")}),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(G.jsx)(m.a,{item:!0,xs:12,children:Object(G.jsx)(B.a,{children:Object(G.jsxs)(h.a,{variant:"outlined",fullWidth:!0,onClick:ie,size:"large",sx:{color:"grey.700",backgroundColor:"dark"===a.palette.mode?a.palette.dark.main:a.palette.grey[50],borderColor:"dark"===a.palette.mode?a.palette.dark.light+20:a.palette.grey[100]},children:[Object(G.jsx)(p.a,{sx:{mr:{xs:1,sm:2,width:20}},children:Object(G.jsx)("img",{src:E.a,alt:"google",width:16,height:16,style:{marginRight:W?8:16}})}),"Sign up with Google"]})})}),Object(G.jsx)(m.a,{item:!0,xs:12,children:Object(G.jsxs)(p.a,{sx:{alignItems:"center",display:"flex"},children:[Object(G.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(G.jsx)(h.a,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"dark"===a.palette.mode?"".concat(a.palette.dark.light+20," !important"):"".concat(a.palette.grey[100]," !important"),color:"".concat(a.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(A.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),Object(G.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(G.jsx)(m.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(G.jsx)(p.a,{sx:{mb:2},children:Object(G.jsx)(O.a,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),Object(G.jsx)(P.b,{initialValues:{email:"",password:"",submit:null},validationSchema:I.d().shape({email:I.f().email("Must be a valid email").max(255).required("Email is required"),password:I.f().max(255).required("Password is required")}),onSubmit:function(){var e=Object(c.a)(i.a.mark((function e(t,a){var n,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setErrors,c=a.setStatus,o=a.setSubmitting,e.prev=1,e.next=4,ne(t.email,t.password).then((function(){}),(function(e){r.current&&(c({success:!1}),n({submit:e.message}),o(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),r.current&&(c({success:!1}),n({submit:e.t0.message}),o(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,i=e.handleBlur,c=e.handleChange,o=e.handleSubmit,s=e.isSubmitting,l=e.touched,u=e.values;return Object(G.jsxs)("form",Object(n.a)(Object(n.a)({noValidate:!0,onSubmit:o},t),{},{children:[Object(G.jsxs)(m.a,{container:!0,spacing:W?0:2,children:[Object(G.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(G.jsx)(f.a,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:Object(n.a)({},a.typography.customInput)})}),Object(G.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(G.jsx)(f.a,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:Object(n.a)({},a.typography.customInput)})})]}),Object(G.jsxs)(g.a,{fullWidth:!0,error:Boolean(l.email&&r.email),sx:Object(n.a)({},a.typography.customInput),children:[Object(G.jsx)(v.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),Object(G.jsx)(w.a,{id:"outlined-adornment-email-register",type:"email",value:u.email,name:"email",onBlur:i,onChange:c,inputProps:{}}),l.email&&r.email&&Object(G.jsx)(k.a,{error:!0,id:"standard-weight-helper-text--register",children:r.email})]}),Object(G.jsxs)(g.a,{fullWidth:!0,error:Boolean(l.password&&r.password),sx:Object(n.a)({},a.typography.customInput),children:[Object(G.jsx)(v.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(G.jsx)(w.a,{id:"outlined-adornment-password-register",type:q?"text":"password",value:u.password,name:"password",label:"Password",onBlur:i,onChange:function(e){c(e),se(e.target.value)},endAdornment:Object(G.jsx)(y.a,{position:"end",children:Object(G.jsx)(C.a,{"aria-label":"toggle password visibility",onClick:ce,onMouseDown:oe,edge:"end",size:"large",children:q?Object(G.jsx)(H.a,{}):Object(G.jsx)(D.a,{})})}),inputProps:{}}),l.password&&r.password&&Object(G.jsx)(k.a,{error:!0,id:"standard-weight-helper-text-password-register",children:r.password})]}),0!==K&&Object(G.jsx)(g.a,{fullWidth:!0,children:Object(G.jsx)(p.a,{sx:{mb:2},children:Object(G.jsxs)(m.a,{container:!0,spacing:2,alignItems:"center",children:[Object(G.jsx)(m.a,{item:!0,children:Object(G.jsx)(p.a,{style:{backgroundColor:null===ee||void 0===ee?void 0:ee.color},sx:{width:85,height:8,borderRadius:"7px"}})}),Object(G.jsx)(m.a,{item:!0,children:Object(G.jsx)(O.a,{variant:"subtitle1",fontSize:"0.75rem",children:null===ee||void 0===ee?void 0:ee.label})})]})})}),Object(G.jsx)(m.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(G.jsx)(m.a,{item:!0,children:Object(G.jsx)(S.a,{control:Object(G.jsx)(z.a,{checked:U,onChange:function(e){return J(e.target.checked)},name:"checked",color:"primary"}),label:Object(G.jsxs)(O.a,{variant:"subtitle1",children:["Agree with \xa0",Object(G.jsx)(O.a,{variant:"subtitle1",component:d.b,to:"#",children:"Terms & Condition."})]})})})}),r.submit&&Object(G.jsx)(p.a,{sx:{mt:3},children:Object(G.jsx)(k.a,{error:!0,children:r.submit})}),Object(G.jsx)(p.a,{sx:{mt:2},children:Object(G.jsx)(B.a,{children:Object(G.jsx)(h.a,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]}))}})]})}},1331:function(e,t,a){"use strict";t.a=a.p+"static/media/auth-signup-blue-card.cae8da7b.svg"},1332:function(e,t,a){"use strict";t.a=a.p+"static/media/auth-signup-white-card.245f388a.svg"},1965:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(46),i=a(6),c=a(27),o=a(624),s=a(49),l=a(570),d=a(57),u=a(257),j=a(685),b=a(672),m=a(263),h=a(1004),p=a(767),x=a(687),O=a(1331),f=a(1332),g=a(1),v=Object(i.a)("span")((function(e){var t=e.theme;return{"&:after":Object(n.a)({content:'""',position:"absolute",top:"45%",left:"35%",width:260,backgroundSize:380,height:290,backgroundImage:"url(".concat(f.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite"},t.breakpoints.down("xl"),{left:"25%",top:"50%"}),"&:before":Object(n.a)({content:'""',position:"absolute",top:"12%",left:"25%",width:360,height:350,backgroundSize:460,backgroundImage:"url(".concat(O.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite",animationDelay:"1s"},t.breakpoints.down("xl"),{top:"10%",left:"15%"})}})),w=[{title:"Powerful and easy to use multipurpose theme.",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(c.a)(),t=Object(o.a)(e.breakpoints.down("md"));return Object(g.jsx)(j.a,{children:Object(g.jsxs)(s.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh"},children:[Object(g.jsx)(s.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,sx:{my:3},children:Object(g.jsx)(b.a,{children:Object(g.jsxs)(s.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsxs)(s.a,{container:!0,direction:t?"column-reverse":"row",alignItems:t?"center":"inherit",justifyContent:t?"center":"space-between",children:[Object(g.jsx)(s.a,{item:!0,children:Object(g.jsxs)(l.a,{justifyContent:t?"center":"flex-start",textAlign:t?"center":"inherit",children:[Object(g.jsx)(d.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),Object(g.jsx)(d.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Enter credentials to continue"})]})}),Object(g.jsx)(s.a,{item:!0,sx:{mb:{xs:3,sm:0}},children:Object(g.jsx)(r.b,{to:"#",children:Object(g.jsx)(m.a,{})})})]})}),Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsx)(h.a,{})}),Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsx)(u.a,{})}),Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsx)(s.a,{item:!0,container:!0,direction:"column",alignItems:"flex-end",xs:12,children:Object(g.jsx)(d.a,{component:r.b,to:"/pages/login/login1",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})}),Object(g.jsx)(s.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(s.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:[Object(g.jsxs)(s.a,{item:!0,xs:12,children:[Object(g.jsx)("span",{}),Object(g.jsx)(v,{})]}),Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsx)(s.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(g.jsx)(s.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(g.jsx)(x.a,{items:w})})})})]})})})]})})}},672:function(e,t,a){"use strict";var n=a(4),r=a(93),i=a(149),c=a(172),o=a(1),s=["children"];t.a=function(e){var t=e.children,a=Object(r.a)(e,s);return Object(o.jsx)(c.a,Object(n.a)(Object(n.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},a),{},{children:Object(o.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},679:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},684:function(e,t,a){"use strict";var n=a(5),r=a(7),i=a(2),c=a(0),o=(a(10),a(148)),s=a(124),l=a(175),d=a(31),u=a(1),j=Object(d.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),b=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=a(9),p=a(11),x=a(6),O=a(104),f=a(125);function g(e){return Object(O.a)("MuiCheckbox",e)}var v=Object(f.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=Object(x.a)(l.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat(Object(h.a)(a.color))]]}})((function(e){var t,a=e.theme,r=e.ownerState;return Object(i.a)({color:a.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===r.color?a.palette.action.active:a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},Object(n.a)(t,"&.".concat(v.checked,", &.").concat(v.indeterminate),{color:a.palette[r.color].main}),Object(n.a)(t,"&.".concat(v.disabled),{color:a.palette.action.disabled}),t))})),y=Object(u.jsx)(b,{}),C=Object(u.jsx)(j,{}),S=Object(u.jsx)(m,{}),z=c.forwardRef((function(e,t){var a,n,s=Object(p.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?y:l,j=s.color,b=void 0===j?"primary":j,m=s.icon,x=void 0===m?C:m,O=s.indeterminate,f=void 0!==O&&O,v=s.indeterminateIcon,z=void 0===v?S:v,I=s.inputProps,P=s.size,M=void 0===P?"medium":P,R=Object(r.a)(s,w),E=f?z:x,B=f?z:d,V=Object(i.a)({},s,{color:b,indeterminate:f,size:M}),W=function(e){var t=e.classes,a=e.indeterminate,n=e.color,r={root:["root",a&&"indeterminate","color".concat(Object(h.a)(n))]},c=Object(o.a)(r,g,t);return Object(i.a)({},t,c)}(V);return Object(u.jsx)(k,Object(i.a)({type:"checkbox",inputProps:Object(i.a)({"data-indeterminate":f},I),icon:c.cloneElement(E,{fontSize:null!=(a=E.props.fontSize)?a:M}),checkedIcon:c.cloneElement(B,{fontSize:null!=(n=B.props.fontSize)?n:M}),ownerState:V,ref:t},R,{classes:W}))}));t.a=z},685:function(e,t,a){"use strict";var n=a(6),r=Object(n.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=r},687:function(e,t,a){"use strict";var n=a(4),r=a(49),i=a(57),c=a(709),o=a.n(c),s=a(1);t.a=function(e){var t=e.items;return Object(s.jsx)(o.a,Object(n.a)(Object(n.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(s.jsxs)(r.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(i.a,{variant:"h1",children:e.title})}),Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(i.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},699:function(e,t,a){"use strict";var n=a(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(105)),i=a(1),c=(0,r.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=c},706:function(e,t,a){"use strict";var n=a(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(105)),i=a(1),c=(0,r.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=c},764:function(e,t,a){"use strict";t.a=a.p+"static/media/social-google.a57081bd.svg"},765:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c}));var n=a(33),r=a.n(n),i=function(e){return e<2?{label:"Poor",color:r.a.errorMain}:e<3?{label:"Weak",color:r.a.warningDark}:e<4?{label:"Normal",color:r.a.orangeMain}:e<5?{label:"Good",color:r.a.successMain}:e<6?{label:"Strong",color:r.a.successDark}:{label:"Poor",color:r.a.errorMain}},c=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}},767:function(e,t,a){"use strict";a(0);var n=a(27),r=a(149),i=a.p+"static/media/auth-pattern.d80b0e94.svg",c=a.p+"static/media/auth-pattern-dark.df61463d.svg",o=a(1);t.a=function(e){var t=e.children,a=Object(n.a)();return Object(o.jsx)(r.a,{component:"span",sx:{display:"flex",minHeight:"100vh",bgcolor:"dark"===a.palette.mode?a.palette.dark.dark:"#fff",backgroundImage:"dark"===a.palette.mode?"url(".concat(c,")"):"url(".concat(i,")"),position:"absolute",backgroundPosition:"0 0",overflow:"hidden",m:"0 0 0 auto",top:0,left:0,right:0,bottom:0,opacity:"dark"===a.palette.mode?.85:.9},children:t})}}}]);
//# sourceMappingURL=50.b22f6435.chunk.js.map