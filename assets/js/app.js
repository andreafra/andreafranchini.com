$('#greets').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$('#title-desc-1').addClass('bounceInDown').removeClass('hidden');
	$('#title-desc-1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#title-desc-2').addClass('fadeIn').removeClass('hidden');
		$('#title-desc-2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('.left-button, .right-button').addClass('fadeIn').removeClass('hidden');
			
		});
	});
});
$('.more-info').tooltip();