$(function() {
	$.each(main_index_data, function(index, value) {
		//绑定每个版块的内容块
		$("main div.container-fluid." + index + " .row").html(
			function() {
				var arr = [];
				$.each(value, function(i, v) {
					arr.push("<div class='col-xs-4 col-md-2 col-sm-3'>");
					arr.push("<a href='#' class='img_block'>");
					arr.push("<section class='cover_front'><img src='" + v.game_cover + "' alt='...' data_src='"+v.game_cover+"' /></section>");
					arr.push("<div class='abso_bottom_title'>" + v.abstract + "</div>");
					arr.push("<div class='abso_bottom_time'>" + "上市时间：2016.05.13" + "</div>");
					arr.push("</a>");
					arr.push("</div>");
				});
				return arr.join("");
			}
		);
	});


	//根据视口，适配显示动态
	// var win_init_width = $(window).width();
	// var _abso_bottom_time = $(".abso_bottom_time");
	// var _img_block = $(".img_block");
	// adapt_low_screen(win_init_width);
	// $(window).resize(function() {
	// 	var w = $(window).width();
	// 	adapt_low_screen(w);
	// });

	// function adapt_low_screen(w) {
	// 	if (w < 385) {
	// 		_abso_bottom_time.css({
	// 			'bottom': "-40px"
	// 		});
	// 		_img_block.css('margin-bottom', "50px");
	// 	} else {
	// 		_abso_bottom_time.css({
	// 			"bottom": "-20px"
	// 		});
	// 		_img_block.css("margin-bottom", "30px");
	// 	}
	// }
});