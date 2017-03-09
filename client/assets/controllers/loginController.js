app.controller('loginController', ['$scope','userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies) {

	$scope.login = function(){
		userFactory.login($scope.user, function(data){
			console.log(data)
			if(data.errors){
				console.log('errors', data)
				$scope.errors = data.errors;
			}else{
				$cookies.put('id', data._id);
				$cookies.put('name', data.name);
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