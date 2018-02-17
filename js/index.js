$('#nav li a').on('click', function() {
	console.log("Clicked");
	$('#nav li a.active').removeClass('active');
	$(this).addClass('active');
});