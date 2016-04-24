(function($){
	$("#editor").wysiwyg();
	$(".sidebar-menu li").click(function(event) {
		/* Act on the event */
		if(!$(this).hasClass('active')){
			$(this).addClass('active').siblings('li').removeClass('active');
			switch($(this).find("span").text()){
				case "添加/编辑游戏信息":
					$('.content-header>h1').html($(this).find("span").text().slice(0,5)+"<small>"+$(this).find("span").text().slice(5)+"</small>");
					$('.content-header .breadcrumb .active').text("add/edit game info");
					$(".add-game-info").css("display","block").siblings().css("display","none");
					break;
				case "添加/编辑游戏咨询":
					$('.content-header>h1').html($(this).find("span").text().slice(0,5)+"<small>"+$(this).find("span").text().slice(5)+"</small>");
					$('.content-header .breadcrumb .active').text("add/edit game news");
					$(".add-game-news").css("display","block").siblings().css("display","none");
					break;
				case "已添加的游戏信息":
					$('.content-header>h1').html($(this).find("span").text().slice(0,3)+"<small>"+$(this).find("span").text().slice(3)+"</small>");
					$('.content-header .breadcrumb .active').text("loaded game info");
					$(".loaded-game-info").css("display","block").siblings().css("display","none");
					break;
				case "已添加的游戏咨询":
					$('.content-header>h1').html($(this).find("span").text().slice(0,3)+"<small>"+$(this).find("span").text().slice(3)+"</small>");
					$('.content-header .breadcrumb .active').text("loaded game news");
					$(".loaded-game-news").css("display","block").siblings().css("display","none");
					break;
				default:return;
			}
			
		}
	});

	$(".table tr").mouseenter(function(event) {
		/* Act on the event */
		$(this).find(".tools").css("display","block");
		$(this).one('mouseout', function(event) {
			/* Act on the event */
			$(this).find(".tools").hide();
		});
	});	
})(jQuery);