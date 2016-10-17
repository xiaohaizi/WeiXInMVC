define("biz_web/lib/highcharts-v4.2.1.js",[],function(t,e,i){
var n=window.Highcharts;
return delete window.Highcharts,function(t,e){
"object"==typeof i&&i.exports?i.exports=t.document?e(t):e:t.Highcharts=e(t);
}("undefined"!=typeof window?window:this,function(t){
function e(e,i){
var n="Highcharts error #"+e+": www.highcharts.com/errors/"+e;
if(i)throw Error(n);
t.console&&console.log(n);
}
function i(t,e,i){
this.options=e,this.elem=t,this.prop=i;
}
function n(){
var t,e,i=arguments,n={},s=function(t,e){
var i,n;
"object"!=typeof t&&(t={});
for(n in e)e.hasOwnProperty(n)&&(i=e[n],t[n]=i&&"object"==typeof i&&"[object Array]"!==Object.prototype.toString.call(i)&&"renderTo"!==n&&"number"!=typeof i.nodeType?s(t[n]||{},i):e[n]);
return t;
};
for(i[0]===!0&&(n=i[1],i=Array.prototype.slice.call(i,2)),e=i.length,t=0;e>t;t++)n=s(n,i[t]);
return n;
}
function s(t,e){
return parseInt(t,e||10);
}
function o(t){
return"string"==typeof t;
}
function r(t){
return t&&"object"==typeof t;
}
function a(t){
return"[object Array]"===Object.prototype.toString.call(t);
}
function h(t){
return"number"==typeof t;
}
function l(t){
return he.log(t)/he.LN10;
}
function c(t){
return he.pow(10,t);
}
function d(t,e){
for(var i=t.length;i--;)if(t[i]===e){
t.splice(i,1);
break;
}
}
function p(t){
return t!==E&&null!==t;
}
function u(t,e,i){
var n,s;
if(o(e))p(i)?t.setAttribute(e,i):t&&t.getAttribute&&(s=t.getAttribute(e));else if(p(e)&&r(e))for(n in e)t.setAttribute(n,e[n]);
return s;
}
function f(t){
return a(t)?t:[t];
}
function g(t,e,i){
return e?setTimeout(t,e,i):void t.call(0,i);
}
function m(t,e){
ke&&!Pe&&e&&e.opacity!==E&&(e.filter="alpha(opacity="+100*e.opacity+")"),$e(t.style,e);
}
function y(t,e,i,n,s){
return t=ae.createElement(t),e&&$e(t,e),s&&m(t,{
padding:0,
border:"none",
margin:0
}),i&&m(t,i),n&&n.appendChild(t),t;
}
function v(t,e){
var i=function(){};
return i.prototype=new t,$e(i.prototype,e),i;
}
function x(t,e){
return Array((e||2)+1-String(t).length).join(0)+t;
}
function b(t){
return 6e4*(_&&_(t)||j||0);
}
function k(t,e){
for(var i,n,s,o,r,a="{",h=!1,l=[];-1!==(a=t.indexOf(a));){
if(i=t.slice(0,a),h){
for(n=i.split(":"),s=n.shift().split("."),r=s.length,i=e,o=0;r>o;o++)i=i[s[o]];
n.length&&(n=n.join(":"),s=/\.([0-9])/,o=G.lang,r=void 0,/f$/.test(n)?(r=(r=n.match(s))?r[1]:-1,
null!==i&&(i=re.numberFormat(i,r,o.decimalPoint,n.indexOf(",")>-1?o.thousandsSep:""))):i=F(n,i));
}
l.push(i),t=t.slice(a+1),a=(h=!h)?"}":"{";
}
return l.push(t),l.join("");
}
function w(t){
return he.pow(10,ce(he.log(t)/he.LN10));
}
function S(t,e,i,n,s){
var o,r=t,i=Je(i,1);
for(o=t/i,e||(e=[1,2,2.5,5,10],n===!1&&(1===i?e=[1,2,5,10]:.1>=i&&(e=[1/i]))),n=0;n<e.length&&(r=e[n],
!(s&&r*i>=t||!s&&o<=(e[n]+(e[n+1]||e[n]))/2));n++);
return r*=i;
}
function T(t,e){
var i,n,s=t.length;
for(n=0;s>n;n++)t[n].safeI=n;
for(t.sort(function(t,n){
return i=e(t,n),0===i?t.safeI-n.safeI:i;
}),n=0;s>n;n++)delete t[n].safeI;
}
function A(t){
for(var e=t.length,i=t[0];e--;)t[e]<i&&(i=t[e]);
return i;
}
function C(t){
for(var e=t.length,i=t[0];e--;)t[e]>i&&(i=t[e]);
return i;
}
function P(t,e){
for(var i in t)t[i]&&t[i]!==e&&t[i].destroy&&t[i].destroy(),delete t[i];
}
function L(t){
W||(W=y(Be)),t&&W.appendChild(t),W.innerHTML="";
}
function M(t,e){
return parseFloat(t.toPrecision(e||14));
}
function I(t,e){
e.renderer.globalAnimation=Je(t,e.animation);
}
function O(){
var e=G.global,i=e.useUTC,n=i?"getUTC":"get",s=i?"setUTC":"set";
N=e.Date||t.Date,j=i&&e.timezoneOffset,_=i&&e.getTimezoneOffset,V=function(t,e,n,s,o,r){
var a;
return i?(a=N.UTC.apply(0,arguments),a+=b(a)):a=new N(t,e,Je(n,1),Je(s,0),Je(o,0),Je(r,0)).getTime(),
a;
},U=n+"Minutes",K=n+"Hours",Z=n+"Day",q=n+"Date",$=n+"Month",J=n+"FullYear",Q=s+"Milliseconds",
te=s+"Seconds",ee=s+"Minutes",ie=s+"Hours",ne=s+"Date",se=s+"Month",oe=s+"FullYear";
}
function D(t){
return this instanceof D?void this.init(t):new D(t);
}
function z(){}
function R(t,e,i,n){
this.axis=t,this.pos=e,this.type=i||"",this.isNew=!0,!i&&!n&&this.addLabel();
}
function B(t,e,i,n,s){
var o=t.chart.inverted;
this.axis=t,this.isNegative=i,this.options=e,this.x=n,this.total=null,this.points={},
this.stack=s,this.alignOptions={
align:e.align||(o?i?"left":"right":"center"),
verticalAlign:e.verticalAlign||(o?"middle":i?"bottom":"top"),
y:Je(e.y,o?4:i?14:-6),
x:Je(e.x,o?i?-6:6:0)
},this.textAlign=e.textAlign||(o?i?"right":"left":"center");
}
var E,X,H,W,G,F,Y,N,V,j,_,U,K,Z,q,$,J,Q,te,ee,ie,ne,se,oe,re,ae=t.document,he=Math,le=he.round,ce=he.floor,de=he.ceil,pe=he.max,ue=he.min,fe=he.abs,ge=he.cos,me=he.sin,ye=he.PI,ve=2*ye/360,xe=t.navigator&&t.navigator.userAgent||"",be=t.opera,ke=/(msie|trident|edge)/i.test(xe)&&!be,we=ae&&8===ae.documentMode,Se=!ke&&/AppleWebKit/.test(xe),Te=/Firefox/.test(xe),Ae=/(Mobile|Android|Windows Phone)/.test(xe),Ce="http://www.w3.org/2000/svg",Pe=ae&&ae.createElementNS&&!!ae.createElementNS(Ce,"svg").createSVGRect,Le=Te&&parseInt(xe.split("Firefox/")[1],10)<4,Me=ae&&!Pe&&!ke&&!!ae.createElement("canvas").getContext,Ie={},Oe=0,De=function(){},ze=[],Re=0,Be="div",Ee=/^[0-9]+$/,Xe=["plotTop","marginRight","marginBottom","plotLeft"],He={};
re=t.Highcharts?e(16,!0):{
win:t
},re.seriesTypes=He;
var We,Ge,Fe,Ye,Ne,Ve,je,_e,Ue,Ke,Ze,qe=[];
i.prototype={
dSetter:function(){
var t,e=this.paths[0],i=this.paths[1],n=[],s=this.now,o=e.length;
if(1===s)n=this.toD;else if(o===i.length&&1>s)for(;o--;)t=parseFloat(e[o]),n[o]=isNaN(t)?e[o]:s*parseFloat(i[o]-t)+t;else n=i;
this.elem.attr("d",n);
},
update:function(){
var t=this.elem,e=this.prop,i=this.now,n=this.options.step;
this[e+"Setter"]?this[e+"Setter"]():t.attr?t.element&&t.attr(e,i):t.style[e]=i+this.unit,
n&&n.call(t,i,this);
},
run:function(t,e,i){
var n,s=this,o=function(t){
return o.stopped?!1:s.step(t);
};
this.startTime=+new N,this.start=t,this.end=e,this.unit=i,this.now=this.start,this.pos=0,
o.elem=this.elem,o()&&1===qe.push(o)&&(o.timerId=setInterval(function(){
for(n=0;n<qe.length;n++)qe[n]()||qe.splice(n--,1);
qe.length||clearInterval(o.timerId);
},13));
},
step:function(t){
var e,i=+new N,n=this.options;
e=this.elem;
var s,o=n.complete,r=n.duration,a=n.curAnim;
if(e.attr&&!e.element)e=!1;else if(t||i>=r+this.startTime){
this.now=this.end,this.pos=1,this.update(),t=a[this.prop]=!0;
for(s in a)a[s]!==!0&&(t=!1);
t&&o&&o.call(e),e=!1;
}else this.pos=n.easing((i-this.startTime)/r),this.now=this.start+(this.end-this.start)*this.pos,
this.update(),e=!0;
return e;
},
initPath:function(t,e,i){
var n,s,o,e=e||"",r=t.shift,a=e.indexOf("C")>-1,h=a?7:3,e=e.split(" "),i=[].concat(i),l=function(t){
for(n=t.length;n--;)"M"===t[n]&&t.splice(n+1,0,t[n+1],t[n+2],t[n+1],t[n+2]);
};
if(a&&(l(e),l(i)),t.isArea&&(s=e.splice(e.length-6,6),o=i.splice(i.length-6,6)),
r<=i.length/h&&e.length===i.length)for(;r--;)i=[].concat(i).splice(0,h).concat(i);
if(t.shift=0,e.length)for(t=i.length;e.length<t;)r=[].concat(e).splice(e.length-h,h),
a&&(r[h-6]=r[h-2],r[h-5]=r[h-1]),e=e.concat(r);
return s&&(e=e.concat(s),i=i.concat(o)),[e,i];
}
};
var $e=re.extend=function(t,e){
var i;
t||(t={});
for(i in e)t[i]=e[i];
return t;
},Je=re.pick=function(){
var t,e,i=arguments,n=i.length;
for(t=0;n>t;t++)if(e=i[t],e!==E&&null!==e)return e;
},Qe=re.wrap=function(t,e,i){
var n=t[e];
t[e]=function(){
var t=Array.prototype.slice.call(arguments);
return t.unshift(n),i.apply(this,t);
};
};
F=function(t,e,i){
if(!p(e)||isNaN(e))return G.lang.invalidDate||"";
var n,t=Je(t,"%Y-%m-%d %H:%M:%S"),s=new N(e-b(e)),o=s[K](),r=s[Z](),a=s[q](),h=s[$](),l=s[J](),c=G.lang,d=c.weekdays,s=$e({
a:d[r].substr(0,3),
A:d[r],
d:x(a),
e:a,
w:r,
b:c.shortMonths[h],
B:c.months[h],
m:x(h+1),
y:l.toString().substr(2,2),
Y:l,
H:x(o),
k:o,
I:x(o%12||12),
l:o%12||12,
M:x(s[U]()),
p:12>o?"AM":"PM",
P:12>o?"am":"pm",
S:x(s.getSeconds()),
L:x(le(e%1e3),3)
},re.dateFormats);
for(n in s)for(;-1!==t.indexOf("%"+n);)t=t.replace("%"+n,"function"==typeof s[n]?s[n](e):s[n]);
return i?t.substr(0,1).toUpperCase()+t.substr(1):t;
},Y={
millisecond:1,
second:1e3,
minute:6e4,
hour:36e5,
day:864e5,
week:6048e5,
month:24192e5,
year:314496e5
},re.numberFormat=function(t,e,i,n){
var o=G.lang,t=+t||0,r=-1===e?Math.min((t.toString().split(".")[1]||"").length,20):isNaN(e=Math.abs(e))?2:e,e=void 0===i?o.decimalPoint:i,n=void 0===n?o.thousandsSep:n,o=0>t?"-":"",i=String(s(t=fe(t).toFixed(r))),a=i.length>3?i.length%3:0;
return o+(a?i.substr(0,a)+n:"")+i.substr(a).replace(/(\d{3})(?=\d)/g,"$1"+n)+(r?e+fe(t-i).toFixed(r).slice(2):"");
},Math.easeInOutSine=function(t){
return-.5*(Math.cos(Math.PI*t)-1);
},We=function(e,i){
var n=t.getComputedStyle(e,void 0);
return n&&s(n.getPropertyValue(i));
},Ge=function(t,e){
return e.indexOf?e.indexOf(t):[].indexOf.call(e,t);
},Ye=function(t,e){
return[].filter.call(t,e);
},Ve=function(t,e){
for(var i=[],n=0,s=t.length;s>n;n++)i[n]=e.call(t[n],t[n],n,t);
return i;
},Ne=function(e){
var i=ae.documentElement,e=e.getBoundingClientRect();
return{
top:e.top+(t.pageYOffset||i.scrollTop)-(i.clientTop||0),
left:e.left+(t.pageXOffset||i.scrollLeft)-(i.clientLeft||0)
};
},Ze=function(t){
for(var e=qe.length;e--;)qe[e].elem===t&&(qe[e].stopped=!0);
},Fe=function(t,e){
return Array.prototype.forEach.call(t,e);
},je=function(e,i,n){
function s(i){
i.target=i.srcElement||t,n.call(e,i);
}
var o=e.hcEvents=e.hcEvents||{};
e.addEventListener?e.addEventListener(i,n,!1):e.attachEvent&&(e.hcEventsIE||(e.hcEventsIE={}),
e.hcEventsIE[n.toString()]=s,e.attachEvent("on"+i,s)),o[i]||(o[i]=[]),o[i].push(n);
},_e=function(t,e,i){
function n(e,i){
t.removeEventListener?t.removeEventListener(e,i,!1):t.attachEvent&&(i=t.hcEventsIE[i.toString()],
t.detachEvent("on"+e,i));
}
function s(){
var i,s,o;
if(t.nodeName)for(o in e?(i={},i[e]=!0):i=a,i)if(a[o])for(s=a[o].length;s--;)n(o,a[o][s]);
}
var o,r,a=t.hcEvents;
a&&(e?(o=a[e]||[],i?(r=Ge(i,o),r>-1&&(o.splice(r,1),a[e]=o),n(e,i)):(s(),a[e]=[])):(s(),
t.hcEvents={}));
},Ue=function(t,e,i,n){
var s;
s=t.hcEvents;
var o,r,a,h,i=i||{};
if(ae.createEvent&&(t.dispatchEvent||t.fireEvent))s=ae.createEvent("Events"),s.initEvent(e,!0,!0),
s.target=t,$e(s,i),t.dispatchEvent?t.dispatchEvent(s):t.fireEvent(e,s);else if(s)for(s=s[e]||[],
o=s.length,a=function(){
i.defaultPrevented=!0;
},r=0;o>r;r++){
if(h=s[r],i.stopped)return;
i.preventDefault=a,i.target=t,i.type||(i.type=e),h.call(t,i)===!1&&i.preventDefault();
}
n&&!i.defaultPrevented&&n(i);
},Ke=function(t,e,s){
var o,a,l,c,d="";
r(s)||(o=arguments,s={
duration:o[2],
easing:o[3],
complete:o[4]
}),h(s.duration)||(s.duration=400),s.easing=Math[s.easing]||Math.easeInOutSine,s.curAnim=n(e);
for(c in e)l=new i(t,s,c),a=null,"d"===c?(l.paths=l.initPath(t,t.d,e.d),l.toD=e.d,
o=0,a=1):t.attr?o=t.attr(c):(o=parseFloat(We(t,c))||0,"opacity"!==c&&(d="px")),a||(a=e[c]),
a.match&&a.match("px")&&(a=a.replace(/px/g,"")),l.run(o,a,d);
},t.jQuery&&(t.jQuery.fn.highcharts=function(){
var t=[].slice.call(arguments);
return this[0]?t[0]?(new(re[o(t[0])?t.shift():"Chart"])(this[0],t[0],t[1]),this):ze[u(this[0],"data-highcharts-chart")]:void 0;
}),ae&&!ae.defaultView&&(We=function(t,e){
var i;
return i={
width:"clientWidth",
height:"clientHeight"
}[e],t.style[e]?s(t.style[e]):("opacity"===e&&(e="filter"),i?(t.style.zoom=1,t[i]-2*We(t,"padding")):(i=t.currentStyle[e.replace(/\-(\w)/g,function(t,e){
return e.toUpperCase();
})],"filter"===e&&(i=i.replace(/alpha\(opacity=([0-9]+)\)/,function(t,e){
return e/100;
})),""===i?1:s(i)));
}),Array.prototype.forEach||(Fe=function(t,e){
for(var i=0,n=t.length;n>i;i++)if(e.call(t[i],t[i],i,t)===!1)return i;
}),Array.prototype.indexOf||(Ge=function(t,e){
var i,n=0;
if(e)for(i=e.length;i>n;n++)if(e[n]===t)return n;
return-1;
}),Array.prototype.filter||(Ye=function(t,e){
for(var i=[],n=0,s=t.length;s>n;n++)e(t[n],n)&&i.push(t[n]);
return i;
}),re.Fx=i,re.inArray=Ge,re.each=Fe,re.grep=Ye,re.offset=Ne,re.map=Ve,re.addEvent=je,
re.removeEvent=_e,re.fireEvent=Ue,re.animate=Ke,re.stop=Ze,G={
colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
symbols:["circle","diamond","square","triangle","triangle-down"],
lang:{
loading:"Loading...",
months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),
shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
decimalPoint:".",
numericSymbols:"k,M,G,T,P,E".split(","),
resetZoom:"Reset zoom",
resetZoomTitle:"Reset zoom level 1:1",
thousandsSep:" "
},
global:{
useUTC:!0,
canvasToolsURL:"http://code.highcharts.com/modules/canvas-tools.js",
VMLRadialGradientURL:"http://code.highcharts.com/4.2.1/gfx/vml-radial-gradient.png"
},
chart:{
borderColor:"#4572A7",
borderRadius:0,
defaultSeriesType:"line",
ignoreHiddenSeries:!0,
spacing:[10,10,15,10],
backgroundColor:"#FFFFFF",
plotBorderColor:"#C0C0C0",
resetZoomButton:{
theme:{
zIndex:20
},
position:{
align:"right",
x:-10,
y:10
}
}
},
title:{
text:"Chart title",
align:"center",
margin:15,
style:{
color:"#333333",
fontSize:"18px"
}
},
subtitle:{
text:"",
align:"center",
style:{
color:"#555555"
}
},
plotOptions:{
line:{
allowPointSelect:!1,
showCheckbox:!1,
animation:{
duration:1e3
},
events:{},
lineWidth:2,
marker:{
lineWidth:0,
radius:4,
lineColor:"#FFFFFF",
states:{
hover:{
enabled:!0,
lineWidthPlus:1,
radiusPlus:2
},
select:{
fillColor:"#FFFFFF",
lineColor:"#000000",
lineWidth:2
}
}
},
point:{
events:{}
},
dataLabels:{
align:"center",
formatter:function(){
return null===this.y?"":re.numberFormat(this.y,-1);
},
style:{
color:"contrast",
fontSize:"11px",
fontWeight:"bold",
textShadow:"0 0 6px contrast, 0 0 3px contrast"
},
verticalAlign:"bottom",
x:0,
y:0,
padding:5
},
cropThreshold:300,
pointRange:0,
softThreshold:!0,
states:{
hover:{
lineWidthPlus:1,
marker:{},
halo:{
size:10,
opacity:.25
}
},
select:{
marker:{}
}
},
stickyTracking:!0,
turboThreshold:1e3
}
},
labels:{
style:{
position:"absolute",
color:"#3E576F"
}
},
legend:{
enabled:!0,
align:"center",
layout:"horizontal",
labelFormatter:function(){
return this.name;
},
borderColor:"#909090",
borderRadius:0,
navigation:{
activeColor:"#274b6d",
inactiveColor:"#CCC"
},
shadow:!1,
itemStyle:{
color:"#333333",
fontSize:"12px",
fontWeight:"bold"
},
itemHoverStyle:{
color:"#000"
},
itemHiddenStyle:{
color:"#CCC"
},
itemCheckboxStyle:{
position:"absolute",
width:"13px",
height:"13px"
},
symbolPadding:5,
verticalAlign:"bottom",
x:0,
y:0,
title:{
style:{
fontWeight:"bold"
}
}
},
loading:{
labelStyle:{
fontWeight:"bold",
position:"relative",
top:"45%"
},
style:{
position:"absolute",
backgroundColor:"white",
opacity:.5,
textAlign:"center"
}
},
tooltip:{
enabled:!0,
animation:Pe,
backgroundColor:"rgba(249, 249, 249, .85)",
borderWidth:1,
borderRadius:3,
dateTimeLabelFormats:{
millisecond:"%A, %b %e, %H:%M:%S.%L",
second:"%A, %b %e, %H:%M:%S",
minute:"%A, %b %e, %H:%M",
hour:"%A, %b %e, %H:%M",
day:"%A, %b %e, %Y",
week:"Week from %A, %b %e, %Y",
month:"%B %Y",
year:"%Y"
},
footerFormat:"",
headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',
pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
shadow:!0,
snap:Ae?25:10,
style:{
color:"#333333",
cursor:"default",
fontSize:"12px",
padding:"8px",
pointerEvents:"none",
whiteSpace:"nowrap"
}
},
credits:{
enabled:!0,
text:"Highcharts.com",
href:"http://www.highcharts.com",
position:{
align:"right",
x:-10,
verticalAlign:"bottom",
y:-5
},
style:{
cursor:"pointer",
color:"#909090",
fontSize:"9px"
}
}
};
var ti=G.plotOptions,ei=ti.line;
O(),D.prototype={
parsers:[{
regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
parse:function(t){
return[s(t[1]),s(t[2]),s(t[3]),parseFloat(t[4],10)];
}
},{
regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
parse:function(t){
return[s(t[1],16),s(t[2],16),s(t[3],16),1];
}
},{
regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(t){
return[s(t[1]),s(t[2]),s(t[3]),1];
}
}],
init:function(t){
var e,i,n,s;
if((this.input=t)&&t.stops)this.stops=Ve(t.stops,function(t){
return new D(t[1]);
});else for(n=this.parsers.length;n--&&!i;)s=this.parsers[n],(e=s.regex.exec(t))&&(i=s.parse(e));
this.rgba=i||[];
},
get:function(t){
var e,i=this.input,s=this.rgba;
return this.stops?(e=n(i),e.stops=[].concat(e.stops),Fe(this.stops,function(i,n){
e.stops[n]=[e.stops[n][0],i.get(t)];
})):e=s&&!isNaN(s[0])?"rgb"===t||!t&&1===s[3]?"rgb("+s[0]+","+s[1]+","+s[2]+")":"a"===t?s[3]:"rgba("+s.join(",")+")":i,
e;
},
brighten:function(t){
var e,i=this.rgba;
if(this.stops)Fe(this.stops,function(e){
e.brighten(t);
});else if(h(t)&&0!==t)for(e=0;3>e;e++)i[e]+=s(255*t),i[e]<0&&(i[e]=0),i[e]>255&&(i[e]=255);
return this;
},
setOpacity:function(t){
return this.rgba[3]=t,this;
}
},z.prototype={
opacity:1,
textProps:"direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
init:function(t,e){
this.element="span"===e?y(e):ae.createElementNS(Ce,e),this.renderer=t;
},
animate:function(t,e,i){
return e=Je(e,this.renderer.globalAnimation,!0),Ze(this),e?(e=n(e,{}),i&&(e.complete=i),
Ke(this,t,e)):this.attr(t,null,i),this;
},
colorGradient:function(t,e,i){
var s,o,r,h,l,c,d,u,f,g,m,y,v=this.renderer,x=[];
if(t.linearGradient?o="linearGradient":t.radialGradient&&(o="radialGradient"),o){
r=t[o],l=v.gradients,d=t.stops,g=i.radialReference,a(r)&&(t[o]=r={
x1:r[0],
y1:r[1],
x2:r[2],
y2:r[3],
gradientUnits:"userSpaceOnUse"
}),"radialGradient"===o&&g&&!p(r.gradientUnits)&&(h=r,r=n(r,v.getRadialAttr(g,h),{
gradientUnits:"userSpaceOnUse"
}));
for(m in r)"id"!==m&&x.push(m,r[m]);
for(m in d)x.push(d[m]);
x=x.join(","),l[x]?g=l[x].attr("id"):(r.id=g="highcharts-"+Oe++,l[x]=c=v.createElement(o).attr(r).add(v.defs),
c.radAttr=h,c.stops=[],Fe(d,function(t){
0===t[1].indexOf("rgba")?(s=D(t[1]),u=s.get("rgb"),f=s.get("a")):(u=t[1],f=1),t=v.createElement("stop").attr({
offset:t[0],
"stop-color":u,
"stop-opacity":f
}).add(c),c.stops.push(t);
})),y="url("+v.url+"#"+g+")",i.setAttribute(e,y),i.gradient=x,t.toString=function(){
return y;
};
}
},
applyTextShadow:function(t){
var e,i=this.element,n=-1!==t.indexOf("contrast"),o={},r=this.renderer.forExport,a=r||i.style.textShadow!==E&&!ke;
n&&(o.textShadow=t=t.replace(/contrast/g,this.renderer.getContrast(i.style.fill))),
(Se||r)&&(o.textRendering="geometricPrecision"),a?this.css(o):(this.fakeTS=!0,this.ySetter=this.xSetter,
e=[].slice.call(i.getElementsByTagName("tspan")),Fe(t.split(/\s?,\s?/g),function(t){
var n,o,r=i.firstChild,t=t.split(" ");
n=t[t.length-1],(o=t[t.length-2])&&Fe(e,function(t,e){
var a;
0===e&&(t.setAttribute("x",i.getAttribute("x")),e=i.getAttribute("y"),t.setAttribute("y",e||0),
null===e&&i.setAttribute("y",0)),a=t.cloneNode(1),u(a,{
"class":"highcharts-text-shadow",
fill:n,
stroke:n,
"stroke-opacity":1/pe(s(o),3),
"stroke-width":o,
"stroke-linejoin":"round"
}),i.insertBefore(a,r);
});
}));
},
attr:function(t,e,i){
var n,s,o,r=this.element,a=this;
if("string"==typeof t&&e!==E&&(n=t,t={},t[n]=e),"string"==typeof t)a=(this[t+"Getter"]||this._defaultGetter).call(this,t,r);else{
for(n in t)e=t[n],o=!1,this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(n)&&(s||(this.symbolAttr(t),
s=!0),o=!0),!this.rotation||"x"!==n&&"y"!==n||(this.doTransform=!0),o||(this[n+"Setter"]||this._defaultSetter).call(this,e,n,r),
this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(n)&&this.updateShadows(n,e);
this.doTransform&&(this.updateTransform(),this.doTransform=!1);
}
return i&&i(),a;
},
updateShadows:function(t,e){
for(var i=this.shadows,n=i.length;n--;)i[n].setAttribute(t,"height"===t?Math.max(e-(i[n].cutHeight||0),0):"d"===t?this.d:e);
},
addClass:function(t){
var e=this.element,i=u(e,"class")||"";
return-1===i.indexOf(t)&&u(e,"class",i+" "+t),this;
},
symbolAttr:function(t){
var e=this;
Fe("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(i){
e[i]=Je(t[i],e[i]);
}),e.attr({
d:e.renderer.symbols[e.symbolName](e.x,e.y,e.width,e.height,e)
});
},
clip:function(t){
return this.attr("clip-path",t?"url("+this.renderer.url+"#"+t.id+")":"none");
},
crisp:function(t){
var e,i,n={},s=t.strokeWidth||this.strokeWidth||0;
i=le(s)%2/2,t.x=ce(t.x||this.x||0)+i,t.y=ce(t.y||this.y||0)+i,t.width=ce((t.width||this.width||0)-2*i),
t.height=ce((t.height||this.height||0)-2*i),t.strokeWidth=s;
for(e in t)this[e]!==t[e]&&(this[e]=n[e]=t[e]);
return n;
},
css:function(t){
var e,i,n=this.styles,o={},r=this.element,a="";
if(e=!n,t&&t.color&&(t.fill=t.color),n)for(i in t)t[i]!==n[i]&&(o[i]=t[i],e=!0);
if(e){
if(e=this.textWidth=t&&t.width&&"text"===r.nodeName.toLowerCase()&&s(t.width)||this.textWidth,
n&&(t=$e(n,o)),this.styles=t,e&&(Me||!Pe&&this.renderer.forExport)&&delete t.width,
ke&&!Pe)m(this.element,t);else{
n=function(t,e){
return"-"+e.toLowerCase();
};
for(i in t)a+=i.replace(/([A-Z])/g,n)+":"+t[i]+";";
u(r,"style",a);
}
e&&this.added&&this.renderer.buildText(this);
}
return this;
},
on:function(t,e){
var i=this,n=i.element;
return H&&"click"===t?(n.ontouchstart=function(t){
i.touchEventFired=N.now(),t.preventDefault(),e.call(n,t);
},n.onclick=function(t){
(-1===xe.indexOf("Android")||N.now()-(i.touchEventFired||0)>1100)&&e.call(n,t);
}):n["on"+t]=e,this;
},
setRadialReference:function(t){
var e=this.renderer.gradients[this.element.gradient];
return this.element.radialReference=t,e&&e.radAttr&&e.animate(this.renderer.getRadialAttr(t,e.radAttr)),
this;
},
translate:function(t,e){
return this.attr({
translateX:t,
translateY:e
});
},
invert:function(){
return this.inverted=!0,this.updateTransform(),this;
},
updateTransform:function(){
var t=this.translateX||0,e=this.translateY||0,i=this.scaleX,n=this.scaleY,s=this.inverted,o=this.rotation,r=this.element;
s&&(t+=this.attr("width"),e+=this.attr("height")),t=["translate("+t+","+e+")"],s?t.push("rotate(90) scale(-1,1)"):o&&t.push("rotate("+o+" "+(r.getAttribute("x")||0)+" "+(r.getAttribute("y")||0)+")"),
(p(i)||p(n))&&t.push("scale("+Je(i,1)+" "+Je(n,1)+")"),t.length&&r.setAttribute("transform",t.join(" "));
},
toFront:function(){
var t=this.element;
return t.parentNode.appendChild(t),this;
},
align:function(t,e,i){
var n,s,r,a,h={};
return s=this.renderer,r=s.alignedObjects,t?(this.alignOptions=t,this.alignByTranslate=e,
(!i||o(i))&&(this.alignTo=n=i||"renderer",d(r,this),r.push(this),i=null)):(t=this.alignOptions,
e=this.alignByTranslate,n=this.alignTo),i=Je(i,s[n],s),n=t.align,s=t.verticalAlign,
r=(i.x||0)+(t.x||0),a=(i.y||0)+(t.y||0),("right"===n||"center"===n)&&(r+=(i.width-(t.width||0))/{
right:1,
center:2
}[n]),h[e?"translateX":"x"]=le(r),("bottom"===s||"middle"===s)&&(a+=(i.height-(t.height||0))/({
bottom:1,
middle:2
}[s]||1)),h[e?"translateY":"y"]=le(a),this[this.placed?"animate":"attr"](h),this.placed=!0,
this.alignAttr=h,this;
},
getBBox:function(t,e){
var i,n,s,o,r=this.renderer,a=this.element,h=this.styles;
n=this.textStr;
var l,c,d,p=a.style,u=r.cache,f=r.cacheKeys;
if(s=Je(e,this.rotation),o=s*ve,n!==E&&(d=["",s||0,h&&h.fontSize,a.style.width].join(","),
d=""===n||Ee.test(n)?"num:"+n.toString().length+d:n+d),d&&!t&&(i=u[d]),!i){
if(a.namespaceURI===Ce||r.forExport){
try{
c=this.fakeTS&&function(t){
Fe(a.querySelectorAll(".highcharts-text-shadow"),function(e){
e.style.display=t;
});
},Te&&p.textShadow?(l=p.textShadow,p.textShadow=""):c&&c("none"),i=a.getBBox?$e({},a.getBBox()):{
width:a.offsetWidth,
height:a.offsetHeight
},l?p.textShadow=l:c&&c("");
}catch(g){}
(!i||i.width<0)&&(i={
width:0,
height:0
});
}else i=this.htmlGetBBox();
if(r.isSVG&&(r=i.width,n=i.height,ke&&h&&"11px"===h.fontSize&&"16.9"===n.toPrecision(3)&&(i.height=n=14),
s&&(i.width=fe(n*me(o))+fe(r*ge(o)),i.height=fe(n*ge(o))+fe(r*me(o)))),d){
for(;f.length>250;)delete u[f.shift()];
u[d]||f.push(d),u[d]=i;
}
}
return i;
},
show:function(t){
return this.attr({
visibility:t?"inherit":"visible"
});
},
hide:function(){
return this.attr({
visibility:"hidden"
});
},
fadeOut:function(t){
var e=this;
e.animate({
opacity:0
},{
duration:t||150,
complete:function(){
e.attr({
y:-9999
});
}
});
},
add:function(t){
var e,i=this.renderer,n=this.element;
return t&&(this.parentGroup=t),this.parentInverted=t&&t.inverted,void 0!==this.textStr&&i.buildText(this),
this.added=!0,(!t||t.handleZ||this.zIndex)&&(e=this.zIndexSetter()),e||(t?t.element:i.box).appendChild(n),
this.onAdd&&this.onAdd(),this;
},
safeRemoveChild:function(t){
var e=t.parentNode;
e&&e.removeChild(t);
},
destroy:function(){
var t,e,i=this,n=i.element||{},s=i.shadows,o=i.renderer.isSVG&&"SPAN"===n.nodeName&&i.parentGroup;
if(n.onclick=n.onmouseout=n.onmouseover=n.onmousemove=n.point=null,Ze(i),i.clipPath&&(i.clipPath=i.clipPath.destroy()),
i.stops){
for(e=0;e<i.stops.length;e++)i.stops[e]=i.stops[e].destroy();
i.stops=null;
}
for(i.safeRemoveChild(n),s&&Fe(s,function(t){
i.safeRemoveChild(t);
});o&&o.div&&0===o.div.childNodes.length;)n=o.parentGroup,i.safeRemoveChild(o.div),
delete o.div,o=n;
i.alignTo&&d(i.renderer.alignedObjects,i);
for(t in i)delete i[t];
return null;
},
shadow:function(t,e,i){
var n,s,o,r,a,h,l=[],c=this.element;
if(t){
for(r=Je(t.width,3),a=(t.opacity||.15)/r,h=this.parentInverted?"(-1,-1)":"("+Je(t.offsetX,1)+", "+Je(t.offsetY,1)+")",
n=1;r>=n;n++)s=c.cloneNode(0),o=2*r+1-2*n,u(s,{
isShadow:"true",
stroke:t.color||"black",
"stroke-opacity":a*n,
"stroke-width":o,
transform:"translate"+h,
fill:"none"
}),i&&(u(s,"height",pe(u(s,"height")-o,0)),s.cutHeight=o),e?e.element.appendChild(s):c.parentNode.insertBefore(s,c),
l.push(s);
this.shadows=l;
}
return this;
},
xGetter:function(t){
return"circle"===this.element.nodeName&&(t={
x:"cx",
y:"cy"
}[t]||t),this._defaultGetter(t);
},
_defaultGetter:function(t){
return t=Je(this[t],this.element?this.element.getAttribute(t):null,0),/^[\-0-9\.]+$/.test(t)&&(t=parseFloat(t)),
t;
},
dSetter:function(t,e,i){
t&&t.join&&(t=t.join(" ")),/(NaN| {2}|^$)/.test(t)&&(t="M 0 0"),i.setAttribute(e,t),
this[e]=t;
},
dashstyleSetter:function(t){
var e;
if(t=t&&t.toLowerCase()){
for(t=t.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(","),
e=t.length;e--;)t[e]=s(t[e])*this["stroke-width"];
t=t.join(",").replace("NaN","none"),this.element.setAttribute("stroke-dasharray",t);
}
},
alignSetter:function(t){
this.element.setAttribute("text-anchor",{
left:"start",
center:"middle",
right:"end"
}[t]);
},
opacitySetter:function(t,e,i){
this[e]=t,i.setAttribute(e,t);
},
titleSetter:function(t){
var e=this.element.getElementsByTagName("title")[0];
e||(e=ae.createElementNS(Ce,"title"),this.element.appendChild(e)),e.appendChild(ae.createTextNode(String(Je(t),"").replace(/<[^>]*>/g,"")));
},
textSetter:function(t){
t!==this.textStr&&(delete this.bBox,this.textStr=t,this.added&&this.renderer.buildText(this));
},
fillSetter:function(t,e,i){
"string"==typeof t?i.setAttribute(e,t):t&&this.colorGradient(t,e,i);
},
visibilitySetter:function(t,e,i){
"inherit"===t?i.removeAttribute(e):i.setAttribute(e,t);
},
zIndexSetter:function(t,e){
var i,n,o,r=this.renderer,a=this.parentGroup,r=(a||r).element||r.box,h=this.element;
i=this.added;
var l;
if(p(t)&&(h.setAttribute(e,t),t=+t,this[e]===t&&(i=!1),this[e]=t),i){
for((t=this.zIndex)&&a&&(a.handleZ=!0),a=r.childNodes,l=0;l<a.length&&!o;l++)i=a[l],
n=u(i,"zIndex"),i!==h&&(s(n)>t||!p(t)&&p(n))&&(r.insertBefore(h,i),o=!0);
o||r.appendChild(h);
}
return o;
},
_defaultSetter:function(t,e,i){
i.setAttribute(e,t);
}
},z.prototype.yGetter=z.prototype.xGetter,z.prototype.translateXSetter=z.prototype.translateYSetter=z.prototype.rotationSetter=z.prototype.verticalAlignSetter=z.prototype.scaleXSetter=z.prototype.scaleYSetter=function(t,e){
this[e]=t,this.doTransform=!0;
},z.prototype["stroke-widthSetter"]=z.prototype.strokeSetter=function(t,e,i){
this[e]=t,this.stroke&&this["stroke-width"]?(this.strokeWidth=this["stroke-width"],
z.prototype.fillSetter.call(this,this.stroke,"stroke",i),i.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===e&&0===t&&this.hasStroke&&(i.removeAttribute("stroke"),
this.hasStroke=!1);
};
var ii=function(){
this.init.apply(this,arguments);
};
ii.prototype={
Element:z,
init:function(e,i,n,s,o,r){
var a,s=this.createElement("svg").attr({
version:"1.1"
}).css(this.getStyle(s));
a=s.element,e.appendChild(a),-1===e.innerHTML.indexOf("xmlns")&&u(a,"xmlns",Ce),
this.isSVG=!0,this.box=a,this.boxWrapper=s,this.alignedObjects=[],this.url=(Te||Se)&&ae.getElementsByTagName("base").length?t.location.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"",
this.createElement("desc").add().element.appendChild(ae.createTextNode("Created with Highcharts 4.2.1")),
this.defs=this.createElement("defs").add(),this.allowHTML=r,this.forExport=o,this.gradients={},
this.cache={},this.cacheKeys=[],this.setSize(i,n,!1);
var h;
Te&&e.getBoundingClientRect&&(this.subPixelFix=i=function(){
m(e,{
left:0,
top:0
}),h=e.getBoundingClientRect(),m(e,{
left:de(h.left)-h.left+"px",
top:de(h.top)-h.top+"px"
});
},i(),je(t,"resize",i));
},
getStyle:function(t){
return this.style=$e({
fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
fontSize:"12px"
},t);
},
isHidden:function(){
return!this.boxWrapper.getBBox().width;
},
destroy:function(){
var e=this.defs;
return this.box=null,this.boxWrapper=this.boxWrapper.destroy(),P(this.gradients||{}),
this.gradients=null,e&&(this.defs=e.destroy()),this.subPixelFix&&_e(t,"resize",this.subPixelFix),
this.alignedObjects=null;
},
createElement:function(t){
var e=new this.Element;
return e.init(this,t),e;
},
draw:function(){},
getRadialAttr:function(t,e){
return{
cx:t[0]-t[2]/2+e.cx*t[2],
cy:t[1]-t[2]/2+e.cy*t[2],
r:e.r*t[2]
};
},
buildText:function(t){
for(var e,i,n=t.element,o=this,r=o.forExport,a=Je(t.textStr,"").toString(),h=-1!==a.indexOf("<"),l=n.childNodes,c=u(n,"x"),d=t.styles,p=t.textWidth,f=d&&d.lineHeight,g=d&&d.textShadow,y=d&&"ellipsis"===d.textOverflow,v=l.length,x=p&&!t.added&&this.box,b=function(t){
return f?s(f):o.fontMetrics(/(px|em)$/.test(t&&t.style.fontSize)?t.style.fontSize:d&&d.fontSize||o.style.fontSize||12,t).h;
},k=function(t){
return t.replace(/&lt;/g,"<").replace(/&gt;/g,">");
};v--;)n.removeChild(l[v]);
h||g||y||-1!==a.indexOf(" ")?(e=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,
x&&x.appendChild(n),a=h?a.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[a],
""===a[a.length-1]&&a.pop(),Fe(a,function(s,a){
var h,l=0,s=s.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");
h=s.split("|||"),Fe(h,function(s){
if(""!==s||1===h.length){
var f,g={},v=ae.createElementNS(Ce,"tspan");
if(e.test(s)&&(f=s.match(e)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),u(v,"style",f)),
i.test(s)&&!r&&(u(v,"onclick",'location.href="'+s.match(i)[1]+'"'),m(v,{
cursor:"pointer"
})),s=k(s.replace(/<(.|\n)*?>/g,"")||" ")," "!==s){
if(v.appendChild(ae.createTextNode(s)),l?g.dx=0:a&&null!==c&&(g.x=c),u(v,g),n.appendChild(v),
!l&&a&&(!Pe&&r&&m(v,{
display:"block"
}),u(v,"dy",b(v))),p){
for(var x,w,S,g=s.replace(/([^\^])-/g,"$1- ").split(" "),T=h.length>1||a||g.length>1&&"nowrap"!==d.whiteSpace,A=[],C=b(v),P=1,L=t.rotation,M=s,I=M.length;(T||y)&&(g.length||A.length);)t.rotation=0,
x=t.getBBox(!0),S=x.width,!Pe&&o.forExport&&(S=o.measureSpanWidth(v.firstChild.data,t.styles)),
x=S>p,void 0===w&&(w=x),y&&w?(I/=2,""===M||!x&&.5>I?g=[]:(x&&(w=!0),M=s.substring(0,M.length+(x?-1:1)*de(I)),
g=[M+(p>3?"…":"")],v.removeChild(v.firstChild))):x&&1!==g.length?(v.removeChild(v.firstChild),
A.unshift(g.pop())):(g=A,A=[],g.length&&(P++,v=ae.createElementNS(Ce,"tspan"),u(v,{
dy:C,
x:c
}),f&&u(v,"style",f),n.appendChild(v)),S>p&&(p=S)),g.length&&v.appendChild(ae.createTextNode(g.join(" ").replace(/- /g,"-")));
w&&t.attr("title",t.textStr),t.rotation=L;
}
l++;
}
}
});
}),x&&x.removeChild(n),g&&t.applyTextShadow&&t.applyTextShadow(g)):n.appendChild(ae.createTextNode(k(a)));
},
getContrast:function(t){
return t=D(t).rgba,t[0]+t[1]+t[2]>384?"#000000":"#FFFFFF";
},
button:function(t,e,i,s,o,r,a,h,l){
var c,d,p,u,f,g,m=this.label(t,e,i,l,null,null,null,null,"button"),y=0,t={
x1:0,
y1:0,
x2:0,
y2:1
},o=n({
"stroke-width":1,
stroke:"#CCCCCC",
fill:{
linearGradient:t,
stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]
},
r:2,
padding:5,
style:{
color:"black"
}
},o);
return p=o.style,delete o.style,r=n(o,{
stroke:"#68A",
fill:{
linearGradient:t,
stops:[[0,"#FFF"],[1,"#ACF"]]
}
},r),u=r.style,delete r.style,a=n(o,{
stroke:"#68A",
fill:{
linearGradient:t,
stops:[[0,"#9BD"],[1,"#CDF"]]
}
},a),f=a.style,delete a.style,h=n(o,{
style:{
color:"#CCC"
}
},h),g=h.style,delete h.style,je(m.element,ke?"mouseover":"mouseenter",function(){
3!==y&&m.attr(r).css(u);
}),je(m.element,ke?"mouseout":"mouseleave",function(){
3!==y&&(c=[o,r,a][y],d=[p,u,f][y],m.attr(c).css(d));
}),m.setState=function(t){
(m.state=y=t)?2===t?m.attr(a).css(f):3===t&&m.attr(h).css(g):m.attr(o).css(p);
},m.on("click",function(t){
3!==y&&s.call(m,t);
}).attr(o).css($e({
cursor:"default"
},p));
},
crispLine:function(t,e){
return t[1]===t[4]&&(t[1]=t[4]=le(t[1])-e%2/2),t[2]===t[5]&&(t[2]=t[5]=le(t[2])+e%2/2),
t;
},
path:function(t){
var e={
fill:"none"
};
return a(t)?e.d=t:r(t)&&$e(e,t),this.createElement("path").attr(e);
},
circle:function(t,e,i){
return t=r(t)?t:{
x:t,
y:e,
r:i
},e=this.createElement("circle"),e.xSetter=function(t){
this.element.setAttribute("cx",t);
},e.ySetter=function(t){
this.element.setAttribute("cy",t);
},e.attr(t);
},
arc:function(t,e,i,n,s,o){
return r(t)&&(e=t.y,i=t.r,n=t.innerR,s=t.start,o=t.end,t=t.x),t=this.symbol("arc",t||0,e||0,i||0,i||0,{
innerR:n||0,
start:s||0,
end:o||0
}),t.r=i,t;
},
rect:function(t,e,i,n,s,o){
var s=r(t)?t.r:s,a=this.createElement("rect"),t=r(t)?t:t===E?{}:{
x:t,
y:e,
width:pe(i,0),
height:pe(n,0)
};
return o!==E&&(t.strokeWidth=o,t=a.crisp(t)),s&&(t.r=s),a.rSetter=function(t){
u(this.element,{
rx:t,
ry:t
});
},a.attr(t);
},
setSize:function(t,e,i){
var n=this.alignedObjects,s=n.length;
for(this.width=t,this.height=e,this.boxWrapper[Je(i,!0)?"animate":"attr"]({
width:t,
height:e
});s--;)n[s].align();
},
g:function(t){
var e=this.createElement("g");
return p(t)?e.attr({
"class":"highcharts-"+t
}):e;
},
image:function(t,e,i,n,s){
var o={
preserveAspectRatio:"none"
};
return arguments.length>1&&$e(o,{
x:e,
y:i,
width:n,
height:s
}),o=this.createElement("image").attr(o),o.element.setAttributeNS?o.element.setAttributeNS("http://www.w3.org/1999/xlink","href",t):o.element.setAttribute("hc-svg-href",t),
o;
},
symbol:function(t,e,i,n,s,o){
var r,a,h,l=this.symbols[t],l=l&&l(le(e),le(i),n,s,o),c=/^url\((.*?)\)$/;
return l?(r=this.path(l),$e(r,{
symbolName:t,
x:e,
y:i,
width:n,
height:s
}),o&&$e(r,o)):c.test(t)&&(h=function(t,e){
t.element&&(t.attr({
width:e[0],
height:e[1]
}),t.alignByTranslate||t.translate(le((n-e[0])/2),le((s-e[1])/2)));
},a=t.match(c)[1],t=Ie[a]||o&&o.width&&o.height&&[o.width,o.height],r=this.image(a).attr({
x:e,
y:i
}),r.isImg=!0,t?h(r,t):(r.attr({
width:0,
height:0
}),y("img",{
onload:function(){
0===this.width&&(m(this,{
position:"absolute",
top:"-999em"
}),ae.body.appendChild(this)),h(r,Ie[a]=[this.width,this.height]),this.parentNode&&this.parentNode.removeChild(this);
},
src:a
}))),r;
},
symbols:{
circle:function(t,e,i,n){
var s=.166*i;
return["M",t+i/2,e,"C",t+i+s,e,t+i+s,e+n,t+i/2,e+n,"C",t-s,e+n,t-s,e,t+i/2,e,"Z"];
},
square:function(t,e,i,n){
return["M",t,e,"L",t+i,e,t+i,e+n,t,e+n,"Z"];
},
triangle:function(t,e,i,n){
return["M",t+i/2,e,"L",t+i,e+n,t,e+n,"Z"];
},
"triangle-down":function(t,e,i,n){
return["M",t,e,"L",t+i,e,t+i/2,e+n,"Z"];
},
diamond:function(t,e,i,n){
return["M",t+i/2,e,"L",t+i,e+n/2,t+i/2,e+n,t,e+n/2,"Z"];
},
arc:function(t,e,i,n,s){
var o=s.start,i=s.r||i||n,r=s.end-.001,n=s.innerR,a=s.open,h=ge(o),l=me(o),c=ge(r),r=me(r),s=s.end-o<ye?0:1;
return["M",t+i*h,e+i*l,"A",i,i,0,s,1,t+i*c,e+i*r,a?"M":"L",t+n*c,e+n*r,"A",n,n,0,s,0,t+n*h,e+n*l,a?"":"Z"];
},
callout:function(t,e,i,n,s){
var o,r=ue(s&&s.r||0,i,n),a=r+6,h=s&&s.anchorX,s=s&&s.anchorY;
return o=["M",t+r,e,"L",t+i-r,e,"C",t+i,e,t+i,e,t+i,e+r,"L",t+i,e+n-r,"C",t+i,e+n,t+i,e+n,t+i-r,e+n,"L",t+r,e+n,"C",t,e+n,t,e+n,t,e+n-r,"L",t,e+r,"C",t,e,t,e,t+r,e],
h&&h>i&&s>e+a&&e+n-a>s?o.splice(13,3,"L",t+i,s-6,t+i+6,s,t+i,s+6,t+i,e+n-r):h&&0>h&&s>e+a&&e+n-a>s?o.splice(33,3,"L",t,s+6,t-6,s,t,s-6,t,e+r):s&&s>n&&h>t+a&&t+i-a>h?o.splice(23,3,"L",h+6,e+n,h,e+n+6,h-6,e+n,t+r,e+n):s&&0>s&&h>t+a&&t+i-a>h&&o.splice(3,3,"L",h-6,e,h,e-6,h+6,e,i-r,e),
o;
}
},
clipRect:function(t,e,i,n){
var s="highcharts-"+Oe++,o=this.createElement("clipPath").attr({
id:s
}).add(this.defs),t=this.rect(t,e,i,n,0).add(o);
return t.id=s,t.clipPath=o,t.count=0,t;
},
text:function(t,e,i,n){
var s=Me||!Pe&&this.forExport,o={};
return!n||!this.allowHTML&&this.forExport?(o.x=Math.round(e||0),i&&(o.y=Math.round(i)),
(t||0===t)&&(o.text=t),t=this.createElement("text").attr(o),s&&t.css({
position:"absolute"
}),n||(t.xSetter=function(t,e,i){
var n,s,o=i.getElementsByTagName("tspan"),r=i.getAttribute(e);
for(s=0;s<o.length;s++)n=o[s],n.getAttribute(e)===r&&n.setAttribute(e,t);
i.setAttribute(e,t);
}),t):this.html(t,e,i);
},
fontMetrics:function(e,i){
var n,o,e=e||this.style.fontSize;
return!e&&i&&t.getComputedStyle&&(i=i.element||i,e=(n=t.getComputedStyle(i,""))&&n.fontSize),
e=/px/.test(e)?s(e):/em/.test(e)?12*parseFloat(e):12,n=24>e?e+3:le(1.2*e),o=le(.8*n),
{
h:n,
b:o,
f:e
};
},
rotCorr:function(t,e,i){
var n=t;
return e&&i&&(n=pe(n*ge(e*ve),4)),{
x:-t/3*me(e*ve),
y:n
};
},
label:function(t,e,i,s,o,r,a,h,l){
var c,d,u,f,g,m,y,v,x,b,k,w=this,S=w.g(l),T=w.text("",0,0,a).attr({
zIndex:1
}),A=0,C=3,P=0,L=0,M={};
x=function(){
var t,e;
t=T.element.style,d=(void 0===u||void 0===f||S.styles.textAlign)&&p(T.textStr)&&T.getBBox(),
S.width=(u||d.width||0)+2*C+P,S.height=(f||d.height||0)+2*C,y=C+w.fontMetrics(t&&t.fontSize,T).b,
v&&(c||(t=L,e=(h?-y:0)+L,S.box=c=s?w.symbol(s,t,e,S.width,S.height,M):w.rect(t,e,S.width,S.height,0,M["stroke-width"]),
c.isImg||c.attr("fill","none"),c.add(S)),c.isImg||c.attr($e({
width:le(S.width),
height:le(S.height)
},M)),M=null);
},b=function(){
var t,e=S.styles,e=e&&e.textAlign,i=P+C;
t=h?0:y,p(u)&&d&&("center"===e||"right"===e)&&(i+={
center:.5,
right:1
}[e]*(u-d.width)),(i!==T.x||t!==T.y)&&(T.attr("x",i),t!==E&&T.attr("y",t)),T.x=i,
T.y=t;
},k=function(t,e){
c?c.attr(t,e):M[t]=e;
},S.onAdd=function(){
T.add(S),S.attr({
text:t||0===t?t:"",
x:e,
y:i
}),c&&p(o)&&S.attr({
anchorX:o,
anchorY:r
});
},S.widthSetter=function(t){
u=t;
},S.heightSetter=function(t){
f=t;
},S.paddingSetter=function(t){
p(t)&&t!==C&&(C=S.padding=t,b());
},S.paddingLeftSetter=function(t){
p(t)&&t!==P&&(P=t,b());
},S.alignSetter=function(t){
t={
left:0,
center:.5,
right:1
}[t],t!==A&&(A=t,d&&S.attr({
x:e
}));
},S.textSetter=function(t){
t!==E&&T.textSetter(t),x(),b();
},S["stroke-widthSetter"]=function(t,e){
t&&(v=!0),L=t%2/2,k(e,t);
},S.strokeSetter=S.fillSetter=S.rSetter=function(t,e){
"fill"===e&&t&&(v=!0),k(e,t);
},S.anchorXSetter=function(t,e){
o=t,k(e,le(t)-L-g);
},S.anchorYSetter=function(t,e){
r=t,k(e,t-m);
},S.xSetter=function(t){
S.x=t,A&&(t-=A*((u||d.width)+2*C)),g=le(t),S.attr("translateX",g);
},S.ySetter=function(t){
m=S.y=le(t),S.attr("translateY",m);
};
var I=S.css;
return $e(S,{
css:function(t){
if(t){
var e={},t=n(t);
Fe(S.textProps,function(i){
t[i]!==E&&(e[i]=t[i],delete t[i]);
}),T.css(e);
}
return I.call(S,t);
},
getBBox:function(){
return{
width:d.width+2*C,
height:d.height+2*C,
x:d.x-C,
y:d.y-C
};
},
shadow:function(t){
return c&&c.shadow(t),S;
},
destroy:function(){
_e(S.element,"mouseenter"),_e(S.element,"mouseleave"),T&&(T=T.destroy()),c&&(c=c.destroy()),
z.prototype.destroy.call(S),S=w=x=b=k=null;
}
});
}
},X=ii,$e(z.prototype,{
htmlCss:function(t){
var e=this.element;
return(e=t&&"SPAN"===e.tagName&&t.width)&&(delete t.width,this.textWidth=e,this.updateTransform()),
t&&"ellipsis"===t.textOverflow&&(t.whiteSpace="nowrap",t.overflow="hidden"),this.styles=$e(this.styles,t),
m(this.element,t),this;
},
htmlGetBBox:function(){
var t=this.element;
return"text"===t.nodeName&&(t.style.position="absolute"),{
x:t.offsetLeft,
y:t.offsetTop,
width:t.offsetWidth,
height:t.offsetHeight
};
},
htmlUpdateTransform:function(){
if(this.added){
var t=this.renderer,e=this.element,i=this.translateX||0,n=this.translateY||0,o=this.x||0,r=this.y||0,a=this.textAlign||"left",h={
left:0,
center:.5,
right:1
}[a],l=this.shadows,c=this.styles;
if(m(e,{
marginLeft:i,
marginTop:n
}),l&&Fe(l,function(t){
m(t,{
marginLeft:i+1,
marginTop:n+1
});
}),this.inverted&&Fe(e.childNodes,function(i){
t.invertChild(i,e);
}),"SPAN"===e.tagName){
var d,u=this.rotation,f=s(this.textWidth),g=[u,a,e.innerHTML,this.textWidth,this.textAlign].join(",");
g!==this.cTT&&(d=t.fontMetrics(e.style.fontSize).b,p(u)&&this.setSpanRotation(u,h,d),
l=Je(this.elemWidth,e.offsetWidth),l>f&&/[ \-]/.test(e.textContent||e.innerText)&&(m(e,{
width:f+"px",
display:"block",
whiteSpace:c&&c.whiteSpace||"normal"
}),l=f),this.getSpanCorrection(l,d,h,u,a)),m(e,{
left:o+(this.xCorr||0)+"px",
top:r+(this.yCorr||0)+"px"
}),Se&&(d=e.offsetHeight),this.cTT=g;
}
}else this.alignOnAdd=!0;
},
setSpanRotation:function(t,e,i){
var n={},s=ke?"-ms-transform":Se?"-webkit-transform":Te?"MozTransform":be?"-o-transform":"";
n[s]=n.transform="rotate("+t+"deg)",n[s+(Te?"Origin":"-origin")]=n.transformOrigin=100*e+"% "+i+"px",
m(this.element,n);
},
getSpanCorrection:function(t,e,i){
this.xCorr=-t*i,this.yCorr=-e;
}
}),$e(ii.prototype,{
html:function(t,e,i){
var n=this.createElement("span"),s=n.element,o=n.renderer;
return n.textSetter=function(t){
t!==s.innerHTML&&delete this.bBox,s.innerHTML=this.textStr=t,n.htmlUpdateTransform();
},n.xSetter=n.ySetter=n.alignSetter=n.rotationSetter=function(t,e){
"align"===e&&(e="textAlign"),n[e]=t,n.htmlUpdateTransform();
},n.attr({
text:t,
x:le(e),
y:le(i)
}).css({
position:"absolute",
fontFamily:this.style.fontFamily,
fontSize:this.style.fontSize
}),s.style.whiteSpace="nowrap",n.css=n.htmlCss,o.isSVG&&(n.add=function(t){
var e,i=o.box.parentNode,r=[];
if(this.parentGroup=t){
if(e=t.div,!e){
for(;t;)r.push(t),t=t.parentGroup;
Fe(r.reverse(),function(t){
var n,s=u(t.element,"class");
s&&(s={
className:s
}),e=t.div=t.div||y(Be,s,{
position:"absolute",
left:(t.translateX||0)+"px",
top:(t.translateY||0)+"px"
},e||i),n=e.style,$e(t,{
translateXSetter:function(e,i){
n.left=e+"px",t[i]=e,t.doTransform=!0;
},
translateYSetter:function(e,i){
n.top=e+"px",t[i]=e,t.doTransform=!0;
}
}),Fe(["opacity","visibility"],function(e){
Qe(t,e+"Setter",function(t,e,i,s){
t.call(this,e,i,s),n[i]=e;
});
});
});
}
}else e=i;
return e.appendChild(s),n.added=!0,n.alignOnAdd&&n.htmlUpdateTransform(),n;
}),n;
}
});
var ni;
if(!Pe&&!Me){
ni={
init:function(t,e){
var i=["<",e,' filled="f" stroked="f"'],n=["position: ","absolute",";"],s=e===Be;
("shape"===e||s)&&n.push("left:0;top:0;width:1px;height:1px;"),n.push("visibility: ",s?"hidden":"visible"),
i.push(' style="',n.join(""),'"/>'),e&&(i=s||"span"===e||"img"===e?i.join(""):t.prepVML(i),
this.element=y(i)),this.renderer=t;
},
add:function(t){
var e=this.renderer,i=this.element,n=e.box,s=t&&t.inverted,n=t?t.element||t:n;
return t&&(this.parentGroup=t),s&&e.invertChild(i,n),n.appendChild(i),this.added=!0,
this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform(),this.onAdd&&this.onAdd(),
this;
},
updateTransform:z.prototype.htmlUpdateTransform,
setSpanRotation:function(){
var t=this.rotation,e=ge(t*ve),i=me(t*ve);
m(this.element,{
filter:t?["progid:DXImageTransform.Microsoft.Matrix(M11=",e,", M12=",-i,", M21=",i,", M22=",e,", sizingMethod='auto expand')"].join(""):"none"
});
},
getSpanCorrection:function(t,e,i,n,s){
var o,r=n?ge(n*ve):1,a=n?me(n*ve):0,h=Je(this.elemHeight,this.element.offsetHeight);
this.xCorr=0>r&&-t,this.yCorr=0>a&&-h,o=0>r*a,this.xCorr+=a*e*(o?1-i:i),this.yCorr-=r*e*(n?o?i:1-i:1),
s&&"left"!==s&&(this.xCorr-=t*i*(0>r?-1:1),n&&(this.yCorr-=h*i*(0>a?-1:1)),m(this.element,{
textAlign:s
}));
},
pathToVML:function(t){
for(var e=t.length,i=[];e--;)h(t[e])?i[e]=le(10*t[e])-5:"Z"===t[e]?i[e]="x":(i[e]=t[e],
!t.isArc||"wa"!==t[e]&&"at"!==t[e]||(i[e+5]===i[e+7]&&(i[e+7]+=t[e+7]>t[e+5]?1:-1),
i[e+6]===i[e+8]&&(i[e+8]+=t[e+8]>t[e+6]?1:-1)));
return i.join(" ")||"x";
},
clip:function(t){
var e,i=this;
return t?(e=t.members,d(e,i),e.push(i),i.destroyClip=function(){
d(e,i);
},t=t.getCSS(i)):(i.destroyClip&&i.destroyClip(),t={
clip:we?"inherit":"rect(auto)"
}),i.css(t);
},
css:z.prototype.htmlCss,
safeRemoveChild:function(t){
t.parentNode&&L(t);
},
destroy:function(){
return this.destroyClip&&this.destroyClip(),z.prototype.destroy.apply(this);
},
on:function(e,i){
return this.element["on"+e]=function(){
var e=t.event;
e.target=e.srcElement,i(e);
},this;
},
cutOffPath:function(t,e){
var i,t=t.split(/[ ,]/);
return i=t.length,(9===i||11===i)&&(t[i-4]=t[i-2]=s(t[i-2])-10*e),t.join(" ");
},
shadow:function(t,e,i){
var n,o,r,a,h,l,c,d=[],p=this.element,u=this.renderer,f=p.style,g=p.path;
if(g&&"string"!=typeof g.value&&(g="x"),h=g,t){
for(l=Je(t.width,3),c=(t.opacity||.15)/l,n=1;3>=n;n++)a=2*l+1-2*n,i&&(h=this.cutOffPath(g.value,a+.5)),
r=['<shape isShadow="true" strokeweight="',a,'" filled="false" path="',h,'" coordsize="10 10" style="',p.style.cssText,'" />'],
o=y(u.prepVML(r),null,{
left:s(f.left)+Je(t.offsetX,1),
top:s(f.top)+Je(t.offsetY,1)
}),i&&(o.cutOff=a+1),r=['<stroke color="',t.color||"black",'" opacity="',c*n,'"/>'],
y(u.prepVML(r),null,null,o),e?e.element.appendChild(o):p.parentNode.insertBefore(o,p),
d.push(o);
this.shadows=d;
}
return this;
},
updateShadows:De,
setAttr:function(t,e){
we?this.element[t]=e:this.element.setAttribute(t,e);
},
classSetter:function(t){
this.element.className=t;
},
dashstyleSetter:function(t,e,i){
(i.getElementsByTagName("stroke")[0]||y(this.renderer.prepVML(["<stroke/>"]),null,null,i))[e]=t||"solid",
this[e]=t;
},
dSetter:function(t,e,i){
var n=this.shadows,t=t||[];
if(this.d=t.join&&t.join(" "),i.path=t=this.pathToVML(t),n)for(i=n.length;i--;)n[i].path=n[i].cutOff?this.cutOffPath(t,n[i].cutOff):t;
this.setAttr(e,t);
},
fillSetter:function(t,e,i){
var n=i.nodeName;
"SPAN"===n?i.style.color=t:"IMG"!==n&&(i.filled="none"!==t,this.setAttr("fillcolor",this.renderer.color(t,i,e,this)));
},
"fill-opacitySetter":function(t,e,i){
y(this.renderer.prepVML(["<",e.split("-")[0],' opacity="',t,'"/>']),null,null,i);
},
opacitySetter:De,
rotationSetter:function(t,e,i){
i=i.style,this[e]=i[e]=t,i.left=-le(me(t*ve)+1)+"px",i.top=le(ge(t*ve))+"px";
},
strokeSetter:function(t,e,i){
this.setAttr("strokecolor",this.renderer.color(t,i,e,this));
},
"stroke-widthSetter":function(t,e,i){
i.stroked=!!t,this[e]=t,h(t)&&(t+="px"),this.setAttr("strokeweight",t);
},
titleSetter:function(t,e){
this.setAttr(e,t);
},
visibilitySetter:function(t,e,i){
"inherit"===t&&(t="visible"),this.shadows&&Fe(this.shadows,function(i){
i.style[e]=t;
}),"DIV"===i.nodeName&&(t="hidden"===t?"-999em":0,we||(i.style[e]=t?"visible":"hidden"),
e="top"),i.style[e]=t;
},
xSetter:function(t,e,i){
this[e]=t,"x"===e?e="left":"y"===e&&(e="top"),this.updateClipping?(this[e]=t,this.updateClipping()):i.style[e]=t;
},
zIndexSetter:function(t,e,i){
i.style[e]=t;
}
},ni["stroke-opacitySetter"]=ni["fill-opacitySetter"],re.VMLElement=ni=v(z,ni),ni.prototype.ySetter=ni.prototype.widthSetter=ni.prototype.heightSetter=ni.prototype.xSetter;
var si={
Element:ni,
isIE8:xe.indexOf("MSIE 8.0")>-1,
init:function(t,e,i,n){
var s;
if(this.alignedObjects=[],n=this.createElement(Be).css($e(this.getStyle(n),{
position:"relative"
})),s=n.element,t.appendChild(n.element),this.isVML=!0,this.box=s,this.boxWrapper=n,
this.gradients={},this.cache={},this.cacheKeys=[],this.setSize(e,i,!1),!ae.namespaces.hcv){
ae.namespaces.add("hcv","urn:schemas-microsoft-com:vml");
try{
ae.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
}catch(o){
ae.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
}
}
},
isHidden:function(){
return!this.box.offsetWidth;
},
clipRect:function(t,e,i,n){
var s=this.createElement(),o=r(t);
return $e(s,{
members:[],
count:0,
left:(o?t.x:t)+1,
top:(o?t.y:e)+1,
width:(o?t.width:i)-1,
height:(o?t.height:n)-1,
getCSS:function(t){
var e=t.element,i=e.nodeName,t=t.inverted,n=this.top-("shape"===i?e.offsetTop:0),s=this.left,e=s+this.width,o=n+this.height,n={
clip:"rect("+le(t?s:n)+"px,"+le(t?o:e)+"px,"+le(t?e:o)+"px,"+le(t?n:s)+"px)"
};
return!t&&we&&"DIV"===i&&$e(n,{
width:e+"px",
height:o+"px"
}),n;
},
updateClipping:function(){
Fe(s.members,function(t){
t.element&&t.css(s.getCSS(t));
});
}
});
},
color:function(t,e,i,n){
var s,o,r,a=this,h=/^rgba/,l="none";
if(t&&t.linearGradient?r="gradient":t&&t.radialGradient&&(r="pattern"),r){
var c,d,p,u,f,g,m,v,x=t.linearGradient||t.radialGradient,b="",t=t.stops,k=[],w=function(){
o=['<fill colors="'+k.join(",")+'" opacity="',f,'" o:opacity2="',u,'" type="',r,'" ',b,'focus="100%" method="any" />'],
y(a.prepVML(o),null,null,e);
};
if(p=t[0],v=t[t.length-1],p[0]>0&&t.unshift([0,p[1]]),v[0]<1&&t.push([1,v[1]]),Fe(t,function(t,e){
h.test(t[1])?(s=D(t[1]),c=s.get("rgb"),d=s.get("a")):(c=t[1],d=1),k.push(100*t[0]+"% "+c),
e?(f=d,g=c):(u=d,m=c);
}),"fill"===i)if("gradient"===r)i=x.x1||x[0]||0,t=x.y1||x[1]||0,p=x.x2||x[2]||0,
x=x.y2||x[3]||0,b='angle="'+(90-180*he.atan((x-t)/(p-i))/ye)+'"',w();else{
var S,l=x.r,T=2*l,A=2*l,C=x.cx,P=x.cy,L=e.radialReference,l=function(){
L&&(S=n.getBBox(),C+=(L[0]-S.x)/S.width-.5,P+=(L[1]-S.y)/S.height-.5,T*=L[2]/S.width,
A*=L[2]/S.height),b='src="'+G.global.VMLRadialGradientURL+'" size="'+T+","+A+'" origin="0.5,0.5" position="'+C+","+P+'" color2="'+m+'" ',
w();
};
n.added?l():n.onAdd=l,l=g;
}else l=c;
}else h.test(t)&&"IMG"!==e.tagName?(s=D(t),n[i+"-opacitySetter"](s.get("a"),i,e),
l=s.get("rgb")):(l=e.getElementsByTagName(i),l.length&&(l[0].opacity=1,l[0].type="solid"),
l=t);
return l;
},
prepVML:function(t){
var e=this.isIE8,t=t.join("");
return e?(t=t.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),t=-1===t.indexOf('style="')?t.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):t.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):t=t.replace("<","<hcv:"),
t;
},
text:ii.prototype.html,
path:function(t){
var e={
coordsize:"10 10"
};
return a(t)?e.d=t:r(t)&&$e(e,t),this.createElement("shape").attr(e);
},
circle:function(t,e,i){
var n=this.symbol("circle");
return r(t)&&(i=t.r,e=t.y,t=t.x),n.isCircle=!0,n.r=i,n.attr({
x:t,
y:e
});
},
g:function(t){
var e;
return t&&(e={
className:"highcharts-"+t,
"class":"highcharts-"+t
}),this.createElement(Be).attr(e);
},
image:function(t,e,i,n,s){
var o=this.createElement("img").attr({
src:t
});
return arguments.length>1&&o.attr({
x:e,
y:i,
width:n,
height:s
}),o;
},
createElement:function(t){
return"rect"===t?this.symbol(t):ii.prototype.createElement.call(this,t);
},
invertChild:function(t,e){
var i=this,n=e.style,o="IMG"===t.tagName&&t.style;
m(t,{
flip:"x",
left:s(n.width)-(o?s(o.top):1),
top:s(n.height)-(o?s(o.left):1),
rotation:-90
}),Fe(t.childNodes,function(e){
i.invertChild(e,t);
});
},
symbols:{
arc:function(t,e,i,n,s){
var o=s.start,r=s.end,a=s.r||i||n,i=s.innerR,n=ge(o),h=me(o),l=ge(r),c=me(r);
return r-o===0?["x"]:(o=["wa",t-a,e-a,t+a,e+a,t+a*n,e+a*h,t+a*l,e+a*c],s.open&&!i&&o.push("e","M",t,e),
o.push("at",t-i,e-i,t+i,e+i,t+i*l,e+i*c,t+i*n,e+i*h,"x","e"),o.isArc=!0,o);
},
circle:function(t,e,i,n,s){
return s&&(i=n=2*s.r),s&&s.isCircle&&(t-=i/2,e-=n/2),["wa",t,e,t+i,e+n,t+i,e+n/2,t+i,e+n/2,"e"];
},
rect:function(t,e,i,n,s){
return ii.prototype.symbols[p(s)&&s.r?"callout":"square"].call(0,t,e,i,n,s);
}
}
};
re.VMLRenderer=ni=function(){
this.init.apply(this,arguments);
},ni.prototype=n(ii.prototype,si),X=ni;
}
ii.prototype.measureSpanWidth=function(t,e){
var i,n=ae.createElement("span");
return i=ae.createTextNode(t),n.appendChild(i),m(n,e),this.box.appendChild(n),i=n.offsetWidth,
L(n),i;
};
var oi;
Me&&(re.CanVGRenderer=ni=function(){
Ce="http://www.w3.org/1999/xhtml";
},ni.prototype.symbols={},oi=function(){
function t(){
var t,i=e.length;
for(t=0;i>t;t++)e[t]();
e=[];
}
var e=[];
return{
push:function(i,n){
if(0===e.length){
var s=ae.getElementsByTagName("head")[0],o=ae.createElement("script");
o.type="text/javascript",o.src=n,o.onload=t,s.appendChild(o);
}
e.push(i);
}
};
}(),X=ni),R.prototype={
addLabel:function(){
var t,e=this.axis,i=e.options,s=e.chart,o=e.categories,r=e.names,a=this.pos,h=i.labels,l=e.tickPositions,d=a===l[0],u=a===l[l.length-1],r=o?Je(o[a],r[a],a):a,o=this.label,l=l.info;
e.isDatetimeAxis&&l&&(t=i.dateTimeLabelFormats[l.higherRanks[a]||l.unitName]),this.isFirst=d,
this.isLast=u,i=e.labelFormatter.call({
axis:e,
chart:s,
isFirst:d,
isLast:u,
dateTimeLabelFormat:t,
value:e.isLog?M(c(r)):r
}),p(o)?o&&o.attr({
text:i
}):(this.labelLength=(this.label=o=p(i)&&h.enabled?s.renderer.text(i,0,0,h.useHTML).css(n(h.style)).add(e.labelGroup):null)&&o.getBBox().width,
this.rotation=0);
},
getLabelSize:function(){
return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0;
},
handleOverflow:function(t){
var e,i=this.axis,n=t.x,s=i.chart.chartWidth,o=i.chart.spacing,r=Je(i.labelLeft,ue(i.pos,o[3])),o=Je(i.labelRight,pe(i.pos+i.len,s-o[1])),a=this.label,h=this.rotation,l={
left:0,
center:.5,
right:1
}[i.labelAlign],c=a.getBBox().width,d=i.slotWidth,p=1,u={};
h?0>h&&r>n-l*c?e=le(n/ge(h*ve)-r):h>0&&n+l*c>o&&(e=le((s-n)/ge(h*ve))):(s=n+(1-l)*c,
r>n-l*c?d=t.x+d*(1-l)-r:s>o&&(d=o-t.x+d*l,p=-1),d=ue(i.slotWidth,d),d<i.slotWidth&&"center"===i.labelAlign&&(t.x+=p*(i.slotWidth-d-l*(i.slotWidth-ue(c,d)))),
(c>d||i.autoRotation&&a.styles.width)&&(e=d)),e&&(u.width=e,i.options.labels.style.textOverflow||(u.textOverflow="ellipsis"),
a.css(u));
},
getPosition:function(t,e,i,n){
var s=this.axis,o=s.chart,r=n&&o.oldChartHeight||o.chartHeight;
return{
x:t?s.translate(e+i,null,null,n)+s.transB:s.left+s.offset+(s.opposite?(n&&o.oldChartWidth||o.chartWidth)-s.right-s.left:0),
y:t?r-s.bottom+s.offset-(s.opposite?s.height:0):r-s.translate(e+i,null,null,n)-s.transB
};
},
getLabelPosition:function(t,e,i,n,s,o,r,a){
var h=this.axis,l=h.transA,c=h.reversed,d=h.staggerLines,u=h.tickRotCorr||{
x:0,
y:0
},f=s.y;
return p(f)||(f=2===h.side?u.y+8:f=ge(i.rotation*ve)*(u.y-i.getBBox(!1,0).height/2)),
t=t+s.x+u.x-(o&&n?o*l*(c?-1:1):0),e=e+f-(o&&!n?o*l*(c?1:-1):0),d&&(i=r/(a||1)%d,
h.opposite&&(i=d-i-1),e+=i*(h.labelOffset/d)),{
x:t,
y:le(e)
};
},
getMarkPath:function(t,e,i,n,s,o){
return o.crispLine(["M",t,e,"L",t+(s?0:-i),e+(s?i:0)],n);
},
render:function(t,e,i){
var n=this.axis,s=n.options,o=n.chart.renderer,r=n.horiz,a=this.type,h=this.label,l=this.pos,c=s.labels,d=this.gridLine,p=a?a+"Grid":"grid",u=a?a+"Tick":"tick",f=s[p+"LineWidth"],g=s[p+"LineColor"],m=s[p+"LineDashStyle"],y=s[u+"Length"],p=Je(s[u+"Width"],!a&&n.isXAxis?1:0),v=s[u+"Color"],x=s[u+"Position"],u=this.mark,b=c.step,k=!0,w=n.tickmarkOffset,S=this.getPosition(r,l,w,e),T=S.x,S=S.y,A=r&&T===n.pos+n.len||!r&&S===n.pos?-1:1,i=Je(i,1);
this.isActive=!0,f&&(l=n.getPlotLinePath(l+w,f*A,e,!0),d===E&&(d={
stroke:g,
"stroke-width":f
},m&&(d.dashstyle=m),a||(d.zIndex=1),e&&(d.opacity=0),this.gridLine=d=f?o.path(l).attr(d).add(n.gridGroup):null),
!e&&d&&l&&d[this.isNew?"attr":"animate"]({
d:l,
opacity:i
})),p&&y&&("inside"===x&&(y=-y),n.opposite&&(y=-y),a=this.getMarkPath(T,S,y,p*A,r,o),
u?u.animate({
d:a,
opacity:i
}):this.mark=o.path(a).attr({
stroke:v,
"stroke-width":p,
opacity:i
}).add(n.axisGroup)),h&&!isNaN(T)&&(h.xy=S=this.getLabelPosition(T,S,h,r,c,w,t,b),
this.isFirst&&!this.isLast&&!Je(s.showFirstLabel,1)||this.isLast&&!this.isFirst&&!Je(s.showLastLabel,1)?k=!1:r&&!n.isRadial&&!c.step&&!c.rotation&&!e&&0!==i&&this.handleOverflow(S),
b&&t%b&&(k=!1),k&&!isNaN(S.y)?(S.opacity=i,h[this.isNew?"attr":"animate"](S),this.isNew=!1):h.attr("y",-9999));
},
destroy:function(){
P(this,this.axis);
}
},re.PlotLineOrBand=function(t,e){
this.axis=t,e&&(this.options=e,this.id=e.id);
},re.PlotLineOrBand.prototype={
render:function(){
var t,e=this,i=e.axis,s=i.horiz,o=e.options,r=o.label,a=e.label,h=o.width,c=o.to,d=o.from,u=p(d)&&p(c),f=o.value,g=o.dashStyle,m=e.svgElem,y=[],v=o.color,x=o.zIndex,b=o.events,k={},w=i.chart.renderer;
if(i.isLog&&(d=l(d),c=l(c),f=l(f)),h)y=i.getPlotLinePath(f,h),k={
stroke:v,
"stroke-width":h
},g&&(k.dashstyle=g);else{
if(!u)return;
y=i.getPlotBandPath(d,c,o),v&&(k.fill=v),o.borderWidth&&(k.stroke=o.borderColor,
k["stroke-width"]=o.borderWidth);
}
if(p(x)&&(k.zIndex=x),m)y?(m.show(),m.animate({
d:y
})):(m.hide(),a&&(e.label=a=a.destroy()));else if(y&&y.length&&(e.svgElem=m=w.path(y).attr(k).add(),
b))for(t in o=function(t){
m.on(t,function(i){
b[t].apply(e,[i]);
});
},b)o(t);
return r&&p(r.text)&&y&&y.length&&i.width>0&&i.height>0&&!y.flat?(r=n({
align:s&&u&&"center",
x:s?!u&&4:10,
verticalAlign:!s&&u&&"middle",
y:s?u?16:10:u?6:-4,
rotation:s&&!u&&90
},r),a||(k={
align:r.textAlign||r.align,
rotation:r.rotation
},p(x)&&(k.zIndex=x),e.label=a=w.text(r.text,0,0,r.useHTML).attr(k).css(r.style).add()),
i=[y[1],y[4],u?y[6]:y[1]],u=[y[2],y[5],u?y[7]:y[2]],y=A(i),s=A(u),a.align(r,!1,{
x:y,
y:s,
width:C(i)-y,
height:C(u)-s
}),a.show()):a&&a.hide(),e;
},
destroy:function(){
d(this.axis.plotLinesAndBands,this),delete this.axis,P(this);
}
};
var ri=re.Axis=function(){
this.init.apply(this,arguments);
};
ri.prototype={
defaultOptions:{
dateTimeLabelFormats:{
millisecond:"%H:%M:%S.%L",
second:"%H:%M:%S",
minute:"%H:%M",
hour:"%H:%M",
day:"%e. %b",
week:"%e. %b",
month:"%b '%y",
year:"%Y"
},
endOnTick:!1,
gridLineColor:"#D8D8D8",
labels:{
enabled:!0,
style:{
color:"#606060",
cursor:"default",
fontSize:"11px"
},
x:0,
y:15
},
lineColor:"#C0D0E0",
lineWidth:1,
minPadding:.01,
maxPadding:.01,
minorGridLineColor:"#E0E0E0",
minorGridLineWidth:1,
minorTickColor:"#A0A0A0",
minorTickLength:2,
minorTickPosition:"outside",
startOfWeek:1,
startOnTick:!1,
tickColor:"#C0D0E0",
tickLength:10,
tickmarkPlacement:"between",
tickPixelInterval:100,
tickPosition:"outside",
title:{
align:"middle",
style:{
color:"#707070"
}
},
type:"linear"
},
defaultYAxisOptions:{
endOnTick:!0,
gridLineWidth:1,
tickPixelInterval:72,
showLastLabel:!0,
labels:{
x:-8,
y:3
},
lineWidth:0,
maxPadding:.05,
minPadding:.05,
startOnTick:!0,
title:{
rotation:270,
text:"Values"
},
stackLabels:{
enabled:!1,
formatter:function(){
return re.numberFormat(this.total,-1);
},
style:n(ti.line.dataLabels.style,{
color:"#000000"
})
}
},
defaultLeftAxisOptions:{
labels:{
x:-15,
y:null
},
title:{
rotation:270
}
},
defaultRightAxisOptions:{
labels:{
x:15,
y:null
},
title:{
rotation:90
}
},
defaultBottomAxisOptions:{
labels:{
autoRotation:[-45],
x:0,
y:null
},
title:{
rotation:0
}
},
defaultTopAxisOptions:{
labels:{
autoRotation:[-45],
x:0,
y:-15
},
title:{
rotation:0
}
},
init:function(t,e){
var i=e.isX;
this.chart=t,this.horiz=t.inverted?!i:i,this.coll=(this.isXAxis=i)?"xAxis":"yAxis",
this.opposite=e.opposite,this.side=e.side||(this.horiz?this.opposite?0:2:this.opposite?1:3),
this.setOptions(e);
var n=this.options,s=n.type;
this.labelFormatter=n.labels.formatter||this.defaultLabelFormatter,this.userOptions=e,
this.minPixelPadding=0,this.reversed=n.reversed,this.visible=n.visible!==!1,this.zoomEnabled=n.zoomEnabled!==!1,
this.categories=n.categories||"category"===s,this.names=this.names||[],this.isLog="logarithmic"===s,
this.isDatetimeAxis="datetime"===s,this.isLinked=p(n.linkedTo),this.ticks={},this.labelEdge=[],
this.minorTicks={},this.plotLinesAndBands=[],this.alternateBands={},this.len=0,this.minRange=this.userMinRange=n.minRange||n.maxZoom,
this.range=n.range,this.offset=n.offset||0,this.stacks={},this.oldStacks={},this.stacksTouched=0,
this.min=this.max=null,this.crosshair=Je(n.crosshair,f(t.options.tooltip.crosshairs)[i?0:1],!1);
var o,n=this.options.events;
-1===Ge(this,t.axes)&&(i&&!this.isColorAxis?t.axes.splice(t.xAxis.length,0,this):t.axes.push(this),
t[this.coll].push(this)),this.series=this.series||[],t.inverted&&i&&this.reversed===E&&(this.reversed=!0),
this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;
for(o in n)je(this,o,n[o]);
this.isLog&&(this.val2lin=l,this.lin2val=c);
},
setOptions:function(t){
this.options=n(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],n(G[this.coll],t));
},
defaultLabelFormatter:function(){
var t,e=this.axis,i=this.value,n=e.categories,s=this.dateTimeLabelFormat,o=G.lang.numericSymbols,r=o&&o.length,a=e.options.labels.format,e=e.isLog?i:e.tickInterval;
if(a)t=k(a,this);else if(n)t=i;else if(s)t=F(s,i);else if(r&&e>=1e3)for(;r--&&t===E;)n=Math.pow(1e3,r+1),
e>=n&&10*i%n===0&&null!==o[r]&&(t=re.numberFormat(i/n,-1)+o[r]);
return t===E&&(t=fe(i)>=1e4?re.numberFormat(i,-1):re.numberFormat(i,-1,E,"")),t;
},
getSeriesExtremes:function(){
var t=this,e=t.chart;
t.hasVisibleSeries=!1,t.dataMin=t.dataMax=t.threshold=null,t.softThreshold=!t.isXAxis,
t.buildStacks&&t.buildStacks(),Fe(t.series,function(i){
if(i.visible||!e.options.chart.ignoreHiddenSeries){
var n,s=i.options,o=s.threshold;
t.hasVisibleSeries=!0,t.isLog&&0>=o&&(o=null),t.isXAxis?(s=i.xData,s.length&&(t.dataMin=ue(Je(t.dataMin,s[0]),A(s)),
t.dataMax=pe(Je(t.dataMax,s[0]),C(s)))):(i.getExtremes(),n=i.dataMax,i=i.dataMin,
p(i)&&p(n)&&(t.dataMin=ue(Je(t.dataMin,i),i),t.dataMax=pe(Je(t.dataMax,n),n)),p(o)&&(t.threshold=o),
(!s.softThreshold||t.isLog)&&(t.softThreshold=!1));
}
});
},
translate:function(t,e,i,n,s,o){
var r=this.linkedParent||this,a=1,l=0,c=n?r.oldTransA:r.transA,n=n?r.oldMin:r.min,d=r.minPixelPadding,s=(r.doPostTranslate||r.isLog&&s)&&r.lin2val;
return c||(c=r.transA),i&&(a*=-1,l=r.len),r.reversed&&(a*=-1,l-=a*(r.sector||r.len)),
e?(t=t*a+l,t-=d,t=t/c+n,s&&(t=r.lin2val(t))):(s&&(t=r.val2lin(t)),"between"===o&&(o=.5),
t=a*(t-n)*c+l+a*d+(h(o)?c*o*r.pointRange:0)),t;
},
toPixels:function(t,e){
return this.translate(t,!1,!this.horiz,null,!0)+(e?0:this.pos);
},
toValue:function(t,e){
return this.translate(t-(e?0:this.pos),!0,!this.horiz,null,!0);
},
getPlotLinePath:function(t,e,i,n,s){
var o,r,a,h=this.chart,l=this.left,c=this.top,d=i&&h.oldChartHeight||h.chartHeight,p=i&&h.oldChartWidth||h.chartWidth;
o=this.transB;
var u=function(t,e,i){
return(e>t||t>i)&&(n?t=ue(pe(e,t),i):a=!0),t;
},s=Je(s,this.translate(t,null,null,i)),t=i=le(s+o);
return o=r=le(d-s-o),isNaN(s)?a=!0:this.horiz?(o=c,r=d-this.bottom,t=i=u(t,l,l+this.width)):(t=l,
i=p-this.right,o=r=u(o,c,c+this.height)),a&&!n?null:h.renderer.crispLine(["M",t,o,"L",i,r],e||1);
},
getLinearTickPositions:function(t,e,i){
var n,s=M(ce(e/t)*t),o=M(de(i/t)*t),r=[];
if(e===i&&h(e))return[e];
for(e=s;o>=e&&(r.push(e),e=M(e+t),e!==n);)n=e;
return r;
},
getMinorTickPositions:function(){
var t,e=this.options,i=this.tickPositions,n=this.minorTickInterval,s=[],o=this.pointRangePadding||0;
t=this.min-o;
var o=this.max+o,r=o-t;
if(r&&r/n<this.len/3)if(this.isLog)for(o=i.length,t=1;o>t;t++)s=s.concat(this.getLogTickPositions(n,i[t-1],i[t],!0));else if(this.isDatetimeAxis&&"auto"===e.minorTickInterval)s=s.concat(this.getTimeTicks(this.normalizeTimeTickInterval(n),t,o,e.startOfWeek));else for(i=t+(i[0]-t)%n;o>=i;i+=n)s.push(i);
return 0!==s.length&&this.trimTicks(s,e.startOnTick,e.endOnTick),s;
},
adjustForMinRange:function(){
var t,e,i,n,s,o,r,a=this.options,h=this.min,l=this.max,c=this.dataMax-this.dataMin>=this.minRange;
this.isXAxis&&this.minRange===E&&!this.isLog&&(p(a.min)||p(a.max)?this.minRange=null:(Fe(this.series,function(t){
for(s=t.xData,i=o=t.xIncrement?1:s.length-1;i>0;i--)n=s[i]-s[i-1],(e===E||e>n)&&(e=n);
}),this.minRange=ue(5*e,this.dataMax-this.dataMin))),l-h<this.minRange&&(r=this.minRange,
t=(r-l+h)/2,t=[h-t,Je(a.min,h-t)],c&&(t[2]=this.dataMin),h=C(t),l=[h+r,Je(a.max,h+r)],
c&&(l[2]=this.dataMax),l=A(l),r>l-h&&(t[0]=l-r,t[1]=Je(a.min,l-r),h=C(t))),this.min=h,
this.max=l;
},
setAxisTranslation:function(t){
var e,i=this,n=i.max-i.min,s=i.axisPointRange||0,r=0,a=0,h=i.linkedParent,l=!!i.categories,c=i.transA,d=i.isXAxis;
(d||l||s)&&(h?(r=h.minPointOffset,a=h.pointRangePadding):(Fe(i.series,function(t){
var i=t.closestPointRange;
!t.noSharedTooltip&&p(i)&&(e=p(e)?ue(e,i):i);
}),Fe(i.series,function(t){
var n=l?1:d?Je(t.options.pointRange,e,0):i.axisPointRange||0,t=t.options.pointPlacement;
s=pe(s,n),i.single||(r=pe(r,o(t)?0:n/2),a=pe(a,"on"===t?0:n));
})),h=i.ordinalSlope&&e?i.ordinalSlope/e:1,i.minPointOffset=r*=h,i.pointRangePadding=a*=h,
i.pointRange=ue(s,n),d&&(i.closestPointRange=e)),t&&(i.oldTransA=c),i.translationSlope=i.transA=c=i.len/(n+a||1),
i.transB=i.horiz?i.left:i.bottom,i.minPixelPadding=c*r;
},
minFromRange:function(){
return this.max-this.range;
},
setTickInterval:function(t){
var i,n,s,o,r=this,a=r.chart,c=r.options,d=r.isLog,u=r.isDatetimeAxis,f=r.isXAxis,g=r.isLinked,m=c.maxPadding,y=c.minPadding,v=c.tickInterval,x=c.tickPixelInterval,b=r.categories,k=r.threshold,T=r.softThreshold;
!u&&!b&&!g&&this.getTickAmount(),s=Je(r.userMin,c.min),o=Je(r.userMax,c.max),g?(r.linkedParent=a[r.coll][c.linkedTo],
a=r.linkedParent.getExtremes(),r.min=Je(a.min,a.dataMin),r.max=Je(a.max,a.dataMax),
c.type!==r.linkedParent.options.type&&e(11,1)):(!T&&p(k)&&(r.dataMin>=k?(i=k,y=0):r.dataMax<=k&&(n=k,
m=0)),r.min=Je(s,i,r.dataMin),r.max=Je(o,n,r.dataMax)),d&&(!t&&ue(r.min,Je(r.dataMin,r.min))<=0&&e(10,1),
r.min=M(l(r.min),15),r.max=M(l(r.max),15)),r.range&&p(r.max)&&(r.userMin=r.min=s=pe(r.min,r.minFromRange()),
r.userMax=o=r.max,r.range=null),r.beforePadding&&r.beforePadding(),r.adjustForMinRange(),
b||r.axisPointRange||r.usePercentage||g||!p(r.min)||!p(r.max)||!(a=r.max-r.min)||(!p(s)&&y&&(r.min-=a*y),
!p(o)&&m&&(r.max+=a*m)),h(c.floor)&&(r.min=pe(r.min,c.floor)),h(c.ceiling)&&(r.max=ue(r.max,c.ceiling)),
T&&p(r.dataMin)&&(k=k||0,!p(s)&&r.min<k&&r.dataMin>=k?r.min=k:!p(o)&&r.max>k&&r.dataMax<=k&&(r.max=k)),
r.tickInterval=r.min===r.max||void 0===r.min||void 0===r.max?1:g&&!v&&x===r.linkedParent.options.tickPixelInterval?v=r.linkedParent.tickInterval:Je(v,this.tickAmount?(r.max-r.min)/pe(this.tickAmount-1,1):void 0,b?1:(r.max-r.min)*x/pe(r.len,x)),
f&&!t&&Fe(r.series,function(t){
t.processData(r.min!==r.oldMin||r.max!==r.oldMax);
}),r.setAxisTranslation(!0),r.beforeSetTickPositions&&r.beforeSetTickPositions(),
r.postProcessTickInterval&&(r.tickInterval=r.postProcessTickInterval(r.tickInterval)),
r.pointRange&&!v&&(r.tickInterval=pe(r.pointRange,r.tickInterval)),t=Je(c.minTickInterval,r.isDatetimeAxis&&r.closestPointRange),
!v&&r.tickInterval<t&&(r.tickInterval=t),u||d||v||(r.tickInterval=S(r.tickInterval,null,w(r.tickInterval),Je(c.allowDecimals,!(r.tickInterval>.5&&r.tickInterval<5&&r.max>1e3&&r.max<9999)),!!this.tickAmount)),
!this.tickAmount&&this.len&&(r.tickInterval=r.unsquish()),this.setTickPositions();
},
setTickPositions:function(){
var t,e,i=this.options,n=i.tickPositions,s=i.tickPositioner,o=i.startOnTick,r=i.endOnTick;
this.tickmarkOffset=this.categories&&"between"===i.tickmarkPlacement&&1===this.tickInterval?.5:0,
this.minorTickInterval="auto"===i.minorTickInterval&&this.tickInterval?this.tickInterval/5:i.minorTickInterval,
this.tickPositions=t=n&&n.slice(),!t&&(t=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,i.units),this.min,this.max,i.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),
t.length>this.len&&(t=[t[0],t.pop()]),this.tickPositions=t,s&&(s=s.apply(this,[this.min,this.max])))&&(this.tickPositions=t=s),
this.isLinked||(this.trimTicks(t,o,r),this.min===this.max&&p(this.min)&&!this.tickAmount&&(e=!0,
this.min-=.5,this.max+=.5),this.single=e,!n&&!s&&this.adjustTickAmount());
},
trimTicks:function(t,e,i){
var n=t[0],s=t[t.length-1],o=this.minPointOffset||0;
e?this.min=n:this.min-o>n&&t.shift(),i?this.max=s:this.max+o<s&&t.pop(),0===t.length&&p(n)&&t.push((s+n)/2);
},
alignToOthers:function(){
var t,e={},i=this.options;
return this.chart.options.chart.alignTicks!==!1&&i.alignTicks!==!1&&Fe(this.chart[this.coll],function(i){
var n=i.options,n=[i.horiz?n.left:n.top,n.width,n.height,n.pane].join(",");
i.series.length&&(e[n]?t=!0:e[n]=1);
}),t;
},
getTickAmount:function(){
var t=this.options,e=t.tickAmount,i=t.tickPixelInterval;
!p(t.tickInterval)&&this.len<i&&!this.isRadial&&!this.isLog&&t.startOnTick&&t.endOnTick&&(e=2),
!e&&this.alignToOthers()&&(e=de(this.len/i)+1),4>e&&(this.finalTickAmt=e,e=5),this.tickAmount=e;
},
adjustTickAmount:function(){
var t=this.tickInterval,e=this.tickPositions,i=this.tickAmount,n=this.finalTickAmt,s=e&&e.length;
if(i>s){
for(;e.length<i;)e.push(M(e[e.length-1]+t));
this.transA*=(s-1)/(i-1),this.max=e[e.length-1];
}else s>i&&(this.tickInterval*=2,this.setTickPositions());
if(p(n)){
for(t=i=e.length;t--;)(3===n&&t%2===1||2>=n&&t>0&&i-1>t)&&e.splice(t,1);
this.finalTickAmt=E;
}
},
setScale:function(){
var t,e;
this.oldMin=this.min,this.oldMax=this.max,this.oldAxisLength=this.len,this.setAxisSize(),
e=this.len!==this.oldAxisLength,Fe(this.series,function(e){
(e.isDirtyData||e.isDirty||e.xAxis.isDirty)&&(t=!0);
}),e||t||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),
this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,
this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();
},
setExtremes:function(t,e,i,n,s){
var o=this,r=o.chart,i=Je(i,!0);
Fe(o.series,function(t){
delete t.kdTree;
}),s=$e(s,{
min:t,
max:e
}),Ue(o,"setExtremes",s,function(){
o.userMin=t,o.userMax=e,o.eventArgs=s,i&&r.redraw(n);
});
},
zoom:function(t,e){
var i=this.dataMin,n=this.dataMax,s=this.options,o=ue(i,Je(s.min,i)),s=pe(n,Je(s.max,n));
return this.allowZoomOutside||(p(i)&&o>=t&&(t=o),p(n)&&e>=s&&(e=s)),this.displayBtn=t!==E||e!==E,
this.setExtremes(t,e,!1,E,{
trigger:"zoom"
}),!0;
},
setAxisSize:function(){
var t=this.chart,e=this.options,i=e.offsetLeft||0,n=this.horiz,s=Je(e.width,t.plotWidth-i+(e.offsetRight||0)),o=Je(e.height,t.plotHeight),r=Je(e.top,t.plotTop),e=Je(e.left,t.plotLeft+i),i=/%$/;
i.test(o)&&(o=parseFloat(o)/100*t.plotHeight),i.test(r)&&(r=parseFloat(r)/100*t.plotHeight+t.plotTop),
this.left=e,this.top=r,this.width=s,this.height=o,this.bottom=t.chartHeight-o-r,
this.right=t.chartWidth-s-e,this.len=pe(n?s:o,0),this.pos=n?e:r;
},
getExtremes:function(){
var t=this.isLog;
return{
min:t?M(c(this.min)):this.min,
max:t?M(c(this.max)):this.max,
dataMin:this.dataMin,
dataMax:this.dataMax,
userMin:this.userMin,
userMax:this.userMax
};
},
getThreshold:function(t){
var e=this.isLog,i=e?c(this.min):this.min,e=e?c(this.max):this.max;
return null===t?t=0>e?e:i:i>t?t=i:t>e&&(t=e),this.translate(t,0,1,0,1);
},
autoLabelAlign:function(t){
return t=(Je(t,0)-90*this.side+720)%360,t>15&&165>t?"right":t>195&&345>t?"left":"center";
},
unsquish:function(){
var t,e,i,n=this.ticks,s=this.options.labels,o=this.horiz,r=this.tickInterval,a=r,h=this.len/(((this.categories?1:0)+this.max-this.min)/r),l=s.rotation,c=this.chart.renderer.fontMetrics(s.style.fontSize,n[0]&&n[0].label),d=Number.MAX_VALUE,u=function(t){
return t/=h||1,t=t>1?de(t):1,t*r;
};
return o?(i=!s.staggerLines&&!s.step&&(p(l)?[l]:h<Je(s.autoRotationLimit,80)&&s.autoRotation))&&Fe(i,function(i){
var n;
(i===l||i&&i>=-90&&90>=i)&&(e=u(fe(c.h/me(ve*i))),n=e+fe(i/360),d>n&&(d=n,t=i,a=e));
}):s.step||(a=u(c.h)),this.autoRotation=i,this.labelRotation=Je(t,l),a;
},
renderUnsquish:function(){
var t,e,i,s=this.chart,r=s.renderer,a=this.tickPositions,h=this.ticks,l=this.options.labels,c=this.horiz,d=s.margin,p=this.categories?a.length:a.length-1,d=this.slotWidth=c&&(l.step||0)<2&&!l.rotation&&(this.staggerLines||1)*s.plotWidth/p||!c&&(d[3]&&d[3]-s.spacing[3]||.33*s.chartWidth),u=pe(1,le(d-2*(l.padding||5))),f={},p=r.fontMetrics(l.style.fontSize,h[0]&&h[0].label),g=l.style.textOverflow,m=0;
if(o(l.rotation)||(f.rotation=l.rotation||0),this.autoRotation)Fe(a,function(t){
(t=h[t])&&t.labelLength>m&&(m=t.labelLength);
}),m>u&&m>p.h?f.rotation=this.labelRotation:this.labelRotation=0;else if(d&&(t={
width:u+"px"
},!g))for(t.textOverflow="clip",e=a.length;!c&&e--;)i=a[e],(u=h[i].label)&&("ellipsis"===u.styles.textOverflow&&u.css({
textOverflow:"clip"
}),(u.getBBox().height>this.len/a.length-(p.h-p.f)||h[i].labelLength>d)&&(u.specCss={
textOverflow:"ellipsis"
}));
f.rotation&&(t={
width:(m>.5*s.chartHeight?.33*s.chartHeight:s.chartHeight)+"px"
},!g)&&(t.textOverflow="ellipsis"),this.labelAlign=f.align=l.align||this.autoLabelAlign(this.labelRotation),
Fe(a,function(e){
var i=(e=h[e])&&e.label;
i&&(i.attr(f),t&&i.css(n(t,i.specCss)),delete i.specCss,e.rotation=f.rotation);
}),this.tickRotCorr=r.rotCorr(p.b,this.labelRotation||0,0!==this.side);
},
hasData:function(){
return this.hasVisibleSeries||p(this.min)&&p(this.max)&&!!this.tickPositions;
},
getOffset:function(){
var t,e,i,n,s=this,o=s.chart,r=o.renderer,a=s.options,h=s.tickPositions,l=s.ticks,c=s.horiz,d=s.side,u=o.inverted?[1,0,3,2][d]:d,f=0,g=0,m=a.title,y=a.labels,v=0,x=s.opposite,b=o.axisOffset,o=o.clipOffset,k=[-1,1,1,-1][d],w=s.axisParent;
if(t=s.hasData(),s.showAxis=e=t||Je(a.showEmpty,!0),s.staggerLines=s.horiz&&y.staggerLines,
s.axisGroup||(s.gridGroup=r.g("grid").attr({
zIndex:a.gridZIndex||1
}).add(w),s.axisGroup=r.g("axis").attr({
zIndex:a.zIndex||2
}).add(w),s.labelGroup=r.g("axis-labels").attr({
zIndex:y.zIndex||7
}).addClass("highcharts-"+s.coll.toLowerCase()+"-labels").add(w)),t||s.isLinked)Fe(h,function(t){
l[t]?l[t].addLabel():l[t]=new R(s,t);
}),s.renderUnsquish(),y.reserveSpace!==!1&&(0===d||2===d||{
1:"left",
3:"right"
}[d]===s.labelAlign||"center"===s.labelAlign)&&Fe(h,function(t){
v=pe(l[t].getLabelSize(),v);
}),s.staggerLines&&(v*=s.staggerLines,s.labelOffset=v*(s.opposite?-1:1));else for(n in l)l[n].destroy(),
delete l[n];
m&&m.text&&m.enabled!==!1&&(s.axisTitle||(s.axisTitle=r.text(m.text,0,0,m.useHTML).attr({
zIndex:7,
rotation:m.rotation||0,
align:m.textAlign||{
low:x?"right":"left",
middle:"center",
high:x?"left":"right"
}[m.align]
}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(m.style).add(s.axisGroup),
s.axisTitle.isNew=!0),e&&(f=s.axisTitle.getBBox()[c?"height":"width"],i=m.offset,
g=p(i)?0:Je(m.margin,c?5:10)),s.axisTitle[e?"show":"hide"](!0)),s.offset=k*Je(a.offset,b[d]),
s.tickRotCorr=s.tickRotCorr||{
x:0,
y:0
},r=2===d?s.tickRotCorr.y:0,c=Math.abs(v)+g+(v&&k*(c?Je(y.y,s.tickRotCorr.y+8):y.x)-r),
s.axisTitleMargin=Je(i,c),b[d]=pe(b[d],s.axisTitleMargin+f+k*s.offset,c),a=a.offset?0:2*ce(a.lineWidth/2),
o[u]=pe(o[u],a);
},
getLinePath:function(t){
var e=this.chart,i=this.opposite,n=this.offset,s=this.horiz,o=this.left+(i?this.width:0)+n,n=e.chartHeight-this.bottom-(i?this.height:0)+n;
return i&&(t*=-1),e.renderer.crispLine(["M",s?this.left:o,s?n:this.top,"L",s?e.chartWidth-this.right:o,s?n:e.chartHeight-this.bottom],t);
},
getTitlePosition:function(){
var t=this.horiz,e=this.left,i=this.top,n=this.len,o=this.options.title,r=t?e:i,a=this.opposite,h=this.offset,l=o.x||0,c=o.y||0,d=s(o.style.fontSize||12),n={
low:r+(t?0:n),
middle:r+n/2,
high:r+(t?n:0)
}[o.align],e=(t?i+this.height:e)+(t?1:-1)*(a?-1:1)*this.axisTitleMargin+(2===this.side?d:0);
return{
x:t?n+l:e+(a?this.width:0)+h+l,
y:t?e+c-(a?this.height:0)+h:n+c
};
},
render:function(){
var t,e,i,n=this,s=n.chart,o=s.renderer,r=n.options,a=n.isLog,h=n.isLinked,l=n.tickPositions,d=n.axisTitle,u=n.ticks,f=n.minorTicks,m=n.alternateBands,y=r.stackLabels,v=r.alternateGridColor,x=n.tickmarkOffset,b=r.lineWidth,k=s.hasRendered&&p(n.oldMin)&&!isNaN(n.oldMin),w=n.showAxis,S=o.globalAnimation;
n.labelEdge.length=0,n.overlap=!1,Fe([u,f,m],function(t){
for(var e in t)t[e].isActive=!1;
}),(n.hasData()||h)&&(n.minorTickInterval&&!n.categories&&Fe(n.getMinorTickPositions(),function(t){
f[t]||(f[t]=new R(n,t,"minor")),k&&f[t].isNew&&f[t].render(null,!0),f[t].render(null,!1,1);
}),l.length&&(Fe(l,function(t,e){
(!h||t>=n.min&&t<=n.max)&&(u[t]||(u[t]=new R(n,t)),k&&u[t].isNew&&u[t].render(e,!0,.1),
u[t].render(e));
}),x&&(0===n.min||n.single))&&(u[-1]||(u[-1]=new R(n,-1,null,!0)),u[-1].render(-1)),
v&&Fe(l,function(t,o){
i=l[o+1]!==E?l[o+1]+x:n.max-x,o%2===0&&t<n.max&&i<=n.max+(s.polar?-x:x)&&(m[t]||(m[t]=new re.PlotLineOrBand(n)),
e=t+x,m[t].options={
from:a?c(e):e,
to:a?c(i):i,
color:v
},m[t].render(),m[t].isActive=!0);
}),n._addedPlotLB||(Fe((r.plotLines||[]).concat(r.plotBands||[]),function(t){
n.addPlotBandOrLine(t);
}),n._addedPlotLB=!0)),Fe([u,f,m],function(t){
var e,i,n=[],o=S?S.duration||500:0;
for(e in t)t[e].isActive||(t[e].render(e,!1,0),t[e].isActive=!1,n.push(e));
g(function(){
for(i=n.length;i--;)t[n[i]]&&!t[n[i]].isActive&&(t[n[i]].destroy(),delete t[n[i]]);
},t!==m&&s.hasRendered&&o?o:0);
}),b&&(t=n.getLinePath(b),n.axisLine?n.axisLine.animate({
d:t
}):n.axisLine=o.path(t).attr({
stroke:r.lineColor,
"stroke-width":b,
zIndex:7
}).add(n.axisGroup),n.axisLine[w?"show":"hide"](!0)),d&&w&&(d[d.isNew?"attr":"animate"](n.getTitlePosition()),
d.isNew=!1),y&&y.enabled&&n.renderStackTotals(),n.isDirty=!1;
},
redraw:function(){
this.visible&&(this.render(),Fe(this.plotLinesAndBands,function(t){
t.render();
})),Fe(this.series,function(t){
t.isDirty=!0;
});
},
destroy:function(t){
var e,i=this,n=i.stacks,s=i.plotLinesAndBands;
t||_e(i);
for(e in n)P(n[e]),n[e]=null;
for(Fe([i.ticks,i.minorTicks,i.alternateBands],function(t){
P(t);
}),t=s.length;t--;)s[t].destroy();
Fe("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(t){
i[t]&&(i[t]=i[t].destroy());
}),this.cross&&this.cross.destroy();
},
drawCrosshair:function(t,e){
var i,n,s,o=this.crosshair;
!this.crosshair||(p(e)||!Je(o.snap,!0))===!1||e&&e.series&&e.series[this.coll]!==this?this.hideCrosshair():(Je(o.snap,!0)?p(e)&&(i=this.isXAxis?e.plotX:this.len-e.plotY):i=this.horiz?t.chartX-this.pos:this.len-t.chartY+this.pos,
i=this.isRadial?this.getPlotLinePath(this.isXAxis?e.x:Je(e.stackY,e.y))||null:this.getPlotLinePath(null,null,null,null,i)||null,
null===i?this.hideCrosshair():(n=this.categories&&!this.isRadial,s=Je(o.width,n?this.transA:1),
this.cross?this.cross.attr({
d:i,
visibility:"visible",
"stroke-width":s
}):(n={
"stroke-width":s,
stroke:o.color||(n?"rgba(155,200,255,0.2)":"#C0C0C0"),
zIndex:Je(o.zIndex,2)
},o.dashStyle&&(n.dashstyle=o.dashStyle),this.cross=this.chart.renderer.path(i).attr(n).add())));
},
hideCrosshair:function(){
this.cross&&this.cross.hide();
}
},$e(ri.prototype,{
getPlotBandPath:function(t,e){
var i=this.getPlotLinePath(e,null,null,!0),n=this.getPlotLinePath(t,null,null,!0);
return n&&i?(n.flat=n.toString()===i.toString(),n.push(i[4],i[5],i[1],i[2])):n=null,
n;
},
addPlotBand:function(t){
return this.addPlotBandOrLine(t,"plotBands");
},
addPlotLine:function(t){
return this.addPlotBandOrLine(t,"plotLines");
},
addPlotBandOrLine:function(t,e){
var i=new re.PlotLineOrBand(this,t).render(),n=this.userOptions;
return i&&(e&&(n[e]=n[e]||[],n[e].push(t)),this.plotLinesAndBands.push(i)),i;
},
removePlotBandOrLine:function(t){
for(var e=this.plotLinesAndBands,i=this.options,n=this.userOptions,s=e.length;s--;)e[s].id===t&&e[s].destroy();
Fe([i.plotLines||[],n.plotLines||[],i.plotBands||[],n.plotBands||[]],function(e){
for(s=e.length;s--;)e[s].id===t&&d(e,e[s]);
});
}
}),ri.prototype.getTimeTicks=function(t,e,i,n){
var s,o=[],r={},a=G.global.useUTC,h=new N(e-b(e)),l=t.unitRange,c=t.count;
if(p(e)){
h[Q](l>=Y.second?0:c*ce(h.getMilliseconds()/c)),l>=Y.second&&h[te](l>=Y.minute?0:c*ce(h.getSeconds()/c)),
l>=Y.minute&&h[ee](l>=Y.hour?0:c*ce(h[U]()/c)),l>=Y.hour&&h[ie](l>=Y.day?0:c*ce(h[K]()/c)),
l>=Y.day&&h[ne](l>=Y.month?1:c*ce(h[q]()/c)),l>=Y.month&&(h[se](l>=Y.year?0:c*ce(h[$]()/c)),
s=h[J]()),l>=Y.year&&(s-=s%c,h[oe](s)),l===Y.week&&h[ne](h[q]()-h[Z]()+Je(n,1)),
e=1,(j||_)&&(h=h.getTime(),h=new N(h+b(h))),s=h[J]();
for(var n=h.getTime(),d=h[$](),u=h[q](),f=(Y.day+(a?b(h):6e4*h.getTimezoneOffset()))%Y.day;i>n;)o.push(n),
l===Y.year?n=V(s+e*c,0):l===Y.month?n=V(s,d+e*c):a||l!==Y.day&&l!==Y.week?n+=l*c:n=V(s,d,u+e*c*(l===Y.day?1:7)),
e++;
o.push(n),Fe(Ye(o,function(t){
return l<=Y.hour&&t%Y.day===f;
}),function(t){
r[t]="day";
});
}
return o.info=$e(t,{
higherRanks:r,
totalRange:l*c
}),o;
},ri.prototype.normalizeTimeTickInterval=function(t,e){
var i,n=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],s=n[n.length-1],o=Y[s[0]],r=s[1];
for(i=0;i<n.length&&(s=n[i],o=Y[s[0]],r=s[1],!(n[i+1]&&t<=(o*r[r.length-1]+Y[n[i+1][0]])/2));i++);
return o===Y.year&&5*o>t&&(r=[1,2,5]),n=S(t/o,r,"year"===s[0]?pe(w(t/o),1):1),{
unitRange:o,
count:n,
unitName:s[0]
};
},ri.prototype.getLogTickPositions=function(t,e,i,n){
var s=this.options,o=this.len,r=[];
if(n||(this._minorAutoInterval=null),t>=.5)t=le(t),r=this.getLinearTickPositions(t,e,i);else if(t>=.08)for(var a,h,d,p,u,o=ce(e),s=t>.3?[1,2,4]:t>.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];i+1>o&&!u;o++)for(h=s.length,
a=0;h>a&&!u;a++)d=l(c(o)*s[a]),d>e&&(!n||i>=p)&&p!==E&&r.push(p),p>i&&(u=!0),p=d;else e=c(e),
i=c(i),t=s[n?"minorTickInterval":"tickInterval"],t=Je("auto"===t?null:t,this._minorAutoInterval,(i-e)*(s.tickPixelInterval/(n?5:1))/((n?o/this.tickPositions.length:o)||1)),
t=S(t,null,w(t)),r=Ve(this.getLinearTickPositions(t,e,i),l),n||(this._minorAutoInterval=t/5);
return n||(this.tickInterval=t),r;
};
var ai=re.Tooltip=function(){
this.init.apply(this,arguments);
};
ai.prototype={
init:function(t,e){
var i=e.borderWidth,n=e.style,o=s(n.padding);
this.chart=t,this.options=e,this.crosshairs=[],this.now={
x:0,
y:0
},this.isHidden=!0,this.label=t.renderer.label("",0,0,e.shape||"callout",null,null,e.useHTML,null,"tooltip").attr({
padding:o,
fill:e.backgroundColor,
"stroke-width":i,
r:e.borderRadius,
zIndex:8
}).css(n).css({
padding:0
}).add().attr({
y:-9999
}),Me||this.label.shadow(e.shadow),this.shared=e.shared;
},
destroy:function(){
this.label&&(this.label=this.label.destroy()),clearTimeout(this.hideTimer),clearTimeout(this.tooltipTimeout);
},
move:function(t,e,i,n){
var s=this,o=s.now,r=s.options.animation!==!1&&!s.isHidden&&(fe(t-o.x)>1||fe(e-o.y)>1),a=s.followPointer||s.len>1;
$e(o,{
x:r?(2*o.x+t)/3:t,
y:r?(o.y+e)/2:e,
anchorX:a?E:r?(2*o.anchorX+i)/3:i,
anchorY:a?E:r?(o.anchorY+n)/2:n
}),s.label.attr(o),r&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){
s&&s.move(t,e,i,n);
},32));
},
hide:function(t){
var e=this;
clearTimeout(this.hideTimer),t=Je(t,this.options.hideDelay,500),this.isHidden||(this.hideTimer=g(function(){
e.label[t?"fadeOut":"hide"](),e.isHidden=!0;
},t));
},
getAnchor:function(t,e){
var i,n,s,o=this.chart,r=o.inverted,a=o.plotTop,h=o.plotLeft,l=0,c=0,t=f(t);
return i=t[0].tooltipPos,this.followPointer&&e&&(e.chartX===E&&(e=o.pointer.normalize(e)),
i=[e.chartX-o.plotLeft,e.chartY-a]),i||(Fe(t,function(t){
n=t.series.yAxis,s=t.series.xAxis,l+=t.plotX+(!r&&s?s.left-h:0),c+=(t.plotLow?(t.plotLow+t.plotHigh)/2:t.plotY)+(!r&&n?n.top-a:0);
}),l/=t.length,c/=t.length,i=[r?o.plotWidth-c:l,this.shared&&!r&&t.length>1&&e?e.chartY-a:r?o.plotHeight-l:c]),
Ve(i,le);
},
getPosition:function(t,e,i){
var n,s=this.chart,o=this.distance,r={},a=i.h||0,h=["y",s.chartHeight,e,i.plotY+s.plotTop,s.plotTop,s.plotTop+s.plotHeight],l=["x",s.chartWidth,t,i.plotX+s.plotLeft,s.plotLeft,s.plotLeft+s.plotWidth],c=Je(i.ttBelow,s.inverted&&!i.negative||!s.inverted&&i.negative),d=function(t,e,i,n,s,h){
var l=n-o>i,d=e>n+o+i,p=n-o-i;
if(n+=o,c&&d)r[t]=n;else if(!c&&l)r[t]=p;else if(l)r[t]=ue(h-i,0>p-a?p:p-a);else{
if(!d)return!1;
r[t]=pe(s,n+a+i>e?n:n+a);
}
},p=function(t,e,i,n){
var s;
return o>n||n>e-o?s=!1:r[t]=i/2>n?1:n>e-i/2?e-i-2:n-i/2,s;
},u=function(t){
var e=h;
h=l,l=e,n=t;
},f=function(){
d.apply(0,h)!==!1?p.apply(0,l)===!1&&!n&&(u(!0),f()):n?r.x=r.y=0:(u(!0),f());
};
return(s.inverted||this.len>1)&&u(),f(),r;
},
defaultFormatter:function(t){
var e,i=this.points||f(this);
return e=[t.tooltipFooterHeaderFormatter(i[0])],e=e.concat(t.bodyFormatter(i)),e.push(t.tooltipFooterHeaderFormatter(i[0],!0)),
e.join("");
},
refresh:function(t,e){
var i,n,s,o,r=this.chart,a=this.label,h=this.options,l={},c=[];
o=h.formatter||this.defaultFormatter;
var d,l=r.hoverPoints,p=this.shared;
clearTimeout(this.hideTimer),this.followPointer=f(t)[0].series.tooltipOptions.followPointer,
s=this.getAnchor(t,e),i=s[0],n=s[1],!p||t.series&&t.series.noSharedTooltip?l=t.getLabelConfig():(r.hoverPoints=t,
l&&Fe(l,function(t){
t.setState();
}),Fe(t,function(t){
t.setState("hover"),c.push(t.getLabelConfig());
}),l={
x:t[0].category,
y:t[0].y
},l.points=c,this.len=c.length,t=t[0]),o=o.call(l,this),l=t.series,this.distance=Je(l.tooltipOptions.distance,16),
o===!1?this.hide():(this.isHidden&&(Ze(a),a.attr("opacity",1).show()),a.attr({
text:o
}),d=h.borderColor||t.color||l.color||"#606060",a.attr({
stroke:d
}),this.updatePosition({
plotX:i,
plotY:n,
negative:t.negative,
ttBelow:t.ttBelow,
h:s[2]||0
}),this.isHidden=!1),Ue(r,"tooltipRefresh",{
text:o,
x:i+r.plotLeft,
y:n+r.plotTop,
borderColor:d
});
},
updatePosition:function(t){
var e=this.chart,i=this.label,i=(this.options.positioner||this.getPosition).call(this,i.width,i.height,t);
this.move(le(i.x),le(i.y||0),t.plotX+e.plotLeft,t.plotY+e.plotTop);
},
getXDateFormat:function(t,e,i){
var n,s,o,e=e.dateTimeLabelFormats,r=i&&i.closestPointRange,a={
millisecond:15,
second:12,
minute:9,
hour:6,
day:3
},h="millisecond";
if(r){
o=F("%m-%d %H:%M:%S.%L",t.x);
for(s in Y){
if(r===Y.week&&+F("%w",t.x)===i.options.startOfWeek&&"00:00:00.000"===o.substr(6)){
s="week";
break;
}
if(Y[s]>r){
s=h;
break;
}
if(a[s]&&o.substr(a[s])!=="01-01 00:00:00.000".substr(a[s]))break;
"week"!==s&&(h=s);
}
s&&(n=e[s]);
}else n=e.day;
return n||e.year;
},
tooltipFooterHeaderFormatter:function(t,e){
var i=e?"footer":"header",n=t.series,s=n.tooltipOptions,o=s.xDateFormat,r=n.xAxis,a=r&&"datetime"===r.options.type&&h(t.key),i=s[i+"Format"];
return a&&!o&&(o=this.getXDateFormat(t,s,r)),a&&o&&(i=i.replace("{point.key}","{point.key:"+o+"}")),
k(i,{
point:t,
series:n
});
},
bodyFormatter:function(t){
return Ve(t,function(t){
var e=t.series.tooltipOptions;
return(e.pointFormatter||t.point.tooltipFormatter).call(t.point,e.pointFormat);
});
}
};
var hi;
H=ae&&ae.documentElement.ontouchstart!==E;
var li=re.Pointer=function(t,e){
this.init(t,e);
};
if(li.prototype={
init:function(t,e){
var i,n=e.chart,s=n.events,o=Me?"":n.zoomType,n=t.inverted;
this.options=e,this.chart=t,this.zoomX=i=/x/.test(o),this.zoomY=o=/y/.test(o),this.zoomHor=i&&!n||o&&n,
this.zoomVert=o&&!n||i&&n,this.hasZoom=i||o,this.runChartClick=s&&!!s.click,this.pinchDown=[],
this.lastValidTouch={},re.Tooltip&&e.tooltip.enabled&&(t.tooltip=new ai(t,e.tooltip),
this.followTouchMove=Je(e.tooltip.followTouchMove,!0)),this.setDOMEvents();
},
normalize:function(e,i){
var n,s,e=e||t.event;
return e.target||(e.target=e.srcElement),s=e.touches?e.touches.length?e.touches.item(0):e.changedTouches[0]:e,
i||(this.chartPosition=i=Ne(this.chart.container)),s.pageX===E?(n=pe(e.x,e.clientX-i.left),
s=e.y):(n=s.pageX-i.left,s=s.pageY-i.top),$e(e,{
chartX:le(n),
chartY:le(s)
});
},
getCoordinates:function(t){
var e={
xAxis:[],
yAxis:[]
};
return Fe(this.chart.axes,function(i){
e[i.isXAxis?"xAxis":"yAxis"].push({
axis:i,
value:i.toValue(t[i.horiz?"chartX":"chartY"])
});
}),e;
},
runPointActions:function(t){
var e,i,n,s,o,r,a=this.chart,h=a.series,l=a.tooltip,c=l?l.shared:!1,d=a.hoverPoint,p=a.hoverSeries,u=Number.MAX_VALUE,f=[];
if(!c&&!p)for(e=0;e<h.length;e++)(h[e].directTouch||!h[e].options.stickyTracking)&&(h=[]);
if(p&&(c?p.noSharedTooltip:p.directTouch)&&d?o=d:(Fe(h,function(e){
i=e.noSharedTooltip&&c,n=!c&&e.directTouch,e.visible&&!i&&!n&&Je(e.options.enableMouseTracking,!0)&&(r=e.searchPoint(t,!i&&1===e.kdDimensions))&&f.push(r);
}),Fe(f,function(t){
s=c||1!==t.series.kdDimensions?t.distX:t.dist,t&&"number"==typeof s&&u>s&&(u=s,o=t);
})),o&&(o!==this.prevKDPoint||l&&l.isHidden)){
if(c&&!o.series.noSharedTooltip){
for(e=f.length;e--;)(f[e].clientX!==o.clientX||f[e].series.noSharedTooltip)&&f.splice(e,1);
f.length&&l&&l.refresh(f,t),Fe(f,function(e){
e.onMouseOver(t,e!==(p&&p.directTouch&&d||o));
});
}else l&&l.refresh(o,t),p&&p.directTouch||o.onMouseOver(t);
this.prevKDPoint=o;
}else h=p&&p.tooltipOptions.followPointer,l&&h&&!l.isHidden&&(h=l.getAnchor([{}],t),
l.updatePosition({
plotX:h[0],
plotY:h[1]
}));
this._onDocumentMouseMove||(this._onDocumentMouseMove=function(t){
ze[hi]&&ze[hi].pointer.onDocumentMouseMove(t);
},je(ae,"mousemove",this._onDocumentMouseMove)),Fe(a.axes,function(e){
e.drawCrosshair(t,Je(o,d));
});
},
reset:function(t,e){
var i=this.chart,n=i.hoverSeries,s=i.hoverPoint,o=i.hoverPoints,r=i.tooltip,a=r&&r.shared?o:s;
(t=t&&r&&a)&&Fe(f(a),function(e){
void 0===e.plotX&&(t=!1);
}),t?(r.refresh(a),s&&(s.setState(s.state,!0),Fe(i.axes,function(t){
Je(t.options.crosshair&&t.options.crosshair.snap,!0)?t.drawCrosshair(null,s):t.hideCrosshair();
}))):(s&&s.onMouseOut(),o&&Fe(o,function(t){
t.setState();
}),n&&n.onMouseOut(),r&&r.hide(e),this._onDocumentMouseMove&&(_e(ae,"mousemove",this._onDocumentMouseMove),
this._onDocumentMouseMove=null),Fe(i.axes,function(t){
t.hideCrosshair();
}),this.hoverX=i.hoverPoints=i.hoverPoint=null);
},
scaleGroups:function(t,e){
var i,n=this.chart;
Fe(n.series,function(s){
i=t||s.getPlotBox(),s.xAxis&&s.xAxis.zoomEnabled&&(s.group.attr(i),s.markerGroup&&(s.markerGroup.attr(i),
s.markerGroup.clip(e?n.clipRect:null)),s.dataLabelsGroup&&s.dataLabelsGroup.attr(i));
}),n.clipRect.attr(e||n.clipBox);
},
dragStart:function(t){
var e=this.chart;
e.mouseIsDown=t.type,e.cancelClick=!1,e.mouseDownX=this.mouseDownX=t.chartX,e.mouseDownY=this.mouseDownY=t.chartY;
},
drag:function(t){
var e,i=this.chart,n=i.options.chart,s=t.chartX,o=t.chartY,r=this.zoomHor,a=this.zoomVert,h=i.plotLeft,l=i.plotTop,c=i.plotWidth,d=i.plotHeight,p=this.selectionMarker,u=this.mouseDownX,f=this.mouseDownY,g=n.panKey&&t[n.panKey+"Key"];
p&&p.touch||(h>s?s=h:s>h+c&&(s=h+c),l>o?o=l:o>l+d&&(o=l+d),this.hasDragged=Math.sqrt(Math.pow(u-s,2)+Math.pow(f-o,2)),
this.hasDragged>10&&(e=i.isInsidePlot(u-h,f-l),i.hasCartesianSeries&&(this.zoomX||this.zoomY)&&e&&!g&&!p&&(this.selectionMarker=p=i.renderer.rect(h,l,r?1:c,a?1:d,0).attr({
fill:n.selectionMarkerFill||"rgba(69,114,167,0.25)",
zIndex:7
}).add()),p&&r&&(s-=u,p.attr({
width:fe(s),
x:(s>0?0:s)+u
})),p&&a&&(s=o-f,p.attr({
height:fe(s),
y:(s>0?0:s)+f
})),e&&!p&&n.panning&&i.pan(t,n.panning)));
},
drop:function(t){
var e=this,i=this.chart,n=this.hasPinched;
if(this.selectionMarker){
var s,o={
xAxis:[],
yAxis:[]
},r=this.selectionMarker,a=r.attr?r.attr("x"):r.x,h=r.attr?r.attr("y"):r.y,l=r.attr?r.attr("width"):r.width,c=r.attr?r.attr("height"):r.height;
(this.hasDragged||n)&&(Fe(i.axes,function(i){
if(i.zoomEnabled&&p(i.min)&&(n||e[{
xAxis:"zoomX",
yAxis:"zoomY"
}[i.coll]])){
var r=i.horiz,d="touchend"===t.type?i.minPixelPadding:0,u=i.toValue((r?a:h)+d),r=i.toValue((r?a+l:h+c)-d);
o[i.coll].push({
axis:i,
min:ue(u,r),
max:pe(u,r)
}),s=!0;
}
}),s&&Ue(i,"selection",o,function(t){
i.zoom($e(t,n?{
animation:!1
}:null));
})),this.selectionMarker=this.selectionMarker.destroy(),n&&this.scaleGroups();
}
i&&(m(i.container,{
cursor:i._cursor
}),i.cancelClick=this.hasDragged>10,i.mouseIsDown=this.hasDragged=this.hasPinched=!1,
this.pinchDown=[]);
},
onContainerMouseDown:function(t){
t=this.normalize(t),t.preventDefault&&t.preventDefault(),this.dragStart(t);
},
onDocumentMouseUp:function(t){
ze[hi]&&ze[hi].pointer.drop(t);
},
onDocumentMouseMove:function(t){
var e=this.chart,i=this.chartPosition,t=this.normalize(t,i);
i&&!this.inClass(t.target,"highcharts-tracker")&&!e.isInsidePlot(t.chartX-e.plotLeft,t.chartY-e.plotTop)&&this.reset();
},
onContainerMouseLeave:function(){
var t=ze[hi];
t&&(t.pointer.reset(),t.pointer.chartPosition=null);
},
onContainerMouseMove:function(t){
var e=this.chart;
hi=e.index,t=this.normalize(t),t.returnValue=!1,"mousedown"===e.mouseIsDown&&this.drag(t),
(this.inClass(t.target,"highcharts-tracker")||e.isInsidePlot(t.chartX-e.plotLeft,t.chartY-e.plotTop))&&!e.openMenu&&this.runPointActions(t);
},
inClass:function(t,e){
for(var i;t;){
if(i=u(t,"class")){
if(-1!==i.indexOf(e))return!0;
if(-1!==i.indexOf("highcharts-container"))return!1;
}
t=t.parentNode;
}
},
onTrackerMouseOut:function(t){
var e=this.chart.hoverSeries,t=t.relatedTarget||t.toElement;
!e||e.options.stickyTracking||this.inClass(t,"highcharts-tooltip")||this.inClass(t,"highcharts-series-"+e.index)||e.onMouseOut();
},
onContainerClick:function(t){
var e=this.chart,i=e.hoverPoint,n=e.plotLeft,s=e.plotTop,t=this.normalize(t);
e.cancelClick||(i&&this.inClass(t.target,"highcharts-tracker")?(Ue(i.series,"click",$e(t,{
point:i
})),e.hoverPoint&&i.firePointEvent("click",t)):($e(t,this.getCoordinates(t)),e.isInsidePlot(t.chartX-n,t.chartY-s)&&Ue(e,"click",t)));
},
setDOMEvents:function(){
var t=this,e=t.chart.container;
e.onmousedown=function(e){
t.onContainerMouseDown(e);
},e.onmousemove=function(e){
t.onContainerMouseMove(e);
},e.onclick=function(e){
t.onContainerClick(e);
},je(e,"mouseleave",t.onContainerMouseLeave),1===Re&&je(ae,"mouseup",t.onDocumentMouseUp),
H&&(e.ontouchstart=function(e){
t.onContainerTouchStart(e);
},e.ontouchmove=function(e){
t.onContainerTouchMove(e);
},1===Re&&je(ae,"touchend",t.onDocumentTouchEnd));
},
destroy:function(){
var t;
_e(this.chart.container,"mouseleave",this.onContainerMouseLeave),Re||(_e(ae,"mouseup",this.onDocumentMouseUp),
_e(ae,"touchend",this.onDocumentTouchEnd)),clearInterval(this.tooltipTimeout);
for(t in this)this[t]=null;
}
},$e(re.Pointer.prototype,{
pinchTranslate:function(t,e,i,n,s,o){
(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,t,e,i,n,s,o),(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,t,e,i,n,s,o);
},
pinchTranslateDirection:function(t,e,i,n,s,o,r,a){
var h,l,c,d=this.chart,p=t?"x":"y",u=t?"X":"Y",f="chart"+u,g=t?"width":"height",m=d["plot"+(t?"Left":"Top")],y=a||1,v=d.inverted,x=d.bounds[t?"h":"v"],b=1===e.length,k=e[0][f],w=i[0][f],S=!b&&e[1][f],T=!b&&i[1][f],i=function(){
!b&&fe(k-S)>20&&(y=a||fe(w-T)/fe(k-S)),l=(m-w)/y+k,h=d["plot"+(t?"Width":"Height")]/y;
};
i(),e=l,e<x.min?(e=x.min,c=!0):e+h>x.max&&(e=x.max-h,c=!0),c?(w-=.8*(w-r[p][0]),
b||(T-=.8*(T-r[p][1])),i()):r[p]=[w,T],v||(o[p]=l-m,o[g]=h),o=v?1/y:y,s[g]=h,s[p]=e,
n[v?t?"scaleY":"scaleX":"scale"+u]=y,n["translate"+u]=o*m+(w-o*k);
},
pinch:function(t){
var e=this,i=e.chart,n=e.pinchDown,s=t.touches,o=s.length,r=e.lastValidTouch,a=e.hasZoom,h=e.selectionMarker,l={},c=1===o&&(e.inClass(t.target,"highcharts-tracker")&&i.runTrackerClick||e.runChartClick),d={};
o>1&&(e.initiated=!0),a&&e.initiated&&!c&&t.preventDefault(),Ve(s,function(t){
return e.normalize(t);
}),"touchstart"===t.type?(Fe(s,function(t,e){
n[e]={
chartX:t.chartX,
chartY:t.chartY
};
}),r.x=[n[0].chartX,n[1]&&n[1].chartX],r.y=[n[0].chartY,n[1]&&n[1].chartY],Fe(i.axes,function(t){
if(t.zoomEnabled){
var e=i.bounds[t.horiz?"h":"v"],n=t.minPixelPadding,s=t.toPixels(Je(t.options.min,t.dataMin)),o=t.toPixels(Je(t.options.max,t.dataMax)),r=ue(s,o),s=pe(s,o);
e.min=ue(t.pos,r-n),e.max=pe(t.pos+t.len,s+n);
}
}),e.res=!0):n.length&&(h||(e.selectionMarker=h=$e({
destroy:De,
touch:!0
},i.plotBox)),e.pinchTranslate(n,s,l,h,d,r),e.hasPinched=a,e.scaleGroups(l,d),!a&&e.followTouchMove&&1===o?this.runPointActions(e.normalize(t)):e.res&&(e.res=!1,
this.reset(!1,0)));
},
touch:function(t,e){
var i=this.chart;
hi=i.index,1===t.touches.length?(t=this.normalize(t),i.isInsidePlot(t.chartX-i.plotLeft,t.chartY-i.plotTop)&&!i.openMenu?(e&&this.runPointActions(t),
this.pinch(t)):e&&this.reset()):2===t.touches.length&&this.pinch(t);
},
onContainerTouchStart:function(t){
this.touch(t,!0);
},
onContainerTouchMove:function(t){
this.touch(t);
},
onDocumentTouchEnd:function(t){
ze[hi]&&ze[hi].pointer.drop(t);
}
}),t.PointerEvent||t.MSPointerEvent){
var ci={},di=!!t.PointerEvent,pi=function(){
var t,e=[];
e.item=function(t){
return this[t];
};
for(t in ci)ci.hasOwnProperty(t)&&e.push({
pageX:ci[t].pageX,
pageY:ci[t].pageY,
target:ci[t].target
});
return e;
},ui=function(t,e,i,n){
"touch"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_TOUCH||!ze[hi]||(n(t),
n=ze[hi].pointer,n[e]({
type:i,
target:t.currentTarget,
preventDefault:De,
touches:pi()
}));
};
$e(li.prototype,{
onContainerPointerDown:function(t){
ui(t,"onContainerTouchStart","touchstart",function(t){
ci[t.pointerId]={
pageX:t.pageX,
pageY:t.pageY,
target:t.currentTarget
};
});
},
onContainerPointerMove:function(t){
ui(t,"onContainerTouchMove","touchmove",function(t){
ci[t.pointerId]={
pageX:t.pageX,
pageY:t.pageY
},ci[t.pointerId].target||(ci[t.pointerId].target=t.currentTarget);
});
},
onDocumentPointerUp:function(t){
ui(t,"onDocumentTouchEnd","touchend",function(t){
delete ci[t.pointerId];
});
},
batchMSEvents:function(t){
t(this.chart.container,di?"pointerdown":"MSPointerDown",this.onContainerPointerDown),
t(this.chart.container,di?"pointermove":"MSPointerMove",this.onContainerPointerMove),
t(ae,di?"pointerup":"MSPointerUp",this.onDocumentPointerUp);
}
}),Qe(li.prototype,"init",function(t,e,i){
t.call(this,e,i),this.hasZoom&&m(e.container,{
"-ms-touch-action":"none",
"touch-action":"none"
});
}),Qe(li.prototype,"setDOMEvents",function(t){
t.apply(this),(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(je);
}),Qe(li.prototype,"destroy",function(t){
this.batchMSEvents(_e),t.call(this);
});
}
var fi=re.Legend=function(t,e){
this.init(t,e);
};
fi.prototype={
init:function(t,e){
var i=this,s=e.itemStyle,o=e.itemMarginTop||0;
this.options=e,e.enabled&&(i.itemStyle=s,i.itemHiddenStyle=n(s,e.itemHiddenStyle),
i.itemMarginTop=o,i.padding=s=Je(e.padding,8),i.initialItemX=s,i.initialItemY=s-5,
i.maxItemWidth=0,i.chart=t,i.itemHeight=0,i.symbolWidth=Je(e.symbolWidth,16),i.pages=[],
i.render(),je(i.chart,"endResize",function(){
i.positionCheckboxes();
}));
},
colorizeItem:function(t,e){
var i,n=this.options,s=t.legendItem,o=t.legendLine,r=t.legendSymbol,a=this.itemHiddenStyle.color,n=e?n.itemStyle.color:a,h=e?t.legendColor||t.color||"#CCC":a,a=t.options&&t.options.marker,l={
fill:h
};
if(s&&s.css({
fill:n,
color:n
}),o&&o.attr({
stroke:h
}),r){
if(a&&r.isMarker)for(i in l.stroke=h,a=t.convertAttribs(a))s=a[i],s!==E&&(l[i]=s);
r.attr(l);
}
},
positionItem:function(t){
var e=this.options,i=e.symbolPadding,e=!e.rtl,n=t._legendItemPos,s=n[0],n=n[1],o=t.checkbox;
(t=t.legendGroup)&&t.element&&t.translate(e?s:this.legendWidth-s-2*i-4,n),o&&(o.x=s,
o.y=n);
},
destroyItem:function(t){
var e=t.checkbox;
Fe(["legendItem","legendLine","legendSymbol","legendGroup"],function(e){
t[e]&&(t[e]=t[e].destroy());
}),e&&L(t.checkbox);
},
destroy:function(){
var t=this.group,e=this.box;
e&&(this.box=e.destroy()),t&&(this.group=t.destroy());
},
positionCheckboxes:function(t){
var e,i=this.group.alignAttr,n=this.clipHeight||this.legendHeight,s=this.titleHeight;
i&&(e=i.translateY,Fe(this.allItems,function(o){
var r,a=o.checkbox;
a&&(r=e+s+a.y+(t||0)+3,m(a,{
left:i.translateX+o.checkboxOffset+a.x-20+"px",
top:r+"px",
display:r>e-6&&e+n-6>r?"":"none"
}));
}));
},
renderTitle:function(){
var t=this.padding,e=this.options.title,i=0;
e.text&&(this.title||(this.title=this.chart.renderer.label(e.text,t-3,t-4,null,null,null,null,null,"legend-title").attr({
zIndex:1
}).css(e.style).add(this.group)),t=this.title.getBBox(),i=t.height,this.offsetWidth=t.width,
this.contentGroup.attr({
translateY:i
})),this.titleHeight=i;
},
setText:function(t){
var e=this.options;
t.legendItem.attr({
text:e.labelFormat?k(e.labelFormat,t):e.labelFormatter.call(t)
});
},
renderItem:function(t){
var e=this.chart,i=e.renderer,s=this.options,o="horizontal"===s.layout,r=this.symbolWidth,a=s.symbolPadding,h=this.itemStyle,l=this.itemHiddenStyle,c=this.padding,d=o?Je(s.itemDistance,20):0,p=!s.rtl,u=s.width,f=s.itemMarginBottom||0,g=this.itemMarginTop,m=this.initialItemX,y=t.legendItem,v=t.series&&t.series.drawLegendSymbol?t.series:t,x=v.options,x=this.createCheckboxForItem&&x&&x.showCheckbox,b=s.useHTML;
y||(t.legendGroup=i.g("legend-item").attr({
zIndex:1
}).add(this.scrollGroup),t.legendItem=y=i.text("",p?r+a:-a,this.baseline||0,b).css(n(t.visible?h:l)).attr({
align:p?"left":"right",
zIndex:2
}).add(t.legendGroup),this.baseline||(this.fontMetrics=i.fontMetrics(h.fontSize,y),
this.baseline=this.fontMetrics.f+3+g,y.attr("y",this.baseline)),v.drawLegendSymbol(this,t),
this.setItemEvents&&this.setItemEvents(t,y,b,h,l),this.colorizeItem(t,t.visible),
x&&this.createCheckboxForItem(t)),this.setText(t),i=y.getBBox(),r=t.checkboxOffset=s.itemWidth||t.legendItemWidth||r+a+i.width+d+(x?20:0),
this.itemHeight=a=le(t.legendItemHeight||i.height),o&&this.itemX-m+r>(u||e.chartWidth-2*c-m-s.x)&&(this.itemX=m,
this.itemY+=g+this.lastLineHeight+f,this.lastLineHeight=0),this.maxItemWidth=pe(this.maxItemWidth,r),
this.lastItemY=g+this.itemY+f,this.lastLineHeight=pe(a,this.lastLineHeight),t._legendItemPos=[this.itemX,this.itemY],
o?this.itemX+=r:(this.itemY+=g+a+f,this.lastLineHeight=a),this.offsetWidth=u||pe((o?this.itemX-m-d:r)+c,this.offsetWidth);
},
getAllItems:function(){
var t=[];
return Fe(this.chart.series,function(e){
var i=e.options;
Je(i.showInLegend,p(i.linkedTo)?!1:E,!0)&&(t=t.concat(e.legendItems||("point"===i.legendType?e.data:e)));
}),t;
},
adjustMargins:function(t,e){
var i=this.chart,n=this.options,s=n.align.charAt(0)+n.verticalAlign.charAt(0)+n.layout.charAt(0);
this.display&&!n.floating&&Fe([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(o,r){
o.test(s)&&!p(t[r])&&(i[Xe[r]]=pe(i[Xe[r]],i.legend[(r+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][r]*n[r%2?"x":"y"]+Je(n.margin,12)+e[r]));
});
},
render:function(){
var t,e,i,n,s=this,o=s.chart,r=o.renderer,a=s.group,h=s.box,l=s.options,c=s.padding,d=l.borderWidth,p=l.backgroundColor;
s.itemX=s.initialItemX,s.itemY=s.initialItemY,s.offsetWidth=0,s.lastItemY=0,a||(s.group=a=r.g("legend").attr({
zIndex:7
}).add(),s.contentGroup=r.g().attr({
zIndex:1
}).add(a),s.scrollGroup=r.g().add(s.contentGroup)),s.renderTitle(),t=s.getAllItems(),
T(t,function(t,e){
return(t.options&&t.options.legendIndex||0)-(e.options&&e.options.legendIndex||0);
}),l.reversed&&t.reverse(),s.allItems=t,s.display=e=!!t.length,s.lastLineHeight=0,
Fe(t,function(t){
s.renderItem(t);
}),i=(l.width||s.offsetWidth)+c,n=s.lastItemY+s.lastLineHeight+s.titleHeight,n=s.handleOverflow(n),
n+=c,(d||p)&&(h?i>0&&n>0&&(h[h.isNew?"attr":"animate"](h.crisp({
width:i,
height:n
})),h.isNew=!1):(s.box=h=r.rect(0,0,i,n,l.borderRadius,d||0).attr({
stroke:l.borderColor,
"stroke-width":d||0,
fill:p||"none"
}).add(a).shadow(l.shadow),h.isNew=!0),h[e?"show":"hide"]()),s.legendWidth=i,s.legendHeight=n,
Fe(t,function(t){
s.positionItem(t);
}),e&&a.align($e({
width:i,
height:n
},l),!0,"spacingBox"),o.isResizing||this.positionCheckboxes();
},
handleOverflow:function(t){
var e,i,n=this,s=this.chart,o=s.renderer,r=this.options,a=r.y,a=s.spacingBox.height+("top"===r.verticalAlign?-a:a)-this.padding,h=r.maxHeight,l=this.clipRect,c=r.navigation,d=Je(c.animation,!0),p=c.arrowSize||12,u=this.nav,f=this.pages,g=this.padding,m=this.allItems,y=function(t){
l.attr({
height:t
}),n.contentGroup.div&&(n.contentGroup.div.style.clip="rect("+g+"px,9999px,"+(g+t)+"px,0)");
};
return"horizontal"===r.layout&&(a/=2),h&&(a=ue(a,h)),f.length=0,t>a?(this.clipHeight=e=pe(a-20-this.titleHeight-g,0),
this.currentPage=Je(this.currentPage,1),this.fullHeight=t,Fe(m,function(t,n){
var s=t._legendItemPos[1],o=le(t.legendItem.getBBox().height),r=f.length;
(!r||s-f[r-1]>e&&(i||s)!==f[r-1])&&(f.push(i||s),r++),n===m.length-1&&s+o-f[r-1]>e&&f.push(s),
s!==i&&(i=s);
}),l||(l=n.clipRect=o.clipRect(0,g,9999,0),n.contentGroup.clip(l)),y(e),u||(this.nav=u=o.g().attr({
zIndex:1
}).add(this.group),this.up=o.symbol("triangle",0,0,p,p).on("click",function(){
n.scroll(-1,d);
}).add(u),this.pager=o.text("",15,10).css(c.style).add(u),this.down=o.symbol("triangle-down",0,0,p,p).on("click",function(){
n.scroll(1,d);
}).add(u)),n.scroll(0),t=a):u&&(y(s.chartHeight),u.hide(),this.scrollGroup.attr({
translateY:1
}),this.clipHeight=0),t;
},
scroll:function(t,e){
var i=this.pages,n=i.length,s=this.currentPage+t,o=this.clipHeight,r=this.options.navigation,a=r.activeColor,r=r.inactiveColor,h=this.pager,l=this.padding;
s>n&&(s=n),s>0&&(e!==E&&I(e,this.chart),this.nav.attr({
translateX:l,
translateY:o+this.padding+7+this.titleHeight,
visibility:"visible"
}),this.up.attr({
fill:1===s?r:a
}).css({
cursor:1===s?"default":"pointer"
}),h.attr({
text:s+"/"+n
}),this.down.attr({
x:18+this.pager.getBBox().width,
fill:s===n?r:a
}).css({
cursor:s===n?"default":"pointer"
}),i=-i[s-1]+this.initialItemY,this.scrollGroup.animate({
translateY:i
}),this.currentPage=s,this.positionCheckboxes(i));
}
},ni=re.LegendSymbolMixin={
drawRectangle:function(t,e){
var i=t.options.symbolHeight||t.fontMetrics.f;
e.legendSymbol=this.chart.renderer.rect(0,t.baseline-i+1,t.symbolWidth,i,t.options.symbolRadius||0).attr({
zIndex:3
}).add(e.legendGroup);
},
drawLineMarker:function(t){
var e,i=this.options,n=i.marker,s=t.symbolWidth,o=this.chart.renderer,r=this.legendGroup,t=t.baseline-le(.3*t.fontMetrics.b);
i.lineWidth&&(e={
"stroke-width":i.lineWidth
},i.dashStyle&&(e.dashstyle=i.dashStyle),this.legendLine=o.path(["M",0,t,"L",s,t]).attr(e).add(r)),
n&&n.enabled!==!1&&(i=n.radius,this.legendSymbol=n=o.symbol(this.symbol,s/2-i,t-i,2*i,2*i,n).add(r),
n.isMarker=!0);
}
},(/Trident\/7\.0/.test(xe)||Te)&&Qe(fi.prototype,"positionItem",function(t,e){
var i=this,n=function(){
e._legendItemPos&&t.call(i,e);
};
n(),setTimeout(n);
});
var gi=re.Chart=function(){
this.getArgs.apply(this,arguments);
};
re.chart=function(t,e,i){
return new gi(t,e,i);
},gi.prototype={
callbacks:[],
getArgs:function(){
var t=[].slice.call(arguments);
(o(t[0])||t[0].nodeName)&&(this.renderTo=t.shift()),this.init(t[0],t[1]);
},
init:function(t,e){
var i,s=t.series;
t.series=null,i=n(G,t),i.series=t.series=s,this.userOptions=t,s=i.chart,this.margin=this.splashArray("margin",s),
this.spacing=this.splashArray("spacing",s);
var o=s.events;
this.bounds={
h:{},
v:{}
},this.callback=e,this.isResizing=0,this.options=i,this.axes=[],this.series=[],this.hasCartesianSeries=s.showAxes;
var r,a=this;
if(a.index=ze.length,ze.push(a),Re++,s.reflow!==!1&&je(a,"load",function(){
a.initReflow();
}),o)for(r in o)je(a,r,o[r]);
a.xAxis=[],a.yAxis=[],a.animation=Me?!1:Je(s.animation,!0),a.pointCount=a.colorCounter=a.symbolCounter=0,
a.firstRender();
},
initSeries:function(t){
var i=this.options.chart;
return(i=He[t.type||i.type||i.defaultSeriesType])||e(17,!0),i=new i,i.init(this,t),
i;
},
isInsidePlot:function(t,e,i){
var n=i?e:t,t=i?t:e;
return n>=0&&n<=this.plotWidth&&t>=0&&t<=this.plotHeight;
},
redraw:function(t){
var e,i,n=this.axes,s=this.series,o=this.pointer,r=this.legend,a=this.isDirtyLegend,h=this.hasCartesianSeries,l=this.isDirtyBox,c=s.length,d=c,p=this.renderer,u=p.isHidden(),f=[];
for(I(t,this),u&&this.cloneRenderTo(),this.layOutTitles();d--;)if(t=s[d],t.options.stacking&&(e=!0,
t.isDirty)){
i=!0;
break;
}
if(i)for(d=c;d--;)t=s[d],t.options.stacking&&(t.isDirty=!0);
Fe(s,function(t){
t.isDirty&&"point"===t.options.legendType&&(t.updateTotals&&t.updateTotals(),a=!0);
}),a&&r.options.enabled&&(r.render(),this.isDirtyLegend=!1),e&&this.getStacks(),
h&&!this.isResizing&&(this.maxTicks=null,Fe(n,function(t){
t.setScale();
})),this.getMargins(),h&&(Fe(n,function(t){
t.isDirty&&(l=!0);
}),Fe(n,function(t){
var i=t.min+","+t.max;
t.extKey!==i&&(t.extKey=i,f.push(function(){
Ue(t,"afterSetExtremes",$e(t.eventArgs,t.getExtremes())),delete t.eventArgs;
})),(l||e)&&t.redraw();
})),l&&this.drawChartBox(),Fe(s,function(t){
t.isDirty&&t.visible&&(!t.isCartesian||t.xAxis)&&t.redraw();
}),o&&o.reset(!0),p.draw(),Ue(this,"redraw"),u&&this.cloneRenderTo(!0),Fe(f,function(t){
t.call();
});
},
get:function(t){
var e,i,n=this.axes,s=this.series;
for(e=0;e<n.length;e++)if(n[e].options.id===t)return n[e];
for(e=0;e<s.length;e++)if(s[e].options.id===t)return s[e];
for(e=0;e<s.length;e++)for(i=s[e].points||[],n=0;n<i.length;n++)if(i[n].id===t)return i[n];
return null;
},
getAxes:function(){
var t=this,e=this.options,i=e.xAxis=f(e.xAxis||{}),e=e.yAxis=f(e.yAxis||{});
Fe(i,function(t,e){
t.index=e,t.isX=!0;
}),Fe(e,function(t,e){
t.index=e;
}),i=i.concat(e),Fe(i,function(e){
new ri(t,e);
});
},
getSelectedPoints:function(){
var t=[];
return Fe(this.series,function(e){
t=t.concat(Ye(e.points||[],function(t){
return t.selected;
}));
}),t;
},
getSelectedSeries:function(){
return Ye(this.series,function(t){
return t.selected;
});
},
setTitle:function(t,e,i){
var s,o,r=this,a=r.options;
o=a.title=n(a.title,t),s=a.subtitle=n(a.subtitle,e),a=s,Fe([["title",t,o],["subtitle",e,a]],function(t){
var e=t[0],i=r[e],n=t[1],t=t[2];
i&&n&&(r[e]=i=i.destroy()),t&&t.text&&!i&&(r[e]=r.renderer.text(t.text,0,0,t.useHTML).attr({
align:t.align,
"class":"highcharts-"+e,
zIndex:t.zIndex||4
}).css(t.style).add());
}),r.layOutTitles(i);
},
layOutTitles:function(t){
var e=0,i=this.title,n=this.subtitle,s=this.options,o=s.title,s=s.subtitle,r=this.renderer,a=this.spacingBox.width-44;
!i||(i.css({
width:(o.width||a)+"px"
}).align($e({
y:r.fontMetrics(o.style.fontSize,i).b-3
},o),!1,"spacingBox"),o.floating||o.verticalAlign)||(e=i.getBBox().height),n&&(n.css({
width:(s.width||a)+"px"
}).align($e({
y:e+(o.margin-13)+r.fontMetrics(s.style.fontSize,i).b
},s),!1,"spacingBox"),!s.floating&&!s.verticalAlign&&(e=de(e+n.getBBox().height))),
i=this.titleOffset!==e,this.titleOffset=e,!this.isDirtyBox&&i&&(this.isDirtyBox=i,
this.hasRendered&&Je(t,!0)&&this.isDirtyBox&&this.redraw());
},
getChartSize:function(){
var t=this.options.chart,e=t.width,t=t.height,i=this.renderToClone||this.renderTo;
p(e)||(this.containerWidth=We(i,"width")),p(t)||(this.containerHeight=We(i,"height")),
this.chartWidth=pe(0,e||this.containerWidth||600),this.chartHeight=pe(0,Je(t,this.containerHeight>19?this.containerHeight:400));
},
cloneRenderTo:function(t){
var e=this.renderToClone,i=this.container;
t?e&&(this.renderTo.appendChild(i),L(e),delete this.renderToClone):(i&&i.parentNode===this.renderTo&&this.renderTo.removeChild(i),
this.renderToClone=e=this.renderTo.cloneNode(0),m(e,{
position:"absolute",
top:"-9999px",
display:"block"
}),e.style.setProperty&&e.style.setProperty("display","block","important"),ae.body.appendChild(e),
i&&e.appendChild(i));
},
getContainer:function(){
var t,i,n,r=this.options,a=r.chart;
t=this.renderTo;
var h="highcharts-"+Oe++;
t||(this.renderTo=t=a.renderTo),o(t)&&(this.renderTo=t=ae.getElementById(t)),t||e(13,!0),
i=s(u(t,"data-highcharts-chart")),!isNaN(i)&&ze[i]&&ze[i].hasRendered&&ze[i].destroy(),
u(t,"data-highcharts-chart",this.index),t.innerHTML="",!a.skipClone&&!t.offsetWidth&&this.cloneRenderTo(),
this.getChartSize(),i=this.chartWidth,n=this.chartHeight,this.container=t=y(Be,{
className:"highcharts-container"+(a.className?" "+a.className:""),
id:h
},$e({
position:"relative",
overflow:"hidden",
width:i+"px",
height:n+"px",
textAlign:"left",
lineHeight:"normal",
zIndex:0,
"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
},a.style),this.renderToClone||t),this._cursor=t.style.cursor,this.renderer=new(re[a.renderer]||X)(t,i,n,a.style,a.forExport,r.exporting&&r.exporting.allowHTML),
Me&&this.renderer.create(this,t,i,n),this.renderer.chartIndex=this.index;
},
getMargins:function(t){
var e=this.spacing,i=this.margin,n=this.titleOffset;
this.resetMargins(),n&&!p(i[0])&&(this.plotTop=pe(this.plotTop,n+this.options.title.margin+e[0])),
this.legend.adjustMargins(i,e),this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin),
this.extraTopMargin&&(this.plotTop+=this.extraTopMargin),t||this.getAxisMargins();
},
getAxisMargins:function(){
var t=this,e=t.axisOffset=[0,0,0,0],i=t.margin;
t.hasCartesianSeries&&Fe(t.axes,function(t){
t.visible&&t.getOffset();
}),Fe(Xe,function(n,s){
p(i[s])||(t[n]+=e[s]);
}),t.setChartSize();
},
reflow:function(e){
var i=this,n=i.options.chart,s=i.renderTo,o=n.width||We(s,"width"),r=n.height||We(s,"height"),n=e?e.target:t;
i.hasUserSize||i.isPrinting||!o||!r||n!==t&&n!==ae||((o!==i.containerWidth||r!==i.containerHeight)&&(clearTimeout(i.reflowTimeout),
i.reflowTimeout=g(function(){
i.container&&(i.setSize(o,r,!1),i.hasUserSize=null);
},e?100:0)),i.containerWidth=o,i.containerHeight=r);
},
initReflow:function(){
var e=this,i=function(t){
e.reflow(t);
};
je(t,"resize",i),je(e,"destroy",function(){
_e(t,"resize",i);
});
},
setSize:function(t,e,i){
var n,s,o=this,r=o.renderer;
o.isResizing+=1,I(i,o),o.oldChartHeight=o.chartHeight,o.oldChartWidth=o.chartWidth,
p(t)&&(o.chartWidth=n=pe(0,le(t)),o.hasUserSize=!!n),p(e)&&(o.chartHeight=s=pe(0,le(e))),
t=r.globalAnimation,(t?Ke:m)(o.container,{
width:n+"px",
height:s+"px"
},t),o.setChartSize(!0),r.setSize(n,s,i),o.maxTicks=null,Fe(o.axes,function(t){
t.isDirty=!0,t.setScale();
}),Fe(o.series,function(t){
t.isDirty=!0;
}),o.isDirtyLegend=!0,o.isDirtyBox=!0,o.layOutTitles(),o.getMargins(),o.redraw(i),
o.oldChartHeight=null,Ue(o,"resize"),t=r.globalAnimation,g(function(){
o&&Ue(o,"endResize",null,function(){
o.isResizing-=1;
});
},t===!1?0:t&&t.duration||500);
},
setChartSize:function(t){
var e,i,n,s,o=this.inverted,r=this.renderer,a=this.chartWidth,h=this.chartHeight,l=this.options.chart,c=this.spacing,d=this.clipOffset;
this.plotLeft=e=le(this.plotLeft),this.plotTop=i=le(this.plotTop),this.plotWidth=n=pe(0,le(a-e-this.marginRight)),
this.plotHeight=s=pe(0,le(h-i-this.marginBottom)),this.plotSizeX=o?s:n,this.plotSizeY=o?n:s,
this.plotBorderWidth=l.plotBorderWidth||0,this.spacingBox=r.spacingBox={
x:c[3],
y:c[0],
width:a-c[3]-c[1],
height:h-c[0]-c[2]
},this.plotBox=r.plotBox={
x:e,
y:i,
width:n,
height:s
},a=2*ce(this.plotBorderWidth/2),o=de(pe(a,d[3])/2),r=de(pe(a,d[0])/2),this.clipBox={
x:o,
y:r,
width:ce(this.plotSizeX-pe(a,d[1])/2-o),
height:pe(0,ce(this.plotSizeY-pe(a,d[2])/2-r))
},t||Fe(this.axes,function(t){
t.setAxisSize(),t.setAxisTranslation();
});
},
resetMargins:function(){
var t=this;
Fe(Xe,function(e,i){
t[e]=Je(t.margin[i],t.spacing[i]);
}),t.axisOffset=[0,0,0,0],t.clipOffset=[0,0,0,0];
},
drawChartBox:function(){
var t,e=this.options.chart,i=this.renderer,n=this.chartWidth,s=this.chartHeight,o=this.chartBackground,r=this.plotBackground,a=this.plotBorder,h=this.plotBGImage,l=e.borderWidth||0,c=e.backgroundColor,d=e.plotBackgroundColor,p=e.plotBackgroundImage,u=e.plotBorderWidth||0,f=this.plotLeft,g=this.plotTop,m=this.plotWidth,y=this.plotHeight,v=this.plotBox,x=this.clipRect,b=this.clipBox;
t=l+(e.shadow?8:0),(l||c)&&(o?o.animate(o.crisp({
width:n-t,
height:s-t
})):(o={
fill:c||"none"
},l&&(o.stroke=e.borderColor,o["stroke-width"]=l),this.chartBackground=i.rect(t/2,t/2,n-t,s-t,e.borderRadius,l).attr(o).addClass("highcharts-background").add().shadow(e.shadow))),
d&&(r?r.animate(v):this.plotBackground=i.rect(f,g,m,y,0).attr({
fill:d
}).add().shadow(e.plotShadow)),p&&(h?h.animate(v):this.plotBGImage=i.image(p,f,g,m,y).add()),
x?x.animate({
width:b.width,
height:b.height
}):this.clipRect=i.clipRect(b),u&&(a?a.animate(a.crisp({
x:f,
y:g,
width:m,
height:y,
strokeWidth:-u
})):this.plotBorder=i.rect(f,g,m,y,0,-u).attr({
stroke:e.plotBorderColor,
"stroke-width":u,
fill:"none",
zIndex:1
}).add()),this.isDirtyBox=!1;
},
propFromSeries:function(){
var t,e,i,n=this,s=n.options.chart,o=n.options.series;
Fe(["inverted","angular","polar"],function(r){
for(t=He[s.type||s.defaultSeriesType],i=n[r]||s[r]||t&&t.prototype[r],e=o&&o.length;!i&&e--;)(t=He[o[e].type])&&t.prototype[r]&&(i=!0);
n[r]=i;
});
},
linkSeries:function(){
var t=this,e=t.series;
Fe(e,function(t){
t.linkedSeries.length=0;
}),Fe(e,function(e){
var i=e.options.linkedTo;
o(i)&&(i=":previous"===i?t.series[e.index-1]:t.get(i))&&(i.linkedSeries.push(e),
e.linkedParent=i,e.visible=Je(e.options.visible,i.options.visible,e.visible));
});
},
renderSeries:function(){
Fe(this.series,function(t){
t.translate(),t.render();
});
},
renderLabels:function(){
var t=this,e=t.options.labels;
e.items&&Fe(e.items,function(i){
var n=$e(e.style,i.style),o=s(n.left)+t.plotLeft,r=s(n.top)+t.plotTop+12;
delete n.left,delete n.top,t.renderer.text(i.html,o,r).attr({
zIndex:2
}).css(n).add();
});
},
render:function(){
var t,e,i,n,s=this.axes,o=this.renderer,r=this.options;
this.setTitle(),this.legend=new fi(this,r.legend),this.getStacks&&this.getStacks(),
this.getMargins(!0),this.setChartSize(),t=this.plotWidth,e=this.plotHeight-=21,Fe(s,function(t){
t.setScale();
}),this.getAxisMargins(),i=t/this.plotWidth>1.1,n=e/this.plotHeight>1.05,(i||n)&&(this.maxTicks=null,
Fe(s,function(t){
(t.horiz&&i||!t.horiz&&n)&&t.setTickInterval(!0);
}),this.getMargins()),this.drawChartBox(),this.hasCartesianSeries&&Fe(s,function(t){
t.visible&&t.render();
}),this.seriesGroup||(this.seriesGroup=o.g("series-group").attr({
zIndex:3
}).add()),this.renderSeries(),this.renderLabels(),this.showCredits(r.credits),this.hasRendered=!0;
},
showCredits:function(e){
e.enabled&&!this.credits&&(this.credits=this.renderer.text(e.text,0,0).on("click",function(){
e.href&&(t.location.href=e.href);
}).attr({
align:e.position.align,
zIndex:8
}).css(e.style).add().align(e.position));
},
destroy:function(){
var t,e=this,i=e.axes,n=e.series,s=e.container,o=s&&s.parentNode;
for(Ue(e,"destroy"),ze[e.index]=E,Re--,e.renderTo.removeAttribute("data-highcharts-chart"),
_e(e),t=i.length;t--;)i[t]=i[t].destroy();
for(t=n.length;t--;)n[t]=n[t].destroy();
Fe("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(t){
var i=e[t];
i&&i.destroy&&(e[t]=i.destroy());
}),s&&(s.innerHTML="",_e(s),o&&L(s));
for(t in e)delete e[t];
},
isReadyToRender:function(){
var e=this;
return!Pe&&t==t.top&&"complete"!==ae.readyState||Me&&!t.canvg?(Me?oi.push(function(){
e.firstRender();
},e.options.global.canvasToolsURL):ae.attachEvent("onreadystatechange",function(){
ae.detachEvent("onreadystatechange",e.firstRender),"complete"===ae.readyState&&e.firstRender();
}),!1):!0;
},
firstRender:function(){
var t=this,e=t.options,i=t.callback;
t.isReadyToRender()&&(t.getContainer(),Ue(t,"init"),t.resetMargins(),t.setChartSize(),
t.propFromSeries(),t.getAxes(),Fe(e.series||[],function(e){
t.initSeries(e);
}),t.linkSeries(),Ue(t,"beforeRender"),re.Pointer&&(t.pointer=new li(t,e)),t.render(),
t.renderer.draw(),i&&i.apply(t,[t]),Fe(t.callbacks,function(e){
t.index!==E&&e.apply(t,[t]);
}),Ue(t,"load"),t.cloneRenderTo(!0));
},
splashArray:function(t,e){
var i=e[t],i=r(i)?i:[i,i,i,i];
return[Je(e[t+"Top"],i[0]),Je(e[t+"Right"],i[1]),Je(e[t+"Bottom"],i[2]),Je(e[t+"Left"],i[3])];
}
};
var si=re.CenteredSeriesMixin={
getCenter:function(){
var t,e,i=this.options,n=this.chart,s=2*(i.slicedOffset||0),o=n.plotWidth-2*s,n=n.plotHeight-2*s,r=i.center,r=[Je(r[0],"50%"),Je(r[1],"50%"),i.size||"100%",i.innerSize||0],a=ue(o,n);
for(t=0;4>t;++t)e=r[t],i=2>t||2===t&&/%$/.test(e),r[t]=(/%$/.test(e)?[o,n,a,r[2]][t]*parseFloat(e)/100:parseFloat(e))+(i?s:0);
return r[3]>r[2]&&(r[3]=r[2]),r;
}
},mi=function(){};
mi.prototype={
init:function(t,e,i){
return this.series=t,this.color=t.color,this.applyOptions(e,i),this.pointAttr={},
t.options.colorByPoint&&(e=t.options.colors||t.chart.options.colors,this.color=this.color||e[t.colorCounter++],
t.colorCounter===e.length)&&(t.colorCounter=0),t.chart.pointCount++,this;
},
applyOptions:function(t,e){
var i=this.series,n=i.options.pointValKey||i.pointValKey,t=mi.prototype.optionsToObject.call(this,t);
return $e(this,t),this.options=this.options?$e(this.options,t):t,n&&(this.y=this[n]),
this.x===E&&i&&(this.x=e===E?i.autoIncrement():e),this;
},
optionsToObject:function(t){
var e={},i=this.series,n=i.options.keys,s=n||i.pointArrayMap||["y"],o=s.length,r=0,h=0;
if("number"==typeof t||null===t)e[s[0]]=t;else if(a(t))for(!n&&t.length>o&&(i=typeof t[0],
"string"===i?e.name=t[0]:"number"===i&&(e.x=t[0]),r++);o>h;)n&&void 0===t[r]||(e[s[h]]=t[r]),
r++,h++;else"object"==typeof t&&(e=t,t.dataLabels&&(i._hasPointLabels=!0),t.marker&&(i._hasPointMarkers=!0));
return e;
},
destroy:function(){
var t,e=this.series.chart,i=e.hoverPoints;
e.pointCount--,i&&(this.setState(),d(i,this),!i.length)&&(e.hoverPoints=null),this===e.hoverPoint&&this.onMouseOut(),
(this.graphic||this.dataLabel)&&(_e(this),this.destroyElements()),this.legendItem&&e.legend.destroyItem(this);
for(t in this)this[t]=null;
},
destroyElements:function(){
for(var t,e=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],i=6;i--;)t=e[i],
this[t]&&(this[t]=this[t].destroy());
},
getLabelConfig:function(){
return{
x:this.category,
y:this.y,
color:this.color,
key:this.name||this.category,
series:this.series,
point:this,
percentage:this.percentage,
total:this.total||this.stackTotal
};
},
tooltipFormatter:function(t){
var e=this.series,i=e.tooltipOptions,n=Je(i.valueDecimals,""),s=i.valuePrefix||"",o=i.valueSuffix||"";
return Fe(e.pointArrayMap||["y"],function(e){
e="{point."+e,(s||o)&&(t=t.replace(e+"}",s+e+"}"+o)),t=t.replace(e+"}",e+":,."+n+"f}");
}),k(t,{
point:this,
series:this.series
});
},
firePointEvent:function(t,e,i){
var n=this,s=this.series.options;
(s.point.events[t]||n.options&&n.options.events&&n.options.events[t])&&this.importEvents(),
"click"===t&&s.allowPointSelect&&(i=function(t){
n.select&&n.select(null,t.ctrlKey||t.metaKey||t.shiftKey);
}),Ue(this,t,e,i);
},
visible:!0
};
var yi=re.Series=function(){};
yi.prototype={
isCartesian:!0,
type:"line",
pointClass:mi,
sorted:!0,
requireSorting:!0,
pointAttrToOptions:{
stroke:"lineColor",
"stroke-width":"lineWidth",
fill:"fillColor",
r:"radius"
},
directTouch:!1,
axisTypes:["xAxis","yAxis"],
colorCounter:0,
parallelArrays:["x","y"],
init:function(t,e){
var i,n,s=this,o=t.series,r=function(t,e){
return Je(t.options.index,t._i)-Je(e.options.index,e._i);
};
s.chart=t,s.options=e=s.setOptions(e),s.linkedSeries=[],s.bindAxes(),$e(s,{
name:e.name,
state:"",
pointAttr:{},
visible:e.visible!==!1,
selected:e.selected===!0
}),Me&&(e.animation=!1),n=e.events;
for(i in n)je(s,i,n[i]);
(n&&n.click||e.point&&e.point.events&&e.point.events.click||e.allowPointSelect)&&(t.runTrackerClick=!0),
s.getColor(),s.getSymbol(),Fe(s.parallelArrays,function(t){
s[t+"Data"]=[];
}),s.setData(e.data,!1),s.isCartesian&&(t.hasCartesianSeries=!0),o.push(s),s._i=o.length-1,
T(o,r),this.yAxis&&T(this.yAxis.series,r),Fe(o,function(t,e){
t.index=e,t.name=t.name||"Series "+(e+1);
});
},
bindAxes:function(){
var t,i=this,n=i.options,s=i.chart;
Fe(i.axisTypes||[],function(o){
Fe(s[o],function(e){
t=e.options,(n[o]===t.index||n[o]!==E&&n[o]===t.id||n[o]===E&&0===t.index)&&(e.series.push(i),
i[o]=e,e.isDirty=!0);
}),!i[o]&&i.optionalAxis!==o&&e(18,!0);
});
},
updateParallelArrays:function(t,e){
var i=t.series,n=arguments;
Fe(i.parallelArrays,"number"==typeof e?function(n){
var s="y"===n&&i.toYData?i.toYData(t):t[n];
i[n+"Data"][e]=s;
}:function(t){
Array.prototype[e].apply(i[t+"Data"],Array.prototype.slice.call(n,2));
});
},
autoIncrement:function(){
var t,e=this.options,i=this.xIncrement,n=e.pointIntervalUnit,i=Je(i,e.pointStart,0);
return this.pointInterval=t=Je(this.pointInterval,e.pointInterval,1),("month"===n||"year"===n)&&(e=new N(i),
e="month"===n?+e[se](e[$]()+t):+e[oe](e[J]()+t),t=e-i),this.xIncrement=i+t,i;
},
getSegments:function(){
var t,e=-1,i=[],n=this.points,s=n.length;
if(s)if(this.options.connectNulls){
for(t=s;t--;)null===n[t].y&&n.splice(t,1);
n.length&&(i=[n]);
}else Fe(n,function(t,o){
null===t.y?(o>e+1&&i.push(n.slice(e+1,o)),e=o):o===s-1&&i.push(n.slice(e+1,o+1));
});
this.segments=i;
},
setOptions:function(t){
var e=this.chart,i=e.options.plotOptions,e=e.userOptions||{},s=e.plotOptions||{},o=i[this.type];
return this.userOptions=t,i=n(o,i.series,t),this.tooltipOptions=n(G.tooltip,G.plotOptions[this.type].tooltip,e.tooltip,s.series&&s.series.tooltip,s[this.type]&&s[this.type].tooltip,t.tooltip),
null===o.marker&&delete i.marker,this.zoneAxis=i.zoneAxis,t=this.zones=(i.zones||[]).slice(),
!i.negativeColor&&!i.negativeFillColor||i.zones||t.push({
value:i[this.zoneAxis+"Threshold"]||i.threshold||0,
color:i.negativeColor,
fillColor:i.negativeFillColor
}),t.length&&p(t[t.length-1].value)&&t.push({
color:this.color,
fillColor:this.fillColor
}),i;
},
getCyclic:function(t,e,i){
var n=this.userOptions,s="_"+t+"Index",o=t+"Counter";
e||(p(n[s])?e=n[s]:(n[s]=e=this.chart[o]%i.length,this.chart[o]+=1),e=i[e]),this[t]=e;
},
getColor:function(){
this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||ti[this.type].color,this.chart.options.colors);
},
getSymbol:function(){
var t=this.options.marker;
this.getCyclic("symbol",t.symbol,this.chart.options.symbols),/^url/.test(this.symbol)&&(t.radius=0);
},
drawLegendSymbol:ni.drawLineMarker,
setData:function(t,i,n,s){
var r,l=this,c=l.points,d=c&&c.length||0,u=l.options,f=l.chart,g=null,m=l.xAxis,y=m&&!!m.categories,v=u.turboThreshold,x=this.xData,b=this.yData,k=(r=l.pointArrayMap)&&r.length,t=t||[];
if(r=t.length,i=Je(i,!0),s!==!1&&r&&d===r&&!l.cropped&&!l.hasGroupedData&&l.visible)Fe(t,function(t,e){
c[e].update&&t!==u.data[e]&&c[e].update(t,!1,null,!1);
});else{
if(l.xIncrement=null,l.colorCounter=0,Fe(this.parallelArrays,function(t){
l[t+"Data"].length=0;
}),v&&r>v){
for(n=0;null===g&&r>n;)g=t[n],n++;
if(h(g)){
for(y=Je(u.pointStart,0),g=Je(u.pointInterval,1),n=0;r>n;n++)x[n]=y,b[n]=t[n],y+=g;
l.xIncrement=y;
}else if(a(g))if(k)for(n=0;r>n;n++)g=t[n],x[n]=g[0],b[n]=g.slice(1,k+1);else for(n=0;r>n;n++)g=t[n],
x[n]=g[0],b[n]=g[1];else e(12);
}else for(n=0;r>n;n++)t[n]!==E&&(g={
series:l
},l.pointClass.prototype.applyOptions.apply(g,[t[n]]),l.updateParallelArrays(g,n),
y&&p(g.name))&&(m.names[g.x]=g.name);
for(o(b[0])&&e(14,!0),l.data=[],l.options.data=t,n=d;n--;)c[n]&&c[n].destroy&&c[n].destroy();
m&&(m.minRange=m.userMinRange),l.isDirty=l.isDirtyData=f.isDirtyBox=!0,n=!1;
}
"point"===u.legendType&&(this.processData(),this.generatePoints()),i&&f.redraw(n);
},
processData:function(t){
var i,n=this.xData,s=this.yData,o=n.length;
i=0;
var r,a,h,l=this.xAxis,c=this.options;
h=c.cropThreshold;
var d,p,c=this.getExtremesFromAll||c.getExtremesFromAll,u=this.isCartesian;
if(u&&!this.isDirty&&!l.isDirty&&!this.yAxis.isDirty&&!t)return!1;
for(l&&(t=l.getExtremes(),d=t.min,p=t.max),u&&this.sorted&&!c&&(!h||o>h||this.forceCrop)&&(n[o-1]<d||n[0]>p?(n=[],
s=[]):(n[0]<d||n[o-1]>p)&&(i=this.cropData(this.xData,this.yData,d,p),n=i.xData,
s=i.yData,i=i.start,r=!0)),h=n.length-1;h>=0;h--)o=n[h]-n[h-1],o>0&&(a===E||a>o)?a=o:0>o&&this.requireSorting&&e(15);
this.cropped=r,this.cropStart=i,this.processedXData=n,this.processedYData=s,this.closestPointRange=a;
},
cropData:function(t,e,i,n){
var s,o=t.length,r=0,a=o,h=Je(this.cropShoulder,1);
for(s=0;o>s;s++)if(t[s]>=i){
r=pe(0,s-h);
break;
}
for(i=s;o>i;i++)if(t[i]>n){
a=i+h;
break;
}
return{
xData:t.slice(r,a),
yData:e.slice(r,a),
start:r,
end:a
};
},
generatePoints:function(){
var t,e,i,n,s=this.options.data,o=this.data,r=this.processedXData,a=this.processedYData,h=this.pointClass,l=r.length,c=this.cropStart||0,d=this.hasGroupedData,p=[];
for(o||d||(o=[],o.length=s.length,o=this.data=o),n=0;l>n;n++)e=c+n,d?p[n]=(new h).init(this,[r[n]].concat(f(a[n]))):(o[e]?i=o[e]:s[e]!==E&&(o[e]=i=(new h).init(this,s[e],r[n])),
p[n]=i),p[n].index=e;
if(o&&(l!==(t=o.length)||d))for(n=0;t>n;n++)n===c&&!d&&(n+=l),o[n]&&(o[n].destroyElements(),
o[n].plotX=E);
this.data=o,this.points=p;
},
getExtremes:function(t){
var e,i=this.yAxis,n=this.processedXData,s=[],o=0;
e=this.xAxis.getExtremes();
var r,a,h,l,c=e.min,d=e.max,t=t||this.stackedYData||this.processedYData;
for(e=t.length,l=0;e>l;l++)if(a=n[l],h=t[l],r=null!==h&&h!==E&&(!i.isLog||h.length||h>0),
a=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(n[l+1]||a)>=c&&(n[l-1]||a)<=d,
r&&a)if(r=h.length)for(;r--;)null!==h[r]&&(s[o++]=h[r]);else s[o++]=h;
this.dataMin=A(s),this.dataMax=C(s);
},
translate:function(){
this.processedXData||this.processData(),this.generatePoints();
for(var t,i,n,s,o=this.options,r=o.stacking,a=this.xAxis,l=a.categories,c=this.yAxis,d=this.points,u=d.length,f=!!this.modifyValue,g=o.pointPlacement,m="between"===g||h(g),y=o.threshold,v=o.startFromThreshold?y:0,x=Number.MAX_VALUE,o=0;u>o;o++){
var b=d[o],k=b.x,w=b.y;
i=b.low;
var S=r&&c.stacks[(this.negStacks&&(v?0:y)>w?"-":"")+this.stackKey];
c.isLog&&null!==w&&0>=w&&(b.y=w=null,e(10)),b.plotX=t=ue(pe(-1e5,a.translate(k,0,0,0,1,g,"flags"===this.type)),1e5),
r&&this.visible&&S&&S[k]&&(s=this.getStackIndicator(s,k,this.index),S=S[k],w=S.points[s.key],
i=w[0],w=w[1],i===v&&(i=Je(y,c.min)),c.isLog&&0>=i&&(i=null),b.total=b.stackTotal=S.total,
b.percentage=S.total&&b.y/S.total*100,b.stackY=w,S.setOffset(this.pointXOffset||0,this.barW||0)),
b.yBottom=p(i)?c.translate(i,0,1,0,1):null,f&&(w=this.modifyValue(w,b)),b.plotY=i="number"==typeof w&&1/0!==w?ue(pe(-1e5,c.translate(w,0,1,0,1)),1e5):E,
b.isInside=i!==E&&i>=0&&i<=c.len&&t>=0&&t<=a.len,b.clientX=m?a.translate(k,0,0,0,1):t,
b.negative=b.y<(y||0),b.category=l&&l[b.x]!==E?l[b.x]:b.x,o&&(x=ue(x,fe(t-n))),n=t;
}
this.closestPointRangePx=x,this.getSegments();
},
setClip:function(t){
var e=this.chart,i=this.options,n=e.renderer,s=e.inverted,o=this.clipBox,r=o||e.clipBox,a=this.sharedClipKey||["_sharedClip",t&&t.duration,t&&t.easing,r.height,i.xAxis,i.yAxis].join(","),h=e[a],l=e[a+"m"];
h||(t&&(r.width=0,e[a+"m"]=l=n.clipRect(-99,s?-e.plotLeft:-e.plotTop,99,s?e.chartWidth:e.chartHeight)),
e[a]=h=n.clipRect(r)),t&&(h.count+=1),i.clip!==!1&&(this.group.clip(t||o?h:e.clipRect),
this.markerGroup.clip(l),this.sharedClipKey=a),t||(h.count-=1,h.count<=0&&a&&e[a]&&(o||(e[a]=e[a].destroy()),
e[a+"m"]&&(e[a+"m"]=e[a+"m"].destroy())));
},
animate:function(t){
var e,i=this.chart,n=this.options.animation;
n&&!r(n)&&(n=ti[this.type].animation),t?this.setClip(n):(e=this.sharedClipKey,(t=i[e])&&t.animate({
width:i.plotSizeX
},n),i[e+"m"]&&i[e+"m"].animate({
width:i.plotSizeX+99
},n),this.animate=null);
},
afterAnimate:function(){
this.setClip(),Ue(this,"afterAnimate");
},
drawPoints:function(){
var t,e,i,n,s,o,r,a,h,l,c,d,p=this.points,u=this.chart,f=this.options.marker,g=this.pointAttr[""],m=this.markerGroup,y=Je(f.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*f.radius);
if(f.enabled!==!1||this._hasPointMarkers)for(n=p.length;n--;)s=p[n],e=ce(s.plotX),
i=s.plotY,h=s.graphic,l=s.marker||{},c=!!s.marker,t=y&&l.enabled===E||l.enabled,
d=s.isInside,t&&i!==E&&!isNaN(i)&&null!==s.y?(t=s.pointAttr[s.selected?"select":""]||g,
o=t.r,r=Je(l.symbol,this.symbol),a=0===r.indexOf("url"),h?h[d?"show":"hide"](!0).animate($e({
x:e-o,
y:i-o
},h.symbolName?{
width:2*o,
height:2*o
}:{})):d&&(o>0||a)&&(s.graphic=u.renderer.symbol(r,e-o,i-o,2*o,2*o,c?l:f).attr(t).add(m))):h&&(s.graphic=h.destroy());
},
convertAttribs:function(t,e,i,n){
var s,o,r=this.pointAttrToOptions,a={},t=t||{},e=e||{},i=i||{},n=n||{};
for(s in r)o=r[s],a[s]=Je(t[o],e[s],i[s],n[s]);
return a;
},
getAttribs:function(){
var t,e=this,i=e.options,n=ti[e.type].marker?i.marker:i,s=n.states,o=s.hover,r=e.color,a=e.options.negativeColor;
t={
stroke:r,
fill:r
};
var h,l,c=e.points||[],d=[],u=e.pointAttrToOptions;
h=e.hasPointSpecificOptions;
var f=n.lineColor,g=n.fillColor;
l=i.turboThreshold;
var m,y=e.zones,v=e.zoneAxis||"y";
if(i.marker?(o.radius=o.radius||n.radius+o.radiusPlus,o.lineWidth=o.lineWidth||n.lineWidth+o.lineWidthPlus):(o.color=o.color||D(o.color||r).brighten(o.brightness).get(),
o.negativeColor=o.negativeColor||D(o.negativeColor||a).brighten(o.brightness).get()),
d[""]=e.convertAttribs(n,t),Fe(["hover","select"],function(t){
d[t]=e.convertAttribs(s[t],d[""]);
}),e.pointAttr=d,r=c.length,!l||l>r||h)for(;r--;){
if(l=c[r],(n=l.options&&l.options.marker||l.options)&&n.enabled===!1&&(n.radius=0),
y.length){
for(h=0,t=y[h];l[v]>=t.value;)t=y[++h];
l.color=l.fillColor=Je(t.color,e.color);
}
if(h=i.colorByPoint||l.color,l.options)for(m in u)p(n[u[m]])&&(h=!0);
h?(n=n||{},h=[],s=n.states||{},t=s.hover=s.hover||{},(!i.marker||l.negative&&!t.fillColor&&!o.fillColor)&&(t[e.pointAttrToOptions.fill]=t.color||!l.options.color&&o[l.negative&&a?"negativeColor":"color"]||D(l.color).brighten(t.brightness||o.brightness).get()),
t={
color:l.color
},g||(t.fillColor=l.color),f||(t.lineColor=l.color),n.hasOwnProperty("color")&&!n.color&&delete n.color,
h[""]=e.convertAttribs($e(t,n),d[""]),h.hover=e.convertAttribs(s.hover,d.hover,h[""]),
h.select=e.convertAttribs(s.select,d.select,h[""])):h=d,l.pointAttr=h;
}
},
destroy:function(){
var t,e,i,n,s=this,o=s.chart,r=/AppleWebKit\/533/.test(xe),a=s.data||[];
for(Ue(s,"destroy"),_e(s),Fe(s.axisTypes||[],function(t){
(n=s[t])&&(d(n.series,s),n.isDirty=n.forceRedraw=!0);
}),s.legendItem&&s.chart.legend.destroyItem(s),t=a.length;t--;)(e=a[t])&&e.destroy&&e.destroy();
s.points=null,clearTimeout(s.animationTimeout);
for(i in s)s[i]instanceof z&&!s[i].survive&&(t=r&&"group"===i?"hide":"destroy",s[i][t]());
o.hoverSeries===s&&(o.hoverSeries=null),d(o.series,s);
for(i in s)delete s[i];
},
getSegmentPath:function(t){
var e=this,i=[],n=e.options.step;
return Fe(t,function(s,o){
var r,a=s.plotX,h=s.plotY;
e.getPointSpline?i.push.apply(i,e.getPointSpline(t,s,o)):(i.push(o?"L":"M"),n&&o&&(r=t[o-1],
"right"===n?i.push(r.plotX,h,"L"):"center"===n?i.push((r.plotX+a)/2,r.plotY,"L",(r.plotX+a)/2,h,"L"):i.push(a,r.plotY,"L")),
i.push(s.plotX,s.plotY));
}),i;
},
getGraphPath:function(){
var t,e=this,i=[],n=[];
return Fe(e.segments,function(s){
t=e.getSegmentPath(s),s.length>1?i=i.concat(t):n.push(s[0]);
}),e.singlePoints=n,e.graphPath=i;
},
drawGraph:function(){
var t=this,e=this.options,i=[["graph",e.lineColor||this.color,e.dashStyle]],n=e.lineWidth,s="square"!==e.linecap,o=this.getGraphPath(),r=this.fillGraph&&this.color||"none";
Fe(this.zones,function(n,s){
i.push(["zoneGraph"+s,n.color||t.color,n.dashStyle||e.dashStyle]);
}),Fe(i,function(i,a){
var h=i[0],l=t[h];
l?l.animate({
d:o
}):(n||r)&&o.length&&(l={
stroke:i[1],
"stroke-width":n,
fill:r,
zIndex:1
},i[2]?l.dashstyle=i[2]:s&&(l["stroke-linecap"]=l["stroke-linejoin"]="round"),t[h]=t.chart.renderer.path(o).attr(l).add(t.group).shadow(2>a&&e.shadow));
});
},
applyZones:function(){
var t,e,i,n,s,o,r,a=this,h=this.chart,l=h.renderer,c=this.zones,d=this.clips||[],p=this.graph,u=this.area,f=pe(h.chartWidth,h.chartHeight),g=this[(this.zoneAxis||"y")+"Axis"],m=g.reversed,y=h.inverted,v=g.horiz,x=!1;
c.length&&(p||u)&&g.min!==E&&(p&&p.hide(),u&&u.hide(),n=g.getExtremes(),Fe(c,function(c,b){
t=m?v?h.plotWidth:0:v?0:g.toPixels(n.min),t=ue(pe(Je(e,t),0),f),e=ue(pe(le(g.toPixels(Je(c.value,n.max),!0)),0),f),
x&&(t=e=g.toPixels(n.max)),s=Math.abs(t-e),o=ue(t,e),r=pe(t,e),g.isXAxis?(i={
x:y?r:o,
y:0,
width:s,
height:f
},v||(i.x=h.plotHeight-i.x)):(i={
x:0,
y:y?r:o,
width:f,
height:s
},v&&(i.y=h.plotWidth-i.y)),h.inverted&&l.isVML&&(i=g.isXAxis?{
x:0,
y:m?o:r,
height:i.width,
width:h.chartWidth
}:{
x:i.y-h.plotLeft-h.spacingBox.x,
y:0,
width:i.height,
height:h.chartHeight
}),d[b]?d[b].animate(i):(d[b]=l.clipRect(i),p&&a["zoneGraph"+b].clip(d[b]),u&&a["zoneArea"+b].clip(d[b])),
x=c.value>n.max;
}),this.clips=d);
},
invertGroups:function(){
function t(){
var t={
width:e.yAxis.len,
height:e.xAxis.len
};
Fe(["group","markerGroup"],function(i){
e[i]&&e[i].attr(t).invert();
});
}
var e=this,i=e.chart;
e.xAxis&&(je(i,"resize",t),je(e,"destroy",function(){
_e(i,"resize",t);
}),t(),e.invertGroups=t);
},
plotGroup:function(t,e,i,n,s){
var o=this[t],r=!o;
return r&&(this[t]=o=this.chart.renderer.g(e).attr({
zIndex:n||.1
}).add(s),o.addClass("highcharts-series-"+this.index)),o.attr({
visibility:i
})[r?"attr":"animate"](this.getPlotBox()),o;
},
getPlotBox:function(){
var t=this.chart,e=this.xAxis,i=this.yAxis;
return t.inverted&&(e=i,i=this.xAxis),{
translateX:e?e.left:t.plotLeft,
translateY:i?i.top:t.plotTop,
scaleX:1,
scaleY:1
};
},
render:function(){
var t,e=this,i=e.chart,n=e.options,s=(t=n.animation)&&!!e.animate&&i.renderer.isSVG&&Je(t.duration,500)||0,o=e.visible?"inherit":"hidden",r=n.zIndex,a=e.hasRendered,h=i.seriesGroup;
t=e.plotGroup("group","series",o,r,h),e.markerGroup=e.plotGroup("markerGroup","markers",o,r,h),
s&&e.animate(!0),e.getAttribs(),t.inverted=e.isCartesian?i.inverted:!1,e.drawGraph&&(e.drawGraph(),
e.applyZones()),Fe(e.points,function(t){
t.redraw&&t.redraw();
}),e.drawDataLabels&&e.drawDataLabels(),e.visible&&e.drawPoints(),e.drawTracker&&e.options.enableMouseTracking!==!1&&e.drawTracker(),
i.inverted&&e.invertGroups(),n.clip!==!1&&!e.sharedClipKey&&!a&&t.clip(i.clipRect),
s&&e.animate(),a||(e.animationTimeout=g(function(){
e.afterAnimate();
},s)),e.isDirty=e.isDirtyData=!1,e.hasRendered=!0;
},
redraw:function(){
var t=this.chart,e=this.isDirtyData,i=this.isDirty,n=this.group,s=this.xAxis,o=this.yAxis;
n&&(t.inverted&&n.attr({
width:t.plotWidth,
height:t.plotHeight
}),n.animate({
translateX:Je(s&&s.left,t.plotLeft),
translateY:Je(o&&o.top,t.plotTop)
})),this.translate(),this.render(),e&&Ue(this,"updatedData"),(i||e)&&delete this.kdTree;
},
kdDimensions:1,
kdAxisArray:["clientX","plotY"],
searchPoint:function(t,e){
var i=this.xAxis,n=this.yAxis,s=this.chart.inverted;
return this.searchKDTree({
clientX:s?i.len-t.chartY+i.pos:t.chartX-i.pos,
plotY:s?n.len-t.chartX+n.pos:t.chartY-n.pos
},e);
},
buildKDTree:function(){
function t(i,n,s){
var o,r;
return(r=i&&i.length)?(o=e.kdAxisArray[n%s],i.sort(function(t,e){
return t[o]-e[o];
}),r=Math.floor(r/2),{
point:i[r],
left:t(i.slice(0,r),n+1,s),
right:t(i.slice(r+1),n+1,s)
}):void 0;
}
var e=this,i=e.kdDimensions;
delete e.kdTree,g(function(){
var n=Ye(e.points||[],function(t){
return null!==t.y;
});
e.kdTree=t(n,i,i);
},e.options.kdNow?0:1);
},
searchKDTree:function(t,e){
function i(t,e,a,h){
var l,c,d=e.point,u=n.kdAxisArray[a%h],f=d;
return c=p(t[s])&&p(d[s])?Math.pow(t[s]-d[s],2):null,l=p(t[o])&&p(d[o])?Math.pow(t[o]-d[o],2):null,
l=(c||0)+(l||0),d.dist=p(l)?Math.sqrt(l):Number.MAX_VALUE,d.distX=p(c)?Math.sqrt(c):Number.MAX_VALUE,
u=t[u]-d[u],l=0>u?"left":"right",c=0>u?"right":"left",e[l]&&(l=i(t,e[l],a+1,h),f=l[r]<f[r]?l:d),
e[c]&&Math.sqrt(u*u)<f[r]&&(t=i(t,e[c],a+1,h),f=t[r]<f[r]?t:f),f;
}
var n=this,s=this.kdAxisArray[0],o=this.kdAxisArray[1],r=e?"distX":"dist";
return this.kdTree||this.buildKDTree(),this.kdTree?i(t,this.kdTree,this.kdDimensions,this.kdDimensions):void 0;
}
},B.prototype={
destroy:function(){
P(this,this.axis);
},
render:function(t){
var e=this.options,i=e.format,i=i?k(i,this):e.formatter.call(this);
this.label?this.label.attr({
text:i,
visibility:"hidden"
}):this.label=this.axis.chart.renderer.text(i,null,null,e.useHTML).css(e.style).attr({
align:this.textAlign,
rotation:e.rotation,
visibility:"hidden"
}).add(t);
},
setOffset:function(t,e){
var i=this.axis,n=i.chart,s=n.inverted,o=i.reversed,o=this.isNegative&&!o||!this.isNegative&&o,r=i.translate(i.usePercentage?100:this.total,0,0,0,1),i=i.translate(0),i=fe(r-i),a=n.xAxis[0].translate(this.x)+t,h=n.plotHeight,o={
x:s?o?r:r-i:a,
y:s?h-a-e:o?h-r-i:h-r,
width:s?i:e,
height:s?e:i
};
(s=this.label)&&(s.align(this.alignOptions,null,o),o=s.alignAttr,s[this.options.crop===!1||n.isInsidePlot(o.x,o.y)?"show":"hide"](!0));
}
},gi.prototype.getStacks=function(){
var t=this;
Fe(t.yAxis,function(t){
t.stacks&&t.hasVisibleSeries&&(t.oldStacks=t.stacks);
}),Fe(t.series,function(e){
!e.options.stacking||e.visible!==!0&&t.options.chart.ignoreHiddenSeries!==!1||(e.stackKey=e.type+Je(e.options.stack,""));
});
},ri.prototype.buildStacks=function(){
var t=this.series,e=Je(this.options.reversedStacks,!0),i=t.length;
if(!this.isXAxis){
for(this.usePercentage=!1;i--;)t[e?i:t.length-i-1].setStackedPoints();
if(this.usePercentage)for(i=0;i<t.length;i++)t[i].setPercentStacks();
}
},ri.prototype.renderStackTotals=function(){
var t,e,i=this.chart,n=i.renderer,s=this.stacks,o=this.stackTotalGroup;
o||(this.stackTotalGroup=o=n.g("stack-labels").attr({
visibility:"visible",
zIndex:6
}).add()),o.translate(i.plotLeft,i.plotTop);
for(t in s)for(e in i=s[t])i[e].render(o);
},ri.prototype.resetStacks=function(){
var t,e,i=this.stacks;
if(!this.isXAxis)for(t in i)for(e in i[t])i[t][e].touched<this.stacksTouched?(i[t][e].destroy(),
delete i[t][e]):(i[t][e].total=null,i[t][e].cum=0);
},ri.prototype.cleanStacks=function(){
var t,e,i;
if(!this.isXAxis){
this.oldStacks&&(t=this.stacks=this.oldStacks);
for(e in t)for(i in t[e])t[e][i].cum=t[e][i].total;
}
},yi.prototype.setStackedPoints=function(){
if(this.options.stacking&&(this.visible===!0||this.chart.options.chart.ignoreHiddenSeries===!1)){
var t,e,i,n,s,o,r,a=this.processedXData,h=this.processedYData,l=[],c=h.length,d=this.options,p=d.threshold,u=d.startFromThreshold?p:0,f=d.stack,d=d.stacking,g=this.stackKey,m="-"+g,y=this.negStacks,v=this.yAxis,x=v.stacks,b=v.oldStacks;
for(v.stacksTouched+=1,s=0;c>s;s++)o=a[s],r=h[s],t=this.getStackIndicator(t,o,this.index),
n=t.key,i=(e=y&&(u?0:p)>r)?m:g,x[i]||(x[i]={}),x[i][o]||(b[i]&&b[i][o]?(x[i][o]=b[i][o],
x[i][o].total=null):x[i][o]=new B(v,v.options.stackLabels,e,o,f)),i=x[i][o],i.points[n]=[Je(i.cum,u)],
i.touched=v.stacksTouched,t.index>0&&this.singleStacks===!1&&(i.points[n][0]=i.points[this.index+","+o+",0"][0]),
"percent"===d?(e=e?g:m,y&&x[e]&&x[e][o]?(e=x[e][o],i.total=e.total=pe(e.total,i.total)+fe(r)||0):i.total=M(i.total+(fe(r)||0))):i.total=M(i.total+(r||0)),
i.cum=Je(i.cum,u)+(r||0),i.points[n].push(i.cum),l[s]=i.cum;
"percent"===d&&(v.usePercentage=!0),this.stackedYData=l,v.oldStacks={};
}
},yi.prototype.setPercentStacks=function(){
var t,e=this,i=e.stackKey,n=e.yAxis.stacks,s=e.processedXData;
Fe([i,"-"+i],function(i){
for(var o,r,a,h=s.length;h--;)r=s[h],t=e.getStackIndicator(t,r,e.index),o=(a=n[i]&&n[i][r])&&a.points[t.key],
(r=o)&&(a=a.total?100/a.total:0,r[0]=M(r[0]*a),r[1]=M(r[1]*a),e.stackedYData[h]=r[1]);
});
},yi.prototype.getStackIndicator=function(t,e,i){
return p(t)&&t.x===e?t.index++:t={
x:e,
index:0
},t.key=[i,e,t.index].join(","),t;
},$e(gi.prototype,{
addSeries:function(t,e,i){
var n,s=this;
return t&&(e=Je(e,!0),Ue(s,"addSeries",{
options:t
},function(){
n=s.initSeries(t),s.isDirtyLegend=!0,s.linkSeries(),e&&s.redraw(i);
})),n;
},
addAxis:function(t,e,i,s){
var o=e?"xAxis":"yAxis",r=this.options;
new ri(this,n(t,{
index:this[o].length,
isX:e
})),r[o]=f(r[o]||{}),r[o].push(t),Je(i,!0)&&this.redraw(s);
},
showLoading:function(t){
var e=this,i=e.options,n=e.loadingDiv,s=i.loading,o=function(){
n&&m(n,{
left:e.plotLeft+"px",
top:e.plotTop+"px",
width:e.plotWidth+"px",
height:e.plotHeight+"px"
});
};
n||(e.loadingDiv=n=y(Be,{
className:"highcharts-loading"
},$e(s.style,{
zIndex:10,
display:"none"
}),e.container),e.loadingSpan=y("span",null,s.labelStyle,n),je(e,"redraw",o)),e.loadingSpan.innerHTML=t||i.lang.loading,
e.loadingShown||(m(n,{
opacity:0,
display:""
}),Ke(n,{
opacity:s.style.opacity
},{
duration:s.showDuration||0
}),e.loadingShown=!0),o();
},
hideLoading:function(){
var t=this.options,e=this.loadingDiv;
e&&Ke(e,{
opacity:0
},{
duration:t.loading.hideDuration||100,
complete:function(){
m(e,{
display:"none"
});
}
}),this.loadingShown=!1;
}
}),$e(mi.prototype,{
update:function(t,e,i,n){
function s(){
h.applyOptions(t),null===h.y&&c&&(h.graphic=c.destroy()),r(t)&&!a(t)&&(h.redraw=function(){
c&&c.element&&t&&t.marker&&t.marker.symbol&&(h.graphic=c.destroy()),t&&t.dataLabels&&h.dataLabel&&(h.dataLabel=h.dataLabel.destroy()),
h.redraw=null;
}),o=h.index,l.updateParallelArrays(h,o),u&&h.name&&(u[h.x]=h.name),p.data[o]=r(p.data[o])?h.options:t,
l.isDirty=l.isDirtyData=!0,!l.fixedBox&&l.hasCartesianSeries&&(d.isDirtyBox=!0),
"point"===p.legendType&&(d.isDirtyLegend=!0),e&&d.redraw(i);
}
var o,h=this,l=h.series,c=h.graphic,d=l.chart,p=l.options,u=l.xAxis&&l.xAxis.names,e=Je(e,!0);
n===!1?s():h.firePointEvent("update",{
options:t
},s);
},
remove:function(t,e){
this.series.removePoint(Ge(this,this.series.data),t,e);
}
}),$e(yi.prototype,{
addPoint:function(t,e,i,n){
var s,o=this,r=o.options,a=o.data,h=o.graph,l=o.area,c=o.chart,d=o.xAxis&&o.xAxis.names,p=h&&h.shift||0,u=["graph","area"],h=r.data,f=o.xData;
if(I(n,c),i){
for(n=o.zones.length;n--;)u.push("zoneGraph"+n,"zoneArea"+n);
Fe(u,function(t){
o[t]&&(o[t].shift=p+(r.step?2:1));
});
}
if(l&&(l.isArea=!0),e=Je(e,!0),l={
series:o
},o.pointClass.prototype.applyOptions.apply(l,[t]),u=l.x,n=f.length,o.requireSorting&&u<f[n-1])for(s=!0;n&&f[n-1]>u;)n--;
o.updateParallelArrays(l,"splice",n,0,0),o.updateParallelArrays(l,n),d&&l.name&&(d[u]=l.name),
h.splice(n,0,t),s&&(o.data.splice(n,0,null),o.processData()),"point"===r.legendType&&o.generatePoints(),
i&&(a[0]&&a[0].remove?a[0].remove(!1):(a.shift(),o.updateParallelArrays(l,"shift"),
h.shift())),o.isDirty=!0,o.isDirtyData=!0,e&&(o.getAttribs(),c.redraw());
},
removePoint:function(t,e,i){
var n=this,s=n.data,o=s[t],r=n.points,a=n.chart,h=function(){
s.length===r.length&&r.splice(t,1),s.splice(t,1),n.options.data.splice(t,1),n.updateParallelArrays(o||{
series:n
},"splice",t,1),o&&o.destroy(),n.isDirty=!0,n.isDirtyData=!0,e&&a.redraw();
};
I(i,a),e=Je(e,!0),o?o.firePointEvent("remove",null,h):h();
},
remove:function(t,e){
var i=this,n=i.chart;
Ue(i,"remove",null,function(){
i.destroy(),n.isDirtyLegend=n.isDirtyBox=!0,n.linkSeries(),Je(t,!0)&&n.redraw(e);
});
},
update:function(t,e){
var i,s=this,o=this.chart,r=this.userOptions,a=this.type,h=He[a].prototype,l=["group","markerGroup","dataLabelsGroup"];
(t.type&&t.type!==a||void 0!==t.zIndex)&&(l.length=0),Fe(l,function(t){
l[t]=s[t],delete s[t];
}),t=n(r,{
animation:!1,
index:this.index,
pointStart:this.xData[0]
},{
data:this.options.data
},t),this.remove(!1);
for(i in h)this[i]=E;
$e(this,He[t.type||a].prototype),Fe(l,function(t){
s[t]=l[t];
}),this.init(o,t),o.linkSeries(),Je(e,!0)&&o.redraw(!1);
}
}),$e(ri.prototype,{
update:function(t,e){
var i=this.chart,t=i.options[this.coll][this.options.index]=n(this.userOptions,t);
this.destroy(!0),this._addedPlotLB=this.chart._labelPanes=E,this.init(i,$e(t,{
events:E
})),i.isDirtyBox=!0,Je(e,!0)&&i.redraw();
},
remove:function(t){
for(var e=this.chart,i=this.coll,n=this.series,s=n.length;s--;)n[s]&&n[s].remove(!1);
d(e.axes,this),d(e[i],this),e.options[i].splice(this.options.index,1),Fe(e[i],function(t,e){
t.options.index=e;
}),this.destroy(),e.isDirtyBox=!0,Je(t,!0)&&e.redraw();
},
setTitle:function(t,e){
this.update({
title:t
},e);
},
setCategories:function(t,e){
this.update({
categories:t
},e);
}
});
var vi=v(yi);
He.line=vi,ti.area=n(ei,{
softThreshold:!1,
threshold:0
});
var xi=v(yi,{
type:"area",
singleStacks:!1,
getSegments:function(){
var t,e,i,n,s,o=this,r=[],a=[],h=[],l=this.xAxis,c=this.yAxis,d=c.stacks[this.stackKey],p={},u=this.points,f=this.options.connectNulls;
if(this.options.stacking&&!this.cropped){
for(n=0;n<u.length;n++)p[u[n].x]=u[n];
for(s in d)null!==d[s].total&&h.push(+s);
h.sort(function(t,e){
return t-e;
}),Fe(h,function(s){
var r,h=null;
if(!f||p[s]&&null!==p[s].y)if(p[s])a.push(p[s]);else{
for(n=o.index;n<=c.series.length;n++)if(i=o.getStackIndicator(null,s,n),r=d[s].points[i.key]){
h=r[1];
break;
}
t=l.translate(s),e=c.getThreshold(h),a.push({
y:null,
plotX:t,
clientX:t,
plotY:e,
yBottom:e,
onMouseOver:De
});
}
}),a.length&&r.push(a);
}else yi.prototype.getSegments.call(this),r=this.segments;
this.segments=r;
},
getSegmentPath:function(t){
var e,i=yi.prototype.getSegmentPath.call(this,t),n=[].concat(i),s=this.options;
e=i.length;
var o,r=this.yAxis.getThreshold(s.threshold);
if(3===e&&n.push("L",i[1],i[2]),s.stacking&&!this.closedStacks)for(e=t.length-1;e>=0;e--)o=Je(t[e].yBottom,r),
e<t.length-1&&s.step&&n.push(t[e+1].plotX,o),n.push(t[e].plotX,o);else this.closeSegment(n,t,r);
return this.areaPath=this.areaPath.concat(n),i;
},
closeSegment:function(t,e,i){
t.push("L",e[e.length-1].plotX,i,"L",e[0].plotX,i);
},
drawGraph:function(){
this.areaPath=[],yi.prototype.drawGraph.apply(this);
var t=this,e=this.areaPath,i=this.options,n=[["area",this.color,i.fillColor]];
Fe(this.zones,function(e,s){
n.push(["zoneArea"+s,e.color||t.color,e.fillColor||i.fillColor]);
}),Fe(n,function(n){
var s=n[0],o=t[s];
o?o.animate({
d:e
}):(o={
fill:n[2]||n[1],
zIndex:0
},n[2]||(o["fill-opacity"]=i.fillOpacity||.75),t[s]=t.chart.renderer.path(e).attr(o).add(t.group));
});
},
drawLegendSymbol:ni.drawRectangle
});
return He.area=xi,ti.spline=n(ei),vi=v(yi,{
type:"spline",
getPointSpline:function(t,e,i){
var n,s,o,r,a=e.plotX,h=e.plotY,l=t[i-1],c=t[i+1];
if(l&&c){
t=l.plotY,o=c.plotX;
var d,c=c.plotY;
n=(1.5*a+l.plotX)/2.5,s=(1.5*h+t)/2.5,o=(1.5*a+o)/2.5,r=(1.5*h+c)/2.5,d=(r-s)*(o-a)/(o-n)+h-r,
s+=d,r+=d,s>t&&s>h?(s=pe(t,h),r=2*h-s):t>s&&h>s&&(s=ue(t,h),r=2*h-s),r>c&&r>h?(r=pe(c,h),
s=2*h-r):c>r&&h>r&&(r=ue(c,h),s=2*h-r),e.rightContX=o,e.rightContY=r;
}
return i?(e=["C",l.rightContX||l.plotX,l.rightContY||l.plotY,n||a,s||h,a,h],l.rightContX=l.rightContY=null):e=["M",a,h],
e;
}
}),He.spline=vi,ti.areaspline=n(ti.area),xi=xi.prototype,vi=v(vi,{
type:"areaspline",
closedStacks:!0,
getSegmentPath:xi.getSegmentPath,
closeSegment:xi.closeSegment,
drawGraph:xi.drawGraph,
drawLegendSymbol:ni.drawRectangle
}),He.areaspline=vi,ti.column=n(ei,{
borderColor:"#FFFFFF",
borderRadius:0,
groupPadding:.2,
marker:null,
pointPadding:.1,
minPointLength:0,
cropThreshold:50,
pointRange:null,
states:{
hover:{
brightness:.1,
shadow:!1,
halo:!1
},
select:{
color:"#C0C0C0",
borderColor:"#000000",
shadow:!1
}
},
dataLabels:{
align:null,
verticalAlign:null,
y:null
},
softThreshold:!1,
startFromThreshold:!0,
stickyTracking:!1,
tooltip:{
distance:6
},
threshold:0
}),vi=v(yi,{
type:"column",
pointAttrToOptions:{
stroke:"borderColor",
fill:"color",
r:"borderRadius"
},
cropShoulder:0,
directTouch:!0,
trackerGroups:["group","dataLabelsGroup"],
negStacks:!0,
init:function(){
yi.prototype.init.apply(this,arguments);
var t=this,e=t.chart;
e.hasRendered&&Fe(e.series,function(e){
e.type===t.type&&(e.isDirty=!0);
});
},
getColumnMetrics:function(){
var t,e=this,i=e.options,n=e.xAxis,s=e.yAxis,o=n.reversed,r={},a=0;
i.grouping===!1?a=1:Fe(e.chart.series,function(i){
var n,o=i.options,h=i.yAxis;
i.type===e.type&&i.visible&&s.len===h.len&&s.pos===h.pos&&(o.stacking?(t=i.stackKey,
r[t]===E&&(r[t]=a++),n=r[t]):o.grouping!==!1&&(n=a++),i.columnIndex=n);
});
var h=ue(fe(n.transA)*(n.ordinalSlope||i.pointRange||n.closestPointRange||n.tickInterval||1),n.len),l=h*i.groupPadding,c=(h-2*l)/a,i=ue(i.maxPointWidth||n.len,Je(i.pointWidth,c*(1-2*i.pointPadding)));
return e.columnMetrics={
width:i,
offset:(c-i)/2+(l+((e.columnIndex||0)+(o?1:0))*c-h/2)*(o?-1:1)
},e.columnMetrics;
},
crispCol:function(t,e,i,n){
var s=this.chart,o=this.borderWidth,r=-(o%2?.5:0),o=o%2?.5:1;
return s.inverted&&s.renderer.isVML&&(o+=1),i=Math.round(t+i)+r,t=Math.round(t)+r,
i-=t,n=Math.round(e+n)+o,r=fe(e)<=.5&&n>.5,e=Math.round(e)+o,n-=e,r&&(e-=1,n+=1),
{
x:t,
y:e,
width:i,
height:n
};
},
translate:function(){
var t=this,e=t.chart,i=t.options,n=t.borderWidth=Je(i.borderWidth,t.closestPointRange*t.xAxis.transA<2?0:1),s=t.yAxis,o=t.translatedThreshold=s.getThreshold(i.threshold),r=Je(i.minPointLength,5),a=t.getColumnMetrics(),h=a.width,l=t.barW=pe(h,1+2*n),c=t.pointXOffset=a.offset;
e.inverted&&(o-=.5),i.pointPadding&&(l=de(l)),yi.prototype.translate.apply(t),Fe(t.points,function(i){
var n,a=ue(Je(i.yBottom,o),9e4),d=999+fe(a),d=ue(pe(-d,i.plotY),s.len+d),p=i.plotX+c,u=l,f=ue(d,a),g=pe(d,a)-f;
fe(g)<r&&r&&(g=r,n=!s.reversed&&!i.negative||s.reversed&&i.negative,f=fe(f-o)>r?a-r:o-(n?r:0)),
i.barX=p,i.pointWidth=h,i.tooltipPos=e.inverted?[s.len+s.pos-e.plotLeft-d,t.xAxis.len-p-u/2,g]:[p+u/2,d+s.pos-e.plotTop,g],
i.shapeType="rect",i.shapeArgs=t.crispCol(p,f,u,g);
});
},
getSymbol:De,
drawLegendSymbol:ni.drawRectangle,
drawGraph:De,
drawPoints:function(){
var t,e,i=this,s=this.chart,o=i.options,r=s.renderer,a=o.animationLimit||250;
Fe(i.points,function(h){
var l=h.plotY,c=h.graphic;
l===E||isNaN(l)||null===h.y?c&&(h.graphic=c.destroy()):(t=h.shapeArgs,l=p(i.borderWidth)?{
"stroke-width":i.borderWidth
}:{},e=h.pointAttr[h.selected?"select":""]||i.pointAttr[""],c?(Ze(c),c.attr(l).attr(e)[s.pointCount<a?"animate":"attr"](n(t))):h.graphic=r[h.shapeType](t).attr(l).attr(e).add(h.group||i.group).shadow(o.shadow,null,o.stacking&&!o.borderRadius));
});
},
animate:function(t){
var e=this.yAxis,i=this.options,n=this.chart.inverted,s={};
Pe&&(t?(s.scaleY=.001,t=ue(e.pos+e.len,pe(e.pos,e.toPixels(i.threshold))),n?s.translateX=t-e.len:s.translateY=t,
this.group.attr(s)):(s.scaleY=1,s[n?"translateX":"translateY"]=e.pos,this.group.animate(s,this.options.animation),
this.animate=null));
},
remove:function(){
var t=this,e=t.chart;
e.hasRendered&&Fe(e.series,function(e){
e.type===t.type&&(e.isDirty=!0);
}),yi.prototype.remove.apply(t,arguments);
}
}),He.column=vi,ti.bar=n(ti.column),xi=v(vi,{
type:"bar",
inverted:!0
}),He.bar=xi,ti.scatter=n(ei,{
lineWidth:0,
marker:{
enabled:!0
},
tooltip:{
headerFormat:'<span style="color:{point.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
}
}),xi=v(yi,{
type:"scatter",
sorted:!1,
requireSorting:!1,
noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],
takeOrdinalPosition:!1,
kdDimensions:2,
drawGraph:function(){
this.options.lineWidth&&yi.prototype.drawGraph.call(this);
}
}),He.scatter=xi,ti.pie=n(ei,{
borderColor:"#FFFFFF",
borderWidth:1,
center:[null,null],
clip:!1,
colorByPoint:!0,
dataLabels:{
distance:30,
enabled:!0,
formatter:function(){
return null===this.y?void 0:this.point.name;
},
x:0
},
ignoreHiddenPoint:!0,
legendType:"point",
marker:null,
size:null,
showInLegend:!1,
slicedOffset:10,
states:{
hover:{
brightness:.1,
shadow:!1
}
},
stickyTracking:!1,
tooltip:{
followPointer:!0
}
}),ei={
type:"pie",
isCartesian:!1,
pointClass:v(mi,{
init:function(){
mi.prototype.init.apply(this,arguments);
var t,e=this;
return e.name=Je(e.name,"Slice"),t=function(t){
e.slice("select"===t.type);
},je(e,"select",t),je(e,"unselect",t),e;
},
setVisible:function(t,e){
var i=this,n=i.series,s=n.chart,o=n.options.ignoreHiddenPoint,e=Je(e,o);
t!==i.visible&&(i.visible=i.options.visible=t=t===E?!i.visible:t,n.options.data[Ge(i,n.data)]=i.options,
Fe(["graphic","dataLabel","connector","shadowGroup"],function(e){
i[e]&&i[e][t?"show":"hide"](!0);
}),i.legendItem&&s.legend.colorizeItem(i,t),!t&&"hover"===i.state&&i.setState(""),
o&&(n.isDirty=!0),e&&s.redraw());
},
slice:function(t,e,i){
var n=this.series;
I(i,n.chart),Je(e,!0),this.sliced=this.options.sliced=t=p(t)?t:!this.sliced,n.options.data[Ge(this,n.data)]=this.options,
t=t?this.slicedTranslation:{
translateX:0,
translateY:0
},this.graphic.animate(t),this.shadowGroup&&this.shadowGroup.animate(t);
},
haloPath:function(t){
var e=this.shapeArgs,i=this.series.chart;
return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(i.plotLeft+e.x,i.plotTop+e.y,e.r+t,e.r+t,{
innerR:this.shapeArgs.r,
start:e.start,
end:e.end
});
}
}),
requireSorting:!1,
directTouch:!0,
noSharedTooltip:!0,
trackerGroups:["group","dataLabelsGroup"],
axisTypes:[],
pointAttrToOptions:{
stroke:"borderColor",
"stroke-width":"borderWidth",
fill:"color"
},
animate:function(t){
var e=this,i=e.points,n=e.startAngleRad;
t||(Fe(i,function(t){
var i=t.graphic,s=t.shapeArgs;
i&&(i.attr({
r:t.startR||e.center[3]/2,
start:n,
end:n
}),i.animate({
r:s.r,
start:s.start,
end:s.end
},e.options.animation));
}),e.animate=null);
},
updateTotals:function(){
var t,e,i=0,n=this.points,s=n.length,o=this.options.ignoreHiddenPoint;
for(t=0;s>t;t++)e=n[t],i+=o&&!e.visible?0:e.y;
for(this.total=i,t=0;s>t;t++)e=n[t],e.percentage=i>0&&(e.visible||!o)?e.y/i*100:0,
e.total=i;
},
generatePoints:function(){
yi.prototype.generatePoints.call(this),this.updateTotals();
},
translate:function(t){
this.generatePoints();
var e,i,n,s,o,r=0,a=this.options,h=a.slicedOffset,l=h+a.borderWidth,c=a.startAngle||0,d=this.startAngleRad=ye/180*(c-90),c=(this.endAngleRad=ye/180*(Je(a.endAngle,c+360)-90))-d,p=this.points,u=a.dataLabels.distance,a=a.ignoreHiddenPoint,f=p.length;
for(t||(this.center=t=this.getCenter()),this.getX=function(e,i){
return n=he.asin(ue((e-t[1])/(t[2]/2+u),1)),t[0]+(i?-1:1)*ge(n)*(t[2]/2+u);
},s=0;f>s;s++)o=p[s],e=d+r*c,(!a||o.visible)&&(r+=o.percentage/100),i=d+r*c,o.shapeType="arc",
o.shapeArgs={
x:t[0],
y:t[1],
r:t[2]/2,
innerR:t[3]/2,
start:le(1e3*e)/1e3,
end:le(1e3*i)/1e3
},n=(i+e)/2,n>1.5*ye?n-=2*ye:-ye/2>n&&(n+=2*ye),o.slicedTranslation={
translateX:le(ge(n)*h),
translateY:le(me(n)*h)
},e=ge(n)*t[2]/2,i=me(n)*t[2]/2,o.tooltipPos=[t[0]+.7*e,t[1]+.7*i],o.half=-ye/2>n||n>ye/2?1:0,
o.angle=n,l=ue(l,u/2),o.labelPos=[t[0]+e+ge(n)*u,t[1]+i+me(n)*u,t[0]+e+ge(n)*l,t[1]+i+me(n)*l,t[0]+e,t[1]+i,0>u?"center":o.half?"right":"left",n];
},
drawGraph:null,
drawPoints:function(){
var t,e,i,n,s,o,r=this,a=r.chart.renderer,h=r.options.shadow;
h&&!r.shadowGroup&&(r.shadowGroup=a.g("shadow").add(r.group)),Fe(r.points,function(l){
null!==l.y&&(e=l.graphic,s=l.shapeArgs,i=l.shadowGroup,n=l.pointAttr[l.selected?"select":""],
n.stroke||(n.stroke=n.fill),h&&!i&&(i=l.shadowGroup=a.g("shadow").add(r.shadowGroup)),
t=l.sliced?l.slicedTranslation:{
translateX:0,
translateY:0
},i&&i.attr(t),e?e.setRadialReference(r.center).attr(n).animate($e(s,t)):(o={
"stroke-linejoin":"round"
},l.visible||(o.visibility="hidden"),l.graphic=e=a[l.shapeType](s).setRadialReference(r.center).attr(n).attr(o).attr(t).add(r.group).shadow(h,i)));
});
},
searchPoint:De,
sortByAngle:function(t,e){
t.sort(function(t,i){
return void 0!==t.angle&&(i.angle-t.angle)*e;
});
},
drawLegendSymbol:ni.drawRectangle,
getCenter:si.getCenter,
getSymbol:De
},ei=v(yi,ei),He.pie=ei,yi.prototype.drawDataLabels=function(){
var t,e,i,s,o=this,r=o.options,a=r.cursor,h=r.dataLabels,l=o.points,c=o.hasRendered||0,d=o.chart.renderer;
(h.enabled||o._hasPointLabels)&&(o.dlProcessOptions&&o.dlProcessOptions(h),s=o.plotGroup("dataLabelsGroup","data-labels",h.defer?"hidden":"visible",h.zIndex||6),
Je(h.defer,!0)&&(s.attr({
opacity:+c
}),c||je(o,"afterAnimate",function(){
o.visible&&s.show(),s[r.animation?"animate":"attr"]({
opacity:1
},{
duration:200
});
})),e=h,Fe(l,function(l){
var c,u,f,g,m=l.dataLabel,y=l.connector,v=!0,x={};
if(t=l.dlOptions||l.options&&l.options.dataLabels,c=Je(t&&t.enabled,e.enabled)&&null!==l.y,
m&&!c)l.dataLabel=m.destroy();else if(c){
if(h=n(e,t),g=h.style,c=h.rotation,u=l.getLabelConfig(),i=h.format?k(h.format,u):h.formatter.call(u,h),
g.color=Je(h.color,g.color,o.color,"black"),m)p(i)?(m.attr({
text:i
}),v=!1):(l.dataLabel=m=m.destroy(),y&&(l.connector=y.destroy()));else if(p(i)){
m={
fill:h.backgroundColor,
stroke:h.borderColor,
"stroke-width":h.borderWidth,
r:h.borderRadius||0,
rotation:c,
padding:h.padding,
zIndex:1
},"contrast"===g.color&&(x.color=h.inside||h.distance<0||r.stacking?d.getContrast(l.color||o.color):"#000000"),
a&&(x.cursor=a);
for(f in m)m[f]===E&&delete m[f];
m=l.dataLabel=d[c?"text":"label"](i,0,-9999,h.shape,null,null,h.useHTML).attr(m).css($e(g,x)).add(s).shadow(h.shadow);
}
m&&o.alignDataLabel(l,m,h,null,v);
}
}));
},yi.prototype.alignDataLabel=function(t,e,i,n,s){
var o=this.chart,r=o.inverted,a=Je(t.plotX,-9999),h=Je(t.plotY,-9999),l=e.getBBox(),c=o.renderer.fontMetrics(i.style.fontSize).b,d=this.visible&&(t.series.forceDL||o.isInsidePlot(a,le(h),r)||n&&o.isInsidePlot(a,r?n.x+1:n.y+n.height-1,r));
d&&(n=$e({
x:r?o.plotWidth-h:a,
y:le(r?o.plotHeight-a:h),
width:0,
height:0
},n),$e(i,{
width:l.width,
height:l.height
}),i.rotation?(t=o.renderer.rotCorr(c,i.rotation),e[s?"attr":"animate"]({
x:n.x+i.x+n.width/2+t.x,
y:n.y+i.y+n.height/2
}).attr({
align:i.align
})):(e.align(i,null,n),r=e.alignAttr,"justify"===Je(i.overflow,"justify")?this.justifyDataLabel(e,i,r,l,n,s):Je(i.crop,!0)&&(d=o.isInsidePlot(r.x,r.y)&&o.isInsidePlot(r.x+l.width,r.y+l.height)),
i.shape&&e.attr({
anchorX:t.plotX,
anchorY:t.plotY
}))),d||(Ze(e),e.attr({
y:-9999
}),e.placed=!1);
},yi.prototype.justifyDataLabel=function(t,e,i,n,s,o){
var r,a,h=this.chart,l=e.align,c=e.verticalAlign,d=t.box?0:t.padding||0;
r=i.x+d,0>r&&("right"===l?e.align="left":e.x=-r,a=!0),r=i.x+n.width-d,r>h.plotWidth&&("left"===l?e.align="right":e.x=h.plotWidth-r,
a=!0),r=i.y+d,0>r&&("bottom"===c?e.verticalAlign="top":e.y=-r,a=!0),r=i.y+n.height-d,
r>h.plotHeight&&("top"===c?e.verticalAlign="bottom":e.y=h.plotHeight-r,a=!0),a&&(t.placed=!o,
t.align(e,null,s));
},He.pie&&(He.pie.prototype.drawDataLabels=function(){
var t,e,i,n,s,o,r,a,h,l,c,d=this,p=d.data,u=d.chart,f=d.options.dataLabels,g=Je(f.connectorPadding,10),m=Je(f.connectorWidth,1),y=u.plotWidth,v=u.plotHeight,x=Je(f.softConnector,!0),b=f.distance,k=d.center,w=k[2]/2,S=k[1],T=b>0,A=[[],[]],P=[0,0,0,0],L=function(t,e){
return e.y-t.y;
};
if(d.visible&&(f.enabled||d._hasPointLabels)){
for(yi.prototype.drawDataLabels.apply(d),Fe(p,function(t){
t.dataLabel&&t.visible&&A[t.half].push(t);
}),l=2;l--;){
var M,I=[],O=[],D=A[l],z=D.length;
if(z){
for(d.sortByAngle(D,l-.5),c=p=0;!p&&D[c];)p=D[c]&&D[c].dataLabel&&(D[c].dataLabel.getBBox().height||21),
c++;
if(b>0){
for(s=ue(S+w+b,u.plotHeight),c=pe(0,S-w-b);s>=c;c+=p)I.push(c);
if(s=I.length,z>s){
for(t=[].concat(D),t.sort(L),c=z;c--;)t[c].rank=c;
for(c=z;c--;)D[c].rank>=s&&D.splice(c,1);
z=D.length;
}
for(c=0;z>c;c++){
t=D[c],o=t.labelPos,t=9999;
var R,B;
for(B=0;s>B;B++)R=fe(I[B]-o[1]),t>R&&(t=R,M=B);
if(c>M&&null!==I[c])M=c;else for(z-c+M>s&&null!==I[c]&&(M=s-z+c);null===I[M];)M++;
O.push({
i:M,
y:I[M]
}),I[M]=null;
}
O.sort(L);
}
for(c=0;z>c;c++)t=D[c],o=t.labelPos,n=t.dataLabel,h=t.visible===!1?"hidden":"inherit",
t=o[1],b>0?(s=O.pop(),M=s.i,a=s.y,(t>a&&null!==I[M+1]||a>t&&null!==I[M-1])&&(a=ue(pe(0,t),u.plotHeight))):a=t,
r=f.justify?k[0]+(l?-1:1)*(w+b):d.getX(a===S-w-b||a===S+w+b?t:a,l),n._attr={
visibility:h,
align:o[6]
},n._pos={
x:r+f.x+({
left:g,
right:-g
}[o[6]]||0),
y:a+f.y-10
},n.connX=r,n.connY=a,null===this.options.size&&(s=n.width,g>r-s?P[3]=pe(le(s-r+g),P[3]):r+s>y-g&&(P[1]=pe(le(r+s-y+g),P[1])),
0>a-p/2?P[0]=pe(le(-a+p/2),P[0]):a+p/2>v&&(P[2]=pe(le(a+p/2-v),P[2])));
}
}
(0===C(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),T&&m&&Fe(this.points,function(t){
e=t.connector,o=t.labelPos,(n=t.dataLabel)&&n._pos&&t.visible?(h=n._attr.visibility,
r=n.connX,a=n.connY,i=x?["M",r+("left"===o[6]?5:-5),a,"C",r,a,2*o[2]-o[4],2*o[3]-o[5],o[2],o[3],"L",o[4],o[5]]:["M",r+("left"===o[6]?5:-5),a,"L",o[2],o[3],"L",o[4],o[5]],
e?(e.animate({
d:i
}),e.attr("visibility",h)):t.connector=e=d.chart.renderer.path(i).attr({
"stroke-width":m,
stroke:f.connectorColor||t.color||"#606060",
visibility:h
}).add(d.dataLabelsGroup)):e&&(t.connector=e.destroy());
}));
}
},He.pie.prototype.placeDataLabels=function(){
Fe(this.points,function(t){
var e=t.dataLabel;
e&&t.visible&&((t=e._pos)?(e.attr(e._attr),e[e.moved?"animate":"attr"](t),e.moved=!0):e&&e.attr({
y:-9999
}));
});
},He.pie.prototype.alignDataLabel=De,He.pie.prototype.verifyDataLabelOverflow=function(t){
var e,i=this.center,n=this.options,s=n.center,o=n.minSize||80,r=o;
return null!==s[0]?r=pe(i[2]-pe(t[1],t[3]),o):(r=pe(i[2]-t[1]-t[3],o),i[0]+=(t[3]-t[1])/2),
null!==s[1]?r=pe(ue(r,i[2]-pe(t[0],t[2])),o):(r=pe(ue(r,i[2]-t[0]-t[2]),o),i[1]+=(t[0]-t[2])/2),
r<i[2]?(i[2]=r,i[3]=Math.min(/%$/.test(n.innerSize||0)?r*parseFloat(n.innerSize||0)/100:parseFloat(n.innerSize||0),r),
this.translate(i),Fe(this.points,function(t){
t.dataLabel&&(t.dataLabel._pos=null);
}),this.drawDataLabels&&this.drawDataLabels()):e=!0,e;
}),He.column&&(He.column.prototype.alignDataLabel=function(t,e,i,s,o){
var r=this.chart.inverted,a=t.series,h=t.dlBox||t.shapeArgs,l=Je(t.below,t.plotY>Je(this.translatedThreshold,a.yAxis.len)),c=Je(i.inside,!!this.options.stacking);
h&&(s=n(h),s.y<0&&(s.height+=s.y,s.y=0),h=s.y+s.height-a.yAxis.len,h>0&&(s.height-=h),
r&&(s={
x:a.yAxis.len-s.y-s.height,
y:a.xAxis.len-s.x-s.width,
width:s.height,
height:s.width
}),c||(r?(s.x+=l?0:s.width,s.width=0):(s.y+=l?s.height:0,s.height=0))),i.align=Je(i.align,!r||c?"center":l?"right":"left"),
i.verticalAlign=Je(i.verticalAlign,r||c?"middle":l?"top":"bottom"),yi.prototype.alignDataLabel.call(this,t,e,i,s,o);
}),function(t){
var e=t.Chart,i=t.each,n=t.pick,s=t.addEvent;
e.prototype.callbacks.push(function(t){
function e(){
var e=[];
i(t.series,function(t){
var s=t.options.dataLabels,o=t.dataLabelCollections||["dataLabel"];
(s.enabled||t._hasPointLabels)&&!s.allowOverlap&&t.visible&&i(o,function(s){
i(t.points,function(t){
t[s]&&(t[s].labelrank=n(t.labelrank,t.shapeArgs&&t.shapeArgs.height),e.push(t[s]));
});
});
}),t.hideOverlappingLabels(e);
}
e(),s(t,"redraw",e);
}),e.prototype.hideOverlappingLabels=function(t){
var e,n,s,o,r,a,h,l=t.length;
for(n=0;l>n;n++)(e=t[n])&&(e.oldOpacity=e.opacity,e.newOpacity=1);
for(t.sort(function(t,e){
return(e.labelrank||0)-(t.labelrank||0);
}),n=0;l>n;n++)for(s=t[n],e=n+1;l>e;++e)o=t[e],s&&o&&s.placed&&o.placed&&0!==s.newOpacity&&0!==o.newOpacity&&(r=s.alignAttr,
a=o.alignAttr,h=2*(s.box?0:s.padding),r=!(a.x>r.x+(s.width-h)||a.x+(o.width-h)<r.x||a.y>r.y+(s.height-h)||a.y+(o.height-h)<r.y))&&((s.labelrank<o.labelrank?s:o).newOpacity=0);
i(t,function(t){
var e,i;
t&&(i=t.newOpacity,t.oldOpacity!==i&&t.placed&&(i?t.show(!0):e=function(){
t.hide();
},t.alignAttr.opacity=i,t[t.isOld?"animate":"attr"](t.alignAttr,null,e)),t.isOld=!0);
});
};
}(re),ei=re.TrackerMixin={
drawTrackerPoint:function(){
var t=this,e=t.chart,i=e.pointer,n=t.options.cursor,s=n&&{
cursor:n
},o=function(t){
for(var i,n=t.target;n&&!i;)i=n.point,n=n.parentNode;
i!==E&&i!==e.hoverPoint&&i.onMouseOver(t);
};
Fe(t.points,function(t){
t.graphic&&(t.graphic.element.point=t),t.dataLabel&&(t.dataLabel.element.point=t);
}),t._hasTracking||(Fe(t.trackerGroups,function(e){
t[e]&&(t[e].addClass("highcharts-tracker").on("mouseover",o).on("mouseout",function(t){
i.onTrackerMouseOut(t);
}).css(s),H)&&t[e].on("touchstart",o);
}),t._hasTracking=!0);
},
drawTrackerGraph:function(){
var t,e=this,i=e.options,n=i.trackByArea,s=[].concat(n?e.areaPath:e.graphPath),o=s.length,r=e.chart,a=r.pointer,h=r.renderer,l=r.options.tooltip.snap,c=e.tracker,d=i.cursor,p=d&&{
cursor:d
},d=e.singlePoints,u=function(){
r.hoverSeries!==e&&e.onMouseOver();
},f="rgba(192,192,192,"+(Pe?1e-4:.002)+")";
if(o&&!n)for(t=o+1;t--;)"M"===s[t]&&s.splice(t+1,0,s[t+1]-l,s[t+2],"L"),(t&&"M"===s[t]||t===o)&&s.splice(t,0,"L",s[t-2]+l,s[t-1]);
for(t=0;t<d.length;t++)o=d[t],s.push("M",o.plotX-l,o.plotY,"L",o.plotX+l,o.plotY);
c?c.attr({
d:s
}):(e.tracker=h.path(s).attr({
"stroke-linejoin":"round",
visibility:e.visible?"visible":"hidden",
stroke:f,
fill:n?f:"none",
"stroke-width":i.lineWidth+(n?0:2*l),
zIndex:2
}).add(e.group),Fe([e.tracker,e.markerGroup],function(t){
t.addClass("highcharts-tracker").on("mouseover",u).on("mouseout",function(t){
a.onTrackerMouseOut(t);
}).css(p),H&&t.on("touchstart",u);
}));
}
},He.column&&(vi.prototype.drawTracker=ei.drawTrackerPoint),He.pie&&(He.pie.prototype.drawTracker=ei.drawTrackerPoint),
He.scatter&&(xi.prototype.drawTracker=ei.drawTrackerPoint),$e(fi.prototype,{
setItemEvents:function(t,e,i,n,s){
var o=this;
(i?e:t.legendGroup).on("mouseover",function(){
t.setState("hover"),e.css(o.options.itemHoverStyle);
}).on("mouseout",function(){
e.css(t.visible?n:s),t.setState();
}).on("click",function(e){
var i=function(){
t.setVisible&&t.setVisible();
},e={
browserEvent:e
};
t.firePointEvent?t.firePointEvent("legendItemClick",e,i):Ue(t,"legendItemClick",e,i);
});
},
createCheckboxForItem:function(t){
t.checkbox=y("input",{
type:"checkbox",
checked:t.selected,
defaultChecked:t.selected
},this.options.itemCheckboxStyle,this.chart.container),je(t.checkbox,"click",function(e){
Ue(t.series||t,"checkboxClick",{
checked:e.target.checked,
item:t
},function(){
t.select();
});
});
}
}),G.legend.itemStyle.cursor="pointer",$e(gi.prototype,{
showResetZoom:function(){
var t=this,e=G.lang,i=t.options.chart.resetZoomButton,n=i.theme,s=n.states,o="chart"===i.relativeTo?null:"plotBox";
this.resetZoomButton=t.renderer.button(e.resetZoom,null,null,function(){
t.zoomOut();
},n,s&&s.hover).attr({
align:i.position.align,
title:e.resetZoomTitle
}).add().align(i.position,!1,o);
},
zoomOut:function(){
var t=this;
Ue(t,"selection",{
resetSelection:!0
},function(){
t.zoom();
});
},
zoom:function(t){
var e,i,n=this.pointer,s=!1;
!t||t.resetSelection?Fe(this.axes,function(t){
e=t.zoom();
}):Fe(t.xAxis.concat(t.yAxis),function(t){
var i=t.axis,o=i.isXAxis;
(n[o?"zoomX":"zoomY"]||n[o?"pinchX":"pinchY"])&&(e=i.zoom(t.min,t.max),i.displayBtn&&(s=!0));
}),i=this.resetZoomButton,s&&!i?this.showResetZoom():!s&&r(i)&&(this.resetZoomButton=i.destroy()),
e&&this.redraw(Je(this.options.chart.animation,t&&t.animation,this.pointCount<100));
},
pan:function(t,e){
var i,n=this,s=n.hoverPoints;
s&&Fe(s,function(t){
t.setState();
}),Fe("xy"===e?[1,0]:[1],function(e){
var s=t[e?"chartX":"chartY"],o=n[e?"xAxis":"yAxis"][0],r=n[e?"mouseDownX":"mouseDownY"],a=(o.pointRange||0)/2,h=o.getExtremes(),l=o.toValue(r-s,!0)+a,a=o.toValue(r+n[e?"plotWidth":"plotHeight"]-s,!0)-a,r=r>s;
o.series.length&&(r||l>ue(h.dataMin,h.min))&&(!r||a<pe(h.dataMax,h.max))&&(o.setExtremes(l,a,!1,!1,{
trigger:"pan"
}),i=!0),n[e?"mouseDownX":"mouseDownY"]=s;
}),i&&n.redraw(!1),m(n.container,{
cursor:"move"
});
}
}),$e(mi.prototype,{
select:function(t,e){
var i=this,n=i.series,s=n.chart,t=Je(t,!i.selected);
i.firePointEvent(t?"select":"unselect",{
accumulate:e
},function(){
i.selected=i.options.selected=t,n.options.data[Ge(i,n.data)]=i.options,i.setState(t&&"select"),
e||Fe(s.getSelectedPoints(),function(t){
t.selected&&t!==i&&(t.selected=t.options.selected=!1,n.options.data[Ge(t,n.data)]=t.options,
t.setState(""),t.firePointEvent("unselect"));
});
});
},
onMouseOver:function(t,e){
var i=this.series,n=i.chart,s=n.tooltip,o=n.hoverPoint;
n.hoverSeries!==i&&i.onMouseOver(),o&&o!==this&&o.onMouseOut(),this.series&&(this.firePointEvent("mouseOver"),
s&&(!s.shared||i.noSharedTooltip)&&s.refresh(this,t),this.setState("hover"),!e)&&(n.hoverPoint=this);
},
onMouseOut:function(){
var t=this.series.chart,e=t.hoverPoints;
this.firePointEvent("mouseOut"),e&&-1!==Ge(this,e)||(this.setState(),t.hoverPoint=null);
},
importEvents:function(){
if(!this.hasImportedEvents){
var t,e=n(this.series.options.point,this.options).events;
this.events=e;
for(t in e)je(this,t,e[t]);
this.hasImportedEvents=!0;
}
},
setState:function(t,e){
var i,s=ce(this.plotX),o=this.plotY,r=this.series,a=r.options.states,h=ti[r.type].marker&&r.options.marker,l=h&&!h.enabled,c=h&&h.states[t],d=c&&c.enabled===!1,p=r.stateMarkerGraphic,u=this.marker||{},f=r.chart,g=r.halo,t=t||"";
i=this.pointAttr[t]||r.pointAttr[t],t===this.state&&!e||this.selected&&"select"!==t||a[t]&&a[t].enabled===!1||t&&(d||l&&c.enabled===!1)||t&&u.states&&u.states[t]&&u.states[t].enabled===!1||(this.graphic?(h=h&&this.graphic.symbolName&&i.r,
this.graphic.attr(n(i,h?{
x:s-h,
y:o-h,
width:2*h,
height:2*h
}:{})),p&&p.hide()):(t&&c&&(h=c.radius,u=u.symbol||r.symbol,p&&p.currentSymbol!==u&&(p=p.destroy()),
p?p[e?"animate":"attr"]({
x:s-h,
y:o-h
}):u&&(r.stateMarkerGraphic=p=f.renderer.symbol(u,s-h,o-h,2*h,2*h).attr(i).add(r.markerGroup),
p.currentSymbol=u)),p&&(p[t&&f.isInsidePlot(s,o,f.inverted)?"show":"hide"](),p.element.point=this)),
(s=a[t]&&a[t].halo)&&s.size?(g||(r.halo=g=f.renderer.path().add(f.seriesGroup)),
g.attr($e({
fill:this.color||r.color,
"fill-opacity":s.opacity
},s.attributes))[e?"animate":"attr"]({
d:this.haloPath(s.size)
})):g&&g.attr({
d:[]
}),this.state=t);
},
haloPath:function(t){
var e=this.series,i=e.chart,n=e.getPlotBox(),s=i.inverted,o=Math.floor(this.plotX);
return i.renderer.symbols.circle(n.translateX+(s?e.yAxis.len-this.plotY:o)-t,n.translateY+(s?e.xAxis.len-o:this.plotY)-t,2*t,2*t);
}
}),$e(yi.prototype,{
onMouseOver:function(){
var t=this.chart,e=t.hoverSeries;
e&&e!==this&&e.onMouseOut(),this.options.events.mouseOver&&Ue(this,"mouseOver"),
this.setState("hover"),t.hoverSeries=this;
},
onMouseOut:function(){
var t=this.options,e=this.chart,i=e.tooltip,n=e.hoverPoint;
e.hoverSeries=null,n&&n.onMouseOut(),this&&t.events.mouseOut&&Ue(this,"mouseOut"),
i&&!t.stickyTracking&&(!i.shared||this.noSharedTooltip)&&i.hide(),this.setState();
},
setState:function(t){
var e=this.options,i=this.graph,n=e.states,s=e.lineWidth,e=0,t=t||"";
if(this.state!==t&&(this.state=t,!(n[t]&&n[t].enabled===!1)&&(t&&(s=n[t].lineWidth||s+(n[t].lineWidthPlus||0)),
i&&!i.dashstyle)))for(t={
"stroke-width":s
},i.attr(t);this["zoneGraph"+e];)this["zoneGraph"+e].attr(t),e+=1;
},
setVisible:function(t,e){
var i,n=this,s=n.chart,o=n.legendItem,r=s.options.chart.ignoreHiddenSeries,a=n.visible;
i=(n.visible=t=n.userOptions.visible=t===E?!a:t)?"show":"hide",Fe(["group","dataLabelsGroup","markerGroup","tracker"],function(t){
n[t]&&n[t][i]();
}),(s.hoverSeries===n||(s.hoverPoint&&s.hoverPoint.series)===n)&&n.onMouseOut(),
o&&s.legend.colorizeItem(n,t),n.isDirty=!0,n.options.stacking&&Fe(s.series,function(t){
t.options.stacking&&t.visible&&(t.isDirty=!0);
}),Fe(n.linkedSeries,function(e){
e.setVisible(t,!1);
}),r&&(s.isDirtyBox=!0),e!==!1&&s.redraw(),Ue(n,i);
},
show:function(){
this.setVisible(!0);
},
hide:function(){
this.setVisible(!1);
},
select:function(t){
this.selected=t=t===E?!this.selected:t,this.checkbox&&(this.checkbox.checked=t),
Ue(this,t?"select":"unselect");
},
drawTracker:ei.drawTrackerGraph
}),$e(re,{
Color:D,
Point:mi,
Tick:R,
Renderer:X,
SVGElement:z,
SVGRenderer:ii,
arrayMin:A,
arrayMax:C,
charts:ze,
dateFormat:F,
error:e,
format:k,
pathAnim:void 0,
getOptions:function(){
return G;
},
hasBidiBug:Le,
isTouchDevice:Ae,
setOptions:function(t){
return G=n(!0,G,t),O(),G;
},
addEvent:je,
removeEvent:_e,
createElement:y,
discardElement:L,
css:m,
each:Fe,
map:Ve,
merge:n,
splat:f,
stableSort:T,
extendClass:v,
pInt:s,
svg:Pe,
canvas:Me,
vml:!Pe&&!Me,
product:"Highcharts",
version:"4.2.1"
}),re;
}),window.Highcharts=n,i.exports;
});