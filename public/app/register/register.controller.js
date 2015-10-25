(function() {
	'use strict';

	angular.module('app').controller('Register', Register);

	function Register($scope, $http, $state, $rootScope) {
		//this is a controller
		$scope.register = function(user) {
			console.log(user);
			if(user.password == user.password2) {
				$http.post("/register", user).success(function(response) {
					console.log(response);
					$rootScope.currentUser = response;
					$state.go('home');
				});
			} else {
				console.log("passwords don't match")
			}

		}
	}
})();