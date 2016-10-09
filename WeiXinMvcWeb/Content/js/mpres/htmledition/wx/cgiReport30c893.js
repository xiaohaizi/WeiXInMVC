define("common/wx/cgiReport.js",["common/wx/Tips.js"],function(a,e){
"use strict";
var r=a("common/wx/Tips.js");
e.error=function(a,e){
var t=-1!==location.href.indexOf("/cgi-bin/home")&&(-1!==e.url.indexOf("/misc/safeassistant")||-1!==e.url.indexOf("/safe/safeuuid")),n=11;
switch(a){
case"timeout":
n=7;
break;

case"error":
n=8;
break;

case"notmodified":
n=9;
break;

case"parsererror":
n=10;
}
e.data.lang&&delete e.data.lang,e.data.random&&delete e.data.random,e.data.f&&delete e.data.f,
e.data.ajax&&delete e.data.ajax,e.data.token&&delete e.data.token,n+=t?100:0,$.ajax({
url:"/misc/jslog?1=1",
data:{
content:"[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={useragent}] [page={page}]".format({
uin:wx.data.uin,
useragent:window.navigator.userAgent,
page:location.href,
url:e.url,
param:$.param(e.data).substr(0,50),
info:a
}),
id:n,
level:"error"
},
type:"POST"
}),$.ajax({
url:"/misc/jslog?1=1",
data:{
content:"[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={useragent}] [page={page}]".format({
uin:wx.data.uin,
useragent:window.navigator.userAgent,
page:location.href,
url:e.url,
param:$.param(e.data).substr(0,50),
info:a
}),
id:6+(t?100:0),
level:"error"
},
type:"POST"
}),"timeout"==a&&r.err("你的网络环境较差，请稍后重试");
};
});