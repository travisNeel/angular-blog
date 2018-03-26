'use strict';

angular.module('blogList').
	component('blogList', {
		// template : "	<h1>Hello, {{name}}!</h1><input type='text' ng-model='name'><div class=''><h1> {{ title }}</h1><button ng-click='someClickTest()'>Click ME!</button></div>",
		templateUrl : "./templates/blog-list.html",
		controller : function($scope){
			var blogItems = [
				{title : "Astrophysics for People in a Hurry", id : 1, description : "As this book elegantly touches on the cutting edge of many topics of Astrophysics, this book will make you feel small and ponder your own existence."},
				{title : "Deception Point", id : 2, description : "A supercomputer that can render any password useless. Whether or not this is a tool or a weapon just depends on who is using it in this suspensful thriller"},
				{title : "Origin", id : 3, description : "Breaking scientific discovery invalidates many religious beleifs shared by people all over the world."},
				{title : "Fire and Fury", id : 4, description : "About Donald Trump being an ass."},

			]
			$scope.items = blogItems
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
