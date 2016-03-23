var patt=new RegExp("[asd]","ig");




$(".symbol").click(function() {
	// console.log($("input[type='text']"));
	console.log("click");
	console.log($("input[type='text']").val());
	$("input[type='text']").val("");
});

$(".p1 input[type='text']").focus(function(event) {
	console.log("focus");
	if (this.value === '用户名/Email')
		this.value = '';
}).blur(function(event) {
	console.log("blur");
	if (this.value === '')
		this.value = '用户名/Email';
}).keyup(function(event) {
	if(patt.test($(this).val()))
	{
		$(".username [data-toggle='tooltip']").tooltip('show');
	}else{
		$(".username [data-toggle='tooltip']").tooltip('hide');
	}

});


$(".p1 input[type='password']").focus(function(event) {
		this.value = '';
}).blur(function(event) {
	if (this.value === '')
		this.value = 'PASSWORD';
}).keyup(function(event) {
	if(patt.test($(this).val()))
	{
		$(".password [data-toggle='tooltip']").tooltip('show');
	}else{
		$(".password [data-toggle='tooltip']").tooltip('hide');
	}
});

$("input[type='submit']").click(function(event) {
	event.preventDefault();
	$.ajax({
		url: '/path/to/file',
		type: 'post',
		dataType: 'json',
		data: {username: $(".p1 input[type='text']").val(),password:$(".p1 input[type='password']").val()},
	})
	.done(function() {
		console.log("success");
		$("form").submit();
	})
	.fail(function(data) {
		console.log("error");
		// console.log(data);
		$(".message").css("visibility","visible");
	})
	.always(function() {
		console.log("complete");
	});
	
	
});