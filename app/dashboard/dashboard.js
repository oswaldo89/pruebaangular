app.controller('DashboardController', ['$scope','$http','DTOptionsBuilder','DTColumnBuilder',function($scope,$http,DTOptionsBuilder,DTColumnBuilder) {

		$scope.dtOptions = DTOptionsBuilder.fromSource('https://restcountries.eu/rest/v1/all')
        .withPaginationType('full_numbers');

    	$scope.dtColumns = [
            DTColumnBuilder.newColumn('name').withTitle('NOMBRE'),
            DTColumnBuilder.newColumn('region').withTitle('REGION'),
            DTColumnBuilder.newColumn('subregion').withTitle('SUBREGION'),
            DTColumnBuilder.newColumn('capital').withTitle('CAPITAL'),
            DTColumnBuilder.newColumn('population').withTitle('POPULATION')
        ];

}]);