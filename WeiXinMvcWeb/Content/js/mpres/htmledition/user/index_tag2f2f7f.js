define("user/index_tag.js",["common/wx/dialog.js","common/wx/Tips.js","common/wx/pagebar.js","common/wx/remark.js","common/wx/top.js","common/wx/tooltips.js","common/wx/RichBuddy_tag.js","user/user_cgi_tag.js","user/group_cgi_tag.js","biz_web/ui/dropdown.js","common/qq/events.js","biz_web/ui/input/lentips.js","common/qq/emoji.js","common/wx/popover.js","tpl/user/grouplist_tag.html.js","tpl/user/userlist_tag.html.js","biz_web/ui/checkbox.js","common/wx/Cgi.js","common/wx/inputCounter.js","common/wx/searchInput.js"],function(t){
"use strict";
template.isEscape=!1;
var e=wx.T,n=template.render,i=(t("common/wx/dialog.js"),t("common/wx/Tips.js")),a=t("common/wx/pagebar.js"),o=(t("common/wx/remark.js"),
t("common/wx/top.js")),s=(t("common/wx/tooltips.js"),t("common/wx/RichBuddy_tag.js")),r=t("user/user_cgi_tag.js"),c=t("user/group_cgi_tag.js"),u=(t("biz_web/ui/dropdown.js"),
t("common/qq/events.js")),d=(t("biz_web/ui/input/lentips.js"),t("common/qq/emoji.js"),
t("common/wx/popover.js")),l=t("tpl/user/grouplist_tag.html.js"),_=t("tpl/user/userlist_tag.html.js"),p=t("biz_web/ui/checkbox.js"),g=t("common/wx/Cgi.js"),m=t("common/wx/inputCounter.js"),f=!1,h=function(h){
function v(t){
for(var e=0;e<S.length;e++)if(S[e].id==t)return S[e];
}
function j(t){
for(var e=0;e<A.length;e++)if(A[e].id==t)return'<a href="javascript:;" class="js_user_tags user_tag" data-id="%s">%s</a>'.sprintf(t,A[e].name);
}
function k(t){
var e,n=3,i=0;
if(t.data.uid){
e=Object.isObject(t.data.uid)?t.data.uid.values():[t.data.uid];
var a=t.data.$dom;
if(a){
"string"==typeof a&&(a=$(a));
var o=function(t){
var e=$(t.target);
if("checked"===e.attr("checked"))_.find(".js_tag_putOn_maxTips").hide(),i--,h.find('input[type="checkbox"]').checkbox().setall(!0);else if(i===n){
_.find(".js_tag_putOn_maxTips").show();
var a=new Image;
a.src="//mp.weixin.qq.com/mp/jsmonitor?idkey=27826_10_1",t.preventDefault(),$(t.target).removeAttr("checked").parent().removeClass("selected");
}else _.find(".js_tag_putOn_maxTips").hide(),i++;
},s=function(){
for(var t=[],n=S,a=0;a<A.length;a++)A[a].id>0&&t.push(A[a]);
h.empty();
for(var a=0;a<t.length;a++)t[a].name&&t[a].name.length>0&&1!=t[a].id&&new p({
container:h,
label:t[a].name,
name:t[a].id,
type:"checkbox"
});
h.find('input[type="checkbox"]').each(function(){
$(this).val($(this).attr("name"));
}).on("click",o).checkbox();
var s=[];
if(1===e.length){
for(var a=0;a<n.length;a++)n[a].id==e[0]&&(s=n[a].group_id);
for(var a=0;a<s.length;a++)h.find('input[name="'+s[a]+'"]').trigger("click");
i=s.length;
}else{
s=v(e[0]).group_id;
for(var r=s.length,a=1;a<e.length;a++){
for(var c=v(e[a]).group_id,u=0;u<s.length;u++)-1===c.indexOf(s[u])&&(s[u]=void 0);
c.length>r&&(r=c.length);
}
for(var a=0;a<s.length;a++)void 0!==s[a]&&h.find('input[name="'+s[a]+'"]').trigger("click").checkbox().setall(!1);
i=r;
}
},u=function(){
var n=wx.renderPage,i=h.find('input[type="checkbox"]').checkbox(),a=i.values();
if(1===e.length){
i.setall(!1);
for(var o=v(e[0]).group_id,s=[],c=[],u=0;u<o[u];u++)o[u]=o[u].toString();
for(var u=0;u<o.length;u++)-1===a.indexOf(o[u])&&s.push(o[u]);
for(var u=0;u<a.length;u++)-1===o.indexOf(a[u])&&c.push(a[u]);
if(0===s.length){
if(0===c.length)return void l.remove();
r.add_tag(e[0],c.join("|"),t.data.scene,n,l);
}else 0===c.length?r.del_tag(e[0],s.join("|"),n,l):r.del_tag(e[0],s.join("|"),function(){
r.add_tag(e[0],c.join("|"),t.data.scene,n);
},l);
}else{
if(a=[],h.find('input[type="checkbox"]').each(function(){
"checked"!==$(this).attr("checked")||$(this).attr("disabled")||a.push($(this).val());
}),0===a.length)return void l.remove();
i.setall(!1),r.add_tag(e.join("|"),a.join("|"),t.data.scene,n,l);
}
},l=new d({
dom:a,
className:"tag_popover",
content:$("#js_tag_putOn_tpl").html(),
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
_.find(".btn_primary").btn(!1).off(),g.off("click"),u();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}],
addCls:"js_putOn"
}),_=l.$pop,g=_.find(".js_tag_putOn_add_btn"),f=_.find(".js_tag_input_wrap"),h=_.find(".js_tag_putOn_tags"),j=_.find(".js_tag_putOn_add_input"),k=_.find(".js_tag_putOn_add_a"),b=_.find(".js_tag_putOn_cancel_a"),w=_.find(".js_tag_putOn_tips"),y=(s(h),
new m(j,{
maxLength:6,
showCounter:!0,
useGBKLength:!0,
GBKBased:!0
}));
_.find(".js_counter").hide(),g.on("click",function(){
$(this).hide(),f.show(),j.enable().val(""),w.hide(),j.focus().trigger("keyup");
}).show(),j.on("keyup",function(){
y.getCount()>6?w.text("不得超过6个汉字或12个字符").show():y.getCount()>0&&w.hide();
}),k.click(function(){
var t=j.val();
return j.val()?y.getCount()>6?void w.text("不得超过6个汉字或12个字符").show():(j.disable(),
void c.add(t,function(e){
f.hide(),g.show();
var n=new p({
container:h,
label:x(t),
name:e.groupid,
type:"checkbox"
});
n.$input.val(e.add_groupid).on("click",o),3>i&&n.$input.trigger("click"),A.push({
cnt:0,
create_time:-1,
id:e.add_groupid,
name:x(t)
}),P(),I();
},l,!0)):void w.text("请输入标签名称").show();
}),b.click(function(){
g.show(),f.hide(),w.hide();
});
}
}
}
function b(t){
S=[];
for(var e=t.user_list?t.user_list.user_info_list:[],n=0;n<e.length;n++)S.push({
id:e[n].user_openid,
nick_name:e[n].user_name,
remark_name:e[n].user_remark,
create_time:e[n].user_create_time,
group_id:e[n].user_group_id,
user_is_fans:e[n].user_is_fans
});
}
function w(t){
A=[];
for(var e=t.group_info?t.group_info.group_info_list:[],n=0;n<e.length;n++)A.push({
name:e[n].group_name,
cnt:e[n].group_cnt,
create_time:e[n].group_create_time,
id:e[n].group_id
});
}
function x(t){
return $("<div></div>").text(t).html();
}
function y(t){
return $("<div></div>").html(t).text();
}
function C(){
for(var t=0;t<A.length;t++)if(A[t].id==z||A[t].id*z==-1)return void(G=A[t]);
G={
id:-2,
name:"全部用户",
cnt:h.total_user_num
};
}
function B(){
!function(){
var t=function(t,e){
var n=t,a=n.val().trim(),o=e.$pop.find(".jsPopoverBt").eq(0);
if(!o.attr("disabled")){
if(o.btn(!1),""===a||a.bytes()>12)return i.err("标签名称为1~6字符"),n.focus(),o.btn(!0),
!1;
c.add(a,function(t){
A.push({
cnt:0,
create_time:-1,
id:t.add_groupid,
name:x(a)
}),P(),I();
},e);
}
};
$("#js_tag_add_btn").off().on("click",function(){
var e=new d({
dom:this,
content:n("js_tag_edit_tpl",{
name:"",
tagid:""
}),
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
return i.val()?void t(this.$pop.find(".js_name"),this):void a.text("请输入标签名称").show();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}],
onHide:function(){
this.remove();
}
}),i=e.$pop.find(".js_name"),a=e.$pop.find(".js_tips"),o=new m(i,{
maxLength:6,
showCounter:!0,
useGBKLength:!0,
GBKBased:!0
});
e.$pop.find(".js_counter").hide(),i.on("keyup",function(){
o.getCount()>6?a.text("不得超过6个汉字或12个字符").show():o.getCount()>0&&a.hide();
}),e.$pop.find(".js_name").keypress(function(n){
return wx.isHotkey(n,"enter")?i.val()?o.getCount()>6?void a.text("不得超过6个汉字或12个字符").show():void t(e.$pop.find(".js_name"),e):void a.text("请输入标签名称").show():void 0;
}),e.$pop.find(".js_name").focus();
});
}(),function(){
var t=function(t,e){
var n=t,a=z,o=n.val().trim(),s=e.$pop.find(".jsPopoverBt").eq(0);
if(!s.attr("disabled")){
if(s.btn(!1),""===o||o.bytes()>12)return i.err("不得超过6个汉字或12个字符"),n.focus(),s.btn(!0),
!1;
c.rename(a,o,function(){
for(var t=0;t<A.length;t++)A[t].id==a&&(A[t].name=x(o));
c.get_user({
groupid:z
},function(t){
b(t),w(t),T();
});
},e);
}
};
$(".js_tag_edit_btn").on("click",function(){
var e=z;
$(".popover").hide();
var i=new d({
dom:this,
content:n("js_tag_edit_tpl",{
name:G.name,
tagid:e
}),
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
!a.val()||s.getCount()>6||t(this.$pop.find(".js_name"),this);
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}],
onHide:function(){
this.remove();
}
}),a=i.$pop.find(".js_name"),o=i.$pop.find(".js_tips"),s=new m(a,{
maxLength:6,
showCounter:!0,
useGBKLength:!0,
GBKBased:!0
});
i.$pop.find(".js_counter").hide(),a.on("keyup",function(){
s.getCount()>6?o.text("不得超过6个汉字或12个字符").show():s.getCount()>0&&o.hide();
}),i.$pop.find(".js_name").keypress(function(e){
return wx.isHotkey(e,"enter")?a.val()?s.getCount()>6?void o.text("不得超过6个汉字或12个字符").show():void t($(this),i):void o.text("请输入标签名称").show():void 0;
}),i.$pop.find(".js_name").focus();
});
}(),function(){
$(".js_tag_del_btn").on("click",function(){
var t=($(this),z);
$(".popover").hide(),new d({
dom:this,
content:$("#js_tag_del_tpl").html(),
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
{
var e=this;
e.$pop.find(".jsPopoverBt").eq(0).btn(!1);
}
c.del(t,function(){
window.location.reload();
},e);
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}]
});
});
}();
}
function P(){
K=[];
for(var t,e=0;e<A.length;e++)A[e]&&("屏蔽组"==A[e].name&&(A[e].name="黑名单"),"星标组"==A[e].name&&(A[e].name="星标用户"),
1==A[e].id||-1==A[e].id?(H={
num:A[e].cnt
},A[e].id=-1):A[e].id>0&&(2==A[e].id?t=A[e]:K.push(A[e])));
K=[t].concat(K.sort(function(t,e){
return t.name.localeCompare(e.name);
}));
for(var e=0;e<S.length;e++){
S[e].img=wx.url("/misc/getheadimg?fakeid="+S[e].id),S[e].link=wx.url("/cgi-bin/singlesendpage?t=message/send&action=index&tofakeid="+S[e].id),
S[e].nick_name=S[e].nick_name.emoji(),S[e].tags="";
for(var n=0;n<S[e].group_id.length;n++)S[e].tags+=j(S[e].group_id[n]),n!=S[e].group_id.length-1,
(1==S[e].group_id[n]||-1==S[e].group_id[n])&&(S[e].is_black=!0);
}
}
function I(){
var t=D;
Number(t)<0&&(t=0);
var n=z;
-2==n?n=-1:-1==n&&(n=1),20===S.length?G.cnt<20&&g.post({
mask:!1,
url:"/cgi-bin/fixgroupcnt",
data:{
groupid:n
}
},function(){}):G.cnt<S.length&&g.post({
mask:!1,
url:"/cgi-bin/fixgroupcnt",
data:{
groupid:n
}
},function(){}),$("#groupsList").html(e(l,{
groupsList:K,
allUser:{
num:t
},
blackList:H,
groupId:z
})),$(".js_group_link").unbind("click").click(function(){
z=$(this).data("id"),c.get_user({
groupid:z,
is_first:1
},function(t){
b(t),w(t),T(),"-1"==z&&O(t);
});
});
}
function O(t){
$("#searchBar").hide(),$("#js_groupName").html("黑名单<span class='user_num_tips mini_tips weak_text'>("+t.total_black_list_num+")</span>"),
$(".inner_side").hide(),$("#js_tag_add_btn").hide(),$(".js_tags").hide();
}
function L(){
var t=new o("#topTab",o.DATA.user);
if(t.selected(0),$("#js_groupName").text(G.name),z>=3?$(".js_groupCommand").show():$(".js_groupCommand").hide(),
-1==z?($(".js_tag_toBanList_btn").text("移出黑名单"),$(".js_tag_putOn_btn").hide()):($(".js_tag_toBanList_btn").text("加入黑名单"),
$(".js_tag_putOn_btn").show()),I(),0===S.length)$(".js_pageNavigator").hide(),$(".user_list > table").hide(),
$("#reloadTop").parent().hasClass("selected")?$(".no_result").html("无结果,请重新搜索或查看<a href='javascript:;' id='js_reload'>全部用户</a>"):$(".no_result").text("暂无黑名单用户"),
U.show(),$("#js_reload").click(function(){
window.location.reload();
});else{
U.hide(),$(".user_list > table").show(),$("#userGroups").html(e(_,{
friendsList:S,
isBlack:$("#blackTop").parent().hasClass("selected")?1:0
})),$("#userGroups .js_tags_btn").each(function(){
$(this).on("click",{
uid:$(this).data("id"),
$dom:$(this),
scene:1
},k);
});
var n=new s;
if($(".js_msgSenderAvatar").mouseover(function(){
var t=$(this),e=t.data("id"),i=t.offset(),a=t.width();
n.show({
id:e,
autoRefresh:!0,
position:{
left:i.left+a+2,
top:i.top
},
isUserIndex:!0
});
}).mouseout(function(){
n.hide();
}),G.cnt>20)if(F){
new a({
container:".js_pageNavigator",
perPage:20,
initShowPage:E,
totalItemsNum:G.cnt,
first:!1,
last:!1,
isSimple:!0,
callback:function(t){
E!=t.currentPage&&c.search({
query:F,
pageidx:t.currentPage-1
},function(e){
b(e),E=t.currentPage,T({
searchWord:F,
notResetPage:!0
});
});
}
});
}else{
new a({
container:".js_pageNavigator",
perPage:20,
initShowPage:E,
totalItemsNum:G.cnt,
first:!1,
last:!1,
isSimple:!0,
callback:function(t){
if(E!=t.currentPage){
if(parseInt(t.currentPage)>parseInt(E)){
if(parseInt(t.currentPage)-parseInt(E)>25)return i.err("跳转页数超过上限，请重新输入"),!1;
J={
groupid:G.id,
begin_openid:S[S.length-1].id,
begin_create_time:S[S.length-1].create_time,
limit:20,
offset:20*(parseInt(t.currentPage)-parseInt(E)-1),
backfoward:1
},c.get_user(J,function(e){
if(b(e),w(e),T({
notResetPage:!0
}),-1==J.groupid&&($("#js_groupName").html("黑名单<span class='user_num_tips mini_tips weak_text'>("+e.total_black_list_num+")</span>"),
$(".js_tags").hide()),t.currentPage==parseInt(G.cnt/20)+1&&G.cnt!=20*t.currentPage-20+e.user_list.user_info_list.length){
var n=z;
-2==n?n=-1:-1==n&&(n=1),g.post({
mask:!1,
url:"/cgi-bin/fixgroupcnt",
data:{
groupid:n
}
},function(){});
}
});
}else{
if(parseInt(t.currentPage)-parseInt(E)<-25)return i.err("跳转页数超过上限，请重新输入"),!1;
J={
groupid:G.id,
begin_openid:S[0].id,
begin_create_time:S[0].create_time,
limit:20,
offset:20*(parseInt(E)-parseInt(t.currentPage)-1),
backfoward:0
},c.get_user(J,function(t){
b(t),w(t),T({
notResetPage:!0
}),-1==J.groupid&&($("#js_groupName").html("黑名单<span class='user_num_tips mini_tips weak_text'>("+t.total_black_list_num+")</span>"),
$(".js_tags").hide());
});
}
E=t.currentPage;
}
}
});
}else $(".js_pageNavigator").empty();
$(".js_user_tags").click(function(){
$("#groupsList").find('a[data-id="'+$(this).data("id")+'"]').click();
});
}
$("#blackTop").unbind("click").click(function(){
$(this).parent().addClass("selected").siblings().removeClass("selected"),$('.js_group_link[data-id="-1"]').click();
}),$("#reloadTop").click(function(){
window.location.reload();
});
}
function q(){
var t=function(){
var t=$(this),n=e.values();
new d(-1==z?{
dom:t,
content:"确认移出黑名单？",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
r.del_black(n.join("|"),function(){
window.location.reload();
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}]
}:{
dom:t,
content:"加入黑名单后，你将无法接收该用户发来的消息，且该用户无法接收公众号发出的消息，无法参与留言和赞赏，确认加入黑名单？",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
r.add_black(n.join("|"),function(){
window.location.reload();
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}]
});
},e=$(".js_select").checkbox();
$("#selectAll").removeAttr("checked").parent().removeClass("select"),$(".js_tag_putOn_btn, .js_tag_toBanList_btn").addClass("btn_disabled").off(),
$("#selectAll").on("change",function(){
var t=$(this).prop("checked");
$(".js_select").each(function(){
$(this).prop("disabled")||$(this).checkbox().checked(t);
});
}).checkbox(),$("#selectAll, .js_select").on("change",function(){
var n=e.values();
n.length>0?($(".js_tag_putOn_btn").removeClass("btn_disabled"),$(".js_tag_putOn_btn").off().on("click",{
uid:e,
$dom:".js_tag_putOn_btn",
scene:3
},k),$(".js_tag_toBanList_btn").removeClass("btn_disabled"),$(".js_tag_toBanList_btn").off().on("click",t)):($(".js_tag_putOn_btn").addClass("btn_disabled"),
$(".js_tag_putOn_btn").off(),$(".js_tag_toBanList_btn").addClass("btn_disabled"),
$(".js_tag_toBanList_btn").off());
});
}
function N(){
$("#userGroups").on("click",".js_msgSenderRemark",function(){
var t=$(this).data("fakeid"),e=$(this),a=$(".remark_name[data-fakeid="+t+"]"),o=($(".nick_name[data-fakeid="+t+"]"),
a.text()),s=n("js_changeRemarkName",{
list:null
});
new d({
dom:e,
content:s,
place:"bottom",
margin:"center",
hover:!0,
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
var t=$(".js_remarkName_input:visible").val();
r.change_remark(e.data("fakeid"),t,function(){
i.suc("修改成功"),W.trigger("Remark:changed",e.data("fakeid"),(t+"").html(!0));
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
},
type:"default"
}]
}),$(".js_remarkName_input:visible").val(o),$(".js_remarkName_input").each(function(){
$(this).select(),new m($(this),{
maxLength:30,
showCounter:!0
});
});
}),W.on("Remark:changed",function(t,e){
var n=$(".remark_name[data-fakeid="+t+"]"),i=$(".nick_name[data-fakeid="+t+"]"),a=i.html();
""==e&&""==a||(""==e&&""!=a?(n.html(i.find("strong").html()),i.html("")):""!=e&&""==a?(i.html("(<strong>"+n.html()+"</strong>)"),
n.html(e)):n.html(e));
});
}
function R(){
var e=t("common/wx/searchInput.js");
new e({
id:"#searchBar",
value:F,
placeholder:"用户昵称",
click:function(t){
t.length>0?c.search({
query:t
},function(e){
b(e),F=t,z=-2,G={
id:-2,
name:"全部用户",
cnt:e.total_user_num
},T({
searchWord:F
});
}):i.err("请输入搜索关键词");
}
}),F&&$(".remark_name, .nick_name").each(function(t,e){
$(e).text().match(/<script>/g)||$(e).contents().filter(function(){
return 1!=this.nodeType;
}).each(function(t,e){
$(e).replaceWith(x($(e).text()).replace(new RegExp(F,"g"),'<span class="highlight">'+F+"</span>")+"");
});
});
}
function T(t){
if(!f){
for(var e=0;e<A.length;e++)A[e].name=y(A[e].name);
f=!0;
}
t?(F=t.searchWord||"",E=t.notResetPage?E:1):(F="",E=1,J=null),F||C(),B(),P(),L(),
q(),N(),R(),wx.renderPage=function(){
F?c.search({
query:F,
pageidx:E-1
},function(t){
b(t),T({
notResetPage:!0,
searchWord:F
});
}):c.get_user(J?J:{
groupid:z
},function(t){
b(t),w(t),T({
notResetPage:!0
});
});
};
}
var G,A=h.group_list,S=h.user_list||[],z="-2",K=[],W=u(!0),H={},D=h.total_user_num,E=1,U=$("<p class='no_result'></p>").appendTo($(".user_list")).hide(),F="",J=null;
return{
init:T
};
}(wx.cgiData);
h.init();
});