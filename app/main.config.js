(function(){
  var appName = 'myApp', requires = ['ngRoute'];
  var myApp = angular.module(appName,requires);
  myApp.config(function($routeProvider){
    $routeProvider
    .when('/courses', {
      templateUrl : 'app/modules/courses/partials/course_list',
      controller : 'courseCtrl'
    })
    .when('/course/add', {
      templateUrl : 'app/modules/courses/partials/add_course',
      controller : 'courseCtrl'
    })
    .when('/course/edit/:id',{
      templateUrl : 'app/modules/courses/partials/edit_course',
      controller : 'courseCtrl'
    })
    .when('/practice', {
      templateUrl : 'app/modules/practice/practice',
      controller : 'practiceCtrl'
    })
    .otherwise({
      redirectTo  : '/courses'
    })
  });
})();
