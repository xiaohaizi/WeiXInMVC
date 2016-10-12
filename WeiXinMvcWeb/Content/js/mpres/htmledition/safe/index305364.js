define("safe/index.js",["common/wx/Cgi.js"],function(t){
"use strict";
var e=wx.cgiData||{},s={
strategy_resp:{},
send_admins:[]
},a=t("common/wx/Cgi.js"),i=$.extend({},s,e);
!function(){
if(i.strategy_resp.strategy_status){
var t=i.strategy_resp.strategy_status;
i.protectName=t.wx_alias||"",i.protectType=t.wx_protect?1:t.mobile_protect?2:0,i.notifyName=t.wx_alias||"",
i.notifyType=t.wx_notify?1:t.mobile_notify?2:0;
}
for(var e=!!i.protectName,s=0,n=0,r=0,_=i.send_admins.length;_>r;++r)0==i.send_admins[r].expire_time?s++:n++;
if(e){
var o="你的帐号已绑定管理员微信号";
o+=s>0||n>0?"及"+s+"个长期运营者，"+n+"个短期运营者微信号":"，暂未绑定运营者微信号",$("#js_admins").find(".js_suc").text(o).show();
}else $("#js_admins").find(".js_fail").show();
1==i.protectType||2==i.protectType?$("#js_protect").find(".js_suc").show():$("#js_protect").find(".js_fail").show(),
1==i.notifyType||2==i.notifyType?$("#js_notify").find(".js_suc").show():$("#js_notify").find(".js_fail").show();
var c=wx.cgiData.strategy_resp&&wx.cgiData.strategy_resp.strategy_status&&wx.cgiData.strategy_resp.strategy_status.is_qq_user?!0:!1;
c?$("#js_pwd").on("click",function(){
a.post({
url:"/cgi-bin/safecenterchangepwd",
data:{
action:"prepare2change",
type:"1"
},
mask:!1
},function(){});
}).attr("href",wx.url("/cgi-bin/readtemplate?t=safe/find_pwd_tmpl")):$("#js_pwd").attr("href",wx.url("/cgi-bin/safecenterchangepwd?action=verify&t=safe/change_pwd"));
}();
});