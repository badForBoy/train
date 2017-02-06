;(function(){
	//左侧列表相关样式的点击事件
	var $ulItem = $(".aside-left ul");
	var $liItem = $(".aside-left ul li");
	var $spanItem = $(".aside-left ul li span");

	//右侧内容的切换
	var $contentItem = $(".content > div");
	var current = 0;

	//左侧列表相关样式的点击事件
	$liItem.click(function(event) {
		event.preventDefault();
		$spanItem.removeClass('on');
		$liItem.find('i').removeClass('color');
		$(this).find('span').addClass('on');
		$(this).find('i').addClass('color');
	});

	//右侧内容的切换
	$liItem.click(function(event) {
		var current = $(this).index();
		$contentItem.eq(current).removeClass('hidden').siblings($contentItem).addClass('hidden');
	});


}());