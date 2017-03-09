app.controller('valentineController', ['$scope', 'valentineFactory', '$location', '$cookies', '$routeParams', function($scope, valentineFactory, $location, $cookies, $rParams) {

	var currentUser = $cookies.getAll();
	$scope.user = currentUser;
	$scope.valentine = {};

	if(!currentUser.id || !currentUser.name){
		$location.url('/login');
	}

	getValentine = function(){
		console.log($rParams.id)
		valentineFactory.getValentine($rParams.id, function(data){
			$scope.valentine = data;
		})
	}
	getValentine()

	$scope.logout = function(){
		$cookies.remove('id');
		$cookies.remove('name');
		$location.url('/login');
	}

}]);