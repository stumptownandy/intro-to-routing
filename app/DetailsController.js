app.controller('DetailsController', 
               function($scope, $routeParams, DataService){
     var idx = $routeParams.myIndexId;
     
     $scope.detailPerson = DataService.data[idx];
});