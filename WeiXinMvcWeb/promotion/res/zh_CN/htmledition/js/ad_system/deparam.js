!function(e){
return e(window.jQuery);
}(function(e){
var n=function(n,t){
var r={},i={
"true":!0,
"false":!1,
"null":null
};
return e.each(n.replace(/\+/g," ").split("&"),function(n,l){
var a,o=l.split("="),s=decodeURIComponent(o[0]),u=r,c=0,d=s.split("]["),p=d.length-1;
if(/\[/.test(d[0])&&/\]$/.test(d[p])?(d[p]=d[p].replace(/\]$/,""),d=d.shift().split("[").concat(d),
p=d.length-1):p=0,2===o.length)if(a=decodeURIComponent(o[1]),t&&(a=a&&!isNaN(a)&&+a+""===a?+a:"undefined"===a?void 0:void 0!==i[a]?i[a]:a),
p)for(;p>=c;c++)s=""===d[c]?u.length:d[c],u=u[s]=p>c?u[s]||(d[c+1]&&isNaN(d[c+1])?{}:[]):a;else e.isArray(r[s])?r[s].push(a):r[s]={}.hasOwnProperty.call(r,s)?[r[s],a]:a;else s&&(r[s]=t?void 0:"");
}),r;
};
return e.fn.deparam=e.deparam=n,n;
});