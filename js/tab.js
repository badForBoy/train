;(function(){
	var $team = $(".item-team > li");
	var $teamMod = $(".tab-modal");


	$team.click(function(event) {
		var itemNum = $(this).index();
		$(this).addClass('on').siblings($team).removeClass('on');
		$teamMod.find(".modal-item").eq(itemNum).removeClass('hidden').siblings($teamMod).addClass('hidden');
	});

	//支付页面订单详情的显示隐藏
	$(".payment .info .btn span").click(function() {
		$(".payment .info .details").toggleClass('on');
	});

}());