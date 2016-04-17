(function($){
	$(".sidebar-menu li").click(function(event) {
		/* Act on the event */
		if(!$(this).hasClass('active')){
			$(this).addClass('active').siblings('li').removeClass('active');
			$('.content-header>h1>small').text($(this).find("span").text().slice(2));
			switch($(this).find("span").text()){
				case "添加游戏信息":
					$('.content-header .breadcrumb .active').text("add game info");
					$(".add-game-info").css("display","block").siblings().css("display","none");
					break;
				case "添加游戏咨询":
					$('.content-header .breadcrumb .active').text("add game news");
					$(".add-game-news").css("display","block").siblings().css("display","none");
					break;
			}
			
		}
	});	
})(jQuery);