//		Sfire.js by Qubex_		
//  FOLLOW ME ON TWITTER: @Qubex_
//	Edit this script as you prefer. If you have suggestion, etc. contribute on Github {[https://github.com/QUB3X/sfire.git]}
$.fn.sfireOpen = function(){
	$('.sfire-menu').show();
};
$.fn.sfireClose = function(){
	$('.sfire-menu').hide();
};
$.fn.sfireToggle = function(){
	$('.sfire-menu').slideToggle();
};
// the tasty code
$.fn.sfireBtn = function(animation_name){
	animation_full = "animated" + " " + animation_name;
	var isClicked = false;
	$(this).click(function(){
		$('.sfire-bar').addClass(animation_full);
		$('.sfire-bar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass(animation_full);
		});
		if(isClicked === false){
			$('.sfire-menu').show().addClass("animated flipInX");
			$('.sfire-menu').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass("animated flipInX");
			});
			isClicked = true;
			return;
		} else {
			$('.sfire-menu').addClass("animated flipOutX");
			$('.sfire-menu').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass("animated flipOutX").hide();
			});
			isClicked = false;
			return;
		}
	});
};
// simply add stuff that nobody want to write. I'm too lazy. Mom always says that.
$(document).ready(function(){
	$('.sfire-btn').append('<div class="sfire-bar sfire-bar-1"></div><div class="sfire-bar sfire-bar-2"></div><div class="sfire-bar sfire-bar-3"></div>')
	$('.sfire-menu').hide();
});