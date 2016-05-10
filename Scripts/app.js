var MoviesApp = angular.module('MoviesApp', []);

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