define("setting/rename_popup.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","common/wx/tooltips.js","common/wx/Step.js","biz_common/jquery.validate.js","wxverify/validateExtend.js","common/wx/inputCounter.js","common/wx/qrcheck.js","tpl/setting/rename_popup.html.js","tpl/setting/rename_qrcheck.html.js","tpl/setting/rename_agree.html.js","tpl/setting/rename_form.html.js","tpl/setting/rename_confirm.html.js","tpl/setting/rename_result.html.js","tpl/setting/rename_cancel_result.html.js"],function(e,n,t){
"use strict";
function a(){
var e=$(j),n=e.find(".js_btn_next");
N.html(e);
var t={
container:"#js_div_rename_qrcheck",
container_class:"qr_pop_check",
cgiURI:"/acct/findacct",
size:280,
idCard:null,
name:null,
scene:7,
extra:{
fakeid:cgiData.fakeid_base64,
nickname:E
},
renderData:{
name_title:"运营者"
},
askSpeed:5,
askMaxNum:60,
onTicketChange:function(e){
D=e;
},
onStatusChange:function(e){
z=e,"1"==z&&n.enable();
},
onTipsChange:function(e,n){
var t="";
if("1"==e){
var a=$("#js_div_rename_qrcheck .js_qrcheck_ret_1");
a.find("p").html(""),t=a.get(0).outerHTML;
}else t=wx.T($("#js_div_rename_qrcheck .js_qrcheck_ret_"+e)[0].outerHTML,n);
return t;
}
};
n.on("click",function(){
"1"==z&&(T++,i());
}),S=new b(t),S.updateUser(null,null),n.disable(),y.setStep(T),C.resetPosition();
}
function i(){
var e=$(g),n=e.find(".js_btn_next");
N.html(e),n.on("click",function(){
T++,r();
}),y.setStep(T),C.resetPosition();
}
function r(){
function e(e){
var t=n.validate();
t.showErrors({
name:e
});
}
var n=$(wx.T(v,{
name:L
})),t=n.find(".js_btn_pre"),a=n.find(".js_btn_next"),r=n.find('input[name="name"]');
N.html(n),n.validate({
ignore:"",
rules:{
name:{
required:!0,
rangelen:[3,30]
}
},
messages:{
name:{
required:"请填写名称",
rangelen:$.validator.format("帐号名称为{0}到{1}个字符")
}
}
}),t.on("click",function(){
T--,i();
}),a.on("click",function(t){
return t.preventDefault(),a.hasClass("btn_loading")?!1:0==n.valid()?!1:(a.btn(!1),
void _.post({
url:"/cgi-bin/setuserinfo?action=check_nickname",
data:{
nick_name:L
}
},function(n){
if(a.btn(!0),!n||!n.base_resp)return void d.err("系统错误，请稍后重试");
switch(n.base_resp.ret){
case 0:
T++,U=0,s();
break;

case 2:
case 3:
case 4:
U=n.base_resp.ret,s();
break;

case 1:
e("不能使用该名称注册");
break;

case-41:
e("公众账号名称只允许含有中文、英文大小写、数字，长度为3-30个字符");
break;

case 1004:
e('名称与平台内已有名称重复。基于帐号名称唯一原则，请重新提交一个新名称。如果你认为已有名称侵犯了你的合法权益，可以进行<a target="_blank" href="/acct/infringement?action=getmanual&t=infringement/manual&type=1'+wx.data.param+'">侵权投诉</a>。<a href="http://kf.qq.com/faq/120911VrYVrA160331BzmE7z.html" target="_blank">了解更多</a>');
break;

case 65201:
e("不能使用该名称");
break;

case 210050:
e("名称不能与已有公众帐号的微信号重复");
break;

case 200013:
e("提交次数过于频繁，请稍后再试");
break;

case 210041:
e("名称长度为3-30个字符，不能含有特殊字符及“微信”等保留字");
break;

case 211003:
e("名称正在15天保护期中，暂不能申请使用；你可在保护期满后重新申请使用该名称");
break;

default:
d.err("系统错误，请稍后重试");
}
}));
}),r.on("keyup change",function(){
L=$(this).val();
}),new h(r,{
minLength:3,
maxLength:30,
showCounter:!0,
useGBKLength:!0
}),y.setStep(T),C.resetPosition();
}
function s(){
var e=$(wx.T(w,{
newName:L,
oldName:E,
invadeType:U
})),n=e.find(".js_btn_pre"),t=e.find(".js_btn_next");
N.html(e),n.on("click",function(){
r();
}),t.on("click",function(e){
return e.preventDefault(),t.hasClass("btn_loading")?!1:(t.btn(!1),0!=U?void(location.href=wx.url("/cgi-bin/frame?t=setting/auth_frame&invadetype="+U+"&nickname="+encodeURIComponent(L))):void _.post({
url:"/cgi-bin/setuserinfo?action=nickname",
data:{
nick_name:L,
invade_type:0,
qrcheck_ticket:D
}
},function(e){
if(t.btn(!0),!e||!e.base_resp)return void d.err("系统错误，请稍后重试");
switch(e.base_resp.ret){
case 0:
T++,P=e.set_nickname_resp.cancel_deadline,H=e.set_nickname_resp.can_cancel,c();
break;

case 1004:
d.err("名称与平台内已有名称重复，请重新设置");
break;

case 200013:
d.err("提交次数过于频繁，请稍后再试");
break;

case 210041:
d.err("名称长度为3-30个字符，不能含有特殊字符及“微信”等保留字");
break;

case 210050:
d.err("名称不能与已有公众帐号的微信号重复");
break;

case 65201:
d.err("不能使用该名称");
break;

case 211003:
d.err("名称正在15天保护期中，暂不能申请使用；你可在保护期满后重新申请使用该名称");
break;

default:
d.err("系统错误，请稍后重试");
}
}));
}),y.setStep(T),C.resetPosition();
}
function c(){
var e=$(wx.T(x,{
newName:L,
oldName:E,
deadline:P,
canCancel:H
})),n=e.find(".js_btn_close"),t=e.find(".js_btn_cancel");
C.get().find("#js_div_rename_step").hide(),N.html(e),n.on("click",function(){
location.reload(!0);
});
var a="撤销改名后，申请名称“{newName}”将释放给其他帐号可使用。是否立即撤销？";
new p({
container:t,
content:wx.T(a,{
newName:L
}),
type:"click",
position:{
top:-5,
left:-145+t.width()/2
},
onclose:function(){},
buttons:[{
text:"撤销修改",
type:"btn_primary",
click:function(){
var e=this.$dom.find(".btn").eq(0),n=this;
return e.hasClass("btn_loading")?!1:(e.btn(!1),void _.post({
url:"/cgi-bin/setuserinfo?action=cancel_setnickname",
data:{}
},function(t){
return e.btn(!0),t&&t.base_resp?void(0==t.base_resp.ret?(n.hide(),o()):d.err("系统错误，请稍后重试")):void d.err("系统错误，请稍后重试");
}));
}
},{
text:"取消",
type:"btn_default",
click:function(){
0==this.$dom.find(".btn").eq(0).hasClass("btn_loading")&&this.hide();
}
}]
});
}
function o(){
var e=$(wx.T(q,{
newName:L,
oldName:E
})),n=e.find(".js_btn_close");
C.get().find("#js_div_rename_step").hide(),N.html(e),n.on("click",function(){
location.reload(!0);
});
}
function l(){
C&&(C.remove(),C=null);
}
function m(e){
C=null,S=null,N=null,U=0,$(k).eq(0).popup({
title:"修改名称",
data:{},
buttons:[],
mask:!0,
className:"align_edge",
onHide:function(){
l();
},
onShow:function(){
C=this,N=C.get().find("#js_div_rename_content"),T=1;
var n=["1 同意协议","2 修改名称","3 确定修改"];
switch(0==M&&(n=["1 验证身份","2 同意协议","3 修改名称","4 确定修改"]),y=new f({
container:"#js_div_rename_step",
selected:1,
names:n
}),e){
case"result":
c();
break;

default:
0==M?a():i();
}
}
});
}
function u(e){
L=e.newName||"",E=e.oldName||"",P=e.deadline||"",M=e.realnameType||0;
}
var _=(template.render,e("common/wx/Cgi.js")),d=e("common/wx/Tips.js"),p=(e("common/wx/popup.js"),
e("common/wx/tooltips.js")),f=e("common/wx/Step.js"),h=(e("biz_common/jquery.validate.js"),
e("wxverify/validateExtend.js"),e("common/wx/inputCounter.js")),b=e("common/wx/qrcheck.js"),k=e("tpl/setting/rename_popup.html.js"),j=e("tpl/setting/rename_qrcheck.html.js"),g=e("tpl/setting/rename_agree.html.js"),v=e("tpl/setting/rename_form.html.js"),w=e("tpl/setting/rename_confirm.html.js"),x=e("tpl/setting/rename_result.html.js"),q=e("tpl/setting/rename_cancel_result.html.js"),C=null,y=null,T=0,N=null,S=null,z="",D="",L="",E="",P="",H=!0,M=0,U=0;
t.exports={
show:m,
setData:u
};
});