function yixing(){ 
	var sudu = 600;
	var shangdi = false;
	var json0 = {"width":"140px","height":"251px","left":"-140px", "top":"155px"};
	var json1 = {"width":"164px","height":"292px","left":"82px", "top":"123px"};
	var json2 = {"width":"219px","height":"383px","left":"392px", "top":"83px"};
	var json3 = {"width":"164px","height":"292px","left":"759px", "top":"123px"};
	var json4 = {"width":"140px","height":"251px","left":"1000px", "top":"155px"};
	var nowimg = 2;
    var timer = setInterval(yewu,2000);
	$(".yixing").mouseenter(
		function() {
			clearInterval(timer);
		}
	);
	$(".yixing").mouseleave(
		function() {
			clearInterval(timer);
			timer = setInterval(yewu,2000);
		}
	);
	$("#datu2 .anniu .you").click(yewu);
		function yewu(){
		if(!$("#datu2 .yixing .tuul div").is(":animated") || shangdi == true){
                if(nowimg < 8){
				nowimg ++;
			}else{
				nowimg = 0;
			}
			$("#datu2 .yixing .tuul div.No1").animate(json0,sudu);
			$("#datu2 .yixing .tuul div.No2").animate(json1,sudu);
			$("#datu2 .yixing .tuul div.No3").animate(json2,sudu);
			$("#datu2 .yixing .tuul div.No4").animate(json3,sudu);
			$("#datu2 .yixing .tuul div.No0").css(json4);
			$("#datu2 .yixing .tuul div.No0").attr("class","waiting");
			$("#datu2 .yixing .tuul div.No1").attr("class","No0");
			$("#datu2 .yixing .tuul div.No2").attr("class","No1");
			$("#datu2 .yixing .tuul div.No3").attr("class","No2");
			$("#datu2 .yixing .tuul div.No4").attr("class","No3");
			if($("#datu2 .yixing .tuul div.No3").next().length != 0){
				$("#datu2 .yixing .tuul div.No3").next().attr("class","No4");
			}else{
				$(".tuul div:first").attr("class","No4");
			}
			$("#datu2 .yixing .tuul div.No4").css(json4);
		}
	}
$("#datu2 .anniu .zuo").click(
	function(){
		if(!$("#datu2 .yixing .tuul div").is(":animated") || shangdi == true){
		       if(nowimg > 0){
				nowimg --;
			}else{
				nowimg = 8;
			}
				$("#datu2 .yixing .tuul div.No0").animate(json1,sudu);
				$("#datu2 .yixing .tuul div.No1").animate(json2,sudu);
				$("#datu2 .yixing .tuul div.No2").animate(json3,sudu);
				$("#datu2 .yixing .tuul div.No3").animate(json4,sudu);
				$("#datu2 .yixing .tuul div.No4").css(json0);
				$("#datu2 .yixing .tuul div.No4").attr("class","waiting");
			    $("#datu2 .yixing .tuul div.No3").attr("class","No4");
			    $("#datu2 .yixing .tuul div.No2").attr("class","No3");
			    $("#datu2 .yixing .tuul div.No1").attr("class","No2");
			    $("#datu2 .yixing .tuul div.No0").attr("class","No1");
				if($("#datu2 .yixing .tuul div.No1").prev().length != 0){
					$("#datu2 .yixing .tuul div.No1").prev().attr("class","No0");
				}else{
					$(".tuul div:last").attr("class","No0");
				}
				$("#datu2 .yixing .tuul div.No0").css(json0);
			}
		}
   );
}