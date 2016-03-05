app.controller('listController', 
               function($scope, DataService, $location){
    $scope.people = DataService.data;
    
    $scope.goTo = function(index){
        $location.url('/details/' + index);
    }
});