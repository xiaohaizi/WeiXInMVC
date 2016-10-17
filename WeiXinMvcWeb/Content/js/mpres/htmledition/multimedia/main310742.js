define("statistics/article/detail/detail/multimedia/main.js",["statistics/common.js","biz_web/ui/dropdown.js","statistics/article/detail/detail/multimedia/stat-block.js","statistics/article/detail/detail/multimedia/data-process.js","statistics/article/detail/detail/multimedia/video-player.js","statistics/article/detail/detail/multimedia/renderers.js","common/wx/Cgi.js","statistics/article/detail/detail/multimedia/state.js"],function(t){
"use strict";
function i(t){
F.setVid(""),t&&e(t.selectedMediaItem)||(y(t.selectedMediaItem),p(t),_(h(t,t.selectedMediaItem)),
o(t,t.selectedMediaItem));
}
function e(t){
return t===Y.selectedMediaItem;
}
function n(){
l(),a();
}
function a(){
Y.blocks=D.map(V,function(t){
return d(t.name,t.render,t.size);
}),r(Y.blocks);
}
function r(t){
var i=["#js_video_trend","#js_video_duration","#js_watch_time","#js_drap_start","#js_drap_end"];
i.each(function(i,e){
$(i).html(t[e].$el);
});
}
function d(t,i,e){
return new L({
name:t,
renderStat:i,
size:e
});
}
function l(){
s(),u();
}
function s(){
new I({
container:"#js_media_drop",
label:"视频",
data:[{
name:"视频",
value:"video"
}],
callback:function(t){
console.log(t);
}
});
}
function u(t,i,e){
new I({
container:"#js_media_item_drop",
label:t,
data:i,
callback:function(t){
o(e,t);
}
});
}
function o(t,i){
i&&(_(h(t,i)),F.closeVideo(),i.type===R&&F.setVid(i.id));
}
function c(t){
Y.blocks.each(function(i,e){
m(i,t[e]);
});
}
function m(t,i){
t.reset({
userType:"all",
data:i
}),t.render();
}
function _(t){
if(!Y.isLoading){
if(!t)return v(null);
b(),w(t,v);
}
}
function p(t){
u(g(t),f(t),t);
}
function g(t){
return t.selectedMediaItem?t.selectedMediaItem.name:"";
}
function f(t){
return D.map(t.mediaItems,function(t){
return{
name:t.name,
value:t
};
});
}
function h(t,i){
return i?(T=t.publish_date,D.makeUrl("/misc/appmsganalysis?action=get_media_all_data",{
type:i.type,
publish_date:t.publish_date,
msg_id:t.msgid,
id:i.id
})):"";
}
function v(t){
j(),c(x(t));
}
function y(t){
Y.selectedMediaItem=t;
}
function b(){
Y.isLoading=!0,D.showLoading();
}
function j(){
Y.isLoading=!1,D.hideLoading();
}
function w(t,i){
C.get(t,function(t){
t=S(t),t.base_resp&&0==t.base_resp.ret?i({
play_num_trend:t.play_num_trend,
play_duration_distri:t.play_duration_distri,
watch_duration_distri:t.watch_duration_distri,
drag_duration_distri:t.drag_duration_distri
}):(C.handleRet(t,{
id:"64527",
key:"5"
}),j());
});
}
function M(t){
if(!t||!t.length)return t;
for(var i=[],e=0;7>e;e++){
var n=new Date(1e3*(new Date(T)/1e3+86400*e)),a=n.getFullYear()+"-"+(n.getMonth()+1>=1&&n.getMonth()+1<=9?"0"+(n.getMonth()+1):n.getMonth()+1)+"-"+(n.getDate()>=1&&n.getDate()<=9?"0"+n.getDate():n.getDate()),r=new Date,d=r.getFullYear()+"-"+(r.getMonth()+1>=1&&r.getMonth()+1<=9?"0"+(r.getMonth()+1):r.getMonth()+1)+"-"+(r.getDate()>=1&&r.getDate()<=9?"0"+r.getDate():r.getDate());
if(a==d||n>r)break;
i.push(a);
}
for(var l=t,s=[],e=0;e<i.length;e++){
for(var u=!0,o=0;o<l.length;o++)if(i[e]==l[o].date){
u=!1,s.push(l[o]);
break;
}
u&&s.push({
date:i[e],
pv:0,
uv:0
});
}
return s;
}
function S(t){
var i=t.play_duration_distri;
return t.play_duration_distri=t.watch_duration_distri,t.watch_duration_distri=i,
t.play_num_trend.all&&!t.play_num_trend.all.length&&t.play_num_trend.attention&&!t.play_num_trend.attention.length&&t.play_num_trend.unattention&&!t.play_num_trend.unattention.length?t:(t.play_num_trend.all=M(t.play_num_trend.all),
t.play_num_trend.attention=M(t.play_num_trend.attention),t.play_num_trend.unattention=M(t.play_num_trend.unattention),
t.play_duration_distri&&(t.play_duration_distri=k(t.play_duration_distri,t)),t.drag_duration_distri&&(t.drag_duration_distri=k(t.drag_duration_distri,t)),
t);
}
function k(t,i){
if(!i.split_num)return t;
var e=0,n=!1;
if(t.all.length)for(var a=0;a<t.all.length;a++){
var r=t.all[a].duration;
if(r.split("-").length>2&&(n=!0),r.match("1,")){
e=r.split("1,")[1].split(",")[0].split("-")[1]-r.split("1,")[1].split(",")[0].split("-")[0];
break;
}
if(r.match("-")&&r.match(",")){
e=r.split(",")[1].split("-")[1]-r.split(",")[1].split("-")[0];
break;
}
}
if(!e)return t;
var d=function(t){
if(!t.length)return t;
for(var a=1;a<=i.split_num;a++){
for(var r=!0,d=0;d<t.length;d++){
if(n&&"1,"==t[d].duration.slice(0,2)&&t[d].duration.match(","+a+",")||!n&&t[d].duration.match(a+",")){
r=!1;
break;
}
!t[d].duration.match(/\+/);
}
r&&t.push(n?{
duration:"1,0-"+String(e)+","+String(a)+","+String((a-1)*e)+"-"+String(a*e),
pv:0,
uv:0
}:{
duration:String(a)+","+String((a-1)*e)+"-"+String(a*e),
pv:0,
uv:0
});
}
if(!n||!t[0].duration.split(",").length>2)return t;
for(var a=1;a<=i.split_num;a++){
for(var l=!0,s=!0,d=0;d<t.length;d++)t[d].duration.match(a+",")&&(t[d].duration.match(a+",")&&t[d].duration.match(a+",")[0]==t[d].duration.substring(t[d].duration.match(a+",")[0].length,t[d].duration.length)?l=!1:s=!1),
!t[d].duration.match(/\+/);
l&&t.push({
duration:String(a)+","+String((a-1)*e)+"-"+String(a*e)+","+String(i.split_num)+","+String((i.split_num-1)*e)+"-"+String(i.split_num*e),
pv:0,
uv:0
}),s&&t.push({
duration:"1,0-"+String(e)+","+String(a)+","+String((a-1)*e)+"-"+String(a*e),
pv:0,
uv:0
});
}
return console.log(t),t;
};
return t.all=d(t.all),t.attention=d(t.attention),t.unattention=d(t.unattention),
t;
}
var D=t("statistics/common.js"),I=t("biz_web/ui/dropdown.js"),L=t("statistics/article/detail/detail/multimedia/stat-block.js"),z=t("statistics/article/detail/detail/multimedia/data-process.js"),x=z.getBlocksData,F=(z.constructMediaDataFromRaw,
z.getMeidaItemsDropDownList,t("statistics/article/detail/detail/multimedia/video-player.js")),V=t("statistics/article/detail/detail/multimedia/renderers.js"),C=t("common/wx/Cgi.js"),R=1,T="",Y=$.extend(t("statistics/article/detail/detail/multimedia/state.js"),{
selectedMediaItem:null,
isLoading:!1,
blocks:[],
mediaType:R
});
return n(),{
render:i
};
});