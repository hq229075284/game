(function($){
	if (window.File && window.FileReader && window.FileList && window.Blob) {
  		// alert("支持");  
	} else {
  		alert('您的浏览器不支持html5文件上传');
	}

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
	$("lable.upload").click(function(event) {
		/* Act on the event */
		$(this).parents(".input-group").find("input[type='file']").trigger('click');
	});
	$("input[type='file']").change(function(event) {
		/* Act on the event */
		var $this=$(this);
		// console.log(event);
		var file=event.target.files[0];
		// console.log(file);
		// console.log(file.type.match('image.*'));
		if (!file.type.match('image.*')) {
    		alert("请添加图片");
    		return false;
  		}
  		 var reader = new FileReader();
  		 reader.readAsDataURL(file);
  		 // console.log(reader);
  		 // alert("添加成功");
  		 $(".modal").find('.modal-body').text("添加成功");
  		 $("[data-toggle='modal']").trigger('click'); 
  		 reader.onload=function(){
  		 	// console.log(reader.result);
  		 	// $this.siblings('input[type=text]').val(reader.result);
  		 };
	});
	$(".table tr").mouseover(function(event) {
		/* Act on the event */
		$(this).find(".tools").css("display","block");
	});	
	$(".table tr").on('mouseout', function(event) {
		/* Act on the event */
		$(this).find(".tools").hide();
	});
	$(".fa.fa-trash-o").click(function(event) {
		/* Act on the event */
		$(this).parents("tr").css("display","none");
	});
})(jQuery);