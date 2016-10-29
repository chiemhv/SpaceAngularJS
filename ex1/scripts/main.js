var app = angular.module('myApp', []);

//<!-- part 1  -->
app.controller('aController', function($scope){
	$scope.name = "xin chào abc ";
});

//<!-- part 2  -->
app.controller('bController', function($scope){
	$scope.sinhvien={
		name : 'Sang',
		address : 'yên dũng số 2',
		spoin : '3'

		};
});