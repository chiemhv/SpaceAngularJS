var mApp = angular.module('myApp', []);
mApp.controller('eController', function($scope){
	$scope.test ="chi";
	$scope.sinhvien = [
		{ten : 'va ', tuoi :24},
		{ten : 'ahgoaig', tuoi: 12},
		{ten : 'oahgaoge', tuoi: 14},
		{ten : 'haogiag', tuoi:23}
			];
});
