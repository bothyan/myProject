!function(){function t(t){var e=new Image;return e.src=t.toDataURL("image/jpeg"),e}function e(t){var e=(t.naturalWidth,t.naturalHeight),a=document.createElement("canvas");a.width=1,a.height=e;var r=a.getContext("2d");r.drawImage(t,0,0);for(var n=r.getImageData(0,0,1,e).data,i=0,o=e,g=e;g>i;){var c=n[4*(g-1)+3];0===c?o=g:i=g,g=o+i>>1}var s=g/e;return 0===s?1:s}function a(t,a,r,n,i,o,g,c,s,u){var d=e(a);t.drawImage(a,r*d,n*d,i*d,o*d,g,c,s,u)}window.compressImg=function(e,r,n,i){var o=document.getElementById(e),g=document.getElementById(r),c=document.createElement("canvas"),s=g.src;if(c.getContext)var u=c.getContext("2d");else alert("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u56fe\u7247\u538b\u7f29\u53ca\u4e0a\u4f20\u529f\u80fd\uff0c\u8bf7\u6362\u4e2a\u6d4f\u89c8\u5668\u8bd5\u8bd5~");$(o).on("change",function(){var e=this,r=new Image,o=new FileReader;o.onload=function(o){var d=o.target.result;r.src="image"!=d.substring(5,10)?d.replace(/(.{5})/,"$1image/jpeg;"):d,r.onload=function(){var o=r.width,d=r.height,h=1;EXIF.getData(r,function(){h=parseInt(EXIF.getTag(r,"Orientation")),h=h?h:1});var l=n*d/o;return 10>o||10>o?(alert("\u8bf7\u4e0d\u8981\u4e0a\u4f20\u8fc7\u5c0f\u7684\u56fe\u7247"),g.src=s,e.value="",!1):(4>=h?(c.setAttribute("height",l),c.setAttribute("width",n),(3==h||4==h)&&(u.translate(n,l),u.rotate(180*Math.PI/180))):(c.setAttribute("height",n),c.setAttribute("width",l),5==h||6==h?(u.translate(l,0),u.rotate(90*Math.PI/180)):(7==h||8==h)&&(u.translate(0,n),u.rotate(270*Math.PI/180))),a(u,r,0,0,o,d,0,0,n,l),g.src=t(c).src,e.value="",void(void 0!=i&&i(g.src)))}},o.readAsDataURL(this.files[0])})}}();