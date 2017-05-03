;(function(){

	var $team = $(".tab-nav ul li");
	var $teamMod = $(".tab-modal");


	$team.click(function(event) {
		var itemNum = $(this).index();
		$(this).addClass('on').siblings($team).removeClass('on');
		$teamMod.find(".tab-item").eq(itemNum).removeClass('hide').siblings($teamMod).addClass('hide');
	});
	
	var $item = $(".main .content .cursole-list .component .all-list .item");
	//var $modal = $(".main .content .cursole-list .component .details-item-modal");
	$item.click(function(event) {
		var $modal = $(this).find(".details-item-modal");
		$length = $(this).find(".details-item-modal .modal-list").length;
		$modal.stop(true);
		$modal.height() == 0 ? $modal.animate({height: $length*60}, 400):$modal.animate({height: 0}, 400);
	});

	//console.log($(".details-item-modal .modal-list").length)
	$(".component .c-item").click(function(event) {
		$(this).addClass('on').siblings($(".component .c-item")).removeClass('on');
	});



	var $team = $(".content .component .wrap .c-item");
	var $courseMod = $(".tab-modal-course");


	$team.click(function(event) {
		var itemNum = $(this).index();
		//console.log(itemNum);
		$(this).addClass('on').siblings($team).removeClass('on');
		$courseMod.find(".course-item").eq(itemNum).removeClass('hide').siblings($courseMod).addClass('hide');
	});



	var $btn = $(".main .content .manage .box ul li");
	$btn.find(".right a").click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find('.modal').show();
	});
	$btn.find('.modal .form-header i').click(function(event) {
		$(this).parent().parent().parent().hide();
	});

	var $assnItem = $(".main .content .assn .assn-table ul li");
	var $assnMod = $(".main .content .assn .assn-modal .item"); 
	$assnItem.click(function(e) {
		//debugger
		var itemNum = $(this).index();
		$(this).addClass('on').siblings($team).removeClass('on');
		$assnMod.eq(itemNum).removeClass('hide').siblings($teamMod).addClass('hide');
		//console.log($teamMod.find(".item").length);
	});

}());