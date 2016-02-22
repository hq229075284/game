$(function() {
	$.each(main_index_data, function(index, value) {
		//绑定每个版块的内容块
		$("main div.container-fluid." + index + " .row").html(
			function() {
				var arr = [];
				$.each(value, function(i, v) {
					arr.push("<div class='col-xs-4 col-md-2 col-sm-3'>");
					arr.push("<a href='#' class='thumbnail'>");
					arr.push("<img src='" + v.game_cover + "' alt='...'/>");
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
	var win_init_width = $(window).width();
	var _abso_bottom_time = $(".abso_bottom_time");
	var _thumbnail = $(".thumbnail");
	change_response(win_init_width);
	adapt_low_screen(win_init_width);
	console.log(win_init_width);
	$(window).resize(function() {
		var game_cover_left;
		var game_cover_center;
		var game_cover_right;
		var w = $(window).width();
		change_response(w);
		adapt_low_screen(w);
	});

	function change_response(w) {
		if (w > 992 || w == 992) {
			game_cover_left = $(".container-fluid div.col-xs-6.col-md-4:nth-child(3n+1)");
			game_cover_center = $(".container-fluid div.col-xs-6.col-md-4:nth-child(3n+2)");
			game_cover_right = $(".container-fluid div.col-xs-6.col-md-4:nth-child(3n)");
			//view_big_response_animate(game_cover_left,game_cover_center,game_cover_right);
		}
		if (w < 992 && (w > 768 || w == 768)) {
			game_cover_left = $(".container-fluid div.col-xs-6.col-md-4:nth-child(odd)");
			game_cover_right = $(".container-fluid div.col-xs-6.col-md-4:nth-child(even)");
			//view_middle_response_animate(game_cover_left,game_cover_right);
		} else {
			//			alert("view small");
			console.log("alert:window.width only :" + w + "px");
		}
	}

	function view_big_response_animate(game_cover_left, game_cover_center, game_cover_right) {
		game_cover_left.animate({
			"opacity": 1,
			"left": "+=100",
		}, 500);
		game_cover_center.animate({
			"opacity": 1,
			"bottom": "+=100",
		}, 500);
		game_cover_right.animate({
			"opacity": 1,
			"right": "+=100",
		}, 500);
	}

	function view_middle_response_animate(game_cover_left, game_cover_right) {
		game_cover_left.animate({
			"opacity": 1,
			"left": "+=100",
		}, 500);
		game_cover_right.animate({
			"opacity": 1,
			"right": "+=100",
		}, 500);
	}

	function adapt_low_screen(w) {
		if (w < 385) {
//			console.log("_abso_bottom_time:");
//			console.log(_abso_bottom_time);
//			console.log("_thumbnail");
//			console.log(_thumbnail);
			_abso_bottom_time.css({
				'bottom': "-40px"
			});
			_thumbnail.css('margin-bottom', "50px");
		} else {
			_abso_bottom_time.css({
				"bottom": "-20px"
			});
			_thumbnail.css("margin-bottom", "30px");
		}
	}

});