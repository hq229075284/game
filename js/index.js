$(function() {
	console.log($("body").outerWidth());
	$.each(main_index_data, function(index, value) {
		//绑定每个版块的内容块
		$("main div.container-fluid." + index + " .row").html(
			function() {
				var arr = [];
				$.each(value, function(i, v) {
					arr.push("<div class='col-xs-4 col-md-2 col-sm-3'>");
					arr.push("<a href='detail.html' class='img_block'>");
					//					arr.push("<section class='cover_front'><img class='lazy' src='" + v.game_cover + "' alt='...' data-src='"+v.game_cover+"' />");
					arr.push("<section class='cover_front'><img class='lazy' alt='...' data-original='" + v.game_cover + "' />");
					//					arr.push("<section class='cover_front'><img src='http://image.gamersky.com/webimg15/lazyloadplaceholder.gif' alt='...' data-src='"+v.game_cover+"' />");
					arr.push("<div class='abso_bottom_title'>" + v.abstract + "</div>");
					arr.push("</section>");
					arr.push("<div class='abso_bottom_time'>" + "上市时间：2016.05.13" + "</div>");
					arr.push("</a>");
					arr.push("</div>");
				});
				return arr.join("");
			}
		);

	});
	
	$("img.lazy").lazyload({
//		container: $("body"),
		effect:"fadeIn", 
	});

});
