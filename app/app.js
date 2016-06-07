var app = angular.module('AngularTemplate', [ 
		'ngRoute'
	]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        
        .when('/Index', {
            templateUrl : 'app/main/main.html',
            controller  : 'EventsController'       
    	})
    	.when('/Dashboard', {
            templateUrl : 'app/dashboard/dashboard.html',
            controller  : 'DashboardController'
		});
}]);