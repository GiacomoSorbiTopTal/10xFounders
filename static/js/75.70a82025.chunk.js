(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[75],{1020:function(e,t,n){"use strict";var a=n(260),i=n(374),c=n(49),r=n(1047),s=n(1);t.a=function(){return Object(s.jsx)(a.a,{children:Object(s.jsx)(i.a,{children:Object(s.jsxs)(c.a,{container:!0,direction:"column",children:[Object(s.jsx)(c.a,{item:!0,children:Object(s.jsxs)(c.a,{container:!0,justifyContent:"space-between",children:[Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"rectangular",width:44,height:44})}),Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"rectangular",width:34,height:34})})]})}),Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"rectangular",sx:{my:2},height:40})}),Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"rectangular",height:30})})]})})})}},1021:function(e,t,n){"use strict";var a=n(260),i=n(647),c=n(651),r=n(653),s=n(1047),o=n(627),j=n(1);t.a=function(){return Object(j.jsx)(a.a,{sx:{p:2},children:Object(j.jsx)(i.a,{sx:{py:0},children:Object(j.jsxs)(c.a,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[Object(j.jsx)(r.a,{children:Object(j.jsx)(s.a,{variant:"rectangular",width:44,height:44})}),Object(j.jsx)(o.a,{sx:{py:0},primary:Object(j.jsx)(s.a,{variant:"rectangular",height:20}),secondary:Object(j.jsx)(s.a,{variant:"text"})})]})})})}},1047:function(e,t,n){"use strict";var a=n(75),i=n(7),c=n(2),r=n(0),s=n(8),o=(n(10),n(62)),j=n(148);n(5);function l(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function h(e){return parseFloat(e)}var b=n(124),d=n(6),x=n(11),u=n(104),O=n(125);function g(e){return Object(u.a)("MuiSkeleton",e)}Object(O.a)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var m,p,v,f,w,y,C,k,M=n(1),L=["animation","className","component","height","style","variant","width"],S=Object(o.c)(w||(w=m||(m=Object(a.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),V=Object(o.c)(y||(y=p||(p=Object(a.a)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),I=Object(d.a)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,a=l(t.shape.borderRadius)||"px",i=h(t.shape.borderRadius);return Object(c.a)({display:"block",backgroundColor:Object(b.a)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(a,"/").concat(Math.round(i/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&Object(o.b)(C||(C=v||(v=Object(a.a)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),S)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&Object(o.b)(k||(k=f||(f=Object(a.a)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),V,n.palette.action.hover)})),R=r.forwardRef((function(e,t){var n=Object(x.a)({props:e,name:"MuiSkeleton"}),a=n.animation,r=void 0===a?"pulse":a,o=n.className,l=n.component,h=void 0===l?"span":l,b=n.height,d=n.style,u=n.variant,O=void 0===u?"text":u,m=n.width,p=Object(i.a)(n,L),v=Object(c.a)({},n,{animation:r,component:h,variant:O,hasChildren:Boolean(p.children)}),f=function(e){var t=e.classes,n=e.variant,a=e.animation,i=e.hasChildren,c=e.width,r=e.height,s={root:["root",n,a,i&&"withChildren",i&&!c&&"fitContent",i&&!r&&"heightAuto"]};return Object(j.a)(s,g,t)}(v);return Object(M.jsx)(I,Object(c.a)({as:h,ref:t,className:Object(s.default)(f.root,o),ownerState:v},p,{style:Object(c.a)({width:m,height:b},d)}))}));t.a=R},1077:function(e,t,n){"use strict";var a=n(260),i=n(374),c=n(49),r=n(1047),s=n(58),o=n(1);t.a=function(){return Object(o.jsxs)(a.a,{children:[Object(o.jsx)(i.a,{children:Object(o.jsxs)(c.a,{container:!0,spacing:s.c,children:[Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:s.c,children:[Object(o.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20,width:20})})]})}),Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsx)(r.a,{variant:"rectangular",height:150})}),Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,spacing:1,children:[Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,spacing:1,children:[Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,spacing:1,children:[Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,spacing:1,children:[Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,spacing:1,children:[Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(o.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})}),Object(o.jsx)(c.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(o.jsx)(c.a,{item:!0,xs:6,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})})]})})]})}),Object(o.jsx)(i.a,{sx:{p:1.25,display:"flex",pt:0,justifyContent:"center"},children:Object(o.jsx)(r.a,{variant:"rectangular",height:25,width:75})})]})}},1080:function(e,t,n){"use strict";var a=n(260),i=n(374),c=n(49),r=n(1047),s=n(58),o=n(1);t.a=function(){return Object(o.jsx)(a.a,{children:Object(o.jsx)(i.a,{children:Object(o.jsxs)(c.a,{container:!0,spacing:s.c,children:[Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:s.c,children:[Object(o.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(o.jsxs)(c.a,{container:!0,spacing:1,children:[Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsx)(r.a,{variant:"text"})}),Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(o.jsx)(c.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"rectangular",height:50,width:80})})]})}),Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsx)(r.a,{variant:"rectangular",height:530})})]})})})}},1952:function(e,t,n){"use strict";n.r(t);var a=n(49),i=n(126),c=n(172),r=n(664),s=n(1020),o=n(1021),j=n(1080),l=n(1077),h=n(58),b=n(1);t.default=function(){return Object(b.jsx)(c.a,{title:"Skeleton",secondary:Object(b.jsx)(r.a,{link:"https://next.material-ui.com/components/skeleton/"}),children:Object(b.jsxs)(a.a,{container:!0,spacing:h.c,children:[Object(b.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(i.a,{title:"Example  1",children:Object(b.jsx)(s.a,{})})}),Object(b.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(i.a,{title:"Example 2",children:Object(b.jsxs)(a.a,{container:!0,spacing:h.c,children:[Object(b.jsx)(a.a,{item:!0,xs:12,children:Object(b.jsx)(o.a,{})}),Object(b.jsx)(a.a,{item:!0,xs:12,children:Object(b.jsx)(o.a,{})})]})})}),Object(b.jsx)(a.a,{item:!0,xs:12,sm:12,md:8,children:Object(b.jsx)(i.a,{title:"Example 3",children:Object(b.jsx)(j.a,{})})}),Object(b.jsx)(a.a,{item:!0,xs:12,sm:12,md:4,children:Object(b.jsx)(i.a,{title:"Example 4",children:Object(b.jsx)(l.a,{})})})]})})}},663:function(e,t,n){"use strict";var a=n(4),i=n(93),c=(n(0),n(27)),r=n(577),s=n(1),o=["className","color","outline","size","sx"];t.a=function(e){e.className;var t=e.color,n=e.outline,j=e.size,l=e.sx,h=Object(i.a)(e,o),b=Object(c.a)(),d=t&&!n&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},x=n&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},u={};switch(j){case"badge":u={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":u={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":u={width:b.spacing(5),height:b.spacing(5)};break;case"lg":u={width:b.spacing(9),height:b.spacing(9)};break;case"xl":u={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":u={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:u={}}return Object(s.jsx)(r.a,Object(a.a)({sx:Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},d),x),u),l)},h))}},664:function(e,t,n){"use strict";n(0);var a=n(27),i=n(581),c=n(372),r=n(666),s=n(663),o=n(1);t.a=function(e){var t=e.title,n=e.link,j=e.icon,l=Object(a.a)();return Object(o.jsx)(i.a,{title:t||"Reference",placement:"left",children:Object(o.jsxs)(c.a,{disableRipple:!0,children:[!j&&Object(o.jsx)(s.a,{component:r.a,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(o.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(o.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:l.palette.primary[800]}),Object(o.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:l.palette.primary.main}),Object(o.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:l.palette.primary[800]}),Object(o.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:l.palette.primary.main})]}),Object(o.jsx)("defs",{children:Object(o.jsx)("clipPath",{id:"clip0",children:Object(o.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),j&&Object(o.jsx)(s.a,{component:r.a,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:j})]})})}},666:function(e,t,n){"use strict";var a=n(13),i=n(5),c=n(7),r=n(2),s=n(0),o=(n(10),n(8)),j=n(148),l=n(15),h=n(124),b=n(9),d=n(6),x=n(11),u=n(127),O=n(20),g=n(57),m=n(104),p=n(125);function v(e){return Object(m.a)("MuiLink",e)}var f=Object(p.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=n(1),y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=Object(d.a)(g.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(l.b)(t,"palette.".concat(function(e){return C[e]||e}(n.color)))||n.color;return Object(r.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(h.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(i.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(f.focusVisible),{outline:"auto"}))})),M=s.forwardRef((function(e,t){var n=Object(x.a)({props:e,name:"MuiLink"}),i=n.className,l=n.color,h=void 0===l?"primary":l,d=n.component,g=void 0===d?"a":d,m=n.onBlur,p=n.onFocus,f=n.TypographyClasses,C=n.underline,M=void 0===C?"always":C,L=n.variant,S=void 0===L?"inherit":L,V=Object(c.a)(n,y),I=Object(u.a)(),R=I.isFocusVisibleRef,z=I.onBlur,W=I.onFocus,N=I.ref,A=s.useState(!1),B=Object(a.a)(A,2),F=B[0],D=B[1],Z=Object(O.a)(t,N),E=Object(r.a)({},n,{color:h,component:g,focusVisible:F,underline:M,variant:S}),T=function(e){var t=e.classes,n=e.component,a=e.focusVisible,i=e.underline,c={root:["root","underline".concat(Object(b.a)(i)),"button"===n&&"button",a&&"focusVisible"]};return Object(j.a)(c,v,t)}(E);return Object(w.jsx)(k,Object(r.a)({className:Object(o.default)(T.root,i),classes:f,color:h,component:g,onBlur:function(e){z(e),!1===R.current&&D(!1),m&&m(e)},onFocus:function(e){W(e),!0===R.current&&D(!0),p&&p(e)},ref:Z,ownerState:E,variant:S},V))}));t.a=M}}]);
//# sourceMappingURL=75.70a82025.chunk.js.map