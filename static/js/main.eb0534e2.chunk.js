(this["webpackJsonphumble-character"]=this["webpackJsonphumble-character"]||[]).push([[0],{56:function(e,t,r){e.exports=r(66)},61:function(e,t,r){},66:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(11),o=r.n(l),c=(r(61),r(50)),i=r(49),u=r(17),m=r(91),s=r(106),f=r(93),d=r(94),b=r(95),h=r(52),p=r(108),g=r(109),E=r(96),O=r(107),v=r(97),C=r(98),y=r(68),N=r(99),x=r(100),j=r(101),w=r(102),S=r(103),k=r(110),B=Object(m.a)((function(e){return{mainStat:{fontSize:"24px",marginBottom:"10px"}}})),I=[[18,"#00F800"],[16,"#00E54B"],[14,"#00D4B0"],[12,"#00B7D8"],[10,"#188AF0"],[0,"#146CF6"]],T=[[6,"#00F800"],[5,"#00E54B"],[4,"#00D4B0"],[3,"#00B7D8"],[2,"#188AF0"],[1,"#146CF6"]],R=function(e){for(var t=0;t<I.length;t++){var r=Object(u.a)(I[t],2),a=r[0],n=r[1];if(e>=a)return n}return"#000000"},F=function(e){for(var t=0;t<T.length;t++){var r=Object(u.a)(T[t],2),a=r[0],n=r[1];if(e>=a)return n}return"#000000"},G=function(e){var t=e.stat,r=B();return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{className:r.mainStat,style:{color:R(t.total)}},"".concat(t.total," (").concat(t.modifierString,")")),t.unusedNumbers.map((function(e){return n.a.createElement(k.a,{key:e.sortOrder,label:e.result,size:"small",style:{borderColor:F(e.result)},variant:"outlined"})})),t.usedNumbers.map((function(e){return n.a.createElement(k.a,{key:e.sortOrder,label:e.result,style:{backgroundColor:F(e.result)},size:"small"})})))},D=Object(m.a)((function(e){return{formTitle:{marginRight:"15px"},paper:{marginTop:e.spacing(12),marginBottom:e.spacing(12),display:"flex",flexDirection:"column",alignItems:"center"},title:{flexGrow:1},radioGroup:{flexDirection:"row"},characterTotal:{fontSize:"28px"}}})),M=function(){return Math.floor(6*Math.random())+1},z=function(){return[0,0,0,0].map(M).sort()},W=function(e){return e.slice(1).reduce((function(e,t){return e+t}))},A=function(e){return Math.floor((e.slice(1).reduce((function(e,t){return e+t}))-10)/2)},P=function(){return[null,null,null,null,null,null].map(z).sort((e=W,function(t,r){return e(t)<e(r)?-1:e(t)>e(r)?1:0}));var e},H=function(e){return e.map((function(e){return W(e)})).reduce((function(e,t){return e+t}))},J=function(e){return e.map((function(e){return A(e)})).reduce((function(e,t){return e+t}))},Z=function(e){return{stats:e.rolledCharacter.map((function(e,t){return function(e,t){var r=A(e);return{total:W(e),usedNumbers:e.slice(1).map((function(e,t){return{result:e,sortOrder:t}})),unusedNumbers:e.slice(0,1).map((function(e,t){return{result:e,sortOrder:t}})),modifier:r,modifierString:r>=0?"+".concat(r):"".concat(r),sortOrder:t}}(e,t)})),rollOrdinalNumber:e.rollOrdinalNumber,rolledCharacter:e.rolledCharacter}},$=function(){var e=D(),t=Object(a.useState)({list:[{rolledCharacter:P(),rollOrdinalNumber:1}],rollOrdinalNumber:1}),r=Object(u.a)(t,2),l=r[0],o=r[1],m=Object(a.useState)(!1),k=Object(u.a)(m,2),B=k[0],I=k[1],T=Object(a.useState)((function(){return H})),R=Object(u.a)(T,2),F=R[0],M=R[1],z=Object(a.useCallback)((function(){var e=P(),t=l.rollOrdinalNumber+1;return F(e)>F(l.list[l.list.length-1].rolledCharacter)?(o({list:[].concat(Object(i.a)(l.list),[{rolledCharacter:e,rollOrdinalNumber:t}]),rollOrdinalNumber:t}),!0):(o(Object(c.a)({},l,{rollOrdinalNumber:t})),!1)}),[l,F]);return Object(a.useEffect)((function(){if(B){var e=setInterval((function(){z()&&I(!1)}),0);return function(){return clearInterval(e)}}}),[B,z,I]),n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{open:B,anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"Working - roll number ".concat(l.rollOrdinalNumber),action:n.a.createElement(f.a,null)}),n.a.createElement(d.a,{position:"fixed"},n.a.createElement(b.a,null,n.a.createElement(h.a,{variant:"h6",className:e.title},"Humble character generator"),n.a.createElement(h.a,{variant:"body1",className:e.formTitle},"Total:"),n.a.createElement(p.a,{component:"fieldset"},n.a.createElement(g.a,{className:e.radioGroup,value:F===H?"absolute":"modifier",onChange:function(e){"modifier"===e.target.value?M((function(){return J})):M((function(){return H}))}},n.a.createElement(E.a,{value:"absolute",control:n.a.createElement(O.a,null),label:"Score"}),n.a.createElement(E.a,{value:"modifier",control:n.a.createElement(O.a,null),label:"Modifier"}))),n.a.createElement(v.a,{variant:"contained",onClick:function(){return I(!0)},color:"secondary",disabled:B},"Roll better character"))),n.a.createElement(C.a,{component:"main",maxWidth:"lg"},n.a.createElement(y.a,{elevation:3,className:e.paper},n.a.createElement(N.a,null,n.a.createElement(x.a,null,n.a.createElement(j.a,null,n.a.createElement(w.a,{width:"64px"},"#"),n.a.createElement(w.a,{align:"center",colSpan:6},"Result"),n.a.createElement(w.a,{width:"64px"},"Total"))),n.a.createElement(S.a,null,l.list.map((function(e){return Z(e)})).map((function(t){return n.a.createElement(j.a,{key:t.rollOrdinalNumber},n.a.createElement(w.a,null,t.rollOrdinalNumber),t.stats.map((function(e){return n.a.createElement(w.a,{key:e.sortOrder,align:"center"},n.a.createElement(G,{stat:e}))})),n.a.createElement(w.a,null,n.a.createElement(h.a,{className:e.characterTotal},F(t.rolledCharacter))))})))))))},q=r(48),K=r(104),L=r(37),Q=r(105);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var X=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",transform:"scale(64)",fill:"#1B1F23"}),Y=function(e){var t=e.svgRef,r=e.title,a=V(e,["svgRef","title"]);return n.a.createElement("svg",U({width:1024,height:1024,viewBox:"0 0 1024 1024",fill:"none",ref:t},a),r?n.a.createElement("title",null,r):null,X)},_=n.a.forwardRef((function(e,t){return n.a.createElement(Y,U({svgRef:t},e))})),ee=(r.p,Object(q.a)({palette:{secondary:L.a}})),te=Object(m.a)((function(e){return{footerInfo:{bottom:"0",top:"auto"},footerTitle:{flexGrow:1},footerGithub:{display:"flex",alignItems:"center"},footerGithubText:{marginRight:"15px"},githubIcon:{height:"32px",width:"32px"}}})),re=function(){var e=te();return n.a.createElement(K.a,{theme:ee},n.a.createElement($,null),n.a.createElement(d.a,{className:e.footerInfo,position:"fixed",color:"secondary"},n.a.createElement(b.a,null,n.a.createElement(h.a,{variant:"body1",title:"Intended use: to amuse your DM if they argue that rolling as many times as you want is fine.",className:e.footerTitle},"All rolls are executed by finely trained random number generator."),n.a.createElement(Q.a,{href:"https://github.com/iharthi/humble-character-generator",className:e.footerGithub},n.a.createElement(h.a,{variant:"body1",className:e.footerGithubText},"HCG is Open Sourcery"),n.a.createElement(_,{className:e.githubIcon})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.eb0534e2.chunk.js.map