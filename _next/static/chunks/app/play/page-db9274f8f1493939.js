(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{7439:(e,t,n)=>{Promise.resolve().then(n.bind(n,7686))},7686:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var l=n(5155);n(9194);var r=n(1269),i=n.n(r),o=n(2115);function s(){let[e,t]=(0,o.useState)({windowWidth:0,windowHeight:0});return(0,o.useEffect)(()=>{t({windowWidth:1.1*window.innerWidth,windowHeight:1.1*window.innerHeight});let e=()=>{t({windowWidth:1.1*window.innerWidth,windowHeight:1.1*window.innerHeight})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}let a=e=>{let t;let n=new Set,l=(e,l)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=l?l:"object"!=typeof r||null===r)?r:Object.assign({},t,r),n.forEach(n=>n(t,e))}},r=()=>t,i={setState:l,getState:r,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(l,r,i);return i},c=e=>e?a(e):a,d=e=>e,u=e=>{let t=c(e),n=e=>(function(e,t=d){let n=o.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return o.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},f=e=>e?u(e):u,h=f(e=>({x:0,y:0,color:"blue",originX:0,originY:0,zoom:1,setColor:t=>e({color:t}),setX:t=>e({x:t}),setY:t=>e({y:t}),setZoom:t=>e({zoom:t}),goup:()=>e(e=>({originY:e.originY-1})),godown:()=>e(e=>({originY:e.originY+1})),goleft:()=>e(e=>({originX:e.originX-1})),goright:()=>e(e=>({originX:e.originX+1})),goUpLeft:()=>e(e=>({originX:e.originX-1,originY:e.originY-1})),goUpRight:()=>e(e=>({originX:e.originX+1,originY:e.originY-1})),goDownLeft:()=>e(e=>({originX:e.originX-1,originY:e.originY+1})),goDownRight:()=>e(e=>({originX:e.originX+1,originY:e.originY+1})),setOringinPosition:(t,n)=>e({originX:t,originY:n}),setPosition:(t,n)=>e({x:t,y:n})})),g=f(e=>({cursors:[],addCursor:t=>e(e=>({cursors:[...e.cursors,t]})),removeCursor:t=>e(e=>({cursors:e.cursors.filter(e=>e!==t)})),setCursors:t=>e({cursors:t})}));var x=n(40),y=n.n(x);let p=f(e=>({x:1/0,y:1/0,content:"",movecost:0,setMovecost:t=>e({movecost:t}),setPosition:(t,n,l)=>e({x:t,y:n,content:l})})),L=f(e=>({socket:null,message:"",isOpen:!1,connect:t=>{let n=new WebSocket(t);n.onopen=()=>e({socket:n,isOpen:!0}),n.onclose=()=>e({socket:null,isOpen:!1}),n.onmessage=t=>e({message:t.data})},disconnect:()=>{e(e=>{var t;return null===(t=e.socket)||void 0===t||t.close(),{socket:null,isOpen:!1}})},sendMessage:t=>{t&&e(e=>{var n;return e.isOpen&&(null===(n=e.socket)||void 0===n||n.send(t)),{}})}}));class v{constructor(e,t){this.x=e,this.y=t,this.g=1/0,this.h=0,this.f=1/0,this.parent=null}}let w=e=>{let{paddingTiles:t,tiles:n,tileSize:r,cursorOriginX:i,cursorOriginY:a,startPoint:c}=e,d=i-c.x,u=a-c.y,f=(t-1)*d/t,g=(t-1)*u/t,x={inner:[["#8fe340","#A4E863"],["#62B628","#71C637"],["#F1FAD1","#E9F6B9"]],outer:[["#A8EC67","#81D92C"],["#74C63C","#5BB31F"],["#E9FAAA","#F5FDD8"]]},w=["#0059B280","#0095B280","#00B20080","#77B20080","#B2950080","#B24A0080","#B2000080","#7700B280"],C={red:"#FF4D00",blue:"#0094FF",yellow:"#F0C800",purple:"#BC3FDC",0:"#FF4D00",1:"#F0C800",2:"#0094FF",3:"#BC3FDC"},{windowHeight:m,windowWidth:b}=s(),{x:S,y:M,godown:_,goleft:k,goright:E,goup:F,goDownLeft:j,goDownRight:B,goUpLeft:D,goUpRight:A,zoom:O,color:N,setPosition:P}=h(),{setPosition:X,x:R,y:Y,setMovecost:I}=p(),{message:W,sendMessage:G}=L(),H=(0,o.useRef)(null),T=(0,o.useRef)(null),z=(0,o.useRef)(null),J=(0,o.useRef)(null),[U,Z]=(0,o.useState)(!0),[K,Q]=(0,o.useState)([]),[V,q]=(0,o.useState)(0),[$,ee]=(0,o.useState)(0),[et,en]=(0,o.useState)([]),[el,er]=(0,o.useState)(),ei=()=>{J.current&&(clearInterval(J.current),J.current=null)};(0,o.useEffect)(()=>{let e=e=>{e.preventDefault()};return window.addEventListener("contextmenu",e),()=>{window.removeEventListener("contextmenu",e),ei()}},[]);let eo=(e,t)=>{ei();let n=ed(d,u,e,t);I(n.length-1);let l=0,i=n[0];if((null==i?void 0:i.x)===void 0||(null==i?void 0:i.y)===void 0)return;P(e+c.x,t+c.y);let o=(e,t)=>{let n=.1,l=setInterval(()=>{if(!H.current||!T.current)return;let i=e*(r-n*r),o=t*(r-n*r);H.current.style.transform="translate(".concat(i,"px, ").concat(o,"px)"),T.current.style.transform="translate(".concat(i,"px, ").concat(o,"px)"),n>=1&&(clearInterval(l),H.current.style.transform="",T.current.style.transform="",n=1),n+=.1},20)};J.current=setInterval(()=>{if(++l>=n.length){Q([]),ei();return}let e=n[l];if(!e)return;let t=Math.sign(e.x-i.x),r=Math.sign(e.y-i.y);1===t&&1===r?B():1===t&&-1===r?A():1===t&&0===r?E():-1===t&&1===r?j():-1===t&&-1===r?D():-1===t&&0===r?k():0===t&&1===r?_():0===t&&-1===r&&F(),o(t,r),Q(n.slice(l)),i=e},200)},es=(e,t,n)=>{G(JSON.stringify({event:"pointing",payload:{position:{x:e,y:t},click_type:n}}))},ea=e=>{var t,l;let i=H.current;if(!i)return;let o=i.getBoundingClientRect(),s=e.clientX-o.left,a=e.clientY-o.top,d=Math.floor(s/r+f),u=Math.floor(a/r+g),h=Math.round(d+c.x),x=Math.round(u+c.y),y=null!==(l=null===(t=n[u])||void 0===t?void 0:t[d])&&void 0!==l?l:"Out of bounds";X(h,x,y);let p="GENERAL_CLICK";2===e.buttons&&(p="SPECIAL_CLICK"),"GENERAL_CLICK"!==p||(null==y?void 0:y.includes("F"))||(null==y?void 0:y.includes("C"))||eo(d,u),es(h,x,p)},ec=function(e,t,n,l){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=O/3.5*i;e.fillStyle=l,e.save(),e.translate(t+r/6/i,n+r/6/i),e.scale(o,o),e.fill(null==el?void 0:el.cursor),e.restore()};(0,o.useEffect)(()=>{if(W)try{let{event:e}=JSON.parse(W)}catch(e){console.error(e)}},[W]);let ed=(e,t,l,r)=>{let i=new v(e,t),o=new v(l,r),s=[...n.map(e=>[...e.map(()=>null)])];for(let e=0;e<n.length;e++)for(let t=0;t<n[e].length;t++)"F0"!==n[e][t]&&"F1"!==n[e][t]?s[e][t]=new v(t,e):s[e][t]=null;let a=[i],c=[];for(i.g=0,i.f=i.g+i.h;a.length>0;){let n=a.reduce((e,t)=>e.f<t.f?e:t);if(n.x===o.x&&n.y===o.y){let l=[],r=n;for(q(r.x-e),ee(r.y-t);r;)l.unshift(r),r=r.parent;return l}for(let e of(a=a.filter(e=>e!==n),c.push(n),function(e,t){let n=[];for(let[l,r]of[[-1,0],[0,-1],[0,1],[1,0],[-1,-1],[-1,1],[1,-1],[1,1]]){let i=t.x+l,o=t.y+r;o>=0&&o<e.length&&i>=0&&i<e[o].length&&null!==e[o][i]&&n.push(e[o][i])}return n}(s,n))){if(c.includes(e))continue;let t=n.g+1;if(a.includes(e)){if(t>=e.g)continue}else a.push(e);e.parent=n,e.g=t;let l=Math.abs(e.x-o.x)===Math.abs(e.y-o.y)?Math.SQRT2:1;e.h=l+Math.abs(e.x-o.x)+Math.abs(e.y-o.y),e.f=e.g+e.h}}return[]},eu=()=>{let e=H.current,l=T.current;if(!e||0===r||!l)return;let o=e.getContext("2d"),s=l.getContext("2d");if(!o||!s)return;s.clearRect(0,0,b,m);let c=5*O,h=d/t*r,y=u/t*r,p=h+(R-i)*r,L=y+(Y-a)*r,v=new Path2D("\n      M0 0\n      L".concat(r," 0\n      L").concat(r," ").concat(r,"\n      L0 ").concat(r,"\n      L0 0\n      ")),_=new Path2D("\n      M".concat(c," ").concat(c,"\n      L").concat(r-c," ").concat(c,"\n      L").concat(r-c," ").concat(r-c,"\n      L").concat(c," ").concat(r-c,"\n      L").concat(c," ").concat(c,"\n      ")),k=C[N],E=S-i-f-V,F=M-a-g-$,j=[c,c,r-2*c,r-2*c],B=[0,0,r,r],D={inner:[o.createLinearGradient(...j),o.createLinearGradient(...j),o.createLinearGradient(...j)],outer:[o.createLinearGradient(...B),o.createLinearGradient(...B),o.createLinearGradient(...B)],flag:o.createLinearGradient(36.5,212.5,36.5,259)};D.flag.addColorStop(0,"#E8E8E8"),D.flag.addColorStop(1,"transparent"),D.inner.forEach((e,t)=>{e.addColorStop(0,x.inner[t][0]),e.addColorStop(1,x.inner[t][1])}),D.outer.forEach((e,t)=>{e.addColorStop(0,x.outer[t][0]),e.addColorStop(.4,x.outer[t][0]),e.addColorStop(.6,x.outer[t][1]),e.addColorStop(1,x.outer[t][1])}),null==n||n.forEach((e,t)=>{if(null==e||e.forEach((e,n)=>{var l;if((null===(l=et[t])||void 0===l?void 0:l[n])===e)return;let i=(n-f)*r,a=(t-g)*r;if(!(i<-r)&&!(a<-r)&&!(i>b+r)&&!(a>m+r)){switch(o.save(),o.translate(i,a),e){case"C0":case"C1":case"F00":case"F01":case"F10":case"F11":case"F20":case"F21":case"F30":case"F31":case"F40":case"F41":{let l="0"===e[1]?0:1;1>=Math.abs(t-u)&&1>=Math.abs(n-d)&&!(n===d&&t===u)&&e.includes("C")?(ec(s,i,a,"#0000002f",.5),o.fillStyle="white"):o.fillStyle=D.outer[l],o.fill(v),o.fillStyle=D.inner[l],o.fill(_),e.includes("F")&&(o.restore(),o.save(),o.translate(i+r/6,a+r/6),o.scale(O/4.5,O/4.5),o.fillStyle=C[e[1]],o.fill(null==el?void 0:el.flag.flag),o.fillStyle=D.flag,o.fill(null==el?void 0:el.flag.pole),o.restore());break}case"O":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"B":if(o.fillStyle=D.outer[2],o.fill(v),o.fillStyle=D.inner[2],o.fill(_),"B"===e&&(o.scale(O/3.5,O/3.5),o.fillStyle="rgba(0, 0, 0, 0.6)",o.fill(null==el?void 0:el.boom.inner),o.fillStyle="rgba(0, 0, 0, 0.5)",o.fill(null==el?void 0:el.boom.outer)),o.restore(),parseInt(e)>0){let t=parseInt(e)-1;o.fillStyle=w[t],o.font=50*O+"px LOTTERIACHAB",o.textAlign="center",o.textBaseline="middle",o.fillText(e,i+r/2,a+r/2)}break;default:console.log(e)}o.restore()}}),t===Math.floor(3*n.length/10)){if(ec(s,h,y,k),s.beginPath(),s.strokeStyle=k,s.lineWidth=c,s.strokeRect(p+c/2,L+c/2,r-c,r-c),s.closePath(),K.length>0){s.beginPath(),s.strokeStyle="black",s.lineWidth=r/6;let e=K[0].x+E,t=K[0].y+F;s.moveTo(e*r+r/2,t*r+r/2),K.forEach(e=>{let t=e.x+E,n=e.y+F;s.lineTo(t*r+r/2,n*r+r/2)}),s.stroke()}en(n)}})};return(0,o.useEffect)(()=>{if(U){er({cursor:new Path2D(" \n    M12.2719 13.6437 \n    C11.4141 6.37712 19.6676 1.61197 25.5317 5.9881 \n    L165.217 110.229 \n    C171.554 114.958 168.358 125.029 160.453 125.238 \n    L100.228 126.83 \n    C91.7695 127.053 83.9984 131.54 79.5756 138.753 \n    L48.0844 190.114 \n    C43.9511 196.855 33.6313 194.587 32.7043 186.735 \n    L12.2719 13.6437 Z"),flag:{flag:new Path2D("\n      M219.428 109.389 \n      C226.519 114.964 223.188 126.337 214.21 127.205 \n      L79.8702 140.188 \n      L115.929 28.0267 \n      L219.428 109.389 Z\n    "),pole:new Path2D("\n      M79.9801 8.51632 \n      C75.8798 9.72627 73.972 13.8825 73.0599 18.0591 \n      L25.8244 234.356 \n      C30.5707 235.401 36.0988 236 42 236 \n      C45.1362 236 48.1671 235.831 51.0311 235.515 \n      L116.451 28.5289 \n      C117.573 24.9766 117.96 21.0358 115.39 18.3387 \n      C112.87 15.6942 108.055 12.4097 98.862 9.69397 \n      C89.7757 7.00975 83.7643 7.39963 79.9801 8.51632 Z\n    ")},boom:{inner:new Path2D("\n      M77.85 145.025\n      L0.899994 54.5752\n      L103.5 92.3752\n      L117 0.575195\n      L164.25 74.8252\n      L219.6 38.3752\n      L202.05 103.175\n      L276.3 108.575\n      L219.6 153.125\n      L287.1 223.325\n      L198 230.075\n      L177.75 312.425\n      L130.5 236.825\n      L67.05 284.075\n      L75.15 196.325\n      L11.7 177.425\n      L77.85 145.025\n    "),outer:new Path2D("\n      M67.05 104.525\n      L104.85 150.425\n      L71.1 169.325\n      L104.85 178.775\n      L100.8 226.025\n      L133.2 200.375\n      L158.85 239.525\n      L168.3 196.325\n      L218.25 192.275\n      L181.8 154.475\n      L212.85 131.525\n      L171 128.825\n      L181.8 93.7251\n      L152.1 113.975\n      L126.45 73.4751\n      L118.35 122.075\n      L67.05 104.525\n    ")}}),setTimeout(()=>{Z(!1)},500);return}eu()},[n,U,r,i,a,c,R,Y,N]),(0,l.jsx)(l.Fragment,{children:U?(0,l.jsxs)("div",{className:y().loading,children:[(0,l.jsx)("h1",{children:"Loading..."}),(0,l.jsx)("div",{className:"".concat(n.length<1?y().loadingBar:y().loadComplete)})]}):(0,l.jsxs)("div",{ref:z,className:y().canvasContainer,children:[(0,l.jsx)("canvas",{className:"".concat(y().canvas),id:"TileCanvas",ref:H,width:b,height:m,style:{border:"1px solid black"},onClick:ea,onMouseDown:ea}),(0,l.jsx)("canvas",{className:"".concat(y().canvas," "),id:"InteractionCanvas",ref:T,width:b,height:m,style:{border:"1px solid black"},onClick:ea,onMouseDown:ea})]})})};function C(){let e="".concat("wss://a4ed-152-67-203-244.ngrok-free.app","/session"),{isOpen:t,message:n,sendMessage:r,connect:a}=L(),{x:c,y:d,setColor:u,setPosition:f,zoom:x,setZoom:y,originX:v,originY:C,setOringinPosition:m}=h(),{setCursors:b}=g(),{x:S,y:M,setPosition:_}=p(),{windowWidth:k,windowHeight:E}=s(),[F,j]=(0,o.useState)(0),[B,D]=(0,o.useState)({x:0,y:0}),[A,O]=(0,o.useState)({x:0,y:0}),[N,P]=(0,o.useState)({x:0,y:0}),[X,R]=(0,o.useState)([]),[Y,I]=(0,o.useState)([...X.map(e=>[...e])]),W=(e,n,l,i,o)=>{if(!t)return;let s=Math.abs(l-e)+1,a=Math.abs(n-i)+1;R(e=>{let t=[...e];if(o.includes("U"))for(let e=0;e<a;e++)t.unshift([...Array(s).fill("?")]),t.pop();if(o.includes("D"))for(let e=0;e<a;e++)t.push([...Array(s).fill("?")]),t.shift();if(o.includes("L"))for(let e=0;e<a;e++)t[e]=[...Array(s).fill("?"),...t[e].slice(0,-1)];if(o.includes("R"))for(let e=0;e<a;e++)t[e]=[...t[e].slice(s,t[0].length),...Array(s).fill("?")];return o.includes("A")?Array.from({length:a},()=>Array.from({length:s},()=>"?")):t}),r(JSON.stringify({event:"fetch-tiles",payload:{start_p:{x:e,y:n},end_p:{x:l,y:i}}}))};(0,o.useEffect)(()=>{!t&&0!==B.x&&0!==B.y&&0!==A.x&&A.y&&a(e+"?view_width=".concat(A.x-B.x+1,"&view_height=").concat(A.y-B.y+1))},[t,B,A]);let G=e=>{let t=e.match(/.{1,2}/g);if(!t)return"";let n=t.map(e=>parseInt(e,16).toString(2).padStart(8,"0")).join("");if("1"===n[0]){let e="1"===n[1],t=parseInt(n.slice(5),2);return e?"B":0===t?"O":t.toString()}let l="1"===n[2],r="";switch(n.slice(3,5)){case"00":r="0";break;case"01":r="1";break;case"10":r="2";break;case"11":r="3";break;default:r=""}return l?"F"+r:"C"},H=(e,t,n,l,r)=>{let i=2*Math.abs(e-n+1),o=Math.abs(l-t+1),s=[];if(0!==r.length){for(let e=0;e<o;e++){let t=r.slice(e*i,(e+1)*i),n=[];for(let e=0;e<i/2;e++){let l=t.slice(2*e,2*e+2);n[e]=G(l)}s[e]=n}s.reverse(),R(()=>{let e=[...X];for(let l=0;l<o;l++){let r=l+(d<t?A.y-B.y-o+1:0);for(let t=0;t<i;t++){e[r]||(e[r]=[]);let i=s[l][t];((null==i?void 0:i.includes("C"))||(null==i?void 0:i.includes("F")))&&(i+=(l+t)%2==0?"0":"1"),e[r][t+n-B.x]=i}}return e})}};return(0,o.useEffect)(()=>{if(n)try{let{event:e,payload:t}=JSON.parse(n);if("tiles"===e){let{end_p:{x:e,y:n},start_p:{x:l,y:r},tiles:i}=t;H(e,n,l,r,i)}else if("flag-set"===e||"tile-updated"===e)R(e=>{let{position:{x:n,y:l},tile:{color:r,is_flag:i,is_mine:o,is_open:s,number:a}}=t,c=[...e];if(s){if(o)c[l-B.y][n-B.x]="B";else{var d;c[l-B.y][n-B.x]=null!==(d=null==a?void 0:a.toString())&&void 0!==d?d:"O"}}else c[l-B.y][n-B.x]=(i?"F"+r:"C")+(n+l+1)%2;return c});else if("my-cursor"===e){let{position:e,pointer:n,color:l}=t;m(e.x,e.y),f(e.x,e.y),u(l.toLowerCase()),n&&_(n.x,n.y,"")}else if("you-died"===e){let{revive_at:e}=t;console.log(e)}else"cursors"===e&&b(t)}catch(e){console.error(e)}},[n]),(0,o.useEffect)(()=>{I(()=>{let e=[...X.map(e=>[...e.map(()=>"?")])];for(let l=0;l<X.length;l++){let r=l+C-d;for(let i=0;i<X[l].length;i++){var t,n;let o=i+v-c;(null===(t=X[r])||void 0===t?void 0:t[o])&&(e[l][i]=(null===(n=X[r])||void 0===n?void 0:n[o])||"?")}}return e})},[X,v,C]),(0,o.useEffect)(()=>{let e=80*x;j(e);let t=Math.floor(Math.floor(2*k/e)/2),n=Math.floor(Math.floor(2*E/e)/2);D({x:c-t,y:d-n}),O({x:c+t,y:d+n}),P({x:v-t,y:C-n})},[k,E,x,v,C,c,d,2,t]),(0,o.useEffect)(()=>{let e=80*x,t=Math.floor(2*k/e),n=Math.floor(2*E/e),l=Math.floor(t/2),r=Math.floor(n/2),i=0,o=0;t>A.x-B.x+1||n>A.y-B.y+1?(i=Math.floor(r-(A.y-B.y)/2),o=Math.round(l-(A.x-B.x)/2)):(i=-Math.round((A.y-B.y-n)/2),o=-Math.round((A.x-B.x-t)/2)),W(B.x-o,A.y+i,A.x+o,B.y-i,"A")},[k,E,x,2,t]),(0,o.useEffect)(()=>{let e=c-v,t=d-C,n=B.y-1,l=B.y+t,r=A.y+t,i=A.y+1,o=B.x+e,s=B.x-1,a=A.x+1,u=A.x+e;e>0&&t>0?(W(a,r,u,l,"R"),W(o,r,u,i,"D")):e<0&&t>0?(W(o,r,s,l,"L"),W(o,r,u,i,"D")):e>0&&t<0?(W(a,r,u,l,"R"),W(o,n,u,l,"U")):e<0&&t<0?(W(o,r,s,l,"L"),W(o,n,u,l,"U")):e>0?W(a,A.y,u,B.y,"R"):e<0?W(o,A.y,s,B.y,"L"):t>0?W(B.x,r,A.x,i,"D"):t<0&&W(B.x,n,A.x,l,"U")},[c,d]),(0,l.jsxs)("div",{className:i().page,children:[(0,l.jsxs)("div",{className:i().dashboard,children:[(0,l.jsxs)("div",{className:i().coordinates,children:[(0,l.jsxs)("p",{children:["\xa0",(0,l.jsx)("svg",{width:"22",height:"26",viewBox:"0 0 22 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M0.436226 1.88654C0.321855 0.917668 1.42232 0.282312 2.2042 0.865797L20.8289 14.7645C21.6738 15.3951 21.2476 16.7379 20.1937 16.7657L12.1637 16.978C11.0359 17.0078 9.99976 17.606 9.41006 18.5678L5.21123 25.4159C4.66013 26.3147 3.28415 26.0124 3.16055 24.9653L0.436226 1.88654Z",fill:"white"})}),"(",v,", ",C,")"]}),(0,l.jsxs)("p",{children:[(0,l.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M20 5L26 5C26.5523 5 27 5.44772 27 6L27 12",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M12 27L6 27C5.44772 27 5 26.5523 5 26L5 20",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M5 12L5 6C5 5.44772 5.44772 5 6 5L12 5",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M27 20L27 26C27 26.5523 26.5523 27 26 27L20 27",stroke:"white",strokeWidth:"4",strokeLinecap:"round"})]}),"\xa0(",S===1/0?"":S,", ",M===1/0?"":M,")"]})]}),(0,l.jsxs)("div",{className:i().zoom,children:[(0,l.jsxs)("p",{children:[(0,l.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("circle",{cx:"14",cy:"14",r:"9",stroke:"white",strokeWidth:"4"}),(0,l.jsx)("path",{d:"M27 27L21.5 21.5",stroke:"white",strokeWidth:"4",strokeLinecap:"round"})]}),"\xa0",Math.ceil(100*x),"%"]}),(0,l.jsxs)("div",{className:i().buttons,children:[(0,l.jsx)("button",{onClick:()=>y(x/1.5>.2?x/1.5:x),children:"-"}),(0,l.jsx)("button",{onClick:()=>y(1.5*x<1.7?1.5*x:x),children:"+"})]})]})]}),(0,l.jsx)("div",{className:i().canvas,children:(0,l.jsx)(w,{paddingTiles:2,tiles:Y,tileSize:F,startPoint:N,cursorOriginX:v,cursorOriginY:C})})]})}},9194:()=>{},1269:e=>{e.exports={page:"page_page__9CbJ0",dashboard:"page_dashboard__XMpg7",coordinates:"page_coordinates__Ubj9q",zoom:"page_zoom__3EHl9",buttons:"page_buttons__QH6Az"}},40:e=>{e.exports={loading:"style_loading__42LVe",loadingBar:"style_loadingBar__AtBJr",loadingAnimation:"style_loadingAnimation__ScSQQ",loadComplete:"style_loadComplete__SRD5Z",canvasContainer:"style_canvasContainer__nKMjH",canvas:"style_canvas__m8mJO"}}},e=>{var t=t=>e(e.s=t);e.O(0,[450,441,517,358],()=>t(7439)),_N_E=e.O()}]);