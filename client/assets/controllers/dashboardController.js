
app.controller('dashboardController', ['$scope','userFactory', 'valentineFactory', '$location', '$cookies', function($scope, userFactory, valentineFactory, $location, $cookies) {

	var currentUser = $cookies.getAll();
	$scope.user = currentUser;
	var allUsers;

	if(!currentUser.id || !currentUser.name){
		$location.url('/login');
	}

	sentValentines = function(){
		valentineFactory.sentValentines(currentUser.id, function(data){
			$scope.sentValentines = data;
			otherUsers();
		})
	}
	sentValentines();

	receivedValentines = function(){
		valentineFactory.receivedValentines(currentUser.id, function(data){
			$scope.receivedValentines = data;
			otherUsers();
		})
	}
	receivedValentines();

	newValentines = function(){
		userFactory.allUsers(function(data){
			allUsers = data;
			console.log('allusers', data);
			otherUsers();
		})
	}
	newValentines();

	otherUsers = function(){
		if($scope.sentValentines && allUsers){
			currentUser = $cookies.getAll();
			for(var i=0; i<allUsers.length; i++){
				for(var j=0; j<$scope.sentValentines.length; j++){
					if(allUsers[i]._id == $scope.sentValentines[j]._to._id){
						allUsers.splice(i, 1);
					}
				}
			}
			for(var i=0; i<allUsers.length; i++){
				if(allUsers[i]._id == currentUser.id){
					allUsers.splice(i, 1);
				}
			}
			$scope.otherUsers = allUsers;
		}
	}

	$scope.logout = function(){
		$cookies.remove('id');
		$cookies.remove('name');
		$location.url('/login');
	}

}]);