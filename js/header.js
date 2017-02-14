;(function(){
	var $navAll = $(".nav-all");
	var $modalNav = $(".modal-nav");
	var $modalLi = $(".modal-nav-list");

	var $navList = $(".modal-nav-li");
	var $navSide = $(".modal-nav-side");
	var $modalNavSide = $(".modal-nav_modal-nav-side");
	var navListIndex
	, navSideIndex
	, image
	;

	$navAll.hover(function(){
		$modalNav.fadeIn(100)
	});
	$modalNav.hover(function() {
		$(this).fadeIn(100);
	}, function() {
		$(this).fadeOut(100);
	});
	$(window).click(function(event) {
		$modalNav.fadeOut(100);
	});

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

}());