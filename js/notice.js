;(function(){
	//学团详情切换
	var $team = $(".item-team li");
	var $teamMod = $(".item-modal-team");

	//学团详情切换
	$team.click(function(event) {
		var itemNum = $(this).index();
		$(this).addClass('on').siblings($team).removeClass('on');
		$teamMod.eq(itemNum).removeClass('hidden').siblings($teamMod).addClass('hidden');
	});
}());