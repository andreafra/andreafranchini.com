// var pages = 3;
// var page = 0;
// $('.left-button').click(function(){
// 	if(page === 0) {
// 		page = pages;
// 				console.log(page);
// 	} else {
// 		page = page - 1;
// 				console.log(page);

// 	}
// });
// $('.right-button-button').click(function(){
// 	if(page === 0) {
// 		page = pages;
// 				console.log(page);

// 	} else {
// 		page = page + 1;
// 				console.log(page);

// 	}
// });
//animations
$('#greets').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$('#title-desc-1').addClass('bounceInDown').removeClass('hidden');
	$('#title-desc-1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#title-desc-2').addClass('fadeIn').removeClass('hidden');
		$('#title-desc-2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('.left-button, .right-button').addClass('fadeIn').removeClass('hidden');
			
		});
	});
});
//tooltip
$('.more-info').tooltip();
