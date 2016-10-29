var myapp = angular.module('ex5',[]);
myapp.controller('showController', function($scope){

});
myapp.controller('abcController', function($scope){
	$scope.items =[
    {title: 'cam ', quantily: 8, price: 3.9},
    {title: 'chuoi', quantily: 9, price: 21},
    {title: 'cam', quantily: 12, price: 98}
	];
	$scope.remove = function(index){
		$scope.items.splice(index, 1); // deo hiểu hàm này làm gì
	}
});