(function() {
	'use strict';

	angular.module('app').config(config);

	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('login', {
				url:'/login',
				templateUrl:'app/login/login-partial.html',
				controller:'Login',
			})
			.state('register', {
				url:'/register',
				templateUrl:'app/register/register-partial.html',
				controller:'Register'
			})
			.state('home', {
				url:'/home',
				templateUrl:'app/home/home-partial.html',
				controller:'Home',
				resolve: { authenticate: authenticate }
			});

		function authenticate($q, $timeout, $http, $state, $rootScope) {
			var deferred = $q.defer();

		    $http.get('/loggedin').success(function(user)
		    {
		        $rootScope.errorMessage = null;
		        // User is Authenticated
		        if (user !== '0')
		            deferred.resolve();
		        // User is Not Authenticated
		        else
		        {
		            
		            deferred.reject();
		            $state.go('login');
		        }
		    });
		    
    		return deferred.promise;
		}
		
	}
})();