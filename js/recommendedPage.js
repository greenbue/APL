/**
 * +--------------------------------------------------------------------+

	This code is mainly for the recommended Pages
	Note it uses AngularJS, the MVC pattern makes implementation fast
	(Though, I'm mainly using the Controller<-> View here)

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

	// Fills in information for the specific course/ Or goes back to the recommendedList
	$scope.currentCourse = function(course){
		if($scope.hideCourse){
			$scope.hideCourse = !$scope.hideCourse;
			$scope.title = "Recommended Courses"
			//Animation probs...
           	$timeout(function (){
    			$scope.hideRecommendedList = !$scope.hideRecommendedList;
			}, 180);
        }
        else{
        	$timeout(function (){
				$scope.hideCourse = !$scope.hideCourse;
			}, 180);
    		$scope.hideRecommendedList = !$scope.hideRecommendedList;
    		$scope.title = course.title;
			$scope.currentCourse.title = course.title;
			$scope.currentCourse.match = course.match;
			$scope.currentCourse.popularity = course.popularity;
			$scope.currentCourse.permission = course.permission;
			$scope.currentCourse.video = course.video;
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
	    	popularity: 1312,
	    	permission: true,
	    	video: 'http://www.youtube.com/embed/Lx7ycjC8qjE',
	    	description: '(Description for Swen425) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

	    },

	    {
	    	title: "SWEN421", 
	    	match: '85%',
	    	popularity: 232,
	    	permission: true,
	    	video: 'http://player.vimeo.com/video/63534746',
	    	description: '(Description for Swen421)  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	    },


	    {
	    	title: "SWEN999", 
	    	match: '10%',
	    	popularity: 13132,
	    	permission: true,
	    	video: 'https://player.vimeo.com/video/14396098',
	    	description: '(Description for the ultimate course) amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

		}  
	];




	// Activating the course should be simulated. This can be done by creating an "active" course page for this one. 

	$scope.removeCourse = function(){
		//There's probably a cleaner way to do this... But hey, it works.
		for(var i = 0; i< $scope.recommendedCourses.length; i++){
			if($scope.currentCourse.title == $scope.recommendedCourses[i].title){
				$scope.recommendedCourses[i].permission = false;
				//Okay, now the user is registered to the course...
				$scope.registeredCourses.push($scope.recommendedCourses[i]);

			}
		}
	}


	//These are the registered courses, once you removed some courses from the recommended page it should update the active courses
	$scope.registeredCourses = [];



	//Fake Button options, I better be more creative here...
	$scope.fakeButtonsSubject = ['Math','CompSci', 'Art', 'Law']
	$scope.fakeButtonsLevel = ['100','200','300','400','500']
	$scope.fakeKeyWords = ['These','are', 'my', 'keys']



	//There's jQuery remove/add of a bootstrap icon. Not compatable with my stuff unfortunately, But easy to fix!
	$scope.glyphicon = false;
	$scope.glyphiconToggle = function(){
		$scope.glyphicon = !$scope.glyphicon;
	}
	$scope.glyphiconClass = function(){
		//$scope.glyphicon = !$scope.glyphicon;
		if($scope.glyphicon){
			return "glyphicon-plus";
		}
		else{
			return "glyphicon-minus";
		}
	}


}])




//The Model
.directive("model", ['$rootScope', '$filter', function($rootScope, $filter){
      return function (scope, element, attrs) {

  	  }
 }])

// Apparently, can't watch youtube videos unless you go through a security check
.filter('trusted', ['$sce', function ($sce) {
   return $sce.trustAsResourceUrl;
}]);



 