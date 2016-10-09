define("common/wx/RichBuddy_tag.js",["common/qq/emoji.js","tpl/RichBuddy/RichBuddyLayout_tag.html.js","tpl/RichBuddy/RichBuddyContent_tag.html.js","tpl/RichBuddy/RichBuddyGroup_tag.html.js","widget/rich_buddy.css","common/wx/Tips.js","common/qq/Class.js","common/wx/remark.js","common/wx/popover.js","user/user_cgi_tag.js","user/group_cgi_tag.js","common/qq/events.js","biz_web/ui/checkbox.js","common/wx/inputCounter.js","biz_common/moment.js"],function(e,n,t){
"use strict";
e("common/qq/emoji.js");
var i=e("tpl/RichBuddy/RichBuddyLayout_tag.html.js"),o=e("tpl/RichBuddy/RichBuddyContent_tag.html.js"),s=e("tpl/RichBuddy/RichBuddyGroup_tag.html.js"),a=template.compile(o),d=(e("widget/rich_buddy.css"),
e("common/wx/Tips.js")),r=e("common/qq/Class.js"),c=(e("common/wx/remark.js"),e("common/qq/emoji.js"),
e("common/wx/popover.js")),u=e("user/user_cgi_tag.js"),m=e("user/group_cgi_tag.js"),_=e("common/qq/events.js"),h=e("biz_web/ui/checkbox.js"),l=e("common/wx/inputCounter.js"),p=_(!0),f={},g=[],j=!1,v=!1,k=e("biz_common/moment.js"),b=function(e){
var n=e.data.user_info,t=3,i=0,o=e.data.uid,a=e.data.$dom,d=function(e){
var n=$(e.target);
if("checked"===n.attr("checked"))f.find(".js_tag_putOn_maxTips").hide(),i--,b.find('input[type="checkbox"]').checkbox().setall(!0);else if(i===t){
f.find(".js_tag_putOn_maxTips").show();
var o=new Image;
o.src="//mp.weixin.qq.com/mp/jsmonitor?idkey=27826_10_1",e.preventDefault(),$(e.target).removeAttr("checked").parent().removeClass("selected");
}else f.find(".js_tag_putOn_maxTips").hide(),i++;
},r=function(){
for(var e=[],t=0;t<g.length;t++)g[t].group_id>0&&e.push({
name:g[t].group_name,
cnt:g[t].group_cnt,
create_time:g[t].group_create_time,
id:g[t].group_id
});
b.empty();
for(var t=0;t<e.length;t++)e[t].name&&e[t].name.length>0&&1!=e[t].id&&new h({
container:b,
label:e[t].name,
name:e[t].id,
type:"checkbox"
});
b.find('input[type="checkbox"]').each(function(){
$(this).val($(this).attr("name"));
}).on("click",d).checkbox();
for(var o=n.user_group_id,t=0;t<o.length;t++)b.find('input[name="'+o[t]+'"]').trigger("click");
i=o.length;
},_=function(){
var t=function(){
wx&&wx.renderPage&&wx.renderPage(),p.remove(),e.data.self.hide(),$(".rich_buddy").fadeOut();
},i=b.find('input[type="checkbox"]').checkbox(),s=i.values();
i.setall(!1);
for(var a=n.user_group_id,d=[],r=[],c=0;c<a[c];c++)a[c]=a[c].toString();
for(var c=0;c<a.length;c++)-1===s.indexOf(a[c])&&d.push(a[c]);
for(var c=0;c<s.length;c++)-1===a.indexOf(s[c])&&r.push(s[c]);
if(0===d.length){
if(0===r.length)return wx&&wx.renderPage&&wx.renderPage(),p.remove(),e.data.self.hide(),
void $(".rich_buddy").fadeOut();
u.add_tag(o,r.join("|"),e.data.scene,t,p);
}else 0===r.length?u.del_tag(o,d.join("|"),t,p):u.del_tag(o,d.join("|"),function(){
u.add_tag(o,r.join("|"),e.data.scene,t);
},p);
},p=new c({
dom:a,
className:"tag_popover",
content:s,
hideIfBlur:!0,
isToggle:!0,
buttons:[{
text:"确定",
click:function(){
f.find(".btn_primary").btn(!1).off(),v.off("click"),_();
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
}
}],
onShow:function(){
j=!0;
},
onHide:function(){
j=!1,this.remove(),e.data.self.hide();
}
}),f=p.$pop,v=f.find(".js_tag_putOn_add_btn"),k=f.find(".js_tag_input_wrap"),b=f.find(".js_tag_putOn_tags"),x=f.find(".js_tag_putOn_add_input"),y=f.find(".js_tag_putOn_add_a"),B=f.find(".js_tag_putOn_cancel_a"),R=f.find(".js_tag_putOn_tips"),T=(r(b),
new l(x,{
maxLength:6,
showCounter:!0,
useGBKLength:!0,
GBKBased:!0
}));
f.find(".js_counter").hide(),v.on("click",function(){
$(this).hide(),k.show(),x.enable().val(""),R.hide(),x.focus().trigger("keyup");
}).show(),x.on("keyup",function(){
T.getCount()>6?R.text("不得超过6个汉字或12个字符").show():T.getCount()>0&&R.hide();
}),y.off().on("click",function(){
var e=x.val();
return x.val()?T.getCount()>6?void R.text("不得超过6个汉字或12个字符").show():(x.disable(),
void m.add(e,function(n){
k.hide(),v.show();
var t=new h({
container:b,
label:w(e),
name:n.groupid,
type:"checkbox"
});
t.$input.val(n.add_groupid).on("click",d),3>i&&t.$input.trigger("click"),wx&&wx.renderPage&&wx.renderPage(),
g.push({
group_cnt:0,
group_id:n.add_groupid,
group_name:e
});
},p,!0)):void R.text("请输入标签名称").show();
}),B.click(function(){
v.show(),k.hide(),R.hide();
}),j=!0;
},w=function(e){
return $("<div></div>").text(e).html();
},x=r.declare({
$element:null,
$content:null,
hideTimer:null,
namespace:".RichBuddy",
options:{},
_init:function(){
f={},$(".rich_buddy").remove();
var e=function(e,n){
for(var t="",i=0;i<n.length;i++)-1!=e.user_group_id.indexOf(n[i].group_id)&&(""!==t&&(t+="，"),
t+='<span class="dib user_tag">'+n[i].group_name+"</span>");
return t;
},n=this.options.id,t=this;
t._unbindEvent(),t.$element=$(i).appendTo(document.body),t.$content=t.$element.find(".buddyRichContent"),
t.$loading=t.$element.find(".loadingArea"),t._showLoading(),u.getBuddyInfo(n,function(i){
if(!i||!i.base_resp)return void d.err("系统出错，请稍后重试");
if(0==i.base_resp.ret){
var o=i.user_list.user_info_list[0];
o.user_name=o.user_name.emoji(),o.group_content=e(o,i.group_info.group_info_list),
void 0===o.user_remark&&(o.hide_group=!0),-1!=o.user_group_id.indexOf(1)&&(o.is_black=!0),
1==o.user_in_blacklist&&(o.is_black=!0),f[n]=o,g=i.group_info.group_info_list,o.user_head_img=o.user_head_img||"http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiamT5wyGSOdQic96mUmXf8yJypIeHLvw5iaRjO79tyh1iaD42d7YPFnS4jjWb17FgYcf28/0",
o.user_comment_cnt=o.user_comment_cnt,o.user_msg_cnt=o.user_msg_cnt,o.user_reward_cnt=o.user_reward_cnt,
o.user_create_time&&(o.user_create_time=k.unix(o.user_create_time).format("YYYY-MM-DD")),
o.user_openid==t.options.id&&(t._hideLoading(),t.$content.html(a(o)),t._bindEvent());
}else d.err("系统出错，请稍后重试");
});
},
_showLoading:function(){
this.$loading.show(),this.$content.hide();
},
_hideLoading:function(){
this.$loading.hide(),this.$content.show();
},
_bindEvent:function(){
var e=this,n=this.options,t=f[n.id];
if(t){
this.$element.bind("mouseover"+this.namespace,function(){
clearTimeout(e.hideTimer),e.hideTimer=null,e.$element.show();
}).bind("mouseout"+this.namespace,function(){
e._mouseout();
});
var i=this.$element;
i.find(".js_remarkNameBox").hide(),this.$element.find(".js_changeRemark").bind("click"+this.namespace,function(){
var e,t;
$(this).hide(),i.find(".js_remarkNameBox").show(),i.find(".js_remarkName").text()?(e=i.find(".js_remarkName").text(),
i.find(".js_remarkName_input").val(e),i.find(".js_remarkName_input").select()):i.find(".nickName .frm_label").text()&&(t=i.find(".nickName .frm_label").text().replace(/<span.*<\/span>/,""),
i.find(".js_remarkName_input").val(t),i.find(".js_remarkName_input").select()),i.find(".js_remarkName").hide();
var o=new l(i.find(".js_remarkName_input"),{
maxLength:30,
showCounter:!0
});
i.find(".js_remarkName_input").on("blur",function(){
$(this).unbind();
var t=i.find(".js_remarkName_input").val();
t.length>30?d.err("备注名不能超过30个字"):e!=t?u.change_remark(n.id,t,function(){
p.trigger("Remark:changed",n.id,(t+"").html(!0));
}):d.suc("修改成功"),i.find(".js_remarkName").show(),i.find(".js_changeRemark").show(),
o.$inputBox.hide();
});
}),p.on("Remark:changed",function(n,t){
f[n]&&(f[n].user_remark=t),e.$element.find(".js_remarkName").html(t);
}),this.$element.find(".js_buddy_tags_btn").on("click",{
uid:n.id,
$dom:this.$element.find(".js_buddy_tags_btn"),
user_info:$.extend({},f[e.options.id],!0),
self:this,
scene:2
},b),this.$element.find(".js_popAddToBlackList").click(function(){
var n=$(this);
1==n.data("black")?(new c({
dom:n,
content:"确认移出黑名单？",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
u.del_black(n.data("id"),function(){
location.reload();
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
}
}],
onShow:function(){
v=!0;
},
onHide:function(){
v=!1,this.remove(),e.hide();
}
}),v=!0):(new c({
dom:n,
content:"加入黑名单后，你将无法接收该用户发来的消息，且该用户无法接收公众号发出的消息，无法参与留言和赞赏，确认加入黑名单？",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
u.add_black(n.data("id"),function(){
location.reload();
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
}
}],
onShow:function(){
v=!0;
},
onHide:function(){
v=!1,this.remove(),e.hide();
}
}),v=!0);
}),f={};
}
},
_unbindEvent:function(){
if(this.$element){
var e=this.namespace;
this.$element.find(".js_changeRemark").unbind(e),this.$element.unbind(e),this.$element.stop(),
this.$element.css("opacity",1),this.$element.show();
}
},
_mouseout:function(){
var e=this;
v||j||e.hideTimer||$(".tag_popover").is(":visible")||(e.hideTimer=setTimeout(function(){
!e.$element||j||v||$(".tag_popover").is(":visible")||(e.$element.fadeOut(),e.hideTimer=null);
},1e3));
},
show:function(e){
this.options.id;
e&&(this.options=e),clearTimeout(this.hideTimer),this.hideTimer=null,this._init(),
e.position&&(e.position.top=e.position.top-12,e.position.left=e.position.left-2,
this.$element.css(e.position)),this.$element.show(),j=!1,v=!1;
},
hide:function(){
this._mouseout();
}
});
t.exports=x;
});