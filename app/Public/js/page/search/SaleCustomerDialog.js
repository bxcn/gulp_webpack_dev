/**  * kuaihuojian project - kuaihuojian project  */ "use strict";function PersonalInfoStrategy(){function t(){r&&(a=$(d),e=a.find(".personal_info").get(0),i=a.find("input[name='resumeName']").get(0),n=a.find("input[name='accountName']").get(0),l=a.find("input[name='photo_account']").get(0),o=a.find("input[name='order_id']").get(0),DOM.appendChild("customerDialogId",a.get(0)),r=!1)}var a,e,s,i,n,l,o,c={},d="";d+='<div class="personal_info">',d+='\t\t<input name="resumeName" type="hidden"/>',d+='\t\t<input name="accountName" type="hidden"/>',d+='\t\t<input name="photo_account" type="hidden"/>',d+='\t\t<input name="order_id" type="hidden"/>',d+='\t\t<div class="personal_info"></div>',d+="</div>";var r=!0;this.setFavorite=function(){c.userinfo.is_fav?s.setAttribute("class","starfill favoriteId"+c.userinfo.id):s.setAttribute("class","starstroke favoriteId"+c.userinfo.id),s.onclick=function(){favoriteAction(s,c.userinfo.id)}},this.showData=function(a){c=a,t();var s=c.userinfo,d="";d+='\t\t<div class="resume_state"><span class="c666"></span>'+s.version_date+"</div>",d+='\t\t<div class="photo">',d+='\t\t\t<div class="photo_boy"><img class="photo_pic" src="'+s.avatar+'" width="60" height="60"/></div>',s.region&&(d+='\t\t\t<div class="f1">'+s.region+"</div>"),s.manager&&(d+='\t\t\t<div class="f2">管</div>'),s.overseas&&(d+='\t\t\t<div class="f3">海</div>'),s.homepage&&(d+='\t\t\t<div class="f4"><a href="'+s.homepage+'" target="_blank">主</a></div>'),d+="\t\t</div>",c.orderid?(d+='\t\t<div  class="people">',d+='\t\t  <div class="name">'+s.name+"</div>",d+='\t\t  <div class="info c666"><span class="ml10 mr10">'+s.gender+'</span>|<span class="ml10 mr10">'+s.age+'岁</span>|<span class="ml10 mr10">最高学历：'+s.highestlevel+'</span>|<span class="ml10 mr10">所在城市：'+s.cur_city+"</span></div>",d+="\t\t</div>",d+='\t\t<div   class="profession ml25 c666">',d+='\t\t  <div class="info">',d+='\t\t  \t<span class="" title="'+s.job+'">职位：'+s.jobCnt+"</span>",d+="\t\t  </div>",d+='\t\t  <div class="info">',d+='\t\t  \t<span class="" title="'+s.tradeCnt+'">行业：'+s.trade+"</span>",d+="\t\t  </div>",d+="\t\t</div>",d+='\t\t<div class="profession ml25 c666">',d+='\t\t  <div class="info">',d+='\t\t  \t<span class="telNumber">电话：<em class="blue">'+s.mobilephone+"</em></span>",d+="\t\t  </div>",d+='\t\t  <div class="info">',d+='\t\t  \t<span class="emailNumber">邮箱：<em class="blue">'+s.email+"</em></span>",d+="\t\t  </div>",d+="\t\t</div>"):(d+='\t\t<div  class="people">',d+='\t\t  <div data-id="'+c.userinfo.id+'" class=" dialogStar favoriteId'+c.userinfo.id+" "+(s.is_fav?"starfill":"starstroke ")+'"></div>',d+='\t\t  <div class="name">'+s.name+"</div>",d+='\t\t  <div class="info c666"><span class="ml10 mr10">'+s.gender+'</span>|<span class="ml10 mr10">'+s.age+'岁</span>|<span class="ml10 mr10">最高学历：'+s.highestlevel+'</span>|<span class="ml10 mr10">所在城市：'+s.cur_city+"</span></div>",d+="\t\t</div>",d+='\t\t<div class="profession ml55 c666">',d+='\t\t  <div class="info">',d+='\t\t  \t<span class="" title="'+s.job+'">职位：'+s.jobCnt+"</span>",d+="\t\t  </div>",d+='\t\t  <div class="info">',d+='\t\t  \t<span class="" title="'+s.tradeCnt+'">行业：'+s.trade+"</span>",d+="\t\t  </div>",d+="\t\t</div>",d+='\t\t<div class="profession ml55 c666">',d+='\t\t  <div class="info">',d+='\t\t  \t<span class="telNumber">电话：<em class="blue">'+s.mobilephone+"</em></span>",d+="\t\t  </div>",d+='\t\t  <div class="info">',d+='\t\t  \t<span class="emailNumber">邮箱：<em class="blue">'+s.email+"</em></span>",d+="\t\t  </div>",d+="\t\t</div>"),d+='\t\t<div class="msg_status '+(c.orderid?"":" hand")+'">',d+='\t\t\t<span class="tel_icon">'+s.sendTimes+"</span>",d+='\t\t\t<span class="sms_icon">'+s.sendTimes+"</span>",d+='\t\t\t<span class="email_icon">'+s.sendTimes+"</span>",d+="\t\t</div>",e.innerHTML=d,l.value=c.avatar,i.value=s.name,n.value=c.username,o.value=c.orderid,$(e).find(".msg_status").click(function(){$('[data-mark="recored"]').click()}),this.show();var r=$(".msg_status");return ajaxData.post({url:"/Record/getCustomerRecordCount",data:{id:s.id,mode:c.orderid},success:function(t){t.state?(r.find(".tel_icon").html(t.data.call||0),r.find(".sms_icon").html(t.data.sms||0),r.find(".email_icon").html(t.data.email||0)):(r.find(".tel_icon").html(0),r.find(".sms_icon").html(0),r.find(".email_icon").html(0))}}),this},this.show=function(){DOM.show(e)},this.hide=function(){DOM.hide(e)}}function CallPhoneStrategy(){function t(){o&&(DOM.appendChild("customerDialogId",a),o=!1)}var a=DOM.createElement("div","call_phone"),e=DOM.createElement("div","call_info"),s=DOM.createElement("div","call_price","5元/3分钟，3分钟后每分钟2元"),i=DOM.createElement("div","call_tousu_btn","号码不正确？");i.onclick=function(){"号码不正确？"==i.innerHTML&&f("TouSu").openTouSu(c.userinfo.id)};var n=DOM.createElement("div","ok_btn","确定");n.onclick=function(){clockSubmit.init(2e3)||ajaxDataDialog.post({url:"/ivrbase/getNumber",data:{resume_id:c.userinfo.id,orderid:$('input[name="order_id"]').val()||0},success:function(t){if(t.state){var a=t.data;f("CallStatus").getPhone(c.userinfo.id,c.userinfo.mobilephone,a[0]+"<em>转</em>"+a[1],a[2])}else alert(t.msg)}})};var l=btnBar.instance();l.appendChild(n),a.appendChild(e),a.appendChild(s),a.appendChild(i),a.appendChild(l);var o=!0,c={};this.showData=function(a){c=a,t(),f("CallStatus").closeCall(),e.innerHTML="是否需要通过转接号码联系"+c.userinfo.name,i.style.display=c.isComplaint?"block":"none",this.show();var s=f("CallStatus").getCallingStatus()["calling"+c.userinfo.id];s&&2==s.length&&(f("CallStatus").show(),f("CallStatus").listenCallStatus(s[0],s[1])),c.complaint_msg?f("TouSuJieGuo").showData(c.complaint_msg):f("TouSuJieGuo").hide()},this.show=function(){DOM.show(a)},this.hide=function(){DOM.hide(a)}}function CallStatus(){function t(t){ajaxDataDialog.post({url:"/ivrbase/getNumber",data:{resume_id:t,orderid:$('input[name="order_id"]').val()||0},success:function(a){if(a.state){var e=a.data;l.getPhone(t,n,e[0]+"<em>转</em>"+e[1],e[2])}else alert(a.msg)}})}function a(){m&&(DOM.appendChild("customerDialogId",o),m=!1)}function e(t,e,s,n){a(),v={callee:s,type:t},i=e,h=!0}var s={},i=0,n=0,l=this,o=DOM.createElement("div","call_phone getTelNumber"),c=DOM.createElement("div","callStatus"),d=DOM.createElement("div","cancel_btn","返回");d.onclick=function(){l.hide(),l.closeCall()};var r=DOM.createElement("div","ok_btn","重新获取号码");r.style.display="none",r.onclick=function(){t(i)};var u=btnBar.instance();u.appendChild(d),u.appendChild(r);var p=DOM.createElement("div","call_tousu_btn","号码不正确？");p.onclick=function(){"号码不正确？"==p.innerHTML&&f("TouSu").openTouSu(i)},o.appendChild(c),o.appendChild(u),o.appendChild(p);var m=!0;this.setIsCreate=function(t){m=t},this.show=function(){DOM.show(o)},this.hide=function(){DOM.hide(o)},this.closeCall=function(){h=!1};var l=this,h=!1,v=null;!function(){function t(){ajaxData.post({url:"/Ivrbase/callStatus",data:v,success:function(t){t.state&&"connecting"==t.data.status?l.listenCallStatus(t.data.recordid,i):t.state||"expire"!=t.data.status?(t.state||"unknown"!=t.data.status)&&(t.state&&"incall"==t.data.status?(l.calling(),s["calling"+i]=[v.recordid,i]):t.state&&"stop_unconnected"==t.data.status?(l.unconnected(),l.closeCall()):t.state&&"calling"==t.data.status?l.linking():t.state&&"stop"==t.data.status&&(l.called(t.data.duration_str,t.data.fee),s["calling"+i]=[],l.closeCall())):(r.style.display="inline-block",l.closeCall())}})}window.setInterval(function(){h&&t()},500)}(),this.listenCallStatus=function(t,e){a(),i=e,v={recordid:t,type:"connect"},h=!0},this.getCallingStatus=function(){return s};var g,_;this.getPhone=function(t,s,i,l){a(),p.style.display="none",n=s,e("call",t,l),d.style.display="inline-block",r.style.display="none",this.show(),g=s,_=i,o.setAttribute("class","call_phone getTelNumber");var u=$('input[name="resumeName"]').val(),m=$('input[name="accountName"]').val(),h=$('input[name="photo_account"]').val(),v=$("img.photo_pic").attr("src"),f="";return f+='<div class="photoLayer"><div class="photo_account"><img src="'+h+'" width="80" height="80"/></div><span>'+m+"</span></div>",f+='<div class="tel_info">',f+='\t\t<div class="call_mobile">请拨打</div>',f+='\t\t<div class="call_number">',f+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/3_2.gif"/></span>',f+='\t\t\t<span class="telphone">'+_+"</span>",f+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/3_2.gif"/></span>',f+="\t\t</div>",f+='\t\t<div class="call_note">此号码30分钟内有效</div>',f+="</div>",f+='<div class="photoLayer"><div class="photo"><img src="'+v+'" width="80" height="80"/></div><span>'+u+"</span></div>",c.innerHTML=f,o},this.telOut=function(t){a(),p.style.display="none",g=t||g,this.show(),d.style.display="none",r.style.display="inline-block",o.setAttribute("class","call_phone getLinking");var e=$('input[name="resumeName"]').val(),s=$('input[name="accountName"]').val(),i=$('input[name="photo_account"]').val(),n=$("img.photo_pic").attr("src"),l="";return l+='<div class="photoLayer"><div class="photo_account"><img src="'+i+'" width="80" height="80"/></div><span>'+s+"</span></div>",l+='<div class="tel_info">',l+='\t\t<div class="call_mobile">请拨打</div>',l+='\t\t<div class="call_number">',l+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/3_1.gif"/></span>',l+='\t\t\t<span class="telphone">'+_+"</span>",l+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/3_2.gif"/></span>',l+="\t\t</div>",l+='\t\t<div class="call_note">此电话号码已失效</div>',l+="</div>",l+='<div class="photoLayer"><div class="photo"><img src="'+n+'" width="80" height="80"/></div><span>'+e+"</span></div>",c.innerHTML=l,o},this.linking=function(t){a(),p.style.display="none",g=t||g,this.show(),d.style.display="inline-block",r.style.display="none",o.setAttribute("class","call_phone getLinking");var e=$('input[name="resumeName"]').val(),s=$('input[name="accountName"]').val(),i=$('input[name="photo_account"]').val(),n=$("img.photo_pic").attr("src"),l="";return l+='<div class="photoLayer"><div class="photo_account"><img src="'+i+'" width="80" height="80"/></div><span>'+s+"</span></div>",l+='<div class="tel_info">',l+='\t\t<div class="call_mobile">请拨打</div>',l+='\t\t<div class="call_number">',l+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/1_1.gif"/></span>',l+='\t\t\t<span class="telphone">'+_+"</span>",l+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/1_2.gif"/></span>',l+="\t\t</div>",l+='\t\t<div class="call_note">正在连接中......</div>',l+="</div>",l+='<div class="photoLayer"><div class="photo"><img src="'+n+'" width="80" height="80"/></div><span>'+e+"</span></div>",c.innerHTML=l,o},this.calling=function(t){a(),p.style.display="none",g=t||g,this.show(),d.style.display="inline-block",r.style.display="none",o.setAttribute("class","call_phone getCalling");var e=$('input[name="resumeName"]').val(),s=$('input[name="accountName"]').val(),i=$('input[name="photo_account"]').val(),n=$("img.photo_pic").attr("src"),l="";return l+='<div class="photoLayer"><div class="photo_account"><img src="'+i+'" width="80" height="80"/></div><span>'+s+"</span></div>",l+='<div class="tel_info">',l+='\t\t<div class="call_mobile">请拨打</div>',l+='\t\t<div class="call_number">',l+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/2_1.gif"/></span>',l+='\t\t\t<span class="telphone">'+_+"</span>",l+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/2_2.gif"/></span>',l+="\t\t</div>",l+='\t\t<div class="call_note">正在通话中......</div>',l+="</div>",l+='<div class="photoLayer"><div class="photo"><img src="'+n+'" width="80" height="80"/></div><span>'+e+"</span></div>",c.innerHTML=l,o},this.called=function(t,e){a(),p.style.display="block",this.show(),d.style.display="inline-block",r.style.display="none",o.setAttribute("class","call_phone getTeled");var s=$('input[name="resumeName"]').val(),i=$('input[name="accountName"]').val(),n=$('input[name="photo_account"]').val(),l=$("img.photo_pic").attr("src"),u="";return u+='<div class="photoLayer"><div class="photo_account"><img src="'+n+'" width="80" height="80"/></div><span>'+i+"</span></div>",u+='<div class="tel_info">',u+='\t\t<div class="call_mobile">请拨打</div>',u+='\t\t<div class="call_number">',u+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/3_1.gif"/></span>',u+='\t\t\t<span class="telphone">'+_+"</span>",u+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/3_2.gif"/></span>',u+="\t\t</div>",u+='\t\t<div class="call_note">通话已结束  本次通话'+t+" 收费"+e+"元</div>",u+="</div>",u+='<div class="photoLayer"><div class="photo"><img src="'+l+'" width="80" height="80"/></div><span>'+s+"</span></div>",c.innerHTML=u,o},this.unconnected=function(t){a(),p.style.display="none",g=t||g,this.show(),d.style.display="inline-block",r.style.display="none",o.setAttribute("class","call_phone getTeled");var e=$('input[name="resumeName"]').val(),s=$('input[name="accountName"]').val(),i=$('input[name="photo_account"]').val(),n=$("img.photo_pic").attr("src"),l="";return l+='<div class="photoLayer"><div class="photo_account"><img src="'+i+'" width="80" height="80"/></div><span>'+s+"</span></div>",l+='<div class="tel_info">',l+='\t\t<div class="call_mobile">请拨打</div>',l+='\t\t<div class="call_number">',l+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/3_1.gif"/></span>',l+='\t\t\t<span class="telphone">'+_+"</span>",l+='\t\t\t<span class="call_process"><img src="/Public/image/page/search/process/3_2.gif"/></span>',l+="\t\t</div>",l+='\t\t<div class="call_note">未拨通,通话已结束 本次通话0分收费0元</div>',l+="</div>",l+='<div class="photoLayer"><div class="photo"><img src="'+n+'" width="80" height="80"/></div><span>'+e+"</span></div>",c.innerHTML=l,o}}function BaseInfoStrategy(){function t(){if(a){var t="";t+='<div class="personal_nav">',t+="\t<ul>",t+='\t\t<li class="curr" data-mark="base">更多信息</li>',t+='\t\t<li data-mark="tel">打电话</li>',e.orderid?t+='\t\t<li data-mark="pullRecord">推送记录</li>':(t+='\t\t<li data-mark="sms">发短信</li>',t+='\t\t<li data-mark="email">发邮件</li>',t+='\t\t<li data-mark="note">备注</li>',t+='\t\t<li data-mark="recored">操作记录</li>'),t+="\t</ul>",t+="</div>";var n="";n+='<div class="base_info">',n+="</div>",s=$(t).get(0),i=$(n).get(0),baseInfo=$(i).find(".base_info").get(0),DOM.appendChild("customerDialogId",s),DOM.appendChild("customerDialogId",i);var l=$(s).find("li");l.click(function(){if(!$(this).hasClass("curr")){var t=$(this).attr("data-mark"),a=null;switch(t){case"tel":a=new ContextStrategy(f("CallPhoneStrategy"));break;case"sms":a=new ContextStrategy(f("SmSStrategy"));break;case"email":a=new ContextStrategy(f("EmailStrategy"));break;case"note":a=new ContextStrategy(f("NoteStrategy"));break;case"recored":a=new ContextStrategy(f("OperaRecoredStrategy"));break;case"pullRecord":a=new ContextStrategy(f("PullRecord"));break;default:a=new ContextStrategy(f("BaseInfoStrategy"))}a.open(e),$(this).addClass("curr")}}),a=!1,$(document).delegate(".more_icon","click",function(){var t=$(this),a=t.next();"block"==a.css("display")?(a.hide(),t.removeClass("more_icon_open")):(a.show(),t.addClass("more_icon_open"))})}}var a=!0,e={},s=null,i=null;this.showData=function(a){e=a,t(),i.innerHTML=e.work.work,this.show()},this.show=function(){DOM.show(s)},this.hide=function(){DOM.hide(s)}}function ContextStrategy(t){this.open=function(a){f("CallStatus").closeCall(),$(".call_phone").hide(),$(".personal_nav").find("li").removeClass("curr"),t.showData(a)}}function OperaRecoredStrategy(){function t(){s&&(DOM.appendChild("customerDialogId",a),s=!1)}var a=DOM.createElement("div","call_phone"),e=DOM.createElement("div","opera_record_table");a.appendChild(e);var s=!0;this.showData=function(s){var i=s.userinfo.id,n=this;if(t(),"block"!=a.style.display){e.innerHTML="";var l="";l+="<table>",l+="\t<thead>",l+='\t\t<tr class="list-title">',l+='\t\t\t<td width="10%">操作方式</td>',l+='\t\t\t<td width="80%">操作记录</td>',l+='\t\t\t<td width="10%">消费</td>',l+="\t\t</tr>",l+="\t</thead>",l+="\t<tbody>",l+="\ttemplate",l+="\t</tbody>",l+="</table>",n.show(),ajaxDataDialog.post({url:"/Record/getCustomerRecord",data:{id:i},success:function(t){var a="";if(t.state){for(var s=t.data,i=0,o=s.length;i<o;i++){var c=s[i];"call"==c.rtype&&(a+="<tr>",a+="\t<td>电话</td>",a+="\t<td>",a+='\t\t<em class="fl ml10">'+c.starttime+" -- "+c.endtime+"（"+c.calltime+"）</em>",a+=null!=c.mp3record||null!=c.wavrecord?'\t\t<em class="fr mr20 blue txtline openAudio hand"  data-logid="'+c.id+'" data-voice-wav="'+c.wavrecord+'" data-voice-mp3="'+c.mp3record+'">听录音</em>':"",a+="\t</td>",a+="\t<td>"+c.fee+"元</td>",a+="</tr>"),"sms"==c.rtype&&(a+="<tr>",a+="\t<td>短信</td>",a+="\t<td>",a+='\t\t<span class="fl ml10"> '+c.addtime+' <em class="ml20"> '+c.title+"</em></span>",a+='\t\t<span class="fr mr20 blue txtline hand" onclick="alertMsg(this,'+c.tpl_id+')">预览</span>',a+='\t\t<span class="fr mr10">'+c.length+"字/"+Math.ceil(c.length/67)+"条</span>",a+="\t</td>",a+="\t<td>"+c.fee+"元</td>",a+="</tr>"),"email"==c.rtype&&(a+="<tr>",a+="\t<td>邮件</td>",a+="\t<td>",a+='\t\t<span class="fl ml10"> '+c.addtime+' <em class="ml20"> '+c.title+"</em></span>",a+='\t\t<span class="fr mr20 blue txtline hand" onclick="alertMail(this,'+c.tpl_id+')">预览</span>',a+='\t\t<span class="fr mr10">'+Math.ceil(c.length/2012)+"K</span>",a+="\t</td>",a+="\t<td>"+c.fee+"元</td>",a+="</tr>")}""==a&&(a="<tr><td colspan='3'>暂无操作记录</td></tr>")}e.innerHTML=l.replace("template",a),n.show()}})}},this.show=function(){DOM.show(a)},this.hide=function(){DOM.hide(a)}}function SmSStrategy(){function t(){if(e){var t=$(a);s=t.get(0),i=t.find(".list-data").get(0),DOM.appendChild("customerDialogId",s),e=!1}}var a="";a+='<div class="call_phone">',a+='\t  <ul class="list-data"></ul>',a+='\t  <ul class="list-data">',a+='\t    <li class="li">',a+='\t      <a href="/Template/msgTpl" target="_blank" class="blue name tc">+新建模板</a>',a+="\t    </li>",a+="\t  </ul>",a+="</div>";var e=!0,s=null,i=null,n=null;this.showData=function(a){t(),n=a,i.innerHTML="",ajaxDataDialog.post({url:"/Template/getMsgTplList",data:{customer_id:n.userinfo.id,isList:!1},success:function(t){if(t.state){for(var a=0,e="",s=n.userinfo.id,l=0,o=t.data.length;l<o;l++){var c=t.data[l];a+=+c.todayTimes||0,e+='<li class="li">',e+='  <div class="name">',e+='    <span class="ml10">'+c.title+'</span><span class="ml15">（'+c.length+"字/"+Math.ceil(c.length/67)+'条）</span><em class="blue hand ml20"  onclick="alertMsg(this,'+c.id+')">预览</em>',e+="  </div>",e+='  <div class="btn">',e+=c.todayTimes>2?'    <span class="button disabled">今日发送超限</span>':'    <button class="sendSMSBtn'+c.id+'" onclick="sendSMS('+s+","+c.id+","+Math.ceil(c.length/67)+')">发送短信('+c.todayTimes+")</button>",e+="  </div>",e+="</li>"}var d='<li class="li"><div class=" tr c999 mr20">已发送过<em class="smsSendCount">'+a+"</em>条</div></li>";i.innerHTML=d+e}}}),this.show()},this.show=function(){DOM.show(s)},this.hide=function(){DOM.hide(s)}}function EmailStrategy(){function t(){if(e){var t=$(a);s=t.get(0),i=t.find(".list-data").get(0),DOM.appendChild("customerDialogId",s),e=!1}}var a="",e=!0;a+='<div class="call_phone">',a+='\t  <ul class="list-data">',a+="\t  </ul>",a+='\t  <ul class="list-data">',a+='\t    <li class="li">',a+='\t      <a href="/Template/emailTpl" target="_blank" class="blue name tc">+新建模板</a>',a+="\t    </li>",a+="\t  </ul>",a+="</div>";var s=null,i=null,n=null;this.showData=function(a){t(),n=a,i.innerHTML="";var e=n.userinfo.id;ajaxDataDialog.post({url:"/Template/getEmailTplList",success:function(t){var a="";if(t.state){for(var s=0,n=t.data.length;s<n;s++){var l=t.data[s];a+='<li class="li">',a+='  <div class="name">',a+='    <span class="ml10">'+l.title+'</span><span class="ml15">（'+Math.ceil(l.length/1024)+'KB）</span><em class="blue hand ml20"  onclick="alertMail(this,'+l.id+')">预览</em>',a+="  </div>",a+='  <div class="btn">',a+='    <button onclick="sendEmail('+e+","+l.id+')">发送邮件</button>',a+="  </div>",a+="</li>"}i.innerHTML=a}}}),this.show()},this.show=function(){DOM.show(s)},this.hide=function(){DOM.hide(s)}}function delNote(t,a){a&&ajaxDataDialog.post({url:"/CustomerRemark/delete/",data:{id:a},success:function(a){a.state?$(t).closest(".noteItem").remove():alert(a.msg)}})}function NoteStrategy(){function t(){if(n){var t=$(l);e=t.get(0),s=t.find(".notelist").get(0);var o=t.find(".btn").get(0),c=t.find(".textarea");o.onclick=function(){var t=$.trim(c.val());return t?t.length>30?void alert("备注内容字数不大于30字"):void ajaxDataDialog.post({url:"/CustomerRemark/add/",data:{cust_id:i.userinfo.id,content:t},success:function(t){t.state?(c.val(""),a()):alert(t.msg)}}):void alert("备注内容不能为空")},DOM.appendChild("customerDialogId",e),n=!1}}function a(){ajaxDataDialog.post({url:"/CustomerRemark/jsonList",data:{cust_id:i.userinfo.id},success:function(t){var a="";if(t.state){for(var e=0,i=t.data.length;e<i;e++){var n=t.data[e];a+='<div class="noteItem mt10">',a+="  <span>"+n.createtime+"</span>",a+='  <span class="ml20">'+n.content+"</span>",a+='  <span class="del" onclick="javascript:delNote(this,'+n.id+')"></span>',a+="</div>"}i>0&&$(".noteCirlce").show(),s.innerHTML=a}}})}var e=null,s=null,i=null,n=!0,l="";l+='<div class="call_phone">',l+=' <div class="noteBox">',l+='    <div class="form">',l+='      <textarea class="textarea"></textarea>',l+='      <button class="btn">保存</button>',l+="    </div>",l+='    <div class="notelist f12 c666"></div>',l+="  </div>",l+="</div>",this.showData=function(e){t(),i=e,s.innerHTML="",a(),this.show()},this.show=function(){DOM.show(e)},this.hide=function(){DOM.hide(e)}}function PullRecord(){function t(){s&&(DOM.appendChild("customerDialogId",a),s=!1)}var a=DOM.createElement("div","call_phone pullRecord"),e=DOM.createElement("ul","list");a.appendChild(e);var s=!0,i={};this.showData=function(a){t(),i=a;var s=i.list,n="";n+="<li>",n+="\t<span>{time}</span>",n+='\t<a href="{linkUrl}" target="_blank">{linkName}</a>',n+='\t<div class="email">邮件：{email}</div>',n+='\t<div class="sms">短信：{phone}</div>',n+="</li>";var l='<li class="empty">学员尚未推送过 推送后可查看推送记录</li>',o="";$(s).each(function(t,a){o+=n.replace(/\{linkName}/gi,a.title).replace(/\{linkUrl}/gi,a.url).replace(/\{time}/gi,a.time).replace(/\{phone}/gi,a.phone.replace("失败","<em class='red'>失败</em>")).replace(/\{email}/gi,a.email.replace("失败","<em class='red'>失败</em>"))}),$('[data-mark="pullRecord"]').text("推送记录（"+s.length+"）"),e.innerHTML=o?o:l,this.show()},this.show=function(){DOM.show(a)},this.hide=function(){DOM.hide(a)}}function TouSu(){function t(){u&&(DOM.appendChild("customerDialogId",s),u=!1)}var a=this,e=e,s=DOM.createElement("div","call_phone call_tousu"),i=DOM.createElement("label"),n=DOM.createElement("input","");n.type="radio",n.name="reason",n.value=1,n.setAttribute("checked","checked"),i.appendChild(n),i.appendChild(DOM.createElement("span","ml15","姓名、性别不对"));var l=DOM.createElement("label"),o=DOM.createElement("input","");o.type="radio",o.name="reason",o.value=2,l.appendChild(o),l.appendChild(DOM.createElement("span","ml15","手机号停机、空号")),s.appendChild(i),s.appendChild(l);var c=DOM.createElement("div","cancel_btn","取消");c.onclick=function(){a.hide()};var d=DOM.createElement("div","ok_btn","确定");d.onclick=function(){var t=$("#orderId").val()||"",a=$("input[name='reason']:checked").val();ajaxDataDialog.post({url:"/DealComplaint/index",data:"id="+e+"&order_id="+t+"&reason="+a,success:function(t){t.status?f("TouSuJieGuo").showData(t.complaint_msg):alert(t.complaint_msg)}})};var r=btnBar.instance();r.appendChild(c),r.appendChild(d),s.appendChild(r),DOM.appendChild("customerDialogId",s);var u=!0;this.openTouSu=function(a){t(),e=a,this.show()},this.show=function(){DOM.show(s)},this.hide=function(){DOM.hide(s)}}function TouSuJieGuo(){function t(){e&&(DOM.appendChild("customerDialogId",a),e=!1)}var a=DOM.createElement("div","call_phone call_tousujieguo"),e=!0;this.showData=function(e){t();var s="";s+='\t<span class="mt60"></span>',s+='\t<p class="f14 mt35">'+e+"</p>",s+='\t<em class="f18 blue mt25">当前状态：待审核</em>',a.innerHTML=s,this.show()},this.show=function(){DOM.show(a)},this.hide=function(){DOM.hide(a)}}function CreateCustomerDialog(){var t="";t+='<div id="customerDialog" class="hide" >',t+='  <div id="customerDialogId" class="customerDialog"><div class="dialogLoading" id="customerDialogLoading"></div></div>',t+="</div>",$("body").append(t);var a=document.getElementById("customerDialogId");a.onselectstart=function(){return!1};var e=$("#customerDialog").dialog({width:789,close:function(){f("CallStatus").closeCall(),f("PersonalInfoStrategy").hide(),f("OperaRecoredStrategy").hide(),f("SmSStrategy").hide(),f("EmailStrategy").hide(),f("NoteStrategy").hide(),f("CallPhoneStrategy").hide(),f("CallStatus").hide(),f("TouSu").hide(),f("TouSuJieGuo").hide(),f("PullRecord").hide(),$(".personal_nav").find("li").eq(0).trigger("click")}});ajaxDataDialog=new DialogLoading("#customerDialogLoading"),this.showData=function(t,a,s){e.dialog("open"),ajaxDataDialog.post({url:"/DialogInfo/index",data:{id:t,orderid:a},success:function(t){0==t.status?(alert("没有查询到这个人基本信息"),e.dialog("close")):s.call(window,t)}})}}var console=console||{log:function(){}},f=function(){function t(t){return"undefined"==typeof a[t]&&(a[t]=new window[t]),a[t]}var a={};return t}(),DOM={};DOM.createElement=function(t,a,e){var s=document.createElement(t);return a&&s.setAttribute("class",a),void 0!=e&&(s.innerHTML=e),s},DOM.getId=function(t){return document.querySelector?document.querySelector("#"+t):document.getElementById(t)},DOM.appendChild=function(t,a){"string"==typeof t&&(t=DOM.getId(t)||DOM.createElement("span","","no found "+t+"DOM")),"string"==typeof a&&(a=DOM.getId(a)||DOM.createElement("span","","no found "+a+"DOM")),t.appendChild(a)},DOM.show=function(t){"undefined"!=typeof t&&t&&(t.style.display="block")},DOM.hide=function(t){"undefined"!=typeof t&&t&&(t.style.display="none")};var btnBar=function(){function t(){return DOM.createElement("div","customer_btn_bar")}var a=null;return{instance:function(){return a||(a=new t),a.cloneNode()}}}(),ajaxDataDialog=null;$(document).on("click",".saleCheckCustomer",function(){var t=$(this),a=t.data("id"),e=t.data("type");a&&!clockSubmit.init()&&f("CreateCustomerDialog").showData(a,null,function(a){var s=$("#customerDialog").prev().find(".ui-dialog-title"),i=t.attr("data-title");s.text("目标客户ID："+i),f("PersonalInfoStrategy").showData(a),f("BaseInfoStrategy").showData(a),$("[data-mark="+e+"]").click()})}),$(document).on("click",".checkCustomer",function(){var t=$(this),a=t.data("id"),e=t.data("type"),s=t.attr("orderid");a&&!clockSubmit.init()&&f("CreateCustomerDialog").showData(a,s,function(a){var i=$("#customerDialog").prev().find(".ui-dialog-title"),n=t.attr("data-title");i.text("目标客户ID："+n),a.orderid=s,f("PersonalInfoStrategy").showData(a),f("BaseInfoStrategy").showData(a),$("[data-mark="+e+"]").click(),$('[data-mark="pullRecord"]').text("推送记录("+a.count_spread+")")})}),$(document).delegate(".dialogStar","click",function(){var t=$(this),a=t.data("id");favoriteAction(this,a)});