(function(){
  angular.module('myApp')
  .controller('courseCtrl', function($rootScope,  $scope, $http, courseDataSrvc, $routeParams, $location){
      //console.log(this);
      //console.log($scope);
      //console.log($rootScope);

      if($routeParams.id){
        courseDataSrvc.getCourseById($routeParams.id)
        .then(function(data){
          $scope.courseToEdit = data;
        }, handleError);
      }

      $scope.loadCourses = function(){
        $scope.courses = [];
        courseDataSrvc.getCourses().then(function(dataCourses){
          $scope.courses = dataCourses;
        }, handleError);
      };
      $scope.loadCourses();

      $scope.addCourse = function(course){
        courseDataSrvc.postCourse(course).then(function(dataCourse){
          $scope.loadCourses();
          $location.path('/courses');
        }, handleError);
        $scope.course = {};
      };

      $scope.toggleEditCourse = function(flag, course){
        $scope.toggleEditCourseView = flag;
        if(flag){
          $scope.courseToEdit = angular.copy(course);
        }
        else{
          $scope.courseToEdit = null;
          $scope.course = null;
          $location.path('/courses');
        }
      };

      $scope.updateCourse = function(courseToEdit){
        courseDataSrvc.updateCourse(courseToEdit).then(function(data){
          $scope.loadCourses();
          $location.path('/courses');
        }, handleError);
      };

      $scope.deleteCourse = function(course){
        courseDataSrvc.deleteCourse(course).then(function(data){
          $scope.loadCourses();
        }, handleError);
      };

      function handleError(error){
        //console.log(error);
      };

    });

})();
