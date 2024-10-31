var C_=Object.defineProperty;var P_=(r,e,t)=>e in r?C_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Le=(r,e,t)=>P_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xs={duration:.5,overwrite:!1,delay:0},ph,fn,Pt,ti=1e8,Tt=1/ti,Qc=Math.PI*2,L_=Qc/4,D_=0,fp=Math.sqrt,I_=Math.cos,N_=Math.sin,tn=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},mh=function(e){return typeof e>"u"},Ai=function(e){return typeof e=="object"},Cn=function(e){return e!==!1},_h=function(){return typeof window<"u"},ga=function(e){return Ut(e)||tn(e)},dp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,eu=/(?:-?\.?\d|\.)+/gi,pp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mp=/[+-]=-?[.\d]+/,_p=/[^,'"\[\]\s]+/gi,U_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,_i,tu,gh,Kn={},yl={},gp,vp=function(e){return(yl=ts(e,Kn))&&Nn},vh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qo=function(e,t){return!t&&console.warn(e)},xp=function(e,t){return e&&(Kn[e]=t)&&yl&&(yl[e]=t)||Kn},ea=function(){return 0},O_={suppressEvents:!0,isStart:!0,kill:!1},il={suppressEvents:!0,kill:!1},F_={suppressEvents:!0},xh={},gr=[],nu={},yp,Hn={},ec={},cf=30,rl=[],yh="",Mh=function(e){var t=e[0],n,i;if(Ai(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=rl.length;i--&&!rl[i].targetTest(t););n=rl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Wp(e[i],n)))||e.splice(i,1);return e},Kr=function(e){return e._gsap||Mh(ni(e))[0]._gsap},Mp=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():mh(n)&&e.getAttribute&&e.getAttribute(t)||n},Pn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},Qt=function(e){return Math.round(e*1e7)/1e7||0},Us=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},B_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ml=function(){var e=gr.length,t=gr.slice(0),n,i;for(nu={},gr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Sp=function(e,t,n,i){gr.length&&!fn&&Ml(),e.render(t,n,fn&&t<0&&(e._initted||e._startAt)),gr.length&&!fn&&Ml()},Tp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(_p).length<2?t:tn(e)?e.trim():e},Ep=function(e){return e},si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},k_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ts=function(e,t){for(var n in t)e[n]=t[n];return e},uf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ai(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Sl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Bo=function(e){var t=e.parent||Dt,n=e.keyframes?k_(dn(e.keyframes)):si;if(Cn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},z_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bp=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},kl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},H_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},iu=function(e,t,n,i){return e._startAt&&(fn?e._startAt.revert(il):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},V_=function r(e){return!e||e._ts&&r(e.parent)},hf=function(e){return e._repeat?Ys(e._tTime,e=e.duration()+e._rDelay)*e:0},Ys=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Tl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zl=function(e){return e._end=Qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},Hl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zl(e),n._dirty||jr(n,e)),e},Ap=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Tl(e.rawTime(),t),(!t._dur||fa(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},xi=function(e,t,n,i){return t.parent&&Sr(t),t._start=Qt((Ki(n)?n:n||e!==Dt?Zn(e,n,t):e._time)+t._delay),t._end=Qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bp(e,t,"_first","_last",e._sort?"_start":0),ru(t)||(e._recent=t),i||Ap(e,t),e._ts<0&&Hl(e,e._tTime),e},wp=function(e,t){return(Kn.ScrollTrigger||vh("scrollTrigger",t))&&Kn.ScrollTrigger.create(t,e)},Rp=function(e,t,n,i,s){if(Th(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yp!==Vn.frame)return gr.push(e),e._lazy=[s,i],1},G_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ru=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},W_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&G_(e)&&!(!e._initted&&ru(e))||(e._ts<0||e._dp._ts<0)&&!ru(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=fa(0,e._tDur,t),u=Ys(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ys(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||fn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&Rp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&iu(e,t,n,!0),e._onUpdate&&!n&&Xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Sr(e,1),!n&&!fn&&(Xn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},X_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},qs=function(e,t,n,i){var s=e._repeat,o=Qt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Qt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Hl(e,e._tTime=e._tDur*a),e.parent&&zl(e),n||jr(e.parent,e),e},ff=function(e){return e instanceof Tn?jr(e):qs(e,e._dur)},Y_={_start:0,endTime:ea,totalDuration:ea},Zn=function r(e,t,n){var i=e.labels,s=e._recent||Y_,o=e.duration()>=ti?s.endTime(!1):e._dur,a,l,c;return tn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ko=function(e,t,n){var i=Ki(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;o.immediateRender=Cn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Wt(t[0],o,t[s+1])},Ar=function(e,t){return e||e===0?t(e):t},fa=function(e,t,n){return n<e?e:n>t?t:n},hn=function(e,t){return!tn(e)||!(t=U_.exec(e))?"":t[1]},q_=function(e,t,n){return Ar(n,function(i){return fa(e,t,i)})},su=[].slice,Cp=function(e,t){return e&&Ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ai(e[0]))&&!e.nodeType&&e!==_i},K_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return tn(i)&&!t||Cp(i,1)?(s=n).push.apply(s,ni(i)):n.push(i)})||n},ni=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):tn(e)&&!n&&(tu||!Ks())?su.call((t||gh).querySelectorAll(e),0):dn(e)?K_(e,n):Cp(e)?su.call(e,0):e?[e]:[]},ou=function(e){return e=ni(e)[0]||Qo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ni(t,n.querySelectorAll?n:n===e?Qo("Invalid scope")||gh.createElement("div"):e)}},Pp=function(e){return e.sort(function(){return .5-Math.random()})},Lp=function(e){if(Ut(e))return e;var t=Ai(e)?e:{each:e},n=$r(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return tn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,M,x,y,R,A,T,C,O;if(!p){if(O=t.grid==="auto"?0:(t.grid||[1,ti])[1],!O){for(T=-ti;T<(T=_[O++].getBoundingClientRect().left)&&O<g;);O<g&&O--}for(p=o[g]=[],m=l?Math.min(O,g)*u-.5:i%O,M=O===ti?0:l?g*h/O-.5:i/O|0,T=0,C=ti,A=0;A<g;A++)x=A%O-m,y=M-(A/O|0),p[A]=R=c?Math.abs(c==="y"?y:x):fp(x*x+y*y),R>T&&(T=R),R<C&&(C=R);i==="random"&&Pp(p),p.max=T-C,p.min=C,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(O>g?g-1:c?c==="y"?g/O:O:Math.max(O,g/O))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=hn(t.amount||t.each)||0,n=n&&g<0?Hp(n):n}return g=(p[f]-p.min)/p.max||0,Qt(p.b+(n?n(g):g)*p.v)+p.u}},au=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ki(n)?0:hn(n))}},Dp=function(e,t){var n=dn(e),i,s;return!n&&Ai(e)&&(i=n=e.radius||ti,e.values?(e=ni(e.values),(s=!Ki(e[0]))&&(i*=i)):e=au(e.increment)),Ar(t,n?Ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ti,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Ki(o)?u:u+hn(o)}:au(e))},Ip=function(e,t,n,i){return Ar(dn(e)?!t:n===!0?!!(n=0):!i,function(){return dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},j_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},$_=function(e,t){return function(n){return e(parseFloat(n))+(t||hn(n))}},Z_=function(e,t,n){return Up(e,t,0,1,n)},Np=function(e,t,n){return Ar(n,function(i){return e[~~t(i)]})},J_=function r(e,t,n){var i=t-e;return dn(e)?Np(e,r(0,e.length),t):Ar(n,function(s){return(i+(s-e)%i)%i+e})},Q_=function r(e,t,n){var i=t-e,s=i*2;return dn(e)?Np(e,r(0,e.length-1),t):Ar(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ta=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?_p:eu),n+=e.substr(t,i-t)+Ip(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Up=function(e,t,n,i,s){var o=t-e,a=i-n;return Ar(s,function(l){return n+((l-e)/o*a||0)})},eg=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=tn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(dn(e)&&!dn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=ts(dn(e)?[]:{},e));if(!u){for(l in t)Sh.call(a,e,l,"get",t[l]);s=function(_){return Ah(_,a)||(o?e.p:e)}}}return Ar(n,s)},df=function(e,t,n){var i=e.labels,s=ti,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Xn=function(e,t,n){var i=e.vars,s=i[t],o=Pt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&gr.length&&Ml(),a&&(Pt=a),u=l?s.apply(c,l):s.call(c),Pt=o,u},Co=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fn),e.progress()<1&&Xn(e,"onInterrupt"),e},Ls,Op=[],Fp=function(e){if(e)if(e=!e.name&&e.default||e,_h()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ea,render:Ah,add:Sh,kill:_g,modifier:mg,rawVars:0},o={targetTest:0,get:0,getSetter:bh,aliases:{},register:0};if(Ks(),e!==i){if(Hn[t])return;si(i,si(Sl(e,s),o)),ts(i.prototype,ts(s,Sl(e,o))),Hn[i.prop=t]=i,e.targetTest&&(rl.push(i),xh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xp(t,i),e.register&&e.register(Nn,i,Ln)}else Op.push(e)},St=255,Po={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},tc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},Bp=function(e,t,n){var i=e?Ki(e)?[e>>16,e>>8&St,e&St]:0:Po.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Po[e])i=Po[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(eu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=tc(l+1/3,s,o),i[1]=tc(l,s,o),i[2]=tc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(pp),n&&i.length<4&&(i[3]=1),i}else i=e.match(eu)||Po.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/St,o=i[1]/St,a=i[2]/St,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},kp=function(e){var t=[],n=[],i=-1;return e.split(vr).forEach(function(s){var o=s.match(Ps)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},pf=function(e,t,n){var i="",s=(e+i).match(vr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Bp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=kp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(vr,"1").split(Ps),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(vr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},vr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Po)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),tg=/hsl[a]?\(/,zp=function(e){var t=e.join(" "),n;if(vr.lastIndex=0,vr.test(t))return n=tg.test(t),e[1]=pf(e[1],n),e[0]=pf(e[0],n,kp(e[1])),!0},na,Vn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,M=p===!0,x,y,R,A;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,x=R-o,(x>0||M)&&(A=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=x+(x>=s?4:s-x),y=1),M||(l=c(g)),y)for(d=0;d<a.length;d++)a[d](R,f,A,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){gp&&(!tu&&_h()&&(_i=tu=window,gh=_i.document||{},Kn.gsap=Nn,(_i.gsapVersions||(_i.gsapVersions=[])).push(Nn.version),vp(yl||_i.GreenSockGlobals||!_i.gsap&&_i||{}),Op.forEach(Fp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},na=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),na=0,c=ea},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,M){var x=m?function(y,R,A,T){p(y,R,A,T),h.remove(x)}:p;return h.remove(p),a[M?"unshift":"push"](x),Ks(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),Ks=function(){return!na&&Vn.wake()},ut={},ng=/^[\d.\-M][\d.\-,\s]/,ig=/["']/g,rg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(ig,"").trim():+c,i=l.substr(a+1).trim();return t},sg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},og=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[rg(t[1])]:sg(e).split(",").map(Tp)):ut._CE&&ng.test(e)?ut._CE("",e):n},Hp=function(e){return function(t){return 1-e(1-t)}},Vp=function r(e,t){for(var n=e._first,i;n;)n instanceof Tn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},$r=function(e,t){return e&&(Ut(e)?e:ut[e]||og(e))||t},ls=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Pn(e,function(a){ut[a]=Kn[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},Gp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Qc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*N_((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Gp(a);return s=Qc/s,l.config=function(c,u){return r(e,c,u)},l},ic=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Gp(n);return i.config=function(s){return r(e,s)},i};Pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ls(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;ls("Elastic",nc("in"),nc("out"),nc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ls("Circ",function(r){return-(fp(1-r*r)-1)});ls("Sine",function(r){return r===1?1:-I_(r*L_)+1});ls("Back",ic("in"),ic("out"),ic());ut.SteppedEase=ut.steps=Kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((i*fa(0,o,a)|0)+s)*n}}};Xs.ease=ut["quad.out"];Pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yh+=r+","+r+"Params,"});var Wp=function(e,t){this.id=D_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Mp,this.set=t?t.getSetter:bh},ia=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qs(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),na||Vn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hl(this,n),!s._dp||s.parent||Ap(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ys(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Tl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this._tDur,s),i!==!1),zl(this),H_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=F_);var i=fn;return fn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ff(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ff(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zn(this,n),Cn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ut(n)?n:Ep,a=function(){var c=i.then;i.then=null,Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Co(this)},r}();si(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Tn=function(r){hp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Cn(n.sortChildren),Dt&&xi(n.parent||Dt,ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wp(ki(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ko(0,arguments,this),this},t.from=function(i,s,o){return ko(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ko(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Bo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,Zn(this,o),1),this},t.call=function(i,s,o){return xi(this,Wt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Wt(i,o,Zn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Bo(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Bo(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Qt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,M,x,y,R,A,T;if(this!==Dt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Qt(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),R=Ys(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),A&&g&1&&(f=c-f,T=1),g!==R&&!this._lock){var C=A&&R&1,O=C===(A&&g&1);if(g<R&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Qt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,O&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Vp(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=X_(this,Qt(a),Qt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(Xn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-Tt);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||fn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=v?-Tt:Tt);break}}d=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-Tt)._zTime=f>=a?1:-1,this._ts))return this._start=y,zl(this),this.render(i,s,o);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ki(s)||(s=Zn(this,s,i)),!(i instanceof ia)){if(dn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(tn(i))return this.addLabel(i,s);if(Ut(i))i=Wt.delayedCall(0,i);else return this}return this!==i?xi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Wt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return tn(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(kl(this,i),i===this._recent&&(this._recent=this._last),jr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Qt(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Zn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Wt.delayedCall(0,s||ea,o);return a.data="isPause",this._hasPause=1,xi(this,a,Zn(this,i))},t.removePause=function(i){var s=this._first;for(i=Zn(this,i);s;)s._start===i&&s.data==="isPause"&&Sr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ur!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ni(i),l=this._first,c=Ki(s),u;l;)l instanceof Wt?B_(l._targets,a)&&(c?(!ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Zn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Wt.to(o,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&qs(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,si({startAt:{time:Zn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),df(this,Zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),df(this,Zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return jr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),jr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ti,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;qs(o,o===Dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Dt._ts&&(Sp(Dt,Tl(i,Dt)),yp=Vn.frame),Vn.frame>=cf){cf+=qn.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&qn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},e}(ia);si(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ag=function(e,t,n,i,s,o,a){var l=new Ln(this._pt,e,t,0,1,$p,null,s),c=0,u=0,h,f,d,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ta(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(Ql)||[];h=Ql.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Us(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Ql.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(mp.test(i)||m)&&(l.e=0),this._pt=l,l},Sh=function(e,t,n,i,s,o,a,l,c,u){Ut(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ut(h)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ut(h)?c?fg:Kp:Eh,_;if(tn(i)&&(~i.indexOf("random(")&&(i=ta(i)),i.charAt(1)==="="&&(_=Us(f,i)+(hn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||lu)return!isNaN(f*i)&&i!==""?(_=new Ln(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?pg:jp,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&vh(t,i),ag.call(this,e,t,f,i,d,l||qn.stringFilter,c))},lg=function(e,t,n,i,s){if(Ut(e)&&(e=zo(e,s,t,n,i)),!Ai(e)||e.style&&e.nodeType||dn(e)||dp(e))return tn(e)?zo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=zo(e[a],s,t,n,i);return o},Xp=function(e,t,n,i,s,o){var a,l,c,u;if(Hn[e]&&(a=new Hn[e]).init(s,a.rawVars?t[e]:lg(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Ln(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ls))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ur,lu,Th=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!ph,y=e.timeline,R,A,T,C,O,v,E,D,z,X,j,V,Y;if(y&&(!f||!s)&&(s="none"),e._ease=$r(s,Xs.ease),e._yEase=h?Hp($r(h===!0?s:h,Xs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(D=p[0]?Kr(p[0]).harness:0,V=D&&i[D.prop],R=Sl(i,xh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?il:O_),g._lazy=0),o){if(Sr(e._startAt=Wt.set(p,si({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn||!a&&!d)&&e._startAt.revert(il),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),T=si({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Cn(l),immediateRender:a,stagger:0,parent:m},R),V&&(T[D.prop]=V),Sr(e._startAt=Wt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn?e._startAt.revert(il):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Cn(l)||l&&!_,A=0;A<p.length;A++){if(O=p[A],E=O._gsap||Mh(p)[A]._gsap,e._ptLookup[A]=X={},nu[E.id]&&gr.length&&Ml(),j=M===p?A:M.indexOf(O),D&&(z=new D).init(O,V||R,e,j,M)!==!1&&(e._pt=C=new Ln(e._pt,O,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(W){X[W]=C}),z.priority&&(v=1)),!D||V)for(T in R)Hn[T]&&(z=Xp(T,R,e,j,O,M))?z.priority&&(v=1):X[T]=C=Sh.call(e,O,T,"get",R[T],j,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(O,e._op[A]),x&&e._pt&&(ur=e,Dt.killTweensOf(O,X,e.globalTime(t)),Y=!e.parent,ur=0),e._pt&&l&&(nu[E.id]=1)}v&&Zp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&y.render(ti,!0,!0)},cg=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lu=1,e.vars[t]="+=0",Th(e,a),lu=0,l?Qo(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=kt(n)+hn(h.e)),h.b&&(h.b=u.s+hn(h.b))},ug=function(e,t){var n=e[0]?Kr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ts({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},hg=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(dn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},zo=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):tn(e)&&~e.indexOf("random(")?ta(e):e},Yp=yh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qp={};Pn(Yp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return qp[r]=1});var Wt=function(r){hp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Bo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||Dt,x=(dn(n)||dp(n)?Ki(n[0]):"length"in i)?[n]:ni(n),y,R,A,T,C,O,v,E;if(a._targets=x.length?Mh(x):Qo("GSAP target "+n+" not found. https://gsap.com",!qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||ga(c)||ga(u)){if(i=a.vars,y=a.timeline=new Tn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:x}),y.kill(),y.parent=y._dp=ki(a),y._start=0,f||ga(c)||ga(u)){if(T=x.length,v=f&&Lp(f),Ai(f))for(C in f)~Yp.indexOf(C)&&(E||(E={}),E[C]=f[C]);for(R=0;R<T;R++)A=Sl(i,qp),A.stagger=0,m&&(A.yoyoEase=m),E&&ts(A,E),O=x[R],A.duration=+zo(c,ki(a),R,O,x),A.delay=(+zo(u,ki(a),R,O,x)||0)-a._delay,!f&&T===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(O,A,v?v(R,O,x):0),y._ease=ut.none;y.duration()?c=u=0:a.timeline=0}else if(_){Bo(si(y.vars.defaults,{ease:"none"})),y._ease=$r(_.ease||i.ease||"none");var D=0,z,X,j;if(dn(_))_.forEach(function(V){return y.to(x,V,">")}),y.duration();else{A={};for(C in _)C==="ease"||C==="easeEach"||hg(C,_[C],A,_.easeEach);for(C in A)for(z=A[C].sort(function(V,Y){return V.t-Y.t}),D=0,R=0;R<z.length;R++)X=z[R],j={ease:X.e,duration:(X.t-(R?z[R-1].t:0))/100*c},j[C]=X.v,y.to(x,j,D),D+=j.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!ph&&(ur=ki(a),Dt.killTweensOf(x),ur=0),xi(M,ki(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Qt(M._time)&&Cn(h)&&V_(ki(a))&&M.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),p&&wp(ki(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Tt&&!u?l:i<Tt?0:i,f,d,_,g,p,m,M,x,y;if(!c)W_(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Qt(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===Qt(h/g)&&(f=c,_--),f>c&&(f=c)),m=this._yoyo&&_&1,m&&(y=this._yEase,f=c-f),p=Ys(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(x&&this._yEase&&Vp(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Qt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Rp(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!_&&(Xn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&iu(this,i,s,o),Xn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&iu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Xn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){na||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Th(this,c),u=this._ease(c/this._dur),cg(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Hl(this,0),this.parent||bp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Co(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ur&&ur.vars.overwrite!==!0)._first||Co(this),this.parent&&o!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ni(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&z_(a,l))return s==="all"&&(this._pt=0),Co(this);for(h=this._op=this._op||[],s!=="all"&&(tn(s)&&(g={},Pn(s,function(M){return g[M]=1}),s=g),s=ug(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&kl(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Co(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ko(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ko(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Dt.killTweensOf(i,s,o)},e}(ia);si(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pn("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new Tn,t=su.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Eh=function(e,t,n){return e[t]=n},Kp=function(e,t,n){return e[t](n)},fg=function(e,t,n,i){return e[t](i.fp,n)},dg=function(e,t,n){return e.setAttribute(t,n)},bh=function(e,t){return Ut(e[t])?Kp:mh(e[t])&&e.setAttribute?dg:Eh},jp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},pg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$p=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ah=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},mg=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},_g=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?kl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},gg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Zp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Ln=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||jp,this.d=l||this,this.set=c||Eh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=gg,this.m=n,this.mt=s,this.tween=i},r}();Pn(yh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xh[r]=1});Kn.TweenMax=Kn.TweenLite=Wt;Kn.TimelineLite=Kn.TimelineMax=Tn;Dt=new Tn({sortChildren:!1,defaults:Xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=zp;var Zr=[],sl={},vg=[],mf=0,xg=0,rc=function(e){return(sl[e]||vg).map(function(t){return t()})},cu=function(){var e=Date.now(),t=[];e-mf>2&&(rc("matchMediaInit"),Zr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=_i.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),rc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),mf=e,rc("matchMedia"))},Jp=function(){function r(t,n){this.selector=n&&ou(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xg++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var o=this,a=function(){var c=Pt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ou(s)),Pt=o,h=i.apply(o,arguments),Ut(h)&&o._r.push(h),Pt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Zr.length;o--;)Zr[o].id===this.id&&Zr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),yg=function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ai(n)||(n={matches:n});var o=new Jp(0,s||this.scope),a=o.conditions={},l,c,u;Pt&&!o.selector&&(o.selector=Pt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=_i.matchMedia(n[c]),l&&(Zr.indexOf(o)<0&&Zr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(cu):l.addEventListener("change",cu)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),El={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Fp(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){tn(e)&&(e=ni(e)[0]);var s=Kr(e||{}).get,o=n?Ep:Tp;return n==="native"&&(n=""),e&&(t?o((Hn[t]&&Hn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Hn[a]&&Hn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ni(e),e.length>1){var i=e.map(function(u){return Nn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Hn[t],a=Kr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ls._pt=0,h.init(e,n?u+n:u,Ls,0,[e]),h.render(1,h),Ls._pt&&Ah(1,Ls)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Nn.to(e,ts((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$r(e.ease,Xs.ease)),uf(Xs,e||{})},config:function(e){return uf(qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Hn[a]&&!Kn[a]&&Qo(t+" effect requires "+a+" plugin.")}),ec[t]=function(a,l,c){return n(ni(a),si(l||{},s),c)},o&&(Tn.prototype[t]=function(a,l,c){return this.add(ec[t](a,Ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=$r(t)},parseEase:function(e,t){return arguments.length?$r(e,t):ut},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=Cn(e.smoothChildTiming),Dt.remove(n),n._dp=0,n._time=n._tTime=Dt._time,i=Dt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&xi(n,i,i._start-i._delay),i=s;return xi(Dt,n,0),n},context:function(e,t){return e?new Jp(e,t):Pt},matchMedia:function(e){return new yg(e)},matchMediaRefresh:function(){return Zr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||cu()},addEventListener:function(e,t){var n=sl[e]||(sl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=sl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:J_,wrapYoyo:Q_,distribute:Lp,random:Ip,snap:Dp,normalize:Z_,getUnit:hn,clamp:q_,splitColor:Bp,toArray:ni,selector:ou,mapRange:Up,pipe:j_,unitize:$_,interpolate:eg,shuffle:Pp},install:vp,effects:ec,ticker:Vn,updateRoot:Tn.updateRoot,plugins:Hn,globalTimeline:Dt,core:{PropTween:Ln,globals:xp,Tween:Wt,Timeline:Tn,Animation:ia,getCache:Kr,_removeLinkedListItem:kl,reverting:function(){return fn},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return ph=e}}};Pn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return El[r]=Wt[r]});Vn.add(Tn.updateRoot);Ls=El.to({},{duration:0});var Mg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Sg=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Mg(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},sc=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(tn(s)&&(l={},Pn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Sg(a,s)}}}},Nn=El.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},sc("roundProps",au),sc("modifiers"),sc("snap",Dp))||El;Wt.version=Tn.version=Nn.version="3.12.5";gp=1;_h()&&Ks();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _f,hr,Os,wh,Wr,gf,Rh,Tg=function(){return typeof window<"u"},ji={},Fr=180/Math.PI,Fs=Math.PI/180,us=Math.atan2,vf=1e8,Ch=/([A-Z])/g,Eg=/(left|right|width|margin|padding|x)/i,bg=/[\s,\(]\S/,Mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ag=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Rg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},em=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Cg=function(e,t,n){return e.style[t]=n},Pg=function(e,t,n){return e.style.setProperty(t,n)},Lg=function(e,t,n){return e._gsap[t]=n},Dg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ig=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ng=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},It="transform",Dn=It+"Origin",Ug=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Hi(i,a)}):this.tfm[e]=o.x?o[e]:Hi(i,e),e===Dn&&(this.tfm.zOrigin=o.zOrigin);else return Mi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(It)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},tm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Og=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ch,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Rh(),(!s||!s.isStart)&&!n[It]&&(tm(n),i.zOrigin&&n[Dn]&&(n[Dn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},nm=function(e,t){var n={target:e,props:[],revert:Og,save:Ug};return e._gsap||Nn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},im,hu=function(e,t){var n=hr.createElementNS?hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hr.createElement(e);return n&&n.style?n:hr.createElement(e)},Ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ch,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,js(t)||t,1)||""},xf="O,Moz,ms,Ms,Webkit".split(","),js=function(e,t,n){var i=t||Wr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(xf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?xf[o]:"")+e},fu=function(){Tg()&&window.document&&(_f=window,hr=_f.document,Os=hr.documentElement,Wr=hu("div")||{style:{}},hu("div"),It=js(It),Dn=It+"Origin",Wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",im=!!js("perspective"),Rh=Nn.core.reverting,wh=1)},oc=function r(e){var t=hu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Os.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Os.removeChild(t),this.style.cssText=s,o},yf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},rm=function(e){var t;try{t=e.getBBox()}catch{t=oc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===oc||(t=oc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+yf(e,["x","cx","x1"])||0,y:+yf(e,["y","cy","y1"])||0,width:0,height:0}:t},sm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rm(e))},ns=function(e,t){if(t){var n=e.style,i;t in ji&&t!==Dn&&(t=It),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ch,"-$1").toLowerCase())):n.removeAttribute(t)}},fr=function(e,t,n,i,s,o){var a=new Ln(e._pt,t,n,0,1,o?em:Qp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Mf={deg:1,rad:1,turn:1},Fg={grid:1,flex:1},Tr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Wr.style,l=Eg.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||Mf[i]||Mf[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&sm(e),(d||o==="%")&&(ji[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],kt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===hr||!g.appendChild)&&(g=hr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Vn.time&&!p.uncache)return kt(s/p.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:ns(e,t)}else(d||o==="%")&&!Fg[Ti(g,"display")]&&(a.position=Ti(e,"position")),g===e&&(a.position="static"),g.appendChild(Wr),_=Wr[u],g.removeChild(Wr),a.position="absolute";return l&&d&&(p=Kr(g),p.time=Vn.time,p.width=g[u]),kt(f?_*s/h:_&&s?h/_*s:0)},Hi=function(e,t,n,i){var s;return wh||fu(),t in Mi&&t!=="transform"&&(t=Mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ji[t]&&t!=="transform"?(s=sa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Al(Ti(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=bl[t]&&bl[t](e,t,n)||Ti(e,t)||Mp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,n)+n:s},Bg=function(e,t,n,i){if(!n||n==="none"){var s=js(t,e,1),o=s&&Ti(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ti(e,"borderTopColor"))}var a=new Ln(this._pt,e.style,t,0,1,$p),l=0,c=0,u,h,f,d,_,g,p,m,M,x,y,R;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Ti(e,t)||i,g?e.style[t]=g:ns(e,t)),u=[n,i],zp(u),n=u[0],i=u[1],f=n.match(Ps)||[],R=i.match(Ps)||[],R.length){for(;h=Ps.exec(i);)p=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),p.charAt(1)==="="&&(p=Us(d,p)+y),m=parseFloat(p),x=p.substr((m+"").length),l=Ps.lastIndex-x.length,x||(x=x||qn.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(d=Tr(e,t,g,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?em:Qp;return mp.test(i)&&(a.e=0),this._pt=a,a},Sf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kg=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Sf[n]||n,t[1]=Sf[i]||i,t.join(" ")},zg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ji[a]&&(l=1,a=a==="transformOrigin"?Dn:It),ns(n,a);l&&(ns(n,It),o&&(o.svg&&n.removeAttribute("transform"),sa(n,1),o.uncache=1,tm(i)))}},bl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Ln(e._pt,t,n,0,0,zg);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ra=[1,0,0,1,0,0],om={},am=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tf=function(e){var t=Ti(e,It);return am(t)?ra:t.substr(7).match(pp).map(kt)},Ph=function(e,t){var n=e._gsap||Kr(e),i=e.style,s=Tf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ra:s):(s===ra&&!e.offsetParent&&e!==Os&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Os.appendChild(e)),s=Tf(e),l?i.display=l:ns(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},du=function(e,t,n,i,s,o){var a=e._gsap,l=s||Ph(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],x=t.split(" "),y=parseFloat(x[0])||0,R=parseFloat(x[1])||0,A,T,C,O;n?l!==ra&&(T=d*p-_*g)&&(C=y*(p/T)+R*(-g/T)+(g*M-p*m)/T,O=y*(-_/T)+R*(d/T)-(d*M-_*m)/T,y=C,R=O):(A=rm(e),y=A.x+(~x[0].indexOf("%")?y/100*A.width:y),R=A.y+(~(x[1]||x[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(m=y-c,M=R-u,a.xOffset=h+(m*d+M*g)-m,a.yOffset=f+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Dn]="0px 0px",o&&(fr(o,a,"xOrigin",c,y),fr(o,a,"yOrigin",u,R),fr(o,a,"xOffset",h,a.xOffset),fr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+R)},sa=function(e,t){var n=e._gsap||new Wp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ti(e,Dn)||"0",u,h,f,d,_,g,p,m,M,x,y,R,A,T,C,O,v,E,D,z,X,j,V,Y,W,se,P,ae,Fe,Xe,q,Q;return u=h=f=g=p=m=M=x=y=0,d=_=1,n.svg=!!(e.getCTM&&sm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),i.scale=i.rotate=i.translate="none"),T=Ph(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),du(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,A=n.yOrigin||0,T!==ra&&(E=T[0],D=T[1],z=T[2],X=T[3],u=j=T[4],h=V=T[5],T.length===6?(d=Math.sqrt(E*E+D*D),_=Math.sqrt(X*X+z*z),g=E||D?us(D,E)*Fr:0,M=z||X?us(z,X)*Fr+g:0,M&&(_*=Math.abs(Math.cos(M*Fs))),n.svg&&(u-=R-(R*E+A*z),h-=A-(R*D+A*X))):(Q=T[6],Xe=T[7],P=T[8],ae=T[9],Fe=T[10],q=T[11],u=T[12],h=T[13],f=T[14],C=us(Q,Fe),p=C*Fr,C&&(O=Math.cos(-C),v=Math.sin(-C),Y=j*O+P*v,W=V*O+ae*v,se=Q*O+Fe*v,P=j*-v+P*O,ae=V*-v+ae*O,Fe=Q*-v+Fe*O,q=Xe*-v+q*O,j=Y,V=W,Q=se),C=us(-z,Fe),m=C*Fr,C&&(O=Math.cos(-C),v=Math.sin(-C),Y=E*O-P*v,W=D*O-ae*v,se=z*O-Fe*v,q=X*v+q*O,E=Y,D=W,z=se),C=us(D,E),g=C*Fr,C&&(O=Math.cos(C),v=Math.sin(C),Y=E*O+D*v,W=j*O+V*v,D=D*O-E*v,V=V*O-j*v,E=Y,j=W),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=kt(Math.sqrt(E*E+D*D+z*z)),_=kt(Math.sqrt(V*V+Q*Q)),C=us(j,V),M=Math.abs(C)>2e-4?C*Fr:0,y=q?1/(q<0?-q:q):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!am(Ti(e,It)),Y&&e.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=kt(d),n.scaleY=kt(_),n.rotation=kt(g)+a,n.rotationX=kt(p)+a,n.rotationY=kt(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Dn]=Al(c)),n.xOffset=n.yOffset=0,n.force3D=qn.force3D,n.renderTransform=n.svg?Vg:im?lm:Hg,n.uncache=0,n},Al=function(e){return(e=e.split(" "))[0]+" "+e[1]},ac=function(e,t,n){var i=hn(t);return kt(parseFloat(t)+parseFloat(Tr(e,"x",n+"px",i)))+i},Hg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lm(e,t)},Rr="0deg",_o="0px",Cr=") ",lm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,y="",R=m==="auto"&&e&&e!==1||m===!0;if(x&&(h!==Rr||u!==Rr)){var A=parseFloat(u)*Fs,T=Math.sin(A),C=Math.cos(A),O;A=parseFloat(h)*Fs,O=Math.cos(A),o=ac(M,o,T*O*-x),a=ac(M,a,-Math.sin(A)*-x),l=ac(M,l,C*O*-x+x)}p!==_o&&(y+="perspective("+p+Cr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(R||o!==_o||a!==_o||l!==_o)&&(y+=l!==_o||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Cr),c!==Rr&&(y+="rotate("+c+Cr),u!==Rr&&(y+="rotateY("+u+Cr),h!==Rr&&(y+="rotateX("+h+Cr),(f!==Rr||d!==Rr)&&(y+="skew("+f+", "+d+Cr),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Cr),M.style[It]=y||"translate(0, 0)"},Vg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),y=parseFloat(a),R,A,T,C,O;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fs,c*=Fs,R=Math.cos(l)*h,A=Math.sin(l)*h,T=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=Fs,O=Math.tan(c-u),O=Math.sqrt(1+O*O),T*=O,C*=O,u&&(O=Math.tan(u),O=Math.sqrt(1+O*O),R*=O,A*=O)),R=kt(R),A=kt(A),T=kt(T),C=kt(C)):(R=h,C=f,A=T=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Tr(d,"x",o,"px"),y=Tr(d,"y",a,"px")),(_||g||p||m)&&(x=kt(x+_-(_*R+g*T)+p),y=kt(y+g-(_*A+g*C)+m)),(i||s)&&(O=d.getBBox(),x=kt(x+i/100*O.width),y=kt(y+s/100*O.height)),O="matrix("+R+","+A+","+T+","+C+","+x+","+y+")",d.setAttribute("transform",O),M&&(d.style[It]=O)},Gg=function(e,t,n,i,s){var o=360,a=tn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*vf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*vf)%o-~~(c/o)*o)),e._pt=f=new Ln(e._pt,t,n,i,c,Ag),f.e=u,f.u="deg",e._props.push(n),f},Ef=function(e,t){for(var n in t)e[n]=t[n];return e},Wg=function(e,t,n){var i=Ef({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[It]=t,a=sa(n,1),ns(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],o[It]=t,a=sa(n,1),o[It]=c);for(l in ji)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=hn(c),_=hn(u),h=d!==_?Tr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Ln(e._pt,a,l,h,f-h,uu),e._pt.u=_||0,e._props.push(l));Ef(a,i)};Pn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});bl[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Hi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var cm={name:"css",register:fu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,M,x,y,R,A,T,C;wh||fu(),this.styles=this.styles||nm(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Hn[g]&&Xp(g,t,n,i,e,s)))){if(d=typeof u,_=bl[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ta(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",vr.lastIndex=0,vr.test(c)||(p=hn(c),m=hn(u)),m?p!==m&&(c=Tr(e,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],tn(c)&&~c.indexOf("random(")&&(c=ta(c)),hn(c+"")||c==="auto"||(c+=qn.units[g]||hn(Hi(e,g))||""),(c+"").charAt(1)==="="&&(c=Hi(e,g))):c=Hi(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in Mi&&(g==="autoAlpha"&&(f===1&&Hi(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),fr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Mi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ji,x){if(this.styles.save(g),y||(R=e._gsap,R.renderTransform&&!t.parseTransform||sa(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,y=this._pt=new Ln(this._pt,a,It,0,1,R.renderTransform,R,0,-1),y.dep=1),g==="scale")this._pt=new Ln(this._pt,R,"scaleY",R.scaleY,(M?Us(R.scaleY,M+h):h)-R.scaleY||0,uu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Dn,0,a[Dn]),u=kg(u),R.svg?du(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&fr(this,R,"zOrigin",R.zOrigin,m),fr(this,a,g,Al(c),Al(u)));continue}else if(g==="svgOrigin"){du(e,u,1,A,0,this);continue}else if(g in om){Gg(this,R,g,f,M?Us(f,M+u):u);continue}else if(g==="smoothOrigin"){fr(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){Wg(this,u,e);continue}}else g in a||(g=js(g)||g);if(x||(h||h===0)&&(f||f===0)&&!bg.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=hn(u)||(g in qn.units?qn.units[g]:p),p!==m&&(f=Tr(e,g,c,m)),this._pt=new Ln(this._pt,x?R:a,g,f,(M?Us(f,M+h):h)-f,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?Rg:uu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=wg);else if(g in a)Bg.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){vh(g,u);continue}x||(g in a?C.push(g,0,a[g]):C.push(g,1,c||e[g])),o.push(g)}}T&&Zp(this)},render:function(e,t){if(t.tween._time||!Rh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Hi,aliases:Mi,getSetter:function(e,t,n){var i=Mi[t];return i&&i.indexOf(",")<0&&(t=i),t in ji&&t!==Dn&&(e._gsap.x||Hi(e,"x"))?n&&gf===n?t==="scale"?Dg:Lg:(gf=n||{})&&(t==="scale"?Ig:Ng):e.style&&!mh(e.style[t])?Cg:~t.indexOf("-")?Pg:bh(e,t)},core:{_removeProperty:ns,_getMatrix:Ph}};Nn.utils.checkPrefix=js;Nn.core.getStyleSaver=nm;(function(r,e,t,n){var i=Pn(r+","+e+","+t,function(s){ji[s]=1});Pn(e,function(s){qn.units[s]="deg",om[s]=1}),Mi[i[13]]=r+","+e,Pn(n,function(s){var o=s.split(":");Mi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){qn.units[r]="px"});Nn.registerPlugin(cm);var Vt=Nn.registerPlugin(cm)||Nn;Vt.core.Tween;function Xg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Yg(r,e,t){return e&&Xg(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn,ol,Gn,dr,pr,Bs,um,Br,Ho,hm,Gi,ui,fm,dm=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},pm=1,Ds=[],nt=[],Ei=[],Vo=Date.now,pu=function(e,t){return t},qg=function(){var e=Ho.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Ei),nt=n,Ei=i,pu=function(o,a){return t[o](a)}},xr=function(e,t){return~Ei.indexOf(e)&&Ei[Ei.indexOf(e)+1][t]},Go=function(e){return!!~hm.indexOf(e)},_n=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},va="scrollLeft",xa="scrollTop",mu=function(){return Gi&&Gi.isPressed||nt.cache++},wl=function(e,t){var n=function i(s){if(s||s===0){pm&&(Gn.history.scrollRestoration="manual");var o=Gi&&Gi.isPressed;s=i.v=Math.round(s)||(Gi&&Gi.iOS?1:0),e(s),i.cacheID=nt.cache,o&&pu("ss",s)}else(t||nt.cache!==i.cacheID||pu("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},En={s:va,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:wl(function(r){return arguments.length?Gn.scrollTo(r,Yt.sc()):Gn.pageXOffset||dr[va]||pr[va]||Bs[va]||0})},Yt={s:xa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:wl(function(r){return arguments.length?Gn.scrollTo(En.sc(),r):Gn.pageYOffset||dr[xa]||pr[xa]||Bs[xa]||0})},Rn=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Er=function(e,t){var n=t.s,i=t.sc;Go(e)&&(e=dr.scrollingElement||pr);var s=nt.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||_n(e,"scroll",mu);var a=nt[s+o],l=a||(nt[s+o]=wl(xr(e,n),!0)||(Go(e)?i:wl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},_u=function(e,t,n){var i=e,s=e,o=Vo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Vo();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=Vo();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},go=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},bf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},mm=function(){Ho=rn.core.globals().ScrollTrigger,Ho&&Ho.core&&qg()},_m=function(e){return rn=e||dm(),!ol&&rn&&typeof document<"u"&&document.body&&(Gn=window,dr=document,pr=dr.documentElement,Bs=dr.body,hm=[Gn,dr,pr,Bs],rn.utils.clamp,fm=rn.core.context||function(){},Br="onpointerenter"in Bs?"pointer":"mouse",um=zt.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ui=zt.eventTypes=("ontouchstart"in pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return pm=0},500),mm(),ol=1),ol};En.op=Yt;nt.cache=0;var zt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ol||_m(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Ho||mm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,x=n.onPress,y=n.onRelease,R=n.onRight,A=n.onLeft,T=n.onUp,C=n.onDown,O=n.onChangeX,v=n.onChangeY,E=n.onChange,D=n.onToggleX,z=n.onToggleY,X=n.onHover,j=n.onHoverEnd,V=n.onMove,Y=n.ignoreCheck,W=n.isNormalizer,se=n.onGestureStart,P=n.onGestureEnd,ae=n.onWheel,Fe=n.onEnable,Xe=n.onDisable,q=n.onClick,Q=n.scrollSpeed,fe=n.capture,oe=n.allowClicks,be=n.lockAxis,Se=n.onLockAxis;this.target=a=Rn(a)||pr,this.vars=n,d&&(d=rn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Gn.getComputedStyle(Bs).lineHeight)||22);var We,Ve,ze,L,ot,Ue,Be,F=this,Je=0,Pe=0,w=n.passive||!u,S=Er(a,En),G=Er(a,Yt),Z=S(),te=G(),$=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ui[0]==="pointerdown",ye=Go(a),ie=a.ownerDocument||dr,de=[0,0,0],He=[0,0,0],ne=0,ve=function(){return ne=Vo()},xe=function(Te,ht){return(F.event=Te)&&d&&~d.indexOf(Te.target)||ht&&$&&Te.pointerType!=="touch"||Y&&Y(Te,ht)},De=function(){F._vx.reset(),F._vy.reset(),Ve.pause(),h&&h(F)},ge=function(){var Te=F.deltaX=bf(de),ht=F.deltaY=bf(He),pe=Math.abs(Te)>=i,Ie=Math.abs(ht)>=i;E&&(pe||Ie)&&E(F,Te,ht,de,He),pe&&(R&&F.deltaX>0&&R(F),A&&F.deltaX<0&&A(F),O&&O(F),D&&F.deltaX<0!=Je<0&&D(F),Je=F.deltaX,de[0]=de[1]=de[2]=0),Ie&&(C&&F.deltaY>0&&C(F),T&&F.deltaY<0&&T(F),v&&v(F),z&&F.deltaY<0!=Pe<0&&z(F),Pe=F.deltaY,He[0]=He[1]=He[2]=0),(L||ze)&&(V&&V(F),ze&&(M(F),ze=!1),L=!1),Ue&&!(Ue=!1)&&Se&&Se(F),ot&&(ae(F),ot=!1),We=0},Ye=function(Te,ht,pe){de[pe]+=Te,He[pe]+=ht,F._vx.update(Te),F._vy.update(ht),c?We||(We=requestAnimationFrame(ge)):ge()},Oe=function(Te,ht){be&&!Be&&(F.axis=Be=Math.abs(Te)>Math.abs(ht)?"x":"y",Ue=!0),Be!=="y"&&(de[2]+=Te,F._vx.update(Te,!0)),Be!=="x"&&(He[2]+=ht,F._vy.update(ht,!0)),c?We||(We=requestAnimationFrame(ge)):ge()},at=function(Te){if(!xe(Te,1)){Te=go(Te,u);var ht=Te.clientX,pe=Te.clientY,Ie=ht-F.x,Re=pe-F.y,ke=F.isDragging;F.x=ht,F.y=pe,(ke||Math.abs(F.startX-ht)>=s||Math.abs(F.startY-pe)>=s)&&(M&&(ze=!0),ke||(F.isDragging=!0),Oe(Ie,Re),ke||p&&p(F))}},I=F.onPress=function(we){xe(we,1)||we&&we.button||(F.axis=Be=null,Ve.pause(),F.isPressed=!0,we=go(we),Je=Pe=0,F.startX=F.x=we.clientX,F.startY=F.y=we.clientY,F._vx.reset(),F._vy.reset(),_n(W?a:ie,ui[1],at,w,!0),F.deltaX=F.deltaY=0,x&&x(F))},ee=F.onRelease=function(we){if(!xe(we,1)){pn(W?a:ie,ui[1],at,!0);var Te=!isNaN(F.y-F.startY),ht=F.isDragging,pe=ht&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ie=go(we);!pe&&Te&&(F._vx.reset(),F._vy.reset(),u&&oe&&rn.delayedCall(.08,function(){if(Vo()-ne>300&&!we.defaultPrevented){if(we.target.click)we.target.click();else if(ie.createEvent){var Re=ie.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,Gn,1,Ie.screenX,Ie.screenY,Ie.clientX,Ie.clientY,!1,!1,!1,!1,0,null),we.target.dispatchEvent(Re)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&ht&&!W&&Ve.restart(!0),m&&ht&&m(F),y&&y(F,pe)}},K=function(Te){return Te.touches&&Te.touches.length>1&&(F.isGesturing=!0)&&se(Te,F.isDragging)},J=function(){return(F.isGesturing=!1)||P(F)},le=function(Te){if(!xe(Te)){var ht=S(),pe=G();Ye((ht-Z)*Q,(pe-te)*Q,1),Z=ht,te=pe,h&&Ve.restart(!0)}},ce=function(Te){if(!xe(Te)){Te=go(Te,u),ae&&(ot=!0);var ht=(Te.deltaMode===1?l:Te.deltaMode===2?Gn.innerHeight:1)*_;Ye(Te.deltaX*ht,Te.deltaY*ht,0),h&&!W&&Ve.restart(!0)}},qe=function(Te){if(!xe(Te)){var ht=Te.clientX,pe=Te.clientY,Ie=ht-F.x,Re=pe-F.y;F.x=ht,F.y=pe,L=!0,h&&Ve.restart(!0),(Ie||Re)&&Oe(Ie,Re)}},yt=function(Te){F.event=Te,X(F)},Rt=function(Te){F.event=Te,j(F)},tt=function(Te){return xe(Te)||go(Te,u)&&q(F)};Ve=F._dc=rn.delayedCall(f||.25,De).pause(),F.deltaX=F.deltaY=0,F._vx=_u(0,50,!0),F._vy=_u(0,50,!0),F.scrollX=S,F.scrollY=G,F.isDragging=F.isGesturing=F.isPressed=!1,fm(this),F.enable=function(we){return F.isEnabled||(_n(ye?ie:a,"scroll",mu),o.indexOf("scroll")>=0&&_n(ye?ie:a,"scroll",le,w,fe),o.indexOf("wheel")>=0&&_n(a,"wheel",ce,w,fe),(o.indexOf("touch")>=0&&um||o.indexOf("pointer")>=0)&&(_n(a,ui[0],I,w,fe),_n(ie,ui[2],ee),_n(ie,ui[3],ee),oe&&_n(a,"click",ve,!0,!0),q&&_n(a,"click",tt),se&&_n(ie,"gesturestart",K),P&&_n(ie,"gestureend",J),X&&_n(a,Br+"enter",yt),j&&_n(a,Br+"leave",Rt),V&&_n(a,Br+"move",qe)),F.isEnabled=!0,we&&we.type&&I(we),Fe&&Fe(F)),F},F.disable=function(){F.isEnabled&&(Ds.filter(function(we){return we!==F&&Go(we.target)}).length||pn(ye?ie:a,"scroll",mu),F.isPressed&&(F._vx.reset(),F._vy.reset(),pn(W?a:ie,ui[1],at,!0)),pn(ye?ie:a,"scroll",le,fe),pn(a,"wheel",ce,fe),pn(a,ui[0],I,fe),pn(ie,ui[2],ee),pn(ie,ui[3],ee),pn(a,"click",ve,!0),pn(a,"click",tt),pn(ie,"gesturestart",K),pn(ie,"gestureend",J),pn(a,Br+"enter",yt),pn(a,Br+"leave",Rt),pn(a,Br+"move",qe),F.isEnabled=F.isPressed=F.isDragging=!1,Xe&&Xe(F))},F.kill=F.revert=function(){F.disable();var we=Ds.indexOf(F);we>=0&&Ds.splice(we,1),Gi===F&&(Gi=0)},Ds.push(F),W&&Go(a)&&(Gi=F),F.enable(g)},Yg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();zt.version="3.12.5";zt.create=function(r){return new zt(r)};zt.register=_m;zt.getAll=function(){return Ds.slice()};zt.getById=function(r){return Ds.filter(function(e){return e.vars.id===r})[0]};dm()&&rn.registerPlugin(zt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Me,Rs,ct,Lt,hi,wt,gm,Rl,oa,Wo,Lo,ya,ln,Vl,gu,xn,Af,wf,Cs,vm,lc,xm,vn,vu,ym,Mm,lr,xu,Lh,ks,Dh,Cl,yu,cc,Ma=1,cn=Date.now,uc=cn(),ri=0,Do=0,Rf=function(e,t,n){var i=zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Cf=function(e,t){return t&&(!zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Kg=function r(){return Do&&requestAnimationFrame(r)},Pf=function(){return Vl=1},Lf=function(){return Vl=0},gi=function(e){return e},Io=function(e){return Math.round(e*1e5)/1e5||0},Sm=function(){return typeof window<"u"},Tm=function(){return Me||Sm()&&(Me=window.gsap)&&Me.registerPlugin&&Me},is=function(e){return!!~gm.indexOf(e)},Em=function(e){return(e==="Height"?Dh:ct["inner"+e])||hi["client"+e]||wt["client"+e]},bm=function(e){return xr(e,"getBoundingClientRect")||(is(e)?function(){return hl.width=ct.innerWidth,hl.height=Dh,hl}:function(){return Vi(e)})},jg=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=xr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Em(s):e["client"+s])||0}},$g=function(e,t){return!t||~Ei.indexOf(e)?bm(e):function(){return hl}},Si=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=xr(e,n))?o()-bm(e)()[s]:is(e)?(hi[n]||wt[n])-Em(i):e[n]-e["offset"+i])},Sa=function(e,t){for(var n=0;n<Cs.length;n+=3)(!t||~t.indexOf(Cs[n+1]))&&e(Cs[n],Cs[n+1],Cs[n+2])},zn=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},No=function(e){return typeof e=="number"},kr=function(e){return typeof e=="object"},vo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},hc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},hs=Math.abs,Am="left",wm="top",Ih="right",Nh="bottom",Jr="width",Qr="height",Xo="Right",Yo="Left",qo="Top",Ko="Bottom",Gt="padding",Qn="margin",$s="Width",Uh="Height",Xt="px",ei=function(e){return ct.getComputedStyle(e)},Zg=function(e){var t=ei(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Df=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Vi=function(e,t){var n=t&&ei(e)[gu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Pl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Rm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Jg=function(e){return function(t){return Me.utils.snap(Rm(e),t)}},Oh=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Qg=function(e){return function(t,n){return Oh(Rm(e))(t,n.direction)}},Ta=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Zt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ea=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},If={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ba={toggleActions:"play",anticipatePin:0},Ll={top:0,left:0,center:.5,bottom:1,right:1},al=function(e,t){if(zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ll?Ll[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Aa=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=Lt.createElement("div"),g=is(n)||xr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?wt:n,M=e.indexOf("start")!==-1,x=M?c:u,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(y+=(i===Yt?Ih:Nh)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],ll(_,0,i,M),_},ll=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+$s]=1,s["border"+a+$s]=0,s[n.p]=t+"px",Me.set(e,s)},et=[],Mu={},aa,Nf=function(){return cn()-ri>34&&(aa||(aa=requestAnimationFrame(Yi)))},fs=function(){(!vn||!vn.isPressed||vn.startX>wt.clientWidth)&&(nt.cache++,vn?aa||(aa=requestAnimationFrame(Yi)):Yi(),ri||ss("scrollStart"),ri=cn())},fc=function(){Mm=ct.innerWidth,ym=ct.innerHeight},Uo=function(){nt.cache++,!ln&&!xm&&!Lt.fullscreenElement&&!Lt.webkitFullscreenElement&&(!vu||Mm!==ct.innerWidth||Math.abs(ct.innerHeight-ym)>ct.innerHeight*.25)&&Rl.restart(!0)},rs={},e0=[],Cm=function r(){return Zt(Qe,"scrollEnd",r)||Xr(!0)},ss=function(e){return rs[e]&&rs[e].map(function(t){return t()})||e0},kn=[],Pm=function(e){for(var t=0;t<kn.length;t+=5)(!e||kn[t+4]&&kn[t+4].query===e)&&(kn[t].style.cssText=kn[t+1],kn[t].getBBox&&kn[t].setAttribute("transform",kn[t+2]||""),kn[t+3].uncache=1)},Fh=function(e,t){var n;for(xn=0;xn<et.length;xn++)n=et[xn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Cl=!0,t&&Pm(t),t||ss("revert")},Lm=function(e,t){nt.cache++,(t||!yn)&&nt.forEach(function(n){return bn(n)&&n.cacheID++&&(n.rec=0)}),zn(e)&&(ct.history.scrollRestoration=Lh=e)},yn,es=0,Uf,t0=function(){if(Uf!==es){var e=Uf=es;requestAnimationFrame(function(){return e===es&&Xr(!0)})}},Dm=function(){wt.appendChild(ks),Dh=!vn&&ks.offsetHeight||ct.innerHeight,wt.removeChild(ks)},Of=function(e){return oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Xr=function(e,t){if(ri&&!e&&!Cl){Jt(Qe,"scrollEnd",Cm);return}Dm(),yn=Qe.isRefreshing=!0,nt.forEach(function(i){return bn(i)&&++i.cacheID&&(i.rec=i())});var n=ss("refreshInit");vm&&Qe.sort(),t||Fh(),nt.forEach(function(i){bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Cl=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),yu=1,Of(!0),et.forEach(function(i){var s=Si(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Of(!1),yu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Lm(Lh,1),Rl.pause(),es++,yn=2,Yi(2),et.forEach(function(i){return bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),yn=Qe.isRefreshing=!1,ss("refresh")},Su=0,cl=1,jo,Yi=function(e){if(e===2||!yn&&!Cl){Qe.isUpdating=!0,jo&&jo.update(0);var t=et.length,n=cn(),i=n-uc>=50,s=t&&et[0].scroll();if(cl=Su>s?-1:1,yn||(Su=s),i&&(ri&&!Vl&&n-ri>200&&(ri=0,ss("scrollEnd")),Lo=uc,uc=n),cl<0){for(xn=t;xn-- >0;)et[xn]&&et[xn].update(0,i);cl=1}else for(xn=0;xn<t;xn++)et[xn]&&et[xn].update(0,i);Qe.isUpdating=!1}aa=0},Tu=[Am,wm,Nh,Ih,Qn+Ko,Qn+Xo,Qn+qo,Qn+Yo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ul=Tu.concat([Jr,Qr,"boxSizing","max"+$s,"max"+Uh,"position",Qn,Gt,Gt+qo,Gt+Xo,Gt+Ko,Gt+Yo]),n0=function(e,t,n){zs(n);var i=e._gsap;if(i.spacerIsNative)zs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},dc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Tu.length,o=t.style,a=e.style,l;s--;)l=Tu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Nh]=a[Ih]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Jr]=Pl(e,En)+Xt,o[Qr]=Pl(e,Yt)+Xt,o[Gt]=a[Qn]=a[wm]=a[Am]="0",zs(i),a[Jr]=a["max"+$s]=n[Jr],a[Qr]=a["max"+Uh]=n[Qr],a[Gt]=n[Gt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},i0=/([A-Z])/g,zs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(i0,"-$1").toLowerCase())}},wa=function(e){for(var t=ul.length,n=e.style,i=[],s=0;s<t;s++)i.push(ul[s],n[ul[s]]);return i.t=e,i},r0=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},hl={left:0,top:0},Ff=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){bn(e)&&(e=e(l)),zn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?al("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(e)||(e=+e),No(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&ll(a,n,i,!0);else{bn(t)&&(t=t(l));var x=(e||"0").split(" "),y,R,A,T;M=Rn(t,l)||wt,y=Vi(M)||{},(!y||!y.left&&!y.top)&&ei(M).display==="none"&&(T=M.style.display,M.style.display="block",y=Vi(M),T?M.style.display=T:M.style.removeProperty("display")),R=al(x[0],y[i.d]),A=al(x[1]||"0",n),e=y[i.p]-c[i.p]-u+R+s-A,a&&ll(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,O=o._isStart;p="scroll"+i.d2,ll(o,C,i,O&&C>20||!O&&(h?Math.max(wt[p],hi[p]):o.parentNode[p])<=C+1),h&&(c=Vi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return d&&M&&(p=Vi(M),d.seek(f),m=Vi(M),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},s0=/(webkit|moz|length|cssText|inset)/i,Bf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=ei(e);for(o in a)!+o&&!s0.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},Im=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Ra=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},kf=function(e,t){var n=Er(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=Im(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Yi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Me.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Jt(e,"wheel",n.wheelHandler),Qe.isTouch&&Jt(e,"touchmove",n.wheelHandler),s},Qe=function(){function r(t,n){Rs||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Do){this.update=this.refresh=this.kill=gi;return}n=Df(zn(n)||No(n)||n.nodeType?{trigger:n}:n,ba);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,x=s.once,y=s.snap,R=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,C=s.fastScrollEnd,O=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:Yt,E=!h&&h!==0,D=Rn(n.scroller||ct),z=Me.core.getCache(D),X=is(D),j=("pinType"in n?n.pinType:xr(D,"pinType")||X&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=E&&n.toggleActions.split(" "),W="markers"in n?n.markers:ba.markers,se=X?0:parseFloat(ei(D)["border"+v.p2+$s])||0,P=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Fe=jg(D,X,v),Xe=$g(D,X),q=0,Q=0,fe=0,oe=Er(D,v),be,Se,We,Ve,ze,L,ot,Ue,Be,F,Je,Pe,w,S,G,Z,te,$,ye,ie,de,He,ne,ve,xe,De,ge,Ye,Oe,at,I,ee,K,J,le,ce,qe,yt,Rt;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=D,P.scroll=T?T.time.bind(T):oe,Ve=oe(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(vm=1,n.refreshPriority===-9999&&(jo=P)),z.tweenScroll=z.tweenScroll||{top:kf(D,Yt),left:kf(D,En)},P.tweenTo=be=z.tweenScroll[v.p],P.scrubDuration=function(pe){K=No(pe)&&pe,K?ee?ee.duration(pe):ee=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(P)}}):(ee&&ee.progress(1).kill(),ee=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),at=0,l||(l=i.vars.id)),y&&((!kr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in wt.style&&Me.set(X?[wt,hi]:D,{scrollBehavior:"auto"}),nt.forEach(function(pe){return bn(pe)&&pe.target===(X?Lt.scrollingElement||hi:D)&&(pe.smooth=!1)}),We=bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Jg(i):y.snapTo==="labelsDirectional"?Qg(i):y.directional!==!1?function(pe,Ie){return Oh(y.snapTo)(pe,cn()-Q<500?0:Ie.direction)}:Me.utils.snap(y.snapTo),J=y.duration||{min:.1,max:2},J=kr(J)?Wo(J.min,J.max):Wo(J,J),le=Me.delayedCall(y.delay||K/2||.1,function(){var pe=oe(),Ie=cn()-Q<500,Re=be.tween;if((Ie||Math.abs(P.getVelocity())<10)&&!Re&&!Vl&&q!==pe){var ke=(pe-L)/S,Ot=i&&!E?i.totalProgress():ke,je=Ie?0:(Ot-I)/(cn()-Lo)*1e3||0,Ct=Me.utils.clamp(-ke,1-ke,hs(je/2)*je/.185),Ft=ke+(y.inertia===!1?0:Ct),Et,Mt,_t=y,Un=_t.onStart,bt=_t.onInterrupt,b=_t.onComplete;if(Et=We(Ft,P),No(Et)||(Et=Ft),Mt=Math.round(L+Et*S),pe<=ot&&pe>=L&&Mt!==pe){if(Re&&!Re._initted&&Re.data<=hs(Mt-pe))return;y.inertia===!1&&(Ct=Et-ke),be(Mt,{duration:J(hs(Math.max(hs(Ft-Ot),hs(Et-Ot))*.185/je/.05||0)),ease:y.ease||"power3",data:hs(Mt-pe),onInterrupt:function(){return le.restart(!0)&&bt&&bt(P)},onComplete:function(){P.update(),q=oe(),i&&(ee?ee.resetTo("totalProgress",Et,i._tTime/i._tDur):i.progress(Et)),at=I=i&&!E?i.totalProgress():P.progress,M&&M(P),b&&b(P)}},pe,Ct*S,Mt-pe-Ct*S),Un&&Un(P,be.tween)}}else P.isActive&&q!==pe&&le.restart(!0)}).pause()),l&&(Mu[l]=P),f=P.trigger=Rn(f||d!==!0&&d),Rt=f&&f._gsap&&f._gsap.stRevert,Rt&&(Rt=Rt(P)),d=d===!0?f:Rn(d),zn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===Qn||(_=!_&&d.parentNode&&d.parentNode.style&&ei(d.parentNode).display==="flex"?!1:Gt),P.pin=d,Se=Me.core.getCache(d),Se.spacer?G=Se.pinState:(A&&(A=Rn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Se.spacerIsNative=!!A,A&&(Se.spacerState=wa(A))),Se.spacer=$=A||Lt.createElement("div"),$.classList.add("pin-spacer"),l&&$.classList.add("pin-spacer-"+l),Se.pinState=G=wa(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),P.spacer=$=Se.spacer,Oe=ei(d),ve=Oe[_+v.os2],ie=Me.getProperty(d),de=Me.quickSetter(d,v.a,Xt),dc(d,$,Oe),te=wa(d)),W){Pe=kr(W)?Df(W,If):If,F=Aa("scroller-start",l,D,v,Pe,0),Je=Aa("scroller-end",l,D,v,Pe,0,F),ye=F["offset"+v.op.d2];var tt=Rn(xr(D,"content")||D);Ue=this.markerStart=Aa("start",l,tt,v,Pe,ye,0,T),Be=this.markerEnd=Aa("end",l,tt,v,Pe,ye,0,T),T&&(yt=Me.quickSetter([Ue,Be],v.a,Xt)),!j&&!(Ei.length&&xr(D,"fixedMarkers")===!0)&&(Zg(X?wt:D),Me.set([F,Je],{force3D:!0}),De=Me.quickSetter(F,v.a,Xt),Ye=Me.quickSetter(Je,v.a,Xt))}if(T){var we=T.vars.onUpdate,Te=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),we&&we.apply(T,Te||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(pe,Ie){if(!Ie)return P.kill(!0);var Re=pe!==!1||!P.enabled,ke=ln;Re!==P.isReverted&&(Re&&(ce=Math.max(oe(),P.scroll.rec||0),fe=P.progress,qe=i&&i.progress()),Ue&&[Ue,Be,F,Je].forEach(function(Ot){return Ot.style.display=Re?"none":"block"}),Re&&(ln=P,P.update(Re)),d&&(!R||!P.isActive)&&(Re?n0(d,$,G):dc(d,$,ei(d),xe)),Re||P.update(Re),ln=ke,P.isReverted=Re)},P.refresh=function(pe,Ie,Re,ke){if(!((ln||!P.enabled)&&!Ie)){if(d&&pe&&ri){Jt(r,"scrollEnd",Cm);return}!yn&&ae&&ae(P),ln=P,be.tween&&!Re&&(be.tween.kill(),be.tween=0),ee&&ee.pause(),g&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ot=Fe(),je=Xe(),Ct=T?T.duration():Si(D,v),Ft=S<=.01,Et=0,Mt=ke||0,_t=kr(Re)?Re.end:n.end,Un=n.endTrigger||f,bt=kr(Re)?Re.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),b=P.pinnedContainer=n.pinnedContainer&&Rn(n.pinnedContainer,P),U=f&&Math.max(0,et.indexOf(P))||0,k=U,H,N,re,_e,he,ue,Ae,Ne,Ee,lt,rt,xt,jt;for(W&&kr(Re)&&(xt=Me.getProperty(F,v.p),jt=Me.getProperty(Je,v.p));k--;)ue=et[k],ue.end||ue.refresh(0,1)||(ln=P),Ae=ue.pin,Ae&&(Ae===f||Ae===d||Ae===b)&&!ue.isReverted&&(lt||(lt=[]),lt.unshift(ue),ue.revert(!0,!0)),ue!==et[k]&&(U--,k--);for(bn(bt)&&(bt=bt(P)),bt=Rf(bt,"start",P),L=Ff(bt,f,Ot,v,oe(),Ue,F,P,je,se,j,Ct,T,P._startClamp&&"_startClamp")||(d?-.001:0),bn(_t)&&(_t=_t(P)),zn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(zn(bt)?bt.split(" ")[0]:"")+_t:(Et=al(_t.substr(2),Ot),_t=zn(bt)?bt:(T?Me.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,L):L)+Et,Un=f)),_t=Rf(_t,"end",P),ot=Math.max(L,Ff(_t||(Un?"100% 0":Ct),Un,Ot,v,oe()+Et,Be,Je,P,je,se,j,Ct,T,P._endClamp&&"_endClamp"))||-.001,Et=0,k=U;k--;)ue=et[k],Ae=ue.pin,Ae&&ue.start-ue._pinPush<=L&&!T&&ue.end>0&&(H=ue.end-(P._startClamp?Math.max(0,ue.start):ue.start),(Ae===f&&ue.start-ue._pinPush<L||Ae===b)&&isNaN(bt)&&(Et+=H*(1-ue.progress)),Ae===d&&(Mt+=H));if(L+=Et,ot+=Et,P._startClamp&&(P._startClamp+=Et),P._endClamp&&!yn&&(P._endClamp=ot||-.001,ot=Math.min(ot,Si(D,v))),S=ot-L||(L-=.01)&&.001,Ft&&(fe=Me.utils.clamp(0,1,Me.utils.normalize(L,ot,ce))),P._pinPush=Mt,Ue&&Et&&(H={},H[v.a]="+="+Et,b&&(H[v.p]="-="+oe()),Me.set([Ue,Be],H)),d&&!(yu&&P.end>=Si(D,v)))H=ei(d),_e=v===Yt,re=oe(),He=parseFloat(ie(v.a))+Mt,!Ct&&ot>1&&(rt=(X?Lt.scrollingElement||hi:D).style,rt={style:rt,value:rt["overflow"+v.a.toUpperCase()]},X&&ei(wt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(rt.style["overflow"+v.a.toUpperCase()]="scroll")),dc(d,$,H),te=wa(d),N=Vi(d,!0),Ne=j&&Er(D,_e?En:Yt)(),_?(xe=[_+v.os2,S+Mt+Xt],xe.t=$,k=_===Gt?Pl(d,v)+S+Mt:0,k&&(xe.push(v.d,k+Xt),$.style.flexBasis!=="auto"&&($.style.flexBasis=k+Xt)),zs(xe),b&&et.forEach(function(st){st.pin===b&&st.vars.pinSpacing!==!1&&(st._subPinOffset=!0)}),j&&oe(ce)):(k=Pl(d,v),k&&$.style.flexBasis!=="auto"&&($.style.flexBasis=k+Xt)),j&&(he={top:N.top+(_e?re-L:Ne)+Xt,left:N.left+(_e?Ne:re-L)+Xt,boxSizing:"border-box",position:"fixed"},he[Jr]=he["max"+$s]=Math.ceil(N.width)+Xt,he[Qr]=he["max"+Uh]=Math.ceil(N.height)+Xt,he[Qn]=he[Qn+qo]=he[Qn+Xo]=he[Qn+Ko]=he[Qn+Yo]="0",he[Gt]=H[Gt],he[Gt+qo]=H[Gt+qo],he[Gt+Xo]=H[Gt+Xo],he[Gt+Ko]=H[Gt+Ko],he[Gt+Yo]=H[Gt+Yo],Z=r0(G,he,R),yn&&oe(0)),i?(Ee=i._initted,lc(1),i.render(i.duration(),!0,!0),ne=ie(v.a)-He+S+Mt,ge=Math.abs(S-ne)>1,j&&ge&&Z.splice(Z.length-2,2),i.render(0,!0,!0),Ee||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lc(0)):ne=S,rt&&(rt.value?rt.style["overflow"+v.a.toUpperCase()]=rt.value:rt.style.removeProperty("overflow-"+v.a));else if(f&&oe()&&!T)for(N=f.parentNode;N&&N!==wt;)N._pinOffset&&(L-=N._pinOffset,ot-=N._pinOffset),N=N.parentNode;lt&&lt.forEach(function(st){return st.revert(!1,!0)}),P.start=L,P.end=ot,Ve=ze=yn?ce:oe(),!T&&!yn&&(Ve<ce&&oe(ce),P.scroll.rec=0),P.revert(!1,!0),Q=cn(),le&&(q=-1,le.restart(!0)),ln=0,i&&E&&(i._initted||qe)&&i.progress()!==qe&&i.progress(qe||0,!0).render(i.time(),!0,!0),(Ft||fe!==P.progress||T||g)&&(i&&!E&&i.totalProgress(T&&L<-.001&&!fe?Me.utils.normalize(L,ot,0):fe,!0),P.progress=Ft||(Ve-L)/S===fe?0:fe),d&&_&&($._pinOffset=Math.round(P.progress*ne)),ee&&ee.invalidate(),isNaN(xt)||(xt-=Me.getProperty(F,v.p),jt-=Me.getProperty(Je,v.p),Ra(F,v,xt),Ra(Ue,v,xt-(ke||0)),Ra(Je,v,jt),Ra(Be,v,jt-(ke||0))),Ft&&!yn&&P.update(),u&&!yn&&!w&&(w=!0,u(P),w=!1)}},P.getVelocity=function(){return(oe()-ze)/(cn()-Lo)*1e3||0},P.endAnimation=function(){vo(P.callbackAnimation),i&&(ee?ee.progress(1):i.paused()?E||vo(i,P.direction<0,1):vo(i,i.reversed()))},P.labelToScroll=function(pe){return i&&i.labels&&(L||P.refresh()||L)+i.labels[pe]/i.duration()*S||0},P.getTrailing=function(pe){var Ie=et.indexOf(P),Re=P.direction>0?et.slice(0,Ie).reverse():et.slice(Ie+1);return(zn(pe)?Re.filter(function(ke){return ke.vars.preventOverlaps===pe}):Re).filter(function(ke){return P.direction>0?ke.end<=L:ke.start>=ot})},P.update=function(pe,Ie,Re){if(!(T&&!Re&&!pe)){var ke=yn===!0?ce:P.scroll(),Ot=pe?0:(ke-L)/S,je=Ot<0?0:Ot>1?1:Ot||0,Ct=P.progress,Ft,Et,Mt,_t,Un,bt,b,U;if(Ie&&(ze=Ve,Ve=T?oe():ke,y&&(I=at,at=i&&!E?i.totalProgress():je)),p&&d&&!ln&&!Ma&&ri&&(!je&&L<ke+(ke-ze)/(cn()-Lo)*p?je=1e-4:je===1&&ot>ke+(ke-ze)/(cn()-Lo)*p&&(je=.9999)),je!==Ct&&P.enabled){if(Ft=P.isActive=!!je&&je<1,Et=!!Ct&&Ct<1,bt=Ft!==Et,Un=bt||!!je!=!!Ct,P.direction=je>Ct?1:-1,P.progress=je,Un&&!ln&&(Mt=je&&!Ct?0:je===1?1:Ct===1?2:3,E&&(_t=!bt&&Y[Mt+1]!=="none"&&Y[Mt+1]||Y[Mt],U=i&&(_t==="complete"||_t==="reset"||_t in i))),O&&(bt||U)&&(U||h||!i)&&(bn(O)?O(P):P.getTrailing(O).forEach(function(re){return re.endAnimation()})),E||(ee&&!ln&&!Ma?(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",je,i._tTime/i._tDur):(ee.vars.totalProgress=je,ee.invalidate().restart())):i&&i.totalProgress(je,!!(ln&&(Q||pe)))),d){if(pe&&_&&($.style[_+v.os2]=ve),!j)de(Io(He+ne*je));else if(Un){if(b=!pe&&je>Ct&&ot+1>ke&&ke+1>=Si(D,v),R)if(!pe&&(Ft||b)){var k=Vi(d,!0),H=ke-L;Bf(d,wt,k.top+(v===Yt?H:0)+Xt,k.left+(v===Yt?0:H)+Xt)}else Bf(d,$);zs(Ft||b?Z:te),ge&&je<1&&Ft||de(He+(je===1&&!b?ne:0))}}y&&!be.tween&&!ln&&!Ma&&le.restart(!0),a&&(bt||x&&je&&(je<1||!cc))&&oa(a.targets).forEach(function(re){return re.classList[Ft||x?"add":"remove"](a.className)}),o&&!E&&!pe&&o(P),Un&&!ln?(E&&(U&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),o&&o(P)),(bt||!cc)&&(c&&bt&&hc(P,c),V[Mt]&&hc(P,V[Mt]),x&&(je===1?P.kill(!1,1):V[Mt]=0),bt||(Mt=je===1?1:3,V[Mt]&&hc(P,V[Mt]))),C&&!Ft&&Math.abs(P.getVelocity())>(No(C)?C:2500)&&(vo(P.callbackAnimation),ee?ee.progress(1):vo(i,_t==="reverse"?1:!je,1))):E&&o&&!ln&&o(P)}if(Ye){var N=T?ke/T.duration()*(T._caScrollDist||0):ke;De(N+(F._isFlipped?1:0)),Ye(N)}yt&&yt(-ke/T.duration()*(T._caScrollDist||0))}},P.enable=function(pe,Ie){P.enabled||(P.enabled=!0,Jt(D,"resize",Uo),X||Jt(D,"scroll",fs),ae&&Jt(r,"refreshInit",ae),pe!==!1&&(P.progress=fe=0,Ve=ze=q=oe()),Ie!==!1&&P.refresh())},P.getTween=function(pe){return pe&&be?be.tween:ee},P.setPositions=function(pe,Ie,Re,ke){if(T){var Ot=T.scrollTrigger,je=T.duration(),Ct=Ot.end-Ot.start;pe=Ot.start+Ct*pe/je,Ie=Ot.start+Ct*Ie/je}P.refresh(!1,!1,{start:Cf(pe,Re&&!!P._startClamp),end:Cf(Ie,Re&&!!P._endClamp)},ke),P.update()},P.adjustPinSpacing=function(pe){if(xe&&pe){var Ie=xe.indexOf(v.d)+1;xe[Ie]=parseFloat(xe[Ie])+pe+Xt,xe[1]=parseFloat(xe[1])+pe+Xt,zs(xe)}},P.disable=function(pe,Ie){if(P.enabled&&(pe!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Ie||ee&&ee.pause(),ce=0,Se&&(Se.uncache=1),ae&&Zt(r,"refreshInit",ae),le&&(le.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!X)){for(var Re=et.length;Re--;)if(et[Re].scroller===D&&et[Re]!==P)return;Zt(D,"resize",Uo),X||Zt(D,"scroll",fs)}},P.kill=function(pe,Ie){P.disable(pe,Ie),ee&&!Ie&&ee.kill(),l&&delete Mu[l];var Re=et.indexOf(P);Re>=0&&et.splice(Re,1),Re===xn&&cl>0&&xn--,Re=0,et.forEach(function(ke){return ke.scroller===P.scroller&&(Re=1)}),Re||yn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ie||i.kill()),Ue&&[Ue,Be,F,Je].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),jo===P&&(jo=0),d&&(Se&&(Se.uncache=1),Re=0,et.forEach(function(ke){return ke.pin===d&&Re++}),Re||(Se.spacer=0)),n.onKill&&n.onKill(P)},et.push(P),P.enable(!1,!1),Rt&&Rt(P),i&&i.add&&!S){var ht=P.update;P.update=function(){P.update=ht,L||ot||P.refresh()},Me.delayedCall(.01,P.update),S=.01,L=ot=0}else P.refresh();d&&t0()},r.register=function(n){return Rs||(Me=n||Tm(),Sm()&&window.document&&r.enable(),Rs=Do),Rs},r.defaults=function(n){if(n)for(var i in n)ba[i]=n[i];return ba},r.disable=function(n,i){Do=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),Zt(ct,"wheel",fs),Zt(Lt,"scroll",fs),clearInterval(ya),Zt(Lt,"touchcancel",gi),Zt(wt,"touchstart",gi),Ta(Zt,Lt,"pointerdown,touchstart,mousedown",Pf),Ta(Zt,Lt,"pointerup,touchend,mouseup",Lf),Rl.kill(),Sa(Zt);for(var s=0;s<nt.length;s+=3)Ea(Zt,nt[s],nt[s+1]),Ea(Zt,nt[s],nt[s+2])},r.enable=function(){if(ct=window,Lt=document,hi=Lt.documentElement,wt=Lt.body,Me&&(oa=Me.utils.toArray,Wo=Me.utils.clamp,xu=Me.core.context||gi,lc=Me.core.suppressOverwrites||gi,Lh=ct.history.scrollRestoration||"auto",Su=ct.pageYOffset,Me.core.globals("ScrollTrigger",r),wt)){Do=1,ks=document.createElement("div"),ks.style.height="100vh",ks.style.position="absolute",Dm(),Kg(),zt.register(Me),r.isTouch=zt.isTouch,lr=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vu=zt.isTouch===1,Jt(ct,"wheel",fs),gm=[ct,Lt,hi,wt],Me.matchMedia?(r.matchMedia=function(l){var c=Me.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Me.addEventListener("matchMediaInit",function(){return Fh()}),Me.addEventListener("matchMediaRevert",function(){return Pm()}),Me.addEventListener("matchMedia",function(){Xr(0,1),ss("matchMedia")}),Me.matchMedia("(orientation: portrait)",function(){return fc(),fc})):console.warn("Requires GSAP 3.11.0 or later"),fc(),Jt(Lt,"scroll",fs);var n=wt.style,i=n.borderTopStyle,s=Me.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Vi(wt),Yt.m=Math.round(o.top+Yt.sc())||0,En.m=Math.round(o.left+En.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ya=setInterval(Nf,250),Me.delayedCall(.5,function(){return Ma=0}),Jt(Lt,"touchcancel",gi),Jt(wt,"touchstart",gi),Ta(Jt,Lt,"pointerdown,touchstart,mousedown",Pf),Ta(Jt,Lt,"pointerup,touchend,mouseup",Lf),gu=Me.utils.checkPrefix("transform"),ul.push(gu),Rs=cn(),Rl=Me.delayedCall(.2,Xr).pause(),Cs=[Lt,"visibilitychange",function(){var l=ct.innerWidth,c=ct.innerHeight;Lt.hidden?(Af=l,wf=c):(Af!==l||wf!==c)&&Uo()},Lt,"DOMContentLoaded",Xr,ct,"load",Xr,ct,"resize",Uo],Sa(Jt),et.forEach(function(l){return l.enable(0,1)}),a=0;a<nt.length;a+=3)Ea(Zt,nt[a],nt[a+1]),Ea(Zt,nt[a],nt[a+2])}},r.config=function(n){"limitCallbacks"in n&&(cc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ya)||(ya=i)&&setInterval(Nf,i),"ignoreMobileResize"in n&&(vu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Sa(Zt)||Sa(Jt,n.autoRefreshEvents||"none"),xm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Rn(n),o=nt.indexOf(s),a=is(s);~o&&nt.splice(o,a?6:2),i&&(a?Ei.unshift(ct,i,wt,i,hi,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(zn(n)?Rn(n):n).getBoundingClientRect(),a=o[s?Jr:Qr]*i||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},r.positionInViewport=function(n,i,s){zn(n)&&(n=Rn(n));var o=n.getBoundingClientRect(),a=o[s?Jr:Qr],l=i==null?a/2:i in Ll?Ll[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=rs.killAll||[];rs={},i.forEach(function(s){return s()})}},r}();Qe.version="3.12.5";Qe.saveStyles=function(r){return r?oa(r).forEach(function(e){if(e&&e.style){var t=kn.indexOf(e);t>=0&&kn.splice(t,5),kn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),xu())}}):kn};Qe.revert=function(r,e){return Fh(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?Uo():(Rs||Qe.register())&&Xr(!0)};Qe.update=function(r){return++nt.cache&&Yi(r===!0?2:0)};Qe.clearScrollMemory=Lm;Qe.maxScroll=function(r,e){return Si(r,e?En:Yt)};Qe.getScrollFunc=function(r,e){return Er(Rn(r),e?En:Yt)};Qe.getById=function(r){return Mu[r]};Qe.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!ri};Qe.snapDirectional=Oh;Qe.addEventListener=function(r,e){var t=rs[r]||(rs[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=rs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Me.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return bn(s)&&(s=s(),Jt(Qe,"refresh",function(){return s=e.batchMax()})),oa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};var zf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},pc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===hi&&r(wt,t)},Ca={auto:1,scroll:1},o0=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Me.core.getCache(s),a=cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ca[(l=ei(s)).overflowY]||Ca[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!is(s)&&(Ca[(l=ei(s)).overflowY]||Ca[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Nm=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&o0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Jt(Lt,zt.eventTypes[0],Vf,!1,!0)},onDisable:function(){return Zt(Lt,zt.eventTypes[0],Vf,!0)}})},a0=/(input|label|select|textarea)/i,Hf,Vf=function(e){var t=a0.test(e.target.tagName);(t||Hf)&&(e._gsapAllow=!0,Hf=t)},l0=function(e){kr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Rn(e.target)||hi,u=Me.core.globals().ScrollSmoother,h=u&&u.get(),f=lr&&(e.content&&Rn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Er(c,Yt),_=Er(c,En),g=1,p=(zt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,m=0,M=bn(i)?function(){return i(a)}:function(){return i||2.8},x,y,R=Nm(c,e.type,!0,s),A=function(){return y=!1},T=gi,C=gi,O=function(){l=Si(c,Yt),C=Wo(lr?1:0,l),n&&(T=Wo(0,Si(c,En))),x=es},v=function(){f._gsap.y=Io(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},E=function(){if(y){requestAnimationFrame(A);var W=Io(a.deltaY/2),se=C(d.v-W);if(f&&se!==d.v+d.offset){d.offset=se-d.v;var P=Io((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=nt.cache,Yi()}return!0}d.offset&&v(),y=!0},D,z,X,j,V=function(){O(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return f&&Me.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return lr&&Y.type==="touchmove"&&E()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){y=!1;var Y=g;g=Io((ct.visualViewport&&ct.visualViewport.scale||1)/p),D.pause(),Y!==g&&pc(c,g>1.01?!0:n?!1:"x"),z=_(),X=d(),O(),x=es},e.onRelease=e.onGestureStart=function(Y,W){if(d.offset&&v(),!W)j.restart(!0);else{nt.cache++;var se=M(),P,ae;n&&(P=_(),ae=P+se*.05*-Y.velocityX/.227,se*=zf(_,P,ae,Si(c,En)),D.vars.scrollX=T(ae)),P=d(),ae=P+se*.05*-Y.velocityY/.227,se*=zf(d,P,ae,Si(c,Yt)),D.vars.scrollY=C(ae),D.invalidate().duration(se).play(.01),(lr&&D.vars.scrollY>=l||P>=l-1)&&Me.to({},{onUpdate:V,duration:se})}o&&o(Y)},e.onWheel=function(){D._ts&&D.pause(),cn()-m>1e3&&(x=0,m=cn())},e.onChange=function(Y,W,se,P,ae){if(es!==x&&O(),W&&n&&_(T(P[2]===W?z+(Y.startX-Y.x):_()+W-P[1])),se){d.offset&&v();var Fe=ae[2]===se,Xe=Fe?X+Y.startY-Y.y:d()+se-ae[1],q=C(Xe);Fe&&Xe!==q&&(X+=q-Xe),d(q)}(se||W)&&Yi()},e.onEnable=function(){pc(c,n?!1:"x"),Qe.addEventListener("refresh",V),Jt(ct,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},e.onDisable=function(){pc(c,!0),Zt(ct,"resize",V),Qe.removeEventListener("refresh",V),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new zt(e),a.iOS=lr,lr&&!d()&&d(1),lr&&Me.ticker.add(gi),j=a._dc,D=Me.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Im(d,d(),function(){return D.pause()})},onUpdate:Yi,onComplete:j.vars.onComplete}),a};Qe.sort=function(r){return et.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new zt(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return vn;if(r===!0&&vn)return vn.enable();if(r===!1){vn&&vn.kill(),vn=r;return}var e=r instanceof zt?r:l0(r);return vn&&vn.target===e.target&&vn.kill(),is(e.target)&&(vn=e),e};Qe.core={_getVelocityProp:_u,_inputObserver:Nm,_scrollers:nt,_proxies:Ei,bridge:{ss:function(){ri||ss("scrollStart"),ri=cn()},ref:function(){return ln}}};Tm()&&Me.registerPlugin(Qe);Vt.registerPlugin(Qe);document.addEventListener("DOMContentLoaded",()=>{Vt.to("#loader",{opacity:0,duration:.3,ease:"cubic-bezier(0, 0.2, 1, 1)",delay:1.2,onComplete:()=>{document.getElementById("loader").style.display="none",window.scrollTo(0,0),Vt.to(".on_start_animation",{rotation:1080,duration:.7,ease:"cubic-bezier(0, 0.2, 1, 1)",delay:.35}),Vt.fromTo("#title",{y:-30,opacity:0},{y:0,opacity:1,duration:.4,ease:"cubic-bezier(0, 0.2, 1, 1)",delay:1.2}),Vt.fromTo("#subtitle",{y:-30,opacity:0},{y:0,opacity:1,duration:.4,ease:"cubic-bezier(0, 0.2, 1, 1)",delay:1.6,onComplete:()=>{Vt.fromTo("video",{opacity:0},{opacity:1,duration:.4,delay:.2,ease:"cubic-bezier(0, 0.2, 1, 1)",onComplete:()=>{document.getElementById("video").attributes.setNamedItem(document.createAttribute("autoplay"))}})}})}}),Vt.utils.toArray(".card_flip").forEach((r,e)=>{Vt.fromTo(r,{x:"+=100vw",y:200},{x:e*13+"vw",y:-200,duration:1,ease:"linear",scrollTrigger:{trigger:r,start:"top 80%",end:"top 60%",scrub:!0}})}),Vt.utils.toArray(".machine_info").forEach((r,e)=>{Vt.fromTo(r,{x:0,y:200,opacity:0},{x:0,y:0,opacity:1,duration:.4,ease:"power1.in",scrollTrigger:{trigger:r,start:"top 95%"}})}),Vt.fromTo(".disque_plein",{x:"-100%",opacity:0},{x:"-50%",opacity:1,ease:"linear",scrollTrigger:{trigger:".fond_grain",start:"10% top",end:"20% top",scrub:!0}}),Vt.fromTo(".info_bouche",{x:200,opacity:0},{x:125,opacity:1,ease:"linear",scrollTrigger:{trigger:".fond_grain",start:"10% top",end:"20% top",scrub:!0}}),Vt.fromTo(".image_bouche",{scale:.2,y:-100},{y:0,scale:1,opacity:1,ease:"linear",scrollTrigger:{trigger:".fond_grain",start:"-30% top",end:"10% top",scrub:!0}}),Vt.fromTo(".card_holder",{y:0},{y:500,duration:1,ease:"linear",scrollTrigger:{trigger:".card_holder",start:"top top",end:"bottom 60%"}}),Vt.utils.toArray(".bento-cell").forEach((r,e)=>{Vt.fromTo(r,{x:0,y:200+e*100,opacity:0},{x:0,y:0,opacity:1,ease:"expo.in",scrollTrigger:{trigger:".bento",start:"top "+(70+e*10+"%"),end:"top "+(30-e*5+"%"),scrub:!0}})})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bh="169",c0=0,Gf=1,u0=2,Um=1,h0=2,Bi=3,$i=0,In=1,yi=2,yr=0,Hs=1,Wf=2,Xf=3,Yf=4,f0=5,Vr=100,d0=101,p0=102,m0=103,_0=104,g0=200,v0=201,x0=202,y0=203,Eu=204,bu=205,M0=206,S0=207,T0=208,E0=209,b0=210,A0=211,w0=212,R0=213,C0=214,Au=0,wu=1,Ru=2,Zs=3,Cu=4,Pu=5,Lu=6,Du=7,Om=0,P0=1,L0=2,Mr=0,D0=1,I0=2,N0=3,U0=4,O0=5,F0=6,B0=7,qf="attached",k0="detached",Fm=300,Js=301,Qs=302,Iu=303,Nu=304,Gl=306,eo=1e3,mr=1001,Dl=1002,An=1003,Bm=1004,Oo=1005,Wn=1006,fl=1007,Wi=1008,Zi=1009,km=1010,zm=1011,la=1012,kh=1013,os=1014,pi=1015,da=1016,zh=1017,Hh=1018,to=1020,Hm=35902,Vm=1021,Gm=1022,ii=1023,Wm=1024,Xm=1025,Vs=1026,no=1027,Vh=1028,Gh=1029,Ym=1030,Wh=1031,Xh=1033,dl=33776,pl=33777,ml=33778,_l=33779,Uu=35840,Ou=35841,Fu=35842,Bu=35843,ku=36196,zu=37492,Hu=37496,Vu=37808,Gu=37809,Wu=37810,Xu=37811,Yu=37812,qu=37813,Ku=37814,ju=37815,$u=37816,Zu=37817,Ju=37818,Qu=37819,eh=37820,th=37821,gl=36492,nh=36494,ih=36495,qm=36283,rh=36284,sh=36285,oh=36286,ca=2300,ua=2301,mc=2302,Kf=2400,jf=2401,$f=2402,z0=2500,H0=0,Km=1,ah=2,V0=3200,G0=3201,jm=0,W0=1,cr="",Mn="srgb",sn="srgb-linear",Yh="display-p3",Wl="display-p3-linear",Il="linear",At="srgb",Nl="rec709",Ul="p3",ds=7680,Zf=519,X0=512,Y0=513,q0=514,$m=515,K0=516,j0=517,$0=518,Z0=519,lh=35044,Jf="300 es",Xi=2e3,Ol=2001;class co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qf=1234567;const $o=Math.PI/180,io=180/Math.PI;function mi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function un(r,e,t){return Math.max(e,Math.min(t,r))}function qh(r,e){return(r%e+e)%e}function J0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Q0(r,e,t){return r!==e?(t-r)/(e-r):0}function Zo(r,e,t){return(1-t)*r+t*e}function ev(r,e,t,n){return Zo(r,e,1-Math.exp(-t*n))}function tv(r,e=1){return e-Math.abs(qh(r,e*2)-e)}function nv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function iv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function rv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function sv(r,e){return r+Math.random()*(e-r)}function ov(r){return r*(.5-Math.random())}function av(r){r!==void 0&&(Qf=r);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lv(r){return r*$o}function cv(r){return r*io}function uv(r){return(r&r-1)===0&&r!==0}function hv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function dv(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Zm={DEG2RAD:$o,RAD2DEG:io,generateUUID:mi,clamp:un,euclideanModulo:qh,mapLinear:J0,inverseLerp:Q0,lerp:Zo,damp:ev,pingpong:tv,smoothstep:nv,smootherstep:iv,randInt:rv,randFloat:sv,randFloatSpread:ov,seededRandom:av,degToRad:lv,radToDeg:cv,isPowerOfTwo:uv,ceilPowerOfTwo:hv,floorPowerOfTwo:fv,setQuaternionFromProperEuler:dv,normalize:gt,denormalize:fi};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],x=i[4],y=i[7],R=i[2],A=i[5],T=i[8];return s[0]=o*g+a*M+l*R,s[3]=o*p+a*x+l*A,s[6]=o*m+a*y+l*T,s[1]=c*g+u*M+h*R,s[4]=c*p+u*x+h*A,s[7]=c*m+u*y+h*T,s[2]=f*g+d*M+_*R,s[5]=f*p+d*x+_*A,s[8]=f*m+d*y+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new Ze;function Jm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ha(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pv(){const r=ha("canvas");return r.style.display="block",r}const ed={};function vl(r){r in ed||(ed[r]=!0,console.warn(r))}function mv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function _v(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gv(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const td=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nd=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xo={[sn]:{transfer:Il,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Mn]:{transfer:At,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Wl]:{transfer:Il,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(nd),fromReference:r=>r.applyMatrix3(td)},[Yh]:{transfer:At,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(nd),fromReference:r=>r.applyMatrix3(td).convertLinearToSRGB()}},vv=new Set([sn,Wl]),dt={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!vv.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=xo[e].toReference,i=xo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return xo[r].primaries},getTransfer:function(r){return r===cr?Il:xo[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(xo[e].luminanceCoefficients)}};function Gs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ps;class xv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=ha("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gs(t[n]/255)*255):t[n]=Gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yv=0;class Qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(vc(i[o].image)):s.push(vc(i[o]))}else s=vc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function vc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mv=0;class en extends co{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=mr,i=mr,s=Wn,o=Wi,a=ii,l=Zi,c=en.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=mi(),this.name="",this.source=new Qm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Fm;en.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,R=(m+1)/2,A=(u+f)/4,T=(h+g)/4,C=(_+p)/4;return x>y&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=T/n):y>R?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=C/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sv extends co{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends Sv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class e_ extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tv extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,m*M);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const y=a*M;if(l=l*p+f*y,c=c*p+d*y,u=u*p+_*y,h=h*p+g*y,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(id.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new B,id=new wr;class Ji{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),La.subVectors(this.max,yo),ms.subVectors(e.a,yo),_s.subVectors(e.b,yo),gs.subVectors(e.c,yo),er.subVectors(_s,ms),tr.subVectors(gs,_s),Pr.subVectors(ms,gs);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Pr.z,Pr.y,er.z,0,-er.x,tr.z,0,-tr.x,Pr.z,0,-Pr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Pr.y,Pr.x,0];return!yc(t,ms,_s,gs,La)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,ms,_s,gs,La))?!1:(Da.crossVectors(er,tr),t=[Da.x,Da.y,Da.z],yc(t,ms,_s,gs,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new B,new B,new B,new B,new B,new B,new B,new B],ai=new B,Pa=new Ji,ms=new B,_s=new B,gs=new B,er=new B,tr=new B,Pr=new B,yo=new B,La=new B,Da=new B,Lr=new B;function yc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Lr.fromArray(r,s);const a=i.x*Math.abs(Lr.x)+i.y*Math.abs(Lr.y)+i.z*Math.abs(Lr.z),l=e.dot(Lr),c=t.dot(Lr),u=n.dot(Lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ev=new Ji,Mo=new B,Mc=new B;class Ri{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ev.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const t=Mo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Mo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(Mc)),this.expandByPoint(Mo.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new B,Sc=new B,Ia=new B,nr=new B,Tc=new B,Na=new B,Ec=new B;class Xl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sc.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(Sc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ia),a=nr.dot(this.direction),l=-nr.dot(Ia),c=nr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Sc).addScaledVector(Ia,f),d}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,i,s){Tc.subVectors(t,e),Na.subVectors(n,e),Ec.crossVectors(Tc,Na);let o=this.direction.dot(Ec),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(Na.crossVectors(nr,Na));if(l<0)return null;const c=a*this.direction.dot(Tc.cross(nr));if(c<0||l+c>o)return null;const u=-a*nr.dot(Ec);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bv,e,Av)}lookAt(e,t,n){const i=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ir.crossVectors(n,Fn),ir.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ir.crossVectors(n,Fn)),ir.normalize(),Ua.crossVectors(Fn,ir),i[0]=ir.x,i[4]=Ua.x,i[8]=Fn.x,i[1]=ir.y,i[5]=Ua.y,i[9]=Fn.y,i[2]=ir.z,i[6]=Ua.z,i[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],x=n[7],y=n[11],R=n[15],A=i[0],T=i[4],C=i[8],O=i[12],v=i[1],E=i[5],D=i[9],z=i[13],X=i[2],j=i[6],V=i[10],Y=i[14],W=i[3],se=i[7],P=i[11],ae=i[15];return s[0]=o*A+a*v+l*X+c*W,s[4]=o*T+a*E+l*j+c*se,s[8]=o*C+a*D+l*V+c*P,s[12]=o*O+a*z+l*Y+c*ae,s[1]=u*A+h*v+f*X+d*W,s[5]=u*T+h*E+f*j+d*se,s[9]=u*C+h*D+f*V+d*P,s[13]=u*O+h*z+f*Y+d*ae,s[2]=_*A+g*v+p*X+m*W,s[6]=_*T+g*E+p*j+m*se,s[10]=_*C+g*D+p*V+m*P,s[14]=_*O+g*z+p*Y+m*ae,s[3]=M*A+x*v+y*X+R*W,s[7]=M*T+x*E+y*j+R*se,s[11]=M*C+x*D+y*V+R*P,s[15]=M*O+x*z+y*Y+R*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,x=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,y=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,R=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,A=t*M+n*x+i*y+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*T,e[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*T,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=x*T,e[5]=(u*p*s-_*f*s+_*i*d-t*p*d-u*i*m+t*f*m)*T,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*m-t*l*m)*T,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=y*T,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=R*T,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,M=l*c,x=l*u,y=l*h,R=n.x,A=n.y,T=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+y)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(f+m))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(_+x)*T,i[9]=(p-M)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=vs.set(i[0],i[1],i[2]).length();const o=vs.set(i[4],i[5],i[6]).length(),a=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],li.copy(this);const c=1/s,u=1/o,h=1/a;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,t.setFromRotationMatrix(li),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Xi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===Xi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ol)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Xi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===Xi)_=(o+s)*h,g=-2*h;else if(a===Ol)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new B,li=new Ke,bv=new B(0,0,0),Av=new B(1,1,1),ir=new B,Ua=new B,Fn=new B,rd=new Ke,sd=new wr;class wi{constructor(e=0,t=0,n=0,i=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class t_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wv=0;const od=new B,xs=new wr,Ni=new Ke,Oa=new B,So=new B,Rv=new B,Cv=new wr,ad=new B(1,0,0),ld=new B(0,1,0),cd=new B(0,0,1),ud={type:"added"},Pv={type:"removed"},ys={type:"childadded",child:null},bc={type:"childremoved",child:null};class Nt extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new B,t=new wi,n=new wr,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ze}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(So,Oa,this.up):Ni.lookAt(Oa,So,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Ni),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pv),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,Rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,Cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Nt.DEFAULT_UP=new B(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new B,Ui=new B,Ac=new B,Oi=new B,Ms=new B,Ss=new B,hd=new B,wc=new B,Rc=new B,Cc=new B,Pc=new pt,Lc=new pt,Dc=new pt;class di{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ci.subVectors(e,t),i.cross(ci);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ci.subVectors(i,t),Ui.subVectors(n,t),Ac.subVectors(e,t);const o=ci.dot(ci),a=ci.dot(Ui),l=ci.dot(Ac),c=Ui.dot(Ui),u=Ui.dot(Ac),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Pc.setScalar(0),Lc.setScalar(0),Dc.setScalar(0),Pc.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Pc,s.x),o.addScaledVector(Lc,s.y),o.addScaledVector(Dc,s.z),o}static isFrontFacing(e,t,n,i){return ci.subVectors(n,t),Ui.subVectors(e,t),ci.cross(Ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ci.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return di.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ms.subVectors(i,n),Ss.subVectors(s,n),wc.subVectors(e,n);const l=Ms.dot(wc),c=Ss.dot(wc);if(l<=0&&c<=0)return t.copy(n);Rc.subVectors(e,i);const u=Ms.dot(Rc),h=Ss.dot(Rc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ms,o);Cc.subVectors(e,s);const d=Ms.dot(Cc),_=Ss.dot(Cc);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ss,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return hd.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(hd,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(Ms,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const n_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Ic(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=qh(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ic(o,s,e+1/3),this.g=Ic(o,s,e),this.b=Ic(o,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=n_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return dt.fromWorkingColorSpace(an.copy(this),e),Math.round(un(an.r*255,0,255))*65536+Math.round(un(an.g*255,0,255))*256+Math.round(un(an.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(an.copy(this),t);const n=an.r,i=an.g,s=an.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Mn){dt.fromWorkingColorSpace(an.copy(this),e);const t=an.r,n=an.g,i=an.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(Fa);const n=Zo(rr.h,Fa.h,t),i=Zo(rr.s,Fa.s,t),s=Zo(rr.l,Fa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Ge;Ge.NAMES=n_;let Lv=0;class bi extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Hs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=bu,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eu&&(n.blendSrc=this.blendSrc),this.blendDst!==bu&&(n.blendDst=this.blendDst),this.blendEquation!==Vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yr extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new B,Ba=new ft;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lh&&(e.usage=this.usage),e}}class i_ extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class r_ extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qi extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dv=0;const $n=new Ke,Nc=new Nt,Ts=new B,Bn=new Ji,To=new Ji,$t=new B;class Ci extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?r_:i_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Bn.min,To.min),Bn.expandByPoint($t),$t.addVectors(Bn.max,To.max),Bn.expandByPoint($t)):(Bn.expandByPoint(To.min),Bn.expandByPoint(To.max))}Bn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),$t.add(Ts)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new B,l[C]=new B;const c=new B,u=new B,h=new B,f=new ft,d=new ft,_=new ft,g=new B,p=new B;function m(C,O,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,O),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,O),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const E=1/(d.x*_.y-_.x*d.y);isFinite(E)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(E),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(E),a[C].add(g),a[O].add(g),a[v].add(g),l[C].add(p),l[O].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,O=M.length;C<O;++C){const v=M[C],E=v.start,D=v.count;for(let z=E,X=E+D;z<X;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new B,y=new B,R=new B,A=new B;function T(C){R.fromBufferAttribute(i,C),A.copy(R);const O=a[C];x.copy(O),x.sub(R.multiplyScalar(R.dot(O))).normalize(),y.crossVectors(A,O);const E=y.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,E)}for(let C=0,O=M.length;C<O;++C){const v=M[C],E=v.start,D=v.count;for(let z=E,X=E+D;z<X;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new wn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ci,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fd=new Ke,Dr=new Xl,ka=new Ri,dd=new B,za=new B,Ha=new B,Va=new B,Uc=new B,Ga=new B,pd=new B,Wa=new B;class Yn extends Nt{constructor(e=new Ci,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Uc.fromBufferAttribute(h,e),o?Ga.addScaledVector(Uc,u):Ga.addScaledVector(Uc.sub(t),u))}t.add(Ga)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(ka.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(ka,dd)===null||Dr.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(fd.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(fd),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,R=x;y<R;y+=3){const A=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);i=Xa(this,m,e,n,c,u,h,A,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=Xa(this,o,e,n,c,u,h,M,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,R=x;y<R;y+=3){const A=y,T=y+1,C=y+2;i=Xa(this,m,e,n,c,u,h,A,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=p,x=p+1,y=p+2;i=Xa(this,o,e,n,c,u,h,M,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Iv(r,e,t,n,i,s,o,a){let l;if(e.side===In?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===$i,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:r}}function Xa(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,za),r.getVertexPosition(l,Ha),r.getVertexPosition(c,Va);const u=Iv(r,e,t,n,za,Ha,Va,pd);if(u){const h=new B;di.getBarycoord(pd,za,Ha,Va,h),i&&(u.uv=di.getInterpolatedAttribute(i,a,l,c,h,new ft)),s&&(u.uv1=di.getInterpolatedAttribute(s,a,l,c,h,new ft)),o&&(u.normal=di.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};di.getNormal(za,Ha,Va,f.normal),u.face=f,u.barycoord=h}return u}class pa extends Ci{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qi(c,3)),this.setAttribute("normal",new qi(u,3)),this.setAttribute("uv",new qi(h,2));function _(g,p,m,M,x,y,R,A,T,C,O){const v=y/T,E=R/C,D=y/2,z=R/2,X=A/2,j=T+1,V=C+1;let Y=0,W=0;const se=new B;for(let P=0;P<V;P++){const ae=P*E-z;for(let Fe=0;Fe<j;Fe++){const Xe=Fe*v-D;se[g]=Xe*M,se[p]=ae*x,se[m]=X,c.push(se.x,se.y,se.z),se[g]=0,se[p]=0,se[m]=A>0?1:-1,u.push(se.x,se.y,se.z),h.push(Fe/T),h.push(1-P/C),Y+=1}}for(let P=0;P<C;P++)for(let ae=0;ae<T;ae++){const Fe=f+ae+j*P,Xe=f+ae+j*(P+1),q=f+(ae+1)+j*(P+1),Q=f+(ae+1)+j*P;l.push(Fe,Xe,Q),l.push(Xe,q,Q),W+=6}a.addGroup(d,W,O),d+=W,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gn(r){const e={};for(let t=0;t<r.length;t++){const n=ro(r[t]);for(const i in n)e[i]=n[i]}return e}function Nv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function s_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Uv={clone:ro,merge:gn};var Ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ov,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=Nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class o_ extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new B,md=new ft,_d=new ft;class Sn extends o_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,t){return this.getViewBounds(e,md,_d),t.subVectors(_d,md)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,bs=1;class Bv extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Sn(Es,bs,e,t);i.layers=this.layers,this.add(i);const s=new Sn(Es,bs,e,t);s.layers=this.layers,this.add(s);const o=new Sn(Es,bs,e,t);o.layers=this.layers,this.add(o);const a=new Sn(Es,bs,e,t);a.layers=this.layers,this.add(a);const l=new Sn(Es,bs,e,t);l.layers=this.layers,this.add(l);const c=new Sn(Es,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class a_ extends en{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kv extends as{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new a_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new pa(5,5,5),s=new br({name:"CubemapFromEquirect",uniforms:ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:yr});s.uniforms.tEquirect.value=t;const o=new Yn(i,s),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Wn),new Bv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Oc=new B,zv=new B,Hv=new Ze;class zr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Oc.subVectors(n,t).cross(zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hv.getNormalMatrix(e),i=this.coplanarPoint(Oc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Ri,Ya=new B;class Kh{constructor(e=new zr,t=new zr,n=new zr,i=new zr,s=new zr,o=new zr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],M=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,p-d,y-m).normalize(),n[1].setComponents(l+s,f+c,p+d,y+m).normalize(),n[2].setComponents(l+o,f+u,p+_,y+M).normalize(),n[3].setComponents(l-o,f-u,p-_,y-M).normalize(),n[4].setComponents(l-a,f-h,p-g,y-x).normalize(),t===Xi)n[5].setComponents(l+a,f+h,p+g,y+x).normalize();else if(t===Ol)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ya.x=i.normal.x>0?e.max.x:e.min.x,Ya.y=i.normal.y>0?e.max.y:e.min.y,Ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function l_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vv(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Yl extends Ci{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*f-o;for(let x=0;x<c;x++){const y=x*h-s;_.push(y,-M,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,y=M+c*(m+1),R=M+1+c*(m+1),A=M+1+c*m;d.push(x,y,A),d.push(y,R,A)}this.setIndex(d),this.setAttribute("position",new qi(_,3)),this.setAttribute("normal",new qi(g,3)),this.setAttribute("uv",new qi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",yx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ux=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$y=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Gv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:Yv,alphatest_fragment:qv,alphatest_pars_fragment:Kv,aomap_fragment:jv,aomap_pars_fragment:$v,batching_pars_vertex:Zv,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:rx,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:ox,clipping_planes_vertex:ax,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:ux,color_vertex:hx,common:fx,cube_uv_reflection_fragment:dx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:_x,emissivemap_fragment:gx,emissivemap_pars_fragment:vx,colorspace_fragment:xx,colorspace_pars_fragment:yx,envmap_fragment:Mx,envmap_common_pars_fragment:Sx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ex,envmap_physical_pars_fragment:Ux,envmap_vertex:bx,fog_vertex:Ax,fog_pars_vertex:wx,fog_fragment:Rx,fog_pars_fragment:Cx,gradientmap_pars_fragment:Px,lightmap_pars_fragment:Lx,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Nx,lights_toon_fragment:Ox,lights_toon_pars_fragment:Fx,lights_phong_fragment:Bx,lights_phong_pars_fragment:kx,lights_physical_fragment:zx,lights_physical_pars_fragment:Hx,lights_fragment_begin:Vx,lights_fragment_maps:Gx,lights_fragment_end:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:Kx,map_fragment:jx,map_pars_fragment:$x,map_particle_fragment:Zx,map_particle_pars_fragment:Jx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:ey,morphinstance_vertex:ty,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:ry,morphtarget_vertex:sy,normal_fragment_begin:oy,normal_fragment_maps:ay,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:uy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:fy,clearcoat_normal_fragment_maps:dy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:_y,packing:gy,premultiplied_alpha_fragment:vy,project_vertex:xy,dithering_fragment:yy,dithering_pars_fragment:My,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:by,shadowmap_vertex:Ay,shadowmask_pars_fragment:wy,skinbase_vertex:Ry,skinning_pars_vertex:Cy,skinning_vertex:Py,skinnormal_vertex:Ly,specularmap_fragment:Dy,specularmap_pars_fragment:Iy,tonemapping_fragment:Ny,tonemapping_pars_fragment:Uy,transmission_fragment:Oy,transmission_pars_fragment:Fy,uv_pars_fragment:By,uv_pars_vertex:ky,uv_vertex:zy,worldpos_vertex:Hy,background_vert:Vy,background_frag:Gy,backgroundCube_vert:Wy,backgroundCube_frag:Xy,cube_vert:Yy,cube_frag:qy,depth_vert:Ky,depth_frag:jy,distanceRGBA_vert:$y,distanceRGBA_frag:Zy,equirect_vert:Jy,equirect_frag:Qy,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:rM,meshlambert_frag:sM,meshmatcap_vert:oM,meshmatcap_frag:aM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:uM,meshphong_frag:hM,meshphysical_vert:fM,meshphysical_frag:dM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:_M,points_frag:gM,shadow_vert:vM,shadow_frag:xM,sprite_vert:yM,sprite_frag:MM},me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},vi={basic:{uniforms:gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:gn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:gn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:gn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:gn([me.points,me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:gn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:gn([me.common,me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:gn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:gn([me.sprite,me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:gn([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:gn([me.lights,me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};vi.physical={uniforms:gn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const qa={r:0,b:0,g:0},Nr=new wi,SM=new Ke;function TM(r,e,t,n,i,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function g(M){let x=!1;const y=_(M);y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(M,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===Gl)?(u===void 0&&(u=new Yn(new pa(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:ro(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Nr.copy(x.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(Nr)),u.material.toneMapped=dt.getTransfer(y.colorSpace)!==At,(h!==y||f!==y.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Yn(new Yl(2,2),new br({name:"BackgroundMaterial",uniforms:ro(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(y.colorSpace)!==At,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(qa,s_(r)),n.buffers.color.setClear(qa.r,qa.g,qa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:g,addToRenderList:p}}function EM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(v,E,D,z,X){let j=!1;const V=h(z,D,E);s!==V&&(s=V,c(s.object)),j=d(v,z,D,X),j&&_(v,z,D,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(v,E,D,z),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,E,D){const z=D.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let j=X[E.id];j===void 0&&(j={},X[E.id]=j);let V=j[z];return V===void 0&&(V=f(l()),j[z]=V),V}function f(v){const E=[],D=[],z=[];for(let X=0;X<t;X++)E[X]=0,D[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:D,attributeDivisors:z,object:v,attributes:{},index:null}}function d(v,E,D,z){const X=s.attributes,j=E.attributes;let V=0;const Y=D.getAttributes();for(const W in Y)if(Y[W].location>=0){const P=X[W];let ae=j[W];if(ae===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),P===void 0||P.attribute!==ae||ae&&P.data!==ae.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function _(v,E,D,z){const X={},j=E.attributes;let V=0;const Y=D.getAttributes();for(const W in Y)if(Y[W].location>=0){let P=j[W];P===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const ae={};ae.attribute=P,P&&P.data&&(ae.data=P.data),X[W]=ae,V++}s.attributes=X,s.attributesNum=V,s.index=z}function g(){const v=s.newAttributes;for(let E=0,D=v.length;E<D;E++)v[E]=0}function p(v){m(v,0)}function m(v,E){const D=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;D[v]=1,z[v]===0&&(r.enableVertexAttribArray(v),z[v]=1),X[v]!==E&&(r.vertexAttribDivisor(v,E),X[v]=E)}function M(){const v=s.newAttributes,E=s.enabledAttributes;for(let D=0,z=E.length;D<z;D++)E[D]!==v[D]&&(r.disableVertexAttribArray(D),E[D]=0)}function x(v,E,D,z,X,j,V){V===!0?r.vertexAttribIPointer(v,E,D,X,j):r.vertexAttribPointer(v,E,D,z,X,j)}function y(v,E,D,z){g();const X=z.attributes,j=D.getAttributes(),V=E.defaultAttributeValues;for(const Y in j){const W=j[Y];if(W.location>=0){let se=X[Y];if(se===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const P=se.normalized,ae=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const Xe=Fe.buffer,q=Fe.type,Q=Fe.bytesPerElement,fe=q===r.INT||q===r.UNSIGNED_INT||se.gpuType===kh;if(se.isInterleavedBufferAttribute){const oe=se.data,be=oe.stride,Se=se.offset;if(oe.isInstancedInterleavedBuffer){for(let We=0;We<W.locationSize;We++)m(W.location+We,oe.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let We=0;We<W.locationSize;We++)p(W.location+We);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let We=0;We<W.locationSize;We++)x(W.location+We,ae/W.locationSize,q,P,be*Q,(Se+ae/W.locationSize*We)*Q,fe)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe,se.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<W.locationSize;oe++)p(W.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let oe=0;oe<W.locationSize;oe++)x(W.location+oe,ae/W.locationSize,q,P,ae*Q,ae/W.locationSize*oe*Q,fe)}}else if(V!==void 0){const P=V[Y];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(W.location,P);break;case 3:r.vertexAttrib3fv(W.location,P);break;case 4:r.vertexAttrib4fv(W.location,P);break;default:r.vertexAttrib1fv(W.location,P)}}}}M()}function R(){C();for(const v in n){const E=n[v];for(const D in E){const z=E[D];for(const X in z)u(z[X].object),delete z[X];delete E[D]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const D in E){const z=E[D];for(const X in z)u(z[X].object),delete z[X];delete E[D]}delete n[v.id]}function T(v){for(const E in n){const D=n[E];if(D[v.id]===void 0)continue;const z=D[v.id];for(const X in z)u(z[X].object),delete z[X];delete D[v.id]}}function C(){O(),o=!0,s!==i&&(s=i,c(s.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:O,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function bM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<f.length;g++)t.update(_,n,f[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==ii&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Zi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==pi&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function wM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new zr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,x=M*4;let y=m.clippingState||null;l.value=y,y=u(_,f,x,d);for(let R=0;R!==x;++R)y[R]=t[R];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=d;x!==g;++x,y+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function RM(r){let e=new WeakMap;function t(o,a){return a===Iu?o.mapping=Js:a===Nu&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Iu||a===Nu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kv(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class jh extends o_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,gd=[.125,.215,.35,.446,.526,.582],Gr=20,Fc=new jh,vd=new Ge;let Bc=null,kc=0,zc=0,Hc=!1;const Hr=(1+Math.sqrt(5))/2,As=1/Hr,xd=[new B(-Hr,As,0),new B(Hr,As,0),new B(-As,0,Hr),new B(As,0,Hr),new B(0,Hr,-As),new B(0,Hr,As),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class yd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,kc,zc),this._renderer.xr.enabled=Hc,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:da,format:ii,colorSpace:sn,depthBuffer:!1},i=Md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CM(s)),this._blurMaterial=PM(s,e,t)}return i}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,Fc)}_sceneToCubeUV(e,t,n,i){const a=new Sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(vd),u.toneMapping=Mr,u.autoClear=!1;const d=new Yr({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),_=new Yn(new pa,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(vd),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Ka(i,M*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Js||e.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ka(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xd[(i-s-1)%xd.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Gr;p>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gr}`);const m=[];let M=0;for(let T=0;T<Gr;++T){const C=T/g,O=Math.exp(-C*C/2);m.push(O),T===0?M+=O:T<p&&(M+=2*O)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const y=this._sizeLods[i],R=3*y*(i>x-Is?i-x+Is:0),A=4*(this._cubeSize-y);Ka(t,R,A,3*y,2*y),l.setRenderTarget(t),l.render(h,Fc)}}function CM(r){const e=[],t=[],n=[];let i=r;const s=r-Is+1+gd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Is?l=gd[o-r+Is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*d),x=new Float32Array(p*_*d),y=new Float32Array(m*_*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,C=A>2?0:-1,O=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(O,g*_*A),x.set(f,p*_*A);const v=[A,A,A,A,A,A];y.set(v,m*_*A)}const R=new Ci;R.setAttribute("position",new wn(M,g)),R.setAttribute("uv",new wn(x,p)),R.setAttribute("faceIndex",new wn(y,m)),e.push(R),i>Is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Md(r,e,t){const n=new as(r,e,t);return n.texture.mapping=Gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function PM(r,e,t){const n=new Float32Array(Gr),i=new B(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Sd(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Td(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Iu||l===Nu,u=l===Js||l===Qs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new yd(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new yd(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function DM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function IM(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let x=0,y=M.length;x<y;x+=3){const R=M[x+0],A=M[x+1],T=M[x+2];f.push(R,A,A,T,T,R)}}else if(_!==void 0){const M=_.array;g=_.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const R=x+0,A=x+1,T=x+2;f.push(R,A,A,T,T,R)}}else return;const p=new(Jm(f)?r_:i_)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function NM(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function h(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let M=0;M<_;M++)m+=d[M];for(let M=0;M<g.length;M++)t.update(m,n,g[M])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function UM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function OM(r,e,t){const n=new WeakMap,i=new pt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let R=a.attributes.position.count*y,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*A*4*h),C=new e_(T,R,A,h);C.type=pi,C.needsUpdate=!0;const O=y*4;for(let E=0;E<h;E++){const D=m[E],z=M[E],X=x[E],j=R*A*4*E;for(let V=0;V<D.count;V++){const Y=V*O;_===!0&&(i.fromBufferAttribute(D,V),T[j+Y+0]=i.x,T[j+Y+1]=i.y,T[j+Y+2]=i.z,T[j+Y+3]=0),g===!0&&(i.fromBufferAttribute(z,V),T[j+Y+4]=i.x,T[j+Y+5]=i.y,T[j+Y+6]=i.z,T[j+Y+7]=0),p===!0&&(i.fromBufferAttribute(X,V),T[j+Y+8]=i.x,T[j+Y+9]=i.y,T[j+Y+10]=i.z,T[j+Y+11]=X.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new ft(R,A)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function FM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class c_ extends en{constructor(e,t,n,i,s,o,a,l,c,u=Vs){if(u!==Vs&&u!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vs&&(n=os),n===void 0&&u===no&&(n=to),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const u_=new en,Ed=new c_(1,1),h_=new e_,f_=new Tv,d_=new a_,bd=[],Ad=[],wd=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function uo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=bd[i];if(s===void 0&&(s=new Float32Array(i),bd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ql(r,e){let t=Ad[e];t===void 0&&(t=new Int32Array(e),Ad[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function BM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function VM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,n))return;Cd.set(n),r.uniformMatrix2fv(this.addr,!1,Cd),Kt(t,n)}}function GM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,n))return;Rd.set(n),r.uniformMatrix3fv(this.addr,!1,Rd),Kt(t,n)}}function WM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,n))return;wd.set(n),r.uniformMatrix4fv(this.addr,!1,wd),Kt(t,n)}}function XM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function KM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function jM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function QM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ed.compareFunction=$m,s=Ed):s=u_,t.setTexture2D(e||s,i)}function eS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||f_,i)}function tS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||d_,i)}function nS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||h_,i)}function iS(r){switch(r){case 5126:return BM;case 35664:return kM;case 35665:return zM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return YM;case 35668:case 35672:return qM;case 35669:case 35673:return KM;case 5125:return jM;case 36294:return $M;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}function rS(r,e){r.uniform1fv(this.addr,e)}function sS(r,e){const t=uo(e,this.size,2);r.uniform2fv(this.addr,t)}function oS(r,e){const t=uo(e,this.size,3);r.uniform3fv(this.addr,t)}function aS(r,e){const t=uo(e,this.size,4);r.uniform4fv(this.addr,t)}function lS(r,e){const t=uo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cS(r,e){const t=uo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function uS(r,e){const t=uo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hS(r,e){r.uniform1iv(this.addr,e)}function fS(r,e){r.uniform2iv(this.addr,e)}function dS(r,e){r.uniform3iv(this.addr,e)}function pS(r,e){r.uniform4iv(this.addr,e)}function mS(r,e){r.uniform1uiv(this.addr,e)}function _S(r,e){r.uniform2uiv(this.addr,e)}function gS(r,e){r.uniform3uiv(this.addr,e)}function vS(r,e){r.uniform4uiv(this.addr,e)}function xS(r,e,t){const n=this.cache,i=e.length,s=ql(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||u_,s[o])}function yS(r,e,t){const n=this.cache,i=e.length,s=ql(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||f_,s[o])}function MS(r,e,t){const n=this.cache,i=e.length,s=ql(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||d_,s[o])}function SS(r,e,t){const n=this.cache,i=e.length,s=ql(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||h_,s[o])}function TS(r){switch(r){case 5126:return rS;case 35664:return sS;case 35665:return oS;case 35666:return aS;case 35674:return lS;case 35675:return cS;case 35676:return uS;case 5124:case 35670:return hS;case 35667:case 35671:return fS;case 35668:case 35672:return dS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return _S;case 36295:return gS;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return SS}}class ES{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iS(t.type)}}class bS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TS(t.type)}}class AS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function Pd(r,e){r.seq.push(e),r.map[e.id]=e}function wS(r,e,t){const n=r.name,i=n.length;for(Vc.lastIndex=0;;){const s=Vc.exec(n),o=Vc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Pd(t,c===void 0?new ES(a,r,e):new bS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new AS(a),Pd(t,h)),t=h}}}class xl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);wS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ld(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const RS=37297;let CS=0;function PS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function LS(r){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(r);let n;switch(e===t?n="":e===Ul&&t===Nl?n="LinearDisplayP3ToLinearSRGB":e===Nl&&t===Ul&&(n="LinearSRGBToLinearDisplayP3"),r){case sn:case Wl:return[n,"LinearTransferOETF"];case Mn:case Yh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Dd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+PS(r.getShaderSource(e),o)}else return i}function DS(r,e){const t=LS(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function IS(r,e){let t;switch(e){case D0:t="Linear";break;case I0:t="Reinhard";break;case N0:t="Cineon";break;case U0:t="ACESFilmic";break;case F0:t="AgX";break;case B0:t="Neutral";break;case O0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ja=new B;function NS(){dt.getLuminanceCoefficients(ja);const r=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function US(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function OS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Fo(r){return r!==""}function Id(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(r){return r.replace(BS,zS)}const kS=new Map;function zS(r,e){let t=$e[e];if(t===void 0){const n=kS.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ch(t)}const HS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(r){return r.replace(HS,VS)}function VS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Od(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function WS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function YS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Om:e="ENVMAP_BLENDING_MULTIPLY";break;case P0:e="ENVMAP_BLENDING_MIX";break;case L0:e="ENVMAP_BLENDING_ADD";break}return e}function qS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function KS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=GS(t),c=WS(t),u=XS(t),h=YS(t),f=qS(t),d=US(t),_=OS(s),g=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fo).join(`
`),m.length>0&&(m+=`
`)):(p=[Od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),m=[Od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?$e.tonemapping_pars_fragment:"",t.toneMapping!==Mr?IS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,DS("linearToOutputTexel",t.outputColorSpace),NS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),o=ch(o),o=Id(o,t),o=Nd(o,t),a=ch(a),a=Id(a,t),a=Nd(a,t),o=Ud(o),a=Ud(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,y=M+m+a,R=Ld(i,i.VERTEX_SHADER,x),A=Ld(i,i.FRAGMENT_SHADER,y);i.attachShader(g,R),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(E){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(R).trim(),X=i.getShaderInfoLog(A).trim();let j=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const Y=Dd(i,R,"vertex"),W=Dd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+D+`
`+Y+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(z===""||X==="")&&(V=!1);V&&(E.diagnostics={runnable:j,programLog:D,vertexShader:{log:z,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(R),i.deleteShader(A),C=new xl(i,g),O=FS(i,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let O;this.getAttributes=function(){return O===void 0&&T(this),O};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,RS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let jS=0;class $S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ZS(e),t.set(e,n)),n}}class ZS{constructor(e){this.id=jS++,this.code=e,this.usedTimes=0}}function JS(r,e,t,n,i,s,o){const a=new t_,l=new $S,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,D,z,X){const j=z.fog,V=X.geometry,Y=v.isMeshStandardMaterial?z.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),se=W&&W.mapping===Gl?W.image.height:null,P=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Fe=ae!==void 0?ae.length:0;let Xe=0;V.morphAttributes.position!==void 0&&(Xe=1),V.morphAttributes.normal!==void 0&&(Xe=2),V.morphAttributes.color!==void 0&&(Xe=3);let q,Q,fe,oe;if(P){const we=vi[P];q=we.vertexShader,Q=we.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,l.update(v),fe=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);const be=r.getRenderTarget(),Se=X.isInstancedMesh===!0,We=X.isBatchedMesh===!0,Ve=!!v.map,ze=!!v.matcap,L=!!W,ot=!!v.aoMap,Ue=!!v.lightMap,Be=!!v.bumpMap,F=!!v.normalMap,Je=!!v.displacementMap,Pe=!!v.emissiveMap,w=!!v.metalnessMap,S=!!v.roughnessMap,G=v.anisotropy>0,Z=v.clearcoat>0,te=v.dispersion>0,$=v.iridescence>0,ye=v.sheen>0,ie=v.transmission>0,de=G&&!!v.anisotropyMap,He=Z&&!!v.clearcoatMap,ne=Z&&!!v.clearcoatNormalMap,ve=Z&&!!v.clearcoatRoughnessMap,xe=$&&!!v.iridescenceMap,De=$&&!!v.iridescenceThicknessMap,ge=ye&&!!v.sheenColorMap,Ye=ye&&!!v.sheenRoughnessMap,Oe=!!v.specularMap,at=!!v.specularColorMap,I=!!v.specularIntensityMap,ee=ie&&!!v.transmissionMap,K=ie&&!!v.thicknessMap,J=!!v.gradientMap,le=!!v.alphaMap,ce=v.alphaTest>0,qe=!!v.alphaHash,yt=!!v.extensions;let Rt=Mr;v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Rt=r.toneMapping);const tt={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:We,batchingColor:We&&X._colorsTexture!==null,instancing:Se,instancingColor:Se&&X.instanceColor!==null,instancingMorph:Se&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:sn,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:ze,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:se,aoMap:ot,lightMap:Ue,bumpMap:Be,normalMap:F,displacementMap:d&&Je,emissiveMap:Pe,normalMapObjectSpace:F&&v.normalMapType===W0,normalMapTangentSpace:F&&v.normalMapType===jm,metalnessMap:w,roughnessMap:S,anisotropy:G,anisotropyMap:de,clearcoat:Z,clearcoatMap:He,clearcoatNormalMap:ne,clearcoatRoughnessMap:ve,dispersion:te,iridescence:$,iridescenceMap:xe,iridescenceThicknessMap:De,sheen:ye,sheenColorMap:ge,sheenRoughnessMap:Ye,specularMap:Oe,specularColorMap:at,specularIntensityMap:I,transmission:ie,transmissionMap:ee,thicknessMap:K,gradientMap:J,opaque:v.transparent===!1&&v.blending===Hs&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:ce,alphaHash:qe,combine:v.combine,mapUv:Ve&&p(v.map.channel),aoMapUv:ot&&p(v.aoMap.channel),lightMapUv:Ue&&p(v.lightMap.channel),bumpMapUv:Be&&p(v.bumpMap.channel),normalMapUv:F&&p(v.normalMap.channel),displacementMapUv:Je&&p(v.displacementMap.channel),emissiveMapUv:Pe&&p(v.emissiveMap.channel),metalnessMapUv:w&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:de&&p(v.anisotropyMap.channel),clearcoatMapUv:He&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(v.sheenRoughnessMap.channel),specularMapUv:Oe&&p(v.specularMap.channel),specularColorMapUv:at&&p(v.specularColorMap.channel),specularIntensityMapUv:I&&p(v.specularIntensityMap.channel),transmissionMapUv:ee&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:le&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(F||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(Ve||le),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===At,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yi,flipSided:v.side===In,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function M(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)E.push(D),E.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(x(E,v),y(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){const E=g[v.type];let D;if(E){const z=vi[E];D=Uv.clone(z.uniforms)}else D=v.uniforms;return D}function A(v,E){let D;for(let z=0,X=u.length;z<X;z++){const j=u[z];if(j.cacheKey===E){D=j,++D.usedTimes;break}}return D===void 0&&(D=new KS(r,E,v,s),u.push(D)),D}function T(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:O}}function QS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function eT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Fd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||eT),n.length>1&&n.sort(f||Fd),i.length>1&&i.sort(f||Fd)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function tT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Bd,r.set(n,[o])):i>=s.length?(o=new Bd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function nT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ge};break;case"SpotLight":t={position:new B,direction:new B,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function iT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let rT=0;function sT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function oT(r){const e=new nT,t=iT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new Ke,o=new Ke;function a(c){let u=0,h=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,M=0,x=0,y=0,R=0,A=0,T=0;c.sort(sT);for(let O=0,v=c.length;O<v;O++){const E=c[O],D=E.color,z=E.intensity,X=E.distance,j=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=D.r*z,h+=D.g*z,f+=D.b*z;else if(E.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(E.sh.coefficients[V],z);T++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Y=E.shadow,W=t.get(E);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=E.shadow.matrix,M++}n.directional[d]=V,d++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(D).multiplyScalar(z),V.distance=X,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,n.spot[g]=V;const Y=E.shadow;if(E.map&&(n.spotLightMap[R]=E.map,R++,Y.updateMatrices(E),E.castShadow&&A++),n.spotLightMatrix[g]=Y.matrix,E.castShadow){const W=t.get(E);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=j,y++}g++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(D).multiplyScalar(z),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=V,p++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const Y=E.shadow,W=t.get(E);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=E.shadow.matrix,x++}n.point[_]=V,_++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(z),V.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[m]=V,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==M||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==R||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=M,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=R,C.numLightProbes=T,n.version=rT++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),h++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function kd(r){const e=new oT(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function aT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new kd(r),e.set(i,[a])):s>=o.length?(a=new kd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class lT extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cT extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fT(r,e,t){let n=new Kh;const i=new ft,s=new ft,o=new pt,a=new lT({depthPacking:G0}),l=new cT,c={},u=t.maxTextureSize,h={[$i]:In,[In]:$i,[yi]:yi},f=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:uT,fragmentShader:hT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ci;_.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Yn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let m=this.type;this.render=function(A,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const O=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),D=r.state;D.setBlending(yr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=m!==Bi&&this.type===Bi,X=m===Bi&&this.type!==Bi;for(let j=0,V=A.length;j<V;j++){const Y=A[j],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const se=W.getFrameExtents();if(i.multiply(se),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/se.x),i.x=s.x*se.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/se.y),i.y=s.y*se.y,W.mapSize.y=s.y)),W.map===null||z===!0||X===!0){const ae=this.type!==Bi?{minFilter:An,magFilter:An}:{};W.map!==null&&W.map.dispose(),W.map=new as(i.x,i.y,ae),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const P=W.getViewportCount();for(let ae=0;ae<P;ae++){const Fe=W.getViewport(ae);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),D.viewport(o),W.updateMatrices(Y,ae),n=W.getFrustum(),y(T,C,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Bi&&M(W,C),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(O,v,E)};function M(A,T){const C=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new as(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,C,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,C,d,g,null)}function x(A,T,C,O){let v=null;const E=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)v=E;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=v.uuid,z=T.uuid;let X=c[D];X===void 0&&(X={},c[D]=X);let j=X[z];j===void 0&&(j=v.clone(),X[z]=j,T.addEventListener("dispose",R)),v=j}if(v.visible=T.visible,v.wireframe=T.wireframe,O===Bi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=r.properties.get(v);D.light=C}return v}function y(A,T,C,O,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Bi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=e.update(A),X=A.material;if(Array.isArray(X)){const j=z.groups;for(let V=0,Y=j.length;V<Y;V++){const W=j[V],se=X[W.materialIndex];if(se&&se.visible){const P=x(A,se,O,v);A.onBeforeShadow(r,A,T,C,z,P,W),r.renderBufferDirect(C,null,z,P,A,W),A.onAfterShadow(r,A,T,C,z,P,W)}}}else if(X.visible){const j=x(A,X,O,v);A.onBeforeShadow(r,A,T,C,z,j,null),r.renderBufferDirect(C,null,z,j,A,null),A.onAfterShadow(r,A,T,C,z,j,null)}}const D=A.children;for(let z=0,X=D.length;z<X;z++)y(D[z],T,C,O,v)}function R(A){A.target.removeEventListener("dispose",R);for(const C in c){const O=c[C],v=A.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}const dT={[Au]:wu,[Ru]:Lu,[Cu]:Du,[Zs]:Pu,[wu]:Au,[Lu]:Ru,[Du]:Cu,[Pu]:Zs};function pT(r){function e(){let I=!1;const ee=new pt;let K=null;const J=new pt(0,0,0,0);return{setMask:function(le){K!==le&&!I&&(r.colorMask(le,le,le,le),K=le)},setLocked:function(le){I=le},setClear:function(le,ce,qe,yt,Rt){Rt===!0&&(le*=yt,ce*=yt,qe*=yt),ee.set(le,ce,qe,yt),J.equals(ee)===!1&&(r.clearColor(le,ce,qe,yt),J.copy(ee))},reset:function(){I=!1,K=null,J.set(-1,0,0,0)}}}function t(){let I=!1,ee=!1,K=null,J=null,le=null;return{setReversed:function(ce){ee=ce},setTest:function(ce){ce?fe(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(ce){K!==ce&&!I&&(r.depthMask(ce),K=ce)},setFunc:function(ce){if(ee&&(ce=dT[ce]),J!==ce){switch(ce){case Au:r.depthFunc(r.NEVER);break;case wu:r.depthFunc(r.ALWAYS);break;case Ru:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case Cu:r.depthFunc(r.EQUAL);break;case Pu:r.depthFunc(r.GEQUAL);break;case Lu:r.depthFunc(r.GREATER);break;case Du:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ce}},setLocked:function(ce){I=ce},setClear:function(ce){le!==ce&&(r.clearDepth(ce),le=ce)},reset:function(){I=!1,K=null,J=null,le=null}}}function n(){let I=!1,ee=null,K=null,J=null,le=null,ce=null,qe=null,yt=null,Rt=null;return{setTest:function(tt){I||(tt?fe(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(tt){ee!==tt&&!I&&(r.stencilMask(tt),ee=tt)},setFunc:function(tt,we,Te){(K!==tt||J!==we||le!==Te)&&(r.stencilFunc(tt,we,Te),K=tt,J=we,le=Te)},setOp:function(tt,we,Te){(ce!==tt||qe!==we||yt!==Te)&&(r.stencilOp(tt,we,Te),ce=tt,qe=we,yt=Te)},setLocked:function(tt){I=tt},setClear:function(tt){Rt!==tt&&(r.clearStencil(tt),Rt=tt)},reset:function(){I=!1,ee=null,K=null,J=null,le=null,ce=null,qe=null,yt=null,Rt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,x=null,y=null,R=null,A=new Ge(0,0,0),T=0,C=!1,O=null,v=null,E=null,D=null,z=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,V=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=V>=2);let W=null,se={};const P=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),Fe=new pt().fromArray(P),Xe=new pt().fromArray(ae);function q(I,ee,K,J){const le=new Uint8Array(4),ce=r.createTexture();r.bindTexture(I,ce),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<K;qe++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ee+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ce}const Q={};Q[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(r.DEPTH_TEST),s.setFunc(Zs),Ue(!1),Be(Gf),fe(r.CULL_FACE),L(yr);function fe(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function oe(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function be(I,ee){return u[I]!==ee?(r.bindFramebuffer(I,ee),u[I]=ee,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ee),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function Se(I,ee){let K=f,J=!1;if(I){K=h.get(ee),K===void 0&&(K=[],h.set(ee,K));const le=I.textures;if(K.length!==le.length||K[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,qe=le.length;ce<qe;ce++)K[ce]=r.COLOR_ATTACHMENT0+ce;K.length=le.length,J=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,J=!0);J&&r.drawBuffers(K)}function We(I){return d!==I?(r.useProgram(I),d=I,!0):!1}const Ve={[Vr]:r.FUNC_ADD,[d0]:r.FUNC_SUBTRACT,[p0]:r.FUNC_REVERSE_SUBTRACT};Ve[m0]=r.MIN,Ve[_0]=r.MAX;const ze={[g0]:r.ZERO,[v0]:r.ONE,[x0]:r.SRC_COLOR,[Eu]:r.SRC_ALPHA,[b0]:r.SRC_ALPHA_SATURATE,[T0]:r.DST_COLOR,[M0]:r.DST_ALPHA,[y0]:r.ONE_MINUS_SRC_COLOR,[bu]:r.ONE_MINUS_SRC_ALPHA,[E0]:r.ONE_MINUS_DST_COLOR,[S0]:r.ONE_MINUS_DST_ALPHA,[A0]:r.CONSTANT_COLOR,[w0]:r.ONE_MINUS_CONSTANT_COLOR,[R0]:r.CONSTANT_ALPHA,[C0]:r.ONE_MINUS_CONSTANT_ALPHA};function L(I,ee,K,J,le,ce,qe,yt,Rt,tt){if(I===yr){_===!0&&(oe(r.BLEND),_=!1);return}if(_===!1&&(fe(r.BLEND),_=!0),I!==f0){if(I!==g||tt!==C){if((p!==Vr||x!==Vr)&&(r.blendEquation(r.FUNC_ADD),p=Vr,x=Vr),tt)switch(I){case Hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wf:r.blendFunc(r.ONE,r.ONE);break;case Xf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,M=null,y=null,R=null,A.set(0,0,0),T=0,g=I,C=tt}return}le=le||ee,ce=ce||K,qe=qe||J,(ee!==p||le!==x)&&(r.blendEquationSeparate(Ve[ee],Ve[le]),p=ee,x=le),(K!==m||J!==M||ce!==y||qe!==R)&&(r.blendFuncSeparate(ze[K],ze[J],ze[ce],ze[qe]),m=K,M=J,y=ce,R=qe),(yt.equals(A)===!1||Rt!==T)&&(r.blendColor(yt.r,yt.g,yt.b,Rt),A.copy(yt),T=Rt),g=I,C=!1}function ot(I,ee){I.side===yi?oe(r.CULL_FACE):fe(r.CULL_FACE);let K=I.side===In;ee&&(K=!K),Ue(K),I.blending===Hs&&I.transparent===!1?L(yr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Je(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(I){O!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),O=I)}function Be(I){I!==c0?(fe(r.CULL_FACE),I!==v&&(I===Gf?r.cullFace(r.BACK):I===u0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),v=I}function F(I){I!==E&&(j&&r.lineWidth(I),E=I)}function Je(I,ee,K){I?(fe(r.POLYGON_OFFSET_FILL),(D!==ee||z!==K)&&(r.polygonOffset(ee,K),D=ee,z=K)):oe(r.POLYGON_OFFSET_FILL)}function Pe(I){I?fe(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function w(I){I===void 0&&(I=r.TEXTURE0+X-1),W!==I&&(r.activeTexture(I),W=I)}function S(I,ee,K){K===void 0&&(W===null?K=r.TEXTURE0+X-1:K=W);let J=se[K];J===void 0&&(J={type:void 0,texture:void 0},se[K]=J),(J.type!==I||J.texture!==ee)&&(W!==K&&(r.activeTexture(K),W=K),r.bindTexture(I,ee||Q[I]),J.type=I,J.texture=ee)}function G(){const I=se[W];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){Fe.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Fe.copy(I))}function ge(I){Xe.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Xe.copy(I))}function Ye(I,ee){let K=l.get(ee);K===void 0&&(K=new WeakMap,l.set(ee,K));let J=K.get(I);J===void 0&&(J=r.getUniformBlockIndex(ee,I.name),K.set(I,J))}function Oe(I,ee){const J=l.get(ee).get(I);a.get(ee)!==J&&(r.uniformBlockBinding(ee,J,I.__bindingPointIndex),a.set(ee,J))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,se={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,x=null,y=null,R=null,A=new Ge(0,0,0),T=0,C=!1,O=null,v=null,E=null,D=null,z=null,Fe.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:fe,disable:oe,bindFramebuffer:be,drawBuffers:Se,useProgram:We,setBlending:L,setMaterial:ot,setFlipSided:Ue,setCullFace:Be,setLineWidth:F,setPolygonOffset:Je,setScissorTest:Pe,activeTexture:w,bindTexture:S,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:ve,texImage3D:xe,updateUBOMapping:Ye,uniformBlockBinding:Oe,texStorage2D:He,texStorage3D:ne,texSubImage2D:$,texSubImage3D:ye,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:De,viewport:ge,reset:at}}function zd(r,e,t,n){const i=mT(n);switch(t){case Vm:return r*e;case Wm:return r*e;case Xm:return r*e*2;case Vh:return r*e/i.components*i.byteLength;case Gh:return r*e/i.components*i.byteLength;case Ym:return r*e*2/i.components*i.byteLength;case Wh:return r*e*2/i.components*i.byteLength;case Gm:return r*e*3/i.components*i.byteLength;case ii:return r*e*4/i.components*i.byteLength;case Xh:return r*e*4/i.components*i.byteLength;case dl:case pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ml:case _l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ou:case Bu:return Math.max(r,16)*Math.max(e,8)/4;case Uu:case Fu:return Math.max(r,8)*Math.max(e,8)/2;case ku:case zu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ju:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $u:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Qu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case gl:case nh:case ih:return Math.ceil(r/4)*Math.ceil(e/4)*16;case qm:case rh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case sh:case oh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mT(r){switch(r){case Zi:case km:return{byteLength:1,components:1};case la:case zm:case da:return{byteLength:2,components:1};case zh:case Hh:return{byteLength:2,components:4};case os:case kh:case pi:return{byteLength:4,components:1};case Hm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function _T(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return d?new OffscreenCanvas(w,S):ha("canvas")}function g(w,S,G){let Z=1;const te=Pe(w);if((te.width>G||te.height>G)&&(Z=G/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Z*te.width),ye=Math.floor(Z*te.height);h===void 0&&(h=_($,ye));const ie=S?_($,ye):h;return ie.width=$,ie.height=ye,ie.getContext("2d").drawImage(w,0,0,$,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+ye+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==An&&w.minFilter!==Wn}function m(w){r.generateMipmap(w)}function M(w,S,G,Z,te=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=S;if(S===r.RED&&(G===r.FLOAT&&($=r.R32F),G===r.HALF_FLOAT&&($=r.R16F),G===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.R8UI),G===r.UNSIGNED_SHORT&&($=r.R16UI),G===r.UNSIGNED_INT&&($=r.R32UI),G===r.BYTE&&($=r.R8I),G===r.SHORT&&($=r.R16I),G===r.INT&&($=r.R32I)),S===r.RG&&(G===r.FLOAT&&($=r.RG32F),G===r.HALF_FLOAT&&($=r.RG16F),G===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RG8UI),G===r.UNSIGNED_SHORT&&($=r.RG16UI),G===r.UNSIGNED_INT&&($=r.RG32UI),G===r.BYTE&&($=r.RG8I),G===r.SHORT&&($=r.RG16I),G===r.INT&&($=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGB8UI),G===r.UNSIGNED_SHORT&&($=r.RGB16UI),G===r.UNSIGNED_INT&&($=r.RGB32UI),G===r.BYTE&&($=r.RGB8I),G===r.SHORT&&($=r.RGB16I),G===r.INT&&($=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGBA8UI),G===r.UNSIGNED_SHORT&&($=r.RGBA16UI),G===r.UNSIGNED_INT&&($=r.RGBA32UI),G===r.BYTE&&($=r.RGBA8I),G===r.SHORT&&($=r.RGBA16I),G===r.INT&&($=r.RGBA32I)),S===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),S===r.RGBA){const ye=te?Il:dt.getTransfer(Z);G===r.FLOAT&&($=r.RGBA32F),G===r.HALF_FLOAT&&($=r.RGBA16F),G===r.UNSIGNED_BYTE&&($=ye===At?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(w,S){let G;return w?S===null||S===os||S===to?G=r.DEPTH24_STENCIL8:S===pi?G=r.DEPTH32F_STENCIL8:S===la&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===os||S===to?G=r.DEPTH_COMPONENT24:S===pi?G=r.DEPTH_COMPONENT32F:S===la&&(G=r.DEPTH_COMPONENT16),G}function y(w,S){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==An&&w.minFilter!==Wn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){const S=w.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&u.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),O(S)}function T(w){const S=n.get(w);if(S.__webglInit===void 0)return;const G=w.source,Z=f.get(G);if(Z){const te=Z[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(w),Object.keys(Z).length===0&&f.delete(G)}n.remove(w)}function C(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const G=w.source,Z=f.get(G);delete Z[S.__cacheKey],o.memory.textures--}function O(w){const S=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let te=0;te<S.__webglFramebuffer[Z].length;te++)r.deleteFramebuffer(S.__webglFramebuffer[Z][te]);else r.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[Z]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=w.textures;for(let Z=0,te=G.length;Z<te;Z++){const $=n.get(G[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(w)}let v=0;function E(){v=0}function D(){const w=v;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),v+=1,w}function z(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function X(w,S){const G=n.get(w);if(w.isVideoTexture&&F(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(G,w,S);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function j(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Xe(G,w,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function V(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Xe(G,w,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function Y(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){q(G,w,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const W={[eo]:r.REPEAT,[mr]:r.CLAMP_TO_EDGE,[Dl]:r.MIRRORED_REPEAT},se={[An]:r.NEAREST,[Bm]:r.NEAREST_MIPMAP_NEAREST,[Oo]:r.NEAREST_MIPMAP_LINEAR,[Wn]:r.LINEAR,[fl]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},P={[X0]:r.NEVER,[Z0]:r.ALWAYS,[Y0]:r.LESS,[$m]:r.LEQUAL,[q0]:r.EQUAL,[$0]:r.GEQUAL,[K0]:r.GREATER,[j0]:r.NOTEQUAL};function ae(w,S){if(S.type===pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wn||S.magFilter===fl||S.magFilter===Oo||S.magFilter===Wi||S.minFilter===Wn||S.minFilter===fl||S.minFilter===Oo||S.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,W[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,W[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,W[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,se[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,se[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,P[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===An||S.minFilter!==Oo&&S.minFilter!==Wi||S.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Fe(w,S){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const Z=S.source;let te=f.get(Z);te===void 0&&(te={},f.set(Z,te));const $=z(S);if($!==w.__cacheKey){te[$]===void 0&&(te[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[$].usedTimes++;const ye=te[w.__cacheKey];ye!==void 0&&(te[w.__cacheKey].usedTimes--,ye.usedTimes===0&&C(S)),w.__cacheKey=$,w.__webglTexture=te[$].texture}return G}function Xe(w,S,G){let Z=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);const te=Fe(w,S),$=S.source;t.bindTexture(Z,w.__webglTexture,r.TEXTURE0+G);const ye=n.get($);if($.version!==ye.__version||te===!0){t.activeTexture(r.TEXTURE0+G);const ie=dt.getPrimaries(dt.workingColorSpace),de=S.colorSpace===cr?null:dt.getPrimaries(S.colorSpace),He=S.colorSpace===cr||ie===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ne=g(S.image,!1,i.maxTextureSize);ne=Je(S,ne);const ve=s.convert(S.format,S.colorSpace),xe=s.convert(S.type);let De=M(S.internalFormat,ve,xe,S.colorSpace,S.isVideoTexture);ae(Z,S);let ge;const Ye=S.mipmaps,Oe=S.isVideoTexture!==!0,at=ye.__version===void 0||te===!0,I=$.dataReady,ee=y(S,ne);if(S.isDepthTexture)De=x(S.format===no,S.type),at&&(Oe?t.texStorage2D(r.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,De,ne.width,ne.height,0,ve,xe,null));else if(S.isDataTexture)if(Ye.length>0){Oe&&at&&t.texStorage2D(r.TEXTURE_2D,ee,De,Ye[0].width,Ye[0].height);for(let K=0,J=Ye.length;K<J;K++)ge=Ye[K],Oe?I&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(r.TEXTURE_2D,K,De,ge.width,ge.height,0,ve,xe,ge.data);S.generateMipmaps=!1}else Oe?(at&&t.texStorage2D(r.TEXTURE_2D,ee,De,ne.width,ne.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,xe,ne.data)):t.texImage2D(r.TEXTURE_2D,0,De,ne.width,ne.height,0,ve,xe,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,De,Ye[0].width,Ye[0].height,ne.depth);for(let K=0,J=Ye.length;K<J;K++)if(ge=Ye[K],S.format!==ii)if(ve!==null)if(Oe){if(I)if(S.layerUpdates.size>0){const le=zd(ge.width,ge.height,S.format,S.type);for(const ce of S.layerUpdates){const qe=ge.data.subarray(ce*le/ge.data.BYTES_PER_ELEMENT,(ce+1)*le/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,ce,ge.width,ge.height,1,ve,qe,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,ne.depth,ve,ge.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,De,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,ne.depth,ve,xe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,De,ge.width,ge.height,ne.depth,0,ve,xe,ge.data)}else{Oe&&at&&t.texStorage2D(r.TEXTURE_2D,ee,De,Ye[0].width,Ye[0].height);for(let K=0,J=Ye.length;K<J;K++)ge=Ye[K],S.format!==ii?ve!==null?Oe?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,K,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(r.TEXTURE_2D,K,De,ge.width,ge.height,0,ve,xe,ge.data)}else if(S.isDataArrayTexture)if(Oe){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,De,ne.width,ne.height,ne.depth),I)if(S.layerUpdates.size>0){const K=zd(ne.width,ne.height,S.format,S.type);for(const J of S.layerUpdates){const le=ne.data.subarray(J*K/ne.data.BYTES_PER_ELEMENT,(J+1)*K/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ve,xe,le)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,xe,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,ve,xe,ne.data);else if(S.isData3DTexture)Oe?(at&&t.texStorage3D(r.TEXTURE_3D,ee,De,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,xe,ne.data)):t.texImage3D(r.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,ve,xe,ne.data);else if(S.isFramebufferTexture){if(at)if(Oe)t.texStorage2D(r.TEXTURE_2D,ee,De,ne.width,ne.height);else{let K=ne.width,J=ne.height;for(let le=0;le<ee;le++)t.texImage2D(r.TEXTURE_2D,le,De,K,J,0,ve,xe,null),K>>=1,J>>=1}}else if(Ye.length>0){if(Oe&&at){const K=Pe(Ye[0]);t.texStorage2D(r.TEXTURE_2D,ee,De,K.width,K.height)}for(let K=0,J=Ye.length;K<J;K++)ge=Ye[K],Oe?I&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ve,xe,ge):t.texImage2D(r.TEXTURE_2D,K,De,ve,xe,ge);S.generateMipmaps=!1}else if(Oe){if(at){const K=Pe(ne);t.texStorage2D(r.TEXTURE_2D,ee,De,K.width,K.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,xe,ne)}else t.texImage2D(r.TEXTURE_2D,0,De,ve,xe,ne);p(S)&&m(Z),ye.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function q(w,S,G){if(S.image.length!==6)return;const Z=Fe(w,S),te=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+G);const $=n.get(te);if(te.version!==$.__version||Z===!0){t.activeTexture(r.TEXTURE0+G);const ye=dt.getPrimaries(dt.workingColorSpace),ie=S.colorSpace===cr?null:dt.getPrimaries(S.colorSpace),de=S.colorSpace===cr||ye===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!He&&!ne?ve[J]=g(S.image[J],!0,i.maxCubemapSize):ve[J]=ne?S.image[J].image:S.image[J],ve[J]=Je(S,ve[J]);const xe=ve[0],De=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),Ye=M(S.internalFormat,De,ge,S.colorSpace),Oe=S.isVideoTexture!==!0,at=$.__version===void 0||Z===!0,I=te.dataReady;let ee=y(S,xe);ae(r.TEXTURE_CUBE_MAP,S);let K;if(He){Oe&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,Ye,xe.width,xe.height);for(let J=0;J<6;J++){K=ve[J].mipmaps;for(let le=0;le<K.length;le++){const ce=K[le];S.format!==ii?De!==null?Oe?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ce.width,ce.height,De,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ce.width,ce.height,De,ge,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ye,ce.width,ce.height,0,De,ge,ce.data)}}}else{if(K=S.mipmaps,Oe&&at){K.length>0&&ee++;const J=Pe(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Oe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,De,ge,ve[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,ve[J].width,ve[J].height,0,De,ge,ve[J].data);for(let le=0;le<K.length;le++){const qe=K[le].image[J].image;Oe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,qe.width,qe.height,De,ge,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ye,qe.width,qe.height,0,De,ge,qe.data)}}else{Oe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,ge,ve[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,De,ge,ve[J]);for(let le=0;le<K.length;le++){const ce=K[le];Oe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,De,ge,ce.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ye,De,ge,ce.image[J])}}}p(S)&&m(r.TEXTURE_CUBE_MAP),$.__version=te.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Q(w,S,G,Z,te,$){const ye=s.convert(G.format,G.colorSpace),ie=s.convert(G.type),de=M(G.internalFormat,ye,ie,G.colorSpace);if(!n.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>$),ve=Math.max(1,S.height>>$);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,$,de,ne,ve,S.depth,0,ye,ie,null):t.texImage2D(te,$,de,ne,ve,0,ye,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Be(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,te,n.get(G).__webglTexture,0,Ue(S)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,te,n.get(G).__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(w,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,$=x(S.stencilBuffer,te),ye=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=Ue(S);Be(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,$,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,$,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,$,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,w)}else{const Z=S.textures;for(let te=0;te<Z.length;te++){const $=Z[te],ye=s.convert($.format,$.colorSpace),ie=s.convert($.type),de=M($.internalFormat,ye,ie,$.colorSpace),He=Ue(S);G&&Be(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,de,S.width,S.height):Be(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,de,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,de,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,te=Ue(S);if(S.depthTexture.format===Vs)Be(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(S.depthTexture.format===no)Be(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function be(w){const S=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,w)}else if(G){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=r.createRenderbuffer(),fe(S.__webglDepthbuffer[Z],w,!1);else{const te=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,$)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),fe(S.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,te)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(w,S,G){const Z=n.get(w);S!==void 0&&Q(Z.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&be(w)}function We(w){const S=w.texture,G=n.get(w),Z=n.get(S);w.addEventListener("dispose",A);const te=w.textures,$=w.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ie]=[];for(let de=0;de<S.mipmaps.length;de++)G.__webglFramebuffer[ie][de]=r.createFramebuffer()}else G.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)G.__webglFramebuffer[ie]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ie=0,de=te.length;ie<de;ie++){const He=n.get(te[ie]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&Be(w)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){const de=te[ie];G.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ie]);const He=s.convert(de.format,de.colorSpace),ne=s.convert(de.type),ve=M(de.internalFormat,He,ne,de.colorSpace,w.isXRRenderTarget===!0),xe=Ue(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,ve,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,G.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(r.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Q(G.__webglFramebuffer[ie][de],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else Q(G.__webglFramebuffer[ie],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,de=te.length;ie<de;ie++){const He=te[ie],ne=n.get(He);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),ae(r.TEXTURE_2D,He),Q(G.__webglFramebuffer,w,He,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),p(He)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,Z.__webglTexture),ae(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Q(G.__webglFramebuffer[de],w,S,r.COLOR_ATTACHMENT0,ie,de);else Q(G.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,ie,0);p(S)&&m(ie),t.unbindTexture()}w.depthBuffer&&be(w)}function Ve(w){const S=w.textures;for(let G=0,Z=S.length;G<Z;G++){const te=S[G];if(p(te)){const $=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ye=n.get(te).__webglTexture;t.bindTexture($,ye),m($),t.unbindTexture()}}}const ze=[],L=[];function ot(w){if(w.samples>0){if(Be(w)===!1){const S=w.textures,G=w.width,Z=w.height;let te=r.COLOR_BUFFER_BIT;const $=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(w),ie=S.length>1;if(ie)for(let de=0;de<S.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let de=0;de<S.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);const He=n.get(S[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,He,0)}r.blitFramebuffer(0,0,G,Z,0,0,G,Z,te,r.NEAREST),l===!0&&(ze.length=0,L.length=0,ze.push(r.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ze.push($),L.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<S.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);const He=n.get(S[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ue(w){return Math.min(i.maxSamples,w.samples)}function Be(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function Je(w,S){const G=w.colorSpace,Z=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==sn&&G!==cr&&(dt.getTransfer(G)===At?(Z!==ii||te!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=Se,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Be}function gT(r,e){function t(n,i=cr){let s;const o=dt.getTransfer(i);if(n===Zi)return r.UNSIGNED_BYTE;if(n===zh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Hh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===km)return r.BYTE;if(n===zm)return r.SHORT;if(n===la)return r.UNSIGNED_SHORT;if(n===kh)return r.INT;if(n===os)return r.UNSIGNED_INT;if(n===pi)return r.FLOAT;if(n===da)return r.HALF_FLOAT;if(n===Vm)return r.ALPHA;if(n===Gm)return r.RGB;if(n===ii)return r.RGBA;if(n===Wm)return r.LUMINANCE;if(n===Xm)return r.LUMINANCE_ALPHA;if(n===Vs)return r.DEPTH_COMPONENT;if(n===no)return r.DEPTH_STENCIL;if(n===Vh)return r.RED;if(n===Gh)return r.RED_INTEGER;if(n===Ym)return r.RG;if(n===Wh)return r.RG_INTEGER;if(n===Xh)return r.RGBA_INTEGER;if(n===dl||n===pl||n===ml||n===_l)if(o===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uu||n===Ou||n===Fu||n===Bu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Uu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ou)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ku||n===zu||n===Hu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ku||n===zu)return o===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vu||n===Gu||n===Wu||n===Xu||n===Yu||n===qu||n===Ku||n===ju||n===$u||n===Zu||n===Ju||n===Qu||n===eh||n===th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ku)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ju)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$u)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ju)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===th)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gl||n===nh||n===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===gl)return o===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qm||n===rh||n===sh||n===oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===gl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class vT extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qr extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xT={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ST{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new en,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new br({vertexShader:yT,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new Yl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TT extends co{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new ST,p=t.getContextAttributes();let m=null,M=null;const x=[],y=[],R=new ft;let A=null;const T=new Sn;T.layers.enable(1),T.viewport=new pt;const C=new Sn;C.layers.enable(2),C.viewport=new pt;const O=[T,C],v=new vT;v.layers.enable(1),v.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=x[q];return Q===void 0&&(Q=new Gc,x[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=x[q];return Q===void 0&&(Q=new Gc,x[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=x[q];return Q===void 0&&(Q=new Gc,x[q]=Q),Q.getHandSpace()};function z(q){const Q=y.indexOf(q.inputSource);if(Q===-1)return;const fe=x[Q];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",j);for(let q=0;q<x.length;q++){const Q=y[q];Q!==null&&(y[q]=null,x[q].disconnect(Q))}E=null,D=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,M=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new as(d.framebufferWidth,d.framebufferHeight,{format:ii,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,fe=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?no:Vs,fe=p.stencil?to:os);const be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new as(f.textureWidth,f.textureHeight,{format:ii,type:Zi,depthTexture:new c_(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(q){for(let Q=0;Q<q.removed.length;Q++){const fe=q.removed[Q],oe=y.indexOf(fe);oe>=0&&(y[oe]=null,x[oe].disconnect(fe))}for(let Q=0;Q<q.added.length;Q++){const fe=q.added[Q];let oe=y.indexOf(fe);if(oe===-1){for(let Se=0;Se<x.length;Se++)if(Se>=y.length){y.push(fe),oe=Se;break}else if(y[Se]===null){y[Se]=fe,oe=Se;break}if(oe===-1)break}const be=x[oe];be&&be.connect(fe)}}const V=new B,Y=new B;function W(q,Q,fe){V.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(fe.matrixWorld);const oe=V.distanceTo(Y),be=Q.projectionMatrix.elements,Se=fe.projectionMatrix.elements,We=be[14]/(be[10]-1),Ve=be[14]/(be[10]+1),ze=(be[9]+1)/be[5],L=(be[9]-1)/be[5],ot=(be[8]-1)/be[0],Ue=(Se[8]+1)/Se[0],Be=We*ot,F=We*Ue,Je=oe/(-ot+Ue),Pe=Je*-ot;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pe),q.translateZ(Je),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const w=We+Je,S=Ve+Je,G=Be-Pe,Z=F+(oe-Pe),te=ze*Ve/S*w,$=L*Ve/S*w;q.projectionMatrix.makePerspective(G,Z,te,$,w,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,fe=q.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),v.near=C.near=T.near=Q,v.far=C.far=T.far=fe,(E!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,D=v.far);const oe=q.parent,be=v.cameras;se(v,oe);for(let Se=0;Se<be.length;Se++)se(be[Se],oe);be.length===2?W(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),P(q,v,oe)};function P(q,Q,fe){fe===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=io*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ae=null;function Fe(q,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let oe=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Se=0;Se<fe.length;Se++){const We=fe[Se];let Ve=null;if(d!==null)Ve=d.getViewport(We);else{const L=h.getViewSubImage(f,We);Ve=L.viewport,Se===0&&(e.setRenderTargetTextures(M,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(M))}let ze=O[Se];ze===void 0&&(ze=new Sn,ze.layers.enable(Se),ze.viewport=new pt,O[Se]=ze),ze.matrix.fromArray(We.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(We.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Se===0&&(v.matrix.copy(ze.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(ze)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const Se=h.getDepthInformation(fe[0]);Se&&Se.isValid&&Se.texture&&g.init(e,Se,i.renderState)}}for(let fe=0;fe<x.length;fe++){const oe=y[fe],be=x[fe];oe!==null&&be!==void 0&&be.update(oe,Q,c||o)}ae&&ae(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Xe=new l_;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const Ur=new wi,ET=new Ke;function bT(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,s_(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===In&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===In&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,y=M.envMapRotation;x&&(p.envMap.value=x,Ur.copy(y),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),p.envMapRotation.value.setFromMatrix4(ET.makeRotationFromEuler(Ur)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===In&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AT(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(_(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(M,R);const A=e.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function u(M){const x=h();M.__bindingPointIndex=x;const y=r.createBuffer(),R=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],y=M.uniforms,R=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,T=y.length;A<T;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let O=0,v=C.length;O<v;O++){const E=C[O];if(d(E,A,O,R)===!0){const D=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let j=0;j<z.length;j++){const V=z[j],Y=g(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,D+X,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,x,y,R){const A=M.value,T=x+"_"+y;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const C=R[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(M){const x=M.uniforms;let y=0;const R=16;for(let T=0,C=x.length;T<C;T++){const O=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,E=O.length;v<E;v++){const D=O[v],z=Array.isArray(D.value)?D.value:[D.value];for(let X=0,j=z.length;X<j;X++){const V=z[X],Y=g(V),W=y%R,se=W%Y.boundary,P=W+se;y+=se,P!==0&&R-P<Y.storage&&(y+=R-P),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=Y.storage}}}const A=y%R;return A>0&&(y+=R-A),M.__size=y,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class wT{constructor(e={}){const{canvas:t=pv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=Mr,this.toneMappingExposure=1;const x=this;let y=!1,R=0,A=0,T=null,C=-1,O=null;const v=new pt,E=new pt;let D=null;const z=new Ge(0);let X=0,j=t.width,V=t.height,Y=1,W=null,se=null;const P=new pt(0,0,j,V),ae=new pt(0,0,j,V);let Fe=!1;const Xe=new Kh;let q=!1,Q=!1;const fe=new Ke,oe=new Ke,be=new B,Se=new pt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ze(){return T===null?Y:1}let L=n;function ot(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bh}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){const U="webgl2";if(L=ot(U,b),L===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,Be,F,Je,Pe,w,S,G,Z,te,$,ye,ie,de,He,ne,ve,xe,De,ge,Ye,Oe,at,I;function ee(){Ue=new DM(L),Ue.init(),Oe=new gT(L,Ue),Be=new AM(L,Ue,e,Oe),F=new pT(L),Be.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),Je=new UM(L),Pe=new QS,w=new _T(L,Ue,F,Pe,Be,Oe,Je),S=new RM(x),G=new LM(x),Z=new Vv(L),at=new EM(L,Z),te=new IM(L,Z,Je,at),$=new FM(L,te,Z,Je),De=new OM(L,Be,w),ne=new wM(Pe),ye=new JS(x,S,G,Ue,Be,at,ne),ie=new bT(x,Pe),de=new tT,He=new aT(Ue),xe=new TM(x,S,G,F,$,f,l),ve=new fT(x,$,Be),I=new AT(L,Je,Be,F),ge=new bM(L,Ue,Je),Ye=new NM(L,Ue,Je),Je.programs=ye.programs,x.capabilities=Be,x.extensions=Ue,x.properties=Pe,x.renderLists=de,x.shadowMap=ve,x.state=F,x.info=Je}ee();const K=new TT(x,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(j,V,!1))},this.getSize=function(b){return b.set(j,V)},this.setSize=function(b,U,k=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,V=U,t.width=Math.floor(b*Y),t.height=Math.floor(U*Y),k===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(j*Y,V*Y).floor()},this.setDrawingBufferSize=function(b,U,k){j=b,V=U,Y=k,t.width=Math.floor(b*k),t.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,U,k,H){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,U,k,H),F.viewport(v.copy(P).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(ae)},this.setScissor=function(b,U,k,H){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,U,k,H),F.scissor(E.copy(ae).multiplyScalar(Y).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(b){F.setScissorTest(Fe=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(b=!0,U=!0,k=!0){let H=0;if(b){let N=!1;if(T!==null){const re=T.texture.format;N=re===Xh||re===Wh||re===Gh}if(N){const re=T.texture.type,_e=re===Zi||re===os||re===la||re===to||re===zh||re===Hh,he=xe.getClearColor(),ue=xe.getClearAlpha(),Ae=he.r,Ne=he.g,Ee=he.b;_e?(d[0]=Ae,d[1]=Ne,d[2]=Ee,d[3]=ue,L.clearBufferuiv(L.COLOR,0,d)):(_[0]=Ae,_[1]=Ne,_[2]=Ee,_[3]=ue,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),de.dispose(),He.dispose(),Pe.dispose(),S.dispose(),G.dispose(),$.dispose(),at.dispose(),I.dispose(),ye.dispose(),K.dispose(),K.removeEventListener("sessionstart",ht),K.removeEventListener("sessionend",pe),Ie.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Je.autoReset,U=ve.enabled,k=ve.autoUpdate,H=ve.needsUpdate,N=ve.type;ee(),Je.autoReset=b,ve.enabled=U,ve.autoUpdate=k,ve.needsUpdate=H,ve.type=N}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qe(b){const U=b.target;U.removeEventListener("dispose",qe),yt(U)}function yt(b){Rt(b),Pe.remove(b)}function Rt(b){const U=Pe.get(b).programs;U!==void 0&&(U.forEach(function(k){ye.releaseProgram(k)}),b.isShaderMaterial&&ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,H,N,re){U===null&&(U=We);const _e=N.isMesh&&N.matrixWorld.determinant()<0,he=_t(b,U,k,H,N);F.setMaterial(H,_e);let ue=k.index,Ae=1;if(H.wireframe===!0){if(ue=te.getWireframeAttribute(k),ue===void 0)return;Ae=2}const Ne=k.drawRange,Ee=k.attributes.position;let lt=Ne.start*Ae,rt=(Ne.start+Ne.count)*Ae;re!==null&&(lt=Math.max(lt,re.start*Ae),rt=Math.min(rt,(re.start+re.count)*Ae)),ue!==null?(lt=Math.max(lt,0),rt=Math.min(rt,ue.count)):Ee!=null&&(lt=Math.max(lt,0),rt=Math.min(rt,Ee.count));const xt=rt-lt;if(xt<0||xt===1/0)return;at.setup(N,H,he,k,ue);let jt,st=ge;if(ue!==null&&(jt=Z.get(ue),st=Ye,st.setIndex(jt)),N.isMesh)H.wireframe===!0?(F.setLineWidth(H.wireframeLinewidth*ze()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(N.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),F.setLineWidth(Ce*ze()),N.isLineSegments?st.setMode(L.LINES):N.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else N.isPoints?st.setMode(L.POINTS):N.isSprite&&st.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,nn=N._multiDrawCounts,mt=N._multiDrawCount,oi=ue?Z.get(ue).bytesPerElement:1,cs=Pe.get(H).currentProgram.getUniforms();for(let On=0;On<mt;On++)cs.setValue(L,"_gl_DrawID",On),st.render(Ce[On]/oi,nn[On])}else if(N.isInstancedMesh)st.renderInstances(lt,xt,N.count);else if(k.isInstancedBufferGeometry){const Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,nn=Math.min(k.instanceCount,Ce);st.renderInstances(lt,xt,nn)}else st.render(lt,xt)};function tt(b,U,k){b.transparent===!0&&b.side===yi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Ft(b,U,k),b.side=$i,b.needsUpdate=!0,Ft(b,U,k),b.side=yi):Ft(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),p=He.get(k),p.init(U),M.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let _e=0;_e<re.length;_e++){const he=re[_e];tt(he,k,N),H.add(he)}else tt(re,k,N),H.add(re)}),M.pop(),p=null,H},this.compileAsync=function(b,U,k=null){const H=this.compile(b,U,k);return new Promise(N=>{function re(){if(H.forEach(function(_e){Pe.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){N(b);return}setTimeout(re,10)}Ue.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let we=null;function Te(b){we&&we(b)}function ht(){Ie.stop()}function pe(){Ie.start()}const Ie=new l_;Ie.setAnimationLoop(Te),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(b){we=b,K.setAnimationLoop(b),b===null?Ie.stop():Ie.start()},K.addEventListener("sessionstart",ht),K.addEventListener("sessionend",pe),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,T),p=He.get(b,M.length),p.init(U),M.push(p),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xe.setFromProjectionMatrix(oe),Q=this.localClippingEnabled,q=ne.init(this.clippingPlanes,Q),g=de.get(b,m.length),g.init(),m.push(g),K.enabled===!0&&K.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&Re(re,U,-1/0,x.sortObjects)}Re(b,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,se),Ve=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ve&&xe.addToRenderList(g,b),this.info.render.frame++,q===!0&&ne.beginShadows();const k=p.state.shadowsArray;ve.render(k,b,U),q===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){const re=U.cameras;if(N.length>0)for(let _e=0,he=re.length;_e<he;_e++){const ue=re[_e];Ot(H,N,b,ue)}Ve&&xe.render(b);for(let _e=0,he=re.length;_e<he;_e++){const ue=re[_e];ke(g,b,ue,ue.viewport)}}else N.length>0&&Ot(H,N,b,U),Ve&&xe.render(b),ke(g,b,U);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,U),at.resetDefaultState(),C=-1,O=null,M.pop(),M.length>0?(p=M[M.length-1],q===!0&&ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Re(b,U,k,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xe.intersectsSprite(b)){H&&Se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(oe);const _e=$.update(b),he=b.material;he.visible&&g.push(b,_e,he,k,Se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xe.intersectsObject(b))){const _e=$.update(b),he=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Se.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Se.copy(_e.boundingSphere.center)),Se.applyMatrix4(b.matrixWorld).applyMatrix4(oe)),Array.isArray(he)){const ue=_e.groups;for(let Ae=0,Ne=ue.length;Ae<Ne;Ae++){const Ee=ue[Ae],lt=he[Ee.materialIndex];lt&&lt.visible&&g.push(b,_e,lt,k,Se.z,Ee)}}else he.visible&&g.push(b,_e,he,k,Se.z,null)}}const re=b.children;for(let _e=0,he=re.length;_e<he;_e++)Re(re[_e],U,k,H)}function ke(b,U,k,H){const N=b.opaque,re=b.transmissive,_e=b.transparent;p.setupLightsView(k),q===!0&&ne.setGlobalState(x.clippingPlanes,k),H&&F.viewport(v.copy(H)),N.length>0&&je(N,U,k),re.length>0&&je(re,U,k),_e.length>0&&je(_e,U,k),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ot(b,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new as(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?da:Zi,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const re=p.state.transmissionRenderTarget[H.id],_e=H.viewport||v;re.setSize(_e.z,_e.w);const he=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(z),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&xe.render(k);const ue=x.toneMapping;x.toneMapping=Mr;const Ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),q===!0&&ne.setGlobalState(x.clippingPlanes,H),je(b,k,H),w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ee=0,lt=U.length;Ee<lt;Ee++){const rt=U[Ee],xt=rt.object,jt=rt.geometry,st=rt.material,Ce=rt.group;if(st.side===yi&&xt.layers.test(H.layers)){const nn=st.side;st.side=In,st.needsUpdate=!0,Ct(xt,k,H,jt,st,Ce),st.side=nn,st.needsUpdate=!0,Ne=!0}}Ne===!0&&(w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re))}x.setRenderTarget(he),x.setClearColor(z,X),Ae!==void 0&&(H.viewport=Ae),x.toneMapping=ue}function je(b,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,re=b.length;N<re;N++){const _e=b[N],he=_e.object,ue=_e.geometry,Ae=H===null?_e.material:H,Ne=_e.group;he.layers.test(k.layers)&&Ct(he,U,k,ue,Ae,Ne)}}function Ct(b,U,k,H,N,re){b.onBeforeRender(x,U,k,H,N,re),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,k,H,b,re),N.transparent===!0&&N.side===yi&&N.forceSinglePass===!1?(N.side=In,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,b,re),N.side=$i,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,b,re),N.side=yi):x.renderBufferDirect(k,U,H,N,b,re),b.onAfterRender(x,U,k,H,N,re)}function Ft(b,U,k){U.isScene!==!0&&(U=We);const H=Pe.get(b),N=p.state.lights,re=p.state.shadowsArray,_e=N.state.version,he=ye.getParameters(b,N.state,re,U,k),ue=ye.getProgramCacheKey(he);let Ae=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?G:S).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",qe),Ae=new Map,H.programs=Ae);let Ne=Ae.get(ue);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===_e)return Mt(b,he),Ne}else he.uniforms=ye.getUniforms(b),b.onBeforeCompile(he,x),Ne=ye.acquireProgram(he,ue),Ae.set(ue,Ne),H.uniforms=he.uniforms;const Ee=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),Mt(b,he),H.needsLights=bt(b),H.lightsStateVersion=_e,H.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function Et(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=xl.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Mt(b,U){const k=Pe.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function _t(b,U,k,H,N){U.isScene!==!0&&(U=We),w.resetTextureUnits();const re=U.fog,_e=H.isMeshStandardMaterial?U.environment:null,he=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sn,ue=(H.isMeshStandardMaterial?G:S).get(H.envMap||_e),Ae=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!k.morphAttributes.position,lt=!!k.morphAttributes.normal,rt=!!k.morphAttributes.color;let xt=Mr;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=x.toneMapping);const jt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=jt!==void 0?jt.length:0,Ce=Pe.get(H),nn=p.state.lights;if(q===!0&&(Q===!0||b!==O)){const jn=b===O&&H.id===C;ne.setState(H,b,jn)}let mt=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==nn.state.version||Ce.outputColorSpace!==he||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==ue||H.fog===!0&&Ce.fog!==re||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ne.numPlanes||Ce.numIntersection!==ne.numIntersection)||Ce.vertexAlphas!==Ae||Ce.vertexTangents!==Ne||Ce.morphTargets!==Ee||Ce.morphNormals!==lt||Ce.morphColors!==rt||Ce.toneMapping!==xt||Ce.morphTargetsCount!==st)&&(mt=!0):(mt=!0,Ce.__version=H.version);let oi=Ce.currentProgram;mt===!0&&(oi=Ft(H,U,N));let cs=!1,On=!1,$l=!1;const Bt=oi.getUniforms(),Qi=Ce.uniforms;if(F.useProgram(oi.program)&&(cs=!0,On=!0,$l=!0),H.id!==C&&(C=H.id,On=!0),cs||O!==b){Be.reverseDepthBuffer?(fe.copy(b.projectionMatrix),_v(fe),gv(fe),Bt.setValue(L,"projectionMatrix",fe)):Bt.setValue(L,"projectionMatrix",b.projectionMatrix),Bt.setValue(L,"viewMatrix",b.matrixWorldInverse);const jn=Bt.map.cameraPosition;jn!==void 0&&jn.setValue(L,be.setFromMatrixPosition(b.matrixWorld)),Be.logarithmicDepthBuffer&&Bt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Bt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,On=!0,$l=!0)}if(N.isSkinnedMesh){Bt.setOptional(L,N,"bindMatrix"),Bt.setOptional(L,N,"bindMatrixInverse");const jn=N.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Bt.setValue(L,"boneTexture",jn.boneTexture,w))}N.isBatchedMesh&&(Bt.setOptional(L,N,"batchingTexture"),Bt.setValue(L,"batchingTexture",N._matricesTexture,w),Bt.setOptional(L,N,"batchingIdTexture"),Bt.setValue(L,"batchingIdTexture",N._indirectTexture,w),Bt.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Bt.setValue(L,"batchingColorTexture",N._colorsTexture,w));const Zl=k.morphAttributes;if((Zl.position!==void 0||Zl.normal!==void 0||Zl.color!==void 0)&&De.update(N,k,oi),(On||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,Bt.setValue(L,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Qi.envMap.value=ue,Qi.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Qi.envMapIntensity.value=U.environmentIntensity),On&&(Bt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&Un(Qi,$l),re&&H.fog===!0&&ie.refreshFogUniforms(Qi,re),ie.refreshMaterialUniforms(Qi,H,Y,V,p.state.transmissionRenderTarget[b.id]),xl.upload(L,Et(Ce),Qi,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(xl.upload(L,Et(Ce),Qi,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Bt.setValue(L,"center",N.center),Bt.setValue(L,"modelViewMatrix",N.modelViewMatrix),Bt.setValue(L,"normalMatrix",N.normalMatrix),Bt.setValue(L,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const jn=H.uniformsGroups;for(let Jl=0,R_=jn.length;Jl<R_;Jl++){const lf=jn[Jl];I.update(lf,oi),I.bind(lf,oi)}}return oi}function Un(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function bt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,U,k){Pe.get(b.texture).__webglTexture=U,Pe.get(b.depthTexture).__webglTexture=k;const H=Pe.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const k=Pe.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,k=0){T=b,R=U,A=k;let H=!0,N=null,re=!1,_e=!1;if(b){const ue=Pe.get(b);if(ue.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(ue.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(ue.__hasExternalTextures)w.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ee=b.depthTexture;if(ue.__boundDepthTexture!==Ee){if(Ee!==null&&Pe.has(Ee)&&(b.width!==Ee.image.width||b.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(_e=!0);const Ne=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?N=Ne[U][k]:N=Ne[U],re=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?N=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[k]:N=Ne,v.copy(b.viewport),E.copy(b.scissor),D=b.scissorTest}else v.copy(P).multiplyScalar(Y).floor(),E.copy(ae).multiplyScalar(Y).floor(),D=Fe;if(F.bindFramebuffer(L.FRAMEBUFFER,N)&&H&&F.drawBuffers(b,N),F.viewport(v),F.scissor(E),F.setScissorTest(D),re){const ue=Pe.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,k)}else if(_e){const ue=Pe.get(b.texture),Ae=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ue.__webglTexture,k||0,Ae)}C=-1},this.readRenderTargetPixels=function(b,U,k,H,N,re,_e){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(he=he[_e]),he){F.bindFramebuffer(L.FRAMEBUFFER,he);try{const ue=b.texture,Ae=ue.format,Ne=ue.type;if(!Be.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&k>=0&&k<=b.height-N&&L.readPixels(U,k,H,N,Oe.convert(Ae),Oe.convert(Ne),re)}finally{const ue=T!==null?Pe.get(T).__webglFramebuffer:null;F.bindFramebuffer(L.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,H,N,re,_e){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(he=he[_e]),he){const ue=b.texture,Ae=ue.format,Ne=ue.type;if(!Be.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-H&&k>=0&&k<=b.height-N){F.bindFramebuffer(L.FRAMEBUFFER,he);const Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(U,k,H,N,Oe.convert(Ae),Oe.convert(Ne),0);const lt=T!==null?Pe.get(T).__webglFramebuffer:null;F.bindFramebuffer(L.FRAMEBUFFER,lt);const rt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mv(L,rt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Ee),L.deleteSync(rt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,k=0){b.isTexture!==!0&&(vl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(b.image.width*H),re=Math.floor(b.image.height*H),_e=U!==null?U.x:0,he=U!==null?U.y:0;w.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,_e,he,N,re),F.unbindTexture()},this.copyTextureToTexture=function(b,U,k=null,H=null,N=0){b.isTexture!==!0&&(vl("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let re,_e,he,ue,Ae,Ne;k!==null?(re=k.max.x-k.min.x,_e=k.max.y-k.min.y,he=k.min.x,ue=k.min.y):(re=b.image.width,_e=b.image.height,he=0,ue=0),H!==null?(Ae=H.x,Ne=H.y):(Ae=0,Ne=0);const Ee=Oe.convert(U.format),lt=Oe.convert(U.type);w.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const rt=L.getParameter(L.UNPACK_ROW_LENGTH),xt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),jt=L.getParameter(L.UNPACK_SKIP_PIXELS),st=L.getParameter(L.UNPACK_SKIP_ROWS),Ce=L.getParameter(L.UNPACK_SKIP_IMAGES),nn=b.isCompressedTexture?b.mipmaps[N]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,nn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,he),L.pixelStorei(L.UNPACK_SKIP_ROWS,ue),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Ae,Ne,re,_e,Ee,lt,nn.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Ae,Ne,nn.width,nn.height,Ee,nn.data):L.texSubImage2D(L.TEXTURE_2D,N,Ae,Ne,re,_e,Ee,lt,nn),L.pixelStorei(L.UNPACK_ROW_LENGTH,rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,st),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,H=null,N=0){b.isTexture!==!0&&(vl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0);let re,_e,he,ue,Ae,Ne,Ee,lt,rt;const xt=b.isCompressedTexture?b.mipmaps[N]:b.image;k!==null?(re=k.max.x-k.min.x,_e=k.max.y-k.min.y,he=k.max.z-k.min.z,ue=k.min.x,Ae=k.min.y,Ne=k.min.z):(re=xt.width,_e=xt.height,he=xt.depth,ue=0,Ae=0,Ne=0),H!==null?(Ee=H.x,lt=H.y,rt=H.z):(Ee=0,lt=0,rt=0);const jt=Oe.convert(U.format),st=Oe.convert(U.type);let Ce;if(U.isData3DTexture)w.setTexture3D(U,0),Ce=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)w.setTexture2DArray(U,0),Ce=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const nn=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),oi=L.getParameter(L.UNPACK_SKIP_PIXELS),cs=L.getParameter(L.UNPACK_SKIP_ROWS),On=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ce,N,Ee,lt,rt,re,_e,he,jt,st,xt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,N,Ee,lt,rt,re,_e,he,jt,xt.data):L.texSubImage3D(Ce,N,Ee,lt,rt,re,_e,he,jt,st,xt),L.pixelStorei(L.UNPACK_ROW_LENGTH,nn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,oi),L.pixelStorei(L.UNPACK_SKIP_ROWS,cs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,On),N===0&&U.generateMipmaps&&L.generateMipmap(Ce),F.unbindTexture()},this.initRenderTarget=function(b){Pe.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,F.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yh?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Wl?"display-p3":"srgb"}}class RT extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class CT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new B;class Zh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hd=new B,Vd=new pt,Gd=new pt,PT=new B,Wd=new Ke,$a=new B,Wc=new Ri,Xd=new Ke,Xc=new Xl;class LT extends Yn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qf,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ji),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingBox.expandByPoint($a)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingSphere.expandByPoint($a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wc.copy(this.boundingSphere),Wc.applyMatrix4(i),e.ray.intersectsSphere(Wc)!==!1&&(Xd.copy(i).invert(),Xc.copy(e.ray).applyMatrix4(Xd),!(this.boundingBox!==null&&Xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===k0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Vd.fromBufferAttribute(i.attributes.skinIndex,e),Gd.fromBufferAttribute(i.attributes.skinWeight,e),Hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Gd.getComponent(s);if(o!==0){const a=Vd.getComponent(s);Wd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(PT.copy(Hd).applyMatrix4(Wd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class p_ extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class m_ extends en{constructor(e=null,t=1,n=1,i,s,o,a,l,c=An,u=An,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new Ke,DT=new Ke;class Jh{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:DT;Yd.multiplyMatrices(a,t[s]),Yd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new m_(t,e,e,ii,pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new p_),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class uh extends wn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new Ke,qd=new Ke,Za=[],Kd=new Ji,IT=new Ke,Eo=new Yn,bo=new Ri;class NT extends Yn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,IT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),Kd.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(Kd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),bo.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),e.ray.intersectsSphere(bo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ws),qd.multiplyMatrices(n,ws),Eo.matrixWorld=qd,Eo.raycast(e,Za);for(let o=0,a=Za.length;o<a;o++){const l=Za[o];l.instanceId=s,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new m_(new Float32Array(i*this.count),i,this.count,Vh,pi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class __ extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fl=new B,Bl=new B,jd=new Ke,Ao=new Xl,Ja=new Ri,Yc=new B,$d=new B;class Qh extends Nt{constructor(e=new Ci,t=new __){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Fl.fromBufferAttribute(t,i-1),Bl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fl.distanceTo(Bl);e.setAttribute("lineDistance",new qi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(i),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;jd.copy(i).invert(),Ao.copy(e.ray).applyMatrix4(jd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=u.getX(g),M=u.getX(g+1),x=Qa(this,e,Ao,l,m,M);x&&t.push(x)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(d),m=Qa(this,e,Ao,l,g,p);m&&t.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=Qa(this,e,Ao,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=Qa(this,e,Ao,l,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qa(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Fl.fromBufferAttribute(o,i),Bl.fromBufferAttribute(o,s),t.distanceSqToSegment(Fl,Bl,Yc,$d)>n)return;Yc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Yc);if(!(l<e.near||l>e.far))return{distance:l,point:$d.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Zd=new B,Jd=new B;class UT extends Qh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Zd.fromBufferAttribute(t,i),Jd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zd.distanceTo(Jd);e.setAttribute("lineDistance",new qi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class OT extends Qh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class g_ extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qd=new Ke,hh=new Xl,el=new Ri,tl=new B;class FT extends Nt{constructor(e=new Ci,t=new g_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(i),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Qd.copy(i).invert(),hh.copy(e.ray).applyMatrix4(Qd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);tl.fromBufferAttribute(h,p),ep(tl,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)tl.fromBufferAttribute(h,_),ep(tl,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ep(r,e,t,n,i,s,o){const a=hh.distanceSqToPoint(r);if(a<t){const l=new B;hh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ef extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jm,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends ef{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function nl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function BT(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function kT(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function tp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function v_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ma{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zT extends ma{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kf,endingEnd:Kf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jf:s=e,a=2*t-n;break;case $f:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jf:o=e,l=2*n-t;break;case $f:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,M=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-d)*p+(1.5+d)*g+.5*_,y=d*p-d*g;for(let R=0;R!==a;++R)s[R]=m*o[u+R]+M*o[c+R]+x*o[l+R]+y*o[h+R];return s}}class HT extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class VT extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Li{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nl(t,this.TimeBufferType),this.values=nl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nl(e.times,Array),values:nl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new VT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new HT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&BT(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=ua;class ho extends Li{constructor(e,t,n){super(e,t,n)}}ho.prototype.ValueTypeName="bool";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=ca;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class x_ extends Li{}x_.prototype.ValueTypeName="color";class so extends Li{}so.prototype.ValueTypeName="number";class GT extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)wr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class oo extends Li{InterpolantFactoryMethodLinear(e){return new GT(this.times,this.values,this.getValueSize(),e)}}oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;class fo extends Li{constructor(e,t,n){super(e,t,n)}}fo.prototype.ValueTypeName="string";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=ca;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends Li{}ao.prototype.ValueTypeName="vector";class WT{constructor(e="",t=-1,n=[],i=z0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(YT(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Li.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=kT(l);l=tp(l,1,u),c=tp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new so(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];v_(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let M=0;M!==f[_].morphTargets.length;++M){const x=f[_];p.push(x.time),m.push(x.morphTarget===g?1:0)}i.push(new so(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(ao,d+".position",f,"pos",i),n(oo,d+".quaternion",f,"rot",i),n(ao,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function XT(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return so;case"vector":case"vector2":case"vector3":case"vector4":return ao;case"color":return x_;case"quaternion":return oo;case"bool":case"boolean":return ho;case"string":return fo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function YT(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=XT(r.type);if(r.times===void 0){const t=[],n=[];v_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const _r={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class qT{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const KT=new qT;class po{constructor(e){this.manager=e!==void 0?e:KT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}po.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi={};class jT extends Error{constructor(e,t){super(e),this.response=t}}class y_ extends po{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_r.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:i});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:x,value:y})=>{if(x)m.close();else{g+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,T=u.length;A<T;A++){const C=u[A];C.onProgress&&C.onProgress(R)}m.enqueue(y),M()}},x=>{m.error(x)})}}});return new Response(p)}else throw new jT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{_r.add(e,c);const u=Fi[e];delete Fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $T extends po{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_r.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ha("img");function l(){u(),_r.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ZT extends po{constructor(e){super(e)}load(e,t,n,i){const s=new en,o=new $T(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Kl extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const qc=new Ke,np=new B,ip=new B;class tf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;np.setFromMatrixPosition(e.matrixWorld),t.position.copy(np),ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ip),t.updateMatrixWorld(),qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JT extends tf{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=io*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class QT extends Kl{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new JT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rp=new Ke,wo=new B,Kc=new B;class eE extends tf{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),wo.setFromMatrixPosition(e.matrixWorld),n.position.copy(wo),Kc.copy(n.position),Kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kc),n.updateMatrixWorld(),i.makeTranslation(-wo.x,-wo.y,-wo.z),rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rp)}}class tE extends Kl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new eE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nE extends tf{constructor(){super(new jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jl extends Kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new nE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iE extends Kl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class rE extends po{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_r.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return _r.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_r.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});_r.add(e,l),s.manager.itemStart(e)}}const nf="\\[\\]\\.:\\/",sE=new RegExp("["+nf+"]","g"),rf="[^"+nf+"]",oE="[^"+nf.replace("\\.","")+"]",aE=/((?:WC+[\/:])*)/.source.replace("WC",rf),lE=/(WCOD+)?/.source.replace("WCOD",oE),cE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rf),uE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rf),hE=new RegExp("^"+aE+lE+cE+uE+"$"),fE=["material","materials","bones","map"];class dE{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sE,"")}static parseTrackName(e){const t=hE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);fE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=dE;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);function sp(r,e){if(e===H0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ah||e===Km){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ah)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class pE extends po{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new IE(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Jo.extractUrlBase(e);o=Jo.resolveURL(c,this.path)}else o=Jo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new y_(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===M_){try{o[it.KHR_BINARY_GLTF]=new NE(e)}catch(h){i&&i(h);return}s=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new qE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case it.KHR_MATERIALS_UNLIT:o[h]=new gE;break;case it.KHR_DRACO_MESH_COMPRESSION:o[h]=new UE(s,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[h]=new OE;break;case it.KHR_MESH_QUANTIZATION:o[h]=new FE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function mE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _E{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],sn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new tE(u),c.distance=h;break;case"spot":c=new QT(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class gE{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Yr}extendParams(e,t,n){const i=[];e.color=new Ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Mn))}return Promise.all(i)}}class vE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class xE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ft(a,a)}return Promise.all(s)}}class yE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class ME{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class SE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Mn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class TE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class EE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],sn),Promise.all(s)}}class bE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class AE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Mn)),Promise.all(s)}}class wE{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class RE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class CE{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class PE{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LE{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DE{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class IE{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Jn.TRIANGLES&&c.mode!==Jn.TRIANGLE_STRIP&&c.mode!==Jn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new Ke,p=new B,m=new wr,M=new B(1,1,1),x=new NT(_.geometry,_.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,g.compose(p,m,M));for(const y in l)if(y==="_COLOR_0"){const R=l[y];x.instanceColor=new uh(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);Nt.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const M_="glTF",Ro=12,op={JSON:1313821514,BIN:5130562};class NE{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ro),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==M_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ro,s=new DataView(e,Ro);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===op.JSON){const c=new Uint8Array(e,Ro+o,a);this.content=n.decode(c)}else if(l===op.BIN){const c=Ro+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=fh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=fh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ws[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(d)},a,c,sn,f)})})}}class OE{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class FE{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class S_ extends ma{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,M=1-p,x=m-f+h;for(let y=0;y!==a;y++){const R=o[g+y+a],A=o[g+y+l]*u,T=o[_+y+a],C=o[_+y]*u;s[y]=M*R+x*A+p*T+m*C}return s}}const BE=new wr;class kE extends S_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return BE.fromArray(s).normalize().toArray(s),s}}const Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ap={9728:An,9729:Wn,9984:Bm,9985:fl,9986:Oo,9987:Wi},lp={33071:mr,33648:Dl,10497:eo},jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},or={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zE={CUBICSPLINE:void 0,LINEAR:ua,STEP:ca},$c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ef({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),r.DefaultMaterial}function Or(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function GE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WE(r){let e;const t=r.extensions&&r.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zc(t.attributes):e=r.indices+":"+Zc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Zc(r.targets[n]);return e}function Zc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function dh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const YE=new Ke;class qE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new ZT(this.options.manager):this.textureLoader=new rE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new y_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Or(s,a,i),zi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Jo.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=jc[i.type],a=Ws[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new wn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=jc[i.type],c=Ws[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=t.cache.get(M);x||(g=new c(a,m*d,i.count*d/u),x=new CT(g,d/u),t.cache.add(M,x)),p=new Zh(x,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),p=new wn(g,l,_);if(i.sparse!==void 0){const m=jc.SCALAR,M=Ws[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new M(o[1],x,i.sparse.count*m),A=new c(o[2],y,i.sparse.count*l);a!==null&&(p=new wn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,C=R.length;T<C;T++){const O=R[T];if(p.setX(O,A[T*l]),l>=2&&p.setY(O,A[T*l+1]),l>=3&&p.setZ(O,A[T*l+2]),l>=4&&p.setW(O,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=ap[f.magFilter]||Wn,u.minFilter=ap[f.minFilter]||Wi,u.wrapS=lp[f.wrapS]||eo,u.wrapT=lp[f.wrapT]||eo,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new en(g);p.needsUpdate=!0,f(p)}),t.load(Jo.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),zi(h,o),h.userData.mimeType=o.mimeType||XE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[it.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new g_,bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new __,bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ef}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){const h=i[it.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Mn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=yi);const u=s.alphaMode||$c.OPAQUE;if(u===$c.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===$c.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Yr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ft(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Yr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Yr){const h=s.emissiveFactor;a.emissive=new Ge().setRGB(h[0],h[1],h[2],sn)}return s.emissiveTexture!==void 0&&o!==Yr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Mn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),zi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Or(i,h,s),h})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return cp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=WE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=cp(new Ci,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?HE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=o[d];let m;const M=c[d];if(p.mode===Jn.TRIANGLES||p.mode===Jn.TRIANGLE_STRIP||p.mode===Jn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new LT(g,M):new Yn(g,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Jn.TRIANGLE_STRIP?m.geometry=sp(m.geometry,Km):p.mode===Jn.TRIANGLE_FAN&&(m.geometry=sp(m.geometry,ah));else if(p.mode===Jn.LINES)m=new UT(g,M);else if(p.mode===Jn.LINE_STRIP)m=new Qh(g,M);else if(p.mode===Jn.LINE_LOOP)m=new OT(g,M);else if(p.mode===Jn.POINTS)m=new FT(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&GE(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),zi(m,s),p.extensions&&Or(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Or(i,h[0],s),h[0];const f=new qr;s.extensions&&Or(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Sn(Zm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new jh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ke;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Jh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let M=0,x=f.length;M<x;M++){const y=f[M],R=d[M],A=_[M],T=g[M],C=p[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const O=n._createAnimationTracks(y,R,A,T,C);if(O)for(let v=0;v<O.length;v++)m.push(O[v])}return new WT(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,YE)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new p_:c.length>1?u=new qr:c.length===1?u=c[0]:u=new Nt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),zi(u,s),s.extensions&&Or(n,u,s),s.matrix!==void 0){const h=new Ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new qr;n.name&&(s.name=i.createUniqueName(n.name)),zi(s,n),n.extensions&&Or(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof bi||f instanceof en)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];or[s.path]===or.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(or[s.path]){case or.weights:c=so;break;case or.rotation:c=oo;break;case or.position:case or.scale:c=ao;break;default:switch(n.itemSize){case 1:c=so;break;case 2:case 3:default:c=ao;break}break}const u=i.interpolation!==void 0?zE[i.interpolation]:ua,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+or[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dh(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof oo?kE:S_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function KE(r,e,t){const n=e.attributes,i=new Ji;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=dh(Ws[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new B,l=new B;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=dh(Ws[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ri;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function cp(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=fh[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return dt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),zi(r,e),KE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?VE(r,e.targets,t):r})}const jE=document.getElementById("machine_3d");let T_=window.innerWidth,E_=window.innerHeight;const lo=new Sn(75,T_/E_,.01,10);lo.position.z=-.5;lo.position.y=.4;lo.rotation.x=-.25;const mo=new RT,sf=new jl(16777215,2);sf.position.set(0,2,0);sf.lookAt(0,-1,-4);mo.add(sf);const of=new jl(16777215,2);of.position.set(4,2,0);of.lookAt(0,-1,-4);mo.add(of);const af=new jl(16777215,2);af.position.set(-4,2,0);af.lookAt(0,-1,-4);mo.add(af);const $E=new iE(16777215,2);mo.add($E);const ZE=new pE;let Ns;ZE.load("./trancheuse.glb",r=>{Ns=r.scene,Ns.position.set(0,-2,-5.25),Ns.rotation.y=2.3,mo.add(Ns)},void 0,r=>{console.error("Erreur lors du chargement du modèle GLB :",r)});const _a=new wT({antialias:!0,alpha:!0,canvas:jE});_a.setSize(T_,E_);_a.setClearColor(16777215,0);_a.setAnimationLoop(JE);function JE(r){_a.render(mo,lo)}function QE(){lo.aspect=window.innerWidth/window.innerHeight,lo.updateProjectionMatrix(),_a.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",QE);Vt.registerPlugin(Qe);const Jc=[{rotationY:-1},{rotationY:Math.PI/2},{rotationY:Math.PI},{rotationY:3*Math.PI/2},{rotationY:2*Math.PI}];Qe.create({trigger:"#machine_3d_section",start:"top 40%",end:"bottom 15%",onUpdate:r=>{if(Ns){const e=r.progress*4,t=Math.floor(e),n=Math.min(t+1,Jc.length-1),i=e-t;Ns.rotation.y=Zm.lerp(Jc[t].rotationY,Jc[n].rotationY,i)}}});var eb="1.1.14";function b_(r,e,t){return Math.max(r,Math.min(e,t))}function tb(r,e,t){return(1-t)*r+t*e}function nb(r,e,t,n){return tb(r,e,1-Math.exp(-t*n))}function ib(r,e){return(r%e+e)%e}var rb=class{constructor(){Le(this,"isRunning",!1);Le(this,"value",0);Le(this,"from",0);Le(this,"to",0);Le(this,"currentTime",0);Le(this,"lerp");Le(this,"duration");Le(this,"easing");Le(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=b_(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=nb(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function sb(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var ob=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Le(this,"width",0);Le(this,"height",0);Le(this,"scrollHeight",0);Le(this,"scrollWidth",0);Le(this,"debouncedResize");Le(this,"wrapperResizeObserver");Le(this,"contentResizeObserver");Le(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Le(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Le(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=sb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},A_=class{constructor(){Le(this,"events",{})}emit(r,...e){var n;let t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},up=100/6,ar={passive:!1},ab=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Le(this,"touchStart",{x:0,y:0});Le(this,"lastDelta",{x:0,y:0});Le(this,"window",{width:0,height:0});Le(this,"emitter",new A_);Le(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Le(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Le(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Le(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?up:n===2?this.window.width:1,s=n===1?up:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Le(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ar),this.element.addEventListener("touchstart",this.onTouchStart,ar),this.element.addEventListener("touchmove",this.onTouchMove,ar),this.element.addEventListener("touchend",this.onTouchEnd,ar)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ar),this.element.removeEventListener("touchstart",this.onTouchStart,ar),this.element.removeEventListener("touchmove",this.onTouchMove,ar),this.element.removeEventListener("touchend",this.onTouchEnd,ar)}},lb=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=y=>Math.min(1,1.001-Math.pow(2,-10*y)),lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:M=!0,__experimental__naiveDimensions:x=!1}={}){Le(this,"_isScrolling",!1);Le(this,"_isStopped",!1);Le(this,"_isLocked",!1);Le(this,"_preventNextNativeScrollEvent",!1);Le(this,"_resetVelocityTimeout",null);Le(this,"isTouching");Le(this,"time",0);Le(this,"userData",{});Le(this,"lastVelocity",0);Le(this,"velocity",0);Le(this,"direction",0);Le(this,"options");Le(this,"targetScroll");Le(this,"animatedScroll");Le(this,"animate",new rb);Le(this,"emitter",new A_);Le(this,"dimensions");Le(this,"virtualScroll");Le(this,"onPointerDown",r=>{r.button===1&&this.reset()});Le(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(this.isTouching=n.type==="touchstart"||n.type==="touchmove",this.options.syncTouch&&i&&n.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}const a=e===0&&t===0,l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>{var m,M,x;return p instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(p))||((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent"))||i&&((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent-touch"))||s&&((x=p.hasAttribute)==null?void 0:x.call(p,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const d=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(f)>5;g&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Le(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});window.lenisVersion=eb,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:M,__experimental__naiveDimensions:x},this.dimensions=new ob(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new ab(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(r){const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001)}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?f=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(f=r),f){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):r=b_(0,r,this.limit),r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}u||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?ib(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const w_=new lb;w_.on("scroll",Qe.update);Vt.ticker.add(r=>{w_.raf(r*1e3)});Vt.ticker.lagSmoothing(0);
