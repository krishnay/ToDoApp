'use strict';

/**
 * @ngdoc function
 * @name toDoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toDoAppApp
 */
angular.module('toDoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
