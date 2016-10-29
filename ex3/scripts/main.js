var app = angular.module('myApp', []);
app.controller('showController', function($scope){
	$scope.student = {
		name : 'ha văn chiêm',
		age : '12',
		address : 'tp.bắc giang',
		point : '1000'
	};
});