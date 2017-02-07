;(function(){
	var $nav = $(".details-nav");
	var $navItem = $(".details-nav li");
	var $modItem = $(".details-mod > div");
	var current;

	var $chapterBtn = $(".item-chapter i.iconfont");
	var $chapterList = $(".mod-item-list");
	var $listItem;

	$navItem.click(function(event) {
		var current = $(this).index();
		$(this).addClass('on').siblings($navItem).removeClass('on');
		$modItem.eq(current).removeClass('hidden').siblings($modItem).addClass('hidden');
	});

	$chapterBtn.click(function(event) {
		var $listItem = $(this).parent().find('mod-item-list');
		$listItem.slideToggle(200);
	});


}());