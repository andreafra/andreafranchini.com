(function(){
	var app = angular.module('view', [ ]);

	app.controller("PanelController", function(){
  		this.tab = 1;
		this.selectTab = function(setTab) {
			if(setTab===true) {
				this.tab = tab - 1;
				console.log(tab);
			} else {
				this.tab = tab + 1;
				console.log(tab);
			}
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

	});

}) ();

$('#greets').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$('#title-1').addClass('bounceInDown').removeClass('hidden');
	$('#title-1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#title-2').addClass('fadeIn').removeClass('hidden');
		$('#title-2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('.left-button, .right-button').addClass('fadeIn').removeClass('hidden');
			
		});
	});
});
//tooltip
$('.more-info').tooltip();
