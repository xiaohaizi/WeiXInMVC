define("user/user_cgi.js",["common/wx/Tips.js","common/wx/Cgi.js"],function(e,t,o){
"use strict";
var n={
changeRemark:"/cgi-bin/modifycontacts?t=ajax-response&action=setremark",
changeGroup:"/cgi-bin/modifycontacts?action=modifycontacts&t=ajax-putinto-group",
getBuddy:"/cgi-bin/getcontactinfo?t=ajax-getcontactinfo&lang=zh_CN&fakeid="
},a=e("common/wx/Tips.js"),s="",c=e("common/wx/Cgi.js");
o.exports={
changeRemark:function(e,t,o){
c.post({
mask:!1,
url:n.changeRemark,
data:{
remark:t,
tofakeuin:e
}
},function(e){
if(!e||!e.base_resp)return void a.err("修改失败");
var t=e.base_resp.ret+"";
if("0"==t)a.suc("修改成功"),"function"==typeof o&&o(e);else switch(t){
case"61900":
a.err("修改失败");
break;

case"61901":
a.err("系统繁忙");
break;

case"61910":
a.err("修改失败");
break;

case"61911":
a.err("修改失败，对方不是你的粉丝");
break;

case"61912":
a.err("修改失败，备注不能超过30个字");
break;

default:
c.handleRet(e,{
id:64462,
key:80,
url:"/cgi-bin/modifycontacts?action=setremark",
msg:"修改失败"
});
}
});
},
changeGroup:function(e,t,o,s,r){
var i=$.isArray(e)?e.join("|"):e;
c.post({
url:n.changeGroup,
data:{
scene:s||"",
contacttype:t,
tofakeidlist:i
},
mask:!1
},function(e){
if(!e||!e.base_resp)return void a.err("添加失败");
var n=e.base_resp.ret;
"0"==n?("function"==typeof o&&o(e),a.suc(1===r&&0===t?"已从黑名单移入默认组":1!==r&&1===t?"已加入黑名单":"添加成功")):c.handleRet(e,{
id:64462,
key:81,
url:"/cgi-bin/modifycontacts?action=modifycontacts",
msg:"添加失败"
});
});
},
setTempMsgid:function(e){
e&&""==s&&(s=e),console.log("setTempMsgid"),console.log("_sTempMsgId="+s);
},
getBuddyInfo:function(e,t){
var o="";
s&&(o="&msgid="+s),console.log("getBuddyInfo"),console.log(o),c.post({
mask:!1,
url:n.getBuddy+e+o
},function(e){
"function"==typeof t&&t(e),e&&e.base_resp&&e.base_resp.ret&&c.handleRet(e,{
id:64462,
key:82,
url:"/cgi-bin/getcontactinfo",
showMsg:!1
});
});
}
};
});