var MoviesApp = angular.module('MoviesApp', ['ngRoute']);

MoviesApp.config(function($routeProvider) {
$routeProvider
        .when('/comedy', {
            templateUrl : '/partials/comedy.html',
            controller  : 'comedyCtrl',
            controllerAs: 'comedy'
        })
        .when('/action', {
            templateUrl : '/partials/action.html',
            controller  : 'actionCtrl',
            controllerAs: 'action'
        })
        .when('/drama', {
            templateUrl : '/partials/drama.html',
            controller  : 'dramaCtrl',
            controllerAs: 'drama'
        })
        .otherwise({
            redirectTo: '/'
        });
    
});

MoviesApp.controller('comedyCtrl', function($scope) {
    
});

MoviesApp.controller('actionCtrl', function($scope) {

});

MoviesApp.controller('dramaCtrl', function($scope) {

});

MoviesApp.controller('moviesCtrl', function($scope, $http) {
    // In future, will be taken from DB
    $http.get("movies.json").success(function(response) {
       $scope.movies = response.MovieList.Movies; 
    });
});