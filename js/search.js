;(function(){
	/*顶部搜索*/
	var $searchBox = $(".search-item");
	var $searchItem = $(".search-item").find('span');
	var $searchMore = $(".search-more");
	var $searchInput = $(".mod-search__input");


	/*顶部搜索*/
	$searchItem.hover(function() {
		//$searchItem.removeClass('hidden');
		$(this).css({
			background: '#ddd'
		});
	}, function() {
		$(this).css({
			background: '#fff'
		});
	});

	//搜索栏销量与价格之间的切换
	$searchItem.click(function(event) {
		event.preventDefault();

		if ($searchItem.hasClass('hidden')) {
			$searchItem.removeClass('hidden')
		} else {
			$(this).addClass("").siblings($searchItem).addClass("hidden")
		}

		//$(this).addClass("").siblings($imgBtn).addClass("hidden");
		if ($searchItem.eq(0).hasClass('hidden')) {
			$searchInput.attr({
				placeholder: '搜索课程'
			});
		} else {
			$searchInput.attr({
				placeholder: '搜索机构'
			});
		}
	});
	$searchMore.click(function(event) {
		event.preventDefault();

		if ($searchItem.hasClass('hidden')) {
			$searchItem.removeClass('hidden')
		} else {
			//$(this).addClass("").siblings($searchItem).addClass("hidden")
		}

		//$(this).addClass("").siblings($imgBtn).addClass("hidden");
		if ($searchItem.eq(0).hasClass('hidden')) {
			$searchInput.attr({
				placeholder: '搜索课程'
			});
		} else {
			$searchInput.attr({
				placeholder: '搜索机构'
			});
		}
	});

	/*function tab(event){
		if ($searchItem.hasClass('hidden')) {
			$searchItem.removeClass('hidden')
		} else {
			$(this).addClass("").siblings($searchItem).addClass("hidden")
		}

		//$(this).addClass("").siblings($imgBtn).addClass("hidden");
		if ($searchItem.eq(0).hasClass('hidden')) {
			$searchInput.attr({
				placeholder: '搜索课程'
			});
		} else {
			$searchInput.attr({
				placeholder: '搜索机构'
			});
		}
	};*/

}());
