/**
 * +--------------------------------------------------------------------+

	This code is mainly for the recommended Pages
	Note it uses AngularJS, the MVC pattern makes implementation fast

	The view: recommendedPage.html
	The Controller: MyCtrl
	The model: model

 * +--------------------------------------------------------------------+
 *
 */

      
angular.module("myapp", ['angular.filter', 'ngRoute'])
 //The main controller         
.controller("MyCtrl", ['$scope', '$filter', '$rootScope', function($scope, $filter, $rootScope) {
	
	//Default Page title:
	$scope.title = "Recommended Courses"

	//Change to course name
	//fill the <div> specific for 
	$scope.changeTitle = function(courseName){

		$scope.title = courseName;

	}


	//Courses list
	$scope.recommendedCourses = [
	    {
	    	title: "SWEN425",
	    	match: '90%',
	    	popularity: '1312 Likes',
	    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

	    },

	    {
	    	title: "SWEN421", 
	    	match: '85%',
	    	popularity: '232 Likes',
	    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	    },


	    {
	    	title: "A Fun Course", 
	    	match: '30%',
	    	popularity: '13132 Likes',
	    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

		}
	    
	];





}])




//The Model
.directive("model", ['$rootScope', '$filter', function($rootScope, $filter){
      return function (scope, element, attrs) {

  	  }
 }])



 