$('header, section').css("height", window.innerHeight);
//$('header, section, footer').css("width", window.innerWidth);

var lastScrollTop = 0;

var scrollToDiv = function(target){
	$('html, body').animate({
	    scrollTop: $(target).offset().top
	}, 1000);}