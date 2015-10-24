var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/people', {
      templateUrl : 'app/templates/list_template.html',
      controller : 'listController'
	})
	.when('/details/:index', {
		templateUrl: 'app/templats/details_template.html',
		controller: 'ListController'
	})
         
                .when('/admin', {
            template: 'Yay, you are an admin! {{name}}',
            controller: 'AdminController',
            resolve: {
                message : function(){
                    return "Winner winner chicken dinner"
                }
            }
        })
        .otherwise({
            redirectTo: '/people'
        })
}])

