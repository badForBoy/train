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

	/*弹窗登录显隐*/
	$("#login-modal .wrap .bl-header i").click(function(event) {
		$("#login-modal").hide();
	});
	$(".login-btn").click(function(event) {
		$("#login-modal").show();
	});


	$(".basic .pay-btn").click(function(event) {
		$("#pay-modal").show();
	});
	$("#pay-modal .wrap .bl-header i").click(function(event) {
		$("#pay-modal").hide();
	});

}());