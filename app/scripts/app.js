'use strict';

/**
 * @ngdoc overview
 * @name toDoAppApp
 * @description
 * # toDoAppApp
 *
 * Main module of the application.
 */
angular.module('ToDo', [])
        .controller('todoController',['$scope', function($scope){
         $scope.todos =[
            {'title': 'to build a todo app', 'done' : false}
         ];
         $scope.addTodo = function(){
          $scope.todos.push({'title' :$scope.newTodo, 'done': false})
          $scope.newTodo = ''
         }
         $scope.clearCompleted = function(){
          $scope.todos = $scope.todos.filter(function(item){
            return !item.done
          })
         }
        }]);