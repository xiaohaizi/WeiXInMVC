define("common/wx/qrcheck.js",["common/wx/Cgi.js","biz_web/lib/json.js","common/qq/queryString.js","common/wx/Tips.js","widget/qrcode_check.css","tpl/qrcheck.html.js"],function(t,e,o){
"use strict";
function i(t){
this._init(t);
}
var s=(template.render,t("common/wx/Cgi.js")),n=t("biz_web/lib/json.js"),r=(t("common/qq/queryString.js"),
t("common/wx/Tips.js")),a=(t("widget/qrcode_check.css"),t("tpl/qrcheck.html.js")),c={
container:"",
container_class:"",
scene:0,
size:165,
idCard:"",
name:"",
extra:{},
renderData:{},
askSpeed:5,
askMaxNum:60,
cgiURI:"/acct/qrcheckoper",
onTicketChange:void 0,
onStatusChange:void 0,
onTipsChange:void 0
};
i.prototype._init=function(t){
var e=this;
e.opt=$.extend(!0,{},c,t),e.$dom=$(a),e.$img=e.$dom.find(".js_qrcheck_img"),e.$loading=e.$dom.find(".js_qrcheck_img_loading"),
e.$refresh=e.$dom.find(".js_qrcheck_refresh"),e.$reloading=e.$dom.find(".js_qrcheck_reloading"),
e.$tips=e.$dom.find(".js_qrcheck_tips"),e.$content=e.$dom.find(".js_qrcheck_content"),
e.$tpl=e.$dom.find(".js_qrcheck_tpl"),e.$content.hide(),e.$tpl.hide(),e._showLoading(),
$(e.opt.container).off("click",".js_qrcheck_reloading"),$(e.opt.container).on("click",".js_qrcheck_reloading",function(){
e.reloading();
}),$(e.opt.container).off("click",".js_qrcheck_refresh"),$(e.opt.container).on("click",".js_qrcheck_refresh",function(){
e.refresh();
}),e._isStopped=!0,e._askID=null,e._askNum=0,e._askLatestAjaxID=0,e._askPreview=null,
e._ticket="",e.opt.container_class&&$(e.opt.container).addClass(e.opt.container_class),
$(e.opt.container).html(e.$dom),e._triggerStatus("0");
},i.prototype.updateUser=function(t,e){
this.opt.idCard=t,this.opt.name=e,this._requestTicket();
},i.prototype.getTicket=function(){
return this._ticket;
},i.prototype.refresh=function(){
this._showQRCode(),this._startAsk();
},i.prototype.reloading=function(){
this._requestTicket();
},i.prototype._requestTicket=function(){
var t=this;
t._showLoading(),t._stopAsk(),t._isStopped=!1;
var e={
size:t.opt.size,
extra:n.stringify2(t.opt.extra),
scene:t.opt.scene
};
null!==t.opt.name&&(e.name=t.opt.name),null!==t.opt.idCard&&(e.idCard=t.opt.idCard),
s.post({
url:t.opt.cgiURI+"?action=get",
mask:!1,
data:e
},{
done:function(e){
1!=t._isStopped&&(0==e.base_resp.ret?(t._ticket=e.qrcheck_ticket,t._showQRCode(),
t._startAsk(),"function"==typeof t.opt.onTicketChange&&t.opt.onTicketChange.call(t,t._ticket)):-3==e.base_ret?(r.err("登录超时，请重新登录"),
t._triggerStatus("login")):(r.err("二维码获取失败，请重试"),t._triggerStatus("fail")));
},
fail:function(){
r.err("二维码获取失败，请重试"),t._triggerStatus("fail");
}
});
},i.prototype._renderUser=function(){},i.prototype._showLoading=function(){
this.$img.hide(),this.$loading.show();
},i.prototype._showQRCode=function(){
var t=this,e=t.opt.cgiURI+"?action=getqrcode&qrcheck_ticket="+t._ticket+"&random="+(new Date).getTime();
window.wx&&window.wx.data&&window.wx.data.param&&(e+=window.wx.data.param),t.$img.attr("src",e),
t.$img.show(),t.$loading.hide();
},i.prototype._doAsk=function(){
var t=this;
if(t._askNum++,t._askNum>t.opt.askMaxNum)return void t._triggerStatus("3");
t._askLatestAjaxID++;
var e=t._askLatestAjaxID;
s.get({
url:t.opt.cgiURI+"?action=ask",
data:{
qrcheck_ticket:t._ticket
},
mask:!1
},{
done:function(o){
if(1!=t._isStopped&&!(e<t._askLatestAjaxID))if(0==o.base_resp.ret){
var i=o.status+"";
2==o.status&&(i=o.status+"_"+o.result),t._triggerStatus(i,o);
}else-3==o.base_ret?(r.err("登录超时，请重新登录"),this._triggerStatus("login",o)):r.err("系统繁忙");
},
fail:function(){}
});
},i.prototype._startAsk=function(){
var t=this;
t._stopAsk(),t._isStopped=!1,t._triggerStatus("0"),t._askID=setInterval(function(){
t._doAsk();
},1e3*t.opt.askSpeed);
},i.prototype._stopAsk=function(){
var t=this;
clearInterval(t._askID),t._isStopped=!0,t._askNum=0,t._askPreview=null,t._askLatestAjaxID=0;
},i.prototype._triggerStatus=function(t,e){
if(t!==this._askPreview)if(e=e?e:{},this._askPreview=t,"0"!==t&&this._stopAsk(),
"function"==typeof this.opt.onStatusChange&&this.opt.onStatusChange.call(this,t,e),
e=$.extend(!0,{},{
name:this.opt.name
},this.opt.renderData,e),"function"==typeof this.opt.onTipsChange){
var o=$(this.opt.onTipsChange.call(this,t,e));
this.$tpl.hide(),o.show(),this.$content.html(o).show();
}else{
this.$tpl.hide();
var i=this.$tips.find(".js_qrcheck_ret_"+t).clone().show().wrap("<div>").parent().html();
this.$content.html(wx.T(i,e)).show();
}
},i.prototype.destroy=function(){
var t=this;
t.$refresh.off(),t.$reloading.off(),t._stopAsk(),t.$dom.remove();
},o.exports=i;
});