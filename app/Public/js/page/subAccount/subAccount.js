/**  * kuaihuojian project - kuaihuojian project  */ "use strict";var subAccountStateSelect=$("#subAccountState").selectUI({width:268,height:40,addClass:"form-input"});$(function(){$("#addSubAccountForm").validate({submitHandler:function(){var a=$("#addSubAccountForm"),e=a.find('input[name="username"]').val(),i=a.find('input[name="passwd"]').val(),n=a.find('input[name="realname"]').val(),o=a.find('input[name="sub_mobile"]').val(),u=a.find('input[name="job"]').val(),l=a.find('input[name="department"]').val(),s={username:e,passwd:md5(i),realname:n,sub_mobile:o,job:u,department:l};ajaxData.post({url:"/userAccount/addSubAccount",data:s,success:function(a){a.state?(t.dialog("close"),alert("操作成功"),window.location.reload()):alert(a.msg||"操作失败")}})}}),$("#modifySubAccountForm").validate({submitHandler:function(){var t=$("#modifySubAccountForm"),e=t.find('input[name="id"]').val(),i=t.find('input[name="passwd"]').val(),n=t.find('input[name="realname"]').val(),o=t.find('input[name="sub_mobile"]').val(),u=t.find('input[name="job"]').val(),l=t.find('input[name="department"]').val(),s=t.find('select[name="Ustatus"]').find("option:selected").val(),d={id:e,passwd:md5(i),realname:n,sub_mobile:o,job:u,department:l,Ustatus:s};ajaxData.post({url:"/userAccount/editSubAccount",data:d,success:function(t){t.state?(a.dialog("close"),alert("操作成功"),window.setTimeout(function(){window.location.reload()},1500)):alert(t.msg||"操作失败")}})}});var t=$("#addSubAccountDialog").dialog({width:600,title:"增添子账号",buttons:[{text:"确定添加",click:function(){$("#addSubAccountForm").submit()}}]});$(".addSubAccount").click(function(){t.dialog("open"),window.setTimeout(function(){$("input[name='username']").val(""),$("input[name='passwd']").val("")},100)});var a=$("#modifySubAccountDialog").dialog({width:600,height:600,title:"用户操作",buttons:[{text:"确定修改",click:function(){$("#modifySubAccountForm").submit()}}]});$(".modifySubAccount").click(function(){var t=$(this),e=t.attr("data-id"),i=$("#modifySubAccountDialog");ajaxData.post({url:"/userAccount/subAccountInfo",data:{sub_user_id:e},success:function(t){t.state?(i.find('input[name="id"]').val(e),i.find(".uuid").text(t.uuid),i.find(".username").text(t.username),i.find('input[name="passwd"]').val(),i.find('input[name="realname"]').val(t.realname),i.find('input[name="sub_mobile"]').val(t.sub_mobile),i.find('input[name="job"]').val(t.job),i.find('input[name="department"]').val(t.department),i.find('select[name="Ustatus"]').find("option:selected").removeAttr("selected"),i.find('select[name="Ustatus"]').find("option[value='"+t.ustatus+"']").attr("selected","selected"),subAccountStateSelect.render(),a.dialog("open")):alert(t.msg||"操作失败")}})});var e=$("#editPriceDialog").dialog({width:760,height:530,title:"余额调整",buttons:[{text:"取消",click:function(){$(this).dialog("close")}},{text:"确定",click:function(){var t=this,a=$("#toId").val(),e=$("#toTopUp").val();ajaxData.post({url:"/UserAccount/transferFunds",data:{to_id:a,transFunds:e},success:function(a){$(t).dialog("close"),a.state?promptDialog("余额调整成功",{ok:function(){window.location.reload()}}):alert(a.msg||"操作失败")}})}}]}),i=0,n=0;$(".editPrice").click(function(){var t=$(this).attr("data-id"),a=$(this).attr("data-name"),o=$(this).attr("data-num");$("#toId").val(t),$("#subAccountId").text(o),$("#subAccountName").text(a),ajaxData.post({url:"/UserAccount/getFunds",data:{sub_user_id:t},success:function(t){t.state?(i=t.parent_funds,n=t.sub_funds,$("#totalPriceDialog").text(parseFloat(i).toFixed(2)),$("#toTopUp").val(parseFloat(n).toFixed(2)),$("#currentPrice").val(parseFloat(n).toFixed(2)),e.dialog("open")):alert(t.msg)}})});var e=$("#editPriceDialog");e.find(".down").click(function(){i=parseFloat(i),n=parseFloat(n),n<1e3?(i+=n,n=0):(i+=1e3,n-=1e3),$("#totalPriceDialog").text(parseFloat(i).toFixed(2)),$("#toTopUp").val(parseFloat(n).toFixed(2))}),e.find(".up").click(function(){i=parseFloat(i),n=parseFloat(n),i<1e3?(n+=i,i=0):(i-=1e3,n+=1e3),$("#totalPriceDialog").text(parseFloat(i).toFixed(2)),$("#toTopUp").val(parseFloat(n).toFixed(2))}),$("#toTopUp").blur(function(){var t=parseFloat($("#totalPrice").val()),a=parseFloat($("#currentPrice").val()),e=t+a,i=0,n=$(this).val();i=a-n,t+=i,a-=i,0>t&&(a=e,t=0),$("#totalPriceDialog").text(parseFloat(t).toFixed(2)),$("#toTopUp").val(parseFloat(a).toFixed(2))}),$("#toTopUp").keyup(function(){var t=$(this),a=t.val();if(!/^[\d]+\.\d{1,2}$/gi.test(a)&&!/^[\d]+$/gi.test(a)){var e=parseFloat($("#totalPrice").val()),i=parseFloat($("#currentPrice").val());$("#totalPriceDialog").text(parseFloat(e).toFixed(2)),$("#toTopUp").val(parseFloat(i).toFixed(2))}})});