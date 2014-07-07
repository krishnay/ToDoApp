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
            {'title': 'to build a todo app','assignee' : 'krishna', 'done' : false}
         ];
         $scope.addTodo = function(){
          $scope.todos.push({'title' :$scope.newTodo, 'assignee' : $scope.newassigneetodo, 'done': false});
          $scope.newTodo = ''
          $scope.newassigneetodo = ''
         }
         $scope.clearCompleted = function(){
          $scope.todos = $scope.todos.filter(function(item){
            return !item.done
          });
         }
        }]);