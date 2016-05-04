mainApp.controller('HomeController', ['$scope','$http', function($scope,$http) {
	// Simple GET request example:
	$http({
	  method: 'GET',
	  url: 'users.json'
	}).then(function successCallback(response) {
		//console.log(response.data);
		$scope.users = response.data;
	  }, function errorCallback(response) {
		//console.log('yo');
	  });
}
]);