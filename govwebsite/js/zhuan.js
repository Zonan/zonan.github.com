// JavaScript Document
var t = n =0, count;
$(document).ready(function(){ 
	count=$("#banner_list a").length;
	$("#banner_list a:not(:first-child)").hide();
	$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
	$("#banner_info").click(function(){window.open($("#banner_list a:first-child").attr('href'), "_blank")});
	$("#banner li").click(function() {
		var i = $(this).text() -1;//获取Li元素内的值，即1，2，3，4
		n = i;
		if (i >= count) return;
		$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
		$("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(i).attr('href'), "_blank")})
		$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
		document.getElementById("banner").style.background="";
		$(this).toggleClass("on");
		$(this).siblings().removeAttr("class");
	});
	t = setInterval("showAuto()", 2000);
	$("#banner").hover(function(){
		clearInterval(t)
	},
		function(){t = setInterval("showAuto()", 2000);
	
	});
})

function showAuto()
{
	n = n >=(count -1) ?0 : ++n;
	$("#banner li").eq(n).trigger('click');
}




/*微博滚动*/
$(function(){
	$("#page a").first().addClass("se");
	var j=0;
	setInterval(function(){
		j++;
		if(j==3)
		{
			$("#page a").first().addClass("se").end().last().removeClass("se");
			$("#imgBox div").first().clone().appendTo($("#imgBox"));
			$("#imgBox").animate({top:"-"+(j*144)+"px"},300,function(){
				$("#imgBox div").last().remove();
				$("#imgBox").css("top","0px");
				j=0;
			});
		}
		else
		{
			$("#page a").eq(j).mouseover();	
		}
	},3500);
	$(function  (){
		$("#page a").each(function(i){
			$(this).mouseover(function(){
				j=i;
				$("#page a").filter(".se").removeClass("se");
				$(this).addClass("se");
				$("#imgBox").animate({top:"-"+(i*144)+"px"},300);
			});
		});
	});
	});

/*三级微博滚动*/
$(function(){
	$("#page2 a").first().addClass("se");
	var j=0;
	setInterval(function(){
		j++;
		if(j==3)
		{
			$("#page2 a").first().addClass("se").end().last().removeClass("se");
			$("#imgBox2 div").first().clone().appendTo($("#imgBox2"));
			$("#imgBox2").animate({top:"-"+(j*144)+"px"},300,function(){
				$("#imgBox2 div").last().remove();
				$("#imgBox2").css("top","0px");
				j=0;
			});
		}
		else
		{
			$("#page2 a").eq(j).mouseover();	
		}
	},3500);
	$(function  (){
		$("#page2 a").each(function(i){
			$(this).mouseover(function(){
				j=i;
				$("#page2 a").filter(".se").removeClass("se");
				$(this).addClass("se");
				$("#imgBox2").animate({top:"-"+(i*144)+"px"},300);
			});
		});
	});
	});
