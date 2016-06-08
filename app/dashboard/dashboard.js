app.controller('DashboardController', ['$scope','$http',function($scope,$http) {

	$scope.Paises = [];

	$http({
	  method: 'GET',
	  url: 'https://restcountries.eu/rest/v1/all'
	}).then(function successCallback(response) {
			var obj = response.data;

			angular.forEach(obj, function(value, key) {

  				$scope.Paises.push({
	    		name: value.name,
	    		region: value.region,
	    		subregion: value.subregion,
	    		capital: value.capital,
	    		population: value.population,

	    		});

			});	    	

	  }, function errorCallback(response) {
	    	console.log(response);
	  });

}]);