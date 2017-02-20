$(document).ready(function(){ 
	var slideShow=$(".slideShow"),    //获取最外层框架的名称 
		leftSlideShow=$(".slideShow-left , .slideShow-right"),    //获取最外层框架的名称 
		ul=slideShow.find("ul"), 
		leftUl=leftSlideShow.find("ul"),  
		showNumber=slideShow.find(".showNav span"),      //获取按钮 
		pre=$(".pre"),
		next=$(".next"),
		oneWidth=slideShow.find("ul li").eq(0).width();     //获取每个图片的宽度 
		leftWidth=$(".slideShow-left").find("ul li").eq(0).width();     //获取左侧每个图片的宽度 
	var timer=null;      //定时器返回值，主要用于关闭定时器 
	var iNow=0;      //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0 

	showNumber.on("click",function(){       //为每个按钮绑定一个点击事件 
		var index=$(this).index();        //获取哪个按钮被点击，也就是找到被点击按钮的索引值    
		showNumber.eq(index).addClass("active").siblings().removeClass("active");   //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉  
		iNow=index; 
		ul.animate({ "left":-oneWidth*iNow,});
		leftUl.animate({ "left":-leftWidth*iNow,})  
	}); 

	pre.on("click",function(){       //上一张的点击事件 
		leftUl.stop(true,true);
		ul.stop(true,true);
		iNow++;  
		if(iNow>showNumber.length-1){   
			iNow=0; 
		} ; 
		showNumber.eq(iNow).addClass("active").siblings().removeClass("active");   //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉  
		ul.animate({ "left":-oneWidth*iNow,});
		leftUl.animate({ "left":-leftWidth*iNow,})  
	}); 

	next.on("click",function(){       //下一张的点击事件 
		leftUl.stop(true,true);
		ul.stop(true,true);
		iNow--;  
		if(iNow<0){     
			iNow=3; 
		} ; 
		showNumber.eq(iNow).addClass("active").siblings().removeClass("active");   //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉  
		ul.animate({ "left":-oneWidth*iNow,});
		leftUl.animate({ "left":-leftWidth*iNow,});
		console.log(iNow)  
	}); 


	function autoplay(){ 
		timer=setInterval(function(){      //打开定时器  
		iNow++;          //让图片的索引值次序加1，这样就可以实现顺序轮播图片  
		console.log(iNow);
		if(iNow>showNumber.length-1){     //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始  
			iNow=0; 
		}  
		showNumber.eq(iNow).trigger("click");     //模拟触发数字按钮的click 
		 
		},2000);         //2000为轮播的时间
		} 
	autoplay(); 
	slideShow.hover( function(){clearInterval(timer);},autoplay); //另外注意setInterval的用法比较关键。
});