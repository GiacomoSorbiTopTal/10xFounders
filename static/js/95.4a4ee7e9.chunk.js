(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[95],{1967:function(e,t,n){"use strict";n.r(t);var r=n(46),o=n(27),a=n(624),i=n(49),c=n(57),s=n(650),l=n(685),u=n(672),d=n(263),b=n(174),j=n(686),h=n(1);t.default=function(){var e=Object(o.a)(),t=Object(a.a)(e.breakpoints.down("md"));return Object(h.jsx)(l.a,{children:Object(h.jsxs)(i.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(h.jsx)(i.a,{item:!0,xs:12,children:Object(h.jsx)(i.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(h.jsx)(i.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(i.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(h.jsx)(i.a,{item:!0,sx:{mb:3},children:Object(h.jsx)(r.b,{to:"#",children:Object(h.jsx)(d.a,{})})}),Object(h.jsx)(i.a,{item:!0,xs:12,children:Object(h.jsxs)(i.a,{container:!0,alignItems:"center",justifyContent:"center",textAlign:"center",spacing:2,children:[Object(h.jsx)(i.a,{item:!0,xs:12,children:Object(h.jsx)(c.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Check Your Mail"})}),Object(h.jsx)(i.a,{item:!0,xs:12,children:Object(h.jsx)(c.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"We have sent a password recover instructions to your email."})})]})}),Object(h.jsx)(i.a,{item:!0,xs:12,children:Object(h.jsx)(b.a,{children:Object(h.jsx)(s.a,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Open Mail"})})})]})})})})}),Object(h.jsx)(i.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(h.jsx)(j.a,{})})]})})}},666:function(e,t,n){"use strict";var r=n(13),o=n(5),a=n(7),i=n(2),c=n(0),s=(n(10),n(8)),l=n(148),u=n(15),d=n(124),b=n(9),j=n(6),h=n(11),m=n(127),x=n(20),p=n(57),O=n(104),v=n(125);function f(e){return Object(O.a)("MuiLink",e)}var y=Object(v.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=n(1),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=Object(j.a)(p.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(u.b)(t,"palette.".concat(function(e){return w[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(d.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(o.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.focusVisible),{outline:"auto"}))})),S=c.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiLink"}),o=n.className,u=n.color,d=void 0===u?"primary":u,j=n.component,p=void 0===j?"a":j,O=n.onBlur,v=n.onFocus,y=n.TypographyClasses,w=n.underline,S=void 0===w?"always":w,M=n.variant,A=void 0===M?"inherit":M,B=Object(a.a)(n,k),D=Object(m.a)(),H=D.isFocusVisibleRef,V=D.onBlur,F=D.onFocus,R=D.ref,W=c.useState(!1),z=Object(r.a)(W,2),L=z[0],N=z[1],I=Object(x.a)(t,R),T=Object(i.a)({},n,{color:d,component:p,focusVisible:L,underline:S,variant:A}),J=function(e){var t=e.classes,n=e.component,r=e.focusVisible,o=e.underline,a={root:["root","underline".concat(Object(b.a)(o)),"button"===n&&"button",r&&"focusVisible"]};return Object(l.a)(a,f,t)}(T);return Object(g.jsx)(C,Object(i.a)({className:Object(s.default)(J.root,o),classes:y,color:d,component:p,onBlur:function(e){V(e),!1===H.current&&N(!1),O&&O(e)},onFocus:function(e){F(e),!0===H.current&&N(!0),v&&v(e)},ref:I,ownerState:T,variant:A},B))}));t.a=S},672:function(e,t,n){"use strict";var r=n(4),o=n(93),a=n(149),i=n(172),c=n(1),s=["children"];t.a=function(e){var t=e.children,n=Object(o.a)(e,s);return Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(c.jsx)(a.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},685:function(e,t,n){"use strict";var r=n(6),o=Object(r.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=o},686:function(e,t,n){"use strict";var r=n(570),o=n(57),a=n(666),i=n(1);t.a=function(){return Object(i.jsxs)(r.a,{direction:"row",justifyContent:"space-between",children:[Object(i.jsx)(o.a,{variant:"subtitle2",component:a.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(i.jsx)(o.a,{variant:"subtitle2",component:a.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}}}]);
//# sourceMappingURL=95.4a4ee7e9.chunk.js.map