'use strict';

angular.module('blogList').
	component('blogList', {
		template : "	<h1>Hello, {{name}}!</h1><input type='text' ng-model='name'><div class=''><h1> {{ title }}</h1><button ng-click='someClickTest()'>Click ME!</button></div>",
		controller : function($scope){
			console.log("In BlogListController")
			$scope.title = "Title Here"
			$scope.clicks = 0
			$scope.someClickTest = function(){
				console.log("Clicked!");
				$scope.title = "Clicked!"
				$scope.clicks += 1
				$scope.title = "Clicked " + $scope.clicks + " times"
			}
		}
	});
	// controller('BlogListController', function($scope){
	// 	console.log("In BlogListController")
	// 	$scope.title = "Title Here"
	// 	$scope.clicks = 0
	// 	$scope.someClickTest = function(){
	// 		console.log("Clicked!");
	// 		$scope.title = "Clicked!"
	// 		$scope.clicks += 1
	// 		$scope.title = "Clicked " + $scope.clicks + " times"
	// 	}
	// }); 