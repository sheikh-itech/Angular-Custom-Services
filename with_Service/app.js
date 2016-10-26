app.controller('ctrl1', ['$scope', 'service', function($scope, service) {
	
	service.setInfo('info1 from controller1');
	$scope.info1 = service.getInfo();
	
	service.setInfo('info2 from controller1');
	$scope.info2 = service.getInfo();
}]);
app.controller('ctrl2', ['$scope', 'service', function($scope, service) {
	
	$scope.info1 = service.getInfo();
	$scope.info2 = service.getInfo();
	
	service.setInfo('info3 from controller2');
	$scope.info3 = service.getInfo();
	
	service.setInfo('info4 from controller2');
	$scope.info4 = service.getInfo();
}]);