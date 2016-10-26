app.controller('ctrl1', ['$scope', 'factory', function($scope, factory) {
	
	factory.setInfo('info1 from controller1');
	$scope.info1 = factory.getInfo();
	
	factory.setInfo('info2 from controller1');
	$scope.info2 = factory.getInfo();
}]);
app.controller('ctrl2', ['$scope', 'factory', function($scope, factory) {
	
	$scope.info1 = factory.getInfo();
	$scope.info2 = factory.getInfo();
	
	factory.setInfo('info3 from controller2');
	$scope.info3 = factory.getInfo();
	
	factory.setInfo('info4 from controller2');
	$scope.info4 = factory.getInfo();
}]);