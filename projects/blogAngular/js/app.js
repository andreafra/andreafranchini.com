(function(){
	var app = angular.module('blog', ['ngSanitize']);
	
	// Load blog basic information (name, URL, motd...)
	app.controller('BlogInfoController', [ '$http', function($http) {
		var blog = this;
		blog.info = [ ];
		$http.get('bloginfo.json').success(function(data) {
			blog.info = data.blogInfo;
		});
	}]);
	
	app.controller('PostController', [ '$http', function($http) {
		var post = this;
		post.info = [ ];
		$http.get('posts.json').success(function(data) {
			post.info = data.posts;
		});
	}]);
	
	app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	
}) ();