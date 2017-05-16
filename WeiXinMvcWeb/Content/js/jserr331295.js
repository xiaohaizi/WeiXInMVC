var BJ_REPORT=function(e){
function i(){
if(t.id!=S.IDS.DEFAULT||t.key!=S.KEY)return{
id:t.id,
key:t.key
};
var e={
_href:location.href,
href:location.href.replace("https://mp.weixin.qq.com/","")
};
e.cgi=e.href.indexOf("?")>-1?e.href.match(/.*?\?/g)[0].slice(0,-1):e.href;
var i=(e.href+"&").match(/action\=(.*?)&/);
i&&i[1]&&(e.action=i[1]);
var n=S.IDS.DEFAULT,r=S.KEY;
return"cgi-bin/masssendpage"==e.cgi?(n=S.IDS.MASS,r=66):"advanced/autoreply"==e.cgi?(n=S.IDS.AUTO_REPLY,
r=70):"advanced/selfmenu"==e.cgi?(n=S.IDS.SELF_MENU,r=68):"misc/appmsgcomment"==e.cgi?(n=S.IDS.COMMENT,
r=71):"cgi-bin/newoperatevote"==e.cgi?(n=S.IDS.VOTE,r=72):"misc/kf"==e.cgi?(n=S.IDS.KF,
r=73):"merchant/rewardstat"==e.cgi||"merchant/reward"==e.cgi?(n=S.IDS.REWARD,r=74):"cgi-bin/appmsgcopyright"==e.cgi||"cgi-bin/imgcopyright"==e.cgi||"cgi-bin/ori_video"==e.cgi?(n=S.IDS.COPYRIGHT,
r=75):"cgi-bin/message"==e.cgi?(n=S.IDS.MSG,r=76):"cgi-bin/user_tag"==e.cgi?(n=S.IDS.USER,
r=77):"cgi-bin/appmsg"==e.cgi&&("list_card"==e.action||"list"==e.action)||"cgi-bin/filepage"==e.cgi?(n=S.IDS.LIST,
r=78):"cgi-bin/operate_voice"==e.cgi?(n=S.IDS.AUDIO,r=79):"cgi-bin/appmsg"==e.cgi&&"video_edit"==e.action?(n=S.IDS.VEDIO,
r=80):""==e.cgi?(n=S.IDS.APPMSG,r=62):"cgi-bin/frame"==e.cgi&&/t=ad_system/.test(e.href)||/merchant\/ad_/.test(e.cgi)?(n=S.IDS.AD,
r=81):"misc/useranalysis"==e.cgi||"misc/appmsganalysis"==e.cgi||"misc/menuanalysis"==e.cgi||"misc/messageanalysis"==e.cgi||"misc/interfaceanalysis"==e.cgi?(n=S.IDS.ANALYSIS,
r=82):"cgi-bin/settingpage"==e.cgi||"acct/contractorinfo"==e.cgi?(n=S.IDS.SETTING,
r=83):"merchant/store"==e.cgi||"merchant/order"==e.cgi||"acct/wxverify"==e.cgi?(n=S.IDS.VERIFY,
r=84):"cgi-bin/safecenterstatus"==e.cgi||""==e.cgi||""==e.cgi?(n=S.IDS.SAFE,r=85):"cgi-bin/illegalrecord"==e.cgi?(n=S.IDS.ILLEGAL,
r=86):"advanced/advanced"==e.cgi||"advanced/diagram"==e.cgi||"cgi-bin/frame"==e.cgi&&/t=advanced\/dev_tools_frame/.test(e.href)?(n=S.IDS.ADVANCED,
r=87):"acct/contractorpage"==e.cgi?(n=S.IDS.REGISTER,r=88):"cgi-bin/readtemplate"==e.cgi?(n=S.IDS.TMPL,
r=89):"advanced/tmplmsg"==e.cgi?(n=S.IDS.TMPLMSG,r=90):"merchant/entityshop"==e.cgi?(n=S.IDS.SHOP,
r=92):"merchant/goods"==e.cgi||"merchant/goodsgroup"==e.cgi||"merchant/shelf"==e.cgi||"merchant/goodsimage"==e.cgi||"merchant/delivery"==e.cgi||"merchant/productorder"==e.cgi||"merchant/merchantstat"==e.cgi||"merchant/introduction"==e.cgi||"merchant/merchantpush"==e.cgi||"merchant/merchantentrance"==e.cgi?(n=S.IDS.MERCHANT,
r=104):"cgi-bin/home"==e.cgi?(n=S.IDS.HOME,r=93):"merchant/cardapply"==e.cgi&&"listapply"==e.action?r=95:e.cgi.indexOf("beacon")>-1&&(n=S.IDS.IBEACON,
r=96),t.id=n,t.key=r,{
id:n,
key:r
};
}
function n(e,i){
return/Mozilla\/5.0.*ipad.*BaiduHD/i.test(i)&&e.indexOf("ReferenceError: Can't find variable: bds")>-1?!1:/Linux; U; Android.*letv/i.test(i)&&e.indexOf("ReferenceError: diableNightMode is not defined")>-1?!1:!0;
}
if(e.BJ_REPORT)return e.BJ_REPORT;
var r=[],t={
uin:0,
url:"https://badjs.weixinbridge.com/badjs",
combo:1,
level:4,
ignore:[],
random:1,
delay:1e3,
submit:null
},c=function(e,i){
return Object.prototype.toString.call(e)==="[object "+(i||"Object")+"]";
},o=function(e){
var i=typeof e;
return"object"===i&&!!e;
},a=function(e){
return null===e?!0:c(e,"Number")?!1:!e;
},g=e.onerror;
e.onerror=function(i,r,t,o,a){
var s=i;
a&&a.stack&&(s=m(a)),c(s,"Event")&&(s+=s.type?"--"+s.type+"--"+(s.target?s.target.tagName+"::"+s.target.src:""):""),
r&&r.length>0&&0==/^https\:\/\/(mp\.weixin\.qq\.com|res\.wx\.qq\.com)/.test(r),0!=n(s,window.navigator.userAgent)&&(S.push({
msg:s+"|onerror",
target:r,
rowNum:t,
colNum:o
}),I(),g&&g.apply(e,arguments));
};
var s=function(e){
try{
if(e.stack){
var i=e.stack.match("https?://[^\n]+");
i=i?i[0]:"";
var r=i.match(":(\\d+):(\\d+)");
if(i&&i.lenth>0&&0==/^https?\:\/\/(mp\.weixin\.qq\.com|res\.wx\.qq\.com)/.test(i))return null;
r||(r=[0,0,0]);
var t=m(e).replace(/https?\:\/\/.*?\.js\:/g,"");
return 0==n(t,window.navigator.userAgent)?null:{
msg:t,
rowNum:r[1],
colNum:r[2],
target:i.replace(r[0],"")
};
}
return e;
}catch(c){
return e;
}
},m=function(e){
var i=e.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,5).join("@").replace(/\?[^:]+/gi,""),n=e.toString();
return i.indexOf(n)<0&&(i=n+"@"+i),i;
},d=function(e,i){
var n=[],r=[],c=[];
if(o(e)){
e.level=e.level||t.level;
for(var g in e){
var s=e[g];
if(!a(s)){
if(o(s))try{
s=JSON.stringify(s);
}catch(m){
s="[BJ_REPORT detect value stringify error] "+m.toString();
}
c.push(g+":"+s),n.push(g+"="+encodeURIComponent(s)),r.push(g+"["+i+"]="+encodeURIComponent(s));
}
}
}
return[r.join("&"),c.join(","),n.join("&")];
},u=[],l=[],p=function(e){
var i=e.replace(/\&_t=\d*/,"");
for(var n in l)if(l[n]==i)return;
if(l.push(i),t.submit)t.submit(e);else{
var r=new Image;
u.push(r),r.src=e;
}
var c=new Image;
if(c.src="https://mp.weixin.qq.com/misc/jslog?id=65&content=badjs&level=error",t.key){
var r=new Image;
r.src="https://mp.weixin.qq.com/misc/jslog?id="+t.key+"&content=badjs&level=error";
}
},f=[],h=0,I=function(e){
if(t.report){
for(;r.length;){
var i=!1,n=r.shift(),o=d(n,f.length);
if(c(t.ignore,"Array"))for(var a=0,g=t.ignore.length;g>a;a++){
var s=t.ignore[a];
if(c(s,"RegExp")&&s.test(o[1])||c(s,"Function")&&s(n,o[1])){
i=!0;
break;
}
}
i||(t.combo?f.push(o[0]):p(t.report+o[2]+"&_t="+ +new Date),t.onReport&&t.onReport(t.id,n));
}
var m=f.length;
if(m){
var u=function(){
clearTimeout(h),p(t.report+f.join("&")+"&count="+m+"&_t="+ +new Date),h=0,f=[];
};
e?u():h||(h=setTimeout(u,t.delay,!0));
}
}
},S={
KEY:67,
IDS:{
DEFAULT:"5",
MASS:"6",
SELF_MENU:"7",
LINK:"11",
AUTO_REPLY:"12",
COMMENT:"13",
VOTE:"14",
KF:"15",
REWARD:"16",
COPYRIGHT:"17",
MSG:"18",
USER:"19",
LIST:"20",
AUDIO:"21",
VEDIO:"22",
APPMSG:"4",
AD:"23",
ANALYSIS:"24",
SETTING:"25",
VERIFY:"26",
SAFE:"27",
ILLEGAL:"28",
ADVANCED:"29",
REGISTER:"30",
TMPL:"31",
IE:"32",
CARD:"33",
SHOP:"34",
TMPLMSG:"35",
HOME:"36",
Android:"37",
IOS:"38",
IBEACON:"72",
MERCHANT:"82"
},
destory:function(){
I=function(){};
},
push:function(e){
if(Math.random()>=t.random)return S;
var i;
return o(e)?(i=s(e),i&&r.push(i)):r.push({
msg:e
}),I(),S;
},
report:function(e){
return e&&S.push(e),I(!0),S;
},
info:function(e){
return e?(o(e)?e.level=2:e={
msg:e,
level:2
},S.push(e),S):S;
},
debug:function(e){
return e?(o(e)?e.level=1:e={
msg:e,
level:1
},S.push(e),S):S;
},
init:function(e){
for(var i in e)t[i]=e[i];
var n=parseInt(t.id,10),i=parseInt(t.key,10);
return window.navigator.userAgent&&/;\s*MSIE\s*[9|8|7]\.0b?;/i.test(window.navigator.userAgent)?(n=S.IDS.IE,
i=S.KEY):window.navigator.userAgent.indexOf("Android")>-1||window.navigator.userAgent.indexOf("Adr")>-1?(n=S.IDS.Android,
i=S.KEY):window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(n=S.IDS.IOS,
i=S.KEY),n&&i&&(t.report=t.url+"?id="+n+"&key="+i+"&uin="+(wx&&wx.uin)+"&from="+encodeURIComponent(location.href)+"&"),
S;
},
monitor:function(e,i,n){
if(i=i||"badjs|monitor",e){
var r=new Image;
r.src="https://mp.weixin.qq.com/misc/jslog?id="+e+"&content="+encodeURIComponent(i)+"&level=error";
}
if(n){
var c=new Image;
c.src=t.url+"?id="+n+"&msg="+encodeURIComponent(i)+"&uin="+(wx&&wx.uin)+"&from="+encodeURIComponent(location.href)+"&level=4";
}
},
getConfig:function(){
return t;
},
__onerror__:e.onerror
};
return"undefined"!=typeof console&&console.error&&setTimeout(function(){
var e=((location.hash||"").match(/([#&])BJ_ERROR=([^&$]+)/)||[])[2];
e&&console.error("BJ_ERROR",decodeURIComponent(e).replace(/(:\d+:\d+)\s*/g,"$1\n"));
},0,!0),t.id=S.IDS.DEFAULT,t.key=S.KEY,i(),S.init(),S;
}(window);