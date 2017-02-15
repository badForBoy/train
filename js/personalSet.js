;(function(){
	var $change = $(".change");
	var $modalChange = $(".modal-change");
	var $blackout = $(".blackout");
	var $close = $(".close");

	$change.click(function(event) {
		event.preventDefault();
		$blackout.fadeIn(100);
	});
	$close.click(function(event) {
		$blackout.fadeOut(100);
	});

}());