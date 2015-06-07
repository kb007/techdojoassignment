'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication','Articles',
	function($scope, Authentication, Articles) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

	}


]);