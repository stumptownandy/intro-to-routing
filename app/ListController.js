var app = angular.module("app");

app.controller('ListController', function($scope, DataService, $location){
	$scope.people = DataService.data;

	$scope.goTo = function(index){
		$location.url('/details/' + index);	
	}
});