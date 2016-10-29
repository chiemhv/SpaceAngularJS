var app = angular.module('ex4', []);
//---- controller 1 
app.controller('showController', function($scope){
var students = [{name:'Mary Contrary', id:'1'}, 
				{name:'Jack Sprat', id:'2'}, 
				{name:'Jill Hill', id:'3'}
				]; 
$scope.students = students;
});


