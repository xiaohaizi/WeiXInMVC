define("setting/index.js",["common/wx/Tips.js","common/wx/tooltips.js","biz_common/jquery.validate.js","common/wx/dialog.js","common/wx/Cgi.js","common/qq/queryString.js","common/wx/Step.js","biz_web/utils/upload.js","common/wx/Idcheck.js","common/wx/time.js","common/wx/top.js","common/wx/popover.js","common/wx/popup.js","setting/rename_popup.js","common/lib/jquery.Jcrop.js","biz_web/ui/checkbox.js"],function(e){
"use strict";
{
var t=template.render,i=e("common/wx/Tips.js"),n=(e("common/wx/tooltips.js"),e("biz_common/jquery.validate.js"),
e("common/wx/dialog.js")),a=e("common/wx/Cgi.js"),s=(e("common/qq/queryString.js"),
e("common/wx/Step.js")),r=e("biz_web/utils/upload.js"),o=r.uploadTmpFile,c=e("common/wx/Idcheck.js"),l=e("common/wx/time.js"),d=e("common/wx/top.js"),u=e("common/wx/popover.js"),p=(e("common/wx/popup.js"),
e("setting/rename_popup.js"));
wx.data.t,wx.data.lang;
}
e("common/lib/jquery.Jcrop.js"),e("common/wx/popup.js"),e("biz_web/ui/checkbox.js");
var m=new d("#topTab",d.DATA.setting);
m.selected(0);
var h={
submitting:!1,
back:function(){
var e=this.get().find(".js_btn_p").hide();
e.eq(1).show(),$("#step1Desc").css("display","block"),$("#step2Desc").css("display","none"),
this.resetPosition();
},
agree:function(){
var e=this.get().find(".js_btn_p").hide();
e.eq(0).show(),e.eq(2).show(),$("#step1Desc").css("display","none"),$("#step2Desc").css("display","block"),
this.resetPosition();
},
next:function(e){
if($("#modifyInput").on("change",function(){
$("#js_div_account_warning").empty();
}),$(".nickname_input").length>0){
if(0!=g.nickname())return;
cgiData.checkNickname=$("#modifyInput").val(),cgiData.invadeType=0;
var t=this,n=this.get().find(".js_btn_p");
if(h.submitting)return;
n.eq(2).btn(!1),h.submitting=!0,a.post({
url:"/cgi-bin/setuserinfo?action=check_nickname",
data:{
nick_name:cgiData.checkNickname
},
complete:function(){
h.submitting=!1,n.eq(2).btn(!0);
}
},function(s){
if(!s||!s.base_resp)return void i.err("系统错误，请稍后重试");
var r=1*s.base_resp.ret;
if(cgiData.invadeType=r,0==r||2==r||3==r||4==r){
var o=$("#normal_nickname"),c=$("#invade_nickname");
0==r?(o.show().find("span[type=before]").text(cgiData.nickname),o.find("span[type=after]").text(cgiData.checkNickname),
c.hide()):(o.hide(),c.show().find("span[type=invade]").text(cgiData.checkNickname)),
e.setStep(3),n.hide(),n.eq(3).show(),n.eq(4).show(),$(".frm_msg").css("display","none"),
$("#step2Desc").css("display","none"),$("#step3Desc").css("display","block"),t.resetPosition();
}else-41==r?$("#js_div_account_warning").html('<p class="frm_msg fail" style="display:block;">公众账号名称只允许含有中文、英文大小写、数字，长度为3-30个字符</p>'):1004==r?$("#js_div_account_warning").html('<p class="frm_msg fail" style="display:block;">名称与平台内已有名称重复。基于帐号名称唯一原则，请重新提交一个新名称。如果你认为已有名称侵犯了你的合法权益，可以进行<a target="_blank" href="/acct/infringement?action=getmanual&t=infringement/manual&type=1'+wx.data.param+'">侵权投诉</a>。<a href="http://kf.qq.com/faq/120911VrYVrA160331BzmE7z.html" target="_blank">了解更多</a></p>'):65201==r?$("#js_div_account_warning").html('<p class="frm_msg fail" style="display:block;">不能使用该名称</p>'):210050==r?$("#js_div_account_warning").html('<p class="frm_msg fail" style="display:block;">名称不能与已有公众帐号的微信号重复</p>'):200013==r?i.err("提交次数过于频繁，请稍后再试"):210041==r?i.err("名称长度为3-30个字符，不能含有特殊字符及“微信”等保留字"):1==r?i.err("不能使用该名称注册"):a.handleRet(s,{
id:64463,
key:9,
url:"/cgi-bin/setuserinfo?action=check_nickname"
});
});
}else{
if($(".userinfo_input").length&&0!=g.intro())return;
if($("#largeHeadImg").length&&0!=g.headimg())return void i.err("请先上传头像");
e.setStep(3);
var n=this.get().find(".js_btn_p").hide();
n.eq(3).show(),n.eq(4).show(),$(".frm_msg").css("display","none"),$("#step2Desc").css("display","none"),
$("#step3Desc").css("display","block"),$("#ensure_input").text($.trim($("#modifyInput").val())),
this.resetPosition();
}
},
prev:function(){
var e=this.get().find(".js_btn_p").hide();
e.eq(0).show(),e.eq(2).show(),$("#step2Desc").css("display","block"),$("#step3Desc").css("display","none"),
this.resetPosition();
},
show:function(e){
var t,i,n=$(e.tplId).popup({
title:e.title,
width:e.width,
className:e.className,
buttons:[{
text:"返回",
click:function(){
i.setStep(1),h.back.call(this);
}
},{
text:"同意并进入下一步",
click:function(){
i.setStep(2),h.agree.call(this),e.agreeInit&&e.agreeInit();
},
type:"primary"
},{
text:"下一步",
click:function(){
h.next.call(this,i);
},
type:"primary"
},{
text:"上一步",
click:function(){
i.setStep(2),$("#error_tip").hide(),h.prev.call(this);
},
type:"default"
},{
text:"确定",
click:e.done||function(){},
type:"primary"
}],
onHide:function(){
this.remove();
}
});
i=new s({
container:"#Js_stepBar",
names:["1 同意协议","2 "+e.title,"3 确定修改"]
}),t=n.popup("get").find(".js_btn_p").hide(),t.eq(1).show(),e.init(),n.popup("show");
}
},f={
submitting:!1,
next:function(e){
if($("#modifyInput").on("change",function(){
$("#js_div_account_warning").empty();
}),!$(".userinfo_input").length||0==g.intro()){
if($("#largeHeadImg").length&&0!=g.headimg())return void i.err("请先上传头像");
e.setStep(2);
var t=this.get().find(".js_btn_p").hide();
t.eq(2).show(),t.eq(1).show(),$(".frm_msg").hide(),$("#step1Desc").hide(),$("#step2Desc").show(),
$("#ensure_input").text($.trim($("#modifyInput").val())),this.resetPosition();
}
},
prev:function(){
var e=this.get().find(".js_btn_p").hide();
e.eq(0).show(),$("#step1Desc").show(),$("#step2Desc").hide(),this.resetPosition();
},
show:function(e){
var t,i,n=$(e.tplId).popup({
title:e.title,
width:e.width||960,
className:e.className||"",
buttons:[{
text:"下一步",
click:function(){
f.next.call(this,i);
},
type:"primary"
},{
text:"上一步",
click:function(){
i.setStep(1),$("#error_tip").hide(),f.prev.call(this);
},
type:"default"
},{
text:"确定",
click:e.done||$.noop,
type:"primary"
}],
onHide:function(){
this.remove();
}
});
i=new s({
container:"#Js_stepBar",
names:["1 "+e.title,"2 确定修改"]
}),t=n.popup("get").find(".js_btn_p").hide(),t.eq(0).show(),e.init&&e.init(),e.agreeInit&&e.agreeInit(),
n.popup("show");
}
},g={
intro:function(){
var e=$.trim($("#modifyInput").val()).length;
return 4>e||e>120?($(".frm_msg").css("display","block"),-1):($(".frm_msg").hide(),
0);
},
nickname:function(){
var e=$.trim($("#modifyInput").val()),t=e.length;
return 0==t?($(".frm_msg").css("display","block"),-1):/(微\s*信|we\s*chat)/gi.test(e)?($(".frm_msg").css("display","block"),
-1):($(".frm_msg").css("display","none"),0);
},
headimg:function(){
return-1!=$("#uploadFileSrc").attr("src").indexOf("cgi-bin")?0:-1;
}
},_=function(){
var e=[];
return{
register:function(t,i){
e.push({
name:t,
init:i.init
});
},
init:function(){
$("#Js_weiboVerify").on("click",function(){
n.show("用户达到500才可申请认证");
}),function(){
var e=cgiData.errcode;
""!=e&&i.err("10000"==e?"选定的腾讯微博帐号已经被其他公众号绑定，绑定失败":"绑定失败，请稍后再试");
}(),$.each(e,function(){
this.init();
});
}
};
}();
_.register("moresize",{
init:function(){
$("#more_size").click(function(){
var e=$("#tpl_moresize").popup({
title:"更多尺寸",
width:960,
className:"more_size",
data:{
pixSet:[8,12,15,30,50],
dist:[.5,.8,1,1.5,2.5],
qrcode:cgiData.links.qrcode
},
buttons:[{
text:"关闭",
click:function(){
this.hide();
},
type:"primary"
}],
onHide:function(){
this.remove();
}
});
e.popup("show");
});
}
}),_.register("username",{
init:function(){
if(3==cgiData.can_modify_nickname){
var e=$("#js_div_nickname_pass_time");
if(e.length>0&&cgiData.nickname_modify_time>0){
var n=new Date(1e3*cgiData.nickname_modify_time);
e.text("于"+l.formatDate(n,"YYYY年MM月DD日")+"提交名称修改申请，审核时间为7个工作日");
}
}
if(cgiData.nickname_mod_list&&$("#js_btn_rename_history").length>0){
var s=cgiData.nickname_mod_list.change_info_list||[],r=new u({
className:"rename_history_dialog",
dom:$("#js_btn_rename_history"),
content:t("tpl_rename_history",{
list:s
}),
isToggle:!0,
onShow:function(){
this.resetPosition();
}
});
r.hide();
}
$("#js_btn_rename_cancel").on("click",function(){
p.setData({
newName:cgiData.new_nickname,
oldName:cgiData.nickname,
deadline:cgiData.name_cancel_deadline,
realnameType:cgiData.realname_type
}),p.show("result");
}),$("#js_btn_rename").on("click",function(){
"verify"==$(this).data("method")?$("#tpl_rename_via_verify").popup({
title:"提醒",
buttons:[{
text:"去认证",
type:"primary",
click:function(){
location.href=wx.url("/merchant/store?action=detail&t=wxverify/detail&info=verify");
}
},{
text:"取消",
type:"default",
click:function(){
this.remove();
}
}]
}):(p.setData({
oldName:cgiData.nickname,
realnameType:cgiData.realname_type
}),p.show(""));
}),$("#js_btn_rename1").click(function(){
var e={
title:"修改名称",
tplId:"#tpl_nickname",
width:960,
className:"modify_nickName",
init:function(){
$("#modifyInput").blur(g.nickname);
},
done:function(){
if(2==cgiData.invadeType||3==cgiData.invadeType||4==cgiData.invadeType)window.location.href=wx.url("/cgi-bin/frame?t=setting/auth_frame&invadetype="+cgiData.invadeType+"&nickname="+encodeURIComponent(cgiData.checkNickname));else if(0==cgiData.invadeType){
var e=this.get().find(".js_btn_p");
if(h.submitting)return;
e.eq(4).btn(!1),h.submitting=!0,a.post({
url:"/cgi-bin/setuserinfo?action=nickname",
data:{
nick_name:cgiData.checkNickname,
invade_type:0
},
complete:function(){
h.submitting=!1,e.eq(4).btn(!0);
}
},function(e){
if(!e||!e.base_resp)return void i.err("系统错误，请稍后重试");
var t=1*e.base_resp.ret;
0==t?(i.suc("修改成功"),setTimeout(function(){
window.location.reload(!0);
},1e3)):1004==t?i.err("名称与平台内已有名称重复，请重新设置"):200013==t?i.err("提交次数过于频繁，请稍后再试"):210041==t?i.err("名称长度为3-30个字符，不能含有特殊字符及“微信”等保留字"):210050==t?i.err("名称不能与已有公众帐号的微信号重复"):65201==t?i.err("不能使用该名称"):a.handleRet(e,{
id:64463,
key:10,
url:"/cgi-bin/setuserinfo?action=nickname"
});
});
}
}
};
h.show(e);
});
}
}),_.register("avatar",function(){
var e,t,n,s,c,l,d,u,p,m,h='<img class="round_img" src="'+cgiData.links.rimgcrop+'"/>',g='<img class="round_white_img" src="'+cgiData.links.rimgcropwhite+'"/>',_=('<img class="round_img" src="'+cgiData.links.rimgcropframe+'"/>',
{
suc:function(a,s,o){
i.suc(a),e.find(".jcrop-holder").show(),$("#circleImgUpload").attr("src",cgiData.links.imgupload+"&share=circle&r="+Math.random());
var h=r.tmpFileUrl(s);
c.attr("src",h),l.attr("src",h),d.attr("src",h),$(".round_img").css("display","block"),
m.setImage(h,function(){
var i=m.getWidgetSize(),a=m.getBounds();
m.ui.holder.css("margin","0").css({
margin:(e.height()-i[1])/2+"px auto 0"
}),$.extend(p,{
fid:s,
share:o,
c:{},
lar:{
w:a[0],
h:a[1]
},
mid:{
w:t.width(),
h:t.height()
},
sml:{
w:n.width(),
h:n.height()
}
});
var r=p.lar.w||t.width();
m.setSelect([0,0,r,r]),u.enable();
});
},
err:function(e){
i.err(e),y();
}
}),v=function(){
e=$("#largeHeadImg"),t=$("#squareHeadImg"),n=$("#circleHeadImg").append(g),s=$('<img src="'+cgiData.links.spacer+'"/>').appendTo(e),
c=$('<img class="square_img" id="uploadFileSrc" src="'+cgiData.links.spacer+'"/>').appendTo(t),
l=$('<img class="circle_img" src="'+cgiData.links.spacer+'"/>').appendTo(n),d=$(".ensure_avatar_preview"),
u=$("#saveAvatar"),u.enable=function(){
u.removeClass("btnDisable").attr("disable",!1);
},u.disable=function(){
u.addClass("btnDisable").attr("disable",!0);
},u.click(k).disable();
var i=$("#settingArea"),a=$("#cropImgArea");
a.data("class",a.attr("class")),$("#cancelSaveAvatar").click(function(){
i.show(),a.hide().attr("class",a.data("class")),y();
}),p={
fid:null,
share:null,
c:{},
lar:{},
mid:{
w:c.width(),
h:c.height()
},
sml:{
w:l.width(),
h:l.height()
}
},s.Jcrop({
onChange:x,
onSelect:x,
setSelect:[100,100,50,50],
createHandles:["nw","ne","se","sw"],
aspectRatio:1,
boxWidth:e.width(),
boxHeight:e.height()
},function(){
m=this,e.find(".jcrop-holder").hide(),$(".jcrop-tracker",this.ui.selection).html(h),
$(".jcrop-handle",this.ui.selection).css({
width:"7px",
height:"7px"
});
});
},w=function(){
o({
container:$("#Js_uploadAvatar"),
type:7,
share:"circle",
multi:!1,
compress:!1,
onComplete:function(e,t,i,n){
if(n.base_resp)switch(+n.base_resp.ret){
case 0:
_.suc("上传成功",n.content,"circle");
break;

case 1:
_.err("图片太大，请重新上传");
}
}
});
},b=!1,k=function(){
var e=(p.share,p.fid),t={
fid:e
};
if(e){
var n,s=p.c,r=p.lar.w,o=p.lar.h;
$.extend(t,{
x1:s.x/r,
y1:s.y/o,
x2:s.x2/r,
y2:s.y2/o,
width:Math.floor(s.w),
height:Math.floor(s.h),
x:Math.floor(s.x),
y:Math.floor(s.y)
}),n=wx.url("/misc/cropimg?t=ajax-response"),1!=b&&(b=!0,a.post({
url:n,
data:t,
mask:!1
},function(e){
e&&0==e.ret?(i.suc("保存成功"),location.reload(!0)):(b=!1,a.handleRet(e,{
id:64463,
key:11,
url:"/misc/cropimg?t=ajax-response"
}),u.enable());
}));
}
},x=function(e){
if(parseInt(e.w)>0){
var t=p.lar.w,i=p.lar.h,n=p.mid.w/e.w,a=p.mid.h/e.h;
c.css({
width:Math.round(n*t)+"px",
height:Math.round(a*i)+"px",
marginLeft:"-"+Math.round(n*e.x)+"px",
marginTop:"-"+Math.round(a*e.y)+"px"
}),d.css({
width:Math.round(n*t)+"px",
height:Math.round(a*i)+"px",
marginLeft:"-"+Math.round(n*e.x)+"px",
marginTop:"-"+Math.round(a*e.y)+"px"
}),n=p.sml.w/e.w,a=p.sml.h/e.h,l.css({
width:Math.round(n*t)+"px",
height:Math.round(a*i)+"px",
marginLeft:"-"+Math.round(n*e.x)+"px",
marginTop:"-"+Math.round(a*e.y)+"px"
}),p.c=e;
}
},y=function(){
$("#squareImgUpload").attr("src",cgiData.links.imgupload+"&share=square"),$("#circleImgUpload").attr("src",cgiData.links.imgupload+"&share=circle");
};
return{
init:function(){
$("#changeHeadImg").click(function(){
var e={
title:"修改头像",
tplId:"#tpl_avatar",
init:v,
agreeInit:w,
width:960,
className:"change_avatar",
done:function(){
$("#saveAvatar").trigger("click");
}
};
f.show(e);
});
}
};
}());
var v=!1;
_.register("userinfo",function(){
var e="/cgi-bin/setuserinfo?action=intro&t=ajax-response",t=function(){
var t=$.trim($("#modifyInput").val().replace(/\s/g," "));
if(t.length>140)return i.err("用户信息不能超过140个字"),!0;
var n={};
n.intro=t,1!=v&&(v=!0,a.post({
url:wx.url(e),
data:n,
mask:!1
},function(e){
if(!e||!e.base_resp)return v=!1,void i.err("提交失败");
var t=1*e.base_resp.ret;
if(0!=t){
switch(t){
case 62005:
i.err("你已经是认证用户了");
break;

case 62006:
i.err("提交失败");
break;

case 65202:
$("#error_tip").text("不能含有虚假的、冒充、利用他人名义的、容易构成混淆、误认的、法律、法规和政策禁止的内容").show();
break;

case 210042:
i.err("用户信息长度应为4~120个字");
break;

default:
a.handleRet(e,{
id:64463,
key:12,
url:"/cgi-bin/setuserinfo?action=intro&t=ajax-response"
});
}
return!0;
}
i.suc("提交成功"),location.reload(!0);
}));
};
return{
init:function(){
$("#modifyUserInfo").click(function(){
var e={
title:"修改功能介绍",
tplId:"#tpl_intro",
width:960,
className:"modify_intro label_block",
init:function(){
$("#modifyInput").blur(g.intro);
},
done:t
};
f.show(e);
});
}
};
}()),_.register("wechatid",function(){
var e,t,n,r,o,c=function(){
t.eq(0).hasClass("btn_primary")&&(n.setStep(2),t.hide(),t.eq(1).show(),t.eq(2).show(),
r.hide(),o.find(".js_modAliasShow").text("微信号："+e),o.find(".js_aliasToBe").text(e),
o.show());
},l=function(){
n.setStep(1),t.hide(),t.eq(0).show(),o.hide(),r.show();
},d=function(){
a.post({
url:wx.url("/cgi-bin/setuserinfo?action=set_alias&cgi=setuserinfo&t=ajax-response&alias="+encodeURIComponent(e)),
mask:!1
},function(e){
if(!e||!e.base_resp)return void i.err("微信号设置失败，请稍后重试");
var t=1*e.base_resp.ret;
if(0==t)i.suc("微信号设置成功"),location.reload();else switch(-1==t&&(t=62004),t){
case 62001:
i.err("微信号设置失败");
break;

case 62002:
i.err("微信号包含非法字符");
break;

case 62003:
i.err("公众号已经设置了微信号，不能再次设置");
break;

case 62004:
i.err("你设置的微信号已存在，请重新设置");
break;

default:
a.handleRet(e,{
id:64463,
key:13,
url:"/cgi-bin/setuserinfo?action=set_alias"
});
}
});
};
return{
init:function(){
$("#setWeChatID").click(function(){
var u=$("#tpl_wechatid").popup({
title:"设置微信号",
width:960,
className:"wx_account align_edge simple",
buttons:[{
text:"下一步",
click:c,
type:"disabled"
},{
text:"上一步",
click:l
},{
text:"完成",
click:d,
type:"primary"
}],
onHide:function(){
this.remove();
}
});
t=u.popup("get").find(".js_btn_p").hide();
var p=t.eq(0).show(),m=u.find(".js_checkStatus");
n=new s({
container:u.find(".js_process"),
selected:1,
names:["1 检测有效微信号","2 确认设置"]
}),r=u.find(".js_step1"),o=u.find(".js_step2"),u.popup("show"),cgiData.nickname&&(u.find(".js_pre_nick").text(cgiData.nickname),
u.find(".js_pre_nickname").text("昵称："+cgiData.nickname)),cgiData.intro&&(cgiData.intro=cgiData.intro.replace(/&nbsp;/g," "),
u.find(".js_pre_intro").text(cgiData.intro)),cgiData.headimg&&u.find(".js_pre_headimg").find("img").attr("src",cgiData.headimg);
var h=u.find(".js_modAliasShow"),f=u.find(".js_checkAliasBtn"),g=$("#js_modAliasInput");
g.on("keyup propertychange",function(){
var e=$(this).val().trim();
h.text("微信号："+e),m.hide(),p.removeClass("btn_primary").addClass("btn_disabled");
}),f.on("click",function(){
var t=$(this),n=t.parent(),s=n.find(".js_checkStatus"),r=n.find(".js_good"),o=n.find(".js_warn"),c=g.val().trim();
return t.attr("disabled")?!1:(s.hide(),t.btn(!1),void(c&&/^[\da-z\_-]{6,20}$/i.test(c)&&/^[a-z]/i.test(c)?a.post({
url:wx.url("/cgi-bin/setuserinfo?action=check_alias&cgi=setuserinfo&t=ajax-response&alias="+encodeURIComponent(c)),
mask:!1
},function(n){
if(!n||!n.base_resp)return void i.err("微信号设置失败，请稍后重试");
var s=1*n.base_resp.ret;
if(0==s)e=c,t.btn(!0),r.show(),p.removeClass("btn_disabled").addClass("btn_primary");else switch(-1==s&&(s=62004),
s){
case 62001:
t.btn(!0),o.text("微信号设置失败").show();
break;

case 62002:
t.btn(!0),o.text("微信微信号包含非法字符号设置失败").show();
break;

case 62003:
t.btn(!0),o.text("公众号已经设置了微信号，不能再次设置").show();
break;

case 62004:
t.btn(!0),o.text("你设置的微信号已存在，请重新设置").show();
break;

default:
t.btn(!0),o.text("微信号设置失败，请稍后重试").show(),a.handleRet(n,{
id:64463,
key:13,
url:"/cgi-bin/setuserinfo?action=check_alias"
});
}
}):(t.btn(!0),o.text("可以使用6~20个字母、数字、下划线和减号，必须以字母开头。").show())));
});
});
}
};
}()),_.register("authentication",{
init:function(){
var e=26,t=cgiData.isNeedVerify;
$("#Js_authentication").on("click",function(){
$("#tpl_authentication").popup({
title:"身份验证",
onOK:function(){
var e=this.get().find(".js_btn").eq(0),n=$.trim($("#Js_question").find("input").val());
return-1==t?(i.err("请选择一项"),!0):1==t&&""==n?(i.err("验证问题不能为空"),!0):n.length>26?(i.err("验证问题不能超过26个字"),
!0):(a.post({
url:wx.url("/cgi-bin/setuserinfo?t=ajax-response"),
data:{
action:"meetingsettings",
need_verify:t,
verify_question:$("#Js_question").find("input").val()
},
beforeSend:function(){
e.btn(0);
},
error:function(){
i.err("系统错误，请重试"),e.btn(1);
}
},function(t){
return e.btn(1),t&&t.base_resp?void(0==t.base_resp.ret?(i.suc("设置成功"),location.reload()):a.handleRet(t,{
id:64463,
key:14,
url:"/cgi-bin/setuserinfo?action=meetingsettings"
})):void i.err("设置失败");
}),!0);
},
onCancel:function(){
this.hide();
},
onHide:function(){
$("#Js_question").remove(),this.remove();
}
}),$("#Js_question").find("input").val(cgiData.question.html(!1)),$(".Js_authenticationRadio").checkbox({
multi:!1,
onChanged:function(e){
t=e.val(),"Js_needAuth"==e.attr("id")?$("#Js_question").show():$("#Js_question").hide();
}
}),$("#Js_question").find("i").on("click",function(){
var e=$("#Js_question").find("ul");
return e.hasClass("dn")?e.show(100).toggleClass("dn"):e.hide(100).toggleClass("dn"),
$(this).toggleClass("select_icon_up").toggleClass("select_icon_down"),!1;
}),$(document).on("click",function(){
$("#Js_question").find("ul").hide(100).addClass("dn"),$("#Js_question").find("i").removeClass("select_icon_up").addClass("select_icon_down");
}),$("#Js_question").on("click","li",function(){
var e=$(this).text();
$("#Js_question").find("input").val(e).focus();
}),$("#Js_question").find("input").on("focus",function(){
$("#Js_wordNum").show().text(26-$(this).val().length);
}).on("blur",function(){
$("#Js_wordNum").hide();
}).on("keyup",function(){
$("#Js_wordNum").text(26-$(this).val().length);
}).on("keydown",function(t){
if(!t.ctrlKey)switch(t.keyCode){
case 8:
case 13:
case 37:
case 38:
case 39:
case 40:
case 46:
break;

default:
$(this).val().length>=e&&t.preventDefault();
}
}).on("paste",function(e){
var t="";
return window.clipboardData&&clipboardData.getData?t=clipboardData.getData("Text"):e.originalEvent.clipboardData&&(t=e.originalEvent.clipboardData.getData("text/plain")),
$(this).val(($(this).val()+t).substr(0,26)),!t;
});
});
}
}),_.register("customerServicePhone",{
init:function(){
$.validator.addMethod("phone",function(e){
return e=$.trim(e),""===e||/^\d+$/.test(e)||/^\d{1,4}(-\d{1,12})+$/.test(e);
},"请输入正确的手机号码");
var e=$("#tpl_customerServicePhone").popup({
title:"修改客服电话",
width:960,
height:609,
className:"simple customer_phone",
autoShow:!1,
data:{
phone:cgiData.service_phone
},
onOK:function(){
if($("#customerServiceForm").valid()){
var e=$.trim($("#customerServicePhone").val());
a.post({
url:"/cgi-bin/setuserinfo?t=ajax-response",
data:{
action:"servicephone",
phonenumber:e
}
},function(e){
if(!e||!e.base_resp)return void i.err("设置失败，请稍后再试");
switch(+e.base_resp.ret){
case 0:
i.suc("设置成功"),location.reload();
break;

case 200002:
i.err("所填写的电话号码格式不正确，请重新输入");
break;

case-1:
i.err("设置失败，请稍后再试");
break;

default:
a.handleRet(e,{
id:64463,
key:15,
url:"/cgi-bin/setuserinfo?action=servicephone"
});
}
});
}
return!0;
},
onCancel:function(){
this.hide();
}
});
$("#js_customerServicePhone").on("click",function(){
return e.popup("show"),!1;
});
var t=cgiData.service_phone,n=$("#phone_number_copy");
$("#customerServicePhone").on("keyup input blur propertychange",function(){
var e=$(this),i=$.trim(e.val()).html(!0);
t!=i&&(t=i?i:"&nbsp;",n.html(t));
}),$("#customerServiceForm").validate({
rules:{
phone:{
required:1==cgiData.can_use_merchant?!0:!1,
phone:!0
}
},
messages:{
phone:{
required:"你已开通微信支付，必须设置客服电话。",
phone:"所填写的电话号码格式不正确"
}
},
errorPlacement:function(e,t){
var i=t.parent().parent();
i.find(".fail").remove(),e.insertBefore(i.find(".frm_tips").eq(0));
}
});
}
}),_.register("operator",{
init:function(){
var e=document.getElementById("operator_mobile"),t="";
e&&(t=e.innerHTML);
var i=new c({
mobile:{
number:t
},
callback:function(){
location.href=wx.url("/acct/getoperatorinfo?t=setting/owner-setting-operator&action=get");
}
});
$(".js_edit").on("click",function(){
var e=$(this).attr("type");
"operator"==e&&i.show();
});
}
}),_.register("turnToService",{
init:function(){
function e(){
function n(){
a.post({
url:wx.url("/misc/safeassistant"),
data:{
action:"get_ticket"
}
},function(e){
return e&&e.base_resp&&0==e.base_resp.ret?void s(e.ticket):void i.err("系统错误，请稍后重试");
});
}
function s(e){
a.post({
url:"/safe/safeqrconnect",
mask:!1,
data:{
action:"check",
type:"verify_upgrade",
appid:"wx3a432d2dbe2442ce",
scope:"snsapi_contact",
ticket:e,
state:0,
redirect_uri:"https://mp.weixin.qq.com"
}
},function(t){
return t&&t.uuid?void r(e,t.uuid):void showErr("系统错误，请稍后重试");
});
}
function r(i,n){
var s="https://mp.weixin.qq.com/safe/safeqrcode?action=check&type=verify_upgrade&auth=ticket&ticket=%s&uuid=%s".sprintf(i,n);
l.find(".js_qrcode").attr("src",s).show(),l.find(".js_qrcode_alias").text(cgiData.wx_alias),
$(".js_upgrade_loading").hide(),p=setInterval(function(){
a.get({
url:"/safe/safeuuid?timespam="+(new Date).valueOf()+"&uuid="+n,
mask:!1
},function(i){
if(!i||!i.errcode)return void clearInterval(p);
switch(console.log(i.errcode),1*i.errcode){
case 401:
break;

case 403:
e();
break;

case 404:
$(".js_upgrade_fix").text("请在手机上确认身份...");
break;

case 405:
$(".js_upgrade_fix").text("确认成功，正在转为服务号..."),t(i.code,n);
break;

default:
e();
}
});
},1e3);
}
clearInterval(p),$(".js_qrcode").hide(),$(".js_upgrade_fix").text(""),$(".js_upgrade_loading").show(),
n();
}
function t(e,t){
clearInterval(p),a.post({
url:"/cgi-bin/setuserinfo?action=verify_upgrade",
data:{
code:e,
uuid:t
}
},function(e){
if(!e||!e.base_resp)return void i.err("系统错误，请稍后重试");
switch(+e.base_resp.ret){
case 0:
i.suc("转换成功"),setTimeout(function(){
location.reload();
},400);
break;

default:
i.err("系统错误，请稍后重试");
}
});
}
function n(t){
d.go(t);
var i=l.find(".js_btn");
1==t?(i.eq(0).text("取消"),i.eq(1).text("下一步")):2==t?(i.eq(0).text("上一步"),i.eq(1).text("确定")):e(),
l.find(".js_turn_step").hide(),l.find('.js_turn_step[data-step="%s"]'.sprintf(t)).show(),
l.popup("resetPosition");
}
function r(){
u--,0>=u?l.popup("remove"):n(u);
}
function o(){
u++,u>=3&&(l.find(".dialog_ft").remove(),l.popup("resetPosition")),n(u);
}
function c(){
return $("#tpl_turn_service").popup({
title:"订阅号转为服务号",
width:960,
className:"wx_upgrade_dialog",
buttons:[{
text:"取消",
click:function(){
r();
}
},{
text:"下一步",
click:function(){
o();
},
type:"primary"
}],
onShow:function(){
this.$dialogWrp.find(".dialog_bd").css("padding",0);
var e=this.$dialogWrp.find(".js_process");
d=new s({
container:e,
names:["1 了解账号区别","2 再次确认","3 验证管理员身份"]
}),this.resetPosition();
},
onHide:function(){
clearInterval(p),this.remove();
}
});
}
var l,d,u,p;
$(".js_turn_to_service").click(function(){
l=c(),u=1;
});
}
}),_.init();
});