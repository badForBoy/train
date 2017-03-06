;(function(){
	var $change = $(".change");
	var $modalChange = $(".modal-change");
	var $blackout = $(".blackout");
	var $close = $(".close");
	var $edit = $(".edit-click");


	/*弹窗的显示与隐藏*/
	$change.click(function(event) {
		event.preventDefault();
		$blackout.fadeIn(100);
	});
	$edit.click(function(event) {
		event.preventDefault();
		$(this).parent().parent().parent().parent().find('.modal-personal').fadeIn(100);
	});
	$close.click(function(event) {
		$(this).parent().parent().parent().fadeOut(100);
	});
	
}());