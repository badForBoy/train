;(function(){
	//左侧列表相关样式的点击事件
	var $ulItem = $(".aside-left ul");
	var $liItem = $(".aside-left ul li");
	var $spanItem = $(".aside-left ul li span");

	//右侧内容的切换
	var $contentItem = $(".content > div");
	var current ;

	//全部订单详情切换
	var $itemAll = $(".item-all");
	var $itemLi = $(".item-all li");
	var $itemModal = $(".item-modal > div");
	var itemNum = 0;

	//学团详情切换
	var $team = $("#item-team li");
	var $teamMod = $(".item-modal-team");

	//老师管理
	var $itemTea = $(".add-teacher li");
	var $modalAdd = $(".modal-add-teacher > .modal-item-side");

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

	//全部订单详情切换
	$itemLi.click(function(event) {
		var itemNum = $(this).index();
		$(this).addClass('on').siblings($itemAll).removeClass('on');
		$itemModal.eq(itemNum).removeClass('hidden').siblings($itemModal).addClass('hidden');
	});

	//老师管理
	$itemTea.click(function(event) {
		var itemNum = $(this).index();
		$(this).addClass('on').siblings($itemAll).removeClass('on');
		console.log($(this).index());
		$modalAdd.eq(itemNum).removeClass('hidden').siblings($modalAdd).addClass('hidden');
	});

	//学团详情切换
	$team.click(function(event) {
		var itemNum = $(this).index();
		$(this).addClass('on').siblings($team).removeClass('on');
		$teamMod.eq(itemNum).removeClass('hidden').siblings($teamMod).addClass('hidden');
	});

}());