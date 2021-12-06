var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http){

        $scope.getAdvice = function() {

            $http.get('https://api.adviceslip.com/advice').
            then(function(response) {
                $scope.advice = '"' + response.data.slip.advice + '"';
            });
        }

    });