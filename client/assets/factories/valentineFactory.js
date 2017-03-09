app.factory('valentineFactory', ['$http', function($http) {

  function ValentineFactory(){
    this.sendValentine = function(valentine, callback){
    	$http.post('/valentines', valentine).then(function(data){
    		callback(data.data);
    	})
    };
    this.sentValentines = function(id, callback){
    	$http.get(`/valentines/from/${id}`).then(function(data){
    		callback(data.data);
    	})
    };
    this.receivedValentines = function(id, callback){
    	$http.get(`/valentines/to/${id}`).then(function(data){
    		callback(data.data);
    	})
    };
    this.getValentine = function(id, callback){
    	$http.get(`/valentines/${id}`).then(function(data){
    		callback(data.data);
    	})
    };
  }
  
  return new ValentineFactory();
}]);
