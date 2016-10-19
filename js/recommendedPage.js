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

      
angular.module("myapp", ['angular.filter', 'ngRoute', 'ngAnimate'])
 //The main controller         
.controller("MyCtrl", ['$scope', '$filter', '$rootScope', '$timeout', function($scope, $filter, $rootScope, $timeout) {
	
	//Default Page title:
	$scope.title = "Recommended Courses"

	// The currently selected course:
	$scope.currentCourse = {};

	//Changes the page title:
	$scope.changeTitle = function(courseName){
		$scope.title = courseName;
	}

	// Fills in information for the specific course
	$scope.currentCourse = function(course){
		console.log($scope.hideCourse)
		if($scope.hideCourse){
			$scope.hideCourse = !$scope.hideCourse;
           	$timeout(function (){
    			$scope.hideRecommendedList = !$scope.hideRecommendedList;
			}, 180);
			        	$scope.title = "Recommended Courses"

			
        }
        else{
			$scope.hideCourse = !$scope.hideCourse;
    		$scope.hideRecommendedList = !$scope.hideRecommendedList;
    		$scope.title = course.title;
			$scope.currentCourse.title = course.title;
			$scope.currentCourse.match = course.match;
			$scope.currentCourse.popularity = course.popularity;
			$scope.currentCourse.description = course.description;
        }
		
   
	}


	//Checks whether a course was selected, if so it hides the recommended list
	$scope.hideCourse = false;
	//Checks whether the course list is present. Mainly here due to css3 issue..
	$scope.hideRecommendedList = true;


	//Courses list
	$scope.recommendedCourses = [
	    {
	    	title: "SWEN425",
	    	match: '90%',
	    	popularity: '1312 Likes',
	    	permission: true,
	    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

	    },

	    {
	    	title: "SWEN421", 
	    	match: '85%',
	    	popularity: '232 Likes',
	    	permission: true,
	    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	    },


	    {
	    	title: "A Fun Course", 
	    	match: '30%',
	    	popularity: '13132 Likes',
	    	permission: false,
	    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

		}
	    
	];





}])




//The Model
.directive("model", ['$rootScope', '$filter', function($rootScope, $filter){
      return function (scope, element, attrs) {

  	  }
 }])



 