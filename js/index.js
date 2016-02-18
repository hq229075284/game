$(function() {
	var game_cover_left = $(".container-fluid.new div.col-xs-6.col-md-3:nth-child(3n+1)");
	var game_cover_center = $(".container-fluid.new div.col-xs-6.col-md-3:nth-child(3n+2)");
	var game_cover_right = $(".container-fluid.new div.col-xs-6.col-md-3:nth-child(3n)");
	game_cover_left.animate({
		"opacity":1,
		"left":"+=100",
	},2000);
	game_cover_center.animate({
		"opacity":1,
		"bottom":"+=100",
	},2000);
	game_cover_right.animate({
		"opacity":1,
		"right":"+=100",
	},2000);
});