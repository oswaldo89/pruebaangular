app.controller('EventsController', ['$scope','$location',function($scope, $location) {
	$scope.goDashboard= function(){
		$location.path( "/Dashboard" );
	}
	$scope.goIndex= function(){
		$location.path( "/Index" );
	}
}]);