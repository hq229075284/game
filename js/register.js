var reg_for_word = new RegExp("[asd]", "ig");
var reg_for_email = new RegExp("", "ig");
var reg_for_check;

var username_input=$(".username input[type='text']");
var email_input=$(".email input[type='email']");
var password_input=$(".password input[type='password']");
var checkpassword_input=$(".check_password input[type='password']");

var username_tooltip=$(".username [data-toggle='tooltip']");
var email_tooltip=$(".email [data-toggle='tooltip']");
var password_tooltip=$(".password [data-toggle='tooltip']");
var checkpassword_tooltip=$(".check_password [data-toggle='tooltip']");

$(".symbol").click(function() {
	// console.log($("input[type='text']"));
	console.log("click");
	$(this).siblings('input').val("");
});

username_input.focus(function(event) {
	console.log("focus");
	if (this.value === '用户名/Email')
		this.value = '';
}).blur(function(event) {
	console.log("blur");
	if (this.value === '')
		this.value = '用户名/Email';
}).keyup(function(event) {
	if (reg_for_word.test($(this).val())) {
		username_tooltip.tooltip('show');
	} else {
		username_tooltip.tooltip('hide');
	}

});

email_input.focus(function(event) {
	console.log("focus");
	if (this.value === 'han@qq.com')
		this.value = '';
}).blur(function(event) {
	console.log("blur");
	if (this.value === '')
		this.value = 'han@qq.com';
}).keyup(function(event) {
	if (reg_for_email.test($(this).val())) {
		email_tooltip.tooltip('show');
	} else {
		email_tooltip.tooltip('hide');
	}

});

password_input.focus(function(event) {
	this.value = '';
}).blur(function(event) {
	if (this.value === '')
		this.value = 'PASSWORD';
}).keyup(function(event) {
	if (reg_for_word.test($(this).val())) {
		password_tooltip.tooltip('show');
	} else {
		password_tooltip.tooltip('hide');
	}
});

checkpassword_input.focus(function(event) {
	this.value = '';
	if(password_input.val()!="PASSWORD"){
		console.log(password_input.val());
		reg_for_check=new RegExp(password_input.val(),"ig");
	}
}).blur(function(event) {
	if (reg_for_check) {
		if (reg_for_check.test($(this).val())) {
			checkpassword_tooltip.tooltip('hide');
		} else {
			checkpassword_tooltip.tooltip('show');
		}
	}else{
		checkpassword_tooltip.tooltip('show');
	}
	
});



$("input[type='submit']").click(function(event) {
	event.preventDefault();
	$.ajax({
			url: '/path/to/file',
			type: 'post',
			dataType: 'json',
			data: {
				username: $(".p1 input[type='text']").val(),
				password: $(".p1 input[type='password']").val()
			},
		})
		.done(function() {
			console.log("success");
			$("form").submit();
		})
		.fail(function(data) {
			console.log("error");
			// console.log(data);
			$(".message").css("visibility", "visible");
		})
		.always(function() {
			console.log("complete");
		});


});