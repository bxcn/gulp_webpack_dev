/**  * kuaihuojian project - kuaihuojian project  */ "use strict";function searchResult(){var e=[],t=$(".work_name").find(":checked");t.each(function(t,i){e.push($(i).next().next().text())});var i=$('input[name="sex"]').val(),c=$('input[name="age"]').val(),n=$('input[name="industry"]').val(),a=$('input[name="words"]').val();i="不限"==i?"":i,"先生"==i?i="男":"女士"==i&&(i="女"),n="不限"==n?"":n;var l=n.split(",");n=[],$.each(l,function(e,t){n.push($(".industryBtnList").find('input[value="'+t+'"]').closest("label").text())}),n=n.join(","),i=""==i?"":i+">",c=""==c?"":c+"岁>",n=""==n?"":n+">",a=""==a?"":a+">";var r=$(".citySelected").text()+">"+e.join("+")+">"+i+c+n+a;$(".citySelectBar").html(r)}$(function(){function e(){var e=$(".cityDialog").find('input[name="citys"]:checked'),t=e.size();return!(t>3)||(alert("最多选择三个城市"),!1)}function t(){var e=new DialogLoading("#work_name_load");e.post({url:"/GetCatNum/getCategoryNum",data:{cityid:$('input[name="city"]').val()},success:function(e){for(var t="",i=e.data,c=0,n=i.length;c<n;c++)t+='<li class="'+("全部"==i[c].name?"checkboxItemAll ":"checkboxItem")+" "+(a==i[c].value?"curr":"")+'  jComponentContainer">',t+='  <input type="checkbox" '+(a==i[c].value?"checked":"")+' name="work" value="'+i[c].value+'" class="jComponent checkboxBlue">',t+='  <i class="jComponentIcon blur '+(a==i[c].value?"active":"")+' "></i>',t+="  <label>"+i[c].name+"</label>",t+='  <div class="number c999">'+i[c].num+"人</div>",t+="</li>";$("#zhiwei").html(t),searchResult();var l=$(".checkboxItem").checkbox({validate:function(e,t){return!(t<1)||(alert("至少选择一个职位类型！"),!1)},changed:function(e){var t=$('input[name="job"]'),i=t.val(),c=$(e),n=c.parent();c.prop("checked")?(r.removeChecked(),i.indexOf(c.val(),NaN)<0&&t.val(i+c.val()+","),n.addClass("curr"),$(".checkboxItemAll").removeClass("curr"),a=c.val()):(t.val(i.replace(c.val()+",","")),n.removeClass("curr")),check(1,"index"),searchResult()}}),r=$(".checkboxItemAll").checkbox({validate:function(e,t){return!(t<1)||(alert("至少选择一个职位类型！"),!1)},changed:function(e){var t=$('input[name="job"]'),i=$(e),c=i.parent();t.val();i.prop("checked")?(l.removeChecked(),t.val(""),$(".work_name").find("li").removeClass("curr"),c.addClass("curr"),a=i.val()):($(".checkboxItem").find("input").show(),$('input[name="job"]').val(""),c.removeClass("curr")),check(1,"index"),searchResult()}});check(1,"index")}})}$(".word_filter").checkbox();var i=$("#cityDialog").dialog({width:880,height:600,title:"请选择需要推广的城市或地区",buttons:[{text:"确定",click:function(){var e=$(this).find(":checked"),i=e.size();if(i<1)return alert("至少选择一个城市"),!1;if(i>3)return alert("最多选择三个城市"),!1;var c=[],n=[];e.each(function(e,t){n.push($(t).val()),c.push('<span class="red">'+$(t).val()+"</span>")}),$(".citySelected").html(c.join("+")),$('input[name="city"]').val(n.join(",")),$(this).dialog("close"),t(),ajaxData.post({url:"/UserInfo/modifySearchCities",data:{city:n.join(",")}}),check(1,"index")}}],close:function(){var e=$("#cityDialog").find(":checked"),t=e.size();return t<1?(i.dialog("open"),alert("至少选择一个城市"),!1):t>3?(i.dialog("open"),!1):void 0}});if($('input[name="city"]').val(citySelectArr.join(",")),0==citySelectArr.length)i.dialog("open");else{var c=[];1==citySelectArr.length&&"全国"==citySelectArr[0]?(c.push('<span class="red">'+citySelectArr[0]+"</span>"),$("input[value='"+citySelectArr[0]+"']").prop("checked",!0)):$.each(citySelectArr,function(e,t){c.push('<span class="red">'+t+"</span>"),$("input[value='"+t+"']").prop("checked",!0)});var n="";$.each(citySelectArr,function(e,t){n+="<li>",n+="    "+t+'<em class="close"></em>',n+="</li>"}),$(".cityDialog").find(".selected").find("ul").html(n),$(".citySelected").html(c.join("+")),$(".citySelectBar").text(citySelectArr.join("+"))}$(".dialogCity").checkbox({validate:function(e,t,i){return t<1?(alert("最少选择一个城市"),!1):!(t>3)||(alert("最多选择三个城市"),!1)}});$(".sliderCity").click(function(){i.dialog("open")}),$('input[name="searchBtn"]').click(function(){check(1,"index"),searchResult()}),$(".city_list").find(".item").hover(function(){var e=$(this),t=e.position(),i=t.left+18,c=t.top+220+40,n=e.data("id");$(".subCity"+n).css({left:i+"px",top:c+"px"}).show()},function(){var e=$(this),t=e.data("id");$(".subCity"+t).hide()}),$(".selectedList").hover(function(){var e=$(this);e.show()},function(){var e=$(this);e.hide()}),$('input[name="cityAll"]').click(function(){var e=$(this),t="";e.prop("checked")?($(".cityDialog").find('input[name="citys"]').prop("checked",!1),t+="<li>",t+='    全国<em class="close"></em>',t+="  </li>"):t+="",$(".cityDialog").find(".selected").find("ul").html(t)}),$(".cityDialog").delegate(".close","click",function(){var e=$(this),t=e.parent(),i=$.trim(t.text());t.remove(),$(".cityDialog").find('input[value="'+i+'"]').prop("checked",!1)}),$(".cityDialog").find('input[name="citys"]').click(function(){var t=$(this);if(!e())return void t.prop("checked",!1);var i="",c=$(".cityDialog").find('input[name="citys"]:checked');c.each(function(){var e=$(this);i+="<li>",i+="    "+e.val()+'<em class="close"></em>',i+="  </li>"}),$(".cityDialog").find(".selected").find("ul").html(i),$('input[name="cityAll"]').attr("checked",!1)}),$(document).delegate(".btnList","click",function(){var e=$(this),t=e.position(),i=t.left,c=t.top,n=e.data("id"),a=e.width(),l=$("."+n);l.css({width:a+"px",left:i+"px",top:c+"px"}).show()}),$(document).delegate(".sList > h2","click",function(){var e=$(this);e.closest(".sList").hide()}),$(".industryBtn").click(function(){var e=$('input[name="industrys"]:checked'),t=[];e.each(function(){t.push($(this).val())}),$('input[name="industry"]').val(t.join(",")),$(".industryBtnList").hide(),check(1,"index"),$(".sList").hide(),searchResult()}),$(".sexBtn").click(function(){var e=$('input[name="sexs"]:checked');$('input[name="sex"]').val(e.val()),$(".sexList").hide(),check(1,"index"),$(".sList").hide(),searchResult()}),$(".ageBtn").click(function(){var e=$('input[name="startAge"]').val(),t=$('input[name="endAge"]').val();return""==e&&""==t?(alert("请输入年龄区间范围"),!1):+e<16?(alert("开始年龄不能小于16岁"),!1):+t>65?(alert("结束年龄不能大于65岁"),!1):+e>+t?(alert("开始年龄不能大于结束年龄"),!1):($('input[name="age"]').val(e+"-"+t),$(".ageList").hide(),check(1,"index"),$(".sList").hide(),void searchResult())});var a="0";t(),$(".industrysAll").change(function(){var e=$(this);e.prop("checked")?$(".industrys").prop("checked",!1):$(".industrys").prop("checked",!0)}),$(".industrys").change(function(){var e=$(".industrys:checked").size();return e>3?($(this).prop("checked",!1),alert("最多选择三个行业"),!1):void $(".industrysAll").prop("checked",0==$(".industrys:checked").size())})});