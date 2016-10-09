define("homepage/plugins/base.js",["common/wx/wxt.js"],function(t){
"use strict";
var i=t("common/wx/wxt.js");
i.isEscape=!0;
var n=0;
$("#js_preview_area").length>0&&(n=$("#js_preview_area").offset().top);
var e=function(t){
var i=this;
i.opt=t,this.pid=t.pid;
var n=t.container,e=t.js_edit_area,s=t.idx,o=this.edit_tpl;
n.html('<div class="plugin_content"><div class="js_plugin_content" id="js_plugin_content_'+s+'"></div><div class="plugin_mask js_plugin_mask" style="display:none;"><a href="javascript:void(0);"><i class="icon18_common edit_gray js_plugin_edit">编辑</i></a></div></div>'),
this.$content=n.find(".js_plugin_content"),e.append('<div style="display:none;" class="js_plugin_edit_area plugin_edit_area" id="js_plugin_edit_area_'+s+'">'+o+"</div>"),
this.renderjson=t.renderjson,this._renderTpl(this.renderjson),n.on("click",".js_plugin_edit,.js_plugin_content",function(){
i.showEditArea();
}),n.hover(function(){
var t=$(this).find(".js_plugin_mask");
return i.isShowEdit()?!1:void t.fadeIn();
},function(){
var t=$(this).find(".js_plugin_mask");
t.fadeOut();
});
};
e.prototype.isShowEdit=function(){
var t=this.opt,i=t.idx;
return $("#js_plugin_edit_area_"+i).is(":visible");
},e.prototype.showEditArea=function(){
var t=this.opt,i=(t.container,t.js_edit_area),e=t.idx;
i.find(".js_plugin_edit_area").hide(),$("#js_plugin_edit_area_"+e).show().css({
marginTop:$("#js_plugin_content_"+e).offset().top-n
});
},e.prototype.initData=function(){
return{};
},e.prototype.getEditData=function(){
return!1;
},e.prototype._renderTpl=function(t){
{
var n=this.opt;
n.container;
}
t=this.getRenderJson(t);
var e=n.idx,s=n.name||"plugin_"+e,o=this.tpl;
o=o.replace(/<name>/gi,s);
var r={};
r[s]=t,this.realRenderjson=t,this.$content.html(i.compile(o)(r)),this._afterRenderTpl&&this._afterRenderTpl();
};
var s=function(t,i){
var n=function(){};
n.prototype=i.prototype,t.prototype=new n,t.prototype.constructor=t,t.uber=i.prototype;
};
return{
base:e,
inherit:s
};
});