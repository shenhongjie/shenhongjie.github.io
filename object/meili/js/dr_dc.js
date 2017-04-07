function dr_dc(actiontime,alltime) {
	var nowimg = 0;

	//============定时器一堆=================
	var timer = setInterval(buttonevent,alltime);

	$("#dr_dc").mouseenter(
		function() {
			clearInterval(timer);	//停止定时器
		}
	);

	$("#dr_dc").mouseleave(
		function() {
			clearInterval(timer);	//设表先关
			timer = setInterval(buttonevent,alltime);
		}
	);
	//============定时器一堆=================

	// $("#dr_dc.anniu .rightbut").click(buttonevent);

	//下面是右按钮的业务，提炼出来的原因，就是定时器调用
	function buttonevent(){
		if(!$("#dr_dc .tuul li").is(":animated")){
			//让老的信号量的元素淡出
			$("#dr_dc .tuul li").eq(nowimg).fadeOut(actiontime);

			//改变信号量
			if(nowimg < $("#dr_dc .tuul li").length - 1){
				nowimg = nowimg + 1;
			}else{
				nowimg = 0;
			}

			//让新的信号量的元素淡入
			$("#dr_dc .tuul li").eq(nowimg).fadeIn(actiontime);

			//小圆点跟着变：
			$("#dr_dc .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	}

	$("#dr_dc .dianul li").click(
		function(){
			//让老的淡出
			$("#dr_dc .tuul li").eq(nowimg).fadeOut(actiontime);
			nowimg = $(this).index();	//让信号量改变为用户点击的那个序号
			//让新的淡入
			$("#dr_dc .tuul li").eq(nowimg).fadeIn(actiontime);
			//小圆点跟着变：
			$("#dr_dc .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	);
}