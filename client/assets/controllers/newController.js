app.controller('newController', ['$scope', 'userFactory', 'valentineFactory', '$location', '$cookies', '$routeParams', function($scope, userFactory, valentineFactory, $location, $cookies, $rParams) {

	var currentUser = $cookies.getAll();
	$scope.user = currentUser;
	$scope.valentine = {};
	
	if(!currentUser.id || !currentUser.name){
		$location.url('/login');
	}

	getUser = function(){
		userFactory.getUser($rParams.id, function(user_to){
			$scope.user_to = user_to
		})
	}
	getUser();

	$scope.sendValentine = function(id){
		$scope.valentine._to = id;
		$scope.valentine._from = currentUser.id;
		console.log('we are sending', $scope.valentine);
		valentineFactory.sendValentine($scope.valentine, function(data){
			if(data.errors){
				console.log('errors are', data.errors);
				$scope.errors = data.errors.message;
			}else{
				console.log('data is', data);
				$location.url('/dashboard');
			}
		})
	}

	$scope.logout = function(){
		$cookies.remove('id');
		$cookies.remove('name');
		$location.url('/login');
	}

}]);