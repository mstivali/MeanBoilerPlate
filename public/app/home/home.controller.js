(function() {
	'use strict';

	angular.module('app').controller('Home', Home);

	function Home($scope, $http) {
		//profile controller
		$http.get("/rest/users")
		.success(function(response) {
			$scope.users = response;
		});
	}
})();