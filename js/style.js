;(function(){
	var $loginBtn = $(".modal-login-btn");
	var $loginAll = $(".modal-login-all");
	var $loginBg = $(".modal-login-all-bg");

	var $bg = $(".wrap-banner-bg");
	var $imgList = $(".modal-big-banner-list > li");
	var $imgBtn = $(".modal-big-banner-btn > ul > li");
	var $pre = $(".pre");
	var $next = $(".next");
	var length = $imgList.length;
	var current = 0;

	var $navList = $(".modal-nav-li");
	var $navSide = $(".modal-nav-side");
	var $modalNavSide = $(".modal-nav_modal-nav-side");
	var navListIndex
	, navSideIndex
	, image
	;

	/*左侧列表显隐*/
	$navList.hover(function(){
		var navListIndex = $(this).index() - 1;
		$navSide.find(".modal-nav_modal-nav-side").eq(navListIndex).css({"display":"block"});
	},function(){
		var navListIndex = $(this).index() - 1;
		$navSide.find(".modal-nav_modal-nav-side").eq(navListIndex).css({"display":"none"});
	});

	$modalNavSide.hover(function(){
		$(this).css({"display":"block"});
	},function(){
		$(this).css({"display":"none"});
	});

	/*轮播图*/


	var timer = setInterval(function(){
		/*btn(current);*/
		play(current);
		current++;
		if(current==length){//当当前播放的索引值等于总图片数就重置为0，重新开始循环
		current=0;
		};
		bg(current);
		$imgBtn.eq(current-1).addClass("on").siblings($imgBtn).removeClass("on");
		},2000);//将function写在setInterval里更简洁。这样写默认开始2秒就开始播放，如果想开始2秒就播放第二张，那就得把最前面的current=1;因为初始显示的就是第一张。所以2秒后应该显示第二张而不是还是第一张
	
		$imgBtn.on("click",function(){
			var n = $(this).index();
			$(this).addClass("on").siblings($imgBtn).removeClass("on");
			$imgList.eq(n).fadeIn(200).siblings($imgList).fadeOut(200);
			bg(n + 1);
		}
	)
	/*轮播背景墙颜色改变*/
	function bg(n){
		switch(n)
		{
			case 0:
			$bg.css({"background":"#040e18"});
			break;
			case 1:
			$bg.css({"background":"#3d9193"});
			break;
			case 2:
			$bg.css({"background":"#515d77"});
			break;
			case 3:
			$bg.css({"background":"#0c1124"});
			break;
			case 4:
			$bg.css({"background":"#4c53ae"});
			break;
			case 5:
			$bg.css({"background":"#040e18"});
			break;
			default:
		};
	}
	function play(n){
		$imgList.eq(n).fadeIn(200).siblings($imgList).fadeOut(200);
		//eq表示第几个标签里面的n就是代表的第几个img标签是从0开始数的。这里用siblings而不是先hide全部在fadein，siblings代表的是除开当前标签以外的所有同级标签。使用siblings来处理这样的情况速度会比你老师写的快很多倍。简单来讲siblings就是除开当前显示的这个以外的所有统计图片全部fadeOut
	}
	function btn(n){
		$pre.on("click",function(){
			console.log(n);
			$imgList.eq(n).fadeIn(200).siblings($imgList).fadeOut(200);
		});
		$next.on("click",function(){
			$imgList.eq(n-1).fadeIn(200).siblings($imgList).fadeOut(200);
		})
	}
	/*鼠标放上轮播停止，移开轮播继续*/
	$imgList.hover(function(){
		clearInterval(timer);
	},function(){
		$imgList.stop(true,true);
		timer = setInterval(function(){
		/*btn(current);*/
		play(current);
		current++;
		if(current==length){
		current=0;
		};
		bg(current);
		$imgBtn.eq(current-1).addClass("on").siblings($imgBtn).removeClass("on");
		},2000);

	});

	/*$loginBtn.on("click",function(){
		$loginAll.css({"display":"block"})
	})*/

	$loginBtn.click(function(){
		$loginAll.fadeIn(200);
	});
	$loginBg.click(function(){
		$loginAll.fadeOut(200);
	});

}());
