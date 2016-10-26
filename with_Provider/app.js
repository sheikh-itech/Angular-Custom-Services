app.controller('ctrl1', ['$scope', 'provider', function($scope, provider) {
	
	provider.setInfo('info1 from controller1');
	$scope.info1 = provider.getInfo();
	
	provider.setInfo('info2 from controller1');
	$scope.info2 = provider.getInfo();
}]);
app.controller('ctrl2', ['$scope', 'provider', function($scope, provider) {
	
	$scope.info1 = provider.getInfo();
	$scope.info2 = provider.getInfo();
	
	provider.setInfo('info3 from controller2');
	$scope.info3 = provider.getInfo();
	
	provider.setInfo('info4 from controller2');
	$scope.info4 = provider.getInfo();
}]);