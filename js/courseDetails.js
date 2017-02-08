;(function(){
	var $nav = $(".details-nav");
	var $navItem = $(".details-nav li");
	var $modItem = $(".details-mod > div");
	var current;

	var $chapterBtn = $(".item-chapter i.iconfont");
	var $header = $(".item-header");
	var $listItem;

	$navItem.click(function(event) {
		var current = $(this).index();
		$(this).addClass('on').siblings($navItem).removeClass('on');
		$modItem.eq(current).removeClass('hidden').siblings($modItem).addClass('hidden');
	});

	$header.click(function(event) {
		var $listItem = $(this).next();
		$listItem.slideToggle(200);
	});


}());