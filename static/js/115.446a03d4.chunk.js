(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[115],{2019:function(e,t,n){"use strict";n.r(t);var a=n(13),i=n(0),r=n.n(i),o=n(583),c=n(374),l=n(57),s=n(257),d=n(659),u=n(49),b=n(650),j=n(639),p=n(172),m=n(215),h=n.n(m),x=n(1);function O(){return Math.round(20*Math.random())-10}function f(){var e=50+O(),t=50+O();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var g=r.a.forwardRef((function(e,t){var n=e.modalStyle,a=e.handleClose;return Object(x.jsx)("div",{ref:t,tabIndex:-1,children:Object(x.jsxs)(p.a,{style:n,sx:{position:"absolute",width:{xs:280,lg:450},top:"50%",left:"50%",transform:"translate(-50%, -50%)"},title:"Title",content:!1,secondary:Object(x.jsx)(o.a,{onClick:a,size:"large",children:Object(x.jsx)(h.a,{fontSize:"small"})}),children:[Object(x.jsxs)(c.a,{children:[Object(x.jsx)(l.a,{variant:"body1",children:"Laboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex."}),Object(x.jsx)(l.a,{variant:"body2",sx:{mt:2},children:"Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute est in mollit irure enim tempor in."})]}),Object(x.jsx)(s.a,{}),Object(x.jsx)(d.a,{children:Object(x.jsx)(v,{})})]})})}));function v(){var e=r.a.useState(f),t=Object(a.a)(e,1)[0],n=r.a.useState(!1),i=Object(a.a)(n,2),o=i[0],c=i[1],l=function(){c(!1)};return Object(x.jsxs)(u.a,{container:!0,justifyContent:"flex-end",children:[Object(x.jsx)(b.a,{variant:"contained",type:"button",onClick:function(){c(!0)},children:"Open Modal"}),Object(x.jsx)(j.a,{open:o,onClose:l,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(x.jsx)(g,{modalStyle:t,handleClose:l})})]})}var y=n(6),w=Object(y.a)("div")({marginBottom:16,height:500,flexGrow:1,minWidth:300,zIndex:-1,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}});function k(){var e=r.a.useRef(null);return Object(x.jsx)(w,{ref:e,children:Object(x.jsx)(j.a,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",sx:{display:"flex",p:1,alignItems:"center",justifyContent:"center"},container:function(){return e.current},children:Object(x.jsxs)(p.a,{sx:{width:450,zIndex:1},title:"Server Side Modal",content:!1,secondary:Object(x.jsx)(o.a,{size:"large",children:Object(x.jsx)(h.a,{fontSize:"small"})}),children:[Object(x.jsxs)(c.a,{children:[Object(x.jsx)(l.a,{variant:"body1",children:"Laboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex."}),Object(x.jsx)(l.a,{variant:"body2",sx:{mt:2},children:"Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute est in mollit irure enim tempor in."})]}),Object(x.jsx)(s.a,{}),Object(x.jsx)(d.a,{children:Object(x.jsx)(u.a,{container:!0,justifyContent:"flex-end",children:Object(x.jsx)(b.a,{variant:"contained",type:"button",children:"Open Modal"})})})]})})})}var L=n(664);t.default=function(e){return Object(x.jsxs)(p.a,{title:"Simple Modal",secondary:Object(x.jsx)(L.a,{link:"https://next.material-ui.com/components/modal/"}),children:[Object(x.jsx)(k,{}),Object(x.jsx)(v,{})]})}},663:function(e,t,n){"use strict";var a=n(4),i=n(93),r=(n(0),n(27)),o=n(577),c=n(1),l=["className","color","outline","size","sx"];t.a=function(e){e.className;var t=e.color,n=e.outline,s=e.size,d=e.sx,u=Object(i.a)(e,l),b=Object(r.a)(),j=t&&!n&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},p=n&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},m={};switch(s){case"badge":m={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":m={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":m={width:b.spacing(5),height:b.spacing(5)};break;case"lg":m={width:b.spacing(9),height:b.spacing(9)};break;case"xl":m={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":m={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:m={}}return Object(c.jsx)(o.a,Object(a.a)({sx:Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},j),p),m),d)},u))}},664:function(e,t,n){"use strict";n(0);var a=n(27),i=n(581),r=n(372),o=n(666),c=n(663),l=n(1);t.a=function(e){var t=e.title,n=e.link,s=e.icon,d=Object(a.a)();return Object(l.jsx)(i.a,{title:t||"Reference",placement:"left",children:Object(l.jsxs)(r.a,{disableRipple:!0,children:[!s&&Object(l.jsx)(c.a,{component:o.a,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),Object(l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),Object(l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),Object(l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&Object(l.jsx)(c.a,{component:o.a,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:s})]})})}},666:function(e,t,n){"use strict";var a=n(13),i=n(5),r=n(7),o=n(2),c=n(0),l=(n(10),n(8)),s=n(148),d=n(15),u=n(124),b=n(9),j=n(6),p=n(11),m=n(127),h=n(20),x=n(57),O=n(104),f=n(125);function g(e){return Object(O.a)("MuiLink",e)}var v=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(j.a)(x.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(d.b)(t,"palette.".concat(function(e){return k[e]||e}(n.color)))||n.color;return Object(o.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(u.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(i.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),V=c.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiLink"}),i=n.className,d=n.color,u=void 0===d?"primary":d,j=n.component,x=void 0===j?"a":j,O=n.onBlur,f=n.onFocus,v=n.TypographyClasses,k=n.underline,V=void 0===k?"always":k,C=n.variant,M=void 0===C?"inherit":C,S=Object(r.a)(n,w),z=Object(m.a)(),R=z.isFocusVisibleRef,N=z.onBlur,F=z.onFocus,q=z.ref,B=c.useState(!1),D=Object(a.a)(B,2),Z=D[0],A=D[1],I=Object(h.a)(t,q),P=Object(o.a)({},n,{color:u,component:x,focusVisible:Z,underline:V,variant:M}),T=function(e){var t=e.classes,n=e.component,a=e.focusVisible,i=e.underline,r={root:["root","underline".concat(Object(b.a)(i)),"button"===n&&"button",a&&"focusVisible"]};return Object(s.a)(r,g,t)}(P);return Object(y.jsx)(L,Object(o.a)({className:Object(l.default)(T.root,i),classes:v,color:u,component:x,onBlur:function(e){N(e),!1===R.current&&A(!1),O&&O(e)},onFocus:function(e){F(e),!0===R.current&&A(!0),f&&f(e)},ref:I,ownerState:P,variant:M},S))}));t.a=V}}]);
//# sourceMappingURL=115.446a03d4.chunk.js.map