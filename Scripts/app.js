var MoviesApp = angular.module('MoviesApp', []);

MoviesApp.controller('moviesCtrl', function($scope, $http) {
    // from local DB
    $http.get("movies.json").success(function(response) {
       $scope.movies = response.MovieList.Movies; 
    });
    
    // from online DB
    $scope.searchOnline = function(movieName) {
        $http.get("http://www.omdbapi.com/?t=" + movieName).success(function(response) {
            $scope.omdb_movie = response;
            console.log(response);
        });
    };
    
});