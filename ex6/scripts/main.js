var app = angular.module('ex6', []);
app.controller('showController', function($scope){

     var x = $scope.dauVao;
	$scope.submit = function(){
		alert($scope.dauVao);
		window.alert("Sorry, please get more customers first.");
		}
});