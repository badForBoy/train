;(function(){
	var $top = $(".top");
	var $topBtn = $(".top > ul > li.bn");

	$(window).scroll(function(event) {
		var $sc = $(window).scrollTop();
		if ($sc > 100) {
			$topBtn.fadeIn(100)
		} else {
			$topBtn.fadeOut(100)
		}
	});

	$topBtn.click(function(event) {
		$("body,html").animate({scrollTop:0}, 100);
	});
}());