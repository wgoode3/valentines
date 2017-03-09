app.factory('userFactory', ['$http', function($http) {

  function UserFactory(){
    this.login = function(user,callback){
      $http.post('/users', user).then(function(data){
        console.log('in the backend', data);
        callback(data.data);
      });
    }
    this.getUser = function(id, callback){
    	$http.get(`/users/${id}`).then(function(data){
    		callback(data.data);
    	})
    }
    this.allUsers = function(callback){
      $http.get('/users').then(function(data){
        callback(data.data);
      })
    }
  }

  return new UserFactory();
}]);

