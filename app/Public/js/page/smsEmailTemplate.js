/**  * kuaihuojian project - kuaihuojian project  */ "use strict";function insertName(t,e,n){var a=parseInt($("#typeIn").html());if("msgurl"==e){var r=$.trim($(n).prev().val());if(""==r)return void alert("请输入短链接");if(!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(r))return alert("请输入以http://开头的有效链接"),!1;$(n).prev().val("");var i=changeShortUrl(r,e);return $("#typeIn").html(a+22),$("#"+t).insertAtCaret(i),void $("#msgCnt").trigger("keyup")}document.getElementById(t);return $("#"+t).insertAtCaret("{"+e+"}"),$("#msgCnt").trigger("keyup"),!1}function changeShortUrl(t,e){var n="";return $.ajax({type:"post",url:getTinyurl,data:"url="+base64encode(t)+"&type="+e,dataType:"json",async:!1,success:function(t){t.status&&(n=t.tinyurl,$("#hideUrl").val(t.url))}}),n}function base64encode(t){var e,n,a,r,i,o;for(a=t.length,n=0,e="";n<a;){if(r=255&t.charCodeAt(n++),n==a){e+=base64EncodeChars.charAt(r>>2),e+=base64EncodeChars.charAt((3&r)<<4),e+="==";break}if(i=t.charCodeAt(n++),n==a){e+=base64EncodeChars.charAt(r>>2),e+=base64EncodeChars.charAt((3&r)<<4|(240&i)>>4),e+=base64EncodeChars.charAt((15&i)<<2),e+="=";break}o=t.charCodeAt(n++),e+=base64EncodeChars.charAt(r>>2),e+=base64EncodeChars.charAt((3&r)<<4|(240&i)>>4),e+=base64EncodeChars.charAt((15&i)<<2|(192&o)>>6),e+=base64EncodeChars.charAt(63&o)}return e}function openUrl(t){$(t).hide().next().show()}function statInputNumSMS(){var t=$("#msgCnt"),e=$("#tagName").html().length+6,n=t.val().length+e;showSMSGrap(n,e),t.on("keyup",function(){var t=$(this).val(),n=t.length+e;showSMSGrap(n,e)})}function showSMSGrap(t,e){var n=67,a=300,r=$("#typeIn"),i=$("#smsNumber");if(a<t){var o=$("#msgCnt").val();o=o.substring(0,a-e),t=a,$("#msgCnt").val(o)}r.text(t),i.text(Math.ceil(t/n)+"条");var c=$("#tagName").html(),l="回复TD退订",s=$("#msgCnt").val().replace(/\{姓名}/gi,"赵小龙"),s=s.replace(/\{称呼}/gi,"先生"),s=s.replace(/\http:\/\/az01.cn\/f\/\{链接标识}/gi,$("#hideUrl").val()),s=c+s+l;$(".viewMobileInfo").text(s)}function del_tpl(t,e){promptDialog("是否删除当前模板? ",{cancel:function(){},ok:function(){ajaxData.post({url:del_url,data:"tpl_id="+t+"&tpl_type="+e,success:function(t){window.location.reload()}})}})}function renderEmailView(){window.editor.sync(),$(".viewEmailInfo").find(".title").text($("#mailSub").val()),$(".viewEmailInfo").find(".content").html($("#mailCnt").val().replace(/\{FULLNAME}/gi,"李先生"))}!function(t){var e=t("#tagName").html();void 0!==e&&t("#msgCnt").css({"text-indent":12*e.length-10+"px"}),t.fn.extend({insertAtCaret:function(e){var n=t(this)[0];if(document.selection)this.focus(),sel=document.selection.createRange(),sel.text=e,this.focus();else if(n.selectionStart||"0"==n.selectionStart){var a=n.selectionStart,r=n.selectionEnd,i=n.scrollTop;n.value=n.value.substring(0,a)+e+n.value.substring(r,n.value.length),this.focus(),n.selectionStart=a+e.length,n.selectionEnd=a+e.length,n.scrollTop=i}else this.value+=e,this.focus()}}),t(".insert-name").click(function(){t(".ke-icon-insertname").click(),renderEmailView()}),t(".insert-CITY").click(function(){t(".ke-icon-insertcity").click()}),t(".insert-JOB_NAME").click(function(){t(".ke-icon-insertjobname").click()}),t(".insert-JOB_NUM").click(function(){t(".ke-icon-insertjobnum").click()}),t(".insert-YC_URL").click(function(){var e=t.trim(t("#editShortUrl").val());""==e&&alert("请输入链接地址"),ctype="mailurl";changeShortUrl(e,ctype);t(".ke-icon-insertycurl").click()})}(jQuery);var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64DecodeChars=new Array((-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),62,(-1),(-1),(-1),63,52,53,54,55,56,57,58,59,60,61,(-1),(-1),(-1),(-1),(-1),(-1),(-1),0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,(-1),(-1),(-1),(-1),(-1),(-1),26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,(-1),(-1),(-1),(-1),(-1));$("#msgSubButton").click(function(){var t=$("#msg_tpl_form").serialize();ajaxData.post({url:dealurl,data:t,success:function(t){t.state?promptDialog(t.msg,{ok:function(){window.location.href=redirect_url}}):promptDialog(t.msg,{ok:function(){window.location.href=redirect_url}})}})}),$("#emailSubButton").click(function(){window.editor.sync();var t=$("#email_tpl_form").serialize();console.log(t),ajaxData.post({url:dealurl,data:t,success:function(t){t.state?promptDialog(t.msg,{ok:function(){window.location.href=redirect_url}}):promptDialog(t.msg,{ok:function(){window.location.href=redirect_url}})}})}),$(function(){var t=$("#msgCnt"),e=$("#typeInAllow"),n=$("#typeIn"),a=$("#smsNumber"),r=300;t.size()>0&&(statInputNumSMS(t,e,r,n,a),$("#typeInAllow").html(r))}),$(function(){$("#mailSub").keyup(function(){renderEmailView()}),$("#msgCnt").scroll(function(){var t=$(this).scrollTop();0==t?$("#tagName").show():$("#tagName").hide()})});