(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[80],{1005:function(e,t,n){"use strict";var a=n(4),i=n(66),r=n.n(i),c=n(94),s=n(27),o=n(261),l=n(656),d=n(642),u=n(658),j=n(149),b=n(650),m=n(32),h=n(24),x=n(675),p=n(676),O=n(174),f=n(129),g=n(679),v=n(18),y=n(1);t.a=function(e){var t=Object.assign({},e),n=Object(s.a)(),i=Object(g.a)(),w=Object(m.c)(),k=Object(h.e)(),S=Object(f.a)().resetPassword;return Object(y.jsx)(p.b,{initialValues:{email:"",password:"",submit:null},validationSchema:x.d().shape({email:x.f().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,c=n.setStatus,s=n.setSubmitting,e.prev=1,e.next=4,S(t.email);case 4:i.current&&(c({success:!0}),s(!1),w({type:v.H,open:!0,message:"Check mail for reset password link",variant:"alert",alertSeverity:"success"}),setTimeout((function(){k("/login",{replace:!0})}),1500)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),i.current&&(c({success:!1}),a({submit:e.t0.message}),s(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,r=e.handleBlur,c=e.handleChange,s=e.handleSubmit,m=e.isSubmitting,h=e.touched,x=e.values;return Object(y.jsxs)("form",Object(a.a)(Object(a.a)({noValidate:!0,onSubmit:s},t),{},{children:[Object(y.jsxs)(o.a,{fullWidth:!0,error:Boolean(h.email&&i.email),sx:Object(a.a)({},n.typography.customInput),children:[Object(y.jsx)(l.a,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address / Username"}),Object(y.jsx)(d.a,{id:"outlined-adornment-email-forgot",type:"email",value:x.email,name:"email",onBlur:r,onChange:c,label:"Email Address / Username",inputProps:{}}),h.email&&i.email&&Object(y.jsx)(u.a,{error:!0,id:"standard-weight-helper-text-email-forgot",children:i.email})]}),i.submit&&Object(y.jsx)(j.a,{sx:{mt:3},children:Object(y.jsx)(u.a,{error:!0,children:i.submit})}),Object(y.jsx)(j.a,{sx:{mt:2},children:Object(y.jsx)(O.a,{children:Object(y.jsx)(b.a,{disableElevation:!0,disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})]}))}})}},2035:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(46),r=n(6),c=n(27),s=n(624),o=n(49),l=n(570),d=n(57),u=n(257),j=n(685),b=n(672),m=n(263),h=n(1005),x=n(767),p=n(687),O=n.p+"static/media/auth-forgot-pass-multi-card.a3f020c6.svg",f=n(1),g=Object(r.a)("span")((function(e){var t=e.theme;return{"&:before":Object(a.a)({content:'""',position:"absolute",top:"18%",left:"18%",width:515,height:470,backgroundImage:"url(".concat(O,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite",animationDelay:"1s"},t.breakpoints.down("xl"),{top:"10%",left:"6%",backgroundSize:450})}})),v=[{title:"Powerful and easy to use multipurpose theme.",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(c.a)(),t=Object(s.a)(e.breakpoints.down("md"));return Object(f.jsx)(j.a,{children:Object(f.jsxs)(o.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh"},children:[Object(f.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,sx:{my:3},children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(o.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsxs)(o.a,{container:!0,direction:t?"column-reverse":"row",alignItems:t?"center":"inherit",justifyContent:t?"center":"space-between",children:[Object(f.jsx)(o.a,{item:!0,children:Object(f.jsxs)(l.a,{justifyContent:t?"center":"flex-start",textAlign:t?"center":"inherit",children:[Object(f.jsx)(d.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Forgot password?"}),Object(f.jsx)(d.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Enter credentials to continue"})]})}),Object(f.jsx)(o.a,{item:!0,sx:{mb:{xs:3,sm:0}},children:Object(f.jsx)(i.b,{to:"#",children:Object(f.jsx)(m.a,{})})})]})}),Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsx)(l.a,{direction:"row",justifyContent:t?"center":"flex-start",children:Object(f.jsx)(d.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your email address below and we'll send you password reset OTP."})})}),Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsx)(h.a,{})}),Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsx)(u.a,{})}),Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsx)(o.a,{item:!0,container:!0,direction:"column",alignItems:"flex-end",xs:12,children:Object(f.jsx)(d.a,{component:i.b,to:"/pages/login/login1",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})}),Object(f.jsx)(o.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(f.jsx)(x.a,{children:Object(f.jsxs)(o.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:[Object(f.jsxs)(o.a,{item:!0,xs:12,children:[Object(f.jsx)("span",{}),Object(f.jsx)(g,{})]}),Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(f.jsx)(o.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(f.jsx)(p.a,{items:v})})})})]})})})]})})}},672:function(e,t,n){"use strict";var a=n(4),i=n(93),r=n(149),c=n(172),s=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(i.a)(e,o);return Object(s.jsx)(c.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(s.jsx)(r.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},679:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},685:function(e,t,n){"use strict";var a=n(6),i=Object(a.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=i},687:function(e,t,n){"use strict";var a=n(4),i=n(49),r=n(57),c=n(709),s=n.n(c),o=n(1);t.a=function(e){var t=e.items;return Object(o.jsx)(s.a,Object(a.a)(Object(a.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(o.jsxs)(i.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(o.jsx)(i.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"h1",children:e.title})}),Object(o.jsx)(i.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},767:function(e,t,n){"use strict";n(0);var a=n(27),i=n(149),r=n.p+"static/media/auth-pattern.d80b0e94.svg",c=n.p+"static/media/auth-pattern-dark.df61463d.svg",s=n(1);t.a=function(e){var t=e.children,n=Object(a.a)();return Object(s.jsx)(i.a,{component:"span",sx:{display:"flex",minHeight:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(c,")"):"url(".concat(r,")"),position:"absolute",backgroundPosition:"0 0",overflow:"hidden",m:"0 0 0 auto",top:0,left:0,right:0,bottom:0,opacity:"dark"===n.palette.mode?.85:.9},children:t})}}}]);
//# sourceMappingURL=80.9fc8a423.chunk.js.map