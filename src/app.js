import angular from 'angular';

var app = angular.module('App', []);
var imageURL = 'https://picsum.photos/300/200/?random';

app.directive('randomImage', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<img src="{{imageURL}}" alt="" class="random-image" ng-click="changeImage()" />',
        link: function($scope, element){
            $scope.imageURL = imageURL;
        },
        controller: function($scope){
            $scope.changeImage = function(){
                $scope.imageURL = `${imageURL}&hash=` + Math.random();
            }
        }
    }
});


app.directive('validateMail', function() {
    function isValid(value){
        return /[^@]+@[^@.]+\.[^@]+/.test(value);
    }

    return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        template: '<input type="text" name="email" ng-model="validateInput">',
        link: function (scope, elm, attrs, ngModelCtrl) {
            ngModelCtrl.$parsers.unshift(function (viewValue) {
                ngModelCtrl.$setValidity('email', isValid(viewValue));
                return viewValue;
            });

            ngModelCtrl.$formatters.unshift(function (modelValue) {
                ngModelCtrl.$setValidity('email', isValid(modelValue));
                return modelValue;
            });

        }
    }

});

app.directive('loaderStatusButton', function(){

    return {
        restrict: 'E',
        replace: true,
        template: '<ng-include src="getTemplateUrl()"/>',
        link: function($scope, element){
            $scope.loaderStatus = true;
            $scope.toggleLoaderStatus = function(){
                $scope.loaderStatus = !$scope.loaderStatus;
            };
        },
        controller: function($scope){
            $scope.getTemplateUrl = function(){
                if ($scope.loaderStatus){
                    return '/tpls/loader-button.html';
                } else {
                    return '/tpls/loader-button-loading.html';
                }
            }
        }

    }

});