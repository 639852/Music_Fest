$('.burger').on('click', function(event) {
	event.preventDefault;
	$(this).toggleClass('active');
	$('.burger_content').toggleClass('active_content');
	$('body').toggleClass('lock');
});