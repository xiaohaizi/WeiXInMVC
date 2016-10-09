var Login=function(){
function e(e){
r.err.html('<i class="icon18_common error"></i><span class="err_tips">'+e+"</span>").show();
}
function n(){
i&&r.verifyImg.attr("src","/cgi-bin/verifycode?username="+$.trim(r.account.val())+"&r="+ +new Date);
}
function t(t, o, c) {
    console.log(o);
$.post("/cgibin/login",{
username:t,
pwd:o,//$.md5(o.substr(0,16)),
imgcode:c,
f:"json"
}, function (o) {
   o= $.parseJSON(o);
switch(o.base_resp.ret+""){
case"0":
if($.cookie("noticeLoginFlag",1,{
expires:30
}),r.check.prop("checked")?$.cookie("remember_acct",t,{
expires:30
}):$.removeCookie("remember_acct"),/\/cgi-bin\/home\?/.test(o.redirect_url)){
/*if(window.location.href.indexOf("toUrl=ad")>-1){
var c=o.redirect_url.match(/token=(\d*)/);
c&&c[1]&&(o.redirect_url="/promotion/advertiser_index?lang=zh_CN&token="+c[1]+"&aSource="+(window.aSource||""));
}
*/
}//else/\/cgi-bin\/readtemplate\?t=user\/validate_wx_tmpl/.test(o.redirect_url)&&window.location.href.indexOf("toUrl=ad")>-1&&(o.redirect_url+="&toUrl=ad&aSource="+(window.aSource||""));
location.href = o.base_resp.redirect_url;
break;

case"-1":
e("系统错误，请稍候再试。");
break;

case"200002":
e("帐号或密码错误。");
break;

case"200007":
e("您目前处于访问受限状态。");
break;

case"200008":
i=!0,$("#verifyDiv").show(),r.verify.val("").focus(),e("请输入图中的验证码");
break;

case"200021":
e("不存在该帐户。");
break;

case"200023":
r.pwd.focus(),e("您输入的帐号或者密码不正确，请重新输入。");
break;

case"200025":
e('海外帐号请在公众平台海外版登录,<a href="http://admin.wechat.com/">点击登录</a>');
break;

case"200026":
e("该公众会议号已经过期，无法再登录使用。");
break;

case"200027":
r.verify.val("").focus(),e("您输入的验证码不正确，请重新输入");
break;

case"200121":
e('该帐号属于微信开放平台，请点击<a href="https://open.weixin.qq.com/">此处登录</a>');
break;

default:
e("未知的返回。");
var a=new Image;
a.src="/mp/unknow_ret_report?uin=0&id=64462&key=0&url="+encodeURIComponent("/cgibin/login")+"&location="+encodeURIComponent(window.location.href)+"&ret="+o.base_resp.ret+"&method=get&action=report";
}
0!=o.base_resp.ret&&n();
});
}
function o(){
$("#loginForm").find("input").focus(function(){
$(this).parent().addClass("focus");
}).blur(function(){
$(this).parent().removeClass("focus");
}),$("#verifyChange").click(function(){
n();
}),$("#pwd,#verify").keydown(function(e){
var n="which"in e?e.which:e.keyCode;
13==n&&$("#loginBt").trigger("click");
}),$("#loginBt").click(function(){
var n=$.trim(r.account.val())||"",o=$.trim(r.pwd.val())||"",c=$.trim(r.verify.val())||"";
return 0==n.length?(e("你还没有输入帐号！"),void r.account.focus()):0==o.length?(e("你还没有输入密码！"),
void r.pwd.focus()):1==i&&0==c.length?(e("你还没有输入验证码！"),void r.verify.focus()):void t(n,o,c);
}),$("#rememberCheck").change(function(){
$(this).prop("checked")?$(this).parent().addClass("selected"):$(this).parent().removeClass("selected");
}),$.cookie("remember_acct")&&($("#rememberCheck").trigger("click"),$("#account").val($.cookie("remember_acct")),
$("#pwd").focus());
}
var r={
account:$("#account"),
pwd:$("#pwd"),
err:$("#err"),
verify:$("#verify"),
verifyImg:$("#verifyImg"),
check:$("#rememberCheck")
},i=!1;
return r.account.focus(),{
init:o
};
}(),Case=function(){
function e(){
jQuery(window).scroll(function(){
n();
}),$(".jsIconItem").hover(function(){
clearInterval(o),s=$(this).data("index"),$(".jsIcon").removeClass("on"),$(".jsImg").removeClass("on"),
$(".jsIcon").eq(s).addClass("on"),$(".jsImg").eq(s).addClass("on");
},function(){
o=setInterval(t,1500);
}),n();
}
function n(){
0==c&&($(".jsIcon").eq(s).addClass("on"),$(document).scrollTop()+document.documentElement.clientHeight>r.offset().top&&(c=!0,
o=setInterval(t,1500))),0==a&&$(document).scrollTop()+document.documentElement.clientHeight>i.parent().offset().top&&(a=!0,
$(".jsImg").eq(s).addClass("on"),$(".jsImg>img").each(function(e,n){
$(n).attr("src",$(n).data("src"));
})),c&&a&&jQuery(window).unbind("scroll");
}
function t(){
6>s?s++:6==s&&(s=0),$(".jsIcon").removeClass("on").eq(s).addClass("on"),$(".jsImg").removeClass("on").eq(s).addClass("on");
}
var o,r=$("#iconList"),i=$(".jsImg"),c=!1,a=!1,s=0;
return{
init:e
};
}();
$(function(){
Login.init(),Case.init();
}),function(e){
"use strict";
function n(e,n){
var t=(65535&e)+(65535&n),o=(e>>16)+(n>>16)+(t>>16);
return o<<16|65535&t;
}
function t(e,n){
return e<<n|e>>>32-n;
}
function o(e,o,r,i,c,a){
return n(t(n(n(o,e),n(i,a)),c),r);
}
function r(e,n,t,r,i,c,a){
return o(n&t|~n&r,e,n,i,c,a);
}
function i(e,n,t,r,i,c,a){
return o(n&r|t&~r,e,n,i,c,a);
}
function c(e,n,t,r,i,c,a){
return o(n^t^r,e,n,i,c,a);
}
function a(e,n,t,r,i,c,a){
return o(t^(n|~r),e,n,i,c,a);
}
function s(e,t){
e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;
var o,s,d,u,f,l=1732584193,p=-271733879,m=-1732584194,v=271733878;
for(o=0;o<e.length;o+=16)s=l,d=p,u=m,f=v,l=r(l,p,m,v,e[o],7,-680876936),v=r(v,l,p,m,e[o+1],12,-389564586),
m=r(m,v,l,p,e[o+2],17,606105819),p=r(p,m,v,l,e[o+3],22,-1044525330),l=r(l,p,m,v,e[o+4],7,-176418897),
v=r(v,l,p,m,e[o+5],12,1200080426),m=r(m,v,l,p,e[o+6],17,-1473231341),p=r(p,m,v,l,e[o+7],22,-45705983),
l=r(l,p,m,v,e[o+8],7,1770035416),v=r(v,l,p,m,e[o+9],12,-1958414417),m=r(m,v,l,p,e[o+10],17,-42063),
p=r(p,m,v,l,e[o+11],22,-1990404162),l=r(l,p,m,v,e[o+12],7,1804603682),v=r(v,l,p,m,e[o+13],12,-40341101),
m=r(m,v,l,p,e[o+14],17,-1502002290),p=r(p,m,v,l,e[o+15],22,1236535329),l=i(l,p,m,v,e[o+1],5,-165796510),
v=i(v,l,p,m,e[o+6],9,-1069501632),m=i(m,v,l,p,e[o+11],14,643717713),p=i(p,m,v,l,e[o],20,-373897302),
l=i(l,p,m,v,e[o+5],5,-701558691),v=i(v,l,p,m,e[o+10],9,38016083),m=i(m,v,l,p,e[o+15],14,-660478335),
p=i(p,m,v,l,e[o+4],20,-405537848),l=i(l,p,m,v,e[o+9],5,568446438),v=i(v,l,p,m,e[o+14],9,-1019803690),
m=i(m,v,l,p,e[o+3],14,-187363961),p=i(p,m,v,l,e[o+8],20,1163531501),l=i(l,p,m,v,e[o+13],5,-1444681467),
v=i(v,l,p,m,e[o+2],9,-51403784),m=i(m,v,l,p,e[o+7],14,1735328473),p=i(p,m,v,l,e[o+12],20,-1926607734),
l=c(l,p,m,v,e[o+5],4,-378558),v=c(v,l,p,m,e[o+8],11,-2022574463),m=c(m,v,l,p,e[o+11],16,1839030562),
p=c(p,m,v,l,e[o+14],23,-35309556),l=c(l,p,m,v,e[o+1],4,-1530992060),v=c(v,l,p,m,e[o+4],11,1272893353),
m=c(m,v,l,p,e[o+7],16,-155497632),p=c(p,m,v,l,e[o+10],23,-1094730640),l=c(l,p,m,v,e[o+13],4,681279174),
v=c(v,l,p,m,e[o],11,-358537222),m=c(m,v,l,p,e[o+3],16,-722521979),p=c(p,m,v,l,e[o+6],23,76029189),
l=c(l,p,m,v,e[o+9],4,-640364487),v=c(v,l,p,m,e[o+12],11,-421815835),m=c(m,v,l,p,e[o+15],16,530742520),
p=c(p,m,v,l,e[o+2],23,-995338651),l=a(l,p,m,v,e[o],6,-198630844),v=a(v,l,p,m,e[o+7],10,1126891415),
m=a(m,v,l,p,e[o+14],15,-1416354905),p=a(p,m,v,l,e[o+5],21,-57434055),l=a(l,p,m,v,e[o+12],6,1700485571),
v=a(v,l,p,m,e[o+3],10,-1894986606),m=a(m,v,l,p,e[o+10],15,-1051523),p=a(p,m,v,l,e[o+1],21,-2054922799),
l=a(l,p,m,v,e[o+8],6,1873313359),v=a(v,l,p,m,e[o+15],10,-30611744),m=a(m,v,l,p,e[o+6],15,-1560198380),
p=a(p,m,v,l,e[o+13],21,1309151649),l=a(l,p,m,v,e[o+4],6,-145523070),v=a(v,l,p,m,e[o+11],10,-1120210379),
m=a(m,v,l,p,e[o+2],15,718787259),p=a(p,m,v,l,e[o+9],21,-343485551),l=n(l,s),p=n(p,d),
m=n(m,u),v=n(v,f);
return[l,p,m,v];
}
function d(e){
var n,t="";
for(n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);
return t;
}
function u(e){
var n,t=[];
for(t[(e.length>>2)-1]=void 0,n=0;n<t.length;n+=1)t[n]=0;
for(n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;
return t;
}
function f(e){
return d(s(u(e),8*e.length));
}
function l(e,n){
var t,o,r=u(e),i=[],c=[];
for(i[15]=c[15]=void 0,r.length>16&&(r=s(r,8*e.length)),t=0;16>t;t+=1)i[t]=909522486^r[t],
c[t]=1549556828^r[t];
return o=s(i.concat(u(n)),512+8*n.length),d(s(c.concat(o),640));
}
function p(e){
var n,t,o="0123456789abcdef",r="";
for(t=0;t<e.length;t+=1)n=e.charCodeAt(t),r+=o.charAt(n>>>4&15)+o.charAt(15&n);
return r;
}
function m(e){
return unescape(encodeURIComponent(e));
}
function v(e){
return f(m(e));
}
function g(e){
return p(v(e));
}
function h(e,n){
return l(m(e),m(n));
}
function w(e,n){
return p(h(e,n));
}
e.md5=function(e,n,t){
return n?t?h(n,e):w(n,e):t?v(e):g(e);
};
}("function"==typeof jQuery?jQuery:this),function(e,n,t){
function o(e){
return e;
}
function r(e){
return i(decodeURIComponent(e.replace(a," ")));
}
function i(e){
return 0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),
e;
}
function c(e){
return s.json?JSON.parse(e):e;
}
var a=/\+/g,s=e.cookie=function(i,a,d){
if(a!==t){
if(d=e.extend({},s.defaults,d),null===a&&(d.expires=-1),"number"==typeof d.expires){
var u=d.expires,f=d.expires=new Date;
f.setDate(f.getDate()+u);
}
return a=s.json?JSON.stringify(a):String(a),n.cookie=[encodeURIComponent(i),"=",s.raw?a:encodeURIComponent(a),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("");
}
for(var l=s.raw?o:r,p=n.cookie.split("; "),m=i?null:{},v=0,g=p.length;g>v;v++){
var h=p[v].split("="),w=l(h.shift()),$=l(h.join("="));
if(i&&i===w){
m=c($);
break;
}
i||(m[w]=c($));
}
return m;
};
s.defaults={},e.removeCookie=function(n,t){
return null!==e.cookie(n)?(e.cookie(n,null,t),!0):!1;
};
}(jQuery,document),window.wxgsdk=function(){
function e(e){
if(!e.pid||!e.speeds)return-1;
if(!e.speeds.length>0){
var n=e.speeds;
e.speeds=[],e.speeds.push(n);
}
for(var t=i(e),o=0;o<e.speeds.length;o++){
var c=e.speeds[o];
c.time=parseInt(c.time),c.sid>20&&c.time>0&&r(t,c.sid,c.time);
}
}
function n(){
a(function(){
setTimeout(function(){
for(var e in d)c({
pid_uin_rid:e,
speeds:d[e]
},u);
d={};
},100);
});
}
function t(e){
a(function(){
if(!e.pid||!e.time)return-1;
var n=i(e);
r(n,9,e.time);
});
}
function o(e){
a(function(){
var n=i(e);
d[n]||(d[n]=[]);
var t=window.performance||window.msPerformance||window.webkitPerformance;
if(t&&t.timing){
var o=t.timing;
r(n,1,o.domainLookupEnd-o.domainLookupStart),r(n,2,"https:"==location.protocol&&0!=o.secureConnectionStart?o.connectEnd-o.secureConnectionStart:0),
r(n,3,o.connectEnd-o.connectStart),r(n,4,o.responseStart-o.requestStart),r(n,5,o.responseEnd-o.responseStart),
r(n,6,o.domContentLoadedEventStart-o.domLoading),r(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),
r(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart),function(){
setTimeout(function(){
o.loadEventEnd&&(r(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),r(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart));
},0);
}(d),d[n][9]||r(n,9,o.domContentLoadedEventStart-o.navigationStart),r(n,10,o.domainLookupStart-o.navigationStart),
r(n,11,o.domLoading-o.responseStart);
}
});
}
function r(e,n,t){
d[e]=d[e]||[],d[e][n]=d[e][n]||[],0>t||(21>n?d[e][n][0]=t:d[e][n].push(t));
}
function i(e){
return e&&e.pid?e.pid+"_"+(e.uin||0)+"_"+(e.rid||0):void(console&&console.error("Must provide a pid"));
}
function c(e,n){
var t=e.pid_uin_rid.split("_");
if(3!=t.length)return void(console&&console.error("pid,uin,rid, invalid args"));
for(var o="pid="+t[0]+"&uin="+t[1]+"&rid="+t[2],r=n+o+"&speeds=",i="",c=[],a=1;a<e.speeds.length;a++)if(e.speeds[a]){
for(var s=0;s<e.speeds[a].length;s++){
var d=a+"_"+e.speeds[a][s];
r.length+i.length+d.length<1024?i=i+d+";":(i.length&&c.push(r+i.substring(0,i.length-1)),
i=d+";");
}
a==e.speeds.length-1&&c.push(r+i.substring(0,i.length-1));
}
for(var a=0;a<c.length;a++)(new Image).src=c[a];
}
function a(e){
"complete"==document.readyState?e():f.push(e);
}
function s(){
for(var e in f)f[e]();
f=[];
}
var d={},u="https://badjs.weixinbridge.com/frontend/reportspeed?",f=[];
return window.addEventListener?window.addEventListener("load",s,!1):window.attachEvent&&window.attachEvent("onload",s),
{
saveSpeeds:e,
send:n,
setFirstViewTime:t,
setBasicTime:o
};
}(),wxgsdk.setBasicTime({
uin:0,
pid:30
}),wxgsdk.send();