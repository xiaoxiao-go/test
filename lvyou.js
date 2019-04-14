$(function(){
	// var alt = $(".out-lb-img li").eq(index).attr("alt");
	//console.log(alt);
	// $(".out-lb").css("background",alt);
	// 获取轮播的图片，将其先隐藏
	$("#photo li").hide("fast");
	$("#photo li").eq(0).fadeIn("fast");
	var i = 1;

	function run(){
		// 随着图片的改变，更改此时的小点样式
		$("#photobtn li").eq(i).addClass("bg").siblings().removeClass("bg");
		// 让图片一个一个出来
		$("#photo li").eq(i).fadeIn("slow").siblings().fadeOut("slow");
		i++;
		if (i == $("#photo li").length) {
			i = 0;
		}
		
		var alt = $("#photo li").eq(i-1).attr("alt");
		$("#lunbo").css("background",alt);
		
	}
//当鼠标放到小点上时，控制图片
		$("#photobtn li").mouseover(function(){
			i =  $(this).index();
			// alert(i);
			run();
		}) ;
//单击向右按钮时，执行函数
		$("#rightbtn").click(function(){
			run();
		}) ;
//单击向左按钮时，执行函数
		$("#leftbtn").click(function(){
			//此时获取到.bg的下标，0,1,2,3,4
			i =  $(".bg").index();
			if (i == 0) {
				i = 5;
			}
			i--;
			run();
			
		})		
// 定义定时器t,用于控制自动轮播函数
	var t = window.setInterval(run,"2000");
//当鼠标放到轮播图上时，停止自动轮播
	$("#lunbo").mouseenter(function(){
		window.clearInterval(t);
		$("#leftbtn,#rightbtn").show("fast");
	}) 
//当鼠标离开lunbo盒子时，继续自动轮播
    $("#lunbo").mouseleave(function(){
    	t = window.setInterval(run,"2000");
    	$("#leftbtn,#rightbtn").hide("fast");
    }) 
})