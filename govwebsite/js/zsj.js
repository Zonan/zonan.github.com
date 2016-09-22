// JavaScript Document
$(function(){
	$(".tabContent div").first().show().siblings().hide;
	$(".tab a").hover(function(){
		$(this).addClass("se").siblings().removeClass("se");
		$(".tabContent div").eq($(this).index()).show().siblings().hide();
	})

})